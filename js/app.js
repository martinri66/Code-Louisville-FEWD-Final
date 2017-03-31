
$.getJSON( "data/prices.json", function(data) {
	data.Labor.forEach(function(prices) {
		var table = buildTable(prices);
		$("#pricecontainer").append(table);
	});
});


//May provide this part.
function buildTable(section) {
   var table = $('<table class="price">');
   table.append('<thead><tr><th colspan="2"><h4 class="price-head red">' + section.name + '</h4></th></tr></thead>');

   for (var i = 0; i < section.items.length; i++) {
       var item = section.items[i];
       var row = $('<tr>');
       row.append('<td class="price-name">' + item.name + '</td>');
       row.append('<td class="price-cost text-right">$' + item.price.toFixed(2) + '</td>');
       table.append(row);
   }
   var wrapper = $('<div>');

   wrapper.append(table);

   return wrapper;
}