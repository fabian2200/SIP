(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{107:function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"h",(function(){return r})),n.d(e,"q",(function(){return i})),n.d(e,"i",(function(){return s})),n.d(e,"m",(function(){return l})),n.d(e,"o",(function(){return c})),n.d(e,"p",(function(){return d})),n.d(e,"r",(function(){return u})),n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return v})),n.d(e,"n",(function(){return _})),n.d(e,"g",(function(){return g})),n.d(e,"c",(function(){return b})),n.d(e,"f",(function(){return m})),n.d(e,"b",(function(){return h})),n.d(e,"k",(function(){return x})),n.d(e,"s",(function(){return k})),n.d(e,"j",(function(){return w}));var a=n(0);function o(t){return Object(a.a)().post("/reportes/gestantes",t)}function r(t){return Object(a.a)().post("/reportes/exportarGestantes",t)}function i(t){return Object(a.a)().post("/reportes/nutricional",t)}function s(t){return Object(a.a)().post("/reportes/exportarNutricional",t)}function l(t){return Object(a.a)().post("/reportes/cronicas",t)}function c(t){return Object(a.a)().post("/reportes/migrantes",t)}function d(t){return Object(a.a)().post("/reportes/migrantespdf",t)}function u(t,e){return Object(a.a)().get("/reportes/personas-discapacitadas?tipo="+t+"&id="+e)}function p(t,e){return Object(a.a)().get("/reportes/adulto-mayor?tipo="+t+"&id="+e)}function f(t){return Object(a.a)().post("/reportes/exportar-adulto-mayor",t)}function v(t){return Object(a.a)().post("/reportes/exportar-discapacitados",t)}function _(t){return Object(a.a)().post("/reportes/infecciosas",t)}function g(t){return Object(a.a)().post("/reportes/exportar-enfermedades",t)}function b(t){return Object(a.a)().post("/reportes/descolarizados",t)}function m(t){return Object(a.a)().post("/reportes/exportar-descolarizados",t)}function h(t){return Object(a.a)().post("/reportes/bajo-nivel-socioeconomico",t)}function x(t){return Object(a.a)().post("/reportes/exportar-socioeconomico",t)}function k(t){return Object(a.a)().post("/reportes/riesgos-salud",t)}function w(t){return Object(a.a)().post("/reportes/exportar-riesgos-salud",t)}},391:function(t,e,n){var a=n(604);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(37)(a,o);a.locals&&(t.exports=a.locals)},603:function(t,e,n){"use strict";n(391)},604:function(t,e,n){(t.exports=n(36)(!1)).push([t.i,"\n.table_data {\n    width: 100%;\n    font-size: 17px;\n    border-collapse: collapse;\n}\n.table_data thead {\n    padding: 0.3em;\n    color: #fff !important;\n    background: #5578eb;\n}\n.table_data thead tr th, .table_data tbody tr td {\n    text-align: left;\n    vertical-align: top;\n    padding: 0.3em;\n    caption-side: bottom;\n}\n.dataTable th {\n    color: #ffffff !important;\n}\n.dataTables_paginate span .paginate_button{ \n    color: #5578eb !important;\n    margin-left: 3px;\n    margin-right: 3px;\n    font-weight: bold;\n    background-color: #ffff;\n    padding: 4px 8px 4px 8px;\n    border-radius: 4px;  \n    cursor: pointer;\n}\n.dataTables_paginate span .current{     \n    color: #ffff !important;\n    margin-left: 3px;\n    margin-right: 3px;\n    font-weight: bold;\n    background-color: #5578eb;\n    padding: 4px 8px 4px 8px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n.next{\n    cursor: pointer;\n    background-color: #fd397a;\n    color: white;\n    padding: 5px;\n    border-radius: 4px;\n}\n.previous{\n    cursor: pointer;\n    background-color: #fd397a;\n    color: white;\n    padding: 5px;\n    border-radius: 4px;\n}\n.dataTables_paginate{\n    margin-top: 20px;\n    height: 40px;\n}\n.next:hover, .previous:hover{\n    font-weight: bold;\n    color: white;\n}\n",""])},752:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(107),i=n(10),s=n(99),l=n.n(s);n(123);function c(t,e,n,a,o,r,i){try{var s=t[r](i),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(a,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function i(t){c(r,a,o,i,s,"next",t)}function s(t){c(r,a,o,i,s,"throw",t)}i(void 0)}))}}var u={mounted:function(){this.iniciales()},data:function(){return{csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),ruta:"",datos:{riesgosSalud:"alteraciones_transtornos_audicion",nivel:"Todos"},integrantes:[],riesgos_salud:[{value:"alteraciones_transtornos_audicion",nombre:"Alteraciones Y Transtornos De La Audición Y Comunicación "},{value:"alteraciones_transtornos_visuales",nombre:"Alteraciones Y Transtornos Visuales"},{value:"cancer",nombre:"Cancer"},{value:"consumo_spa",nombre:"Consumo De SPA"},{value:"enfermedad_cardiovascular",nombre:"Enfermedad Cardiovascular Aterogénica"},{value:"enfermedades_infecciosas",nombre:"Enfermedades Infeccisosas"},{value:"enfermedades_respiratorias",nombre:"Enfermedades Respiratorias Crónicas "},{value:"enfermedades_zoonoticas",nombre:"Enfermedades Zoonoticas "},{value:"problemas_salud_mental",nombre:"Problemas En Salud Mental "},{value:"riesgo_delgadez",nombre:"Riesgo De Delgadez"},{value:"riesgo_muerte",nombre:"Riesgo De Muerte Por Desnutrición "},{value:"riesgo_sobrepeso",nombre:"Riesgo Sobrepeso "},{value:"riesgo_talla_baja",nombre:"Riesgo De Talla Baja "},{value:"riesgos_desnutricion_aguda",nombre:"Riesgo Desnutrición Aguda"},{value:"riesgos_desnutricion_global",nombre:"Riesgo Desnutrición Global "},{value:"salud_bucal",nombre:"Salud Bucal "},{value:"transtornos_asociados_spa",nombre:"Trastornos Asociados Al Uso De SPA"},{value:"transtornos_degenartivos",nombre:"Trastornos Degenerativos, Neuropatías Y Enfermedades Autoinmunes"},{value:"violencias",nombre:"Violencias"}]}},methods:{filtrar:function(){this.iniciales()},iniciales:function(){var t=this;return d(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={_token:t.csrf,datos:t.datos},e.next=3,r.s(n).then((function(e){t.integrantes=e.data.integrantes,t.crearDataTable()}));case 3:case"end":return e.stop()}}),e)})))()},crearDataTable:function(){l()("#rs_table").dataTable().fnDestroy(),setTimeout((function(){l()("#rs_table").DataTable({lengthChange:!0,ordering:!1,bFilter:!1,pageLength:10,language:{decimal:"",emptyTable:"No hay información",info:"Mostrando _START_ a _END_ de _TOTAL_ Registros",infoEmpty:"Mostrando 0 to 0 of 0 Registros",infoFiltered:"(Filtrado de _MAX_ total Registros)",infoPostFix:"",thousands:",",lengthMenu:"Mostrar _MENU_ Registros",loadingRecords:"Cargando...",processing:"Procesando...",search:"Buscar:",zeroRecords:"Sin resultados encontrados",paginate:{first:"Primero",last:"Ultimo",next:"Siguiente",previous:"Anterior"}}})}),100)},generarExcel:function(){var t=this;return d(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",t.riesgos_salud.forEach((function(e){t.datos.riesgosSalud==e.value&&(n=e.nombre)})),a={datos:t.integrantes,nombre_ar:"Reporte_Riesgo_Salud_"+n,riesgo:n,nivel:t.datos.nivel},e.next=5,r.j(a).then((function(e){var a=i.a.state.apiURL+e.data.nombre;t.downloadItem(a,"Reporte_Riesgo_Salud_"+n)}));case 5:case"end":return e.stop()}}),e)})))()},downloadItem:function(t,e){var n=document.createElement("a");n.href=t,n.download=e+".xlsx",n.click(),URL.revokeObjectURL(n.href)}}},p=(n(603),n(3)),f=Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"kt-portlet kt-portlet--height-fluid kt-portlet--mobile",staticStyle:{"margin-top":"-4%"}},[n("div",{staticClass:"kt-portlet__head"},[t._m(0),t._v(" "),n("div",{staticClass:"kt-portlet__head-toolbar"},[n("div",{staticClass:"kt-section"},[n("div",{staticClass:"kt-section__content"},[n("br"),t._v(" "),n("button",{staticClass:"btn btn-brand",attrs:{type:"button","data-skin":"dark","data-toggle":"kt-tooltip","data-placement":"top",title:"Filtrar"},on:{click:t.filtrar}},[n("i",{staticClass:"fa fa-search"}),t._v("Filtrar\n                            ")]),t._v(" "),n("button",{staticClass:"btn btn-success",attrs:{type:"button","data-skin":"dark","data-toggle":"kt-tooltip","data-placement":"top",title:"Exportar EXCEL"},on:{click:t.generarExcel}},[n("i",{staticClass:"fa fa-table"}),t._v("Exportar a Excel\n                            ")])])])])]),t._v(" "),n("div",{staticClass:"kt-portlet__body"},[n("div",{staticClass:"kt-section"},[n("div",{staticClass:"kt-section__content"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 col-lg-5"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Riesgo de Salud:")]),t._v(" "),n("b-form-select",{model:{value:t.datos.riesgosSalud,callback:function(e){t.$set(t.datos,"riesgosSalud",e)},expression:"datos.riesgosSalud"}},t._l(t.riesgos_salud,(function(e,a){return n("option",{key:a,domProps:{value:e.value}},[t._v(t._s(e.nombre))])})),0)],1)]),t._v(" "),n("div",{staticClass:"col-md-3 col-lg-3"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Nivel de Riesgo:")]),t._v(" "),n("b-form-select",{model:{value:t.datos.nivel,callback:function(e){t.$set(t.datos,"nivel",e)},expression:"datos.nivel"}},[n("option",{attrs:{value:"Todos"}},[t._v("Todos")]),t._v(" "),n("option",{attrs:{value:"Inexistente"}},[t._v("Inexistente")]),t._v(" "),n("option",{attrs:{value:"Bajo"}},[t._v("Bajo")]),t._v(" "),n("option",{attrs:{value:"Moderado"}},[t._v("Moderado")]),t._v(" "),n("option",{attrs:{value:"Alto"}},[t._v("Alto")])])],1)])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm table-hover",attrs:{id:"rs_table"}},[t._m(1),t._v(" "),n("tbody",t._l(t.integrantes,(function(e,a){return n("tr",{key:a},[n("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle"}},[t._v("\n                                                    "+t._s(a+1)+"\n                                                ")]),t._v(" "),n("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle","text-align":"left","text-transform":"capitalize"}},[t._v("\n                                                    "+t._s(e.identificacion)+"\n                                                ")]),t._v(" "),n("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle","text-align":"left","text-transform":"capitalize"}},[t._v("\n                                                    "+t._s(e.nombres)+"\n                                                ")]),t._v(" "),n("td",{staticStyle:{width:"150px","font-weight":"normal","vertical-align":"middle","text-align":"left","text-transform":"capitalize"}},[t._v("\n                                                    "+t._s(e.edad)+" Años\n                                                ")]),t._v(" "),n("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle","text-align":"left","text-transform":"capitalize"}},[t._v("\n                                                    "+t._s(e.genero)+"\n                                                ")]),t._v(" "),n("td",{staticStyle:{width:"150px","font-weight":"normal","vertical-align":"middle","text-align":"left","text-transform":"capitalize"}},[t._v("\n                                                    "+t._s(e.puntaje_riesgo)+" - "+t._s(e.eficacia)+"\n                                                ")]),t._v(" "),n("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle","text-align":"left","text-transform":"capitalize"}},[t._v("\n                                                    "+t._s(e.localizacion)+"\n                                                ")])])})),0)])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"kt-portlet__head-label"},[e("h3",{staticClass:"kt-portlet__head-title"},[e("span",{staticClass:"kt-widget20__number kt-font-danger"},[this._v("REPORTE RIESGOS DE SALUD")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticStyle:{color:"white","font-weight":"bold"}},[n("tr",{staticClass:"kt-bg-fill-brand"},[n("th",[t._v("No.")]),t._v(" "),n("th",[t._v("Identificación")]),t._v(" "),n("th",[t._v("Nombres completos")]),t._v(" "),n("th",{staticStyle:{width:"150px"}},[t._v("Edad")]),t._v(" "),n("th",[t._v("Genero")]),t._v(" "),n("th",{staticStyle:{width:"150px"}},[t._v("Nivel de Riesgo")]),t._v(" "),n("th",[t._v("Localización")])])])}],!1,null,null,null);e.default=f.exports}}]);