import { ObjectId, Collection } from 'mongodb';

export interface Listing {
  _id: ObjectId;
  name: string;
  email: string;
}

export interface Database {
  listings: Collection<Listing>;
}
