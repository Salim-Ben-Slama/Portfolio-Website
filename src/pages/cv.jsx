import Intro from "../components/cv/intro.jsx"
import Portfolio from "../components/cv/portfolio.jsx"
import AboutMe from "../components/cv/aboutMe.jsx"
import SideNav from "../components/cv/sideNav.jsx"

const Cv=()=>{
    return(
        <>
            <SideNav/>
            <div style={{display:"flex",flexDirection:"column",gap:"0px"}}>
                
                <section style={{minHeight:"90vh"}}>
                    <div  id="Home" className="intro">
                        <Intro/>
                    </div>
                    
                </section>
                <section id="Portfolio" className="portfolio">
                    <Portfolio/>
                </section>
                <section id="About" className="aboutMe">
                    <AboutMe/>
                </section>
            </div>
        </>
    )
}

export default Cv;