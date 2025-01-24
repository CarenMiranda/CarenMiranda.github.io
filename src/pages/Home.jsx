import React, {Component} from "react";
import './layout.css';

class Home extends Component{
    render() {
        return (
            <div class="content">
                {/* <h1>Welcome to my  website</h1> */}
                <p className="homeParagraph">
                Software Developer Intern at IBM  
                </p>
                <br/>
                <p className="homeParagraph">
                Undergraduate Computer Science Student at Nottingham Trent University
                </p>
            </div>


        );
    }
}

export default Home