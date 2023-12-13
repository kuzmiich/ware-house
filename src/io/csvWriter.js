import createCsvWriter from 'csv-writer';

export function writeToFile() {

  const csvHeaders = [
    { id: 'id', title: 'Id' },
    { id: 'title', title: 'Title' },
    { id: 'nettoCost', title: 'NettoCost' },
    { id: 'actualPrice', title: 'ActualPrice' },
    { id: 'description', title: 'Description' },
    { id: 'wareHouseId', title: 'WareHouseId' },
  ];

  const outFilePath = "./data/products.csv";
  const csvWriter = createCsvWriter.createObjectCsvWriter({
    path: outFilePath,
    header: csvHeaders
  });

  var products = [
    { 
      id: 1,
      title: "table AAA",
      nettoCost: 50,
      actualPrice: 80,
      description: "This is a very good table",
      wareHouseId: 1
    },
    {
      id: 1,
      title: "chair DDD",
      nettoCost: 10,
      actualPrice: 40,
      description: "This is a very good chair",
      wareHouseId: 1
    },
    {
      id: 1,
      title: "pen ABC",
      nettoCost: 1,
      actualPrice: 3,
      description: "This is a very good pen",
      wareHouseId: 1
    }
  ];
  
  csvWriter.writeRecords(products)
    .then(() => console.log('CSV file has been written successfully.'))
    .catch((error) => console.error('Error writing CSV file:', error));
}