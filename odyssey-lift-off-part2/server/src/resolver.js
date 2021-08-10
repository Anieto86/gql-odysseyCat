// A resolver's mission is to populate the data for a field in your schema
// It can fetch data from any data source, then transforms that data into the shape your client requires.

const resolvers = {
  Query: {
    //return ans array of tracks
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }, info) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
module.exports = resolvers;
