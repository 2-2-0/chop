/*
 * chop.js, r1.0
 * by 220, GPLv3
 * 
 * 2-2-0.online
 * github.com/2-2-0
 * 
 * Copyright 2016 220 <u220@Espartaco>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */

// DIV related
function scrollToDiv (div_id) {
	document.getElementById (div_id).scrollIntoView ();
}

// Position
function changeTop (div_id, param) {
	document.getElementById (div_id).style.top=param;
}
function changeBottom (div_id, param) {
	document.getElementById (div_id).style.bottom=param;
}
function changeLeft (div_id, param) {
	document.getElementById (div_id).style.left=param;
}
function changeRight (div_id, param) {
	document.getElementById (div_id).style.right=param;
}

// Shape
function changeWidth (div_id, param) {
	document.getElementById (div_id).style.width=param;
}
function changeHeight (div_id, param) {
	document.getElementById (div_id).style.height=param;
}
function changeMinHeight (div_id, param) {
	document.getElementById (div_id).style.minHeight=param;
}

// Auxiliary methods
function swapTop (div_id, pos_a, pos_b) {
	pos = document.getElementById (div_id).style.top;
	if (pos==pos_a) {
		document.getElementById (div_id).style.top = pos_b;
	} else {
		document.getElementById (div_id).style.top = pos_a;
	}
}
function swapLeft (div_id, pos_a, pos_b) {
	pos = document.getElementById (div_id).style.left;
	if (pos==pos_a) {
		document.getElementById (div_id).style.left = pos_b;
		return 0;
	} else {
		document.getElementById (div_id).style.left = pos_a;
		return 1;
	}
}

function toggleDisplay (div_id) {
	var div = document.getElementById (div_id);
	
	if (div!=null) {
		var display = document.getElementById (div_id).style.display;
		
		if (display=="" || display=="none") display = "block";
		else display = "none";
		
		document.getElementById (div_id).style.display = display;
		
		if (display=="none") return 0;
		else return 1;
	}
	
	return -1;
}
// Don't let them get you!
