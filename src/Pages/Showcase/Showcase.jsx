import BannerOtherPage from "../../SharedComponent/BannerOtherPage";
import Button from "../../SharedComponent/Button";
import Container from "../../SharedComponent/Container";
import Heading from "../../SharedComponent/Heading";
import ProductCard from "../../SharedComponent/ProductCard";
import headerImage from '../../assets/4.jpg'
import imagePatiala from '../../assets/8.jpg'
import imagephulkariEmbroidery from '../../assets/12.jpg'
import imagechuridarKurta from '../../assets/14.jpg'
import imageturban from '../../assets/18.jpg'
import imagepunjabiWeddingAttire from '../../assets/19.jpg'
import useProducts from "../../hooks/useProducts";
import ProductCategory from "./ProductCategory";


const Showcase = () => {
  const [products] = useProducts()
  const patialaSuit = products.filter(product => product.category === 'Patiala Suit')
  const phulkariEmbroidery = products.filter(product => product.category === 'Phulkari Embroidery')
  const popular = products.filter(product => product.category === 'popular')
  const churidarKurta = products.filter(product => product.category === 'Churidar Kurta')
  const turban = products.filter(product => product.category === 'Turban')
  const punjabiWeddingAttire = products.filter(product => product.category === 'Punjabi Wedding Attire')
  
  return (
    <div className="space-y-10 mb-28" >
      {/* page main banner */}
      <BannerOtherPage
      image={headerImage}
      heading={'our product'}
      paragraph={'would you like to try a product?'}
      ></BannerOtherPage>
      {/* popular offer */}
      <Heading
      headingText={"today's offer"}
      smallText={"--Don't miss--"}
      ></Heading>
     <Container>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
          popular?.map(item => <ProductCard
          key={item._id}
          item={item}
          ></ProductCard>)
        }
      </div>
      <Button text={'order your favourate panjabi'}></Button>
     </Container>
      {/* patiala suit category */}
      <ProductCategory
      image={imagePatiala}
      heading={'Patiala suit'}
      paragraph={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      item={patialaSuit}
      ></ProductCategory>
      {/* phulkariEmbroidery category */}
      <ProductCategory
      image={imagephulkariEmbroidery}
      heading={'Phulkari Embroidery'}
      paragraph={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley .'}
      item={phulkariEmbroidery}
      ></ProductCategory>
      {/* churidarKurta category */}
      <ProductCategory
      image={imagechuridarKurta}
      heading={'Churidar Kurta'}
      paragraph={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,  of type and scrambled it to make a type specimen book.'}
      item={churidarKurta}
      ></ProductCategory>
      {/* turban category */}
      <ProductCategory
      image={imageturban}
      heading={'Turban'}
      paragraph={'Lorem Ipsum has been the industrys when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      item={turban}
      ></ProductCategory>
      {/* punjabi Wedding Attiret category */}
      <ProductCategory
      image={imagepunjabiWeddingAttire}
      heading={'Punjabi Wedding Attire'}
      paragraph={'Lorem Ipsum has been the industrys  printer took a galley of type and scrambled it to make a type specimen book.'}
      item={punjabiWeddingAttire}
      ></ProductCategory>
     </div>
  );
};

export default Showcase;