import React, { useContext } from 'react';
import { ContainerCenter } from '../../Styled/Container';
import { Slogan, CustomColor, Featured } from '../../Styled/HomeStyled';
import Card from '../Card';
import Loading from '../Loading';
import { ProductContext } from '../../context/ProductProvider';

const Home = () => {
  const {
    productState: { isLoading, products },
  } = useContext(ProductContext);

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
            .sort((a, b) => calculate(b) - calculate(b))
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
