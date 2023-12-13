import fs from 'fs';
import csv from 'csv-parser';

export function readProducts(inFilePath) {
  if (!fs.existsSync(inFilePath)) return;

  var products = [];
  fs.createReadStream(inFilePath)
    .pipe(csv())
    .on('data', function (product) {
      products.push(product);
    })
    .on('end', function () {
      console.log(products);
    });

  return products;
}

export function readWareHouses() {

}

export function readWorkers() {

}