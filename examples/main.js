
function exportTo(type) {

	$('.table').tableExport({
		filename: 'table_%DD%-%MM%-%YY%',
		format: type,
		cols: '2,3,4'
	});

}