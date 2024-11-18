import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function VideoBanner(props) {
    const key = 'b5dc2ae423fdfd220737f5f979a6c7c1'
    const [trailer, setTrailer] = useState('')
    const apiVideo = `https://api.themoviedb.org/3/${props.videoTypes}/${props.id}/videos?api_key=${key}&language=en-US`

    const getTrailerAPI = async () => {
        await axios.get(apiVideo).then(response => {
            setTrailer(response.data.results[response.data.results.length - 1].key)
        })
    }

    useEffect(() => {
        getTrailerAPI();
    }, [])

    return (
        <>
            <div className='md:block hidden h-full'>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${trailer}?origin=http:localhost:5173`}
                    playing={true}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
            <div className='md:hidden block h-3/6'>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${trailer}?origin=http:localhost:5173`}
                    playing={true}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
        </>
    )
}
