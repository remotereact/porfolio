import React from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';


const Header =  () =>{
    return(
        <header id='header'>
            <div className='header-holder container'>
            <div className='icons'>
                <i className="fa fa-instagram fa-1x m-r icon1" aria-hidden="true"></i>
                <i className="fa fa-twitch m-r fa-1x icon2" aria-hidden="true"></i>
                <i className="fa fa-twitter m-r fa-1x icon3" aria-hidden="true"></i>
                <i className="fa fa-facebook m-r fa-1x icon4" aria-hidden="true"></i>
            </div>
                <div className='search'>
                    <input className='searchbar' type="text" placeholder='Search'/>
                    <button type='submit' className='searchButton'>
                        <i className='fa fa-search'></i>
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Header;