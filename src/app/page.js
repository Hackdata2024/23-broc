import Header from "@/app/components/Header";
import Herosection from "@/app/components/herosection";


const Page = () => {
    return (
        <>
            <Header/>
            <Herosection title={"Pharmacy needs made easy"} content={ "Welcome to our cutting-edge medical pharmacy store, where trust meets technology. Harnessing the power of blockchain, we ensure a secure and tamper-proof system for purchasing over-the-counter drugs, prioritizing your safety and peace of mind."} imageUrl={"/home.svg"}/>
        </>
    );
};

export default Page;