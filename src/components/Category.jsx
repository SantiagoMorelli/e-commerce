import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  flex: 1;

  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Title = styled.h1``;
const Button = styled.button``;

const Category = (item) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOW MORE</Button>
      </Info>
    </Container>
  );
};

export default Category;
