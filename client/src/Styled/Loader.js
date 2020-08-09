import styled from 'styled-components';

export const Loader = styled.div`
  max-height: 600px;
  max-width: 800px;
  height: 250px;
  width: 480px;
  background-image: url(${require('../assets/img/loading.gif')});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: ${(props) => props.marginTop || '130px'};
  margin-left: auto;
  margin-right: auto;
`;
