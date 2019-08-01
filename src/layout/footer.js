import React from 'react';
import './footer.css'


const Footer = () => {

    return (
        <div id='footer'>
            <div className='footer-con'>
                <div className='items'>
                <strong>Remote job</strong>
                <a href="">React</a>
                <a href="">Redux</a>
                <a href="">Git</a>
                </div>
                <div  className='items'>
                    <strong>Remote job</strong>
                    <a href="">Github</a>
                    <a href="">Html</a>
                    <a href="">Css</a>
                </div>
                <div  className='items'>
                    <strong>Remote job</strong>
                    <a href="">Javascript</a>
                    <a href="">Frontend</a>
                    <a href="">Thank you!</a>
                </div>

            </div>
        </div>
    )

};
export default Footer;