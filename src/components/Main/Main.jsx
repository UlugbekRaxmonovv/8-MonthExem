import React from 'react';
import './Main.scss'
import rasm from '../../assets/img/main.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Main = () => {
    return (
        <div className='Main_all'>
        <section className='main_hammasi'>
          


            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1>Скидка 15% на все подвесные светильники </h1>
            <button>до 5 февраля</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>


            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1>Скидка 15% на все подвесные светильники </h1>
            <button>до 5 февраля</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>


            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1>Скидка 15% на все подвесные светильники </h1>
            <button>до 5 февраля</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>

            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1>Скидка 15% на все подвесные светильники </h1>
            <button>до 5 февраля</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>

            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1>Скидка 15% на все подвесные светильники </h1>
            <button>до 5 февраля</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>
            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1>Скидка 15% на все подвесные светильники </h1>
            <button>до 5 февраля</button>
          </div>
          <div className="main_all">
           <img src={rasm} alt="" />
          </div>
            </div></SwiperSlide>
            <SwiperSlide>  <div className="main container">
          <div className="main_all">
            <h1>Скидка 15% на все подвесные светильники </h1>
            <button>до 5 февраля</button>
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
