import styled from "styled-components";
import PropTypes from "prop-types";
import { FatText } from "../../components/shared";
import React from "react";
import { Link } from "react-router-dom";


const CommentContainer = styled.div`

`

const CommentCaption = styled.span`
    margin-left:10px;
    a{
        background-color:inherit;
        color:${(props) => props.theme.accent};
        cursor:pointer;
        &:hover{
            text-decoration:underline;
        }
    }
`


function Comment({ author, payload }) {
    return (
        <CommentContainer>
            <FatText>{author}</FatText>
            <CommentCaption >
                {payload.split(" ").map((word, index) => {
                    /#[\w]+/.test(word) ? (
                        <React.Fragment key={index}>
                            <Link to={`/hashtags/&{word}`} >{word}</Link> {" "}
                        </React.Fragment>
                    ) : (
                            <React.Fragment key={index}>{word}</React.Fragment>
                        )
                })}
            </CommentCaption>
        </CommentContainer>
    )
}

Comment.prototype = {
    author: PropTypes.string.isRequired,
    payload: PropTypes.string.isRequired,
};

export default Comment;