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
        "mapmode": "0"   //マップモード、１で第３版マップデータを使用
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

---

## ライセンス
CC BY 4.0 / 2018 Tex (Tetsuya)
