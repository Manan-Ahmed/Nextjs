type greet = {
    userName?: string
}




export default function Greet({userName}: greet){
    return <h1>welcome {userName}</h1>
}