import Category from './Category';
import { categoryData } from '../da';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const CategoryItems = () => {
  return (
    <Container>
      {categoryData.map((item) => {
        return <Category key={item.id} {...item} />;
      })}
    </Container>
  );
};

export default CategoryItems;
