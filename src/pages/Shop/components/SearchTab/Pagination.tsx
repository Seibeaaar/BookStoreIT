import { useMemo, useState } from 'react';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from 'src/types/redux';
import { AppDispatch } from 'src/redux/store';
import { calculateSearchPages } from 'src/utils/search';
import { searchBooksByKeyword } from 'src/redux/thunks/books';
import { PaginationControl, PaginationItem } from '../../Shop.styled';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import { ReactComponent as ChveronLeft } from 'src/assets/icons/ChevronLeft.svg';
import { ReactComponent as ChveronRight } from 'src/assets/icons/ChevronRight.svg';

const SearchPagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { totalResults, searchKeyword } = useSelector(
    (state: AppStore) => state.search
  );
  const itemsToRender = calculateSearchPages(totalResults);
  const dispatch = useDispatch<AppDispatch>();
  const { height } = useWindowDimensions();

  const searchSpecificPage = (page: number) => {
    scrollTo(0, height * 0.65);
    if (page === currentPage) return;
    setCurrentPage(page);
    dispatch(
      searchBooksByKeyword({
        keyword: searchKeyword,
        page,
      })
    );
  };

  const DynamicPaginationItems = () => {
    const pagesPatch = Array.from({
      length: 4,
    }).map((_, i) => {
      switch (true) {
        // We orient on a difference by 5 since on the edges
        // we want to render exactly 5 items
        case currentPage > itemsToRender - 5:
          return itemsToRender - 4 + i;
        case currentPage > 5:
          return i + currentPage;
        default:
          // +2 is used since the first page is present by default
          return i + 2;
      }
    });
    const [min, max] = [pagesPatch[0], pagesPatch[pagesPatch.length - 1]];
    return (
      <>
        {currentPage > 5 ? (
          <PaginationItem
            active={false}
            onClick={() => searchSpecificPage(min - 1)}
          >
            <Text>...</Text>
          </PaginationItem>
        ) : null}
        {pagesPatch.map((page) => (
          <PaginationItem
            key={page}
            onClick={() => searchSpecificPage(page)}
            active={page === currentPage}
          >
            <Text>{page}</Text>
          </PaginationItem>
        ))}
        {currentPage < itemsToRender - 5 ? (
          <PaginationItem
            onClick={() => searchSpecificPage(max + 1)}
            active={false}
          >
            <Text>...</Text>
          </PaginationItem>
        ) : null}
      </>
    );
  };

  const firstPage = useMemo(() => currentPage === 1, [currentPage]);
  const lastPage = useMemo(
    () => currentPage === itemsToRender,
    [currentPage, itemsToRender]
  );

  const moveToPrevious = () => {
    if (!firstPage) searchSpecificPage(currentPage - 1);
  };

  const moveToNext = () => {
    if (!lastPage) searchSpecificPage(currentPage + 1);
  };

  return (
    <Flex alignItems="center" gap={48} justifyContent="center">
      <Flex justifyContent="center" alignItems="center" gap={24}>
        <PaginationControl disabled={firstPage} onClick={moveToPrevious}>
          <ChveronLeft width={24} height={24} />
        </PaginationControl>
        <Flex alignItems="center" justifyContent="center" gap={12}>
          <PaginationItem
            onClick={() => searchSpecificPage(1)}
            active={firstPage}
          >
            <Text>1</Text>
          </PaginationItem>
          <DynamicPaginationItems />
          <PaginationItem
            onClick={() => searchSpecificPage(itemsToRender)}
            active={lastPage}
          >
            <Text>{itemsToRender}</Text>
          </PaginationItem>
        </Flex>
        <PaginationControl disabled={lastPage} onClick={moveToNext}>
          <ChveronRight width={24} height={24} />
        </PaginationControl>
      </Flex>
    </Flex>
  );
};

export default SearchPagination;
