  'use strict'; 
window.AJST || (window.AJST = {}); 


  window.AJST['partial/link-checker.html'] = "<div class=\"backdrop-modal\">\n" +
    "	<div class=\"custom-modal\">\n" +
    "		<div class=\"modal-title\">\n" +
    "			Link Test\n" +
    "		</div>\n" +
    "		<div class=\"progress-bar-handle\">\n" +
    "			<div class=\"progress-bar\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"modal-report\">\n" +
    "			<div class=\"modal-report-title\">BROKEN LINKS</div>\n" +
    "			<div class=\"modal-report-table\">\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>"


  window.AJST['partial/menu.html'] = "<div class=\"container\">\n" +
    "	<div ng-class=\"menu.show ? 'menu-selected' : ''\">\n" +
    "		<div ng-click=\"menuSelected($index)\" title=\"{{menu.href}}\">\n" +
    "			&nbsp;&nbsp;&nbsp;{{menu.name}}&nbsp;&nbsp;&nbsp;\n" +
    "		</div>\n" +
    "		<div class=\"edit-button\" ng-click=\"menu.showEdit=!menu.showEdit\"></div>\n" +
    "	</div>\n" +
    "	<div ng-if=\"menu.showEdit\" class=\"mega-menu-edit\">\n" +
    "		<div class=\"padding-10\">\n" +
    "			Title : <input type=\"text\" ng-model=\"menu.name\">\n" +
    "		</div>\n" +
    "		<div class=\"padding-10\">\n" +
    "			Href  : <input ng-model=\"menu.href\">\n" +
    "		</div>\n" +
    "		<div>\n" +
    "			<div class=\"button delete-button\" ng-click=\"deleteMenu($index)\">\n" +
    "				&nbsp;Delete&nbsp;\n" +
    "			</div>\n" +
    "			<a href=\"{{menu.href}}\" target=\"_blank\">\n" +
    "				<div class=\"button delete-button\">\n" +
    "					&nbsp;Visit Link&nbsp;\n" +
    "				</div>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ng-show=\"menu.show\" class=\"submenu\">\n" +
    "		<div class=\"button\" ng-click=\"addSubMenu(menu.data)\"> +Add Category </div>\n" +
    "		<div ng-repeat=\"submenu in menu.data\" submenu></div>\n" +
    "		<div class=\"container image-container\">\n" +
    "		<div class=\"big-image\">\n" +
    "			<div>\n" +
    "				Image URL : <input type=\"text\" ng-model=\"menu.images[0].url\" name=\"\">\n" +
    "				Href : <input type=\"text\" ng-model=\"menu.images[0].href\" name=\"\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"big-image\">\n" +
    "			<div>\n" +
    "				Image URL : <input type=\"text\" ng-model=\"menu.images[1].url\" name=\"\">\n" +
    "				Href : <input type=\"text\" ng-model=\"menu.images[1].href\" name=\"\">\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				Image URL : <input type=\"text\" ng-model=\"menu.images[2].url\" name=\"\">\n" +
    "				Href : <input type=\"text\" ng-model=\"menu.images[2].href\" name=\"\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	</div>\n" +
    "</div>"


  window.AJST['partial/strip.html'] = "\n" +
    "<div class=\"button download-button\" ng-click=\"downloadJSON()\">\n" +
    "		&nbsp;&nbsp;&nbsp;DOWNLOAD&nbsp;&nbsp;&nbsp;\n" +
    "</div>\n" +
    "<div class=\"button\" ng-if=\"fileName\">\n" +
    "	{{fileName}}\n" +
    "</div>\n" +
    "<a id=\"download-button\" ng-show=\"false\"></a>\n" +
    "<div ng-if=\"false\" class=\"button download-button broker-link-button\" ng-click=\"showLinkChecker=true;checkBrokenLinks()\">\n" +
    "		&nbsp;&nbsp;&nbsp;TEST BROKEN LINKS&nbsp;&nbsp;&nbsp;\n" +
    "</div>\n" +
    "<div>\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"menu in data\" menu></li>\n" +
    "		<div ng-click=\"addMainMenu()\" class=\"add-main-menu button\">+</div>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "\n" +
    "<link-checker ng-if=\"showLinkChecker\"></link-checker>\n"


  window.AJST['partial/submenu-itemlist.html'] = "<div class=\"container\">\n" +
    "	\n" +
    "	<div ng-click=\"subsubmenu.showEdit=!subsubmenu.showEdit\" title=\"{{subsubmenu.href}}\">\n" +
    "		{{subsubmenu.name}}\n" +
    "		<span ng-if=\"subsubmenu.isNew\" class=\"new-item\">New</span>\n" +
    "	</div>\n" +
    "	<div ng-if=\"subsubmenu.showEdit\" class=\"mega-menu-edit\">\n" +
    "		<div class=\"padding-10\">\n" +
    "			Title : <input type=\"text\" ng-model=\"subsubmenu.name\">\n" +
    "		</div>\n" +
    "		<div class=\"padding-10\">\n" +
    "			Href  : <input ng-model=\"subsubmenu.href\">\n" +
    "		</div>\n" +
    "		<div class=\"padding-10\">\n" +
    "			isNew  : <input type=\"checkbox\" ng-model=\"subsubmenu.isNew\">\n" +
    "		</div>\n" +
    "		<div>\n" +
    "			<div class=\"button delete-button\" ng-click=\"deleteSubSubMenu($parent.$parent.$index, $index)\">\n" +
    "				&nbsp;Delete&nbsp;\n" +
    "			</div>\n" +
    "			<a href=\"{{subsubmenu.href}}\" target=\"_blank\">\n" +
    "				<div class=\"button delete-button\">\n" +
    "					&nbsp;Visit Link&nbsp;\n" +
    "				</div>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>"


  window.AJST['partial/submenu.html'] = "<div class=\"subsubmenu container\">\n" +
    "	<div class=\"container\">\n" +
    "		<div ng-click=\"submenu.showEdit=!submenu.showEdit\" title=\"{{submenu.href}}\">\n" +
    "			{{submenu.name}}\n" +
    "		</div>\n" +
    "		<div ng-if=\"submenu.showEdit\" class=\"mega-menu-edit\">\n" +
    "			<div class=\"padding-10\">\n" +
    "				Title : <input type=\"text\" ng-model=\"submenu.name\">\n" +
    "			</div>\n" +
    "			<div class=\"padding-10\">\n" +
    "				Href  : <input ng-model=\"submenu.href\">\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				<div class=\"button delete-button\" ng-click=\"deleteSubMenu($index)\">\n" +
    "					&nbsp;Delete&nbsp;\n" +
    "				</div>\n" +
    "				<a href=\"{{submenu.href}}\" target=\"_blank\">\n" +
    "					<div class=\"button delete-button\">\n" +
    "						&nbsp;Visit Link&nbsp;\n" +
    "					</div>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<ul>\n" +
    "	<li ng-repeat=\"subsubmenu in submenu.data\" submenu-itemlist></li>\n" +
    "	<div class=\"button\" ng-click=\"addSubSubMenu(submenu.data)\"> +Add Item </div>\n" +
    "	</ul>\n" +
    "	\n" +
    "</div>"
