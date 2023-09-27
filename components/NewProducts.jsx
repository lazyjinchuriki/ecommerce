import React from "react";
import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 20px 0;
`;

const NewProducts = ({ product }) => {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {product.map((product) => (
          <ProductBox {...product} key={product._id} />
        ))}
      </ProductsGrid>
    </Center>
  );
};

export default NewProducts;
