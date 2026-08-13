import { useState } from 'react';
import sliderImage1 from '../../assets/sliderImages/apartment-1.jpg'
import sliderImage2 from '../../assets/sliderImages/apartment-2.jpg'
import sliderImage3 from '../../assets/sliderImages/apartment-3.jpg'

export function Slider(){
    const [sliderIndex, setSliderIndex] = useState
    // Billeder skal i et array
    // Back and forth knap
    const sliderImages =[sliderImage1,sliderImage2,sliderImage3];

    return(
        <figure>
            <img src={sliderImages[sliderIndex]} />
        </figure>
    )
}