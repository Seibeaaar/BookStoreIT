import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'src/assets/icons/Search.svg';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/redux/store';
import { searchBooksByKeyword } from 'src/redux/thunks/books';
import { cacheRequest } from 'src/redux/slices/search';

const SearchContainer = styled.div`
  width: 33vw;
  margin: 24px auto;
  border-radius: 24px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.tertiary};
  position: relative;
  height: 48px;
  @media screen and (max-width: 1200px) {
    width: 50vw;
  }
  @media screen and (max-width: 768px) {
    width: 75vw;
  }
  @media screen and (max-width: 576px) {
    width: auto;
  }
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  line-height: normal;
  width: 100%;
  height: 100%;
`;

const SearchButton = styled.button<{ disabled: boolean }>`
  outline: none;
  border: none;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.25s ease;
  background-color: ${(props) =>
    props.theme.colors[props.disabled ? 'grey' : 'secondary']};
  &:hover {
    opacity: 0.75;
  }
`;

const BookSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const submitSearch = () => {
    if (searchValue) {
      dispatch(
        searchBooksByKeyword({
          keyword: searchValue,
          page: 1,
        })
      );
      dispatch(cacheRequest(searchValue));
    }
    setSearchValue('');
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Enter name or isbn of a book..."
        value={searchValue}
        onChange={updateSearchValue}
      />
      <SearchButton onClick={submitSearch} disabled={!searchValue}>
        <SearchIcon width={16} height={16} />
      </SearchButton>
    </SearchContainer>
  );
};

export default BookSearch;
