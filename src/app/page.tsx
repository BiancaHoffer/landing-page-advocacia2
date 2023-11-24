"use client";

import { Link as LinkScroll } from "react-scroll";

import { Banner } from "@/components/Banner";
import { Comments } from "@/components/Comments";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

import {
  IoBarChartSharp,
  IoBriefcaseSharp,
  IoChatbubbles,
  IoCheckbox,
  IoSettings
} from "react-icons/io5";
import { IoIosRocket, IoMdDoneAll } from "react-icons/io";

export default function Home() {
  return (
    <main>
      <Banner />
      <div id="services" className="grid grid-cols-3 md:grid-cols-1 gap-2 mt-[-60px] md:mt-[-40px] w-full max-w-[1180px] m-auto px-[20px]">
        <Card
          icon={<IoBriefcaseSharp />}
          text="Nossa equipe é composta por advogados especializados em diversas áreas do direito."
          title="Advogados Especializados e Experientes"
        />
        <Card
          icon={<IoCheckbox />}
          text="Priorizamos o atendimento personalizado, compreendendo suas preocupações e objetivos."
          title="Atenção Individualizada aos Clientes"
        />
        <Card
          icon={<IoBarChartSharp />}
          text="Nossos casos bem-sucedidos refletem nossa habilidade em alcançar resultados sólidos para nossos clientes."
          title="Resultados Concretos e Satisfação Garantida"
        />
      </div>
      <div className=" w-full max-w-[1180px] px-[20px] m-auto py-20">
        <div className="h-[4px] w-14 bg-secondary margin-auto mb-6 md:hidden" />
        <div className="flex gap-20 md:gap-8 md:flex-col md:items-center">
          <h2 className="font-serif text-6xl text-secondary md:text-center">
            Nossos
            serviços
          </h2>
          <div className="md:flex md:items-center md:flex-col">
            <p className="text-base font-light leading-10 text-justify mb-8">
              Nosso escritório oferece uma ampla gama de serviços jurídicos,
              desde questões corporativas complexas até disputas civis e familiares delicadas.
              Nossos advogados especializados estão prontos para representar seus interesses com
              conhecimento e experiência em áreas como: direito empresarial, direito civil, direito
              do trabalho, direito de família e muito mais.
            </p>
            <LinkScroll
              to="advantages"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
            >
              <Button title="Saiba mais" />
            </LinkScroll>
          </div>
        </div>
      </div>
      <div id="advantages" className="bg-[url('../../public/banner2.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="bg-center bg-[#000000c4]">
          <div className="w-full max-w-[1180px] m-auto h-full  px-[20px] py-20 flex flex-col justify-center items-center">
            <h2 className="w-full h-full font-serif text-5xl text-white text-center mb-4">
              Há mais de 20 anos solucionando problemas
            </h2>
            <p className="text-base font-light leading-10 text-center mb-12 text-white">
              Seja qual for o desafio legal que você enfrenta, o nosso escritório de advocacia
              está aqui para oferecer orientação especializada e resultados sólidos. Com uma
              equipe dedicada e apaixonada por defender os seus direitos, comprometemo-nos a
              proporcionar soluções personalizadas e eficazes para os seus problemas legais.
            </p>
            <div className="w-full grid gap-8 grid-cols-4 md:grid-cols-2">
              <div className="flex justify-center items-center flex-col">
                <h3 className="font-serif text-white text-3xl mb-1">97% </h3>
                <p className="font-serif text-white text-xl text-center">de Sucessos <br />em Casos Civis</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <h3 className="font-serif text-white text-3xl mb-1">15</h3>
                <p className="font-serif text-white text-xl text-center">Anos de Experiência <br />Coletiva</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <h3 className="font-serif text-white text-3xl mb-1">500+</h3>
                <p className="font-serif text-white text-xl text-center">Clientes Satisfeitos</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <h3 className="font-serif text-white text-3xl mb-1">24h</h3>
                <p className="font-serif text-white text-xl text-center">Taxa de Resposta </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1180px] m-auto px-[20px] my-20 flex items-center flex-col">
        <div className="h-[4px] w-14 bg-secondary margin-auto mb-6" />
        <h2 className="w-full h-full font-serif text-5xl text-primary text-center mb-8">
          O que oferecemos
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-1 w-full m gap-2">
          <Card
            theme="ligth"
            icon={<IoChatbubbles />}
            title="Comunicação Clara e Transparência Total"
            text="Mantemos nossos clientes informados em todas as etapas do processo legal."
          />
          <Card
            theme="ligth"
            icon={<IoMdDoneAll />}
            title="Abordagens Criativas e Estratégias Inovadoras"
            text="Adotamos estratégias jurídicas inovadoras para lidar com cada caso."
          />
          <Card
            theme="ligth"
            icon={<IoIosRocket />}
            title="Acesso Rápido e Facilitado aos Nossos Serviços"
            text="Oferecemos múltiplos canais de contato para garantir que você possa acessar nossos serviços facilmente"
          />
          <Card
            theme="ligth"
            icon={<IoCheckbox />}
            title="Compromisso Inabalável com a Ética Profissional"
            text="Nossa conduta ética é a base de nosso trabalho. Agimos com integridade."
          />
          <Card
            theme="ligth"
            icon={<IoSettings />}
            title="Soluções Abrangentes e Multidisciplinares"
            text="Oferecemos uma abordagem abrangente, combinando conhecimentos especializados de várias áreas do direito."
          />
          <Card
            theme="ligth"
            icon={<IoBarChartSharp />}
            title="Resultados Concretos e Satisfação Garantida"
            text="Nossos casos bem-sucedidos refletem nossa habilidade em alcançar resultados sólidos para nossos clientes."
          />
        </div>
      </div>
      <Comments />
      <ContactForm />
      <Footer />
    </main>
  )
}
