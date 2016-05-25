/* 
 * jQuery-tableExport - v1.0 - 2016-05-25
 * https://github.com/Archakov06/jQuery-tableExport
 * Released under the MIT License
*/

(function ($) {

    $.fn.tableExport = function (options) {

        var defaults = $.extend({
          filename: 'table',
          format: 'csv',
          cols: '',
          head_delimiter: ';',
          column_delimiter: ';',
          onbefore: function(t){},
          onafter: function(t){}
        }, options);

        var options = $.extend(defaults, options);
        var $this = $(this);
        var cols = options.cols ? options.cols.split(',') : [];
        var result = '';
        var data_type = { 'csv' : 'text/csv', 'txt' : 'text/plain', 'xls' : 'application/vnd.ms-excel', 'json' : 'application/json', };

        if ( typeof options.onbefore != "function" || typeof options.onafter != "function" || !options.format || !options.head_delimiter || !options.column_delimiter || !options.filename ) 
        { console.error( 'One of the parameters is incorrect.' ); return false; }

        function getHeaders(){
            var th = $this.find('thead th');
            var arr = [];

            th.each(function(i,e){

                if (cols.length)
                    cols.forEach(function(c){
                        if (c==i+1)
                        arr.push(e.innerText);
                    });
                else
                    arr.push(e.innerText);

            });

            return arr;
        }

        function getItems(){
            var tr = $this.find('tbody tr');
            var arr = [];

            tr.each(function(i,e){
                var s = [];

                if (cols.length){
                    cols.forEach(function(c){
                        s.push($(e).find('td:nth-child('+c+')').text());
                    });
                    arr.push(s);
                }
                else
                {
                    var td = $(e).find('td');
                    td.each(function(i,t){
                        s.push(t.innerText);
                    });
                    arr.push(s);
                }

            });

            return arr;
        }

        function download(data,filename,format){
            var a = document.createElement("a");
            a.href = URL.createObjectURL(new Blob([data], {type: data_type[format]}));

            var now = new Date();
            var time_arr = [
                'DD:'+now.getDate(),
                'MM:'+now.getDate(),
                'YY:'+now.getFullYear(),
                'hh:'+now.getHours(),
                'mm:'+now.getMinutes(),
                'ss:'+now.getSeconds()
            ];

            for (var i = 0; i < time_arr.length; i++) {
                var key = time_arr[i].split(':')[0];
                var val = time_arr[i].split(':')[1];
                filename = filename.replace( '%'+key+'%', val);
            }

            a.download = filename + '.' + format;
            a.click();
            a.remove();
        }

        options.onafter($this);
        switch (options.format) {

            case "csv":
                var headers = getHeaders();
                var items  = getItems();

                result += headers.join( options.head_delimiter ) + "\n";

                items.forEach(function(item,i){
                    result += item.join( options.column_delimiter ) + "\n";
                });

            break;

            case "txt":
                var headers = getHeaders();
                var items  = getItems();

                result += headers.join( options.head_delimiter ) + "\n";

                items.forEach(function(item,i){
                    result += item.join( options.column_delimiter ) + "\n";
                });

            break;

            case "xls":
                var headers = getHeaders();
                var items  = getItems();
                template = '<table><thead>%thead%</thead><tbody>%tbody%</tbody></table>';

                var res = '';
                headers.forEach(function(item,i){
                    res += '<th>'+item+'</th>' ;
                });template = template.replace('%thead%',res);

                res = '';
                items.forEach(function(item,i){
                    res += '<tr>';
                    item.forEach(function(td,i){
                        res += '<td>'+td+'</td>' ;
                    });
                    res += '</tr>';
                });template = template.replace('%tbody%',res);

                result = template;
            break;

            case "sql":
                var headers = getHeaders();
                var items  = getItems();

                items.forEach(function(item,i){
                    result += "INSERT INTO table ("+ headers.join(",") +") VALUES ('"+ item.join("','") +"');";
                });

            break;

        }

        download(result,options.filename,options.format);

        options.onbefore($this);


    }

}(jQuery));