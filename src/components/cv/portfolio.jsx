import WebDevProjects from "./portfolio/webDevProjects.jsx";
import IaMl from "./portfolio/iaMl.jsx";
import GraphicDesignProjects from "./portfolio/graphicDesignProjects.jsx";
import IotProjects from "./portfolio/iotProjects.jsx";
import React from "react";
import { useState } from "react";

const Psections=['Web Development','IA & ML','IoT Projects','Graphic Design'];

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
                {Pactive === "Web Development" && <WebDevProjects/>}
                {Pactive === "IA & ML" && <IaMl/>}
                {Pactive === "IoT Projects" && <IotProjects/>}
                {Pactive === "Graphic Design" && <GraphicDesignProjects />}

            </div>
        </div>

    )
}

export default Portfolio;