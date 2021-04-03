(function(d,f,h){var e="tooltipster",b={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,delay:200,fixedWidth:0,maxWidth:0,functionInit:function(m,n){},functionBefore:function(m,n){n()},functionReady:function(m,n){},functionAfter:function(m){},icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};function j(n,m){this.bodyOverflowX;this.checkInterval=null;this.content;this.$el=d(n);this.elProxyPosition;this.$elProxy;this.enabled=true;this.options=d.extend({},b,m);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*100000);this.status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this.init()}j.prototype={init:function(){var m=this;if(h.querySelector){if(m.options.content!==null){m.setContent(m.options.content)}else{var n=m.$el.attr("title");if(typeof n==="undefined"){n=null}m.setContent(n)}var o=m.options.functionInit(m.$el,m.content);if(typeof o!=="undefined"){m.setContent(o)}m.$el.removeAttr("title").addClass("tooltipstered");if((!g&&m.options.iconDesktop)||(g&&m.options.iconTouch)){if(typeof m.options.icon==="string"){m.$elProxy=d('<span class="'+m.options.iconTheme+'"></span>');m.$elProxy.text(m.options.icon)}else{if(m.options.iconCloning){m.$elProxy=m.options.icon.clone(true)}else{m.$elProxy=m.options.icon}}m.$elProxy.insertAfter(m.$el)}else{m.$elProxy=m.$el}if(m.options.trigger=="hover"){m.$elProxy.on("mouseenter."+m.namespace,function(){if(!k()||m.options.touchDevices){m.mouseIsOverProxy=true;m.showTooltip()}}).on("mouseleave."+m.namespace,function(){if(!k()||m.options.touchDevices){m.mouseIsOverProxy=false}});if(g&&m.options.touchDevices){m.$elProxy.on("touchstart."+m.namespace,function(){m.showTooltipNow()})}}else{if(m.options.trigger=="click"){m.$elProxy.on("click."+m.namespace,function(){if(!k()||m.options.touchDevices){m.showTooltip()}})}}}},showTooltip:function(){var m=this;if(m.status!="shown"&&m.status!="appearing"){if(m.options.delay){m.timerShow=setTimeout(function(){if(m.options.trigger=="click"||(m.options.trigger=="hover"&&m.mouseIsOverProxy)){m.showTooltipNow()}},m.options.delay)}else{m.showTooltipNow()}}},showTooltipNow:function(){var m=this;clearTimeout(m.timerShow);m.timerShow=null;clearTimeout(m.timerHide);m.timerHide=null;if(m.enabled&&m.content!==null){if(m.options.onlyOne){d(".tooltipstered").not(m.$el).each(function(o,q){var n=d(q),p=n[e]("status"),r=n[e]("option","autoClose");if(p!=="hidden"&&p!=="disappearing"&&r){n[e]("hide")}})}m.options.functionBefore(m.$elProxy,function(){if(m.status!=="hidden"){var p=0;if(m.status==="disappearing"){m.status="appearing";if(a()){m.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+m.options.animation+"-show");if(m.options.speed>0){m.$tooltip.delay(m.options.speed)}m.$tooltip.queue(function(){m.status="shown"})}else{m.$tooltip.stop().fadeIn(function(){m.status="shown"})}}}else{m.status="appearing";var p=m.options.speed;m.bodyOverflowX=d("body").css("overflow-x");d("body").css("overflow-x","hidden");var q="tooltipster-"+m.options.animation,s="-webkit-transition-duration: "+m.options.speed+"ms; -webkit-animation-duration: "+m.options.speed+"ms; -moz-transition-duration: "+m.options.speed+"ms; -moz-animation-duration: "+m.options.speed+"ms; -o-transition-duration: "+m.options.speed+"ms; -o-animation-duration: "+m.options.speed+"ms; -ms-transition-duration: "+m.options.speed+"ms; -ms-animation-duration: "+m.options.speed+"ms; transition-duration: "+m.options.speed+"ms; animation-duration: "+m.options.speed+"ms;",t=m.options.fixedWidth>0?"width:"+Math.round(m.options.fixedWidth)+"px;":"",o=m.options.maxWidth>0?"max-width:"+Math.round(m.options.maxWidth)+"px;":"",r=m.options.interactive?"pointer-events: auto;":"";m.$tooltip=d('<div class="tooltipster-base '+m.options.theme+'" style="'+t+" "+o+" "+r+" "+s+'"><div class="tooltipster-content"></div></div>');if(a()){m.$tooltip.addClass(q)}m.insertContent();m.$tooltip.appendTo("body");m.positionTooltip();m.options.functionReady(m.$el,m.$tooltip);if(a()){m.$tooltip.addClass(q+"-show");if(m.options.speed>0){m.$tooltip.delay(m.options.speed)}m.$tooltip.queue(function(){m.status="shown"})}else{m.$tooltip.css("display","none").fadeIn(m.options.speed,function(){m.status="shown"})}m.setCheckInterval();d(f).on("scroll."+m.namespace+" resize."+m.namespace,function(){m.positionTooltip()});if(m.options.autoClose){d("body").off("."+m.namespace);if(m.options.trigger=="hover"){if(g){setTimeout(function(){d("body").on("touchstart."+m.namespace,function(){m.hideTooltip()})},0)}if(m.options.interactive){if(g){m.$tooltip.on("touchstart."+m.namespace,function(u){u.stopPropagation()})}var n=null;m.$elProxy.add(m.$tooltip).on("mouseleave."+m.namespace+"-autoClose",function(){clearTimeout(n);n=setTimeout(function(){m.hideTooltip()},m.options.interactiveTolerance)}).on("mouseenter."+m.namespace+"-autoClose",function(){clearTimeout(n)})}else{m.$elProxy.on("mouseleave."+m.namespace+"-autoClose",function(){m.hideTooltip()})}}else{if(m.options.trigger=="click"){setTimeout(function(){d("body").on("click."+m.namespace+" touchstart."+m.namespace,function(){m.hideTooltip()})},0);if(m.options.interactive){m.$tooltip.on("click."+m.namespace+" touchstart."+m.namespace,function(u){u.stopPropagation()})}}}}}if(m.options.timer>0){m.timerHide=setTimeout(function(){m.timerHide=null;m.hideTooltip()},m.options.timer+p)}})}},setCheckInterval:function(){var m=this;m.checkInterval=setInterval(function(){if(d("body").find(m.$el).length===0||d("body").find(m.$elProxy).length===0||m.status=="hidden"||d("body").find(m.$tooltip).length===0){if(m.status=="shown"||m.status=="appearing"){m.hideTooltip()}m.cancelCheckInterval()}else{if(m.options.positionTracker){var o=m.positionInfo(m.$elProxy),n=false;if(l(o.dimension,m.elProxyPosition.dimension)){if(m.$elProxy.css("position")==="fixed"){if(l(o.position,m.elProxyPosition.position)){n=true}}else{if(l(o.offset,m.elProxyPosition.offset)){n=true}}}if(!n){m.positionTooltip()}}}},200)},cancelCheckInterval:function(){clearInterval(this.checkInterval);this.checkInterval=null},hideTooltip:function(){var m=this;clearTimeout(m.timerShow);m.timerShow=null;clearTimeout(m.timerHide);m.timerHide=null;if(m.status=="shown"||m.status=="appearing"){m.status="disappearing";var n=function(){m.status="hidden";m.$tooltip.remove();m.$tooltip=null;d(f).off("."+m.namespace);d("body").off("."+m.namespace).css("overflow-x",m.bodyOverflowX);m.$elProxy.off("."+m.namespace+"-autoClose");m.options.functionAfter(m.$elProxy)};if(a()){m.$tooltip.clearQueue().removeClass("tooltipster-"+m.options.animation+"-show").addClass("tooltipster-dying");if(m.options.speed>0){m.$tooltip.delay(m.options.speed)}m.$tooltip.queue(n)}else{m.$tooltip.stop().fadeOut(m.options.speed,n)}}},setContent:function(m){if(typeof m==="object"&&m!==null&&this.options.contentCloning){m=m.clone(true)}this.content=m},insertContent:function(){var m=this,n=this.$tooltip.find(".tooltipster-content");if(typeof m.content==="string"&&!m.options.contentAsHTML){n.text(m.content)}else{n.empty().append(m.content)}},updateTooltip:function(n){var m=this;m.setContent(n);if(m.content!==null){if(m.status!=="hidden"){m.insertContent();m.positionTooltip();if(m.options.updateAnimation){if(a()){m.$tooltip.css({width:"","-webkit-transition":"all "+m.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+m.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+m.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+m.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+m.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(m.status!="hidden"){m.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(m.status!=="hidden"){m.$tooltip.css({"-webkit-transition":m.options.speed+"ms","-moz-transition":m.options.speed+"ms","-o-transition":m.options.speed+"ms","-ms-transition":m.options.speed+"ms",transition:m.options.speed+"ms"})}},m.options.speed)}},m.options.speed)}else{m.$tooltip.fadeTo(m.options.speed,0.5,function(){if(m.status!="hidden"){m.$tooltip.fadeTo(m.options.speed,1)}})}}}}else{m.hideTooltip()}},positionInfo:function(m){return{dimension:{height:m.outerHeight(false),width:m.outerWidth(false)},offset:m.offset(),position:{left:parseInt(m.css("left")),top:parseInt(m.css("top"))}}},positionTooltip:function(){var z=this;if(d("body").find(z.$tooltip).length!==0){z.$tooltip.css("width","");z.elProxyPosition=z.positionInfo(z.$elProxy);var ah=null,ae=d(f).width(),ac=z.elProxyPosition,ag=z.$tooltip.outerWidth(false),n=z.$tooltip.innerWidth()+1,L=z.$tooltip.outerHeight(false),y=null;if(z.$elProxy.is("area")){var R=z.$elProxy.attr("shape"),ab=z.$elProxy.parent().attr("name"),N=d('img[usemap="#'+ab+'"]'),o=N.offset().left,K=N.offset().top,U=z.$elProxy.attr("coords")!==undefined?z.$elProxy.attr("coords").split(","):undefined;if(R=="circle"){var M=parseInt(U[0]),s=parseInt(U[1]),C=parseInt(U[2]);ac.dimension.height=C*2;ac.dimension.width=C*2;ac.offset.top=K+s-C;ac.offset.left=o+M-C}else{if(R=="rect"){var M=parseInt(U[0]),s=parseInt(U[1]),r=parseInt(U[2]),I=parseInt(U[3]);ac.dimension.height=I-s;ac.dimension.width=r-M;ac.offset.top=K+s;ac.offset.left=o+M}else{if(R=="poly"){var x=[],aa=[],G=0,F=0,Y=0,X=0,af="even";for(i=0;i<U.length;i++){var E=parseInt(U[i]);if(af=="even"){if(E>Y){Y=E;if(i===0){G=Y}}if(E<G){G=E}af="odd"}else{if(E>X){X=E;if(i==1){F=X}}if(E<F){F=E}af="even"}}ac.dimension.height=X-F;ac.dimension.width=Y-G;ac.offset.top=K+F;ac.offset.left=o+G}else{ac.dimension.height=N.outerHeight(false);ac.dimension.width=N.outerWidth(false);ac.offset.top=K;ac.offset.left=o}}}}if(z.options.fixedWidth===0){z.$tooltip.css({width:Math.round(n)+"px","padding-left":"0px","padding-right":"0px"})}var t=0,Z=0,T=0,V=parseInt(z.options.offsetY),W=parseInt(z.options.offsetX),ad=z.options.position;function w(){var ai=d(f).scrollLeft();if((t-ai)<0){ah=t-ai;t=ai}if(((t+ag)-ai)>ae){ah=t-((ae+ai)-ag);t=(ae+ai)-ag}}function u(ai,aj){if(((ac.offset.top-d(f).scrollTop()-L-V-12)<0)&&(aj.indexOf("top")>-1)){ad=ai}if(((ac.offset.top+ac.dimension.height+L+12+V)>(d(f).scrollTop()+d(f).height()))&&(aj.indexOf("bottom")>-1)){ad=ai;T=(ac.offset.top-L)-V-12}}if(ad=="top"){var O=(ac.offset.left+ag)-(ac.offset.left+ac.dimension.width);t=(ac.offset.left+W)-(O/2);T=(ac.offset.top-L)-V-12;w();u("bottom","top")}if(ad=="top-left"){t=ac.offset.left+W;T=(ac.offset.top-L)-V-12;w();u("bottom-left","top-left")}if(ad=="top-right"){t=(ac.offset.left+ac.dimension.width+W)-ag;T=(ac.offset.top-L)-V-12;w();u("bottom-right","top-right")}if(ad=="bottom"){var O=(ac.offset.left+ag)-(ac.offset.left+ac.dimension.width);t=ac.offset.left-(O/2)+W;T=(ac.offset.top+ac.dimension.height)+V+12;w();u("top","bottom")}if(ad=="bottom-left"){t=ac.offset.left+W;T=(ac.offset.top+ac.dimension.height)+V+12;w();u("top-left","bottom-left")}if(ad=="bottom-right"){t=(ac.offset.left+ac.dimension.width+W)-ag;T=(ac.offset.top+ac.dimension.height)+V+12;w();u("top-right","bottom-right")}if(ad=="left"){t=ac.offset.left-W-ag-12;Z=ac.offset.left+W+ac.dimension.width+12;var J=(ac.offset.top+L)-(ac.offset.top+z.$elProxy.outerHeight(false));T=ac.offset.top-(J/2)-V;if((t<0)&&((Z+ag)>ae)){var q=parseFloat(z.$tooltip.css("border-width"))*2,m=(ag+t)-q;z.$tooltip.css("width",m+"px");L=z.$tooltip.outerHeight(false);t=ac.offset.left-W-m-12-q;J=(ac.offset.top+L)-(ac.offset.top+z.$elProxy.outerHeight(false));T=ac.offset.top-(J/2)-V}else{if(t<0){t=ac.offset.left+W+ac.dimension.width+12;ah="left"}}}if(ad=="right"){t=ac.offset.left+W+ac.dimension.width+12;Z=ac.offset.left-W-ag-12;var J=(ac.offset.top+L)-(ac.offset.top+z.$elProxy.outerHeight(false));T=ac.offset.top-(J/2)-V;if(((t+ag)>ae)&&(Z<0)){var q=parseFloat(z.$tooltip.css("border-width"))*2,m=(ae-t)-q;z.$tooltip.css("width",m+"px");L=z.$tooltip.outerHeight(false);J=(ac.offset.top+L)-(ac.offset.top+z.$elProxy.outerHeight(false));T=ac.offset.top-(J/2)-V}else{if((t+ag)>ae){t=ac.offset.left-W-ag-12;ah="right"}}}if(z.options.arrow){var H="tooltipster-arrow-"+ad;if(z.options.arrowColor.length<1){var P=z.$tooltip.css("background-color")}else{var P=z.options.arrowColor}if(!ah){ah=""}else{if(ah=="left"){H="tooltipster-arrow-right";ah=""}else{if(ah=="right"){H="tooltipster-arrow-left";ah=""}else{ah="left:"+Math.round(ah)+"px;"}}}if((ad=="top")||(ad=="top-left")||(ad=="top-right")){var S=parseFloat(z.$tooltip.css("border-bottom-width")),A=z.$tooltip.css("border-bottom-color")}else{if((ad=="bottom")||(ad=="bottom-left")||(ad=="bottom-right")){var S=parseFloat(z.$tooltip.css("border-top-width")),A=z.$tooltip.css("border-top-color")}else{if(ad=="left"){var S=parseFloat(z.$tooltip.css("border-right-width")),A=z.$tooltip.css("border-right-color")}else{if(ad=="right"){var S=parseFloat(z.$tooltip.css("border-left-width")),A=z.$tooltip.css("border-left-color")}else{var S=parseFloat(z.$tooltip.css("border-bottom-width")),A=z.$tooltip.css("border-bottom-color")}}}}if(S>1){S++}var D="";if(S!==0){var B="",Q="border-color: "+A+";";if(H.indexOf("bottom")!==-1){B="margin-top: -"+Math.round(S)+"px;"}else{if(H.indexOf("top")!==-1){B="margin-bottom: -"+Math.round(S)+"px;"}else{if(H.indexOf("left")!==-1){B="margin-right: -"+Math.round(S)+"px;"}else{if(H.indexOf("right")!==-1){B="margin-left: -"+Math.round(S)+"px;"}}}}D='<span class="tooltipster-arrow-border" style="'+B+" "+Q+';"></span>'}z.$tooltip.find(".tooltipster-arrow").remove();var p='<div class="'+H+' tooltipster-arrow" style="'+ah+'">'+D+'<span style="border-color:'+P+';"></span></div>';z.$tooltip.append(p)}z.$tooltip.css({top:Math.round(T)+"px",left:Math.round(t)+"px"})}}};d.fn[e]=function(){var n=arguments;if(this.length===0){if(typeof n[0]==="string"){var o=true;switch(n[0]){case"setDefaults":d.extend(b,n[1]);break;default:o=false;break}if(o){return true}else{return this}}else{return this}}else{if(typeof n[0]==="string"){var m="#*$~&";this.each(function(){var q=d(this).data("tooltipster");if(q){switch(n[0]){case"content":case"update":if(typeof n[1]==="undefined"){m=q.content;return false}else{q.updateTooltip(n[1]);break}case"destroy":q.hideTooltip();if(q.$el[0]!==q.$elProxy[0]){q.$elProxy.remove()}var p=(typeof q.content==="string")?q.content:d("<div></div>").append(q.content).html();q.$el.removeClass("tooltipstered").attr("title",p).removeData("tooltipster").off("."+q.namespace);break;case"disable":q.hideTooltip();q.enabled=false;break;case"elementIcon":m=(q.$el[0]!==q.$elProxy[0])?q.$elProxy[0]:undefined;return false;case"elementTooltip":m=q.$tooltip?q.$tooltip[0]:undefined;return false;case"enable":q.enabled=true;break;case"hide":q.hideTooltip();break;case"option":m=q.options[n[1]];break;case"reposition":q.positionTooltip();break;case"show":q.showTooltipNow();break;case"status":m=q.status;return false;default:throw new Error('Unknown method .tooltipster("'+n[0]+'")');break}}else{throw new Error("You called Tooltipster's \""+n[0]+'" method on an uninitialized element')}});return(m!=="#*$~&")?m:this}else{return this.each(function(){if(!d(this).data("tooltipster")){d(this).data("tooltipster",new j(this,n[0]))}})}}};function l(n,m){var o=true;d.each(n,function(p,q){if(typeof m[p]==="undefined"||n[p]!==m[p]){o=false;return false}});return o}var g=!!("ontouchstart" in f);var c=false;d("body").one("mousemove",function(){c=true});function k(){return(!c&&g)}function a(){var m=h.body||h.documentElement,o=m.style,q="transition";if(typeof o[q]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],q=q.charAt(0).toUpperCase()+q.substr(1);for(var n=0;n<v.length;n++){if(typeof o[v[n]+q]=="string"){return true}}return false}})(jQuery,window,document);
