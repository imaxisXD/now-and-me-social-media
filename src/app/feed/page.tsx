import { FeedPost } from "../../../components/feedPost"
import { FeedTimeLine } from "../../../components/feedTimeLine"
export default function feed() {
    const name = 'Jane'
    return (
        <main className="flex min-h-screen flex-col items-center bg-customBg relative">
            <div className="text-left w-full md:w-3/4 max-w-[700px] mt-9 mb-7">
                <h1 className="text-[#C5C7CA] text-2xl font-medium	mb-2">Hello {name}</h1>
                <p className="text-[#7F8084] text-base font-normal w-3/4">How are you doing today? Would you like to share something with the community 🤗</p>
            </div>
            <FeedPost />
            <FeedTimeLine />
        </main>
    )
}