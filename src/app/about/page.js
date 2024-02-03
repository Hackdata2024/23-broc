import Herosection from "@/app/components/herosection";
import Header from "@/app/components/Header";
import styles from "@/app/styles/common.module.css"

const Page = () => {
    return (
        <>
            <Header/>
            <Herosection title ={"Our Story"}/>
        </>
    );
};

export default Page;