import mongoose from 'mongoose';

export default callback => {
  let db = mongoose.connect('mongodb://imran:imran123@ds143388.mlab.com:43388/foodtruck', {useMongoClient: true});
  callback(db);
}
