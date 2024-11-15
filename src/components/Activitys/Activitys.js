const Аctivitys = () => {
  return (
    <section className="flex mx-auto">
      <div className="container custom-container">
        <ul className="flex md:justify-items-center activ-wrap flex-col gap-6 items-center xl:items-end">
          <li className="relative activ-box1">
            <img
              src="/public/images/activity/activity-1@1x.jpg"
              srcSet="/public/images/activity/activity-1@1x.jpg 1x, /public/images/activity/activity-1@2x.webp 2x"
              alt="Activity Diving"
              className="h-[335px] md:h-[632px] md:w-[704px] xl:h-[632px] xl:w-[712px] object-cover rounded-3xl"
              loading="lazy" // відкладене завантаження
              decoding="async" // асинхронне декодування
              width="335px" // встановлення ширини для покращення продуктивності
            />
            <div className="absolute bottom-6 left-6 inline-flex px-7 py-[14px] text-sm md:text-lg text-[--dark-blue] bg-[--white] font-bold rounded-full">
              Diving
            </div>
          </li>

          <li className="relative activ-box2 ">
            <img
              src="/public/images/activity/activity-2@1x.jpg"
              srcSet="/public/images/activity/activity-2@1x.jpg 1x, /public/images/activity/activity-2@2x.webp 2x"
              alt="Activity Fishing"
              className="h-[335px] md:w-[400px] md:h-[389px] xl:w-[440px] xl:[428px] object-cover rounded-3xl"
              loading="lazy" // відкладене завантаження
              decoding="async" // асинхронне декодування
              width="335" // встановлення ширини для покращення продуктивності
            />
            <div className="absolute bottom-6 left-6 inline-flex px-7 py-[14px] text-sm md:text-lg text-[--dark-blue] bg-[--white] font-bold rounded-full">
              Fishing
            </div>
          </li>

          <li className="relative activ-box3">
            <img
              src="/public/images/activity/activity-3@1x.jpg"
              srcSet="/public/images/activity/activity-3@1x.jpg 1x, /public/images/activity/activity-3@2x.webp 2x"
              alt="Activity Sunbathing"
              className="h-[335px] md:w-[380px] md:h-[352px] xl:w-[436px] xl-[352px] object-cover rounded-3xl"
              loading="lazy" // відкладене завантаження
              decoding="async" // асинхронне декодування
              width="335" // встановлення ширини для покращення продуктивності
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
