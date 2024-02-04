import Herosection from "@/app/components/herosection";
import Header from "@/app/components/Header";
import styles from "@/app/styles/common.module.css"

const Page = () => {
    return (
        <>
            <Header/>
            <Herosection title ={"Our Story"} content={"We're innovators from Shiv Nadar University's \"Hackdata\" hackathon, driven to revolutionize healthcare with blockchain. Our interdisciplinary team crafts cutting-edge solutions, prioritizing transparency and patient safety. Join us in reshaping healthcare through innovation and collaboration."}/>
        </>
    );
};

export default Page;