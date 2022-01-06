import styled from '@emotion/styled';
import {mobile} from "../../screen-sizes";

export const Bar = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 2px -2px gray;
  height: 7rem;
  width: 100%;
`;

export const Content = styled.div`
  width: 100rem;
  max-width: 90vw;
  margin: 3rem auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-size: 3rem;
  width: calc(100% - 30.4rem);
  text-align: center;

  @media ${mobile} {
    font-size: 1.6rem;
    width: 100%;
  }
`;
