$(document).ready((function($){$(".dropbtn").click((function(){$(".dropdown-content").toggle(".show")}))})),$(document).ready((function($){$(".dropdown-content").click((function(){$(this).toggle(".show")}))})),$(document).mouseup((function(n){var o=$(".dropdown-content");o.is(n.target)||0!==o.has(n.target).length||o.hide()}));