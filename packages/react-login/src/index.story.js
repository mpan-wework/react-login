import React from 'react';
import { useLogin } from '.';

export default {
  title: 'useLogin',
};

export const UseLogin = () => {
  const { user } = useLogin();

  return <div>{user}</div>;
}

// require('@storybook/react').storiesOf('useLogin', module).add('Use Login', UseLogin);
