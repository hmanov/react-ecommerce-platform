import React, { useContext, useEffect } from 'react';
import { ContainerCenter } from '../../Styled/Container';
import { Slogan, CustomColor, Featured } from '../../Styled/HomeStyled';
import Card from '../Card';
import Loading from '../Loading';
import { ProductContext } from '../../context/ProductProvider';
import {getProducts} from '../../context/actions/productTypes'
import {}
const Home = () => {
  const {
    productState: { isLoading, products },
    productDispatch,
  } = useContext(ProductContext);
useEffect(()=> {
 
})
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
