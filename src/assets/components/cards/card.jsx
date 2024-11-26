import React from 'react'
import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';
function Card() {
    const [products, setProducts] = useState([])


    async function getProduct() {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return data
    }

    async function set() {
        setProducts(await getProduct())
    }

    useEffect(() => {
        set()


    }, [])
    return (
        <div className='cards'>
            <div className='card_text'>
                <h1>TRENDING</h1>
                <p>Top view in this week</p>
            </div>
            <div className='big_box'>

                {products.map((x) =>
                    <div className='box'>
                        <div className='box_image'><img src={x.image}></img></div>
                        <div className='box_name'><h4>{x.title}</h4></div>
                        <div className='box_price'><p>{x.price}</p></div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Card