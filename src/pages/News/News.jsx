import {useEffect} from "react"
import { connect } from "react-redux"
import Loading from "../../components/UI/Loading/Loading"
import { controller, getNews} from "../../store/actions/news"
import classes from "./News.module.css"
import NewsItem from "./NewsItem/NewsItem"

const News = props => {

  useEffect(() => {
    props.getNews();
    return () => {
      controller.abort()
    };
  },[])

  return (
    <div style={props.loading ? {justifyContent:"center"} : {justifyContent:"space-around"}} className={classes.News}>
        {
          !props.loading && !props.error
            ? props.newsList?.map((item,index) => {
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

function mapStateToProps(state) {
  return {
    newsList: state.news.newsList,
    loading: state.news.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getNews: () => dispatch(getNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);