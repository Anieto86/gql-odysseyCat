import React from "react";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";
import { useQuery } from "@apollo/client";
import { GET_TRACKS } from "./queries/fetchTracks";

const Tracks = () => {
  const { loading, error, data } = useQuery(GET_TRACKS);

  if (loading) return <h3>Loading...</h3>;
  if (error) return `${error.message}`;

  console.log(data.tracksForHome);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data.tracksForHome.map((track, index) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
