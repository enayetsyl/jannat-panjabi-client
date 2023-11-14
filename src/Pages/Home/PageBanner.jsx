import image from '../../assets/banner4.jpg'

const PageBanner = () => {
  return (
    <div className='relative my-10'>
      <img src={image} alt="" className='h-[80vh] object-cover w-full z-10'/>
      <div className='w-1/2 mx-auto bg-white h-1/2 z-20 top-1/4 left-1/4 absolute text-center space-y-5'>
        <h1 className='pt-14 text-4xl font-bold '>Jannah Panjabi</h1>
        <p className='px-20 text-justify'>Discover the vibrant flavors of Punjab at your fingertips!  Explore our online store for authentic Punjabi spices, delectable snacks, and more. Immerse yourself in the rich culinary traditions of Punjab, delivered right to your door. Spice up your life with the best of Punjabi cuisine! 🔥 #TasteOfPunjab #OnlinePunjabiDelights</p>
      </div>
    </div>
  );
};

export default PageBanner;