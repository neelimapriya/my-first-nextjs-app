import React from 'react';

const ProductsId = ({params}) => {
    // http://localhost:3000/products/13
    console.log(params);
    return (
        <div>
            <h1>my products id: </h1>
        </div>
    );
};

export default ProductsId;