"use strict";(self.webpackChunkangular_app=self.webpackChunkangular_app||[]).push([[380],{2380:($,f,d)=>{d.r(f),d.d(f,{UsersModule:()=>V});var c=d(6814),m=d(593),p=d(627),h=d(2051),Z=d(8645),n=d(95),e=d(4769),g=d(1734),T=d(8672),F=d(2425);function k(s,l){if(1&s&&(e.TgZ(0,"label",2)(1,"span",3),e._uU(2),e.qZA(),e.TgZ(3,"span",4),e._uU(4),e.qZA()()),2&s){const t=e.oxw();e.xp6(1),e.Udp("color",t.getColor("checkedTextColor")),e.uIk("aria-label",t.checkedLabel),e.xp6(1),e.Oqu(t.checkedLabel),e.xp6(1),e.Udp("color",t.getColor("uncheckedTextColor")),e.uIk("aria-label",t.uncheckedLabel),e.xp6(1),e.Oqu(t.uncheckedLabel)}}const v=["*"],b=new e.OlP("UI_SWITCH_OPTIONS"),w={provide:n.JU,useExisting:(0,e.Gpc)(()=>C),multi:!0};let C=(()=>{class s{constructor(t={},o){this.cdr=o,this.change=new e.vpe,this.changeEvent=new e.vpe,this.valueChange=new e.vpe,this.onTouchedCallback=r=>{},this.onChangeCallback=r=>{},this.size=t&&t.size||"medium",this.color=t&&t.color,this.switchOffColor=t&&t.switchOffColor,this.switchColor=t&&t.switchColor,this.defaultBgColor=t&&t.defaultBgColor,this.defaultBoColor=t&&t.defaultBoColor,this.checkedLabel=t&&t.checkedLabel,this.uncheckedLabel=t&&t.uncheckedLabel,this.checkedTextColor=t&&t.checkedTextColor,this.uncheckedTextColor=t&&t.uncheckedTextColor}set checked(t){this._checked=!1!==t}get checked(){return this._checked}set disabled(t){this._disabled=!1!==t}get disabled(){return this._disabled}set reverse(t){this._reverse=!1!==t}get reverse(){return this._reverse}set loading(t){this._loading=!1!==t}get loading(){return this._loading}getColor(t=""){return"borderColor"===t?this.defaultBoColor:"switchColor"===t?this.reverse?this.checked&&this.switchOffColor||this.switchColor:this.checked?this.switchColor:this.switchOffColor||this.switchColor:"checkedTextColor"===t?this.reverse?this.uncheckedTextColor:this.checkedTextColor:"uncheckedTextColor"===t?this.reverse?this.checkedTextColor:this.uncheckedTextColor:this.reverse?this.checked?this.defaultBgColor:this.color:this.checked?this.color:this.defaultBgColor}onClick(t){this.disabled||(this.checked=!this.checked,this.change.emit(this.checked),this.valueChange.emit(this.checked),this.changeEvent.emit(t),this.onChangeCallback(this.checked),this.onTouchedCallback(this.checked),this.cdr.markForCheck())}onToggle(t){this.disabled||(this.beforeChange?this._beforeChange=this.beforeChange.subscribe(o=>{o&&this.onClick(t)}):this.onClick(t))}writeValue(t){t!==this.checked&&(this.checked=!!t),this.onChangeCallback(this.checked),this.cdr&&this.cdr.markForCheck()}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouchedCallback=t}setDisabledState(t){this.disabled=t}ngOnDestroy(){this._beforeChange&&this._beforeChange.unsubscribe()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(b,8),e.Y36(e.sBO))},s.\u0275cmp=e.Xpm({type:s,selectors:[["ui-switch"]],hostBindings:function(t,o){1&t&&e.NdJ("click",function(i){return o.onToggle(i)})},inputs:{size:"size",color:"color",switchOffColor:"switchOffColor",switchColor:"switchColor",defaultBgColor:"defaultBgColor",defaultBoColor:"defaultBoColor",checkedLabel:"checkedLabel",uncheckedLabel:"uncheckedLabel",checkedTextColor:"checkedTextColor",uncheckedTextColor:"uncheckedTextColor",beforeChange:"beforeChange",checked:"checked",disabled:"disabled",reverse:"reverse",loading:"loading"},outputs:{change:"change",changeEvent:"changeEvent",valueChange:"valueChange"},features:[e._Bn([w])],ngContentSelectors:v,decls:4,vars:20,consts:[["type","button","role","switch",1,"switch"],["class","switch-pane",4,"ngIf"],[1,"switch-pane"],[1,"switch-label-checked"],[1,"switch-label-unchecked"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"button",0),e.YNc(1,k,5,8,"label",1),e.TgZ(2,"small"),e.Hsn(3),e.qZA()()),2&t&&(e.Udp("background-color",o.getColor())("border-color",o.getColor("borderColor")),e.ekj("checked",o.checked)("disabled",o.disabled)("loading",o.loading)("switch-large","large"===o.size)("switch-medium","medium"===o.size)("switch-small","small"===o.size),e.uIk("aria-checked",o.checked),e.xp6(1),e.Q6J("ngIf",o.checkedLabel||o.uncheckedLabel),e.xp6(1),e.Udp("background",o.getColor("switchColor")))},dependencies:[c.O5],encapsulation:2}),s})(),y=(()=>{class s{static forRoot(t){return{ngModule:s,providers:[{provide:b,useValue:t||{}}]}}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[c.ez,n.u5,n.u5]}),s})();const M=["addUserModal"],I=["userInfoModal"],q=["editUserModal"],A=["deleteUserModal"];function O(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td",45)(12,"ui-switch",46),e.NdJ("change",function(){const i=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.changeUserStatus(i))})("ngModelChange",function(r){const a=e.CHM(t).$implicit;return e.KtG(a.is_active=r)}),e.qZA()(),e.TgZ(13,"td",45)(14,"div",47)(15,"button",48),e.NdJ("click",function(){const i=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.showUserModal(i))}),e._UZ(16,"i",49),e.TgZ(17,"span",50),e._uU(18,"Edit Information"),e.qZA()(),e.TgZ(19,"button",51),e.NdJ("click",function(){const i=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.showDeleteUserModal(i))}),e._UZ(20,"i",52),e.TgZ(21,"span",53),e._uU(22,"Delete Account"),e.qZA()()()()()}if(2&s){const t=l.$implicit;e.xp6(2),e.Oqu(t.ROWID),e.xp6(2),e.AsE("",t.first_name," ",t.last_name,""),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.phone_number),e.xp6(2),e.Oqu(1==t.role?"Admin":"User"),e.xp6(2),e.Q6J("ngModel",t.is_active)}}function N(s,l){1&s&&(e.TgZ(0,"tbody",45)(1,"tr")(2,"td",54),e._uU(3,"No data!"),e.qZA()()())}function L(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," First Name is required "),e.qZA())}function J(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Minimum two characters required "),e.qZA())}function P(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Last Name is required "),e.qZA())}function S(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Minimum two characters required "),e.qZA())}function B(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Email is required "),e.qZA())}function D(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Minimum three characters required "),e.qZA())}function Q(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Valid e-mail required "),e.qZA())}function Y(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Password is required "),e.qZA())}function E(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Minimum two characters required "),e.qZA())}function x(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Role Type is required "),e.qZA())}function H(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Phone Number is required "),e.qZA())}function G(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Minimum two characters required "),e.qZA())}function z(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Address is required "),e.qZA())}function W(s,l){1&s&&(e.TgZ(0,"span",55),e._uU(1," Minimum two characters required "),e.qZA())}const U=function(){return{backdrop:"static",keyboard:!1,animated:!0}},u=function(s,l){return{"is-invalid":s,"is-valid":l}},j=[{path:"",component:(()=>{class s{constructor(t,o,r,i,a,_){this.globalService=t,this.spinner=o,this.usersService=r,this.formBuilder=i,this.toastr=a,this.router=_,this.userList=[],this.dtOptions={},this.dtTrigger=new Z.x,this.profileImage=null,this.submitted=!1,this.customStart=0,this.currentUser={},this.editcurrentUser={},this.userForm=new n.cw({ROWID:new n.NI(""),first_name:new n.NI(""),last_name:new n.NI(""),email:new n.NI(""),password:new n.NI(""),role:new n.NI(""),company_name:new n.NI(""),image:new n.NI(""),address:new n.NI(""),phone_number:new n.NI("")}),this.addUserModal=h.oB,this.userInfoModal=h.oB,this.editUserModal=h.oB,this.deleteUserModal=h.oB}ngOnInit(){this.dtOptions={responsive:!0,paging:!0,scrollX:!0,scrollY:"300px",scrollCollapse:!1,pageLength:5,columnDefs:[{orderable:!1,searchable:!1,targets:[0]}],serverSide:!0,processing:!0,retrieve:!0,columns:[{data:"row-id"},{data:"username"},{data:"phone_number"},{data:"email"},{data:"role"},{data:"is_active"},{data:"Action"}],ajax:(t,o)=>{this.getUsersList(t,o)}},this.createForm(),this.userForm.image||(this.profileImage="/assets/img/def-user-db.png")}reInitDataTable(){try{this.datatableElement.dtInstance.then(t=>{t.ajax.reload()})}catch{}}ngAfterViewInit(){this.dtTrigger.next("")}createForm(){this.userForm=this.formBuilder.group({ROWID:"",first_name:["",[n.kI.required,n.kI.minLength(2)]],last_name:["",[n.kI.required,n.kI.minLength(2)]],email:["",[n.kI.required,n.kI.minLength(3),n.kI.email]],password:["",[n.kI.required,n.kI.minLength(2)]],phone_number:["",[n.kI.required,n.kI.minLength(10),n.kI.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],role:["1",[n.kI.required,n.kI.minLength(1)]],address:["",[n.kI.required,n.kI.minLength(8)]]})}get myForm(){return this.userForm.controls}get registerFormControl(){return this.userForm.controls}getUsersList(t,o){let r=JSON.parse(JSON.stringify(t));this.usersService.getUsersList({limit:r.length,offset:r.start,searchParam:""}).subscribe({next:a=>{if(200==a.status){const _=a.data;console.log("userList---DATA to show",this.userList),this.customStart=t.start+1,this.userList=_,o({recordsTotal:a.totalRecord,recordsFiltered:a.totalRecord,data:[]})}},error:a=>{this.spinner.hide(),this.toastr.error(a.message,"Error!")}})}showUserModal(t){this.createForm(),t?(t.password="",this.userForm.value=this.userForm.reset(t)):console.log("View User details",this.currentUser),this.addUserModal.show()}userImage(t){if(this.selectedFiles=t.target.files,this.selectedFiles){const o=this.selectedFiles.item(0);if(o){this.currentFile=o;const r=new FileReader;r.onload=i=>{this.profileImage=i.target.result},r.readAsDataURL(this.currentFile)}}this.profileImage=t.target.files[0],this.userForm.value.image&&(this.userForm.value.previous_image=this.userForm.value.image),console.log("this.profileImage",this.profileImage),this.userForm.value.image=this.profileImage}changeUserStatus(t){this.usersService.saveUserInfo({ROWID:t.ROWID,is_active:!t.is_active}).subscribe(r=>{if(200===r.status){r=r.data,this.globalService.sendActionChildToParent("stop"),this.toastr.success("User status has been changed successfully.","Success!");let i=this.userList.findIndex(a=>a._id===r._id);i&&(this.userList[i].status=r.status,this.reInitDataTable())}},r=>{this.globalService.sendActionChildToParent("stop"),this.toastr.error(r.message,"Error!")})}addUser(){let t=Object.assign({},this.userForm.value);this.spinner.show(),this.usersService.saveUserInfo(t).subscribe({next:o=>{this.spinner.hide(),200===o.status?(this.closeModel(),this.reInitDataTable(),this.toastr.success(o.message,"Success!"),o=o.data):this.toastr.success("there are some error while adding users "+o.data,"Success!")},error:o=>{this.spinner.hide(),this.toastr.error(o.message,"Error!")}})}showUserInfoModal(t){this.currentUser=t,console.log("View User details",this.currentUser),this.userInfoModal.show()}showDeleteUserModal(t){this.currentUser=t,this.deleteUserModal.show()}deleteUser(){this.spinner.show(),this.usersService.deleteUser(this.currentUser).subscribe({next:t=>{if(this.spinner.hide(),this.deleteUserModal.hide(),200===t.status){this.reInitDataTable();const o=this.userList.filter(r=>r.id===this.currentUser.id);if(o.length){const r=this.userList.indexOf(o[0]);this.userList.splice(r,1)}this.toastr.success("Record Deleted successfully. ","Success")}else this.toastr.error("There are some error. Please check connection."+t.data,"Error");this.currentUser={}},error:t=>{this.spinner.hide(),this.deleteUserModal.hide(),this.toastr.error("There are some server error. Please check connection.","Error")}})}closeModel(){this.addUserModal.hide(),this.deleteUserModal.hide()}static#e=this.\u0275fac=function(o){return new(o||s)(e.Y36(g.Uh),e.Y36(T.t2),e.Y36(g.fz),e.Y36(n.qu),e.Y36(F._W),e.Y36(m.F0))};static#r=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-users"]],viewQuery:function(o,r){if(1&o&&(e.Gf(p.G,5),e.Gf(M,5),e.Gf(I,5),e.Gf(q,5),e.Gf(A,5)),2&o){let i;e.iGM(i=e.CRH())&&(r.datatableElement=i.first),e.iGM(i=e.CRH())&&(r.addUserModal=i.first),e.iGM(i=e.CRH())&&(r.userInfoModal=i.first),e.iGM(i=e.CRH())&&(r.editUserModal=i.first),e.iGM(i=e.CRH())&&(r.deleteUserModal=i.first)}},decls:131,vars:55,consts:[[1,"px-4"],[1,"card","container-fluid","p-3","table-responsive",2,"min-height","450px"],[1,"row"],[1,"col-sm-12"],[1,"text-primary","pb-2","users-tag"],[1,"bi","bi-list-task","px-2"],["type","button",1,"btn","btn-sm","px-3","btn-primary","float-end",3,"click"],[1,"bi","bi-plus-square","pe-2"],["datatable","",1,"table","table-bordered","table-hover","table-striped","user-table-font",3,"dtOptions","dtTrigger"],[1,"text-nowrap"],[1,"text-center","w-25"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade",3,"config"],["addUserModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],[1,"bi","bi-database-add","pe-2"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"bi","bi-x-circle"],[1,"modal-body","pb-0"],[3,"formGroup","ngSubmit"],[1,"col-md-12","col-sm-12"],[1,"row","mb-1"],[1,"col"],[1,"form-label"],["formControlName","first_name","type","text","placeholder","Please Enter User First Name Here",1,"form-control",3,"ngClass"],["class","text-danger","style","font-size: 11px; font-weight:bold;",4,"ngIf"],["formControlName","last_name","type","text","placeholder","Please Enter User Last Name Here",1,"form-control",3,"ngClass"],["formControlName","email","type","text","placeholder","Please Enter User Email Here",1,"form-control",3,"ngClass"],["formControlName","password","type","password","placeholder","Please Enter User Password Here",1,"form-control",3,"ngClass"],["formControlName","role","aria-label","Default select example",1,"form-select",3,"ngClass"],["value","","selected",""],["value","1"],["value","2"],["formControlName","phone_number","type","text","placeholder","Please Enter User Name Here",1,"form-control",3,"ngClass"],["rows","3","formControlName","address","type","text","placeholder","Please Enter Your address",1,"form-control",3,"ngClass"],[1,"modal-footer","border-top-0","d-flex","justify-content-start"],["type","button",1,"btn","btn-default","me-1",3,"click"],[1,"bi","bi-x-square","pe-2"],["type","submit",1,"btn","btn-primary","text-white",3,"disabled","click"],["deleteUserModal","bs-modal"],["type","button",1,"btn","btn-danger","text-white",3,"click"],[1,"text-center"],["color","#4285F4","defaultBgColor","#d9d9d9","labelOn","ON","labelOff","OFF",3,"ngModel","change","ngModelChange"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","me-1","btn-primary","hover-text",3,"click"],[1,"bi","bi-pencil-square"],["id","bottom",1,"tooltip-text"],["type","button",1,"btn","btn-danger","hover-text",3,"click"],[1,"bi","bi-trash","p-0"],["id","left",1,"tooltip-text"],["colspan","10",1,"no-data-available"],[1,"text-danger",2,"font-size","11px","font-weight","bold"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._UZ(5,"i",5),e._uU(6,"List of Users "),e.TgZ(7,"button",6),e.NdJ("click",function(){return r.showUserModal()}),e._UZ(8,"i",7),e._uU(9," Add User "),e.qZA()()()(),e.TgZ(10,"table",8)(11,"thead")(12,"tr",9)(13,"th"),e._uU(14,"Table Row ID"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"User Name"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Email ID"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Phone"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Role"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Status"),e.qZA(),e.TgZ(25,"th",10),e._uU(26,"ACTION"),e.qZA()()(),e.TgZ(27,"tbody"),e.YNc(28,O,23,7,"tr",11),e.qZA(),e.YNc(29,N,4,0,"tbody",12),e.qZA()()(),e.TgZ(30,"div",13,14)(32,"div",15)(33,"div",16)(34,"div",17)(35,"h5",18),e._UZ(36,"i",19),e._uU(37),e.qZA(),e.TgZ(38,"button",20),e.NdJ("click",function(){return r.closeModel()}),e._UZ(39,"i",21),e.qZA()(),e.TgZ(40,"div",22)(41,"form",23),e.NdJ("ngSubmit",function(){return r.addUser()}),e.TgZ(42,"div",2)(43,"div",24)(44,"div",25)(45,"div",2)(46,"div",26)(47,"label",27),e._uU(48,"First Name:"),e.qZA(),e._UZ(49,"input",28),e.YNc(50,L,2,0,"span",29),e.YNc(51,J,2,0,"span",29),e.qZA(),e.TgZ(52,"div",26)(53,"label",27),e._uU(54,"Last Name:"),e.qZA(),e._UZ(55,"input",30),e.YNc(56,P,2,0,"span",29),e.YNc(57,S,2,0,"span",29),e.qZA()()(),e.TgZ(58,"div",25)(59,"div",2)(60,"div",26)(61,"label",27),e._uU(62,"Email:"),e.qZA(),e._UZ(63,"input",31),e.YNc(64,B,2,0,"span",29),e.YNc(65,D,2,0,"span",29),e.YNc(66,Q,2,0,"span",29),e.qZA(),e.TgZ(67,"div",26)(68,"label",27),e._uU(69,"Password:"),e.qZA(),e._UZ(70,"input",32),e.YNc(71,Y,2,0,"span",29),e.YNc(72,E,2,0,"span",29),e.qZA()()(),e.TgZ(73,"div",25)(74,"div",2)(75,"div",26)(76,"label",27),e._uU(77,"Role:"),e.qZA(),e.TgZ(78,"select",33)(79,"option",34),e._uU(80,"Select Role"),e.qZA(),e.TgZ(81,"option",35),e._uU(82,"Admin"),e.qZA(),e.TgZ(83,"option",36),e._uU(84,"User"),e.qZA()(),e.YNc(85,x,2,0,"span",29),e.qZA(),e.TgZ(86,"div",26)(87,"label",27),e._uU(88,"Phone:"),e.qZA(),e._UZ(89,"input",37),e.YNc(90,H,2,0,"span",29),e.YNc(91,G,2,0,"span",29),e.qZA()()(),e.TgZ(92,"div",25)(93,"div",2)(94,"div",26)(95,"label",27),e._uU(96,"Address:"),e.qZA(),e.TgZ(97,"textarea",38),e._uU(98," "),e.qZA(),e.YNc(99,z,2,0,"span",29),e.YNc(100,W,2,0,"span",29),e.qZA()()()()()()(),e.TgZ(101,"div",39)(102,"button",40),e.NdJ("click",function(){return r.closeModel()}),e._UZ(103,"i",41),e._uU(104,"Close"),e.qZA(),e.TgZ(105,"button",42),e.NdJ("click",function(){return r.addUser()}),e._UZ(106,"i",7),e._uU(107),e.qZA()()()()(),e.TgZ(108,"div",13,43)(110,"div",15)(111,"div",16)(112,"div",17)(113,"h5",18),e._UZ(114,"i",19),e._uU(115,"Delete User"),e.qZA(),e.TgZ(116,"button",20),e.NdJ("click",function(){return r.closeModel()}),e._UZ(117,"i",21),e.qZA()(),e.TgZ(118,"div",22)(119,"h6"),e._uU(120,"Are you sure want to delete this Account?"),e.qZA(),e.TgZ(121,"p")(122,"b"),e._uU(123,"Account Name :"),e.qZA(),e._uU(124),e._UZ(125,"br"),e.qZA()(),e.TgZ(126,"div",39)(127,"button",40),e.NdJ("click",function(){return r.closeModel()}),e._uU(128,"Close"),e.qZA(),e.TgZ(129,"button",44),e.NdJ("click",function(){return r.deleteUser()}),e._uU(130,"Delete"),e.qZA()()()()()),2&o&&(e.xp6(10),e.Q6J("dtOptions",r.dtOptions)("dtTrigger",r.dtTrigger),e.xp6(18),e.Q6J("ngForOf",r.userList),e.xp6(1),e.Q6J("ngIf",0==(null==r.userList?null:r.userList.length)),e.xp6(1),e.Q6J("config",e.DdM(32,U)),e.xp6(7),e.hij("",null!=r.userForm&&null!=r.userForm.value&&r.userForm.value.ROWID?"Edit":"Add"," User"),e.xp6(4),e.Q6J("formGroup",r.userForm),e.xp6(8),e.Q6J("ngClass",e.WLB(33,u,r.submitted&&r.myForm.first_name.errors||r.myForm.first_name.errors&&(r.userForm.controls.first_name.dirty||r.userForm.controls.first_name.touched),!r.userForm.get("first_name").errors&&(r.userForm.get("first_name").dirty||r.userForm.get("first_name").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.first_name.touched||r.submitted)&&(null==r.registerFormControl.first_name.errors?null:r.registerFormControl.first_name.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.first_name.errors?null:r.registerFormControl.first_name.errors.minlength),e.xp6(4),e.Q6J("ngClass",e.WLB(36,u,r.submitted&&r.myForm.last_name.errors||r.myForm.last_name.errors&&(r.userForm.controls.last_name.dirty||r.userForm.controls.last_name.touched),!r.userForm.get("last_name").errors&&(r.userForm.get("last_name").dirty||r.userForm.get("last_name").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.last_name.touched||r.submitted)&&(null==r.registerFormControl.last_name.errors?null:r.registerFormControl.last_name.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.last_name.errors?null:r.registerFormControl.last_name.errors.minlength),e.xp6(6),e.Q6J("ngClass",e.WLB(39,u,r.submitted&&r.myForm.email.errors||r.myForm.email.errors&&(r.userForm.controls.email.dirty||r.userForm.controls.email.touched),!r.userForm.get("email").errors&&(r.userForm.get("email").dirty||r.userForm.get("email").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.email.touched||r.submitted)&&(null==r.registerFormControl.email.errors?null:r.registerFormControl.email.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.email.errors?null:r.registerFormControl.email.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.email.errors?null:r.registerFormControl.email.errors.email),e.xp6(4),e.Q6J("ngClass",e.WLB(42,u,r.submitted&&r.myForm.password.errors||r.myForm.password.errors&&(r.userForm.controls.password.dirty||r.userForm.controls.password.touched),!r.userForm.get("password").errors&&(r.userForm.get("password").dirty||r.userForm.get("password").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.password.touched||r.submitted)&&(null==r.registerFormControl.password.errors?null:r.registerFormControl.password.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.password.errors?null:r.registerFormControl.password.errors.minlength),e.xp6(6),e.Q6J("ngClass",e.WLB(45,u,r.submitted&&r.myForm.role.errors||r.myForm.role.errors&&(r.userForm.controls.role.dirty||r.userForm.controls.role.touched),!r.userForm.get("role").errors&&(r.userForm.get("role").dirty||r.userForm.get("role").touched))),e.xp6(7),e.Q6J("ngIf",(r.registerFormControl.role.touched||r.submitted)&&(null==r.registerFormControl.role.errors?null:r.registerFormControl.role.errors.required)),e.xp6(4),e.Q6J("ngClass",e.WLB(48,u,r.submitted&&r.myForm.phone_number.errors||r.myForm.phone_number.errors&&(r.userForm.controls.phone_number.dirty||r.userForm.controls.phone_number.touched),!r.userForm.get("phone_number").errors&&(r.userForm.get("phone_number").dirty||r.userForm.get("phone_number").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.phone_number.touched||r.submitted)&&(null==r.registerFormControl.phone_number.errors?null:r.registerFormControl.phone_number.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.phone_number.errors?null:r.registerFormControl.phone_number.errors.minlength),e.xp6(6),e.Q6J("ngClass",e.WLB(51,u,r.submitted&&r.myForm.address.errors||r.myForm.address.errors&&(r.userForm.controls.address.dirty||r.userForm.controls.address.touched),!r.userForm.get("address").errors&&(r.userForm.get("address").dirty||r.userForm.get("address").touched))),e.xp6(2),e.Q6J("ngIf",(r.registerFormControl.address.touched||r.submitted)&&(null==r.registerFormControl.address.errors?null:r.registerFormControl.address.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.address.errors?null:r.registerFormControl.address.errors.minlength),e.xp6(5),e.Q6J("disabled",r.userForm.invalid),e.xp6(2),e.hij(" ",null!=r.userForm&&null!=r.userForm.value&&r.userForm.value.ROWID?"Update":"Save",""),e.xp6(1),e.Q6J("config",e.DdM(54,U)),e.xp6(16),e.hij(" ",r.currentUser.first_name+" "+r.currentUser.last_name," "))},dependencies:[c.mk,c.sg,c.O5,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.On,n.sg,n.u,p.G,h.oB,C],styles:["td[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100px}.user-table-font[_ngcontent-%COMP%]{font-size:14px}.users-tag[_ngcontent-%COMP%]{border:1px solid;padding:5px;box-shadow:5px 0 inset #5e72e3;border-top-style:hidden;border-right-style:hidden}.profile-image[_ngcontent-%COMP%]{height:150px}.pic-holder[_ngcontent-%COMP%]{text-align:center;position:relative;width:150px;height:150px;overflow:hidden;display:flex;justify-content:center;align-items:center;margin-bottom:20px}.pic-holder[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;object-position:center}.pic-holder[_ngcontent-%COMP%]   .upload-file-block[_ngcontent-%COMP%], .pic-holder[_ngcontent-%COMP%]   .upload-loader[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#5a5c69b3;color:#f8f9fc;font-size:12px;font-weight:600;opacity:0;display:flex;align-items:center;justify-content:center;transition:all .2s}.pic-holder[_ngcontent-%COMP%]   .upload-file-block[_ngcontent-%COMP%]{cursor:pointer}.pic-holder[_ngcontent-%COMP%]:hover   .upload-file-block[_ngcontent-%COMP%], .uploadProfileInput[_ngcontent-%COMP%]:focus ~ .upload-file-block[_ngcontent-%COMP%]{opacity:1}.pic-holder.uploadInProgress[_ngcontent-%COMP%]   .upload-file-block[_ngcontent-%COMP%]{display:none}.pic-holder.uploadInProgress[_ngcontent-%COMP%]   .upload-loader[_ngcontent-%COMP%]{opacity:1}.snackbar[_ngcontent-%COMP%]{visibility:hidden;min-width:250px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:14px;transform:translate(-50%)}.snackbar.show[_ngcontent-%COMP%]{visibility:visible;animation:_ngcontent-%COMP%_fadein .5s,fadeout .5s 2.5s}@keyframes _ngcontent-%COMP%_fadein{0%{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes _ngcontent-%COMP%_fadeout{0%{bottom:30px;opacity:1}to{bottom:0;opacity:0}}  table.dataTable td.dataTables_empty{display:none}"]})}return s})(),pathMatch:"full",data:{breadcrumb:"Users"}}];let R=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#r=this.\u0275mod=e.oAB({type:s});static#t=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(j),m.Bz]})}return s})(),V=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#r=this.\u0275mod=e.oAB({type:s});static#t=this.\u0275inj=e.cJS({imports:[c.ez,g.eY,p.T,R,n.u5,n.UX,y]})}return s})()}}]);