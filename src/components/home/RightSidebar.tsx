import React from "react";
import woman from "assets/icons/woman.svg";
import styled from "styled-components";
import { BsMusicNoteBeamed } from "react-icons/bs";
export const RightSidebar: React.FC = () => {
  const friends = [
    {
      name: "Jane Cooper",
      title: "Freak in me",
      img: woman,
      artist: "Tones and I",
    },
    {
      name: "Boosie Cooper",
      title: "Gimme Dat",
      img: woman,
      artist: "Mavado",
    },
    {
      name: "Bodak Yellow",
      title: "Invasion",
      img: woman,
      artist: "Cardi B",
    },
    {
      name: "Jane Cooper",
      title: "Freak in me",
      img: woman,
      artist: "Tones and I",
    },
    {
      name: "Jane Cooper",
      title: "Freak in me",
      img: woman,
      artist: "Tones and I",
    },
    {
      name: "Jane Cooper",
      title: "Freak in me",
      img: woman,
      artist: "Tones and I",
    },
    {
      name: "Jane Cooper",
      title: "Freak in me",
      img: woman,
      artist: "Tones and I",
    },
  ];
  return (
    <Wrapper>
      <ContentWrapper>
        <Friends>Friends Activity</Friends>
        {friends.map((friend, index) => (
          <Description key={index}>
            <ImgHolder>
              <img src={friend.img} alt="" />
            </ImgHolder>
            <DescWrapper>
              <h6 className="font-bold text-gray-400 ml-4">{friend.name}</h6>
              <p className="text-gray-400 ml-4">{friend.title}</p>
              <SmallDesc>
                <Icon className="mr-2" />
                {friend.artist}
              </SmallDesc>
            </DescWrapper>
          </Description>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #000;
`;
const ContentWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  background: #000;
`;
const Friends = styled.div`
  margin: 20px;
  font-weight: 600;
`;
const Description = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  max-width: 200px;
  width: 100%;
  margin: 0 20px;
`;
const ImgHolder = styled.div`
  img {
    margin-top: 20px;
  }
`;
const DescWrapper = styled.div`
  margin: 10px 0;
`;
const SmallDesc = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px 0;
`;
const Icon = styled(BsMusicNoteBeamed)``;
