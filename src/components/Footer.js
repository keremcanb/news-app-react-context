import styled from 'styled-components';
import { useArticlesContext } from '../context/providers/articles';

const Footer = () => {
  const { loading } = useArticlesContext();

  return !loading && <Wrapper />;
};

const Wrapper = styled.footer`
  height: 15rem;
  background: #09357b;
  margin-top: 5rem;
`;

export default Footer;
