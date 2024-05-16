(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{976:function(e,t,n){Promise.resolve().then(n.bind(n,7092)),Promise.resolve().then(n.bind(n,7270)),Promise.resolve().then(n.bind(n,8815)),Promise.resolve().then(n.bind(n,5498)),Promise.resolve().then(n.t.bind(n,5250,23))},7092:function(e,t,n){"use strict";n.r(t);var s=n(7437);n(2265),t.default=()=>(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"/icons/carbon_email.svg",alt:"Email Icon",className:"mr-5 ml-5"})})},7270:function(e,t,n){"use strict";n.r(t);var s=n(7437);n(2265),t.default=()=>(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"/icons/carbon_notification-filled.svg",alt:"Notification Icon",className:"mr-5 ml-5"})})},8815:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(7437),l=n(2265),r=n(7908),o=e=>{let{concern:t}=e;return(0,s.jsx)("div",{className:"mt-4 ml-[17%] rounded-[24px] h-[330px] w-[855px] bg-white pr-5 pl-5 pt-3",children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"text-LightBlue text-2xl font-Montserrat font-bold",children:t.subject}),(0,s.jsxs)("div",{className:"font-Roboto text-lg",children:["Status: ",t.status]}),(0,s.jsxs)("div",{className:"font-Roboto text-lg",children:["Date: ",new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),(0,s.jsxs)("div",{className:"font-Roboto text-lg",children:["Reporter: ",t.reporter]}),(0,s.jsx)("div",{className:"mt-2 selection:font-Roboto text-md overflow-y-auto",children:t.description})]}):(0,s.jsx)("div",{className:"text-LightBlue text-2xl font-Montserrat font-bold",children:"Select a concern"})})},c=n(6136),a=n(1196);c.kL.register(c.qi,c.u,c.De);var i=e=>{let{totalConcerns:t,numberOfConcerns:n,concernName:l}=e;return(0,s.jsx)("div",{className:"ml-3 mt-5",children:(0,s.jsxs)("div",{className:"bg-white w-[320px] h-[150px] px-3 pb-3 rounded-[24px] flex items-center",children:[(0,s.jsx)(a.$I,{className:"drop-shadow-lg",data:{datasets:[{label:"Concerns",data:[n,t-n],backgroundColor:["#53DD6C","#cbd5e1"],borderColor:["#53DD6C","#cbd5e1"]}]},options:{}}),(0,s.jsx)("h1",{className:"ml-4 text-2xl flex flex-col",children:l})]})})},d=()=>{let[e,t]=(0,l.useState)([]),[n,c]=(0,l.useState)(null),[a,d]=(0,l.useState)(""),[x,h]=(0,l.useState)(null);(0,l.useEffect)(()=>{(async()=>{try{let e=await r.Z.get("".concat("http://localhost:5000/api","/relations"));t(e.data)}catch(e){console.error("Error fetching complaints:",e)}})()},[]);let m=async e=>{c(e)},u=e=>{h(e)},f=async e=>{try{if(""!==a){await r.Z.put("".concat("http://localhost:5000/api","/relations/").concat(e),{status:a});let n=await r.Z.get("".concat("http://localhost:5000/api","/relations"));t(n.data)}c(null)}catch(e){console.error("Error updating status:",e)}};return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"h-[350px] w-[1480px] bg-white mr-5 mt-[23px] ml-[17%] rounded-l-[20px] overflow-y-scroll scrollbar",children:[(0,s.jsx)("div",{className:"pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold",children:(0,s.jsx)("h1",{children:"Complaints and Feedback"})}),(0,s.jsxs)("div",{className:"text-LightBlue font-Montserrat flex justify-between pt-3 mr-[10px] pl-5",children:[(0,s.jsx)("div",{className:"text-lg font-bold",style:{width:"20.5%"},children:"Concern"}),(0,s.jsx)("div",{className:"text-lg font-bold",style:{width:"20%"},children:"Status"}),(0,s.jsx)("div",{className:"text-lg font-bold",style:{width:"20%"},children:"Reporter"}),(0,s.jsx)("div",{className:"text-lg font-bold",style:{width:"20%"},children:"Date"})]}),e.map((e,t)=>(0,s.jsxs)("div",{className:"text-LightBlue font-Roboto text-lg flex justify-between pt-3 mr-[10px] pl-5",children:[(0,s.jsx)("div",{className:"hover:font-bold",style:{width:"20.5%",cursor:"pointer"},onClick:()=>u(e),children:e.subject}),(0,s.jsx)("div",{className:"hover:font-bold cursor-pointer duration-100",style:{width:"20%"},children:n===e._id?(0,s.jsxs)("select",{value:a,onChange:e=>d(e.target.value),onBlur:()=>f(e._id),children:[(0,s.jsx)("option",{value:"Open",children:"Open"}),(0,s.jsx)("option",{value:"In Progress",children:"In Progress"}),(0,s.jsx)("option",{value:"Closed",children:"Closed"})]}):(0,s.jsx)("span",{onClick:()=>m(e._id),children:e.status})}),(0,s.jsx)("div",{style:{width:"20%"},children:e.reporter}),(0,s.jsx)("div",{style:{width:"20%"},children:new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]},t))]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(o,{concern:x,onClose:()=>h(null)}),(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsx)(i,{totalConcerns:e.length,numberOfConcerns:e.filter(e=>"Employee Concern"===e.subject).length,concernName:"Employee Concerns"}),(0,s.jsx)(i,{totalConcerns:e.length,numberOfConcerns:e.filter(e=>"Work Environment"===e.subject).length,concernName:"Work Environment"}),(0,s.jsx)(i,{totalConcerns:e.length,numberOfConcerns:e.filter(e=>"Project"===e.subject).length,concernName:"Project"}),(0,s.jsx)(i,{totalConcerns:e.length,numberOfConcerns:e.filter(e=>"Welfare"===e.subject).length,concernName:"Welfare"}),(0,s.jsx)(i,{totalConcerns:e.length,numberOfConcerns:e.filter(e=>"Miscellaneous"===e.subject).length,concernName:"Miscellaneous"}),(0,s.jsx)(i,{totalConcerns:e.length,numberOfConcerns:e.filter(e=>"Company"===e.subject).length,concernName:"Company"})]})]})]})}},5498:function(e,t,n){"use strict";n.r(t);var s=n(7437);n(2265),t.default=()=>(0,s.jsxs)("div",{className:"mb-5 ml-8 px-3 flex justify-left text-white text-xl font-Lato",children:[(0,s.jsx)("img",{src:"/icons/carbon_settings.svg",alt:"Settings Icon",className:"inline-block mr-2"}),"Settings"]})}},function(e){e.O(0,[674,250,908,796,971,69,744],function(){return e(e.s=976)}),_N_E=e.O()}]);