import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>  {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 
  

  const newsHandler = async() => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa497e531a0849788e798dfcbbb1a8ca&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} -NewsMonkey`
    newsHandler();
  
   // eslint-disable-next-line
  },[]);
  
 
  

  

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa497e531a0849788e798dfcbbb1a8ca&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1 );
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    
  };

  
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center" style = {{marginTop:'80px'}}>News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          {loading && <Spinner />}
          <div className="row my-3">
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={page<Math.ceil(totalResults/props.pageSize)&&<Spinner />}
            >
              <div className="container">
                <div className="row">
                  {articles.map((element) => {
                    return (
                      <div className="col md-3" key={element.url}>
                        <NewsItem
                          title={
                            element.title ? element.title.slice(0, 40) : " "
                          }
                          description={
                            element.description
                              ? element.description.slice(0, 80)
                              : " "
                          }
                          imageUrl={
                            element.urlToImage
                              ? element.urlToImage
                              : "https://static.india.com/wp-content/uploads/2023/01/motorola-2.jpg"
                          }
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          name={element.source.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </InfiniteScroll>
          </div>
        </div>
        
      </div>
  
  );
  
}
  News.defaultProps = {
      country: "in",
      pageSize: 10,
      category: "General",
    };
    
    News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

export default News;