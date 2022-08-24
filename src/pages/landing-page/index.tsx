import ObeseCat from './obese-cat.jpg';

function LandingPage() {
  return (
    <div className="w-screen h-screen flex flex-col gap-y-4 justify-center items-center bg-[#7272a6]">
      <h1 className="font-bold text-4xl text-white tracking-widest ">OBESE CAT</h1>
      <div className="w-2/5">
        <img src={ObeseCat} alt="an obese Cat" className="rounded-full" srcSet="" />
      </div>
    </div>

  );
}

export default LandingPage;
