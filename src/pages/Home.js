import React from 'react';
import { ContainerCenter } from '../Styled/Container';
import { Slogan, CustomColor, Featured } from '../Styled/HomeStyled';
import Card from '../components/Card';

const Home = () => {
  return (
    <ContainerCenter>
      <Slogan>
        You must <CustomColor> Feel</CustomColor> the <CustomColor>Click!</CustomColor>
      </Slogan>
      <Featured>
        <Card />
        <Card />
        <Card />
      </Featured>
    </ContainerCenter>
  );
};

export default Home;
