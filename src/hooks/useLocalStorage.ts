import React from 'react';

function useLocalStorage(key: string, inicial: string) {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local || inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
