import { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliding(props) {
	const [movie, setMovie] = useState([])

	useEffect(() => {
		try {
			// eslint-disable-next-line react/prop-types
			axios.get(props.requestsAPI).then(response => {
				setMovie(response.data)
			})
		} catch (error) {
			console.log(error)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	var settings = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 8,
		slidesToScroll: 2,
		swipeToSlide: true,
		initialSlide: 0,
		lazyLoad: true,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				}
			}
		]
	};

	if (!movie) return null

	return (
		<Slider {...settings}>
			{movie && (
				movie.map(val => (
					<div key={val.id} className='cursor-pointer relative px-2 h-1/2'>
						<LazyLoadImage
							className='w-full h-full'
							alt='Image Alt'
							src={`https://image.tmdb.org/t/p/original/${val?.poster_path}`}
							effect="blur"
						/>
					</div>
				))
			)}
		</Slider>
	)
}