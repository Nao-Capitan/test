createsvg();

function createsvg () {
  // id:exampleが指定されているタグ(ここではdivタグ)の下に、svgを追加します。
  // widthとheightを指定します。
  var svg = d3.select("#example").append("svg")
      .attr({
        width: 640,
        height: 480,
      });

  // svgの下にcircleを追加します。
  // cx,cy:中心座標(x,y)、r:半径を指定します。
  svg.append('circle')
    .attr({
      'cx': 100,
      'cy': 90,
      'r': 20,
    });
};