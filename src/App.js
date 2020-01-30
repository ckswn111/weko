import React from "react";
import Navbar from "./components/NavBar";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import News from "./routes/News";
import FreeBrd from "./routes/FreeBrd";
import BuySell from "./routes/BuySell";
import InfoTips from "./routes/InfoTips";
import NewsView from "./routes/NewsVew";
import Banner1 from "./components/Banner1";

function App() {
	const data = {
		news: [
			{
				number: 1,
				title: "캐나다 위니펙 한인여러분 화이팅",
				author: "관리자",
				date: "2020-02-25-13-32",
				view: 543,
				replies: [
					{
						name: "안서영",
						body: "예술적으로 아름답네요!",
						date: "2020-02-25-13:33",
						replies: []
					},
					{
						name: "최찬주",
						body: "This has been very useful for my research. Thanks as well!",
						date: "2020-02-27-12:22",
						replies: [
							{
								name: "김현수",
								body: "맞는 말씀이네요 ㅎㅎ",
								date: "2020-03-01-02:01",
								replies: [
									{
										name: "김현수",
										body: "...",
										date: "2020-03-01-02:02",
										replies: []
									}
								]
							}
						]
					},
					{
						name: "최현빈",
						body: "와 멋지네요 감사합니다.",
						date: "2020-02-27-02:01",
						replies: []
					}
				]
			},
			{
				number: 2,
				title: "위니펙 오늘 넘 추우네요",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 23,
				replies: []
			},
			{
				number: 3,
				title: "코딩은 즐거워요",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 56,
				replies: []
			},
			{
				number: 4,
				title: "html과 css로 웹사이트를 만들어요",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 232,
				replies: []
			},
			{
				number: 5,
				title: "크롬 개발자 도구 사용하는 법",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 112,
				replies: []
			},
			{
				number: 6,
				title: "매니토바 주정부 입장",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 12,
				replies: []
			},
			{
				number: 7,
				title: "퀘벡 도깨비",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 53,
				replies: []
			},
			{
				number: 8,
				title: "벤쿠버 오늘 하루",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 11,
				replies: []
			},
			{
				number: 9,
				title: "미국 출입국 팁",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 651,
				replies: []
			},
			{
				number: 11111,
				title: "캐나다 소식을 알려드립니다",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 155,
				replies: []
			}
		],
		free: [
			{
				number: 1,
				title: "자유",
				author: "관리자",
				date: "2020-02-25-13-32",
				view: 543,
				replies: [
					{
						name: "안서영",
						body: "예술적으로 아름답네요!",
						date: "2020-02-25-13:33",
						replies: []
					},
					{
						name: "최찬주",
						body: "This has been very useful for my research. Thanks as well!",
						date: "2020-02-27-12:22",
						replies: [
							{
								name: "김현수",
								body: "맞는 말씀이네요 ㅎㅎ",
								date: "2020-03-01-02:01",
								replies: [
									{
										name: "김현수",
										body: "...",
										date: "2020-03-01-02:02",
										replies: []
									}
								]
							}
						]
					},
					{
						name: "최현빈",
						body: "와 멋지네요 감사합니다.",
						date: "2020-02-27-02:01",
						replies: []
					}
				]
			},
			{
				number: 2,
				title: "위니펙 오늘 넘 추우네요",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 23,
				replies: []
			},
			{
				number: 3,
				title: "코딩은 즐거워요",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 56,
				replies: []
			},
			{
				number: 4,
				title: "이 사이트 언제 만들어졌나요?",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 232,
				replies: []
			},
			{
				number: 5,
				title: "내일 케네스턴에서 이거 세일한다던데",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 112,
				replies: []
			},
			{
				number: 6,
				title: "자유게시판 사람 많다 ㅋ",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 12,
				replies: []
			},
			{
				number: 7,
				title: "퀘벡 도깨비??",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 53,
				replies: []
			},
			{
				number: 8,
				title: "벤쿠버 보다 위니펙이 훨씬 춥네여",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 11,
				replies: []
			},
			{
				number: 9,
				title: "중국가지 마세요",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 651,
				replies: []
			},
			{
				number: 11111,
				title: "여름에 놀러가기 좋은곳!",
				author: "관리자",
				date: "2020-01-01-13-32",
				view: 155,
				replies: []
			}
		]
	};
	return (
		<BrowserRouter>
			<Navbar />
			<Banner1 />
			<Route path="/" exact={true} component={Home} />
			<Route path="/news" exact={true} component={News} />
			<Route path="/news/view" exact={true} component={News} />
			<Route path="/news/view/:id" component={NewsView} />
			<Route path="/free" component={FreeBrd} />
			<Route path="/buysell" component={BuySell} />
			<Route path="/info" component={InfoTips} />
		</BrowserRouter>
	);
}

export default App;

/*
data = {
	news:{

	}
}


 */
