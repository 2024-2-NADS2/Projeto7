import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Slide1Image from '../assets/slide1.png';
import Slide2Image from '../assets/slide2.png';

const Espaco = styled.div`
  height: 40px; 
`;

const EspacoSlides = styled.div`
  position: relative;     
  max-height: 40vh;
  width: calc(100% - 80px);
  margin: 0 auto;
  overflow: hidden;
`;

const Animacaoslides = styled.div`
  animation: fade 1.5s ease-in-out;
`;

const SetaD = styled.button`
  position: absolute; 
  top: 50%;   
  border: none; 
  padding: 10px; 
  cursor: pointer;  
  border-radius: 50%; 
  transform: translateY(-50%);  
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: #000;
  right: 5px; 
`;

const SetaE = styled.button`
  position: absolute; 
  top: 50%;   
  border: none; 
  padding: 10px; 
  cursor: pointer;  
  border-radius: 50%; 
  transform: translateY(-50%);  
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: #000;
  left: 5px; 
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const slides = [Slide1Image, Slide2Image];

function Slides() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <>
            <Espaco />
            <EspacoSlides>
                <Animacaoslides>
                    <SlideImage src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                </Animacaoslides>
                <SetaE onClick={prevSlide}>&#10094;</SetaE> 
                <SetaD onClick={nextSlide}>&#10095;</SetaD>
            </EspacoSlides>
            <Espaco />
        </>
    );
}

export default Slides;
