import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../store/actions/stories';
import { HomeGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.stories);
  const { stories, loading } = store;

  useEffect(() => {
    dispatch(getStories('world'));
    // dispatch(getStories('sport'));
  }, [dispatch]);

  return (
    <>
      {stories && !loading ? (
        <>
          <PageHero title="Top Stories" stories={stories} sort bookmark />
          <HomeGrid stories={stories} />
          {/* <PageHero title="Sports" />
          <StoryGrid stories={stories} /> */}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
