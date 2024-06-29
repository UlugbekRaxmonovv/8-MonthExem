import React from 'react';
import './Blog.scss'
import { VscArrowRight } from 'react-icons/vsc';
import rasm from '../../assets/img/blog.png'
import rasm1 from '../../assets/img/blog1.png'
import rasm2 from '../../assets/img/blog2.png'
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

let data = [
    {
        id:1,
        h1:"Как правильно освещать дом снаружи?",
        p:"01.01.2024",
        svg: <FiArrowUpRight />,
        img: rasm,
        span:"01.01.2024",
        img1:rasm1

    },
    {
        id:2,
        h1:"Как правильно освещать дом снаружи?",
        p:"01.01.2024",
        svg: <FiArrowUpRight />,
        img: rasm1,
        span:"01.01.2024",
        img1:rasm2

    },
    {
        id:3,
        h1:"Как правильно освещать дом снаружи?",
        p:"01.01.2024",
        svg: <FiArrowUpRight />,
        img: rasm2,
        span:"01.01.2024",
        img1:rasm

    },
]

let links = data?.map((el,inx) =>(
    <div className="blog_all" key={inx.id}>
    <div className="blog_img">
        <div className="blog_img_row">
          <img src={el.img} alt="" />
        </div>
        <div className="blog_img_row">
          <img src={el.img1} alt="" />
        </div>
      
    </div>
    <div className="p">
    <div className="p1">
        <p>{el.h1}</p>
        </div>
        <div className="p1">
       {el.svg}
        </div>
    </div>
    <p>{el.p}</p>
</div>
))


const Blog = () => {
    return (
        <div className='container'>
               <div className="katalog">
                <div className="katalog_item">
                    <h1>Блог</h1>
                </div>
                <div className="btn">
                    <div className="btn1">
                        <p>Перейти в блог</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                </div>
            </div>
            <div className="blog">
              {links}
            </div>


            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
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
        className="mySwiper_ALL"
      >



            <SwiperSlide>  <div className="blogAll">
      <div className="blog_all">
    <div className="blog_img">
        <div className="blog_img_row">
          <img src={rasm} alt="" />
        </div>
        <div className="blog_img_row">
          <img src={rasm2} alt="" />
        </div>
      
    </div>
    <div className="p">
    <div className="p1">
        <p>Как правильно освещать дом снаружи?</p>
        </div>
        <div className="p1">
        <FiArrowUpRight />
        </div>
    </div>
    <p>01.01.2024</p>
</div>
            </div>

            <div className="btn_all">
                  <div className="btn_row">
                  <div className="btn1">
                        <p>Перейти в блог</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>  <div className="blogAll">
      <div className="blog_all">
    <div className="blog_img">
        <div className="blog_img_row">
          <img src={rasm} alt="" />
        </div>
        <div className="blog_img_row">
          <img src={rasm2} alt="" />
        </div>
      
    </div>
    <div className="p">
    <div className="p1">
        <p>Как правильно освещать дом снаружи?</p>
        </div>
        <div className="p1">
        <FiArrowUpRight />
        </div>
    </div>
    <p>01.01.2024</p>
</div>
            </div>

            <div className="btn_all">
                  <div className="btn_row">
                  <div className="btn1">
                        <p>Перейти в блог</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>  <div className="blogAll">
      <div className="blog_all">
    <div className="blog_img">
        <div className="blog_img_row">
          <img src={rasm} alt="" />
        </div>
        <div className="blog_img_row">
          <img src={rasm2} alt="" />
        </div>
      
    </div>
    <div className="p">
    <div className="p1">
        <p>Как правильно освещать дом снаружи?</p>
        </div>
        <div className="p1">
        <FiArrowUpRight />
        </div>
    </div>
    <p>01.01.2024</p>
</div>
            </div>

            <div className="btn_all">
                  <div className="btn_row">
                  <div className="btn1">
                        <p>Перейти в блог</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>  <div className="blogAll">
      <div className="blog_all">
    <div className="blog_img">
        <div className="blog_img_row">
          <img src={rasm} alt="" />
        </div>
        <div className="blog_img_row">
          <img src={rasm2} alt="" />
        </div>
      
    </div>
    <div className="p">
    <div className="p1">
        <p>Как правильно освещать дом снаружи?</p>
        </div>
        <div className="p1">
        <FiArrowUpRight />
        </div>
    </div>
    <p>01.01.2024</p>
</div>
            </div>

            <div className="btn_all">
                  <div className="btn_row">
                  <div className="btn1">
                        <p>Перейти в блог</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>  <div className="blogAll">
      <div className="blog_all">
    <div className="blog_img">
        <div className="blog_img_row">
          <img src={rasm} alt="" />
        </div>
        <div className="blog_img_row">
          <img src={rasm2} alt="" />
        </div>
      
    </div>
    <div className="p">
    <div className="p1">
        <p>Как правильно освещать дом снаружи?</p>
        </div>
        <div className="p1">
        <FiArrowUpRight />
        </div>
    </div>
    <p>01.01.2024</p>
</div>
            </div>

            <div className="btn_all">
                  <div className="btn_row">
                  <div className="btn1">
                        <p>Перейти в блог</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                  </div>
                </div>
            </SwiperSlide>
      </Swiper>
            
        </div>
    );
}

export default Blog;
