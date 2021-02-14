```// STATE
const initialState = {
  articles: [],
  page: 1
};

// ACTIONS
const fetchArticles = async (page) => {
  const { data } = await axios.get(`${apiUrl}page=${page}`);
  dispatch({
    type: FETCH_ARTICLES,
    payload: data.response.results
  });
};

const infiniteScrollHandler = () => {
  dispatch({ type: HANDLE_INFINITE_SCROLL });
};

// REDUCERS
switch (type) {
  case FETCH_ARTICLES:
    return { ...state, articles: payload };

  case HANDLE_INFINITE_SCROLL: {
    return { ...state, ...articles, page: page + 1 };
  }
}

// PAGE
const ArticlesPage = () => {
  const { articles } = useArticlesContext();

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  return (
    <InfiniteScroll dataLength={articles.length} next={infiniteScrollHandler} hasMore>
      {articles.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </InfiniteScroll>
  );
};```

I'm trying to implement infinite scroll using Context and react-infinite-scroll-component. But when I scroll down, component rerenders & only next page gets displayed, without the previous page. I think I need to spread previous entries somehow, but couldn't manage it yet.
