const Footer = () => {
    return (
      <>
        <div className="flex justify-around mt-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-9xl">🚀</h1>
            <p className="text-xl pt-8 font-bold">2,500</p>
            <p className="pt-4 text-lg">
              Enterprises organizations successfully launched
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p">
            <h1 className="text-9xl">📰</h1>
            <p className="text-xl pt-8 font-bold">45,500</p>
            <p className="pt-4 text-lg">Enterprises users onboard seamlessly</p>
          </div>
          <div className="flex flex-col justify-center items-center p">
            <h1 className="text-9xl">👨‍💻</h1>
            <p className="text-xl pt-8 font-bold">200,000+</p>
            <p className="pt-4 text-lg">
              Professional trained on prdouct and strategy
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;