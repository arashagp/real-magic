import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";

export default function Home() {
    return (
        <>
            <div className="container mx-auto">
                <Navigation />
            </div>
            <Header />
        </>
    );
}
