import React from "react";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";
import { useQuery } from "@apollo/client";
import { GET_TRACKS } from "./queries/fetchTracks";

const Tracks = () => {
  const { loading, error, data } = useQuery(GET_TRACKS);

  // console.log(JSON.stringify(data));

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {/*  El encadenamiento opcional ?. detiene la evaluación y devuelve undefined si el valor antes del ?. es undefined o null*/}
        {data?.tracksForHome?.map((track, index) => (
          <TrackCard key={index} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
