import React, { useContext, useEffect } from 'react';
import { ContainerCenter } from '../../Styled/Container';
import { Slogan, CustomColor, Featured } from '../../Styled/HomeStyled';
import Card from '../Card';
import Loading from '../Loading';
import { AuthContext } from '../../context/AuthProvider';
const Home = () => {
  const { authState, authDispatch } = useContext(AuthContext);

  const isLoading = false;
  const products = [];
  return (
    <ContainerCenter>
      <Slogan>
        You must <CustomColor> Feel</CustomColor> the <CustomColor>Click!</CustomColor>
      </Slogan>
      <Featured>{!isLoading ? products.map((e, i) => <Card data={e} key={i} to='/' />) : <Loading />}</Featured>
    </ContainerCenter>
  );
};

export default Home;
