import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import rasm from '../../assets/img/katalogimg.png'
import rasm1 from '../../assets/img/katalogimg1.png'
import rasm2 from '../../assets/img/katalogimg2.png'
import rasm3 from '../../assets/img/katalogimg3.png'
import rasm4 from '../../assets/img/katalogimg4.png'
import rasm5 from '../../assets/img/katalohimg2.png'
import rasm6 from '../../assets/img/katalogimg5.png'
import rasm7 from '../../assets/img/katalogimg6.png'
import rasm8 from '../../assets/img/katalogimg7.png'
import { MdKeyboardArrowRight } from 'react-icons/md';
import rasm9 from '../../assets/img/katta.png'
import rasm10 from '../../assets/img/katta1.png'
import { NavLink } from 'react-router-dom';
import './Katalog.scss'
import { VscArrowRight } from 'react-icons/vsc';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Katalog = () => {
    let data = [
        {
            id:1,
            title: 'Люстры',
            p: "От 540₽",
            img: rasm,
            right:<BsArrowRight />
        },
        {
            id:2,
            title: 'Светильники',
            p: "От 540₽",
            img: rasm1,
            right:<BsArrowRight />
        },
        {
            id:3,
            title: 'Торшеры',
            p: "От 540₽",
            img: rasm2,
            right:<BsArrowRight />
        },
        {
            id:4,
            title: 'Настольные лампы',
            p: "От 540₽",
            img: rasm3,
            right:<BsArrowRight />
        },
        {
            id:5,
            title: 'Споты',
            p: "От 540₽",
            img: rasm4,
            right:<BsArrowRight />
        },
        {
            id:6,
            title: 'Люстры',
            p: "От 540₽",
            img: rasm5,
            right:<BsArrowRight />
        },
        {
            id:7,
            title: 'Люстры',
            p: "От 540₽",
            img: rasm6,
            right:<BsArrowRight />
        },
        {
            id:8,
            title: 'Люстры',
            p: "От 540₽",
            img: rasm7,
            right:<BsArrowRight />
        },
        {
            id:9,
            title: 'Люстры',
            p: "От 540₽",
            img: rasm8,
            right:<BsArrowRight />
        },

    ]


    let links = data?.map((el,inx) =>(
<div class="grid-container" key={inx}>
  <div class="grid-item item1">
   <p>{el.title}</p>
  </div>
  <div class="grid-item item2">
    <img src={el.img} alt="" />
  </div>
  <div class="grid-item item4">
      <div className="item5">
        <p>{el.p}</p>
      </div>
      <div className="item5">
      {el.right}
      </div>
      </div>
</div>
    ))
    return (
        <div className='container'>
              <div className="korzinka_allsy">
            <div className="korzinka_all_row">
                <NavLink to={'/'}>
                Главная
                </NavLink>
            </div>
            <div className="korzinka_all_row">
              <MdKeyboardArrowRight/>
            </div>
            <div className="korzinka_all_row">
                <NavLink>
                Каталог
                </NavLink>
            </div>
             </div>
           <div className="grid">
{links}
</div>
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            360: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
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

<SwiperSlide><div className="grids">
{links}

</div>
</SwiperSlide>

       
      </Swiper>
   

<div className="katalog_hammasi_column">
<div className="katalog_link_item">
<div className="katalog_link_item_list">
<h1>Светодиодные ленты</h1>
<div class="grid-item item4">
      <div className="item5">
        <p>От 540₽</p>
      </div>
      <div className="item5">
      <BsArrowRight />
      </div>
      </div>
</div>
<div className="katalog_link_item_list">
  <img src={rasm9} alt="" />
</div>
</div>
<div className="katalog_link_item">
<div className="katalog_link_item_list">
<h1>Светодиодные ленты</h1>
<div class="grid-item item4">
      <div className="item5">
        <p>От 540₽</p>
      </div>
      <div className="item5">
      <BsArrowRight />
      </div>
      </div>
</div>
<div className="katalog_link_item_list">
  <img src={rasm10} alt="" />
</div>
</div>
</div>

        </div>
    );
}

export default Katalog;
