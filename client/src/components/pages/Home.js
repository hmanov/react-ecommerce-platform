import React, { useContext, useEffect } from 'react';
import { ContainerCenter } from '../../Styled/Container';
import { Slogan, CustomColor, Featured } from '../../Styled/HomeStyled';
import Card from '../Card';
import Loading from '../Loading';
import { ProductContext } from '../../context/ProductProvider';
import { getProducts } from '../../context/actions/productTypes';
import productService from '../../context/actions/productsActions';
const Home = () => {
  const {
    productState: { isLoading, products },
    productDispatch,
  } = useContext(ProductContext);
  useEffect(() => {
    const populate = async () => {
      const res = await productService.getProducts();
      productDispatch(getProducts(res));
    };
    populate();
  }, [productDispatch]);
  return (
    <ContainerCenter>
      <Slogan>
        Check out our <CustomColor> Featurd</CustomColor> <CustomColor>Keyboards</CustomColor>
      </Slogan>
      <Featured>
        {!isLoading ? products.slice(0, 3).map((e, i) => <Card data={e} key={i} to='/' />) : <Loading />}
      </Featured>
    </ContainerCenter>
  );
};

export default Home;
