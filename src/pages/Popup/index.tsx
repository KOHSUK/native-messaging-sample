import React from 'react';

const Presenter: React.FC = () => {
  return <div>Popup</div>;
};

const Container: React.FC = () => {
  return <Presenter />;
};

export default Container;
