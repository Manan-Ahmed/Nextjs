import Link from "next/link";


export default function Home(){
  return(
    <>

    <h1>hello mars</h1>
   <Link href={'/About'}>About</Link>
   <br />
   <Link href={'/Contact'}>Contact</Link>
    </>
  )
}