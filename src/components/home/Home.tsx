import React from 'react';

interface Props {
  name: string;
}

const Home: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Home;
