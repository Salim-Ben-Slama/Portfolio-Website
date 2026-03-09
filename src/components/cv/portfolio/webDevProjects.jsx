import Rent from '../../assests/rent.png';
import CallCenterLandingP from '../../assests/CallCenterLandingP.png'
import Cv_website from '../../assests/cv_website.png'
import { HiOutlineLockClosed } from "react-icons/hi";

const WebDevProjects=()=>{
    return(
        <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"50px 30px"}}>
                <div className="web-card">
                    <img src={Rent} alt="Project 1" style={{width:"100%",aspectRatio: "1841 / 876",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
                    <div>
                        <h3 style={{fontSize:"18px",fontWeight:"500",marginBottom:"5px"}}>Real Estate Rental & Sales Platform</h3>
                        <p style={{fontSize:"14px"}}>A full-featured web application for renting and selling houses and lands. Includes an admin panel for property management, owner dashboards, interactive map filtering, user authentication, and virtual tours. <br/><span style={{fontWeight:"600"}}>Built with React, Node.js, Express, and PostgreSQL.</span></p>
                    </div>                    
                    <div>
                        <a href="https://github.com/Salim-Ben-Slama/House_rental_platform" target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
                        <div className="demo-btn blocked">Demo <HiOutlineLockClosed style={{marginLeft:'5px'}}/></div>
                    </div>
                </div>

                <div className="web-card">
                    <img src={Cv_website} alt="Project 1" style={{width:"100%",aspectRatio: "1841 / 876",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
                    <div>
                        <h3 style={{fontSize:"18px",fontWeight:"500",marginBottom:"5px"}}>Professional Portfolio Website</h3>
                        <p style={{fontSize:"14px"}}>Designed and implemented a professional portfolio website to highlight development projects and skills. Includes structured sections for projects, education, and technical abilities.<br/><span style={{fontWeight:"600"}}>Built with React.js</span></p>
                    </div>                    
                    <div>
                    <a href="https://github.com/Salim-Ben-Slama/Portfolio-Website" target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
                        <div className="demo-btn blocked">Demo <HiOutlineLockClosed style={{marginLeft:'5px'}}/></div>
                    </div>
                </div>

                <div className="web-card">
                    <img src={CallCenterLandingP} alt="Project 1" style={{width:"100%",aspectRatio: "1841 / 876",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
                    <div>
                        <h3 style={{fontSize:"18px",fontWeight:"500",marginBottom:"5px"}}>Megatel Call Center Landing Page</h3>
                        <p style={{fontSize:"14px"}}>Created a modern landing page for a call center company to showcase services and improve online presence.<br/><span style={{fontWeight:"600"}}>Built with React, Node.js, Express, and MongoDB.</span></p>
                    </div>                    
                    <div>
                        <div className="github-btn">GitHub</div>
                        <div className="demo-btn blocked">Demo <HiOutlineLockClosed style={{marginLeft:'5px'}}/></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WebDevProjects;