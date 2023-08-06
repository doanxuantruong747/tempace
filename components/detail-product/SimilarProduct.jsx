import React, { useEffect, useState } from 'react'
import SlideSimilarProduct from './SlideSimilarProduct'
import { useRouter } from 'next/router'

export const SimilarProduct = ({ slideData }) => {

    const router = useRouter()
    const getRandomItemsFromArray = (arr, numItems) => {
        numItems = Math.min(numItems, arr.length);
        const tempArray = arr.slice();
        tempArray.sort(() => Math.random() - 0.5);
        return tempArray.slice(0, numItems);
    }

    const numItemsToSelect = 20;
    const [randomItems, setRandomItems] = useState(getRandomItemsFromArray(slideData, numItemsToSelect))

    useEffect(() => {
        setRandomItems(getRandomItemsFromArray(slideData, numItemsToSelect))
    }, [router?.query?.id])

    return (
        <div className='custom_container '>
            <h1 className='m:text-[25px] text-[20px] font-bold'>SẢN PHẨM TƯƠNG TỰ </h1>
            <SlideSimilarProduct slideData={randomItems} />
        </div>
    )
}
