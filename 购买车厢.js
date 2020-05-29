var swipeInterval=50;
run();
function run (){
    var i=1;
     toast ("第"+i+"次运行开始");
        clickBuyCar();
        clickBuyCar();
        clickBuyCar();
        clickBuyCar();
        clickBuyCar();
        gatherMap();
        toast ("第"+i+"次运行结束");
        i++;
    setInterval(()=>{
        toast ("第"+i+"次运行开始");
        clickBuyCar();
        clickBuyCar();
        clickBuyCar();
        clickBuyCar();
        clickBuyCar();
        gatherMap();
        toast ("第"+i+"次运行结束");
        i++;
        },10000)
}
function clickBuyCar(){
    return click(device.width/2,device.height/10*9);
}
function getCarPos(x,y){
    /**x[1-5] y[1-2] */
    var x_pos=device.width/10*(x*2-1);
    var y_pos=device.height/20*((y==1?14:16));
    return [x_pos,y_pos];
}
function gatherCars(car1,car2){
    /**car1=[x,y] */
    swipe(car1[0], car1[1], car2[0], car2[1], swipeInterval);
    /*SVGPathSegClosePath(swipeInterval)*/
}
function gatherMap(){
    gatherCars(getCarPos(1,1),getCarPos(1,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(1,1),getCarPos(2,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(1,1),getCarPos(2,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(1,1),getCarPos(3,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(1,1),getCarPos(3,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(1,1),getCarPos(4,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(1,1),getCarPos(4,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(1,1),getCarPos(5,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(1,1),getCarPos(5,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(2,1),getCarPos(1,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(2,1),getCarPos(1,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(2,1),getCarPos(2,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(2,1),getCarPos(3,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(2,1),getCarPos(3,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(2,1),getCarPos(4,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(2,1),getCarPos(4,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(2,1),getCarPos(5,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(2,1),getCarPos(5,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(3,1),getCarPos(1,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(3,1),getCarPos(1,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(3,1),getCarPos(2,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(3,1),getCarPos(2,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(3,1),getCarPos(3,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(3,1),getCarPos(4,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(3,1),getCarPos(4,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(3,1),getCarPos(5,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(3,1),getCarPos(5,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(4,1),getCarPos(1,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(4,1),getCarPos(1,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(4,1),getCarPos(2,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(4,1),getCarPos(2,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(4,1),getCarPos(3,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(4,1),getCarPos(3,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(4,1),getCarPos(4,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(4,1),getCarPos(5,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(4,1),getCarPos(5,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(5,1),getCarPos(1,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(5,1),getCarPos(1,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(5,1),getCarPos(2,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(5,1),getCarPos(2,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(5,1),getCarPos(3,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(5,1),getCarPos(3,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(5,1),getCarPos(4,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(5,1),getCarPos(4,1));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
    gatherCars(getCarPos(5,1),getCarPos(5,2));sleep(swipeInterval);handleAlertBox();sleep(swipeInterval);
}
function handleAlertBox(){}