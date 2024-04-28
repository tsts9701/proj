import React, { useEffect, useRef, useState } from 'react';
import Wrapper from "@/components/Wrapper";
import PlaneAnimation from '@/components/PlaneAnimation';
import AboutUsComponents from '@/components/AboutUsComponents';
import Faq from '@/components/FAQ';

const About = () => {

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="mt-30">
          <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">О нас</h1>
          <p className="text-md md:text-xl">
            Привет! Мы — <b>Cross Centre</b>. Наш интернет-магазин привозит топовые бренды из-за границы в Россию. 
            Трансграничная торговля – это сотни непростых процессов. Мы спрятали их под капот и 
            максимально упростили процесс покупки для вас. Оформляйте заказ, оплачивайте его в рублях, отслеживайте 
            заветную посылку и ждите уведомления о прибытии.
          </p>
          <div className="hot-it-works-video">
            <img alt="Превью видео" src="/how_it.webp" />
          </div>
        </div>

        <h2 className="MuiTypography-root MuiTypography-h2 mui-style-h7byok">КАК ЭТО РАБОТАЕТ</h2>

        <div className="about-us-main-sides">
          <PlaneAnimation />
          <AboutUsComponents />
        </div>
        
        <div className="faq-section" id="faqSection">
          <h2>ВОПРОСЫ - ОТВЕТЫ</h2>
          <Faq />
        </div>
        
        {/* <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-mobile-12 MuiGrid-grid-tablet-12 MuiGrid-grid-desktop-6 mui-style-18nmraz">
          <div class="MuiBox-root mui-style-11zmad1">
              <span class="MuiTypography-root MuiTypography-p2 mui-style-1wpj1dp">Везем товары из <b>ЕВРОПЫ И США</b></span>
              <div class="MuiBox-root mui-style-1hkvj1y"><span><img alt="Карта мира" src="/map.png" /></span></div>
          </div>
        </div> */}

      </Wrapper>
    </div>
  );
};

export default About;
