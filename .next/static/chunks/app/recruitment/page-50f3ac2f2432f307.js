(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[596],{7033:function(e,t,r){Promise.resolve().then(r.bind(r,907)),Promise.resolve().then(r.bind(r,7092)),Promise.resolve().then(r.bind(r,1794)),Promise.resolve().then(r.bind(r,7270)),Promise.resolve().then(r.bind(r,8748)),Promise.resolve().then(r.bind(r,5498)),Promise.resolve().then(r.t.bind(r,5250,23))},907:function(e,t,r){"use strict";r.r(t);var o=r(6093),s=r(7437),n=r(2265),l=r(3389),a=r(1477),i=r(4412);function c(){let e=(0,o._)(["\n  .fc {\n    background-color: white; /* Set background color for FullCalendar */\n    border: 12px solid white;\n    border-radius: 20px; /* Set border radius to round corners */\n    width: 500px\n  }\n  .fc-header-toolbar button {\n    background-color: #53DD6C; /* Set background color for buttons in the header toolbar */\n    color: white; /* Set text color for buttons in the header toolbar */\n    border: none; /* Remove borders from buttons */\n    border-radius: 10px; /* Set border radius for buttons */\n    margin: 5px 10px 1px 1px; /* Set margin between buttons */\n    cursor: pointer; /* Set cursor to pointer for buttons */\n  }\n  .fc-toolbar-title {\n    font-size: 30px; /* Set font size for the title */\n    font-weight: bold; /* Set font weight for the title */\n    color: #333; /* Set text color for the title */\n    font-family: 'Montserrat', sans-serif;\n    margin: 5px 10px 1px 20px;\n  }\n  .fc-header-toolbar button.fc-today-button {\n    background-color: #53DD6C;\n    font-family: 'Lato', sans-serif;\n  }\n  .fc-header-toolbar button:hover {\n    background-color: #E1B07E;\n    font-family: 'Lato', sans-serif;\n  }\n  .fc-addEvent-button {\n    background-color: #53DD6C; /* Set background color */\n    color: white; /* Set text color */\n    border: none; /* Remove border */\n    border-radius: 5px; /* Set border radius */\n    padding: 8px 16px; /* Add padding */\n    margin-left: 5px; /* Adjust left margin */\n    cursor: pointer; /* Set cursor */\n    font-family: 'Montserrat', sans-serif; /* Set font family */\n    font-weight: bold; /* Set font weight */\n    font-size: 20px; /* Set font size */\n  }\n"]);return c=function(){return e},e}function d(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("b",{children:e.timeText}),(0,s.jsx)("i",{children:e.event.title})]})}let u=r(9712).ZP.div(c());t.default=e=>{let{events:t}=e,[r,o]=(0,n.useState)(t||[]),c=(e,t)=>{o([...r,{title:e||"New Event",start:t||new Date,allDay:!0}])};return(0,n.useEffect)(()=>{c("Birthday Party",new Date(2024,4,25))},[]),(0,s.jsx)(u,{className:"flex justify-end mr-[80px] mt-5 mb-6",children:(0,s.jsx)(l.Z,{plugins:[a.Z,i.ZP],initialView:"dayGridMonth",weekends:!0,events:r,eventContent:d,customButtons:{addEventButton:{text:"Add Event",click:c}},headerToolbar:{start:"title",center:"addEventButton",end:"prev,next"}})})}},489:function(e,t,r){"use strict";var o=r(7437);r(2265),t.Z=e=>{let{message:t,onConfirm:r,onCancel:s,onClose:n,icon:l}=e;return(0,o.jsxs)("div",{className:"confirmation-dialog bg-white h-[350px] w-[300px] rounded-[24px] drop-shadow-xl flex flex-col justify-start pt-[60px] pb-[60px] text-center text-LightBlue",children:[(0,o.jsx)("div",{className:"mt-2 ml-2 mr-2 absolute top-0 right-0",children:(0,o.jsx)("img",{src:"/icons/icons8-close.svg",alt:"Close Icon",className:"w-8 cursor-pointer    hover:bg-red-300 hover:rounded-[10px] transition-all duration-200",onClick:n})}),l&&(0,o.jsx)("div",{className:"flex justify-center mb-3",children:(0,o.jsx)("img",{src:l,alt:"Icon",className:"w-20 h-20"})}),(0,o.jsx)("p",{className:"font-Roboto font-bold text-2xl",children:t}),(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{className:"ml-2 mr-2 mt-10 w-[100px] rounded-2xl font-Lato font-bold text-xl border-Goldy border  hover:bg-green-200 hover:border-none transition-all duration-200",onClick:r,children:"Confirm"}),(0,o.jsx)("button",{className:"ml-2 mr-2 mt-10 w-[100px] rounded-2xl font-Lato font-bold text-xl border-Goldy border  hover:bg-red-200 hover:border-none transition-all duration-200",onClick:s,children:"Cancel"})]})]})}},7092:function(e,t,r){"use strict";r.r(t);var o=r(7437);r(2265),t.default=()=>(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/icons/carbon_email.svg",alt:"Email Icon",className:"mr-5 ml-5"})})},1794:function(e,t,r){"use strict";r.r(t);var o=r(7437),s=r(2265),n=r(7908);t.default=()=>{let[e,t]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async()=>{try{let e=await n.Z.get("".concat("http://localhost:5000/api","/recent-applicants"));t(e.data.slice(0,7))}catch(e){console.error("Error fetching recent applicants:",e)}})()},[]),(0,o.jsxs)("div",{className:"text-white h-[260px] w-[500px] bg-white rounded-[20px] mt-1 flex flex-col",children:[(0,o.jsx)("h1",{className:"pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold",children:"New Applicants"}),(0,o.jsx)("div",{className:"px-5 pt-3 flex flex-col",style:{overflowY:"auto"},children:e.map((e,t)=>(0,o.jsxs)("div",{className:"mb-2 flex items-center",children:[(0,o.jsx)("img",{src:e.recruitPicture,alt:"Profile",className:"h-12 w-12 rounded-full mr-4"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"text-lg font-Montserrat text-LightBlue",children:e.recruitFullName}),(0,o.jsx)("p",{className:"text-sm font-Montserrat text-gray-500",children:e.desiredProfession})]})]},t))})]})}},7270:function(e,t,r){"use strict";r.r(t);var o=r(7437);r(2265),t.default=()=>(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/icons/carbon_notification-filled.svg",alt:"Notification Icon",className:"mr-5 ml-5"})})},8748:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var o=r(7437),s=r(2265),n=r(6123);r(8062);var l=r(7908),a=e=>{let{onEdit:t,onDelete:r}=e;return(0,o.jsxs)("div",{className:"dropdown-box w-[110px]",children:[(0,o.jsxs)("div",{className:"dropdown-item font-Lato hover:bg-gray-200 hover:rounded-[10px] hover:font-bold transition-all duration-200",onClick:t,children:[(0,o.jsx)("img",{src:"/icons/carbon_edit.svg",alt:"Dashboard Icon",className:"inline-block mr-2 w-[24px]"}),"Edit"]}),(0,o.jsxs)("div",{className:"dropdown-item font-Lato hover:bg-gray-200 hover:rounded-[10px] hover:font-bold transition-all duration-200",onClick:r,children:[(0,o.jsx)("img",{src:"/icons/carbon_trash-can.svg",alt:"Dashboard Icon",className:"inline-block mr-2 w-[24px]"}),"Delete"]})]})},i=e=>{let{recruit:t,onClose:r,recruitId:a}=e,[i,c]=(0,s.useState)(t.recruitFullName||""),[d,u]=(0,s.useState)(t.desiredProfession||""),[x,p]=(0,s.useState)(t.recruitmentStatus||""),[m,h]=(0,s.useState)(t.recruitContactInfo||""),[f,b]=(0,s.useState)(null),[g,j]=(0,s.useState)(null);(0,s.useEffect)(()=>{t&&(c(t.recruitFullName||""),u(t.desiredProfession||""),p(t.recruitmentStatus||""),h(t.recruitContactInfo||""))},[t]);let v=async e=>{e.preventDefault();let t=new FormData;t.append("name",i),t.append("position",d),t.append("status",x),t.append("contact",m),f&&t.append("picture",f),g&&t.append("file",g);try{let e=await l.Z.put("".concat("http://localhost:5000/api","/recruit/").concat(a),t);console.log("Recruit updated:",e.data),n.Am.success("Recruit successfully edited!",{position:"top-center",autoClose:900}),setTimeout(()=>{window.location.reload()},1e3)}catch(e){console.error("Error updating recruit:",e),n.Am.error("Error editing recruit")}};return(0,s.useEffect)(()=>{let e=localStorage.getItem("notification");e&&(n.Am.success(e),localStorage.removeItem("notification"))},[]),(0,o.jsxs)("div",{className:"h-[590px] w-[500px] bg-white rounded-[20px]",children:[(0,o.jsx)("div",{className:"mt-2 ml-2 mr-2 flex justify-end",children:(0,o.jsx)("img",{src:"/icons/icons8-close.svg",alt:"Close Icon",className:"w-8 cursor-pointer    hover:bg-red-300 hover:rounded-[10px] transition-all duration-200",onClick:r})}),(0,o.jsxs)("form",{className:"text-LightBlue  mt-1 flex justify-center flex-col items-center",onSubmit:v,children:[(0,o.jsx)("h1",{className:"text-2xl font-Montserrat font-bold m-5",children:"Edit Info"}),(0,o.jsx)("input",{type:"text",className:"border border-black h-[50px] rounded-[20px] px-2 placeholder-top-5 placeholder-left-10",placeholder:"Full Name",value:i,onChange:e=>c(e.target.value)}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",className:"border border-black h-[50px] rounded-[20px] px-2 placeholder-top-5 placeholder-left-10",placeholder:"Desired Position",value:d,onChange:e=>u(e.target.value)}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",className:"border border-black h-[50px] rounded-[20px] px-2 placeholder-top-5 placeholder-left-10",placeholder:"Recruitment Status",value:x,onChange:e=>p(e.target.value)}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",className:"border border-black h-[50px] rounded-[20px] px-2 placeholder-top-5 placeholder-left-10",placeholder:"Contact Info",value:m,onChange:e=>h(e.target.value)}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"file",className:"border border-black h-[30px] w-[300px] rounded-xl",accept:"image/png, image/jpeg",onChange:e=>b(e.target.files[0])}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"file",className:"border border-black h-[30px] w-[300px] rounded-xl",accept:"application/pdf",onChange:e=>j(e.target.files[0])}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{className:"text-black border border-black rounded-xl drop-shadow-xl font-Lato flex justify-center w-[100px]    hover:bg-Goldy hover:text-white hover:border-none transition-all duration-300 mb-5",type:"submit",children:"Submit"})]})]})},c=e=>{let{name:t,contactInfo:r,picturePath:s,resumePath:n,profession:l}=e;return(0,o.jsx)("div",{className:"h-[260px] w-[950px] bg-white mr-5 ml-5 mt-[23px] rounded-[20px]",children:(0,o.jsxs)("h1",{className:"pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-semibold",children:["Applicant Information",(0,o.jsxs)("div",{className:"flex justify-start",children:[(0,o.jsx)("img",{src:s,alt:"Applicant Pic",className:"w-[175px] h-[175px] ml-5 mr-5 mb-5 mt-2 rounded-xl"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-[20px] mt-2 font-normal",children:t}),(0,o.jsxs)("h2",{className:"text-[20px] flex gap-x-5 font-normal",children:["Contact Info: ",r]}),(0,o.jsxs)("h2",{className:"text-[20px] flex gap-x-5 font-normal",children:["Resume:",(0,o.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("img",{src:"/icons/mdi_resume.svg",alt:"Resume",className:"w-7 cursor-pointer"})})]}),(0,o.jsxs)("h2",{className:"text-[20px] flex gap-x-5 font-normal",children:["Desired Position: ",l]}),(0,o.jsxs)("div",{className:"flex justify-start gap-x-5",children:[(0,o.jsx)("img",{className:"mt-[10px] w-8 h-8",src:"/icons/mail.svg"}),(0,o.jsx)("img",{className:"mt-[10px] w-9 h-8",src:"/icons/carbon_logo-facebook-LB.svg"}),(0,o.jsx)("img",{className:"mt-[10px] w-9 h-8",src:"/icons/carbon_logo-linkedin-LB.svg"})]})]})]})]})})},d=r(489),u=e=>{let{onClose:t}=e,[r,a]=(0,s.useState)(""),[i,c]=(0,s.useState)(""),[d,u]=(0,s.useState)(""),[x,p]=(0,s.useState)(""),[m,h]=(0,s.useState)(""),[f,b]=(0,s.useState)(""),g=async e=>{e.preventDefault();let t=new FormData;t.append("name",r),t.append("position",i),t.append("status",d),t.append("contact",x),t.append("picture",m),t.append("file",f);try{let e=await l.Z.post("".concat("http://localhost:5000/api","/recruit"),t);console.log("Recruit added successfully:",e.data),n.Am.success("Recruit successfully added!",{position:"top-center",autoClose:800}),setTimeout(()=>{window.location.reload()},1e3)}catch(e){console.error("Error adding recruit:",e)}};return(0,s.useEffect)(()=>{let e=localStorage.getItem("notification");e&&(n.Am.success(e),localStorage.removeItem("notification"))},[]),(0,o.jsxs)("div",{className:"h-[590px] w-[500px] bg-white rounded-[20px]",children:[(0,o.jsx)("div",{className:"mt-2 ml-2 mr-2 flex justify-end",children:(0,o.jsx)("img",{src:"/icons/icons8-close.svg",alt:"Close Icon",className:"w-8 cursor-pointer hover:bg-red-300 hover:rounded-[10px] transition-all duration-200",onClick:t})}),(0,o.jsxs)("form",{className:"text-LightBlue  mt-1 flex justify-center flex-col items-center",onSubmit:g,children:[(0,o.jsx)("h1",{className:"text-2xl font-Montserrat font-bold m-5",children:"Add Recruit"}),(0,o.jsx)("input",{type:"text",className:"border border-black h-[50px] rounded-[20px] px-2 placeholder-top-5 placeholder-left-2",placeholder:"Full Name",required:!0,onChange:e=>a(e.target.value)}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",className:"border border-black h-[50px] rounded-[20px] px-2 placeholder-top-5 placeholder-left-2",placeholder:"Desired Position",required:!0,onChange:e=>c(e.target.value)}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",className:"border border-black h-[50px] rounded-[20px] px-2 placeholder-top-5 placeholder-left-2",placeholder:"Recruitment Status",required:!0,onChange:e=>u(e.target.value)}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",className:"border border-black h-[50px] rounded-[20px] px-2 placeholder-top-5 placeholder-left-2",placeholder:"Contact Info",required:!0,onChange:e=>p(e.target.value)}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"file",className:"border border-black h-[30px] w-[300px] rounded-xl",accept:"image/png, image/jpeg",required:!0,onChange:e=>h(e.target.files[0])}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"file",className:"border border-black h-[30px] w-[300px] rounded-xl",accept:"application/pdf",required:!0,onChange:e=>b(e.target.files[0])}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{className:"text-black border border-black rounded-xl drop-shadow-xl font-Lato flex justify-center w-[100px] hover:bg-Goldy hover:text-white hover:border-none transition-all duration-300 mb-5",type:"submit",children:"Submit"})]}),(0,o.jsx)("div",{})]})},x=()=>{let[e,t]=(0,s.useState)([]),[r,x]=(0,s.useState)(null),[p,m]=(0,s.useState)(!1),[h,f]=(0,s.useState)(null),[b,g]=(0,s.useState)(!1),[j,v]=(0,s.useState)(!1),[w,N]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(async()=>{try{let e=await l.Z.get("".concat("http://localhost:5000/api","/recruit"));t(e.data)}catch(e){console.error("Error fetching recruitment data:",e)}})()},[]);let y=t=>{f(e[t])},S=async t=>{console.log("Edit clicked"),f(e[t]),v(!0)},k=async()=>{m(!0),v(!1)},C=async()=>{h&&g(!0)},E=async()=>{try{let e=await l.Z.delete("".concat("http://localhost:5000/api","/recruit/").concat(h._id));console.log("Recruit deleted successfully:",e.data),n.Am.success("Recruit successfully deleted!",{position:"top-center",autoClose:800}),setTimeout(()=>{window.location.reload()},1e3)}catch(e){console.error("Error deleting recruit:",e)}},P=()=>{N(!w)};return(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsxs)("div",{className:"h-[450px] w-[950px] bg-white mr-5 ml-5 mt-[23px] rounded-[20px] overflow-y-auto",children:[(0,o.jsx)("h1",{className:"pr-5 pl-5 pt-3 text-LightBlue text-2xl font-Montserrat font-bold",children:"Recruitment Progress"}),(0,o.jsx)("div",{className:"absolute top-[145px] right-[625px]",children:(0,o.jsx)("button",{className:"bg-NeonGreen hover:bg-Goldy transition-all duration-100 w-[80px] text-white font-Lato font-bold py-2 px-4 rounded-[24px] mt-3",onClick:P,children:"Add"})}),(0,o.jsxs)("div",{className:"pr-5 pl-5",children:[(0,o.jsxs)("div",{className:"text-LightBlue font-Montserrat flex justify-between pt-3 mr-[100px]",children:[(0,o.jsx)("div",{className:"text-lg font-bold",style:{width:"20%"},children:"Full Name"}),(0,o.jsx)("div",{className:"text-lg font-bold",style:{width:"10%"},children:"Profession"}),(0,o.jsx)("div",{className:"text-lg font-bold",style:{width:"20%"},children:"Status"})]}),e.map((e,t)=>(0,o.jsxs)("div",{className:"text-LightBlue font-Montserrat flex justify-between pt-3 mr-[100px] cursor-pointer hover:text-Goldy hover:font-bold transition-all ease-in",onMouseLeave:()=>x(null),children:[(0,o.jsxs)("div",{style:{width:"30%",position:"relative"},onClick:()=>y(t),children:[e.recruitFullName,(0,o.jsx)("img",{src:"/icons/carbon_overflow-menu-vertical.svg",alt:"Overflow Menu Icon",className:"inline-block ml-5 ".concat(r===t?"shift-left":""),style:{position:"absolute",top:"50%",left:"305%",transform:"translateY(-50%)"},onMouseEnter:()=>x(t),onClick:()=>S(t)}),r===t&&(0,o.jsx)(a,{onEdit:S,onDelete:C})]}),(0,o.jsx)("div",{style:{width:"20%"},children:e.desiredProfession}),(0,o.jsx)("div",{style:{width:"20%"},children:e.recruitmentStatus})]},t))]}),j&&(0,o.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10",children:(0,o.jsx)(d.Z,{message:"Are you sure you want to edit this recruit?",onConfirm:k,onCancel:()=>{v(!1)},onClose:()=>v(!1),icon:"/icons/carbon_edit.svg"})}),b&&(0,o.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10",children:(0,o.jsx)(d.Z,{message:"Are you sure you want to delete this recruit?",onConfirm:E,onCancel:()=>{g(!1)},onClose:()=>g(!1),icon:"/icons/carbon_trash-can.svg"})}),(0,o.jsx)(n.Ix,{}),p&&(0,o.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10",children:(0,o.jsx)(i,{isOpen:p,onClose:()=>m(!1),recruit:h,recruitId:h._id})}),w&&(0,o.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-10",children:(0,o.jsx)(u,{onClose:P})}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}),h&&(0,o.jsx)("div",{className:"",children:(0,o.jsx)(c,{name:h.recruitFullName,contactInfo:h.recruitContactInfo,picturePath:h.recruitPicture,resumePath:h.pdf,profession:h.desiredProfession})})]})}},5498:function(e,t,r){"use strict";r.r(t);var o=r(7437);r(2265),t.default=()=>(0,o.jsxs)("div",{className:"mb-5 ml-8 px-3 flex justify-left text-white text-xl font-Lato",children:[(0,o.jsx)("img",{src:"/icons/carbon_settings.svg",alt:"Settings Icon",className:"inline-block mr-2"}),"Settings"]})}},function(e){e.O(0,[554,250,908,604,778,971,69,744],function(){return e(e.s=7033)}),_N_E=e.O()}]);