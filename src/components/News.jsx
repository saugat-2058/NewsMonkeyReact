import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
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

  constructor() {
    super();
    // console.log("Hello I am constructor")
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=75dbe3ab708445688c3bba08439e1783&page=1&&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });

    this.setState({
      articles: parsedData.articles,
      total: parsedData.totalResults,
    });
  }
  handleNextClick = async () => {
    if (
      !Math.ceil(this.state.total / this.props.pageSize) <
      this.state.page + 1
    ) {
      console.log(this.state.page);
      console.log(Math.ceil(this.state.total / this.props.pageSize));
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=75dbe3ab708445688c3bba08439e1783&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ loading: false });
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=75dbe3ab708445688c3bba08439e1783&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="my-3 text-center">NewsMonkey - Top Headings</h2>
          {this.state.loading && <Spinner />}
          <div className="row my-2">
            {!this.state.loading &&
              this.state.articles.map((elem) => {
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
                      newsUrl={elem.url}
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
        <div className="container d-flex justify-content-between my-3">
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
        </div>
      </div>
    );
  }
}

export default News;
