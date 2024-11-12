const Аctivitys = () => {
  return (
    <section className="flex mx-auto">
      <div className="container custom-container">
        <ul className="grid gap-6 justify-items-end">
          <li className="relative">
            <img
              src="/images/activity/activity-1@1x.jpg"
              srcSet="/images/activity/activity-1@1x.jpg 1x, /images/activity/activity-1@2x.webp 2x"
              alt="Yacht's view"
              className="h-[335px] object-cover rounded-3xl col-span-1"
              loading="lazy" // відкладене завантаження
              decoding="async" // асинхронне декодування
              width="335px" // встановлення ширини для покращення продуктивності
            />
            <div className="absolute bottom-6 left-6 inline-flex px-7 py-[14px] text-sm md:text-lg text-[--dark-blue] bg-[--white] font-bold rounded-full">
              Diving
            </div>
          </li>

          <li className="relative">
            <img
              src="/images/activity/activity-2@1x.jpg"
              srcSet="/images/activity/activity-2@1x.jpg 1x, /images/activity/activity-2@2x.webp 2x"
              alt="Yacht's view"
              className="h-[335px]  object-cover rounded-3xl col-span-1"
              loading="lazy" // відкладене завантаження
              decoding="async" // асинхронне декодування
              width="335" // встановлення ширини для покращення продуктивності
              // height="250" // встановлення висоти
            />
            <div className="absolute bottom-6 left-6 inline-flex px-7 py-[14px] text-sm md:text-lg text-[--dark-blue] bg-[--white] font-bold rounded-full">
              Fishing
            </div>
          </li>

          <li className="relative">
            <img
              src="/images/activity/activity-3@1x.jpg"
              srcSet="/images/activity/activity-3@1x.jpg 1x, /images/activity/activity-3@2x.webp 2x"
              alt="Yacht's view"
              className="h-[335px]  object-cover rounded-3xl  col-span-1"
              loading="lazy" // відкладене завантаження
              decoding="async" // асинхронне декодування
              width="335" // встановлення ширини для покращення продуктивності
              // height="250" // встановлення висоти
            />
            <div className="absolute bottom-6 left-6 inline-flex px-7 py-[14px] text-sm md:text-lg text-[--dark-blue] bg-[--white] font-bold rounded-full">
              Sunbathing
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Аctivitys;
