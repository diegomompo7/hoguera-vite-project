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

    console.log(language)
    console.log(isPlayed)


    useEffect(() => {
        audioRefs.current.forEach((ref, index) => {
            if (ref.current) {
                ref.current.pause();
                ref.current.currentTime = 0;
                setIsPlayed(prevState => prevState.map((state, i) => i === index ? false : state)); // Reiniciar el estado de reproducción de la escena
            }
        });
    }, [language]);
    

    const params = new URLSearchParams(window.location.search);

    const initScene = params.get('init');

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
        console.log(audioIndex)
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
        newState[sceneNumber - 1] = false;
        return newState;
    });
};


    return (
        <div>
            <Swiper modules={[Navigation]} className="mySwiper" initialSlide={initScene != null ? initScene - 1 : 0} onSlideChange={handleSlideChange} navigation={true}>

                {[...Array(5)].map((_, index) => (
                    <SwiperSlide key={index} className='mySwiper__slider'>
                        <div className='mySwiper__up'>
                            <h1 className='mySwiper__up--title'> <FormattedMessage id={`scene${index + 1}`} /></h1>
                        </div>
                        <p className='mySwiper__description'><FormattedMessage id={`description${index + 1}`} /></p>
                        <audio id={`audioPlayer${index + 1}`} ref={audioRefs.current[index]} onEnded={() => handleAudioEnded(index + 1)}>
                            <source src={intl.formatMessage({ id: `audio${index + 1}` })} type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>{console.log(intl.formatMessage({ id: `audio${index + 1}` }))}
                        <button className='mySwiper__play' onClick={() => controlAudio(index)}>
                            {isPlayed[index] ? <HiSpeakerXMark /> : <HiSpeakerWave />}
                        </button>
                    </SwiperSlide>
                ))}


            </Swiper>

        </div>
    )
}