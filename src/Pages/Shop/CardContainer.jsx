
import ProductItem from "../../SharedComponent/ProductItem";

const CardContainer = ({tabDetail}) => {
  console.log(tabDetail)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {
        tabDetail?.map((item) => (
          <ProductItem key={item._di}
          item={item}
          ></ProductItem>
        ))
      }
    </div>
  );
};

export default CardContainer;