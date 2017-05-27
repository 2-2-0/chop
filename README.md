# chop
A set of Javascript tools that allow you to easily change HTML DOM object properties. Mostly useful for HTML5 animation!


## Usage
Just include the library in the head of your HTML document and implement the call wherever you can call Javascript functions.

### Example
```
<html lang="en">
<head>
	<script src="js/chop.js"></script>
	
	<style>
	body {
	left: 0%;
	top: 0%;
	
	width: 100%;
	height: 100%;
	}
	#example-object {
	left: 0px;
	top: 0px;
	
	width: 20%;
	height: 20%;
	}
	</style>
</head>

<body>
	<a href="javascript:;" onclick="swapLeft ('example-object', '0%', '80%');">[Swap box]</a><br>
	<br>
	<div id="example-object">EXAMPLE-OBJECT</div>
</body>
</html>
```

Here's the relevant actions break down...

First, include the library:
```
<script src="js/chop.js"></script>
```

Now, something to move:
```
<div id="example-object">EXAMPLE-OBJECT</div>
```

...then the call:
```
<a href="javascript:;" onclick="swapLeft ('example-object', '0%', '80%');">[Swap box]</a>
```


## Available methods
All methods use an element id (div_id), and some require a parameter as well (param).


### Position
changeTop (div_id, param);
changeBottom (div_id, param);
changeLeft (div_id, param);
changeRight (div_id, param);

### Shape
changeWidth (div_id, param);
changeHeight (div_id, param);
changeMinHeight (div_id, param);

### DIV related
scrollToDiv (div_id);

### Auxiliary methods
swapTop (div_id, pos_a, pos_b);
swapLeft (div_id, pos_a, pos_b);
toggleDisplay (div_id);



Enjoy!


## Credits
Created by 220

Visit [2-2-0.online](http://2-2-0.online) and [github/2-2-0](http://www.github.com/2-2-0)


## License
Check the included GPLv3 license agreement file.
Use it as you may, just be sure to include some credits with it.
