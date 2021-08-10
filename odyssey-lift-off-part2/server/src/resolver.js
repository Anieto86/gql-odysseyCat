// A resolver's mission is to populate the data for a field in your schema
// It can fetch data from any data source, then transforms that data into the shape your client requires.

const resolvers = {
  Query: {
    //return ans array of tracks
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    //get a single track by id
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
module.exports = resolvers;
