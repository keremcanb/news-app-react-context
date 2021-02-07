import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
// import { useUtilsContext } from '../context/actions/utils';
import { useArticlesContext } from '../context/actions/articles';

const SearchBox = () => {
  const { query, searchHandler } = useArticlesContext();
  // const { closeSidebar } = useUtilsContext();
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();
  const history = useHistory();

  const onChangeHandler = (e) => {
    searchHandler(e.target.value);
    history.push(`/search`);
    // setBarOpened(false);
    // closeSidebar();
  };

  return (
    <Form
      onSubmit={(e) => e.preventDefault()}
      ref={formRef}
      barOpened={barOpened}
      onClick={() => {
        setBarOpened(true);
        inputFocus.current.focus();
      }}
      onFocus={() => {
        setBarOpened(true);
        inputFocus.current.focus();
      }}
      onBlur={() => {
        setBarOpened(false);
      }}
    >
      <Button type="submit">
        <FaSearch />
      </Button>
      <Input
        onChange={(e) => onChangeHandler(e)}
        value={query}
        ref={inputFocus}
        barOpened={barOpened}
        placeholder="Search all news"
      />
    </Form>
  );
};

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.barOpened ? '18rem' : '2rem')};
  cursor: pointer;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? 'auto' : 'none')};
  cursor: ${(props) => (props.barOpened ? 'pointer' : 'none')};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  background-color: ${(props) => (props.barOpened ? '#0f3f8c' : '#09357b')};
  margin-left: ${(props) => (props.barOpened ? '0.5rem' : '0rem')};
  width: 100%;
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  border-bottom: 3px solid #fff;
  padding: 0.9rem;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export default SearchBox;
