import React from "react";
import { Comment } from "semantic-ui-react";

function CommentItem({ name, date, body, reply }) {
	let replyy;

	if (reply === true) {
		replyy = (
			<Comment.Group>
				<CommentItem name="test" date="date" body="body" />
			</Comment.Group>
		);
	}

	return (
		<Comment>
			<Comment.Content>
				<Comment.Author as="a">
					<span className="commentName">{name}</span>
				</Comment.Author>
				<Comment.Metadata>
					<div>
						<span className="commentDate">{date}</span>
					</div>
				</Comment.Metadata>
				<Comment.Text>
					<span className="commentBody">{body}</span>
				</Comment.Text>
				<Comment.Actions>
					<Comment.Action>
						<span className="commentReply">Reply</span>
					</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
			{replyy}
		</Comment>
	);
}
export default CommentItem;
