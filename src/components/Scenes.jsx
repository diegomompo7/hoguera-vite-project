/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useIntl, FormattedMessage } from "react-intl";
import { LanguageSelector } from "../App.jsx";
import React, { useRef, useState, useContext, useEffect, createRef } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";

// import required modules
import { Navigation } from 'swiper/modules';
import "../styles/_layout.scss"

import 'swiper/css'

export const Scenes = () => {

    const intl = useIntl();
    const { language } = useContext(LanguageSelector);
    const audioRefs = useRef(Array.from({ length: 5 }, () => createRef()))
    const [isPlayed, setIsPlayed] = useState([false, false, false, false, false]); // Un estado para cada escena

    console.log(isPlayed)

    useEffect(() => {
        audioRefs.current.forEach((ref, index) => {
            if (ref.current) {
                ref.current.pause();
                ref.current.currentTime = 0;
                ref.current.load();
                setIsPlayed(prevState => prevState.map((state, i) => i === index ? false : state)); // Reiniciar el estado de reproducción de la escena
            }
        });
    }, [language]);


    const params = new URLSearchParams(window.location.search);

    let initScene = params.get('init');

    initScene !== null ? initScene : initScene = '0'

    const handleSlideChange = () => {
        audioRefs.current.forEach((ref, index) => {
            if (ref.current && isPlayed[index]) {
                ref.current.pause();
                ref.current.currentTime = 0;
                setIsPlayed(prevState => prevState.map((state, i) => i === index ? false : state));
            }
        });
    };

    const controlAudio = (sceneNumber) => {
        setIsPlayed(prevState => {
            const newState = [...prevState];
            newState[sceneNumber] = !newState[sceneNumber];
            return newState;
        });
        const audioIndex = sceneNumber;
        const audio = audioRefs.current[audioIndex].current;
        if (audio) {
            if (isPlayed[audioIndex]) {
                audio.pause();
            } else {
                audio.play();
            }
        }
    };

    const handleAudioEnded = (sceneNumber) => {
        setIsPlayed(prevState => {
            const newState = [...prevState];
            newState[sceneNumber] = false;
            return newState;
        });
    };


    return (
        <div>

            {initScene === '0' ? <div className="mySwiper">
                <div className='mySwiper__slider'><div className='mySwiper__up'>
                    <h1 className='mySwiper__up--title'> <FormattedMessage id={`sceneIntro`} /></h1>
                </div>
                    <p className='mySwiper__description'><FormattedMessage id={`descriptionIntro`} /></p>
                    <audio id={`audioPlayerIntro`} ref={audioRefs.current[initScene]} onEnded={() => handleAudioEnded(initScene)}>
                        <source src={intl.formatMessage({ id: `audioIntro` })} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button className='mySwiper__play' onClick={() => controlAudio(initScene)}>
                        {isPlayed[initScene] ? <HiSpeakerXMark /> : <HiSpeakerWave />}
                    </button> </div></div> :


                <Swiper modules={[Navigation]} loop={true} className="mySwiper" initialSlide={initScene != null ? initScene : 0} onSlideChange={handleSlideChange} navigation={true}>

                    {[...Array(4)].map((_, index) => (
                        <SwiperSlide key={`${((4 +index))%4+1}`} className='mySwiper__slider'>
                            <div className='mySwiper__up'>
                                <h1 className='mySwiper__up--title'> <FormattedMessage id={`scene${((4 +index))%4+1}`} /></h1>
                            </div>
                            <p className='mySwiper__description'><FormattedMessage id={`description${((4 +index))%4+1}`} /></p>
                            <audio id={`audioPlayer${((4 +index))%4+1}`} ref={audioRefs.current[((4 +index))%4+1]} onEnded={() => handleAudioEnded(((4 +index))%4+1)}>
                                <source src={intl.formatMessage({ id: `audio${((4 +index))%4+1}` })} type="audio/mpeg" />
                                Tu navegador no soporta el elemento de audio.
                            </audio>
                            <button className='mySwiper__play' onClick={() => controlAudio(((4 +index))%4+1)}>
                                {isPlayed[((4 +index))%4+1] ? <HiSpeakerXMark /> : <HiSpeakerWave />}
                            </button>
                        </SwiperSlide>
                    ))}


                </Swiper>
            }
        </div>
    )
}