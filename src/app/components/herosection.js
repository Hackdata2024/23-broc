
'use client'
import herostyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Link from "next/link";
import {Mulish} from "next/font/google";
import Image from "next/image";
import heroStyles from "@/app/styles/herosection.module.css"
import Spline from '@splinetool/react-spline';


const mulish = Mulish({
    weight: ['300','400','500','600','700','800','900'],
    subsets: ['latin'],
    display: 'swap'
})

const Herosection = ({title,imageUrl}) => {
    return (
        <main className={herostyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={herostyles.hero_content}>
                        <h1>{title}</h1>
                        <p>
                            Welcome to our cutting-edge medical pharmacy store, where trust meets technology. Harnessing the power of blockchain, we ensure a secure and tamper-proof system for purchasing over-the-counter drugs, prioritizing your safety and peace of mind.
                        </p>
                        <Link href="">
                            <button className={mulish.className}>
                                Get Started
                            </button>
                        </Link>
                    </div>
                    <div className={styles.spline_comp}>
                        <Spline scene="https://prod.spline.design/pmEyvZDSG9tzX92z/scene.splinecode" />
                        {/*<Spline scene="https://my.spline.design/dnaparticles-13aa542aa1a6c2e1c348a22e3d4f06a7/" />*/}
                        {/*<Image src={imageUrl} alt="image" height={100} width={500}/>*/}
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Herosection;