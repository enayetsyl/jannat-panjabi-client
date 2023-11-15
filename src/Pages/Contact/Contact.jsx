import BannerOtherPage from "../../SharedComponent/BannerOtherPage";
import Container from "../../SharedComponent/Container";
import Heading from "../../SharedComponent/Heading";
import contactImage from '../../assets/25.jpg'
import { FaClock} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { data } from "autoprefixer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  
  } = useForm();

  const form = useRef();

  const onSubmit = () => {
    // const formData = getValues();

    // const data = {
    //   to_name: 'Panjabi Mart', // Assuming this is the recipient's name
    //   from_name: formData.name,
    //   from_email: formData.email,
    //   phone: formData.phone,
    //   message: formData.message,
    // };
    console.log(form.current)
    emailjs.sendForm('contact_service', 'contact_form', form.current, 'j9_KdWhhO5URP7vJN')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

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
{/* contact form starts here */}
    <div className="my-10 bg-[#f3f3f3] p-20">
 
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full">
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
        <label htmlFor="" className="text-[#444] text-xl font-semibold ">Name*</label>
      
      <input defaultValue="" {...register("user_name",{required: true})} placeholder="Enter your name" className="w-full p-4"
     
      />
      {errors.name && <span>This field is required</span>}
        </div> 
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
        <label htmlFor="" className="text-[#444] text-xl font-semibold ">Email*</label>
    
      <input defaultValue="" {...register("user_email", {required: true})} placeholder="Enter your email" className="w-full p-4"
     
      />
      {errors.email && <span>This field is required</span>}
        </div>
      </div>
        <div className="pt-5 w-full flex flex-col  space-y-4">
        <label htmlFor="text" className="text-[#444] text-xl font-semibold">Phone*</label>
      
      <input defaultValue="" {...register("phone", {required: true})} placeholder="Enter your phone number" className="w-full p-4" />
      {errors.phone && <span>This field is required</span>}
        </div>
        <div className="pt-5 w-full flex flex-col  space-y-4">
        <label htmlFor="" className="text-[#444] text-xl font-semibold">Message*</label>
     
      <textarea defaultValue="" {...register("message", {required: true})} placeholder="Enter your message here" className="w-full p-4" rows={10} 
      name="message"
      />
      {errors.message && <span>This field is required</span>}
        </div>

    <div className="flex justify-center items-center pt-32">
    <button className="" style={{background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`}}>
     <input type="submit" value={'Send Message'} className="text-white text-xl font-bold p-4" />
     </button>
    </div>
    </form>
      </div>
{/* contact form ends here */}
      </Container>
    </div>
  );
};

export default Contact;