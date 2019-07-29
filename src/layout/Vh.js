import React from 'react';
import './Vh.css';

const Vh = () =>{
    return (
        <div className="vh">

            <div className='container'>

                <div className='card-container'>

                <div className='item1 m-b-item'>
                    <img src= {require ("../images/youtube.png")} alt="youtube"/>
                    <p className='project-description'>>> written by react/redux</p>
                </div>

                <div className='item2 m-b-item'>
                    <img src= {require ("../images/unsplash.jpg")} alt="unsplash"/>
                    <p className='project-description'>>> written by react/redux</p>
                </div>

                <div className='item3 m-b-item'>
                    <a href=""><img src= {require ("../images/unsplash1.jpg")} alt="unsplash1"/>
                    <p className='project-description'>>> written by react/redux</p>
                    </a>
                </div>

                <div className='item4 m-b-item'>
                    <img src= {require ("../images/book.jpg")} alt="book"/>
                    <p className='project-description'>>> written by react/redux</p>
                </div>

                <div className='item5 m-b-item'>
                    <img src= {require ("../images/twitch.png")} alt="twitch"/>
                    <p className='project-description'>>> written by react/redux</p>
                </div>

                <div className='item6 m-b-item'></div>
                <div className='item7 m-b-item'></div>
                <div className='item8 m-b-item'></div>
                <div className='item9 m-b-item'></div>
                <div className='item10 m-b-item'></div>
                </div>

            </div>
        </div>
    );
};

export default Vh;