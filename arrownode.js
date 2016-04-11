createsvg();

function createsvg () {
  var svg = d3.select("#example").append("svg")
      .attr({
        width: 640,
        height: 480
      });

  // 指定を２つに
  var c1 = [100, 90, 30];
  var c2 = [200, 120, 20];

  // 指定した値を配列にする
  var carray = [c1, c2];

  // dataに上で作成した配列を入れる
  var circle = svg.selectAll('circle').data(carray).enter().append('circle')
    .attr({
      'cx': function(d) { return d[0]; },
      'cy': function(d) { return d[1]; },
      'r': function(d) { return d[2]; },
    });
};