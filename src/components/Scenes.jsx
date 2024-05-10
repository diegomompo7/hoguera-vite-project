
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import scene1 from '../assets/img/scene1.png';

// import required modules
import { Navigation } from 'swiper/modules';


export const Scenes = () => {
    return(
    <>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src={scene1} alt="" />
            <h1>SCENE 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
        </SwiperSlide>
      </Swiper>
    </>
    )
}