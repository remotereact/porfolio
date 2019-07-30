import React,{Component} from 'react';
import './Vh.css';
import { Spring } from 'react-spring/renderprops'




class vh extends Component {




    render() {
        return (
            <div id="vh">
                <div className='container'>
                    <div className='card-container'>

                        <Spring
                            from={{opacity: 0}}
                            to={{opacity: 1}}
                            config={{delay:700,duration:1000}}
                        >
                            {props => (
                                <div style={props}>

                                    <div className='test'>
                                        <div className='item1 m-b-item'>
                                            <img src= {require ("../images/youtube.png")} alt="youtube"/>
                                            <p className='project-description'>>> written by react/redux</p>
                                        </div>


                                        <div className='m-b-item'>
                                            <a  href="https://github.com/remotereact/youtube">repo</a>
                                            <a href="https://serene-ramanujan-c85fbd.netlify.com/">link</a>
                                        </div>
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
                                        <div className='item2 m-b-item'>
                                            <img src= {require ("../images/unsplash.jpg")} alt="unsplash"/>
                                            <p className='project-description'>>> written by react/redux</p>
                                        </div>

                                        <div  className='m-b-item'>
                                            <a  href="https://github.com/remotereact/animals">repo</a>
                                            <a href="https://brave-bhabha-a65268.netlify.com/">link</a>
                                        </div>

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
                                        <div className='item3 m-b-item'>
                                            <img src= {require ("../images/unsplash1.jpg")} alt="unsplash1"/>
                                            <p className='project-description'>>> written by react/redux</p>
                                        </div>

                                        <div className='m-b-item'>
                                            <a href="">repo</a>
                                            <a href="">link</a>
                                        </div>
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
                                        <div className='item4 m-b-item'>
                                            <img src= {require ("../images/book.jpg")} alt="book"/>
                                            <p className='project-description'>>> written by react/redux</p>
                                        </div>




                                        <div className='m-b-item'>
                                            <a href="">repo</a>
                                            <a href="">link</a>
                                        </div>



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
                                        <div className='item5 m-b-item'>
                                            <img src= {require ("../images/twitch.png")} alt="twitch"/>
                                            <p className='project-description'>>> written by react/redux</p>
                                        </div>

                                        <div className=' m-b-item'>
                                            <a href="">repo</a>
                                            <a href="">link</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Spring>
                    </div>

                </div>


            </div>
        );
    };

}




export default vh;


