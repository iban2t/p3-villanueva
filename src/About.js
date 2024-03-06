import * as React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './About.css';
function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <Container>
                <Row>
                    <Col xs={6} md={4} className="column1">
                        <img src="/images/about1.jpg" alt="About Me" className="about-image"/>
                        <div className="spacer"></div>
                        <h4>Joshua Ivan E. Villanueva</h4>
                        <h4>BSCS 3A</h4>
                    </Col>
                    <Col xs={6} md={8}>
                        <p>
                            Welcome to my personal website. This was developed using React.js, and in fact, it was my first ever webpage using
                             it. My name is Joshua Ivan Estrada Villanueva. I was born in City of San Carlos, Pangasinan, on March 27, 2002. My 
                             father's name is Rico, who is currently a public school teacher, and my mother is Imelda, who is a loving housewife 
                             and a good mother that always looks after us. I also have three (3) other siblings, namely: John Immerson, Jerusha 
                             Idenne, and Joanna Ivy. I am the second-born son. We currently live in Zone 6, Sitio Calabnigan, Barangay Tampadong, 
                             Pamplona, Camarines Sur.
                        </p>
                        <p>
                            We lived shortly in Pangasinan before moving to Bicol in 2008. I was in 1st grade back then. We had to adjust to new 
                            language, new culture, and new people as well. As time passed by, we got used to it, and became one with the community.
                            We also jumped from one barangay to the other: Quitang, Balogo, then Tampadong.
                        </p>
                        <p>
                            I am currently at my third year in taking my BS Computer Science course. In the beginning, of course I struggled since I 
                            background in programming, nor had previous computer-related track. I just chose this path because I believe in the potential 
                            that technologies in the present era possess, and I also want to push my leadership, problem-solving, and overall logic to their utmost limits.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <h4>Passions & Hobbies</h4>
            <div className="spacer"></div>
            <Container >
                <div className="hobbyList">
                    <div style={{
                        backgroundImage : `url("/images/hobby1.png")`
                    }}><div>Attending Church</div>
                    </div>
                    <div style={{
                        backgroundImage : `url("/images/hobby2.jpg")`
                    }}><div>Studying</div>
                    </div>
                    <div style={{
                        backgroundImage : `url("/images/hobby3.jpg")`
                    }}><div>Playing Basketball</div>
                    </div>
                    <div style={{
                        backgroundImage : `url("/images/hobby4.jpg")`
                    }}><div>Sneaker Collecting</div>
                    </div>
                    {/* <div style={{
                        backgroundImage : `url("/images/hobby5.jpg")`
                    }}><div>Work Out</div>
                    </div> */}
                    <div style={{
                        backgroundImage : `url("/images/hobby6.jpg")`
                    }}><div>Video Games</div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;