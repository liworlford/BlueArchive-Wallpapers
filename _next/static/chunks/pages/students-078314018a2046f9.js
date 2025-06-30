(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1609], {
    69037: function(e, t, o) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/students", function() {
            return o(1634)
        }])
    },
    39882: function(e, t, o) {
        "use strict";
        var n = o(85893),
            i = o(60990);
        t.Z = e => {
            let {starValue: t, min: o=1, onChange: r, subValuePosition: a, subValue: l, sx: s} = e,
                c = e => Math.max(5 === e ? 6 : e, o);
            return (0, n.jsxs)(i.Z, {
                sx: s,
                children: ["L" === a && void 0 !== l ? (0, n.jsxs)(i.Z, {
                    sx: {
                        fontSize: "0.75em",
                        display: "flex",
                        opacity: "0.7"
                    },
                    children: [(0, n.jsxs)(i.Z, {
                        sx: {
                            position: "relative"
                        },
                        children: [(0, n.jsx)("img", {
                            src: "/images/common/common_icon_formation_star.png",
                            alt: "별 아이콘",
                            style: {
                                height: "1.2em"
                            }
                        }), (0, n.jsx)(i.Z, {
                            sx: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                paddingTop: "8%",
                                textAlign: "center",
                                fontWeight: "bold"
                            },
                            children: Math.min(l, 5)
                        })]
                    }), l > 5 ? (0, n.jsxs)(i.Z, {
                        sx: {
                            position: "relative"
                        },
                        children: [(0, n.jsx)("img", {
                            src: "/images/common/common_icon_formation_star_2.png",
                            alt: "별 아이콘",
                            style: {
                                height: "1.2em"
                            }
                        }), (0, n.jsx)(i.Z, {
                            sx: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                paddingTop: "8%",
                                textAlign: "center",
                                fontWeight: "bold"
                            },
                            children: l - 5
                        })]
                    }) : null, (0, n.jsx)(i.Z, {
                        children: "→"
                    })]
                }) : null, (0, n.jsxs)(i.Z, {
                    children: [Array.from(Array(t).keys()).map(e => (0, n.jsx)("img", {
                        src: "/images/common/common_icon_formation_star".concat(e < 5 ? "" : "_2", ".png"),
                        alt: "별",
                        style: {
                            height: "1em"
                        },
                        onClick: () => null == r ? void 0 : r(c(e + 1))
                    }, e)), Array.from(Array(Math.max(0, 8 - t)).keys()).map(e => e + t).map(e => (0, n.jsx)("img", {
                        src: "/images/common/common_icon_formation_star_disable.png",
                        alt: "별",
                        style: {
                            height: "1em"
                        },
                        onClick: () => null == r ? void 0 : r(c(e + 1))
                    }, e))]
                }), "R" === a && void 0 !== l ? (0, n.jsxs)(i.Z, {
                    sx: {
                        fontSize: "0.75em",
                        display: "flex"
                    },
                    children: [(0, n.jsx)(i.Z, {
                        children: "→"
                    }), (0, n.jsxs)(i.Z, {
                        sx: {
                            position: "relative"
                        },
                        children: [(0, n.jsx)("img", {
                            src: "/images/common/common_icon_formation_star.png",
                            alt: "별 아이콘",
                            style: {
                                height: "1.2em"
                            }
                        }), (0, n.jsx)(i.Z, {
                            sx: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                paddingTop: "8%",
                                textAlign: "center"
                            },
                            children: Math.min(l, 5)
                        })]
                    }), l > 5 ? (0, n.jsxs)(i.Z, {
                        sx: {
                            position: "relative"
                        },
                        children: [(0, n.jsx)("img", {
                            src: "/images/common/common_icon_formation_star_2.png",
                            alt: "별 아이콘",
                            style: {
                                height: "1.2em"
                            }
                        }), (0, n.jsx)(i.Z, {
                            sx: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                paddingTop: "8%",
                                textAlign: "center"
                            },
                            children: l - 5
                        })]
                    }) : null]
                }) : null]
            })
        }
    },
    3407: function(e, t, o) {
        "use strict";
        var n = o(85893),
            i = o(67294),
            r = o(25407);
        t.Z = (0, i.memo)(e => {
            let {value: t, min: o, max: a, style: l={}, onChange: s} = e,
                [c, d] = (0, i.useState)(t.toString());
            return (0, i.useEffect)(() => {
                d((0, r.Z)(t, o, a).toString())
            }, [a, o, t]), (0, n.jsx)("input", {
                type: "number",
                style: {
                    borderRadius: "0",
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                    WebkitBorderRadius: "0",
                    border: "none",
                    borderBottom: "1px solid black",
                    backgroundColor: "transparent",
                    width: "".concat(a ? (Math.floor(Math.log10(a)) + 1) * 667 / 1e3 : 1.334, "em"),
                    lineHeight: "1",
                    fontSize: "1em",
                    paddingLeft: "0",
                    paddingRight: "0",
                    overflowX: "visible",
                    ...l
                },
                value: c,
                min: o,
                max: a,
                autoComplete: "off",
                name: "spec input",
                maxLength: a && a.toString().length,
                onFocus: e => e.target.select ? e.target.select() : e.target.setSelectionRange(0, e.target.value.length),
                onChange: e => d(e.target.value),
                onBlur: e => {
                    let n = (0, r.Z)(e.target.value, o, a);
                    c !== n.toString() && d(n.toString()),
                    t !== n && (null == s || s(n))
                }
            })
        })
    },
    1369: function(e, t, o) {
        "use strict";
        var n = o(85893),
            i = o(67294),
            r = o(26541);
        t.Z = e => {
            let {value: t, onChange: o, timeout: a=120, ...l} = e,
                [s, c] = (0, i.useState)(t || ""),
                d = (0, i.useRef)(null);
            return (0, i.useEffect)(() => {
                d.current && clearTimeout(d.current),
                    d.current = setTimeout(() => {
                        null == o || o(s)
                    }, a)
            }, [o, a, s]), (0, i.useEffect)(() => {
                c(t || "")
            }, [t]), (0, n.jsx)(r.Z, {
                value: s,
                onChange: e => c(e.target.value),
                ...l
            })
        }
    },
    67391: function(e, t, o) {
        "use strict";
        o.d(t, {
            S: function() {
                return d
            },
            Z: function() {
                return c
            }
        });
        var n = o(85893),
            i = o(67294),
            r = o(77527),
            a = o(28907),
            l = o(60990),
            s = o(38368);
        let c = () => (0, n.jsx)(n.Fragment, {}),
            d = e => {
                var t,
                    o;
                let {children: c, tabIndex: d=0, onTabIndexChange: p, onlySelected: m=!1, palette: u, sx: x={}} = e,
                    [h, g] = (0, i.useState)(d),
                    j = (0, i.useCallback)(e => (Array.isArray(e) ? e : [e]).filter(e => e).map(e => {
                        let {props: t} = e;
                        return t
                    }), []),
                    [_, b] = (0, i.useState)(j(c));
                (0, i.useEffect)(() => {
                    g(d)
                }, [d]),
                    (0, i.useEffect)(() => {
                        null == p || p(h)
                    }, [p, h]),
                    (0, i.useEffect)(() => {
                        Array.isArray(c) ? g(e => Math.min(c.filter(e => null !== e).length - 1, e)) : g(0),
                            b(j(c))
                    }, [c, j]);
                let f = (0, r.ZP)(a.Z)(() => {
                    var e,
                        t,
                        o,
                        n,
                        i,
                        r;
                    return {
                        boxSizing: "border-box",
                        color: null !== (n = null == u ? void 0 : null === (e = u.nonselected) || void 0 === e ? void 0 : e.color) && void 0 !== n ? n : "#486486",
                        padding: "6px 8px",
                        minHeight: "2rem",
                        "&.Mui-selected": {
                            backgroundColor: null !== (i = null == u ? void 0 : null === (t = u.selected) || void 0 === t ? void 0 : t.background) && void 0 !== i ? i : "#f3fafc",
                            color: null !== (r = null == u ? void 0 : null === (o = u.selected) || void 0 === o ? void 0 : o.color) && void 0 !== r ? r : "black"
                        }
                    }
                });
                return _.length > 0 ? (0, n.jsxs)(l.Z, {
                    sx: {
                        display: "flex",
                        flexFlow: "column",
                        maxHeight: "100%",
                        ...x
                    },
                    children: [(0, n.jsx)(s.Z, {
                        value: h,
                        onChange: (e, t) => g(t),
                        variant: "fullWidth",
                        sx: {
                            "& .MuiTabs-indicator": {
                                display: "none"
                            },
                            backgroundColor: null !== (o = null == u ? void 0 : null === (t = u.container) || void 0 === t ? void 0 : t.background) && void 0 !== o ? o : "#b5def3",
                            padding: "0.25rem",
                            paddingBottom: "0",
                            minHeight: "1.4rem",
                            flex: "0 0 auto"
                        },
                        children: _.map((e, t) => {
                            let {tabLabel: o} = e;
                            return (0, n.jsx)(f, {
                                disableRipple: !0,
                                label: o
                            }, t)
                        })
                    }), (m ? [_[h]] : _).map((e, t) => {
                        let {tabLabel: o, ...n} = e;
                        return (0, i.createElement)(l.Z, {
                            ...n,
                            role: "tabpanel",
                            key: t,
                            hidden: m ? void 0 : h !== t,
                            sx: {
                                flex: "1 1 auto",
                                overflowY: "auto",
                                ...n.sx,
                                ...m || h === t ? {} : {
                                    display: "none"
                                }
                            }
                        })
                    })]
                }) : null
            }
    },
    97705: function(e, t, o) {
        "use strict";
        var n = o(85893),
            i = o(68573),
            r = o(51015);
        t.Z = e => {
            let {checked: t, onCheckChange: o, children: a, fillWidth: l=!1, disableRipple: s=!1} = e;
            return (0, n.jsx)(i.ZP, {
                item: !0,
                xs: 12,
                md: l ? 12 : 6,
                children: (0, n.jsxs)(r.Z, {
                    variant: "text",
                    onClick: () => o(!t),
                    disableRipple: s,
                    fullWidth: !0,
                    children: [(0, n.jsx)("span", {
                        style: {
                            display: "inherit",
                            marginRight: "8px",
                            marginLeft: "-4px",
                            width: "20px",
                            height: "20px",
                            padding: "1px",
                            border: "1px solid #999",
                            borderRadius: "4px"
                        },
                        children: t ? (0, n.jsx)("img", {
                            src: "/images/common/common_icon_check_b.png",
                            alt: "체크됨",
                            style: {
                                width: "100%"
                            }
                        }) : null
                    }), (0, n.jsx)("span", {
                        style: {
                            width: "calc(100% - 0.875rem - 8px)",
                            textAlign: "left",
                            color: "#000",
                            opacity: t ? "1" : "0.6"
                        },
                        children: a
                    })]
                })
            })
        }
    },
    89779: function(e, t, o) {
        "use strict";
        o.d(t, {
            k: function() {
                return l
            },
            t: function() {
                return a
            }
        });
        var n = o(77527),
            i = o(86931),
            r = o(83907);
        let a = (0, n.ZP)(i.Z)(() => ({
                transform: "skewX(-10deg)"
            })),
            l = (0, n.ZP)(r.Z)(() => ({
                backgroundColor: "white",
                color: "#344b6f",
                padding: "4px 11px",
                "&.Mui-selected": {
                    backgroundColor: "#344b6f",
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#344b6f",
                        color: "white"
                    }
                },
                "& > *": {
                    transform: "skewX(10deg)"
                },
                "&:hover": {
                    backgroundColor: "white",
                    color: "#344b6f"
                }
            }))
    },
    90284: function(e, t, o) {
        "use strict";
        var n = o(85893),
            i = o(60990);
        t.Z = e => {
            let {imgSrc: t, imgSrcSet: o, imgAlt: r, displayText: a} = e;
            return (0, n.jsx)(i.Z, {
                sx: {
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    padding: "2px",
                    borderTopRightRadius: "calc(".concat(2.4752475247524752, "% + 2px) calc(").concat(2.1929824561403506, "% + 2px)"),
                    borderBottomLeftRadius: "calc(".concat(2.4752475247524752, "% + 2px) calc(").concat(2.1929824561403506, "% + 2px)"),
                    background: "linear-gradient(-45deg, transparent, transparent 5%, rgb(215,219,223) 5%, rgb(215,219,223) 95%, transparent 95%, transparent)"
                },
                children: (0, n.jsx)(i.Z, {
                    sx: {
                        width: "100%",
                        display: "flex",
                        position: "relative",
                        padding: "3%",
                        background: "linear-gradient(-45deg, transparent, transparent 4%, rgb(215,215,215) 4%, white 5%, white 93.5%, rgb(215,215,215) 95%, transparent 95%, transparent)",
                        borderTopRightRadius: "".concat(2.4752475247524752, "% ").concat(2.1929824561403506, "%"),
                        borderBottomLeftRadius: "".concat(2.4752475247524752, "% ").concat(2.1929824561403506, "%")
                    },
                    children: (0, n.jsxs)(i.Z, {
                        sx: {
                            display: "flex",
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            aspectRatio: "404/456"
                        },
                        children: [(0, n.jsx)("img", {
                            src: t,
                            srcSet: o,
                            alt: r,
                            style: {
                                position: "relative",
                                width: "100%",
                                margin: "auto",
                                aspectRatio: "404/456",
                                lineHeight: "1"
                            },
                            loading: "lazy"
                        }), a ? (0, n.jsx)(i.Z, {
                            sx: {
                                position: "absolute",
                                bottom: "0px",
                                background: "linear-gradient(-45deg, transparent, transparent 3%, rgba(0, 0, 0, 0.7) 3%, rgba(0, 0, 0, 0.7))",
                                color: "white",
                                width: "100%",
                                textAlign: "center",
                                boxSizing: "border-box",
                                padding: "0.25rem 0",
                                lineHeight: "1.125",
                                ...a.length > 9 ? {
                                    fontSize: "0.8rem"
                                } : {}
                            },
                            children: a
                        }) : null]
                    })
                })
            })
        }
    },
    13472: function(e) {
        "use strict";
        e.exports = {
            school: [{
                kr: "백귀야행 연합학원",
                jp: "百鬼夜行連合学院",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_HYAKKIYAKO"
            }, {
                kr: "붉은겨울 연방학원",
                jp: "レッドウィンター連邦学園",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_REDWINTER"
            }, {
                kr: "트리니티 종합학원",
                jp: "トリニティ総合学園",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_TRINITY"
            }, {
                kr: "게헨나 학원",
                jp: "ゲヘナ学園",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_GEHENNA"
            }, {
                kr: "아비도스 고등학교",
                jp: "アビドス高等学校",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_ABYDOS"
            }, {
                kr: "밀레니엄 사이언스 스쿨",
                jp: "ミレニアムサイエンススクール",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_MILLENNIUM"
            }, {
                kr: "아리우스 분교",
                jp: "アリウス分校",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_Arius"
            }, {
                kr: "산해경 고급중학교",
                jp: "山海経高級中学校",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_SHANHAIJING"
            }, {
                kr: "발키리 경찰학교",
                jp: "ヴァルキューレ警察学校",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_VALKYRIE"
            }, {
                kr: "와일드헌트 예술학원",
                jp: "ワイルドハント芸術学院"
            }, {
                kr: "SRT 특수학원",
                jp: "SRT特殊学園",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_SRT"
            }, {
                kr: "샬레",
                jp: "SCHALE"
            }, {
                kr: "그 외",
                jp: "その他",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_ETC"
            }, {
                kr: "토키와다이 중학교",
                jp: "常盤台中学",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_Tokiwadai"
            }, {
                kr: "사쿠가와 중학교",
                jp: "柵川中学",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_ETC"
            }, {
                kr: "하이랜더 철도학원",
                jp: "ハイランダー鉄道学園",
                icon: "UIs/01_Common/11_SchoolIcon/School_Icon_HIGHLANDER"
            }],
            club: [{
                kr: "엔지니어부",
                jp: "エンジニア部"
            }, {
                kr: "Cleaning&Clearing",
                jp: "Cleaning&Clearing"
            }, {
                kr: "구호기사단",
                jp: "救護騎士団"
            }, {
                kr: "귀가부(게헨나)",
                jp: "帰宅部（ゲヘナ）"
            }, {
                kr: "귀가부(밀레니엄)",
                jp: "帰宅部（ミレニアム）"
            }, {
                kr: "귀가부(백귀야행)",
                jp: "帰宅部（百鬼夜行）"
            }, {
                kr: "귀가부(산해경)",
                jp: "帰宅部（山海経）"
            }, {
                kr: "귀가부(트리니티)",
                jp: "帰宅部（トリニティ）"
            }, {
                kr: "급양부",
                jp: "給食部"
            }, {
                kr: "대책위원회",
                jp: "対策委員会"
            }, {
                kr: "도서부",
                jp: "図書委員会"
            }, {
                kr: "마츠리운영관리부",
                jp: "お祭り運営委員会"
            }, {
                kr: "미식연구회",
                jp: "美食研究会"
            }, {
                kr: "방과후 디저트부",
                jp: "放課後スイーツ部"
            }, {
                kr: "붉은겨울 사무국",
                jp: "レッドウィンター事務局"
            }, {
                kr: "샬레",
                jp: "シャーレ"
            }, {
                kr: "세미나",
                jp: "セミナー"
            }, {
                kr: "아리우스 스쿼드",
                jp: "アリウススクワッド"
            }, {
                kr: "정의실현부",
                jp: "正義実現委員会"
            }, {
                kr: "선도부",
                jp: "風紀委員会"
            }, {
                kr: "흥신소 68",
                jp: "便利屋68"
            }, {
                kr: "매화원",
                jp: "梅花園"
            }, {
                kr: "시스터후드",
                jp: "シスターフッド"
            }, {
                kr: "게임개발부",
                jp: "ゲーム開発部"
            }, {
                kr: "생활안전국",
                jp: "生活安全局"
            }, {
                kr: "보충수업부",
                jp: "補習授業部"
            }, {
                kr: "초현상특무부",
                jp: "特異現象捜査部"
            }, {
                kr: "트리니티 자경단",
                jp: "トリニティ自警団"
            }, {
                kr: "베리타스",
                jp: "ヴェリタス"
            }, {
                kr: "트레이닝부",
                jp: "トレーニング部"
            }, {
                kr: "음양부",
                jp: "陰陽部"
            }, {
                kr: "수행부",
                jp: "修行部"
            }, {
                kr: "연단방",
                jp: "錬丹術研究会"
            }, {
                kr: "인법연구부",
                jp: "忍術研究部"
            }, {
                kr: "227호 특별반",
                jp: "227号特別クラス"
            }, {
                kr: "없음",
                jp: "無し"
            }, {
                kr: "응급의학부",
                jp: "救急医学部"
            }, {
                kr: "RABBIT 소대",
                jp: "RABBIT小隊"
            }, {
                kr: "판데모니움 소사이어티",
                jp: "パンデモニウム・ソサエティー"
            }, {
                kr: "온천개발부",
                jp: "温泉開発部"
            }, {
                kr: "티파티",
                jp: "ティーパーティー"
            }, {
                kr: "공안국",
                jp: "公安局"
            }, {
                kr: "현룡문",
                jp: "玄龍門"
            }, {
                kr: "현무상회",
                jp: "玄武商会"
            }, {
                kr: "용역부",
                jp: "工務部"
            }, {
                kr: "지식해방전선",
                jp: "知識解放戦線"
            }, {
                kr: "백화요란 분쟁조정위원회",
                jp: "百花繚乱紛争調停委員会"
            }, {
                kr: "반짝반짝부",
                jp: "キラキラ部"
            }, {
                kr: "아비도스 학생회",
                jp: "アビドス生徒会"
            }, {
                kr: "CCC",
                jp: "CCC"
            }, {
                kr: "화물운송관리부",
                jp: "貨物輸送管理部"
            }],
            role: [{
                kr: "딜러",
                jp: "アタッカー"
            }, {
                kr: "탱커",
                jp: "タンク"
            }, {
                kr: "서포터",
                jp: "サポーター"
            }, {
                kr: "힐러",
                jp: "ヒーラー"
            }, {
                kr: "T.S",
                jp: "T.S"
            }],
            weapontype: ["None", "SG", "SMG", "AR", "GL", "HG", "RL", "SR", "DSMG", "RG", "DSG", "Vulcan", "Missile", "Cannon", "Taser", "MG", "Binah", "MT", "Relic", "FT", "Akemi"],
            range: ["Back", "Front", "Middle"],
            armortype: [{
                kr: "경장갑",
                jp: "軽装備"
            }, {
                kr: "중장갑",
                jp: "重装甲"
            }, {
                kr: "특수장갑",
                jp: "特殊装甲"
            }, {
                kr: "구조물",
                jp: "構造物"
            }, {
                kr: "일반장갑",
                jp: "通常装甲"
            }, {
                kr: "탄력장갑",
                jp: "弾力装甲"
            }],
            bullettype: [{
                kr: "일반",
                jp: "ノーマル"
            }, {
                kr: "관통",
                jp: "貫通"
            }, {
                kr: "폭발",
                jp: "爆発"
            }, {
                kr: "공성",
                jp: "破壊"
            }, {
                kr: "신비",
                jp: "神秘"
            }, {
                kr: "-",
                jp: "-"
            }, {
                kr: "진동",
                jp: "振動"
            }],
            ooparts4: [{
                kr: "온전한 네브라 디스크",
                jp: "完全なネブラディスク",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Nebra_3"
            }, {
                kr: "온전한 파에스토스 원반",
                jp: "完全なファイストス円盤",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Phaistos_3"
            }, {
                kr: "고순도 볼프세크 강철",
                jp: "高純度のヴォルフスエック鋼鉄",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Wolfsegg_3"
            }, {
                kr: "온전한 님루드 렌즈",
                jp: "完全なニムルドレンズ",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Nimrud_3"
            }, {
                kr: "만드라고라 농축액",
                jp: "マンドレイク濃縮液",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Mandragora_3"
            }, {
                kr: "온전한 로혼치 사본",
                jp: "完全なレヒニッツ写本",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Rohonc_3"
            }, {
                kr: "에테르 정수",
                jp: "エーテルのエッセンス",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Ether_3"
            }, {
                kr: "온전한 안티키테라 장치",
                jp: "完全なアンティキティラ装置",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Antikythera_3"
            }, {
                kr: "온전한 보이니치 사본",
                jp: "完全なヴォイニッチ手稿のコピー",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Voynich_3"
            }, {
                kr: "온전한 수정 하니와",
                jp: "完全な水晶埴輪",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_CrystalHaniwa_3"
            }, {
                kr: "온전한 토템폴",
                jp: "完全なトーテムポール",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_TotemPole_3"
            }, {
                kr: "온전한 고대 전지",
                jp: "完全なる古代の電池",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Baghdad_3"
            }, {
                kr: "황금 드레스",
                jp: "黄金の布",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_GoldenFleece_3"
            }, {
                kr: "온전한 머리가 자라는 인형",
                jp: "完全な髪伸び人形",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Kikuko_3"
            }, {
                kr: "온전한 디스코 콜간테",
                jp: "完全な円盤型ペンダント",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_DiscoColgante_3"
            }, {
                kr: "온전한 아틀란티스 메달",
                jp: "完全な古代文明のメダル",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_AtlantisMedal_3"
            }, {
                kr: "온전한 로마 12면체",
                jp: "完全な中空十二面体",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_RomanDice_3"
            }, {
                kr: "온전한 킴바야 유물",
                jp: "完全な黄金シャトル",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Quimbaya_3"
            }, {
                kr: "온전한 이스탄불 로켓",
                jp: "完全な古代ロケット",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Rocket_3"
            }, {
                kr: "온전한 위니페소키 스톤",
                jp: "完全なミステリーストーン",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_WinniStone_3"
            }],
            ooparts3: [{
                kr: "마모된 네브라 디스크",
                jp: "摩耗したネブラディスク",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Nebra_2"
            }, {
                kr: "마모된 파에스토스 원반",
                jp: "摩耗したファイストス円盤",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Phaistos_2"
            }, {
                kr: "저순도 볼프세크 강철",
                jp: "低純度のヴォルフスエック鋼鉄",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Wolfsegg_2"
            }, {
                kr: "마모된 님루드 렌즈",
                jp: "摩耗したニムルドレンズ",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Nimrud_2"
            }, {
                kr: "만드라고라 주스",
                jp: "マンドレイクジュース",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Mandragora_2"
            }, {
                kr: "편집된 로혼치 사본",
                jp: "編集済みのレヒニッツ写本",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Rohonc_2"
            }, {
                kr: "에테르 결정",
                jp: "エーテルの結晶",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Ether_2"
            }, {
                kr: "마모된 안티키테라 장치",
                jp: "摩耗したアンティキティラ装置",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Antikythera_2"
            }, {
                kr: "편집된 보이니치 사본",
                jp: "編集済みのヴォイニッチ手稿のコピー",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Voynich_2"
            }, {
                kr: "수리된 수정 하니와",
                jp: "修復済みの水晶埴輪",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_CrystalHaniwa_2"
            }, {
                kr: "수리된 토템폴",
                jp: "修復済みのトーテムポール",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_TotemPole_2"
            }, {
                kr: "마모된 고대 전지",
                jp: "摩耗した古代の電池",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Baghdad_2"
            }, {
                kr: "황금 양모",
                jp: "大きな黄金の巻糸",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_GoldenFleece_2"
            }, {
                kr: "수리된 머리가 자라는 인형",
                jp: "修理済みの髪伸び人形",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Kikuko_2"
            }, {
                kr: "수리된 디스코 콜간테",
                jp: "修復途中の円盤型ペンダント",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_DiscoColgante_2"
            }, {
                kr: "마모된 아틀란티스 메달",
                jp: "修復途中の古代文明のメダル",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_AtlantisMedal_2"
            }, {
                kr: "수리된 로마 12면체",
                jp: "修復途中の中空十二面体",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_RomanDice_2"
            }, {
                kr: "수리된 킴바야 유물",
                jp: "修復途中の黄金シャトル",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Quimbaya_2"
            }, {
                kr: "수리된 이스탄불 로켓",
                jp: "修復途中の古代ロケット",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_Rocket_2"
            }, {
                kr: "마모된 위니페소키 스톤",
                jp: "不完全なミステリーストーン",
                icon: "UIs/01_Common/03_NonEquipment/Item_Icon_Material_WinniStone_2"
            }]
        }
    },
    24994: function(e, t) {
        "use strict";
        t.Z = (e, t) => !!t.split("").every(e => e >= "ㄱ" && e <= "ㅎ") && e.replaceAll(/[\d\s()]/g, "").split("").map(e => ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"][Math.floor((e.charCodeAt(0) - 44032) / 588)] || "").join("").includes(t)
    },
    37958: function(e, t) {
        "use strict";
        t.Z = (e, t) => e.charCodeAt(0) === t.charCodeAt(0) ? e.localeCompare(t) : e.charCodeAt(0) - t.charCodeAt(0)
    },
    1634: function(e, t, o) {
        "use strict";
        o.r(t),
            o.d(t, {
                __N_SSG: function() {
                    return es
                },
                default: function() {
                    return ec
                }
            });
        var n = o(85893),
            i = o(67294),
            r = o(68573),
            a = o(51015),
            l = o(28731),
            s = o(60990),
            c = o(96788),
            d = o(52857),
            p = o(17521),
            m = o(26541),
            u = o(6897),
            x = o(84956),
            h = o(84630),
            g = o(95639),
            j = o(62987),
            _ = o(70290),
            b = o(12446),
            f = o(1861);
        o(76441);
        var k = o(41664),
            y = o.n(k),
            N = o(9008),
            v = o.n(N),
            I = o(24994),
            Z = o(37958),
            C = o(46136),
            w = o(88477),
            S = o(74595),
            A = o(48786),
            R = o(217),
            E = e => {
                let {opened: t, onClose: o, onExit: i} = e;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(A.Z, {
                        opened: t,
                        onClose: o,
                        title: "功能未完成",
                    })
                })
            },
            L = e => {
                let {title: t, onExit: o} = e,
                    i = (0, S.I)();
                return (0, n.jsxs)(s.Z, {
                    sx: {
                        display: "flex",
                        width: "100%"
                    },
                    children: [(0, n.jsx)(s.Z, {
                        sx: {
                            flex: "1 0 auto"
                        },
                        children: (0, n.jsx)(y(), {
                            href: "https://kivotos.de",
                            children: (0, n.jsx)(a.Z, {
                                variant: "text",
                                startIcon: (0, n.jsx)(w.Z, {}),
                                disableRipple: !0,
                                sx: {
                                    color: "#000000"
                                },
                                onClick: o,
                                children: null != t ? t : "返回"
                            })
                        })
                    }), (0, n.jsxs)(s.Z, {
                        sx: {
                            textAlign: "right",
                            flex: "1 0 auto"
                        },
                        children: [(0, n.jsx)(d.Z, {
                            sx: {
                                fontSize: "1.3rem"
                            },
                            onClick: () => {
                                i.open(e => {
                                    let {isOpen: t, close: i} = e;
                                    return (0, n.jsx)(E, {
                                        opened: t,
                                        onClose: i,
                                        onExit: o
                                    })
                                })
                            },
                            children: (0, n.jsx)("img", {
                                src: "/images/common/common_icon_formation_buff.png",
                                alt: "NPC 캐릭터",
                                style: {
                                    width: "0.83em",
                                    aspectRatio: "12/13",
                                    margin: "0.05em",
                                    filter: "invert(60%)"
                                }
                            })
                        }), (0, n.jsx)(y(), {
                            href: "https://kivotos.de",
                            children: (0, n.jsx)(d.Z, {
                                sx: {
                                    fontSize: "1.3rem"
                                },
                                onClick: o,
                                children: (0, n.jsx)("img", {
                                    src: "/images/common/common_top_home_btn.png",
                                    alt: "홈",
                                    style: {
                                        width: "0.9em",
                                        aspectRatio: "85/81",
                                        margin: "0.05em",
                                        filter: "invert(60%)"
                                    }
                                })
                            })
                        })]
                    })]
                })
            },
            M = o(90284),
            T = o(64298),
            q = o(10811),
            U = o(67709),
            O = o(43626),
            P = o(1369),
            W = o(67391),
            B = o(37744),
            H = o(97705),
            F = o(89779),
            z = o(39882),
            G = o(3407),
            J = o(93087),
            D = o(13472),
            Y = o.n(D),
            X = o(87410);
        let V = "students/index.sort",
            K = "students/index.filter",
            Q = "students/index.custom",
            $ = ["D", "C", "B", "A", "S", "SS"],
            ee = {
                name: [(e, t) => (0, Z.Z)(e.name, t.name), e => e.name],
                school: [(e, t) => (0, Z.Z)(e.school, t.school), e => e.school],
                club: [(e, t) => (0, Z.Z)("".concat(e.school, " ").concat(e.club), "".concat(t.school, " ").concat(t.club)), e => e.club],
                age: [(e, t) => (0, Z.Z)(e.age, t.age), e => e.age],
                height: [(e, t) => (0, Z.Z)(e.height, t.height), e => e.height],
                atk: [(e, t) => e.atk - t.atk, e => e.atk],
                def: [(e, t) => e.def - t.def, e => e.def],
                hp: [(e, t) => e.hp - t.hp, e => e.hp],
                heal: [(e, t) => e.heal - t.heal, e => e.heal],
                crit: [(e, t) => e.crit - t.crit, e => e.crit],
                critdmg: [(e, t) => e.critdmg - t.critdmg, e => e.critdmg / 100],
                defpen: [(e, t) => e.defpen - t.defpen, e => e.defpen],
                ccpower: [(e, t) => e.ccpower - t.ccpower, e => e.ccpower],
                ccresist: [(e, t) => e.ccresist - t.ccresist, e => e.ccresist],
                street: [(e, t) => $.indexOf(e.streetBattleAdaptation) - $.indexOf(t.streetBattleAdaptation), e => e.streetBattleAdaptation],
                outdoor: [(e, t) => $.indexOf(e.outdoorBattleAdaptation) - $.indexOf(t.outdoorBattleAdaptation), e => e.outdoorBattleAdaptation],
                indoor: [(e, t) => $.indexOf(e.indoorBattleAdaptation) - $.indexOf(t.indoorBattleAdaptation), e => e.indoorBattleAdaptation],
                role: [(e, t) => (0, Z.Z)(e.role, t.role), e => e.role],
                weapon: [(e, t) => (0, Z.Z)(e.weapon, t.weapon), e => e.weapon],
                range: [(e, t) => e.range - t.range, e => e.range],
                atktype: [(e, t) => (0, Z.Z)(e.atktype, t.atktype), e => e.atktype],
                deftype: [(e, t) => (0, Z.Z)(e.deftype, t.deftype), e => e.deftype],
                stability: [(e, t) => e.stability - t.stability, e => e.stability],
                accuracy: [(e, t) => e.accuracy - t.accuracy, e => e.accuracy],
                dodge: [(e, t) => e.dodge - t.dodge, e => e.dodge],
                order: [(e, t) => e.order - t.order, () => ""]
            },
            et = {
                name: ["", ""],
                school: ["", ""],
                club: ["", ""],
                age: ["", ""],
                height: ["", ""],
                atk: ["공격력 ", ""],
                def: ["방어력 ", ""],
                hp: ["최대 체력 ", ""],
                heal: ["치유력 ", ""],
                crit: ["치명 수치 ", ""],
                critdmg: ["暴击伤害 ", "%"],
                defpen: ["방어 관통치 ", ""],
                ccpower: ["CC 강화 ", ""],
                ccresist: ["CC 저항 ", ""],
                street: ["시가지 ", ""],
                outdoor: ["야외 ", ""],
                indoor: ["실내 ", ""],
                role: ["", ""],
                weapon: ["", " 사용"],
                range: ["사거리 ", ""],
                atktype: ["", ""],
                deftype: ["", ""],
                stability: ["안정치 ", ""],
                accuracy: ["명중치 ", ""],
                dodge: ["회피치 ", ""],
                order: ["", ""]
            },
            eo = {
                name: !1,
                school: !1,
                club: !1,
                age: !1,
                height: !1,
                atk: !0,
                def: !0,
                hp: !0,
                heal: !0,
                crit: !0,
                critdmg: !0,
                defpen: !0,
                ccpower: !0,
                ccresist: !0,
                street: !0,
                outdoor: !0,
                indoor: !0,
                role: !1,
                weapon: !1,
                range: !0,
                atktype: !1,
                deftype: !1,
                stability: !0,
                accuracy: !0,
                dodge: !0,
                order: !0
            },
            en = (e, t) => "APPLYALL" === t.type ? t.data : {
                ...e,
                [t.type.toLocaleLowerCase()]: Array.isArray(t.data) && t.data.length < 1 ? void 0 : t.data
            },
            ei = {
                딜러: "common_icon_damagedealer",
                탱커: "common_icon_tanker",
                서포터: "common_icon_supporter",
                힐러: "common_icon_healer",
                "T.S": "common_icon_vehicle"
            },
            er = {
                폭발: "#851914",
                경장갑: "#851914",
                관통: "#B68A2E",
                중장갑: "#B68A2E",
                신비: "#396D99",
                특수장갑: "#396D99",
                진동: "#9A45A8",
                탄력장갑: "#9A45A8"
            },
            ea = (e, t) => {
                if ("all" === t.type)
                    return t.data;
                let o = {
                    ...e,
                    [t.type]: t.data,
                    ..."star" === t.type ? {
                        weaponstar: 0,
                        weaponlevel: Math.min(e.weaponlevel, 20)
                    } : {},
                    ..."weaponstar" === t.type ? {
                        star: 5,
                        weaponlevel: Math.min(e.weaponlevel, 10 * t.data + 20)
                    } : {}
                };
                return window.localStorage.setItem(Q, JSON.stringify(o)), o
            },
            el = (e, t, o) => t.includes(e) || o.includes(e) || (0, I.Z)(t, e) || t.includes("(".concat(e.substring(0, 1))) && t.includes(e.substring(1)) || o.includes("(".concat(e.substring(0, 1))) && o.includes(e.substring(1));
        var es = !0,
            ec = e => {
                let {students: t} = e,
                    [o, k] = (0, i.useReducer)(ea, {
                        star: 5,
                        level: Number("90") || 90,
                        equip1: Number("10") || 9,
                        equip2: Number("10") || 9,
                        equip3: Number("9") || 8,
                        weaponstar: 3,
                        weaponlevel: Number("50") || 50,
                        favor: 30,
                        gear: 0,
                        personality: 0,
                        potential1: 0,
                        potential2: 0,
                        potential3: 0
                    }),
                    N = (0, i.useMemo)(() => t.map((e, t, o) => {
                        var n;
                        let i;
                        let [r, a, l, s, c, d, p, m, u, x, h, g, j, _, b, f, k, y, N, v, I, Z, C, w, S, A, R, E, L, M, T, q, U, O, P, W, B, H, F] = e;
                        return c && r !== c && (i = null === (n = o.find(e => e[0] === c)) || void 0 === n ? void 0 : n[11]), {
                            cid: r,
                            level: a,
                            name: l,
                            nameJp: s,
                            mainCombatStyleId: c,
                            path: d,
                            atktype: p,
                            deftype: m,
                            school: u,
                            club: x,
                            cover: h,
                            order: null != i ? i : g,
                            defaultStar: j,
                            isLimited: _,
                            age: b,
                            height: f,
                            ooparts: k,
                            role: y,
                            weapon: N,
                            range: v,
                            stability: I,
                            accuracy: Z,
                            position: C,
                            hasGear: w,
                            atk: S,
                            hp: A,
                            def: R,
                            heal: E,
                            dodge: L,
                            acc: M,
                            crit: T,
                            critdmg: q,
                            defpen: U,
                            ccpower: O,
                            ccresist: P,
                            regencost: W,
                            streetBattleAdaptation: B,
                            outdoorBattleAdaptation: H,
                            indoorBattleAdaptation: F
                        }
                    }), [t]),
                    [I, Z] = (0, i.useState)(t.map(e => {
                        let [t, o, n, i, r, a, l, s, c, d, p, m, u, x, h, g, j, _, b, f, k, y, N, v, I, Z, C, w, S, A, R, E, L, M, T, q, U, O, P] = e;
                        return {
                            cid: t,
                            level: o,
                            name: n,
                            nameJp: i,
                            mainCombatStyleId: r,
                            path: a,
                            atktype: l,
                            deftype: s,
                            school: c,
                            club: d,
                            cover: p,
                            order: m,
                            defaultStar: u,
                            isLimited: x,
                            age: h,
                            height: g,
                            ooparts: j,
                            role: _,
                            weapon: b,
                            range: f,
                            stability: k,
                            accuracy: y,
                            position: N,
                            hasGear: v,
                            atk: I,
                            hp: Z,
                            def: C,
                            heal: w,
                            dodge: S,
                            acc: A,
                            crit: R,
                            critdmg: E,
                            defpen: L,
                            ccpower: M,
                            ccresist: T,
                            regencost: q,
                            streetBattleAdaptation: U,
                            outdoorBattleAdaptation: O,
                            indoorBattleAdaptation: P
                        }
                    }));
                (0, i.useEffect)(() => {
                    if (5 === o.star && o.level === (Number("90") || 90) && o.equip1 === (Number("10") || 9) && o.equip2 === (Number("10") || 9) && o.equip3 === (Number("9") || 8) && 3 === o.weaponstar && o.weaponlevel === (Number("50") || 50) && 30 === o.favor && 0 === o.gear && 0 === o.personality && 0 === o.potential1 && 0 === o.potential2 && 0 === o.potential3) {
                        Z(N);
                        return
                    }
                    let e = async () => {
                        let e = await fetch("https://blue.triple-lab.com/stat/all?".concat(new URLSearchParams(Object.fromEntries(Object.entries(o).map(e => {
                                let [t, o] = e;
                                return [t, o.toString()]
                            }))))),
                            t = e.ok ? await e.json() : await fetch("https://blue.triple-lab.com/stat/all?".concat(new URLSearchParams({
                                star: "5",
                                level: "90",
                                equip1: "10",
                                equip2: "10",
                                equip3: "9",
                                weaponstar: "3",
                                weaponlevel: "50",
                                favor: "30",
                                gear: "0",
                                personality: "0"
                            }))).then(e => e.json());
                        return N.map(e => ({
                            ...e,
                            ...t[e.cid]
                        }))
                    };
                    setTimeout(() => e().then(e => Z(e)), 0)
                }, [o, N]);
                let [w, S] = (0, i.useState)([]),
                    [A, R] = (0, i.useState)(""),
                    [E, D] = (0, i.useState)(!1),
                    [$, es] = (0, i.useState)("name"),
                    [ec, ed] = (0, i.useState)(!1),
                    [ep, em] = (0, i.useState)(!1),
                    [eu, ex] = (0, i.useReducer)(en, {
                        position: 0
                    }),
                    eh = (0, i.createRef)(),
                    {studentsIndexScroll: eg, setStudentsIndexScroll: ej} = (0, i.useContext)(J.$);
                (0, i.useEffect)(() => {
                    var e,
                        t;
                    null === (t = eh.current) || void 0 === t || null === (e = t.osInstance()) || void 0 === e || e.scroll({
                        y: eg
                    })
                }, [I]),
                    (0, i.useEffect)(() => {
                        ep && S(I.filter(e => {
                            if (A.length < 1)
                                return !0;
                            let t = [],
                                o = [];
                            return A.split(" ").forEach(e => e.startsWith("-") ? o.push(e.substring(1)) : e.length ? t.push(e) : null), (t.length < 1 || t.some(t => t.length < 1 || el(t, e.name, e.nameJp))) && !o.some(t => !(t.length < 1) && el(t, e.name, e.nameJp))
                        }).filter(e => (!eu.position || Math.floor(e.cid / 1e4) === eu.position) && (!eu.defaultstar || !(eu.defaultstar.length > 0) || !!eu.defaultstar.includes(e.defaultStar)) && (!eu.islimited || eu.islimited === (e.isLimited ? 2 : 1)) && (!eu.school || !(eu.school.length > 0) || !!eu.school.includes(e.school)) && (!eu.club || !(eu.club.length > 0) || !!eu.club.includes(e.club)) && (!eu.class || !(eu.class.length > 0) || !!eu.class.includes(e.role)) && (!eu.weapontype || !(eu.weapontype.length > 0) || !!eu.weapontype.includes(e.weapon)) && (!eu.bullettype || !(eu.bullettype.length > 0) || !!eu.bullettype.includes(e.atktype)) && (!eu.armortype || !(eu.armortype.length > 0) || !!eu.armortype.includes(e.deftype)) && (!eu.mainooparts || !(eu.mainooparts.length > 0) || !!eu.mainooparts.includes(e.ooparts[1])) && (!eu.subooparts || !(eu.subooparts.length > 0) || !!eu.subooparts.includes(e.ooparts[0])) && (!eu.hasgear || eu.hasgear === (e.hasGear ? 2 : 1))).sort((e, t) => {
                            let [o] = ee[$];
                            return ec ? o(t, e) : o(e, t)
                        }))
                    }, [eu, ec, A, $, ep, I]),
                    (0, i.useEffect)(() => {
                        let e = localStorage.getItem(V),
                            t = localStorage.getItem(K);
                        try {
                            if (e) {
                                let [t, o] = JSON.parse(e);
                                Object.keys(ee).includes(t) ? (es(t), ed(o)) : (localStorage.setItem(V, JSON.stringify(["name", !1])), es("name"), ed(!1))
                            } else
                                localStorage.setItem(V, JSON.stringify(["name", !1])),
                                    es("name"),
                                    ed(!1)
                        } catch (e) {
                            localStorage.setItem(V, JSON.stringify(["name", !1])),
                                es("name"),
                                ed(!1)
                        } finally {
                            try {
                                if (t) {
                                    let e = JSON.parse(t);
                                    "object" == typeof e ? ex({
                                        type: "APPLYALL",
                                        data: e
                                    }) : localStorage.setItem(K, JSON.stringify({
                                        position: 0
                                    }))
                                } else
                                    localStorage.setItem(K, JSON.stringify({
                                        position: 0
                                    }))
                            } catch (e) {
                                localStorage.setItem(K, JSON.stringify({
                                    position: 0
                                }))
                            } finally {
                                em(!0)
                            }
                        }
                        try {
                            let e = window.localStorage.getItem(Q),
                                t = e ? JSON.parse(e) : {
                                    star: 5,
                                    level: Number("90") || 90,
                                    equip1: Number("10") || 9,
                                    equip2: Number("10") || 9,
                                    equip3: Number("9") || 8,
                                    weaponstar: 3,
                                    weaponlevel: Number("50") || 50,
                                    favor: 30,
                                    gear: 0,
                                    personality: 0,
                                    potential1: 0,
                                    potential2: 0,
                                    potential3: 0
                                };
                            (Number.isNaN(Number(t.star)) || 1 > Number(t.star) || Number(t.star) > 5) && (t.star = 5),
                            (Number.isNaN(Number(t.level)) || 1 > Number(t.level) || Number(t.level) > (Number("90") || 90)) && (t.level = Number("90") || 90),
                            (Number.isNaN(Number(t.equip1)) || 0 > Number(t.equip1) || Number(t.equip1) > (Number("10") || 9)) && (t.equip1 = Number("10") || 9),
                            (Number.isNaN(Number(t.equip2)) || 0 > Number(t.equip2) || Number(t.equip2) > (Number("10") || 9)) && (t.equip2 = Number("10") || 9),
                            (Number.isNaN(Number(t.equip3)) || 0 > Number(t.equip3) || Number(t.equip3) > (Number("9") || 8)) && (t.equip3 = Number("9") || 8),
                            (Number.isNaN(Number(t.weaponstar)) || 0 > Number(t.weaponstar) || Number(t.weaponstar) > 3) && (t.weaponstar = 3),
                            (Number.isNaN(Number(t.weaponlevel)) || 1 > Number(t.weaponlevel) || Number(t.weaponlevel) > (Number("50") || 50)) && (t.weaponlevel = Number("50") || 50),
                            (Number.isNaN(Number(t.favor)) || 1 > Number(t.favor) || Number(t.favor) > 100) && (t.favor = 30),
                            (Number.isNaN(Number(t.gear)) || 0 > Number(t.gear) || Number(t.gear) > 2) && (t.gear = 0),
                            (Number.isNaN(Number(t.personality)) || 0 > Number(t.personality) || Number(t.personality) > 1) && (t.personality = 0),
                            Object.keys(t).includes("potential1") && (Number.isNaN(Number(t.potential1)) || 0 > Number(t.potential1) || Number(t.potential1) > (Number("25") || 25)) && (t.potential1 = 0),
                            Object.keys(t).includes("potential2") && (Number.isNaN(Number(t.potential2)) || 0 > Number(t.potential2) || Number(t.potential2) > (Number("25") || 25)) && (t.potential2 = 0),
                            Object.keys(t).includes("potential3") && (Number.isNaN(Number(t.potential3)) || 0 > Number(t.potential3) || Number(t.potential3) > (Number("25") || 25)) && (t.potential3 = 0),
                                window.localStorage.setItem(Q, JSON.stringify(t)),
                                k({
                                    type: "all",
                                    data: t
                                })
                        } catch (e) {
                            window.localStorage.setItem(Q, JSON.stringify({
                                star: 5,
                                level: Number("90") || 90,
                                equip1: Number("10") || 9,
                                equip2: Number("10") || 9,
                                equip3: Number("9") || 8,
                                weaponstar: 3,
                                weaponlevel: Number("50") || 50,
                                favor: 30,
                                gear: 0,
                                personality: 0,
                                potential1: 0,
                                potential2: 0,
                                potential3: 0
                            }))
                        }
                    }, []),
                    (0, i.useEffect)(() => {
                        ep && (em(!1), localStorage.setItem(V, JSON.stringify([$, ec])), localStorage.setItem(K, JSON.stringify(eu)), em(!0))
                    }, [eu, ec, $, ep]);
                let e_ = e => {
                    let {sortLabel: t, sortName: o} = e,
                        i = $ === o;
                    return (0, n.jsx)(r.ZP, {
                        item: !0,
                        md: 4,
                        sm: 6,
                        xs: 6,
                        children: (0, n.jsx)(a.Z, {
                            variant: "text",
                            startIcon: i ? (0, n.jsx)(_.Z, {}) : (0, n.jsx)(b.Z, {}),
                            endIcon: i ? ec ? (0, n.jsx)(h.Z, {}) : (0, n.jsx)(x.Z, {}) : void 0,
                            onClick: () => {
                                i ? ed(!ec) : (es(o), ed(eo[o]))
                            },
                            sx: {
                                color: i ? void 0 : "#999"
                            },
                            fullWidth: !0,
                            children: (0, n.jsx)("span", {
                                style: {
                                    width: "calc(100% - ".concat(i ? 1.75 : .875, "rem - ").concat(i ? 16 : 8, "px)"),
                                    textAlign: "left",
                                    color: i ? "#000" : "#999"
                                },
                                children: t
                            })
                        })
                    })
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(v(), {
                        children: (0, n.jsx)("title", {
                            children: "학생 목록 - Arona.AI"
                        })
                    }), (0, n.jsx)(C.Z, {
                        toolbar: (0, n.jsx)(L, {
                            title: "返回"
                        }),
                        children: (0, n.jsxs)(l.Z, {
                            sx: {
                                width: "100%",
                                height: "100%",
                                margin: "0 auto",
                                padding: "10px",
                                display: "flex",
                                flexFlow: "column",
                                maxWidth: "1600px"
                            },
                            children: [(0, n.jsxs)(s.Z, {
                                sx: {
                                    flex: "0",
                                    display: "flex",
                                    flexFlow: "row",
                                    width: "100%",
                                    backgroundColor: "rgba(52, 75, 111, 0.2)",
                                    padding: "0.25rem 0"
                                },
                                children: [(0, n.jsx)(s.Z, {
                                    sx: {
                                        flex: "0 1 auto",
                                        verticalAlign: "middle"
                                    },
                                    children: (0, n.jsx)(c.Z, {
                                        variant: "h6",
                                        children: (0, n.jsxs)(s.Z, {
                                            sx: {
                                                marginTop: "-0.6em",
                                                padding: "0 0.5rem"
                                            },
                                            children: [(0, n.jsx)("img", {
                                                src: "/images/common/common_icon_student.png",
                                                alt: "학생부 아이콘",
                                                style: {
                                                    height: "2em",
                                                    margin: "0.6em 0.2em -0.6em 0.3em",
                                                    aspectRatio: "103/134"
                                                }
                                            }), "学生列表"]
                                        })
                                    })
                                }), (0, n.jsx)(s.Z, {
                                    sx: {
                                        flex: "1 1 6rem",
                                        padding: "0 0.5rem"
                                    },
                                    children: (0, n.jsx)(P.Z, {
                                        variant: "standard",
                                        placeholder: "搜索学生名字",
                                        fullWidth: !0,
                                        value: A || "",
                                        onChange: e => R(e),
                                        autoComplete: "off",
                                        name: "search",
                                        sx: {
                                            margin: "0.3em 0 -0.3em"
                                        },
                                        timeout: 120
                                    })
                                }), (0, n.jsx)(s.Z, {
                                    sx: {
                                        flex: "0 1 auto"
                                    },
                                    children: (0, n.jsx)(d.Z, {
                                        onClick: () => D(!0),
                                        children: (0, n.jsx)(j.Z, {})
                                    })
                                })]
                            }), (0, n.jsx)(s.Z, {
                                sx: {
                                    flex: "1",
                                    display: "flex",
                                    flexFlow: "row",
                                    width: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                    padding: "0.5rem",
                                    overflow: "auto"
                                },
                                children: (0, n.jsx)(s.Z, {
                                    sx: {
                                        display: "flex",
                                        flex: "1",
                                        width: "100%",
                                        backgroundColor: "rgb(245, 251, 252)",
                                        padding: "0.5rem",
                                        borderRadius: "3px",
                                        overflow: "auto"
                                    },
                                    children: (0, n.jsx)(s.Z, {
                                        sx: {
                                            display: "flex",
                                            flex: "1",
                                            width: "100%",
                                            backgroundColor: "rgb(245, 251, 252)",
                                            padding: "0.5rem",
                                            borderRadius: "3px",
                                            border: "1px solid #bbc7c9",
                                            overflow: "auto"
                                        },
                                        children: (0, n.jsx)(s.Z, {
                                            sx: {
                                                width: "100%",
                                                flex: "1",
                                                background: "linear-gradient(to bottom, #f8fcfe, #f8fcfe 82%, #d8dcdf 82%, #d8dcdf 85%, #f8fcfe 85%, #f8fcfe)",
                                                backgroundSize: "100% 2em",
                                                padding: "0.5rem",
                                                overflow: "visible"
                                            },
                                            children: (0, n.jsx)(f.E, {
                                                ref: eh,
                                                options: {
                                                    overflowBehavior: {
                                                        x: "h",
                                                        y: "s"
                                                    },
                                                    scrollbars: {
                                                        autoHide: "leave"
                                                    },
                                                    callbacks: {
                                                        onScrollStop: () => {
                                                            var e,
                                                                t;
                                                            ej((null === (t = eh.current) || void 0 === t ? void 0 : null === (e = t.osInstance()) || void 0 === e ? void 0 : e.scroll().position.y) || 0)
                                                        }
                                                    }
                                                },
                                                style: {
                                                    minHeight: "100%",
                                                    maxHeight: "100%",
                                                    marginRight: "-1rem",
                                                    paddingRight: "1rem"
                                                },
                                                children: (0, n.jsx)(r.ZP, {
                                                    container: !0,
                                                    sx: {
                                                        width: "100%"
                                                    },
                                                    columns: 60,
                                                    children: w.map(e => (0, n.jsx)(r.ZP, {
                                                        item: !0,
                                                        xs: 20,
                                                        sm: 15,
                                                        md: 12,
                                                        lg: 10,
                                                        xl: 6,
                                                        children: (0, n.jsx)(s.Z, {
                                                            sx: {
                                                                padding: "10% 5%"
                                                            },
                                                            children: (0, n.jsx)(y(), {
                                                                href: e.mainCombatStyleId && e.mainCombatStyleId !== e.cid ? "/students/".concat(e.name, "?style=").concat(e.cid) : "/students/".concat(e.name),
                                                                children: (0, n.jsxs)(s.Z, {
                                                                    sx: {
                                                                        cursor: "pointer",
                                                                        position: "relative"
                                                                    },
                                                                    children: [(0, n.jsx)(M.Z, {
                                                                        imgSrc: (0, X.r)(e.path, "icon5x"),
                                                                        imgSrcSet: (0, X.F)(e.path, ["icon4x", "icon5x", "icon6x", "icon7x", "icon8x"]),
                                                                        imgAlt: e.name,
                                                                        displayText: "name" === $ ? "" : "".concat(et[$][0]).concat(ee[$][1](e)).concat(et[$][1])
                                                                    }), (0, n.jsxs)(s.Z, {
                                                                        sx: {
                                                                            width: {
                                                                                xs: "100%",
                                                                                md: "calc(100% - 0.6em)"
                                                                            },
                                                                            display: "flex",
                                                                            height: "1.2em",
                                                                            margin: {
                                                                                xs: "0.25em 0",
                                                                                md: "0.25em 0.3em"
                                                                            },
                                                                            transform: "skewX(-10deg)",
                                                                            borderRadius: "2.5px",
                                                                            backgroundColor: e.cid < 2e4 ? "#f54922" : "#007bff",
                                                                            overflow: "hidden"
                                                                        },
                                                                        children: [(0, n.jsx)(s.Z, {
                                                                            sx: {
                                                                                display: "flex",
                                                                                flex: "0 0 0.3em"
                                                                            }
                                                                        }), (0, n.jsxs)(s.Z, {
                                                                            sx: {
                                                                                flex: "1",
                                                                                display: "flex",
                                                                                backgroundColor: "".concat(er[e.atktype]),
                                                                                borderRadius: "2.5px",
                                                                                overflow: "hidden"
                                                                            },
                                                                            children: [(0, n.jsxs)(s.Z, {
                                                                                sx: {
                                                                                    display: "flex",
                                                                                    flex: "3",
                                                                                    padding: "0 0.1em",
                                                                                    borderRadius: "2.5px",
                                                                                    backgroundColor: "white",
                                                                                    "& > *": {
                                                                                        transform: "skewX(10deg)"
                                                                                    }
                                                                                },
                                                                                children: [(0, n.jsx)(s.Z, {
                                                                                    sx: {
                                                                                        flex: "1"
                                                                                    }
                                                                                }), (0, n.jsx)("img", {
                                                                                    src: "/images/common/".concat(ei[e.role], ".png"),
                                                                                    alt: "".concat(e.role, " 아이콘"),
                                                                                    style: {
                                                                                        width: "1.2em",
                                                                                        margin: "0",
                                                                                        filter: "invert(100%)",
                                                                                        aspectRatio: "67/66",
                                                                                        backfaceVisibility: "hidden"
                                                                                    }
                                                                                }), (0, n.jsx)(s.Z, {
                                                                                    sx: {
                                                                                        flex: "1"
                                                                                    }
                                                                                })]
                                                                            }), (0, n.jsx)(s.Z, {
                                                                                sx: {
                                                                                    flex: "4",
                                                                                    display: "flex",
                                                                                    backgroundColor: "".concat(er[e.atktype])
                                                                                },
                                                                                children: (0, n.jsx)("img", {
                                                                                    src: (0, X.r)("uis/01_common/25_campaign/strategyobjectbuff_attack", "icon2x"),
                                                                                    srcSet: (0, X.F)("uis/01_common/25_campaign/strategyobjectbuff_attack", ["icon2x", "icon3x", "icon4x"]),
                                                                                    alt: "공격 아이콘",
                                                                                    style: {
                                                                                        height: "0.9em",
                                                                                        margin: "0.15em auto",
                                                                                        display: "inline",
                                                                                        verticalAlign: "middle",
                                                                                        aspectRatio: "28/31",
                                                                                        transform: "skewX(10deg)",
                                                                                        backfaceVisibility: "hidden"
                                                                                    }
                                                                                })
                                                                            }), (0, n.jsx)(s.Z, {
                                                                                sx: {
                                                                                    flex: "0 0 1px",
                                                                                    backgroundColor: "#f8fcfe"
                                                                                }
                                                                            }), (0, n.jsx)(s.Z, {
                                                                                sx: {
                                                                                    flex: "4",
                                                                                    display: "flex",
                                                                                    backgroundColor: "".concat(er[e.deftype])
                                                                                },
                                                                                children: (0, n.jsx)("img", {
                                                                                    src: (0, X.r)("uis/01_common/25_campaign/strategyobjectbuff_defense", "icon2x"),
                                                                                    srcSet: (0, X.F)("uis/01_common/25_campaign/strategyobjectbuff_defense", ["icon2x", "icon3x", "icon4x"]),
                                                                                    alt: "방어 아이콘",
                                                                                    style: {
                                                                                        height: "0.9em",
                                                                                        margin: "0.15em auto",
                                                                                        display: "inline",
                                                                                        verticalAlign: "middle",
                                                                                        aspectRatio: "28/31",
                                                                                        transform: "skewX(10deg)",
                                                                                        backfaceVisibility: "hidden"
                                                                                    }
                                                                                })
                                                                            })]
                                                                        })]
                                                                    }), (0, n.jsx)(s.Z, {
                                                                        sx: {
                                                                            width: "100%",
                                                                            overflowX: "visible",
                                                                            textAlign: "center",
                                                                            whiteSpace: "nowrap",
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: (0, n.jsx)("span", {
                                                                            style: {
                                                                                background: "linear-gradient(transparent, transparent 81%, rgba(255,255,0,0.5) 81%, rgba(255,255,0,0.5) 88%, transparent 88%, transparent)"
                                                                            },
                                                                            className: "textkr",
                                                                            children: e.name
                                                                        })
                                                                    })]
                                                                })
                                                            })
                                                        })
                                                    }, e.cid))
                                                })
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    }), (0, n.jsxs)(q.Z, {
                        open: E,
                        onClose: () => D(!1),
                        fullWidth: !0,
                        children: [(0, n.jsxs)(U.ZP, {
                            children: ["筛选与排序", (0, n.jsx)(d.Z, {
                                "aria-label": "close",
                                onClick: () => D(!1),
                                sx: {
                                    position: "absolute",
                                    right: 6,
                                    top: 6
                                },
                                children: (0, n.jsx)(g.Z, {})
                            })]
                        }), (0, n.jsx)(O.Z, {
                            children: (0, n.jsx)(s.Z, {
                                sx: {
                                    paddingTop: "1rem",
                                    height: "100%"
                                },
                                children: (0, n.jsxs)(W.S, {
                                    sx: {
                                        border: "1px solid rgb(219,225,231)",
                                        borderRadius: "0.25rem",
                                        margin: "-0.25rem",
                                        padding: "0.25rem",
                                        backgroundColor: "#f3fafc",
                                        height: "100%",
                                        "& .MuiTab-root": {
                                            xs: {
                                                minWidth: "1em",
                                                flexBasis: "auto"
                                            },
                                            sm: {
                                                minWidth: "90px",
                                                flexBasis: "1"
                                            }
                                        }
                                    },
                                    children: [(0, n.jsxs)(W.Z, {
                                        tabLabel: "排序",
                                        sx: {
                                            padding: "0.1rem",
                                            flex: "1 1 auto",
                                            display: "flex",
                                            flexFlow: "column",
                                            overflowY: "auto"
                                        },
                                        children: [(0, n.jsx)(B.Z, {
                                            title: "基于档案和基础属性",
                                            children: (0, n.jsxs)(r.ZP, {
                                                container: !0,
                                                children: [(0, n.jsx)(e_, {
                                                    sortLabel: "学院",
                                                    sortName: "school"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "名字",
                                                    sortName: "name"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "社团",
                                                    sortName: "club"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "职业类别",
                                                    sortName: "role"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "武器",
                                                    sortName: "weapon"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "攻击类型",
                                                    sortName: "atktype"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "防御类型",
                                                    sortName: "deftype"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "年龄",
                                                    sortName: "age"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "身高",
                                                    sortName: "height"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "排序",
                                                    sortName: "order"
                                                })]
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "基于自定义属性",
                                            children: (0, n.jsxs)(r.ZP, {
                                                container: !0,
                                                children: [(0, n.jsx)(e_, {
                                                    sortLabel: "攻击值",
                                                    sortName: "atk"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "防御值",
                                                    sortName: "def"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "体力值",
                                                    sortName: "hp"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "治疗值",
                                                    sortName: "heal"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "稳定性",
                                                    sortName: "crit"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "暴击伤害",
                                                    sortName: "critdmg"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "贯穿防御",
                                                    sortName: "defpen"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "异常状态强化",
                                                    sortName: "ccpower"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "异常状态抵抗",
                                                    sortName: "ccresist"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "攻击范围",
                                                    sortName: "range"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "稳定性",
                                                    sortName: "stability"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "命中值",
                                                    sortName: "accuracy"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "回避值",
                                                    sortName: "dodge"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "街道",
                                                    sortName: "street"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "户外",
                                                    sortName: "outdoor"
                                                }), (0, n.jsx)(e_, {
                                                    sortLabel: "室内",
                                                    sortName: "indoor"
                                                })]
                                            })
                                        })]
                                    }), (0, n.jsxs)(W.Z, {
                                        tabLabel: "筛选(不好用，找小钩晴帮我改)",
                                        sx: {
                                            padding: "0.1rem"
                                        },
                                        children: [(0, n.jsx)(B.Z, {
                                            title: "类型",
                                            reset: eu.position ? () => ex({
                                                type: "POSITION",
                                                data: 0
                                            }) : void 0,
                                            children: (0, n.jsxs)(F.t, {
                                                value: eu.position,
                                                exclusive: !0,
                                                fullWidth: !0,
                                                onChange: (e, t) => {
                                                    null !== t && ex({
                                                        type: "POSITION",
                                                        data: t
                                                    })
                                                },
                                                sx: {
                                                    marginTop: "0.5rem"
                                                },
                                                children: [(0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 0,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "ALL"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 1,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "STRIKER"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 2,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "SPECIAL"
                                                    })
                                                })]
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "年级",
                                            reset: eu.defaultstar ? () => ex({
                                                type: "DEFAULTSTAR",
                                                data: void 0
                                            }) : void 0,
                                            children: (0, n.jsxs)(F.t, {
                                                value: eu.defaultstar,
                                                fullWidth: !0,
                                                onChange: (e, t) => ex({
                                                    type: "DEFAULTSTAR",
                                                    data: t
                                                }),
                                                sx: {
                                                    marginTop: "0.5rem"
                                                },
                                                children: [(0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 1,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "1年级"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 2,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "2年级"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 3,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "3年级"
                                                    })
                                                })]
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "限定/常驻",
                                            reset: eu.islimited ? () => ex({
                                                type: "ISLIMITED",
                                                data: 0
                                            }) : void 0,
                                            children: (0, n.jsxs)(F.t, {
                                                value: eu.islimited,
                                                exclusive: !0,
                                                fullWidth: !0,
                                                onChange: (e, t) => {
                                                    null !== t && ex({
                                                        type: "ISLIMITED",
                                                        data: t
                                                    })
                                                },
                                                sx: {
                                                    marginTop: "0.5rem"
                                                },
                                                children: [(0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 0,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "全部"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 1,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "常驻"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 2,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "限定"
                                                    })
                                                })]
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "攻击类型",
                                            reset: eu.bullettype ? () => ex({
                                                type: "BULLETTYPE",
                                                data: void 0
                                            }) : void 0,
                                            children: (0, n.jsxs)(F.t, {
                                                value: eu.bullettype,
                                                fullWidth: !0,
                                                onChange: (e, t) => ex({
                                                    type: "BULLETTYPE",
                                                    data: t
                                                }),
                                                sx: {
                                                    marginTop: "0.5rem"
                                                },
                                                children: [(0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: "폭발",
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "爆炸"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: "관통",
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "贯穿"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: "신비",
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "神秘"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: "진동",
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "振动"
                                                    })
                                                })]
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "防御类型",
                                            reset: eu.armortype ? () => ex({
                                                type: "ARMORTYPE",
                                                data: void 0
                                            }) : void 0,
                                            children: (0, n.jsxs)(F.t, {
                                                value: eu.armortype,
                                                fullWidth: !0,
                                                onChange: (e, t) => ex({
                                                    type: "ARMORTYPE",
                                                    data: t
                                                }),
                                                sx: {
                                                    marginTop: "0.5rem"
                                                },
                                                children: [(0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: "경장갑",
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "轻装甲"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: "중장갑",
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "重装甲"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: "특수장갑",
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "特殊装甲"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: "탄력장갑",
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "弹性装甲"
                                                    })
                                                })]
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "角色类型",
                                            reset: eu.class ? () => ex({
                                                type: "CLASS",
                                                data: void 0
                                            }) : void 0,
                                            children: (0, n.jsx)(F.t, {
                                                value: eu.class,
                                                fullWidth: !0,
                                                onChange: (e, t) => ex({
                                                    type: "CLASS",
                                                    data: t
                                                }),
                                                sx: {
                                                    marginTop: "0.5rem"
                                                },
                                                children: Y().role.map(e => (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: e.kr,
                                                    sx: {
                                                        width: "20%"
                                                    },
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: e.kr
                                                    })
                                                }, e.kr))
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "所属学院",
                                            reset: eu.school ? () => ex({
                                                type: "SCHOOL",
                                                data: void 0
                                            }) : void 0,
                                            children: (0, n.jsx)(s.Z, {
                                                sx: {
                                                    padding: "0 5%"
                                                },
                                                children: (0, n.jsx)(F.t, {
                                                    value: eu.school,
                                                    fullWidth: !0,
                                                    onChange: (e, t) => {
                                                        null !== t && ex({
                                                            type: "SCHOOL",
                                                            data: t
                                                        })
                                                    },
                                                    sx: {
                                                        marginTop: "0.5rem",
                                                        flexFlow: "row wrap"
                                                    },
                                                    children: Y().school.filter(e => e.icon).map(e => (0, n.jsx)(F.k, {
                                                        disableRipple: !0,
                                                        value: e.kr,
                                                        sx: {
                                                            width: {
                                                                xs: "25%",
                                                                sm: "20%",
                                                                md: "16.3333%"
                                                            }
                                                        },
                                                        children: (0, n.jsx)(s.Z, {
                                                            children: (0, n.jsx)("img", {
                                                                src: (0, X.r)(e.icon || "", "icon2x"),
                                                                srcSet: (0, X.F)(e.icon || "", ["icon2x", "icon3x", "icon4x", "icon5x", "icon6x"]),
                                                                alt: e.kr,
                                                                style: {
                                                                    width: "100%",
                                                                    filter: "drop-shadow(0 0 5px white)"
                                                                }
                                                            })
                                                        })
                                                    }, e.kr))
                                                })
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "동아리",
                                            reset: eu.club ? () => ex({
                                                type: "CLUB",
                                                data: void 0
                                            }) : void 0,
                                            children: (0, n.jsx)(p.Z, {
                                                multiple: !0,
                                                autoHighlight: !0,
                                                size: "small",
                                                options: Y().club.map(e => e.kr),
                                                getOptionLabel: e => e,
                                                value: eu.club || [],
                                                sx: {
                                                    marginTop: "0.5rem"
                                                },
                                                renderInput: e => (0, n.jsx)(m.Z, {
                                                    ...e,
                                                    label: "동아리"
                                                }),
                                                onChange: (e, t) => ex({
                                                    type: "CLUB",
                                                    data: t
                                                })
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "무기 종류",
                                            reset: eu.weapontype ? () => ex({
                                                type: "WEAPONTYPE",
                                                data: void 0
                                            }) : void 0,
                                            children: (0, n.jsx)(p.Z, {
                                                multiple: !0,
                                                autoHighlight: !0,
                                                size: "small",
                                                options: Y().weapontype.filter(e => e === e.toUpperCase()),
                                                getOptionLabel: e => e,
                                                value: eu.weapontype || [],
                                                sx: {
                                                    marginTop: "0.5rem"
                                                },
                                                renderInput: e => (0, n.jsx)(m.Z, {
                                                    ...e,
                                                    label: "무기 종류"
                                                }),
                                                onChange: (e, t) => ex({
                                                    type: "WEAPONTYPE",
                                                    data: t
                                                })
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "애용품 여부",
                                            reset: eu.hasgear ? () => ex({
                                                type: "HASGEAR",
                                                data: void 0
                                            }) : void 0,
                                            children: (0, n.jsxs)(F.t, {
                                                value: eu.hasgear || 0,
                                                exclusive: !0,
                                                fullWidth: !0,
                                                onChange: (e, t) => ex({
                                                    type: "HASGEAR",
                                                    data: t || void 0
                                                }),
                                                sx: {
                                                    marginTop: "0.5rem"
                                                },
                                                children: [(0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 2,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "있음"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 1,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "없음"
                                                    })
                                                }), (0, n.jsx)(F.k, {
                                                    disableRipple: !0,
                                                    value: 0,
                                                    children: (0, n.jsx)(s.Z, {
                                                        children: "모두"
                                                    })
                                                })]
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "주 오파츠",
                                            reset: eu.mainooparts ? () => ex({
                                                type: "MAINOOPARTS",
                                                data: []
                                            }) : void 0,
                                            children: (0, n.jsx)(s.Z, {
                                                sx: {
                                                    padding: "0 5%"
                                                },
                                                children: (0, n.jsx)(F.t, {
                                                    value: eu.mainooparts,
                                                    fullWidth: !0,
                                                    onChange: (e, t) => ex({
                                                        type: "MAINOOPARTS",
                                                        data: t
                                                    }),
                                                    sx: {
                                                        marginTop: "0.5rem",
                                                        flexFlow: "row wrap"
                                                    },
                                                    children: Y().ooparts4.filter(e => e.icon).map(e => (0, n.jsx)(F.k, {
                                                        disableRipple: !0,
                                                        value: e.kr,
                                                        sx: {
                                                            width: {
                                                                xs: "25%",
                                                                sm: "20%",
                                                                md: "16.3333%"
                                                            }
                                                        },
                                                        children: (0, n.jsx)(s.Z, {
                                                            children: (0, n.jsx)("img", {
                                                                src: (0, X.r)(e.icon || "", "icon2x"),
                                                                srcSet: (0, X.F)(e.icon || "", ["icon2x", "icon3x", "icon4x", "icon5x", "icon6x"]),
                                                                alt: e.kr,
                                                                style: {
                                                                    width: "100%",
                                                                    filter: "drop-shadow(0 0 5px white)"
                                                                }
                                                            })
                                                        })
                                                    }, e.kr))
                                                })
                                            })
                                        }), (0, n.jsx)(B.Z, {
                                            title: "부 오파츠",
                                            reset: eu.subooparts ? () => ex({
                                                type: "SUBOOPARTS",
                                                data: void 0
                                            }) : void 0,
                                            children: (0, n.jsx)(s.Z, {
                                                sx: {
                                                    padding: "0 5%"
                                                },
                                                children: (0, n.jsx)(F.t, {
                                                    value: eu.subooparts,
                                                    fullWidth: !0,
                                                    onChange: (e, t) => ex({
                                                        type: "SUBOOPARTS",
                                                        data: t
                                                    }),
                                                    sx: {
                                                        marginTop: "0.5rem",
                                                        flexFlow: "row wrap"
                                                    },
                                                    children: Y().ooparts3.filter(e => e.icon).map(e => (0, n.jsx)(F.k, {
                                                        disableRipple: !0,
                                                        value: e.kr,
                                                        sx: {
                                                            width: {
                                                                xs: "25%",
                                                                sm: "20%",
                                                                md: "16.3333%"
                                                            }
                                                        },
                                                        children: (0, n.jsx)(s.Z, {
                                                            children: (0, n.jsx)("img", {
                                                                src: (0, X.r)(e.icon || "", "icon2x"),
                                                                srcSet: (0, X.F)(e.icon || "", ["icon2x", "icon3x", "icon4x", "icon5x", "icon6x"]),
                                                                alt: e.kr,
                                                                style: {
                                                                    width: "100%",
                                                                    filter: "drop-shadow(0 0 5px white)"
                                                                }
                                                            })
                                                        })
                                                    }, e.kr))
                                                })
                                            })
                                        }), 1 === Object.keys(eu).length && 0 === eu.position ? null : (0, n.jsx)(B.Z, {
                                            title: "筛选完整首字母",
                                            singleLine: !0,
                                            children: (0, n.jsx)(T.El, {
                                                onClick: () => ex({
                                                    type: "APPLYALL",
                                                    data: {
                                                        position: 0
                                                    }
                                                }),
                                                disableRipple: !0,
                                                children: (0, n.jsx)(s.Z, {
                                                    children: "重制"
                                                })
                                            })
                                        })]
                                    }), (0, n.jsx)(W.Z, {
                                        tabLabel: "自定义",
                                        sx: {
                                            padding: "0.1rem"
                                        },
                                        children: (0, n.jsx)(B.Z, {
                                            title: "스탯 커스터마이징",
                                            children: (0, n.jsxs)(s.Z, {
                                                sx: {
                                                    padding: "0.5rem 0"
                                                },
                                                children: [(0, n.jsx)(s.Z, {
                                                    sx: {
                                                        fontSize: "1.5rem",
                                                        padding: "0 0.5rem",
                                                        textAlign: "center"
                                                    },
                                                    children: (0, n.jsx)(z.Z, {
                                                        starValue: o.star + o.weaponstar,
                                                        min: 1,
                                                        onChange: e => {
                                                            e > 5 ? k({
                                                                type: "weaponstar",
                                                                data: e - 5
                                                            }) : k({
                                                                type: "star",
                                                                data: e
                                                            })
                                                        }
                                                    })
                                                }), (0, n.jsx)(s.Z, {
                                                    sx: {
                                                        padding: "0.5rem"
                                                    },
                                                    children: (0, n.jsxs)(s.Z, {
                                                        sx: {
                                                            display: "flex"
                                                        },
                                                        children: [(0, n.jsxs)(s.Z, {
                                                            sx: {
                                                                flex: "1"
                                                            },
                                                            children: [(0, n.jsx)("img", {
                                                                src: "/images/common/cafe_icon_interaction.png",
                                                                alt: "캐릭터 아이콘",
                                                                style: {
                                                                    height: "1em"
                                                                }
                                                            }), " ", "Lv.", " ", (0, n.jsx)(G.Z, {
                                                                value: o.level,
                                                                min: 1,
                                                                max: Number("90"),
                                                                onChange: e => k({
                                                                    type: "level",
                                                                    data: e
                                                                })
                                                            })]
                                                        }), o.weaponstar ? (0, n.jsxs)(s.Z, {
                                                            sx: {
                                                                flex: "1"
                                                            },
                                                            children: [(0, n.jsx)("img", {
                                                                src: "/images/common/common_icon_characterweapon_on.png",
                                                                alt: "무기 아이콘",
                                                                style: {
                                                                    height: "1em"
                                                                }
                                                            }), " ", "Lv.", " ", (0, n.jsx)(G.Z, {
                                                                value: o.weaponlevel,
                                                                min: 1,
                                                                max: 10 * o.weaponstar + 20,
                                                                onChange: e => k({
                                                                    type: "weaponlevel",
                                                                    data: e
                                                                })
                                                            })]
                                                        }) : null, (0, n.jsx)(s.Z, {
                                                            sx: {
                                                                flex: "0 0 2.1686747em"
                                                            },
                                                            children: (0, n.jsxs)(s.Z, {
                                                                sx: {
                                                                    position: "relative",
                                                                    width: "1.1686747em",
                                                                    height: "1.4em"
                                                                },
                                                                children: [(0, n.jsx)("img", {
                                                                    src: "/images/common/common_icon_heart.png",
                                                                    alt: "인연 랭크 아이콘",
                                                                    style: {
                                                                        position: "absolute",
                                                                        height: "2em",
                                                                        marginTop: "-0.3em",
                                                                        marginLeft: "-0.2em",
                                                                        aspectRatio: "90/83"
                                                                    }
                                                                }), (0, n.jsx)(s.Z, {
                                                                    sx: {
                                                                        position: "absolute",
                                                                        paddingLeft: "0.05em"
                                                                    },
                                                                    children: (0, n.jsx)(G.Z, {
                                                                        style: {
                                                                            textAlign: "center",
                                                                            marginLeft: "-0.1rem"
                                                                        },
                                                                        min: 1,
                                                                        max: 100,
                                                                        value: o.favor,
                                                                        onChange: e => k({
                                                                            type: "favor",
                                                                            data: Math.min(100, Math.max(e, 1))
                                                                        })
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), (0, n.jsx)(s.Z, {
                                                    children: (0, n.jsxs)(s.Z, {
                                                        sx: {
                                                            display: "flex",
                                                            width: "100%",
                                                            gap: {
                                                                xs: "0.5rem",
                                                                sm: "1rem"
                                                            },
                                                            padding: {
                                                                xs: "0.5rem",
                                                                sm: "1rem"
                                                            }
                                                        },
                                                        children: [(0, n.jsx)(s.Z, {
                                                            sx: {
                                                                flex: "1"
                                                            },
                                                            children: (0, n.jsx)(u.Z, {
                                                                variant: "standard",
                                                                fullWidth: !0,
                                                                children: (0, n.jsx)(p.Z, {
                                                                    id: "equip1",
                                                                    value: "T".concat(o.equip1),
                                                                    onChange: (e, t) => t && k({
                                                                        type: "equip1",
                                                                        data: Number(t.substring(1))
                                                                    }),
                                                                    disableClearable: !0,
                                                                    freeSolo: !0,
                                                                    autoHighlight: !0,
                                                                    fullWidth: !0,
                                                                    renderInput: e => (0, n.jsx)(m.Z, {
                                                                        ...e,
                                                                        variant: "standard",
                                                                        label: "Slot 1",
                                                                        onFocus: e => e.target.select ? e.target.select() : e.target.setSelectionRange(0, e.target.value.length)
                                                                    }),
                                                                    options: Array.from(Array(Number("10") + 1)).map((e, t) => "T".concat(t))
                                                                })
                                                            })
                                                        }), (0, n.jsx)(s.Z, {
                                                            sx: {
                                                                flex: "1"
                                                            },
                                                            children: (0, n.jsx)(u.Z, {
                                                                variant: "standard",
                                                                fullWidth: !0,
                                                                children: (0, n.jsx)(p.Z, {
                                                                    id: "equip2",
                                                                    value: "T".concat(o.equip2),
                                                                    onChange: (e, t) => t && k({
                                                                        type: "equip2",
                                                                        data: Number(t.substring(1))
                                                                    }),
                                                                    disableClearable: !0,
                                                                    freeSolo: !0,
                                                                    autoHighlight: !0,
                                                                    fullWidth: !0,
                                                                    renderInput: e => (0, n.jsx)(m.Z, {
                                                                        ...e,
                                                                        variant: "standard",
                                                                        label: "Slot 2",
                                                                        onFocus: e => e.target.select ? e.target.select() : e.target.setSelectionRange(0, e.target.value.length)
                                                                    }),
                                                                    options: Array.from(Array(Number("10") + 1)).map((e, t) => "T".concat(t))
                                                                })
                                                            })
                                                        }), (0, n.jsx)(s.Z, {
                                                            sx: {
                                                                flex: "1"
                                                            },
                                                            children: (0, n.jsx)(u.Z, {
                                                                variant: "standard",
                                                                fullWidth: !0,
                                                                children: (0, n.jsx)(p.Z, {
                                                                    id: "equip3",
                                                                    value: "T".concat(o.equip3),
                                                                    onChange: (e, t) => t && k({
                                                                        type: "equip3",
                                                                        data: Number(t.substring(1))
                                                                    }),
                                                                    disableClearable: !0,
                                                                    freeSolo: !0,
                                                                    autoHighlight: !0,
                                                                    fullWidth: !0,
                                                                    renderInput: e => (0, n.jsx)(m.Z, {
                                                                        ...e,
                                                                        variant: "standard",
                                                                        label: "Slot 3",
                                                                        onFocus: e => e.target.select ? e.target.select() : e.target.setSelectionRange(0, e.target.value.length)
                                                                    }),
                                                                    options: Array.from(Array(Number("9") + 1)).map((e, t) => "T".concat(t))
                                                                })
                                                            })
                                                        }), (0, n.jsx)(s.Z, {
                                                            sx: {
                                                                flex: "1"
                                                            },
                                                            children: (0, n.jsx)(u.Z, {
                                                                variant: "standard",
                                                                fullWidth: !0,
                                                                children: (0, n.jsx)(p.Z, {
                                                                    id: "gear",
                                                                    value: "T".concat(o.gear),
                                                                    onChange: (e, t) => t && k({
                                                                        type: "gear",
                                                                        data: Number(t.substring(1))
                                                                    }),
                                                                    disableClearable: !0,
                                                                    freeSolo: !0,
                                                                    autoHighlight: !0,
                                                                    fullWidth: !0,
                                                                    renderInput: e => (0, n.jsx)(m.Z, {
                                                                        ...e,
                                                                        variant: "standard",
                                                                        label: "애용품",
                                                                        onFocus: e => e.target.select ? e.target.select() : e.target.setSelectionRange(0, e.target.value.length)
                                                                    }),
                                                                    options: Array.from([, , , ]).map((e, t) => "T".concat(t))
                                                                })
                                                            })
                                                        })]
                                                    })
                                                }), (0, n.jsx)(s.Z, {
                                                    children: (0, n.jsxs)(s.Z, {
                                                        sx: {
                                                            display: "flex",
                                                            width: "100%",
                                                            gap: {
                                                                xs: "0.5rem",
                                                                sm: "1rem"
                                                            },
                                                            padding: {
                                                                xs: "0.5rem",
                                                                sm: "1rem"
                                                            }
                                                        },
                                                        children: [(0, n.jsx)(s.Z, {
                                                            sx: {
                                                                flex: "1"
                                                            },
                                                            children: (0, n.jsxs)(s.Z, {
                                                                sx: {
                                                                    width: "max-content",
                                                                    margin: "0 auto"
                                                                },
                                                                children: [(0, n.jsxs)(s.Z, {
                                                                    sx: {
                                                                        color: "rgba(0, 0, 0, 0.6)",
                                                                        fontSize: "0.75rem",
                                                                        lineHeight: "1.4375em"
                                                                    },
                                                                    children: ["능력 개방", (0, n.jsx)("br", {}), "최대 HP"]
                                                                }), (0, n.jsxs)(s.Z, {
                                                                    children: ["Lv.", (0, n.jsx)(G.Z, {
                                                                        value: o.potential1 || 0,
                                                                        min: 0,
                                                                        max: Number("25"),
                                                                        onChange: e => k({
                                                                            type: "potential1",
                                                                            data: e
                                                                        })
                                                                    })]
                                                                })]
                                                            })
                                                        }), (0, n.jsx)(s.Z, {
                                                            sx: {
                                                                flex: "1"
                                                            },
                                                            children: (0, n.jsxs)(s.Z, {
                                                                sx: {
                                                                    width: "max-content",
                                                                    margin: "0 auto"
                                                                },
                                                                children: [(0, n.jsxs)(s.Z, {
                                                                    sx: {
                                                                        color: "rgba(0, 0, 0, 0.6)",
                                                                        fontSize: "0.75rem",
                                                                        lineHeight: "1.4375em"
                                                                    },
                                                                    children: ["능력 개방", (0, n.jsx)("br", {}), "공격력"]
                                                                }), (0, n.jsxs)(s.Z, {
                                                                    children: ["Lv.", (0, n.jsx)(G.Z, {
                                                                        value: o.potential2 || 0,
                                                                        min: 0,
                                                                        max: Number("25"),
                                                                        onChange: e => k({
                                                                            type: "potential2",
                                                                            data: e
                                                                        })
                                                                    })]
                                                                })]
                                                            })
                                                        }), (0, n.jsx)(s.Z, {
                                                            sx: {
                                                                flex: "1"
                                                            },
                                                            children: (0, n.jsxs)(s.Z, {
                                                                sx: {
                                                                    width: "max-content",
                                                                    margin: "0 auto"
                                                                },
                                                                children: [(0, n.jsxs)(s.Z, {
                                                                    sx: {
                                                                        color: "rgba(0, 0, 0, 0.6)",
                                                                        fontSize: "0.75rem",
                                                                        lineHeight: "1.4375em"
                                                                    },
                                                                    children: ["능력 개방", (0, n.jsx)("br", {}), "치유력"]
                                                                }), (0, n.jsxs)(s.Z, {
                                                                    children: ["Lv.", (0, n.jsx)(G.Z, {
                                                                        value: o.potential3 || 0,
                                                                        min: 0,
                                                                        max: Number("25"),
                                                                        onChange: e => k({
                                                                            type: "potential3",
                                                                            data: e
                                                                        })
                                                                    })]
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), o.level < 90 || o.star < 5 ? (0, n.jsx)(s.Z, {
                                                    sx: {
                                                        fontSize: "0.875rem",
                                                        color: "#dc2626",
                                                        textAlign: "center",
                                                        wordBreak: "keep-all"
                                                    },
                                                    children: "5성 90레벨에 도달하지 못한 경우 능력\xa0개방 레벨은 적용되지 않습니다."
                                                }) : (0, n.jsx)(s.Z, {
                                                    sx: {
                                                        fontSize: "0.875rem",
                                                        color: "#dc2626",
                                                        textAlign: "center",
                                                        wordBreak: "keep-all"
                                                    },
                                                    children: "\xa0"
                                                }), (0, n.jsx)(s.Z, {
                                                    children: (0, n.jsx)(H.Z, {
                                                        checked: 1 === o.personality,
                                                        onCheckChange: e => k({
                                                            type: "personality",
                                                            data: e ? 1 : 0
                                                        }),
                                                        fillWidth: !0,
                                                        disableRipple: !0,
                                                        children: "같은 이름 학생 인연 스탯 포함"
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
    }
}, function(e) {
    e.O(0, [6351, 990, 2840, 795, 1800, 5349, 1664, 3535, 5015, 1066, 5830, 3451, 3965, 5098, 6541, 159, 7521, 4635, 4605, 4203, 1818, 2888, 9774, 179], function() {
        return e(e.s = 69037)
    }),
        _N_E = e.O()
}]);
