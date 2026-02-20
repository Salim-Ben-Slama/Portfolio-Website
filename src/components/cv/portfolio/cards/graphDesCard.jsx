import Pic1 from "../../../assests/test19.jpg"
import Pic0 from "../../../assests/before.png"
import DragBef from "../../../assests/dragon-bef.png"
import DragAft from "../../../assests/dragon-aft.jpg"
import CyberBef from "../../../assests/cyber-bef.png"
import CyberAft from "../../../assests/cyber-aft.jpg"
import Banner1 from "../../../assests/Banner1.jpg"
import Banner2 from "../../../assests/Banner2.jpg"
import Banner3 from "../../../assests/Banner3.jpg"
import { IoMdArrowRoundForward } from "react-icons/io";


const GraphDesCard=()=>{
    return(
        <div className="graph-card" style={{display:'flex',flexDirection:'column',width:'fit-content'}} >
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><p className="Bef-Aft" style={{backgroundColor:'#444'}}>Before</p><p className="Bef-Aft" style={{fontWeight:'500'}}>After</p></div>
            <div style={{display:'flex',flexDirection:'column',width:'fit-content',gap:'30px'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'10px',position:'relative',alignItems:'center'}}>
                <img src={Pic0} alt="Project 1" style={{width:"350px",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
                <div className="afterCirc">
                    <IoMdArrowRoundForward />
                </div>
                <img src={Pic1} alt="Project 1" style={{width:"350px",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div style={{borderTop:'2px solid #ddd',height:'0px',margin:'0 20px'}}></div>
            <div style={{display:'flex',flexDirection:'row',gap:'10px',position:'relative',alignItems:'center'}}>
                <img src={CyberBef} alt="Project 1" style={{width:"350px",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
                <div className="afterCirc">
                    <IoMdArrowRoundForward />
                </div>
                <img src={CyberAft} alt="Project 1" style={{width:"350px",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div style={{borderTop:'2px solid #ddd',height:'0px',margin:'0 20px'}}></div>
            <div style={{display:'flex',flexDirection:'row',gap:'10px',position:'relative',alignItems:'center'}}>
                <img src={DragBef} alt="Project 1" style={{width:"350px",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
                <div className="afterCirc">
                    <IoMdArrowRoundForward />
                </div>
                <img src={DragAft} alt="Project 1" style={{width:"350px",objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
            </div>
            <div style={{borderTop:'2px solid #ddd',height:'0px',margin:'0 20px'}}></div>
            <img src={Banner1} alt="Project 1" style={{width:'710px',objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
            <div style={{borderTop:'2px solid #ddd',height:'0px',margin:'0 20px'}}></div>
            <img src={Banner2} alt="Project 1" style={{width:'710px',objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>
            <div style={{borderTop:'2px solid #ddd',height:'0px',margin:'0 20px'}}></div>
            <img src={Banner3} alt="Project 1" style={{width:'710px',objectFit:"cover",border:"1px solid #7070701A",boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"}}/>

            </div>
        </div>
    )
}
export default GraphDesCard