import Herosection from "@/app/components/herosection";
import Header from "@/app/components/Header";
import styles from "@/app/styles/common.module.css"

const Page = () => {
    return (
        <>
            <Header/>
            <Herosection title ={"Our Story"} imageUrl ={"./about1.svg"}/>
            {/*<section className={styles.medical_checkup}>*/}
            {/*    <div className={styles.medical_checkup_main}>*/}
            {/*        <div className={styles.medical_checkup_main_img1}>*/}
            {/*            <p>hello</p>*/}
            {/*        </div>*/}
            {/*        <div className={styles.medical_checkup_main_img1}>*/}
            {/*            <p>hi</p>*/}
            {/*        </div>*/}
            {/*        <div className={styles.medical_checkup_main_img1}>*/}
            {/*            <p>hola</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    );
};

export default Page;