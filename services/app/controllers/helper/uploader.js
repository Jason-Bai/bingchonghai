const fs         = require('fs');
const path       = require('path');
const config     = require('../../configs');
const errors     = require('../../lib/errors');
const U          = require('../../lib/utils');
const decompress = require('../../lib/decompress-zip');

const { _, moment, } = U;

/**
 *  处理上传文件
 *  uploadDir 是指定上传文件存储的路径
 *  zipOpt 是压缩包的一些设定
 *  hook 是指处理完的信息存放在哪? 不指定 hook 则直接存储在 req.params
 *  存储的信息包括
 *    path: 'xxxx', 最终文件存储的完成路径
 *    name: 'xxxx', 文件名称
 *    bytes: 212, 文件字节数
 *    extension: 'xxx', 文件的后缀
 **/
function handleFile(opts, hook) {
  const { blackList, allowUnzip, unzipMaxFileNum, dir, whiteList } = opts

  const notFound = errors.notFound;

  const error = {
    upload: notFound('Please choose file', 'file'),
    receive: notFound('Receive file error', 'file'),
    move: notFound('Move file error', 'file'),
    unzip: notFound('Unzip file error', 'file'),
    extension: notFound('File extension error', 'file'),
    maxFileNum: notFound("Unzip include less then #{unzipMaxFileNum}", 'file'),
    mkdir: notFound("Make dir error", 'file'),
    nouploaded: notFound('Please set uploaded', 'file'),
  };

  return (req, res, next) => {

    const today = moment().format(config.dateFormat);

    let obj;

    if (hook) {
      obj = req.hooks[hook];
    } else {
      obj = req.params;
    }

    // 只处理一个文件
    const file = _.values(req.files)[0];

    if (!file) {
      return next(error.upload);
    }

    // 释放file上的一些属性，计算文件的后缀
    const { name, size } = file
    const extname = path.extname(name).toLowerCase();

    if (blackList && (extname in blackList)) {
      // 后缀黑名单检测
      return next(error.extension);
    }

    if (whiteList && !(extname in whiteList)) {
      // 后缀白名单检测
      return next(error.extension);
    }

    // 计算文件应该的存储路径
    const filename = U.randStr(20)
    const savePath = `${today}/${filename}${extname}`
    const dest = `${dir}/${savePath}`
    const dirname = path.dirname(dest)

    if (!fs.existsSync(dirname)) {
      try {
        fs.mkdirSync(dirname);
      } catch(e) {
        console.error(e, e.message, e.stack);
        return next(error.mkdir);
      }
    }

    if (!fs.existsSync(file.path)) {
      return next(error.receive);
    }

    // 移动文件
    try {
      fs.renameSync(file.path, dest);
    } catch(e) {
      console.error(new Date, e, e.stack);
      return next(error.move);
    }

    obj.url = savePath
    obj.name = name
    obj.bytes = size
    obj.extension = extname

    const isZip = extname === '.zip';

    if (!(isZip && allowUnzip && req.params.unzip === 'yes')) {
      return next();
    }

    next();

    /*
    decompress.list(dest, (err, files) => {
      if (err) {
        console.error(new Date, err, err.stack);
        return next(error.unzip);
      }
      if (unzipMaxFileNum && (files.length > unzipMaxFileNum)) {
        return next(error.maxFileNum);
      }
      files = _.filter(files, (x) => x.substr(-1) !== '/');
      if (blackList) {
        if (_.any(files, (x) => path.extname(x).toLowerCase() in blackList)) {
          return next(error.extension);
        }
      }

      // 解压缩
      decompress.extract(dest, {
        path: "#{dirname}/#{filename}",
      }, (err) => {
        if (err) {
          console.error(new Date, err, err.stack);
          return next(error.unzipExtract);
        }
        obj.path = "#{today}/#{filename}/";
        obj.extension = "/";
        next();
      });
    };
    */
  };
}

module.exports = { handleFile, };
