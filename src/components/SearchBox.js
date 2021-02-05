import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useUtilsContext } from '../context/actions/utils';
// import { useArticlesContext } from '../context/actions/articles';

const SearchBox = () => {
  // const { query, handleSearch } = useArticlesContext();

  // return (
  //   <form className="search-form" onSubmit={(e) => e.preventDefault()}>
  //     <input type="text" className="form-input" value={query} onChange={(e) => handleSearch(e.target.value)} />
  //   </form>
  // );

  const { closeSidebar } = useUtilsContext();
  const [input, setInput] = useState('');
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();
  const history = useHistory();
  const onSubmitHandler = (e, query) => {
    e.preventDefault();
    history.push(`/search/${query}`);
    setInput('');
    setBarOpened(false);
    closeSidebar();
  };
  return (
    <Form
      onSubmit={(e) => onSubmitHandler(e, input)}
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
        onChange={(e) => setInput(e.target.value)}
        value={input}
        ref={inputFocus}
        barOpened={barOpened}
        placeholder="Search all news"
      />
    </Form>
  );
};

// .search-form {
//   width: 90vw;
//   max-width: var(--max-width);
//   margin: 0 auto;
//   margin-top: 5rem;
//   margin-bottom: 3rem;
// }
// .form-input {
//   width: 100%;
//   border: none;
//   border-bottom: 3px solid var(--clr-grey-8);
//   max-width: 600px;
//   background: transparent;
//   padding: 1rem;
//   font-size: 1rem;
//   color: var(--clr-grey-3);
//   text-transform: uppercase;
//   letter-spacing: var(--spacing);
//   margin-top: 1rem;
// }

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
