import Intro from "../components/cv/intro.jsx"
import Portfolio from "../components/cv/portfolio.jsx"

const Cv=()=>{
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"0px"}}>
            <section style={{minHeight:"90vh"}}>
                <div className="intro">
                    <Intro/>
                </div>
                
            </section>
            <section className="portfolio">
                <Portfolio/>
            </section>
        </div>
    )
}

export default Cv;