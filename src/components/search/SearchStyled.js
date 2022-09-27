import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3vh;
`;

const Logo = styled.img`
  width: 20vw;
  height: auto;
  margin-top: 3vh;
`;

const SearchBar = styled.form`
  display: block;
  box-sizing: border-box;
  position: relative;
  height: 2.8em;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 3px rgb(0 0 0 / 6%);

  width: 100%;
  flex: 1 0 auto;
  max-width: 665px;
  margin: 0 auto;
  padding-left: 1em;
  padding-top: 1px;

  font-size: 1.14em;
  padding-right: 3.5em;
`;

const SearchInput = styled.input`
  color: #bbb;
  font-size: 1.1em;
  font-weight: normal;
  display: block;
  width: 100%;
  background: none;
  outline: none;
  border: none;
  padding: 0;
  height: 2.545455em;
  z-index: 1;
  position: relative;
  top: -1px;
`;

const SearchFormClear = styled.input`
  visibility: visible;
  opacity: 0.9;
  margin-right: 3.2em;
  padding: 0 0.5em;
  line-height: 1;
  min-width: 21px;
  color: #aaa;
  box-sizing: content-box;
  font-family: "ddg-serp-icons" !important;
  font-style: normal;
  font-weight: normal !important;
  font-variant: normal;
  text-transform: none;
  text-decoration: none !important;
  width: 1em;
  display: block;
  cursor: pointer;
  background: transparent;
  text-align: center;
  border: none;
  height: 2.45em;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 2px;
  left: auto;
  margin: auto;
  z-index: 2;
  outline: none;
  font-size: 1em;

  &:hover {
    outline: none;
    color: #222;
  }
`;
export { SearchContainer, Logo, SearchBar, SearchInput, SearchFormClear };
