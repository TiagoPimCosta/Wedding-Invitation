const Navbar = () => {
  return (
    <header className="fixed top-2 sm:top-5 left-0 right-0 z-50 flex justify-center">
      <div className="w-full px-4 sm:px-6 flex justify-center">
        <div className="flex items-center justify-between gap-8 px-4 py-4 sm:px-10 sm:py-6 w-full">
          <h2 className="font-parisienne text-[#570d16] text-xl sm:text-2xl">
            T & F
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
