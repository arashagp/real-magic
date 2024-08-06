import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Navigation from "../components/navigation/Navigation";

export default function Home() {
    return (
        <>
            <div className="container mx-auto">
                <Navigation />
            </div>
            <Header />
            <div className="container mx-auto">
                <Main />
            </div>
        </>
    );
}
