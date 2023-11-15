import BannerOtherPage from "../../SharedComponent/BannerOtherPage";
import Container from "../../SharedComponent/Container";
import Heading from "../../SharedComponent/Heading";
import contactImage from '../../assets/25.jpg'
import { FaClock,  FaMobile } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="mb-20">
      <BannerOtherPage
      image={contactImage}
      heading={'contact us'}
      paragraph={'want to know more about our product? Please contact'}
      ></BannerOtherPage>
      <Container>
      <Heading
      smallText={'--Visit Us--'}
      headingText={'our location'}
      ></Heading>
  {/* location section starts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-[#300px] w-[424px] border border-solid border-[#e8e8e8] bg-white">
          <div className="flex justify-center items-center py-6 bg-[#D1a054]">
            <IoCall className="text-white w-8 h-8 "></IoCall>
          </div>
          <div className="bg-[#f3f3f3] h-[240px] w-[364px] mx-auto flex flex-col justify-center items-center gap-3 mb-[29px]">
            <h1 className="text-[#151515] text-2xl font-medium">PHONE</h1>
            <p className="text-[#444] text-base font-normal">01730197620</p>
          </div>

        </div>
        <div className="h-[#300px] w-[424px] border border-solid border-[#e8e8e8] bg-white">
          <div className="flex justify-center items-center py-6 bg-[#D1a054]">
            <FaLocationDot className="text-white w-8 h-8 "></FaLocationDot>
          </div>
          <div className="bg-[#f3f3f3] h-[240px] w-[364px] mx-auto flex flex-col justify-center items-center gap-3 mb-[29px]">
            <h1 className="text-[#151515] text-2xl font-medium">ADDRESS</h1>
            <p className="text-[#444] text-base font-normal">32, Madani Street, Dhaka-1212</p>
          </div>

        </div>
        <div className="h-[#300px] w-[424px] border border-solid border-[#e8e8e8] bg-white">
          <div className="flex justify-center items-center py-6 bg-[#D1a054]">
            <FaClock className="text-white w-8 h-8 "></FaClock>
          </div>
          <div className="bg-[#f3f3f3] h-[240px] w-[364px] mx-auto flex flex-col justify-center items-center gap-3 mb-[29px]">
            <h1 className="text-[#151515] text-2xl font-medium">WORKING HOURS</h1>
            <p className="text-[#444] text-base font-normal">Mon - Fri 08.00 - 22.00</p>
            <p className="text-[#444] text-base font-normal">Sat - Sun 10.00 - 23.00</p>
          </div>

        </div>

      </div>
  {/* location section ends here */}

<Heading
      smallText={'--Send Us a Message--'}
      headingText={'contact form'}
      ></Heading>

    <div className="my-10 bg-[#f3f3f3] p-20">

    </div>

      </Container>
    </div>
  );
};

export default Contact;