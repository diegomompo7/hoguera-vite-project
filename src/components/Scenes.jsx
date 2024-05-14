
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import scene1 from '../assets/img/scene1.png';
import { FormattedMessage } from "react-intl";

// import required modules
import { Navigation } from 'swiper/modules';
import "../styles/_layout.scss"


export const Scenes = () => {
    return(
    <>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper" initialSlide={5}>
        <SwiperSlide>
            <div className='mySwiper__up'>
            <img src={scene1} alt="" />
            <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 1</h1>
            </div>
            <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='mySwiper__up'>
            <img src={scene1} alt="" />
            <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 2</h1>
            </div>
            <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='mySwiper__up'>
            <img src={scene1} alt="" />
            <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 3</h1>
            </div>
            <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='mySwiper__up'>
            <img src={scene1} alt="" />
            <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 4</h1>
            </div>
            <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='mySwiper__up'>
            <img src={scene1} alt="" />
            <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 5</h1>
            </div>
            <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
        </SwiperSlide>
      </Swiper>
    </>
    )
}