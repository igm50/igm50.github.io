(self.webpackChunkmarkdown_blog=self.webpackChunkmarkdown_blog||[]).push([[691,513],{4861:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c0d5f/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/1096c/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/01986/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c0d5f/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5463/gatsby-astronaut.png 600w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/26941/gatsby-astronaut.avif 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/95309/gatsby-astronaut.avif 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/288e4/gatsby-astronaut.avif 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/f5860/gatsby-astronaut.avif 600w","type":"image/avif","sizes":"(min-width: 300px) 300px, 100vw"},{"srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/a18cc/gatsby-astronaut.webp 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/7ddcc/gatsby-astronaut.webp 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/dd79f/gatsby-astronaut.webp 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/11f71/gatsby-astronaut.webp 600w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')},8538:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",a="second",i="minute",s="hour",c="day",u="week",o="month",f="quarter",d="year",l="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,o),i=n-a<0,s=e.clone().add(r+(i?-1:1),o);return+(-(r+(n-a)/(i?a-s:s-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:d,w:u,d:c,D:l,h:s,m:i,s:a,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",b={};b[w]=g;var v=function(t){return t instanceof _},M=function(t,e,n){var r;if(!t)return w;if("string"==typeof t)b[t]&&(r=t),e&&(b[t]=e,r=t);else{var a=t.name;b[a]=t,r=a}return!n&&r&&(w=r),r||!n&&w},S=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},D=y;D.l=M,D.i=v,D.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function g(t){this.$L=M(t.locale,null,!0),this.parse(t)}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return D},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return S(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<S(t)},p.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!D.u(e)||e,f=D.p(t),h=function(t,e){var a=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?a:a.endOf(c)},m=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,g=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case d:return r?h(1,0):h(31,11);case o:return r?h(1,g):h(0,g+1);case u:var w=this.$locale().weekStart||0,b=($<w?$+7:$)-w;return h(r?p-b:p+(6-b),g);case c:case l:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case a:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=D.p(t),f="set"+(this.$u?"UTC":""),h=(n={},n[c]=f+"Date",n[l]=f+"Date",n[o]=f+"Month",n[d]=f+"FullYear",n[s]=f+"Hours",n[i]=f+"Minutes",n[a]=f+"Seconds",n[r]=f+"Milliseconds",n)[u],m=u===c?this.$D+(e-this.$W):e;if(u===o||u===d){var $=this.clone().set(l,1);$.$d[h](m),$.init(),this.$d=$.set(l,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[D.p(t)]()},p.add=function(r,f){var l,h=this;r=Number(r);var m=D.p(f),$=function(t){var e=S(h);return D.w(e.date(e.date()+Math.round(t*r)),h)};if(m===o)return this.set(o,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===c)return $(1);if(m===u)return $(7);var g=(l={},l[i]=e,l[s]=n,l[a]=t,l)[m]||1,p=this.$d.getTime()+r*g;return D.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this;if(!this.isValid())return h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),a=this.$locale(),i=this.$H,s=this.$m,c=this.$M,u=a.weekdays,o=a.months,f=function(t,r,a,i){return t&&(t[r]||t(e,n))||a[r].substr(0,i)},d=function(t){return D.s(i%12||12,t,"0")},l=a.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:D.s(c+1,2,"0"),MMM:f(a.monthsShort,c,o,3),MMMM:f(o,c),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:f(a.weekdaysMin,this.$W,u,2),ddd:f(a.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:D.s(i,2,"0"),h:d(1),hh:d(2),a:l(i,s,!0),A:l(i,s,!1),m:String(s),mm:D.s(s,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace($,(function(t,e){return e||m[t]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,l,h){var m,$=D.p(l),g=S(r),p=(g.utcOffset()-this.utcOffset())*e,y=this-g,w=D.m(this,g);return w=(m={},m[d]=w/12,m[o]=w,m[f]=w/3,m[u]=(y-p)/6048e5,m[c]=(y-p)/864e5,m[s]=y/n,m[i]=y/e,m[a]=y/t,m)[$]||y,h?w:D.a(w)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return b[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return D.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),k=_.prototype;return S.prototype=k,[["$ms",r],["$s",a],["$m",i],["$H",s],["$W",c],["$M",o],["$y",d],["$D",l]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,_,S),t.$i=!0),S},S.locale=M,S.isDayjs=v,S.unix=function(t){return S(1e3*t)},S.en=b[w],S.Ls=b,S.p={},S}()},3624:function(t,e,n){"use strict";n.r(e);var r=n(7294),a=n(2755),i=n(9470);e.default=function(t){var e=t.data.markdownRemark,n=e.frontmatter,s=e.html;return r.createElement(a.Z,null,r.createElement(i.Z,{title:"Home"}),r.createElement("h1",null,n.title),r.createElement("div",{dangerouslySetInnerHTML:{__html:s}}))}},6738:function(t,e,n){"use strict";n.r(e);var r=n(7294),a=n(5444),i=n(9285),s=n(8538),c=n(2755),u=n(9470),o=n(3624);e.default=function(t){var e=t.data;return r.createElement(c.Z,null,r.createElement(u.Z,{title:"Home"}),r.createElement("h1",null,"Hi people"),r.createElement("p",null,"Welcome to your new Gatsby site."),r.createElement("p",null,"Now go build something great."),r.createElement(i.S,{src:"../images/gatsby-astronaut.png",width:300,quality:95,formats:["AUTO","WEBP","AVIF"],alt:"A Gatsby astronaut",style:{marginBottom:"1.45rem"},__imageData:n(4861)}),r.createElement("p",null,r.createElement(a.Link,{to:"/page-2/"},"Go to page 2")," ",r.createElement("br",null),r.createElement(a.Link,{to:"/using-typescript/"},'Go to "Using TypeScript"')," ",r.createElement("br",null)),r.createElement("ul",null,e.allMarkdownRemark.nodes.sort((function(t,e){return s(t.frontmatter.date).isBefore(s(e.frontmatter.date))?1:-1})).map((function(t){return r.createElement("li",{key:t.frontmatter.title},r.createElement(a.Link,{to:t.path},t.frontmatter.title),r.createElement(o.default,{data:{markdownRemark:t}}))})),r.createElement("li",null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-edabec87a52e956666db.js.map