(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{243:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var s=n(12),a=n.n(s),r=n(31),o=n.n(r),i=n(32),c=n.n(i),u=n(33),l=n.n(u),j=n(34),f=n.n(j),d=n(23),h=n.n(d),m=n(59),p=n(2),y=n.n(p),b=n(7),g=n(25),v=n(8),k=n(241),w=n(3),z=n.n(w),O=n(26),E=O.a.get("window").width;O.a.get("window").height;function x(){return y.a.createElement(v.a,{style:C.container},y.a.createElement(g.a,null,z()("20210325","YYYYMMDD").fromNow()),y.a.createElement(m.StatusBar,{style:"auto"}))}var C=b.a.create({container:{width:E/4,height:E/4,borderRadius:E/4,backgroundColor:"#ff6b6b",alignItems:"center",justifyContent:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5},bubble:{}}),D=n(236),R=n.n(D),I=n(242);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return f()(this,n)}}O.a.get("window").width,O.a.get("window").height;var S=function(e){l()(n,e);var t=P(n);function n(e){var s;return o()(this,n),(s=t.call(this,e)).state={mounted:!1},s}return c()(n,[{key:"componentDidMount",value:function(){return R.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({mounted:!0});case 1:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){return y.a.createElement(v.a,{style:T.container},y.a.createElement(I.a,{animation:"tada",iterationCount:"infinite",iterationDelay:3e3},y.a.createElement(x,null)))}}]),n}(y.a.Component),T=b.a.create({container:{top:80,left:10,alignItems:"center",alignContent:"center",justifyContent:"center",position:"absolute",zIndex:5,backgroundColor:"rgba(52, 52, 52, 0.0)"}}),A=n(240),H=n(68),M=n(22),Y=function(e){var t=e.title;return y.a.createElement(v.a,{style:J.item},y.a.createElement(g.a,{style:J.title},t))},J=b.a.create({container:{flex:1,marginTop:M.a.currentHeight||0},item:{backgroundColor:"#ffe66d",borderRadius:5,flex:1,justifyContent:"center",padding:10,marginVertical:8,marginHorizontal:16,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5},title:{fontSize:16}}),K=function(e){return y.a.createElement(A.a,{style:J.container},y.a.createElement(H.a,{data:e.DATA,renderItem:function(e){var t=e.item;return y.a.createElement(Y,{title:t.sentence})},keyExtractor:function(e){return e.id},numColumns:3}))},L=(n(264),n(76)),N=L.a.initializeApp({apiKey:"AIzaSyA0jJ2G394ZpuJjXWy1E7uI9YWmhT5agVE",authDomain:"admatai-d8eac.firebaseapp.com",databaseURL:"https://admatai-d8eac.firebaseio.com",projectId:"admatai-d8eac",storageBucket:"admatai-d8eac.appspot.com",messagingSenderId:"602766630887",appId:"1:602766630887:web:fd09800b70ddc7cddea742",measurementId:"G-XP33PK8F4V"});L.a.analytics();var U=N.database();function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return f()(this,n)}}var q=function(e){l()(n,e);var t=W(n);function n(){var e;return o()(this,n),(e=t.call(this)).state={textHolder:"",data:["hold"]},e}return c()(n,[{key:"componentDidMount",value:function(){var e=this;U.ref("/sentences").on("value",(function(t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.val()?t.val():{}),s=[];Object.keys(n).map((function(e,t){s.push(n[e])})),console.log(s),e.setState({data:s})}))}},{key:"render",value:function(){var e=this;return y.a.createElement(v.a,{style:B.container},y.a.createElement(v.a,{style:B.header},y.a.createElement(g.a,{style:{fontSize:80,fontWeight:"bold"}},"\u05d0\u05d5\u05d2 18 \u05e2\u05d3 \u05de\u05ea\u05d9?!"),y.a.createElement(k.a,{style:{backgroundColor:"#fff",justifyContent:"center",paddingLeft:20,borderRadius:5},ref:function(t){e.textInput=t},placeholder:"\u05e2\u05d3 \u05de\u05ea\u05d9? \u05ea\u05e0\u05d5 \u05dc\u05d9 \u05d7\u05d9\u05d6\u05d5\u05e7\u05d9\u05dd",keyboardType:"default",returnKeyType:"next",onChangeText:function(t){return e.setState({textHolder:t})},onSubmitEditing:function(){e.textInput.clear()},onKeyPress:function(t){"Enter"==t.nativeEvent.key&&U.ref("/sentences").push({sentence:e.state.textHolder})}})),y.a.createElement(K,{DATA:this.state.data}),y.a.createElement(S,{style:{position:"absolute",zIndex:5}}))}}]),n}(y.a.Component),B=b.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},header:{backgroundColor:"#4ecdc4",padding:10,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5}})},244:function(e,t,n){e.exports=n(269)},249:function(e,t,n){var s={"./af":83,"./af.js":83,"./ar":84,"./ar-dz":85,"./ar-dz.js":85,"./ar-kw":86,"./ar-kw.js":86,"./ar-ly":87,"./ar-ly.js":87,"./ar-ma":88,"./ar-ma.js":88,"./ar-sa":89,"./ar-sa.js":89,"./ar-tn":90,"./ar-tn.js":90,"./ar.js":84,"./az":91,"./az.js":91,"./be":92,"./be.js":92,"./bg":93,"./bg.js":93,"./bm":94,"./bm.js":94,"./bn":95,"./bn-bd":96,"./bn-bd.js":96,"./bn.js":95,"./bo":97,"./bo.js":97,"./br":98,"./br.js":98,"./bs":99,"./bs.js":99,"./ca":100,"./ca.js":100,"./cs":101,"./cs.js":101,"./cv":102,"./cv.js":102,"./cy":103,"./cy.js":103,"./da":104,"./da.js":104,"./de":105,"./de-at":106,"./de-at.js":106,"./de-ch":107,"./de-ch.js":107,"./de.js":105,"./dv":108,"./dv.js":108,"./el":109,"./el.js":109,"./en-au":110,"./en-au.js":110,"./en-ca":111,"./en-ca.js":111,"./en-gb":112,"./en-gb.js":112,"./en-ie":113,"./en-ie.js":113,"./en-il":114,"./en-il.js":114,"./en-in":115,"./en-in.js":115,"./en-nz":116,"./en-nz.js":116,"./en-sg":117,"./en-sg.js":117,"./eo":118,"./eo.js":118,"./es":119,"./es-do":120,"./es-do.js":120,"./es-mx":121,"./es-mx.js":121,"./es-us":122,"./es-us.js":122,"./es.js":119,"./et":123,"./et.js":123,"./eu":124,"./eu.js":124,"./fa":125,"./fa.js":125,"./fi":126,"./fi.js":126,"./fil":127,"./fil.js":127,"./fo":128,"./fo.js":128,"./fr":129,"./fr-ca":130,"./fr-ca.js":130,"./fr-ch":131,"./fr-ch.js":131,"./fr.js":129,"./fy":132,"./fy.js":132,"./ga":133,"./ga.js":133,"./gd":134,"./gd.js":134,"./gl":135,"./gl.js":135,"./gom-deva":136,"./gom-deva.js":136,"./gom-latn":137,"./gom-latn.js":137,"./gu":138,"./gu.js":138,"./he":139,"./he.js":139,"./hi":140,"./hi.js":140,"./hr":141,"./hr.js":141,"./hu":142,"./hu.js":142,"./hy-am":143,"./hy-am.js":143,"./id":144,"./id.js":144,"./is":145,"./is.js":145,"./it":146,"./it-ch":147,"./it-ch.js":147,"./it.js":146,"./ja":148,"./ja.js":148,"./jv":149,"./jv.js":149,"./ka":150,"./ka.js":150,"./kk":151,"./kk.js":151,"./km":152,"./km.js":152,"./kn":153,"./kn.js":153,"./ko":154,"./ko.js":154,"./ku":155,"./ku.js":155,"./ky":156,"./ky.js":156,"./lb":157,"./lb.js":157,"./lo":158,"./lo.js":158,"./lt":159,"./lt.js":159,"./lv":160,"./lv.js":160,"./me":161,"./me.js":161,"./mi":162,"./mi.js":162,"./mk":163,"./mk.js":163,"./ml":164,"./ml.js":164,"./mn":165,"./mn.js":165,"./mr":166,"./mr.js":166,"./ms":167,"./ms-my":168,"./ms-my.js":168,"./ms.js":167,"./mt":169,"./mt.js":169,"./my":170,"./my.js":170,"./nb":171,"./nb.js":171,"./ne":172,"./ne.js":172,"./nl":173,"./nl-be":174,"./nl-be.js":174,"./nl.js":173,"./nn":175,"./nn.js":175,"./oc-lnc":176,"./oc-lnc.js":176,"./pa-in":177,"./pa-in.js":177,"./pl":178,"./pl.js":178,"./pt":179,"./pt-br":180,"./pt-br.js":180,"./pt.js":179,"./ro":181,"./ro.js":181,"./ru":182,"./ru.js":182,"./sd":183,"./sd.js":183,"./se":184,"./se.js":184,"./si":185,"./si.js":185,"./sk":186,"./sk.js":186,"./sl":187,"./sl.js":187,"./sq":188,"./sq.js":188,"./sr":189,"./sr-cyrl":190,"./sr-cyrl.js":190,"./sr.js":189,"./ss":191,"./ss.js":191,"./sv":192,"./sv.js":192,"./sw":193,"./sw.js":193,"./ta":194,"./ta.js":194,"./te":195,"./te.js":195,"./tet":196,"./tet.js":196,"./tg":197,"./tg.js":197,"./th":198,"./th.js":198,"./tk":199,"./tk.js":199,"./tl-ph":200,"./tl-ph.js":200,"./tlh":201,"./tlh.js":201,"./tr":202,"./tr.js":202,"./tzl":203,"./tzl.js":203,"./tzm":204,"./tzm-latn":205,"./tzm-latn.js":205,"./tzm.js":204,"./ug-cn":206,"./ug-cn.js":206,"./uk":207,"./uk.js":207,"./ur":208,"./ur.js":208,"./uz":209,"./uz-latn":210,"./uz-latn.js":210,"./uz.js":209,"./vi":211,"./vi.js":211,"./x-pseudo":212,"./x-pseudo.js":212,"./yo":213,"./yo.js":213,"./zh-cn":214,"./zh-cn.js":214,"./zh-hk":215,"./zh-hk.js":215,"./zh-mo":216,"./zh-mo.js":216,"./zh-tw":217,"./zh-tw.js":217};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=249}},[[244,1,2]]]);
//# sourceMappingURL=app.562eb3e8.chunk.js.map