import Navbar from "../../components/Navbar";
import Main from "../Home/Main";
import TopRatedTVSeries from "../Home/TopRatedTVSeries";
import TrendingTVSeries from "../Home/TrendingTVSeries";
import { motion, AnimatePresence } from 'framer-motion'

export default function TVshowPage() {
    const title = {
        trendingTVSeries: 'Top Trending TV Series',
        topratedSeries: 'Top Rated TV Series',
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
                <TrendingTVSeries title={title.trendingTVSeries} />
                <TopRatedTVSeries title={title.topratedSeries} />
            </motion.div>
        </AnimatePresence>
    )
}
