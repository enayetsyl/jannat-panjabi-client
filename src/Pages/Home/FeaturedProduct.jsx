import image from '../../assets/My Collection/1.jpg'
import imageFeature from '../../assets/1.jpg'
import './Feature.css'

const FeaturedProduct = () => {


  return (
    <div className='background p-10 opacity-80'>
      <div className="py-10 text-center w-2/5 mx-auto">
      <p className="pb-4 text-[#d99904] text-xl italic font-normal">--Check it Out</p>
      <h1 className="uppercase text-4xl border-y-4 border-[#e8e8e8] py-5 text-white">From our products</h1>
    </div>
      <div className="flex justify-center items-center gap-10 space-y-5">
        <div className='w-1/2'>
          <img src={image} alt="" className='w-full'/>
        </div>
        <div className="text-white font-normal w-1/2 space-y-5">
          <div className='text-2xl space-y-5'>
            <p>March 20, 2023</p>
            <p className='uppercase'>where can i get some</p>
          </div>
          <p className='text-xl'>This is an uniqe panjabi that is sold in our website everyday. The cotton used for the product is very fine and its gives us a comfortable feelings when user use it. It is also very much affordable for most of the buyer.</p>
          <button className="text-white text-center text-xl font-medium uppercase border-b-4 py-5 px-7 rounded-lg border-solid border-white hover:border-4 hover:border-white hover:bg-[#d99904] ">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;