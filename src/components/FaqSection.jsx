import { useState } from "react";
import data from "../data/faq";
import SingleQuestion from "./SingleQuestion";

const FaqSection = () => {
  const [cards] = useState(data);

  return (
    <div className="relative min-h-[300px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl lg:text-3xl mt-10 lg:mt-20 font-bold tracking-wide">
          Perguntas Frequentes
        </h2>
      </div>

      <section className="grid grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <SingleQuestion {...card} key={index} />
        ))}
      </section>
    </div>
  );
};

export default FaqSection;
