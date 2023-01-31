import React from "react";
import "./about.css";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";

const About = () => {
    return(
        <div>
        <br></br>
        <h1 className="h">About Us</h1>
        <br></br> <br></br>
        <p className="p1"> E Vote is an Online Voting System is made to gather instant and trustworthy results.</p>
        <br></br>
        <p className="p2">We aim to make the voting and elections easy and same time.</p>
        <br></br> <br></br><br></br><br></br><br></br>
        <form className="f1">
            <p className="p3">Management Team</p>
            <img className="i1" src={i1} alt="i1" height={100} width={100} /> <p className="p4">Roderick Pastor <br></br>President</p>
            <img className="i2" src={i2} alt="i2" height={100} width={100} /> <p className="p5">Pierce Norman <br></br>Vice President</p>
            <img className="i3" src={i3} alt="i3" height={100} width={100} /> <p className="p6">Sarita Lagmay <br></br>Elections Director</p>
            <img className="i4" src={i4} alt="i" height={100} width={100} /> <p className="p7">Reginald Dantes <br></br>IT Programmer</p>
        </form>
        <div>
            <form className="f2">
                <p className="mission">Our Mission:</p>
                <br></br>
                <p className="p9">To provide a convenient way for citizens <br></br>to cast their ballots in public elections. <br></br>The system will enable citizens to cast their <br></br>votes without having to leave their homes <br></br>or wait in lie at polling stations. It will also <br></br>ensure its accuracy and integrity. The system <br></br>will be designed to be secure, reliable, and user friendly.<br></br>In addition, the system will ensure that all votes are <br></br> counted accurately and securely.</p>
            </form>
            <form className="f3">
                <p className="strengths">Our Strenghts:</p>
                <br></br><br></br><br></br>
                <p className="p11 ">1. Increased Voter Turnout: The system can increase voter turnout by making it easier for voters to cast their ballots from any location. <br></br>This can make voting more convinient and allow more people to <br></br> participate in the democratic process.<br></br>2. Accurate results: With this system, the results are instantly tallied <br></br>and can be verified more quickly and accurately than with traditional <br></br>paper-based methods. This can also reduce the risk of errors that can<br></br>occur with manual counting and verification. <br></br> 3.Cost-Effective: The system can be less expensive than traditional <br></br>paper-based methods. This is because they require fewer resources<br></br>to set up and maintain, as well as fewer personnel to oversee the process.<br></br>4. Secure: The system is highly secure and use encryption and other <br></br>security measures that votes are counted accurately and securely.</p>
            </form>
        </div>
    </div>
    );
}

export default About;

