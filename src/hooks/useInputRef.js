import { useContext } from 'react';

import InputRefContext from '../context/InputRefContext.jsx';

const useInputRef = () => useContext(InputRefContext);

export default useInputRef;
