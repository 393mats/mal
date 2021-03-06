# MAL (MasaoApp Library)
MasaoAppを元に制作した「スーパー正男」の制作用エディタをHTMLページ上に簡単に設置できるライブラリです。

CSS、Javascriptを用いて好みにエディタを作ることができます。

現在の最新バージョン：0.7 β

## 設置方法

`<head>`間にCSSファイルを読み込みます。中身はページやUIに合わせてお好みに編集してください。

``` 
<link rel="stylesheet" href="./css/mal.css">
``` 

次に`<body>`間にjsライブラリを読み込みんでください

``` 
<script type="text/javascript" src="./js/mal.js"></script>
``` 
そして設置したい場所にエディタとパレットのスクリプトを貼ります。

エディタ

``` 
<!-- MAL Editor -->
    <script type="text/javascript">
      new mal.Editor({
        "width": "180",  //マップの幅　（ブロック単位）
        "height": "29",  //マップの高さ（ブロック単位）
        "mapmode": "0",  //マップモード。１で第３版マップデータを使用(未実装)
        "scroll": "1"    //スクロールモード。1で自由、それ以外はスクロールメソッド使用
        "prm-con": "0"   //出力モード。0でデフォルト値を出力しない。１で出力
      });
    </script>
``` 

パレット（標準レイヤー）

``` 
<!-- MAL Palette -->
    <script type="text/javascript">
      new mal.Palette({
        "width": "16",             //パレットの幅　（ブロック単位）
        "height": "6",             //パレットの高さ（ブロック単位）
        "pattern": "./parts.png",  //パーツの画像ファイル
        "parts": {                 //パレットの配置
          "0": ".A98BCDHIJEFOGPQ",
          "1": "WXR{}abcdefghijz",
          "2": "[]<>5647Y+-*/KLM",
          "3": "NuvwxUV12nmopqrs",
          "4": "tklySTZ3"
        }
      });
    </script>
``` 

パレット（背景レイヤー）　※未実装

``` 
<!-- MAL SecondPalette -->
    <script type="text/javascript">
      new mal.SecPalette({
        "width": "16",             //パレットの幅　（ブロック単位）
        "height": "16",            //パレットの高さ（ブロック単位）
        "pattern": "./mapchip.gif",//パーツの画像ファイル
      });
    </script>
``` 

## メソッド
エディタのカスタマイズ用に各メソッドを用意しています。

### mal.add(登録先, 関数名)

イベントへ関数を追加します。登録先の一覧は下記。

|登録先|引数|イベント|
|---|---|---|
|editor_clicked|x, y, chip|エディタをクリックした時|
|editor_moved|x, y, chip|マウスがエディタ上を動いた時|
|palette_clicked|x, y, chip|パレットをクリックした時|
|palette_moved|x, y, chip|マウスがパレット上を動いた時|
|after_loaded|なし|JSONファイルを読み込み終えた時|

### mal.showGrid(モード)
エディタ上のグリッドを表示・非表示します。

|モード|結果|
|---|---|
|0|非表示|
|1|表示|

### mal.getParamsData()
現在編集中のParamデータ一式を取得します。

### mal.scrollEditor(方向, ブロック数)
エディタ画面をスクロールさせます。

|方向|結果|
|---|---|
|left|左へxブロック移動|
|right|右へxブロック移動|
|up|上へxブロック移動|
|down|下へxブロック移動|

### mal.setParam(param名,　値)
map,layer以外の指定したParamデータの値を書き換えます。

### mal.getParam(param名)
map,layer以外の指定したParamデータの値を取得します。

### mal.getParamsAll()
map,layer以外のParamデータを全て取得します。

### mal.getDefaultParams()
デフォルトのParam値を取得します。

### mal.setEditorConfig(設定名, 値)
エディタの設定値を動的に変更します。

### mal.clearEditor(X座標, Y座標, 幅, 高さ, レイヤーモード)
ブロック単位で指定した座標をクリアします。Paramデータへも反映されます。
幅は指定座標から右、高さは下です。

|レイヤーモード|結果|
|---|---|
|1|標準レイヤー|
|2|背景レイヤー|

### mal.drawEditor(X座標, Y座標, 幅, 高さ, レイヤーモード, チップ)
ブロック単位で指定した座標を指定チップで塗りつぶします。Paramデータへも反映されます。
幅は指定座標から右、高さは下です。

レイヤーモードはclearEditorと同じです。

### mal.newProject()
Param、エディタをリセットします。

### mal.setEditMode(モード)
エディタのペンを設定します。

|モード|結果|
|---|---|
|1|ペン|
|2|消しゴム|

### mal.getNowChip()
選択中の標準パーツを取得します。

### mal.getNowChip2()
選択中の背景パーツを取得します。

### mal.getJSON(title, auther, editor, url)
編集中の正男をmasao-json-formatで書き出します。引数はmetadataで、0で空。

### mal.loadJSON(データ)
masao-json-format形式のJSONデータを読み込み、反映します。

### mal.getMasaoVersion()
現在の正男のバージョンを取得します。

### mal.version()
MALのバージョンを取得します。

---
## オプションのメソッド
オプションのjsを使用した時に使えるメソッドです。

### mal_prms.getParamsOption(キー)
mal_prms.jsが必要。 指定したParamキーのジャンル、説明、入力形式を取得します。返り値はオブジェクトです。

|返り値のキー|結果|
|---|---|
|genr|ジャンル|
|description|説明(HTML)|
|type|入力値の形式|

|genr|ジャンル|
|---|---|
|0|ゲーム全体の設定|
|1|ステージの設定|
|2|主人公の設定|
|3|敵の設定|
|4|仕掛けパーツ|
|5|一言メッセージ|
|6|店・選択|
|7|文字・色・グラフィック|
|8|音利用|
|9|地図画面用|

|type|タイプ|
|---|---|
|string|文字列|
|integer|整数|

### mal_prms.getParamsOptionAll()
mal_prms.jsが必要。 全てのParamキーのジャンル、説明、入力形式を取得します。返り値はオブジェクトです。

---

## ライセンス
MIT License

Copyright (c) 2018 Tex (Tetsuya Matsuda) https://mmy.fe8works.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
