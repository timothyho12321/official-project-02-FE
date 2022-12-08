import React from "react";

export default class CommentPost extends React.Component {

    state = {
       
    }

    render() {

        return (
            <React.Fragment>
                <div className="mt-2"
                    style={{
                        border: "1px solid black",
                        "backgroundColor": "beige"
                    }}
                >
                    <div className="ms-2">Commenter: {this.props.allcomment.username}</div>
                    <div className="ms-2 mb-1">{this.props.allcomment.other_comment}</div>
                </div>

            </React.Fragment>

        )

    }


}