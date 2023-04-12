import { useContext } from 'react';

import LocalStorageContext from '../context/LocalStorageContext.jsx';

const useLocalStorage = () => useContext(LocalStorageContext);

export default useLocalStorage;
