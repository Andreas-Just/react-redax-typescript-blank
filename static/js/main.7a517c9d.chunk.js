(this["webpackJsonpreact-redux-typescript-blank"]=this["webpackJsonpreact-redux-typescript-blank"]||[]).push([[0],{131:function(e,t,r){e.exports=r(294)},141:function(e,t,r){},166:function(e,t){},185:function(e,t,r){},294:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(12),o=r.n(c),i=r(27),u=r(123),l=(r(140),r(141),r(112)),s=r.n(l),p=r(302),d=r(65),f=r.n(d),b=r(113),O=r(15),h=r(114),v=r(115),m=r(8),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_ERROR",error:e}},E={loading:!1,loaded:!1,error:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case"SET_LOADED":return Object(m.a)(Object(m.a)({},e),{},{loaded:!0});case"SET_ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:t.error});case"FINISH_LOADING":return Object(m.a)(Object(m.a)({},e),{},{loading:!1});default:return e}},y={departure:[],arrival:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,r=t.type,a=t.body;switch(r){case"INIT_FLIGHTS":return Object(m.a)(Object(m.a)({},e),{},{departure:a.departure,arrival:a.arrival});default:return e}},S=(new Date).toISOString().split("T")[0].split("-").reverse().join("-"),T=function(){return(e=S,fetch("".concat("https://api.iev.aero/api/flights/").concat(e)).then((function(e){return e.json()}))).then((function(e){return e.body}));var e},D=Object(O.combineReducers)({loading:I,flights:g}),N=Object(O.createStore)(D,Object(h.composeWithDevTools)(Object(O.applyMiddleware)(v.a))),A=function(e){return e.flights};r(185);var _=function(){var e=Object(i.b)(),t=Object(i.c)(A);return Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"START_LOADING"}),e.prev=1,e.next=4,T();case 4:r=e.sent,t({type:"INIT_FLIGHTS",body:r}),t({type:"SET_LOADED"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(j(e.t0.message));case 12:t({type:"FINISH_LOADING"});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),n.a.createElement("div",{className:"App"},n.a.createElement(p.a,{className:"App-header",as:"h2"},"Second Header"),n.a.createElement("pre",null,n.a.createElement("ul",{className:"App-List"},t.departure.map((function(e){return n.a.createElement("li",{key:e.ID},n.a.createElement("code",{className:"App-Code"},JSON.stringify(e,["ID","term","status","gateNo","airportToID.city","actual","codeShareData","codeShare"],2)),s()(e.airline.en.about))})))))},L=function(){return n.a.createElement(i.a,{store:N},n.a.createElement(u.a,null,n.a.createElement(_,null)))};o.a.render(n.a.createElement(L,null),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.7a517c9d.chunk.js.map