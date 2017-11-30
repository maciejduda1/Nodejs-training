process.stdin.setEncoding('utf-8');
process.stdout.write('Komendy działające w programie: /exit, /nodev, /syslang, /getosinfo\n');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if (input !== null){
		var instruction = input.toString().trim()
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
			case '/syslang':
				process.stdout.write('System Language is: ' + process.env.LANG +'\n');
				break;
			case '/nodev':
				process.stdout.write('Node Version is: ' + process.versions.node +'\n')
				break;
			case '/getosinfo':
				var OSinfo = require('../modules/OSinfo');
				OSinfo.print();
				break;
			default: 
				process.stderr.write('Wrong instruction!\n');
		}	
	}
})
