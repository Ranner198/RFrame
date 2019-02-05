//Test Module
function RFrame(name) {

	var _name = name;
	var reference;

	if (reference == null) {
		reference = document.getElementById(_name);
	}

	if (reference == null) {
	  	reference = document.getElementsByClassName(_name);
	}

	if (reference.length == 0)
	{
		console.log('Error Finding ID or Class name, please check spelling and try again....');
	}

  	var PrintReference = () => {
  		console.log(reference);
  	}

  	var Message = function(message) {
  		if(reference.length >= 1) {
  			for (var i = 0; i < reference.length; i++) {
  				reference[i].innerHTML = message;
  			}  	
  			return;		
  		}else if (reference.length == 1) {
  			return reference.innerHTML = message;
  		} else {
  			console.log('Error Finding ID or Class name, please check spelling and try again....');	
  		}
  	}

  	var Length = () => {
  		return reference.length;
  	}

  	return {
  		Print: PrintReference,
  		Message: Message,
  		Length: Length
  	};

};

function Print(val) {
	console.log(val);
}

//Usage
let rframe = new RFrame('Test');
rframe.Message("This is a test String");
