import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: rgb(32 40 62 / 1);
`;

export const Body = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-wight: 400;
  font-family: sans-serif;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;
