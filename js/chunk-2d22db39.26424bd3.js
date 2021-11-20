(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22db39"],{f92b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{margin:"0 5em"}},[r("el-tabs",{attrs:{type:"card","tab-position":"right"}},[r("el-row",{attrs:{gutter:24}},[r("el-col",{staticStyle:{margin:"10px auto auto"},attrs:{span:12,xs:24,sm:24,md:24,lg:24,xl:24}},[r("div",{staticStyle:{margin:"0.6em 0"}},[r("el-button",{attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.openUpDialog()}}},[e._v("创建")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{prop:"id",label:"资源ID",width:"80"}}),r("el-table-column",{attrs:{prop:"name",label:"名称",width:"180"}}),r("el-table-column",{attrs:{prop:"price",label:"价格",width:"200"}}),r("el-table-column",{attrs:{prop:"owner",label:"归属人",fixed:""}}),r("el-table-column",{attrs:{label:"上传时间",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatTime")(t.row.createTime))+" ")]}}])}),r("el-table-column",{attrs:{label:"是否卖出",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{directives:[{name:"show",rawName:"v-show",value:t.row.purchased,expression:"scope.row.purchased"}]},[e._v(" 是 ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.row.purchased,expression:"!scope.row.purchased"}]},[e._v(" 否 ")])]}}])}),r("el-table-column",{attrs:{prop:"hash",label:"文件HASH"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.openGoDialog(t.row)}}},[e._v("购买")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.openDelDialog(t.row)}}},[e._v("下架")])]}}])})],1)],1)],1)],1),r("el-dialog",{attrs:{title:"信息上链",visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"资源名称"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"资源价格"}},[r("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}},[r("template",{slot:"append"},[e._v("tWei")])],2)],1),r("el-form-item",{attrs:{label:"文件哈希"}},[r("el-input",{model:{value:e.form.hash,callback:function(t){e.$set(e.form,"hash",t)},expression:"form.hash"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.upChain}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"提示",visible:e.delDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.delDialogVisible=t}}},[r("span",[e._v("只有管理员可以下架商品，是否继续？")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.delDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.delInfo()}}},[e._v("确 定")])],1)]),r("el-dialog",{attrs:{title:"资源信息",visible:e.goDialogVisible,width:"500px",center:""},on:{"update:visible":function(t){e.goDialogVisible=t}}},[r("el-descriptions",{attrs:{size:"medium",column:1,border:""}},[r("el-descriptions-item",{attrs:{label:"资源名称"}},[e._v(e._s(e.resource.name))]),r("el-descriptions-item",{attrs:{label:"资源价格"}},[e._v(e._s(e.resource.price)+" tETH ")]),r("el-descriptions-item",{attrs:{label:"文件哈希"}},[e._v(" "+e._s(e.resource.hash))]),r("el-descriptions-item",{attrs:{label:"拥有人"}},[e._v(e._s(e.resource.owner))]),r("el-descriptions-item",{attrs:{label:"账户余额"}},[e._v(e._s(e.resource.balance))])],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.goDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.goShop()}}},[e._v("购 买")])],1)],1),r("el-dialog",{attrs:{visible:e.dialogResultVisible,width:"35em",center:""},on:{"update:visible":function(t){e.dialogResultVisible=t}}},["成功提示"===e.info.title?r("el-result",{attrs:{icon:"success",title:e.info.title,subTitle:e.info.subTitle}},[r("template",{slot:"extra"},[r("el-link",{attrs:{type:"success",href:e.info.result,target:"_blank"}},[e._v("查看交易")])],1)],2):e._e(),"错误提示"===e.info.title?r("el-result",{attrs:{icon:"error",title:e.info.title,subTitle:e.info.subTitle}},[r("template",{slot:"extra"},[r("span",[e._v(e._s(e.info.result))])])],2):e._e()],1)],1)},a=[],i=r("1da1"),o=(r("96cf"),r("b0c0"),r("b680"),r("d3b7"),r("25f0"),r("ac1f"),r("5319"),r("469a")),s=r("53ca"),l=r("d4ec"),c=r("bee2"),u=(r("b64b"),function(){function e(){Object(l["a"])(this,e)}return Object(c["a"])(e,null,[{key:"isEmpty",value:function(e){switch(Object(s["a"])(e)){case"undefined":return!0;case"string":return 0===e.length;case"number":return 0===e;case"object":return null==e||(Array.isArray(e)?0===e.length:0===Object.keys(e).length)}}},{key:"callContract",value:function(e,t){return new Promise((function(r,n){e.on("transactionHash",(function(e){t({message:e,options:{key:(new Date).getTime()+Math.random(),variant:"success"},hash:e})})).on("receipt",(function(e){r(e)})).on("error",(function(e){n(e)})).catch((function(e){n(e)}))}))}},{key:"callContractEstimateGas",value:function(e,t){return new Promise(function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(n,a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.eth.estimateGas(t).then((function(e){n(e)})).catch((function(e){a(e)}));case 1:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())}}]),e}()),f="0x68F2C6010c61A9183bba345Db95a8F51446a4F6D";function p(e,t,r,n,a){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,a,i){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=new t.web3.eth.Contract(o["a"].Edu,f),e.next=3,h(s,t.web3,t.address,r,n,a,f);case 3:return e.abrupt("return",u.callContract(s.methods.createResource(r,n,a).send({from:t.address}),i));case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function h(e,t,r,n,a,i){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,a,i,o){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={from:n,to:f,data:t.methods.createResource(a,i,o).encodeABI()},e.abrupt("return",u.callContractEstimateGas(r,s));case 2:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function m(e,t,r,n){return b.apply(this,arguments)}function b(){return b=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=new t.web3.eth.Contract(o["a"].Edu,f),e.next=3,w(i,t,t.address,r,n);case 3:return e.abrupt("return",u.callContract(i.methods.purchaseResource(r).send({from:t.address,value:t.web3.utils.toWei(n,"ether")}),a));case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function w(e,t,r,n,a){return v.apply(this,arguments)}function v(){return v=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,a,i){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o={from:n,to:f,value:r.web3.utils.toWei(i,"ether"),data:t.methods.purchaseResource(a).encodeABI()},e.abrupt("return",u.callContractEstimateGas(r.web3,o));case 2:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function x(e,t,r){return y.apply(this,arguments)}function y(){return y=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new t.web3.eth.Contract(o["a"].Edu,f),e.next=3,R(a,t.web3,t.address,r,f);case 3:return e.abrupt("return",u.callContract(a.methods.deregisterEduResource(r).send({from:t.address}),n));case 4:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function R(e,t,r,n){return $.apply(this,arguments)}function $(){return $=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={from:n,to:f,data:t.methods.deregisterEduResource(a).encodeABI()},e.abrupt("return",u.callContractEstimateGas(r,i));case 2:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function _(e,t){return k.apply(this,arguments)}function k(){return k=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new t.web3.eth.Contract(o["a"].Edu,f),e.abrupt("return",n.methods.getResource(r).call({from:t.address}));case 2:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function O(e,t,r){return D.apply(this,arguments)}function D(){return D=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new t.web3.eth.Contract(o["a"].Edu,f),e.abrupt("return",a.methods.getAllInfo(r,n).call({from:t.address}));case 2:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function I(e,t){return E.apply(this,arguments)}function E(){return E=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.web3.eth.getBalance(r).then((function(e){n=e,console.log(e)}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}var S=r("4128"),C=r.n(S),V=1e18,j={data:function(){return{tableData:[],delId:0,goDialogVisible:!1,delDialogVisible:!1,centerDialogVisible:!1,dialogResultVisible:!1,form:{name:"",price:0,hash:""},resource:{name:"",price:0,hash:"",owner:"",balance:0},info:{title:"",result:"",subTitle:""},addressInfo:{current:{url:"",tx_url:""}}}},beforeDestroy:function(){clearInterval(this.timer)},filters:{toEther:function(e){var t=new C.a(e);return t.div(V).toPrecision(18)},formatTime:function(e){return new Date(1e3*parseInt(e)).toLocaleString("zh",{hour12:!1})}},methods:{openUpDialog:function(){this.centerDialogVisible=!0},upChain:function(){var e=this;this.verifyConnect()&&(this.centerDialogVisible=!1,this.$parent.loading=!0,this.$parent.flag1=!0,this.$parent.flag2=!1,this.$parent.flag3=!1,p(this.$store.state.wallet,this.form.name,this.form.price,this.form.hash,(function(t){e.$parent.url=e.addressInfo.current.tx_url+t.message,e.$parent.flag2=!0,e.$parent.flag1=!1,e.$parent.flag3=!1})).then((function(t){e.$parent.loading=!1,e.getSuccessInfo(e.$parent.url)})).catch((function(t){console.log("createResource error"),e.$parent.loading=!1,e.getErrorInfo(t)})))},openDelDialog:function(e){this.delDialogVisible=!0,this.delId=e.id},delInfo:function(e){var t=this;if(this.verifyConnect()){this.delDialogVisible=!1;var r=this.delId;0===r&&console.log("页面异常 请重新连接钱包"),this.$parent.loading=!0,this.$parent.flag1=!0,this.$parent.flag2=!1,this.$parent.flag3=!1,x(this.$store.state.wallet,r,(function(e){t.$parent.url=t.addressInfo.current.tx_url+e.message,t.$parent.flag2=!0,t.$parent.flag1=!1,t.$parent.flag3=!1})).then((function(e){t.$parent.loading=!1,t.getSuccessInfo(t.$parent.url)})).catch((function(e){console.log("deregisterEduResource error"),t.$parent.loading=!1,t.getErrorInfo(e)}))}},openGoDialog:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!(t.tableData.length>0)){r.next=7;break}return t.resource=e,r.t0=C.a,r.next=5,I(t.$store.state.wallet,t.$store.state.wallet.address);case 5:r.t1=r.sent,t.resource.balance=new r.t0(r.t1).div(C.a.pow(10,18)).toFixed(18,C.a.ROUND_DOWN);case 7:t.goDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},goShop:function(){var e=this;this.resource!=={}&&(this.$parent.loading=!0,this.$parent.flag1=!0,this.$parent.flag2=!1,this.$parent.flag3=!1,m(this.$store.state.wallet,this.resource.id,this.resource.price,(function(t){e.$parent.url=e.addressInfo.current.tx_url+t.message,e.$parent.flag2=!0,e.$parent.flag1=!1,e.$parent.flag3=!1})).then((function(t){e.$parent.loading=!1,e.getSuccessInfo(e.$parent.url)})).catch((function(t){console.log("purchaseResource error"),e.$parent.loading=!1,e.getErrorInfo(t)}))),this.goDialogVisible=!1},switchNetwork:function(){4===this.$store.state.wallet.networkId?this.addressInfo.current=o["b"].rinkeby:31337===this.$store.state.wallet.networkId?this.addressInfo.current=o["b"].hardhat:97===this.$store.state.wallet.networkId?this.addressInfo.current=o["b"].bsctest:(console.log("没有存在的信息"),this.$notify.error({title:"错误",message:"没有符合匹配的合约信息"}))},getSuccessInfo:function(e){this.updatePanel(),this.info.title="成功提示",this.info.result=e,this.dialogResultVisible=!0},getErrorInfo:function(e){if(console.log(e.toString()),4001===e.code)this.info.result="操作已取消";else if(-1!==e.toString().indexOf("Error: Internal JSON-RPC error.")){var t=JSON.parse(e.toString().replace("Error: Internal JSON-RPC error.",""));3===t.code?-1!==t.message.toString().indexOf("execution reverted: Status error")?this.info.result="状态错误，请到首页刷新重试":-1!==t.message.toString().indexOf("execution reverted: ERC20: transfer amount exceeds balance")||-1!==t.message.toString().indexOf("execution reverted: BEP20: transfer amount exceeds balance")?this.info.result="余额不足":-1!==t.message.toString().indexOf("execution reverted: ERC20: transfer amount exceeds allowance")||-1!==t.message.toString().indexOf("execution reverted: BEP20: transfer amount exceeds allowance")?this.info.result="授权额度不足或未授权":-1!==t.message.toString().indexOf("execution reverted: REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED")?this.info.result="还款余额计算错误，超出实际还款值":-1!==t.message.toString().indexOf("execution reverted: TransparentUpgradeableProxy: admin cannot fallback to proxy target")?this.info.result="管理员无法调用代理合约":this.info.result=t:this.info.result=t}else-1!==e.toString().indexOf("Error: execution reverted: not enough amount")||-1!==e.toString().indexOf("Error: execution reverted: not enough amount")?this.info.result="余额不足，不满足购买价格！":-1!==e.toString().indexOf("Error: execution reverted: not owner call")?this.info.result="资源拥有者不能购买自己的资源！":this.info.result=e.toString();this.info.title="错误提示",this.dialogResultVisible=!0},verifyConnect:function(){var e=this.$store.state.wallet;return!!e.connected||(this.$notify.error({title:"错误",message:"错误的网络：请使用正确网络"}),!1)},updatePanel:function(){this.getAllInfoPage()},getResourcePage:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,_(t.$store.state.wallet,e).then((function(e){n=e})).catch((function(e){t.getErrorInfo(e)}));case 2:return r.abrupt("return",n);case 3:case"end":return r.stop()}}),r)})))()},getAllInfoPage:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O(e.$store.state.wallet,0,50).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n,a,i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tableData=[],console.log("getAllInfo",r),n=0;case 3:if(!(n<r.length)){t.next=14;break}return a=r[n],t.next=7,e.getResourcePage(a);case 7:i=t.sent,o=new C.a(i.price).div(C.a.pow(10,18)).toFixed(18,C.a.ROUND_DOWN),s={id:a,name:i.name,price:o,owner:i.owner,purchased:i.purchased,createTime:i.createTime,hash:i.hash},e.tableData.push(s);case 11:n++,t.next=3;break;case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.getErrorInfo(t)}));case 2:case"end":return t.stop()}}),t)})))()}}},A=j,P=r("2877"),T=Object(P["a"])(A,n,a,!1,null,null,null);t["default"]=T.exports}}]);
//# sourceMappingURL=chunk-2d22db39.26424bd3.js.map