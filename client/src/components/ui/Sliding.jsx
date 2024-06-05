import { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '../Modal';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Sliding(props) {
	const [movie, setMovie] = useState([])

	const apiURL = async () => {
		await axios.get(props.requestsAPI).then(response => {
			setMovie(response.data)
		}, error => console.log(error))
	}

	useEffect(() => {
		apiURL();
	}, [])

	if (!movie) return null

	return (
		<Swiper
			slidesPerView={8}
			slidesPerGroup={1}
			slideToClickedSlide={true}
			loop={true}
			spaceBetween={10}
			navigation={true}
			breakpoints={{
				1440: {
					slidesPerView: 7,
					spaceBetween: 10
				},
				1200: {
					slidesPerView: 6,
					spaceBetween: 10
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 10
				},
				600: {
					slidesPerView: 5,
					spaceBetween: 10
				},
				450: {
					slidesPerView: 4,
					spaceBetween: 5
				},
				320: {
					slidesPerView: 3,
					spaceBetween: 5
				},
			}}
			modules={[Navigation, HashNavigation]}
			className='mySwiper'
		>	
			{movie?.map(val => (
				<SwiperSlide key={val.id} data-hash={val.id} className='cursor-pointer p-2 bg-gray-600 shadow-inner shadow-white'>
					<Modal 
						labelModal={false}
                        id={val?.id} 
                        title={val?.title} 
                        overview={val?.overview} 
                        date={val?.release_date}
                        image={`https://image.tmdb.org/t/p/original/${val?.poster_path}`}
                        runtime={val?.runtime}
						rating={val?.vote_average.toFixed(1)}
						typesFilm={props.types}
                    />
				</SwiperSlide>
			))}
		</Swiper>
	)
}