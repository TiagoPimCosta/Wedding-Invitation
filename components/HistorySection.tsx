import Image from "next/image";

const HistorySection = () => {
  return (
    <div className="relative lg:h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-12 sm:px-12 lg:px-40 lg:py-20">
        <div className="lg:col-span-1 p-2 flex flex-col py-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-parisienne text-red">
            A nossa história
          </h1>
          <p className="font-the-seasons text-justify leading-relaxed text-green text-lg sm:text-xl mt-4">
            Em 2022, os nossos destinos cruzaram-se e desde sempre partilhamos a
            paixão pelas férias de inverno, nomeadamente, visitar os mercados de
            Natal e ver as luzes que iluminam as cidades e transformam o frio em
            aconchego. Foi nesta magia que a nossa história foi crescendo ao
            longo do anos e, em 2024, numa viagem de inverno ficamos noivos.
            Desta forma, faz-nos todo o sentido que o Natal acompanhe este dia
            tão especial não só na decoração, mas também como parte de quem
            somos. E no dia 10 de Outubro, queremos ter ao nosso lado as pessoas
            que nos são mais queridas. Assim, é com muito amor que vos
            convidamos para fazer parte deste momento.
          </p>
        </div>
        <div className="lg:col-span-1">
          <Image
            src="/0222.jpg"
            alt="Tiago & Fátima"
            width={500}
            height={500}
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="aspect-square w-full lg:aspect-auto lg:w-auto object-cover object-[80%_10%] md:object-center border-4 border-red"
            priority
          />
        </div>
        <div className="lg:col-span-1">
          <Image
            src="/0081.jpg"
            alt="Tiago & Fátima"
            width={500}
            height={500}
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="aspect-square w-full object-cover object-[50%_20%] border-4 border-red"
            priority
          />
          <p className="font-parisienne text-justify leading-relaxed text-green text-lg sm:text-xl p-4">
            &quot;O Natal é o dia em que descobrimos que o amor é a unica coisa
            que realmente importa.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
