import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../store/actions/stories';
import { HomeGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.stories);
  const { stories, loading } = store;
  console.log(stories);

  useEffect(() => {
    dispatch(getStories('world'));
  }, [dispatch]);

  return (
    <>
      {stories && !loading ? (
        <>
          <PageHero title="Top Stories" stories={stories} sort bookmark />
          <HomeGrid stories={stories} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
