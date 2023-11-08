"use strict";(self.webpackChunkangular_app=self.webpackChunkangular_app||[]).push([[511],{3511:(H,f,d)=>{d.r(f),d.d(f,{UsersModule:()=>x});var c=d(6814),g=d(593),h=d(627),p=d(2051),C=d(8645),o=d(95),e=d(4769),_=d(7775),Z=d(8672),F=d(2425),b=d(6116);const T=["addUserModal"],v=["userInfoModal"],y=["editUserModal"],q=["deleteUserModal"];function M(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td",31)(12,"ui-switch",55),e.NdJ("change",function(){const i=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.changeUserStatus(i))})("ngModelChange",function(r){const l=e.CHM(t).$implicit;return e.KtG(l.is_active=r)}),e.qZA()(),e.TgZ(13,"td",31)(14,"div",56)(15,"button",57),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.showUserModal(i))}),e._UZ(16,"i",58),e.TgZ(17,"span",59),e._uU(18,"Edit Information"),e.qZA()(),e.TgZ(19,"button",60),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.showDeleteUserModal(i))}),e._UZ(20,"i",61),e.TgZ(21,"span",62),e._uU(22,"Delete Account"),e.qZA()()()()()}if(2&s){const t=a.$implicit;e.xp6(2),e.Oqu(t.ROWID),e.xp6(2),e.AsE("",t.first_name," ",t.last_name,""),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.phone_number),e.xp6(2),e.Oqu(1==t.role?"Admin":"User"),e.xp6(2),e.Q6J("ngModel",t.is_active)}}function A(s,a){1&s&&(e.TgZ(0,"tbody",31)(1,"tr")(2,"td",63),e._uU(3,"No data!"),e.qZA()()())}function w(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," First Name is required "),e.qZA())}function I(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Minimum two characters required "),e.qZA())}function N(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Last Name is required "),e.qZA())}function O(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Minimum two characters required "),e.qZA())}function P(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Email is required "),e.qZA())}function k(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Minimum three characters required "),e.qZA())}function J(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Valid e-mail required "),e.qZA())}function L(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Password is required "),e.qZA())}function Q(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Minimum two characters required "),e.qZA())}function D(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Role Type is required "),e.qZA())}function S(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Phone Number is required "),e.qZA())}function Y(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Minimum two characters required "),e.qZA())}function E(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Address is required "),e.qZA())}function B(s,a){1&s&&(e.TgZ(0,"span",64),e._uU(1," Minimum two characters required "),e.qZA())}const U=function(){return{backdrop:"static",keyboard:!1,animated:!0}},u=function(s,a){return{"is-invalid":s,"is-valid":a}},G=[{path:"",component:(()=>{class s{constructor(t,n,r,i,l,m){this.globalService=t,this.spinner=n,this.usersService=r,this.formBuilder=i,this.toastr=l,this.router=m,this.userList=[],this.dtOptions={},this.dtTrigger=new C.x,this.profileImage=null,this.submitted=!1,this.customStart=0,this.currentUser={},this.editcurrentUser={},this.userForm=new o.cw({ROWID:new o.NI(""),first_name:new o.NI(""),last_name:new o.NI(""),email:new o.NI(""),password:new o.NI(""),role:new o.NI(""),company_name:new o.NI(""),image:new o.NI(""),address:new o.NI(""),phone_number:new o.NI("")}),this.addUserModal=p.oB,this.userInfoModal=p.oB,this.editUserModal=p.oB,this.deleteUserModal=p.oB}ngOnInit(){this.dtOptions={responsive:!0,paging:!0,scrollX:!0,scrollY:"300px",scrollCollapse:!1,pageLength:10,columnDefs:[{orderable:!1,searchable:!1,targets:[0]}],serverSide:!0,processing:!0,retrieve:!0,columns:[{data:"row-id"},{data:"username"},{data:"phone_number"},{data:"email"},{data:"role"},{data:"is_active"},{data:"Action"}],ajax:(t,n)=>{this.getUsersList(t,n)}},this.createForm(),this.userForm.image||(this.profileImage="/assets/img/def-user-db.png")}reInitDataTable(){try{this.datatableElement.dtInstance.then(t=>{t.ajax.reload()})}catch{}}ngAfterViewInit(){this.dtTrigger.next("")}createForm(){this.userForm=this.formBuilder.group({ROWID:"",image:[""],first_name:["",[o.kI.required,o.kI.minLength(2)]],last_name:["",[o.kI.required,o.kI.minLength(2)]],email:["",[o.kI.required,o.kI.minLength(3),o.kI.email]],password:["",[o.kI.required,o.kI.minLength(2)]],phone_number:["",[o.kI.required,o.kI.minLength(10),o.kI.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],role:["1",[o.kI.required,o.kI.minLength(1)]],address:["",[o.kI.required,o.kI.minLength(8)]]})}get myForm(){return this.userForm.controls}get registerFormControl(){return this.userForm.controls}getUsersList(t,n){let r=JSON.parse(JSON.stringify(t));this.usersService.getUsersList({limit:r.length,offset:r.start,searchParam:""}).subscribe({next:l=>{if(200==l.status){const m=l.data;console.log("userList---DATA to show",this.userList),this.customStart=t.start+1,this.userList=m,n({recordsTotal:l.totalRecord,recordsFiltered:l.totalRecord,data:[]})}},error:l=>{this.spinner.hide(),this.toastr.error(l.message,"Error!")}})}showUserModal(t){this.createForm(),t?(t.password="",this.userForm.value=this.userForm.reset(t)):console.log("View User details",this.currentUser),this.addUserModal.show()}userImage(t){if(this.selectedFiles=t.target.files,this.selectedFiles){const n=this.selectedFiles.item(0);if(n){this.currentFile=n;const r=new FileReader;r.onload=i=>{this.profileImage=i.target.result},r.readAsDataURL(this.currentFile)}}this.userForm.value.image&&(this.userForm.value.previous_image=this.userForm.value.image),this.userForm.value.image=t.target.files[0]}changeUserStatus(t){this.usersService.saveUserInfo({ROWID:t.ROWID,is_active:!t.is_active}).subscribe({next:r=>{if(200===r.status){r=r.data,this.globalService.sendActionChildToParent("stop"),this.toastr.success("User status has been changed successfully.","Success!");let i=this.userList.findIndex(l=>l._id===r._id);i&&(this.userList[i].status=r.status,this.reInitDataTable())}},error:r=>{this.globalService.sendActionChildToParent("stop"),this.toastr.error(r.message,"Error!")}})}addUser(){let t=Object.assign({},this.userForm.value);if(console.log("this.userForm.value",this.userForm.value.image),!this.userForm.value.image)return this.toastr.warning("Please select profile photo...","Success!"),!1;this.spinner.show();var n=new FormData;Object.keys(t).map(r=>{console.log("key================",t[r]),t[r]&&n.append(r,t[r])}),this.usersService.saveUserInfoWithphoto(n).subscribe({next:r=>{this.spinner.hide(),200===r.status?(this.closeModel(),this.reInitDataTable(),this.toastr.success(r.message,"Success!"),r=r.data):this.toastr.success("there are some error while adding users "+r.data,"Success!")},error:r=>{this.spinner.hide(),this.toastr.error(r.message,"Error!")}})}showUserInfoModal(t){this.currentUser=t,console.log("View User details",this.currentUser),this.userInfoModal.show()}showDeleteUserModal(t){this.currentUser=t,this.deleteUserModal.show()}deleteUser(){this.spinner.show(),this.usersService.deleteUser(this.currentUser).subscribe({next:t=>{if(this.spinner.hide(),this.deleteUserModal.hide(),200===t.status){this.reInitDataTable();const n=this.userList.filter(r=>r.id===this.currentUser.id);if(n.length){const r=this.userList.indexOf(n[0]);this.userList.splice(r,1)}this.toastr.success("Record Deleted successfully. ","Success")}else this.toastr.error("There are some error. Please check connection."+t.data,"Error");this.currentUser={}},error:t=>{this.spinner.hide(),this.deleteUserModal.hide(),this.toastr.error("There are some server error. Please check connection.","Error")}})}closeModel(){this.addUserModal.hide(),this.deleteUserModal.hide()}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(_.Uh),e.Y36(Z.t2),e.Y36(_.fz),e.Y36(o.qu),e.Y36(F._W),e.Y36(g.F0))};static#r=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-users"]],viewQuery:function(n,r){if(1&n&&(e.Gf(h.G,5),e.Gf(T,5),e.Gf(v,5),e.Gf(y,5),e.Gf(q,5)),2&n){let i;e.iGM(i=e.CRH())&&(r.datatableElement=i.first),e.iGM(i=e.CRH())&&(r.addUserModal=i.first),e.iGM(i=e.CRH())&&(r.userInfoModal=i.first),e.iGM(i=e.CRH())&&(r.editUserModal=i.first),e.iGM(i=e.CRH())&&(r.deleteUserModal=i.first)}},decls:147,vars:56,consts:[[1,"px-4"],[1,"card","container-fluid","p-3","table-responsive",2,"min-height","450px"],[1,"row"],[1,"col-sm-12"],[1,"text-primary","pb-2","users-tag"],[1,"bi","bi-list-task","px-2"],["type","button",1,"btn","btn-sm","px-3","btn-primary","float-end",3,"click"],[1,"bi","bi-plus-square","pe-2"],["datatable","",1,"table","table-bordered","table-hover","table-striped","user-table-font",3,"dtOptions","dtTrigger"],[1,"text-nowrap"],[1,"text-center","w-25"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade",3,"config"],["addUserModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],[1,"bi","bi-database-add","pe-2"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"bi","bi-x-circle"],[1,"modal-body","pb-0"],[3,"formGroup","ngSubmit"],[1,"col-md-6","col-sm-12","text-center"],[1,"form-label"],[1,"pic-holder"],["id","profilePic","alt","Profile Display Picture",1,"pic","rounded-circle",3,"src"],["hidden","","type","file",1,"form-control",3,"change"],["profileUpload",""],["for","newProfilePhoto",1,"upload-file-block","rounded-circle",3,"click"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-upload","fa-2x"],[1,"text-uppercase"],[1,"col-md-12","col-sm-12"],[1,"row","mb-1"],[1,"col"],["formControlName","first_name","type","text","placeholder","Please Enter User First Name Here",1,"form-control",3,"ngClass"],["class","text-danger","style","font-size: 11px; font-weight:bold;",4,"ngIf"],["formControlName","last_name","type","text","placeholder","Please Enter User Last Name Here",1,"form-control",3,"ngClass"],["formControlName","email","type","text","placeholder","Please Enter User Email Here",1,"form-control",3,"ngClass"],["formControlName","password","type","password","placeholder","Please Enter User Password Here",1,"form-control",3,"ngClass"],["formControlName","role","aria-label","Default select example",1,"form-select",3,"ngClass"],["value","","selected",""],["value","1"],["value","2"],["formControlName","phone_number","type","text","placeholder","Please Enter User Name Here",1,"form-control",3,"ngClass"],["rows","3","formControlName","address","type","text","placeholder","Please Enter Your address",1,"form-control",3,"ngClass"],[1,"modal-footer","border-top-0","d-flex","justify-content-start"],["type","button",1,"btn","btn-default","me-1",3,"click"],[1,"bi","bi-x-square","pe-2"],["type","submit",1,"btn","btn-primary","text-white",3,"disabled","click"],["deleteUserModal","bs-modal"],["type","button",1,"btn","btn-danger","text-white",3,"click"],["color","#4285F4","defaultBgColor","#d9d9d9","labelOn","ON","labelOff","OFF",3,"ngModel","change","ngModelChange"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","me-1","btn-primary","hover-text",3,"click"],[1,"bi","bi-pencil-square"],["id","bottom",1,"tooltip-text"],["type","button",1,"btn","btn-danger","hover-text",3,"click"],[1,"bi","bi-trash","p-0"],["id","left",1,"tooltip-text"],["colspan","10",1,"no-data-available"],[1,"text-danger",2,"font-size","11px","font-weight","bold"]],template:function(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._UZ(5,"i",5),e._uU(6,"List of Users "),e.TgZ(7,"button",6),e.NdJ("click",function(){return r.showUserModal()}),e._UZ(8,"i",7),e._uU(9," Add User "),e.qZA()()()(),e.TgZ(10,"table",8)(11,"thead")(12,"tr",9)(13,"th"),e._uU(14,"Table Row ID"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"User Name"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Email ID"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Phone"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Role"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Status"),e.qZA(),e.TgZ(25,"th",10),e._uU(26,"ACTION"),e.qZA()()(),e.TgZ(27,"tbody"),e.YNc(28,M,23,7,"tr",11),e.qZA(),e.YNc(29,A,4,0,"tbody",12),e.qZA()()(),e.TgZ(30,"div",13,14)(32,"div",15)(33,"div",16)(34,"div",17)(35,"h5",18),e._UZ(36,"i",19),e._uU(37),e.qZA(),e.TgZ(38,"button",20),e.NdJ("click",function(){return r.closeModel()}),e._UZ(39,"i",21),e.qZA()(),e.TgZ(40,"div",22)(41,"form",23),e.NdJ("ngSubmit",function(){return r.addUser()}),e.TgZ(42,"div",2)(43,"div",24)(44,"label",25)(45,"h5"),e._uU(46,"User Profile Image"),e.qZA()(),e.TgZ(47,"div",26),e._UZ(48,"img",27),e.TgZ(49,"input",28,29),e.NdJ("change",function(m){return r.userImage(m)}),e.qZA(),e.TgZ(51,"label",30),e.NdJ("click",function(){e.CHM(i);const m=e.MAs(50);return e.KtG(m.click())}),e.TgZ(52,"div",31)(53,"div",32),e._UZ(54,"i",33),e.qZA(),e.TgZ(55,"div",34),e._uU(56," Update "),e._UZ(57,"br"),e._uU(58," Profile Photo "),e.qZA()()()()(),e.TgZ(59,"div",35)(60,"div",36)(61,"div",2)(62,"div",37)(63,"label",25),e._uU(64,"First Name:"),e.qZA(),e._UZ(65,"input",38),e.YNc(66,w,2,0,"span",39),e.YNc(67,I,2,0,"span",39),e.qZA(),e.TgZ(68,"div",37)(69,"label",25),e._uU(70,"Last Name:"),e.qZA(),e._UZ(71,"input",40),e.YNc(72,N,2,0,"span",39),e.YNc(73,O,2,0,"span",39),e.qZA()()(),e.TgZ(74,"div",36)(75,"div",2)(76,"div",37)(77,"label",25),e._uU(78,"Email:"),e.qZA(),e._UZ(79,"input",41),e.YNc(80,P,2,0,"span",39),e.YNc(81,k,2,0,"span",39),e.YNc(82,J,2,0,"span",39),e.qZA(),e.TgZ(83,"div",37)(84,"label",25),e._uU(85,"Password:"),e.qZA(),e._UZ(86,"input",42),e.YNc(87,L,2,0,"span",39),e.YNc(88,Q,2,0,"span",39),e.qZA()()(),e.TgZ(89,"div",36)(90,"div",2)(91,"div",37)(92,"label",25),e._uU(93,"Role:"),e.qZA(),e.TgZ(94,"select",43)(95,"option",44),e._uU(96,"Select Role"),e.qZA(),e.TgZ(97,"option",45),e._uU(98,"Admin"),e.qZA(),e.TgZ(99,"option",46),e._uU(100,"User"),e.qZA()(),e.YNc(101,D,2,0,"span",39),e.qZA(),e.TgZ(102,"div",37)(103,"label",25),e._uU(104,"Phone:"),e.qZA(),e._UZ(105,"input",47),e.YNc(106,S,2,0,"span",39),e.YNc(107,Y,2,0,"span",39),e.qZA()()(),e.TgZ(108,"div",36)(109,"div",2)(110,"div",37)(111,"label",25),e._uU(112,"Address:"),e.qZA(),e.TgZ(113,"textarea",48),e._uU(114," "),e.qZA(),e.YNc(115,E,2,0,"span",39),e.YNc(116,B,2,0,"span",39),e.qZA()()()()()()(),e.TgZ(117,"div",49)(118,"button",50),e.NdJ("click",function(){return r.closeModel()}),e._UZ(119,"i",51),e._uU(120,"Close"),e.qZA(),e.TgZ(121,"button",52),e.NdJ("click",function(){return r.addUser()}),e._UZ(122,"i",7),e._uU(123),e.qZA()()()()(),e.TgZ(124,"div",13,53)(126,"div",15)(127,"div",16)(128,"div",17)(129,"h5",18),e._UZ(130,"i",19),e._uU(131,"Delete User"),e.qZA(),e.TgZ(132,"button",20),e.NdJ("click",function(){return r.closeModel()}),e._UZ(133,"i",21),e.qZA()(),e.TgZ(134,"div",22)(135,"h6"),e._uU(136,"Are you sure want to delete this Account?"),e.qZA(),e.TgZ(137,"p")(138,"b"),e._uU(139,"Account Name :"),e.qZA(),e._uU(140),e._UZ(141,"br"),e.qZA()(),e.TgZ(142,"div",49)(143,"button",50),e.NdJ("click",function(){return r.closeModel()}),e._uU(144,"Close"),e.qZA(),e.TgZ(145,"button",54),e.NdJ("click",function(){return r.deleteUser()}),e._uU(146,"Delete"),e.qZA()()()()()}2&n&&(e.xp6(10),e.Q6J("dtOptions",r.dtOptions)("dtTrigger",r.dtTrigger),e.xp6(18),e.Q6J("ngForOf",r.userList),e.xp6(1),e.Q6J("ngIf",0==(null==r.userList?null:r.userList.length)),e.xp6(1),e.Q6J("config",e.DdM(33,U)),e.xp6(7),e.hij("",null!=r.userForm&&null!=r.userForm.value&&r.userForm.value.ROWID?"Edit":"Add"," User"),e.xp6(4),e.Q6J("formGroup",r.userForm),e.xp6(7),e.Q6J("src",r.profileImage,e.LSH),e.xp6(17),e.Q6J("ngClass",e.WLB(34,u,r.submitted&&r.myForm.first_name.errors||r.myForm.first_name.errors&&(r.userForm.controls.first_name.dirty||r.userForm.controls.first_name.touched),!r.userForm.get("first_name").errors&&(r.userForm.get("first_name").dirty||r.userForm.get("first_name").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.first_name.touched||r.submitted)&&(null==r.registerFormControl.first_name.errors?null:r.registerFormControl.first_name.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.first_name.errors?null:r.registerFormControl.first_name.errors.minlength),e.xp6(4),e.Q6J("ngClass",e.WLB(37,u,r.submitted&&r.myForm.last_name.errors||r.myForm.last_name.errors&&(r.userForm.controls.last_name.dirty||r.userForm.controls.last_name.touched),!r.userForm.get("last_name").errors&&(r.userForm.get("last_name").dirty||r.userForm.get("last_name").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.last_name.touched||r.submitted)&&(null==r.registerFormControl.last_name.errors?null:r.registerFormControl.last_name.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.last_name.errors?null:r.registerFormControl.last_name.errors.minlength),e.xp6(6),e.Q6J("ngClass",e.WLB(40,u,r.submitted&&r.myForm.email.errors||r.myForm.email.errors&&(r.userForm.controls.email.dirty||r.userForm.controls.email.touched),!r.userForm.get("email").errors&&(r.userForm.get("email").dirty||r.userForm.get("email").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.email.touched||r.submitted)&&(null==r.registerFormControl.email.errors?null:r.registerFormControl.email.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.email.errors?null:r.registerFormControl.email.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.email.errors?null:r.registerFormControl.email.errors.email),e.xp6(4),e.Q6J("ngClass",e.WLB(43,u,r.submitted&&r.myForm.password.errors||r.myForm.password.errors&&(r.userForm.controls.password.dirty||r.userForm.controls.password.touched),!r.userForm.get("password").errors&&(r.userForm.get("password").dirty||r.userForm.get("password").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.password.touched||r.submitted)&&(null==r.registerFormControl.password.errors?null:r.registerFormControl.password.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.password.errors?null:r.registerFormControl.password.errors.minlength),e.xp6(6),e.Q6J("ngClass",e.WLB(46,u,r.submitted&&r.myForm.role.errors||r.myForm.role.errors&&(r.userForm.controls.role.dirty||r.userForm.controls.role.touched),!r.userForm.get("role").errors&&(r.userForm.get("role").dirty||r.userForm.get("role").touched))),e.xp6(7),e.Q6J("ngIf",(r.registerFormControl.role.touched||r.submitted)&&(null==r.registerFormControl.role.errors?null:r.registerFormControl.role.errors.required)),e.xp6(4),e.Q6J("ngClass",e.WLB(49,u,r.submitted&&r.myForm.phone_number.errors||r.myForm.phone_number.errors&&(r.userForm.controls.phone_number.dirty||r.userForm.controls.phone_number.touched),!r.userForm.get("phone_number").errors&&(r.userForm.get("phone_number").dirty||r.userForm.get("phone_number").touched))),e.xp6(1),e.Q6J("ngIf",(r.registerFormControl.phone_number.touched||r.submitted)&&(null==r.registerFormControl.phone_number.errors?null:r.registerFormControl.phone_number.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.phone_number.errors?null:r.registerFormControl.phone_number.errors.minlength),e.xp6(6),e.Q6J("ngClass",e.WLB(52,u,r.submitted&&r.myForm.address.errors||r.myForm.address.errors&&(r.userForm.controls.address.dirty||r.userForm.controls.address.touched),!r.userForm.get("address").errors&&(r.userForm.get("address").dirty||r.userForm.get("address").touched))),e.xp6(2),e.Q6J("ngIf",(r.registerFormControl.address.touched||r.submitted)&&(null==r.registerFormControl.address.errors?null:r.registerFormControl.address.errors.required)),e.xp6(1),e.Q6J("ngIf",null==r.registerFormControl.address.errors?null:r.registerFormControl.address.errors.minlength),e.xp6(5),e.Q6J("disabled",r.userForm.invalid),e.xp6(2),e.hij(" ",null!=r.userForm&&null!=r.userForm.value&&r.userForm.value.ROWID?"Update":"Save",""),e.xp6(1),e.Q6J("config",e.DdM(55,U)),e.xp6(16),e.hij(" ",r.currentUser.first_name+" "+r.currentUser.last_name," "))},dependencies:[c.mk,c.sg,c.O5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.On,o.sg,o.u,h.G,p.oB,b.o],styles:["td[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100px}.user-table-font[_ngcontent-%COMP%]{font-size:14px}.users-tag[_ngcontent-%COMP%]{border:1px solid;padding:5px;box-shadow:5px 0 inset #5e72e3;border-top-style:hidden;border-right-style:hidden}.profile-image[_ngcontent-%COMP%]{height:150px}.pic-holder[_ngcontent-%COMP%]{text-align:center;position:relative;width:150px;height:150px;overflow:hidden;display:flex;justify-content:center;align-items:center;margin-bottom:20px}.pic-holder[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;object-position:center}.pic-holder[_ngcontent-%COMP%]   .upload-file-block[_ngcontent-%COMP%], .pic-holder[_ngcontent-%COMP%]   .upload-loader[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#5a5c69b3;color:#f8f9fc;font-size:12px;font-weight:600;opacity:0;display:flex;align-items:center;justify-content:center;transition:all .2s}.pic-holder[_ngcontent-%COMP%]   .upload-file-block[_ngcontent-%COMP%]{cursor:pointer}.pic-holder[_ngcontent-%COMP%]:hover   .upload-file-block[_ngcontent-%COMP%], .uploadProfileInput[_ngcontent-%COMP%]:focus ~ .upload-file-block[_ngcontent-%COMP%]{opacity:1}.pic-holder.uploadInProgress[_ngcontent-%COMP%]   .upload-file-block[_ngcontent-%COMP%]{display:none}.pic-holder.uploadInProgress[_ngcontent-%COMP%]   .upload-loader[_ngcontent-%COMP%]{opacity:1}.snackbar[_ngcontent-%COMP%]{visibility:hidden;min-width:250px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:14px;transform:translate(-50%)}.snackbar.show[_ngcontent-%COMP%]{visibility:visible;animation:_ngcontent-%COMP%_fadein .5s,fadeout .5s 2.5s}@keyframes _ngcontent-%COMP%_fadein{0%{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes _ngcontent-%COMP%_fadeout{0%{bottom:30px;opacity:1}to{bottom:0;opacity:0}}  table.dataTable td.dataTables_empty{display:none}"]})}return s})(),pathMatch:"full",data:{breadcrumb:"Users"}}];let j=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#r=this.\u0275mod=e.oAB({type:s});static#t=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(G),g.Bz]})}return s})(),x=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#r=this.\u0275mod=e.oAB({type:s});static#t=this.\u0275inj=e.cJS({imports:[c.ez,_.eY,h.T,j,o.u5,o.UX,b.S]})}return s})()}}]);