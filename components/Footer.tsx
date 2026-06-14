import ThinOrnament from "./ThinOrnament";

const Footer = () => {
  return (
    <footer className="py-16 flex flex-col items-center justify-center gap-7">
      <div className="flex flex-col items-center gap-2 text-center">
        <ThinOrnament />
        <p className="font-parisienne text-5xl md:text-6xl text-[#1e150d]/90">
          Tiago & Fátima
        </p>
        <p className="font-the-seasons text-gold/70 tracking-[0.45em] text-[12px] font-light">
          10 · Outubro · 2026
        </p>
        <ThinOrnament />
      </div>
    </footer>
  );
};

export default Footer;
