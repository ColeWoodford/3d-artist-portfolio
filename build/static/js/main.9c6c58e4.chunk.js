(this["webpackJsonp3d-artist-portfolio"]=this["webpackJsonp3d-artist-portfolio"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,r,i,o,c,s=n(1),d=n.n(s),l=n(29),u=n.n(l),p=n(4),m=n(5),h=n(19),g=n(50),f=n(51),b=n(2);var A,j=m.a.nav(a||(a=Object(p.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 10px;\n  padding: 10px;\n\n  @media (max-width: 500px) {\n    grid-auto-flow: row;\n  }\n"]))),w=Object(m.a)(h.b)(r||(r=Object(p.a)(["\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  & span {\n    font-size: 1.5rem;\n  }\n  & h2 {\n    margin-left: 0.5rem;\n  }\n"]))),v=m.a.a(i||(i=Object(p.a)(["\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"]))),x=Object(m.a)(f.a)(o||(o=Object(p.a)(["\n  margin-left: 0.5rem;\n  font-size: 2rem;\n"]))),O=m.a.header(c||(c=Object(p.a)(["\n  grid-area: header;\n  display: flex;\n  align-items: center;\n\n  padding: 0 6rem;\n\n  background: #414141;\n  border-bottom: 2px solid #ffffff;\n  color: #000;\n\n  height: 5rem;\n"]))),y=function(){return Object(b.jsxs)(O,{children:[Object(b.jsxs)(w,{to:"/home",children:[Object(b.jsx)(g.a,{}),Object(b.jsx)("h2",{children:"Cole Woodford's Portfolio"})]}),Object(b.jsx)("div",{style:{flex:1}}),Object(b.jsx)(j,{children:Object(b.jsxs)(v,{href:"https://github.com/ColeWoodford",children:["GitHub ",Object(b.jsx)(x,{})]})})]})};var E,k,S,C,R,B=m.a.footer(A||(A=Object(p.a)(["\n  grid-area: footer;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  align-self: end;\n\n  background: #414141;\n  border-top: 2px solid #ffffff;\n  color: #000;\n\n  height: 5rem;\n"]))),z=function(){return Object(b.jsx)(B,{})},P=n(14);var N,Q=m.a.div(E||(E=Object(p.a)(['\n  background: rgba(255, 255, 255, 0.35);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  box-sizing: border-box;\n  box-shadow: 0px 8px 32px rgba(186, 186, 186, 0.37);\n  backdrop-filter: blur(17px);\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    "image"\n    "icons"\n    "title"\n    "type"\n    "description";\n\n  overflow: hidden;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.45);\n  }\n']))),H=m.a.div(k||(k=Object(p.a)(["\n  grid-area: image;\n  border-bottom: 1px solid #aaa;\n\n  & img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    border-radius: 4px 4px 0 0;\n  }\n"]))),T=m.a.h2(S||(S=Object(p.a)(["\n  margin: 0;\n  padding: 0 1rem;\n"]))),W=m.a.div(C||(C=Object(p.a)(["\n  padding: 0 1rem;\n"]))),D=m.a.span(R||(R=Object(p.a)(["\n  color: #506aff;\n  font-weight: 700;\n"]))),I=function(e){var t=e.config,n=Object(s.useState)(null),a=Object(P.a)(n,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){if(r){var e=window.open("".concat(r),"_self");null===e||void 0===e||e.focus(),i(null)}}),[r]),Object(b.jsxs)(Q,{onClick:function(){i(t.route)},children:[Object(b.jsx)(H,{style:{height:"15rem"},children:Object(b.jsx)("img",{src:t.image,alt:"card thumbnail"})}),Object(b.jsx)(T,{children:t.title}),Object(b.jsxs)(W,{children:[t.strong&&Object(b.jsx)(D,{children:t.strong}),t.description,t.codeLink&&Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:t.codeLink,onClick:function(e){return e.stopPropagation()},children:"See Code Here"})})]})]})},M=n.p+"static/media/block_jump.7bec74df.png",G=n.p+"static/media/hanford_tank.c49b4d21.png",L=n.p+"static/media/shmups.613209a3.png",X=n.p+"static/media/space.671f3179.png",Z=n.p+"static/media/balloon.07e57a6c.png",J=n.p+"static/media/crates.79bbdac5.png",U=n.p+"static/media/runner.ca7197bd.png",q=[{title:"PLAY: Space Trader UI",image:X,route:"https://tubular-naiad-609993.netlify.app/",description:"A web-based mmo game using a 3rd party API. This is a work in progress, but I am building a game that interacts with the Space Trader MMO API. Currently the user can manage their character and start the game. They can see the starting zone and move around the planets.",codeLink:"https://github.com/ColeWoodford/unity-space-trader"},{title:"PLAY: Clicky Crates",image:J,route:"https://chic-taiyaki-e46dd6.netlify.app/",description:"A clicking game with a UI. Select what difficulty you want to play, then click the crates for points but avoid the skulls!",codeLink:"https://github.com/ColeWoodford/unityClickyCrates"},{title:"PLAY: Soccer Game",image:n.p+"static/media/soccer.c08e878b.png",route:"https://fluffy-daifuku-7caa16.netlify.app/",description:"Play a game of soccer against waves of enemies. At the end of each round the number of opponents increases by 1. Use the yellow powerup to send them flying!",codeLink:"https://github.com/ColeWoodford/unitySoccerWaves"},{title:"PLAY: Endless Runner",image:U,route:"https://eloquent-pastelito-1806bc.netlify.app/",description:"Endless runner made with Unity. Press the spacebar to jump and double jump. Avoid obstacles while your character runs endlessly.",codeLink:"https://github.com/ColeWoodford/unityJumpScroller"},{title:"PLAY: Balloon Sidescroller",image:Z,route:"https://beautiful-cascaron-ddd262.netlify.app/",description:"Sidescroller game where the user controls a balloon. Press the space bar to bounce through the air. Collect money and avoid bombs or its game over!",codeLink:"https://github.com/ColeWoodford/unityBalloon"},{title:"DEMO: ThreeJS Compass Widget",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAADvCAYAAAAghWvjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAs7SURBVHhe7dxNjuPIFYVRr6GWUWs00Hvy2PAGPPEaPKpdlBFt0I56dam/JB9J6QwO2plJKqWIeB+kRLf/8u3bt58AHQQHaCM4QBvBAdoIDtBGcIA2ggO0ERygjeAAbQQHaCM4QBvBAdoIDtBGcIA2ggO0ERygjeAAbQQHaCM4QBvBAdoIDtBGcIA2ggO0ERygjeAAbQQHaCM4QBvBAdoIDtBGcIA2ggO0ERygjeAAbQQHaCM4QBvBAdoIDtBGcIA2ggO0ERygjeAAbQQHaCM4QBvBAdoIDtBGcIA2ggO0ERygjeAAbQQHaCM4QBvBAdoIDtBGcIA2ggO0ERygjeAAbQQHaCM4QBvBAdoIDtBGcIA2ggO0ERygjeAAbQQHaCM4rPrrP3+uStfDPYLDb1Jg1qT7YY3g8JsUljXpflgjOEQpLlW6D24RHFalyCzS9XCP4LAqhWaRrod7BIebxIYtCQ6rUmwW6Xq4R3A+WArJVtLvA8H5ICkMXdLz4fMIzptLw3+09Dz5DILzhtKQ3/LHP3784vv3778Z16Xv13vrY9+Tnj/vS3DeSBroZC0qW3smQOn18H4E5w2kAa66IrPm0fik18f7EJwLSwM7Ozoyax6JT3q9XJ/gXFAa0Fka8rNKz3+WXj/XJTgXk4ZycdZ3NPfce8eT1oFrEpyLSIO4uGpoKuF5f4JzAWn4hncJTXUrPGl9uA7BObk0dO8ammotPGmduAbBObE0bJ8Sm4XovBfBOaE0YEMayE+R1mNI68d5Cc7JpKH6tHc1a7zbuT7BOZE0TGLzK9G5NsE5iTREYpOJznUJzgmk4UmDxq/SuqX15TwE52BpaNJwkaX1S+vMOQjOweqwfPLHqL/968efnvlZ+niV1plzEJwD1UH59L/ZLFFJYVn7/iA61yE4B6kD8umxGebg1Lik781E5xoE5wB1MIY0RJ9mjk2NS/peldY1rT/HEZxmaSjS8HyiOSo1MPXrNWl90z5wDMFpVochDc2nmqNSA1O/vqWucdoHjiE4jeog+LvNr25Fpv7sFn/POS/BaVSHIA3LJ6tRWb6ezdffUtc67Qf9BKdJHYA0JJ8uRWWOTf3ZPXXN077QS3CazAffR6lsLSqvBqd+tEr7Qi/BaTAf+iENB9sHZ6hrn/aHPoLTYD7w3t2suxWVV4PjXc65CM7O5sM+pKFgX3UP0j7RQ3B2VA+6dzfHqO9yhrRf7E9wdlQPeRoGetS9SPvF/gTnBX//98//ufX9+YCf5d3NeB6zdE1S77sl3X+08bzm/Zj3jT6C86J7wZkP9/DKHzy/okZgTbo3SfeuSfdXz1y7lbon897RQ3BeJDjr0v1Vum9I126l7sm8d/QQnBfV4Mxf1+CMQdoqOI8O5TzEt6R7k3TvmnR/le6r0n1fMR5z3pdl7+gjOC9aAjNHZvnf86EevhqbVwax3rMm3XtPepxZuufHH3/8afk63VfN92+l7s28p+xPcL5g7+CkIRzStdWr921tCc0cmyE9v2q+fit1b+b9ZH+C8wWPBGcMzrPBqYNXpXvOZg5NCs4svcYhXTt79LrZuH7en3k/2Z/gfEENzvjnfJiHEZtPCU6KzCJdv+bR1zmvySPXL+oezXvKvgTnC5bgzOGph/mVj1N1kGbp+qOlwFTpvq9K6zOka2d1j+q+sh/B+aJXg3NrMJ4doKOksKxJ939VXadZun5R96juKfsRnC+6FZy1j1P3huLewBwtBeWW9BhbWNYxSdfP5n2qe8p+BGdj80FOB/2ZoTiTHz9+xJg8Ij3eluY1fXRt531K+8g+BGdD8yEe5gP+ylCcyZmDs3hmbetepf1ke4KzoXqI5wM+D8OjQ3EWf8ZmEYJyS3q8vT2ytnWv0n6yPcHZUD3E8wG/amyGqwVnzbzuda/SfrI9wdnQfIBrVN4iNk9GJz3ekeb1H/+c9yvtJ9sTnA3NB7iGZT7sVxFjM4S4JOkxj7TswWLer7SfbE9wNjQf4KvFJYmxWYTAVOkxjyQ4xxOcDc0H+OrBiZGZhcDM0mMeTXCOJzgbmg/wlYMTA5OE0CzS456B4BxLcDY0H+BPDk56zDNZ9mber7Sf879FnqR7uE1wNjQf4KsGJ4bllgsGZzHvV9rPFJlZuofbBGdD8wG+YnBiUO65aHAe+UglLNsTnA3NB3hIB/3MYlAecbHYDHWv0n4KzvYEZ0P1EKeDflYxJI8SHB4kOBuqhzgd9DOKEXnWGwdnTbqH2wRnQ/UQD+mwn00MyAvSY5/R2Jdn/oazJt3DbYKzofkAz9KhP4sUjlekxz6jtD9D2k9h2Z7gbCgd5EU6/EdL4XhWetyzSvuySPspONsTnA2lg7xIA3C0FJBHpcc7u7Qvi7SfS3DWpHu4TXA2Nh/idMjrEBwlReSe9DhXkPZg/jrt45AiM0v3cJvgbGw+yLcO/JFSTG5Jj3EVa2s/fy/t45AiM0v3cJvgbGw+yEM69Mv3j5KikqR7r2Rt3ev30j6yD8HZWD3Mtw7/sPy8SwrLLN1zNWmdh7Wfp31kH4KzsXqYHxmEYb7uK+a3/OnnKTJDuvZq0roubl2X9pF9CM4O5sNc/yPO+WfJfO0z5tBUyzWfGJphvvaRf+GP/QjODuYDPcwHflGvqdI9t6TQzD4tMsMj96X9Yz+Cs4N6qNPBH+p1a9K9szksaz/7pNAM6d6hXpf2j/0Izk7mQ33v/xtnvvaedP8jwanfv5K0DmvS/Qsfp44nODuZD/aQBqCq9zxq3DtH58qRSa/vEemxqnpP2jf2JTg7qYc7DcCaeu+jUnQW6fecQXodz0iPuabem/aNfQnOjubDfe9j1Zr5MZ5Rg7N8P/2Ovc3Pawvpd9zj49Q5CM6O5gM+pEF4Rn28RQpL/Vn9/tWk9XhGfby0X+xPcHZUD/mr73KS+XHfNTjpdb+ivrsZ0n6xP8HZWT3oaSC2MEcnqc/jbNJr2kr9XWmf6CE4DebDvuW7nCqFZph//xmk574Xf7s5F8FpMB/4IQ3GlpbQpJ9V9bltIf2eo9TnlvaHPoLTZD70e77L4f+8uzkfwWkyH/whDQjbqmue9oVegtOoDkAaErZR1zrtB/0Ep1EdAh+t9lE/Sg1pP+gnOM3qIKSB4WvqGqd94BiC06wOw5CGhtek9U37wDEE5wBpKNLw8Jy0rmn9OY7gHKQOhr/nfI2/21yD4ByoDojovEZsrkNwDlYHRXSeIzbXIjgHq8MypMEiS+uX1plzEJwTSEOThotfpXVL68t5CM5JpOHx8SpLH6OGtK6ci+CcSBoi0fmV2Fyb4JxMGibR+S+xuT7BOaE0VEMawk+R1mNI68d5Cc6JpQH7tHc73tW8F8E5uTRsnxIdsXk/gnMBaeiGdw3PWmiGtD5ch+BcRBq+xbuE51ZohrQuXIvgXEwaxMVVwyM0n0NwLigN5SwN9Vml5z9Lr5/rEpwLSwM6O+s7nnvvaIb0erk+wXkDaWCro+PzSGSG9Pp4H4LzRtIAJ13xeTQyQ3o9vB/BeUNpoG8ZYZileKyp96bHvyU9f96X4Ly5NORHS8+TzyA4HyQNf5f0fPg8gvPBUhi2kn4fCA6rUkgW6Xq4R3CANoIDtBEcoI3gAG0EB2gjOEAbwQHaCA7QRnCANoIDtBEcoI3gAG0EB2gjOEAbwQHaCA7QRnCANoIDtBEcoI3gAG0EB2gjOEAbwQHaCA7QRnCANoIDtBEcoI3gAG0EB2gjOEAbwQHaCA7QRnCANoIDtBEcoI3gAG0EB2gjOEAbwQHaCA7QRnCANoIDtBEcoI3gAG0EB2gjOEAbwQHaCA7QRnCANoIDtBEcoI3gAG0EB2gjOECTbz//AzvEQummrPX3AAAAAElFTkSuQmCC",route:"/details/threeCompass",description:"Compass widget built with Three.js using targetted material indexes on separate faces. An orthographic camera follows the users control actions for movement. The renderer is split to show two scenes at once.",codeLink:"https://github.com/ColeWoodford/3d-artist-portfolio/blob/main/src/three/HUDOrthoScene.js"},{title:"DEMO: Blender Hanford Tank",image:G,route:"/details/threeTanks",description:"A 3D model of a tank at the Hanford Nuclear Site. Created using Blender. Steps to create this model are documented below the rendered object."},{title:"CODE: Multiplayer Block Jump",image:M,route:"https://github.com/ColeWoodford/block-jump",description:"Using Three.js and Socket.io, this multiplayer game tracks users logged in and how high they can jump up the blocks. A leaderboard displays the highscores."},{title:"CODE: Oculus Quest 2 Project Configs",image:"data:image/png;base64,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",route:"https://github.com/ColeWoodford/oculus-quest2-base",description:"Configuration settings for creating a Unity project for deployment to an Oculus Quest 2 VR headset. A convenient project boilerplate."},{title:"CODE: Unity 2D Shoot 'em up",image:L,route:"https://github.com/ColeWoodford/DinnerForShmups",description:"This game was created for a 24-hour hack-a-thon in Seattle with 4 other developers. It is a 2-dimensional shoot 'em up where the player controls a ship and destroys programming bugs."}];var Y=m.a.div(N||(N=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n\n  padding: 1rem 5rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));\n  grid-gap: 20px 10px;\n\n  @media (min-width: 900px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n  @media (max-width: 700px) {\n    grid-template-columns: 1fr;\n  }\n\n  background: linear-gradient(-45deg,#1f1f1f, #c9c8c8);\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),K=function(){return Object(b.jsx)(Y,{children:function(){var e=[];return q.forEach((function(t,n){e.push(Object(b.jsx)(I,{config:t},n))})),e}()})};var V,F=function(){return Object(b.jsx)("div",{children:"details"})},_=n(0),$=n(22),ee=n(18),te=n(17),ne=function(){function e(t){var n=t.width,a=t.height;Object(ee.a)(this,e),this.camera=new _.W(75,n/a,1,2e4),this.camera.rotation.order="YXZ"}return Object(te.a)(e,[{key:"getCamera",value:function(){return this.camera}},{key:"updateCameraRotation",value:function(e){var t=e.xyRotRef,n=e.zRotRef,a=e.xyRotation,r=e.zRotation,i=e.controlsRef;this.camera.rotation.y=a,this.camera.rotation.x=r,t.current=a,n.current=r,i.current.update()}},{key:"updateCameraPosition",value:function(e){var t=e.cameraPositionRef,n=e.cameraPosition,a=e.controlsRef;this.camera.position.x=n.x,this.camera.position.y=n.y,this.camera.position.z=n.z,t.current=n,a.current.update()}},{key:"fitCameraToPoints",value:function(e){var t=e.points,n=e.offset,a=e.onSetViewportDefaultPosition,r=e.controlsRef,i=e.scene,o=e.debugMode;n=n||1.25;var c=new _.e,s=new _.kb;c.setFromPoints(t),c.getBoundingSphere(s);var d=c.getCenter(),l=s.radius;if(l*=n,o){var u=new _.g(1,1e3,1),p=new _.N({color:65280}),m=new _.M(u,p);m.position.set(d.x,d.y,d.z),i.add(m);var h=new _.f(c,new _.k(0,255,0));i.add(h)}this.camera.position.x=0,this.camera.position.z=-l,this.camera.position.y=l,r.current.target.set(d.x,d.y,d.z),r.current.update(),this.camera.lookAt(d),this.camera.updateProjectionMatrix(),a({x:0,y:l,z:-l})}}]),e}(),ae=3381759,re=8438271,ie=function(e,t,n){e.current=new _.V(t/-2,t/2,n/2,n/-2,1,2e4),e.current.rotation.order="YXZ"},oe=function(e,t,n){var a=t.current;n.current=[];for(var r=new _.lb(200,32,32),i=new _.sb(200,7,32,32),o=new _.N({color:ae,vertexColors:_.p,side:_.n}),c=new _.N({color:ae,vertexColors:_.p}),s=new _.N({color:ae,vertexColors:_.p,side:_.c}),d=new _.N({opacity:.2,color:4276545,transparent:!0}),l=992;l<1056;l++)l%4===0?(r.faces[l].materialIndex=2,r.faces[l+1].materialIndex=2):2!==r.faces[l].materialIndex&&(r.faces[l].materialIndex=1);var u=new _.M(r,[d,o,c]),p=new _.M(i,s);p.scale.set(1.03,1.03,1.03),n.current.push(p),u.geometry.colorsNeedUpdate=!0,u.name="axisContainer",t.current.add(u),t.current.add(p),r=new _.l(20,40,32);var m=new _.N({color:ae});(u=new _.M(r,m)).rotateX(Math.PI),u.name="yCone",e.current.add(u),u.position.y=235;var h=new _.l(40,175,3),g=new _.N({color:16724787}),f=new _.M(h,g);f.name="redNeedle",f.rotateX(Math.PI/2),f.rotateY(Math.PI),f.position.set(0,0,87.5),e.current.add(f);var b=new _.N({color:16777215}),A=new _.M(h,b);A.name="whiteNeedle",A.rotateX(-Math.PI/2),A.position.set(0,0,-87.5),e.current.add(A),(new _.r).load("https://cdn.rawgit.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json",(function(t){r=new _.qb("N",{font:t,size:80,height:5,curveSegments:12,bevelEnabled:!0,bevelThickness:10,bevelSize:4,bevelSegments:5});var a=new _.N({color:re}),i=new _.M(r,a);i.position.set(0,0,250),i.scale.multiplyScalar(.5),i.name="nText",e.current.add(i),n.current.push(i),r=new _.qb("S",{font:t,size:80,height:5,curveSegments:12,bevelEnabled:!0,bevelThickness:10,bevelSize:4,bevelSegments:5});var o=new _.N({color:re});(i=new _.M(r,o)).position.set(0,0,-250),i.scale.multiplyScalar(.5),i.name="sText",e.current.add(i),n.current.push(i),r=new _.qb("W",{font:t,size:80,height:5,curveSegments:12,bevelEnabled:!0,bevelThickness:10,bevelSize:4,bevelSegments:5});var c=new _.N({color:re});(i=new _.M(r,c)).position.set(250,0,0),i.scale.multiplyScalar(.5),i.name="wText",e.current.add(i),n.current.push(i),r=new _.qb("E",{font:t,size:80,height:5,curveSegments:12,bevelEnabled:!0,bevelThickness:10,bevelSize:4,bevelSegments:5});var s=new _.N({color:re});(i=new _.M(r,s)).position.set(-250,0,0),i.scale.multiplyScalar(.5),i.name="eText",e.current.add(i),n.current.push(i)})),a.add(e.current)};var ce,se,de,le,ue=m.a.div(V||(V=Object(p.a)(["\n  width: 100%;\n  height: calc(100vh - 15rem);\n"]))),pe=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),n=Object(s.useRef)(),a=Object(s.useRef)(),r=Object(s.useRef)(),i=Object(s.useRef)(),o=Object(s.useRef)(),c=Object(s.useRef)(),d=Object(s.useRef)(),l=Object(s.useRef)();Object(s.useEffect)((function(){if(function(){var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return t&&t instanceof WebGLRenderingContext}()){e.current=new _.yb({antialias:!1});var s=e.current,m=t.current,h=m.clientWidth,g=m.clientHeight;n.current=new _.hb;var f=n.current;f.background=new _.k(1184274),r.current=new ne({width:h,height:g}),r.current.getCamera().position.z=-5,function(e){var t=e.sceneOrthoRef,n=e.axisWidgetRef,a=e.axisRaycasterRef,r=e.cameraOrthoRef,i=e.axisWidgetLookAtMeshesRef,o=e.width,c=e.height;t.current=new _.hb,t.current.background=new _.k(1184274),n.current=new _.t,ie(r,o,c),oe(n,t,i),a.current=new _.fb}({sceneOrthoRef:a,axisWidgetRef:c,axisRaycasterRef:l,cameraOrthoRef:i,axisWidgetLookAtMeshesRef:d,width:h,height:g}),o.current=new $.a(r.current.getCamera(),e.current.domElement),m.appendChild(s.domElement);var b=new _.g(1,1,1),A=new _.N({color:65280}),j=new _.M(b,A);return f.add(j),p(),s.setAnimationLoop((function(){p(),u()})),function(){e.current.setAnimationLoop((function(){})),t.current=null}}alert("WebGL is not enabled in this browser!")}));var u=function(){var s=e.current,l=t.current;if(null!=s&&null!=l){var u=l.clientWidth,p=l.clientHeight,m=i.current,h=r.current.getCamera();m.position.copy(h.position),m.position.sub(o.current.target),m.position.setLength(300),m.lookAt(c.current.position),d.current.forEach((function(e){e.quaternion.copy(m.quaternion)})),s.clear(),s.setScissorTest(!0),s.setScissor(0,0,u,p),s.setViewport(0,0,u,p),s.render(n.current,r.current.getCamera()),s.clearDepth(),s.setScissorTest(!0);var g=Math.min(u,p),f=p/4,b=u/4;m.zoom=g/1e3,m.left=u/-2,m.right=u/2,m.top=p/2,m.bottom=p/-2,m.updateProjectionMatrix(),s.setScissor(0,0,b,f),s.setViewport(0,0,b,f),s.render(a.current,i.current)}},p=function(){if(null!=e.current&&null!=t.current){var n=t.current,a=n.clientWidth,i=n.clientHeight,o=e.current.domElement,c=o.clientWidth,s=o.clientHeight;if(c!==a||s!==i){var d=r.current.getCamera(),l=a/i;d.aspect=l,d.updateProjectionMatrix(),e.current.setPixelRatio(window.devicePixelRatio),e.current.setSize(a,i)}}};return Object(b.jsx)(ue,{ref:t})},me=n(34),he=n.p+"static/media/tank_v2.c68fe913.glb",ge=[{instructions:"Create a sphere and cut it in half",images:[n.p+"static/media/step1_a.505a7a01.png",n.p+"static/media/step1_b.d7d19a48.png"]},{instructions:"2.\tCreate a face on the bottom of the dome and extrude to create a cylinder.",images:[n.p+"static/media/step2_a.afd25e66.png",n.p+"static/media/step2_b.81f66a39.png"]},{instructions:"3.\tScale on z-axis so the object becomes squashed.",images:[n.p+"static/media/step3_a.a1c79d09.png"]},{instructions:"4.\tExtrude a single face on top along the z-axis, then flatten the top by scaling the z-axis and assigning it a value of 0.",images:[n.p+"static/media/step4_a.0d908d5c.png"]},{instructions:"5.\tNear our new column, select another face and use the inset faces tool and extrude tool to create a small column. Flatten the top using the same scale trick as in step 4.",images:[n.p+"static/media/step5_a.b73fe43a.png",n.p+"static/media/step5_b.01e55a0b.png"]},{instructions:"6.\tUse inset faces and LoopTools -> Circle to create a circle face for a column.",images:[n.p+"static/media/step6_a.feb438b9.png",n.p+"static/media/step6_b.b7db87c3.png",n.p+"static/media/step6_c.1987f185.png",n.p+"static/media/step6_d.54b2d14b.png",n.p+"static/media/step6_e.0700d72d.png"]},{instructions:"7.\tTriangulate top of cylinder, then scale and extrude to create box on top.",images:[n.p+"static/media/step7_a.46c0218e.png",n.p+"static/media/step7_b.b56e5fe4.png"]},{instructions:"8.\tCreate 3 cylinders for the large pipe.",images:[n.p+"static/media/step8_a.42fd39f8.png"]},{instructions:"9.\tRemove end faces of the cylinders. Select the edge loops at the end of cylinders that need to be combined, then use the Bridge Edge Loops tool to attach them. Adjust the number of cuts and smoothness until it looks like a good corner.",images:[n.p+"static/media/step9_a.9fb53e6e.png",n.p+"static/media/step9_b.6d3db9ea.png"]},{instructions:"10.\tUse Inset Faces and the Bridge Edge Loops tool to attach the pipe to the bottom of the tank.",images:[n.p+"static/media/step10_a.4585c9d6.png"]},{instructions:"11.\tRepeat step 7 to create a box at the top of the pipe.",images:[n.p+"static/media/step11_a.5113eaa5.png"]},{instructions:"12.\tUV unwrap the model as a smart project. Then export the UV layout as png and open in GIMP.",images:[n.p+"static/media/step12_a.989b20d1.png"]},{instructions:"13.\tPaint the UV layout in GIMP.",images:[n.p+"static/media/step13_a.1d3d6fa4.png"]},{instructions:"14.\tApply the texture to the model in Blender.",images:[n.p+"static/media/step14_a.6d73fe2a.png"]},{instructions:"15.\tExport as glTF and the model is ready to use in ThreeJS!",images:[]}];var fe,be,Ae=m.a.div(ce||(ce=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin-bottom: 5rem;\n"]))),je=m.a.div(se||(se=Object(p.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),we=m.a.img(de||(de=Object(p.a)(["\n  height: auto;\n  width: 50%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"]))),ve=m.a.div(le||(le=Object(p.a)(["\n  width: 50%;\n  height: calc(100vh - 15rem);\n"]))),xe=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),n=Object(s.useRef)(),a=Object(s.useRef)(),r=Object(s.useRef)();Object(s.useEffect)((function(){if(function(){var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return t&&t instanceof WebGLRenderingContext}()){e.current=new _.yb({antialias:!1});var c=e.current,s=t.current,d=s.clientWidth,l=s.clientHeight;n.current=new _.hb;var u=n.current;u.background=new _.k(11184810),a.current=new ne({width:d,height:l}),a.current.getCamera().position.z=4,a.current.getCamera().position.y=2,r.current=new $.a(a.current.getCamera(),e.current.domElement),s.appendChild(c.domElement),c.setSize(d,l),c.gammaInput=!0,c.gammaOutput=!0,c.autoClear=!1,c.setClearColor(0,0);var p=new _.a(4210752,3);u.add(p);var m=new _.m(16777164,1);m.position.set(-30,40,40),m.castShadow=!0,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.shadow.camera.left=-500,m.shadow.camera.right=500,m.shadow.camera.top=500,m.shadow.camera.bottom=-500,m.shadow.camera.near=300,m.shadow.camera.far=1100,u.add(m);var h=new _.m(16777164,.3);return h.position.set(30,0,-40),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.left=-500,h.shadow.camera.right=500,h.shadow.camera.top=500,h.shadow.camera.bottom=-500,h.shadow.camera.near=300,h.shadow.camera.far=1100,u.add(h),(new me.a).load(he,(function(e){var t=e.scene.children[0];t.name="tank",u.add(t)})),o(),c.setAnimationLoop((function(){o(),i()})),function(){e.current.setAnimationLoop((function(){})),t.current=null}}alert("WebGL is not enabled in this browser!")}));var i=function(){var r=e.current,i=t.current;if(null!=r&&null!=i){var o=i.clientWidth,c=i.clientHeight;r.clear(),r.setScissorTest(!0),r.setScissor(0,0,o,c),r.setViewport(0,0,o,c),r.render(n.current,a.current.getCamera())}},o=function(){if(null!=e.current&&null!=t.current){var n=t.current,r=n.clientWidth,i=n.clientHeight,o=e.current.domElement,c=o.clientWidth,s=o.clientHeight;if(c!==r||s!==i){var d=a.current.getCamera(),l=r/i;d.aspect=l,d.updateProjectionMatrix(),e.current.setPixelRatio(window.devicePixelRatio),e.current.setSize(r,i)}}};return Object(b.jsxs)(Ae,{children:[Object(b.jsx)("h1",{children:"End Result:"}),Object(b.jsx)(ve,{ref:t}),ge.map((function(e,t){return Object(b.jsxs)(je,{children:[Object(b.jsx)("h1",{children:"Step ".concat(t+1)}),Object(b.jsx)("div",{children:e.instructions}),e.images.map((function(e,n){return Object(b.jsx)(we,{src:e,alt:"step ".concat(t," image")},"step".concat(t,"-").concat(n))}))]},"step-".concat(t))}))]})},Oe=n(6);var ye=m.a.div(fe||(fe=Object(p.a)(['\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 5rem 1fr 5rem;\n  /* grid-gap: 20px; */\n  grid-template-areas:\n    "header"\n    "content"\n    "footer";\n']))),Ee=m.a.div(be||(be=Object(p.a)(["\n  grid-area: content;\n  /* padding: 10px; */\n"]))),ke=function(){return Object(b.jsx)(h.a,{children:Object(b.jsxs)(ye,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(Ee,{children:Object(b.jsxs)(Oe.c,{children:[Object(b.jsx)(Oe.a,{exact:!0,path:"/",component:K}),Object(b.jsx)(Oe.a,{exact:!0,path:"/home",component:K}),Object(b.jsx)(Oe.a,{exact:!0,path:"/details/threeCompass",component:pe}),Object(b.jsx)(Oe.a,{exact:!0,path:"/details/threeTanks",component:xe}),Object(b.jsx)(Oe.a,{exact:!0,path:"/details/:detailId",component:F})]})}),Object(b.jsx)(z,{})]})})};n(46);function Se(){return Object(b.jsx)(ke,{})}u.a.render(Object(b.jsx)(d.a.StrictMode,{children:Object(b.jsx)(Se,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9c6c58e4.chunk.js.map