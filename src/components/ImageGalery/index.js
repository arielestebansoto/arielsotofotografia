import React from 'react'

import './styles.scss'
import { galeryImageWeddings } from '../../utils/galeryImageWeddings'

export const ImageGalery = () => {
    const images = galeryImageWeddings
    return(
        <>
            <h3 className='text-center mt-4 fw-lighter text-uppercase'>Casamientos</h3>
            
            <div className='ImageGalery p-4'>
                {
                    images.map( (image, index) =>
                        <div className='ImageContainer p-1' key={index}>
                            <img src={image.src} alt=''/>
                        </div> 
                    )
                }
            </div>
        </>        
    )
}