import { Link as LinkScroll } from "react-scroll";

import { Button } from "./Button";
import { Header } from "./Header";

export function Banner() {
  return (
    <div className="bg-[url('../../public/background.jpg')] bg-no-repeat bg-cover bg-right h-[90vh] w-full md:bg-left-bottom">
      <div className="bg-center bg-[#d6d6d6bc] h-[90vh]">
        <Header />
        <div className="flex items-center justify-center md:flex-col w-full h-full max-w-[1180px] m-auto px-[20px] gap-6">
          <div className="w-[70%] md:w-full md:flex md:justify-center md:items-center md:flex-col">
            <h1 className="font-serif text-7xl lg:text-6xl sm:text-5xl md:text-center font-medium mb-4 text-primary">
              Tire o Peso das Questões Legais
            </h1>
            <p className="text-base text-primary mb-8 font-light leading-10 md:text-center">
              Seja qual for o desafio legal que você enfrenta,
              o nosso escritório de advocacia está aqui para oferecer
              orientação especializada e resultados sólidos.
            </p>
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
            >
              <Button title="Entre em contato conosco" />
            </LinkScroll>
          </div>
          <div className="w-[30%] flex items-center justify-center md:hidden">

          </div>
        </div>
      </div>
    </div>
  )
}