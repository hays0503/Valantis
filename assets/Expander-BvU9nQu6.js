import{F as n,U as l}from"./FetchData-DGwEyyRR.js";import{r as d,j as s}from"./index-BO-fgaC1.js";const _=()=>{let c=new Map;return async(r,a)=>{const e=JSON.stringify(a);if(c.has(e)){const t=c.get(e);return console.log("from cache useGetFields"),t}else{console.log("miss cache useGetFields");const t=await n(r,{action:"get_fields",params:{field:a,offset:0,limit:9e3}}),o=l(t.result);return c.set(e,o),o}}},p="_expander_1k2hr_1",x="_expanderHeader_1k2hr_15",i={expander:p,expanderHeader:x},g="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20330%20330'%20xml:space='preserve'%3e%3cg%20id='XMLID_85_'%3e%3cpath%20id='XMLID_86_'%20d='M25.607,190.607L164.997,51.214l139.396,139.393C307.323,193.536,311.161,195,315,195%20c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213l-150.003-150C172.79,16.58,168.976,15,164.997,15%20s-7.794,1.581-10.607,4.394l-149.997,150c-5.858,5.858-5.858,15.355,0,21.213C10.251,196.465,19.749,196.465,25.607,190.607z'/%3e%3cpath%20id='XMLID_87_'%20d='M175.603,139.393c-2.813-2.813-6.628-4.393-10.606-4.393c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150%20c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213-0.001l139.39-139.393l139.397,139.394%20C307.323,313.536,311.161,315,315,315c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.603,139.393z'/%3e%3c/g%3e%3c/svg%3e",w="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20330%20330'%20xml:space='preserve'%3e%3cg%20id='XMLID_88_'%3e%3cpath%20id='XMLID_89_'%20d='M304.394,139.394l-139.39,139.393L25.607,139.393c-5.857-5.857-15.355-5.858-21.213,0.001%20c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150%20c5.858-5.858,5.858-15.355,0-21.213C319.749,133.536,310.251,133.535,304.394,139.394z'/%3e%3cpath%20id='XMLID_90_'%20d='M154.398,190.607c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150%20c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-139.39,139.393L25.607,19.393%20c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L154.398,190.607z'/%3e%3c/g%3e%3c/svg%3e",v=c=>{const{Header:r,children:a}=c,[e,t]=d.useState(!1);return s.jsxs("div",{className:i.expander,children:[s.jsxs("div",{className:i.expanderHeader,onClick:()=>t(!e),children:[s.jsx("img",{src:e?g:w}),s.jsx("h4",{children:r})]}),e&&s.jsx(s.Fragment,{children:a})]})};export{v as E,_ as u};
