var monster_flag = false;
var my_flag = false;

var win_flag = false;

var my_name = 'プレイヤーの名前';
var my_hp = 255;
var my_attack_point = 30;
var my_gard = false;

var monster_image = 'モンスターの画像URL';
var monster_name = 'モンスターの名前';
var monster_hp = 255;
var monster_attack_point = 30;
var monster_gard = false;

var my_action_type;

var ok_button1 = '<input type="button" value="ok" onclick="action1();">';
var ok_button2 = '<input type="button" value="ok" onclick="action2();">';
var ok_button3 = '<input type="button" value="ok" onclick="action3();">';
var ok_button4 = '<input type="button" value="ok" onclick="action4();">';

var comment;
var win_count = 0;


function change_button(ok_button) {
    document.getElementById('ok_button').innerHTML = ok_button;
}

function my_attack() {
    var monster_hp_view = document.getElementById('monster_hp').innerHTML;
    monster_hp = parseInt(monster_hp_view);
    if (!monster_gard) {
        if (monster_hp - my_attack_point > 0) {
            monster_hp = monster_hp - my_attack_point;
        } else {
            monster_hp = 0;
        }
    }

}

function my_recover(count) {
    var my_hp_view = document.getElementById('my_hp').innerHTML;
    my_hp = parseInt(my_hp_view);
    if (my_hp + count < 255) {
        my_hp = my_hp + count;
    } else {
        my_hp = 255;
    }
}

function my_defence() {
    my_gard = true;
}

function my_charge() {
    my_attack_point = my_attack_point + 30;
}


function monster_attack() {
    var my_hp_view = document.getElementById('my_hp').innerHTML;
    my_hp = parseInt(my_hp_view);
    if (!my_gard) {
        if (my_hp - monster_attack_point > 0) {
            my_hp = my_hp - monster_attack_point;
        } else {
            my_hp = 0;
        }
    }

}

function monster_recover(count) {
    var monster_hp_view = document.getElementById('my_hp').innerHTML;
    monster_hp = parseInt(monster_hp_view);
    if (monster_hp + count < 255) {
        monster_hp = monster_hp + count;
    } else {
        monster_hp = 255;
    }
}

function monster_defence() {
    monster_gard = true;
}

function monster_charge() {
    monster_attack_point = monster_attack_point + 30;
}



function draw_view() {

  document.getElementById('monster_name').innerHTML = monster_name;
    document.getElementById('monster_hp').innerHTML = monster_hp;
    document.getElementById('monster_attack_point').innerHTML = monster_attack_point;
    document.getElementById('monster_gard').innerHTML = monster_gard;

    document.getElementById('my_name').innerHTML = my_name;
    document.getElementById('my_hp').innerHTML = my_hp;
    document.getElementById('my_attack_point').innerHTML = my_attack_point;
    document.getElementById('my_gard').innerHTML = my_gard;

    document.getElementById('comment').innerHTML = comment;
}


function first() {
    monster_name = '村井純';
    comment = monster_name + 'が現れた。どうする？';
    draw_view();
}

function my_action() {
    if (document.command.attack.checked) {
        my_attack();
        comment = monster_name + 'に' + my_attack_point + 'ダメージを与えた！';
    } else if (document.command.recover.checked) {
        comment = my_name + 'は休んで50回復した！';
        my_recover(50);
    } else if (document.command.charge.checked) {
        my_charge();
        comment = my_name + 'はエネルギーをためた！';
    } else if (document.command.defence.checked) {
        my_defence();
        comment = my_name + 'は守りの体勢になった！';
    }
    draw_view();
}

function monster_action() {
    var rand = Math.floor(Math.random() * 4);
    if (rand == 0) {
        monster_attack();
        comment = my_name + 'に' + monster_attack_point + 'ダメージを与えた！';
    } else if (rand == 1) {
        comment = 'モンスターは休んで100回復した！';
        monster_recover(50);
    } else if (rand == 2) {
        comment = 'モンスターはエネルギーをためた！';
        monster_charge();
    } else if (rand == 3) {
        comment = 'モンスターは守りの体勢になった！';
        monster_defence();
    }
}

function action1() {
    my_action();
    monster_gard = false;
    if (monster_hp == 0) {
        draw_view();
        document.getElementById('action_form').style.display = "none";
        comment = 'YOU WIN';
        win();
        change_button(ok_button4);

    } else {
        draw_view();
        document.getElementById('action_form').style.display = "none";
        change_button(ok_button2);
    }
}

function action2() {
    monster_action();
    my_gard = false;
    if (my_hp == 0) {
        draw_view();
        comment = 'YOU LOSE';
        change_button(ok_button4);
    } else {
        draw_view();
        change_button(ok_button3);
    }
}

function action3() {
    comment = 'どうする！？';
    draw_view();
    document.getElementById('action_form').style.display = "block";
    change_button(ok_button1);
}

function action4() {
    comment = monster_name + 'が現れた。どうする？';
    draw_view();
    document.getElementById('action_form').style.display = "block";
    change_button(ok_button1);
}



function win(){
  win_count += 1;
  if (win_count == 1) {
    var monster_image = 'モンスターの画像URL';
    var monster_name = '河添';
    var monster_hp = 255;
    var monster_attack_point = 30;
    var monster_gard = false;
  }else if (win_count == 2) {
    var monster_image = 'モンスターの画像URL';
    var monster_name = '福沢諭吉';
    var monster_hp = 255;
    var monster_attack_point = 30;
    var monster_gard = false;
  }else if (win_count == 3) {

  }

  change_button(ok_button4);
}
