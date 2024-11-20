import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
const SpeicalOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className=" flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Unleash your potential with Nike's special shoe collection, engineered
          for supreme comfort and unmatched style. Elevate your game and stride
          with confidence, embodying the spirit of victory with every step
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Dive into the world of Nike's special shoes and enjoy an exclusive
          offer crafted to fuel your passion for fitness. Experience innovation
          and savings combined, as you grab the perfect pair at an unbeatable
          price. Don't miss this opportunity to redefine your athletic journey
          with Nike
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpeicalOffer;
