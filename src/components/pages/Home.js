import React, { useContext, useEffect } from 'react';
import { ContainerCenter } from '../../Styled/Container';
import { Slogan, CustomColor, Featured } from '../../Styled/HomeStyled';
import Card from '../Card';

import { getFeatured } from '../../context/actions/productsActions';
import { ProductsContext } from '../../context/ProductProvider';

const Home = () => {
  const { productState, productDispach } = useContext(ProductsContext);

  useEffect(() => {
    const getData = async () => {
      getFeatured(productDispach);
    };
    getData();
  }, [productDispach]);
  return (
    <ContainerCenter>
      <Slogan>
        You must <CustomColor> Feel</CustomColor> the <CustomColor>Click!</CustomColor>
      </Slogan>
      <Featured>
        {productState.featured.map((e, i) => (
          <Card data={e} key={i} to='/' />
        ))}
      </Featured>
    </ContainerCenter>
  );
};

export default Home;
