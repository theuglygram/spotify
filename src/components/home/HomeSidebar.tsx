import React from "react";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
const HomeSidebar: React.FC = () => {
  const Genres = [
    "Ambient",
    "Electronic",
    "Blues",
    "Acoustic",
    "Children",
    "Fantasy",
    "Lounge",
    "Acoustic",
    "Children",
    "Electronic",
    "Blues",
    "Acoustic",
    "Children",
    "Fantasy",
    "Lounge",
    "Acoustic",
    "Children",
  ];
  return (
    <div className="bg-black">
      <Wrapper className="">
        <div className=" ">
          <ul className=" flex flex-col mt-8">
            <li className=" flex text-gray-400 cursor-pointer  my-2 mx-2 px-1 py-2 hover:text-white hover:bg-gray-600 rounded-lg focus:text-white  transition-all">
              <FillIcon className="  w-6 h-6 mr-3" /> Home
            </li>
            <li className=" flex text-gray-400 cursor-pointer  my-2 mx-2 px-1 py-2 hover:text-white hover:bg-gray-600 rounded-lg focus:text-white  transition-all">
              <Search className="  w-6 h-6 mr-3" /> Search
            </li>
            <li className=" flex text-gray-400 cursor-pointer  my-2 mx-2 px-1 py-2 hover:text-white hover:bg-gray-600 rounded-lg focus:text-white  transition-all">
              <Lib className="  w-6 h-6 mr-3" /> Your Library
            </li>
          </ul>
        </div>
        <div className="">
          <ul className=" ">
            <li className="flex my-4 mx-2 px-1 py-2 text-gray-400 cursor-pointer    hover:text-white hover:bg-gray-600 rounded-lg focus:text-white  transition-all">
              <Square className="  w-6 h-6 mr-3" /> Create Playlist
            </li>
            <li className="flex my-4 mx-2 px-1 py-2 text-gray-400 cursor-   hover:text-white hover:bg-gray-600 rounded-lg focus:text-white  transition-all">
              {" "}
              <Liked className="  w-6 h-6 mr-3" /> Liked Songs
            </li>
          </ul>
        </div>

        <div className=" mt-5 h-full flex flex-col">
          {Genres.map((genre, index) => (
            <div className=" text-white my-2 mx-4" key={index}>
              {genre}
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  background: #000;
`;
const FillIcon = styled(AiOutlineHome)``;
const Search = styled(AiOutlineSearch)``;
const Lib = styled(VscLibrary)``;
const Square = styled(AiOutlinePlusSquare)``;
const Liked = styled(FcLike)``;

export default HomeSidebar;
