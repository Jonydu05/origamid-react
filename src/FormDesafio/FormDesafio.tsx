import { FormEvent, useRef } from 'react';
import Radio from './Radio';

export default function FormDesafio() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    console.log(ev);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Radio placeholder='Teste' />

      <button type='submit'>Enviar</button>
    </form>
  );
}
