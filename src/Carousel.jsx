import React, { useState } from 'react'
import { shortList, list, longList } from './data'
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaQuoteRight } from "react-icons/fa";

const Carousel = () => {
    let [people, setPeople] = useState(longList);
    let [index, setIndex] = useState(0);

    const { id, name, title, quote, image } = people[index]

    return (
        <section className='slider-container'>
            <article className='slide'>

                <img className='person-img' src={image} alt={name} />
                <h5 className='name'>{name}</h5>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
            </article>

            <button disabled={index <= 0} className='prev' onClick={() => setIndex(index - 1)}><FcPrevious /></button>
            <button disabled={index >= people.length - 1} className='next' onClick={() => setIndex(index + 1)}><FcNext /></button>

        </section>
    )
}

export default Carousel
