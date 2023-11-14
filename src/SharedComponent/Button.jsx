
const Button = ({text}) => {
  return (
    <div className="text-center">
      <button className="text-[#1f2937] text-center text-xl font-medium uppercase border-b-4 py-5 px-7 rounded-lg border-solid border-[#1f2937] hover:border-4 hover:border-[#1f2937] hover:bg-[#e8e8e8]">{text}</button>
    </div>
  );
};

export default Button;