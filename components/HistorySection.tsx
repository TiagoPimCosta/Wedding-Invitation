import Image from "next/image";

const HistorySection = () => {
  return (
    <div className="relative h-screen">
      <div className="grid grid-cols-3 gap-6 px-40 py-20">
        <div className="col-span-1 p-2 flex flex-col py-4">
          <h1 className="text-8xl font-parisienne text-red">
            A nossa História
          </h1>
          <p className="font-the-seasons text-justify leading-relaxed text-green text-lg mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since 1966, when designers at Letraset and James Mosley, the
            librarian at St Bride Printing Library in London, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letrasets Body
            Type sheets. It has survived not only many decades, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised thanks to these sheets and more recently with
            desktop publishing software including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="col-span-1">
          <Image
            src="/0215.jpg"
            alt="Tiago & Fátima"
            width={500}
            height={500}
            className="object-cover object-[70%_50%] md:object-center  border-4 border-red"
            priority
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/0222.jpg"
            alt="Tiago & Fátima"
            width={500}
            height={500}
            className="aspect-square w-full object-cover object-[60%_20%] border-4 border-red"
            priority
          />
          <p className="font-parisienne text-justify leading-relaxed text-green text-lg p-4">
            &quot;Quote from the couple about their history or love story goes
            here, adding a personal touch to the section.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
