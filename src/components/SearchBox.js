import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useDispatch } from 'react-redux';
import { searchStories } from '../store/actions/stories';

const SearchBox = ({ history }) => {
  const [searchValue, setSearchValue] = useState('');
  const [toggle, setToggle] = useState(true);
  const animateWidth = useSpring({ width: toggle ? '40px' : '280px' });
  const animateOpacity = useSpring({ opacity: toggle ? 0 : 1 });
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    dispatch(searchStories(searchValue));
    history.push(`/search/${searchValue}`);
    resetInputField();
    setToggle(!toggle);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper style={animateWidth}>
        <i className="fa fa-search" aria-hidden="true" onClick={() => setToggle(!toggle)} />
        <SearchForm onSubmit={callSearchFunction}>
          <SearchInput
            value={searchValue}
            onChange={onChangeHandler}
            placeholder="Search All News"
            type="text"
            style={animateOpacity}
          />
        </SearchForm>
      </Wrapper>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `;

const Wrapper = styled(animated.div)`
  width: 280px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #09357b;
  z-index: 1;
  *:focus {
    outline: none;
  }
  i {
    color: #fff;
    cursor: pointer;
    border-bottom: 3px solid white;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 2rem;
    text-align: center;
  }
`;

const SearchForm = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
`;

const SearchInput = styled(animated.input)`
  height: 100%;
  padding: 10px 10px 10px 36px;
  margin: initial !important;
  border: none;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  background-color: #0f3f8c;
`;

export default SearchBox;
