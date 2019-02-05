//Test Module
function RFrame(name) {

	var _name = name;
	var reference = [];

	if (reference.length == 0) {
    let temp = document.getElementById(_name);
		reference.push(temp);
	}

	if (reference.length == 0) {
	  	reference = document.getElementsByClassName(_name);
	}

	if (reference.length == 0)
	{
		console.log('Error Finding ID or Class name, please check spelling and try again....');
	}

	var PrintReference = () => {
		console.log(reference);
	}

  var GetLength = () => {
    return reference.length;
  }

	var Message = (message) => {
		if(reference.length > 1) {
			for (var i = 0; i < reference.length; i++) {
				reference[i].innerHTML = message;
			}  	
			return;		
		} else if (reference.length == 1) {
			return reference[0].innerHTML = message;
		} else {
			console.log('Error Finding ID or Class name, please check spelling and try again....');	
		}
	}
  
  var Color = (color) => {
    if(reference.length >= 1) {
      for (var i = 0; i < reference.length; i++) {
        reference[i].style.color = color;
      }   
      return;   
    } else if (reference.length == 1) {
      return reference[0].style.color = color;
    } else {
      console.log('Error Finding ID or Class name, please check spelling and try again....'); 
    }      
  }

  var Font = (font) => {
    if(reference.length >= 1) {
      for (var i = 0; i < reference.length; i++) {
        reference[i].style.font = font;
      }   
      return;   
    } else if (reference.length == 1) {
      return reference[0].style.font = font;
    } else {
      console.log('Error Finding ID or Class name, please check spelling and try again....'); 
    }      
  }

  var Size = (size) => {
    if(reference.length >= 1) {
      for (var i = 0; i < reference.length; i++) {
        reference[i].style.fontSize = size;
      }   
      return;   
    } else if (reference.length == 1) {
      return reference.style.fontSize = size;
    } else {
      console.log('Error Finding ID or Class name, please check spelling and try again....'); 
    }   
  }
  //Center the text
  var TextAlign = (position) => {
    if(reference.length >= 1) {
      for (var i = 0; i < reference.length; i++) {
        reference[i].style.textAlign = position;
      }   
      return;   
    } else if (reference.length == 1) {
      return reference[0].style.textAlign = position;
    } else {
      console.log('Error Finding ID or Class name, please check spelling and try again....'); 
    }  
  }

  //Make the element a flexbox
  var FlexBox = (width) => {
    Print(width);
    if(reference.length >= 1) {
      for (var i = 0; i < reference.length; i++) {
        reference[i].style.display = 'block';
        reference[i].style.margin = 'auto';
        if (width == null)
          reference[i].style.width = '70%';
        else
          reference[i].style.width = width;
      }   
      return;   
    } else if (reference.length == 1) {
      reference[0].style.display = 'block';
      reference[0].style.margin = 'auto';
      if (width == null)
        reference[0].style.width = '70%';
      else
        reference[0].style.width = width;
      return;
    } else {
      console.log('Error Finding ID or Class name, please check spelling and try again....'); 
    }  
  }

  //Change the element's background color
  var BackgroundColor = (color) => {
      if(reference.length >= 1) {
        for (var i = 0; i < reference.length; i++) {
          reference[i].style.backgroundColor = color;  
        }
      return;   
    } else if (reference.length == 1) {
      return reference[0].style.backgroundColor = color;
    } else {
      console.log('Error Finding ID or Class name, please check spelling and try again....'); 
    }  
  }

  //Rounded Borders on a element
  var BorderRadius = (amt) => {
    if(reference.length >= 1) {
        for (var i = 0; i < reference.length; i++) {
          reference[i].style.borderRadius = amt; 
        }
      return;   
    } else if (reference.length == 1) {
      return reference[0].style.borderRadius = amt;
    } else {
      console.log('Error Finding ID or Class name, please check spelling and try again....'); 
    }   
  }

  //Set a Image Size
  var ImageSize = (imgSize) => {
    reference[0].width = imgSize; 
  }

  //Get ChildCount
  var ChildCount = () => {
    return reference[0].childElementCount;
  }

  //Return an array of all the children
  var GetChildren = () => {
    let e = reference[0];
    Print(reference[0]);
    let output = [];
    for (var i = 0; i < e.childElementCount; i++) {
      output.push(e.children[i]);
    }
    return output;
  }

  //Public Functions
	return {
		Print: PrintReference,
    GetLength: GetLength,
		Message: Message,
    Color: Color,
    Font: Font,
    Size: Size,
    TextAlign: TextAlign,
    FlexBox: FlexBox,
    BackgroundColor: BackgroundColor,
    BorderRadius: BorderRadius,
    ImageSize: ImageSize,
    ChildCount: ChildCount,
    GetChildren: GetChildren
	};

};
//Print Method
function Print(val) {
	console.log(val);
}


//Usage
var rframe = new RFrame('Test');
let Arr = rframe.GetChildren();