import React from 'react';

const Products = () => {
    const product =[
        {name:'Samsung',price:'10000', image:'https://i.pinimg.com/564x/5f/ce/2a/5fce2abe2d46ca80a4c9991837e18a2b.jpg'},
        {name:'Iphone',price:'20000', image:'https://i.pinimg.com/736x/25/d8/cc/25d8cc680b9ad0918eff4f714ee0e251.jpg'},
        {name:'Oppo',price:'15000', image:'https://i.pinimg.com/564x/ce/40/0c/ce400c93239cf2adbe2e7e77f938c2bd.jpg'},
        {name:'Oppo',price:'15000', image:'https://i.pinimg.com/736x/54/80/e1/5480e155f9fa45443d53d20dbce7f4d7.jpg'},
        {name:'Oppo',price:'15000', image:'https://i.pinimg.com/564x/60/0a/d3/600ad3d1614cf838294e0eb70a1c03ed.jpg'},
    ]
    return (
        <>
            <div className="h-full w-full p-3 flex flex-wrap justify-center">
                {product.map((index, Products) => (
                    <div key={index} className="rounded-2xl flex flex-col m-10">
                        <div className="h-12 shadow-2xl bg-white w-32 rounded-2xl border-2 border-black text-center flex flex-col justify-around"><h1 className="font-mono font-semibold">{index.name}</h1>
                            <p className="font-serif">{index.price}</p></div>
                        <img className="bg-cover shadow-xl m-2 h-[3in] w-[3in] rounded-full" src={index.image}/>
                        <div className="h-10 w-30 bg-white shadow-2xl text-center rounded-xl flex justify-center border-2 border-black mt-5"><h1 className="font-semibold font-mono mt-1">Add to cart</h1></div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
