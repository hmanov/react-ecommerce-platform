import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const ContainerBody = styled.div`
  background: url(${require('../assets/img/background.jpg')}) center center no-repeat;
  background-attachment: fixed;

  width: 100%;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(68, 68, 68, 0.7);
  }
`;
