import { useEffect, useState } from "react";
import Banner from "../../SharedComponent/Banner";
import Heading from "../../SharedComponent/Heading";
import CallUs from "./CallUs";
import Category from "./Category";
import PageBanner from "./PageBanner";
import PopularItem from "./PopularItem";
import RecommendedProducts from "./RecommendedProducts";
import FeaturedProduct from "./FeaturedProduct";
import Testimonial from "./Testimonial";

const Home = () => {
  const [panjabis, setPanjabis] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/panjabi`)
    .then(res => res.json())
    .then(data => {
      const PopularItems = data.filter(item => item.category === 'popular')
      setPanjabis(PopularItems)
      setLoading(false)
    })
  },[])
  return (
    <div>
      <Banner></Banner>
     <div className="max-w-7xl mx-auto space-y-10 mb-10">
     <Heading smallText={"--From 11:00am to 10:00pm--"} headingText={"order online"}></Heading>
      <Category></Category>
      <PageBanner></PageBanner>
      <Heading smallText={"--Check it out--"} headingText={"from our products"}></Heading>
      <PopularItem panjabis={panjabis} loading={loading}></PopularItem>
      <CallUs></CallUs>
      <Heading smallText={"---Should Try---"}
      headingText={'designer recommends'}></Heading>
      <RecommendedProducts panjabis={panjabis} loading={loading}></RecommendedProducts>
      <FeaturedProduct></FeaturedProduct>
      <Testimonial></Testimonial>
     </div>
    </div>
  );
};

export default Home;