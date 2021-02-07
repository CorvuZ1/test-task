import {Component} from "react"
import Loading from "../../components/UI/Loading/Loading"
import classes from "./News.module.css"
import NewsItem from "./NewsItem/NewsItem"

class News extends Component {
  constructor(props) {
    super(props) 

    this.controller = new AbortController() // Устранить утечку памяти
    this.signal = this.controller.signal

    this.state = {
      news: [],
      loading: true
    }
  }

  async componentDidMount() {
    try {
      const API_KEY = "0f2cc3f4db144eec91f4e631adbdc457";
      let response = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`, {
        method: "get", signal: this.signal
      });
      let data = await response.json();
      this.setState({
        news: data,
        loading: false
      })
    } catch {
      console.log("get news is aborted or failed")
    }
  }

  componentWillUnmount() {
    this.controller.abort() // Прерывать fetch при переходе на другую страницу
  }

  render() {
    return (
      <div style={this.state.loading ? {justifyContent:"center"} : {justifyContent:"space-around"}} className={classes.News}>
          {
            !this.state.loading 
              ? this.state.news.articles?.map((item,index) => {
                return (
                  <NewsItem
                    key={index}
                    author={item.author}
                    title={item.title}
                    content={item.content}
                  />
                )
              })
              : <Loading/>
          }
      </div>  
    )
  }
}

export default News;