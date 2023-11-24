'use client';

import { toast } from 'react-toastify';

import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from 'react';
import { maskPhone } from '@/utils/Masks';

export function ContactForm() {
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    toast.success("Mensagem enviada com sucesso!");
  }

  return (
    <div id="contact" className=" w-full max-w-[1180px] px-[20px] m-auto py-20">
      <div className="h-[4px] w-14 bg-secondary margin-auto mb-6 md:hidden" />
      <div className="flex gap-12 md:gap-8 md:flex-col md:items-center">
        <h2 className="font-serif text-6xl text-secondary w-[30%] md:w-full md:text-center">
          Dúvidas?
          Entre em contato
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-[70%] md:w-full flex gap-8 flex-col"
        >
          <Input
            type="text"
            placeholder="Nome Completo *"
            required
          />
          <div className="flex gap-8">
            <Input
              type="email"
              placeholder="E-mail *"
              required
            />
            <Input
              type="text"
              placeholder="Telefone *"
              required
              value={phone}
              onChange={e => setPhone(maskPhone(e.target.value))}
            />
          </div>
          <textarea
            id="input"
            placeholder="Deixe uma mensagem *"
            required
            className="py-4 w-full border-b-[2px] text-primary border-primary transition-all focus:border-b-secondary" />
          <Button title="Enviar" type="submit" />
        </form>
      </div>
    </div>
  )
}