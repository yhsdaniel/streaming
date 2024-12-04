import React, { useContext } from 'react'
import { ListMovieContext } from '../ListMovies';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Modal = React.lazy(() => import('../Modal'))

export default function Sliding(props) {
	const listmovies = useContext(ListMovieContext)
	{
		listmovies.length > 0
		return (
			<Swiper
				slidesPerView={8}
				slidesPerGroup={1}
				loop={true}
				spaceBetween={10}
				navigation={true}
				centeredSlides={true}
				pagination={false}
				modules={[Navigation, HashNavigation]}
				className='mySwiper'
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
			>
				{listmovies?.map((val, index) => (
					<SwiperSlide key={index} className='relative cursor-pointer p-1 shadow-inner shadow-white max-[600px]:p-0 max-[600px]:shadow-none'>
						<Modal
							labelModal={false}
							id={val?.id}
							typesFilm={props.types}
							title={val?.title}
							overview={val?.overview}
							date={val?.release_date}
							image={`https://image.tmdb.org/t/p/w200/${val?.poster_path}`}
							runtime={val?.runtime}
							rating={val?.vote_average.toFixed(1)}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		)
	}
}