## jQuery Table Exporter

This is a simple jQuery plug-in that allows exporting html tables to _CSV_,
_XLS_, _TXT_, _SQL_, _JSON_.

![Example work](http://archakov.im/uploads/tableExport-1.gif)

## Usage

Import the script before `</body>`:

```html
<script type="text/javascript" src="tableExport.js"></script>
```

And add this code to your javascript file:

```javascript
$('.table').tableExport({
  filename: 'table',
  format: 'csv',
});
```

`.table` - The class name of the exported table.

(or using options):

```javascript
$('.table').tableExport({
  filename: 'table_%DD%-%MM%-%YY%', // the filename prefix + date format (the extension is automatic)
  format: 'xls', // type of your export file: csv, xls, txt, sql, json
  cols: '2,3,4', // export of specified columns
});
```

### Exclude columns

```javascript
$('.table').tableExport({
  filename: 'table_%DD%-%MM%-%YY%',
  format: 'csv',
  excludeCols: '1,5',
});
```

### Call events

```javascript
$('.table').tableExport({
  filename: 'table_%DD%-%MM%-%YY%',
  onbefore: function() {
    alert('The export of tables begins!');
  },
  onafter: function() {
    alert('Export complete :)');
  },
});
```

## Date format
* **%DD%** — day
* **%MM%** — month
* **%YY%** — year
* **%hh%** — hours
* **%mm%** — minutes
* **%ss%** — seconds

## Options

* **filename** — the name of the exported file (without extension)
* **format** — the export file format (only: csv, xls, txt, sql, json)
* **cols** — select specific columns for export
* **excludeCols** — excludes specified columns when exporting
* **head_delimiter** — separator for titles when exporting
* **column_delimiter** — separator for column when exporting
* **onbefore(this)** — Function to call before trigger is called
* **onafter(this)** — Function to call after trigger is called

## Demos

More demos in the examples folder. Or on the links below :)

* **[Example #1](https://htmlpreview.github.io/?https://github.com/Archakov06/jQuery.tableExport/blob/master/examples/example_1.html)**
* **[Example #2](https://htmlpreview.github.io/?https://github.com/Archakov06/jQuery.tableExport/blob/master/examples/example_2.html)**

## To Do

* [x] Parsing date
* [x] Exporting SQL
* [x] Support Safari browser

#### 30.11.2017

* UPD: JSON Exporting
* Bug fixes

## Contacts
* **E-Mail**: <hello@archakov.im>
* **Website**: <https://archakov.im>

## License

Now licensed under the MIT License: <http://deuxhuithuit.mit-license.org>
