import styled from '@emotion/styled'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = styled.img`
  width: 100%;

`



export default function LayoutBanner() { 
  
  var settings = {
    autoplay: true,
    autoplaySpeed:2500,
    dots: true,
    infinite: true,
    speed: 30,
    slidesToShow: 1,
    slidesToScroll: 1,
};
  
  return (
		<Slider {...settings}>
			<div>
				<Banner src="/banner1.webp" />
			</div>
			<div>
				<Banner src="/banner2.webp" />
			</div>
			<div>
				<Banner src="/banner3.jpeg" />
			</div>
		</Slider>
	);
}