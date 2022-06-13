import {useState} from 'react';
import copy from 'copy-to-clipboard';

export const useClipboard = () => {
  const [isCopy, setIsCopy] = useState(false);

  const setClipboard = (text, options) => {
    const result = copy(text, options);
    setIsCopy(true);
    return {
      result,
      isCopy
    };
  };

  return [
    isCopy,
    setClipboard
  ];
};
