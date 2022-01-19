import React, { Component } from 'react';
import jquery from 'jquery';
import $ from 'jquery';
import './pix_cat1200.css';

import img1 from './img/home/396.png';
import img2 from './img/home/404.png';
import img3 from './img/home/475.png';
import img4 from './img/home/500.png';
import img5 from './img/home/544.png';
import img6 from './img/home/553.png';
import img7 from './img/home/562.png';
import img8 from './img/home/574.png';
import img9 from './img/home/604.png';
import img10 from './img/home/1004.png';
import img11 from './img/home/1022.png';
import img12 from './img/home/1111.png';
import img13 from './img/home/1185.png';
import img14 from './img/home/1219.png';
import img15 from './img/home/1377.png';
import img16 from './img/home/2009.png';
import img17 from './img/home/2017.png';
import img18 from './img/home/2093.png';
import img19 from './img/home/2174.png';
import img20 from './img/home/2193.png';
import img21 from './img/home/2194.png';
import img22 from './img/home/3039.png';
import img23 from './img/home/3041.png';
import img24 from './img/home/3045.png';
import img25 from './img/home/3114.png';
import img26 from './img/home/3126.png';
import img27 from './img/home/3171.png';
import img28 from './img/home/3179.png';
import img29 from './img/home/cat_king.png';
import logo from './img/logo/logo1_1.png';
import button1 from './img/button/button1.png';
import button2 from './img/button/button2.png';
import text1 from './img/logo/text1.png';
import pixcatimg from './img/pixcatimg.png';
import text2 from './img/logo/text2.png';
import text3 from './img/logo/text3.png';
import airdrop1 from './img/airdrop1.png';
import emoticon from './img/emoticon.png';
import newface from './img/newface.png';
import donation from './img/donation.png';
import text4 from './img/logo/text4.png';
import team3 from './img/team/team3.png';
import team1 from './img/team/team1.png';
import team2 from './img/team/team2.png';
import team4 from './img/team/team4.png';
import link from './img/logo/link.png';
import t1 from './img/icon/t1.png';
import d1 from './img/icon/d1.png';

window.$ = window.jquery = jquery;

// function App() {
  
// }

class App extends Component {
  componentDidMount(){
    function optimizeAnimation(callback) {
      let ticking = false;

      return () => {
          if (!ticking) {
              ticking = true;
              requestAnimationFrame(() => {
                  callback();
                  ticking = false;
              });
          }
      };
    }

    $(function() {
        var i = 0;
        $(".icon").on("click", function() {
            $("#nav-mobile").find("a").not(".icon").slideDown(500);
            $("header").addClass("change");
            if (i % 2 == 0) {
                $("#nav-mobile").find("a").not(".icon").slideDown(500);
            } else {
                $("#nav-mobile").find("a").not(".icon").slideUp(500);
                $("header").removeClass("change");
            }
            i++;
        });
        $(".rw").on("click", function() {
            $("#nav-mobile").find("a").not(".icon").slideUp(500);
            $("header").removeClass("change");
            i++;
        });


        $("a").on("click", function(e) {
            e.preventDefault(e); //기본동작 (a태그의 기본동작인 링크기능)을 취소한다.

            var hash = $(this).attr("href");
            var pos = $(hash).offset().top;
            $("html").animate({
                scrollTop: pos
            }, 800, "swing"); //swing,linear 로 가속도 조절
        });

        $('.linkurl').find("a").unbind();
    });

    this.simpleParallax = function() {
        // 스크롤된 거리
        var scrolled = $(window).scrollTop() + 2;

        // 백그라운드 스크롤 속도 변경
        $('.scroll').css('background-position', '0%' + (scrolled * 0.3) + 'px');
    }

    window.addEventListener(
        "scroll",
        optimizeAnimation(()=>{
            this.simpleParallax();

            var pos = $(window).scrollTop();
            //윈도우의 스크롤 길이가 30px이상이면 헤더에 st클래스를 붙이고 아니면 제거한다.
            $("header")[1 >= pos ? "removeClass" : "addClass"]("st1");
            $("header")[1 >= pos ? "addClass" : "removeClass"]("st2");

            $('.roadimg').each(function(i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({
                        'opacity': '1'
                    }, 1000);
                }
            })
        }),
        {passive: true}
    );

