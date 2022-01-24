import React from 'react'

export const CarouselHomeItem = ({ src, index }) => {
    const carouselItemRef = React.useRef()

    React.useEffect( () => {
        if(index === 0) {
            carouselItemRef.current.classList.add(`active`)
        }
    }, [])

    return(
        <div 
            ref={carouselItemRef}
            className='carousel-item'
            >
                <img src={src} className="d-block w-100" alt="..." />
        </div> 
    )
}