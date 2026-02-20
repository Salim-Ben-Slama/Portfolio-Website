import WebDevProjects from "./portfolio/webDevProjects.jsx";
import GraphicDesignProjects from "./portfolio/graphicDesignProjects.jsx";
import React from "react";
import { useState } from "react";

const Psections=['Web Development','IA Projects','IoT Projects','Graphic Design'];

const Portfolio=()=>{
    const [Pactive,setPactive]=useState('Web Development')

    return(
        <div style={{padding:"90px 185px 100px 260px"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"50px"}}>
                <p className="portfolio-title">Portfolio</p>
                <ul className="po-menu">
                    {Psections.map(Psec=>(
                        <li key={Psec} className={Pactive===Psec?'Pactive':''} onClick={()=>{setPactive(Psec)}}>{Psec}</li>
                        
                    ))}
                    
                </ul>
            </div>
            <div>
                {Pactive === "Web Development" && <WebDevProjects />}
                {Pactive === "IA Projects" && <></>}
                {Pactive === "Graphic Design" && <GraphicDesignProjects />}

            </div>
        </div>

    )
}

export default Portfolio;