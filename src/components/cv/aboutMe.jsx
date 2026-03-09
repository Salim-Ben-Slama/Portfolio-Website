
const AboutMe=()=>{
    return(
        <div style={{padding:"90px 185px 100px 260px",display:"flex",flexDirection:"column",gap:"40px"}}>
            <p className="portfolio-title">About Me</p>
            <p>Hi! I’m Salim, a front-end developer passionate about creating clean and modern web interfaces.<br/>I love turning ideas into interactive experiences using React, JavaScript, and CSS.<br/>I’m currently learning more about backend development and improving my UI design skills.<br/>When I’m not coding, I enjoy exploring new technologies and creating unique projects to challenge myself.</p>
            <div style={{display:"flex",gap:"30px"}}>
                <div className="aboutMe_card">
                    <div className="skills_list">
                        <h3 className="abouMeSec-title" style={{fontSize:'20px'}}>Technical Skills</h3>
                            <div className="skill">
                                <h6>• Frontend:</h6><p>React.js, HTML, CSS, JavaScript, TypeScript</p>
                            </div>
                            <div className="skill">
                                <h6>• Backend:</h6> <p>Node.js, Express.js</p>
                            </div>
                            <div className="skill">
                                <h6>• Databases:</h6> <p>PostgreSQL, MySQL</p>
                            </div>
                            <div className="skill">
                                <h6>• Programming Languages:</h6> <p>Python, Java, JavaScript</p>
                            </div>
                            <div className="skill">
                                <h6>• Tools & Technologies:</h6> <p>Git/GitHub, REST APIs, Postman,</p>
                            </div>
                    </div>
                    <div className="skills_list">
                    <p className="abouMeSec-title" style={{fontSize:'20px'}}>Soft Skills</p>
                        <div className="skill"><p>• Problem Solving</p></div>
                        <div className="skill"><p>• Critical Thinking</p></div>
                        <div className="skill"><p>• Teamwork</p></div>
                        <div className="skill"><p>• Time Management</p></div>
                        <div className="skill"><p>• Fast Learner</p></div>
                    </div>
                </div>
                <div style={{display:"flex",gap:"30px",flexDirection:"column",width:"100%"}}>
                    <div className="aboutMe_card">
                        <div className="skills_list">
                            <p className="abouMeSec-title" style={{fontSize:'20px'}}>Education</p>
                            <div className="skill" style={{flexDirection:'column'}}>
                                <h6>• Bachelor’s Degree in Computer Science</h6> <p style={{marginLeft:'12px'}}>ISIMa – Higher Institute of Computer Science of Mahdia<br/>University of Monastir<br/>2022 – 2025</p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutMe_card">
                        <div className="skills_list">
                            <p className="abouMeSec-title" style={{fontSize:'20px'}}>Languages</p>
                            <div className="skill">
                                <h6>• Arabic:</h6> <p>Native</p>
                            </div>
                            <div className="skill">
                                <h6>• English:</h6> <p>Professional Proficiency</p>
                            </div>
                            <div className="skill">
                                <h6>• French:</h6> <p>Professional Proficiency</p>
                            </div>
                            <div className="skill">
                                <h6>• Italien:</h6> <p>Basic Knowledge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;