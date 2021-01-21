import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../store/actions/stories';
import { ImageCard, PageHero, Loader, StoryGrid } from '../components';

const HomePage = () => {
  const store = useSelector((state) => state.stories);
  const { stories, loading } = store;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStories('world'));
    // dispatch(getStories('sport'));
  }, [dispatch]);

  return (
    <>
      {stories && !loading ? (
        <>
          <PageHero title="Top Stories" stories={stories} sort bookmark />
          <StoryGrid stories={stories} />
          <PageHero title="Sports" />
          <StoryGrid stories={stories} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
