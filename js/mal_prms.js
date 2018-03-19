//InitialValue.jsを元に制作したParamデータの説明
//2018/3/19 1.0

var mal_prms = (function() {

var option_prm = {
  "stage_max": {
    "genr": 0,
    "description": "ステージ数",
    "type": "integer"
  },
  "stage_kaishi": {
    "genr": 0,
    "description": "開始ステージ<br><em>（デバッグ用）</em>",
    "type": "integer"
  },
  "jibun_left_shoki": {
    "genr": 0,
    "description": "残りの人数",
    "type": "integer"
  },
  "score_1up_1": {
    "genr": 0,
    "description": "１ｕｐする得点<br>２ステージ以上の構成で有効<br>0 だと設定なし",
    "type": "integer"
  },
  "score_1up_2": {
    "genr": 0,
    "type": "integer"
  },
  "stage_select": {
    "genr": 0,
    "description": "ステージの選択<br>1  順番にクリアー<br>2  地図画面で選ぶ",
    "type": "integer"
  },
  "url1": {
    "genr": 0,
    "description": "リンク土管１の移動先",
    "type": "string"
  },
  "url2": {
    "genr": 0,
    "description": "リンク土管２の移動先",
    "type": "string"
  },
  "url3": {
    "genr": 0,
    "description": "リンク土管３の移動先",
    "type": "string"
  },
  "url4": {
    "genr": 0,
    "description": "リンク土管４の移動先",
    "type": "string"
  },
  "dokan_mode": {
    "genr": 0,
    "description": "土管モード<br>1  リンク土管<br>2  ワープ土管",
    "type": "integer"
  },
  "game_speed": {
    "genr": 0,
    "description": "ゲームの進行スピード<br>  １フレームにおける待ち時間を、設定します。<br>  数字が大きいほど遅くなり、<br>  デフォルトは、 70 です。",
    "type": "integer"
  },
  "variable_sleep_time": {
    "genr": 0,
    "description": "",
    "type": "integer"
  },
  "sleep_time_visible": {
    "genr": 0,
    "description": "",
    "type": "integer"
  },
  "pause_switch": {
    "genr": 0,
    "description": "ポーズ機能<br>1  使わない<br>2  使う",
    "type": "integer"
  },
  "time_max": {
    "genr": 1,
    "description": "制限時間<br>0 を設定すると無制限",
    "type": "integer"
  },
  "scroll_mode": {
    "genr": 1,
    "description": "スクロールモード（ステージ１）<br>1  全方向スクロール<br>2  強制スクロール<br>3  高速強制スクロール",
    "type": "integer"
  },
  "scroll_mode_s": {
    "genr": 1,
    "description": "スクロールモード（ステージ２）",
    "type": "integer"
  },
  "scroll_mode_t": {
    "genr": 1,
    "description": "スクロールモード（ステージ３）",
    "type": "integer"
  },
  "scroll_mode_f": {
    "genr": 1,
    "description": "スクロールモード（ステージ４）",
    "type": "integer"
  },
  "scroll_area": {
    "genr": 1,
    "description": "スクロールする範囲<br>1  全部<br>2  左下  １画面分<br>3  左下  横２画面分<br>4  左下  縦２画面分<br>5  左下  ４画面分",
    "type": "integer"
  },
  "view_move_type": {
    "genr": 1,
    "description": "表示領域の動き方<br>1  右進行用の視界<br>2  左進行用の視界",
    "type": "integer"
  },
  "suberuyuka_hkf": {
    "genr": 1,
    "description": "すべる床<br>1  ドリル等で破壊できる<br>2  破壊できない",
    "type": "integer"
  },
  "clear_type": {
    "genr": 1,
    "description": "ステージクリアー条件<br>1  星を取る<br>2  コインを全部取ると星出現  星を取る<br>3  コインを全部取ると、星の位置に脱出ハシゴ出現。画面の上へ出る。背景レイヤーを表示しても、ハシゴ、坂道、下から通れるブロックを表示します。",
    "type": "integer"
  },
  "easy_mode": {
    "genr": 2,
    "description": "イージーモード<br>1  ノーマルモード<br>2  敵の端を踏んでも倒せる",
    "type": "integer"
  },
  "j_tail_type": {
    "genr": 2,
    "description": "しっぽの特徴<br>1  敵を倒せる<br>2  ブロック１を壊せる<br>3  敵を倒せてブロック１を壊せる",
    "type": "integer"
  },
  "j_tail_hf": {
    "genr": 2,
    "description": "しっぽの標準装備<br>1  しない<br>2  する",
    "type": "integer"
  },
  "j_fire_mkf": {
    "genr": 2,
    "description": "ファイヤーボール<br>1  水中で消える<br>2  水中でも使える",
    "type": "integer"
  },
  "grenade_type": {
    "genr": 2,
    "description": "グレネード<br>1  グレネード    ボスを倒せる<br>2  グレネード    ボスには効かない<br>3  エネルギー砲  ボスを倒せる<br>4  エネルギー砲  ボスには効かない<br>5  プラズマ砲    ボスを倒せる<br>6  プラズマ砲    ボスには効かない<br>7  夢想封印<br>8  ファイヤーボールを発射<br>9  ブロック１破壊砲",
    "type": "integer"
  },
  "j_tokugi": {
    "genr": 2,
    "description": "主人公の特技<br>1  なし<br>2  落ちるのが遅い<br>3  空中で下ボタンを押すと急降下<br>4  全速体当たりで敵を倒せる<br>5  空中の左右加速度が高い<br>6  壁キック<br>7  ファイヤーボールが水平に飛ぶ<br>8  空中でもう１回ジャンプできる<br>9  速く走れる<br>10 ジャンプできない<br>11 スーパージャンプで高く跳べる<br>12 ジャンプできない  Z,X キーで穴掘り<br>13 ジャンプできない走れない    穴掘り<br>14 横スクロールシューティングゲーム用<br>15 ４方向移動<br>16 壁ジャンプ<br>17 ＨＰ３  １ｕｐキノコで回復<br>18 ひたすら右へ歩く<br>19 ひたすら右へ走る",
    "type": "integer"
  },
  "j_fire_equip": {
    "genr": 2,
    "description": "ファイヤーボールの標準装備<br>1  しない<br>2  する",
    "type": "integer"
  },
  "j_fire_type": {
    "genr": 2,
    "description": "ファイヤーボールの種類（初期値）<br>1  跳ねる<br>2  水平に飛ぶ<br>3  水平に飛ぶ  短射程<br>4  ダブル",
    "type": "integer"
  },
  "j_enemy_press": {
    "genr": 2,
    "description": "雑魚敵を踏めるか<br>1  踏める<br>2  踏めない<br>3  当たり判定なし",
    "type": "integer"
  },
  "j_add_tokugi": {
    "genr": 2,
    "description": "追加用の主人公特技<br>1   なし<br>2   ドリル<br>3   落ちるのが遅い<br>4   下キーを押すと急降下<br>5   全速体当たりで敵を倒せる<br>6   空中の左右加速度が高い<br>7   速く走れる<br>8   走れない<br>9   空中でもう１回ジャンプできる<br>10  壁キック<br>11  壁ジャンプ<br>12  ジャンプ時にファイヤーボールが出ない<br>13  ジャンプの高さを固定  小<br>14  ジャンプの高さを固定  小中<br>15  ジャンプの高さを固定  中<br>16  ジャンプの高さを固定  大<br>17  しっぽ 敵を倒せる<br>18  しっぽ ブロック１を壊せる<br>19  しっぽ 敵を倒せてブロック１を壊せる<br>20  ファイヤーボール 跳ねる<br>21  ファイヤーボール 水平に飛ぶ<br>22  ファイヤーボール ダブル<br>23  ファイヤーボール 水平に飛ぶ 短射程<br>24  ファイヤーボール ホーミングアミュレット<br>25  昇龍拳（効果音はジェット）（↑キーを押しながらＺキー）<br>26  サイコクラッシャーアタック（効果音は噴火）（↓キーを押しながらＺキー）<br>27  ロケット頭突き（効果音はグレネード）（↓キーを押しながらＺキー）<br>28  スカイアッパー（効果音はグレネード）（↑キーを押しながらＺキー）<br>29  流星キック（効果音は水の波動）（空中で↓キー）<br>30  ヘルメット",
    "type": "integer"
  },
  "j_add_tokugi2": {
    "genr": 2,
    "type": "integer"
  },
  "j_add_tokugi3": {
    "genr": 2,
    "type": "integer"
  },
  "j_add_tokugi4": {
    "genr": 2,
    "type": "integer"
  },
  "dengeki_mkf": {
    "genr": 3,
    "description": "ピカチー<br>1  電撃  水中で消える<br>2  電撃  水中でも使える<br>3  みずでっぽう  水平発射<br>4  電撃３発<br>5  プラズマ砲",
    "type": "integer"
  },
  "yachamo_kf": {
    "genr": 3,
    "description": "ヤチャモ<br>1  火の粉で攻撃<br>2  何もしない<br>3  グレネード<br>4  はっぱカッター３発<br>5  プラズマ砲<br>6  火の粉  速射<br>7  火の粉  ３連射<br>8  破壊光線<br>9  破壊光線  右へ発射",
    "type": "integer"
  },
  "airms_kf": {
    "genr": 3,
    "description": "エアームズ<br>1  壁に当たると止まる<br>2  壁に当たると向きを変える<br>3  その場で爆弾投下<br>4  その場でグレネード投下<br>5  左右に動いて爆弾投下",
    "type": "integer"
  },
  "mizutaro_attack": {
    "genr": 3,
    "description": "ミズタロウ<br>1  みずでっぽう<br>2  はっぱカッター３発<br>3  電撃<br>4  みずでっぽう  水平発射<br>5  ハリケンブラスト",
    "type": "integer"
  },
  "poppie_attack": {
    "genr": 3,
    "description": "ポッピー直進<br>1  直進<br>2  火の粉<br>3  火の粉  ３連射<br>4  バブル光線３発<br>5  ハリケンブラスト",
    "type": "integer"
  },
  "mariri_attack": {
    "genr": 3,
    "description": "マリリ<br>1  ジャンプで進む<br>2  その場でジャンプ<br>3  左右にジャンプ<br>4  左右移動<br>5  体当たり",
    "type": "integer"
  },
  "chikorin_attack": {
    "genr": 3,
    "description": "チコリン<br>1  はっぱカッター<br>2  ヒノララシを８匹投げる<br>3  ヒノララシを無限に投げる<br>4  マリリを８匹投げる<br>5  マリリを無限に投げる<br>6  はっぱカッター  地形で消える<br>7  はっぱカッター  乱れ射ち<br>8  ソーラービーム<br>9  ソーラービーム  右へ発射",
    "type": "integer"
  },
  "taiking_attack": {
    "genr": 3,
    "description": "タイキング<br>1  左右移動  水中専用<br>2  はねる<br>3  縄張りをまもる<br>4  左回り<br>5  右回り",
    "type": "integer"
  },
  "kuragesso_attack": {
    "genr": 3,
    "description": "クラゲッソ<br>1  バブル光線  水中専用<br>2  近づくと落ちる<br>3  縄張りを守る<br>4  左回り<br>5  右回り",
    "type": "integer"
  },
  "boss_type": {
    "genr": 3,
    "description": "グラーダ<br>1  噴火<br>2  亀を投げる<br>3  ヒノララシを投げる<br>4  マリリを投げる<br>5  がんせきほう",
    "type": "integer"
  },
  "boss2_type": {
    "genr": 3,
    "description": "カイオール<br>1  水の波動<br>2  バブル光線<br>3  うずしお<br>4  バブル光線連射<br>5  ハリケンブラスト<br>6  バブル光線回転連射<br>7  何もしない<br>8  水の波動  直進",
    "type": "integer"
  },
  "boss3_type": {
    "genr": 3,
    "description": "センクウザ<br>1  グレネード<br>2  バリアを張って体当たり<br>3  バリアを張って高速体当たり<br>4  バリアを張ってジャンプ<br>5  りゅうせいぐん<br>6  回転体当たり<br>7  高速回転体当たり<br>8  回転ジャンプ",
    "type": "integer"
  },
  "boss_destroy_type": {
    "genr": 3,
    "description": "ボスの倒し方<br>1  ３回踏む<br>2  ファイヤーボール，しっぽ",
    "type": "integer"
  },
  "boss_hp_max": {
    "genr": 3,
    "description": "ボスのＨＰ<br>（設定項目「ボスの倒し方」で 2 を指定した場合のみ有効）",
    "type": "integer"
  },
  "j_tail_ap_boss": {
    "genr": 3,
    "description": "しっぽの攻撃力<br>（設定項目「ボスの倒し方」で 2 を指定した場合のみ有効）",
    "type": "integer"
  },
  "boss_name": {
    "genr": 3,
    "description": "ボスのＨＰゲージに表示する名前",
    "type": "string"
  },
  "boss2_name": {
    "genr": 3,
    "type": "integer"
  },
  "boss3_name": {
    "genr": 3,
    "type": "integer"
  },
  "ugokuyuka1_type": {
    "genr": 4,
    "description": "仕掛けパーツ設定<br>1  （そのまま）<br>2  乗ると落ちる<br>3  ずっと乗っていると落ちる<br>4  左回り<br>5  右回り<br>6  乗れるカイオール<br>7  ジャンプ台<br>8  上ドッスンスン<br>9  左ドッスンスン<br>10  右ドッスンスン<br>11  跳ねるドッスンスン<br>12  上がらないドッスンスン<br>13  エレベータードッスンスン  上<br>14  エレベータードッスンスン  下<br>15  上下ドッスンスン<br>16  左右ドッスンスン<br>17  ロングレンジドッスンスン<br>18  ファイヤーバー２本<br>19  ファイヤーバー３本  左回り<br>20  ファイヤーバー３本  右回り<br>21  隠しブロック<br>22  右にブロック１が出る<br>23  左にブロック１が出る<br>24  上にハシゴが出る<br>25  シーソー<br>26  シーソー  左が下<br>27  シーソー  右が下<br>28  ブランコ<br>29  ブランコ  ２個連続<br>30  スウィングバー  左<br>31  スウィングバー  右<br>32  スウィングファイヤーバー  左<br>33  スウィングファイヤーバー  右<br>34  上にブロック１が出る<br>35  上にブロック１が２つ出る<br>36  右にブロック１が２つ出る<br>37  左にブロック１が２つ出る<br>38  ジャンプ台が出る<br>39  トゲが出る<br>40  周囲のトゲをコインに変換<br>41  周囲のトゲをブロック１に変換<br>42  周囲のブロック１をコインに変換<br>43  周囲のブロック４を消去<br>44  お店<br>45  ヘルメットかドリルをくれる人<br>46  グレネードかジェットをくれる人<br>47  ファイヤーウォール  上へ伸びる<br>48  ファイヤーウォール  下へ伸びる<br>49  ファイヤーウォール  左へ伸びる<br>50  ファイヤーウォール  右へ伸びる<br>51  ファイヤーウォール  壁まで上下<br>52  ファイヤーウォール  壁まで左右<br>53  壁まで上下移動するドッスンスン<br>54  壁まで左右移動するドッスンスン<br>55  乗ると左右移動するドッスンスン<br>56  火山<br>57  逆火山<br>58  動くＴ字型<br>59  動くＴ字型  ２個連続<br>60  ロープ<br>61  ロープ  ２本連続<br>62  乗れるカイオール  方向キーで移動<br>63  ファイヤーウォール  上へ速射<br>64  ファイヤーウォール  下へ速射<br>65  ファイヤーウォール  左へ速射<br>66  ファイヤーウォール  右へ速射<br>67  得点で開く扉<br>68  コインを全部取ると開く扉<br>69  周囲１０パーツ以内のコインを全部取ると開く扉<br>70  左１５パーツ以内の雑魚敵を全部倒すと開く扉<br>71  人間大砲  右向き<br>72  人間大砲  左向き<br>73  人間大砲  天井<br>74  人間大砲  右の壁<br>75  人間大砲  左の壁<br>76  高性能ジャンプ台<br>77  左へ飛ばすバネ<br>78  右へ飛ばすバネ<br>79  スポット処理  小<br>80  スポット処理  中<br>81  スポット処理  大<br>82  スポット処理  終了<br>83  スポット処理  範囲拡大アイテム<br>84  人食いワカメ  上へ拡大縮小<br>85  人食いワカメ  下へ拡大縮小<br>86  人食いワカメ  中央から拡大縮小<br>87  ファイヤーボール  水平に飛ぶ<br>88  ファイヤーボール  跳ねる<br>89  ファイヤーボール  ダブル<br>90  ファイヤーボールセレクトの人<br>91  ブロック１破壊砲発射  右<br>92  ブロック１破壊砲発射  左<br>93  ブロック１破壊砲発射  上<br>94  ブロック１破壊砲発射  下<br>95  グレネード５発<br>96  回転するドッスンスン  左回り<br>97  回転するドッスンスン  右回り<br>98  回転する巨大ドッスンスン  左回り<br>99  回転する巨大ドッスンスン  右回り<br>100  画面内で右強制スクロール<br>101  画面内で左強制スクロール<br>102  画面内で上強制スクロール<br>103  画面内で下強制スクロール<br>104  画面内で右上強制スクロール<br>105  画面内で右下強制スクロール<br>106  画面内で左上強制スクロール<br>107  画面内で左下強制スクロール<br>108  スクロールスピードアップ<br>109  スクロールスピードダウン<br>110  画面内で全方向スクロール<br>111  画面内でスクロール停止<br>112  自分が重なると右強制スクロール<br>113  自分が重なると上強制スクロール<br>114  自分が重なると全方向スクロール<br>115  画面内で横固定縦自由スクロール<br>116  画面内で右強制縦自由スクロール<br>117  画面内で左進行用の視界<br>118  画面内で右進行用の視界<br>119  曲線による上り坂<br>120  曲線による下り坂<br>121  曲線による上り坂  線のみ<br>122  曲線による下り坂  線のみ<br>123  乗れる円<br>124  乗れる円  大<br>125  乗れる半円<br>126  乗れる半円  線のみ<br>127  人口太陽  左回り<br>128  人口太陽  右回り<br>129  人口太陽  棒５本  左回り<br>130  人口太陽  棒５本  右回り<br>131  ファイヤーリング  左回り<br>132  ファイヤーリング  右回り<br>133  上下移動する半円  下から<br>134  上下移動する半円  上から<br>135  乗ると上がる半円<br>136  乗ると下がる半円<br>137  柱付きの半円<br>138  乗ると下がる円<br>139  乗ると下がる円  降りると上がる<br>140  上下移動する円  上から<br>141  上下移動する円  下から<br>142  ファイヤーリング２本  左回り<br>143  ファイヤーリング２本  右回り<br>144  ファイヤーリング２本  高速左回り<br>145  ファイヤーリング２本  高速右回り<br>146  落ちるだけのドッスンスン<br>147  動かないドッスンスン<br>148  左右へ押せるドッスンスン<br>149  上へ押せるドッスンスン<br>150  その場で跳ねるドッスンスン<br>151  長いロープ<br>152  長いロープ  右から<br>153  長いロープ  つかまると動く<br>154  長いロープ  つかまると左から動く<br>155  左向きのトゲ４つ<br>156  右向きのトゲ４つ<br>157  左右へ押せるドッスンスンのゴール<br>ここへ全部持って行くとクリア<br>158  左右へ押せるドッスンスンのゴール<br>ロック機能付き<br>159  右へ一方通行<br>160  左へ一方通行<br>161  上へ一方通行<br>162  下へ一方通行<br>163  右へ一方通行  表示なし<br>164  左へ一方通行  表示なし<br>165  上へ一方通行  表示なし<br>166  下へ一方通行  表示なし<br>167  ゆれる棒<br>168  ゆれる棒  左から<br>169  ゆれる棒  広角<br>170  ゆれる棒  広角  左から<br>171  跳ねる円<br>172  跳ねる円  大<br>173  下向きワープ土管１<br>174  下向きワープ土管２<br>175  下向きワープ土管３<br>176  下向きワープ土管４<br>177  下向き土管１  上向き１につながる<br>178  下向き土管２  上向き２につながる<br>179  下向き土管３  上向き３につながる<br>180  下向き土管４  上向き４につながる<br>181  コンティニュー  残り人数のみ<br>182  ？ブロック  コンティニュー<br>183  左向き土管１  左右１につながる<br>184  左向き土管２  左右２につながる<br>185  左向き土管３  左右３につながる<br>186  左向き土管４  左右４につながる<br>187  右向き土管１  左右１につながる<br>188  右向き土管２  左右２につながる<br>189  右向き土管３  左右３につながる<br>190  右向き土管４  左右４につながる<br>191  スイッチ  重なるとＯＮ／ＯＦＦ  周囲１０ブロック以内に影響<br>192  スイッチ  ↑キーでＯＮ／ＯＦＦ  周囲１０ブロック以内に影響<br>193  スイッチ式の扉  ＯＮで開く<br>194  スイッチ式の扉  ＯＮで閉まる<br>195  スイッチ式トゲ  ＯＮでブロック４<br>196  スイッチ式トゲ  ＯＦＦでブロック４<br>197  スイッチ式トゲ  ＯＮで消える<br>198  スイッチ式トゲ  ＯＮで出現<br>199  スイッチ式ハシゴ  ＯＮで消える<br>200  スイッチ式ハシゴ  ＯＮで出現<br>201  スイッチ式電撃バリア縦  ＯＮで消える<br>202  スイッチ式電撃バリア縦  ＯＮで出現<br>203  スイッチ式電撃バリア横  ＯＮで消える<br>204  スイッチ式電撃バリア横  ＯＮで出現<br>205  スイッチ式動く床  ＯＮで上<br>206  スイッチ式動く床  ＯＮで下<br>207  スイッチ式動く床  ＯＮで右<br>208  スイッチ式動く床  ＯＮで左<br>209  スイッチ式長く動く床  ＯＮで上<br>210  スイッチ式長く動く床  ＯＮで右<br>211  スイッチ  重なるとＯＮ／ＯＦＦ  周囲５ブロック以内に影響<br>212  スイッチ  ↑キーでＯＮ／ＯＦＦ  周囲５ブロック以内に影響<br>213  ？ブロック  ＯＮの動作  周囲１０ブロック以内に影響<br>214  ？ブロック  ＯＦＦの動作  周囲１０ブロック以内に影響<br>215  ？ブロック  ＯＮの動作  周囲５ブロック以内に影響<br>216  ？ブロック  ＯＦＦの動作  周囲５ブロック以内に影響<br>217  連動スイッチ  重なるとＯＮ／ＯＦＦ  マップ全体に影響  同スイッチへ連動<br>218  連動スイッチ  ↑キーでＯＮ／ＯＦＦ  マップ全体に影響  同スイッチへ連動<br>219  スイッチ式ファイヤーバー  上から左<br>220  スイッチ式ファイヤーバー  上から右<br>221  スイッチ式ファイヤーバー  左から上<br>222  スイッチ式ファイヤーバー  右から上<br>223  スイッチ式ファイヤーバー  左から下<br>224  スイッチ式ファイヤーバー  右から下<br>225  スイッチ式ファイヤーバー  下から左<br>226  スイッチ式ファイヤーバー  下から右<br>227  スイッチ式ファイヤーバー  右から左回り<br>228  スイッチ式ファイヤーバー  左から右回り<br>229  スイッチ式ファイヤーバー  右から右回り<br>230  スイッチ式ファイヤーバー  左から左回り<br>231  スイッチ式ファイヤーバー  上から左回り<br>232  スイッチ式ファイヤーバー  上から右回り<br>233  スイッチ式ファイヤーバー  下から右回り<br>234  スイッチ式ファイヤーバー  下から左回り<br>235  スイッチ式ブロック  ＯＮで消える<br>236  スイッチ式ブロック  ＯＮで出現<br>237  スイッチ式動くＴ字型  ＯＮで左<br>238  スイッチ式動くＴ字型  ＯＮで右<br>239  スイッチ式速く動くＴ字型  ＯＮで左<br>240  スイッチ式速く動くＴ字型  ＯＮで右<br>241  スイッチ式動くＴ字型  ＯＮで左から上<br>242  スイッチ式動くＴ字型  ＯＮで上から左<br>243  スイッチ式動くＴ字型  ＯＮで右から上<br>244  スイッチ式動くＴ字型  ＯＮで上から右<br>245  ＫＥＹ１<br>246  ＫＥＹ２<br>247  ＫＥＹ１で開く扉<br>248  ＫＥＹ２で開く扉<br>249  ＫＥＹ１  落ちる<br>250  ＫＥＹ２  落ちる<br>251  ＫＥＹ１が３つで開く扉<br>252  ＫＥＹ２が３つで開く扉<br>253  乗ると壊れるブロック<br>254  ＫＥＹ１が３つでＯＮの動作の人  周囲１０ブロック以内に影響<br>255  ＫＥＹ２が３つでＯＮの動作の人  周囲１０ブロック以内に影響<br>256  スイッチ式ブロック縦  ＯＮで消える<br>257  スイッチ式ブロック縦  ＯＮで出現<br>258  ファイヤーボール等で破壊  ＯＮの動作  周囲１０ブロック以内に影響<br>259  ファイヤーボール等で破壊  ＯＮの動作  周囲５ブロック以内に影響<br>260  しっぽで破壊  ＯＮの動作  周囲１０ブロック以内に影響<br>261  しっぽで破壊  ＯＮの動作  周囲５ブロック以内に影響<br>262  得点でグレネードを売る人<br>263  下キーで降りられる上り坂  背景レイヤー表示時は透明<br>264  下キーで降りられる下り坂  背景レイヤー表示時は透明<br>1001～1249  その番号-1000のマップチップ",
    "type": "integer"
  },
  "ugokuyuka2_type": {
    "genr": 4,
    "type": "integer"
  },
  "ugokuyuka3_type": {
    "genr": 4,
    "type": "integer"
  },
  "firebar1_type": {
    "genr": 4,
    "type": "integer"
  },
  "firebar2_type": {
    "genr": 4,
    "type": "integer"
  },
  "dossunsun_type": {
    "genr": 4,
    "type": "integer"
  },
  "coin1_type": {
    "genr": 4,
    "type": "integer"
  },
  "coin3_type": {
    "genr": 4,
    "type": "integer"
  },
  "dokan1_type": {
    "genr": 4,
    "type": "integer"
  },
  "dokan2_type": {
    "genr": 4,
    "type": "integer"
  },
  "dokan3_type": {
    "genr": 4,
    "type": "integer"
  },
  "dokan4_type": {
    "genr": 4,
    "type": "integer"
  },
  "door_score": {
    "genr": 4,
    "description": "得点で開く扉に必要な得点",
    "type": "integer"
  },
  "hitokoto1_name": {
    "genr": 5,
    "description": "一言メッセージ１  名前",
    "type": "string"
  },
  "hitokoto1-1": {
    "genr": 5,
    "description": "一言メッセージ１  セリフ<br>セリフの不要な行は、 \"0\" と指定して下さい。",
    "type": "string"
  },
  "hitokoto1-2": {
    "genr": 5,
    "type": "integer"
  },
  "hitokoto1-3": {
    "genr": 5,
    "type": "integer"
  },
  "hitokoto2_name": {
    "genr": 5,
    "description": "一言メッセージ２  名前",
    "type": "string"
  },
  "hitokoto2-1": {
    "genr": 5,
    "description": "一言メッセージ２  セリフ",
    "type": "string"
  },
  "hitokoto2-2": {
    "genr": 5,
    "type": "integer"
  },
  "hitokoto2-3": {
    "genr": 5,
    "type": "integer"
  },
  "hitokoto3_name": {
    "genr": 5,
    "description": "一言メッセージ３  名前",
    "type": "string"
  },
  "hitokoto3-1": {
    "genr": 5,
    "description": "一言メッセージ３  セリフ",
    "type": "string"
  },
  "hitokoto3-2": {
    "genr": 5,
    "type": "integer"
  },
  "hitokoto3-3": {
    "genr": 5,
    "type": "integer"
  },
  "hitokoto4_name": {
    "genr": 5,
    "description": "一言メッセージ４  名前",
    "type": "string"
  },
  "hitokoto4-1": {
    "genr": 5,
    "description": "一言メッセージ４  セリフ",
    "type": "string"
  },
  "hitokoto4-2": {
    "genr": 5,
    "type": "integer"
  },
  "hitokoto4-3": {
    "genr": 5,
    "type": "integer"
  },
  "shop_name": {
    "genr": 6,
    "description": "店の名前",
    "type": "string"
  },
  "serifu5-1": {
    "genr": 6,
    "description": "店のセリフ  購入前<br>セリフの不要な行は、 \"0\" と指定して下さい。",
    "type": "string"
  },
  "serifu5-2": {
    "genr": 6,
    "type": "integer"
  },
  "serifu5-3": {
    "genr": 6,
    "type": "integer"
  },
  "serifu8-1": {
    "genr": 6,
    "description": "店のセリフ  購入後",
    "type": "string"
  },
  "serifu8-2": {
    "genr": 6,
    "type": "integer"
  },
  "serifu8-3": {
    "genr": 6,
    "type": "integer"
  },
  "shop_serifu1": {
    "genr": 6,
    "description": "店のセリフ  選択させる",
    "type": "string"
  },
  "shop_serifu2": {
    "genr": 6,
    "description": "店のセリフ  購入直前<br>「（アイテム名）<u>○○○</u>」",
    "type": "string"
  },
  "shop_serifu3": {
    "genr": 6,
    "description": "店のセリフ  選択肢「はい」",
    "type": "string"
  },
  "shop_serifu4": {
    "genr": 6,
    "description": "店のセリフ  選択肢「いいえ」",
    "type": "string"
  },
  "shop_serifu5": {
    "genr": 6,
    "description": "店のセリフ  購入直後<br>「（アイテム名）<u>○○○</u>」",
    "type": "string"
  },
  "shop_serifu6": {
    "genr": 6,
    "description": "店のセリフ  得点が足りない",
    "type": "string"
  },
  "shop_item_name1": {
    "genr": 6,
    "description": "店にあるアイテムの名前<br>必ず、この順番で表示されます。<br>順番を変更しても、実際の効果は変更されません。<br>例：「グレネード３発」の位置に「制限時間増加」と記述しても、「グレネード３発」の効果となります。",
    "type": "string"
  },
  "shop_item_name2": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_name3": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_name4": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_name5": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_name6": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_name7": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_name8": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_name9": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_teika1": {
    "genr": 6,
    "description": "店にあるアイテムの値段<br>0 を指定するとなくなる",
    "type": "integer"
  },
  "shop_item_teika2": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_teika3": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_teika4": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_teika5": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_teika6": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_teika7": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_teika8": {
    "genr": 6,
    "type": "integer"
  },
  "shop_item_teika9": {
    "genr": 6,
    "type": "integer"
  },
  "fs_name": {
    "genr": 6,
    "description": "ファイヤーボールセレクトの人  名前",
    "type": "string"
  },
  "serifu7-1": {
    "genr": 6,
    "description": "ファイヤーボールセレクトの人のセリフ  選択前",
    "type": "string"
  },
  "serifu7-2": {
    "genr": 6,
    "type": "integer"
  },
  "serifu7-3": {
    "genr": 6,
    "type": "integer"
  },
  "fs_serifu1": {
    "genr": 6,
    "description": "ファイヤーボールセレクトの人のセリフ  選択させる",
    "type": "string"
  },
  "fs_item_name1": {
    "genr": 6,
    "description": "ファイヤーボールセレクトの人のセリフ  アイテム名",
    "type": "string"
  },
  "fs_item_name2": {
    "genr": 6,
    "type": "integer"
  },
  "fs_item_name3": {
    "genr": 6,
    "type": "integer"
  },
  "fs_serifu2": {
    "genr": 6,
    "description": "ファイヤーボールセレクトの人のセリフ  選択後<br>「（アイテム名）<u>○○</u>」",
    "type": "string"
  },
  "serifu_key1_on_name": {
    "genr": 6,
    "description": "ＫＥＹ１でＯＮの動作の人  名前",
    "type": "string"
  },
  "serifu_key1_on-1": {
    "genr": 6,
    "description": "ＫＥＹ１でＯＮの動作の人のセリフ  渡す前",
    "type": "string"
  },
  "serifu_key1_on-2": {
    "genr": 6,
    "type": "integer"
  },
  "serifu_key1_on-3": {
    "genr": 6,
    "type": "integer"
  },
  "serifu_key1_on-4": {
    "genr": 6,
    "description": "ＫＥＹ１でＯＮの動作の人のセリフ  選択させる",
    "type": "string"
  },
  "serifu_key1_on-5": {
    "genr": 6,
    "description": "ＫＥＹ１でＯＮの動作の人のセリフ  選択肢「はい」",
    "type": "string"
  },
  "serifu_key1_on-6": {
    "genr": 6,
    "description": "ＫＥＹ１でＯＮの動作の人のセリフ  選択肢「いいえ」",
    "type": "string"
  },
  "serifu_key1_on-7": {
    "genr": 6,
    "description": "ＫＥＹ１でＯＮの動作の人のセリフ  ＫＥＹ１がない",
    "type": "string"
  },
  "serifu_key1_on-8": {
    "genr": 6,
    "description": "ＫＥＹ１でＯＮの動作の人のセリフ  渡した後",
    "type": "string"
  },
  "serifu_key1_on-9": {
    "genr": 6,
    "type": "integer"
  },
  "serifu_key1_on-10": {
    "genr": 6,
    "type": "integer"
  },
  "key1_on_count": {
    "genr": 6,
    "description": "ＫＥＹ１でＯＮの動作の人  必要なＫＥＹ１の数",
    "type": "integer"
  },
  "serifu_key2_on_name": {
    "genr": 6,
    "description": "ＫＥＹ２でＯＮの動作の人  名前",
    "type": "string"
  },
  "serifu_key2_on-1": {
    "genr": 6,
    "description": "ＫＥＹ２でＯＮの動作の人のセリフ  渡す前",
    "type": "string"
  },
  "serifu_key2_on-2": {
    "genr": 6,
    "type": "integer"
  },
  "serifu_key2_on-3": {
    "genr": 6,
    "type": "integer"
  },
  "serifu_key2_on-4": {
    "genr": 6,
    "description": "ＫＥＹ２でＯＮの動作の人のセリフ  選択させる",
    "type": "string"
  },
  "serifu_key2_on-5": {
    "genr": 6,
    "description": "ＫＥＹ２でＯＮの動作の人のセリフ  選択肢「はい」",
    "type": "string"
  },
  "serifu_key2_on-6": {
    "genr": 6,
    "description": "ＫＥＹ２でＯＮの動作の人のセリフ  選択肢「いいえ」",
    "type": "string"
  },
  "serifu_key2_on-7": {
    "genr": 6,
    "description": "ＫＥＹ２でＯＮの動作の人のセリフ  ＫＥＹ２がない",
    "type": "string"
  },
  "serifu_key2_on-8": {
    "genr": 6,
    "description": "ＫＥＹ２でＯＮの動作の人のセリフ  渡した後",
    "type": "string"
  },
  "serifu_key2_on-9": {
    "genr": 6,
    "type": "integer"
  },
  "serifu_key2_on-10": {
    "genr": 6,
    "type": "integer"
  },
  "key2_on_count": {
    "genr": 6,
    "description": "ＫＥＹ２でＯＮの動作の人  必要なＫＥＹ２の数",
    "type": "integer"
  },
  "serifu_grenade_shop_name": {
    "genr": 6,
    "description": "得点でグレネードを売る人  名前",
    "type": "string"
  },
  "serifu_grenade_shop-1": {
    "genr": 6,
    "description": "得点でグレネードを売る人のセリフ  購入前",
    "type": "string"
  },
  "serifu_grenade_shop-2": {
    "genr": 6,
    "type": "integer"
  },
  "serifu_grenade_shop-3": {
    "genr": 6,
    "type": "integer"
  },
  "serifu_grenade_shop-4": {
    "genr": 6,
    "description": "得点でグレネードを売る人のセリフ  選択させる",
    "type": "string"
  },
  "serifu_grenade_shop-5": {
    "genr": 6,
    "description": "得点でグレネードを売る人のセリフ  得点が足りない",
    "type": "string"
  },
  "serifu_grenade_shop-6": {
    "genr": 6,
    "description": "得点でグレネードを売る人のセリフ  購入直後",
    "type": "string"
  },
  "grenade_shop_score": {
    "genr": 6,
    "description": "得点でグレネードを売る人  １発の値段",
    "type": "integer"
  },
  "filename_mapchip": {
    "genr": 7,
    "description": "マップチップのファイル名",
    "type": "string"
  },
  "filename_haikei": {
    "genr": 7,
    "description": "背景画像のファイル名（ステージ１）",
    "type": "string"
  },
  "filename_haikei2": {
    "genr": 7,
    "description": "背景画像のファイル名（ステージ２）",
    "type": "string"
  },
  "filename_haikei3": {
    "genr": 7,
    "description": "背景画像のファイル名（ステージ３）",
    "type": "string"
  },
  "filename_haikei4": {
    "genr": 7,
    "description": "背景画像のファイル名（ステージ４）",
    "type": "string"
  },
  "filename_title": {
    "genr": 7,
    "description": "タイトル画面のファイル名",
    "type": "string"
  },
  "filename_ending": {
    "genr": 7,
    "description": "エンディング画面のファイル名",
    "type": "string"
  },
  "filename_gameover": {
    "genr": 7,
    "description": "ゲームオーバー画面のファイル名",
    "type": "string"
  },
  "filename_pattern": {
    "genr": 7,
    "description": "キャラクターパターンのファイル名",
    "type": "string"
  },
  "filename_chizu": {
    "genr": 7,
    "description": "地図画面の背景のファイル名",
    "type": "string"
  },
  "filename_second_haikei": {
    "genr": 7,
    "description": "セカンド画像のファイル名（ステージ１）",
    "type": "string"
  },
  "filename_second_haikei2": {
    "genr": 7,
    "description": "セカンド画像のファイル名（ステージ２）",
    "type": "string"
  },
  "filename_second_haikei3": {
    "genr": 7,
    "description": "セカンド画像のファイル名（ステージ３）",
    "type": "string"
  },
  "filename_second_haikei4": {
    "genr": 7,
    "description": "セカンド画像のファイル名（ステージ４）",
    "type": "string"
  },
  "score_v": {
    "genr": 7,
    "description": "得点の表示<br>1  表示する<br>2  しない",
    "type": "integer"
  },
  "moji_score": {
    "genr": 7,
    "description": "SCORE の文字",
    "type": "string"
  },
  "moji_highscore": {
    "genr": 7,
    "description": "HIGHSCORE の文字",
    "type": "string"
  },
  "moji_time": {
    "genr": 7,
    "description": "TIME の文字",
    "type": "string"
  },
  "moji_jet": {
    "genr": 7,
    "description": "JET の文字",
    "type": "string"
  },
  "moji_grenade": {
    "genr": 7,
    "description": "GRENADE の文字",
    "type": "string"
  },
  "moji_left": {
    "genr": 7,
    "description": "LEFT の文字",
    "type": "string"
  },
  "moji_size": {
    "genr": 7,
    "description": "文字の大きさ",
    "type": "integer"
  },
  "now_loading": {
    "genr": 7,
    "description": "起動中のメッセージ",
    "type": "string"
  },
  "backcolor_red": {
    "genr": 7,
    "description": "背景色（ステージ１）<br>ゲーム画面の背景色を、光の３原色の成分で設定します。<br>上から赤の成分、緑の成分、青の成分",
    "type": "integer"
  },
  "backcolor_green": {
    "genr": 7,
    "type": "integer"
  },
  "backcolor_blue": {
    "genr": 7,
    "type": "integer"
  },
  "backcolor_red_s": {
    "genr": 7,
    "description": "背景色（ステージ２）",
    "type": "integer"
  },
  "backcolor_green_s": {
    "genr": 7,
    "type": "integer"
  },
  "backcolor_blue_s": {
    "genr": 7,
    "type": "integer"
  },
  "backcolor_red_t": {
    "genr": 7,
    "description": "背景色（ステージ３）",
    "type": "integer"
  },
  "backcolor_green_t": {
    "genr": 7,
    "type": "integer"
  },
  "backcolor_blue_t": {
    "genr": 7,
    "type": "integer"
  },
  "backcolor_red_f": {
    "genr": 7,
    "description": "背景色（ステージ４）",
    "type": "integer"
  },
  "backcolor_green_f": {
    "genr": 7,
    "type": "integer"
  },
  "backcolor_blue_f": {
    "genr": 7,
    "type": "integer"
  },
  "kaishi_red": {
    "genr": 7,
    "description": "ステージ番号表示画面  背景色",
    "type": "integer"
  },
  "kaishi_green": {
    "genr": 7,
    "type": "integer"
  },
  "kaishi_blue": {
    "genr": 7,
    "type": "integer"
  },
  "scorecolor_red": {
    "genr": 7,
    "description": "文字の色",
    "type": "integer"
  },
  "scorecolor_green": {
    "genr": 7,
    "type": "integer"
  },
  "scorecolor_blue": {
    "genr": 7,
    "type": "integer"
  },
  "grenade_red1": {
    "genr": 7,
    "description": "グレネードの爆発とエネルギー砲の色１",
    "type": "integer"
  },
  "grenade_green1": {
    "genr": 7,
    "type": "integer"
  },
  "grenade_blue1": {
    "genr": 7,
    "type": "integer"
  },
  "grenade_red2": {
    "genr": 7,
    "description": "グレネードの爆発とエネルギー砲の色２",
    "type": "integer"
  },
  "grenade_green2": {
    "genr": 7,
    "type": "integer"
  },
  "grenade_blue2": {
    "genr": 7,
    "type": "integer"
  },
  "mizunohadou_red": {
    "genr": 7,
    "description": "水の波動（カイオールの技）の色",
    "type": "integer"
  },
  "mizunohadou_green": {
    "genr": 7,
    "type": "integer"
  },
  "mizunohadou_blue": {
    "genr": 7,
    "type": "integer"
  },
  "firebar_red1": {
    "genr": 7,
    "description": "ファイヤーバーの外側の色",
    "type": "integer"
  },
  "firebar_green1": {
    "genr": 7,
    "type": "integer"
  },
  "firebar_blue1": {
    "genr": 7,
    "type": "integer"
  },
  "firebar_red2": {
    "genr": 7,
    "description": "ファイヤーバーの内側の色",
    "type": "integer"
  },
  "firebar_green2": {
    "genr": 7,
    "type": "integer"
  },
  "firebar_blue2": {
    "genr": 7,
    "type": "integer"
  },
  "layer_mode": {
    "genr": 7,
    "description": "背景レイヤー<br>1 表示しない<br>2 表示する",
    "type": "integer"
  },
  "gazou_scroll": {
    "genr": 7,
    "description": "背景画像のスクロール<br>1  しない<br>2  左右スクロール<br>3  左へ強制スクロール<br>4  指定速度で強制スクロール<br>5  上下スクロール<br>6  全方向スクロール（速度はマップの１／２）<br>7  全方向スクロール（速度はマップと同じ）<br>8  画像サイズ    ５１２×６４０専用<br>9  画像サイズ  １０２４×６４０専用<br>10  左右スクロール（速度はマップの１／２）<br>11  マップの指定座標に設置  画像サイズは任意",
    "type": "integer"
  },
  "gazou_scroll_speed_x": {
    "genr": 7,
    "description": "背景画像強制スクロール速度<br>X方向、Y方向の速度をそれぞれ指定<br>（設定項目「背景画像のスクロール」で 4 を指定した場合のみ有効）",
    "type": "integer"
  },
  "gazou_scroll_speed_y": {
    "genr": 7,
    "type": "integer"
  },
  "gazou_scroll_x": {
    "genr": 7,
    "description": "背景画像の設置位置<br>X座標、Y座標をそれぞれ指定<br>（設定項目「背景画像のスクロール」で 11 を指定した場合のみ有効）",
    "type": "integer"
  },
  "gazou_scroll_y": {
    "genr": 7,
    "type": "integer"
  },
  "mcs_haikei_visible": {
    "genr": 7,
    "description": "背景画像の表示（背景レイヤーの使用に影響されない) <br>0  背景レイヤー使用時に表示<br>1  常に表示する",
    "type": "integer"
  },
  "control_parts_visible": {
    "genr": 7,
    "description": "スクロール制御パーツの表示<br>1  表示しない<br>2  表示する<br><em>（デバッグ用）</em>",
    "type": "integer"
  },
  "second_gazou_visible": {
    "genr": 7,
    "description": "セカンド画像の使用<br>1  使わない<br>2  使う",
    "type": "integer"
  },
  "second_gazou_scroll": {
    "genr": 7,
    "description": "セカンド画像のスクロール<br>1  しない<br>2  左右スクロール  速度１／４<br>3  左右スクロール  速度１／２<br>4  指定速度で強制スクロール<br>5  左右スクロール  速度３／２<br>6  画像サイズ  ５１２×９６０<br>7  マップと同じ速度で全方向<br>8  マップの指定座標に設置  画像サイズは任意",
    "type": "integer"
  },
  "second_gazou_scroll_speed_x": {
    "genr": 7,
    "description": "セカンド画像強制スクロール速度<br>X方向、Y方向の速度をそれぞれ指定<br>（設定項目「セカンド画像のスクロール」で 4 を指定した場合のみ有効）",
    "type": "integer"
  },
  "second_gazou_scroll_speed_y": {
    "genr": 7,
    "type": "integer"
  },
  "second_gazou_scroll_x": {
    "genr": 7,
    "description": "セカンド画像の設置位置<br>X座標、Y座標をそれぞれ指定<br>（設定項目「セカンド画像のスクロール」で 8 を指定した場合のみ有効）",
    "type": "integer"
  },
  "second_gazou_scroll_y": {
    "genr": 7,
    "type": "integer"
  },
  "second_gazou_priority": {
    "genr": 7,
    "description": "セカンド画像の表示深度<br>1  背景画像の奥<br>2  主人公の手前",
    "type": "integer"
  },
  "water_visible": {
    "genr": 7,
    "description": "水の表示<br>1  背景レイヤー使用時は表示しない<br>2  常に表示する",
    "type": "integer"
  },
  "water_clear_switch": {
    "genr": 7,
    "description": "水の半透明表示<br>1  しない<br>2  する",
    "type": "integer"
  },
  "water_clear_level": {
    "genr": 7,
    "description": "水の透明度",
    "type": "integer"
  },
  "se_switch": {
    "genr": 8,
    "description": "効果音機能<br>1  使う<br>2  使わない",
    "type": "integer"
  },
  "se_filename": {
    "genr": 8,
    "description": "効果音の指定<br>1  ファイル名を記述して指定する<br>2  デフォルトのファイル名を使用する",
    "type": "integer"
  },
  "filename_se_start": {
    "genr": 8,
    "description": "効果音ファイル名 ゲームスタート<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_gameover": {
    "genr": 8,
    "description": "効果音ファイル名 ゲームオーバー<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_clear": {
    "genr": 8,
    "description": "効果音ファイル名 星を取る（ステージクリアー）<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_coin": {
    "genr": 8,
    "description": "効果音ファイル名 コインを取る<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_get": {
    "genr": 8,
    "description": "効果音ファイル名 アイテムを取る<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_item": {
    "genr": 8,
    "description": "効果音ファイル名 ハテナブロックからアイテムが出る<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_jump": {
    "genr": 8,
    "description": "効果音ファイル名 ジャンプ<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_sjump": {
    "genr": 8,
    "description": "効果音ファイル名 スーパージャンプ<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_kiki": {
    "genr": 8,
    "description": "効果音ファイル名 滑る<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_fumu": {
    "genr": 8,
    "description": "効果音ファイル名 敵を踏む<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_tobasu": {
    "genr": 8,
    "description": "効果音ファイル名 ファイヤーボール等で敵を倒す<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_fireball": {
    "genr": 8,
    "description": "効果音ファイル名 ファイヤーボール発射<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_jet": {
    "genr": 8,
    "description": "効果音ファイル名 ジェット<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_miss": {
    "genr": 8,
    "description": "効果音ファイル名 自分が死んだ<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_block": {
    "genr": 8,
    "description": "効果音ファイル名 ブロックを破壊<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_mizu": {
    "genr": 8,
    "description": "効果音ファイル名 水しぶき<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_dengeki": {
    "genr": 8,
    "description": "効果音ファイル名 ピカチーの電撃<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_happa": {
    "genr": 8,
    "description": "効果音ファイル名 チコリンのはっぱカッター<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_hinoko": {
    "genr": 8,
    "description": "効果音ファイル名 ヤチャモの火の粉<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_mizudeppo": {
    "genr": 8,
    "description": "効果音ファイル名 水鉄砲<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_bomb": {
    "genr": 8,
    "description": "効果音ファイル名 エアームズの爆弾<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_dosun": {
    "genr": 8,
    "description": "効果音ファイル名 ドッスンスンが落ちる<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_grounder": {
    "genr": 8,
    "description": "効果音ファイル名 グラーダの噴火<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_kaiole": {
    "genr": 8,
    "description": "効果音ファイル名 カイオールの水の波動<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_senkuuza": {
    "genr": 8,
    "description": "効果音ファイル名 センクウザのグレネード<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_dokan": {
    "genr": 8,
    "description": "効果音ファイル名 土管に入る<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_se_chizugamen": {
    "genr": 8,
    "description": "効果音ファイル名 地図画面からステージへ入る<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "fx_bgm_switch": {
    "genr": 8,
    "description": "ＢＧＭ<br>0  使わない<br>1  使う",
    "type": "integer"
  },
  "fx_bgm_loop": {
    "genr": 8,
    "description": "ＢＧＭのループ再生<br>0  しない<br>1  する",
    "type": "integer"
  },
  "filename_fx_bgm_stage1": {
    "genr": 8,
    "description": "ＢＧＭファイル名（ステージ１）<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_fx_bgm_stage2": {
    "genr": 8,
    "description": "ＢＧＭファイル名（ステージ２）<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_fx_bgm_stage3": {
    "genr": 8,
    "description": "ＢＧＭファイル名（ステージ３）<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_fx_bgm_stage4": {
    "genr": 8,
    "description": "ＢＧＭファイル名（ステージ４）<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_fx_bgm_boss": {
    "genr": 8,
    "description": "ＢＧＭファイル名（ボス）<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_fx_bgm_title": {
    "genr": 8,
    "description": "ＢＧＭファイル名（タイトル画面）<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_fx_bgm_ending": {
    "genr": 8,
    "description": "ＢＧＭファイル名（エンディング）<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "filename_fx_bgm_chizu": {
    "genr": 8,
    "description": "ＢＧＭファイル名（地図画面）<br><em>（拡張子は無視されます）</em>",
    "type": "string"
  },
  "audio_se_switch_wave": {
    "genr": 8,
    "description": "Wave形式の音声ファイルを効果音に使うかどうか<br>1  使う<br>2  使わない（読み込まない）<br><strong>※Canvas版で追加</strong>",
    "type": "integer"
  },
  "audio_se_switch_mp3": {
    "genr": 8,
    "description": "MP3形式の音声ファイルを効果音に使うかどうか<br>1  使う<br>2  使わない（読み込まない）<br><strong>※Canvas版で追加</strong>",
    "type": "integer"
  },
  "audio_se_switch_ogg": {
    "genr": 8,
    "description": "Ogg形式の音声ファイルを効果音に使うかどうか<br>1  使う<br>2  使わない（読み込まない）<br><strong>※Canvas版で追加</strong>",
    "type": "integer"
  },
  "audio_bgm_switch_wave": {
    "genr": 8,
    "description": "Wave形式の音声ファイルをBGMに使うかどうか<br>1  使う<br>2  使わない（読み込まない）<br><strong>※Canvas版で追加</strong>",
    "type": "integer"
  },
  "audio_bgm_switch_mp3": {
    "genr": 8,
    "description": "MP3形式の音声ファイルをBGMに使うかどうか<br>1  使う<br>2  使わない（読み込まない）<br><strong>※Canvas版で追加</strong>",
    "type": "integer"
  },
  "audio_bgm_switch_ogg": {
    "genr": 8,
    "description": "Ogg形式の音声ファイルをBGMに使うかどうか<br>1  使う<br>2  使わない（読み込まない）<br><strong>※Canvas版で追加</strong>",
    "type": "integer"
  },
  "mes1_name": {
    "genr": 9,
    "description": "メッセージ１の人  名前<br>アスレチックの設定で <u>45</u> を指定した場合、この人はヘルメットかドリルをくれる人になります。",
    "type": "string"
  },
  "serifu1-1": {
    "genr": 9,
    "description": "メッセージ１の人  セリフ１<br>セリフの不要な行は、 \"0\" と指定して下さい。<br>アスレチックの設定で <u>45</u> を指定した場合、このセリフはヘルメットかドリルをくれる人の、<u>選択前</u>のセリフとなります。",
    "type": "string"
  },
  "serifu1-2": {
    "genr": 9,
    "type": "integer"
  },
  "serifu1-3": {
    "genr": 9,
    "type": "integer"
  },
  "serifu2-1": {
    "genr": 9,
    "description": "メッセージ１の人  セリフ２<br>アスレチックの設定で <u>45</u> を指定した場合、このセリフはヘルメットかドリルをくれる人の、<u>選択後</u>のセリフとなります。",
    "type": "string"
  },
  "serifu2-2": {
    "genr": 9,
    "type": "integer"
  },
  "serifu2-3": {
    "genr": 9,
    "type": "integer"
  },
  "mes2_name": {
    "genr": 9,
    "description": "メッセージ２の人  名前<br>アスレチックの設定で <u>46</u> を指定した場合、この人はグレネードかジェットをくれる人になります。",
    "type": "string"
  },
  "serifu3-1": {
    "genr": 9,
    "description": "メッセージ２の人  セリフ１<br>アスレチックの設定で <u>46</u> を指定した場合、このセリフはグレネードかジェットをくれる人の、<u>選択前</u>のセリフとなります。",
    "type": "string"
  },
  "serifu3-2": {
    "genr": 9,
    "type": "integer"
  },
  "serifu3-3": {
    "genr": 9,
    "type": "integer"
  },
  "serifu4-1": {
    "genr": 9,
    "description": "メッセージ２の人  セリフ２<br>アスレチックの設定で <u>46</u> を指定した場合、このセリフはグレネードかジェットをくれる人の、<u>選択後</u>のセリフとなります。",
    "type": "string"
  },
  "serifu4-2": {
    "genr": 9,
    "type": "integer"
  },
  "serifu4-3": {
    "genr": 9,
    "type": "integer"
  },
  "setumei_name": {
    "genr": 9,
    "description": "説明する人  名前",
    "type": "string"
  },
  "serifu9-1": {
    "genr": 9,
    "description": "説明する人  セリフ１",
    "type": "string"
  },
  "serifu9-2": {
    "genr": 9,
    "type": "integer"
  },
  "serifu9-3": {
    "genr": 9,
    "type": "integer"
  },
  "setumei_menu1": {
    "genr": 9,
    "description": "説明する人  メニュー",
    "type": "string"
  },
  "setumei_menu2": {
    "genr": 9,
    "description": "説明する人  メニューの選択肢",
    "type": "string"
  },
  "setumei_menu3": {
    "genr": 9,
    "type": "integer"
  },
  "setumei_menu4": {
    "genr": 9,
    "type": "integer"
  },
  "serifu10-1": {
    "genr": 9,
    "description": "説明する人  １つ目の選択肢を選んだときのセリフ",
    "type": "string"
  },
  "serifu10-2": {
    "genr": 9,
    "type": "integer"
  },
  "serifu10-3": {
    "genr": 9,
    "type": "integer"
  },
  "serifu11-1": {
    "genr": 9,
    "description": "説明する人  ２つ目の選択肢を選んだときのセリフ",
    "type": "string"
  },
  "serifu11-2": {
    "genr": 9,
    "type": "integer"
  },
  "serifu11-3": {
    "genr": 9,
    "type": "integer"
  },
  "serifu12-1": {
    "genr": 9,
    "description": "説明する人  ３つ目の選択肢を選んだときのセリフ",
    "type": "string"
  },
  "serifu12-2": {
    "genr": 9,
    "type": "integer"
  },
  "serifu12-3": {
    "genr": 9,
    "type": "integer"
  }
};

return {
  getParamsOptionAll: function(){
    return option_prm;
  },
  getParamsOption: function(key){
    return option_prm[key];
  }
};
}(window));
