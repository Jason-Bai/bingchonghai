export function workbook2json(workbook) {
  let json
  const sheet_name_list = workbook.SheetNames
  sheet_name_list.forEach(y => {
    const worksheet = workbook.Sheets[y]
    let headers = {}
    let data = []
    for(let z in worksheet) {
      if(z[0] === '!') continue;
      var col = z.substring(0,1)
      var row = parseInt(z.substring(1));
      var value = worksheet[z].v;

      if(row == 1) {
        headers[col] = value;
        continue;
      }

      if(!data[row]) data[row]={};
      data[row][headers[col]] = value;
    }
    data.shift()
    data.shift()
    json = data
  })
  return json
}

export function readXLSX(file, callback) {
  let workbook
  const reader = new FileReader()
  const name = file.name
  reader.onload = e => {
    const data = e.target.result
    try {
      workbook = XLSX.read(data, {type: 'binary'})
    } catch(err) {
      if(err) callback(err)
    }
    callback(null, workbook)
  }
  reader.readAsBinaryString(file)
}
