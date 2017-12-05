var OSinfo = require('./modules/OSinfo');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
/*
fs.stat('./cat.jpg', function(err, stats){
	var statMode = new StatMode(stats);
	console.log(statMode.toString());
});

fs.readFile('./text.txt', 'utf-8', function(err, data){
	console.log('Dane przed zapisem: '.blue)
	console.log(data);
	fs.appendFile('./text.txt', 'A tak wyglądają po zapisie!', function(err){
		if (err) throw err;
		console.log('Zapisano!'.blue)
		fs.readFile('./text.txt', 'utf-8', function(err, data){
			console.log('Dane po zapisie'.blue);
			console.log(data);
		});
	});
});
*/
fs.readdir('./modules', function(err, files){
	if (err) throw err;
	console.log('W folderze modules znajdują się pliki: ' + files);
	console.log('Zapisuję je w pliku: text.txt')
	fs.writeFile('./text.txt', files, function(err, data){
		if (err) throw err;
		console.log('Zapisano!');
		fs.readFile('./text.txt', 'utf-8', function(err, data){
			console.log('Dane po zapisie w pliku text.txt:');
			console.log(data);
		});
	});
});


emitter.on('beforeCommand', function(instruction){
	console.log('You wrote: ' + instruction + ' trying to run command');
});
emitter.on('afterCommand', function(){
	console.log('Finished command');
});


process.stdin.setEncoding('utf-8');
process.stdout.write('Komendy działające w programie: /exit, /nodev, /syslang, /getosinfo\n');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if (input !== null){
		var instruction = input.toString().trim();
		emitter.emit('beforeCommand', instruction);
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/syslang':
				process.stdout.write('System Language is: ' + process.env.LANG +'\n');
				break;
			case '/nodev':
				process.stdout.write('Node Version is: ' + process.versions.node +'\n')
				break;
			case '/getosinfo':
				OSinfo.print();
				break;
			default: 
				process.stderr.write('Wrong instruction!\n');
		}
		emitter.emit('afterCommand');	
	}
})
