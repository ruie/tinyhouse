export const resolvers = {
  Query: {
    listings: () => ({ id: '001', name: 'Test ruie' })
  },
  Mutation: {
    deleteListing: () => ({ id: '001', name: 'Delete ruie' })
  }
};
