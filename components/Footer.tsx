const Footer = () => {
  return (
    <footer className="py-16 flex flex-col items-center justify-center gap-7">
      <div className="flex items-center gap-5 w-48 md:w-64">
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-gold/30" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/50 shrink-0" />
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-gold/30" />
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="font-parisienne text-5xl md:text-6xl text-[#1e150d]/90">
          Tiago & Fátima
        </p>
        <p className="font-the-seasons text-gold/70 tracking-[0.45em] uppercase text-[10px] font-light">
          10 · Outubro · 2026
        </p>
      </div>

      <div className="flex items-center gap-5 w-48 md:w-64">
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-gold/30" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/50 shrink-0" />
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-gold/30" />
      </div>
    </footer>
  );
};

export default Footer;
