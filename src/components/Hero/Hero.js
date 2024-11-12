import Button from "../ui/Button";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section className="container flex mx-auto">
      <div className=" hero-container ">
        <div className="mb-6 md:mb-8">
          <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.6px] md:tracking-[-0.64px] mb-[14px] md:mb-4">
            Explore the High Seas with
            <span className="text-[--prime-phrase]"> Our Luxury Yacht </span>
            Rentals
          </h1>
          <p className="text-sm md:text-base font-normal tracking-[0.28px] max-w-[541px]">
            Experience the freedom and luxury of yachting on the open seas.
            Choose from our top-of-the-line yachts and embark on an
            unforgettable journey surrounded by breathtaking views and
            state-of-the-art amenities.
          </p>
        </div>
        <ul className="flex gap-2 md:gap-3 mb-7 md:mb-16">
          <li>
            <Button
              text="Get Started"
              hoverTextColor=""
              backgroundColor="#93ABAE"
              hoverBackgroundColor="#88B3B9"
              borderColor="none"
              hoverBorderColor="none"
              onClick={() => alert("Get Started Button Clicked")}
            />
          </li>
          <li>
            <Button
              text="Explore"
              onClick={() => alert("Explore Button Clicked")}
            />
          </li>
        </ul>
        <HeroCard />
      </div>
    </section>
  );
};
export default Hero;
