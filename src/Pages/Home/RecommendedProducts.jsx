import React, { useEffect, useState } from "react";
import ProductItem from "../../SharedComponent/ProductItem";

const RecommendedProducts = () => {
  const [panjabis, setPanjabis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/panjabi`)
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === 'popular');
        setPanjabis(popularItems.slice(0,3));
        setLoading(false);
      });
  }, []);

  console.log('panjabis', panjabis);

  return (
    <div>
      {loading ? (
        <p>Your items are currently loading</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {panjabis.map((panjabi) => (
            <ProductItem key={panjabi._id} item={panjabi} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedProducts;
