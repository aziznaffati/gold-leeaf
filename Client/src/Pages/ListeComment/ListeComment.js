import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {deleteComment} from '../../JS/Actions/commentActions'
import { MdDelete  } from "react-icons/md";
import userlogo from '../../assets/userlogo.png';
import { getAuthUser } from "../../JS/Actions/authActions";
import './ListeComment.css'
const ListeComment = ({comment}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const auth = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(getAuthUser);
  }, [dispatch]);
  return (
     <div>
      <div className="Comment">
       <img
                      alt="ImgUser"
                      src={userlogo}
                      className="d-inline-block align-top"
                    />
      <h6>{comment.FirstNameUser} {comment.LastNameUser} </h6>
      { auth._id = comment.userId &&
      <div className="deee">
      <Link to={`/DetailsProduct/${params.id}`} className="link">
      <button onClick={() => dispatch(deleteComment( params.id , comment.userId))}><MdDelete  style={{ color:"black" , fontSize: "2.5em"}} /></button>
      </Link>
      </div>
}
      </div>
      <h4>{comment.Description}</h4>
    </div>
  )
}

export default ListeComment