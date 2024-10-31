
export function VideoCard(props: any) {
    return <div className="p-3 cursor-pointer">
        <img src={props.image}></img>
        <div className="grid grid-cols-12">
            <div className="col-span-2">
            <img className="rounded-full w-20 h-20" src={props.thumnail}></img>
            </div>
            <div>
            <div className="col-span-10">
                {props.title}
            </div>
            <div className="col-span-10 text-gray-400 text-base">
                {props.author}
            </div>
            <div className="col-span-10 text-gray-400 text-bas">
                {props.views} | {props.timestamp}
            </div>
            </div>
        </div>
    </div>
}