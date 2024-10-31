import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="grid grid-cols-3">
        <div className="text-md">
            youtube
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            sign in
        </div>

    </div>
}