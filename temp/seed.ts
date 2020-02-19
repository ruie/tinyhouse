require('dotenv').config();

import { ObjectId } from 'mongodb';
import { connectDB } from '../src/database';
import { Listing } from '../src/lib/types';

const listings: Listing[] = [
  {
    _id: new ObjectId(),
    name: 'Lawson Cleaning Services',
    email: 'lawson@test.com'
  },
  {
    _id: new ObjectId(),
    name: 'ELeanor Cleaning',
    email: 'lawson2@test.com'
  },
  {
    _id: new ObjectId(),
    name: 'Mark Cleaning Services',
    email: 'lawson3@test.com'
  },
  {
    _id: new ObjectId(),
    name: 'Ruie Bar Cleaning',
    email: 'lawson4@test.com'
  }
];

const seed = async () => {
  try {
    console.log('Seeding...');
    const db = await connectDB();
    console.log('db', db);
    for (const listing of listings) {
      console.log(listing);
      await db.listings.insertOne(listing);
      console.log('Data inserted');
    }
  } catch (e) {
    console.log(e);
    throw new Error('Failed seeding data');
  }
};

seed();
