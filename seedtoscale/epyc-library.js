!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.epyc=t():e.epyc=t()}(self,(function(){return(()=>{var e={112:e=>{const t=window.location.hostname.endsWith("seedtoscale.com"),n=algoliasearch("W0HCW4Y865",t?"f2c7ec3b1f7450afc0769950d3a30c8d":"228db0a4c021c1d7eb641dc436635649"),a=t?"prod_":"dev_",i=`${a}CONTENT`,o=`${a}GUEST`,c=`${a}PEOPLE`,s=`${a}AUTHOR`,r=`${a}JOBS`,l=`${a}SPECIALIST`,d=`${i}_epochDate_desc`,p=function(e){e.search()};e.exports={searchClient:n,search:function(e=i,t=p,a=!1){return instantsearch({indexName:e,searchClient:n,searchFunction:t,routing:a})},getIndex:function(e=i){return n.initIndex(e)},searchFunctionDefault:p,routing:function(e){return{stateMapping:{stateToRoute(t){const n=t[e];return{q:n.query,page:n.page}},routeToState:t=>({[e]:{query:t.q,page:t.page}})}}},INDEX:i,GUEST_INDEX:o,PEOPLE_INDEX:c,AUTHOR_INDEX:s,JOBS_INDEX:r,LATEST_RESULT_INDEX:d,SPECIALIST_INDEX:l}},59:(e,t,n)=>{"use strict";n.r(t);var a=n(112),i=n(286);const o=e=>{const t=Object.assign({},{container:"#searchbox",placeholder:"Search blogs",cssClasses:{input:"list-search-field w-input"},showSubmit:!1,showReset:!1},e);return instantsearch.widgets.searchBox(t)},c=e=>{const t=Object.assign({},{hitsPerPage:10,clickAnalytics:!0,enablePersonalization:!0},e);return instantsearch.widgets.configure(t)},s=(e,t=i.checkbox)=>{const n={container:"#checkbox-filter-author",attribute:"Author",templates:{item:function({count:e,isRefined:n,label:a,value:i,highlighted:o,url:c}){const s=a.toLowerCase(),r=s.trim().replace(/ /g,"-");return t.replace(/{{id}}/g,s).replace(/{{url}}/g,c).replace(/{{count}}/g,e).replace(/{{label}}/g,a).replace(/{{labelSlug}}/g,`/tags/${r}`).replace(/{{value}}/g,i).replace(/{{isChecked}}/g,n?"w--redirected-checked":" ").replace(/{{checkedAttr}}/g,n?"checked":"")}}},a=Object.assign({},n,e);return instantsearch.widgets.refinementList(a)},r=function(e){const t=Object.assign({},{container:"#pagination",showFirst:!0,showPrevious:!0,showNext:!0,showLast:!0,padding:2,cssClasses:{root:"pagination",noRefinementRoot:"pagination-no-result",list:"pagination-list",item:"pagination-item",firstPageItem:"page-first",lastPageItem:"page-last",previousPageItem:"page-previous",nextPageItem:"page-next",pageItem:"page-item",selectedItem:"page-selected",disabledItem:"page-disabled",link:"page-list"}},e);return instantsearch.widgets.pagination(t)};function l(e,t,n="body-medium",a="medium-block"){const{articleLink:o,contentTypeIcon:c,contentType:s,title:r,authorImage:l,authorName:d,featuredImage:p,authorProfileLink:g,time:u,tags:m}=e;let h=p,f="blog"===s.toLowerCase()?"read":"",b=t.replace(/{{articleLink}}/g,o).replace(/{{contentTypeIcon}}/g,c).replace(/{{contentType}}/g,s).replace(/{{title}}/g,r).replace(/{{authorImage}}/g,l).replace(/{{authorName}}/g,d).replace(/{{authorProfile}}/g,g).replace(/{{featuredImage}}/g,h).replace(/{{readTime}}/g,u).replace(/{{readPrefix}}/g,f).replace(/{{titleClass}}/g,n).replace(/{{imageClass}}/g,a),v=m;if("string"==typeof m&&(v=m.trim().split("--")),v.length>2){const e=`+${v.length-2} more`;v=[v[0],v[2],e]}let y="";v.forEach((e=>{let t=i.tagTemplate.replace(/{{tag}}/g,e),n=e.toLowerCase().replace(/ /g,"-");n=`/tags/${n}`,e.endsWith("more")&&(n="#"),t=t.replace(/{{tagSlug}}/g,n),y+=t})),b=b.replace(/{{tags}}/g,y);let w="block",x="none";return b="PODCAST"!=s.toUpperCase()?b.replace(/podcastShow/g,x):b.replace(/podcastShow/g,w),b="VIDEO"!=s.toUpperCase()?b.replace(/videoShow/g,x):b.replace(/videoShow/g,w),b}const d=(e,t)=>l(e,0==t?i.contentGridItem:i.contentListItem,"body-normal","");function p(e){return function(e,t){const{container:n}=e;return instantsearch.connectors.connectHits(((e,a)=>{const{hits:i}=e;document.querySelector(n).innerHTML=`\n              ${i.map(((e,n)=>t(e,n))).join("")}\n          `}))}(e,d)}const g=(e,t)=>l(e,i.contentListItem);function u(e,t=g){return function(e,t=g){const{container:n}=e;return instantsearch.connectors.connectHits(((e,a)=>{const{hits:o,results:c}=e,s=c&&c.query&&0==o.length;document.querySelector(n).innerHTML=s?i.emptyScreenTemplate:`\n                ${o.map(((e,n)=>t(e,n))).join("")}\n            `}))}(e,t)}const m=(e,t)=>i.peopleCardTemplate.replace(/{{profileUrl}}/g,e.profileLink).replace(/{{image}}/g,e.image).replace(/{{name}}/g,e.name).replace(/{{designation}}/g,e.designation);function h(e,t=m){return instantsearch.connectors.connectInfiniteHits(((n,a)=>{const{hits:i,showPrevious:o,isFirstPage:c,showMore:s,isLastPage:r}=n,l=document.querySelector(e.container),d=document.querySelector(e.nextButtonSelector),p=document.querySelector(e.previousSelector);if(a)return p&&p.addEventListener("click",(()=>{o()})),void(d&&d.addEventListener("click",(()=>{s()})));p&&(p.disabled=c),d&&r&&(d.remove(),d.disabled=r),l.innerHTML=`\n            ${i.map(((e,n)=>t(e,n))).join("")}\n        `}))}const f=instantsearch.connectors.connectMenu(((e,t)=>{const{items:n,refine:a,createURL:o,isShowingMore:c,canToggleShowMore:s,toggleShowMore:r,widgetParams:l}=e;l.container.innerHTML=n.map((e=>{{const{count:t,isRefined:n,label:a,value:o,highlighted:c,url:s}=e;return i.podcastRadio.replace(/{{label}}/g,a).replace(/{{id}}/g,a.toLowerCase().replace(/ /g,"-")).replace(/{{isSelected}}/g,n?"w--redirected-checked":"")}})).join(""),[...l.container.querySelectorAll("label")].forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),a(e.currentTarget.dataset.value)}))}))}));function b(e="#hits"){const{pathname:t}=window.location;if(!t.startsWith("/content-hub"))return!1;const n=(0,a.search)(a.LATEST_RESULT_INDEX,a.searchFunctionDefault,(0,a.routing)(a.LATEST_RESULT_INDEX));n.addWidgets([o({container:"#algolia-content-search",placeholder:"Search content"}),c({hitsPerPage:6}),s({container:"#checkbox-filter-domain",attribute:"domain",limit:8,showMore:!0,showMoreLimit:30}),s({container:"#checkbox-filter-business",attribute:"businessFunction",limit:8,showMore:!0,showMoreLimit:30}),s({container:"#checkbox-filter-content-type",attribute:"contentType"}),u({container:e})(),r({container:"#algolia-pagination",scrollTo:e})]),n.start()}function v(e="#content-hub-grid-layout"){const{pathname:t}=window.location;if(!t.startsWith("/content-hub"))return!1;const n=(0,a.search)(a.LATEST_RESULT_INDEX);n.addWidgets([c({hitsPerPage:4,filters:"isFeatured:true"}),p({container:e})()]),n.start()}function y(e=".content-hub-hero-grid"){const{pathname:t}=window.location;if(!t.startsWith("/content/"))return!1;document.getElementsByClassName("content-hub-hero-grid")[0].innerHTML="";const n=(0,a.search)(),i=$(".content-author-name").text(),o=$(".related-domain").text(),s={businessFunction:$(".related-business-function").text(),domain:o,authorName:i,objectID:t};n.addWidgets([c({hitsPerPage:1}),instantsearch.widgets.index({indexName:a.INDEX}).addWidgets([instantsearch.widgets.EXPERIMENTAL_configureRelatedItems({hit:s,matchingPatterns:{domain:{score:3},businessFunction:{score:1},authorName:{score:2}}}),c({hitsPerPage:4}),p({container:e})()])]),n.start(),function(e=".content-trending-block .trending-now-block"){const t=(0,a.search)();t.addWidgets([c({hitsPerPage:6}),u({container:e},w)()]),t.start()}()}const w=(e,t)=>l(e,i.trendingContentItem);function x(){const{pathname:e}=window.location;if(!e.startsWith("/tags/"))return!1;const t=(0,a.search)(a.LATEST_RESULT_INDEX);t.addWidgets([c({hitsPerPage:6}),s({container:".sidebar-tag-list",attribute:"tags",sortBy:["count:desc"],limit:10},i.tagListTemplate)]),t.start(),window.clickTagLink=function(e){const t=$(e)[0].href;window.location.assign(t)}}function k(e){var t=$(e);if(t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}function T(){const e=document.querySelectorAll(".series-card-grid .w-dyn-item");for(var t=0;t<e.length;t++){const n=e[t],a=$(n).find(".filter-trigger-helper div").text();n.addEventListener("click",(()=>{$(`[data-value='${a}']`)[0].click(),k("#podcast-library")}))}}function L(e){const{pathname:t}=window.location;if(!t.startsWith("/podcast"))return!1;const n=(0,a.search)(a.LATEST_RESULT_INDEX,a.searchFunctionDefault,(0,a.routing)(a.LATEST_RESULT_INDEX));n.addWidgets([o({container:"#podcast-search",placeholder:"Search podcasts"}),c({hitsPerPage:10,filters:"contentType:Podcast"}),s({container:"#checkbox-filter-domain",attribute:"domain",limit:8,showMore:!0,showMoreLimit:30}),s({container:"#checkbox-filter-business",attribute:"businessFunction",limit:8,showMore:!0,showMoreLimit:30}),u({container:e})(),r({container:"#algolia-pagination",scrollTo:e}),f({container:document.querySelector("#podcast-series-tabs"),attribute:"seriesName",sortBy:["name:asc"]})]),n.start(),T()}function S(e=".grid-guest"){const{pathname:t}=window.location;if(!t.startsWith("/people"))return!1;document.querySelector(e).innerHTML="";const n=(0,a.search)(a.GUEST_INDEX);n.addWidgets([c({hitsPerPage:12}),h({container:e,nextButtonSelector:"#algolia-show-more"})()]),n.start()}function E(e){const{CompanyName:t,CompanyLogo:n,Department:a,JobTitle:o,JobDescription:c,Location:s,ApplyUrl:r}=e,l=JSON.parse(s)[0].Address;return i.jobCardTemplate.replace(/{{companyLogo}}/g,n).replace(/{{jobTitle}}/g,o).replace(/{{companyName}}/g,t).replace(/{{description}}/g,c).replace(/{{location}}/g,l).replace(/{{applyLink}}/g,r)}function I(e="#job-hits"){const{pathname:t}=window.location;if(!t.startsWith("/smartconnect"))return!1;const n=(0,a.search)(a.JOBS_INDEX);n.addWidgets([o({container:"#algolia-jobs-search",placeholder:"Search jobs",cssClasses:{input:"list-search-field w-input"}}),c({hitsPerPage:9}),s({container:"#checkbox-filter-company",attribute:"CompanyName",limit:5,showMore:!0}),s({container:"#checkbox-filter-department",attribute:"Department",limit:5,showMore:!0}),s({container:"#checkbox-filter-role",attribute:"AdditionalFields.Value"}),u({container:e},E)(),r({container:"#algolia-pagination",scrollTo:e})]),n.start(),document.querySelectorAll(".filter-group form").forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault(),e.stopPropagation()}))}))}function P(e){let t="";e.domain.forEach((e=>{t+=`\n        <div role="listitem" class="w-dyn-item">\n            <div class="directory-tag">${e}</div>\n        </div> \n        \n        `}));return i.specialistTemplate.replace(/{{image}}/g,e.image).replace(/{{name}}/g,e.name).replace(/{{designation}}/g,e.designation||"").replace(/{{domains}}/g,t).replace(/{{bio}}/g,e.bio||"").replace(/{{profileUrl}}/g,e.profileUrl)}function _(e=".directory-grid"){const{pathname:t}=window.location;if(!t.startsWith("/specialist"))return!1;document.querySelector(e).innerHTML="";const n=(0,a.search)(a.SPECIALIST_INDEX);n.addWidgets([c({hitsPerPage:8}),s({container:"#checkbox-filter-domain",attribute:"domain",sortBy:["domain:asc"],showMore:!0}),s({container:"#checkbox-filter-business",attribute:"businessFunction",sortBy:["businessFunction:asc"],showMore:!0}),u({container:e,nextButtonSelector:"#algolia-show-more"},P)(),r({container:"#algolia-pagination",scrollTo:e})]),n.start()}const N=(0,a.getIndex)(a.INDEX),C=(0,a.getIndex)(a.PEOPLE_INDEX),z=(0,a.getIndex)(a.JOBS_INDEX),D="https://assets.website-files.com/60116b861ab2dd465de2dfa3/6017c2bbe97688960d22e80c_blog-icon.svg",M="https://assets.website-files.com/60116b861ab2dd465de2dfa3/6017c830710fdfadb56ed42a_podcast-icon.svg",A="https://assets.website-files.com/60116b861ab2dd465de2dfa3/6017c821556ad8dffaebf159_video-icon.svg",j="https://uploads-ssl.webflow.com/600fd2daa260b77b88b8ac84/606cad88ed4007a2e18bacf9_people-search-icon.svg";function R(e,t,n,a,i,o){return{name:n.toLowerCase(),displayKey:a,source:(c=e,s={...t},(e,t)=>c.search(e,s).then((e=>t(e.hits,e))).catch((e=>t([],e)))),templates:{header:function(){return`\n                <div class="content-details-block search-detail-heading"><img\n                        src="${i}"\n                        loading="lazy" alt="" class="content-card-icon">\n                    <div class="content-detail-text capitalize-text search-heading">${n}</div>\n                </div>\n            \n            `},suggestion:o}};var c,s}function q(e){return`\n                    <a href="${e.articleLink}" class="search-result-text">\n                        ${e._highlightResult.title.value}\n                    </a>\n            \n                    `}function U(e){return`\n    <a href="${e.profileLink}" class="search-result-text">\n        <img src="${e.image}" class="content-profile-image" style="width:32px; height:32px" >\n        ${e._highlightResult.name.value}\n    </a>\n\n`}function O(e){return`\n    <a href="${e.ApplyUrl}" tareget="_blank" class="search-result-text">\n        ${e._highlightResult.JobTitle.value} - ${e._highlightResult.CompanyName.value}\n    </a>\n\n`}function W(e){return{hitsPerPage:3,filters:`contentType:${e}`}}function X(e="#global-search",t="left"){const n={hitsPerPage:3};autocomplete(e,{templates:{}},[R(N,W("Blog"),"Blogs","title",D,q),R(N,W("Podcast"),"Podcasts","title",M,q),R(N,W("Video"),"Videos","title",A,q),R(C,n,"People","name",j,U),R(z,n,"Jobs","Job.Title",j,O)]).on("autocomplete:selected",(function(e,t){const{profileLink:n,articleLink:a,ApplyUrl:i}=t;location.href=n||a||i})),function(e){const t=document.createElement("style");t.textContent=e,document.head.append(t)}("\n.algolia-autocomplete {\n    width: 100%;\n}\n.aa-dropdown-menu {\n  width: 450px;\n  max-width: 450px;\n  padding-right: 24px;\n  padding-bottom: 12px;\n  padding-left: 24px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.06);\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0 12px 16px 0 rgb(0 0 0 / 5%);\n  color: #200051;\n  right: 0 !important;\n  left: unset !important;\n}\n\n.hero-form-block .aa-dropdown-menu  {\n    left: 0 !important;\n    width: 400px;\n}\n.aa-dropdown-menu >div {\n  margin-top: 16px;\n  \n}\n.aa-suggestion:last-child {\n    padding-bottom: 16px;\n}\n.aa-cursor {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 767px) {\n  .aa-dropdown-menu {\n    left: 0 !important;\n    width: 335px;\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  .aa-dropdown-menu {    \n    width: 335px;\n  }\n}\n\n.aa-dropdown-menu >div:not(:last-child):not(:empty) {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n\n}\n\n.aa-dropdown-menu >div:empty + .aa-dropdown-menu >div:not(:empty) {\n    border-bottom: none;\n\n}\n\n.aa-dropdown-menu >div:not(:empty) ~ .aa-dropdown-menu >div:empty + .aa-dropdown-menu >div:not(:empty) {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n\n}\n.aa-dropdown-menu em{\n    font-weight: 600;\n    font-style: normal;\n}\n\n")}(0,a.getIndex)(a.AUTHOR_INDEX);const B=(0,a.getIndex)(a.PEOPLE_INDEX);function F(e){return{url:"#%QUERY",prepare:function(e,t){return t&&(t.query=e),t},cache:!1,transport:function(t,n,a){let i="";t&&t.query&&(i=t.query),e.search(i).then((function(e,t,a){n(e.hits)})).catch((function(e,t,n){a(n)}))}}}function H(e,t,n,a,i){return{name:t.toLowerCase(),display:n,source:e,templates:{suggestion:function(e){return`\n                    <a href="${e.profileLink}" class="search-result-text">\n                        <img src="${e.image}" class="content-profile-image" style="width:32px; height:32px" >\n                        ${e.name}\n                    </a>\n\n        `}}}}function J(e){const t={...F(e)};return new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,matchAnyQueryToken:!0,sufficient:5,remote:t,prefetch:t,identify:function(e){return e.objectID}})}function G(e){!function(e,t){$(e).typeahead({hint:!0,highlight:!0,limit:10},{...t[0]}),$(".twitter-typeahead").on("keyup",(function(e){if("Enter"==e.key)try{document.querySelector(".tt-suggestion").click()}catch(e){}}))}(e,[H(J(B),"People","name")])}function V(e="#search"){document.querySelector(e)&&(G(e),function(e){const t=document.createElement("style");t.textContent=e,document.head.append(t)}("\n.tt-menu {\n  width: 400px;\n  max-width: 400px;\n  padding-right: 24px;\n  padding-bottom: 12px;\n  padding-left: 24px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.06);\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0 12px 16px 0 rgb(0 0 0 / 5%);\n  color: #200051;\n  right: unset !important;\n  left: 0 !important;\n}\n\n.tt-dataset {\n  margin-top: 24px;\n}\n.tt-cursor {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 767px) {\n  .tt-menu {\n    left: 0 !important;;\n  }\n}\n\n"))}function Q(e){e.forEach((e=>{}))}function Y(){document.querySelector(".div-block-62");const e=new IntersectionObserver(Q,{rootMargin:"0px",threshold:0});document.querySelectorAll(".program-grid-section").forEach((t=>{e.observe(t)}))}function K(e,t,n,a){try{e(t,n,a)}catch(e){}}document.addEventListener("DOMContentLoaded",(function(e){window.epycLoaded||(K(b,"#hits"),K(v,"#content-hub-grid-layout"),K(y,".content-hub-hero-grid"),K(x),K(Y),K(S),K(L,"#podcast-hits"),K(X,"#global-search"),K(X,".hero-search-field"),K(V,"#search"),K(I),K(_,".directory-grid"),window.hasOwnProperty("epycLoaded")&&(window.epycLoaded=!0))}))},286:(e,t,n)=>{const a=n(174),i=n(122),o=n(997),c=n(598),s=n(416),r=n(42),l=n(98),d=n(539),p=n(235),g=n(200),u=n(889),m=n(318);e.exports={card:a,checkbox:i,contentGridItem:o,contentListItem:c,emptyScreenTemplate:s,jobCardTemplate:r,peopleCardTemplate:l,podcastRadio:d,specialistTemplate:p,tagTemplate:g,tagListTemplate:u,trendingContentItem:m}},174:e=>{e.exports='<a href="{{articleLink}}" class="content-list-card w-inline-block"> <div class="content-details-block"><img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div> <div class="content-list-card-grid"> <div> <div class="body-medium card-title">{{title}}</div> <div class="content-details-block"> <div class="content-profile-container"><img src="{{authorImage}}" loading="lazy" alt="" class="content-profile-image"> <div class="content-detail-text">{{authorName}}</div> </div> <div class="separator-dot"></div> <div class="content-detail-text capitalize-text">4&nbsp;Min&nbsp;Read</div> </div> <div class="tag-container"><img src="https://assets.website-files.com/600fd2daa260b77b88b8ac84/60102d6f84a92a1b9ad3f849_tag-icon.svg" loading="lazy" alt="" class="tag-icon"> <div class="tag">heathtech</div> <div class="tag">future</div> </div> </div> <div class="content-list-image-container medium-block"><img src="{{featuredImage}}" loading="lazy" alt="" class="content-list-image"> <div class="podcast-indicator big"></div> </div> </div> </a>'},122:e=>{e.exports='<a url="{{url}}" class="w-checkbox filter-row" for="{{id}}"> <div class="w-checkbox-input w-checkbox-input--inputType-custom filter-checkbox {{isChecked}}"> </div> <input type="checkbox" id="{{id}}" name="{{id}}" data-name="name-{{id}}" style="opacity:0;position:absolute;z-index:-1" value="&nbsp; {{label}}\n        {{checkedAttr}}\n        \n        "> <span class="body-small w-form-label">{{label}}</span> <div class="filter-number">{{count}}</div> </a> '},997:e=>{e.exports='<div style="-ms-grid-row:span 3;grid-row-start:span 3;-ms-grid-row-span:3;grid-row-end:span 3;-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1"> <div class="content-card content-hero"> <a href="{{articleLink}}" class="card-featured-image-container big w-inline-block"><img src="{{featuredImage}}" loading="lazy" alt="" class="card-featured-image"></a> <div class="card-content-container"> <div class="content-details-block"><img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div><a href="{{articleLink}}" class="w-inline-block"> <div class="body-large card-title">{{title}}</div> </a> <div class="content-details-block"><a href="{{authorProfile}}" class="content-profile-container w-inline-block"><img src="{{authorImage}}" loading="lazy" alt="" class="content-profile-image"> <div class="content-detail-text">{{authorName}}</div> </a> <div class="separator-dot"></div> <div class="content-detail-text capitalize-text">{{readTime}} {{readPrefix}}</div> </div> <div class="tag-container"><img src="https://assets.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc06c85b04c0_tag-icon.svg" loading="lazy" alt="" class="tag-icon"> <div class="w-dyn-list"> <div role="list" class="flex-horizontal tags w-dyn-items"> {{tags}} </div> </div> </div> </div> </div> </div>'},598:e=>{e.exports='<div class="content-list-card"> <div class="content-details-block"><img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div> <div class="content-list-card-grid"> <div><a href="{{articleLink}}" class="w-inline-block"> <div class="{{titleClass}} card-title">{{title}}</div> </a> <div class="content-details-block"> <a href="{{authorProfile}}" class="content-profile-container w-inline-block"> <img src="{{authorImage}}" loading="lazy" alt="" class="content-profile-image"> <div class="content-detail-text">{{authorName}}</div> </a> <div class="separator-dot"></div> <div class="content-detail-text capitalize-text">{{readTime}} {{readPrefix}}</div> </div> <div class="tag-container"><img src="https://assets.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc06c85b04c0_tag-icon.svg" loading="lazy" alt="" class="tag-icon"> <div class="w-dyn-list"> <div role="list" class="flex-horizontal tags w-dyn-items"> {{tags}} </div> </div> </div> </div> <a href="{{articleLink}}" class="content-list-image-container {{imageClass}} w-inline-block"><img src="{{featuredImage}}" loading="lazy" alt="" class="content-list-image"></a> </div> </div>'},416:e=>{e.exports='<div id="empty-state" class="styleguide-section"> <div class="styleguide-component"> <div class="empty-state"><img src="https://assets.website-files.com/600fd2daa260b77b88b8ac84/603ca7a64964824d08be9f19_empty-state-illustration.svg" loading="lazy" alt=""> <div class="empty-state-heading">No result to show</div> <div>We couldn\'t find what you\'re looking for</div> </div> </div> </div>'},42:e=>{e.exports='<div role="listitem" class="w-dyn-item"> <div class="job-card"> <div> <div class="job-card-logo-block"><img src="{{companyLogo}}" loading="lazy" alt="" class="job-card-logo"> </div> <div class="job-title">{{jobTitle}}</div> <p class="body-small">{{description}}</p> <div class="job-tag-container"> <div class="tag">{{location}}</div> </div> </div><a href="{{applyLink}}" target="_blank" class="button secondary-btn w-button">Apply Now</a> </div> </div>'},98:e=>{e.exports='<div role="listitem" class="w-dyn-item"> <a href="{{profileUrl}}" class="w-inline-block"><img src="{{image}}" loading="lazy" alt="" class="people-image"> <div class="body-normal people-name">{{name}}</div> <div class="body-small people-designation">{{designation}}</div> </a> </div>'},539:e=>{e.exports='<label class="podcast-tab-btn-container w-radio" data-value="{{label}}"> <div class="w-form-formradioinput w-form-formradioinput--inputType-custom button secondary-btn podcast-filter-copy w-radio-input {{isSelected}}"> </div> <input type="radio" data-name="Series" id="{{id}}" name="Series" value="{{label}}" required="" style="opacity:0;position:absolute;z-index:-1"> <span for="{{label}}" class="podcast-tab-btn-label w-form-label"> {{label}}</span> </label>'},235:e=>{e.exports='<div role="listitem" class="directory-item w-dyn-item"> <div class="directory-card"><img src="{{image}}" loading="lazy" alt="" class="directory-image"> <div class="name">{{name}}</div> <div class="directory-designatiion">{{designation}}</div> <div class="w-dyn-list"> <div role="list" class="tag-grid w-dyn-items"> {{domains}} </div> </div> <div class="text-block-34"> <div class="offering-text"> {{bio}} </div><img src="https://global-uploads.webflow.com/602eab59a790dc04e3805f3f/602f7592838b827bc07b2c88_directory-inverted-comma.svg" loading="lazy" alt="" class="directory-inverted-comma"> </div> </div><a href="{{profileUrl}}" class="link-overlay w-inline-block"></a> </div>'},200:e=>{e.exports='<div role="listitem" class="w-dyn-item" style="margin-bottom:9px"> <a href="{{tagSlug}}" class="tag">{{tag}}</a> </div>'},889:e=>{e.exports='<a href="{{labelSlug}}" target="_blank" class="tag tag-sidebar-link" onclick="window.clickTagLink(this)">{{label}}</a>'},318:e=>{e.exports='<div role="listitem" class="w-dyn-item"> <a href="{{articleLink}}" class="content-list-card w-inline-block"> <div class="content-details-block"> <img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div> <div class="card-title">{{title}}</div> </a> </div>'}},t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}return n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(59)})()}));
