import React from 'react';
import './Single.scss'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Single = ({detail}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div>
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperSingli"
      >
        
        {
detail?.url?.map((el) =>(
    <SwiperSlide key={el.id}>      <div className="singli">
    <div className="singli_rout">
    <img src={el} alt="" />
     </div>
    
 </div></SwiperSlide>
 
))
        }
      </Swiper>
      <div className="singli_rout">
     <Link  to={`/single/${detail.id}`}> <button className='singli_rout_bnt'>Detail</button></Link>
         </div>
        </div>
    );
}

export default Single;
