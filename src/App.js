import React,{Component} from 'react';
import Header from "./layout/Header";
import Section from "./layout/Section";
import Navbar from './layout/Navbar';
import Sidebar from './layout/sidebar';
import Footer from './layout/footer';
import './App.css';
import Vh from "./layout/Vh";



class App extends Component{
    render() {
        return(

            <div className='grid-areas' >
                <Sidebar/>
                <Header/>
                <Navbar/>
                <Vh/>
                <Section/>
                <Footer/>
            </div>
        )
    }
}

export default App;
