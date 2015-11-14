var id = 'drawingboard';
var timerId = 'timer';

var svg = d3.select('#' + id)
	.append('svg')
	.attr('width', document.getElementById(id).offsetWidth)
	.attr('height', document.getElementById(id).offsetHeight)
	.attr('id', id + '_svg')
	.style('background-color', '#000');

var timerSvg = d3.select('#' + timerId)
	.append('svg')
	.attr('width', document.getElementById(timerId).offsetWidth)
	.attr('height', document.getElementById(timerId).offsetHeight)
	.attr('id', timerId + '_svg');


function changeValue(value) {
	var timerSvg = document.getElementById(timerId+'_svg');
	if (!value) {
		d3.select(timerSvg).append('text')
			.data([value])
			.text(0)
			.attr('transform', 'translate(' + document.getElementById(timerId).offsetWidth / 2 + ',' + document.getElementById(timerId).offsetHeight / 2 + ')')
			.style('font-family', 'sans-serif')
			.style('font-size', '20px')
			.style("fill", '#000')
			.transition()
			.duration(500)
			.tween("text", function(d) {
				var i = d3.interpolate(this.textContent, d);
				var thisObj = this;
				return function(t) {
					this.textContent = (Math.round(i(t)));
				};
			})
			.each('end', function(d) {
				this.textContent = d;
			});
	} else {	
		var text = d3.select(timerSvg).select('text');
		text.data([value])
			.transition()
			.duration(500)
			.tween("text", function(d) {
				var i = d3.interpolate(this.textContent, d);
				var thisObj = this;
				return function(t) {
					this.textContent = (Math.round(i(t)));
				};
			})
			.each('end', function(d) {
				this.textContent = d;
			});
	}

}

function drawCircles(data) {
	var circles = svg.selectAll('.circle').data(data);

	circles.enter().append('circle')
		.attr('class', 'circle')
		.attr('cx', function(d) {
			return d.x;
		})
		.attr('cy', function(d) {
			return d.y;
		})
		.attr('r', 2)
		.style('stroke', '#fff')
		.style('fill', '#f00');
}