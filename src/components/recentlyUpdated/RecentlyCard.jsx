export default function RecentlyCard({ movie }) {
    return (
        <>
            <div className="text-sm flex items-center gap-2">
                <img
                    src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                    alt=""
                />
                <div className="flex flex-col justify-between gap-2">
                    <h5>{movie.name}</h5>
                    <span>{movie.first_air_date}</span>
                </div>
            </div>
        </>
    );
}
