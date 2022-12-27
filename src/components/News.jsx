import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import { ReactPropTypes } from "react";

export class News extends Component {
  static defaultProps = {
    country: "np",
    pageSize: 8,
    categories: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    categories: PropTypes.string,
    pageSize: PropTypes.number,
  };
  // articles=[];

  constructor(props) {
    super(props);
    // console.log("Hello I am constructor")
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults:0
    };
    // let str=this.props.categories;
    // let newstr = str.toLowerCase();
    // let ann= newstr[0].toUppercase()+newstr;



    document.title=`${this.props.categories[0].toUpperCase()+this.props.categories.substr(1)} - NewsMonkey`;
    
  }
  // 132c7a34189c4097b198d3d2833cdf56
 async UpdateNews(){
 
      // console.log(this.state.page);
      // console.log(Math.ceil(this.state.total / this.props.pageSize));
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=132c7a34189c4097b198d3d2833cdf56&page=${
        this.state.page
      }&pageSize=${this.props.pageSize}`;
      // this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      // this.setState({  });
      this.setState({
        articles: parsedData.articles,
        loading: false,
        totalResults: parsedData.totalResults

      });
 }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=132c7a34189c4097b198d3d2833cdf56&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ loading: false });

    // this.setState({
    //   articles: parsedData.articles,
    //   // totalResults: parsedData.totalResults,
    // });
    this.UpdateNews();
  }

  fetchMoreData = async () => {
   
this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=132c7a34189c4097b198d3d2833cdf56&page=${
        this.state.page
      }&pageSize=${this.props.pageSize}`;
      // this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      // this.setState({  });
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        loading: false,
        totalResults: parsedData.totalResults
      });
      

  };



  // handleNextClick = async () => {
  //   // if (
  //   //   !Math.ceil(this.state.total / this.props.pageSize) <
  //   //   this.state.page + 1
  //   // ) {
  //   //   console.log(this.state.page);
  //   //   console.log(Math.ceil(this.state.total / this.props.pageSize));
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=132c7a34189c4097b198d3d2833cdf56&page=${
  //   //     this.state.page
  //   //   }&pageSize=${this.props.pageSize}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   this.setState({ loading: false });
  //   //   this.setState({
  //   //     articles: parsedData.articles,
  //   //     loading: false
        
  //   //   });
  //   // }
  //   this.setState({page: this.state.page + 1}) 
  //   this.UpdateNews();
  // };
  // handlePrevClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=132c7a34189c4097b198d3d2833cdf56&page=${
  //   //   this.state.page
  //   // }&pageSize=${this.props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({ loading: false });
  //   // this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  //   this.setState({page: this.state.page - 1}) 
  //   this.UpdateNews();
  // };


  render() {
    return (
      <>
          <h2 className="my-3 text-center">NewsMonkey - Top Headings from  {this.props.categories[0].toUpperCase()+this.props.categories.substr(1)}</h2>
          {this.state.loading && <Spinner />} 
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          <div className="row my-2">
            { this.state.articles.map((elem) => {
                return (
                  <div className="col-md-4 my-2 " key={elem.url}>
                    <NewsItem
                      title={elem.title ? elem.title : ""}
                      desc={elem.description ? elem.description : ""}
                      imageUrl={
                        elem.urlToImage
                          ? elem.urlToImage
                          : "https://media.wired.com/photos/63a1ff7d458a34a808b82cc2/191:100/w_1280,c_limit/Cul-streamingroundup-1354133617.jpg"
                      }
                      newsUrl={elem.url} author={elem.author} date = {elem.publishedAt} source={elem.source.name}
                    />
                  </div>
                );
              })}
            {/* <div className="col-md-4 my-2">
                <NewsItem title="My title" desc="my description" imageUrl="https://media.wired.com/photos/63a1ff7d458a34a808b82cc2/191:100/w_1280,c_limit/Cul-streamingroundup-1354133617.jpg"/>
                </div>
                <div className="col-md-4 my-2">
                <NewsItem title="My title" desc="my description" imageUrl="https://media.wired.com/photos/63a1ff7d458a34a808b82cc2/191:100/w_1280,c_limit/Cul-streamingroundup-1354133617.jpg"/>
                </div> */}
          </div>
          </div>
          </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.total / this.props.pageSize) ===
              this.state.page
            }
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
