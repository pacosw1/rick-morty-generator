import { useQuery } from "@apollo/client";
import React from "react";
import { Generator } from "../../views/generator/components/main";
import { GET_CHAR_COUNT } from "./queries";

export const Wrapper = () => {
  let { data, loading, error } = useQuery(GET_CHAR_COUNT);

  if (error) return <h1>Error connecting to Server</h1>;
  if (loading) return null;

  return <Generator characterCount={data.characters.info.count} />;
};
