import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

import man from "assets/icons/man.svg";
const TopNav: React.FC = () => {
  return (
    <div className="">
      <div className=" flex justify-between mt-5 px-5">
        <div className=" flex justify-between items-center">
          <div className="flex justify-between mr-5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.6" cx="8" cy="8" r="8" fill="black" />
              <path
                d="M9.70707 12L5 7.99955L9.70707 4L10 4.34077L5.69401 7.99955L10 11.6588L9.70707 12Z"
                fill="white"
              />
            </svg>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.6"
                r="8"
                transform="matrix(-1 0 0 1 8 8)"
                fill="black"
              />
              <path
                d="M6.29293 12L11 7.99955L6.29293 4L6 4.34077L10.306 7.99955L6 11.6588L6.29293 12Z"
                fill="white"
              />
            </svg>
          </div>
          <InputWrapper className="   bg-white">
            <Search className=" mt-2 ml-2 mb-2" />
            <input
              type="text"
              placeholder="Artists, songs, or podcasts"
              className=""
            />
          </InputWrapper>
        </div>
        <Cody>
          <CodImg src={man} /> Cody Fisher
        </Cody>
      </div>
    </div>
  );
};
const Search = styled(AiOutlineSearch)`
  color: #000;
  position: relative;
  height: 20px;
  width: 24px;
`;
const InputWrapper = styled.div`
  width: 280px;
  border-radius: 100px;
  display: flex;
  align-items: center;

  input {
    height: 24px;
    width: 240px;
    border-radius: 100px;
    outline: none;
    border: none;
    color: #9ca3af;
  }
`;

const Cody = styled.div`
  width: 150px;
  height: 40px;
  background: rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 20px auto;
  place-items: center;
  padding: 0 10px;
  border-radius: 400px;
`;
const CodImg = styled.img``;
export default TopNav;
