import { Parallax, Background } from 'react-parallax';


const BannerOtherPage = ({ image, heading, paragraph}) => {
  return (
    <div>
       <Parallax
        blur={{ min: -20, max: 20 }}
        bgImage={image}
        bgImageAlt="the showcase"
        strength={-200}
    >
        
        <div style={{ height: '700px' }} className='flex justify-center items-center' >
          <div className='w-1/2 h-1/2 m-auto  bg-black opacity-60 text-center text-white flex space-y-3 flex-col justify-center'>
            <h1 className='uppercase text-7xl font-bold '>{heading}</h1>
            <p className='text-2xl font-semibold uppercase'>{paragraph}</p>
          </div>
        </div>
    </Parallax>
    </div>
  );
};

export default BannerOtherPage;


