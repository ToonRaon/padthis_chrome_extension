//변신 전
var $normalskilldesc = $("#pad-info-monster-detail .skillinfo .normal .description dd");
if ($normalskilldesc.length) {
	var content = $normalskilldesc.text();
	if(content.includes("변신")) {
		var numIndex = content.indexOf("No.") + 3;
		var nameStartIndex = content.indexOf("\'");
		var nameEndIndex = content.indexOf("\'", nameStartIndex + 1);
		
		var num = content.substring(numIndex, nameStartIndex) * 1;
		var name = content.substring(nameStartIndex + 1, nameEndIndex);
		
		$normalskilldesc.text(content.substring(0, nameStartIndex + 1));
		$normalskilldesc.append("<a href='https://www.thisisgame.com/pad/info/monster/detail.php?code=" + num + "' class='yellowgreen'>" + name + "</a>");
		$normalskilldesc.append(content.substring(nameEndIndex, content.length));
	}
}

//변신 후
var $extradesc = $("#pad-info-monster-detail .extradescription dd");
if ($extradesc.length) {
	var content = $extradesc.text();
	if($extradesc.text().includes("변신")) {
		var numIndex = content.indexOf("No.") + 3;
		var nameStartIndex = content.indexOf("\'");
		var nameEndIndex = content.indexOf("\'", nameStartIndex + 1);
		
		var num = content.substring(numIndex, nameStartIndex) * 1;
		var name = content.substring(nameStartIndex + 1, nameEndIndex);
		
		$extradesc.text(content.substring(0, nameStartIndex + 1));
		$extradesc.append("<a href='https://www.thisisgame.com/pad/info/monster/detail.php?code=" + num + "' class='yellowgreen'>" + name + "</a>");
		$extradesc.append(content.substring(nameEndIndex, content.length));
	}
}

//프렌드 박스 등에서 일부 각성들이 OFF일 때 보이지 않는 현상 방지
// var $icons = $(".field-awake-icon img");
// if($icons.length) {
	// for(var i = 0; i < $icons.length; i++) {
		// var $icon = icons[i];
		// var iconSrc = $icon.attr("src");
		// if(iconSrc.contains("dark")) {
			// $icon.attr("src", iconSrc.split("dark")[0] + iconSrc.split("dark")[1]);
			// $icon.addClass("dark-icon");
		// }
	// }
// }

