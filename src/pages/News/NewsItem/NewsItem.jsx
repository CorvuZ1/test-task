import classes from "./NewsItem.module.css"

const NewsItem = props => {
  const author = props.author || "Unknown author";
  const content = props.content || "Text not found";
  return (
    <div className={classes.NewsItem}>
      <h1>{author}</h1>
      <br/>
      <p>{props.title}</p>
      <br/>
      <p>{content}</p>
    </div>
  )
}

export default NewsItem;