(this.webpackJsonpggd_webapp=this.webpackJsonpggd_webapp||[]).push([[0],{100:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n,c,l,o,r=a(0),s=a.n(r),i=a(7),m=a.n(i),u=(a(84),a(85),a(31)),d=a(23),g=a(47),A=a(46),p=a(4),b=(a(86),a(14)),E=a(10),N=a(6),f=(a(145),a(150)),h=a(151),v=(a(146),a(152),a(58),a(72),a(57),a(87),a(141)),C=a(149),k=a(144),O=a(109),_=(a(63),function(e,t){return Math.floor(Math.random()*(t-e+1))+e}),x=function(){n=_(2,9),c=_(2,9)},B=[],S=[],y=[],w=[],j=[],I=[],D=0,R=0,M=function(){l=j.map((function(e){return s.a.createElement("li",{className:"result_listitem",style:{listStyle:"none",color:"blue"},key:D++},e)}))},T=function(){o=I.map((function(e){return s.a.createElement("li",{className:"result_listitem",style:{listStyle:"none",color:"red"},key:R++},e)}))},Q=0,G=function(){Q+=1},J=function(){Q=0},P=["monkey","mice","tiger","rabbit"];var U=function(e){var t=Object(r.useState)(""),i=Object(p.a)(t,2),m=i[0],u=i[1],d=Object(r.useState)(1),g=Object(p.a)(d,2),A=g[0],b=g[1],N=Object(r.useState)(""),f=Object(p.a)(N,2),h=f[0],_=f[1],D=Object(r.useState)("none"),R=Object(p.a)(D,2),U=R[0],V=R[1],Y=Object(r.useState)("none"),K=Object(p.a)(Y,2),X=K[0],H=K[1],W=Object(r.useState)(0),F=Object(p.a)(W,2),L=(F[0],F[1]),q=Object(r.useState)(!1),z=Object(p.a)(q,2),Z=z[0],$=z[1],ee=Object(r.useState)(3),te=Object(p.a)(ee,2),ae=te[0],ne=te[1],ce=Object(E.e)(),le=Object(v.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:216,height:166}}}))(),oe=function(){$(!0),ie()},re=function(){$(!1)},se=3,ie=function(){var e=setInterval((function(){1===se&&(clearInterval(e),re()),ne(se-=1)}),1e3)};return s.a.createElement("div",null,s.a.createElement("div",{className:"desc_box",style:{display:h}},s.a.createElement("button",{className:"Game_startBtn",onClick:function(e){_("none"),V(""),H("none"),x(),J(),L(1),oe()}},"\uc2dc\uc791\ud558\uae30")),s.a.createElement("div",{className:"gugudan_box",style:{display:U}},s.a.createElement(C.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:le.modal,open:Z,onClose:re,closeAfterTransition:!0,BackdropComponent:k.a,BackdropProps:{timeout:500}},s.a.createElement(O.a,{in:Z},s.a.createElement("div",{id:"Modal_box",className:le.paper},ae))),s.a.createElement("div",{className:"top_number"},"\ubb38\uc81c ",A),s.a.createElement("form",{className:"Form"},s.a.createElement("p",{className:"Game_text"},n," x ",c," =",s.a.createElement("input",{className:"InputBox",type:"text",value:m,onChange:function(e){return u(e.target.value)},onKeyPress:function(e){if("Enter"===e.key&&(e.preventDefault(),Number(m)===n*c?(b(A+1),console.log("".concat(Q,"\uc5d0\uc11c ")),G(),console.log("".concat(Q,"\ub85c \uc99d\uac00")),x(),u(""),j.push("".concat(n," x ").concat(c," = ").concat(n*c)),console.log("\uc815\ub2f5, \ud604\uc7ac \uc2a4\ucf54\uc5b4 ".concat(Q))):(b(A+1),x(),u(""),I.push("".concat(n," x ").concat(c," = ").concat(e.target.value)),console.log("\uc624\ub2f5")),10===Number(A))){console.log("\ub9de\uc74c".concat(Q," \ud2c0\ub9bc:").concat(A-Q)),V("none"),H(""),B.push(Q),localStorage.setItem("Totalscore",JSON.stringify(B));var t=new Date,a=t.getFullYear();S.push(a),localStorage.setItem("YearOfScore",JSON.stringify(S));var l=t.getMonth();y.push(l+1),localStorage.setItem("MonthOfScore",JSON.stringify(y));var o=t.getDate();w.push(o),localStorage.setItem("DateOfScore",JSON.stringify(w)),console.log(localStorage.getItem("Totalscore")),console.log(localStorage.getItem("YearOfScore")),console.log(localStorage.getItem("MonthOfScore")),console.log(localStorage.getItem("DateOfScore")),M(),T(),j=[],I=[]}}})),s.a.createElement("div",null,s.a.createElement("button",{id:"1",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"1"),s.a.createElement("button",{id:"2",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"2"),s.a.createElement("button",{id:"3",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"3")),s.a.createElement("div",null,s.a.createElement("button",{id:"4",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"4"),s.a.createElement("button",{id:"5",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"5"),s.a.createElement("button",{id:"6",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"6")),s.a.createElement("div",null,s.a.createElement("button",{id:"7",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"7"),s.a.createElement("button",{id:"8",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"8"),s.a.createElement("button",{id:"9",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"9")),s.a.createElement("div",null,s.a.createElement("button",{className:"Keypad_Btn Keypad_cancel",onClick:function(e){e.preventDefault(),u("")}},"\u3000"),s.a.createElement("button",{id:"0",className:"Keypad_Btn",onClick:function(e){e.preventDefault(),u(m+e.target.id)}},"0"),s.a.createElement("button",{className:"Keypad_Btn Keypad_check",onClick:function(e){if(e.preventDefault(),Number(m)===n*c?(b(A+1),console.log("".concat(Q,"\uc5d0\uc11c ")),G(),console.log("".concat(Q,"\ub85c \uc99d\uac00")),x(),u(""),j.push("".concat(n," x ").concat(c," = ").concat(n*c)),console.log("\uc815\ub2f5, \ud604\uc7ac \uc2a4\ucf54\uc5b4 ".concat(Q))):(b(A+1),x(),u(""),I.push("".concat(n," x ").concat(c," = ").concat(e.target.value)),console.log("\uc624\ub2f5")),10===Number(A)){console.log("\ub9de\uc74c".concat(Q," \ud2c0\ub9bc:").concat(A-Q)),V("none"),H(""),B.push(Q),localStorage.setItem("Totalscore",JSON.stringify(B));var t=new Date,a=t.getFullYear();S.push(a),localStorage.setItem("YearOfScore",JSON.stringify(S));var l=t.getMonth();y.push(l+1),localStorage.setItem("MonthOfScore",JSON.stringify(y));var o=t.getDate();w.push(o),localStorage.setItem("DateOfScore",JSON.stringify(w)),console.log(localStorage.getItem("Totalscore")),console.log(localStorage.getItem("YearOfScore")),console.log(localStorage.getItem("MonthOfScore")),console.log(localStorage.getItem("DateOfScore")),M(),T(),j=[],I=[]}}},"\u3000")))),s.a.createElement("div",{className:"G_result_box",style:{display:X}},s.a.createElement("p",{className:"result_text"},"\uc810\uc218"),s.a.createElement("p",{className:"result_score"},10*Q),s.a.createElement("div",{className:"G_cutline"}),s.a.createElement("div",{className:"G_cutline"}),s.a.createElement("div",{className:"RightWrong_Container"},s.a.createElement("div",{className:"Right_box"},Q," ",s.a.createElement("br",null),"\uc815\ub2f5"),s.a.createElement("div",{className:"Wrong_box"},10-Q," ",s.a.createElement("br",null),"\uc624\ub2f5")),s.a.createElement("div",{className:"result_problem"},s.a.createElement("div",{className:"result_rightPb"},l),s.a.createElement("div",{className:"result_wrongPb"},o)),s.a.createElement("div",{className:"result_Btn_div"},s.a.createElement("div",{className:"OnTablet_ResultScoreDiv"},s.a.createElement("img",{className:"OnTablet_ResultImg",src:a(34)("./".concat(P[e.idx],".png"))}),s.a.createElement("p",{className:"OnTablet_Resulttext1"},"\uc810\uc218"),s.a.createElement("p",{className:"OnTablet_Resulttext2"},10*Q),s.a.createElement("div",{className:"OnTablet_Cutline"}),s.a.createElement("div",{className:"OnTablet_Cutline"})),s.a.createElement("button",{className:"G_Result_Btn G_Result_Btn1",onClick:function(e){J(),b(1),u(""),V(""),H("none"),oe(),ce.push("/checkscore")}},"\uc131\uc801 \ud655\uc778\ud558\uae30"),s.a.createElement("button",{className:"G_Result_Btn",onClick:function(e){J(),b(1),u(""),V(""),H("none"),ce.push("/")}},"\ud648\uc73c\ub85c \uac00\uae30"))))};var V=function(e){return s.a.createElement("div",null,s.a.createElement(U,{Min:"2",Max:"9",idx:e.idx}))},Y=a(13),K=(a(97),[]),X=0;for(var H=function(){var e=Object(r.useState)(function(){K=[];var e=localStorage.getItem("Totalscore"),t=JSON.parse(e),a=localStorage.getItem("YearOfScore"),n=JSON.parse(a),c=localStorage.getItem("MonthOfScore"),l=JSON.parse(c),o=localStorage.getItem("DateOfScore"),r=JSON.parse(o);console.log(t),console.log(n),console.log(l),console.log(r);var s=[],i=0;t.length>5?i=t.length-5:t.length<=5&&(i=0);for(var m=t.length-1;m>=i;m--){10==t[m]?"\u3000\ud6cc\ub96d\ud574!":t[m]>=9?"\u3000\u3000\ud6cc\ub96d\ud574!":t[m]>=6?"\u3000\u3000\uc88b\uc544\uc694!":0==t[m]?"\u3000\u3000\u3000 \ubd84\ubc1c\ud574!":"\u3000\u3000\ubd84\ubc1c\ud574!";var u=n[m]+"."+l[m]+"."+r[m]+"\u3000\u3000"+10*t[m];s=[].concat(Object(Y.a)(s),[u]),K=[].concat(Object(Y.a)(K),[t[m]])}return console.log(s),s}()),t=Object(p.a)(e,2),a=t[0],n=(t[1],0),c=a.map((function(e){return s.a.createElement("li",{className:"Check_listitem",style:{listStyle:"none"},key:X++},e)})),l=K.map((function(e){return s.a.createElement("div",{className:"H"+10*K[n++]+" bar"})}));return s.a.createElement("div",null,s.a.createElement("div",{className:"wrapper"},l),s.a.createElement("div",{className:"wrapper2"},s.a.createElement("p",{className:"Score_Desc"},s.a.createElement("span",{className:"Desc_date"},"\ub0a0\uc9dc"),s.a.createElement("span",{className:"Desc_score"},"\uc810\uc218"),s.a.createElement("span",{className:"Desc_level"},"\uc218\uc900")),s.a.createElement("div",{className:"Score_table"},c)))},W=(a(98),[]),F=[],L=[],q=[],z=1;z<=5;z++){var Z="2 x "+z+" = "+2*z;W=[].concat(Object(Y.a)(W),[Z]),Z="2 x "+z,F=[].concat(Object(Y.a)(F),[Z])}for(var $=6;$<10;$++){var ee="2 x "+$+" = "+2*$;L=[].concat(Object(Y.a)(L),[ee]),ee="2 x "+$,q=[].concat(Object(Y.a)(q),[ee])}var te=0,ae=W.map((function(e){return s.a.createElement("li",{className:"showall_listitem",key:te++},e)})),ne=L.map((function(e){return s.a.createElement("li",{className:"showall_listitem",key:te++},e)})),ce=F.map((function(e){return s.a.createElement("li",{className:"showall_listitem",key:te++},e)})),le=q.map((function(e){return s.a.createElement("li",{className:"showall_listitem",key:te++},e)}));var oe,re=function(){var e=[],t=[],a=[],n=[],c=Object(r.useState)(ae),l=Object(p.a)(c,2),o=l[0],i=l[1],m=Object(r.useState)(ne),u=Object(p.a)(m,2),d=u[0],g=u[1],A=Object(r.useState)(ce),b=Object(p.a)(A,2),E=b[0],N=b[1],f=Object(r.useState)(le),h=Object(p.a)(f,2),v=h[0],C=h[1],k=Object(r.useState)("flex"),O=Object(p.a)(k,2),_=O[0],x=O[1],B=Object(r.useState)("none"),S=Object(p.a)(B,2),y=S[0],w=S[1],j=function(c){!function(c){for(var l=1;l<=5;l++){var o=c+" x "+l+" = "+c*l;a=[].concat(Object(Y.a)(a),[o]),o=c+" x "+l,e=[].concat(Object(Y.a)(e),[o])}for(var r=6;r<10;r++){var m=c+" x "+r+" = "+c*r;n=[].concat(Object(Y.a)(n),[m]),m=c+" x "+r,t=[].concat(Object(Y.a)(t),[m])}var u=0,d=a.map((function(e){return s.a.createElement("li",{className:"showall_listitem",key:u++},e)})),A=n.map((function(e){return s.a.createElement("li",{className:"showall_listitem",key:u++},e)})),p=e.map((function(e){return s.a.createElement("li",{className:"showall_listitem",key:u++},e)})),b=t.map((function(e){return s.a.createElement("li",{className:"showall_listitem",key:u++},e)}));i(d),g(A),N(p),C(b)}(c.target.id)},I=function(e){x("flex"),w("none")},D=function(e){x("none"),w("flex")};return Object(r.useEffect)((function(){console.log("D")})),s.a.createElement("div",{className:"Showall_Container"},s.a.createElement("div",{className:"showmodebtn_box"},s.a.createElement("button",{className:"showmode_btn",onClick:I},"\ub2f5\ubcf4\uae30"),s.a.createElement("button",{className:"showmode_btn",onClick:D},"\ub2f5\uac00\ub9ac\uae30")),s.a.createElement("div",{className:"ShowBox_BtnBox"},s.a.createElement("div",{className:"show_Box",style:{display:_}},s.a.createElement("ul",{className:"Showall_list"},o),s.a.createElement("ul",{className:"Showall_list"},d)),s.a.createElement("div",{className:"show_Box",style:{display:y}},s.a.createElement("ul",{className:"Showall_list"},E),s.a.createElement("ul",{className:"Showall_list"},v)),s.a.createElement("div",{className:"dan_btn_Container"},s.a.createElement("p",{className:"OnTablet_text"},"\uc678\uc6b0\uace0\uc790 \ud558\ub294 \uad6c\uad6c\ub2e8\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694!"),s.a.createElement("div",{style:{paddingLeft:"19px",paddingRight:"19px"}},s.a.createElement("button",{className:"dan_btn",id:"2",onClick:j},"2\ub2e8"),s.a.createElement("button",{className:"dan_btn",id:"3",onClick:j},"3\ub2e8"),s.a.createElement("button",{className:"dan_btn",id:"4",onClick:j},"4\ub2e8"),s.a.createElement("button",{className:"dan_btn",id:"5",onClick:j},"5\ub2e8")),s.a.createElement("div",{style:{paddingLeft:"19px",paddingRight:"19px"}},s.a.createElement("button",{className:"dan_btn",id:"6",onClick:j},"6\ub2e8"),s.a.createElement("button",{className:"dan_btn",id:"7",onClick:j},"7\ub2e8"),s.a.createElement("button",{className:"dan_btn",id:"8",onClick:j},"8\ub2e8"),s.a.createElement("button",{className:"dan_btn",id:"9",onClick:j},"9\ub2e8")),s.a.createElement("div",{className:"OnTablet"},s.a.createElement("button",{className:"showmode_btn",onClick:I},"\ub2f5\ubcf4\uae30"),s.a.createElement("button",{className:"showmode_btn",onClick:D},"\ub2f5\uac00\ub9ac\uae30")))))},se=(a(99),a(2)),ie=(a(100),a(56)),me=a(18),ue=(Object(me.b)(),1),de=[],ge=function(e){10===Number(e)?(oe=Ae(2,9),ue=Ae(2,9),(de=[(oe-1)*ue,oe*(ue-1),oe*ue,oe*(ue+1)]).sort((function(){return Math.random()-Math.random()}))):(de=[(oe-1)*ue,oe*(ue-1),oe*ue,oe*(ue+1)]).sort((function(){return Math.random()-Math.random()}))},Ae=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},pe=Object(v.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:260,height:270,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),be=s.a.forwardRef((function(e,t){var a=e.in,n=e.children,c=e.onEnter,l=e.onExited,o=Object(se.a)(e,["in","children","onEnter","onExited"]),r=Object(ie.useSpring)({from:{opacity:0},to:{opacity:a?1:0},onStart:function(){a&&c&&c()},onRest:function(){!a&&l&&l()}});return s.a.createElement(ie.animated.div,Object.assign({ref:t,style:r},o),n)})),Ee=0,Ne=0;var fe=function(e){var t=Object(r.useState)(""),a=Object(p.a)(t,2),n=(a[0],a[1]),c=Object(r.useState)(0),l=Object(p.a)(c,2),o=l[0],i=l[1],m=Object(r.useState)(0),u=Object(p.a)(m,2),d=u[0],g=u[1],A=Object(r.useState)(""),b=Object(p.a)(A,2),N=(b[0],b[1],Object(r.useState)("inline-block")),f=Object(p.a)(N,2),h=f[0],v=f[1],O=Object(r.useState)("none"),_=Object(p.a)(O,2),x=_[0],B=_[1],S=Object(r.useState)(""),y=Object(p.a)(S,2),w=y[0],j=y[1];oe=e.dan,"10"!==e.dan&&(ue=d+1);var I=pe(),D=s.a.useState(!1),R=Object(p.a)(D,2),M=R[0],T=R[1],Q=function(){T(!1)},G=function(t){Number(t.target.id)===oe*ue?(g(d+1),i(o+1),ge(e.dan),n(""),ue++,Ee++):(g(d+1),ge(e.dan),n(""),ue++,Ne++),9===d&&(v("none"),B(""),alert("\uac8c\uc784\ub05d\ub0ac\uc5c9"),ue=1,T(!0),j("none"),ue=1)};ge(e.dan);var J=Object(E.e)();return s.a.createElement("div",{className:"Game_choice_Container"},s.a.createElement("div",{className:"GH_gugudan_box",style:{display:h}},s.a.createElement("div",{className:"Problem_numberBox"},"\ubb38\uc81c ",d+1),s.a.createElement("p",{className:"text",style:{width:"100%"}},"\u3000\u3000\u3000",oe),s.a.createElement("p",{className:"text",style:{width:"100%"}},s.a.createElement("span",{className:"text",style:{width:"100%"}},s.a.createElement("span",{className:"text"},"X\u3000\u3000")," ",s.a.createElement("span",{className:"text text2"},ue))),s.a.createElement("div",{className:"cutline"}),s.a.createElement("div",{className:"OnMobile_ChoiceBox"},s.a.createElement("div",{className:"Choice_Line"},s.a.createElement("button",{className:"Answer_Btn",id:de[0],onClick:G},de[0]),s.a.createElement("button",{className:"Answer_Btn",id:de[1],onClick:G},de[1])),s.a.createElement("div",{className:"Choice_Line"},s.a.createElement("button",{className:"Answer_Btn",id:de[2],onClick:G},de[2]),s.a.createElement("button",{className:"Answer_Btn",id:de[3],onClick:G},de[3]))),s.a.createElement("div",{className:"OnTablet_AnswerBox"})),s.a.createElement("div",{className:"OnTablet_ChoiceBox",style:{display:w}},s.a.createElement("p",{className:"OnTablet_text"},"\ub2e4\uc74c \uc911\uc5d0 \uc54c\ub9de\uc740 \ub2f5\uc744 \uace0\ub974\uc138\uc694"),s.a.createElement("div",{className:"Choice_Line"},s.a.createElement("button",{className:"Answer_Btn",id:de[0],onClick:G},de[0]),s.a.createElement("button",{className:"Answer_Btn",id:de[1],onClick:G},de[1])),s.a.createElement("div",{className:"Choice_Line"},s.a.createElement("button",{className:"Answer_Btn",id:de[2],onClick:G},de[2]),s.a.createElement("button",{className:"Answer_Btn",id:de[3],onClick:G},de[3]))),s.a.createElement("div",{className:"result_box",style:{display:x}},s.a.createElement(C.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:I.modal,open:M,onClose:Q,closeAfterTransition:!0,BackdropComponent:k.a,BackdropProps:{timeout:500}},s.a.createElement(be,{in:M},s.a.createElement("div",{className:I.paper},s.a.createElement("p",{className:"Result_text"},"\ub9de\ud78c \ubb38\ud56d \uc218 : \u3000",s.a.createElement("span",{className:"Result_text2"},Ee)),s.a.createElement("p",{className:"Result_text"},"\ud2c0\ub9b0 \ubb38\ud56d \uc218 : \u3000",s.a.createElement("span",{className:"Result_text2"},Ne)),s.a.createElement("button",{className:"Result_Btn Result_Btn1",onClick:function(e){i(0),g(0),n(""),v("inline-block"),B("none"),ue=1,window.innerWidth>360&&j("inline-block"),Q(),Ee=0,Ne=0}},"\ub2e4\uc2dc\ud558\uae30"),s.a.createElement("button",{className:"Result_Btn",onClick:function(){i(0),g(0),n(""),ue=1,Ee=0,Ne=0,Q(),J.push("/")}},"\ud648\uc73c\ub85c \uac00\uae30"))))))},he=["monkey","mice","tiger","rabbit"];var ve=function(e){var t=Object(r.useState)(),n=Object(p.a)(t,2),c=n[0],l=n[1],o=Object(r.useState)(""),i=Object(p.a)(o,2),m=i[0],u=i[1],d=Object(r.useState)("none"),g=Object(p.a)(d,2),A=g[0],b=g[1],E=function(e){l(e.target.id),alert("".concat(e.target.id,"\ub2e8\uc744 \uc5f0\uc2b5\ud569\ub2c8\ub2e4.")),b(""),u("none")};return s.a.createElement("div",{className:"Practice_Container"},s.a.createElement("div",{style:{display:A}},s.a.createElement(fe,{dan:c})),s.a.createElement("div",{style:{display:m}},s.a.createElement("div",{className:"Practice_imgbox"},s.a.createElement("img",{className:"Practice_img",src:a(34)("./".concat(he[e.idx],".png"))})),s.a.createElement("p",{className:"Practice_text"},"\uc5f0\uc2b5\ud558\uace0\uc790 \ud558\ub294 \uad6c\uad6c\ub2e8\uc744 \uc120\ud0dd\ud558\uc138\uc694"),s.a.createElement("div",{className:"Practice_Btn_Line",style:{paddingLeft:"20px",paddingRight:"5px"}},s.a.createElement("button",{className:"Practice_Btn",id:"2",onClick:E},"2\ub2e8"),s.a.createElement("button",{className:"Practice_Btn",id:"3",onClick:E},"3\ub2e8"),s.a.createElement("button",{className:"Practice_Btn",id:"4",onClick:E},"4\ub2e8"),s.a.createElement("button",{className:"Practice_Btn",id:"5",onClick:E},"5\ub2e8")),s.a.createElement("div",{className:"Practice_Btn_Line",style:{paddingLeft:"20px",paddingRight:"5px"}},s.a.createElement("button",{className:"Practice_Btn",id:"6",onClick:E},"6\ub2e8"),s.a.createElement("button",{className:"Practice_Btn",id:"7",onClick:E},"7\ub2e8"),s.a.createElement("button",{className:"Practice_Btn",id:"8",onClick:E},"8\ub2e8"),s.a.createElement("button",{className:"Practice_Btn",id:"9",onClick:E},"9\ub2e8")),s.a.createElement("button",{className:"Practice_Btn2",id:"10",onClick:E},"\ubaa8\ub450")))};a(104);var Ce=function(e){var t=Object(r.useState)(""),n=Object(p.a)(t,2),c=(n[0],n[1],localStorage.getItem("Nickname")),l=Object(E.e)();return console.log(e),console.log("\uc5ec\uae30\ub294 Homepage \uc774\uace0 Navibar2\ub85c \ubd80\ud130 \ubc1b\uc740 \uc774\ubbf8\uc9c0 index = ".concat(e.idx)),s.a.createElement("div",{className:"Homepage_Container"},s.a.createElement("div",{className:"Homepage_ImgBox"},s.a.createElement("img",{className:"Homepage_img",src:a(34)("./".concat(["monkey","mice","tiger","rabbit"][e.idx],".png"))})),s.a.createElement("div",{className:"Homepage_BtnBox"},s.a.createElement("button",{className:"Homepage_Btn",id:"1",type:"button",onClick:function(){return l.push("/showall")}},"\uad6c\uad6c\ub2e8 \ud45c"),s.a.createElement("button",{className:"Homepage_Btn",id:"2",type:"button",onClick:function(){return l.push("/practice")}},"\uc5f0\uc2b5 \ud558\uae30"),s.a.createElement("button",{className:"Homepage_Btn",id:"3",type:"button",onClick:function(){return l.push("/easytest")}},"\uc2dc\ud5d8 \ubcf4\uae30"),s.a.createElement("button",{className:"Homepage_Btn",id:"4",type:"button",onClick:function(){return l.push("/checkscore")}},c,"\uc758 \uc131\uc801 \ud655\uc778\ud558\uae30")))};Object(N.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return s.a.createElement(f.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),Object(N.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(h.a);a(105);var ke=a(147),Oe=a(153),_e=a(148),xe=a(73),Be=a.n(xe),Se=(a(106),["monkey","mice","tiger","rabbit"]),ye=function(e){Object(g.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleDrawerToggle=function(e){a.setState({toggle:!a.state.toggle,toptitle:e.target.name}),a.setcolor()},a.setcolor=function(){0===a.props.imgidx||2===a.props.imgidx?a.setState({naviColor:"#87CEEB"}):a.setState({naviColor:"#F0A7B4"})},a.state={toggle:!1,toptitle:"",naviColor:"#1E7CDE"},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;console.log("\ud604\uc7ac Navibar\uc774\uace0 , Main\uc73c\ub85c \ubd80\ud130 \ubc1b\uc740 index \ub294 ".concat(this.props.imgidx," \uc774\ub2e4."));var t=this.props.classes,n=this.state.toptitle;return s.a.createElement(b.a,{basename:"/ggd_webapp"},s.a.createElement("div",{className:t.root},s.a.createElement(ke.a,{className:"Top_bar",position:"static",style:{display:"block",backgroundColor:"#1E7CDE"}},s.a.createElement(_e.a,{className:t.menuButton,id:"hamburgerMenu",color:"inherit",onClick:this.handleDrawerToggle},s.a.createElement(Be.a,{className:"hamburgeIcon"})),s.a.createElement("p",{className:"Top_bar_text",style:{display:"inline-block",marginLeft:"auto",marginRight:"auto"}},n)),s.a.createElement(Oe.a,{open:this.state.toggle},s.a.createElement("div",{className:"navibar_body",style:{backgroundColor:this.state.naviColor}},s.a.createElement("div",{className:"Navi_Xbtn",onClick:this.handleDrawerToggle}),s.a.createElement("div",{className:"Navibar_imgbox"},s.a.createElement("img",{className:"Navibar2_img",src:a(34)("./".concat(Se[this.props.imgidx],".png"))})),s.a.createElement(h.a,{onClick:this.handleDrawerToggle},s.a.createElement(b.b,{name:"\ud648",className:"linkitem linkitem1",to:"/"},"\ud648\ud398\uc774\uc9c0")),s.a.createElement(h.a,{id:"\uad6c\uad6c\ub2e8 \ud45c",onClick:this.handleDrawerToggle},s.a.createElement(b.b,{name:"\uad6c\uad6c\ub2e8\ud45c \ubcf4\uae30",className:"linkitem",to:"/showall"},"\uad6c\uad6c\ub2e8 \ud45c")),s.a.createElement(h.a,{id:"\uc5f0\uc2b5 \ud558\uae30",onClick:this.handleDrawerToggle},s.a.createElement(b.b,{name:"\uc5f0\uc2b5 \ud558\uae30",className:"linkitem",to:"/practice"},"\uc5f0\uc2b5 \ud558\uae30")),s.a.createElement(h.a,{id:"\uc2dc\ud5d8 \ubcf4\uae30",onClick:this.handleDrawerToggle},s.a.createElement(b.b,{name:"\uc2dc\ud5d8 \ubcf4\uae30",className:"linkitem",to:"/easytest"},"\uc2dc\ud5d8 \ubcf4\uae30")),s.a.createElement(h.a,{id:"\uc131\uc801 \ud655\uc778",onClick:this.handleDrawerToggle},s.a.createElement(b.b,{name:"\uc131\uc801 \ud655\uc778",className:"linkitem",to:"/checkscore"},this.props.name,"\uc758 \uc131\uc801 \ud655\uc778"))))),s.a.createElement("div",{style:{textAlign:"center",width:"100%"}},s.a.createElement(E.a,{exact:!0,path:"/",render:function(){return s.a.createElement(Ce,{idx:e.props.imgidx})}}),s.a.createElement(E.a,{path:"/showall",component:re}),s.a.createElement(E.a,{path:"/practice",render:function(){return s.a.createElement(ve,{idx:e.props.imgidx})}}),s.a.createElement(E.a,{path:"/easytest",render:function(){return s.a.createElement(V,{idx:e.props.imgidx})}}),s.a.createElement(E.a,{path:"/checkscore",component:H})))}}]),n}(s.a.Component),we=Object(N.a)({root:{flexGrow:1},menuButton:{marginRight:"auto"}})(ye),je=(a(65),a(64),a(66),a(67),a(52),a(53),0);null!=localStorage.getItem("Nickname")&&console.log("\uc788\ub2e4\uc774\ubbf8");var Ie=function(e){Object(g.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={registerInput:"",registerDP:"",choiceDP:"none",CurrentImgIndex:0},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"register",style:{display:this.state.registerDP}},s.a.createElement("div",{className:"Main_ImgBox"},s.a.createElement("div",{className:"forVertical"},s.a.createElement("img",{className:"changeImg",onClick:function(){0===je?(e.setState({CurrentImgIndex:3}),je=3):(e.setState({CurrentImgIndex:e.state.CurrentImgIndex-1}),je-=1)},src:a(52)})),s.a.createElement("img",{className:"Mainpage_img",src:a(34)("./".concat(["monkey","mice","tiger","rabbit"][this.state.CurrentImgIndex],".png"))}),s.a.createElement("div",{className:"forVertical"},s.a.createElement("img",{className:"changeImg",onClick:function(){3===je?(e.setState({CurrentImgIndex:0}),je=0):(e.setState({CurrentImgIndex:e.state.CurrentImgIndex+1}),je+=1)},src:a(53)}))),s.a.createElement("p",{className:"Mainpage_text"},"\uce90\ub9ad\ud130\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),s.a.createElement("input",{className:"Main_InputBox",type:"text",value:this.state.registerInput,placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",onChange:function(t){e.setState({registerInput:t.target.value})}}),s.a.createElement("button",{className:"Main_registerBtn",onClick:function(){""===e.state.registerInput?alert("\ub2c9\ub124\uc784\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694!"):(e.setState({registerDP:"none",choiceDP:"grid"}),localStorage.setItem("Nickname",e.state.registerInput))}},"\ub4f1\ub85d\ud558\uae30")),s.a.createElement("div",{className:"choice",style:{display:this.state.choiceDP}},s.a.createElement(we,{name:this.state.registerInput,imgidx:je})))}}]),n}(s.a.Component);var De=function(){return s.a.createElement(s.a.StrictMode,null,s.a.createElement(Ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,a){var n={"./Cancel.png":93,"./Check.png":94,"./Clockimg.png":63,"./Clockimg_smal.png":95,"./Xbtn.png":96,"./leftArrow.png":52,"./mice.png":64,"./monkey.png":65,"./rabbit.png":66,"./rightArrow.png":53,"./tiger.png":67};function c(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=l,e.exports=c,c.id=34},52:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAiCAYAAABFlhkzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJHSURBVHgBtVevj+JAGJ3SAitOIFecQJxYcRAgISArV65EkgAJfxG/1MmTlUjkJhBScaKyEok4AeHXvrfpbKZsF9pp9yXAzLR933xv3jdThPgGDAaDGj9sGyJDdLvdh3w+3zEMo8z+5XJxLJERQP5YKBQ6aJbU8UwC9Pv9di6Xs9F8kGPoLyaTiZtaol6v92yaZlv2z+fzDuTObDbz2NcOAElK0PtF6h2Qb4/H4x9gK8e0JAJ5GXq/iLDeLsjnIN+p9ybOIND7WR2DRPPxePwadX/sALQgiKh3TY5REsuyHCym/9VzsQJQ72Kx2IGvH+UY2pvD4fBX1VsrQKA3/f1hQSzs63Q6nYsYuBkAetuBv99BC8I5i6/0jh0gKHla8EkhpwUpyUYkgBVBXoIkXaFYEHr7AflOJEQoAHdAzJoWDOmNqoyl980ALHmQhUoemcxHo5ErUsC43mID8k8lrwvUiVVTyQGST3T0jkIOAa5dwaKymZnIAOZqtdo2m03/dDqVkYkk/Ykt4XelUvFc102VickvBqlWqx5IGUBuB9x72vV6XazXa19o4lOhRVmVdYB9x9FZdPN6ALPdQJp/rGIpGX5LyOap0WjseF0kwM29aDgc2rCsHXoAhbff7xdxXWbeuoi18Vutlgfb/tI1gHnvhuVy+T+NARIdmToGuJuBCmkAnBGsmR/vM7xjAO3XlrgGSJSBChoA2biqnUWEAbQDECSBAVyQUq5IA2T2dk0DYMF5hqsnoZMqAxVcYNpZNQDgie+A+gfkDXJnKG6QvkqBAAAAAElFTkSuQmCC"},53:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAiCAYAAABFlhkzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJBSURBVHgBtVcpj8JAGJ2hyyFWIBErkAggQJaArESuRJJwhF8EhCAqkUgkkgRCKpEVK5AIBOHc97EtGWDoCS/pMV/p9/W9eXPAGNBsNnN0sDeAU2LO+Q81zufzar/fDzVNW7MXIXRTjfNEJBKpvZINp1O73VZPp5N690zf7XZjsNmyAFDoNJ/PjUwmo4NBCkfMfJZQFCWN+FLXdd9FFOuGkmSzWf0DQPPLDMdQpJzP59lisTCYD3BZkPoAHa6GQqG4FfNrAEUWxNeuwGaJAglIdimC6yfY5AqFwoaesyAMRNgYYOKGjeL0AxsDpEqlkjGbzTaBClw+94kBwOzbyQCOEt1DZgBgDck0mWSuGIiQGYD921lqAM8MRLgxgGcGIuwMUCwWV3i+DsTAQq1Wi0WjURV9UxbjkFELxMACXHYAk1+wSAtM2PF4XH2wFwAM4jTN41acWozD4aAHLmAuWBXcXr8c7Wm/3x/TfaAC9Xq9gmRX3eGoLZiMO52Ofi3GfIA6NRwOV5E8KSRfQ5KHweaZAZLTslplt3ovkXwkW/08MWg0GmVYT2WC3mhPer3e5Nk7rhmQ3kh2ozfmviGSG3bvOTIgC2IQVSFDwop5Wd24Q/Ik9KY9kzhzetptPC1g6l0RY5hjxt1ud8o84KEAWRCJKjT9WjGyIPQeOentWODZkIfeI7/byauLWq1WChfSWzrk/eJSAHqruKhWkCyIkTrxqre0gDlZqUJyGvLDwWDgeu9jW0BsmFPsMOiG9wHv/APyB7l9O3wsigb6AAAAAElFTkSuQmCC"},63:function(e,t,a){e.exports=a.p+"static/media/Clockimg.5adaf917.png"},64:function(e,t,a){e.exports=a.p+"static/media/mice.2e6d331c.png"},65:function(e,t,a){e.exports=a.p+"static/media/monkey.de7d8b29.png"},66:function(e,t,a){e.exports=a.p+"static/media/rabbit.3d07b642.png"},67:function(e,t,a){e.exports=a.p+"static/media/tiger.14ad9867.png"},79:function(e,t,a){e.exports=a(107)},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},93:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACXSURBVHgBrdSBCYAgEAVQN63NajNHcAH1pyYS4Xn/qOBAUh8K/3Tuzw/AhpxDKV/Hn/a2Qc4YRYIdwqOC6zIs4ASq5R1i3CcTIihAqM69gARVaCxUQBoiwMMEqaAVokEWGqB0tfLfCm3Lk7GdokIsKEIpnSZQyxHdKWwgVdCa7CVYu92aIwGcPEFkICfgeIJ8Q43Jfu+9ACL7O4MAv4+LAAAAAElFTkSuQmCC"},94:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC1SURBVHgBrdRREYAwCABQZgIjGMFGVrCBVjCCCYxgBCNoA22AcDfv5m4bcMrdzjkGPH8E+DMQsaN10tp5/6nWb57gRK1s1MS1FZ2HxbzvQRf8FU3wfvGEEd8h6hIqjpETtW/wTpSbDdH9nQc8SbUuqwouqHVFVXBJ1Ikqi06l0ujUKo3OpBJ0rUkl6DazqqBDs0rQiaoqdeicu+gxpUfBTPkDLJHRZVVZWUFnV0W6xatWFH5NN3fLdRcEW803AAAAAElFTkSuQmCC"},95:function(e,t,a){e.exports=a.p+"static/media/Clockimg_smal.d51870ed.png"},96:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgBtdbREYIwDADQjOAIjOAIjuAGuoFuoBvoBriJIzBCR+CTOyDEBhEqpFDa0rt8SGMfpaEFYINGRDuqqsP0IuKV6voMgY3Kck9Nk+sgHtNE3u1FDqIbeDb931MPfEOZncro8II6gP4C8Tkk8KMaJ6yALMBrmqjXwwdanIEThJjOABch/w6Ld+YI8Sy9AFcoGOgHMuvdgKIBs1BMwAmKAfQQ4kNAFG9HEKOJazBEFgzpAeQZjH8XRQI+TQPpBODSJkqiQDbA6A+DBCCXzhlvSAR0Cc/ku0PtyciVsgJYDfkCzhAf+CHACMrEF7brDK95sDz231eLrp4j70MhgAVSMca0Y7wM3ZbzAVT+yDfKjRbLAAAAAElFTkSuQmCC"},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.bdf910cd.chunk.js.map