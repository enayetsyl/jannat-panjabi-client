

const ProductCard = ({item}) => {
  const {image, price, name, recipe} = item
  console.log(item)
  return (
   
     <div className="flex justify-center items-center gap-3 space-x-4">
      <img src={image} alt="" className="w-28 bg-[#d9d9d9]" style={{borderRadius: "0 200px 200px 200px"}}/>
      <div>
        <h3 className="uppercase text-xl text-black">{name}----------</h3>
        <p className="text-[#975151] text-base">{recipe}</p>
      </div>
      <p className="text-xl text-[#bb8506]">${price}</p>
    </div>
  );
};

export default ProductCard;