import WebDevCard from "./cards/webDevCard.jsx";        
const WebDevProjects=()=>{
    return(
        <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"50px 30px"}}>
                <WebDevCard/>
                <WebDevCard/>
            </div>
        </div>

    )
}

export default WebDevProjects;