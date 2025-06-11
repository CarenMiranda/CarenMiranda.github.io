import React, {Component} from 'react';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './layout.css'
import img1 from "../images/ibmImage1.png";
import img2 from "../images/ibmImage2.png";
import img3 from "../images/ibmImage3.png";
import uniImage from "../images/uniImage.jpg";
import schoolImage from "../images/school_image.jpg";
import anteamLogo from "../images/anteam_logo.jpeg";
import mentorImage from "../images/mentorImage.jpg";
import './Experiences.css'
import './layout.css'
class Experiences extends Component{
    render() {

        const fadeImages = [
            img1,
            img2,
            img3,
            uniImage
        ];

        return(
            <div className="pageContainer">
                <h1>Continuous Professional Development</h1>
                    <p>Over the past 3 years, I immersed myself into various challenges and experiences by finding new opportunities along the way.</p>

                    <div className="internship">
                        <h1>Internship at IBM</h1>
                        <p>I was delighted to get an offer to join IBM as a Software Developer Intern from 2024-25. This experience continues to be 
                        extremely valuable as I have significantly developed my confidence, technical and interpersonal skills and also formed multiple professional contacts.
                        </p>

                        <p>
                            I recieved so many incredible opportunities to network with professionals by joining monthly skill-sharing sessions, participating in hackathons held at IBM,
                            taking part in giveback projects and attending events held by major financial clients like Lloyds Banking Group. By working in a professional team and following industry-wide practices for 
                            clean and secure coding and concise documentation, I was able to showcase and improve my teamworking skills in a software role. I also had to manage my time and work independantly on projects, thus 
                            having to take responsibility of my tasks, collaborate with members within different teams, hold meetings to discuss issues, present my work to stakeholders and deliver my tasks on schedule.
                        </p>
                    </div>

                    <br/>
                    <br/>
                    <div className="fade-container">
                    <Fade arrows={false} 
                        duration={3000} 
                        transitionDuration={1000} 
                    >
                        <div className="each-fade">
                            <img src={fadeImages[0]} alt="First Day at IBM" />
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[1]} alt="IBM York Road Office, London" />
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[2]} alt="Lloyds X IBM Hackathon 2024"/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[3]} alt="NTU Clifton Campus"/>
                        </div>
                    </Fade>
                    </div>

                    <div>
                        <h1>Summer Teaching Assistant</h1>
                        <p>My curiosity led me to explore several career paths. I always enjoyed learning, thanks to the lovely tutors and support I got all the way to my A-Levels. This made 
                            me think what the role of a teacher would be like, considering I was always on the recieving end of the education system! So, I applied to become a Summer Teaching Assistant in Computer Science at a local secondary school.
                            I was able to demonstrate and strengthen my leadership, communication and professional skills, which paved the skills and confidence I required for my professional life.
                        </p>

                        <p>
                            Over a span of 4 weeks, I interacted with a range of students from primary to secondary school students, attending lessons across various subjects and years. I also had the opportunity to prepare Scheme Of Work documents for a lesson plan and
                            gather practice questions for students by creating a worksheet on binary and hexadecimal number calculation. I also had the opportunity to understand how the subject curriculum is reviewed for the upcoming year and how lessons are taught at GCSE/A-Level years.
                            I learned so much from this experience, and had the support of fabulous team of staff. I did not do computer science/IT for A-Levels, and it made me wish I selected it back when I was doing mine!
                        </p>
                    </div>
                    <div>
                        <img src={schoolImage} alt="Trinity Catholic School"/>
                    </div>

                    <div>
                        <h1>Student Mentor at NTU School of Science and Technology</h1>
                        <p>
                            I had the opportunity to become a Student Mentor for the year 2024-25 to provide academic and peer-lead support to first-year students.
                            By oragnizing monthly and yearly events, assisting in several computer science lab sessions and communicating with mentees, I was able to help them with module-based and course-related 
                            questions and signpost them to the most appropriate services when required. I also worked on a mentor-to-mentor level support by taking on the role of Lead Student Mentor, futhering communciation 
                            between mentors and the Student Support Officers, thereby improving my leadership skills by taking on more responsibility. 
                        </p>
                    </div>
                    <div>
                        <img src={mentorImage} alt="Mentoring event"/>
                    </div>

                    <div>
                        <h1>UI Design Intern at Anteam</h1>
                        <p>
                        This summer internship opportunity focused on the UI design of the Anteam mobile application. I worked in a small, agile team with techincal and marketing professionals. 
                        We produced wireframes with a focus on improving the upcoming new feature of the app - the CO2 Rewards Program, a feature which aims to support eco-friendly and sustainable same day delivery by 
                        rewarding delivery helpers through vouchers, money and more.

                        Our team followed an agile way of teamworking with daily scrum meetings with the CEO and team members. We use Jira as our project management tool to track our activities and timelines.
                        I provided suggestions for UI improvement through mockups for different views of the app and reported bugs in the current application. 
                        I also took on the role of researching the integration of the Anteam application with e-Commerce platforms like WooCommerce via its REST API. 
                        Finally, to deliver our developments, we designed a poster and delivered a presentation to employers at the Showcase Event held at the end of our internship.
                        </p>
                    </div>

                    <div>
                        <img src={anteamLogo} alt="Anteam Logo"/>
                    </div>

            </div>
        );
    }
}

export default Experiences