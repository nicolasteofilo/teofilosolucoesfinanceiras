const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-1">
      <h1 className="text-4xl sm:text-6xl lg:text-3xl text-center tracking-wide">
        Faça seu negócio decolar!
        <br />
        <span>
          {" "}
          Deixe sua gestão financeira para a{" "}
          <span className="font-bold text-blue-600">
            Teófilo Soluções Financeiras  
          </span>
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Libere seu tempo para o que realmente importa - deixe a Teófilo Soluções
        Financeiras BPO cuidar do seu financeiro enquanto você foca no
        crescimento do seu negócio
      </p>
      <button className="flex justify-center my-10">
        <a
          href="https://api.whatsapp.com/send?phone=5516996399019&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20Te%C3%B3filo%20Solu%C3%A7%C3%B5es%20Financeiras%20BPO!%20E%20tenho%20interesse%20nos%20seus%20servi%C3%A7os,%20poderia%20me%20ajudar?%20"
          className="py-4 px-5 mx-3 rounded-md bg-blue-600 text-white hover:text-yellow-300 font-bold"
          target="_blank"
        >
          Impulsione seu negócio agora mesmo
        </a>
      </button>
    </div>
  );
};

export default HeroSection;
