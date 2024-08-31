


export default function Navbar({onchang}:any){

    return(
        <>
       
       <div className="nav" style={{display: 'flex',border: '1px solid black',justifyContent: "space-between", padding: '1rem'}}>
           <div className="navbar">
            <h2>Navbar</h2>
            </div>

            <ul style={{display: 'flex',border: '1px solid black',justifyContent: "space-between",gap: '20px',listStyleType: "none",marginRight: "20px",padding: "5px",width: '500px'}}>
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Contact">Contact</a></li>
                <li><button onClick={onchang}>AddStudent</button></li>

            </ul>
           </div>
</>
    )
}