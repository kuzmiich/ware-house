import fs from 'fs';
import csv from 'csv-parser';

export function readDatas(inFilePath) {
  if (!fs.existsSync(inFilePath)) return;

  var datas = [];
  fs.createReadStream(inFilePath)
    .pipe(csv({ cast_date: true }))
    .on('data', function (obj) {
      datas.push(obj);
    })
    .on('end', function () {
      console.log(datas);
    });

  return datas;
}