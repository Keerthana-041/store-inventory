const NavBar = () => {
    return (
      <nav className="bg-gray-200 py-4">
        <div className="mx-auto px-4">
          <div className="flex justify-left">
            <div className="flex items-left w-1/3">
            <a href="/" className="ml-6 bg-gray-700 rounded p-1 text-gray-300 hover:text-white">
                Home/
              </a>
              <a href="/cart" className="ml-6 bg-gray-700 rounded p-1 text-gray-300 hover:text-white">
                Cart/
              </a>
              <a href="/inventory" className="ml-6 bg-gray-700 rounded p-1 text-gray-300 hover:text-white">
                Inventory/
              </a>
              <a href="/sales" className="ml-6 bg-gray-700 rounded p-1 text-gray-300 hover:text-white">
                Sales/
              </a>
              <a href="/add-product" className="ml-6 bg-gray-700 rounded p-1 text-gray-300 hover:text-white">
                Add Product
              </a>
            </div>
            <div className="flex items-left w-1/3 justify-left">
              <h2 className="text-white text-lg font-bold">Store Inventory Management</h2>
              <img className="w-[200px] h-[auto] mx-2" src="/inventoryLogo.png" alt="LOGO" />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
export default NavBar;
  