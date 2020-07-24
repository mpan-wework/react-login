import { useState } from 'react';

const useLogin = () => {
  const [user] = useState('Hello World');

  return { user };
};

export default useLogin;
