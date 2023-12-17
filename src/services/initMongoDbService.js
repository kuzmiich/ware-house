import readDatas from '../io/jsonReader.js';

const readProducts = () => {

  const inFilePath = "./data/products.json";
  return readDatas(inFilePath);
}

const readWorkers = () => {
  
  const inFilePath = "./data/workers.json";
  return readDatas(inFilePath);
}

const readWareHouses = () => {
  
  const inFilePath = "./data/wareHouses.json";
  return readDatas(inFilePath);
}

export async function initializeDatabase(database) {
  
  let products = readProducts();

  await initializeCollection(database, 'products', products);
  
  let workers = readWorkers();  
  await initializeCollection(database, 'workers', workers);

  
  let wareHouses = readWareHouses();
  await initializeCollection(database, 'wareHouses', wareHouses);
}

async function initializeCollection(database, collectionName, documentsToInsert) {
  const productCollection = database.collection(collectionName);

  const documentCount = await productCollection.countDocuments();

  if (documentCount === 0) {

    await productCollection.insertMany(documentsToInsert);

    console.log(`Collection '${collectionName}' initialized with a sample documents.`);
  } else {
    console.log(`Collection '${collectionName}' already contains documents. No need to initialize.`);
  }
}
