import React from 'react';
import { GlobalContext } from './globalProvider';

function ThemeChanger() {
  const context = React.useContext(GlobalContext);

  const handleClick = () => {
    context?.saveTema(context.tema === 'dark' ? 'light' : 'dark');
  };

  return <button onClick={handleClick}>Mudar tema</button>;
}

export default ThemeChanger;
