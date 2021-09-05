import TopNav from "navigation/TopNav";
import React from "react";
import Browse from "./sections/Browse";
import Genres from "./sections/Genres";
import RecentSearches from "./sections/RecentSearches";

const Body: React.FC = () => {
  return (
    <div className="w-full">
      <TopNav />
      <RecentSearches />
      <Genres />
      <Browse />
    </div>
  );
};

export default Body;
