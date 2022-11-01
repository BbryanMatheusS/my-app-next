
import Nav_Bar from "../../components/Nav_Bar"
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <Link href='/'>
                <a><img src="/img/Header/Group.png"></img></a>
            </Link>
            
            <Nav_Bar/>
        </header>

    )
}