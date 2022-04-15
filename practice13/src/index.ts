import SaySomething from "./saySomething";

const root:HTMLElement|null=document.getElementById('root');

const saySomething=new SaySomething("Hello Typescript");
saySomething.sayText(root)