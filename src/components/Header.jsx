import "../index.css";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div className="flex justify-center items-center gap-10 cursor-pointer">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-hootsuite-3628246-3031066.png" alt="" className="h-9 mr-0" />
          <h1 className="font-bold text-4xl pb-2">HootSuite</h1>
          <ul id="header" className="flex gap-10 text-xl font-bold">
            <li>Platform</li>
            <li>Plans</li>
            <li>Enterprises</li>
            <li>Resources</li>
            <li>Education</li>
          </ul>
        </div>

        <ul className="flex gap-10 text-xl justify-center items-center cursor-pointer">
          <li className="hover:text-blue-700">Contact Us</li>
          <li className="hover:text-blue-700">Log In</li>
          <button className="font-bold bg-green-600 text-white p-2 hover:bg-blue-600">
            Sign Up
          </button>
        </ul>
      </div>
    </>
  );
};

export default Header;