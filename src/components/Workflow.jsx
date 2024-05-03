import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

import bussinesImage from "../assets/bussines1.jpg";

const Workflow = () => {
  return (
    <div className="mt-15">
      <h2 className="text-lg font-semibold ml-2 text-left mt-1 tracking-wide">
        Melhore agora o sucesso da sua empresa!
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img
            src={bussinesImage}
            alt="Imagem de pessoas conversando"
            className="rounded-sm"
          />
        </div>

        <div className="pt-2 w-full lg:w-1/2">
          <p className="pl-7">
            Somos impulsionados pela missão simples de elevar o sucesso da sua
            empresa. Estamos prontos para liberar o máximo potencial do seu
            negócio. Trabalhamos para que cada detalhe financeiro seja
            otimizado, permitindo que você se concentre exclusivamente em
            alavancar a sua empresa!
          </p>
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
