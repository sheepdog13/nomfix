import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getMovies } from "../api";
const Wrapper = styled.div`
  width: 100%;
  height: 10000px;
`;

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  return <Wrapper>Home</Wrapper>;
}

export default Home;
