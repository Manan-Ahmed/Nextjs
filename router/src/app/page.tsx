import Link from "next/link";


export default function Home(){
  return(
    <>
   <Link href={'/About'}>About</Link>
   <br />
   <Link href={'/Contact'}>Contact</Link>
    </>
  )
}