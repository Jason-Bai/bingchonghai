fs          = require 'fs'
path        = require 'path'
config      = require '../../configs'
errors      = require '../../lib/errors'
U           = require '../../lib/utils'
decompress  = require '../../lib/decompress-zip'

{_, moment} = U

helper =
  # 处理上传文件
  # uploadDir 是指定上传文件存储的路径
  # zipOpt 是压缩包的一些设定
  # hook 是指处理完的信息存放在哪? 不指定 hook 则直接存储在 req.params
  # 存储的信息包括
  #   path: 'xxxx', 最终文件存储的完成路径
  #   name: 'xxxx', 文件名称
  #   bytes: 212, 文件字节数
  #   extension: 'xxx', 文件的后缀
  handleFile: (opts, hook) ->

    {blackList, allowUnzip, unzipMaxFileNum, dir, whiteList} = opts

    notFound = errors.notFound
    error =
      upload: notFound('Please choose file', 'file')
      receive: notFound('Receive file error', 'file')
      move: notFound('Move file error', 'file')
      unzip: notFound('Unzip file error', 'file')
      extension: notFound('File extension error', 'file')
      maxFileNum: notFound("Unzip include less then #{unzipMaxFileNum}", 'file')
      mkdir: notFound("Make dir error", 'file')
      nouploaded: notFound('Please set uploaded', 'file')

    (req, res, next) ->

      today = moment().format(config.dateFormat)

      obj = if hook then req.hooks[hook] else req.params

      # 只处理一个文件
      file = _.values(req.files)[0]
      return next(error.upload) unless file

      # 释放file上的一些属性，计算文件的后缀
      {name, size} = file
      extname = path.extname(name).toLowerCase()

      # 后缀黑名单检测
      return next(error.extension) if blackList and (extname in blackList)

      # 后缀白名单检测
      return next(error.extension) if whiteList and (extname not in whiteList)

      # 计算文件应该的存储路径
      filename = U.randStr(20)
      savePath = "#{today}/#{filename}#{extname}"
      dest = "#{dir}/#{savePath}"
      dirname = path.dirname(dest)

      unless fs.existsSync(dirname)
        try
          fs.mkdirSync(dirname)
        catch e
          console.error(e, e.message, e.stack)
          return next(error.mkdir)
      return next(error.receive) unless fs.existsSync(file.path)
      # 移动文件
      try
        fs.renameSync(file.path, dest)
      catch e
        console.error(new Date, e, e.stack)
        return next(error.move)

      obj.path = savePath
      obj.name = name
      obj.bytes = size
      obj.extension = extname

      isZip = extname is '.zip'

      return next() unless (isZip and allowUnzip and req.params.unzip is 'yes')
      decompress.list(dest, (err, files) ->
        if err
          console.error(new Date, err, err.stack)
          return next(error.unzip)
        if unzipMaxFileNum and (files.length > unzipMaxFileNum)
          return next(error.maxFileNum)
        files = _.filter(files, (x) -> x.substr(-1) isnt '/')
        if blackList
          if _.any(files, (x) -> path.extname(x).toLowerCase() in blackList)
            return next(error.extension)

        # 解压缩
        decompress.extract(dest, {
          path: "#{dirname}/#{filename}"
        }, (err) ->
          if err
            console.error(new Date, err, err.stack)
            return next(error.unzipExtract)
          obj.path = "#{today}/#{filename}/"
          obj.extension = "/"
          next()
        )
      )

module.exports = helper


