(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1LHjy",total:"Cart_total__1at2Z",actions:"Cart_actions__3ZP8r","button--alt":"Cart_button--alt__1-tSU",button:"Cart_button__3VCVC"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3Fm_a",summary:"CartItem_summary__3Ajco",price:"CartItem_price__PU9Rc",amount:"CartItem_amount__1v56U",actions:"CartItem_actions__3Yy5Z"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1ZsX4",icon:"HeaderCartButton_icon__nB7cY",badge:"HeaderCartButton_badge__1KLCF",bump:"HeaderCartButton_bump__2OJhB"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3DutI",modal:"Modal_modal__37XX7","slide-down":"Modal_slide-down__6mQpn"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2CWHZ","meals-appear":"AvailableMeals_meals-appear__GpnE-",mealsLoading:"AvailableMeals_mealsLoading__3ai3y"}},function(e,t,n){e.exports={meal:"MealItem_meal__1OAcQ",description:"MealItem_description__1ZuSZ",price:"MealItem_price__1TjSJ"}},,function(e,t,n){e.exports={header:"Header_header__1r1gy","main-image":"Header_main-image__2nPJi"}},,,,function(e,t,n){e.exports={card:"Card_card__11BzO"}},function(e,t,n){e.exports={input:"Input_input__3jSt6"}},function(e,t,n){e.exports={form:"MealItemForm_form__1s20F"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1AAJm"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),r=(n(26),n(2)),i=n(1),s=n.n(i),o=n(3),l=n(4),u=n.n(l),m=n(10),d=n.n(m),j=n(0),b=function(e){return Object(j.jsx)("div",{className:d.a.backdrop})},O=function(e){return Object(j.jsx)("div",{className:d.a.modal,children:Object(j.jsx)("div",{className:d.a.content,children:e.children})})},x=document.getElementById("overlays");function h(e){return Object(j.jsxs)(i.Fragment,{children:[Object(a.createPortal)(Object(j.jsx)(b,{}),x),Object(a.createPortal)(Object(j.jsx)(O,{children:e.children}),x)]})}var f=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),p=n(5),_=n.n(p),v=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:_.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:_.a.summary,children:[Object(j.jsx)("span",{className:_.a.price,children:t}),Object(j.jsxs)("span",{className:_.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:_.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})};function C(e){var t=Object(i.useContext)(f),n=t.items,a=t.totalAmount,c=t.addItem,r=t.removeItem,s="$".concat(a.toFixed(2)),l=n.length>0,m=function(e){r(e)},d=function(e){c(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},b=Object(j.jsx)("ul",{className:u.a["cart-items"],children:n.map((function(e){return Object(j.jsx)(v,{name:e.name,amount:e.amount,price:e.price,onRemove:m.bind(null,e.id),onAdd:d.bind(null,e)},e.id)}))});return Object(j.jsxs)(h,{children:[b,Object(j.jsxs)("div",{className:u.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:s})]}),Object(j.jsxs)("div",{className:u.a.actions,children:[Object(j.jsx)("button",{className:u.a["button--alt"],onClick:e.onClose,children:"Close"}),l&&Object(j.jsx)("button",{className:u.a.button,children:"Order"})]})]})}var g=n(14),A=n.n(g),N=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},y=n(8),I=n.n(y);function w(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(f).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(I.a.button," ").concat(a?I.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(j.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(j.jsx)("span",{className:I.a.icon,children:Object(j.jsx)(N,{})}),Object(j.jsx)("span",{children:"My Cart"}),Object(j.jsx)("span",{className:I.a.badge,children:o})]})}var M=n.p+"static/media/meals.2971f633.jpg";function k(e){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsxs)("header",{className:A.a.header,children:[Object(j.jsx)("h1",{children:"Only-Food"}),Object(j.jsx)(w,{onClick:e.onShowCart})]}),Object(j.jsx)("div",{className:A.a["main-image"],children:Object(j.jsx)("img",{src:M,alt:"A table full of delicious foods!!!"})})]})}var S=n(15),F=n.n(S),H=n(17),B=n(11),E=n.n(B),D=n(18),R=n.n(D);function L(e){return Object(j.jsx)("div",{className:R.a.card,children:e.children})}var P=n(12),T=n.n(P),Z=n(19),J=n.n(Z),V=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:J.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(o.a)({ref:t},e.input))]})})),z=n(20),U=n.n(z);function X(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(j.jsxs)("form",{className:U.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1?c(!1):e.onAddToCart(a)},children:[Object(j.jsx)(V,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"Please enter a valid amount. Amount must be greater than 1."})]})}function Y(e){var t=Object(i.useContext)(f).addItem,n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:T.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:T.a.description,children:e.description}),Object(j.jsx)("div",{className:T.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(X,{onAddToCart:function(n){t({id:e.id,name:e.name,amount:n,price:e.price})}})})]})}function $(e){var t=Object(i.useState)([]),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(!0),o=Object(r.a)(s,2),l=o[0],u=o[1],m=Object(i.useState)(),d=Object(r.a)(m,2),b=d[0],O=d[1];if(Object(i.useEffect)((function(){(function(){var e=Object(H.a)(F.a.mark((function e(){var t,n,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fir-food-order-app-by-react-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong !!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){u(!1),O(e.message)}))}),[]),b)return Object(j.jsx)("section",{className:E.a.mealsLoading,children:Object(j.jsx)("h1",{children:b})});if(l)return Object(j.jsx)("section",{className:E.a.mealsLoading,children:Object(j.jsx)("h1",{children:"Loading..."})});var x=a.map((function(e){return Object(j.jsx)(Y,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:E.a.meals,children:Object(j.jsx)(L,{children:Object(j.jsx)("ul",{children:x})})})}var Q=n(21),q=n.n(Q);function G(e){return Object(j.jsxs)("section",{className:q.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})}function K(e){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(G,{}),Object(j.jsx)($,{})]})}var W=n(16),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(o.a)(Object(o.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(W.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,l=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[l],m=e.totalAmount-u.price;if(1===u.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(o.a)(Object(o.a)({},u),{},{amount:u.amount-1});(s=Object(W.a)(e.items))[l]=d}return{items:s,totalAmount:m}}return ee},ne=function(e){var t=Object(i.useReducer)(te,ee),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(j.jsx)(f.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(ne,{children:[n&&Object(j.jsx)(C,{onClose:function(){a(!1)}}),Object(j.jsx)(k,{onShowCart:function(){a(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(K,{})})]})};c.a.render(Object(j.jsx)(ae,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.d959b052.chunk.js.map