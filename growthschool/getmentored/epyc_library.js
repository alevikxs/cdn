!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.epyc=n():e.epyc=n()}(self,(function(){return(()=>{var e={981:(e,n)=>{n.basicPlan=[{planName:"basic",interest:"marketing",experience:"fresher",pricing:699},{planName:"basic",interest:"marketing",experience:"1-3",pricing:799},{planName:"basic",interest:"marketing",experience:"3-8",pricing:999},{planName:"basic",interest:"marketing",experience:"6-10",pricing:1299},{planName:"basic",interest:"marketing",experience:"10+",pricing:1499},{planName:"basic",interest:"tech",experience:"fresher",pricing:799},{planName:"basic",interest:"tech",experience:"1-3",pricing:999},{planName:"basic",interest:"tech",experience:"3-8",pricing:1299},{planName:"basic",interest:"tech",experience:"6-10",pricing:1499},{planName:"basic",interest:"tech",experience:"10+",pricing:1799},{planName:"basic",interest:"product",experience:"fresher",pricing:799},{planName:"basic",interest:"product",experience:"1-3",pricing:899},{planName:"basic",interest:"product",experience:"3-8",pricing:1199},{planName:"basic",interest:"product",experience:"6-10",pricing:1399},{planName:"basic",interest:"product",experience:"10+",pricing:1699},{planName:"basic",interest:"design",experience:"fresher",pricing:699},{planName:"basic",interest:"design",experience:"1-3",pricing:799},{planName:"basic",interest:"design",experience:"3-8",pricing:999},{planName:"basic",interest:"design",experience:"6-10",pricing:1299},{planName:"basic",interest:"design",experience:"10+",pricing:1499}],n.standardPlan=[{planName:"standard",interest:"marketing",experience:"fresher",pricing:1299},{planName:"standard",interest:"marketing",experience:"1-3",pricing:1699},{planName:"standard",interest:"marketing",experience:"3-8",pricing:1999},{planName:"standard",interest:"marketing",experience:"6-10",pricing:2499},{planName:"standard",interest:"marketing",experience:"10+",pricing:2999},{planName:"standard",interest:"tech",experience:"fresher",pricing:1499},{planName:"standard",interest:"tech",experience:"1-3",pricing:1799},{planName:"standard",interest:"tech",experience:"3-8",pricing:2399},{planName:"standard",interest:"tech",experience:"6-10",pricing:2899},{planName:"standard",interest:"tech",experience:"10+",pricing:3499},{planName:"standard",interest:"product",experience:"fresher",pricing:1499},{planName:"standard",interest:"product",experience:"1-3",pricing:1899},{planName:"standard",interest:"product",experience:"3-8",pricing:2399},{planName:"standard",interest:"product",experience:"6-10",pricing:2899},{planName:"standard",interest:"product",experience:"10+",pricing:3499},{planName:"standard",interest:"design",experience:"fresher",pricing:1299},{planName:"standard",interest:"design",experience:"1-3",pricing:1799},{planName:"standard",interest:"design",experience:"3-8",pricing:1999},{planName:"standard",interest:"design",experience:"6-10",pricing:2499},{planName:"standard",interest:"design",experience:"10+",pricing:2999}],n.bundlePlan=[{planName:"bundle",interest:"marketing",experience:"fresher",pricing:2999},{planName:"bundle",interest:"marketing",experience:"1-3",pricing:3999},{planName:"bundle",interest:"marketing",experience:"3-8",pricing:4999},{planName:"bundle",interest:"marketing",experience:"6-10",pricing:5999},{planName:"bundle",interest:"marketing",experience:"10+",pricing:6999},{planName:"bundle",interest:"tech",experience:"fresher",pricing:4999},{planName:"bundle",interest:"tech",experience:"1-3",pricing:5499},{planName:"bundle",interest:"tech",experience:"3-8",pricing:6499},{planName:"bundle",interest:"tech",experience:"6-10",pricing:7499},{planName:"bundle",interest:"tech",experience:"10+",pricing:9999},{planName:"bundle",interest:"product",experience:"fresher",pricing:4499},{planName:"bundle",interest:"product",experience:"1-3",pricing:4999},{planName:"bundle",interest:"product",experience:"3-8",pricing:5999},{planName:"bundle",interest:"product",experience:"6-10",pricing:6999},{planName:"bundle",interest:"product",experience:"10+",pricing:8999},{planName:"bundle",interest:"design",experience:"fresher",pricing:2999},{planName:"bundle",interest:"design",experience:"1-3",pricing:3999},{planName:"bundle",interest:"design",experience:"3-8",pricing:4999},{planName:"bundle",interest:"design",experience:"6-10",pricing:5999},{planName:"bundle",interest:"design",experience:"10+",pricing:6999}]},695:(e,n,i)=>{const{basicPlan:t,standardPlan:a,bundlePlan:r}=i(981);function c(e,n,i){const c=("basic"===e?t:"standard"===e?a:r).filter((t=>t.planName===e&&t.interest===n&&t.experience===i));return c.length?c[0]:{pricing:0}}function p(){const e=c("basic",$("#interested").val(),$("#experience").val()),n=c("standard",$("#interested").val(),$("#experience").val()),i=c("bundle",$("#interested").val(),$("#experience").val());let t=699;$("#basic").text(e.pricing),$("#muted-basic").text(parseInt(2.5*e.pricing)),0!==e.pricing&&(t=e.pricing),$("#starting-at-price").text(t),$("#muted-standard").text(parseInt(2.5*n.pricing)),$("#standard").text(n.pricing),$("#muted-advanced").text(parseInt(2.5*i.pricing)),$("#bundle").text(i.pricing)}["#interested","#experience"].forEach((e=>{$(e).on("change",p)}))}},n={};function i(t){var a=n[t];if(void 0!==a)return a.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,i),r.exports}return(()=>{i(695);let e=!1,n=!1;async function t(e=null,n="",i=""){const t=$("#Email").val(),a=$("#Phone").val();let r="https://webhooks.integrately.com/a/webhooks/9270f5bae3cf4bb68061bd191aa887de";const c={name:$("#name").val(),email:t,phone:a,experience:$("#experience").val(),mentorDesignation:$("#Mentor-Designation").val(),interest:$("#interested").val(),source:new URL(document.location.href).searchParams.get("category")};e&&(r="https://webhooks.integrately.com/a/webhooks/3d7c3d970d7c4fb8ac296166dd6f90c8",c.paymentID=e.razorpay_payment_id,c.plan=n,c.amount=i);await axios.post(r,c,{headers:{"Content-Type":"application/json"}})}function a(){e?($("#goback").text("Show Less"),$("#company-box").show(),$("#mentor-designation-box").show()):($("#goback").text("Show More"),$("#company-box").hide(),$("#mentor-designation-box").hide())}function r(){["#name","#Email","#Phone","#experience",".radio-btn","#Mentor-Designation","#interested"].forEach((e=>{let n;n=e.includes("radio-btn")?$("input[name='mentor']:checked").val():$(e).val(),localStorage.setItem(e,JSON.stringify(n))}))}$("#find-mentor").each((function(){$(this).css("display","none")})),$("#a50").attr("checked","checked"),$("#mentor-no-button").click(),$(".select-plan").each((function(){$(this).click((()=>{const e=$(this).attr("id"),n={name:"basic-buy"===e?"30 Minutes":"standard-buy"===e?"60 Minutes":"Bundle 4",value:"basic-buy"===e?$("#basic").text():"standard-buy"===e?$("#standard").text():$("#bundle").text()};!async function(e,n){const i={key:"rzp_test_GBMazddy3Sjg9e",amount:100*parseInt(n),name:e,description:e,async handler(i){await t(i,e,n);const a=new URL(document.location.href),r=a.searchParams.get("utm_source"),c=a.searchParams.get("area"),p=new URL(window.location.protocol+"//"+window.location.host+"/thank-you");p.searchParams.set("utm_source",r),p.searchParams.set("area",c),p.searchParams.set("plan",e),p.searchParams.set("amount",n),window.location.replace(p.href)},modal:{ondismiss(){}},prefill:{contact:$("#Phone").val(),email:$("#Email").val()}};new Razorpay(i).open()}(n.name,n.value)}))})),$("#wf-form-application").submit((function(e){r(),t(),e.preventDefault(),function(){$(".canbehidden").each((function(){$(this).css("display","none")})),$(".plan-area").each((function(){$(this).css("display","block")}));var e=$(".application-plan-separator").offset();$("html, body").animate({scrollTop:e.top+10,scrollLeft:e.left},1e3),$("#price-banner").hide(),a()}()})),$("#goback").click((function(){e=!e,a()})),$("input").each((function(){const e=$(this);e.on("input",(function(n){e.hasClass("filled-field")||""===n.target.value||"undefined"===n.target.value||void 0===n.target.value||e.toggleClass("filled-field")}))})),$("select").each((function(){const e=$(this);e.on("input",(function(n){e.hasClass("filled-field")||""===n.target.value||"undefined"===n.target.value||void 0===n.target.value||e.toggleClass("filled-field")}))}));const c=["name","Email","Phone","experience"];function p(){n?$("#mentor-designation-box").show():$("#mentor-designation-box").hide()}c.forEach((e=>{const n=$(`#${e}`);function i(e){let n=0;c.forEach((e=>{const i=$(`#${e}`).val();""!==i&&void 0!==i&&i&&(n+=1)})),4===n&&($(".initial-hide").each((function(){$(this).toggleClass("initial-hide")})),r())}n.on("input",(e=>{i()})),n.on("change",(e=>{i()}))})),$("#mentor-yes-button").click((function(){n=!0,p()})),$("#mentor-no-button").click((function(){n=!1,p()}))})(),{}})()}));