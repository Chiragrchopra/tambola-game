(this.webpackJsonptambola = this.webpackJsonptambola || []).push([[0], {
    108: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0), r = a.n(n), s = a(7), o = a.n(s);

        function i(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }

        function l(e) {
            for (var t = 0, a = 0; a < e.length; ++a) t += e[a].length;
            return t
        }

        function c(e, t) {
            for (var a = 0, n = 0; n < e[t].length; ++n) 0 !== e[t][n] && ++a;
            return a
        }

        function u(e, t) {
            for (var a = 0; a < 9; ++a) if (3 === e[a].length) for (var n = 0; n < 3; ++n) t[n][a] = e[a][n];
            for (var r = 0, s = [], o = 0; o < 9; ++o) 2 === e[o].length && s.push(o);
            for (var l = s.length, u = 0; u < l; ++u) {
                var m = i(0, s.length - 1), h = s[m], d = [[0, 1], [0, 2], [1, 2]][r % 3];
                t[d[0]][h] = e[h][0], t[d[1]][h] = e[h][1], s.splice(m, 1), ++r
            }
            for (var p = 0; p < 9; ++p) if (1 === e[p].length) {
                for (var b = i(0, 2); 0 !== t[b][p] || 5 === c(t, b);) b = i(0, 2);
                t[b][p] = e[p][0]
            }
            return t
        }

        function m(e) {
            for (var t = function () {
                for (var e = [], t = [], a = [], n = [], r = [], s = [], o = [], c = [], u = [], m = 1; m <= 9; ++m) e.push(m);
                for (var h = 10; h <= 19; ++h) t.push(h);
                for (var d = 20; d <= 29; ++d) a.push(d);
                for (var p = 30; p <= 39; ++p) n.push(p);
                for (var b = 40; b <= 49; ++b) r.push(b);
                for (var f = 50; f <= 59; ++f) s.push(f);
                for (var v = 60; v <= 69; ++v) o.push(v);
                for (var y = 70; y <= 79; ++y) c.push(y);
                for (var g = 80; g <= 90; ++g) u.push(g);
                for (var k = [e, t, a, n, r, s, o, c, u], w = [], E = [], N = [], S = [], C = [], O = [], j = 0; j < 9; ++j) w.push([]), E.push([]), N.push([]), S.push([]), C.push([]), O.push([]);
                for (var T = [w, E, N, S, C, O], W = 0; W < 9; ++W) for (var A = k[W], H = 0; H < 6; ++H) {
                    var P = i(0, A.length - 1), B = A[P];
                    T[H][W].push(B), A.splice(P, 1)
                }
                var M = k[k.length - 1], F = i(0, M.length - 1), R = M[F];
                T[i(0, T.length - 1)][8].push(R), M.splice(F, 1);
                for (var x = 0; x < 3; ++x) for (var G = 0; G < 9; ++G) {
                    var I = k[G];
                    if (0 !== I.length) for (var D = i(0, I.length - 1), L = I[D], z = !1; !1 === z;) {
                        var Y = T[i(0, T.length - 1)];
                        15 !== l(Y) && 2 !== Y[G].length && (z = !0, Y[G].push(L), I.splice(D, 1))
                    }
                }
                for (var U = 0; U < 9; ++U) {
                    var q = k[U];
                    if (0 !== q.length) for (var K = i(0, q.length - 1), X = q[K], J = !1; !1 === J;) {
                        var V = T[i(0, T.length - 1)];
                        15 !== l(V) && 3 !== V[U].length && (J = !0, V[U].push(X), q.splice(K, 1))
                    }
                }
                for (var Q = 0; Q < 6; ++Q) for (var Z = 0; Z < 9; ++Z) T[Q][Z].sort((function (e, t) {
                    return e - t
                }));
                return T
            }(), a = function () {
                for (var e = [], t = 0; t < 6; ++t) {
                    for (var a = [], n = 0; n < 3; ++n) a.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
                    e[t] = a
                }
                return console.log("houses", e), e
            }(), n = 0; n < e; ++n) u(t[n], a[n]);
            for (var r = [], s = 0; s < e; ++s) {
                for (var o = [], c = 0; c < 3; ++c) {
                    for (var m = [], h = 0; h < 9; ++h) m[h] = {value: a[s][c][h], check: !1};
                    o[c] = m
                }
                r[s] = o
            }
            return r
        }

        var h = function (e) {
            return e.preventDefault(), e.returnValue = "All the game state will be lost. Are you sure you want to leave?", "All the game state will be lost. Are you sure you want to leave?"
        }, d = (a(60), a(2)), p = a(3), b = a(5), f = a(4), v = (a(61), a(52)), y = a.n(v), g = a(31);
        var k = function (e) {
            return r.a.createElement("form", {onSubmit: e.handleSubmit}, r.a.createElement("table", {className: "config-table"}, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", {className: "award-name-heading"}, " Award Name "), r.a.createElement("th", {className: "award-number-heading"}, " How Many? "), r.a.createElement("th", null))), r.a.createElement("tbody", null, e.awards.map((function (t, a) {
                return r.a.createElement("tr", {key: a}, r.a.createElement("td", {className: "award-name"}, r.a.createElement("input", {
                    type: "text",
                    name: "nameAward",
                    placeholder: "Enter Award Name",
                    value: e.awards[a].nameAward,
                    onChange: e.handleChangeHost(a)
                })), r.a.createElement("td", {className: "award-number"}, r.a.createElement("input", {
                    type: "number",
                    name: "numAward",
                    placeholder: "Enter Number of Awards",
                    min: "1",
                    value: e.awards[a].numAward,
                    onChange: e.handleChangeHost(a)
                })), r.a.createElement("td", {className: "cross-button"}, r.a.createElement("button", {
                    type: "button",
                    onClick: e.handleRemoveSpecificRow(a)
                }, "X")))
            })))), r.a.createElement("div", {className: "buttons-container"}, r.a.createElement("button", {
                className: "add-row",
                type: "button",
                onClick: e.handleAddRow
            }, "Add Award"), r.a.createElement("button", {className: "start-game", type: "submit"}, "Start Game")))
        }, w = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).clickHandler = function () {
                    var e = !n.state.check;
                    n.setState({
                        check: e,
                        value: n.state.value
                    }), void 0 !== n.props.changeTicketState && void 0 !== n.props.index && n.props.changeTicketState(n.props.index, e)
                }, n.state = {value: n.props.value, check: void 0 !== n.props.check && n.props.check}, n
            }

            return Object(p.a)(a, [{
                key: "componentDidUpdate", value: function (e) {
                    e.check !== this.props.check && this.props.check && this.setState({check: this.props.check})
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.check ? "checked" : "unchecked";
                    return n.createElement("div", {
                        className: "box",
                        onClick: this.clickHandler
                    }, n.createElement("div", {className: e}), n.createElement("div", {className: e}), n.createElement("p", null, 0 === this.props.value ? "" : this.props.value))
                }
            }]), a
        }(n.Component), E = function (e) {
            var t = e.numbers.map((function (e) {
                return n.createElement(w, {value: e.value, check: e.check})
            }));
            return n.createElement("div", {className: "board-line"}, t)
        }, N = a(19);
        var S = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).reward = void 0, n.deleteNotification = function () {
                    n.setState({notificationObj: null});
                    var e = document.getElementById("ticket-board-container");
                    e && e.setAttribute("style", "opacity: 1")
                }, n.state = {notificationObj: null}, n
            }

            return Object(p.a)(a, [{
                key: "componentDidMount", value: function () {
                    var e = this, t = document.getElementById("ticket-board-container");
                    this.props.socket.on("callWinToHost", (function (a) {
                        e.reward.rewardMe(), e.setState({notificationObj: a}), null === t || void 0 === t || t.setAttribute("style", "opacity:0.2;"), setTimeout((function () {
                            e.deleteNotification()
                        }), 5e3)
                    })), this.props.socket.on("resultsForPC", (function (a) {
                        e.reward.rewardMe(), e.setState({notificationObj: a}), null === t || void 0 === t || t.setAttribute("style", "opacity:0.2;"), setTimeout((function () {
                            e.deleteNotification()
                        }), 5e3)
                    }))
                }
            }, {
                key: "render", value: function () {
                    var e, t = this,
                        a = this.state.notificationObj ? n.createElement("div", {className: "notification-container"}, n.createElement("div", {className: "notification"}, n.createElement("p", {className: "main animated rubberBand"}, void 0 !== (e = this.state.notificationObj).result ? e.result + " " + e.callWinType : "Call: " + e.callWinType), n.createElement("p", {className: "sub animated bounce"}, function (e) {
                            return e.calledWinUsername || e.user.username
                        }(this.state.notificationObj)))) : null;
                    return n.createElement(n.Fragment, null, a, n.createElement(N.a, {
                        ref: function (e) {
                            t.reward = e
                        },
                        type: "confetti",
                        config: {elementCount: 100, angle: 90, spread: 90, decay: .95, lifetime: 150}
                    }))
                }
            }]), a
        }(n.Component), C = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).state = {message: ""}, n
            }

            return Object(p.a)(a, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    this.props.socket.on("callWinToHost", (function (t) {
                        "Host" === e.props.playerType ? e.setState({message: "Other players are waiting on you to check tickets"}) : e.setState({message: "Waiting for host to check the player tickets"})
                    })), this.props.socket.on("hostCompletedChecking", (function () {
                        e.setState({message: ""})
                    }))
                }
            }, {
                key: "render", value: function () {
                    return n.createElement("p", {className: "waiting"}, this.state.message)
                }
            }]), a
        }(n.Component), O = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).interval = void 0, n.updateTimer = function () {
                    var e = n.state.seconds;
                    e >= 1 && (n.setState({seconds: e - 1}), 1 === e && n.props.endGame())
                }, n.state = {seconds: 10, hasGameEnded: !1}, n
            }

            return Object(p.a)(a, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    this.interval = setInterval((function () {
                        return e.updateTimer()
                    }), 1e3)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    clearInterval(this.interval)
                }
            }, {
                key: "render", value: function () {
                    var e = "";
                    return this.state.seconds > 0 && (e = "animated infinite bounceIn"), n.createElement("div", {className: "game-over"}, n.createElement("p", null, "Game will be over in:"), n.createElement("p", {className: "timer " + e}, this.state.seconds))
                }
            }]), a
        }(n.Component);

        function j(e) {
            for (var t = [], a = 0; a < 10; ++a) t[a] = {value: e + a, check: !1};
            return t
        }

        function T() {
            for (var e = [], t = 0; t < 9; ++t) e[t] = j(10 * t + 1);
            return e
        }

        var W = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                Object(d.a)(this, a), (n = t.call(this, e)).handleNewNumber = function (e) {
                    var t = e % 10 === 0 ? 9 : e % 10 - 1, a = e % 10 === 0 ? e / 10 - 1 : Math.floor(e / 10),
                        r = n.state.allBoardNumbers;
                    r[a][t] = {value: e, check: !0}, n.setState({
                        allBoardNumbers: r,
                        goneNumbers: n.state.goneNumbers + 1
                    })
                };
                var r = function (e) {
                    var t, a, n;
                    for (n = e.length - 1; n > 0; n--) t = Math.floor(Math.random() * (n + 1)), a = e[n], e[n] = e[t], e[t] = a;
                    return e
                }(function () {
                    for (var e = [], t = 0; t < 90; ++t) e[t] = t + 1;
                    return e
                }());
                return n.state = {shuffledBoardNumbers: r, goneNumbers: 0, allBoardNumbers: T(), showTimer: !1}, n
            }

            return Object(p.a)(a, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    this.props.socket.on("showTimer", (function () {
                        var t = document.querySelector("button.new-number");
                        t.disabled = !0, t.classList.add("disabled-button"), e.setState({showTimer: !0})
                    })), this.props.socket.on("callWinToHost", (function () {
                        !0 === e.state.showTimer && e.setState({showTimer: !1})
                    }))
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = null;
                    this.state.showTimer && (t = n.createElement(O, {
                        socket: this.props.socket,
                        endGame: this.props.endGame
                    }));
                    var a = 0, r = function (e) {
                        for (var t = [], a = 0; a < e.length; ++a) t.push(n.createElement(E, {
                            key: a,
                            index: a,
                            numbers: e[a]
                        }));
                        return t
                    }(this.state.allBoardNumbers);
                    return n.createElement("div", {className: "board-component-main"}, n.createElement("button", {
                        className: "new-number",
                        onClick: function () {
                            a = e.state.shuffledBoardNumbers[e.state.goneNumbers], e.handleNewNumber(a), e.props.socket.emit("newNumber", a)
                        }
                    }, "Generate New"), n.createElement("div", null, n.createElement("div", {className: "new-number-host-container"}, n.createElement("p", {className: "new-number-host"}, this.state.shuffledBoardNumbers[this.state.goneNumbers - 1] ? this.state.shuffledBoardNumbers[this.state.goneNumbers - 1] : ""))), t, n.createElement(C, {
                        socket: this.props.socket,
                        playerType: "Host"
                    }), n.createElement("div", {className: "notification-parent"}, n.createElement("div", {
                        id: "ticket-board-container",
                        className: "no-click"
                    }, r), n.createElement(S, {socket: this.props.socket, type: "host"})))
                }
            }]), a
        }(n.Component);
        var A = function (e) {
            var t = function (e, t) {
                for (var a = [], r = 0; r < e.length; ++r) a[r] = n.createElement(w, {
                    key: r,
                    value: e[r].value,
                    check: e[r].check,
                    changeTicketState: t,
                    index: r
                });
                return a
            }(e.numbers, (function (t, a) {
                e.changeTicketState(e.index, t, a)
            }));
            return n.createElement("div", {className: "line"}, t)
        };
        var H = function (e) {
            var t = function (t, a, n) {
                e.changeTicketState(e.houseIndex, t, a, n)
            };
            return n.createElement("div", null, n.createElement(A, {
                key: 0,
                index: 0,
                numbers: e.houseNumbers[0],
                changeTicketState: t
            }), n.createElement(A, {
                key: 1,
                index: 1,
                numbers: e.houseNumbers[1],
                changeTicketState: t
            }), n.createElement(A, {key: 2, index: 2, numbers: e.houseNumbers[2], changeTicketState: t}))
        };
        var P = function (e) {
            for (var t = function (t, a, n, r) {
                e.changeTicketState && e.changeTicketState(t, a, n, r)
            }, a = [], r = 0; r < e.numHouses; ++r) a[r] = n.createElement(n.Fragment, null, n.createElement(H, {
                key: r,
                changeTicketState: t,
                houseNumbers: e.houses[r],
                houseIndex: r
            }), n.createElement("br", null));
            return n.createElement("div", null, a)
        }, B = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var r;
                Object(d.a)(this, a), (r = t.call(this, e)).awardButtons = void 0, r.awardButtons = [];
                for (var s = function (e) {
                    r.awardButtons.push(n.createElement("button", {
                        key: e, onClick: function () {
                            r.props.winCallBack(r.props.awards[e].nameAward)
                        }
                    }, r.props.awards[e].nameAward))
                }, o = 0; o < r.props.awards.length; ++o) s(o);
                return r
            }

            return Object(p.a)(a, [{
                key: "render", value: function () {
                    return n.createElement("div", {className: "winning-buttons"}, this.awardButtons)
                }
            }]), a
        }(n.Component), M = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).state = {isShown: !1}, n
            }

            return Object(p.a)(a, [{
                key: "render", value: function () {
                    for (var e = [], t = this.props.numbers.length - 1; t >= 0; --t) e.push(n.createElement("p", {key: t}, this.props.numbers[t]));
                    return n.createElement("div", {className: "gone-numbers-container"}, n.createElement("button", {
                        id: "gone-numbers-button",
                        onClick: function () {
                            var e = document.getElementById("gone-numbers-menu"),
                                t = document.getElementById("gone-numbers-button");
                            null !== e && null !== t && ("none" !== window.getComputedStyle(e).getPropertyValue("display") ? (e.style.display = "none", t.innerHTML = "Gone Numbers") : (e.style.display = "block", e.classList.add("animated", "fadeIn"), t.innerHTML = "X"))
                        }
                    }, "Gone Numbers"), n.createElement("div", {id: "gone-numbers-menu"}, e))
                }
            }]), a
        }(n.Component), F = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).goneNumbers = void 0, n.generateRandomKey = function () {
                    return 1e4 * Math.random()
                }, n.state = {newNumber: 0}, n.goneNumbers = [], n
            }

            return Object(p.a)(a, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    this.props.socket.on("newNumberFromHost", (function (t) {
                        e.goneNumbers.push(t.newNumber), e.setState({newNumber: t.newNumber})
                    }))
                }
            }, {
                key: "render", value: function () {
                    return n.createElement(n.Fragment, null, n.createElement("p", {className: "new-number-player"}, "New Number "), n.createElement("div", null, n.createElement("div", {
                        key: this.generateRandomKey(),
                        className: "new-number-player-container custom-pulse"
                    }, n.createElement("p", {className: "only-new-number-player"}, this.state.newNumber ? this.state.newNumber : ""))), n.createElement(M, {numbers: this.goneNumbers}))
                }
            }]), a
        }(n.Component), R = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var r;
                return Object(d.a)(this, a), (r = t.call(this, e)).houses = void 0, r.changeTicketState = function (e, t, a, n) {
                    var s = r.houses[e][t][a].value;
                    r.houses[e][t][a] = {value: s, check: n}, console.log("here it is after changing", r.houses)
                }, r.handleWinningCall = function (e) {
                    r.props.socket.emit("callWinFromPC", {callWinType: e, houses: r.houses})
                }, r.winningButtons = n.createElement(B, {
                    key: 0,
                    awards: r.props.awards,
                    winCallBack: r.handleWinningCall
                }), r.houses = m(r.props.numHouses), r.state = {showTimer: !1}, r
            }

            return Object(p.a)(a, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    this.props.socket.on("showTimer", (function () {
                        e.setState({showTimer: !0})
                    })), this.props.socket.on("callWinToHost", (function () {
                        !0 === e.state.showTimer && e.setState({showTimer: !1})
                    }))
                }
            }, {
                key: "render", value: function () {
                    var e = null;
                    return this.state.showTimer && (e = n.createElement(O, {
                        socket: this.props.socket,
                        endGame: this.props.endGame
                    })), n.createElement("div", {className: "pc-ticket"}, n.createElement(F, {socket: this.props.socket}), e, n.createElement(C, {
                        playerType: "PC",
                        socket: this.props.socket
                    }), n.createElement("div", {className: "notification-parent"}, n.createElement("div", {id: "ticket-board-container"}, n.createElement(P, {
                        houses: this.houses,
                        changeTicketState: this.changeTicketState,
                        numHouses: this.props.numHouses
                    })), n.createElement(S, {socket: this.props.socket, type: "Pc"})), this.winningButtons)
                }
            }]), a
        }(n.Component), x = a(55);
        var G = function (e) {
            return n.createElement("div", {className: "result-buttons"}, n.createElement("button", {
                onClick: function () {
                    e.resultCallback(e.win)
                }
            }, e.win), n.createElement("button", {
                onClick: function () {
                    e.resultCallback(e.bogey)
                }
            }, e.bogey))
        };
        var I = function (e) {
            var t = n.createElement("div", {className: "host-ticket"}, n.createElement("br", null), n.createElement("p", {className: "win-call-type"}, e.callWinObj.callWinType), n.createElement("p", {className: "player-name"}, e.callWinObj.user.username, "'s Ticket"), n.createElement("div", {className: "no-click"}, n.createElement(P, {
                houses: e.callWinObj.houses,
                numHouses: e.callWinObj.houses.length
            })), n.createElement(G, {
                key: 0, win: "Confirm Win!", bogey: "Bogey!", resultCallback: function (t) {
                    e.socket.emit("resultsFromHost", {
                        result: t,
                        callWinType: e.callWinObj.callWinType,
                        userCalledForWin: e.callWinObj.user
                    }), e.removeTicketFromHost(e.callWinObj.user.id + e.callWinObj.callWinType)
                }
            }));
            return n.createElement(n.Fragment, null, t)
        }, D = a(20), L = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).hasWalkthroughShown = void 0, n.walkThroughSteps = [{
                    target: ".host-ticket",
                    content: "This is the player's ticket. They think they have won this award. Your task is to check the 'crossed' numbers on this ticket and tell the players if this is a valid win or a Bogey!",
                    disableBeacon: !0,
                    placement: "bottom",
                    disableOverlay: !0
                }], n.removeTicket = function (e) {
                    var t = n.state.ticketFromPlayers;
                    if (delete t[e], n.setState({ticketFromPlayers: t}), 0 === Object.keys(t).length && t.constructor === Object) {
                        var a = document.querySelector("button.new-number");
                        a.disabled = !1, a.classList.remove("disabled-button"), n.props.socket.emit("hostCompletedChecking")
                    }
                }, n.state = {
                    ticketFromPlayers: {},
                    runWalkthrough: !1
                }, n.hasWalkthroughShown = !n.props.showWalkthrough, n
            }

            return Object(p.a)(a, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    this.props.socket.on("callWinToHost", (function (t) {
                        var a = e.state.ticketFromPlayers, n = !e.hasWalkthroughShown;
                        a[t.user.id + t.callWinType] = t, e.setState({ticketFromPlayers: a, runWalkthrough: n});
                        var r = document.querySelector("button.new-number");
                        r.disabled = !0, r.classList.add("disabled-button")
                    }))
                }
            }, {
                key: "render", value: function () {
                    for (var e = [], t = 0, a = Object.entries(this.state.ticketFromPlayers); t < a.length; t++) {
                        var r = Object(x.a)(a[t], 2), s = r[0], o = r[1], i = n.createElement(I, {
                            key: s,
                            socket: this.props.socket,
                            callWinObj: o,
                            removeTicketFromHost: this.removeTicket
                        });
                        e.push(i)
                    }
                    return n.createElement(n.Fragment, null, e, n.createElement(D.a, {
                        steps: this.walkThroughSteps,
                        run: this.state.runWalkthrough,
                        continuous: !0,
                        disableOverlayClose: !0,
                        showProgress: !0,
                        showSkipButton: !0,
                        spotlightClicks: !0,
                        styles: {options: {zIndex: 1e4, primaryColor: "#0e141f", textColor: "#0e141f"}}
                    }))
                }
            }]), a
        }(n.Component), z = (a(99), function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).newNumber = 0, n.state = {
                    remainingAwards: n.props.awards,
                    whoWonWhat: {}
                }, n
            }

            return Object(p.a)(a, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    this.props.socket.on("newNumberFromHost", (function (t) {
                        e.newNumber = t.newNumber;
                        for (var a = 0; a < e.state.remainingAwards.length; ++a) if (0 === parseInt(e.state.remainingAwards[a].numAward)) {
                            var n = document.querySelector(".winning-buttons button:nth-child(".concat(a + 1, ")"));
                            n && (n.disabled = !0, n.classList.add("disabled-button"))
                        }
                    })), this.props.socket.on("hostCompletedChecking", (function () {
                        for (var t = !1, a = 0; a < e.state.remainingAwards.length; ++a) parseInt(e.state.remainingAwards[a].numAward) > 0 && (t = !0);
                        t || "Host" !== e.props.playerType || e.props.socket.emit("showTimer")
                    })), this.props.socket.on("resultsForPC", (function (t) {
                        if ("Confirm Win!" === t.result) {
                            for (var a = e.state.remainingAwards, n = e.state.whoWonWhat, r = 0; r < a.length; ++r) if (a[r].nameAward === t.callWinType) if (void 0 === n[t.callWinType] && (n[t.callWinType] = {}), void 0 === n[t.callWinType][e.newNumber]) {
                                n[t.callWinType][e.newNumber] = [t.calledWinUsername];
                                var s = parseInt(a[r].numAward);
                                --s, a[r].numAward = s.toString()
                            } else n[t.callWinType][e.newNumber].push(t.calledWinUsername);
                            e.setState({remainingAwards: a, whoWonWhat: n})
                        }
                    }))
                }
            }, {
                key: "render", value: function () {
                    for (var e = n.createElement("span", {className: "zero-awards-left"}, "x0"), t = [], a = 0; a < this.state.remainingAwards.length; ++a) {
                        var r = [];
                        for (var s in this.state.whoWonWhat[this.state.remainingAwards[a].nameAward]) this.state.whoWonWhat[this.state.remainingAwards[a].nameAward].hasOwnProperty(s) && r.push(this.state.whoWonWhat[this.state.remainingAwards[a].nameAward][s].join(" | "));
                        t.push(r.join(", "))
                    }
                    for (var o = [], i = 0; i < this.state.remainingAwards.length; ++i) o.push(n.createElement("tr", {key: i}, n.createElement("td", {className: "award"}, this.state.remainingAwards[i].nameAward), n.createElement("td", {className: "left"}, "0" === this.state.remainingAwards[i].numAward ? e : "x" + this.state.remainingAwards[i].numAward), n.createElement("td", {className: "won-by"}, t[i])));
                    return n.createElement("div", {className: "prizes-container"}, n.createElement("p", {className: "award-status"}, "Award Status"), n.createElement("hr", null), n.createElement("table", {className: "prizes"}, n.createElement("tr", null, n.createElement("th", {className: "award"}, "Award"), n.createElement("th", {className: "left"}, "Left"), n.createElement("th", {className: "won-by"}, "Won By")), o))
                }
            }]), a
        }(n.Component)), Y = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var r;
                Object(d.a)(this, a), (r = t.call(this, e)).diffTypeSteps = void 0;
                var s = [{
                    target: ".snackbar",
                    content: n.createElement(n.Fragment, null, n.createElement("h3", null, "You are the host!"), n.createElement("p", null, "Share this link with your friends so that they can play in this game created by you.")),
                    disableBeacon: !0
                }, {
                    target: ".config-table",
                    content: "You can use this section to add, delete or customize awards",
                    disableBeacon: !0
                }, {
                    target: ".ready-players-container",
                    content: "You will see all players and their status in the game here.",
                    disableBeacon: !0
                }, {
                    target: ".start-game",
                    content: "Click this button after all players have joined to start the game.",
                    disableBeacon: !0,
                    spotlightClicks: !1
                }];
                return r.diffTypeSteps = {
                    config: {
                        PC: [{
                            target: "#pc-config-table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=number]",
                            content: "Select the number of tickets you want to play with.",
                            disableBeacon: !0
                        }, {
                            target: "button.ready",
                            content: 'Click this button to mark yourself "Ready" after you select the number of tickets you want to play with.',
                            disableBeacon: !0
                        }, {
                            target: ".ready-players-container",
                            content: "You will see all players and their status in the game here.",
                            disableBeacon: !0
                        }], Host: s
                    },
                    game: {
                        PC: [{
                            target: ".new-number-player-container",
                            content: "The new random number called by the host will be shown here",
                            disableBeacon: !0
                        }, {
                            target: "#gone-numbers-button",
                            content: "To view all the previous numbers, click this button.",
                            disableBeacon: !0
                        }, {
                            target: "#ticket-board-container",
                            content: "This is your Tambola ticket. You can cross a number if it matches the called number.",
                            disableBeacon: !0
                        }, {
                            target: ".winning-buttons",
                            content: "If you think you are winning an award, call for that award using these buttons. Your ticket will then be checked by the host for a Bogey!",
                            disableBeacon: !0
                        }, {
                            target: "table.prizes",
                            content: "Remaining awards and winners will be shown here.",
                            disableBeacon: !0
                        }],
                        Host: [{
                            target: ".new-number",
                            content: "Clicking this generates a new random number which will be displayed on every player's screen.",
                            disableBeacon: !0
                        }, {
                            target: "table.prizes",
                            content: "Remaining awards and winners will be shown here.",
                            disableBeacon: !0
                        }]
                    }
                }, r
            }

            return Object(p.a)(a, [{
                key: "componentDidUpdate", value: function (e) {
                    console.log("componendidupdate called with run ", this.props.runWalkthrough), this.props.runWalkthrough !== e.runWalkthrough && this.setState({run: this.props.runWalkthrough})
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.playerType, t = this.props.type, a = this.diffTypeSteps[t][e];
                    return n.createElement(n.Fragment, null, n.createElement(D.a, {
                        steps: a,
                        run: this.props.runWalkthrough,
                        continuous: !0,
                        disableOverlayClose: !0,
                        showProgress: !0,
                        showSkipButton: !0,
                        spotlightClicks: !0,
                        styles: {options: {zIndex: 1e4, primaryColor: "#0e141f", textColor: "#0e141f"}}
                    }))
                }
            }]), a
        }(n.Component), U = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).ticketFromPlayer = void 0, n.winningCallFromPlayer = void 0, n.userCalledForWin = void 0, n.reward = void 0, n.endGame = function () {
                    n.setState({hasGameEnded: !0}), n.reward.rewardMe(), window.removeEventListener("beforeunload", h);
                    var e = 0, t = setInterval((function () {
                        n.reward.rewardMe(), 4 === ++e && clearInterval(t)
                    }), 2e3)
                }, n.state = {hasGameEnded: !1}, n
            }

            return Object(p.a)(a, [{
                key: "render", value: function () {
                    var e = this, t = null, a = null, r = "";
                    return this.state.hasGameEnded && (r = "game-ended no-click", a = n.createElement("p", {className: "game-over animated rubberBand"}, "Game Over")), "PC" === this.props.type ? t = n.createElement("div", {className: "everything-but-prizes"}, n.createElement(Y, {
                        type: "game",
                        playerType: "PC",
                        runWalkthrough: this.props.runWalkthrough
                    }), n.createElement("div", {className: r}, n.createElement(R, {
                        socket: this.props.socket,
                        numHouses: this.props.numHouses,
                        awards: this.props.awards,
                        endGame: this.endGame
                    })), a) : "Host" === this.props.type && (t = n.createElement("div", {className: "everything-but-prizes"}, n.createElement(Y, {
                        type: "game",
                        playerType: "Host",
                        runWalkthrough: this.props.runWalkthrough
                    }), n.createElement("div", {className: r}, n.createElement(W, {
                        socket: this.props.socket,
                        endGame: this.endGame
                    }), n.createElement(L, {
                        socket: this.props.socket,
                        showWalkthrough: this.props.runWalkthrough
                    })), a)), n.createElement(n.Fragment, null, n.createElement("div", {className: "main-container"}, t, n.createElement(z, {
                        socket: this.props.socket,
                        awards: this.props.awards,
                        playerType: this.props.type,
                        endGame: this.endGame
                    })), n.createElement("div", {className: "game-over-reward"}, n.createElement(N.a, {
                        ref: function (t) {
                            e.reward = t
                        },
                        type: "confetti",
                        config: {elementCount: 90, angle: 70, spread: 70, decay: .95, lifetime: 100}
                    })))
                }
            }]), a
        }(n.Component);
        var q = function (e) {
            for (var t = n.createElement("span", {className: "checkmark"}, "\u2714"), a = [], r = null, s = 0; s < e.players.length; ++s) a.push(n.createElement("tr", {key: s}, n.createElement("td", null, e.players[s].user.username), n.createElement("td", null, e.players[s].ready ? t : "X")));
            return r = 0 === a.length ? n.createElement("p", {
                style: {
                    color: "#a89e8a",
                    marginLeft: "0.75rem"
                }
            }, "Waiting for other players to join...") : null, n.createElement("div", {className: "ready-players-container"}, n.createElement("h1", {className: "players-in-game"}, "Players in Game"), n.createElement("hr", null), n.createElement("table", {className: "ready-players"}, n.createElement("tr", null, n.createElement("th", null, "Name"), n.createElement("th", null, "Ready")), a), r)
        }, K = (a(48), function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).handleCopyUrl = function () {
                    var e = document.createElement("input"), t = window.location.href;
                    document.body.appendChild(e), e.value = t, e.select(), document.execCommand("copy"), document.body.removeChild(e), n.setState({hidden: !0})
                }, n.state = {hidden: !1}, n
            }

            return Object(p.a)(a, [{
                key: "render", value: function () {
                    var e;
                    return e = !0 === this.state.hidden ? "animated bounceOutUp" : "animated bounceInDown", n.createElement("div", {className: e}, n.createElement("div", {className: "snackbar"}, n.createElement("p", {className: "snackbar-text"}, this.props.message), n.createElement("button", {
                        className: "snackbar-action",
                        onClick: this.handleCopyUrl
                    }, this.props.actionText)))
                }
            }]), a
        }(n.Component)), X = a(30), J = a.n(X), V = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).state = {isShown: n.props.isShown}, n
            }

            return Object(p.a)(a, [{
                key: "render", value: function () {
                    var e, t = this, a = "flex";
                    return e = !1 === this.props.isShown ? "animated bounceOutRight" : "animated bounceInRight", this.props.initiallyHidden && (a = "none"), n.createElement("div", {className: e}, n.createElement("div", {
                        className: "snackbar",
                        style: {display: a}
                    }, n.createElement("p", {className: "snackbar-text"}, this.props.message), n.createElement("button", {
                        onClick: function () {
                            t.props.handleClose()
                        }
                    }, "X")))
                }
            }]), a
        }(n.Component), Q = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#0e141f"
            }, overlay: {backgroundColor: "rgba(255, 255, 255, 0.35)", transition: "all 1s"}
        }, Z = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).hideToastInitially = void 0, n.handlleHostConfigDone = function () {
                    n.state.isModalOpen && n.setState({isModalOpen: !1}), n.props.socket.emit("HostConfigDone", n.state.awards), console.log("config submitted from host", n.state.awards)
                }, n.handleChangeHost = function (e) {
                    return function (t) {
                        var a = t.target, r = a.name, s = a.value, o = n.state.awards;
                        o[e][r] = s, n.setState({awards: o})
                    }
                }, n.handleAddRow = function () {
                    n.setState({awards: [].concat(Object(g.a)(n.state.awards), [{nameAward: "", numAward: ""}])})
                }, n.handleRemoveRow = function () {
                    n.setState({awards: n.state.awards.slice(0, -1)})
                }, n.handleRemoveSpecificRow = function (e) {
                    return function () {
                        var t = Object(g.a)(n.state.awards);
                        t.splice(e, 1), n.setState({awards: t})
                    }
                }, n.handleChangePC = function (e) {
                    var t = e.target.value;
                    "PC" === n.state.type && n.setState({numHouses: t})
                }, n.handleSubmit = function (e) {
                    if (n.setState({readyClient: !0}), "Host" === n.state.type) if (n.state.PcsStatus.length > 0) {
                        for (var t = !0, a = 0; a < n.state.PcsStatus.length; ++a) n.state.PcsStatus[a].ready || (t = !1);
                        t ? n.handlleHostConfigDone() : n.setState({isModalOpen: !0})
                    } else n.hideToastInitially = !1, n.setState({isToastOpen: !0}); else "PC" === n.state.type && n.props.socket.emit("PcReady", n.state.numHouses);
                    e.preventDefault()
                }, n.state = {
                    type: "",
                    numHouses: 1,
                    readyHost: !1,
                    readyClient: !1,
                    PcsStatus: [],
                    isModalOpen: !1,
                    isToastOpen: !1,
                    watchTutorialModal: !0,
                    runWalkthrough: !1,
                    hasGameAlreadyStarted: !1,
                    awards: [{nameAward: "First Line", numAward: "1"}, {
                        nameAward: "Second Line",
                        numAward: "1"
                    }, {nameAward: "Third Line", numAward: "1"}, {
                        nameAward: "Corners",
                        numAward: "1"
                    }, {nameAward: "Full House", numAward: "1"}],
                    hostDisconnected: !1
                }, n.hideToastInitially = !0, n
            }

            return Object(p.a)(a, [{
                key: "componentDidMount", value: function () {
                    var e = this, t = window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1);
                    this.props.socket.emit("joinRoom", {
                        room: t,
                        username: this.props.name
                    }), this.props.socket.on("gameHasAlreadyStarted", (function () {
                        e.setState({hasGameAlreadyStarted: !0})
                    })), this.props.socket.on("userConnected", (function (t) {
                        e.setState({type: t.type}), "Host" === t.type && (e.props.socket.on("notifyHostConnection", (function (t) {
                            var a = e.state.PcsStatus, n = {user: t, ready: !1, numTickets: 0};
                            a.push(n), e.setState({PcsStatus: a}), e.props.socket.emit("PcsStatus", t, a)
                        })), e.props.socket.on("PcReady", (function (t, a) {
                            for (var n = e.state.PcsStatus, r = 0; r < n.length; ++r) n[r].user.id === t.id && (n[r].ready = !0, n[r].numTickets = a);
                            e.setState({PcsStatus: n}), e.props.socket.emit("PcsStatus", t, n)
                        })), e.props.socket.on("userDisconnect", (function (t) {
                            for (var a = e.state.PcsStatus, n = 0; n < a.length; ++n) a[n].user.id === t.id && a.splice(n, 1);
                            e.setState({PcsStatus: a}), e.props.socket.emit("PcsStatus", t, a)
                        })))
                    })), this.props.socket.on("HostConfigDone", (function (t) {
                        e.setState({awards: t, readyHost: !0})
                    })), this.props.socket.on("PcsStatus", (function (t) {
                        e.setState({PcsStatus: t})
                    })), this.props.socket.on("HostDisconnected", (function (t) {
                        console.log(t, ": host disconnected"), e.setState({hostDisconnected: !0})
                    }))
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    if (this.state.hostDisconnected) return n.createElement(n.Fragment, null, n.createElement("h1", {className: "host-configuration"}, "Host left the game. Please close this tab. Generate a new room if you want to play more."), n.createElement("a", {
                        href: "/",
                        style: {color: "white"}
                    }, n.createElement("button", null, "Back")));
                    if (this.state.hasGameAlreadyStarted || this.state.readyHost && !this.state.readyClient) return n.createElement(n.Fragment, null, n.createElement("h1", {className: "host-configuration"}, "This game was started without you. You can play in the next game. Meanwhile you can go back to the home screen and play another game :)"), n.createElement("a", {
                        href: "/",
                        style: {color: "white"}
                    }, n.createElement("button", null, "Home")));
                    var t = null;
                    return this.state.readyHost && this.state.readyClient ? t = n.createElement(U, {
                        socket: this.props.socket,
                        numHouses: this.state.numHouses,
                        name: this.props.name,
                        type: this.state.type,
                        awards: this.state.awards,
                        runWalkthrough: this.state.runWalkthrough
                    }) : "Host" === this.state.type ? t = n.createElement("div", {className: "config-container"}, n.createElement(Y, {
                        playerType: "Host",
                        type: "config",
                        runWalkthrough: this.state.runWalkthrough
                    }), n.createElement(K, {
                        message: "Share this 'join link' with other players",
                        actionText: "Copy Link"
                    }), n.createElement(V, {
                        message: "There are no players in the game right now",
                        isShown: this.state.isToastOpen,
                        handleClose: function () {
                            e.setState({isToastOpen: !1})
                        },
                        initiallyHidden: this.hideToastInitially
                    }), n.createElement(J.a, {
                        isOpen: this.state.isModalOpen,
                        style: Q
                    }, n.createElement("h3", null, "Some players are still not ready."), n.createElement("h3", null, "Are you sure you want to start the game?"), n.createElement("div", {className: "modal-buttons"}, n.createElement("button", {onClick: this.handlleHostConfigDone}, "Yes"), n.createElement("button", {
                        onClick: function () {
                            e.setState({isModalOpen: !1})
                        }
                    }, "No"))), n.createElement("h1", {className: "host-configuration"}, "Game Setup"), n.createElement("hr", null), n.createElement(k, {
                        awards: this.state.awards,
                        handleChangeHost: this.handleChangeHost,
                        handleAddRow: this.handleAddRow,
                        handleRemoveRow: this.handleRemoveRow,
                        handleRemoveSpecificRow: this.handleRemoveSpecificRow,
                        handleSubmit: this.handleSubmit
                    }), n.createElement(q, {players: this.state.PcsStatus})) : "PC" === this.state.type && (t = n.createElement("div", {className: "config-container"}, n.createElement(Y, {
                        playerType: "PC",
                        type: "config",
                        runWalkthrough: this.state.runWalkthrough
                    }), n.createElement("h1", {className: "pc-configuration"}, "Player Setup"), n.createElement("hr", null), n.createElement("form", {onSubmit: this.handleSubmit}, n.createElement("table", {
                        className: "config-table",
                        id: "pc-config-table"
                    }, n.createElement("tbody", null, n.createElement("tr", {style: {display: "none"}}, n.createElement("td", {className: "number-tickets"}, "Number of Tickets:"), n.createElement("td", null, n.createElement("input", {
                        type: "number",
                        max: "6",
                        min: "1",
                        value: this.state.numHouses,
                        onChange: this.handleChangePC,
                        required: !0
                    }))), n.createElement("tr", null, n.createElement("td", null, "Waiting for host to start the game"), n.createElement("td", null, n.createElement("button", {
                        className: "ready",
                        type: "submit"
                    }, "Ready")))))), n.createElement(q, {players: this.state.PcsStatus}))), n.createElement(n.Fragment, null, t, n.createElement(J.a, {
                        isOpen: this.state.watchTutorialModal,
                        style: Q
                    }, n.createElement("h3", null, "Would you like to watch tutorial?"), n.createElement("div", {className: "modal-buttons"}, n.createElement("button", {
                        onClick: function () {
                            e.setState({runWalkthrough: !0, watchTutorialModal: !1}), console.log("clicked yes")
                        }
                    }, "Yes"), n.createElement("button", {
                        onClick: function () {
                            console.log("clicked No"), e.setState({runWalkthrough: !1, watchTutorialModal: !1})
                        }
                    }, "No"))))
                }
            }]), a
        }(n.Component), $ = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).handleChange = function (e) {
                    var t = e.target.value;
                    "" !== t ? n.setState({isEmpty: !1, name: t}) : n.setState({isEmpty: !0, name: t})
                }, n.handleKeyPress = function (e) {
                    var t = e.target.value;
                    "Enter" === e.key && "" !== t && (console.log("enter press here!"), n.setState({submitted: !0}))
                }, n.handleSubmit = function (e) {
                    n.setState({submitted: !0}), e.preventDefault()
                }, n.state = {isEmpty: !0, name: "", submitted: !1}, n
            }

            return Object(p.a)(a, [{
                key: "render", value: function () {
                    if (this.state.submitted) return n.createElement(Z, {
                        socket: this.props.socket,
                        name: this.state.name
                    });
                    var e = {};
                    e = this.state.isEmpty ? {visibility: "hidden"} : {visibility: "visible"};
                    var t = n.createElement("div", {style: e}, n.createElement("button", {onClick: this.handleSubmit}, "OK"));
                    return n.createElement("div", {className: "enter-name-container"}, n.createElement("div", {className: "enter-name"}, n.createElement("p", {className: "enter-name-question"}, "Hi. What's your name?"), n.createElement("input", {
                        id: "enter-name",
                        type: "text",
                        value: this.state.name,
                        placeholder: "Type your answer here...",
                        onChange: this.handleChange,
                        onKeyPress: this.handleKeyPress,
                        spellCheck: "false",
                        autoFocus: !0
                    }), n.createElement("br", null), n.createElement("br", null), n.createElement("br", null), t))
                }
            }]), a
        }(n.Component), _ = function (e) {
            Object(b.a)(a, e);
            var t = Object(f.a)(a);

            function a(e) {
                var n;
                return Object(d.a)(this, a), (n = t.call(this, e)).state = {socket: y()()}, n
            }

            return Object(p.a)(a, [{
                key: "render", value: function () {
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {className: "App"}, r.a.createElement($, {socket: this.state.socket})))
                }
            }]), a
        }(n.Component);
        window.addEventListener("beforeunload", h), o.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(_, null)), document.getElementById("root"))
    }, 48: function (e, t, a) {
    }, 60: function (e, t, a) {
    }, 61: function (e, t, a) {
    }, 91: function (e, t) {
    }, 99: function (e, t, a) {
    }
}, [[108, 1, 2]]]);
//# sourceMappingURL=main.e215123c.chunk.js.map