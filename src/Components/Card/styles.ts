import styled from 'styled-components';

type ContainerProps = {
  isDaytime: number;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  margin-bottom: 30px;

  box-shadow: 2px 5px 8px rgba(0,0,0, .35);
  border: 1px solid #f5f5f5;
  border-radius: 5px;

  width: 300px;
  padding-bottom: 60px;

  ${({ isDaytime }) => !isDaytime && `
    background-color: #414141;
    border-color: #333;
    color: #e5e5e5;
  `}
`;


export const Head = styled.div`
  padding: 10px;

  display: flex;
  align-items: start;
  gap: 20px;

  img {
    border-radius: 5px;
    object-fit: contain;
  }
`;

export const Body = styled.div`
  padding: 10px;
  white-space: pre-line;
  font-size: 14px;
`;

export const Foot = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
`;

export const HeadInfo = styled.div`
  small {
    font-size: 12px;
    color: #a1a1a1;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
`;

export const CurrentTime = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Temperature = styled.p`
  font-size: 32px;
  display: flex;

  span {
    font-size: 18px;
  }
`;