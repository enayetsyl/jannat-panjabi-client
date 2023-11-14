import BannerOtherPage from "../../SharedComponent/BannerOtherPage";
import Button from "../../SharedComponent/Button";
import Container from "../../SharedComponent/Container";
import Heading from "../../SharedComponent/Heading";
import ProductCard from "../../SharedComponent/ProductCard";

const ProductCategory = ({image, heading, paragraph, item}) => {
  return (
    <div className="space-y-10">
      <BannerOtherPage 
      image={image}
      heading={heading}
      paragraph={paragraph}
      ></BannerOtherPage>
     <Container>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
          item?.map(product => <ProductCard 
            item={product}
            key={product._id}
            ></ProductCard>)
        }
      </div>
      <Button text={'order your favourate panjabi'}></Button>
     </Container>
    </div>
  );
};

export default ProductCategory;