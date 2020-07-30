import React, { useContext, useEffect } from 'react';
import { ContainerCenter } from '../../Styled/Container';
import { Slogan, CustomColor, Featured } from '../../Styled/HomeStyled';
import Card from '../Card';
import Loading from '../Loading';

import { getFeatured } from '../../context/actions/productsActions';
import { ProductsContext } from '../../context/ProductProvider';

const Home = () => {
  const {
    productState: { isLoading, featured },
    productDispach,
  } = useContext(ProductsContext);

  useEffect(() => {
    const getData = async () => {
      getFeatured(productDispach);
    };
    getData();
  }, [productDispach]);
  console.log(isLoading);
  return (
    <ContainerCenter>
      <Slogan>
        You must <CustomColor> Feel</CustomColor> the <CustomColor>Click!</CustomColor>
      </Slogan>
      <Featured>{!isLoading ? featured.map((e, i) => <Card data={e} key={i} to='/' />) : <Loading />}</Featured>
    </ContainerCenter>
  );
};

export default Home;
