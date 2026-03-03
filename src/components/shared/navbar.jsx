import { IoIosArrowDown } from "react-icons/io";

const Navbar=()=>{
    return(
        <div className="top-navbar">
            <h1 style={{fontSize:"30px",fontFamily:"Dancing Script"}}>Salim Ben Slama</h1>
            <div style={{display:"inline-flex",gap:"30px",alignItems:"center",float:"right"}}>
                <a className="DownloadCv" href="https://salimbenslama.vercel.app/files/CV - Salim Ben Slama [EN].pdf" download>Download CV</a>
                <div className="contact-btn">
                    <p>Contact</p>
                </div>
                <div className="select-lang">
                    <div className="lang-flag"></div>
                    <div className="lang">
                        <span style={{fontSize:"16px"}}>EN</span>
                        <span><IoIosArrowDown style={{paddingTop:"7px"}}/></span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;