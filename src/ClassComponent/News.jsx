import React, { Component } from "react";
import "../assets/css/style.css";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResult: 0,
    };
  }
  async getData() {
    try {
      this.setState({ page: 1 });
      if(this.props.search ==="None")
      {
     var rawdata = await fetch(
          `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&apiKey=ebfd0d15ae52483daeac2b7bd270eac5`
        );

      }
      else {
         rawdata = await fetch(
          `https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=${this.props.pageSize}&apiKey=ebfd0d15ae52483daeac2b7bd270eac5`
        );
      }
      let result = await rawdata.json();
      this.setState({
        articles: result.articles,
        totalResults: result.totalResults,
      });
      console.log(result.totalResults, result.articles);
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  }

fetchMoreData= async()=>{
  try {
    this.setState({ page: this.state.page+1 });
    let rawdata = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=ebfd0d15ae52483daeac2b7bd270eac5`
    );
    let result = await rawdata.json();
    this.setState({articles: this.state.articles.concat(result.articles)});
} catch (error) {
    console.log(error);
    alert("something went wrong");
  }
}

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(old) {
    if (
      old.q !== this.props.q ||
      old.language !== this.props.language ||
      old.pageSize !== this.props.pageSize||
      old.search !== this.props.search
    )
      this.getData();
  }
  render() {
    return (
      <>
        <h4 className="background text-light p-2 text-center mt-1">
          {this.props.q} News Section
        </h4>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<Spinner/>}
          >
         <div className="container-fluid">
        <div className="row">
            {this.state.articles.map((item, index) => {
              return (
                <NewsItem
                  key={index}
                  title={item.title}
                  pic={item.urlToImage}
                  description={item.description}
                  source={item.source}
                  date={item.publishedAt}
                  url={item.url}
                />
              );
            })}
        </div>
        </div>
          </InfiniteScroll>
      </>
    );
  }
}
