import moment from "moment";

const Comments = ({comments}) => {
    return (
        <div className='comment-section-container'>
            {/*{comments.map((data) => {*/}
            {/*    return (*/}
            {/*        <div className='comment-container'>*/}
            {/*            <div className='comment-header'>*/}
            {/*                <img className='comment-profile-pic' src='https://firebasestorage.googleapis.com/v0/b/instagram-clone-9a4b3.appspot.com/o/default_photo.png?alt=media&token=97360e51-f17e-4989-9ced-a0bd4f066e2b' alt='default'/>*/}
            {/*                <p>{data.username}</p>*/}
            {/*                <p className='comment-timestamp'>· {moment(data.timestamp).fromNow(true)} ago</p>*/}
            {/*            </div>*/}
            {/*            <p className='comment-text'>*/}
            {/*                {data.text}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    )
}

export default Comments;