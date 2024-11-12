const ItemList = ({ yachtContent }) => {
  const {
    imageYacht,
    nameYacht,
    length,
    builder,
    shipyard,
    built,
    guests,
    price,
  } = yachtContent;

  return (
    <li className="bg-[--dark-blue-2] p-[18px] pb-6 rounded-3xl max-w-[320px] mb-6">
      <img
        src={imageYacht.mobileSrc}
        srcSet={`${imageYacht.mobileSrc} 500w, ${imageYacht.desktopSrc} 1000w`}
        alt={nameYacht}
        className="rounded-3xl mb-6 h-[250px] object-cover"
        loading="lazy" // відкладене завантаження
        decoding="async" // асинхронне декодування
        // width="500" // встановлення ширини для покращення продуктивності
        // height="250" // встановлення висоти
      />
      <div className="flex justify-between mb-6 items-center">
        <h3 className="text-base font-bold w-[177px] uppercase truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {nameYacht}
        </h3>
        <span className="text-xs font-light tracking-[0.36px] whitespace-nowrap">
          LUXURY YAHTS
        </span>
      </div>
      <table className="text-sm">
        <tbody>
          {length && (
            <tr className="">
              <td className="w-[70px]">LENGTH</td>
              <td className="pl-8">{length}</td>
            </tr>
          )}
          {builder && (
            <tr className="">
              <td className="">BUILDER</td>
              <td className="pl-8">{builder}</td>
            </tr>
          )}
          {shipyard && (
            <tr className="">
              <td className="">SHIPYARD</td>
              <td className="pl-8">{shipyard}</td>
            </tr>
          )}
          {built && (
            <tr className="">
              <td className="">BUILT</td>
              <td className="pl-8">{built}</td>
            </tr>
          )}
          {guests && (
            <tr className="">
              <td className="">GUESTS</td>
              <td className="pl-8">{guests}</td>
            </tr>
          )}
          {price && (
            <tr>
              <td className="">PRICE</td>
              <td className="pl-8">{price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </li>
  );
};
export default ItemList;