    var image = new Array()
    image[0]=img1;
    image[1]=img2;
    image[2]=img3;
    image[3]=img4;
    image[4]=img5;
    image[5]=img6;
    image[6]=img7;
    image[7]=img8;
    image[8]=img9;
    image[9]=img10;
    image[10]=img11;
    image[11]=img12;
    image[12]=img13;
    image[13]=img14;
    image[14]=img15;
    image[15]=img16;
    image[16]=img17;
    image[17]=img18;
    image[18]=img19;
    image[19]=img20;
    image[20]=img21;
    image[21]=img22;
    image[22]=img23;
    image[23]=img24;
    image[24]=img25;
    image[25]=img26;
    image[26]=img27;
    image[27]=img28;
    image[28]=img29;

    var index;
    var tmp;
    $('#rebtn').on('click', () => {
        if(index!=null){
            tmp = index;
        }
        index = Math.floor(Math.random()*(image.length))
        if(tmp!=null){
            while(tmp==index){
                index = Math.floor(Math.random()*(image.length))
            }
        }
        $('.frame img').attr("src",image[index]);
    })
  }
  render(){
    return (
      <div className="App">
        <div class="scroll">
          <div class="bgcolor">
              <header>
                  <div id="logo">
                      <a href="#sect01"><img alt="logo" src={logo}/></a>
                  </div>
                  <nav id="nav-pc">
                      <ul>
                          <li><a href="#sect01">Home</a></li>
                          <li><a href="#sect02">About</a></li>
                          <li><a href="#sect03">Series</a></li>
                          <li><a href="#sect04">Roadmap</a></li>
                          <li><a href="#sect05">Team</a></li>
                      </ul>
                  </nav>
                  <nav id="nav-mobile">
                      <a href="#" class="icon">
                          <div class="btn-st">
                              <div class="bar1"></div>
                              <div class="bar2"></div>
                              <div class="bar3"></div>
                          </div>
                      </a>
                      <a href="#sect01" class="rw">Home</a>
                      <a href="#sect02" class="rw">About</a>
                      <a href="#sect03" class="rw">Series</a>
                      <a href="#sect04" class="rw">Roadmap</a>
                      <a href="#sect05" class="rw">Team</a>
                  </nav>
              </header>
              <section id="sect01">
                  <div class="container">
                      <div class="home">
                          <div class="frame">
                              <img alt="frame" src={img1}/>
                          </div>
                          <div class="reroll">
                              <button id="rebtn">
                                  <img alt="button" src={button1} id="reroll_button"/>
                              </button>
                          </div>
                      </div>
                  </div>
              </section>
              <section id="sect02">
                  <div class="container">
                      <div class="about">
                          <div class="title">
                              <img src={text1}/>
                          </div>
                          <div class="content">
                              <p>
                                  PIX CAT은 블록체인에서 생성된 사랑스러운 고양이입니다.<br/>
                                  제너레이티브 아트 기술로 만들어진 3961마리의 매력 넘치는 고양이와 아트 디자이너의 <b>노오력</b>이 담긴 39마리의 특별한 고양이가 집사를 기다리고 있습니다.<br/>
                                  PIX CAT을 소유하면 다양한 이벤트에 참여하고<br/>
                                  보상을 얻을 수 있습니다.<br/>
                                  어서 PIX CAT의 집사가 되어주세요!
                              </p>
                          </div>
                      </div>
                      <div class="about_box"><img alt="pixcat" src={pixcatimg}/></div>
                      <div class="clear"></div>
                  </div>
              </section>
              <section id="sect03">
                  <div class="container">
                      <div class="series">
                          <div class="title">
                              <img src={text2}/>
                          </div>
                          <div class="series_txt">
                              <p>
                                  PIXEL FACTORY에는 다양한 종류의 친구들이 살고 있습니다.<br/>
                                  새롭게 등장할 친구들은 누구일까요?
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="ser_wrap">
                      <div class="ser_box1"></div>
                      <div class="ser_box2">
                          <div class="series_img">
                              <div class="series_back"></div>
                          </div>
                      </div>
                  </div>
              </section>
              <section id="sect04">
                  <div class="container">
                      <div class="roadmap">
                          <div class="title">
                              <img src={text3}/>
                          </div>
                          <div class="roadmap_txt">
                              <p class="roadtitle">STEP 1</p>
                              <p>4000마리 PIXCAT 분양</p>
                              <p>가치 유지를 위한 Buyback 및 PIXCAT 집사들에게 airdrop</p>
                          </div>
                          <img alt="step1img" src={airdrop1} class="imgsmall roadimg"/>
                          <div class="clear"></div>
                          <div class="roadmap_txt">
                              <p class="roadtitle">STEP 2</p>
                              <p>PIXCAT을 활용한 이모티콘, 굿즈 제작</p>
                              <p>타 프로젝트와의 협업 추진</p>
                          </div>
                          <img alt="step3img" src={emoticon} class="imgsmall roadimg"/>
                          <div class="clear"></div>
                          <div class="roadmap_txt">
                              <p class="roadtitle">STEP 3</p>
                              <p>PIXEL FACTORY 뉴페이스 소개 및 런칭</p>
                              <p>PIXCAT 집사들에게 보상 지급</p>
                          </div>
                          <img alt="step4img" src={newface} class="roadimg imgdown imgright"/>
                          <div class="clear"></div>
                          <div class="roadmap_txt">
                              <p class="roadtitle">STEP 4</p>
                              <p>동물보호단체 기부</p>
                              <p>해외로 사업 확장</p>
                          </div>
                          <img alt="step5img" src={donation} class="roadimg"/>
                          <div class="clear"></div>
                      </div>
                  </div>
              </section>
              <section id="sect05">
                  <div class="container">
                      <div class="team">
                          <div class="title">
                              <img src={text4}/>
                          </div>
                          <div>
                              <div class="team_box">
                                  <img alt="team3" src={team3}/>
                                  <p class="name">팀리더 uni</p>
                                  <p>귀여운게 최고다!</p>
                                  <div class="clear"></div>
                              </div>
                              <div class="team_box">
                                  <img alt="team1" src={team1}/>
                                  <p class="name">디자이너 simworm</p>
                                  <p>앞으로 pixel factory의 다양한 컨텐츠를 기대해주세요!</p>
                                  <div class="clear"></div>
                              </div>
                              <div class="team_box">
                                  <img alt="team2" src={team2}/>
                                  <p class="name">웹 개발자 gony</p>
                                  <p>저는 고양이 알레르기가 있어요.</p>
                                  <div class="clear"></div>
                              </div>

                              <div class="team_box">
                                  <img alt="team4" src={team4}/>
                                  <p class="name">개발자 evergreen</p>
                                  <p>화성에 가고 싶습니다.</p>
                                  <div class="clear"></div>
                              </div>
                          </div>
                          <div class="clear"></div>
                          <div class="links">
                              <div class="linktitle">
                                  <img alt="links" src={link}/>
                              </div>
                              <div class="linkurl">
                                  <a href="https://twitter.com/PixelFactoryNFT" target="_blank">
                                      <img alt="twitter" src={t1}/>
                                  </a>
                              </div>
                              <div class="linkurl">
                                  <a href="https://discord.gg/JJtQ5Zg4bc" target="_blank">
                                      <img alt="discord" src={d1}/>
                                  </a>
                              </div>
                              <div class="clear"></div>
                          </div>
                      </div>
                  </div>
              </section>
              <footer>
                  &copy; Copyright 2022. PixelFactory All Rights Reserved.
              </footer>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
