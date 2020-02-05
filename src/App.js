import React, { useState, useCallback } from "react";
import NavBar from "./components/views/Navbar/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import News from "./routes/News";
import Forum from "./routes/Forum";
import BuySell from "./routes/BuySell";
import InfoTips from "./routes/InfoTips";
import NewsView from "./routes/NewsView";
import ForumView from "./routes/ForumView";
import BuySellView from "./routes/BuySellView";
import InfoTipsView from "./routes/InfoTipsView";
import Banner1 from "./components/Banner1";
import Write from "./routes/Write";

const dataIn = {
	news: [
		{
			number: 1,
			tag: "[위니펙]",
			title: "캐나다 위니펙 한인여러분 화이팅",
			author: "관리자",
			date: "2020-02-25-13-32",
			view: 543,
			body:
				'<div class="ad_box"><img class="banner" src="some_ad.png" alt="" /><h3>&quot;Hot&quot; Items </h3> <br /> <ul id="items" /></div>',
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
									replies: [
										{
											name: "최현빈",
											body: "와 영어 잘하시네요.",
											date: "2020-02-27-02:01",
											replies: []
										},
										{
											name: "최현빈",
											body: "와 영어 잘하시네요.",
											date: "2020-02-27-02:01",
											replies: []
										},
										{
											name: "최현빈",
											body: "와 영어 잘하시네요.",
											date: "2020-02-27-02:01",
											replies: []
										}
									]
								}
							]
						},
						{
							name: "최현빈",
							body: "와 영어 잘하시네요.",
							date: "2020-02-27-02:01",
							replies: []
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
			tag: "[매나토바]",
			title: "위니펙 오늘 넘 추우네요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 23,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 3,
			tag: "[교민사회]",
			title: "코딩은 즐거워요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 56,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 4,
			tag: "[교회소식]",
			title: "html과 css로 웹사이트를 만들어요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 232,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 5,
			tag: "[교민사회]",
			title: "크롬 개발자 도구 사용하는 법",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 112,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 6,
			title: "매니토바 주정부 입장",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 12,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 7,
			title: "퀘벡 도깨비",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 53,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 8,
			title: "벤쿠버 오늘 하루",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 11,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 9,
			title: "미국 출입국 팁",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 651,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: []
				}
			]
		},
		{
			number: 10,
			title: "캐나다 소식을 알려드립니다",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 155,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: [
				{
					name: "안서영",
					body: "예술적으로 아름답네요!",
					date: "2020-02-25-13:33",
					replies: [
						{
							name: "안서영",
							body: "예술적으로 아름답네요!",
							date: "2020-02-25-13:33",
							replies: [
								{
									name: "안서영",
									body: "예술적으로 아름답네요!",
									date: "2020-02-25-13:33",
									replies: [
										{
											name: "안서영",
											body: "예술적으로 아름답네요!",
											date: "2020-02-25-13:33",
											replies: [
												{
													name: "안서영",
													body: "예술적으로 아름답네요!",
													date: "2020-02-25-13:33",
													replies: [
														{
															name: "안서영",
															body: "예술적으로 아름답네요!",
															date: "2020-02-25-13:33",
															replies: [
																{
																	name: "안서영",
																	body: "예술적으로 아름답네요!",
																	date: "2020-02-25-13:33",
																	replies: [
																		{
																			name: "안서영",
																			body: "예술적으로 아름답네요!",
																			date: "2020-02-25-13:33",
																			replies: [
																				{
																					name: "안서영",
																					body: "예술적으로 아름답네요!",
																					date: "2020-02-25-13:33",
																					replies: [
																						{
																							name: "안서영",
																							body: "예술적으로 아름답네요!",
																							date: "2020-02-25-13:33",
																							replies: [
																								{
																									name: "안서영",
																									body:
																										"예술적으로 아름답네요!",
																									date: "2020-02-25-13:33",
																									replies: [
																										{
																											name: "안서영",
																											body:
																												"예술적으로 아름답네요!",
																											date: "2020-02-25-13:33",
																											replies: []
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	],
	forum: [
		{
			number: 1,
			title: "자유",
			author: "관리자",
			date: "2020-02-25-13-32",
			view: 543,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 3,
			title: "코딩은 즐거워요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 56,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 4,
			title: "이 사이트 언제 만들어졌나요?",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 232,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 5,
			title: "내일 케네스턴에서 이거 세일한다던데",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 112,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 6,
			title: "자유게시판 사람 많다 ㅋ",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 12,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 7,
			title: "퀘벡 도깨비??",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 53,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 8,
			title: "벤쿠버 보다 위니펙이 훨씬 춥네여",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 11,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 9,
			title: "중국가지 마세요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 651,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 10,
			title: "여름에 놀러가기 좋은곳!",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 155,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		}
	],
	buysell: [
		{
			number: 1,
			title: "아재개그 안들은 귀 삽니다",
			author: "관리자",
			date: "2020-02-25-13-32",
			view: 543,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
			title: "중고 카라밴 급처",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 23,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 3,
			title: "한국에서 가져온 김취냉장고 팝니다",
			author: "관리자",
			date: "2020-01-02-13-32",
			view: 56,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 4,
			title: "안쓰는 삼성 갤럭시 폰 삽니다",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 232,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 5,
			title: "아이키아 서랍장 판매",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 112,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 6,
			title: "의자 급처합니다 연락주세요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 12,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 7,
			title: "게임용 컴퓨터 팝니다",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 53,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 8,
			title: "히터 중고 팝니다 상태양호",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 11,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 9,
			title: "발레티켓 공동구매 하실분 구합니다",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 651,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 10,
			title: "아이스박스 팝니다 $50",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 155,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		}
	],
	info: [
		{
			number: 1,
			title: "오늘의 팁",
			author: "관리자",
			date: "2020-02-25-13-32",
			view: 543,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
			title: "내일의 팁",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 23,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 3,
			title: "영화 볼때 팁",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 56,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 4,
			title: "서브웨이 오더시 팁",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 232,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 5,
			title: "캐나다 민트 동전 관리국이란?",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 112,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 6,
			title: "의자 급처합니다 연락주세요",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 12,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 7,
			title: "매니토바 캠핑장 추천!",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 53,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 8,
			title: "위니펙사람들이 좋아하는 도넛가게 TOP 3",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 11,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 9,
			title: "위니펙 현재 한인 수",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 651,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		},
		{
			number: 10,
			title: "====팁====",
			author: "관리자",
			date: "2020-01-01-13-32",
			view: 155,
			body:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			replies: []
		}
	]
};

function App() {
	const [data, setData] = useState(dataIn);
	// console.log(data);

	const [active, setActive] = useState("home");

	return (
		<div className="warper_all">
			<BrowserRouter>
				<div className="header">
					<NavBar active={active} />
				</div>
				<div className="container_body">
					<Banner1 />
					<Route
						path="/"
						exact={true}
						render={() => (
							<Home data={data} handleActiveNav={setActive} active={active} />
						)}
					/>
					<Route
						path="/news"
						exact={true}
						render={() => (
							<News
								data={data.news}
								handleActiveNav={setActive}
								active={active}
							/>
						)}
					/>
					<Route
						path="/news/view"
						exact={true}
						render={() => (
							<News
								data={data.news}
								handleActiveNav={setActive}
								active={active}
							/>
						)}
					/>
					<Route
						path="/news/view/:id"
						// exact={true}
						render={() => (
							<NewsView
								data={data.news}
								handleActiveNav={setActive}
								active={active}
							/>
						)}
					/>
					{/* <Route path="/news/view/:id" component={NewsView} /> */}
					<Route
						path="/forum"
						exact={true}
						render={() => (
							<Forum
								data={data.forum}
								handleActiveNav={setActive}
								active={active}
							/>
						)}
					/>
					<Route
						path="/forum/view/:id"
						// exact={true}
						render={() => (
							<ForumView
								data={data.forum}
								handleActiveNav={setActive}
								active={active}
							/>
						)}
					/>
					<Route
						path="/buysell"
						exact={true}
						render={() => (
							<BuySell
								data={data.buysell}
								handleActiveNav={setActive}
								active={active}
							/>
						)}
					/>
					<Route
						path="/buysell/view/:id"
						// exact={true}
						render={() => (
							<BuySellView
								data={data.buysell}
								handleActiveNav={setActive}
								active={active}
							/>
						)}
					/>
					<Route
						path="/info"
						exact={true}
						render={() => (
							<InfoTips
								data={data.info}
								handleActiveNav={setActive}
								active={active}
							/>
						)}
					/>
					<Route
						path="/info/view/:id"
						// exact={true}
						render={() => (
							<InfoTipsView
								data={data.info}
								handleActiveNav={setActive}
								active={active}
							/>
						)}
					/>
					<Route path="/:cat/write" component={Write} />
				</div>
				<div className="footer">WECO Korean Comunity ©2020 </div>
			</BrowserRouter>
		</div>
	);
}

export default App;

/*
data = {
	news:{

	}
}


 */