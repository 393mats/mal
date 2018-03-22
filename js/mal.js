//MasaoApp Library (MAL)
//Developed by Tex
var mal = (function() {
  "use strict";

  var msapp_v = "0.7";

  var img_plt1 = new Image();
  var img_plt2 = new Image();
  var parts_obj = {};
  var chip1 = ".";
  var ers1 = ".";
  var chip1_x = 0;
  var chip1_y = 0;
  var chip2 = "..";
  var cb_c = 0;
  var cb_plt1 = {};
  var game_width = 180; //デフォルト値
  var game_height = 30; //デフォルト値
  var plt_width = 16; //デフォルト値
  var plt_height = 6; //デフォルト値
  var plt2_width = 16; //デフォルト値
  var plt2_height = 6; //デフォルト値
  var map_format = 0; //0でノーマル、1で第３版

  var ms_version = "fx16";

  var pen = 1;

  var map0 = [];
  var map1 = [];
  var map2 = [];
  var map3 = []; //第３版
  var lay0 = [];
  var lay1 = [];
  var lay2 = [];
  var lay3 = []; //第３版

  var prm_con = 0;
  var mapmode = 0;

  var mouse_c = 0;

  var cb_paletteClicked_c = 0;
  var cb_paletteClicked = [];

  var cb_paletteMoved_c = 0;
  var cb_paletteMoved = [];

  var cb_editorClicked_c = 0;
  var cb_editorClicked = [];

  var cb_editorMoved_c = 0;
  var cb_editorMoved = [];

  var cb_afterLoad_c = 0;
  var cb_afterLoad = [];

  var def_params = {
    "mes1_name": "ダケシ",
    "serifu1-1": "人の命は、お金では買えないと言われています。",
    "serifu1-2": "しかし、お店へ行けば、ＳＣＯＲＥで買えます。",
    "serifu1-3": "0",
    "serifu2-1": "時は金なりと、言われています。しかし、",
    "serifu2-2": "お店なら、時間も買えます。",
    "serifu2-3": "店員さんて、グレートですね。",
    "mes2_name": "エリコ",
    "serifu3-1": "おはようございます。星と数字が付いた扉が、",
    "serifu3-2": "ありますよね。あれは、ですねえ、その数だけ",
    "serifu3-3": "人面星を取ると、開くので、ございます。",
    "serifu4-1": "LAST STAGEというのは、最終面の事ですわ。",
    "serifu4-2": "これをクリアーすると、エンディングに、",
    "serifu4-3": "行けますのよ。がんばって下さいね。",
    "shop_name": "店員さん",
    "serifu5-1": "いらっしゃいませ。",
    "serifu5-2": "当店では、ＳＣＯＲＥと、アイテムを、",
    "serifu5-3": "交換いたします。",
    "serifu8-1": "本日の営業は、終了いたしました。",
    "serifu8-2": "またのご来店を、",
    "serifu8-3": "こころより、お待ちしております。",
    "shop_serifu1": "どれになさいますか？",
    "shop_serifu2": "で、よろしいですか？",
    "shop_serifu3": "はい",
    "shop_serifu4": "いいえ",
    "shop_serifu5": "を、装備した。",
    "shop_serifu6": "ＳＣＯＲＥが、足りません。",
    "shop_item_name1": "グレネード３発",
    "shop_item_name2": "ジェット",
    "shop_item_name3": "ドリル",
    "shop_item_name4": "ヘルメット",
    "shop_item_name5": "しっぽ",
    "shop_item_name6": "バリア",
    "shop_item_name7": "ファイヤーボール",
    "shop_item_name8": "１ｕｐ",
    "shop_item_name9": "制限時間増加",
    "shop_item_teika1": "200",
    "shop_item_teika2": "150",
    "shop_item_teika3": "100",
    "shop_item_teika4": "100",
    "shop_item_teika5": "250",
    "shop_item_teika6": "80",
    "shop_item_teika7": "300",
    "shop_item_teika8": "980",
    "shop_item_teika9": "1",
    "setumei_name": "キドはかせ",
    "serifu9-1": "よく来た。わしは、キドはかせ。",
    "serifu9-2": "アイテムの研究をしており、みんなから、",
    "serifu9-3": "アイテムはかせと呼ばれて、したわれておるよ。",
    "setumei_menu1": "なんでも、質問してくれたまえよ。",
    "setumei_menu2": "ファイヤーボール",
    "setumei_menu3": "バリア",
    "setumei_menu4": "ジェット",
    "serifu10-1": "黄色いチューリップのアイテムと言えば、",
    "serifu10-2": "そう、ファイヤーボールじゃな。はなれた",
    "serifu10-3": "敵を攻撃できるという、大変便利なものじゃ。",
    "serifu11-1": "ピンクのキノコのアイテムと言えば、そう、",
    "serifu11-2": "バリアじゃな。体当たりで敵を倒せるが、うっかり",
    "serifu11-3": "して、時間切れを忘れぬよう、注意が必要じゃ。",
    "serifu12-1": "ロケットの形のアイテムと言えば、そう、ジェット",
    "serifu12-2": "じゃな。空中で、スペースキーを押せば、さらに",
    "serifu12-3": "上昇できる。燃料切れには、気を付けるのじゃぞ。",
    "door_score": "800",
    "layer_mode": "1",
    "filename_mapchip": "mapchip.gif",
    "filename_haikei": "haikei.gif",
    "filename_haikei2": "haikei.gif",
    "filename_haikei3": "haikei.gif",
    "filename_haikei4": "haikei.gif",
    "gazou_scroll": "2",
    "easy_mode": "1",
    "now_loading": "ただいまファイルを読み込み中。しばらくお待ち下さい。",
    "time_max": "300",
    "scroll_mode": "1",
    "scroll_mode_s": "1",
    "scroll_mode_t": "1",
    "scroll_mode_f": "1",
    "score_v": "1",
    "stage_max": "1",
    "stage_kaishi": "1",
    "jibun_left_shoki": "1",
    "score_1up_1": "500",
    "score_1up_2": "1000",
    "stage_select": "1",
    "j_tail_type": "1",
    "j_tail_hf": "1",
    "j_fire_mkf": "1",
    "grenade_type": "1",
    "suberuyuka_hkf": "1",
    "dengeki_mkf": "1",
    "yachamo_kf": "1",
    "airms_kf": "1",
    "ugokuyuka1_type": "1",
    "ugokuyuka2_type": "1",
    "ugokuyuka3_type": "1",
    "boss_type": "1",
    "boss2_type": "1",
    "boss3_type": "1",
    "url1": "http:\/\/www.yahoo.co.jp\/",
    "url2": "http:\/\/www.yahoo.co.jp\/",
    "url3": "http:\/\/www.yahoo.co.jp\/",
    "url4": "http:\/\/www.t3.rim.or.jp\/~naoto\/naoto.html",
    "dokan_mode": "1",
    "j_tokugi": "1",
    "hitokoto1_name": "浩二",
    "hitokoto1-1": "今日は、いい天気だね。",
    "hitokoto1-2": "0",
    "hitokoto1-3": "0",
    "hitokoto2_name": "お姫様",
    "hitokoto2-1": "ついに、ここまで来ましたね。",
    "hitokoto2-2": "0",
    "hitokoto2-3": "0",
    "hitokoto3_name": "ザトシ",
    "hitokoto3-1": "オレは、世界一になる男だ。",
    "hitokoto3-2": "0",
    "hitokoto3-3": "0",
    "hitokoto4_name": "クリス",
    "hitokoto4-1": "んちゃ！",
    "hitokoto4-2": "0",
    "hitokoto4-3": "0",
    "backcolor_red": "0",
    "backcolor_green": "255",
    "backcolor_blue": "255",
    "backcolor_red_s": "0",
    "backcolor_green_s": "0",
    "backcolor_blue_s": "0",
    "backcolor_red_t": "0",
    "backcolor_green_t": "255",
    "backcolor_blue_t": "255",
    "backcolor_red_f": "192",
    "backcolor_green_f": "48",
    "backcolor_blue_f": "48",
    "kaishi_red": "0",
    "kaishi_green": "0",
    "kaishi_blue": "0",
    "scorecolor_red": "0",
    "scorecolor_green": "0",
    "scorecolor_blue": "255",
    "grenade_red1": "255",
    "grenade_green1": "255",
    "grenade_blue1": "255",
    "grenade_red2": "255",
    "grenade_green2": "255",
    "grenade_blue2": "0",
    "mizunohadou_red": "0",
    "mizunohadou_green": "32",
    "mizunohadou_blue": "255",
    "firebar_red1": "255",
    "firebar_green1": "0",
    "firebar_blue1": "0",
    "firebar_red2": "255",
    "firebar_green2": "192",
    "firebar_blue2": "0",
    "moji_score": "SCORE",
    "moji_highscore": "HIGHSCORE",
    "moji_time": "TIME",
    "moji_jet": "JET",
    "moji_grenade": "GRENADE",
    "moji_left": "LEFT",
    "moji_size": "14",
    "filename_title": "title.gif",
    "filename_ending": "ending.gif",
    "filename_gameover": "gameover.gif",
    "filename_pattern": "pattern.gif",
    "filename_chizu": "chizu.gif",
    "game_speed": "70",
    "se_switch": "2",
    "se_filename": "1",
    "filename_se_start": "item.au",
    "filename_se_gameover": "gameover.au",
    "filename_se_clear": "clear.au",
    "filename_se_coin": "coin.au",
    "filename_se_get": "get.au",
    "filename_se_item": "item.au",
    "filename_se_jump": "jump.au",
    "filename_se_sjump": "sjump.au",
    "filename_se_kiki": "kiki.au",
    "filename_se_fumu": "fumu.au",
    "filename_se_tobasu": "tobasu.au",
    "filename_se_fireball": "shot.au",
    "filename_se_jet": "mgan.au",
    "filename_se_miss": "dosun.au",
    "filename_se_block": "bakuhatu.au",
    "filename_se_mizu": "mizu.au",
    "filename_se_dengeki": "mgan.au",
    "filename_se_happa": "happa.au",
    "filename_se_hinoko": "mgan.au",
    "filename_se_mizudeppo": "happa.au",
    "filename_se_bomb": "shot.au",
    "filename_se_dosun": "dosun.au",
    "filename_se_grounder": "mgan.au",
    "filename_se_kaiole": "happa.au",
    "filename_se_senkuuza": "shot.au",
    "filename_se_dokan": "get.au",
    "filename_se_chizugamen": "get.au",
    "scroll_area": "1",
    "clear_type": "1",
    "fx_bgm_switch": "0",
    "fx_bgm_loop": "0",
    "filename_fx_bgm_stage1": "stage1.mid",
    "filename_fx_bgm_stage2": "stage2.mid",
    "filename_fx_bgm_stage3": "stage3.mid",
    "filename_fx_bgm_stage4": "stage4.mid",
    "filename_fx_bgm_boss": "boss.mid",
    "filename_fx_bgm_title": "title.mid",
    "filename_fx_bgm_ending": "ending.mid",
    "filename_fx_bgm_chizu": "chizu.mid",
    "variable_sleep_time": "1",
    "sleep_time_visible": "0",
    "firebar1_type": "1",
    "firebar2_type": "1",
    "dossunsun_type": "1",
    "mizutaro_attack": "1",
    "poppie_attack": "1",
    "mariri_attack": "1",
    "chikorin_attack": "1",
    "taiking_attack": "1",
    "kuragesso_attack": "1",
    "gazou_scroll_speed_x": "0",
    "gazou_scroll_speed_y": "0",
    "mcs_haikei_visible": "0",
    "pause_switch": "1",
    "control_parts_visible": "1",
    "coin1_type": "1",
    "coin3_type": "1",
    "dokan1_type": "1",
    "dokan2_type": "1",
    "dokan3_type": "1",
    "dokan4_type": "1",
    "view_move_type": "1",
    "j_fire_equip": "1",
    "j_fire_type": "1",
    "j_enemy_press": "1",
    "boss_destroy_type": "1",
    "boss_hp_max": "20",
    "j_tail_ap_boss": "4",
    "boss_name": "BOSS",
    "boss2_name": "BOSS",
    "boss3_name": "BOSS",
    "fs_name": "ファイヤーボールセレクトの人",
    "serifu7-1": "好きなファイヤーボールを、３種類から",
    "serifu7-2": "選んで下さい。私はサービスが良いので、",
    "serifu7-3": "何度でも選べますよ。",
    "fs_serifu1": "どのファイヤーボールにしますか？",
    "fs_item_name1": "バウンド",
    "fs_item_name2": "ストレート",
    "fs_item_name3": "ダブル",
    "fs_serifu2": "を装備しました。",
    "j_add_tokugi": "1",
    "j_add_tokugi2": "1",
    "j_add_tokugi3": "1",
    "j_add_tokugi4": "1",
    "second_gazou_visible": "1",
    "filename_second_haikei": "haikei_second.gif",
    "filename_second_haikei2": "haikei_second.gif",
    "filename_second_haikei3": "haikei_second.gif",
    "filename_second_haikei4": "haikei_second.gif",
    "second_gazou_scroll": "1",
    "second_gazou_scroll_speed_x": "0",
    "second_gazou_scroll_speed_y": "0",
    "second_gazou_scroll_x": "0",
    "second_gazou_scroll_y": "0",
    "second_gazou_priority": "1",
    "gazou_scroll_x": "0",
    "gazou_scroll_y": "0",
    "serifu_key1_on_name": "お姫様",
    "serifu_key1_on-1": "ここから先へ進むには、",
    "serifu_key1_on-2": "３つのＫＥＹ１が必要です。",
    "serifu_key1_on-3": "この世界のどこかに、あるはず。",
    "serifu_key1_on-4": "ＫＥＹ１を３つ、わたしますか？",
    "serifu_key1_on-5": "はい",
    "serifu_key1_on-6": "いいえ",
    "serifu_key1_on-7": "ＫＥＹ１を３つ、持っていません。",
    "serifu_key1_on-8": "先へ進む道が、開けました。",
    "serifu_key1_on-9": "勇者殿、",
    "serifu_key1_on-10": "お気を付けて。",
    "key1_on_count": "3",
    "serifu_key2_on_name": "ザトシ",
    "serifu_key2_on-1": "３つのＫＥＹ２がないと、",
    "serifu_key2_on-2": "ここから先へは進めないぜ。",
    "serifu_key2_on-3": "どこかで見つ付けてくれ。",
    "serifu_key2_on-4": "ＫＥＹ２を３つ、わたしますか？",
    "serifu_key2_on-5": "はい",
    "serifu_key2_on-6": "いいえ",
    "serifu_key2_on-7": "ＫＥＹ２を３つ、持っていません。",
    "serifu_key2_on-8": "３つのＫＥＹ２、受け取ったぜ。",
    "serifu_key2_on-9": "これで、先へ進めるようになったな。",
    "serifu_key2_on-10": "0",
    "key2_on_count": "3",
    "water_visible": "1",
    "water_clear_switch": "1",
    "water_clear_level": "128",
    "serifu_grenade_shop_name": "クリス",
    "serifu_grenade_shop-1": "グレネード１発を、",
    "serifu_grenade_shop-2": "２０点で売りますよ。",
    "serifu_grenade_shop-3": "0",
    "serifu_grenade_shop-4": "何発にしますか？",
    "serifu_grenade_shop-5": "得点が、足りません。",
    "serifu_grenade_shop-6": "グレネードを手に入れた。",
    "grenade_shop_score": "20",
    "audio_se_switch_wave": "1",
    "audio_se_switch_mp3": "1",
    "audio_se_switch_ogg": "1",
    "audio_bgm_switch_wave": "2",
    "audio_bgm_switch_mp3": "1",
    "audio_bgm_switch_ogg": "1"
  };


  // Param設定を生成
  var createParams = function() {
    return Object.create(def_params);
  };
  var con_params = createParams();
  var con_params2 = createParams();


  //-----------------------------------------------------------
  //-----------------------------------------------------------
  //-----------------------------------------------------------


  var createEditor = function(gw, gh, scroll) {
    gw = gw * 32;
    gh = gh * 32;
    var ovf = "hidden";
    if (scroll == 1) {
      ovf = "scroll";
    }
    //  エディタのdivオブジェクトを作成
    document.write("<div id=\"mal_editor\"></div>");
    var editor_elm = document.getElementById("mal_editor");
    editor_elm.style.overflow = ovf;
    editor_elm.style.border = "hidden";
    editor_elm.style.zIndex = 2;
    editor_elm.style.position = "relative";

    //  エディタのキャンバスを生成
    //  0がグリッド用、1が標準レイヤー、2が背景レイヤー
    var canvas_elm = [];
    for (var i = 0; i < 3; i++) {

      canvas_elm[i] = document.createElement('canvas');
      canvas_elm[i].id = "c" + i;
      canvas_elm[i].width = gw;
      canvas_elm[i].height = gh;
      canvas_elm[i].style.top = 0;
      canvas_elm[i].style.left = 0;
      canvas_elm[i].style.position = "absolute";
      canvas_elm[i].style.zIndex = 2 - i;
      editor_elm.appendChild(canvas_elm[i]);

    }
    var scrollHeight = document.getElementById("mal_editor").scrollHeight;
    document.getElementById("mal_editor").scrollTop = scrollHeight;

  };

  //  マップデータを生成
  var createMapdata = function(gw, gh, mode) {
    gw = gw * 32;
    gh = gh * 32;
    map_format = mode;
    if (gw <= 5760 && gh <= 960 && map_format == 0) {
      map_format = 0;
      //Normal layer
      for (var i = 0; i <= 29; i++) {
        map0[i] = "............................................................".split('');
        map1[i] = "............................................................".split('');
        map2[i] = "............................................................".split('');
      }

      var lay_data = "........................................................................................................................";
      var r = new RegExp(".{1,2}", "g"); //RE
      for (var i = 0; i <= 29; i++) {
        lay0[i] = lay_data.match(r);
        lay1[i] = lay_data.match(r);
        lay2[i] = lay_data.match(r);
      }


    } else {
      //可変サイズ（第３版マップデータ）
      map_format = 1;


    }
  };

  //  パレット１の生成
  var createPalette = function(pw, ph) {
    pw = pw * 32;
    ph = ph * 32;
    //  パレット生成
    document.write("<div id=\"mal_palette\"></div>");
    var palette_elm = document.getElementById("mal_palette");
    palette_elm.style.overflow = "scroll";
    palette_elm.style.zIndex = 2;
    palette_elm.style.position = "relative";
    //palette_elm.style.background = "cyan";

    var canvas2_elm = document.createElement('canvas');
    canvas2_elm.id = "plt1";
    canvas2_elm.width = pw;
    canvas2_elm.height = ph;
    canvas2_elm.style.top = 0;
    canvas2_elm.style.left = 0;
    canvas2_elm.style.position = "absolute";
    canvas2_elm.style.zIndex = 2;
    //canvas2_elm.style.background = "#222";
    palette_elm.appendChild(canvas2_elm);

  };

  //  パレット2の生成
  var createPalette2 = function(pw, ph) {
    pw = pw * 32;
    ph = ph * 32;
    //  パレット生成
    document.write("<div id=\"mal_palette_2\"></div>");
    var palette_elm = document.getElementById("mal_palette_2");
    palette_elm.style.overflow = "scroll";
    palette_elm.style.border = "solid 1px gray";
    palette_elm.style.zIndex = 2;
    palette_elm.style.position = "relative";
    //palette_elm.style.background = "cyan";

    var canvas2_elm = document.createElement('canvas');
    canvas2_elm.id = "plt2";
    canvas2_elm.width = pw;
    canvas2_elm.height = ph;
    canvas2_elm.style.top = 0;
    canvas2_elm.style.left = 0;
    canvas2_elm.style.position = "absolute";
    canvas2_elm.style.zIndex = 2;
    //canvas2_elm.style.background = "cyan";
    palette_elm.appendChild(canvas2_elm);

  };

  //  画像の読み込み
  var loadImage1 = function(img1) {

    if (img1 == null) {
      img_plt1.src = "parts.png?" + new Date().getTime();
    } else {
      img_plt1.src = img1 + "?" + new Date().getTime();
    }
    var cvs_p1 = document.getElementById("plt1");
    var ctx_p1 = cvs_p1.getContext("2d");

    img_plt1.onload = function() {
      ctx_p1.drawImage(img_plt1, 0, 0);
      ctx_p1.fillStyle = "rgba(" + [255, 0, 0, 0.5] + ")";
      ctx_p1.fillRect(0, 0, 32, 32);
    };

    cvs_p1.oncontextmenu = function(){return false;};

  };

  //  画像の読み込み
  var loadImage2 = function(img) {

    if (img == null) {
      img_plt2.src = "mapchip.gif?" + new Date().getTime();
    } else {
      img_plt2.src = img + "?" + new Date().getTime();
    }
    var cvs_p2 = document.getElementById("plt2");
    var ctx_p2 = cvs_p2.getContext("2d");

    img_plt2.onload = function() {
      ctx_p2.drawImage(img_plt2, 0, 0);
      ctx_p2.fillStyle = "rgba(" + [255, 0, 0, 0.5] + ")";
      ctx_p2.fillRect(0, 0, 32, 32);
    };

    cvs_p2.oncontextmenu = function(){return false;};

  };

  //  マウスイベント（エディタ）
  var mouseEvent_edt = function() {
    var cvs_c0 = document.getElementById("c0");
    var ctx_c0 = cvs_c0.getContext("2d");
    var cvs_c1 = document.getElementById("c1");
    var ctx_c1 = cvs_c1.getContext("2d");

    //  クリックした時
    var mouseDown = function(e) {
      var rect = e.target.getBoundingClientRect();
      var chip = ers1;
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      x = Math.floor(x / 32);
      y = Math.floor(y / 32);
      var cx = x * 32;
      var cy = y * 32;
      ctx_c1.clearRect(cx, cy, 32, 32);
      //ctx_c1.fillRect(cx, cy, 32, 32);
      if(pen == 1){
        ctx_c1.drawImage(img_plt1, chip1_x * 32, chip1_y * 32, 32, 32, cx, cy, 32, 32);
        chip = chip1;
      }

      if (x < 60) {
        map0[y][x] = chip;
      } else if (x > 59 && x < 120) {
        map1[y][x - 60] = chip;
      } else if (x > 119 && x < 180) {
        map2[y][x - 120] = chip;
      }

      mouse_c = 1;
      callBack_edtClicked(x, y, chip);
    };

    //  動かした時
    var mouseMove = function(e) {
      var rect = e.target.getBoundingClientRect();
      var chip = ers1;
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      x = Math.floor(x / 32);
      y = Math.floor(y / 32);
      var cx = x * 32;
      var cy = y * 32;

      if(mouse_c == 1){

        ctx_c1.clearRect(cx, cy, 32, 32);
        //ctx_c1.fillRect(cx, cy, 32, 32);
        if(pen == 1){
          ctx_c1.drawImage(img_plt1, chip1_x * 32, chip1_y * 32, 32, 32, cx, cy, 32, 32);
          chip = chip1;
        }

        if (x < 60) {
          map0[y][x] = chip;
        } else if (x > 59 && x < 120) {
          map1[y][x - 60] = chip;
        } else if (x > 119 && x < 180) {
          map2[y][x - 120] = chip;
        }

      }

      callBack_edtMoved(x, y, chip); //  コールバック
    };

    var mouseUp = function(e) {
      mouse_c = 0;
    };

    var touchMove = function(e) {
      var rect = e.target.getBoundingClientRect();
      var chip = ers1;
      var x = e.changedTouches[0].clientX - rect.left;
      var y = e.changedTouches[0].clientY - rect.top;
      x = Math.floor(x / 32);
      y = Math.floor(y / 32);
      var cx = x * 32;
      var cy = y * 32;

        ctx_c1.clearRect(cx, cy, 32, 32);
        //ctx_c1.fillRect(cx, cy, 32, 32);
        if(pen == 1){
          ctx_c1.drawImage(img_plt1, chip1_x * 32, chip1_y * 32, 32, 32, cx, cy, 32, 32);
          chip = chip1;
        }

        if (x < 60) {
          map0[y][x] = chip;
        } else if (x > 59 && x < 120) {
          map1[y][x - 60] = chip;
        } else if (x > 119 && x < 180) {
          map2[y][x - 120] = chip;
        }

      callBack_edtMoved(x, y, chip); //  コールバック
    };


    cvs_c0.addEventListener('mousedown', mouseDown, false);
    cvs_c0.addEventListener('mousemove', mouseMove, false);
    cvs_c0.addEventListener('touchmove', touchMove, false);
    document.addEventListener('mouseup', mouseUp, false);
    //document.addEventListener('touchend', touchUp, false);
    //document.addEventListener('touchcancel', mouseUp, false);
    cvs_c0.oncontextmenu = function(){return false;};

  };
  //  マウスイベント（パレット１）
  var mouseEvent_plt1 = function(data, px, py) {
    var cvs_p1 = document.getElementById("plt1");
    var ctx_p1 = cvs_p1.getContext("2d");
    px = px * 32;
    py = py * 32;
    //  クリックした時
    var mouseDown = function(e) {

      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      x = Math.floor(x / 32);
      y = Math.floor(y / 32);
      var cx = x * 32;
      var cy = y * 32;
      ctx_p1.clearRect(0, 0, px, py);
      ctx_p1.drawImage(img_plt1, 0, 0);
      ctx_p1.fillStyle = "rgba(" + [255, 0, 0, 0.5] + ")";
      ctx_p1.fillRect(cx, cy, 32, 32);
      var parts = [];
      if (data[y] == null) {
        chip1 = ".";
      } else {
        parts = data[y].split("");
        chip1 = parts[x];
        if (chip1 == null) {
          chip1 = ".";
        }
      }
      chip1_x = x;
      chip1_y = y;
      callBack_plt1Clicked(x, y, chip1); //  コールバック

    };

    //  クリックした時
    var mouseMove = function(e) {

      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      x = Math.floor(x / 32);
      y = Math.floor(y / 32);

      var chip = ".";
      var parts = [];
      if (data[y] == null) {
        chip = ".";
      } else {
        parts = data[y].split("");
        chip = parts[x];
        if (chip1 == null) {
          chip = ".";
        }
      }
      callBack_plt1Moved(x, y, chip); //  コールバック

    };

    cvs_p1.addEventListener('mousedown', mouseDown, false);

  };

  //  Paramsを取得
  var getParams = function() {
    var _params = "";
    var prmData = getConfig(prm_con);

    var paramdata1 = {};
    var paramdata2 = {};

    var map_ret = "";

    var lay_ret = "";

    var lay2_last = "";
    switch (map_format) {
      case 0:
        var map0_ = [];
        var map1_ = [];
        var map2_ = [];
        var lay0_ = [];
        var lay1_ = [];
        var lay2_ = [];
        for (var i = 0; i <= 29; i++) {
          paramdata1["map0_" + i] = map0[i].join('');
          map0_[i] = "\"map0-" + i + "\" : \"" + map0[i].join('') + "\",\n";
          //map0_2[i] = map0[i].join('');
        }
        for (var i = 0; i <= 29; i++) {
          paramdata1["map1_" + i] = map1[i].join('');
          map1_[i] = "\"map1-" + i + "\" : \"" + map1[i].join('') + "\",\n";
          //map1_2[i] = map1[i].join('');
        }
        for (var i = 0; i <= 29; i++) {
          paramdata1["map2_" + i] = map2[i].join('');
          map2_[i] = "\"map2-" + i + "\" : \"" + map2[i].join('') + "\",\n";
          //map1_2[i] = map1[i].join('');
        }

        for (var i = 0; i <= 29; i++) {
          paramdata2["layer0_" + i] = lay0[i].join('');
          lay0_[i] = "\"layer0-" + i + "\" : \"" + lay0[i].join('') + "\",\n";
        }
        for (var i = 0; i <= 29; i++) {
          paramdata2["layer1_" + i] = lay1[i].join('');
          lay1_[i] = "\"layer1-" + i + "\" : \"" + lay1[i].join('') + "\",\n";
        }
        for (var i = 0; i <= 29; i++) {
          paramdata2["layer2_" + i] = lay2[i].join('');
          lay2_[i] = "\"layer2-" + i + "\" : \"" + lay2[i].join('') + "\",\n";
        }

        lay2_last = lay2_.join('');
        if (prmData == "") {

          lay2_last = lay2_last.slice(0, -2) + "\n";
        }

        map_ret = map0_.join('') + map1_.join('') + map2_.join('');
        lay_ret = lay0_.join('') + lay1_.join('') + lay2_last.slice(0, -2) + "\n";

        _params = map0_.join('') + map1_.join('') + map2_.join('') + lay0_.join('') + lay1_.join('') + lay2_last + prmData;

        break;
    }

    var params = Object.assign(paramdata1, paramdata2);
    return [_params, params, paramdata1, paramdata2];

  };

  //  設定用Paramを書き出す
  var getConfig = function(flag) {
    flag = flag * 1;
    var res = "";
    switch (flag) {

      case 0:
        var prmStr = JSON.stringify(con_params, null, " ");
        prmStr = prmStr.slice(2);
        prmStr = prmStr.slice(0, -1);
        res = prmStr;
        break;

      case 1:
        var def_keys = Object.keys(def_params);

        for (var key in def_keys) {

          if (def_params[def_keys[key]] != con_params2[def_keys[key]]) {
            continue;
          }
          con_params2[def_keys[key]] = def_params[def_keys[key]];

        }
        var prmStr = JSON.stringify(con_params2, null, " ");
        prmStr = prmStr.slice(2);
        prmStr = prmStr.slice(0, -1);
        res = prmStr;
        //console.log("Param:", res);
        break;
    }
    return res;
  };

  //  Paramを書き換える
  var setParam = function(prm, value) {
    con_params[prm] = value;
    con_params2[prm] = value;
    return;
  };

  //  Paramを書き換える
  var newProject = function(version) {
    var cvs_c1 = document.getElementById("c1");
    var ctx_c1 = cvs_c1.getContext("2d");
    var cvs_p1 = document.getElementById("plt1");
    var ctx_p1 = cvs_p1.getContext("2d");
    createMapdata(game_width, game_height, mapmode);
    con_params = createParams();
    con_params2 = createParams();
    ctx_c1.clearRect(0, 0, game_width*32, game_height*32);
    ctx_p1.clearRect(0, 0, plt_width*32, plt_height*32);
    ctx_p1.drawImage(img_plt1, 0, 0);
    ctx_p1.fillStyle = "rgba(" + [255, 0, 0, 0.5] + ")";
    ctx_p1.fillRect(0, 0, 32, 32);
    chip1 = parts_obj[0].charAt(0);
    chip1_x = 0;
    chip1_y = 0;
    var edt = document.getElementById("mal_editor");
    edt.scrollTo(0,edt.scrollHeight);
    return;
  };

  //  エディタに描く
  var drawEditor = function(x, y, w, h, layer, chip) {
    var cvs_c1 = document.getElementById("c1");
    var ctx_c1 = cvs_c1.getContext("2d");
    var cvs_c2 = document.getElementById("c2");
    var ctx_c2 = cvs_c2.getContext("2d");
    switch(layer){
      case 1:
        ctx_c1.clearRect(x*32, y*32, w*32, h*32);
        var chipX = 0;
        var chipY = 0;
        for (var c = 0; c < Object.keys(parts_obj).length; c++) {
          var prts_count = parts_obj[c].search(chip);
          if (prts_count == -1) {
            continue;
          }

          chipX = prts_count;
          chipY = c;
        }
        for (var i = 0; i < w; i++) {
          for (var i2 = 0; i2 < h; i2++) {
            ctx_c1.drawImage(img_plt1, chipX * 32, chipY * 32, 32, 32, (x + i) * 32, (y + i2) * 32, 32, 32);
            if (x + i < 60) {
              map0[y + i2][x + i] = chip;
            } else if (x + i > 59 && x + i < 120) {
              map1[y + i2][x + i - 60] = chip;
            } else if (x + i > 119 && x + i < 180) {
              map2[y + i2][x + i - 120] = chip;
            }
          }

        }

      break;

    }
    return;
  };


  //  JSONを読み込む
  var mc_load = function(data){
    var metadata = {};
    if (typeof data != "object") {
      return null;
    }
    if (data["masao-json-format-version"] == null) {
      return null;
    }

    var version = data.version;
    newProject(version);

    var ref_meta = data.metadata;
    if(ref_meta != null){
      metadata.title = ref_meta.title;
      metadata.auther = ref_meta.auther;
      metadata.editor = ref_meta.editor;
      metadata.url = ref_meta.url;
    }

    var ref_prm = data.params;

    var r = new RegExp(".{1,2}","g");
    for (var i = 0; i <= 29; i++) {
      var m = "............................................................".split('');
      var l = "........................................................................................................................".match(r);
      var m0 = ref_prm['map0-' + i];
      var m1 = ref_prm['map1-' + i];
      var m2 = ref_prm['map2-' + i];
      var l0 = ref_prm['layer0-' + i];
      var l1 = ref_prm['layer1-' + i];
      var l2 = ref_prm['layer2-' + i];
      (m0 != null)?map0[i]=m0.split(''):map0[i]=m;
      (m1 != null)?map1[i]=m1.split(''):map1[i]=m;
      (m2 != null)?map2[i]=m2.split(''):map2[i]=m;

      (l0 != null)?lay0[i]=l0.match(r):lay0[i]=l;
      (l1 != null)?lay1[i]=l1.match(r):lay1[i]=l;
      (l2 != null)?lay2[i]=l2.match(r):lay2[i]=l;
    }
    for (var i = 0; i <= 29; i++) {
      for (var i2 = 0; i2 <= 59; i2++) {
        if(map0[i][i2]!=".") drawEditor(i2,i,1,1,1,map0[i][i2]);
        if(map1[i][i2]!=".") drawEditor(i2 + 60,i,1,1,1,map1[i][i2]);
        if(map2[i][i2]!=".") drawEditor(i2 + 120,i,1,1,1,map2[i][i2]);
      }
    }
    var con = Object.keys(ref_prm);
    for(let i in con) {
      if ( ~con[i].indexOf('map0-')) continue;
      else if ( ~con[i].indexOf('map1-')) continue;
      else if ( ~con[i].indexOf('map2-')) continue;
      else if ( ~con[i].indexOf('layer0-')) continue;
      else if ( ~con[i].indexOf('layer1-')) continue;
      else if ( ~con[i].indexOf('layer2-')) continue;

      if (ref_prm[con[i]] != def_params[con[i]]) {
      //console.log(con[i],ref_prm[con[i]],def_params[con[i]]);
      setParam(con[i], ref_prm[con[i]]);

      }


    }
    callBack_aftLoaded();

  };


  //  コールバック：パレットをクリックした時
  var callBack_plt1Clicked = function(x, y, chip) {

    for (var i = 0; i < cb_paletteClicked_c; i++) {
      cb_paletteClicked[i](x, y, chip);
    }
  };
  //  コールバック：パレット内動かした時
  var callBack_plt1Moved = function(x, y, chip) {

    for (var i = 0; i < cb_paletteMoved_c; i++) {
      cb_paletteMoved[i](x, y, chip);
    }
  };
  //  コールバック：エディタをクリックした時
  var callBack_edtClicked = function(x, y, chip) {

    for (var i = 0; i < cb_editorClicked_c; i++) {
      cb_editorClicked[i](x, y, chip);
    }
  };
  //  コールバック：エディタ内動かした時
  var callBack_edtMoved = function(x, y, chip) {
    for (var i = 0; i < cb_editorMoved_c; i++) {
      cb_editorMoved[i](x, y, chip);
    }
  };

  //  コールバック：JSONの読み込みが完了した時
  var callBack_aftLoaded = function() {
    for (var i = 0; i < cb_afterload_c; i++) {
      cb_afterload[i]();
    }
  };

  var Editor = function(mal_prms) {
    if (mal_prms.width != null) {
      game_width = mal_prms.width;
    }
    if (mal_prms.height != null) {
      game_height = mal_prms.height;
    }
    if (mal_prms["prm-con"] != null) {
      prm_con = mal_prms["prm-con"];
    }
    if (mal_prms.mapmode != null) {
      mapmode = mal_prms.mapmode;
    }
    createEditor(game_width, game_height, mal_prms.scroll);
    createMapdata(game_width, game_height, mapmode);
    mouseEvent_edt();

  };

  var Palette = function(mal_prms) {
    if (mal_prms.width == null) {
      plt_width = 16;
    } else {
      plt_width = mal_prms.width;
    }
    if (mal_prms.height == null) {
      plt_height = 6;
    } else {
      plt_height = mal_prms.height;
    }

    parts_obj = mal_prms.parts;

    createPalette(plt_width, plt_height);

    loadImage1(mal_prms.pattern);

    mouseEvent_plt1(mal_prms.parts, plt_width, plt_height);

  };

  var SecPalette = function(mal_prms) {
    if (mal_prms.width == null) {
      plt2_width = 16;
    } else {
      plt2_width = mal_prms.width;
    }
    if (mal_prms.height == null) {
      plt2_height = 16;
    } else {
      plt2_height = mal_prms.height;
    }

    createPalette2(plt2_width, plt2_height);

    loadImage2(mal_prms.pattern);

  };



  return {
    Editor: Editor,
    Palette: Palette,
    SecPalette: SecPalette,
    drawEditor: drawEditor,
    newProject: newProject,
    setParam: setParam,
    //  イベント登録
    add: function(type, func) {
      switch (type) {
        //  パレットをクリックした時
        case "palette_clicked":
          cb_paletteClicked[cb_paletteClicked_c] = func;
          cb_paletteClicked_c++;

          break;

        case "palette_moved":
          cb_paletteMoved[cb_paletteMoved_c] = func;
          cb_paletteMoved_c++;

          break;

        case "editor_clicked":
          cb_editorClicked[cb_editorClicked_c] = func;
          cb_editorClicked_c++;

          break;

        case "editor_moved":
          cb_editorMoved[cb_editorMoved_c] = func;
          cb_editorMoved_c++;

          break;
        case "after_loaded":
          cb_afterLoad[cb_afterLoad_c] = func;
          cb_afterLoad_c++;

          break;

      }

    },

    showGrid: function(mode) {
      var cvs_c0 = document.getElementById("c0");
      var ctx_c0 = cvs_c0.getContext("2d");
      switch (mode) {
        case 0:
          ctx_c0.clearRect(0, 0, game_width * 32, game_height * 32);
          break;

        case 1:
          ctx_c0.clearRect(0, 0, game_width * 32, game_height * 32);
          ctx_c0.beginPath();
          ctx_c0.fillStyle = "rgb(" + [255, 255, 255] + ")";
          for (var i = 1; i < game_width * 32; i++) {
            ctx_c0.moveTo(i * 32, 0);
            ctx_c0.lineTo(i * 32, 960);
          }
          for (var i = 1; i < game_height * 32; i++) {
            ctx_c0.moveTo(0, i * 32);
            ctx_c0.lineTo(5760, i * 32);
          }
          ctx_c0.stroke();
          break;
      }
      return;
    },

    getParamsData: function() {
      var data = getParams();
      var params = "";
      params = "new CanvasMasao.Game({\n" + data[0] + "});\n";
      console.log(params);
      return params;
    },

    scrollEditor: function(direction, block) {
      var edt = document.getElementById("mal_editor");
      block = block * 32;
      switch (direction) {
        case "left":
          edt.scrollBy(block * -1, 0);
          break;
        case "right":
          edt.scrollBy(block, 0);
          break;
        case "up":
          edt.scrollBy(0, block * -1);
          break;
        case "down":
          edt.scrollBy(0, block);
          break;
      }
      return;
    },

    clearEditor: function(x, y, w, h, layer) {
      var cvs_c1 = document.getElementById("c1");
      var ctx_c1 = cvs_c1.getContext("2d");
      var cvs_c2 = document.getElementById("c2");
      var ctx_c2 = cvs_c2.getContext("2d");
      switch(layer){
        case 1:
          ctx_c1.clearRect(x*32, y*32, w*32, h*32);
          for (var i = 0; i < w; i++) {
            for (var i2 = 0; i2 < h; i2++) {
              if (x + i < 60) {
                map0[y + i2][x + i] = ".";
              } else if (x + i > 59 && x + i < 120) {
                map1[y + i2][x + i - 60] = ".";
              } else if (x + i > 119 && x + i < 180) {
                map2[y + i2][x + i - 120] = ".";
              }
            }

          }

        break;

      }
      return;
    },
    //  デフォルトのParamを取得
    getDefaultParams: function() {
      return def_params;
    },
    //  エディターの設定を動的変更
    setEditorConfig: function(name, value) {
      switch(name){
        case "prm-con":
          prm_con = value;
        break;

        case "mapmode":
          mapmode = value;
        break;

        case "scroll":
          //
        break;
      }

      return;
    },

    setEditMode: function(mode){
      pen = mode;
    },
    getNowChip: function(){
      return chip1;
    },
    getNowChip2: function(){
      return chip2;
    },

    getParamsAll: function(){
      var data = "{" + getConfig(0) + "}";
      return JSON.parse(data);
    },

    getParam: function(key){
      var data = "{" + getConfig(0) + "}";
      var data2 = JSON.parse(data);
      return data2[key];
    },

    getJSON: function(title,auther,editor,url){
      var meta = {};
      if (title != 0 && title != null) {
        meta.title = title;
      }
      if (auther != 0 && auther != null) {
        meta.auther = auther;
      }
      if (editor != 0 && editor != null) {
        meta.editor = editor;
      }else {
        meta.editor = "MasaoApp Library: " + msapp_v;
      }
      if (url != 0 && url != null) {
        meta.url = url;
      }


      var params = getParams();
      var obj = JSON.stringify(params[0]);
      var version = ms_version;
      var jsondata = {"masao-json-format-version": "draft-4", "version":version, "metadata":meta, "params":params[1]};
      console.log(jsondata);
      return JSON.stringify(jsondata);
    },

    loadJSON: function(jsondata){
      mc_load(jsondata);
    },
    getMasaoVersion: function(){
      return ms_version;
    },
    version: function(){
      return msapp_v;
    }

  };

}(window));
