import React from 'react'

import './styles.scss'

import { CarouselHomeItem } from '../CarouselHomeItem'
import { carouselHomeImages } from '../../utils/carouselHomeImages'

export const CarouselHome = () => {
    React.useEffect( ()=> {
        $('.carousel').carousel({
            interval: 3000,
            wrap: true
        })
    }, [])

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            {}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

            </div>

            <div className="carousel-inner">
                {
                    carouselHomeImages.map( (item, index) => (
                        <CarouselHomeItem 
                            src={item.src} 
                            index={index}
                            key={index}
                        />
                    ))
                }
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}