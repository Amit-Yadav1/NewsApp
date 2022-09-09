import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
export default function News (props) {

  let[articles,setarticles]=useState([])
  let[page,setpage]=useState(1)
  let[totalResult,settotalResult]=useState(0)
  
  async function getData() {
    try {
    setpage(1)
      if(props.search ==="None")
      {
     var rawdata = await fetch(
          `https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&apiKey=ebfd0d15ae52483daeac2b7bd270eac5`
        );

      }
      else {
         rawdata = await fetch(
          `https://newsapi.org/v2/everything?q=${props.search}&language=${props.language}&pageSize=${props.pageSize}&apiKey=ebfd0d15ae52483daeac2b7bd270eac5`
        );
      }
      let result = await rawdata.json();
      setarticles(result.articles)
      settotalResult(result.totalResults)
       } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  }
   const fetchMoreData= async()=>{
  try {
    setpage(page+1);
    let rawdata = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=ebfd0d15ae52483daeac2b7bd270eac5`
    );
    let result = await rawdata.json();
    setarticles(articles.concat(result.articles));
} catch (error) {
    console.log(error);
    alert("something went wrong");
  }
}
useEffect(()=>{
  getData()
},[props.q,props.language,props.pageSize,props.search])
  return (
      <>
        <h4 className="background text-light p-2 text-center mt-1">
          {props.q} News Section
        </h4>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<Spinner/>}
          >
         <div className="container-fluid">
        <div className="row">
            {articles.map((item, index) => {
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

