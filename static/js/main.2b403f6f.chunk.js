(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(0),a=n.n(s),c=n(3),r=n.n(c),u=(n(15),n(16),n(4)),l=n(5),o=n(2),d=n(7),j=n(6),h=n(9),b=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).createTasks=i.createTasks.bind(Object(o.a)(i)),i}return Object(l.a)(n,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var t=this;return Object(i.jsx)("li",{onClick:function(){return t.delete(e.key)},children:e.text},e.key)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return Object(i.jsx)("ul",{className:"list",children:Object(i.jsx)(h.a,{duration:250,easing:"ease-out",children:e})})}}]),n}(s.Component),m=(n(17),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={items:[]},i.addItem=i.addItem.bind(Object(o.a)(i)),i.deleteItem=i.deleteItem.bind(Object(o.a)(i)),i}return Object(l.a)(n,[{key:"addItem",value:function(e){var t=this;if(""!==this.inputElement.value){var n={text:this.inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(n)}}),(function(){console.log(t.state.items)})),this.inputElement.value=""}e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)("div",{className:"header",children:Object(i.jsxs)("form",{onSubmit:this.addItem,children:[" ",Object(i.jsx)("input",{ref:function(t){return e.inputElement=t},placeholder:"Enter task"}),Object(i.jsx)("button",{type:"submit",children:"Add"})]})}),Object(i.jsx)(b,{entries:this.state.items,delete:this.deleteItem})]})}}]),n}(s.Component));var f=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(m,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("container")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.2b403f6f.chunk.js.map