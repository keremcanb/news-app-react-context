import styled from 'styled-components';

const Loader = () => <Wrapper />;

const Wrapper = styled.div`
  border: 16px solid #388e3c;
  border-radius: 50%;
  border-top: 16px solid #f50057;
  border-right: 16px solid #ffca28;
  border-bottom: 16px solid #2196f3;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  position: absolute;
  height: 100px;
  width: 100px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
