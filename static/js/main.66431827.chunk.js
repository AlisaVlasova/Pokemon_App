(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),o=a(2),i=(a(17),a(4)),l=a.n(i),m=a(8),u=a(5),p=a(6),d="https://pokeapi.co/api/v2/",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1050,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return fetch("".concat(d,"pokemon/").concat(e,"?limit=").concat(t,"&offset=").concat(a)).then((function(e){return e.json()}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(d,"type/").concat(e)).then((function(e){return e.json()}))},_=function(e){var t=e.children,a=Object(o.a)((function(){return{pokemons:[],clonedPokemons:[],pokemon:{},isLoading:!1,isLoadingDetails:!1,error:!1,query:"",types:[],typeId:0,offset:0,limit:10,pageSize:10,currentPage:1,setPagination:function(e,t,n){a.offset=e,a.limit=t,a.currentPage=n},setPageSize:function(e){a.pageSize=e,a.limit=e,a.offset=0,a.currentPage=1},getPokemons:function(){return Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.isLoading=!0,e.prev=1,e.next=4,f();case 4:t=e.sent.results,a.pokemons=t.map((function(e){var t=e.url.match(/pokemon\/(\d+)\//)[1],a=e.name,n="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png");return Object(u.a)(Object(u.a)({},e),{},{name:a,id:t,sprite:n})})),a.clonedPokemons=Object(m.a)(a.pokemons),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),a.error=!0,a.error=!1;case 13:a.isLoading=!1;case 14:case"end":return e.stop()}}),e,null,[[1,9]])})))()},filterPokemons:function(e){a.pokemons.some((function(t){return t.name.includes(e)}))||(a.error=!0);var t=a.pokemons.filter((function(t){return t.name.includes(e)}));a.clonedPokemons=t},getTypes:function(){return Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent.results,a.types=t.slice(0,-2).map((function(e){return{name:e.name,id:e.url.match(/type\/(\d+)\//)[1]}}));case 4:case"end":return e.stop()}}),e)})))()},filterPokemonsByType:function(e){return Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:n=t.sent.pokemon,a.pokemons=n.map((function(e){var t=e.pokemon.url.match(/pokemon\/(\d+)\//)[1],a=e.pokemon.name,n="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png");return Object(u.a)(Object(u.a)({},e),{},{name:a,id:t,sprite:n})})),a.clonedPokemons=Object(m.a)(a.pokemons);case 5:case"end":return t.stop()}}),t)})))()},findPokemon:function(e){return Object(p.a)(l.a.mark((function t(){var n,r,s,c,o,i,m,p,d,g,_,E,h,b,k,v,N,y;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.isLoadingDetails=!0,t.prev=1,t.next=4,f(e);case 4:n=t.sent,r=n.abilities,s=n.sprites,n.forms,n.species,c=n.name,o=n.id,i=n.base_experience,m=n.types,p=n.weight,d=n.height,g=n.stats,_=n.moves,E=n.location_area_encounters,h=n.game_indices,b=r.map((function(e){return e.ability.name})),k=m.map((function(e){return e.type.name})),v=_.map((function(e){return e.move.name})),N=h.map((function(e){return{gameIndex:e.game_index,version:e.version.name}})),y=g.map((function(e){return{stat:e.stat.name,base_stat:e.base_stat,effort:e.effort}})),a.pokemon=Object(u.a)(Object(u.a)({},a.pokemon),{},{abilities:b,sprite:s.front_default,name:c,id:o,baseExperience:i,types:k,weight:p,height:d,stats:y,moves:v,location:E,gameIndices:N}),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(1),a.error=!0;case 30:a.isLoadingDetails=!1;case 31:case"end":return t.stop()}}),t,null,[[1,27]])})))()},clearPokemon:function(){a.pokemon={}},setQuery:function(e){a.query=e},setTypeId:function(e){a.typeId=e},cancelError:function(){a.error=!1}}}));return r.a.createElement(E.Provider,{value:a},t)},E=Object(n.createContext)(),h=(a(19),a(20),function(e){var t=e.sprite,a=e.name;return Object(o.b)((function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__image-container"},r.a.createElement("img",{className:"card__image",src:t,alt:"Pokemon"})),r.a.createElement("h2",{className:"card__title"},a))}))}),b=(a(21),function(){var e=Object(n.useContext)(E),t=Math.ceil(e.pokemons.length/e.pageSize),a=function(t,a,n){e.setPagination(t,a,n)};return r.a.createElement("div",{className:"pagination"},r.a.createElement("div",{className:"pagination__buttons-container"},r.a.createElement("button",{className:"pagination__button",type:"button",disabled:1===e.currentPage,onClick:function(){a(e.offset-e.pageSize,e.limit-e.pageSize,e.currentPage-1)}},"<"),r.a.createElement("p",{className:"pagination__title"},"".concat(e.currentPage," / ").concat(t)),r.a.createElement("button",{className:"pagination__button",type:"button",disabled:e.currentPage===t,onClick:function(){a(e.offset+e.pageSize,e.limit+e.pageSize,e.currentPage+1)}},">")),r.a.createElement("div",{className:"pagination__page-select-container"},r.a.createElement("p",{className:"pagination__title"},"Page size:"),r.a.createElement("select",{className:"pagination__page-select",onChange:function(t){return e.setPageSize(+t.target.value)}},r.a.createElement("option",{className:"pagination__page-size",value:10},"10"),r.a.createElement("option",{className:"pagination__page-size",value:20},"20"),r.a.createElement("option",{className:"pagination__page-size",value:50},"50"))))}),k=function(){var e=Object(n.useContext)(E);Object(n.useEffect)((function(){e.getPokemons()}),[]);return Object(o.b)((function(){return r.a.createElement("div",{className:"pokemons-container"},r.a.createElement("ul",{className:"pokemons-list"},e.isLoading?r.a.createElement("p",{className:"list-loader"},"Loading..."):e.clonedPokemons.slice(e.offset,e.limit).map((function(t){return r.a.createElement("div",{key:t.name,role:"presentation",onClick:function(){return a=t.name,void e.findPokemon(a);var a}},r.a.createElement("li",{className:"pokemons-list__item"},r.a.createElement(h,t)))}))),r.a.createElement(b,null))}))},v=(a(22),a(23),function(e){return{normal:"#A8A878",poison:"#A040A0",fire:"#9C531F",water:"#6890F0",electric:"#F8D030",fighting:"#C03028",ground:"#927D44",psychic:"#F85888",dark:"#705848",rock:"#B8A038",steel:"#B8B8D0",grass:"#78C850",ice:"#98D8D8",flying:"#A890F0",bug:"#A8B820",ghost:"#705898",dragon:"#7038F8",fairy:"#EE99AC"}[e]||"#000000"}),N=function(e){var t=e.sprite,a=e.name,s=e.baseExperience,c=e.types,i=e.weight,l=e.height,m=e.stats,u=Object(n.useContext)(E);return Object(o.b)((function(){return u.isLoadingDetails?r.a.createElement("p",{className:"loader"},"Loading..."):!a||r.a.createElement("div",{className:"details"},r.a.createElement("input",{type:"checkbox",className:"toggler",id:"closer",onChange:function(){return u.clearPokemon()}}),r.a.createElement("label",{className:"details__closer-label",htmlFor:"closer"},"Hide"),r.a.createElement("div",{className:"details__content"},r.a.createElement("img",{className:"details__image",src:t,alt:"Pokemon"}),r.a.createElement("div",{className:"details__main"},r.a.createElement("p",{className:"details__title"},a),r.a.createElement("ul",{className:"details__types-list"},c.map((function(e){return r.a.createElement("li",{key:e,className:"details__type",style:{color:v(e)}},e)}))))),r.a.createElement("div",{className:"details__description"},r.a.createElement("p",{className:"details__base-info"},r.a.createElement("span",{className:"highlited"},"Height:")," ".concat(l)),r.a.createElement("p",{className:"details__base-info"},r.a.createElement("span",{className:"highlited"},"Weight:")," ".concat(i)),r.a.createElement("p",{className:"details__base-info"},r.a.createElement("span",{className:"highlited"},"Base Experience:")," ".concat(s)),r.a.createElement("table",{className:"details__stats-table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"details__stats-head"},r.a.createElement("th",{className:"details__stats-header"},"stat"),r.a.createElement("th",{className:"details__stats-header"},"base"),r.a.createElement("th",{className:"details__stats-header"},"effort"))),r.a.createElement("tbody",null,m.map((function(e){return r.a.createElement("tr",{key:e.stat,className:"details__stats"},r.a.createElement("td",{className:"details__stat-name"},e.stat),r.a.createElement("td",{className:"details__stat"},e.base_stat),r.a.createElement("td",{className:"details__stat"},e.effort))}))))))}))};N.defaultProps={sprite:"",name:"",baseExperience:"",types:[],weight:"",height:"",stats:[]};var y=function(){var e=Object(n.useContext)(E);Object(n.useEffect)((function(){e.getTypes()}),[]);var t=function(t){t.preventDefault(),e.findPokemon(e.query),e.setQuery("")},a=function(t){e.cancelError(),e.setQuery(t.target.value.trim()),e.filterPokemons(e.query)};return Object(o.b)((function(){return r.a.createElement("div",{className:"finder"},r.a.createElement("form",{className:"finder__form",onSubmit:t},r.a.createElement("div",{className:"finder__search"},r.a.createElement("input",{className:e.error?"finder__error-field":"finder__field",type:"text",value:e.query,onChange:a,placeholder:e.error?"No such pokemon":"Search pokemon"}),r.a.createElement("button",{type:"submit",className:"finder__button"},"Search")),r.a.createElement("ul",{className:"finder__types"},r.a.createElement("li",null,r.a.createElement("input",{className:"finder__toggler toggler",type:"radio",name:"type",id:"0",onChange:function(){return e.getPokemons()}}),r.a.createElement("label",{htmlFor:"0",className:"finder__type"},"any")),e.types.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("input",{className:"finder__toggler toggler",type:"radio",name:"type",id:t.id,value:e.typeId,onChange:function(){return a=t.id,e.setQuery(""),e.setTypeId(a),void e.filterPokemonsByType(e.typeId);var a}}),r.a.createElement("label",{htmlFor:t.id,className:"finder__type",style:{color:v(t.name)}},t.name))})))),e.error?r.a.createElement("p",{className:"finder__error"},"No pokemon with such name"):e.pokemon&&r.a.createElement(N,e.pokemon))}))},P=function(){return Object(o.b)((function(){return r.a.createElement("div",{className:"pokemons"},r.a.createElement(_,null,r.a.createElement(y,null),r.a.createElement(k,null)))}))};c.a.render(r.a.createElement(P,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.66431827.chunk.js.map