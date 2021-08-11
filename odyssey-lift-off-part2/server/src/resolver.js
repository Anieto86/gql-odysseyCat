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
  Mutation: {
    // increment track of views
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `no Errors yupi, Successfully incremented the number of views ${id}`,
          track,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};
module.exports = resolvers;
