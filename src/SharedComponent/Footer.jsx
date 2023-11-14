import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
     <div className="flex flex-col md:flex-row justify-between items-center h-[40vh]">
      <div id="left-div" className="bg-[#1f2937] text-white text-center font-medium space-y-3 w-full md:w-1/2 p-10 h-[40vh]">
      <h1 className="uppercase text-3xl">contact us</h1>
      <p className="text-xl ">123 ABS Street, Uni 21, Bangladesh
</p>
      <p className="text-xl ">
+88 123456789
</p>
      <p className="text-xl ">
Mon - Fri: 08:00 - 22:00
</p>
      <p className="text-xl ">
Sat - Sun: 10:00 - 23:00</p>
      </div>
      <div id="right-div" className="bg-[#111827] text-white font-medium text-center w-full md:w-1/2 p-10 space-y-4 h-[40vh]">
        <h1 className="text-3xl">Follow US</h1>
        <p className="text-xl ">
Join us on social media</p>
<div className="flex justify-center items-center gap-3 text-4xl">
<FaFacebook></FaFacebook>
<FaInstagram></FaInstagram>
<FaTwitter></FaTwitter>
</div>
      </div>
     </div>
<div className="text-white text-center text-xl font-medium bg-[#151515] py-4">
  <p>Copyright © CulinaryCloud. All rights reserved.</p>
</div>
    </footer>
  );
};

export default Footer;