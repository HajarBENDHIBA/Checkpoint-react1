import React from "react";
import product from "../product";

function Image() {
    return <img className="h-48 mx-auto" src={product.image} alt={product.name} />;
}

export default Image;
