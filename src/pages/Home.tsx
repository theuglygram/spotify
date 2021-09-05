import Body from "components/home/Body";
import React from "react";
import HomeSidebar from "../components/home/HomeSidebar";
// import { RightSidebar } from "../components/home/RightSidebar";
import styled from "styled-components";
import FixedPlayer from "components/home/sections/FixedPlayer";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <HomeWrapper>
        <HomeSidebar />
        <Body />
        {/* <RightSidebar /> */}
      </HomeWrapper>
      <Fix>
        {" "}
        <FixedPlayer />
      </Fix>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  margin-bottom: 50px;
`;
const Fix = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
export default Home;
