import React from "react";
import BrdItem from "./BrdItem";
import "./Brd.css";
import { Icon, Button } from "semantic-ui-react";

function Brd({ name }) {
	return (
		<div className="brd">
			<span>{name}</span>

			<div className="brd_head">
				<div className="brd__number">번호</div>
				<div className="brd__title">제목</div>
				<div className="brd__author">글쓴이</div>
				<div className="brd__date">작성일</div>
				<div className="brd__reads">조회</div>
			</div>
			<div className="brd_body">
				<BrdItem
					number="10"
					title="캐나다 소식을 알려드립니다"
					author="관리자"
					date="2020-02-25"
					reads="155"
				/>
				<BrdItem
					number="9"
					title="미국 출입국 팁"
					author="관리자"
					date="2020-02-20"
					reads="651"
				/>
				<BrdItem
					number="8"
					title="벤쿠버 오늘 하루"
					author="관리자"
					date="2020-02-02"
					reads="11"
				/>
				<BrdItem
					number="7"
					title="퀘벡 도깨비"
					author="관리자"
					date="2020-01-30"
					reads="53"
				/>
				<BrdItem
					number="6"
					title="매니토바 주정부 입장"
					author="관리자"
					date="2020-01-25"
					reads="12"
				/>
				<BrdItem
					number="5"
					title="크롬 개발자 도구 사용하는 법"
					author="관리자"
					date="2020-01-25"
					reads="112"
				/>
				<BrdItem
					number="4"
					title="html과 css로 웹사이트를 만들어요"
					author="관리자"
					date="2020-01-22"
					reads="232"
				/>
				<BrdItem
					number="3"
					title="코딩은 즐거워요"
					author="관리자"
					date="2020-01-02"
					reads="56"
				/>
				<BrdItem
					number="2"
					title="위니펙 오늘 넘 추우네요"
					author="관리자"
					date="2020-01-01"
					reads="23"
				/>
				<BrdItem
					number="1"
					title="캐나다 위니펙 한인여러분 화이팅"
					author="관리자"
					date="2020-01-01"
					reads="543"
				/>
			</div>

			<div className="paging">
				<a href="/" className="paging_bt">
					<Icon name="angle double left" />
				</a>
				<a href="/" className="paging_bt">
					<Icon name="angle left" />
				</a>
				<a href="/" className="paging_number on">
					1
				</a>
				<a href="/" className="paging_number">
					2
				</a>
				<a href="/" className="paging_number">
					3
				</a>
				<a href="/" className="paging_number">
					4
				</a>
				<a href="/" className="paging_number">
					5
				</a>
				<a href="/" className="paging_bt">
					<Icon name="angle right" />
				</a>
				<a href="/" className="paging_bt">
					<Icon name="angle double right" />
				</a>
				<div className="writeButton">
					<Button color="orange">글쓰기</Button>
				</div>
			</div>
		</div>
	);
}

export default Brd;
