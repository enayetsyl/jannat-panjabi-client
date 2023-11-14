const ProductItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  console.log('product item', item);
  return (
    <div className="w-[#424px] h-[#540px] bg-[#f3f3f3]">
      <img src={image} alt="" className="h-1/2 w-full object-cover"/> 
      <h1 className="text-black text-center text-2xl font-semibold pt-8 pb-2">{name}</h1>
      <p className="text-black text-center text-base font-normal">{recipe}</p>
     <div className="flex justify-center items-center pt-6"> <button className="text-[#bb8506] text-center text-xl font-medium uppercase py-5 px-7 rounded-lg border-b-4 border-solid border-[#bb8506] bg-[#e8e8e8] hover:bg-[#1f2937] hover:border-4 hover:border-[#bb8506]">Add to cart</button></div>
    </div>
  );
};

export default ProductItem;
