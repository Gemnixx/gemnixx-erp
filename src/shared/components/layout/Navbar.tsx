const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">
        Gemnixx ERP
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">
          Admin
        </span>
      </div>
    </header>
  );
};

export default Navbar;