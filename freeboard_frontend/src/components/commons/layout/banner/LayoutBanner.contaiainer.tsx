import styled from '@emotion/styled'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const Slider2 = styled(Slider)`
  width: 70%;
	height: auto;
	
`
const Banner = styled.img`
	width: 100%;
	height: auto;
`
const Back = styled.div`
	background-color: #000000;
	display: flex;
	justify-content: center;
`
export default function LayoutBanner() { 
  
  const settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		infinite: true,
		speed: 30,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <RightOutlined />,
		prevArrow: <LeftOutlined />,
		
	};
  
	return (
		<Back>
			<Slider2 {...settings}>
				<div>
					<Banner src="/Group 3.png" />
				</div>
				<div>
					<Banner src="/banner8002.jpg" />
				</div>
				<div>
					<Banner src="/banner8003.jpg" />
				</div>
			</Slider2>
		</Back>
	);
}