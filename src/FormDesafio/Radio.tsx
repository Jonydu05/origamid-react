import { ChangeEvent, useState } from 'react';

type RadioProps = {
  placeholder: string;
};

export default function Radio(props: RadioProps) {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(prev => !prev);
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(ev);
  };

  return (
    <label htmlFor='' onClick={handleClick}>
      <input type='radio' name='' id='' checked={value} onChange={handleChange} />
      <span>{props.placeholder}</span>
    </label>
  );
}
