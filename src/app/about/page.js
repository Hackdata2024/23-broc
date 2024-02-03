import Herosection from "@/app/components/herosection";
import Header from "@/app/components/Header";
import styles from "@/app/styles/common.module.css"

const Page = () => {
    return (
        <>
            <Header/>
            <Herosection title ={"Our Story"} imageUrl ={"./about1.svg"}/>
        </>
    );
};

export default Page;