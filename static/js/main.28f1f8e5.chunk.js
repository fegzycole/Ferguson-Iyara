(this["webpackJsonpferguson-iyara"]=this["webpackJsonpferguson-iyara"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Ferguson-Iyara.0c4ada30.pdf"},function(e,t,a){e.exports=a.p+"static/media/myBanka.6bb89fb6.png"},function(e,t,a){e.exports=a.p+"static/media/myTwitter.891c22d2.png"},function(e,t,a){e.exports=a.p+"static/media/myFacebook.64ca4013.png"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(17),a(18),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#portfolio"},"Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{href:"#publications"},"Publications")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact"},"Contact"))))}),l=(a(19),a(8)),s=a.n(l),m=function(){return r.a.createElement("section",{id:"Bio"},r.a.createElement("div",null,r.a.createElement("p",{className:"name"},"Ferguson Iyara"),r.a.createElement("p",{className:"desc"},"I am a Full stack web developer based in Lagos, Nigeria"),r.a.createElement("a",{rel:"noopener noreferrer",href:s.a,target:"_blank"},"Resume")))},u=function(){return r.a.createElement("div",{className:"social-links"},r.a.createElement("div",{className:"social-links-container"},r.a.createElement("a",{rel:"noopener noreferrer",href:"https://twitter.com/fergusoniyara",target:"_blank"},r.a.createElement("i",{className:"fa fa-twitter twitter"})),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/fegzycole",target:"_blank"},r.a.createElement("i",{className:"fa fa-github github"})),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/fergusoniyara/",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin linkedIn"}))))},p=a(1),f=a(2),h=a(4),b=a(3),g=a(5),E=function(e){var t=e.name,a=e.imageSrc,n=e.about,c=e.repository,o=e.liveVersion;return r.a.createElement("div",{className:"project"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("h3",null,t),r.a.createElement("p",{className:"about"},n),r.a.createElement("div",{className:"project-links"},r.a.createElement("a",{href:o,rel:"noopener noreferrer",target:"_blank",className:"live"},r.a.createElement("i",{class:"fa fa-globe"}),r.a.createElement("p",null,"Live Demo")),r.a.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank",className:"git"},r.a.createElement("i",{class:"fa fa-github"}),r.a.createElement("p",null,"View Source"))))},d=a(9),k=a.n(d),v=a(10),y=a.n(v),j=a(11),N=a.n(j),w=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).state={projects:[{name:"Banka",imageSrc:k.a,about:"Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals. This app is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money",repository:"https://github.com/fegzycole/BANKA",liveVersion:"https://vast-tor-00576.herokuapp.com"},{name:"Twitter Redesign",imageSrc:y.a,about:"A social media application mimicking some of the functionalities of twitter.com, built as a capstone project in the rails section of the microverse curriculum.",repository:"https://github.com/fegzycole/Rails-Capstone",liveVersion:"https://secure-shelf-49955.herokuapp.com"},{name:"Fakebook",imageSrc:N.a,about:"A social media application mimicking some of the functionalities of facebook.com, built as a project in the rails section of the microverse curriculum.",repository:"https://github.com/kalavhan/facebook-clone",liveVersion:"https://frozen-forest-23599.herokuapp.com"}]},e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.projects.map((function(e){var t=e.name,a=e.imageSrc,n=e.about,c=e.repository,o=e.liveVersion;return r.a.createElement(E,{name:t,key:t,imageSrc:a,about:n,repository:c,liveVersion:o})}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("h1",null,"Portfolio"),r.a.createElement("div",{className:"projects"},e))}}]),t}(n.Component),O=function(e){var t=e.bgImage,a=e.title,n=e.url;return r.a.createElement("div",{className:"publication",style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("a",{href:n,className:"link",target:"_blank",rel:"noopener noreferrer"}),r.a.createElement("p",{className:"publication-title"},a))},S=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).state={publications:[{imageSrc:"https://miro.medium.com/max/660/0*CPQGD_Iq6bUgdiJz.png",name:"Why stop at cool? you could be so much more!",url:"https://medium.com/@fegor/why-stop-at-cool-you-could-be-so-much-more-a3c1497cbc48"}]},e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.publications.map((function(e){var t=e.imageSrc,a=e.name,n=e.url;return r.a.createElement(O,{bgImage:t,title:a,url:n})}));return r.a.createElement("section",{id:"publications"},r.a.createElement("h1",null,"Publications"),r.a.createElement("div",{className:"publications"},e))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).state={from:"",message:"",email:""},e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"contact"},r.a.createElement("h1",null,"Contact"),r.a.createElement("form",{method:"post",action:"#"},r.a.createElement("div",{className:"form-container"},r.a.createElement("input",{type:"text",name:"from",placeholder:"Name"}),r.a.createElement("input",{type:"email",name:"email",id:"",placeholder:"Email"})),r.a.createElement("textarea",{name:"",placeholder:"Message"}),r.a.createElement("input",{type:"submit",value:"Send Message"})))}}]),t}(n.Component);var x=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(m,null),r.a.createElement(u,null),r.a.createElement(w,null),r.a.createElement(S,null),r.a.createElement(I,null))};o.a.render(r.a.createElement(x,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.28f1f8e5.chunk.js.map