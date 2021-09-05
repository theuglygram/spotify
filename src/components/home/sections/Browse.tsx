import React from "react";
import styled from "styled-components";
import hipman from "assets/images/hipman.png";
import elecman from "assets/images/elecman.png";
import retro from "assets/images/retro.png";

interface StyledProps {
  background?: string | any;
}
const Browse: React.FC = (props) => {
  const genres = [
    {
      background: "#AF2896;",
      title: "Lounge",
      image: hipman,
    },
    {
      background: "#1D3164;",
      title: "Blues",
      image: elecman,
    },
    {
      background: "#27856A",
      title: "Funk",
      image: retro,
    },
    {
      background: "#B2B2B2;",
      title: "Retro",
      image: hipman,
    },
    {
      background: "#477D95;",
      title: "Latin",
      image: elecman,
    },
    {
      background: "#E13300",
      title: "Jazz",
      image: retro,
    },
    {
      background: "#BA5D07;",
      title: "Ambient",
      image: hipman,
    },
    {
      background: "#5F8109;",
      title: "Cinematic",
      image: elecman,
    },
    {
      background: "#1DB954",
      title: "Fantasy",
      image: retro,
    },
    {
      background: "#535353;",
      title: "Pop",
      image: hipman,
    },
    {
      background: "#55A891;",
      title: "World",
      image: elecman,
    },
    {
      background: "#477D95",
      title: "Folk",
      image: retro,
    },
  ];

  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <Recent>Browse All</Recent>{" "}
          <MappedWrapper>
            {genres.map((genre, index) => (
              <DivWrapper background={genre.background}>
                <TopText>{genre.title}</TopText>
                <Img src={genre.image} />
              </DivWrapper>
            ))}
          </MappedWrapper>
        </ContentWrapper>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  padding: 0 20px;
  margin: 20px 0;
`;
const Recent = styled.h4`
  font-family: "Circular Bold";
  font-size: 32px;
  margin-left: 10px;
`;

const DivWrapper = styled.div<StyledProps>`
  margin: 20px 0;
  position: relative;
  max-width: 152px;
  height: 135px;
  width: 100%;
  background: ${(props) => props.background};
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;
const TopText = styled.div`
  font-family: "Circular Bold";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
`;
const MappedWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;
export default Browse;
