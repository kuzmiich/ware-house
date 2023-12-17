import fs from "fs";

export default function readDatas(inFilePath) {
  let data = fs.readFileSync(inFilePath, { encoding: 'utf8', flag: 'r' });
  return JSON.parse(data);
}