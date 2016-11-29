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
$('.table').tableExport({
	filename: 'table_%DD%-%MM%-%YY%',	// the filename prefix + date format (the extension is automatic) 
	format: 'xls', 						// type of your export file: csv, xls, txt, sql
	cols: '2,3,4'						// export of specified columns
});
```

Date format
-----------------------------------------------------------------------------------------
* 	**%DD%**
	— day
* 	**%MM%**
	— month
* 	**%YY%**
	— year
* 	**%hh%**
	— hours
* 	**%mm%**
	— minutes
*	**%ss%**
	— seconds

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

* 	**[Example #1](http://archakov.im/uploads/iframes/tableExport/example_1.html)**
* 	**[Example #2](http://archakov.im/uploads/iframes/tableExport/example_2.html)**


To Do
-----------------------------------------------------------------------------------------

- [x] Parsing date
- [x] Exporting SQL
- [ ] Support Safari browser

## Contacts
* 	**E-Mail**
	<hello@archakov.im>
* 	**Website**
	<http://archakov.im>

## License

Now licensed under the MIT License: <http://deuxhuithuit.mit-license.org>
