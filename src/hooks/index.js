import { useContext } from 'react';

import LocalStorageContext from './LocalStorageContext.jsx';
import InputRefContext from './InputRefContext.jsx';

const useLocalStorage = () => useContext(LocalStorageContext);
export const useInputRef = () => useContext(InputRefContext);

export default useLocalStorage;
