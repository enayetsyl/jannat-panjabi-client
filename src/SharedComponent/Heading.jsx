const Heading = ({smallText, headingText}) => {
  return (
    <div className="py-10 text-center w-2/5 mx-auto">
      <p className="pb-4 text-[#d99904] text-xl italic font-normal">{smallText}</p>
      <h1 className="uppercase text-4xl border-y-4 border-[#e8e8e8] py-5 text-black">{headingText}</h1>
    </div>
  );
};

export default Heading;