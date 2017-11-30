function getTimeInMinutes(timeInSec){
	if (timeInSec < 60){
		return Math.floor(timeInSec) + ' sec';
	}
	else if (timeInSec < 3600 && timeInSec >= 60){
		var minutes = Math.floor(timeInSec / 60);
		var seconds = Math.floor(timeInSec % 60) ;
		return minutes + ' min ' + seconds + ' sec';
	}
	else {
		var houres = Math.floor(timeInSec / 3600);
		var minutes = Math.floor((timeInSec - houres * 3600)/60);
		var seconds = Math.floor((timeInSec - houres * 3600) % 60);
		return houres + ' godz ' + minutes + ' min ' + seconds + ' sec'; 
	}
}

exports.time = getTimeInMinutes;