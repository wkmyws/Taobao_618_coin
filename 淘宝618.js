"auto";
var str = "";
str += "屏幕宽度:" + device.width
str += "\n屏幕高度:" + device.height;
//toast("屏幕宽度为"+device.width+"   "+"屏幕高度为"+device.height);
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
    // var t = text("去浏览").findOne(1);

    return text("去进店").findOne(1) ||
        text("去浏览").findOne(1) ||
        text ("去围观").findOne(1)||
        text("去逛逛").findOne(1)||
        null;

}

function view() { //15s
    for (var i = 0; i < 6; i++) {
        swipe(device.width / 2, 4 * device.height / 5, device.width / 2, device.height / 5, 1000);
        sleep(3000)
    }
    back();
}


toast("loading")
sleep(1000)
run()