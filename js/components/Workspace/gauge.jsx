import React, { Component } from 'react';
import Paper, { Path, PointText, Point } from 'paper';

const DIMENSION = {
    centerX: 260,
    centerY: 230,
    outerRadius: 50, // 40
    innerRadius: 130 // 110
}

class GaugeChart extends Component {
    constructor() {
        super()
        this.state = {
            percent: 90
        }
    }
    render() {
        return <canvas ref="canvas" width="500px" height="500px"></canvas>
    }
    componentDidMount() {
        this.draw();
    }
    draw() {
        var canvas = this.refs["canvas"];
        Paper.setup(canvas);
        var path = new Paper.Path();
        path.strokeColor = 'black';

        var p1 = new Paper.Point(DIMENSION.centerX - DIMENSION.innerRadius - DIMENSION.outerRadius, DIMENSION.centerY), // start point
            p2 = new Paper.Point(DIMENSION.centerX - DIMENSION.innerRadius, DIMENSION.centerY),
            through1 = new Paper.Point(DIMENSION.centerX, DIMENSION.centerY - DIMENSION.innerRadius),
            p3 = new Paper.Point(DIMENSION.centerX + DIMENSION.innerRadius, DIMENSION.centerY),
            p4 = new Paper.Point(DIMENSION.centerX + DIMENSION.innerRadius + DIMENSION.outerRadius, DIMENSION.centerY),
            through2 = new Paper.Point(DIMENSION.centerX, DIMENSION.centerY - DIMENSION.innerRadius - DIMENSION.outerRadius);

        // Draw gauge outline
        path.moveTo(p1);
        path.lineTo(p2);
        path.arcTo(through1, p3);
        path.lineTo(p4);
        path.arcTo(through2, p1);

        var fillPath = new Paper.Path();
        fillPath.strokeColor = 'pink';
        fillPath.strokeWidth = 1; //70

        Paper.view.draw();

        // var p1 = new Paper.Point(85, 150);
        // var through = new Paper.Point(170, 65);
        // var p2 = new Paper.Point(170, 65);
        //var p2 = new Paper.Point(255, 150);

        // fillPath.moveTo(p1);
        // fillPath.arcTo(p2);
        // fillPath.view.draw();


        function canvasArcToPaperArc(cx,cy,radius,startAngle,endAngle){
            var startX=cx+radius*Math.cos(startAngle);
            var startY=cy+radius*Math.sin(startAngle);
            var endX=cx+radius*Math.cos(endAngle);
            var endY=cy+radius*Math.sin(endAngle);
            var thruX=cx+radius*Math.cos((endAngle-startAngle)/2);
            var thruY=cy+radius*Math.sin((endAngle-startAngle)/2);
            var from = new Paper.Point(startX,startY);
            var through = new Paper.Point(thruX,thruY);
            var to = new Paper.Point(endX,endY);
            return({from:from, through:through, to:to, strokeColor:'pink', strokeWidth: DIMENSION.outerRadius});
        }

        var to = this.state.percent;
        var transform = (100 - to)
        var init = -360;

        var end = init * (transform / 100);
        var runAnimate = function() {
            var angle = (init/360)*Math.PI
            var obj = canvasArcToPaperArc(DIMENSION.centerX, DIMENSION.centerY, DIMENSION.innerRadius + DIMENSION.outerRadius / 2, (360/360)*Math.PI, angle);
            var fillPath = new Path.Arc(obj);
            fillPath.view.draw();
            init+=4;
            if (init <= end) {
                window.requestAnimationFrame(runAnimate);
            }
        }
        window.requestAnimationFrame(runAnimate);


        var text = new PointText(new Point(DIMENSION.centerX, DIMENSION.centerY - 30));
        text.justification = 'center';
        text.fillColor = 'black';
        text.content = '0%';
        var initPercent = 0
        function animateText() {
            initPercent++;
            text.content = initPercent + '%';
            if (initPercent < to) {
                window.requestAnimationFrame(animateText)
            }
        }
        window.requestAnimationFrame(animateText)

    }
}

export default GaugeChart;
