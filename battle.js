var jun_image = 'モンスターの画像URL';
var jun_status = 0;
var jun_level = 1;

var jun_action_button = '<input type="button" value="ok" onclick="jun_action();">';
var what_action_button = '<input type="button" value="ok" onclick="what_action();">';
var my_action_button = '<input type="button" value="ok" onclick="my_action();">';
var win_button = '<input type="button" value="ok" onclick="win();">';
var lose_button = '<input type="button" value="ok" onclick="lose();">';

var comment;
var ok_button;


function draw_view() {
    document.getElementById('jun_image').innerHTML = '<img id="image" src="./level' + jun_level + '.jpg">';
    document.getElementById('jun_level').innerHTML = jun_level;
    document.getElementById('comment').innerHTML = comment;
    document.getElementById('ok_button').innerHTML = ok_button;
}

function give_food() {
    if (jun_status == 0) {
      comment = '純はすごく満足したみたいだ。';
      jun_level = jun_level + 1;
    }else{
      comment = '純は不満そうだ。';
      jun_level = jun_level - 1;
    }
}
function give_play() {
    if (jun_status == 1) {
      comment = '純はすごく満足したみたいだ。';
      jun_level = jun_level + 1;
    }else{
      comment = '純は不満そうだ。';
      jun_level = jun_level - 1;
    }
}
function give_sleep() {
    if (jun_status == 2) {
      comment = '純はすごく満足したみたいだ。';
      jun_level = jun_level + 1;
    }else{
      comment = '純は不満そうだ。';
      jun_level = jun_level - 1;
    }
}
function do_nothing() {
    if (jun_status == 3) {
      comment = '純の機嫌が治った。';
      jun_level = jun_level + 1;
    }else{
      comment = '純は不満そうだ。';
      jun_level = jun_level - 1;
    }
}

function jun_action() {
    //ランダムに１〜4の数字を生成
    jun_status = Math.floor(Math.random() * 4);
    if (jun_status == 0) {
        comment = '純はお腹がすいていそう';
    } else if (jun_status == 1) {
        comment = '純は寂しそうだ';
    } else if (jun_status == 2) {
        comment = '純は眠そうだ';
    } else if (jun_status == 3) {
        comment = '純は怒っている';
    }
    ok_button = what_action_button;
    draw_view();
}

function what_action() {
    comment = 'どうする！？';
    ok_button = my_action_button;
    document.getElementById('action_form').style.display = "block";
    draw_view();

}

function my_action() {
    if (document.command.give_food.checked) {
        give_food();
    } else if (document.command.give_play.checked) {
        give_play();
    } else if (document.command.give_sleep.checked) {
        give_sleep();
    } else if (document.command.do_nothing.checked) {
        do_nothing();
    }

    document.getElementById('action_form').style.display = "none";

    if (jun_level == 0) {
        ok_button = lose_button;
    }else if(jun_level == 5) {
        ok_button = win_button;
    } else {
        ok_button = jun_action_button;
    }
    draw_view();
}

function win(){
  alert('おめでとう！！純は笑顔になった。')
}

function lose(){
  alert('GAME OVER')
}
