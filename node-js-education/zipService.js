import { createGzip } from 'zlib'; // createGzip included in nodejs, I can use another library for it
import fs from "fs";

fs.createReadStream('file.txt')
  .pipe(createGzip())
  .pipe(fs.createWriteStream('file.txt.7z'));
