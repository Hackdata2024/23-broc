import Header from "@/app/components/Header";
import Herosection from "@/app/components/herosection";


const Page = () => {
    return (
        <>
            <Header/>
            <Herosection title={"Pharmacy needs made easy"} imageUrl={"/home.svg"}/>
        </>
    );
};

export default Page;