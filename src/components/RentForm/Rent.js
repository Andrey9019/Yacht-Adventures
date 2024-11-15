import Form from "./Form";

const Rent = () => {
  return (
    <section id="Rent" className="flex mx-auto">
      <div className="container custom-container ">
        <div className="flex max-md:flex-col max-md:items-center md:justify-evenly">
          <div className="max-md:mb-10 md:w-[271px]">
            <p className="text-4xl md:text-6xl font-medium mb-4 md:mb-8">
              Rent a yacht now
            </p>
            <img
              src="/public/images/hero-card/rentForm@1x.jpg"
              srcSet="/public/images/hero-card/rentForm@1x.jpg 1x, /public/images/hero-card/rentForm@2x.webp 2x"
              alt="Yacht's view"
              className="h-[187px] md:w-[271px] xl:w-[282px] xl:h-[191px] scale-x-[-1] object-cover rounded-3xl"
              loading="lazy" // відкладене завантаження
              decoding="async" // асинхронне декодування
              width="259" // встановлення ширини для покращення продуктивності
              // height="250" // встановлення висоти
            />
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Rent;
