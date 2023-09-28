//在getCellIndex测试中，通过调用Sudo.getCellIndex方法来获取数独中指定坐标下面格子的索引值，
//并断言其返回值是否与预期结果相等
function test_getCellIndex(){
    var sudo = new Sudo(500, 500, document.getElementById("canvasGame"));
    var loc = {x: 100, y: 100};
    var index = sudo.getCellIndex(loc);
    assert.equal(index.i, 1);
    assert.equal(index.j, 1);
}
