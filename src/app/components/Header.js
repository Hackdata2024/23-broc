import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Image from "next/image";
import logo from "../public/Logo.jpeg"


const Header = () => {
    return (
        <>
            <header>
                <div className={styles.main_header}>
                    <div className={styles.navbar_brand}>
                        <Link href="/">
                            <Image src={logo} alt="mylogo" width={80} height={80}/>
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