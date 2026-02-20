import Rent from '../../../assests/rent.png';
const WebDevCard=()=>{
    return(
        <div className="web-card">
            <img src={Rent} alt="Project 1" style={{width:"100%",aspectRatio: "1841 / 876",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
            <div>
                <h3 style={{fontSize:"18px",fontWeight:"500",marginBottom:"5px"}}>Real Estate Rental & Sales Platform</h3>
                <p style={{fontSize:"14px"}}>A full-featured web application for renting and selling houses and lands. Includes an admin panel for property management, owner dashboards, interactive map filtering, user authentication, and virtual tours. <br/><span style={{fontWeight:"600"}}>Built with React, Node.js, Express, and MongoDB.</span></p>
            </div>                    
            <div>
                <div className="github-btn">GitHub</div>
                <div className="demo-btn">Demo</div>
            </div>
        </div>

    )
}

export default WebDevCard;