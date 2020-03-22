// 点击关系输入框
$("#guanxi").click(function () {
    $(".option").show();
});
$(".option li").click(function () {
    $("#guanxi").val($(this).text());
    $(".option").hide();

})
// 新增绑定人员按钮
$(".bd_btn").click(function () {
    $("#add_user").show();
})
// 取消
$(".qx").click(function () {
    $(".lab_left input").val("");
    $("#add_user").hide();
})

// 保存
$(".bc").click(function () {
    console.log($("#name").val(), "--", $("#guanxi").val(), "--", $("#rjsczjh").val(), "---", $("#sfzhzh").val());
    $("#add_user").hide();
})

// 解除绑定
$(".jcbd").click(function () {
    $(this).parent().parent(".user_box").hide();
})

// 修改
$(".xg").click(function () {
    $("#add_user").show();
    $("#name").val($(this).parent().siblings(".xx_con").find(".uname").text());
    $("#guanxi").val($(this).parent().siblings(".xx_con").find(".uguanxi").text());
    $("#rjsczjh").val($(this).parent().siblings(".xx_con").find(".uzjh").text());
    $("#sfzhzh").val($(this).parent().siblings(".xx_con").find(".ucfzh").text());
})


$(".red").click(function(){
    $("#redm").show()
})

$(".yellow").click(function(){
    $("#yellowm").show()
})

$(".blue").click(function(){
    $("#bluem").show()
})
$("#redm").click(function(){
    $(this).hide();
})
$("#yellowm").click(function(){
    $(this).hide();
})
$("#bluem").click(function(){
    $(this).hide();
})

