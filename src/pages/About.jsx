import React, {Component} from 'react';
import './layout.css'

class About extends Component{
    render() {
        return(
            <div className="me">
                {/* <br/> */}
                <p>Hello everyone! I am Caren. I would describe myself as a friendly and easy to approach individual.
                I assure you that I will make you smile whenever I talk to you.</p>
                <p>As for my interests, I enjoy listening to music and reading books although I must admit I am now on a 
                hobby-hiatus mainly because of all the assignments piling up(hope you can relate!)</p>
                <p>I was born in India and raised in London. I miss my friends terribly and can't wait to see them soon.
                I am a Virgo by sign and a huge fan of Michael Jackson.</p>
                <p>But before I sign off, I would like you to ponder on this question for a while:
                "What do you call a cow in an earthquake?"(DON'T GOOGLE IT!!)</p>
                <p>Have a wonderful day, every single day! Thank you for reading :)</p>
                <div class="email">
                <p>Contact Email:<a href="mailto: N1133460@ntu.ac.uk">N1133460@.ntu.ac.uk</a></p>
                </div>
	        </div>
    );
    }
}

export default About