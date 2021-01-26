import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState('');
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };

  const onFormSubmit = (e) => {
    handleSubmit(e, history, searchEntry);
  };

  return (
    <div className="App">
      <Form
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
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button type="submit">
          <FaSearch />
        </Button>
        <Input
          ref={inputFocus}
          onChange={updateSearchInput}
          value={searchEntry}
          barOpened={barOpened}
          placeholder="Search all news"
        />
      </Form>
    </div>
  );
};

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.barOpened ? '13rem' : '2rem')};
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
  padding: 0.9rem;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export default SearchBox;
