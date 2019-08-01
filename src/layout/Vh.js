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
                                        <p className='project-description'>Lorem ipsum dolor sit amet.C7C9D3
                                            Lorem ipsum dolor sit amet.C7C9D3Lorem ipsum dolor sit amet.C7C9D3</p>
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
                                        <p className='project-description'>Lorem ipsum dolor sit amet.C7C9D3
                                            Lorem ipsum dolor sit amet.C7C9D3Lorem ipsum dolor sit amet.C7C9D3</p>
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
                                        <p className='project-description'>Lorem ipsum dolor sit amet.C7C9D
                                            Lorem ipsum dolor sit amet.C7C9D3
                                            Lorem ipsum dolor sit amet.C7C9D33</p>
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

                                        <p className='project-description'>Lorem ipsum dolor sit amet.C7C9D3
                                            Lorem ipsum dolor sit amet.C7C9D3
                                            Lorem ipsum dolor sit amet.C7C9D3</p>

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
                                        <p className='project-description'>Lorem ipsum dolor sit amet.C7C9D3
                                            Lorem ipsum dolor sit amet.C7C9D3
                                            Lorem ipsum dolor sit amet.C7C9D3</p>
                                    </div>
                                </div>
                            )}
                        </Spring>
                </div>

        );
    };

}




export default vh;


