import React from "react";
import Favorites from "@/components/Favorites";
import Wrapper from "@/components/Wrapper";

const favorites = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {" "}
        <h4 className="text-[24px] md:text-[30px] mb-5 font-semibold leading-tight">
          Список желаний
        </h4>{" "}
        <Favorites />
      </Wrapper>
      <br />
    </div>
  );
};

export default favorites;
