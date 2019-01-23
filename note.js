const path = require('path');
 const Note = (arr) => {
	return {
	title: arr[0],
    message: arr[1],
    icon: path.join(__dirname, arr[2]), 
    sound: true, 
    wait: false
	}

}
module.exports = Note;