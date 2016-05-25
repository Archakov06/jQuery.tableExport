About
-----------------------------------------------------------------------------------------

This is a simple jQuery plug-in that allows exporting html tables to *CSV*, *XLS*, *TXT*, *SQL*.

![Example work](http://archakov.im/uploads/tableExport-1.gif)


Usage
-----------------------------------------------------------------------------------------

Import the script before `</body>`:

```html
  <script type="text/javascript" src="tableExport.js"></script>
```

And add this code to your javascript file:

```javascript
$('.table').tableExport({
	filename: 'table',
	format: 'csv'
});
```

`.table` - The class name of the exported table.

(or using options):

```javascript
$('.mytableclass').ZtrintTableExporter({
  filename: 'My very first exported table',     //the filename prefix (the extension is automatic)
  title: 'Export my beautiful table to ',       //the title shown in link's mouse hover event
  formats: ['txt','csv','xls']                  //you can choose txt, csv or both (by default)
});

$('.table').tableExport({
		filename: 'table_%DD%-%MM%-%YY%',	// the filename prefix + date format (the extension is automatic) 
		format: 'xls', 						// type of your export file: csv, xls, txt, sql
		cols: '2,3,4'						// export of specified columns
	});

```

Options
-----------------------------------------------------------------------------------------
* 	**filename**
	— the name of the exported file (without extension)
* 	**format**
	— the export file format (only: csv, xls, txt, sql)
* 	**cols**
	— select specific columns for export
* 	**head_delimiter**
	— separator for titles when exporting
* 	**column_delimiter**
	— separator for column when exporting
*	**before(this)**
	— Function to call before trigger is called
*	**onafter(this)**
	— Function to call after trigger is called

Demos
-----------------------------------------------------------------------------------------

More demos in the examples folder. Or on the links below :)

* 	**[Example #1](https://pages.github.com/)**
* 	**[Example #2](https://pages.github.com/)**

## Contacts
* 	**E-Mail**
	<archakov@gatafan.com>
* 	**Website**
	<http://archakov.im>

## License

Now licensed under the MIT License: <http://deuxhuithuit.mit-license.org>
