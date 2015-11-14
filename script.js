var data = [];

var mousemoves = new Rx.Observable.fromEvent(document, 'mousemove').map((e) => {
	return {
		x: e.clientX,
		y: e.clientY
	};
});


var interval = Rx.Observable.interval(1000);

interval.subscribe(function(i) {
	changeValue(i);
});


mousemoves.subscribe((d) => {
	data.push(d);
	drawCircles(data);
})
