/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useIntl, FormattedMessage } from "react-intl";
import { LanguageSelector } from "../App.jsx";
import one from "../assets/audio/1.mp3";
import React, { useRef, useState, useContext, useEffect } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";

// import required modules
import { Navigation } from 'swiper/modules';
import "../styles/_layout.scss"

import 'swiper/css'

export const Scenes = () => {

    const intl = useIntl();
    const { language } = useContext(LanguageSelector);
    const audioRef = useRef(null);
    const [isPlayed, setIsPlayed] = useState(false)

    console.log(language)

    useEffect(() => {
        audioRef.current.pause();
        setIsPlayed(false)
        audioRef.current.currentTime = 0;
    },[language])


    const params = new URLSearchParams(window.location.search);

    const initScene = params.get('init');

    const handleSlideChange = () => {
        if (audioRef.current && isPlayed) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlayed(false)
        }
    };

    const controlAudio = () =>{
        isPlayed ?
            (
            audioRef.current.pause(),
            setIsPlayed(false)
            )
        :
        (
            audioRef.current.play(),
            setIsPlayed(true)
            )
    } 

    return (
        <div>
            <Swiper  modules={[Navigation]} className="mySwiper" initialSlide={initScene != null ? initScene - 1 : 0} onSlideChange={handleSlideChange} navigation={true}>
                <SwiperSlide className='mySwiper__slider'>
                    <div className='mySwiper__up'>
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene1"></FormattedMessage></h1>
                    </div>
                    <p className='mySwiper__description'><FormattedMessage id="description1"></FormattedMessage></p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source src={intl.formatMessage({ id: 'audio1' })} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => controlAudio()}>{ isPlayed ? <HiSpeakerXMark />  :  <HiSpeakerWave />}</button>
                </SwiperSlide>
                <SwiperSlide className='mySwiper__slider'>
                    <div className='mySwiper__up'>
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene2"></FormattedMessage></h1>
                    </div>
                    <p className='mySwiper__description'><FormattedMessage id="description2"></FormattedMessage> </p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source  type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => controlAudio()}>{ isPlayed ? <HiSpeakerXMark />  :  <HiSpeakerWave />}</button>
                </SwiperSlide>
                <SwiperSlide className='mySwiper__slider'>
                    <div className='mySwiper__up'>
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene3"></FormattedMessage></h1>
                    </div>
                    <p className='mySwiper__description'><FormattedMessage id="description3"></FormattedMessage></p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source  type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => controlAudio()}>{ isPlayed ? <HiSpeakerXMark />  :  <HiSpeakerWave />}</button>
                </SwiperSlide>
                <SwiperSlide className='mySwiper__slider'>
                    <div className='mySwiper__up'>
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene4"></FormattedMessage></h1>
                    </div>
                    <p className='mySwiper__description'><FormattedMessage id="description4"></FormattedMessage></p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source  type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => controlAudio()}>{ isPlayed ? <HiSpeakerXMark />  :  <HiSpeakerWave />}</button>
                </SwiperSlide>
                <SwiperSlide className='mySwiper__slider'>
                    <div className='mySwiper__up'>
                        <h1 className='mySwiper__up--title'> <FormattedMessage id="scene5"></FormattedMessage></h1>
                    </div>
                    <p className='mySwiper__description'><FormattedMessage id="description5"></FormattedMessage></p>
                    <audio id="audioPlayer" ref={audioRef}>
                        <source  type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => controlAudio()}>{ isPlayed ? <HiSpeakerXMark />  :  <HiSpeakerWave />}</button>
                </SwiperSlide>
    
            </Swiper>
            
        </div>
    )
}