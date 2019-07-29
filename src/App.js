import React,{Component} from 'react';
import Header from "./layout/Header";
import Section from "./layout/Section";
import Navbar from './layout/Navbar';
import './App.css';
import Vh from "./layout/Vh";
import Animation  from './layout/animation'
class App extends Component{
    render() {
        return(

            <div>
                <Header/>
                <Navbar/>
                <Vh/>
                <Section/>
                {/*<Animation/>*/}
            </div>
        )
    }
}

export default App;
