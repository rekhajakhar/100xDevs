import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "learn coding",
    image: "photo.jpg",
    thumnail: "photo.jpg",
    author: "rekha",
    views: "10k",
    timestamp: "1day"
}, {
    title: "learn coding2",
    image: "photo.jpg",
    thumnail: "photo.jpg",
    author: "rekha",
    views: "10k",
    timestamp: "1day"
}, {
    title: "learn coding3",
    image: "photo.jpg",
    thumnail: "photo.jpg",
    author: "rekha",
    views: "10k",
    timestamp: "1day"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
    title={video.title}
    image={video.image}
    thumnail={video.thumnail}
    author={video.author}
    views={video.views}
    timestamp={video.timestamp}
    ></VideoCard>
    </div>
    )}
    </div>
}