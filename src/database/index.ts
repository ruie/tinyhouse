import { MongoClient } from 'mongodb';
import { Database } from '../lib/types';

const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDB = async (): Promise<Database> => {
  const client = await MongoClient.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = client.db('main');

  return {
    listings: db.collection('listings')
  };
};
