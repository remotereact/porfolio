import React,{Component} from 'react';
import './Vh.css';
import { Spring } from 'react-spring/renderprops'




class vh extends Component {





    render() {
        return (
            <div id="vh">
                        <Spring
                            from={{opacity: 0}}
                            to={{opacity: 1}}
                            config={{delay:700,duration:1000}}
                        >
                            {props => (
                                <div style={props}>

                                    <div className='test'>
                                        <h2>Youtube</h2>

                                        <img src= {require ("../images/youtube.png")} alt="youtube"/>
                                        <div className='m-b-item'>
                                            <a  href="https://github.com/remotereact/youtube">repo</a>
                                            <a href="https://serene-ramanujan-c85fbd.netlify.com/">link</a>
                                        </div>
                                        <p className='project-description'>Youtube project I have used youtube api in order
                                        to get the data (json file) from youtube, this project is created by react</p>
                                    </div>

                                </div>
                            )}
                        </Spring>





                        <Spring
                            from={{opacity: 0}}
                            to={{opacity: 1}}
                            config={{delay:800,duration:1200}}
                        >
                            {props => (
                                <div style={props}>

                                    <div className='test'>
                                        <h2>Animals</h2>
                                            <img src= {require ("../images/unsplash.jpg")} alt="unsplash"/>
                                        <div  className='m-b-item'>
                                            <a  href="https://github.com/remotereact/animals">repo</a>
                                            <a href="https://brave-bhabha-a65268.netlify.com/">link</a>
                                        </div>
                                        <p className='project-description'>this project created by react and redux, redux is used for state management,
                                       and get request with axios for getting some animals data from an animal api</p>
                                    </div>
                                </div>
                            )}
                        </Spring>


                        <Spring
                            from={{opacity: 0}}
                            to={{opacity: 1}}
                            config={{delay:900,duration:1300}}
                        >
                            {props => (
                                <div style={props}>
                                    <div className='test'>
                                        <h2>Grid-images</h2>
                                            <img src= {require ("../images/unsplash1.jpg")} alt="unsplash1"/>
                                        <div className='m-b-item'>
                                            <a href="https://github.com/remotereact/auto-grid-images">repo</a>
                                            <a href="https://determined-gates-a6f62b.netlify.com/">link</a>
                                        </div>
                                        <p className='project-description'>this one is quite interesting because when we get the
                                        data from unsplash api which is a picture api , it will gives us pictures with different sizes,
                                        but this app will resize them automatically</p>
                                    </div>
                                </div>
                            )}
                        </Spring>




                        <Spring
                            from={{opacity: 0}}
                            to={{opacity: 1}}
                            config={{delay:1000,duration:1400}}
                        >
                            {props => (
                                <div style={props}>
                                    <div className='test'>
                                        <h2>Twitch</h2>

                                            <img src= {require ("../images/twitch.png")} alt="twitch"/>

                                        <div className='m-b-item'>
                                            <a href="">repo</a>
                                            <a href="">link</a>
                                        </div>

                                        <p className='project-description'>I'm currently working on this project </p>

                                    </div>
                                </div>
                            )}
                        </Spring>





                        <Spring
                            from={{opacity: 0}}
                            to={{opacity: 1}}
                            config={{delay:1100,duration:1500}}
                        >
                            {props => (
                                <div style={props}>
                                    <div className='test'>
                                        <h2>Books</h2>
                                            <img src= {require ("../images/book.jpg")} alt="book"/>

                                        <div className=' m-b-item'>
                                            <a href="">repo</a>
                                            <a href="">link</a>
                                        </div>
                                        <p className='project-description'>I'm currently working on this project</p>
                                    </div>
                                </div>
                            )}
                        </Spring>
                </div>

        );
    };

}




export default vh;


