"auto";
setScreenMetrics(1080, 1920);
function run() {
    for (var t = 1; true; t++) {
        var emm =find()
        if (emm == null) {
            toast("done");
            sleep(3000);
            back();
            break;
        }
        emm.click()
        toast("find one")
        sleep(3000)
        view();
        toast("已经逛了" + t + "次")
        sleep(3000)
    }
}

function find() {
    return text("去进店").findOne(1) ||
        text("去浏览").findOne(1) ||
        text ("去围观").findOne(1)||
        text("去逛逛").findOne(1)||
        null;
}

function view() { 
    for (var i = 0; i < 6; i++) {
        swipe(device.width / 2, 4 * device.height / 5, device.width / 2, device.height / 5, 1000);
        sleep(3000)
    }
    back();
}
var w = floaty.window(
    <frame gravity="center">
        <button id="btn">关闭脚本</button>
    </frame>
);
w.btn.click(()=>{
    toast("手动结束运行脚本")
    w.exitOnClose()
    w.close()
 })
toast("loading")
sleep(1000)
run()
