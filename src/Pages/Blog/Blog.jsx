import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import rasm from '../../assets/img/blog.png'
import rasm1 from '../../assets/img/blog1.png'
import rasm2 from '../../assets/img/blog2.png'
import Footer from '../../components/Footer/Footer'
import ProductTop from '../../components/ProductTop/index'
import './Blog.scss'
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
    {
        id:4,
        h1:"Как правильно освещать дом снаружи?",
        p:"01.01.2024",
        svg: <FiArrowUpRight />,
        img: rasm,
        span:"01.01.2024",
        img1:rasm1

    },
    {
        id:5,
        h1:"Как правильно освещать дом снаружи?",
        p:"01.01.2024",
        svg: <FiArrowUpRight />,
        img: rasm1,
        span:"01.01.2024",
        img1:rasm2

    },
    {
        id:6,
        h1:"Как правильно освещать дом снаружи?",
        p:"01.01.2024",
        svg: <FiArrowUpRight />,
        img: rasm2,
        span:"01.01.2024",
        img1:rasm

    }
]


let links = data?.map((el,inx) =>(
  <>
  <ProductTop/>
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
<div className="blog_alls" key={inx.id}>
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
</>
))
const Blog = () => {
    return (
       <>
       
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
                Блог
                </NavLink>
            </div>
             </div>
             <div className="h_teg">
              <h1>Блог</h1>
             </div>
             <div className="blogw" >
              {links}
            </div>
        </div>
             <Footer/>
       </>
    );
}

export default Blog;
