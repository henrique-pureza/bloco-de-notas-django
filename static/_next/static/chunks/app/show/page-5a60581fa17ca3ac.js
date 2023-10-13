(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{1898:function(t,e,n){"use strict";n.d(e,{Z:function(){return F}});var r=n(791),a=n(3428),i=n(2265),o=n(7042),s=n(9538),l=n(5600),c=n(9975),h=n(5843),u=n(7927),d=n(6520),x=n(5702);function m(t){return(0,x.Z)("MuiSkeleton",t)}(0,d.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=n(7437);let f=["animation","className","component","height","style","variant","width"],p=t=>t,Z,j,v,b,w=t=>{let{classes:e,variant:n,animation:r,hasChildren:a,width:i,height:o}=t;return(0,l.Z)({root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]},m,e)},C=(0,s.F4)(Z||(Z=p`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,s.F4)(j||(j=p`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),S=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{let n=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",r=parseFloat(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,c.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(v||(v=p`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),C),({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.iv)(b||(b=p`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),k,(e.vars||e).palette.action.hover)),y=i.forwardRef(function(t,e){let n=(0,u.Z)({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:s,component:l="span",height:c,style:h,variant:d="text",width:x}=n,m=(0,r.Z)(n,f),p=(0,a.Z)({},n,{animation:i,component:l,variant:d,hasChildren:!!m.children}),Z=w(p);return(0,g.jsx)(S,(0,a.Z)({as:l,ref:e,className:(0,o.Z)(Z.root,s),ownerState:p},m,{style:(0,a.Z)({width:x,height:c},h)}))});var F=y},32:function(t,e,n){Promise.resolve().then(n.bind(n,3953))},3953:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(7437),a=n(6735),i=n(8938),o=n(3226),s=n(1898),l=n(7631),c=n(2265),h=n(4033);function u(){let t=(0,h.useSearchParams)(),e=t.get("titulo"),n=t.get("from"),[u,d]=(0,c.useState)({titulo:"",nota:""}),[x,m]=(0,c.useState)(!1),[g,f]=(0,c.useState)(""),[p,Z]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{async function t(t){try{let r=await fetch("http://localhost:8000/api/notas/".concat(t)),a=await r.json();d(a),Z(!1),n&&"newPage"===n?(m(!0),f('Nota "'.concat(e,'" criada com sucesso!'))):"editPage"===n&&(m(!0),f('Nota "'.concat(e,'" editada com sucesso!')))}catch(t){d({titulo:"",nota:""}),m(!0),f(String(t))}}e&&t(e)},[e,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{note:e,showing:!0}),(0,r.jsxs)(i.Z,{sx:{mt:3},children:[u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{variant:"h4",sx:{mb:2},children:u.titulo}),(0,r.jsx)(o.Z,{sx:{whiteSpace:"pre"},children:u.nota})]}),p&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{variant:"rectangular",width:150,height:40,sx:{mb:3}}),(0,r.jsx)(s.Z,{variant:"rectangular",height:20,sx:{mb:1}}),(0,r.jsx)(s.Z,{variant:"rectangular",height:20,sx:{mb:1}}),(0,r.jsx)(s.Z,{variant:"rectangular",height:20,sx:{mb:1}}),(0,r.jsx)(s.Z,{variant:"rectangular",height:20,sx:{mb:1}}),(0,r.jsx)(s.Z,{variant:"rectangular",height:20,sx:{mb:1}}),(0,r.jsx)(s.Z,{variant:"rectangular",height:20,sx:{mb:1}})]})]}),(0,r.jsx)(l.Z,{opened:x,message:g,onClose:()=>m(!1)})]})}},6735:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(7437),a=n(1867),i=n(4989),o=n(2653),s=n(3226),l=n(9050),c=n(9394),h=n(8982),u=n(2834),d=n(8757),x=n(9396),m=n(3391),g=n(6446),f=n(4033),p=n(2265),Z=n(7631),j=n(1396),v=n.n(j);function b(t){let{home:e,showing:n,note:j,creating:b,onCreate:w,editing:C,onEdit:k}=t,S=(0,f.useRouter)(),[y,F]=(0,p.useState)(!1),[R,E]=(0,p.useState)(!1),[N,$]=(0,p.useState)("");async function _(){try{let t=await fetch("http://localhost:8000/api/notas/".concat(j),{method:"DELETE"});204===t.status&&S.push("/?from=showPage")}catch(t){console.error(t),E(!0),$(String(t))}}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{position:"relative",color:"primary",children:(0,r.jsxs)(i.Z,{children:[(n||b||C&&j)&&(0,r.jsx)(o.Z,{edge:"start",color:"inherit",onClick:()=>C?S.push("/show?titulo=".concat(j)):S.push("/"),sx:{mr:2},children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)(v(),{href:"/",style:{display:"flex",flexGrow:1,color:"white",textDecoration:"none"},passHref:!0,children:(0,r.jsx)(s.Z,{variant:"h6",children:"Bloco de Notas"})}),e&&(0,r.jsx)(o.Z,{color:"inherit",onClick:()=>S.push("/new"),children:(0,r.jsx)(x.Z,{})}),n&&j&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{color:"inherit",onClick:()=>S.push("/edit?titulo=".concat(j)),sx:{mr:2},children:(0,r.jsx)(m.Z,{})}),(0,r.jsx)(o.Z,{color:"inherit",onClick:()=>F(!0),children:(0,r.jsx)(g.Z,{})})]}),b&&w&&(0,r.jsx)(l.Z,{color:"inherit",onClick:()=>w(),children:"Criar"}),C&&k&&(0,r.jsx)(l.Z,{color:"inherit",onClick:()=>k(),children:"Editar"})]})}),(0,r.jsxs)(c.Z,{open:y,onClose:()=>F(!1),children:[(0,r.jsx)(h.Z,{children:"Tem certeza de que deseja deletar esta nota?"}),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(l.Z,{color:"primary",onClick:()=>F(!1),children:"Cancelar"}),(0,r.jsx)(l.Z,{color:"error",onClick:()=>_(),children:"Deletar"})]})]}),(0,r.jsx)(Z.Z,{opened:R,message:N,onClose:()=>E(!1)})]})}},7631:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(7437),a=n(7292),i=n(2653),o=n(3533);function s(t){let{opened:e,message:n,onClose:s}=t;return(0,r.jsx)(a.Z,{open:e,autoHideDuration:2e3,onClose:()=>s(),message:n,action:(0,r.jsx)(i.Z,{size:"small",color:"inherit",onClick:()=>s(),children:(0,r.jsx)(o.Z,{fontSize:"small"})})})}}},function(t){t.O(0,[394,971,864,744],function(){return t(t.s=32)}),_N_E=t.O()}]);