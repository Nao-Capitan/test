createsvg();

function createsvg () {
  var svg = d3.select("#example").append("svg")
      .attr({
        width: 640,
        height: 480
      });

  // 座標(cx,cy)と半径(r)を指定
  var c1 = [100, 90, 30];

  // dataの挿入方法が独特なので注意が必要
  // 詳しくは、[三つの小円](http://ja.d3js.node.ws/document/tutorial/circle.html)参照
  var circle = svg.selectAll('circle').data([c1]).enter().append('circle')
    .attr({
      // enterに入っているデータ一つ一つで下の処理を行う
      'cx': function(d) { return d[0]; },
      'cy': function(d) { return d[1]; },
      'r': function(d) { return d[2]; },
    });
};