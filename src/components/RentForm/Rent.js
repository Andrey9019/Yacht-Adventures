import Form from "./Form";

const Rent = () => {
  return (
    <section className="flex mx-auto">
      <div className="container custom-container">
        <div className="mb-10">
          <h3 className="text-4xl font-medium mb-4">Rent a yacht now</h3>
          <img
            src="/images/hero-card/rentForm@1x.jpg"
            srcSet="/images/hero-card/rentForm@1x.jpg 1x, /images/hero-card/rentForm@2x.webp 2x"
            alt="Yacht's view"
            className="h-[187px] scale-x-[-1] object-cover rounded-3xl"
            loading="lazy" // відкладене завантаження
            decoding="async" // асинхронне декодування
            width="259" // встановлення ширини для покращення продуктивності
            // height="250" // встановлення висоти
          />
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Rent;
