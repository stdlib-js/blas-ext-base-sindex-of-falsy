"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=t(function(h,v){
function l(e,r,i,c){var s,a;if(e<=0)return-1;for(s=c,a=0;a<e;a++){if(!r[s])return a;s+=i}return-1}v.exports=l
});var o=t(function(k,f){
var p=require('@stdlib/strided-base-stride2offset/dist'),O=n();function F(e,r,i){return O(e,r,i,p(e,i))}f.exports=F
});var x=t(function(w,d){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),m=n();j(q,"ndarray",m);d.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),b=x(),u,y=_(R(__dirname,"./native.js"));E(y)?u=b:u=y;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
