import React from 'react'
import ProductCard from './ProductCard';

const NewProducts = () => {
    const productsData = [
        {
            img: "/body-hug.png",
            title: "Sport",
            desc: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: "35.00",
        },
        {
            img: "/body-hug-2.png",
            title: "Sport",
            desc: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: "35.00",
        },
        {
            img: "/jacket-1.png",
            title: "Shirt",
            desc: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: "48.00",
        },
        {
            img: "/jacket-2.png",
            title: "Shirt",
            desc: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: "50.00",
        },
        {
            img: "/shirt-1.png",
            title: "Long Shirt",
            desc: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: "80.00",
        },
        {
            img: "/shirt-2.png",
            title: "Long Shirt",
            desc: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: "75.00",
        },
    ];

    return (
        <div>
            <div className='container pt-16'>
                <h2 className='font-medium text-2xl pb-'>New Products</h2>

                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-col-5 gap-10 xl:gap-x-20 xl:gap-y-10">
                    
                    {productsData.map((item, index) => 
                        <ProductCard
                            key={index}
                            img= {item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                        />
                    )}

                </div>
            </div>
        </div>
    )
}

export default NewProducts
