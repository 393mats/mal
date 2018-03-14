# MAL (MasaoApp Library)
「スーパー正男」の制作用エディターをHTMLページ上に簡単に設置できるライブラリです。  CSS、Javascriptを用いて好みにカスタマイズすることができます。

## 設置方法

`<head>`間にCSSファイルを読み込みます。中身はページやUIに合わせてお好みに編集してください。

``` 
<link rel="stylesheet" href="mal.css">
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
        "mapmode": "0",  //マップモード。１で第３版マップデータを使用
        "scroll": "1"    //スクロールモード。1で自由、それ以外はスクロールメソッド使用
        "prm-con": "0"   //出力モード。0でデフォルト値を出力しない
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

パレット（背景レイヤー）

``` 
<!-- MAL SecondPalette -->
    <script type="text/javascript">
      new mal.SecPalette({
        "width": "16",             //パレットの幅　（ブロック単位）
        "height": "16",             //パレットの高さ（ブロック単位）
        "pattern": "./mapchip.gif",//パーツの画像ファイル
      });
    </script>
``` 

## 拡張メソッド
エディタのカスタマイズ用に各メソッドを用意しています。

### mal.add(登録先, 関数名)

イベントへ関数を追加します。登録先の一覧は下記。

|登録先|引数|イベント|
|---|---|---|
|editor_clicked|x, y, chip|エディタをクリックした時|
|editor_moved|x, y, chip|マウスがエディタ上を動いた時|
|palette_clicked|x, y, chip|パレットをクリックした時|
|palette_moved|x, y, chip|マウスがパレット上を動いた時|

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
|top|上へxブロック移動|
|bottom|下へxブロック移動|

### mal.setParam(param名,　値)
map,layer以外の指定したParamデータを書き換えます。

### mal.getDefaultParams()
デフォルトのParam値を取得します。

### setEditorConfig(設定名, 値)
エディターの設定値を動的に変更します。

---

## ライセンス
MIT License

Copyright (c) 2018 Tex (Tetsuya Matsuda) http://tex1.symphonic-net.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
