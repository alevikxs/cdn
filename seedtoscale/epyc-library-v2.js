!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.epyc=t():e.epyc=t()}(self,(function(){return(()=>{var e={112:e=>{const t=window.location.hostname.endsWith("seedtoscale.com"),a=algoliasearch("W0HCW4Y865",t?"f2c7ec3b1f7450afc0769950d3a30c8d":"c6406c204f86c60ac97bfbd2c9fdc817"),i=t?"prod_":"dev_",n=`${i}CONTENT`,s=`${i}GUEST`,o=`${i}AUTHOR`,c=`${i}JOBS`,l=`${i}SPECIALIST`,r=`${i}COMPANY`,d=`${n}_epochDate_desc`,p="people",g=function(e){return`${t?"production":"development"}_v2_${e}`},u=g("content"),m=`${u}_epochDate_desc`,f=g(p),v=function(e){e.search()};e.exports={searchClient:a,search:function(e=u,t=v,i=!1){return instantsearch({indexName:e,searchClient:a,searchFunction:t,routing:i})},getIndex:function(e=n){return a.initIndex(e)},searchFunctionDefault:v,routing:function(e){return{stateMapping:{stateToRoute(t){const a=t[e]||{};return{q:a.query,page:a.page,seriesName:(i="seriesName",a.menu&&a.menu[i])};var i},routeToState:t=>({[e]:{query:t.q,page:t.page,menu:{seriesName:t.seriesName}}})}}},INDEX:n,CONTENT_INDEX:u,CONTENT_LATEST_INDEX:m,GUEST_INDEX:s,PEOPLE_INDEX:f,AUTHOR_INDEX:o,JOBS_INDEX:c,COMPANIES_INDEX:r,LATEST_RESULT_INDEX:d,SPECIALIST_INDEX:l}},142:(e,t,a)=>{"use strict";a.r(t);var i=a(112),n=a(286);const s=e=>{const t=Object.assign({},{container:"#searchbox",placeholder:"Search blogs",cssClasses:{input:"list-search_field w-input"},showSubmit:!1,showReset:!1},e);return instantsearch.widgets.searchBox(t)},o=e=>{const t=Object.assign({},{hitsPerPage:10,clickAnalytics:!0,enablePersonalization:!0},e);return instantsearch.widgets.configure(t)},c=(e,t=n.checkbox)=>{const a={container:"#checkbox-filter-author",attribute:"Author",templates:{item:function({count:e,isRefined:a,label:i,value:n,highlighted:s,url:o}){const c=i.toLowerCase(),l=c.trim().replace(/ /g,"-");return t.replace(/{{id}}/g,c).replace(/{{url}}/g,o).replace(/{{count}}/g,e).replace(/{{label}}/g,i).replace(/{{labelSlug}}/g,`/tags/${l}`).replace(/{{value}}/g,n).replace(/{{isChecked}}/g,a?"is-filter-selected":" ").replace(/{{checkedAttr}}/g,a?"checked":"")}}},i=Object.assign({},a,e);return $(i.container).empty(),instantsearch.widgets.refinementList(i)};const l=(e,t)=>function(e,t,a="body-medium",i="medium-block"){const{name:n,slug:s,count:o,image:c,contentType:l}=e;let{articleLink:r,contentTypeIcon:d,title:p,authorImage:g,authorName:u,featuredImage:m,authorProfileLink:f,time:v,tags:h}=e;p=n,m=c&&c.url?c.url:"",r=`/${l}/${s}`.toLocaleLowerCase();let b=e["meta-description"]||"",y=m,w=l&&"blog"===l.toLowerCase()?"read":"",T=t.replace(/{{articleLink}}/g,r).replace(/{{shortDescription}}/g,b).replace(/{{contentTypeIcon}}/g,d).replace(/{{contentType}}/g,l).replace(/{{title}}/g,p).replace(/{{authorImage}}/g,g).replace(/{{authorName}}/g,u).replace(/{{authorProfile}}/g,f).replace(/{{featuredImage}}/g,y).replace(/{{readTime}}/g,v).replace(/{{readPrefix}}/g,w).replace(/{{titleClass}}/g,a).replace(/{{imageClass}}/g,i),x="block",k="none";return l&&(T="PODCAST"!=l.toUpperCase()?T.replace(/podcastShow/g,k):T.replace(/podcastShow/g,x),T="VIDEO"!=l.toUpperCase()?T.replace(/videoShow/g,k):T.replace(/videoShow/g,x)),T}(e,n.contentListItem);function r(e,t=l){return function(e,t=l){const{container:a}=e;return instantsearch.connectors.connectHits(((e,i)=>{const{hits:s,results:o}=e,c=o&&o.query&&0==s.length;document.querySelector(a).innerHTML=c?n.emptyScreenTemplate:`\n                ${s.map(((e,a)=>t(e,a))).join("")}\n            `}))}(e,t)}const d=l,p=(e,t)=>n.peopleCardTemplate.replace(/{profileUrl}/g,e.profileLink).replace(/{image}/g,e.image.url).replace(/{name}/g,e.name).replace(/{designation}/g,e.designation);function g(e,t=p){return instantsearch.connectors.connectInfiniteHits(((a,i)=>{const{hits:n,showPrevious:s,isFirstPage:o,showMore:c,isLastPage:l}=a,r=document.querySelector(e.container),d=document.querySelector(e.nextButtonSelector),p=document.querySelector(e.previousSelector);if(i)return p&&p.addEventListener("click",(()=>{s()})),void(d&&d.addEventListener("click",(()=>{c()})));p&&(p.disabled=o),d&&l?d.style.display="none":d&&!l&&(d.style.display="flex"),r.innerHTML=`\n            ${n.map(((e,a)=>t(e,a))).join("")}\n        `}))}instantsearch.connectors.connectMenu(((e,t)=>{const{items:a,refine:i,createURL:s,isShowingMore:o,canToggleShowMore:c,toggleShowMore:l,widgetParams:r}=e;r.container.innerHTML=a.map((e=>{{const{count:t,isRefined:a,label:i,value:s,highlighted:o,url:c}=e;return n.podcastRadio.replace(/{{label}}/g,i).replace(/{{id}}/g,i.toLowerCase().replace(/ /g,"-")).replace(/{{isSelected}}/g,a?"w--redirected-checked":"")}})).join(""),[...r.container.querySelectorAll("label")].forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),i(e.currentTarget.dataset.value)}))}))}));var u=a(404);function m(e="#hits"){const{pathname:t}=window.location;if(!t.startsWith("/content-hub"))return!1;const a=(0,i.search)(i.CONTENT_LATEST_INDEX,i.searchFunctionDefault,(0,i.routing)(i.CONTENT_LATEST_INDEX));a.addWidgets([o({hitsPerPage:12,enablePersonalization:!1,filters:"is_active:true"}),c({container:"#checkbox-filter-domain",attribute:"domain",sortBy:["domain:asc"],limit:50}),c({container:"#checkbox-filter-business",attribute:"business-function",sortBy:["business-function:asc"],limit:50}),c({container:"#checkbox-filter-content-type",attribute:"contentType",sortBy:["contentType:asc"],limit:50}),(0,u.customCurrentRefinements)({container:"#algolia-current-refinements"}),g({container:e,nextButtonSelector:"#show-more-algolia"},d)()]),a.start();document.getElementById("algolia-current-refinements").style.display="none"}function f(e="page"){const t={searchBox:`#search-results-box-${e}`,peopleList:`#search-results-people-${e}`,result:`#search-results-content-${e}`};if(!$(t.searchBox).length)return!1;const a=(0,i.search)(i.CONTENT_INDEX,i.searchFunctionDefault,(0,i.routing)(i.CONTENT_INDEX));a.addWidgets([s({container:t.searchBox,cssClasses:{input:"search-popup_input-field w-input"},placeholder:"Search articles, podcasts or people"}),o({hitsPerPage:12,enablePersonalization:!1}),r({container:t.result})(),instantsearch.widgets.index({indexName:i.PEOPLE_INDEX}).addWidgets([g({container:t.peopleList})()])]),a.start()}function v(){function e(e,t){e.addEventListener("click",(e=>{e&&(e.preventDefault(),e.stopPropagation());$(`[data-value='${t}']`)[0].click(),function(e){var t=$(e);if(t.length)$("html,body").animate({scrollTop:t.offset().top},1e3)}("#podcast-library")}))}const t=document.querySelectorAll(".series-card-flex .w-dyn-item");for(var a=0;a<t.length;a++){const i=t[a];e(i,$(i).find(".filter-trigger-helper div").text())}const i=document.querySelectorAll("#footer-podcast-series .footer-link");for(a=0;a<i.length;a++){const t=i[a],n=t.href;e(t,new URL(n).searchParams.get("seriesName"))}}function h(e){const{pathname:t}=window.location;if(!t.startsWith("/podcast"))return!1;const a=(0,i.search)(i.CONTENT_LATEST_INDEX,i.searchFunctionDefault,(0,i.routing)(i.CONTENT_LATEST_INDEX));$("#checkbox-filter-series").empty(),a.addWidgets([o({hitsPerPage:10,enablePersonalization:!1,filters:"contentType:Podcast"}),c({container:"#checkbox-filter-series",attribute:"series",sortBy:["series:asc"]}),g({container:e,nextButtonSelector:"#show-more-algolia"},d)()]),a.start(),v()}function b(e=".grid-guest"){const{pathname:t}=window.location;if("/people"!=t)return!1;document.querySelector(e).innerHTML="";const a=(0,i.search)(i.PEOPLE_INDEX);a.addWidgets([s({container:".list-search_form-component",placeholder:"Search People"}),o({hitsPerPage:12,enablePersonalization:!1}),g({container:e,nextButtonSelector:"#show-more-algolia",templates:{empty:(e,{html:t})=>t`No results for <q>${e.query}</q>`}})()]),a.start()}function y(e="#hits"){const{pathname:t}=window.location;if(!t.startsWith("/people/"))return!1;const a=(0,i.search)(i.CONTENT_INDEX,i.searchFunctionDefault,(0,i.routing)(i.CONTENT_INDEX)),n=t.split("/"),s=n[n.length-1];a.addWidgets([o({hitsPerPage:10,enablePersonalization:!1,filters:`people_slug:${s}`}),g({container:e,nextButtonSelector:"#show-more-algolia"},d)()]),a.start()}function w(e,t,a,i){try{e(t,a,i)}catch(e){}}document.addEventListener("DOMContentLoaded",(function(e){window.epycLoaded||(w(m,".content-hub_2-col-grid"),w(f,"page"),w(f,"nav"),w(b,"#people-list-algolia"),w(y,"#people-contribution-algolia"),w(h,"#podcast-list-algolia"),window.hasOwnProperty("epycLoaded")&&(window.epycLoaded=!0))}))},286:(e,t,a)=>{const i=a(174),n=a(122),s=a(997),o=a(711),c=a(416),l=a(42),r=a(98),d=a(539),p=a(235),g=a(200),u=a(889),m=a(318),f=a(393);e.exports={card:i,checkbox:n,contentGridItem:s,contentListItem:o,emptyScreenTemplate:c,jobCardTemplate:l,peopleCardTemplate:r,podcastRadio:d,specialistTemplate:p,tagTemplate:g,tagListTemplate:u,trendingContentItem:m,companyItemTemplate:f}},404:e=>{const{connectCurrentRefinements:t}=instantsearch.connectors,a=e=>`\n  <li class='filter_option-row'>\n    ${{domain:"Domain","business-function":"Business Function",contentType:"Content Type"}[e.label]}:\n    <ul class="display-inlineflex reset-ul">\n      ${e.refinements.map((e=>`\n            <a href="#" class="filter_button is-filter-selected w-button" style="position: relative;">\n                ${e.label}\n                <button style="\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    top: 0;\n                    left: 0;\n                    opacity: 0;\n                " \n                ${(e=>Object.keys(e).map((t=>`data-${t}="${e[t]}"`)).join(" "))(e)}>X</button>\n            </a>\n            `)).join("")}\n    </ul>\n  </li>\n`,i=t(((e,t)=>{const{items:i,refine:n,widgetParams:s}=e,o=$(s.container)[0];o.innerHTML=`\n    <style>\n     .reset-ul {\n        padding-left: 0;\n        margin-bottom: 0;\n    } \n    .reset-ul li {\n        list-style: none;\n    }\n    </style>\n    \n    <ul class="display-inlineflex reset-ul">\n      ${i.map(a).join("")}\n    </ul>\n  `;const c=[...o.querySelectorAll("button")];c.length?o.style.display="block":o.style.display="none",c.forEach((e=>{e.addEventListener("click",(e=>{const t=Object.keys(e.currentTarget.dataset).reduce(((t,a)=>({...t,[a]:e.currentTarget.dataset[a]})),{});n(t)}))}))}));e.exports={customCurrentRefinements:i}},174:e=>{e.exports='<a href="{{articleLink}}" class="content-list-card w-inline-block"> <div class="content-details-block"><img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div> <div class="content-list-card-grid"> <div> <div class="body-medium card-title">{{title}}</div> <div class="content-details-block"> <div class="content-profile-container"><img src="{{authorImage}}" loading="lazy" alt="" class="content-profile-image"> <div class="content-detail-text">{{authorName}}</div> </div> <div class="separator-dot"></div> <div class="content-detail-text capitalize-text">4&nbsp;Min&nbsp;Read</div> </div> <div class="tag-container"><img src="https://assets.website-files.com/600fd2daa260b77b88b8ac84/60102d6f84a92a1b9ad3f849_tag-icon.svg" loading="lazy" alt="" class="tag-icon"> <div class="tag">heathtech</div> <div class="tag">future</div> </div> </div> <div class="content-list-image-container medium-block"><img src="{{featuredImage}}" loading="lazy" alt="" class="content-list-image"> <div class="podcast-indicator big"></div> </div> </div> </a>'},122:e=>{e.exports=' <a href="{{url}}" for="{{id}}" id="{{id}}" name="{{id}}" data-name="name-{{id}}" class="filter_button w-button {{isChecked}}">{{label}}</a>'},393:e=>{e.exports='<a href="/company?name={{companyName}}" class="lr-card w-inline-block"> <div id="w-node-_34742635-d50f-c940-1e66-3d0eacbe8dee-5f38d402" class="partner-card-logo-block smart-logo"> <img src="{{companyLogo}}" loading="lazy" alt="" class="partner-card-logo"> </div> <div class="lr--card-bg"></div> <div class="lr-heading">{{companyName}}</div> <div class="lr-purple-text">{{jobOpenings}} Job Openings</div> <img src="https://assets-global.website-files.com/606cae0c4e05dcef785b0481/6151584686e8c44c53531515_light-chevron.svg" loading="lazy" alt="" class="lr-chevron"> </a>'},997:e=>{e.exports='<div style="-ms-grid-row:span 3;grid-row-start:span 3;-ms-grid-row-span:3;grid-row-end:span 3;-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1"> <div class="content-card content-hero"> <a href="{{articleLink}}" class="card-featured-image-container big w-inline-block"><img src="{{featuredImage}}" loading="lazy" alt="" class="card-featured-image"></a> <div class="card-content-container"> <div class="content-details-block"><img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div><a href="{{articleLink}}" class="w-inline-block"> <div class="body-large card-title">{{title}}</div> </a> <div class="content-details-block"><a href="{{authorProfile}}" class="content-profile-container w-inline-block"><img src="{{authorImage}}" loading="lazy" alt="" class="content-profile-image"> <div class="content-detail-text">{{authorName}}</div> </a> <div class="separator-dot"></div> <div class="content-detail-text capitalize-text">{{readTime}} {{readPrefix}}</div> </div> <div class="tag-container"><img src="https://assets.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc06c85b04c0_tag-icon.svg" loading="lazy" alt="" class="tag-icon"> <div class="w-dyn-list"> <div role="list" class="flex-horizontal tags w-dyn-items"> {{tags}} </div> </div> </div> </div> </div> </div>'},711:e=>{e.exports='<a id="w-node-_1c696775-bca1-9b8a-5829-f42527472d32-de3de8ca" href="{{articleLink}}" class="content-card_small w-inline-block"><img src="{{featuredImage}}" loading="lazy" id="w-node-e49b1659-6977-41c5-64a5-c46b03665a7d-de3de8ca" alt="" class="content-card_small-img" cfdebugger-request-id="1022" cf-debugger-style="external"/> <div id="w-node-eefaa564-7661-3ed6-2b7d-f3b71a95bb96-de3de8ca"> <p class="text-size-small text-weight-medium text-color-violet"> {{contentType}} </p> <h3 class="text-size-medium">{{title}}</h3> <p class="blog-card_detail-text text-style-2lines">{{shortDescription}}</p> </div> </a> '},416:e=>{e.exports='<div id="empty-state" class="styleguide-section"> <div class="styleguide-component"> <div class="empty-state"><img src="https://assets.website-files.com/600fd2daa260b77b88b8ac84/603ca7a64964824d08be9f19_empty-state-illustration.svg" loading="lazy" alt=""> <div class="empty-state-heading">No result to show</div> <div>We couldn\'t find what you\'re looking for</div> </div> </div> </div>'},42:e=>{e.exports='<div role="listitem" class="w-dyn-item"> <div class="job-card"> <div> <div class="job-card-logo-block"><img src="{{companyLogo}}" loading="lazy" alt="" class="job-card-logo"> </div> <div class="job-title">{{jobTitle}}</div> <p class="body-small">{{description}}</p> <div class="job-tag-container"> <div class="tag">{{location}}</div> </div> </div><a href="{{applyLink}}" target="_self" class="button secondary-btn w-button">Apply Now</a> </div> </div>'},98:e=>{e.exports=' <a id="w-node-_651b32c1-9254-6a5b-8b5c-9786d48c3c0a-dc9a6360" href="{profileUrl}" class="people_card-component w-inline-block"><img src="{image}" loading="lazy" alt="" class="people_card-img"/> <div class="people_card-content-container"> <div class="text-size-regular text-weight-medium">{name}</div> <div class="text-size-small">{designation}</div> </div></a> '},539:e=>{e.exports='<label class="podcast-tab-btn-container w-radio" data-value="{{label}}"> <div class="w-form-formradioinput w-form-formradioinput--inputType-custom button secondary-btn podcast-filter-copy w-radio-input {{isSelected}}"> </div> <input type="radio" data-name="Series" id="{{id}}" name="Series" value="{{label}}" required="" style="opacity:0;position:absolute;z-index:-1"> <span for="{{label}}" class="podcast-tab-btn-label w-form-label"> {{label}}</span> </label>'},235:e=>{e.exports='<div role="listitem" class="directory-item w-dyn-item"> <div class="directory-card"><img src="{{image}}" loading="lazy" alt="" class="directory-image"> <div class="name">{{name}}</div> <div class="directory-designatiion">{{designation}}</div> <div class="w-dyn-list"> <div role="list" class="tag-grid w-dyn-items"> {{domains}} </div> </div> <div class="text-block-34"> <div class="offering-text"> {{bio}} </div><img src="https://global-uploads.webflow.com/602eab59a790dc04e3805f3f/602f7592838b827bc07b2c88_directory-inverted-comma.svg" loading="lazy" alt="" class="directory-inverted-comma"> </div> </div><a href="{{profileUrl}}" class="link-overlay w-inline-block"></a> </div>'},200:e=>{e.exports='<div role="listitem" class="w-dyn-item" style="margin-bottom:9px"> <a href="{{tagSlug}}" class="tag">{{tag}}</a> </div>'},889:e=>{e.exports='<a href="{{labelSlug}}" target="_blank" class="tag tag-sidebar-link" onclick="window.clickTagLink(this)">{{label}}</a>'},318:e=>{e.exports='<div role="listitem" class="w-dyn-item"> <a href="{{articleLink}}" class="content-list-card w-inline-block"> <div class="content-details-block"> <img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div> <div class="card-title">{{title}}</div> </a> </div>'}},t={};function a(i){if(t[i])return t[i].exports;var n=t[i]={exports:{}};return e[i](n,n.exports,a),n.exports}return a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(142)})()}));
