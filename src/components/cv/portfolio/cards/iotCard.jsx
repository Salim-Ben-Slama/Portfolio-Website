import SmartBinSystem from '../../../assests/SmartBinSystem.png';
const WebDevCard=()=>{
    return(
        <div className="web-card">
            <img src={SmartBinSystem} alt="Project 1" style={{width:"100%",aspectRatio: "1841 / 876",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
            <div>
                <h3 style={{fontSize:"18px",fontWeight:"500",marginBottom:"5px"}}>Smart Trash Bin Monitoring System</h3>
                <p style={{fontSize:"14px"}}>Developed an IoT smart waste monitoring system using ESP32 and ultrasonic sensors to detect bin levels and send automated WhatsApp alerts over Wi-Fi.<br/><span style={{fontWeight:"600"}}>Technologies: ESP32, C++/Arduino, HC-SR04 sensors, Wi-Fi, CallMeBot API, Wokwi Simulation Platform.</span></p>
            </div>                    
            <div>
                <div className="demo-btn">Live simulation</div>
            </div>
        </div>

    )
}

export default WebDevCard;