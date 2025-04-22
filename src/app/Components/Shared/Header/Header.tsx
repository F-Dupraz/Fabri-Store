export const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 text-center">
      <h1 className="text-2xl font-bold">Fabri Store</h1>
      <nav className="mt-4">
        <a href="#" className="text-white hover:text-gray-400 mx-2">Home</a>
        <a href="#" className="text-white hover:text-gray-400 mx-2">Products</a>
        <a href="#" className="text-white hover:text-gray-400 mx-2">About Us</a>
        <a href="#" className="text-white hover:text-gray-400 mx-2">Contact</a>
      </nav>
    </header>
  );
}