import { useContext } from 'react';
import LocalStorageContext from './LocalStorageContext.jsx';

const useLocalStorage = () => useContext(LocalStorageContext);

export default useLocalStorage;
