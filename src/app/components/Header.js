import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Image from "next/image";
import logo from "../public/Logo.png"


const Header = () => {
    return (
        <>
            <header>
                <div className={styles.main_header}>
                    <div className={styles.navbar_brand}>
                        <Link href="/">
                            <Image className="px-2" src={logo} alt="mylogo" width={245.5} height={130}/>
                            {/*<Image src="/logo.png" alt="mylogo" width={150} height={40}/>*/}
                        </Link>
                    </div>
                    <Nav/>
                </div>

            </header>
        </>
    );
};

export default Header;