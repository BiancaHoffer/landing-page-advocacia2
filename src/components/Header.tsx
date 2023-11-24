import { useState } from "react";

import Image from "next/image";
import logo from "../../public/logo.png";

import { Link as LinkComponent } from "./Link"
import Link from "next/link";

import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export function Header() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active)
  }

  return (
    <>
      <div className="bg-primary w-full py-2">
        <div className="flex justify-end gap-4 text-white text-lg w-full max-w-[1180px] px-[20px] m-auto">
          <Link href="/">
            <IoLogoInstagram />
          </Link>
          <Link href="/">
            <IoLogoFacebook />
          </Link>
          <Link href="/">
            <IoLogoLinkedin />
          </Link>
          <Link href="/">
            <IoLogoTwitter />
          </Link>
        </div>
      </div>
      <header className="absolute w-full m-auto pt-4">
        <div className="w-full max-w-[1180px] flex justify-between m-auto items-center px-[20px]">
          <Image src={logo} alt="Logo" width={140} />
          <nav className="md:hidden flex gap-8 text-primary font-light text-base">
            <LinkComponent title="Serviços" to="services" />
            <LinkComponent title="Vantagens" to="advantages" />
            <LinkComponent title="Contato" to="contact" />
          </nav>
          <div className="hidden md:flex">
            <button onClick={handleActive} className="text-4xl text-primary hover:opacity-25">
              {active ? <IoCloseOutline /> : <IoMenuOutline />}
            </button>
            <div
              className={
                "fixed overflow-hidden z-40 bg-opacity-25 inset-0 ease-in-out " +
                (active
                  ? " transition-opacity opacity-100 duration-500 translate-x-0 bg-zinc-900"
                  : " transition-all delay-500 opacity-0 translate-x-full bg-transparent")
              }
            >
              <div
                className={
                  "bg-white w-screen max-w-lg right-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
                  (active ? " translate-x-0 " : " translate-x-full ")
                }
              >
                <div className="relative z-50 w-screen max-w-lg pb-10 flex flex-col justify-start space-y-6 h-full">
                  <button
                    className='w-[100%] flex justify-end p-[20px] text-4xl text-primary hover:opacity-25'
                    onClick={() => {
                      setActive(false);
                    }}
                  >
                    <IoCloseOutline />
                  </button>
                  <nav className="flex flex-col items-center justify-center gap-8">
                    <LinkComponent title="Serviços" to="services" onClick={() => setActive(false)} />
                    <LinkComponent title="Vantagens" to="advantages" onClick={() => setActive(false)} />
                    <LinkComponent title="Contato" to="contact" onClick={() => setActive(false)} />
                  </nav>
                </div>
              </div>
              <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                  setActive(false);
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}