'use client';

import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export function Comments() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="bg-[url('../../public/banner3.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="bg-center bg-[#000000c4]">
        <div className="w-full max-w-[1180px] m-auto h-full  px-[20px] py-20 flex flex-col justify-center items-center">
          <h2 className="w-full h-full font-serif text-5xl text-white text-center mb-4">
            Depoimentos de clientes satisfeitos
          </h2>
          <p className="text-base font-light leading-10 text-center mb-12 text-white">
            Não apenas resolvemos casos, construímos relacionamentos. Nossos clientes satisfeitos falam por nós. Confira o que eles têm a dizer sobre a nossa abordagem comprometida e resultados excepcionais que alcançamos juntos.
          </p>

          <div className='flex gap-8 w-[100%] m-auto items-center justify-center flex-col'>
            <Swiper
              className='w-[100%]'
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
              }}

              modules={[Navigation, Pagination, Autoplay]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide>
                <div className=" w-full mt-8 flex flex-col items-center justify-center">
                  <img src="/avatar1.jpg" alt="avatar" className='rounded-full w-20 h-20 mb-8' />
                  <p className="leading-10 italic font-serif text-center text-white">"Estava enfrentando uma disputa legal complexa e desconcertante. A equipe do escritório de advocacia foi além das minhas expectativas. Eles não apenas me guiaram com habilidade e profissionalismo, mas também me tranquilizaram durante todo o processo. Graças à sua dedicação, obtive um resultado muito melhor do que esperava."</p>
                  <h3 className="text-white font-serif font-semibold text-lg mt-12">Depoimento de Mario S.</h3>
                  <p className="text-white text-sm mt-1"> Empresária no ramo de tecnologia</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full mt-8 flex flex-col items-center justify-center">
                  <img src="/avatar3.jpg" alt="avatar" className='rounded-full w-20 h-20 mb-8' />
                  <p className="leading-10 italic font-serif text-center text-white">"Fui recomendada a este escritório por um amigo e estou extremamente satisfeita com a recomendação. A atenção e o profissionalismo demonstrados desde a primeira consulta até a resolução do meu caso foram notáveis. Sem dúvida, este é o lugar para quem busca uma representação jurídica confiável e de alta qualidade."</p>
                  <h3 className="text-white font-serif font-semibold text-lg mt-12">Depoimento de Ana L.</h3>
                  <p className="text-white text-sm mt-1">Professora Universitária</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full mt-8 flex flex-col items-center justify-center">
                  <img src="/avatar2.jpg" alt="avatar" className='rounded-full w-20 h-20 mb-8' />
                  <p className="leading-10 italic font-serif text-center text-white">"Estava em busca de orientação jurídica para uma questão empresarial complicada. Fiquei impressionado com o conhecimento e a expertise da equipe de advogados. Eles não apenas resolveram o problema de forma rápida e eficiente, mas também foram excepcionais em sua abordagem estratégica. Recomendo totalmente os serviços deste escritório."</p>
                  <h3 className="text-white font-serif font-semibold text-lg mt-12">Depoimento de João R.</h3>
                  <p className="text-white text-sm mt-1">Consultor Financeiro</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className='flex gap-12'>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="text-white text-4xl transition-opacity hover:opacity-40"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="text-white text-4xl transition-opacity hover:opacity-40"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}