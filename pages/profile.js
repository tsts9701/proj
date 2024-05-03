import React from "react";
import Profile from "@/components/Profile";
import Wrapper from "@/components/Wrapper";
import Favorites from "@/components/Favorites";
import { useRouter } from 'next/router';

const profile = () => {
  const router = useRouter();

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <h4 className="text-[24px] md:text-[30px] mb-5 font-semibold leading-tight">
          Profile
        </h4>
        <Profile />
        <h4 className="text-[24px] md:text-[30px] mb-5 font-semibold leading-tight">
          Favorites
        </h4>
        <Favorites displayCount={3} />
        <button onClick={() => router.push('/favorites')}>View All</button>
      </Wrapper>
    </div>
  );
};

export default profile;
