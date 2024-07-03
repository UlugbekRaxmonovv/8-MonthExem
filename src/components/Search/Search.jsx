import React from 'react';
import './Search.scss'
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

const Search = ({item}) => {
    return (
        <div className='Search_row' key={item.id}>
        
            <li >
            <IoSearchOutline />
            </li>
            <li >
            <Link to={`/single/${item.id}`}>{item.title}</Link>
            </li>
        </div>
    );
}

export default Search;
