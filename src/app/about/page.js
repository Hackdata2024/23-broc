import Herosection from "@/app/components/herosection";
import Nav from "@/app/components/Nav";
import Header from "@/app/components/Header";

const Page = () => {
    return (
        <>
            <Header/>
            <Herosection title ={"Our Story"} imageUrl ={"./about1.svg"}/>
        </>
    );
};

export default Page;