(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{350:function(t,a,e){var s=e(506);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(37)(s,i);s.locals&&(t.exports=s.locals)},505:function(t,a,e){"use strict";e(350)},506:function(t,a,e){(t.exports=e(36)(!1)).push([t.i,"\n.modal-backdrop {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.modal-title {\n    color: #f8f9fa !important;\n}\n.close {\n    display: none;\n}\n",""])},703:function(t,a,e){"use strict";e.r(a);var s=e(1),i=e.n(s),n=e(0);var r=e(200),o=e.n(r),l=(e(202),e(203)),c=e.n(l),d=e(165),u=e.n(d),p=e(180),v=e.n(p);function f(t,a,e,s,i,n,r){try{var o=t[n](r),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(s,i)}function b(t){return function(){var a=this,e=arguments;return new Promise((function(s,i){var n=t.apply(a,e);function r(t){f(n,s,i,r,o,"next",t)}function o(t){f(n,s,i,r,o,"throw",t)}r(void 0)}))}}e(164),e(201),u.a.vfs=v.a.pdfMake.vfs,window.JSZip=c.a;var m,h,g,_,C,x,k={mounted:function(){this.consultar(1)},name:"barri",data:function(){return{errores:[],bandera:!1,entrarPorError:!1,txtbusqueda:"",etnias:[],etniasData:{descripcion:"",observacion:"",id:0},csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),paginacion:{total:0,pagina_actual:0,por_pagina:0,ultima_pagina:0,desde:0,hasta:0},offset:4,LabelEtnia:"",datos:[],clasificacion:"",idEtnia:0,valG:!0}},computed:{etniaError:function(){if(""==this.etniasData.descripcion.trim())return"El campo es obligatorio"},etniaClases:function(){return[{"is-invalid":this.etniaError,"is-valid":!this.etniaError}]},esActivo:function(){return this.paginacion.pagina_actual},numeroDePaginas:function(){if(!this.paginacion.hasta)return[];var t=this.paginacion.pagina_actual-this.offset;t<1&&(t=1);var a=t+2*this.offset;a>=this.paginacion.ultima_pagina&&(a=this.paginacion.ultima_pagina);for(var e=[];t<=a;)e.push(t),t++;return e},spinG:function(){return this.valG?{}:["kt-spinner","kt-spinner--right","kt-spinner--sm","kt-spinner--light"]}},methods:{consultar:(x=b(i.a.mark((function t(a){var e,s=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.etnias=[],e={txtbusqueda:this.txtbusqueda.trim(),_token:this.csrf,page:a},t.prev=2,t.next=5,(i=e,Object(n.a)().post("/etnias",i)).then((function(t){s.etnias=t.data.etnias,s.tabla()}));case 5:t.next=16;break;case 7:t.prev=7,t.t0=t.catch(2),t.t1=t.t0.response.status,t.next=422===t.t1?12:14;break;case 12:case 14:return this.$swal("Error...!","Ocurrio un error!","error"),t.abrupt("break",16);case 16:case"end":return t.stop()}var i}),t,this,[[2,7]])}))),function(t){return x.apply(this,arguments)}),abrirModal:function(){this.etniasData.descripcion="",this.etniasData.observacion="",this.etniasData.id=0,this.errores=[],this.entrarPorError=!1,this.$refs.modalEtnias.show()},cerrarModal:function(){this.$refs.modalEtnias.hide()},guardarEtnia:(C=b(i.a.mark((function t(){var a,e=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.checkForm()){t.next=4;break}this.entrarPorError=!1,t.next=23;break;case 4:return this.errores=[],a={_token:this.csrf,descripcion:this.etniasData.descripcion,observacion:this.etniasData.observacion,id:this.etniasData.id},this.valG=!1,t.prev=7,t.next=10,(s=a,Object(n.a)().post("/etnias/guardar",s)).then((function(t){e.tabladatos.fnClearTable(),e.tabladatos.fnDestroy(),e.consultar(1),e.etniasData.descripcion="",e.etniasData.observacion="",e.etniasData.id=0,e.cerrarModal(),e.$swal("Guardar...!","Datos Guardados Exitosamente!","success"),e.valG=!0})).catch((function(t){e.errorDevuelto=t.response.data.errors,e.entrarPorError=!0}));case 10:t.next=23;break;case 12:t.prev=12,t.t0=t.catch(7),t.t1=t.t0.response.status,t.next=419===t.t1?17:422===t.t1?19:21;break;case 17:case 19:case 21:return this.$swal("Error...!","Ocurrio un error!","error"),t.abrupt("break",23);case 23:case"end":return t.stop()}var s}),t,this,[[7,12]])}))),function(){return C.apply(this,arguments)}),checkForm:function(t){return this.errores=[],this.etniasData.descripcion||this.errores.push("La descripción es obligatoria."),!this.errores.length},cambiarPaginas:function(t){this.paginacion.pagina_actual=t,this.consultar(t)},eliminar:(_=b(i.a.mark((function t(a){var e,s,r=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e="",s="","Activo"==a.estado?(e="¿Desea anular la etnia "+a.descripcion+"?",s="Etnia "+a.descripcion+" anulada de manera exitosa"):(e="¿Desea activar la etnia "+a.descripcion+"?",s="Etnia "+a.descripcion+" activada de manera exitosa"),this.$swal({title:e,text:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar",cancelButtonText:"Cancelar"}).then((function(t){if(t.value){var e={_token:r.csrf,id:a.id,estado:a.estado};try{(i=e,Object(n.a)().post("/etnias/eliminar",i)).then((function(t){r.tabladatos.fnClearTable(),r.tabladatos.fnDestroy(),r.consultar(1),r.$swal({position:"top-end",icon:"success",title:s,showConfirmButton:!1,timer:2e3})})).catch((function(t){r.$swal("Error...!","Ocurrio un error!","error")}))}catch(t){switch(t.response.status){case 422:default:r.$swal("Error...!","Ocurrio un error!","error")}}}var i}));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return _.apply(this,arguments)}),abrirModalClasi:function(t){this.LabelEtnia=t.descripcion,this.idEtnia=t.id,this.consultarClasificacion(),this.$refs.modalClasificacion.show()},cerrarModalClasi:function(){this.idEtnia=0,this.$refs.modalClasificacion.hide()},agregar:function(){""!=this.clasificacion?(this.datos.push({id:0,clasificacion:this.clasificacion,estado:"Activo"}),this.clasificacion=""):this.$swal("Error...!","Por favor digite una clasificación!","error")},eliminarItem:function(t,a){var e="";e="Activo"==a?"Inactivo":"Activo",this.datos[t].estado=e},guardarClasificacion:(g=b(i.a.mark((function t(){var a,e=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.checkForm2()){t.next=4;break}this.entrarPorError=!1,t.next=23;break;case 4:return this.errores=[],a={_token:this.csrf,clasificacion:this.datos,id_etnia:this.idEtnia},this.valG=!1,t.prev=7,t.next=10,(s=a,Object(n.a)().post("/etnias/guardarClasificacion",s)).then((function(t){e.tabladatos.fnClearTable(),e.tabladatos.fnDestroy(),e.consultar(1),e.datos=[],e.clasificacion="",e.bandera=!1,e.cerrarModalClasi(),e.$swal("Guardar...!","Datos Guardados Exitosamente!","success"),e.valG=!0})).catch((function(t){e.errorDevuelto=t.response.data.errors,e.entrarPorError=!0}));case 10:t.next=23;break;case 12:t.prev=12,t.t0=t.catch(7),t.t1=t.t0.response.status,t.next=419===t.t1?17:422===t.t1?19:21;break;case 17:case 19:case 21:return this.$swal("Error...!","Ocurrio un error!","error"),t.abrupt("break",23);case 23:case"end":return t.stop()}var s}),t,this,[[7,12]])}))),function(){return g.apply(this,arguments)}),checkForm2:function(t){return this.errores=[],this.datos.length<=0&&this.errores.push("Agregue por lo menos una clasificación"),!this.errores.length},consultarClasificacion:(h=b(i.a.mark((function t(){var a,e=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id_etnia:this.idEtnia,_token:this.csrf},t.prev=1,t.next=4,(s=a,Object(n.a)().post("/etnias/listarClasificacion",s)).then((function(t){e.datos=t.data.clasificacion}));case 4:t.next=15;break;case 6:t.prev=6,t.t0=t.catch(1),t.t1=t.t0.response.status,t.next=422===t.t1?11:13;break;case 11:case 13:return this.$swal("Error...!","Ocurrio un error!","error"),t.abrupt("break",15);case 15:case"end":return t.stop()}var s}),t,this,[[1,6]])}))),function(){return h.apply(this,arguments)}),editar:(m=b(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.etniasData.descripcion=a.descripcion,this.etniasData.observacion=a.observacion,this.etniasData.id=a.id,this.$refs.modalEtnias.show();case 4:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)}),tabla:function(){var t=this;this.$nextTick((function(){$.fn.DataTable=o.a,t.tabladatos=$("#tablaDatos").DataTable({orderCellsTop:!0,language:{processing:"Procesando...",lengthMenu:"Mostrar _MENU_ registros",zeroRecords:"No se encontraron resultados",emptyTable:"Ningún dato disponible en esta tabla",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",search:"Buscar:",infoThousands:",",loadingRecords:"Cargando...",paginate:{first:"Primero",last:"Último",next:"Siguiente",previous:"Anterior"},aria:{sortAscending:": Activar para ordenar la columna de manera ascendente",sortDescending:": Activar para ordenar la columna de manera descendente"},buttons:{copy:"Copiar",colvis:"Visibilidad",collection:"Colección",colvisRestore:"Restaurar visibilidad",copyKeys:"Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br /> <br /> Para cancelar, haga clic en este mensaje o presione escape.",copySuccess:{1:"Copiada 1 fila al portapapeles",_:"Copiadas %d fila al portapapeles"},copyTitle:"Copiar al portapapeles",csv:"CSV",excel:"Excel",pageLength:{"-1":"Mostrar todas las filas",_:"Mostrar %d filas"},pdf:"PDF",print:"Imprimir"},autoFill:{cancel:"Cancelar",fill:"Rellene todas las celdas con <i>%d</i>",fillHorizontal:"Rellenar celdas horizontalmente",fillVertical:"Rellenar celdas verticalmentemente"},decimal:",",searchBuilder:{add:"Añadir condición",button:{0:"Constructor de búsqueda",_:"Constructor de búsqueda (%d)"},clearAll:"Borrar todo",condition:"Condición",conditions:{date:{after:"Despues",before:"Antes",between:"Entre",empty:"Vacío",equals:"Igual a",notBetween:"No entre",notEmpty:"No Vacio",not:"Diferente de"},number:{between:"Entre",empty:"Vacio",equals:"Igual a",gt:"Mayor a",gte:"Mayor o igual a",lt:"Menor que",lte:"Menor o igual que",notBetween:"No entre",notEmpty:"No vacío",not:"Diferente de"},string:{contains:"Contiene",empty:"Vacío",endsWith:"Termina en",equals:"Igual a",notEmpty:"No Vacio",startsWith:"Empieza con",not:"Diferente de"},array:{not:"Diferente de",equals:"Igual",empty:"Vacío",contains:"Contiene",notEmpty:"No Vacío",without:"Sin"}},data:"Data",deleteTitle:"Eliminar regla de filtrado",leftTitle:"Criterios anulados",logicAnd:"Y",logicOr:"O",rightTitle:"Criterios de sangría",title:{0:"Constructor de búsqueda",_:"Constructor de búsqueda (%d)"},value:"Valor"},searchPanes:{clearMessage:"Borrar todo",collapse:{0:"Paneles de búsqueda",_:"Paneles de búsqueda (%d)"},count:"{total}",countFiltered:"{shown} ({total})",emptyPanes:"Sin paneles de búsqueda",loadMessage:"Cargando paneles de búsqueda",title:"Filtros Activos - %d"},select:{cells:{1:"1 celda seleccionada",_:"%d celdas seleccionadas"},columns:{1:"1 columna seleccionada",_:"%d columnas seleccionadas"},rows:{1:"1 fila seleccionada",_:"%d filas seleccionadas"}},thousands:".",datetime:{previous:"Anterior",next:"Proximo",hours:"Horas",minutes:"Minutos",seconds:"Segundos",unknown:"-",amPm:["AM","PM"],months:{0:"Enero",1:"Febrero",10:"Noviembre",11:"Diciembre",2:"Marzo",3:"Abril",4:"Mayo",5:"Junio",6:"Julio",7:"Agosto",8:"Septiembre",9:"Octubre"},weekdays:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"]},editor:{close:"Cerrar",create:{button:"Nuevo",title:"Crear Nuevo Registro",submit:"Crear"},edit:{button:"Editar",title:"Editar Registro",submit:"Actualizar"},remove:{button:"Eliminar",title:"Eliminar Registro",submit:"Eliminar",confirm:{_:"¿Está seguro que desea eliminar %d filas?",1:"¿Está seguro que desea eliminar 1 fila?"}},error:{system:'Ha ocurrido un error en el sistema (<a target="\\" rel="\\ nofollow" href="\\">Más información&lt;\\/a&gt;).</a>'},multi:{title:"Múltiples Valores",info:"Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",restore:"Deshacer Cambios",noMulti:"Este registro puede ser editado individualmente, pero no como parte de un grupo."}},info:"Mostrando _START_ a _END_ de _TOTAL_ registros"},dom:"B<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",buttons:{dom:{buttons:{className:"btn"}},buttons:[{extend:"copyHtml5",text:"<i class='fa fa-file-alt'></i>",titleAttr:"Copiar",className:"btn btn-outline-brand btn-icon btn-lg",messageTop:"Listado de Etnias",title:"Sistema Integrado Poblacional",exportOptions:{columns:[0,1,2]}},{extend:"excelHtml5",text:"<i class='fa fa-file-excel'></i>",titleAttr:"Exportar a Excel",className:"btn btn-outline-success btn-icon btn-lg",excelStyles:{template:"header_blue"},messageTop:"Listado de Etnias",title:"Sistema Integrado Poblacional",exportOptions:{columns:[0,1,2]}},{extend:"pdfHtml5",text:"<i class='fa fa-file-pdf'></i>",titleAttr:"Exportar a PDF",className:"btn btn-outline-danger btn-icon btn-lg",messageTop:"Listado de Etnias",title:"Sistema Integrado Poblacional",exportOptions:{columns:[0,1,2]},customize:function(t){t.styles.title={color:"red",fontSize:"20",alignment:"center"},t.styles["td:nth-child(2)"]={width:"100px","max-width":"100px"},t.styles.tableHeader={fillColor:"#DF0101",color:"white"}}},{extend:"csvHtml5",text:"<i class='fa fa-file-csv'></i>",titleAttr:"Exportar a csv",className:"btn btn-outline-info btn-icon btn-lg",messageTop:"Listado de Etnias",title:"Sistema Integrado Poblacional",exportOptions:{columns:[0,1,2]}},{extend:"print",text:"<i class='fa fa-print'></i>",titleAttr:"Imprimir Archivo",className:"btn btn-outline-dark btn-icon btn-lg",messageTop:"Listado de Etnias",title:"Sistema Integrado Poblacional",exportOptions:{columns:[0,1,2]}}]}}),$(".dataTables_filter input").attr("placeholder","Busqueda..."),$(".dataTables_filter label").addClass("form-control"),$(".dataTables_filter label").css("outline","none"),$(".dataTables_filter label").css("border","0"),$(".dataTables_filter label").css("padding-bottom","35px"),$(".dataTables_filter label input").css("margin-left","0px")}))}}},w=(e(505),e(3)),E=Object(w.a)(k,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"kt-portlet",staticStyle:{"margin-top":"-4%"}},[t._m(0),t._v(" "),e("div",{staticClass:"kt-portlet__body"},[e("div",{staticClass:"kt-section"},[e("div",{staticClass:"kt-section__content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-lg-6"},[e("div",{staticClass:"kt-section"},[e("div",{staticClass:"kt-section__content"},[e("a",{staticClass:"btn btn-outline-primary btn-icon",attrs:{href:"javascript:;","data-skin":"dark","data-toggle":"kt-tooltip","data-placement":"top",title:"Nueva Etnia"},on:{click:t.abrirModal}},[e("i",{staticClass:"la la-file-text-o"})]),t._v(" \n                                ")])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm table-hover",attrs:{id:"tablaDatos"}},[t._m(1),t._v(" "),e("tbody",t._l(t.etnias,(function(a,s){return e("tr",{key:s},[e("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle",color:"#212529"}},[t._v("\n                                                "+t._s(s+1)+"\n                                            ")]),t._v(" "),e("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle","text-align":"left","text-transform":"capitalize",color:"#212529"}},[t._v("\n                                                "+t._s(a.descripcion)+"\n                                            ")]),t._v(" "),e("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle","text-align":"left","text-transform":"capitalize",color:"#212529"}},[t._v("\n                                                "+t._s(a.observacion)+"\n                                            ")]),t._v(" "),e("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle","text-align":"center",color:"#212529"}},[e("span",{staticClass:"kt-badge kt-badge--inline",class:"Activo"==a.estado?"kt-badge--success":"kt-badge--danger"},[t._v(t._s(a.estado))])]),t._v(" "),e("td",{staticStyle:{"text-align":"center","vertical-align":"middle",color:"#212529"}},[e("button",{staticClass:"btn btn-outline-success btn-icon btn-sm",attrs:{type:"button",title:"Agregar Clasificación"},on:{click:function(e){return t.abrirModalClasi(a)}}},[e("i",{staticClass:"fa fa-list"})]),t._v(" "),e("button",{staticClass:"btn btn-outline-info btn-icon btn-sm",attrs:{type:"button",title:"Editar"},on:{click:function(e){return t.editar(a)}}},[e("i",{staticClass:"fa fa-edit"})]),t._v(" "),e("button",{staticClass:"btn btn-icon btn-sm",class:"Activo"==a.estado?"btn-outline-danger":"btn-outline-success",attrs:{type:"button",title:"Activo"==a.estado?"Anular":"Activar"},on:{click:function(e){return t.eliminar(a)}}},[e("i",{staticClass:"fa",class:"Activo"==a.estado?"fa-trash":"fa-check"})])])])})),0)]),t._v(" "),e("div",{staticClass:"kt-separator kt-separator--border-dashed"})])])])])])]),t._v(" "),e("b-modal",{ref:"modalEtnias",attrs:{"hide-footer":"",title:"Gestion de Etnias",size:"xl",centered:"","header-bg-variant":"danger","header-text-variant":"light","no-close-on-backdrop":!0}},[e("div",{staticClass:"d-block"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("transition",{attrs:{duration:1e3,name:"fade"}},[t.entrarPorError?e("div",{staticClass:"alert alert-warning fade show",attrs:{role:"alert"}},[e("div",{staticClass:"alert-icon"},[e("i",{staticClass:"flaticon-warning"})]),t._v(" "),e("div",{staticClass:"alert-text"},[t._v("\n                                    Por favor, corrija el(los) siguiente(s)\n                                    error(es):\n                                    "),e("hr"),t._v(" "),e("ul",t._l(t.errorDevuelto,(function(a,s){return e("li",{key:s},[t._v("\n                                            "+t._s(a)+"\n                                        ")])})),0)]),t._v(" "),e("div",{staticClass:"alert-close"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"la la-close"})])])])]):t._e()])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("transition",{attrs:{duration:1e3,name:"fade"}},[t.errores.length?e("div",{staticClass:"alert alert-warning fade show",attrs:{role:"alert"}},[e("div",{staticClass:"alert-icon"},[e("i",{staticClass:"flaticon-warning"})]),t._v(" "),e("div",{staticClass:"alert-text"},[t._v("\n                                    Por favor, corrija el(los) siguiente(s)\n                                    error(es):\n                                    "),e("hr"),t._v(" "),e("ul",t._l(t.errores,(function(a,s){return e("li",{key:s},[t._v("\n                                            "+t._s(a)+"\n                                        ")])})),0)]),t._v(" "),e("div",{staticClass:"alert-close"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"la la-close"})])])])]):t._e()])],1)]),t._v(" "),e("form",[e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-4"},[e("label",[t._v("Etnia:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.etniasData.descripcion,expression:"etniasData.descripcion"}],staticClass:"form-control text-capitalize",class:t.etniaClases,attrs:{type:"text",placeholder:"Descripción"},domProps:{value:t.etniasData.descripcion},on:{input:function(a){a.target.composing||t.$set(t.etniasData,"descripcion",a.target.value)}}}),t._v(" "),t.etniaError?e("div",{staticClass:"invalid-feedback"},[t._v("\n                                "+t._s(t.etniaError)+"\n                            ")]):t._e()]),t._v(" "),e("div",{staticClass:"col-lg-8"},[e("label",[t._v("Observación:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.etniasData.observacion,expression:"etniasData.observacion"}],staticClass:"form-control text-capitalize",attrs:{type:"text",placeholder:"Observación"},domProps:{value:t.etniasData.observacion},on:{input:function(a){a.target.composing||t.$set(t.etniasData,"observacion",a.target.value)}}})])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-success",class:t.spinG,attrs:{type:"button",disabled:!t.valG},on:{click:t.guardarEtnia}},[e("i",{staticClass:"fa fa-edit"}),t._v(" Guardar\n                        ")]),t._v(" "),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.cerrarModal}},[e("i",{staticClass:"fa fa-window-close"}),t._v(" Cancelar\n                        ")])])])])]),t._v(" "),e("b-modal",{ref:"modalClasificacion",attrs:{"hide-footer":"",title:"Gestion de Clasificación de Etnias",size:"xl",centered:"","header-bg-variant":"danger","header-text-variant":"light","no-close-on-backdrop":!0}},[e("div",{staticClass:"d-block"},[e("form",[e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-12"},[e("label",{staticClass:"bold",staticStyle:{"font-size":"18px"}},[t._v("Etnia: "+t._s(t.LabelEtnia))])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-11"},[e("label",[t._v("Clasificación:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.clasificacion,expression:"clasificacion"}],staticClass:"form-control text-capitalize",attrs:{type:"text",placeholder:"Clasificación"},domProps:{value:t.clasificacion},on:{input:function(a){a.target.composing||(t.clasificacion=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-lg-1"},[e("label",[t._v("   ")]),t._v(" "),e("a",{staticClass:"btn btn-outline-info btn-icon",attrs:{href:"javascript:;","data-skin":"dark","data-toggle":"kt-tooltip","data-placement":"top",title:"Agregar Clasificación"},on:{click:function(a){return a.preventDefault(),t.agregar.apply(null,arguments)}}},[e("i",{staticClass:"fa fa-plus"})]),t._v(" \n                        ")])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm table-hover"},[e("thead",{},[e("tr",{staticClass:"kt-bg-fill-brand"},[e("th",[t._v("No.")]),t._v(" "),e("th",[t._v("Clasificación")]),t._v(" "),e("th",[t._v("Estado")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n                                                Opciones\n                                            ")])])]),t._v(" "),e("tbody",t._l(t.datos,(function(a,s){return e("tr",{key:s},[e("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle"}},[t._v("\n                                                "+t._s(s+1)+"\n                                            ")]),t._v(" "),e("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle","text-align":"left","text-transform":"capitalize"}},[e("span",{staticClass:"text-capitalize"},[t._v(t._s(a.clasificacion))])]),t._v(" "),e("td",{staticStyle:{"font-weight":"normal","vertical-align":"middle","text-align":"center"}},[e("span",{staticClass:"kt-badge kt-badge--inline",class:"Activo"==a.estado?"kt-badge--success":"kt-badge--danger"},[t._v(t._s(a.estado))])]),t._v(" "),e("td",{staticStyle:{"text-align":"center","vertical-align":"middle"}},[e("button",{staticClass:"btn btn-icon btn-sm",class:"Activo"==a.estado?"btn-outline-danger":"btn-outline-success",attrs:{type:"button",title:"Activo"==a.estado?"Anular":"Activar"},on:{click:function(e){return t.eliminarItem(s,a.estado)}}},[e("i",{staticClass:"fa",class:"Activo"==a.estado?"fa-trash":"fa-check"})])])])})),0)])])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-success",class:t.spinG,attrs:{type:"button",disabled:!t.valG},on:{click:t.guardarClasificacion}},[e("i",{staticClass:"fa fa-edit"}),t._v(" Guardar\n                        ")]),t._v(" "),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.cerrarModalClasi}},[e("i",{staticClass:"fa fa-window-close"}),t._v(" Cancelar\n                        ")])])])])])],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"kt-portlet__head"},[a("div",{staticClass:"kt-portlet__head-label"},[a("h3",{staticClass:"kt-portlet__head-title"},[a("span",{staticClass:"kt-widget20__number kt-font-danger"},[this._v("GESTIÓN DE ETNIAS")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{},[e("tr",{staticClass:"kt-bg-fill-brand"},[e("th",{staticClass:"text-white"},[t._v("No.")]),t._v(" "),e("th",{staticClass:"text-white"},[t._v("\n                                                Etnia\n                                            ")]),t._v(" "),e("th",{staticClass:"text-white"},[t._v("\n                                                Observación\n                                            ")]),t._v(" "),e("th",{staticClass:"text-center text-white"},[t._v("\n                                                Estado\n                                            ")]),t._v(" "),e("th",{staticClass:"text-center text-white"},[t._v("\n                                                Opciones\n                                            ")])])])}],!1,null,null,null);a.default=E.exports}}]);