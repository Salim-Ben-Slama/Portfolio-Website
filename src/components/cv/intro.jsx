import WavingHand from "../assests/waving-hand.png"
import PersPic from "../assests/pers-pic.png"

const Intro=()=>{
    return(
        <div style={{position:"relative",top:"-50px",display:"flex", alignItems:"center",justifyContent:"space-between",width:"100%"}}>
            <div>
                <p style={{fontSize:"24px",display:"flex",alignItems:"center",gap:"9px",margin:"0"}}><span><img src={WavingHand} alt="WavingHand" style={{height:"38px",width:"38px"}}/></span>Hi,  I'm <span style={{color:"#658EFF"}}>Salim Ben Slama</span></p>
                <p style={{fontSize:"44px", margin:"14px 0 0 0"}}>Full Stack Developer</p>
                <p style={{fontSize:"36px", margin:"0 0 17px 0"}}>With High Skills</p>
                <p style={{fontSize:"16px",margin:"0"}}>I seek to push the limits of creativity to create high engaging, <br/>user friendly, and memoriable interatcive experiences.</p>
            </div>
            <img src={PersPic} alt="personal" style={{height:"450px"}}/>
        </div>

    )
}

export default Intro;