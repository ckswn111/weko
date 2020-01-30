import React from "react";
import "./BrdOpen.css";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import CommentItem from "./CommentItem";

function Brd_Open() {
	return (
		<div>
			<table
				cellSpacing="0"
				border="1"
				summary="글 내용을 표시"
				className="tbl_type"
			>
				<colgroup>
					<col width="80" />
					<col />
					<col width="80" />
					<col width="150" />
					<col width="80" />
					<col width="150" />
				</colgroup>
				<thead>
					<tr>
						<th scope="row">제목</th>
						<td colSpan="5">제발 울프팀 업데이트 끝내주세요!!</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<th scope="row">작성자</th>

						<td>노찬현</td>

						<th scope="row">작성일</th>

						<td>2008.2.26</td>

						<th scope="row">조회</th>

						<td>19</td>
					</tr>

					<tr>
						<td colSpan="6" className="cont">
							안녕하세요 Ready to Combat 울프팀 입니다.
							<br />
							금일 오전 7시 부터 진행된 정기점검이 완료되어 현재 정상적으로
							서버가 오픈되었습니다. <br />
							고객님들께서 게임에 접속이 가능하신 상태이니 게임에 접속을
							해보시기 바랍니다. <br />
							<br />
							<strong>[업데이트 내용]</strong>
							<br />
							1.선물함 추가 및 선물시스템 업데이트 <br />
							2.EX아이템(한코인아이템) 업데이트 <br />
							3.신규 무기 칼(근접무기) 업데이트 <br />
							&nbsp;* EX진지점령/울프진지점령 모드에서 인간형으로 플레이시
							3번키로 선택가능
							<br />
							4.신규 총기 P-226(보조무기) 업데이트 <br />
							6.프라이드 마크 130개 업데이트
							<br />
							<br />
							<span style={{ color: "red" }}>감사합니다.</span>
							<br />
							<br />
							<img
								src="https://clipartart.com/images/big-small-clipart-11.png"
								height="150px"
							></img>
						</td>
					</tr>
				</tbody>
			</table>
			<div className="commnetBox">
				<Comment.Group>
					<Header as="h3" dividing>
						Comments (0)
					</Header>
					<CommentItem
						name="안서영"
						date="Today at 5:42PM"
						body="예술적입니다!"
					/>
					<CommentItem
						name="최찬주"
						date="Yesterday at 12:30AM"
						body="This has been very useful for my research. Thanks as well!"
						reply={true}
					/>
					<CommentItem
						name="최현빈"
						date="5일전"
						body="와 멋지네요 감사합니다."
					/>

					<Form reply>
						<Form.TextArea />
						<Button
							content="Add Comment"
							labelPosition="left"
							icon="edit"
							primary
						/>
					</Form>
				</Comment.Group>
			</div>
		</div>
	);
}

export default Brd_Open;
