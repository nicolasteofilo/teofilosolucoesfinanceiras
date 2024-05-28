import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 min-h-[400px]">
      <div className="text-center">
        <a href="#servicos">
          <h2 className="text-3xl sm:text-5xl lg:text-3xl mt-10 lg:mt-20 font-bold tracking-wide">
            Nossos Serviços
          </h2>
        </a>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-yellow-400 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-1 text-xl">{feature.text}</h5>
                <p className="text-md p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
