import React from 'react'

import { NavBar } from '../../components/Header'
import { CarouselHome } from '../../components/CarouselHome'
import { WebInDevelop } from '../../components/WebInDevelop'
import { ImageGalery } from '../../components/ImageGalery'
import { Contact } from '../../components/Contact'

export const Home = () => {
    return(
        <>
            <NavBar />
            <WebInDevelop />
            <CarouselHome />
            <ImageGalery />
            <Contact />
        </>
    )
}