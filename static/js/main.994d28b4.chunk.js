(this["webpackJsonpkqarlos.github.io"]=this["webpackJsonpkqarlos.github.io"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(7),o=a.n(i),r=(a(13),a(14),a(2)),n=a(8),l=a(3),d="SET_PROJECT",p=a.p+"static/media/artiste-live.83500cb8.gif",m=a.p+"static/media/election-year-live.5bddce99.gif",j=a.p+"static/media/memory-game-live.8a4b2264.gif",b=a.p+"static/media/note-taker-live.dabf179d.gif",h=a.p+"static/media/google-library-live.e26e7ba4.gif",g=a.p+"static/media/password-generator.cf494acc.png",x=a.p+"static/media/day-planner.a05397a0.png",f=a.p+"static/media/weather-live.c8464b56.gif",u=a.p+"static/media/dinner-party-live.166f1b3e.gif",O=a.p+"static/media/shopping-buddy.dd1c5fb1.gif",k=a.p+"static/media/MongoDB.17c1160a.jpg",y=a.p+"static/media/Mongoose.9bc6f726.jpg",v=a.p+"static/media/Express.26ed8584.jpg",N=a.p+"static/media/Axios.25c6a0f8.jpg",E=a.p+"static/media/Materialize.3fbc727c.jpg",S=a.p+"static/media/Sequelize.f62a9490.jpg",T=a.p+"static/media/Handlebars.75a8b35e.jpg",w=a.p+"static/media/Charts.ce032c54.jpg",R=a.p+"static/media/React-Routing.f78f0598.jpg",L=a.p+"static/media/React-State.34649357.jpg",I=a.p+"static/media/Javascript.c9101365.jpg",A=a.p+"static/media/React-Reducer.1464bb64.jpg",C={ARTISTEGIF:p,ELECTIONGIF:m,MEMORYGIF:j,NOTEGIF:b,GOOGLEGIF:h,PASSWORDGIF:g,DAYPLANNERGIF:x,WEATHERGIF:f,DINNERGIF:u,SHOPPINGGIF:O},G={ARTISTEMONGODB:k,ARTISTEMONGOOSE:y,ARTISTEEXPRESS:v,ARTISTEAXIOS:N,ARTISTEMATERIALIZE:E},M={ELECTIONSEQUELIZE:S,ELECTIONHANDLEBARS:T,ELECTIONCHARTS:w},P={MEMORYRR:R,MEMORYRS:L},D={NOTEJS:I},B={GOOGLERR:A},F=a(0),H=["value"],q=Object(c.createContext)(),J=q.Provider,Y=function(e,t){switch(t.type){case d:return console.log("Global state set project",t.project),console.log("Setting current project to ",e.projects[t.project]),Object(l.a)(Object(l.a)({},e),{},{currentProject:e.projects[t.project]});default:return e}},_=function(e){e.value;var t=Object(n.a)(e,H),a=Object(c.useReducer)(Y,{currentProject:{projectDisplay:"block",project:"artiste",name:"Artiste Affame",description:"Full-stack MERN application allows users to immerse themselves in the life of a renaissance artist. Users can play games, draw and share their art.",stack:["React","Node","HTML","CSS","Javascript"],stack2:["MongoDB","Mongoose","Express","Axios","Materialize"],stack2Snippets:[G.ARTISTEMONGODB,G.ARTISTEMONGOOSE,G.ARTISTEEXPRESS,G.ARTISTEAXIOS,G.ARTISTEMATERIALIZE],repo:"https://github.com/kqarlos/artiste-affame",deployed:"https://artiste-affame.herokuapp.com/",src:C.ARTISTEGIF},projects:{artiste:{projectDisplay:"block",project:"artiste",name:"Artiste Affame",description:"Full-stack MERN application allows users to immerse themselves in the life of a renaissance artist. Users can play games, draw and share their art.",stack:["React","Node","HTML","CSS","Javascript"],stack2:["MongoDB","Mongoose","Express","Axios","Materialize"],stack2Snippets:[G.ARTISTEMONGODB,G.ARTISTEMONGOOSE,G.ARTISTEEXPRESS,G.ARTISTEAXIOS,G.ARTISTEMATERIALIZE],repo:"https://github.com/kqarlos/artiste-affame",deployed:"https://artiste-affame.herokuapp.com/",src:C.ARTISTEGIF},electionYear:{projectDisplay:"block",project:"electionYear",name:"Election Year",description:"Full-stack application that allows to create an account and search for their representatives.",stack:["MySQL","Express","Node","Bootstrap","Axios","HMTL","CSS","Javascript"],stack2:["Sequelize","Handlebars","Charts"],stack2Snippets:[M.ELECTIONSEQUELIZE,M.ELECTIONHANDLEBARS,M.ELECTIONCHARTS],repo:"https://github.com/kqarlos/election-year",deployed:"https://electionyear2020.herokuapp.com/",src:C.ELECTIONGIF},memoryGame:{projectDisplay:"block",project:"memoryGame",name:"Memory Game",description:"Choose a game theme and start playing. Only click each image once. Click twice and it's game over",stack:["React","Node","Bootstrap","Axios","HTML","CSS","Javascript"],stack2:["React-Routing","React-State"],stack2Snippets:[P.MEMORYRR,P.MEMORYRS],repo:"https://github.com/kqarlos/memory-game",deployed:"https://kqarlos.github.io/memory-game/",src:C.MEMORYGIF},noteTaker:{projectDisplay:"block",project:"noteTaker",name:"Note Taker",description:"Real-time note taking application. Take notes, update them, and delete them with this note-taker.",stack:["Node","Express","Bootstrap","HTML","CSS"],stack2:["Javascript"],stack2Snippets:[D.NOTEJS],repo:"https://github.com/kqarlos/note-taker",deployed:"https://note-taker2020.herokuapp.com/",src:C.NOTEGIF},googleLibrary:{projectDisplay:"block",project:"googleLibrary",name:"Google Library",description:"Search through Google Books API and keep a list of your favorite books.",stack:["MongoDB","Express","React","Node","Bootstrap","Axios","Mongoose"],stack2:["React-Reducer"],stack2Snippets:[B.GOOGLERR],repo:"https://github.com/kqarlos/google-library",deployed:"https://google-library-mern.herokuapp.com/",src:C.GOOGLEGIF},passwordGenerator:{projectDisplay:"block",project:"passwordGenerator",name:"Password Generator",description:"Generates a random password based on user preferences and copies it to the clipboard.",stack:["HTML","CSS","Javascript","Bootstrap"],stack2:[],repo:"https://github.com/kqarlos/password-generator",deployed:"https://kqarlos.github.io/password-generator/",src:C.PASSWORDGIF},dayPlanner:{projectDisplay:"block",project:"dayPlanner",name:"Day Planner",description:"A planner for day activities that saves information to local storage",stack:["HTML","CSS","Javascript","Moment.js","Bootstrap"],stack2:[],repo:"https://github.com/kqarlos/day-planner",deployed:"https://kqarlos.github.io/day-planner/",src:C.DAYPLANNERGIF},weatherDashboard:{projectDisplay:"block",project:"weatherDashboard",name:"Weather Dashboard",description:"Displays current weather and forecast for a searched city.",stack:["HTML","CSS","Javascript","Moment.js","Bootstrap"],stack2:[],repo:"https://github.com/kqarlos/weather-dashboard",deployed:"https://kqarlos.github.io/weather-dashboard/",src:C.WEATHERGIF},dinnerParty:{projectDisplay:"block",project:"dinnerParty",name:"Dinner Party",description:"Application that recommends a dish and a cocktail based on a protein choice",stack:["HTML","CSS","Javascript","Materialize","Bootstrap"],stack2:[],repo:"https://github.com/kqarlos/dinner-party",deployed:"https://kqarlos.github.io/dinner-party/",src:C.DINNERGIF},shoppingBuddy:{projectDisplay:"block",project:"shoppingBuddy",name:"Shopping Buddy",description:"Manage your shopping list on the go",stack:["HTML","CSS","Javascript","Express","Node","Handlebars","MySQL"],stack2:[],repo:"https://github.com/kqarlos/shopping-buddy",deployed:"https://shopping-buddy2020.herokuapp.com/",src:C.SHOPPINGGIF}}}),s=Object(r.a)(a,2),i=s[0],o=s[1];return Object(F.jsx)(J,Object(l.a)({value:[i,o]},t))},W=function(){return Object(c.useContext)(q)},z=(a(16),a.p+"static/media/headshot.91eb1012.jpg");var X=function(){return Object(F.jsx)("div",{id:"welcome",children:Object(F.jsx)("main",{className:"container p-4",id:"welcomeContainer",children:Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-sm-4 col-md-4 col-lg-3",id:"headshotContainer",children:Object(F.jsx)("img",{className:"rounded",id:"headshot",src:z,alt:"Headshot"})}),Object(F.jsx)("div",{className:"col-sm-8 col-md-8 col-lg-9",children:Object(F.jsxs)("div",{className:"row font-raleway",children:[Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)("header",{id:"welcomeH1",children:"I'm Carlos"})}),Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)("header",{className:"welcomeH2",children:"A Full Stack Web Developer"})}),Object(F.jsx)("div",{className:"col-12 pt-1",children:Object(F.jsxs)("a",{href:"#about",className:"btn text-white bg-info contentText float-right",id:"aboutBtn",children:["About me    ",Object(F.jsx)("i",{className:"fas fa-arrow-circle-down"})]})})]})})]})})})};a(17);var U=function(){return Object(F.jsx)("div",{id:"about",children:Object(F.jsxs)("main",{className:"container p-4 bg-white border font-raleway",children:[Object(F.jsx)("div",{className:"row mb-1",children:Object(F.jsx)("div",{className:"col-md-12 pb-1",children:Object(F.jsx)("p",{className:"font-weight-bold text-info border-bottom headingText",children:"About Me"})})}),Object(F.jsx)("div",{className:"row",children:Object(F.jsxs)("article",{className:"col-12 text-secondary",children:[Object(F.jsx)("img",{className:"rounded float-left pb-1",id:"headshot2",src:z,alt:"Headshot"}),Object(F.jsx)("p",{className:"aboutText",children:"Full-Stack Web Developer with a B.S. in Software Engineering and a minor in Mathematics from San Jose State University. I recently graduated from the University of California, Berkeley Extension with a certificate in Full-Stack Web Development. This added new web development skills to my Object-Oriented Programming experience such as Mongo, Express, React, and Node."}),Object(F.jsx)("p",{className:"aboutText",children:"My experience in hospitality has given me the ability to easily communicate my thought process with peers and to understand the significance of teamwork and collaboration. I am passionate about problem-solving, learning new technologies and developing user-friendly applications, and learning new technologies. I applied my team-collaboration skills when working in different team projects developing full-stack applications. Looking forward to using my technical abilities and software engineering skills to create user-friendly experiences."})]})})]})})},Z=(a(18),a.p+"static/media/CarlosToledo_Resume.1aa2b6b3.pdf"),Q=a.p+"static/media/CarlosToledo_CoverLetter.5df12fce.pdf";var K=function(){return Object(F.jsxs)("nav",{className:"py-0 navbar sticky-top navbar-expand-lg navbar-light bg-info font-raleway",children:[Object(F.jsx)("a",{className:"navbar-brand navLink font-weight-bold pl-4 pr-2 py-1 headingText smoothLink",href:"#about",children:"Carlos Toledo"}),Object(F.jsx)("button",{className:"navbar-toggler mr-4",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(F.jsx)("span",{className:"navbar-toggler-icon headingText"})}),Object(F.jsx)("div",{className:"collapse navbar-collapse",id:"navbarText",children:Object(F.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(F.jsx)("li",{className:"nav-item pl-2",children:Object(F.jsx)("a",{className:"nav-link navbarText navLink smoothLink",href:"#portfolio",children:"Portfolio"})}),Object(F.jsx)("li",{className:"nav-item pl-2",children:Object(F.jsx)("a",{className:"nav-link navbarText navLink",target:"_blank",href:Z,children:"Resume"})}),Object(F.jsx)("li",{className:"nav-item pl-2",children:Object(F.jsx)("a",{className:"nav-link navbarText navLink",target:"_blank",href:Q,children:"Cover Letter"})}),Object(F.jsx)("li",{className:"nav-item pl-2",children:Object(F.jsx)("a",{className:"nav-link navbarText navLink",target:"_blank",href:"https://github.com/kqarlos",children:Object(F.jsx)("i",{className:"fab fa-github-alt"})})}),Object(F.jsx)("li",{className:"nav-item pl-2",children:Object(F.jsx)("a",{className:"nav-link navbarText navLink",target:"_blank",href:"https://www.linkedin.com/in/carlos-toledo415/",children:Object(F.jsx)("i",{className:"fab fa-linkedin"})})})]})})]})},V=(a(19),a.p+"static/media/artiste.e884a27d.png"),$=a.p+"static/media/election-year.53bddb64.png",ee=a.p+"static/media/google-library.f6be4712.png",te=a.p+"static/media/memory-game.3df150a8.png",ae=a.p+"static/media/note-taker.2273c5f7.png",ce=a.p+"static/media/dinner-party.8282fb0b.png",se=a.p+"static/media/shopping-buddy.b9a999b5.png",ie=a.p+"static/media/weather-dashboard.803ede71.png",oe=a(6);a(20);var re=function(e){function t(){var e=document.getElementsByClassName("pCard");if(document.body.scrollTop>700||document.documentElement.scrollTop>1100){var t,a=Object(oe.a)(e);try{for(a.s();!(t=a.n()).done;){t.value.classList.add("projectLtoR")}}catch(i){a.e(i)}finally{a.f()}}else{var c,s=Object(oe.a)(e);try{for(s.s();!(c=s.n()).done;){c.value.classList.remove("projectLtoR")}}catch(i){s.e(i)}finally{s.f()}}}return Object(c.useEffect)((function(){window.addEventListener("scroll",t)}),[]),Object(F.jsxs)("a",{className:"card pCard ".concat(e.effect),href:"#project",onClick:function(){return e.handleClick(e.name)},children:[Object(F.jsx)("img",{className:"card-img-top",src:e.imgLink,alt:e.imgAlt}),Object(F.jsxs)("section",{className:"btn py-2 pl-1 pr-2 projectBtn text-white",id:"secL",children:[Object(F.jsx)("header",{className:"projectH1",children:e.title}),Object(F.jsx)("p",{className:"card-text projectH2",children:e.description})]}),Object(F.jsx)("section",{className:"btn pl-1 projectBtn text-white",id:"secSmall",children:Object(F.jsxs)("header",{className:"projectH1",children:[e.title,Object(F.jsxs)("span",{id:"secXS",children:[": ",e.description]})]})})]})};var ne=function(){var e=W(),t=Object(r.a)(e,2),a=t[0],s=t[1];function i(e){console.log("project clicked",e),s({type:d,project:e})}return Object(c.useEffect)((function(){console.log("state from portfolio",a)}),[]),Object(F.jsx)("div",{id:"portfolio",children:Object(F.jsxs)("main",{className:" p-4 bg-white border portfolioContent font-raleway",children:[Object(F.jsx)("div",{className:"row mb-3",children:Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)("p",{className:"font-weight-bold text-info border-bottom headingText",children:"Portfolio"})})}),Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-12 col-md-6 col-lg-4 my-1 px-2",children:Object(F.jsx)(re,{effect:"projectLtoR",imgLink:V,imgAlt:"Drawing on a canvas",handleClick:i,name:"artiste",title:"Artiste Affame",description:"Live the life of a starving artist in Artiste Affame!"})}),Object(F.jsx)("div",{className:"col-12 col-md-6 col-lg-4 my-1 px-2",children:Object(F.jsx)(re,{effect:"projectNone",imgLink:$,imgAlt:"Campaign contributions chart",handleClick:i,name:"electionYear",title:"Election Year",description:"Political app to keep track of your federal representatives"})}),Object(F.jsx)("div",{className:"col-12 col-lg-4 my-1 px-2",children:Object(F.jsx)(re,{effect:"projectRtoL",imgLink:ee,imgAlt:"Google books search result",handleClick:i,name:"googleLibrary",title:"Google Book Library",description:"Search and save books with Google Books API"})})]}),Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-12 col-md-6  col-lg-6 my-1 px-2",children:Object(F.jsx)(re,{effect:"projectLtoR",imgLink:te,imgAlt:"Memory Game",handleClick:i,name:"memoryGame",title:"Memory Game",description:"Card matching game to test your memory skills"})}),Object(F.jsx)("div",{className:"col-12 col-md-6 col-lg-6  my-1 px-2",children:Object(F.jsx)(re,{effect:"projectRtoL",imgLink:ae,imgAlt:"Note taker",handleClick:i,name:"noteTaker",title:"Note Taker",description:"Real-time note taking application"})}),Object(F.jsx)("div",{className:"col-12 col-md-6  col-lg-6  my-1 px-2",children:Object(F.jsx)(re,{effect:"projectLtoR",imgLink:ce,imgAlt:"Dinner Party",handleClick:i,name:"dinnerParty",title:"Dinner Party",description:"Let our API digging recommend your next meal"})}),Object(F.jsx)("div",{className:"col-12 col-md-6 col-lg-6 my-1 px-2",children:Object(F.jsx)(re,{effect:"projectRtoL",imgLink:se,imgAlt:"Shopping Buddy",handleClick:i,name:"shoppingBuddy",title:"Shopping Buddy",description:"Create a shopping list. Add and delete items from your list on the go!"})})]}),Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-4 my-2 px-2",children:Object(F.jsx)(re,{effect:"projectLtoR",imgLink:g,imgAlt:"Password Generator",handleClick:i,name:"passwordGenerator",title:"Password Generator",description:"Generate a password according to your specifications"})}),Object(F.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-4 my-2 px-2",children:Object(F.jsx)(re,{imgLink:x,imgAlt:"Day Planner",handleClick:i,name:"dayPlanner",title:"Day Planner",description:"Plan your day in real time"})}),Object(F.jsx)("div",{className:"col-12 col-lg-4 col-xl-4 my-2 px-2",children:Object(F.jsx)(re,{effect:"projectRtoL",imgLink:ie,imgAlt:"Weather Dashboard",handleClick:i,name:"weatherDashboard",title:"Weather Dashboard",description:"Check your local weather and keep track of your favorite cities"})})]})]})})};a(21);var le=function(){return Object(F.jsx)("footer",{className:"page-footer font-small stylish-color-dark pt-3 font-raleway",children:Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"row text-md-center  justify-content-md-center footerText pb-2 text-white",children:[Object(F.jsxs)("div",{className:"col-md-4 py-1",children:[Object(F.jsx)("a",{className:"btn footerLink mx-2",style:{backgroundColor:"rgb(73, 73, 139)"},target:"_blank",href:"https://www.linkedin.com/in/carlos-toledo415/",children:Object(F.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(F.jsx)("span",{className:"label",children:"carlos-toledo415"})]}),Object(F.jsxs)("div",{className:"col-md-auto py-1",children:[Object(F.jsx)("a",{href:"mailto:kqarlos415@gmail.com",className:"btn footerLink mx-2",style:{backgroundColor:"#4aaaa5",textDecoration:"none"},children:Object(F.jsx)("i",{className:"far fa-paper-plane"})}),Object(F.jsx)("span",{className:"label",children:"kqarlos415@gmail.com"})]}),Object(F.jsxs)("div",{className:"col-md-3 py-1",children:[Object(F.jsx)("a",{className:"btn footerLink mx-2",style:{backgroundColor:"rgb(48, 48, 48)"},target:"_blank",href:"https://github.com/kqarlos",children:Object(F.jsx)("i",{className:"fab fa-github-alt"})}),Object(F.jsx)("span",{className:"label",children:"kqarlos"})]})]}),Object(F.jsx)("div",{className:"row my-1 text-white text-center footerText",children:Object(F.jsx)("div",{className:"col-12 ",children:"Bay Area, CA"})}),Object(F.jsx)("hr",{className:"py-0 my-0"}),Object(F.jsx)("div",{className:"footer-copyright text-center pb-2 footerText text-white",children:"\xa9 2021 Copyright: Carlos T."})]})})};a(22);var de=function(){function e(){document.body.scrollTop>700||document.documentElement.scrollTop>1300?document.getElementById("topBtn").style.display="block":document.getElementById("topBtn").style.display="none"}return Object(c.useEffect)((function(){window.addEventListener("scroll",e)}),[]),Object(F.jsxs)("a",{href:"#about",className:"btn text-white bg-info font-raleway smoothLink",id:"topBtn",children:[Object(F.jsx)("span",{id:"t",children:"Top "}),Object(F.jsx)("i",{className:"fas fa-arrow-circle-up"})]})};a(23);var pe=function(){var e=W(),t=Object(r.a)(e,2),a=t[0],s=(t[1],Object(c.useState)({stack2Snippets:a.currentProject.stack2Snippets||[],currentIndex:0})),i=Object(r.a)(s,2),o=i[0],n=i[1];function d(e){console.log("project state",o.stack2Snippets),console.log("state snippets",a.currentProject.stack2Snippets),console.log("clicked snippet",e.target.attributes.index.value);var t=e.target.attributes.index.value;n(Object(l.a)(Object(l.a)({},a),{},{stack2Snippets:a.currentProject.stack2Snippets||[],currentIndex:t}))}return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{id:"project","data-project":a.currentProject.project,children:Object(F.jsxs)("main",{className:"container p-4 bg-white border font-raleway",children:[Object(F.jsx)("div",{className:"row mb-3",children:Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)("p",{className:"font-weight-bold text-info border-bottom headingText",children:a.currentProject.name})})}),Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-12 h4 mb-2",children:"Description"}),Object(F.jsx)("div",{className:"col-12",children:a.currentProject.description})]}),Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-12 h4 my-2",children:"Built with"}),Object(F.jsxs)("div",{className:"col-12",children:[Object(F.jsx)("div",{className:"row mb-2",children:Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)("ul",{className:"list-group list-group-horizontal-lg justify-content-md-center",children:a.currentProject.stack.map((function(e,t){return Object(F.jsx)("li",{className:"list-group-item",children:e},t)}))})})}),Object(F.jsx)("hr",{className:"mx-4"}),Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-md-4",children:Object(F.jsx)("div",{className:"list-group",id:"list-tab",role:"tablist",children:a.currentProject.stack2.map((function(e,t){return 0===t?Object(F.jsx)("a",{className:"list-group-item list-group-item-action active",onClick:d,id:e,"data-toggle":"list",href:"#list-".concat(e),index:t,role:"tab","aria-controls":e,children:e},t):Object(F.jsx)("a",{className:"list-group-item list-group-item-action",onClick:d,id:e,"data-toggle":"list",href:"#list-".concat(e),index:t,role:"tab","aria-controls":e,children:e},t)}))})}),Object(F.jsx)("div",{className:"col-md-8",children:Object(F.jsx)("div",{className:"tab-content",id:"nav-tabContent",children:a.currentProject.stack2Snippets&&Object(F.jsx)("img",{className:"codeSnippet",id:"#list-".concat(o.currentIndex),role:"tabpanel","aria-labelledby":o.currentIndex,src:a.currentProject.stack2Snippets[o.currentIndex],alt:"Code Snippet"})})})]})]})]}),Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-12 h4 my-2",children:"Links"}),Object(F.jsxs)("a",{className:"col-12 link",style:{textDecoration:"none"},href:a.currentProject.repo,target:"_blank",children:[Object(F.jsx)("i",{className:"fab fa-github-alt"})," ",a.currentProject.repo]}),Object(F.jsxs)("a",{className:"col-12 link",style:{textDecoration:"none"},href:a.currentProject.deployed,target:"_blank",children:[Object(F.jsx)("i",{className:"far fa-play-circle"})," ",a.currentProject.deployed]})]}),Object(F.jsx)("div",{className:"row",children:Object(F.jsx)("img",{className:"col-12 mt-3 py-1",src:a.currentProject.src,alt:"Project Gif"})})]})})})};var me=function(){var e=W(),t=Object(r.a)(e,2),a=t[0];return t[1],Object(c.useEffect)((function(){console.log("state from homepage",a)}),[a.currentProject]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(de,{}),Object(F.jsx)(X,{}),Object(F.jsx)(K,{}),Object(F.jsx)(U,{}),Object(F.jsx)(ne,{}),Object(F.jsx)(pe,{}),Object(F.jsx)(le,{})]})};var je=function(){return Object(F.jsx)(_,{children:Object(F.jsx)(me,{})})},be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),i(e),o(e)}))};o.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(je,{})}),document.getElementById("root")),be()}],[[24,1,2]]]);
//# sourceMappingURL=main.994d28b4.chunk.js.map