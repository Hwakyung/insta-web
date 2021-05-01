import styled from "styled-components";
import PropTypes from "prop-types";
import Comment from "./Comment";



const CommentsContainer = styled.div`
    margin-top:20px;
`

const CommentsCaption = styled.span`
    margin-left:10px;
`


function Comments({ author, caption, commentNumber, comments }) {

    return (
        <CommentsContainer>
            <Comment author={author} payload={caption}></Comment>
            <CommentCount>
                {commentNumber === 1 ? "1 comment" : `${commentNumber} comments`}
            </CommentCount>
            {comments?.map((comment) => (
                <Comment
                    key={comment.id}
                    author={comment.user.username}
                    payload={comment.payload}
                />
            ))}
        </CommentsContainer>
    )
}

Comments.prototype = {
    author: PropTypes.string.isRequired,
    caption: PropTypes.string,
    commentNumber: PropTypes.number.isRequired,
    comments: ProTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: ProTypes.shape({
                avatar: PropTypes.string,
                username: PropTypes.string.isRequired
            })
        })
    ),
    payload: PropTypes.string.isRequired,
    isMine: PropTypes.bool.isRequired,
    createdAt: ProTypes.string.isRequired


};

export default Comments;
