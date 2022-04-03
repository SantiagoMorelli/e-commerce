import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media screen and (max-width: 700px) and (min-width: 400px) {
      ${props}
    }
  `;
};
