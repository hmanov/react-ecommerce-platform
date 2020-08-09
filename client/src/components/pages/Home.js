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
  const calculate = ({ totalRating }) =>
    totalRating.length > 0
      ? totalRating.map((e) => e.rating).reduce((acc, val) => acc + val, 0) / totalRating.length
      : 0;
  return (
    <ContainerCenter>
      <Slogan>
        Check out our <CustomColor> Featurd</CustomColor> <CustomColor>Keyboards</CustomColor>
      </Slogan>
      <Featured>
        {!isLoading ? (
          products
            .sort((a, b) => calculate(b) - calculate(a))
            .slice(0, 3)
            .map((e, i) => <Card data={e} key={i} to='/' />)
        ) : (
          <Loading />
        )}
      </Featured>
    </ContainerCenter>
  );
};

export default Home;
