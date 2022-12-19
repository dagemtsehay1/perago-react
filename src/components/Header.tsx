import logo from "../imgs/logo.png";

function Header() {
  return (
    <div className="w-full my-8">
      <img src={logo} className="mx-auto w-60" />
      <h1 className="text-center font-mono text-3xl font-bold text-gray-500">
        Systems
      </h1>
    </div>
  );
}

export default Header;
