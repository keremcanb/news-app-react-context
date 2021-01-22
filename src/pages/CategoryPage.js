import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getStories } from '../store/actions/stories';
import { PageHero, Loader, StoryGrid } from '../components';

const CategoryPage = () => {
  const store = useSelector((state) => state.stories);
  const { stories, loading } = store;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id === 'sport') {
      dispatch(getStories('sport'));
    }
    if (id === 'culture') {
      dispatch(getStories('culture'));
    }
    if (id === 'lifeandstyle') {
      dispatch(getStories('lifeandstyle'));
    }
  }, [dispatch, id]);

  const titleHandler = () => {
    if (id === 'sport') {
      return 'Sports';
    }
    if (id === 'culture') {
      return 'Culture';
    }
    if (id === 'lifeandstyle') {
      return 'Lifestyle';
    }
  };

  return (
    <>
      {stories && !loading ? (
        <>
          <PageHero title={titleHandler()} sort />
          <StoryGrid stories={stories} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CategoryPage;
