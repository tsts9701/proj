import React, { useEffect, useRef, useState } from 'react';

function PlaneAnimation() {
    let [planePosition, setPlanePosition] = useState(100);
    let [lineHeight, setLineHeight] = useState(0);
    let planeIcon = useRef(null);
    let orderIcon = useRef(null);
    let atHomeIcon = useRef(null);
    let inteMenIcon = useRef(null);
    let borderIcon = useRef(null);
    let localDelIcon = useRef(null);
    let interDelIcon = useRef(null);
    let warehouseIcon = useRef(null);


    useEffect(function () {
        setTimeout(function () {
          if (planeIcon && planeIcon.current) {
            let newPlaneValue = planePosition - 1;
            let newLineHeightValue = lineHeight + 1;
    
           planeIcon.current.style.bottom = (planePosition - 1) + "%";
           document.documentElement.style.setProperty("--line-heigh", (lineHeight + 1) + "%");
    
           if (newPlaneValue === 1) {
            setPlanePosition(function () {
              orderIcon.current.style.backgroundColor = "#EBF0F4";
              inteMenIcon.current.style.backgroundColor = "#EBF0F4";
              warehouseIcon.current.style.backgroundColor = "#EBF0F4";
              interDelIcon.current.style.backgroundColor = "#EBF0F4";
              borderIcon.current.style.backgroundColor = "#EBF0F4";
              localDelIcon.current.style.backgroundColor = "#EBF0F4";
              atHomeIcon.current.style.backgroundColor = "#EBF0F4"; 
    
              return 100;
            });
    
            setLineHeight(0);
           } else {
              setPlanePosition(newPlaneValue);
              setLineHeight(newLineHeightValue);
           }
    
           if (newLineHeightValue > 5) {
            orderIcon.current.style.backgroundColor = "rgb(219, 255, 0)";
           }
    
           if (newLineHeightValue > 21) {
            inteMenIcon.current.style.backgroundColor = "rgb(219, 255, 0)";
           }
    
           if (newLineHeightValue > 35) {
            warehouseIcon.current.style.backgroundColor = "rgb(219, 255, 0)";
           }
    
           if (newLineHeightValue > 50) {
            interDelIcon.current.style.backgroundColor = "rgb(219, 255, 0)";
           }
    
           if (newLineHeightValue > 65) {
            borderIcon.current.style.backgroundColor = "rgb(219, 255, 0)";
           }
    
           if (newLineHeightValue > 80) {
            localDelIcon.current.style.backgroundColor = "rgb(219, 255, 0)";
           }
    
           
           if (newLineHeightValue > 97) {
            atHomeIcon.current.style.backgroundColor = "rgb(219, 255, 0)";
           }
          }
        }, 200);
    }, [planeIcon, planePosition]);

    return (
        <div className="MuiBox-root mui-style-1t6nixf">
          <div className="MuiBox-root mui-style-13wr3f9">
              <div>
                <div className="MuiBox-root mui-style-1vysy0j">
                    <div className="MuiBox-root mui-style-13yxp40">
                      <div className="MuiBox-root mui-style-175qkr1">
                          <div className="MuiBox-root mui-style-jk3cq8"></div>
                          <div className="MuiBox-root mui-style-a0agwf" ref={planeIcon}><span><img src="/plane.png" /></span></div>
                          <div className="MuiBox-root mui-style-1hixu1k">
                            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m17.828.172 13 13v5.656l-13 13-5.656-5.656L18.343 20H1v-8h17.343l-6.171-6.172L17.828.172Z" fill="#110D1C"></path>
                            </svg>
                          </div>
                      </div>
                    </div>
                    <div className="MuiBox-root mui-style-1smr2uu">
                      <div className="MuiBox-root mui-style-0">
                          <div className="MuiBox-root mui-style-reg7d8">
                            <div className="MuiBox-root mui-style-15ljub4" ref={orderIcon}>
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.22 4.5H1v-2h3l.97.757.56 2.243H21l.949 1.316-3 9L18 16.5H7l-.97-.758L3.22 4.5Zm2.81 3 1.75 7h9.5l2.333-7H6.03Z" fill="#110D1C"></path>
                                  <path d="M11 20a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 21.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#110D1C"></path>
                                </svg>
                            </div>
                            <div className="MuiBox-root mui-style-1szqi31">
                                <p className="MuiTypography-root MuiTypography-h5 mui-style-1ttlvlo">ЗАКАЗ</p>
                                <span className="MuiTypography-root MuiTypography-p2 mui-style-1wpj1dp"></span>
                            </div>
                          </div>
                      </div>
                      <div className="MuiBox-root mui-style-0">
                          <div className="MuiBox-root mui-style-reg7d8">
                            <div className="MuiBox-root mui-style-15ljub4" ref={inteMenIcon}>
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.345 12.162c0 5.962 4.772 10.806 10.66 10.806s10.66-4.844 10.66-10.806c0-5.856-4.606-10.63-10.35-10.797a2.859 2.859 0 0 0-.347-.008c-.082 0-.178 0-.273.008-5.744.167-10.35 4.94-10.35 10.797Zm2.511-5.276A9.704 9.704 0 0 1 9.119 2.8c-.467.513-.882 1.141-1.241 1.851-.339.67-.628 1.421-.864 2.235H3.856ZM14.89 2.801a9.703 9.703 0 0 1 5.264 4.085h-3.158a13.015 13.015 0 0 0-.864-2.234c-.359-.71-.775-1.339-1.242-1.851Zm-3.383-.389v4.474h-3.45c.204-.652.44-1.25.709-1.781.776-1.537 1.748-2.463 2.741-2.693Zm0 9.25H7.302c.034-1.349.202-2.623.476-3.773h3.729v3.772Zm-4.751 4.774H3.308a9.86 9.86 0 0 1-.95-3.772h3.948c.032 1.335.19 2.605.45 3.772Zm13.946 0h-3.448c.26-1.167.418-2.437.45-3.772h3.948a9.865 9.865 0 0 1-.95 3.772Zm-5.458 2.792c-.775 1.535-1.747 2.45-2.741 2.677V17.44h3.45c-.204.655-.44 1.258-.709 1.789Zm4.901-1.79a9.717 9.717 0 0 1-5.25 4.084c.465-.509.88-1.133 1.237-1.84.339-.671.628-1.428.864-2.243h3.15ZM7.878 19.682c.358.708.772 1.332 1.237 1.841a9.717 9.717 0 0 1-5.25-4.083h3.149c.236.815.525 1.571.864 2.242l.223-.113-.223.113Zm3.63 2.224c-.995-.228-1.967-1.142-2.742-2.677a11.638 11.638 0 0 1-.709-1.79h3.45v4.467Zm3.736-16.8c.269.531.505 1.129.709 1.781h-3.45V2.412c.993.23 1.965 1.156 2.741 2.693Zm-3.737 7.559v3.772H7.778a18.398 18.398 0 0 1-.476-3.772h4.205Zm5.2 0a18.396 18.396 0 0 1-.476 3.772h-3.729v-3.772h4.205ZM6.756 7.889a19.511 19.511 0 0 0-.45 3.772H2.357A9.885 9.885 0 0 1 3.3 7.89h3.456Zm9.475 0a18.35 18.35 0 0 1 .476 3.772h-4.205V7.89h3.73Zm1.022 0h3.456a9.885 9.885 0 0 1 .943 3.772h-3.949a19.525 19.525 0 0 0-.45-3.773Z" fill="#110D1C" stroke="#000" stroke-width="0.5"></path>
                                </svg>
                            </div>
                            <div className="MuiBox-root mui-style-1szqi31">
                                <p className="MuiTypography-root MuiTypography-h5 mui-style-1ttlvlo">ЗАГРАНИЧНЫЙ ПОСТАВЩИК</p>
                                <span className="MuiTypography-root MuiTypography-p2 mui-style-1wpj1dp"></span>
                            </div>
                          </div>
                      </div>
                      <div className="MuiBox-root mui-style-0">
                          <div className="MuiBox-root mui-style-reg7d8">
                            <div className="MuiBox-root mui-style-15ljub4" ref={warehouseIcon}>
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#StorehouseIcon_svg__a)">
                                      <path d="M11.976.006a.616.616 0 0 0-.297.096L.306 7.142a.614.614 0 0 0-.288.52v3.41c0 .339.275.614.614.614H2.17v11.68c0 .34.275.615.615.615h18.442c.34 0 .615-.275.615-.615v-11.68h1.537c.34 0 .615-.275.615-.615v-3.41a.614.614 0 0 0-.288-.518L12.332.103a.614.614 0 0 0-.356-.097Zm.03 1.335 10.757 6.657v2.459h-1.537a.615.615 0 0 0-.614.614v11.68H3.399v-11.68a.615.615 0 0 0-.615-.615H1.247V7.997l10.758-6.656ZM6.106 11.686a.615.615 0 1 0 .058 1.23h11.68a.615.615 0 1 0 0-1.23H6.165a.504.504 0 0 0-.058 0Zm0 2.152a.615.615 0 1 0 .058 1.23h11.68a.616.616 0 1 0 0-1.23H6.165a.555.555 0 0 0-.058 0Zm0 2.151a.614.614 0 1 0 .058 1.23h11.68a.615.615 0 1 0 0-1.23H6.165a.528.528 0 0 0-.058 0Zm0 2.152a.615.615 0 1 0 .058 1.23h11.68a.615.615 0 1 0 0-1.23H6.165a.504.504 0 0 0-.058 0Zm0 2.151a.614.614 0 1 0 .058 1.23h11.68a.615.615 0 1 0 0-1.23H6.165a.504.504 0 0 0-.058 0Z" fill="#000"></path>
                                  </g>
                                  <defs>
                                      <clipPath id="StorehouseIcon_svg__a">
                                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                                      </clipPath>
                                  </defs>
                                </svg>
                            </div>
                            <div className="MuiBox-root mui-style-1szqi31">
                                <p className="MuiTypography-root MuiTypography-h5 mui-style-1ttlvlo">МЕЖДУНАРОДНЫЙ СКЛАД</p>
                                <span className="MuiTypography-root MuiTypography-p2 mui-style-1wpj1dp">страна экспорта</span>
                            </div>
                          </div>
                      </div>
                      <div className="MuiBox-root mui-style-0">
                          <div className="MuiBox-root mui-style-reg7d8">
                            <div className="MuiBox-root mui-style-15ljub4" ref={interDelIcon}>
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="m.5 3.5 1-1h14.25l1 1v4.25h2.75l.707.293 3 3 .293.707v4.5l-1 1h-1.772a3 3 0 1 1-5.456 0H8.728a3 3 0 1 1-5.456 0H1.5l-1-1V3.5Zm16.25 6.25v5.5h4.75v-3.086L19.086 9.75H16.75Zm-2 5.5V4.5H2.5v10.75h12.25ZM6 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm13-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#110D1C"></path>
                                </svg>
                            </div>
                            <div className="MuiBox-root mui-style-1szqi31">
                                <p className="MuiTypography-root MuiTypography-h5 mui-style-1ttlvlo">МЕЖДУНАРОДНАЯ ДОСТАВКА</p>
                                <span className="MuiTypography-root MuiTypography-p2 mui-style-1wpj1dp">страна экспорта</span>
                            </div>
                          </div>
                      </div>
                      <div className="MuiBox-root mui-style-0">
                          <div className="MuiBox-root mui-style-reg7d8">
                            <div className="MuiBox-root mui-style-15ljub4" ref={borderIcon}>
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M16.762 18.176a8.5 8.5 0 1 1 1.414-1.414l3.531 3.53-1.414 1.415-3.531-3.531ZM18 11.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" fill="#110D1C"></path>
                                </svg>
                            </div>
                            <div className="MuiBox-root mui-style-1szqi31">
                                <p className="MuiTypography-root MuiTypography-h5 mui-style-1ttlvlo">ТАМОЖНЯ</p>
                                <span className="MuiTypography-root MuiTypography-p2 mui-style-1wpj1dp"></span>
                            </div>
                          </div>
                      </div>
                      <div className="MuiBox-root mui-style-0">
                          <div className="MuiBox-root mui-style-reg7d8">
                            <div className="MuiBox-root mui-style-15ljub4" ref={localDelIcon}>
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="m.5 3.5 1-1h14.25l1 1v4.25h2.75l.707.293 3 3 .293.707v4.5l-1 1h-1.772a3 3 0 1 1-5.456 0H8.728a3 3 0 1 1-5.456 0H1.5l-1-1V3.5Zm16.25 6.25v5.5h4.75v-3.086L19.086 9.75H16.75Zm-2 5.5V4.5H2.5v10.75h12.25ZM6 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm13-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#110D1C"></path>
                                </svg>
                            </div>
                            <div className="MuiBox-root mui-style-1szqi31">
                                <p className="MuiTypography-root MuiTypography-h5 mui-style-1ttlvlo">СЛУЖБА ДОСТАВКИ</p>
                                <span className="MuiTypography-root MuiTypography-p2 mui-style-1wpj1dp">по России</span>
                            </div>
                          </div>
                      </div>
                      <div className="MuiBox-root mui-style-0">
                          <div className="MuiBox-root mui-style-reg7d8">
                            <div className="MuiBox-root mui-style-15ljub4" ref={atHomeIcon}>
                                <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="30" cy="30" r="30"></circle>
                                  <path d="M12.4 42.18v-2.36a8.55 8.55 0 0 0 1.5-.08c.426-.067.773-.193 1.04-.38s.44-.44.52-.76c.093-.333.08-.747-.04-1.24L11.78 22.8h3.32l1.4 6.66.66 4.34.48-4.36 1.18-6.64h3.36l-3.36 15.1c-.16.733-.347 1.353-.56 1.86-.213.507-.48.92-.8 1.24a2.956 2.956 0 0 1-1.14.76c-.454.173-1.007.287-1.66.34-.64.067-1.393.093-2.26.08ZM23.614 39V22.8h5.44c.973 0 1.773.187 2.4.56.627.36 1.093.893 1.4 1.6.307.693.46 1.54.46 2.54 0 1.253-.207 2.213-.62 2.88a3.236 3.236 0 0 1-1.68 1.36c-.707.253-1.5.38-2.38.38h-1.44V39h-3.58Zm3.58-9.38h1.2c.44 0 .773-.08 1-.24.227-.16.373-.4.44-.72.08-.32.12-.727.12-1.22a5.14 5.14 0 0 0-.1-1.08 1.203 1.203 0 0 0-.42-.76c-.227-.187-.58-.28-1.06-.28h-1.18v4.3ZM33.928 39l3.06-16.2h4.08l3.02 16.2h-3.3l-.54-3.42h-2.38l-.56 3.42h-3.38Zm4.26-5.56h1.72l-.86-6.32-.86 6.32Zm8.255 1.44-.94-12.04h3.24l-1.18 12.04h-1.12Zm-1 4.12v-3.04h3.08V39h-3.08Z" fill="#000"></path>
                                </svg>
                            </div>
                            <div className="MuiBox-root mui-style-1szqi31">
                                <p className="MuiTypography-root MuiTypography-h5 mui-style-1ttlvlo">ТОВАР У ВАС ДОМА!</p>
                                <span className="MuiTypography-root MuiTypography-p2 mui-style-1wpj1dp"></span>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="roll-in MuiBox-root mui-style-11te5bp d-none">
                    <svg width="95" height="95" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.549" y="0.55" width="93.882" height="93.882" rx="46.941" fill="#0D0F1C"></rect>
                      <ellipse cx="38.101" cy="34.583" rx="3.521" ry="9.388" fill="#DBFF00"></ellipse>
                      <ellipse cx="56.876" cy="34.582" rx="3.521" ry="9.388" fill="#DBFF00"></ellipse>
                      <path fillRule="evenodd" clipRule="evenodd" d="M26.331 50.616c2.216 9.638 10.85 16.824 21.159 16.824 10.308 0 18.942-7.186 21.158-16.824l3.431.79c-2.575 11.2-12.604 19.555-24.59 19.555-11.984 0-22.013-8.355-24.589-19.556l3.431-.789Z" fill="#DBFF00"></path>
                    </svg>
                </div>
              </div>
          </div>
        </div>
    )

}

export default PlaneAnimation;