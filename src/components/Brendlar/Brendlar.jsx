import React from 'react';
import './Brendlar.scss'
import rasm1 from '../../assets/img/brend1.png'
import rasm2 from '../../assets/img/brend2.png'
import rasm3 from '../../assets/img/brend.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
const Brendlar = () => {
    return (
        <div className='container'>

            

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
<SwiperSlide>
<div className="brend">
<h1>Только проверенные бренды</h1>
    <div className="brend_all">
<div className="brend_all_row">
<img src={rasm3} alt="" />
</div>
<div className="brend_all_row">
<img src={rasm1} alt="" />
</div>
<div className="brend_all_row">
<img src={rasm2} alt="" />
</div>
<div className="brend_all_row">
<img src={rasm3} alt="" />
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="brend">
<h1>Только проверенные бренды</h1>
    <div className="brend_all">
<div className="brend_all_row">
<img src={rasm3} alt="" />
</div>
<div className="brend_all_row">
<img src={rasm1} alt="" />
</div>
<div className="brend_all_row">
<img src={rasm2} alt="" />
</div>
<div className="brend_all_row">
<img src={rasm3} alt="" />
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="brend">
<h1>Только проверенные бренды</h1>
    <div className="brend_all">
<div className="brend_all_row">
<img src={rasm3} alt="" />
</div>
<div className="brend_all_row">
<img src={rasm1} alt="" />
</div>
<div className="brend_all_row">
<img src={rasm2} alt="" />
</div>
<div className="brend_all_row">
<img src={rasm3} alt="" />
</div>
</div>
</div>
</SwiperSlide>
       
      </Swiper>

      <div className="brends">
      <h1>Только проверенные бренды</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
     

    <div className="brend_all">
<div className="brend_all_row">
<img src={rasm3} alt="" />
</div>
</div>
        </SwiperSlide>
        <SwiperSlide>
     

     <div className="brend_all">
 <div className="brend_all_row">
 <img src={rasm1} alt="" />
 </div>
 </div>
         </SwiperSlide>
         <SwiperSlide>
     

     <div className="brend_all">
 <div className="brend_all_row">
 <img src={rasm2} alt="" />
 </div>
 </div>
         </SwiperSlide>
         <SwiperSlide>
     

     <div className="brend_all">
 <div className="brend_all_row">
 <img src={rasm3} alt="" />
 </div>
 </div>
         </SwiperSlide>
      </Swiper>
      </div>
            </div>
    );
}

export default Brendlar;
