/*! For license information please see 0983b074.ce2b523e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(135)),l=n(141),c=n(140),o=n(138),s={id:"first-app",title:"Build your first AI Face Application",sidebar_label:"First App"},u={id:"get-started/first-app",title:"Build your first AI Face Application",description:"Whether you are a Startup, Maker or a hobbyist",source:"@site/docs/get-started/first-app.md",permalink:"/shunyaface/docs/get-started/first-app",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/get-started/first-app.md",sidebar_label:"First App",sidebar:"intro",previous:{title:"Face Recognition",permalink:"/shunyaface/docs/demos/face-recognition"}},b=[{value:"So Lets start to build an AI application which counts number if faces in image.",id:"so-lets-start-to-build-an-ai-application-which-counts-number-if-faces-in-image",children:[]},{value:"Step 1: Install Shunya OS",id:"step-1-install-shunya-os",children:[{value:"What will you need.",id:"what-will-you-need",children:[]},{value:"Install Etcher",id:"install-etcher",children:[]},{value:"Flash Shunya OS",id:"flash-shunya-os",children:[]},{value:"Booting Up with Shunya OS",id:"booting-up-with-shunya-os",children:[]}]},{value:"Step 2: Write a program",id:"step-2-write-a-program",children:[]},{value:"Step 3: Run your program",id:"step-3-run-your-program",children:[{value:"Compile and Run",id:"compile-and-run",children:[]}]}],p={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Whether you are a Startup, Maker or a hobbyist\nyou can use our API's to build AI Face products on Embedded Devices."),Object(i.b)("h2",{id:"so-lets-start-to-build-an-ai-application-which-counts-number-if-faces-in-image"},"So Lets start to build an AI application which counts number if faces in image."),Object(i.b)("h2",{id:"step-1-install-shunya-os"},"Step 1: Install Shunya OS"),Object(i.b)("p",null,"Shunya Face is built on top of Shunya OS and comes pre-installed with Shunya Face.\nShunya OS is an linux-based OS that runs on your hardware, it light-weight and configurable."),Object(i.b)("h3",{id:"what-will-you-need"},"What will you need."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Chosen board and its peripherals"),Object(i.b)("li",{parentName:"ol"},"microSD card Reader/Adapter and microSD card  "),Object(i.b)("li",{parentName:"ol"},"Laptop/PC "),Object(i.b)("li",{parentName:"ol"},"A USB Camera")),Object(i.b)("h3",{id:"install-etcher"},"Install Etcher"),Object(i.b)("p",null,"Etcher allows you to Flash Shunya OS on the micro-SD card."),Object(i.b)(l.a,{defaultValue:"nix",values:[{label:"Windows",value:"win"},{label:"Ubuntu",value:"nix"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"nix",mdxType:"TabItem"},Object(i.b)("h4",{id:"for-ubuntu-1604"},"For Ubuntu 16.04"),Object(i.b)("p",null,"Installing Etcher is Simple, just run few commands in the terminal"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt update\n$ sudo apt install balena-etcher-electron\n"))),Object(i.b)(c.a,{value:"win",mdxType:"TabItem"},Object(i.b)("h4",{id:"for-windows-10"},"For Windows 10"),Object(i.b)("p",null,"Installing Etcher is Simple, download the executable file and Run."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.balena.io/etcher/"}),"balenaEtcher")," for Windows. "),Object(i.b)("li",{parentName:"ol"},"Run balenaEtcherSetup-xxx.exe")))),Object(i.b)("h3",{id:"flash-shunya-os"},"Flash Shunya OS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://releases.shunyaos.org/interfaces-images/"}),"Shunya OS")),Object(i.b)("li",{parentName:"ol"},"Right click on the downloaded zip file."),Object(i.b)("li",{parentName:"ol"},"Click Extract here."),Object(i.b)("li",{parentName:"ol"},"Open Etcher."),Object(i.b)("li",{parentName:"ol"},"Click Select Image."),Object(i.b)("li",{parentName:"ol"},"You will find the Shunya OS ",Object(i.b)("inlineCode",{parentName:"li"},".img")," file in the folder that we had extracted earlier. "),Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"shunya-aaaa-image-xxxx.img")," file."),Object(i.b)("li",{parentName:"ol"},"Insert SD card."),Object(i.b)("li",{parentName:"ol"},"Click on Flash. ")),Object(i.b)("img",{alt:"install-shunya-os-gif",src:Object(o.a)("img/install.gif")}),Object(i.b)("p",null,"This will load the micro-SD card with Shunya OS."),Object(i.b)("h3",{id:"booting-up-with-shunya-os"},"Booting Up with Shunya OS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Insert the micro-SD card into the board. "),Object(i.b)("li",{parentName:"ol"},"Connect peripherals like Keyboard, Mouse, HDMI monitor and USB Camera. "),Object(i.b)("li",{parentName:"ol"},"Connect Power Supply. ")),Object(i.b)("p",null,"The board should boot up with Shunya OS."),Object(i.b)("h4",{id:"login-to-shunya"},"Login to Shunya"),Object(i.b)("p",null,"Login with these credentials:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Username : shunya"),Object(i.b)("li",{parentName:"ul"},"Password : shunya ")),Object(i.b)("h2",{id:"step-2-write-a-program"},"Step 2: Write a program"),Object(i.b)("p",null,"Lets go through these APIs to understand which APIs are needed to make this\napplication."),Object(i.b)("p",null,"Refer following code to understand it better."),Object(i.b)(l.a,{defaultValue:"c++",values:[{label:"CPP",value:"c++"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"c++",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'/* Include header files */\n#include <iostream>\n#include <vector>\n#include <opencv2/opencv.hpp>\n#include <fstream>\n#include <cstring>\n\n#include <fr/shunyaface.h>\n#define DATABASE "./db.txt" \n\nusing namespace cv;\nusing namespace std;\n\nint main(int argc, char *argv[])\n{\n\n        /* Variable to Store frame */\n        Mat frame;\n        VideoCapture cap;\n        if(!cap.open(0))\n            return 0;\n        for(;;)\n        {\n            cap >> frame;\n            if( frame.empty() ) break; // end of video stream\n            if( waitKey(10) == 27 ) break; // stop capturing by pressing ESC \n            /* Initialize the variables */\n            vector<FaceInfo> detFaces;\n\n        if(! frame.data )// Check for invalid input\n        {\n         cout <<  "Could not open or find the image" << std::endl ;\n         return -1;\n        }\n            cout<<"img read!"<<endl;  \n            /**\n             * Detect the face \n             */\n\n         detFaces = detectFace(frame);\n\n         if (detFaces.size() > 0) {\n          cout<<"\\nFace Detected!"<<endl;\n                  cout<<"\\nNumber of faces detected:"<<detFaces.size();\n          }\n              else {\n                cout<<"No Face Detected!!\\n";       \n          }\n            }\n    return 0;\n}\n}\n'))),Object(i.b)(c.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"comingsoon = 1\n"))),Object(i.b)(c.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var commingsoon = 1;\n")))),Object(i.b)("h2",{id:"step-3-run-your-program"},"Step 3: Run your program"),Object(i.b)("h3",{id:"compile-and-run"},"Compile and Run"),Object(i.b)("p",null,"Compiling code is same as compiling C++ program with CMake file. CMake file is provided by us.\nYou just need to make small changes in it to make it run. Lets look at current demo. "),Object(i.b)("p",null,"We just need to specify the cpp file path in CMake (5th line) and done."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'cmake_minimum_required(VERSION 3.8)\nadd_definitions(-DCPU_ONLY)\nSET(SRC\n    # Give path of the cpp file here \n         src/nooffaces.cpp\n)\n\nSET(INC_DIR /usr)\nSET(Caffe_DIR /home/sneha/Desktop/caffe/distribute)\nfind_package(OpenMP)\nif(OPENMP_FOUND)\n    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} ${OpenMP_C_FLAGS}")\n    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${OpenMP_CXX_FLAGS}")\nendif()\nfind_package( OpenCV REQUIRED)\n\nset(CMAKE_BUILD_TYPE release)\nset(CMAKE_CXX_STANDARD 11)\nadd_definitions(-fPIC)\nadd_definitions(-Ofast)\nadd_definitions(-ffast-math)\n\ninclude_directories(${OpenCV_DIR}/include)\ninclude_directories(/usr/include/fr/)\ninclude_directories(/usr/include/fr/models/)\ninclude_directories(${Caffe_DIR}/include)\ninclude_directories(${INC_DIR}/include)\nadd_executable(shunyafaceex ${SRC})\nTARGET_LINK_LIBRARIES(shunyafaceex ${OpenCV_LIBS} -lboost_system -lshunyaface)\n')),Object(i.b)("p",null,"Compile the program. Run following commands where CMakeLists.txt file is"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ mkdir build\n$ cd build && cmake ..\n$ make -j4  \n")),Object(i.b)("p",null,"This will build the program and make it into a binary executable."),Object(i.b)("p",null,"Now Lets run it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# To get number of faces in frame\n./shunyafaceex\n")))}d.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,h=b["".concat(l,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},136:function(e,t,n){"use strict";var a=n(0),r=n(34);t.a=function(){return Object(a.useContext)(r.a)}},137:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(136);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},139:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r},140:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},141:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139);var l=function(){return Object(a.useContext)(i.a)},c=n(137),o=n.n(c),s=n(92),u=n.n(s);const b=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:c,groupId:s}=e,{tabGroupChoices:d,setTabGroupChoices:h}=l(),[m,f]=Object(a.useState)(i);if(null!=s){const e=d[s];null!=e&&e!==m&&f(e)}const O=e=>{f(e),null!=s&&h(s,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:o()("tabs__item",u.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}}}]);