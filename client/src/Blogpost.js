import {format} from "date-fns";
import { Link } from "react-router-dom";
const Post = ({_id,title,summary,cover,content,createdAt,author}) => {
    return (  
    <div className="blogpost">
        <div className="image">
          <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
          </Link>
          
        </div> 
        <div className="text">
        <Link to={`/post/${_id}`}>
        <h2> {title}</h2>
        </Link>
          
          <div className="info">
            <a className="author">{author.username}</a>
            <time>{format(new Date(createdAt),'MMM d, yyyy HH:mm')}</time>
          </div>
          <p className="summary">{summary}</p>
        </div>
    </div>
    );
}
 
export default Post;