import { writeToFile } from './csvWriter.js';
import { readProducts } from './csvReader.js';

export function initDatabase() {
  // console.log("Start write file");
  // writeToFile();
  // console.log("End write file");

  const inFilePath = "./data/products.csv";
  let products = readProducts(inFilePath);
  console.log(JSON.stringify(products, ','));
}