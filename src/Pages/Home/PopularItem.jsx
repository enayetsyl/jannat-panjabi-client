import { useEffect, useState } from "react";
import ProductCard from "../../SharedComponent/ProductCard";
import Button from "../../SharedComponent/Button";

const PopularItem = ({panjabis, loading}) => {
 
  
  return (
    <div className="mb-20">
      {
        loading ? (
          <p>Your item is currently loading</p>
        ) :
        (
          <div>
            <div className="grid md:grid-cols-2 gap-10 pb-10">
            {
            panjabis.map(item => <ProductCard
            key={item._id} item={item}
            ></ProductCard>)
          }
          </div>
           <Button text={"view all products"}></Button>
          </div>
        )
      }
    </div>
  );
};

export default PopularItem;