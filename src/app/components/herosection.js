
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

const Herosection = ({title,imageUrl,content}) => {
    return (
        <main className={herostyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={herostyles.hero_content}>
                        <h1>{title}</h1>
                        <p>
                            {content}
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
            {/*<div className={styles.shape_div}>*/}
            {/*    <svg className={styles.shape_div_svg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"*/}
            {/*         preserveAspectRatio="none">*/}
            {/*        <path*/}
            {/*            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"*/}
            {/*            className="shape-fill"></path>*/}
            {/*    </svg>*/}
            {/*</div>*/}
        </main>
    );
};

export default Herosection;