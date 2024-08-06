import Cards from "../cards/Cards";
import RecentlyUpdated from "../recentlyUpdated/RecentlyUpdated";
import Trending from "../trending/Trending";

export default function Main() {
    return (
        <main className="mt-10 flex flex-col gap-32">
            <RecentlyUpdated />
            <Trending />
            <Cards titleName={"New Releases - Movies"} />
            <Cards titleName={"New Releases - Series"} />
            <Cards titleName={"Recommendations"} />
        </main>
    );
}
