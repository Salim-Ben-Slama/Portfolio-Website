
import SmartBinSystem from '../../assests/SmartBinSystem.png';

const IaMl=()=>{
    return (
        <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"50px 30px"}}>
            <div className="web-card">
                <img src={SmartBinSystem} alt="Project 1" style={{width:"100%",aspectRatio: "1841 / 876",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
                <div>
                    <h3 style={{fontSize:"18px",fontWeight:"500",marginBottom:"5px"}}>Prediction of Maximum Ozone (O₃) Levels</h3>
                    <p style={{fontSize:"14px"}}> Built a machine learning model to predict daily O₃ concentrations using environmental data, achieving validated performance with RMSE and R².<br/><span style={{fontWeight:"600"}}>Technologies: Python, Pandas, NumPy, Scikit-learn, Matplotlib.</span></p>
                </div>                    
                <div>
                <a href="https://wokwi.com/projects/396234290579465217" target="_blank" rel="noopener noreferrer" className="demo-btn">Live Simulation & Code</a>
                </div>
            </div>
            </div>


        </div>
    )
}
export default IaMl