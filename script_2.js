window.cxs&&window.cxs.setOptions({prefix:"c2-"}),window.wsb=window.wsb||{},window.wsb.Theme9=window.wsb.Theme9||window.radpack("@widget/LAYOUT/bs-layout9-Theme-publish-Theme").then((function(e){return new e.default})),window.wsb.FreemiumAd=function(e){let{adEndpoint:t,isPublish:a,containerId:n}=e;const i=/<script[^>]*>([\s\S]*)<\/script>/;let s,o,r;function l(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function d(e){if(r=document.getElementById(n),!r)return;s=document.createElement("div"),s.style.cssText="width:100%;",r.prepend(s),o=document.createElement("div"),o.setAttribute("data-freemium-ad",!0),o.style.cssText="overflow:hidden;width:100%;z-index:10000;position:fixed;left:0;",o.innerHTML=(e||"").replace(i,""),r.prepend(o);const t=`${o.offsetHeight}px`;if(s.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=i.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else o.addEventListener("click",l,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?d(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),d(e))})).catch((()=>{}))}(),function(){!a&&o.removeEventListener("click",l,{useCapture:!0}),r&&(r.removeChild(s),r.removeChild(o))}},window.wsb.FreemiumAd(JSON.parse('{"adEndpoint":"/markup/ad","isPublish":true,"containerId":"freemium-ad-1932"}')),window.wsb["context-bs-1"]=JSON.parse('{"env":"production","renderMode":"PUBLISH","fonts":["righteous","default",""],"colors":["#7a04db"],"locale":"en-IN","language":"en","resellerId":1,"internalLinks":{},"isInternalPage":true,"navigationMap":{"7e45fa18-cca1-4c7b-93d0-d3b927952c3c":{"isFlyoutMenu":false,"active":false,"pageId":"7e45fa18-cca1-4c7b-93d0-d3b927952c3c","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"9948de3c-cb30-4b8a-abf8-f297853a8f95":{"isFlyoutMenu":false,"active":true,"pageId":"9948de3c-cb30-4b8a-abf8-f297853a8f95","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false},"b3234aaa-ac69-4970-b1cc-ae7d0f7a7aaf":{"isFlyoutMenu":false,"active":false,"pageId":"b3234aaa-ac69-4970-b1cc-ae7d0f7a7aaf","name":"Contact Us","href":"/contact-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"dcf1eedb-3a42-40d7-883a-b5018d3f4bae":{"isFlyoutMenu":false,"active":false,"pageId":"dcf1eedb-3a42-40d7-883a-b5018d3f4bae","name":"Services","href":"/services","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false}},"dials":{"colors":[{"id":"#7a04db","meta":{"primary":"rgb(122, 4, 219)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"righteous","description":"","tags":[],"meta":{"order":33,"primary":{"id":"righteous","name":"Righteous","url":"//fonts.googleapis.com/css?family=Righteous:400&display=swap","family":"\'Righteous\', serif, system-ui","size":14,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"4px"}},"alternate":{"id":"josefin-sans","name":"Josefin Sans","url":"//fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap","family":"\'Josefin Sans\', Arial, sans-serif","size":16,"weight":400,"weights":[400,600,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["vi-VN"],"meta":{"alternate":{"family":"Arial, sans-serif"}}},{"locales":["ja-JP"],"meta":{"alternate":{"family":"Josefin Sans, Meiryo, \'メイリオ\', sans-serif"}}},{"locales":["ko-KR"],"meta":{"alternate":{"family":"Josefin Sans, \'굴림\', Gulim, \'굴림체\', GulimChe, sans-serif"}}},{"locales":["th-TH"],"meta":{"alternate":{"family":"Josefin Sans, BrowalliaUPC, Tahoma, sans-serif"}}},{"locales":["zh-CN","zh-SG"],"meta":{"alternate":{"family":"Josefin Sans, \'中易黑体\', SimHei, sans-serif"}}},{"locales":["zh-HK","zh-TW"],"meta":{"alternate":{"family":"Josefin Slab, \'微軟正黑體\', Microsoft JhengHei, sans-serif"}}}],"overridesPrimary":[{"languages":["en"],"meta":{"primary":{"styles":{"textTransform":"uppercase"}}}}]}}},"theme":"Theme9","paintJob":"MVP"}'),Core.utils.deferBootstrap({elId:"bs-1",componentName:"@widget/LAYOUT/bs-Hamburger-Component",props:JSON.parse('{"toggleId":"n-1931-navId-mobile","uniqueId":"n-1931","style":{"color":"highContrast",":hover":{"color":"highlight"},"@md":{"display":"none"}},"widgetId":"f989924a-9323-418c-a337-a0bc9920861a","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'),context:JSON.parse('{"widgetId":"f989924a-9323-418c-a337-a0bc9920861a","widgetType":"HEADER","widgetPreset":"header9","group":"Section","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{"HeadingAlpha":{"byType":{"HeroTagline":{"value":{"typography":"HeadingGamma","featured":false,"style":{"fontSize":"xxlarge"}}}}}}}'),contextKey:"context-bs-1",radpack:"@widget/LAYOUT/bs-Hamburger-Component"},!1),Core.utils.deferBootstrap({elId:"bs-2",componentName:"@widget/LAYOUT/bs-LinkAwareComponent",props:JSON.parse('{"toggleId":"more-1948","label":"More","dataAid":"NAV_MORE","navBarId":"navContainer-1942","widgetId":"f989924a-9323-418c-a337-a0bc9920861a","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'),context:JSON.parse('{"widgetId":"f989924a-9323-418c-a337-a0bc9920861a","widgetType":"HEADER","widgetPreset":"header9","group":"Nav","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{"HeadingAlpha":{"byType":{"HeroTagline":{"value":{"typography":"HeadingGamma","featured":false,"style":{"fontSize":"xxlarge"}}}}}}}'),contextKey:"context-bs-1",radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},!1),window.wsb.CalculateSplitNavSpacing=function(e){let a,n,i,s,o,r,l,d,{containerId:c,navId:m,splitNavId:f,logoImageId:u,inlineUtilitiesMenu:g,forceBreakpoint:p}=e;const h=document.getElementById(m),y=document.getElementById(f);function b(){if(n||!h||!N(h))return;s=Array.from(h.children),i=Array.from(h.children),i.forEach(S),g&&(o=i.pop(),E(o)),r=i.pop();const e=r.querySelector("ul");l=e?Array.from(e.children):[],h.style.whiteSpace="normal",d=N(h.parentElement,"floor"),h.style.whiteSpace="nowrap",window.requestAnimationFrame(w)}function w(){const e=o&&o.querySelector("[data-ux='Pipe']");e&&T(e);const t=i,a=t.map((e=>N(e))),n=o?N(o):0;let c=0,m=a.concat(n).findIndex((e=>{if(c+e>d)return e;c+=e}));m<0&&(m=a.length);const f=a.slice(0,m);let u,g,p=a.slice(m);if(A(p)+n<d)u=!1,g=0;else{u=!0,g=N(r);let e=0,t=g+n;p.some((a=>{if(t+=a,t>=d)return!0;e++})),p=p.slice(0,e)}for(;f.length>1&&x(f,p.concat([g,n]).filter(Boolean));)p.unshift(f.pop());const h=Array.from(y.children);I(h,0,f.length,E),I(t,0,f.length,T),I(l,0,f.length,T),I(h,f.length,f.length+p.length,T),I(t,f.length,f.length+p.length,E),I(l,f.length,f.length+p.length,T),I(h,f.length+p.length,t.length,T),I(t,f.length+p.length,t.length,T),I(l,f.length+p.length,t.length,E),u?E(r):T(r),function(){const e=s.filter((e=>"visible"===e.style.visibility&&e.classList.contains("nav-item"))),t=e[e.length-1];t&&t.classList.add("last-visible-nav-item")}(),e&&t.find((e=>"visible"===e.style.visibility))&&E(e),window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&p&&p!==t.Q||(window.clearTimeout(a),a=window.setTimeout(b,50))}function I(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function S(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("last-visible-nav-item","visible")}function T(e){e.style.display="none",e.classList.remove("visible")}function E(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function A(e){return e.reduce(((e,t)=>e+t),0)}function N(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}function x(e,t){if(!t.length&&e.length>1)return!0;const a=e[e.length-1],n=A(e),i=A(t);return Math.abs(n-i)>Math.abs(n-a-(i+a))}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(c),document.getElementById(u)].forEach((t=>t&&e.observe(t))),()=>{n=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{n=!0,window.removeEventListener("resize",v,{passive:!0})}},window.wsb.CalculateSplitNavSpacing(JSON.parse('{"navId":"n-19311941-navId-2","inlineUtilitiesMenu":false,"containerId":"navContainer-1942","splitNavId":"n-19311940-navId-1"}')),window.wsb.StickyNav=function(e){let{uniqueId:t,logoHeight:a,hasAnimation:n,anchorId:i}=e;const s=a>104?120:80;let o,r,l,d,c=window.innerWidth<768,m=0;const f=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return l=t.getPropertyValue("box-shadow"),d=t.getPropertyValue("margin-top"),e},u={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(t),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:f(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(i)},g=()=>{const{stickyNav:e,stickyNavParent:t}=u;let n=e.offsetHeight;c&&e.offsetHeight<a&&a<=104&&(n=a),t.style.height=`${n}px`};new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;return window.requestAnimationFrame((()=>(e=>{if(r===e)return;const{stickyNav:t,logo:i,i18nBar:o,freemiumAd:f,stickyNavParent:p}=u;u.freemiumAd=f||document.querySelector("[data-freemium-ad]"),m=m||u.freemiumAd?.offsetHeight,e&&p&&!p.style.height&&g(),o&&(o.style.display=e?"none":"flex"),i&&(i.style.cssText=e?`max-height:${c?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${c?s:a}px;box-shadow:${l};margin-top:${d};`,"HEADER_LOGO_OVERHANG_CONTAINER"===i.parentNode.getAttribute("data-aid")&&(i.parentNode.style.height=e?"auto":"1em")),t.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${m||0}px;`:"",n&&(e?t.classList.add("sticky-animate","x-c-bg"):t.classList.remove("sticky-animate","x-c-bg")),r=e})(!t)))})))).observe(u.anchor);const p=/#[^\\?]*/;function h(e){const t=(e.target.href.match(p)[0]||[]).slice(1),a=document.getElementById(t);a&&y(a)}function y(e){const t=u.stickyNav.clientHeight;let a=e.offsetTop;const n=setInterval((()=>{e.offsetTop===a?(clearInterval(n),scrollTo({top:e.offsetTop-t})):a=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>p.test(e.href))).forEach((e=>e.addEventListener("click",h))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&y(e)}window.addEventListener("resize",(()=>{clearTimeout(o),o=setTimeout((()=>{c=window.innerWidth<768,u.logo=f(),g()}),250)}),{passive:!0})},window.wsb.StickyNav(JSON.parse('{"uniqueId":"header_stickynav1933","anchorId":"header_stickynav-anchor1934","logoHeight":87,"hasAnimation":true}')),window.logTcclEvent?.(null,"pandc.vnext.404.impression,impression"),window.wsb["context-bs-3"]=JSON.parse('{"env":"production","renderMode":"PUBLISH","fonts":["righteous","default",""],"colors":["#7a04db"],"fontScale":"medium","locale":"en-IN","language":"en","resellerId":1,"internalLinks":{},"isInternalPage":true,"navigationMap":{"7e45fa18-cca1-4c7b-93d0-d3b927952c3c":{"isFlyoutMenu":false,"active":false,"pageId":"7e45fa18-cca1-4c7b-93d0-d3b927952c3c","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"9948de3c-cb30-4b8a-abf8-f297853a8f95":{"isFlyoutMenu":false,"active":true,"pageId":"9948de3c-cb30-4b8a-abf8-f297853a8f95","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false},"b3234aaa-ac69-4970-b1cc-ae7d0f7a7aaf":{"isFlyoutMenu":false,"active":false,"pageId":"b3234aaa-ac69-4970-b1cc-ae7d0f7a7aaf","name":"Contact Us","href":"/contact-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"dcf1eedb-3a42-40d7-883a-b5018d3f4bae":{"isFlyoutMenu":false,"active":false,"pageId":"dcf1eedb-3a42-40d7-883a-b5018d3f4bae","name":"Services","href":"/services","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false}},"dials":{"colors":[{"id":"#7a04db","meta":{"primary":"rgb(122, 4, 219)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"righteous","description":"","tags":[],"meta":{"order":33,"primary":{"id":"righteous","name":"Righteous","url":"//fonts.googleapis.com/css?family=Righteous:400&display=swap","family":"\'Righteous\', serif, system-ui","size":14,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"4px"}},"alternate":{"id":"josefin-sans","name":"Josefin Sans","url":"//fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap","family":"\'Josefin Sans\', Arial, sans-serif","size":16,"weight":400,"weights":[400,600,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["vi-VN"],"meta":{"alternate":{"family":"Arial, sans-serif"}}},{"locales":["ja-JP"],"meta":{"alternate":{"family":"Josefin Sans, Meiryo, \'メイリオ\', sans-serif"}}},{"locales":["ko-KR"],"meta":{"alternate":{"family":"Josefin Sans, \'굴림\', Gulim, \'굴림체\', GulimChe, sans-serif"}}},{"locales":["th-TH"],"meta":{"alternate":{"family":"Josefin Sans, BrowalliaUPC, Tahoma, sans-serif"}}},{"locales":["zh-CN","zh-SG"],"meta":{"alternate":{"family":"Josefin Sans, \'中易黑体\', SimHei, sans-serif"}}},{"locales":["zh-HK","zh-TW"],"meta":{"alternate":{"family":"Josefin Slab, \'微軟正黑體\', Microsoft JhengHei, sans-serif"}}}],"overridesPrimary":[{"languages":["en"],"meta":{"primary":{"styles":{"textTransform":"uppercase"}}}}]}}},"theme":"Theme9"}'),Core.utils.renderBootstrap({elId:"bs-3",componentName:"@widget/MESSAGING/bs-Component",props:JSON.parse('{"config":{"formSubmitEndpoint":"/messaging","assetsHost":"https://img1.wsimg.com","assetsBasePath":"/isteam","contactsHost":"https://contacts.godaddy.com","conversationsWebHost":"https://conversations.godaddy.com","formSubmitHost":"https://contact.apps-api.instantpage.secureserver.net","generateUrlHost":"https://url-generator.apps.secureserver.net","vNextApiHost":"https://websites.api.godaddy.com","reamazeApiHost":"https://{{websiteId}}reamaze.godaddy.com","reamazeJsSource":"https://cdn.reamaze.com/assets/reamaze-loader.js","reamazeCookieJsSource":"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js"},"businessName":"Blush And Venus Beauty","reamazeBrandId":null,"welcomeMessage":"Hi! Let us know how we can help and we’ll respond shortly.","formSuccessMessage":"Thanks for the message. We\'ll get back to you as soon as we can.","emailOptInMessage":"Sign up to receive email updates, announcements, and more.","emailOptInEnabled":false,"domainName":"ngeyhendo.com","cookieBannerEnabled":false,"formFields":[{"keyName":"name","type":"SINGLE_LINE","label":"Name","validation":"required","required":true},{"keyName":"phone","type":"PHONE","label":"Mobile","validation":"phone","required":true},{"keyName":"email","type":"EMAIL","label":"Email","validation":"email","required":true,"replyTo":true},{"keyName":"message","type":"MULTI_LINE","label":"How can we help?","validation":"required","required":true},{"type":"SUBMIT","label":"Send"}],"accountId":"abf73863-a105-11ed-82f6-3417ebe73f23","websiteId":"37adf295-dd4f-4132-b817-2ddccacd4893","id":"dfbc6b59-1164-4f62-b122-e63871c4d10f","staticContent":{"submitButtonLoadingLabel":"Sending","infoStartTitle":"Conversations","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","infoStartDesc":"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.","infoStartTag":"New","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","contactsLinkInfoMessaging":"Contacts from your website messaging form are captured in Connections.","defaultSubmitButtonLabel":"Send","endOfChat":"end of chat","infoConnectedDesc":"You are connected to the Conversations mobile app and are currently receiving all website messages there.","infoRecommendedTag":"Recommended","infoStartLink":"Get Started","phoneUsOnlyValidationErrorMessage":"Please enter a valid U.S. mobile phone number.","infoIncludedTag":"Included","infoPublishRequiredDesc":"A publish is needed in order to complete this first step of enabling this feature.","infoPendingLoginDesc":"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.","termsOfSerivce":"Terms of Service","infoUnavailableDesc":"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","privacyPolicyURL":"https://policies.google.com/privacy","infoUnavailableTitle":"Conversations","requiredValidationErrorMessage":"Please fill in this required field","infoUnavailableTag":"Unavailable","contactsLinkText":"Manage my contacts","privacyPolicy":"Privacy Policy","infoPublishRequiredLink":"Publish Now","infoPendingLoginLink":"Resend Link","infoConnectedTitle":"Conversations Mobile App","termsOfSerivceURL":"https://policies.google.com/terms","messagesRatesLegalDisclosure":"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.","emailMaxCountValidationErrorMessage":"Your email address is too long","infoConnectedTag":"Connected"},"emailConfirmationMessage":"We\'ve sent you a confirmation email, please click the link to verify your address.","recaptchaType":"V3","isMobile":null,"notificationPreference":"EMAIL","isReseller":false,"reamazePrompt":"Let me know if you have any questions!","reamazePromptEnabled":true,"reamazeThemeColor":"#7a04db","reamazePosition":"bottom-right","reamazeConfirmationMessage":"Thanks! Your message has been submitted. We\'ll get back to you here or via email.","reamazeAvatarImage":"","widgetId":"dfbc6b59-1164-4f62-b122-e63871c4d10f","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'),context:JSON.parse('{"widgetId":"dfbc6b59-1164-4f62-b122-e63871c4d10f","widgetType":"MESSAGING","widgetPreset":"messaging1","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'),contextKey:"context-bs-3",radpack:"@widget/MESSAGING/bs-Component"}),document.getElementById("page-1930").addEventListener("click",(function(){}),!1);