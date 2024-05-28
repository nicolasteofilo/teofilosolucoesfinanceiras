import { CheckCircle2, Check } from "lucide-react";
import { checklistItems } from "../constants";

import bussinesImage from "../assets/bussines1.jpg";

const Workflow = () => {
  return (
    <div className="mt-15">
      <a href="#sobre-nos">
        <h2 className="text-lg font-semibold ml-2 text-left mt-1 tracking-wide" >
          Melhore agora o sucesso da sua empresa!
        </h2>
      </a>
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
          <br />
          <div className="pl-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-1">
                <div className="text-green-400 mx-2 h-10 w-10 p-1 justify-center items-center rounded-full">
                  <Check />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-base">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
