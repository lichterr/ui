var Points            = 0; // очки
var Booster           = 0; // плюс к очкам
var boost_count       = 0; // кол-во улучшений
var strength          = 1; // очков за один клик
var strength_2        = 0; //очков за одну секунду
var price             = [100, 400, 900, 2400, 14000, 29000, 50000, 100000, 300000, 700000, 2000000, 5000000, 12000000, 50000000, 100000000]; // цена улучшения
var price_PPC         = [300, 1000, 4000, 20000, 50000, 100000, 150000, 250000, 500000, 1000000, 2000000, 4000000]
var priceID           = 0; // номер улучшения
var priceID_PPC       = 0; //номер улучшения для Пассивного майнинга 
var succesful         = false; // запрашивает на возможность улучшения
var Points_per_second = 0; // очки за секунду
var succesful_2       = false; //запрашивает на улучшение для пассивного майнинга
var timerID           = setInterval(PPC_timer, 1000); //таймер

function Click() {
    Points++;
    Points += Booster;
    $(".count_of_points").html(Points);
}

function Boost_up() {
    Point_seller();
    if (succesful == true)
        after_check();
        succesful = false;
        $(".count_of_points").html(Points);
        $(".cost_points").html(price[priceID]);
        $(".boost_strength").html(strength);
}
function after_check() {
    Booster++;
    Booster += strength;
    boost_count++;
    strength++;
    $(".count_of_boost").html(boost_count);
    $(".strength_of_click").html(Booster++);
    Booster -= 2;
}

function Point_seller() {
    if (Points >= price[priceID]) {
        Points -= price[priceID];
        priceID++; 
        succesful = true;
    }
    else {
        alert("Ошибка! Недостаточно UI"); }
}

function PPC_up() {
    Point_seller_PPC();
    if (succesful_2 == true) {
        after_check_2();
        succesful_2 = false;
        $(".count_of_points").html(Points);
        $(".cost_up_PPC").html(price_PPC[priceID_PPC]);
        strength_2++;
        $(".strength_PPC").html(strength_2);
        strength_2--;
        clearInterval(timerID);
        timerID = setInterval(PPC_timer, 1000);
    }
}

function Point_seller_PPC() {
    if (Points >= price_PPC[priceID_PPC]) {
        Points -= price_PPC[priceID_PPC];
        priceID_PPC++; 
        succesful_2 = true;
    }
    else {
        alert("Ошибка! Недостаточно UI"); }
}

function after_check_2() {
    strength_2++;
    Points_per_second += strength_2;
    $(".Points_per_second").html(Points_per_second);
}
function PPC_timer() {
    Points += Points_per_second;
    $(".count_of_points").html(Points);
}
