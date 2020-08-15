import React, { useContext, useEffect } from 'react';
import { ShopTitle, FilterContainer } from '../../Styled/ShopStyled';
import { ContainerCenter } from '../../Styled/Container';
import productService from '../../context/actions/productsActions';
import { getProducts } from '../../context/actions/productTypes';
import { Featured } from '../../Styled/HomeStyled';
import Card from '../Card';
import Loading from '../Loading';
import { ProductContext } from '../../context/ProductProvider';
import Filter from '../Filter';
const Shop = () => {
  const {
    productState: { isLoading, filteredData },
    productDispatch,
  } = useContext(ProductContext);

  useEffect(() => {
    const populate = async () => {
      const res = await productService.getProducts();
      productDispatch(getProducts(res));
    };
    populate();
  }, [productDispatch]);
  console.log('ddd');
  return (
    <ContainerCenter>
      <ShopTitle>PRODUCTS</ShopTitle>
      <FilterContainer>
        <Filter />
      </FilterContainer>
      <Featured>{!isLoading ? filteredData.map((e, i) => <Card data={e} key={i} to='/' />) : <Loading />}</Featured>
    </ContainerCenter>
  );
};

export default Shop;
