this["JST"] = this["JST"] || {};

this["JST"]["partial/link-checker.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="backdrop-modal">\n\t<div class="custom-modal">\n\t\t<div class="modal-title">\n\t\t\tLink Test\n\t\t</div>\n\t\t<div class="progress-bar-handle">\n\t\t\t<div class="progress-bar"></div>\n\t\t</div>\n\t\t<div class="modal-report">\n\t\t\t<div class="modal-report-title">BROKEN LINKS</div>\n\t\t\t<div class="modal-report-table">\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["partial/menu.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n\t<div ng-class="menu.show ? \'menu-selected\' : \'\'">\n\t\t<div ng-click="menuSelected($index)" title="' +
((__t = (menu.href)) == null ? '' : __t) +
'">\n\t\t\t&nbsp;&nbsp;&nbsp;' +
((__t = (menu.name)) == null ? '' : __t) +
'&nbsp;&nbsp;&nbsp;\n\t\t</div>\n\t\t<div class="edit-button" ng-click="menu.showEdit=!menu.showEdit"></div>\n\t</div>\n\t<div ng-if="menu.showEdit" class="mega-menu-edit">\n\t\t<div class="padding-10">\n\t\t\tTitle : <input type="text" ng-model="menu.name">\n\t\t</div>\n\t\t<div class="padding-10">\n\t\t\tHref  : <input ng-model="menu.href">\n\t\t</div>\n\t\t<div>\n\t\t\t<div class="button delete-button" ng-click="deleteMenu($index)">\n\t\t\t\t&nbsp;Delete&nbsp;\n\t\t\t</div>\n\t\t\t<a href="' +
((__t = (menu.href)) == null ? '' : __t) +
'" target="_blank">\n\t\t\t\t<div class="button delete-button">\n\t\t\t\t\t&nbsp;Visit Link&nbsp;\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div ng-show="menu.show" class="submenu">\n\t\t<div class="button" ng-click="addSubMenu(menu.data)"> +Add Category </div>\n\t\t<div ng-repeat="submenu in menu.data" submenu></div>\n\t\t<div class="container image-container">\n\t\t<div class="big-image">\n\t\t\t<div>\n\t\t\t\tImage URL : <input type="text" ng-model="menu.images[0].url" name="">\n\t\t\t\tHref : <input type="text" ng-model="menu.images[0].href" name="">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="big-image">\n\t\t\t<div>\n\t\t\t\tImage URL : <input type="text" ng-model="menu.images[1].url" name="">\n\t\t\t\tHref : <input type="text" ng-model="menu.images[1].href" name="">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\tImage URL : <input type="text" ng-model="menu.images[2].url" name="">\n\t\t\t\tHref : <input type="text" ng-model="menu.images[2].href" name="">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["partial/strip.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="button download-button" ng-click="downloadJSON()">\n\t\t&nbsp;&nbsp;&nbsp;DOWNLOAD&nbsp;&nbsp;&nbsp;\n</div>\n<div class="button" ng-if="fileName">\n\t' +
((__t = (fileName)) == null ? '' : __t) +
'\n</div>\n<a id="download-button" ng-show="false"></a>\n<div ng-if="false" class="button download-button broker-link-button" ng-click="showLinkChecker=true;checkBrokenLinks()">\n\t\t&nbsp;&nbsp;&nbsp;TEST BROKEN LINKS&nbsp;&nbsp;&nbsp;\n</div>\n<div>\n\t<ul>\n\t\t<li ng-repeat="menu in data" menu></li>\n\t\t<div ng-click="addMainMenu()" class="add-main-menu button">+</div>\n\t</ul>\n</div>\n\n<link-checker ng-if="showLinkChecker"></link-checker>\n';

}
return __p
};

this["JST"]["partial/submenu-itemlist.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n\t\n\t<div ng-click="subsubmenu.showEdit=!subsubmenu.showEdit" title="' +
((__t = (subsubmenu.href)) == null ? '' : __t) +
'">\n\t\t' +
((__t = (subsubmenu.name)) == null ? '' : __t) +
'\n\t\t<span ng-if="subsubmenu.isNew" class="new-item">New</span>\n\t</div>\n\t<div ng-if="subsubmenu.showEdit" class="mega-menu-edit">\n\t\t<div class="padding-10">\n\t\t\tTitle : <input type="text" ng-model="subsubmenu.name">\n\t\t</div>\n\t\t<div class="padding-10">\n\t\t\tHref  : <input ng-model="subsubmenu.href">\n\t\t</div>\n\t\t<div class="padding-10">\n\t\t\tisNew  : <input type="checkbox" ng-model="subsubmenu.isNew">\n\t\t</div>\n\t\t<div>\n\t\t\t<div class="button delete-button" ng-click="deleteSubSubMenu($parent.$parent.$index, $index)">\n\t\t\t\t&nbsp;Delete&nbsp;\n\t\t\t</div>\n\t\t\t<a href="' +
((__t = (subsubmenu.href)) == null ? '' : __t) +
'" target="_blank">\n\t\t\t\t<div class="button delete-button">\n\t\t\t\t\t&nbsp;Visit Link&nbsp;\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["partial/submenu.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="subsubmenu container">\n\t<div class="container">\n\t\t<div ng-click="submenu.showEdit=!submenu.showEdit" title="' +
((__t = (submenu.href)) == null ? '' : __t) +
'">\n\t\t\t' +
((__t = (submenu.name)) == null ? '' : __t) +
'\n\t\t</div>\n\t\t<div ng-if="submenu.showEdit" class="mega-menu-edit">\n\t\t\t<div class="padding-10">\n\t\t\t\tTitle : <input type="text" ng-model="submenu.name">\n\t\t\t</div>\n\t\t\t<div class="padding-10">\n\t\t\t\tHref  : <input ng-model="submenu.href">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class="button delete-button" ng-click="deleteSubMenu($index)">\n\t\t\t\t\t&nbsp;Delete&nbsp;\n\t\t\t\t</div>\n\t\t\t\t<a href="' +
((__t = (submenu.href)) == null ? '' : __t) +
'" target="_blank">\n\t\t\t\t\t<div class="button delete-button">\n\t\t\t\t\t\t&nbsp;Visit Link&nbsp;\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<ul>\n\t<li ng-repeat="subsubmenu in submenu.data" submenu-itemlist></li>\n\t<div class="button" ng-click="addSubSubMenu(submenu.data)"> +Add Item </div>\n\t</ul>\n\t\n</div>';

}
return __p
};