function getTimeInMinutes(timeInSec){
	var houres;
	var minutes;
	var seconds;

	if (timeInSec < 60){
		return Math.floor(timeInSec) + ' sec';
	}
	if (timeInSec < 3600 && timeInSec >= 60){
		minutes = Math.floor(timeInSec / 60);
		seconds = Math.floor(timeInSec % 60) ;
		return minutes + ' min ' + seconds + ' sec';
	}
	houres = Math.floor(timeInSec / 3600);
	minutes = Math.floor((timeInSec - houres * 3600)/60);
	seconds = Math.floor((timeInSec - houres * 3600) % 60);
	return houres + ' godz ' + minutes + ' min ' + seconds + ' sec'; 
}

exports.time = getTimeInMinutes;