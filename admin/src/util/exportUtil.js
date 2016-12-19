import FileSaver from 'file-saver'

let EXCEL_CONTENTTYPE = "application/vnd.ms-excel;charset=utf-8",
    EXCEL_URI = 'data:application/vnd.ms-excel;base64,',
    EXCE_TEMPLATE = '<html><head><meta charset="UTF-8"></head><body>{html}</body></html>',
    __PREVFIX = "\uFEFF",
    ieVersion = window.navigator.userAgent.toLowerCase().match(/(msie\s|trident.*rv:)([\w.]+)/),
    useIE = ieVersion && ieVersion[2] < 10,
    isIE1011 = ieVersion && ieVersion[2] > 9

let Export = {
  toExcel: (data, fName) => {
    let isId = typeof data === 'string';
    if(isId || data instanceof Array){
      if(useIE || isId && isIE1011){
        Export.__ieExport(data);
      } else{
        Export.__oTherExport(data, fName);
      }
    } else{
      alert("data params need Two-dimensional array or String.");
    }
  },
  __ieExport: (data) => {
    let oXL = new ActiveXObject("Excel.Application"),
        oWB = oXL.Workbooks.Add(),
        oSheet = oWB.ActiveSheet,
        i = 0,
        j

    if(typeof data === 'string') {
      let elem = document.getElementById(data),
          sel = document.body.createTextRange()

      sel.moveToElementText(elem)

      try{
        sel.select()  //there ie10、11 will be error, i don't know why, but also can export
      } catch(e){}

      sel.execCommand("Copy");
      oSheet.Paste();
    } else {
      for(; i < data.length; i++){
        let row = data[i];
        for (j = 0; j < row.length; j++) {
          oSheet.Cells(i + 1, j + 1).value = row[j];
        }
      }
    }

    oXL.Visible = true
  },
  __oTherExport: (data, fileName) => {
      if(typeof data === 'string'){
        let elem = document.getElementById(data),
            content = EXCE_TEMPLATE.replace("{html}", elem.outerHTML)
        //TODO: need test large amount of data
        window.location.href = EXCEL_URI +  window.btoa(unescape(encodeURIComponent(content)));
      } else {
        let blob, i = 0, j, str = ''
        for(; i < data.length; i++){
          var row = data[i]
          // the value add double quotation marks on both sides, for separate values.
          str += "\""+ row.join("\",\"") + "\"\n";
        }
        //on safari:  TypeError: '[object BlobConstructor]' is not a constructor (evaluating 'new Blob([str],{
        //import Blob.js to fix, but still have a problem : the fileName will be 'Unknown' , but if you add suffix name, content can be seen.
        blob = new Blob([str],{ type: 'text/plain;charset=utf-8'})
        FileSaver.saveAs(blob, fileName || "Download.xls")
      }
  }
}

export default Export
