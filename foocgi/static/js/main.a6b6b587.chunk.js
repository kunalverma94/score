(this["webpackJsonpchrom-key"]=this["webpackJsonpchrom-key"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=a(1),s=a(2),l=a(4),u=a(3),m=a(5),d=a(8);var p=function(e){var t=e.srcc,a=e.cc,n=e.c,r=e.m,c=new Image;c.crossOrigin="anonymous",c.src=t,c.onload=function(){var e=a.createPattern(c,"repeat");a.fillStyle=e,a.fillRect(0,0,1920,1080);for(var t=n.getImageData(0,0,1920,1080),o=a.getImageData(0,0,1920,1080),i=t.data,s=0;s<i.length/4;s++){var l=i[4*s+0],u=i[4*s+1],m=i[4*s+2];u>=r.g&&l>=r.r&&m>=r.b&&(i[4*s+3]=255,i[4*s+0]=o.data[4*s+0],i[4*s+1]=o.data[4*s+1],i[4*s+2]=o.data[4*s+2])}a.putImageData(t,0,0)}},f=function(e){var t=e.srcc,a=e.cc,n=e.c,r=e.m,c=new Image;c.crossOrigin="anonymous",c.src=t,c.onload=function(){var e=a.createPattern(c,"repeat");a.fillStyle=e,a.fillRect(0,0,1920,1080);for(var t=n.getImageData(0,0,1920,1080),o=a.getImageData(0,0,1920,1080),i=t.data,s=0;s<i.length/4;s++){var l=i[4*s+0],u=i[4*s+1],m=i[4*s+2];u<=r.g&&l<=r.r&&m<=r.b&&(i[4*s+3]=255,i[4*s+0]=o.data[4*s+0],i[4*s+1]=o.data[4*s+1],i[4*s+2]=o.data[4*s+2])}a.putImageData(t,0,0)}};function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={h:360,w:640,sm:!1},a.resolutions={"240p":{h:240,w:320},"360p":{h:360,w:640},"480p":{h:480,w:640},"720p":{h:720,w:1280},"1080p":{h:1080,w:1920}},a.video=r.a.createRef(),a.pickerCanvas=r.a.createRef(),a.displayCanvas=r.a.createRef(),a.replicateAndFx=function(){var e=a.pickerCanvas.current.getContext("2d");e.drawImage(a.video.current,0,0,a.state.w,a.state.h);var t=a.displayCanvas.current.getContext("2d"),n=e.getImageData(0,0,a.state.w,a.state.h);switch(a.props.extern.effect){case"BW":!function(e){for(var t=e.data,a=0;a<t.length/4;a++){var n=(t[4*a]+t[4*a+1]+t[4*a+2])/3;t[4*a]=n,t[4*a+1]=n,t[4*a+2]=n}}(n),t.putImageData(n,0,0);break;case"CIN":p({m:a.props.extern.picked.rbga,srcc:a.props.extern.ilet||"https://picsum.photos/id/79/640/360",cc:t,c:e});break;case"COUT":f({m:a.props.extern.picked.rbga,srcc:a.props.extern.ilet||document.querySelector("img").src,cc:t,c:e});break;default:t.putImageData(n,0,0)}requestAnimationFrame(a.replicateAndFx)},a.startVideo=function(e){return navigator.getUserMedia({video:{height:a.state.h,width:a.state.w,facingMode:"user"}},(function(t){a.video.current.srcObject=t,e()}),(function(e){return console.log(e)}))},a.getColor=function(e){if(a.state.sm){var t=e.layerX,n=e.layerY,r=a.pickerCanvas.current.getContext("2d").getImageData(t,n,1,1).data,c=r[0],o=r[1],i=r[2],s=r[3],l={color:"rgba("+c+", "+o+", "+i+", "+s/255+")",rbga:{r:c,g:o,b:i,a:s}};a.props.update_color(l)}},a.enableselectMode=function(){a.setState(g({},a.state,{sm:!a.state.sm}))},a.Save=function(){a.displayCanvas.current.toBlob((function(e){var t=window.URL||window.webkitURL,a=document.createElement("a");a.href=t.createObjectURL(e),a.download=Math.floor(100*Math.random())+".png",document.body.appendChild(a),a.click(),document.body.removeChild(a)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.startVideo(this.replicateAndFx)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cam"},r.a.createElement("div",{className:"source"},r.a.createElement("video",{style:{display:"none"},ref:this.video,controls:!0,autoPlay:!0,height:this.state.h,width:this.state.w})),r.a.createElement("div",{className:"orignal",style:{position:this.state.sm?"relative":"absolute"}},r.a.createElement("canvas",{onContextMenu:function(){e.setState(g({},e.state,{sm:!1}))},ref:this.pickerCanvas,id:"org",height:this.state.h,width:this.state.w,style:{cursor:this.state.sm?"crosshair":"default",opacity:this.state.sm?"1":"0"},onClick:function(t){return e.getColor(t.nativeEvent)}})),r.a.createElement("div",{className:"final"},r.a.createElement("canvas",{ref:this.displayCanvas,id:"fin",height:this.state.h,width:this.state.w})),r.a.createElement("div",{className:"select_mode",onClick:function(){return e.enableselectMode()}},"Select Color",r.a.createElement("div",{className:"selected_color",style:{background:this.props.extern.picked.color}})," "),r.a.createElement("div",{className:"select_mode save",onClick:function(){return e.Save()}},"Save")),r.a.createElement("div",null,r.a.createElement("select",{style:{display:"none"},defaultValue:"360p",onChange:function(t){t.persist(),e.setState((function(a){var n=e.resolutions[t.target.value];return a.w=n.w,a.h=n.h,a}),(function(){return e.startVideo((function(){}))}))}},Object.keys(this.resolutions).map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))}}]),t}(n.Component);function b(e){var t=e.rgb,a=e.update,n=e.effin,c=function(e){switch(e){case"r":return"#FF5722";case"g":return"#4CAF50";case"b":return"#2196F3"}};return r.a.createElement("div",{className:"controls"},["BW","COUT","CIN"].map((function(e,t){return r.a.createElement("div",{onClick:function(){n(e)},key:t,className:"eff "+e},e)})),Object.keys(t).map((function(e,n){return r.a.createElement("div",{className:"color_"+e,key:n,style:{background:c(e)}},r.a.createElement("div",null,r.a.createElement("input",{type:"range",max:"255",min:"0",step:"1",value:t[e],name:e,onChange:function(t){a(e,t.target.value)}})),r.a.createElement("div",null,t[e]))})))}function y(e){var t=e.extern,a=e.update,n=t.url,c=t.ilist,o=r.a.createRef();return r.a.createElement("div",{className:"list",ref:o},c.map((function(e,t){return r.a.createElement("div",{key:t,onClick:function(){return a(n.replace("[[X]]",e))}},r.a.createElement("img",{className:"img",onError:function(e){e.target.src=n.replace("[[X]]",Math.floor(1e3*Math.random()))},src:n.replace("[[X]]",e),alt:e}))})))}function w(e){return r.a.createElement("div",{className:"header"},"CGI -Image Manipulator")}a(14);var k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={picked:{color:"black",rbga:{r:126,g:126,b:126,a:255}},image:null,effect:"CIN"},a.config={url:"https://picsum.photos/id/[[X]]/640/360",ilist:Array.apply(null,{length:10}).map(Math.random.call,Math.random).map((function(e){return Math.floor(1e3*e)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(w,null),r.a.createElement(v,{extern:this.state,update_color:function(t){console.log(t),e.setState((function(e){return e.picked=t,e}))}}),r.a.createElement(y,{extern:this.config,update:function(t){console.log(t),e.setState((function(e){return e.ilet=t,e}))}}),r.a.createElement(b,{rgb:this.state.picked.rbga,effin:function(t){console.log(t),e.setState((function(e){return e.effect=t,e}))},update:function(t,a){e.setState((function(e){return e.picked.rbga[t]=a,e}))}}))}}]),t}(n.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a6b6b587.chunk.js.map