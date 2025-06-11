import React, {Component} from 'react';
import './layout.css'

class About extends Component{
    render() {
        return(
            <div className="me">
                {/* <br/> */}
                <p>Hello everyone! I am Caren. I would describe myself as a friendly and easy to approach individual.
                I assure you that I will put a smile on your face.</p>
                <p>As for my interests, I enjoy listening to music and reading books although I must admit I have not read in a while!
                </p>
                <p>I was born in India and raised in London. My favourite Michael Jackson song is 'Man in the Mirror' .</p>
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