/* eslint-disable react/prop-types */
import Sliding from '../../components/ui/Sliding';

export default function TrendingTVSeries(props) {

    return (
        <div className='-translate-y-24'>
            <div className='py-4 px-11'>
                <h1 className='text-2xl my-4'>{props.title}</h1>
				{/* <Sliding requestsAPI={`${import.meta.env.VITE_BACKEND_URL}/requestTrendingTVSeries`}/> */}
				<Sliding requestsAPI={`https://streaming-server-five.vercel.app/requestTrendingTVSeries`}/>
            </div>
        </div>
    )
}
