import React, { useState, useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { searchStories } from '../store/actions/stories';

const SearchBox = ({ history }) => {
  const [input, setInput] = useState('');
  const [barOpened, setBarOpened] = useState(false);

  const formRef = useRef();
  const inputFocus = useRef();
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(searchStories(input));
    history.push(`/search/${input}`);
    setInput('');
    setBarOpened(false);
  };

  return (
    <div className="App">
      <Form
        barOpened={barOpened}
        onClick={() => {
          // When form clicked, set state of baropened to true and focus the input
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on focus open search bar
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on blur close search bar
        onBlur={() => {
          setBarOpened(false);
        }}
        // On submit, call the onFormSubmit function
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button type="submit">
          <FaSearch onClick={() => setToggle(!barOpened)} />
        </Button>
        <Input
          onChange={(e) => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
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
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? '20rem' : '2rem')};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? 'auto' : 'pointer')};
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  height: 2rem;
  /* border-radius: 10rem; */
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: #0f3f8c;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? '1rem' : '0rem')};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
  border-bottom: 3px solid #fff;
  padding-bottom: 1rem;
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? 'auto' : 'none')};
  cursor: ${(props) => (props.barOpened ? 'pointer' : 'none')};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1.5rem;
  border-bottom: 3px solid #fff;
  padding-bottom: 0.3rem;
  padding-right: 2rem;
  padding-left: 3rem;
`;

export default SearchBox;
