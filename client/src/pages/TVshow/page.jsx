import Navbar from "../../components/Navbar";
import Main from "../Home/Main";
import TopRatedTVSeries from "./TopRatedTVSeries";
import TrendingTVSeries from "./TrendingTVSeries";
import PopularTVSeries from "./PopularTVSeries";
import { motion, AnimatePresence } from 'framer-motion'

export default function TVshowPage() {
    const title = {
        trendingTVSeries: 'Top Trending TV Series',
        topratedTVSeries: 'Top Rated TV Series',
        popularTVSeries: 'Popular TV Series',
    }

    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <Navbar />
                <Main />
                <div className="bg-black relative">
                    <PopularTVSeries title={title.popularTVSeries} />
                    <TrendingTVSeries title={title.trendingTVSeries} />
                    <TopRatedTVSeries title={title.topratedTVSeries} />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
