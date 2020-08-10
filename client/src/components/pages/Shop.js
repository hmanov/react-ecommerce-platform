import React, { useContext, useEffect, useState } from 'react';
import { ShopTitle, FilterContainer, ClearBtn } from '../../Styled/ShopStyled';
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
    productState: { isLoading, products },
    productDispatch,
  } = useContext(ProductContext);
  const [data, setData] = useState([]);
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    const populate = async () => {
      const res = await productService.getProducts();
      productDispatch(getProducts(res));
      setData(res.data);
    };
    populate();
  }, [productDispatch]);

  const filter = (value) => {
    if (value === 'allProducts') {
      setIsSelected(true);
      setData(products);
    } else {
      setData(products.filter((e) => e.categories.map((e) => e.toLowerCase()).includes(value.toLowerCase())));
      setIsSelected(false);
      return value;
    }
  };
  return (
    <ContainerCenter>
      <ShopTitle>PRODUCTS</ShopTitle>
      <FilterContainer>
        <Filter getFilterValue={filter} isSelected={isSelected} />
        <ClearBtn onClick={filter.bind(undefined, 'allProducts')}>Clear Filter</ClearBtn>
      </FilterContainer>
      <Featured>{!isLoading ? data.map((e, i) => <Card data={e} key={i} to='/' />) : <Loading />}</Featured>
    </ContainerCenter>
  );
};

export default Shop;
