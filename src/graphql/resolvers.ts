import { Database, Listing } from '../lib/types';
import { ObjectId } from 'mongodb';

export const resolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    }
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const response = await db.listings.findOneAndDelete({
        _id: new ObjectId(id)
      });

      if (!response.value) {
        throw new Error('Failed deleting the listing');
      }

      return response.value;
    }
  },
  Listing: {
    id: (obj: Listing): string => obj._id.toString()
  }
};
