import React from "react";
import styled from "styled-components";
import beyonce from "assets/images/beyonce.png";
import cardi from "assets/images/cardi.png";
import diana from "assets/images/diana.png";
import gaye from "assets/images/gaye.png";
import puth from "assets/images/puth.png";
import usher from "assets/images/usher.png";
import close from "assets/icons/close.svg";

const RecentSearches: React.FC = () => {
  const artist = [
    {
      img: beyonce,
      name: "Beyonce",
    },
    {
      img: cardi,
      name: "Cardi B",
    },
    {
      img: diana,
      name: "Diana",
    },
    {
      img: gaye,
      name: "Marvin Gaye",
    },
    {
      img: puth,
      name: "Charlie Puth",
    },
    {
      img: usher,
      name: "Usher",
    },
  ];
  return (
    <Wrapper>
      <ContentWrapper>
        <Recent>Recent Searches</Recent>
        <MapWrapper>
          {" "}
          {artist.map((artists, index) => (
            <SectionCard key={index}>
              <ImgWrapper>
                <Img src={artists.img} />
              </ImgWrapper>
              <Name>{artists.name}</Name>
              <Artist>Artist</Artist>
              <Closed src={close} />
            </SectionCard>
          ))}
        </MapWrapper>
      </ContentWrapper>
    </Wrapper>
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
const MapWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;
const SectionCard = styled.div`
  max-width: 152px;
  width: 100%;
  height: 210px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  margin: 10px 0;
  padding-bottom: 20px;
  position: relative;
  cursor: pointer;
`;
const Closed = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  margin: 12px 0;
`;
const Name = styled.div`
  margin-left: 12px;
`;
const Artist = styled.div`
  margin-left: 12px;
  margin-top: 5px;
  font-size: 14px;
`;
export default RecentSearches;
