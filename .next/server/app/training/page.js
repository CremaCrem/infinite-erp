(()=>{var e={};e.id=723,e.ids=[723],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},4582:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(482),n=r(9108),o=r(2563),a=r.n(o),l=r(8300),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let c=["",{children:["training",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8159)),"D:\\Programming\\Website\\sia1_hr-erp\\app\\training\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,3384)),"D:\\Programming\\Website\\sia1_hr-erp\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Programming\\Website\\sia1_hr-erp\\app\\training\\page.jsx"],m="/training/page",x={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/training/page",pathname:"/training",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1341:(e,t,r)=>{Promise.resolve().then(r.bind(r,2985)),Promise.resolve().then(r.bind(r,3991)),Promise.resolve().then(r.bind(r,4776)),Promise.resolve().then(r.bind(r,8745)),Promise.resolve().then(r.t.bind(r,1476,23))},8422:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},3493:()=>{},1168:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(5344),n=r(3729),o=r(8484),a=r(9478),l=r(5577),i=r(6975);function c(e){return(0,s.jsxs)(s.Fragment,{children:[s.jsx("b",{children:e.timeText}),s.jsx("i",{children:e.event.title})]})}let d=i.ZP.div`
  .fc {
    background-color: white; /* Set background color for FullCalendar */
    border: 12px solid white;
    border-radius: 20px; /* Set border radius to round corners */
    width: 500px
  }
  .fc-header-toolbar button {
    background-color: #53DD6C; /* Set background color for buttons in the header toolbar */
    color: white; /* Set text color for buttons in the header toolbar */
    border: none; /* Remove borders from buttons */
    border-radius: 10px; /* Set border radius for buttons */
    margin: 5px 10px 1px 1px; /* Set margin between buttons */
    cursor: pointer; /* Set cursor to pointer for buttons */
  }
  .fc-toolbar-title {
    font-size: 30px; /* Set font size for the title */
    font-weight: bold; /* Set font weight for the title */
    color: #333; /* Set text color for the title */
    font-family: 'Montserrat', sans-serif;
    margin: 5px 10px 1px 20px;
  }
  .fc-header-toolbar button.fc-today-button {
    background-color: #53DD6C;
    font-family: 'Lato', sans-serif;
  }
  .fc-header-toolbar button:hover {
    background-color: #E1B07E;
    font-family: 'Lato', sans-serif;
  }
  .fc-addEvent-button {
    background-color: #53DD6C; /* Set background color */
    color: white; /* Set text color */
    border: none; /* Remove border */
    border-radius: 5px; /* Set border radius */
    padding: 8px 16px; /* Add padding */
    margin-left: 5px; /* Adjust left margin */
    cursor: pointer; /* Set cursor */
    font-family: 'Montserrat', sans-serif; /* Set font family */
    font-weight: bold; /* Set font weight */
    font-size: 20px; /* Set font size */
  }
`,m=({events:e})=>{let[t,r]=(0,n.useState)(e||[]),i=(e,s)=>{r([...t,{title:e||"New Event",start:s||new Date,allDay:!0}])};return(0,n.useEffect)(()=>{i("Birthday Party",new Date(2024,4,25))},[]),s.jsx(d,{className:"flex justify-end mr-[80px] mt-5 mb-6",children:s.jsx(o.Z,{plugins:[a.Z,l.ZP],initialView:"dayGridMonth",weekends:!0,events:t,eventContent:c,customButtons:{addEventButton:{text:"Add Event",click:i}},headerToolbar:{start:"title",center:"addEventButton",end:"prev,next"}})})}},2985:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5344);r(3729);let n=()=>s.jsx("div",{children:s.jsx("img",{src:"/icons/carbon_email.svg",alt:"Email Icon",className:"mr-5 ml-5"})})},3991:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5344);r(3729);let n=()=>s.jsx("div",{children:s.jsx("img",{src:"/icons/carbon_notification-filled.svg",alt:"Notification Icon",className:"mr-5 ml-5"})})},4776:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5344);r(3729);let n=()=>(0,s.jsxs)("div",{className:"mb-5 ml-8 px-3 flex justify-left text-white text-xl font-Lato",children:[s.jsx("img",{src:"/icons/carbon_settings.svg",alt:"Settings Icon",className:"inline-block mr-2"}),"Settings"]})},8745:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(5344),n=r(3608),o=r(3729),a=r(1168),l=r(2465),i=r(8816);l.kL.register(l.qi,l.u,l.De);let c=({trainingPrograms:e})=>{let t=Array.from(new Set(e.map(e=>e.name))),r=t.map(t=>e.filter(e=>e.name===t).reduce((e,t)=>e+t.enrolledEmployees.length,0));return(0,s.jsxs)("div",{className:"relative w-[530px] h-[400px] rounded-[24px] shadow-md ml-5 bg-white",children:[s.jsx("h1",{className:"ml-[20px] text-2xl font-Montserrat font-bold",children:"Courses & Training List"}),s.jsx("div",{className:"w-[500px] h-[500px] absolute -top-[40px] ml-5",children:s.jsx(i.$I,{className:"drop-shadow-xl",data:{labels:t,datasets:[{label:"Training",data:r,backgroundColor:["#53DD6C","#FFE66D","#F7AF9D","#FF6F61","#70C1B3","#B8B8D1"],borderColor:["#53DD6C","#FFE66D","#F7AF9D","#FF6F61","#70C1B3","#B8B8D1"]}]},options:{plugins:{legend:{display:!0,position:"right",align:"center",labels:{font:{size:12,family:"Arial"},color:"black",padding:10}}}}})})]})};var d=r(9697);let m=({program:e,enrolledEmployees:t})=>{let r=t&&t.length>0,[a,l]=(0,o.useState)(!1),[i,c]=(0,o.useState)(!1),m=(0,o.useRef)(null),x=()=>{l(!a)},p=()=>{c(!i)},u=()=>{p()},h=async()=>{try{console.log(e._id),await n.Z.delete(`http://localhost:5000/api/training-programs-id/${e._id}`),d.Am.success("Employee successfully deleted!",{position:"top-center",autoClose:800}),setTimeout(()=>{window.location.reload()},1e3),p()}catch(e){console.error("Error deleting program:",e)}};return(0,o.useEffect)(()=>{let e=e=>{m.current&&!m.current.contains(e.target)&&l(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),r?(0,s.jsxs)("div",{className:"p-[10px] font-Roboto text-[18px]",children:[s.jsx("div",{children:s.jsx("ul",{children:t.map((t,r)=>(0,s.jsxs)("li",{className:`flex items-center mb-1 ${r>0?"mt-5":""}`,children:[s.jsx("p",{className:"w-1/2",children:t.employeeFullName}),s.jsx("p",{className:"w-[30%]",children:e.name}),(0,s.jsxs)("div",{className:"relative",ref:m,children:[s.jsx("button",{onClick:x,children:s.jsx("img",{src:"/icons/carbon_overflow-menu-vertical.svg",alt:"Options",className:"h-5 w-5"})}),a&&s.jsx("ul",{className:"absolute font-Lato top-[-20px] right-[-100px] mt-2 py-1 w-24 bg-white border rounded shadow-md pl-[5px]",children:s.jsx("li",{children:(0,s.jsxs)("button",{onClick:u,children:[s.jsx("img",{src:"/icons/carbon_trash-can.svg",alt:"Delete",className:"inline-block mr-2 w-[24px]"}),"Delete"]})})})]})]},t._id))})}),i&&s.jsx("div",{className:"fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 font-Lato",children:(0,s.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[s.jsx("p",{children:"Are you sure you want to delete this program?"}),(0,s.jsxs)("div",{className:"flex justify-end mt-4",children:[s.jsx("button",{className:"bg-red-500 text-white px-4 py-2 rounded mr-2",onClick:h,children:"Confirm"}),s.jsx("button",{className:"bg-gray-300 px-4 py-2 rounded",onClick:p,children:"Cancel"})]})]})})]}):null},x=({programs:e})=>{let[t,r]=(0,o.useState)(""),[n,a]=(0,o.useState)(""),l=e.filter((t,r)=>e.findIndex(e=>e.name===t.name)===r);return(0,s.jsxs)("div",{className:"p-3 pl-4",children:[s.jsx("h2",{className:"font-Montserrat font-bold text-[20px]",children:"Program Description"}),(0,s.jsxs)("select",{className:"appearance-none outline-none cursor-pointer p-2 font-Lato font-bold text-[18px] hover:text-NeonGreen transition-all ease-in",value:t,onChange:t=>{let s=t.target.value;r(s);let n=e.find(e=>e.name===s);n?a(n.description):a("")},children:[s.jsx("option",{value:"",children:"Select a program"}),l.map(e=>s.jsx("option",{value:e.name,children:e.name},e._id))]}),n&&s.jsx("div",{className:"pl-2 font-Roboto",children:s.jsx("p",{children:n})})]})},p=({programs:e,employees:t,isOpen:r,onClose:a})=>{let[l,i]=(0,o.useState)(""),[c,m]=(0,o.useState)(""),x=e.filter((t,r)=>e.findIndex(e=>e.name===t.name)===r),p=async()=>{try{await n.Z.post("http://localhost:5000/api/training-programs/enroll",{program:l,employee:c}),d.Am.success("Employee successfully enrolled!",{position:"top-center",autoClose:800}),setTimeout(()=>{window.location.reload()},1e3),a()}catch(e){console.error("Error enrolling employee:",e)}};return r&&s.jsx("div",{className:"fixed inset-0 z-50 top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center",onClick:a,children:(0,s.jsxs)("div",{className:"bg-white p-8 rounded-lg",onClick:e=>e.stopPropagation(),children:[s.jsx("h2",{className:"text-2xl font-bold mb-4 font-Montserrat",children:"Enroll Employee to Program"}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"program",className:"block text-sm font-medium text-gray-700",children:"Select a program:"}),(0,s.jsxs)("select",{id:"program",name:"program",value:l,onChange:e=>i(e.target.value),className:"mt-1 p-2 border border-gray-300 rounded-md w-full",children:[s.jsx("option",{value:"",children:"Select a program"}),x.map(e=>s.jsx("option",{value:e.name,children:e.name},e._id))]})]}),(0,s.jsxs)("div",{className:"mb-4 font-Lato",children:[s.jsx("label",{htmlFor:"employee",className:"block text-sm font-medium text-gray-700",children:"Select an employee:"}),t.length>0&&(0,s.jsxs)("select",{id:"employee",name:"employee",value:c,onChange:e=>m(e.target.value),className:"mt-1 p-2 border border-gray-300 rounded-md w-full",children:[s.jsx("option",{value:"",children:"Select an employee"}),t.map(e=>s.jsx("option",{value:e._id,children:e.employeeFullName},e._id))]})]}),(0,s.jsxs)("div",{className:"flex justify-end",children:[s.jsx("button",{type:"button",className:"bg-NeonGreen font-Lato text-white font-bold hover:bg-Goldy hover:text-black hover:rounded-[24px] transition-all ease-in px-4 py-2 rounded-md",onClick:p,children:"Enroll"}),s.jsx("button",{type:"button",className:"ml-2 bg-gray-300 font-Lato text-gray-700 font-bold hover:bg-Goldy hover:text-black hover:rounded-[24px] transition-all ease-in px-4 py-2 rounded-md",onClick:a,children:"Cancel"})]})]})})};r(5996);let u=()=>{let[e,t]=(0,o.useState)([]),[r,l]=(0,o.useState)(!1),[i,u]=(0,o.useState)({name:"",description:""}),[h,g]=(0,o.useState)([]),[f,b]=(0,o.useState)(null),[j,v]=(0,o.useState)(!1),[y,N]=(0,o.useState)(""),[w,P]=(0,o.useState)({}),[k,S]=(0,o.useState)(!1);(0,o.useEffect)(()=>{n.Z.get("http://localhost:5000/api/training-programs").then(e=>{t(e.data)}).catch(e=>{console.error("Error fetching training programs:",e)})},[]),(0,o.useEffect)(()=>{n.Z.get("http://localhost:5000/api/employee").then(e=>{g(e.data)}).catch(e=>{console.error("Error fetching employees:",e)})},[]),(0,o.useEffect)(()=>{n.Z.get("http://localhost:5000/api/training-programs").then(e=>{t(e.data),e.data.forEach(e=>{n.Z.get(`http://localhost:5000/api/training-programs/${e._id}/enrolled-employees`).then(t=>{P(r=>({...r,[e._id]:t.data}))}).catch(t=>{console.error(`Error fetching enrolled employees for program ${e._id}:`,t)})})}).catch(e=>{console.error("Error fetching training programs:",e)})},[]);let _=e=>{u({...i,[e.target.name]:e.target.value})},C=async r=>{r.preventDefault();try{let r=await n.Z.post("http://localhost:5000/api/training-programs",i);t([...e,r.data]),l(!1),u({name:"",description:""}),d.Am.success("Program successfully added!",{position:"top-center",autoClose:800}),setTimeout(()=>{window.location.reload()},1e3)}catch(e){console.error("Error adding training program:",e)}},E=async()=>{if(y)try{let r=encodeURIComponent(y);await n.Z.delete(`http://localhost:5000/api/training-programs/${r}`),t(e.filter(e=>e.name!==y)),d.Am.success("Program successfully added!",{position:"top-center",autoClose:800}),setTimeout(()=>{window.location.reload()},1e3),l(!1),b(null),v(!1)}catch(e){console.error("Error deleting training program:",e)}},D=Array.from(new Set(e.map(e=>e.name)));return(0,s.jsxs)("div",{className:"flex flex-wrap gap-x-4",children:[(0,s.jsxs)("div",{className:"ml-[17%] mt-5 w-[900px] h-[452px] rounded-[24px] bg-white flex pt-5",children:[s.jsx(c,{trainingPrograms:e}),(0,s.jsxs)("div",{className:"ml-[1.5rem] font-Montserrat font-bold w-[18.5rem] h-[25rem]",children:[(0,s.jsxs)("h1",{className:"flex flex-wrap gap-x-[5px] justify-start mt-[1rem] text-[20px]",children:["Provided Training Modules",s.jsx("button",{className:"mt-[10px] w-[5rem] bg-NeonGreen text-white text-medium text-lg font-Lato px-2 rounded-lg    hover:bg-Goldy transition-all duration-200 hover:rounded-xl",onClick:()=>l(!0),children:"Add"}),s.jsx("button",{className:"mt-[10px] w-[5rem] bg-NeonGreen text-white text-medium text-lg font-Lato px-2 rounded-lg    hover:bg-red-500 transition-all duration-200 hover:rounded-xl",onClick:()=>v(!0),children:"Delete"})]}),s.jsx("div",{className:"w-[20.3rem] h-[19.5rem] mt-[10px] overflow-y-scroll scrollbar flex flex-col pl-[5px] ",children:D.map((e,t)=>s.jsx("span",{className:"text-black text-[15px] font-medium",children:e},t))})]})]}),s.jsx(a.default,{}),(0,s.jsxs)("div",{className:"ml-[17%] w-[900px] h-[270px] rounded-[24px] bg-white pr-[4px]",children:[(0,s.jsxs)("div",{className:"flex items-center mb-1 p-[10px] text-[20px] font-bold",children:[s.jsx("h1",{className:"w-[49%]",children:"Employee"}),s.jsx("h2",{className:"w-[40%]",children:"Program"}),s.jsx("button",{className:"mt-[10px] w-[5rem] bg-NeonGreen text-[18px] text-white text-medium font-Lato px-2 rounded-lg    hover:bg-Goldy transition-all duration-200 hover:rounded-xl",onClick:()=>{S(!0)},children:"Add"})]}),s.jsx("div",{className:"overflow-y-scroll scrollbar h-[200px]",children:e.map(e=>s.jsx("div",{children:s.jsx(m,{program:e,enrolledEmployees:w[e._id]||[]})},e._id))})]}),s.jsx("div",{className:"w-[500px] h-[270px] rounded-[24px] bg-white",children:s.jsx(x,{programs:e})}),r&&s.jsx("div",{className:"fixed inset-0 z-50 top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center",onClick:()=>l(!1),children:(0,s.jsxs)("div",{className:"bg-white p-8 rounded-lg",onClick:e=>e.stopPropagation(),children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Add Training Program"}),(0,s.jsxs)("form",{onSubmit:C,children:[(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name:"}),s.jsx("input",{type:"text",id:"name",name:"name",value:i.name,onChange:_,className:"mt-1 p-2 border border-gray-300 rounded-md w-full"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description:"}),s.jsx("textarea",{id:"description",name:"description",value:i.description,onChange:_,rows:"3",className:"mt-1 p-2 border border-gray-300 rounded-md w-full"})]}),(0,s.jsxs)("div",{className:"flex justify-end",children:[s.jsx("button",{type:"submit",className:"bg-NeonGreen text-white px-4 py-2 rounded-md font-Lato font-bold hover:text-black hover:rounded-[24px] hover:bg-Goldy transition-all ease-in",children:"Add"}),s.jsx("button",{type:"button",className:"ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md font-Lato font-bold hover:text-black hover:rounded-[24px] hover:bg-Goldy transition-all ease-in",onClick:()=>l(!1),children:"Cancel"})]})]})]})}),j&&s.jsx("div",{className:"fixed inset-0 z-50 top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center",onClick:()=>v(!1),children:(0,s.jsxs)("div",{className:"bg-white p-8 rounded-lg",onClick:e=>e.stopPropagation(),children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Confirm Deletion"}),(0,s.jsxs)("select",{value:y,onChange:e=>N(e.target.value),className:"mb-4 block w-full px-4 py-2 border border-gray-300 rounded-md",children:[s.jsx("option",{value:"",children:"Select a program to delete"}),D.map(e=>s.jsx("option",{value:e,children:e},e))]}),(0,s.jsxs)("div",{className:"flex justify-end",children:[s.jsx("button",{type:"button",className:"bg-NeonGreen font-bold font-Lato text-white px-4 py-2 rounded-md mr-2 hover:bg-red-500 hover:rounded-[24px] transition-all ease-in",onClick:E,children:"Delete"}),s.jsx("button",{type:"button",className:"bg-gray-300 font-bold font-Lato text-gray-700 px-4 py-2 rounded-md hover:rounded-[24px] transition-all ease-in",onClick:()=>v(!1),children:"Cancel"})]})]})}),s.jsx(p,{programs:e,employees:h,isOpen:k,onClose:()=>{S(!1)}}),s.jsx(d.Ix,{})]})}},1767:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(5036);r(2);let n=()=>s.jsx("div",{children:s.jsx("img",{src:"/icons/carbon_search.svg",alt:"Search Icon",className:"mr-5 ml-5"})});var o=r(6843);let a=(0,o.createProxy)(String.raw`D:\Programming\Website\sia1_hr-erp\app\components\MailBtn.jsx`),{__esModule:l,$$typeof:i}=a,c=a.default,d=(0,o.createProxy)(String.raw`D:\Programming\Website\sia1_hr-erp\app\components\NotificationBtn.jsx`),{__esModule:m,$$typeof:x}=d,p=d.default,u=({pageTitle:e})=>(0,s.jsxs)("nav",{className:"px-4 py-3 flex justify-between items-center ml-[300px] mt-[65px] mr-[150px]",children:[s.jsx("div",{className:"flex itmes-center text-3xl text-white font-Montserrat font-bold ",children:e}),(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx(n,{}),s.jsx(c,{}),s.jsx(p,{})]})]})},3863:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(5036);r(2);let n=(0,r(6843).createProxy)(String.raw`D:\Programming\Website\sia1_hr-erp\app\components\SettingsBtn.jsx`),{__esModule:o,$$typeof:a}=n,l=n.default,i=()=>(0,s.jsxs)("div",{className:"mb-5 ml-8 px-3 flex justify-left text-white text-xl font-Lato",children:[s.jsx("img",{src:"/icons/carbon_login.svg",alt:"Login Icon",className:"inline-block mr-2"}),"Sign Out"]});var c=r(6274);let d=()=>(0,s.jsxs)("div",{className:"w-[285px] bg-MediumBlue fixed h-full px-4 py-2",children:[s.jsx("div",{children:s.jsx(c.default,{href:"/portal",className:"text-2x text-NeonGreen text-4xl font-bold font-Montserrat mb-[50px] mt-[65px] ml-8 flex justify-center hover:text-Goldy transition-all ease-in",children:"INFINITE ERP"})}),s.jsx("ul",{className:"mt-8",children:(0,s.jsxs)("li",{className:"mb-2 py-2",children:[(0,s.jsxs)(c.default,{href:"/dashboard",className:"mb-8 ml-8 px-3 flex justify-left text-white text-xl font-Lato hover:text-NeonGreen transition-all ease-in ",children:[s.jsx("img",{src:"/icons/carbon_notebook.svg",alt:"Dashboard Icon",className:"inline-block mr-2"}),"Dashboard"]}),(0,s.jsxs)(c.default,{href:"/recruitment",className:"mb-8 ml-8 px-3 flex justify-left text-white text-xl font-Lato hover:text-NeonGreen transition-all ease-in ",children:[s.jsx("img",{src:"/icons/carbon_category.svg",alt:"Recruitment Icon",className:"inline-block mr-2"}),"Recruitment"]}),(0,s.jsxs)(c.default,{href:"/employee-record",className:"mb-8 ml-8 px-3 flex justify-left text-white text-xl font-Lato hover:text-NeonGreen transition-all ease-in ",children:[s.jsx("img",{src:"/icons/carbon_user-profile.svg",alt:"Employee Record Icon",className:"inline-block mr-2"}),"Employee Record"]}),(0,s.jsxs)("a",{href:"/relations",className:"mb-8 ml-8 px-3 flex justify-left text-white text-xl font-Lato hover:text-NeonGreen transition-all ease-in ",children:[s.jsx("img",{src:"/icons/carbon_airline-passenger-care.svg",alt:"Relations Icon",className:"inline-block mr-2"}),"Relations"]}),(0,s.jsxs)("a",{href:"/training",className:"mb-8 ml-8 px-3 flex justify-left text-white text-xl font-Lato hover:text-NeonGreen transition-all ease-in ",children:[s.jsx("img",{src:"/icons/carbon_carbon-for-ibm-product.svg",alt:"Training Icon",className:"inline-block mr-2"}),"Training"]})]})}),s.jsx("hr",{className:"border-Goldy"}),s.jsx("ul",{className:"mt-5",children:(0,s.jsxs)("li",{className:"mb-2 py-2",children:[s.jsx(l,{}),s.jsx(i,{})]})}),s.jsx("div",{className:"flex justify-center mt-[100px] mb-5 drop-shadow-[1px_9px_12px_rgba(0,0,0,0.75)]",children:s.jsx("img",{src:"/images/1712197531125.jpg",alt:"Profile Pic",className:"w-16 h-16 rounded-full"})}),s.jsx("div",{className:"flex justify-center text-Goldy font-Playfair",children:"j3remyz1on@gmail.com"})]})},3384:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>a});var s=r(5036),n=r(2842),o=r.n(n);r(7272);let a={title:"INFINITE ERP",description:"SIA1 BSIT2A"};function l({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:o().className,children:e})})}},8159:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(5036);r(2);var n=r(3863),o=r(1767);let a=(0,r(6843).createProxy)(String.raw`D:\Programming\Website\sia1_hr-erp\app\components\TrainingBox.jsx`),{__esModule:l,$$typeof:i}=a,c=a.default,d=()=>(0,s.jsxs)("div",{className:"w-full flex flex-col h-screen",children:[s.jsx(o.Z,{pageTitle:"Employee Training"}),s.jsx(c,{})]}),m=()=>(0,s.jsxs)("div",{className:"flex",children:[s.jsx(d,{}),s.jsx(n.Z,{})]})},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,625,230,608,116,345,816],()=>r(4582));module.exports=s})();