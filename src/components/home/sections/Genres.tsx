import React from "react";
import styled from "styled-components";
import hipman from "assets/images/hipman.png";
import elecman from "assets/images/elecman.png";
import retro from "assets/images/retro.png";

interface StyledProps {
  background?: string | any;
}
const Genres: React.FC = (props) => {
  const genres = [
    {
      background: "#E8115B;",
      title: "Hip Hop",
      image: hipman,
    },
    {
      background: "#55A891;",
      title: "Electronic",
      image: elecman,
    },
    {
      background: "#E8115B",
      title: "Alternative",
      image: retro,
    },
  ];

  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <Recent>Your top genres</Recent>{" "}
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
`;

const DivWrapper = styled.div<StyledProps>`
  margin: 20px 0;
  position: relative;
  max-width: 370px;
  width: 100%;
  height: 162px;
  background: ${(props) => props.background};
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;
const TopText = styled.div`
  font-family: "Circular Bold";
  font-size: 32px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
export default Genres;
