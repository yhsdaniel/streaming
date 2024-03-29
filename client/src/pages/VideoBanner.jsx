import axios from 'axios'
import requests from "../Request"
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function VideoBanner(props) {
    const [trailer, setTrailer] = useState('')
    const apiVideo = `https://api.themoviedb.org/3/${props.videoTypes}/${props.id}/videos?api_key=${requests.key}&language=en-US`
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
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}?origin=http:localhost:5173`}
                playing={true}
                width={'100%'}
                height={'90%'}
            />
        </>
    )
}
