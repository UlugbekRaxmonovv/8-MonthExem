import React,{useContext} from 'react';
import './Main.scss'
import rasm from '../../assets/img/main.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import {useTranslation} from "react-i18next"
import { Context } from '../DarkMore/Context';
const Main = () => {
  const {theme} =useContext(Context)
  let {t} =  useTranslation()
    return (
        <div className={`Main_all ${theme ? "light" : ""}`}>
        <section className='main_hammasi'>
          


            <Swiper
        spaceBetween={30}
        Autoplay={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1> {t("title")}</h1>
            <button>{t("btn")}</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>


            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1> {t("title")} </h1>
            <button> {t("btn")} </button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>


            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1> {t("title")} </h1>
            <button>{t("btn")}</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>

            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1> {t("title")}</h1>
            <button>{t("btn")}</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>

            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1> {t("title")}</h1>
            <button>{t("btn")}</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>
            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1> {t("title")}</h1>
            <button>{t("btn")}</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>
            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1> {t("title")}</h1>
            <button>{t("btn")}</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>
       
      </Swiper>
        </section>
        </div>
    )
}

export default Main;
