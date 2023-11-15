import BannerOtherPage from '../../SharedComponent/BannerOtherPage';
import shopImage from '../../assets/10.jpg'
import TabItems from './TabItems';


const Shop = () => {
  return (
    <div>
      <BannerOtherPage
      image={shopImage}
      heading={'our shop'}
      paragraph={'would you like to try a product?'}
      ></BannerOtherPage>
      <TabItems></TabItems>
    </div>
  );
};

export default Shop;