createsvg();

function createsvg () {
  var svg = d3.select("#example").append("svg")
      .attr({
        width: 640,
        height: 480
      });

  var c1 = [100, 90, 30];
  var c2 = [200, 120, 20];
  var carray = [c1, c2];

  // 10種類の色を返す関数を使う
  var color = d3.scale.category10();
  var circle = svg.selectAll('circle').data(carray).enter().append('circle')
    .attr({
      'cx': function(d) { return d[0]; },
      'cy': function(d) { return d[1]; },
      'r': function(d) { return d[2]; },
      // dはデータ要素そのもの、iはindex番号を返す
      // color(i)で、n番目の色データを返す
      'fill': function(d,i) { return color(i); },
    });
};