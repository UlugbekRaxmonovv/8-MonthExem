import React, { useContext } from 'react';
import './Katalog.scss'
import { VscArrowRight } from "react-icons/vsc";
import rasm from '../../assets/img/katalogimg.png'
import rasm1 from '../../assets/img/katalogimg1.png'
import rasm2 from '../../assets/img/katalogimg2.png'
import rasm3 from '../../assets/img/katalogimg3.png'
import rasm4 from '../../assets/img/katalogimg4.png'
import rasm5 from '../../assets/img/katalohimg2.png'
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next"
import { Context } from '../DarkMore/Context';

const Katalog = () => {
  const {theme} =useContext(Context)
  let {t} =  useTranslation()

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
            id:1,
            title: 'Торшеры',
            p: "От 540₽",
            img: rasm2,
            right:<BsArrowRight />
        },
        {
            id:1,
            title: 'Настольные лампы',
            p: "От 540₽",
            img: rasm3,
            right:<BsArrowRight />
        },
        {
            id:1,
            title: 'Споты',
            p: "От 540₽",
            img: rasm4,
            right:<BsArrowRight />
        },
        {
            id:1,
            title: 'Люстры',
            p: "От 540₽",
            img: rasm5,
            right:<BsArrowRight />
        }
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
       <div className={`kata ${theme ? "light" : ""}`}>
         <div className='container'>
            <div className="katalog">
                <div className="katalog_item">
                    <h1>{t("katalog")}</h1>
                </div>
                <Link to={'catalog'}>
                <div className="btn">
                    <div className="btn1">
                        <p>Весь каталог</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                </div>
                </Link>
               
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
<Link to={'catalog'}>
<div className="btn4">
                  <div className="btnt">
                  <div className="btn">
                        <p>Весь каталог</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div></div>                </div>
</Link>

</SwiperSlide>

       
      </Swiper>
   



             
        </div>
       </div>
    );
}

export default Katalog;
