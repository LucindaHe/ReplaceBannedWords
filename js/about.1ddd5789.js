"use strict";(self["webpackChunkreplace_word"]=self["webpackChunkreplace_word"]||[]).push([[443],{1205:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=a(3396),s=a(7139),n=a(9242);const r={class:"ManageData"},o={class:"ManageData-bordered_table"},d=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"被和諧字"),(0,l._)("th",null,"取代字")])],-1),i={class:"horizontal_list"};function u(e,t,a,u,c,h){return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",null,[(0,l._)("table",o,[d,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.dataList,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("td",null,(0,s.zw)(e[0]),1),(0,l._)("td",null,(0,s.zw)(e[1]),1)])))),128))])]),(0,l._)("div",i,[(0,l.wy)((0,l._)("input",{class:"textSize",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>c.key=e),placeholder:"輸入被和諧字"},null,512),[[n.nr,c.key]]),(0,l.wy)((0,l._)("input",{class:"textSize",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>c.value=e),placeholder:"輸入取代字"},null,512),[[n.nr,c.value]]),(0,l._)("div",{onClick:t[2]||(t[2]=(...e)=>h.addData&&h.addData(...e))},"新增")])])])}var c=a(9897),h={name:"ManageData",components:{},data(){return{replaceWords:c,dataList:{},key:"",value:""}},mounted(){this.arrangeList()},methods:{arrangeList(){this.dataList=Object.entries(this.replaceWords)},addData(){console.log("test",this.key);let e={};e={[this.key]:this.value},console.log("source",e);let t={};t=this.dataList,console.log("target",t),this.replaceWords[this.key]=this.value,console.log("this.replaceWords",this.replaceWords),this.dataList=Object.entries(this.replaceWords)}}},p=a(89);const _=(0,p.Z)(h,[["render",u]]);var g=_}}]);
//# sourceMappingURL=about.1ddd5789.js.map