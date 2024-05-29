/* eslint-disable no-unused-vars */

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import scene1 from '../assets/img/scene1.png';
import { FormattedMessage } from "react-intl";
import one from "../assets/audio/1.mp3";
import React, { useRef } from 'react';

// import required modules
import { Navigation } from 'swiper/modules';
import "../styles/_layout.scss"


export const Scenes = () => {

    const audioRef = useRef(null);

    const params = new URLSearchParams(window.location.search);

    const initScene = params.get('init');

    const handleSlideChange = () => {
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      };

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" initialSlide={initScene != null ? initScene - 1 : 0} onSlideChange={handleSlideChange}>
                <SwiperSlide>
                    <div className='mySwiper__up'>
                        <img src={scene1} alt="" />
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 1</h1>
                    </div>
                    <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source src={one} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => audioRef.current.play()}>Play</button>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mySwiper__up'>
                        <img src={scene1} alt="" />
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 2</h1>
                    </div>
                    <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source src={one} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => audioRef.current.play()}>Play</button>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mySwiper__up'>
                        <img src={scene1} alt="" />
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 3</h1>
                    </div>
                    <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source src={one} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => audioRef.current.play()}>Play</button>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mySwiper__up'>
                        <img src={scene1} alt="" />
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 4</h1>
                    </div>
                    <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source src={one} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => audioRef.current.play()}>Play</button>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mySwiper__up'>
                        <img src={scene1} alt="" />
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene"></FormattedMessage> 5</h1>
                    </div>
                    <p className='mySwiper__description'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, venenatis mattis integer sagittis himenaeos litora nibh, faucibus quam </p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source src={one} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => audioRef.current.play()}>Play</button>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}