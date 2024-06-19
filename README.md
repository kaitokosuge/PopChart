<h1>PopChart</h1>
url:<a href="https://pop-chart.vercel.app/">pop-chart.vercel.app</a>
<p>各都道府県の人口に関わる情報をグラフで確認できます</p>
<p>下記コマンドでサーバーを起動することができます</p>

```
npm run dev
```

<p>下記コマンドでテスト結果を確認することができます</p>

```
npm run test
```

<h2>技術スタック</h2>
<ul>
  <li>React <a href="https://ja.react.dev/"> https://ja.react.dev/</a></li>
  <li>css modules <a href="https://www.npmjs.com/package/typescript-plugin-css-modules">https://www.npmjs.com/package/typescript-plugin-css-modules</a></li>
  <li>highchart.js <a href="https://www.npmjs.com/package/highcharts-react-official">https://www.npmjs.com/package/highcharts-react-official</a></li>
  <li>Tanstack query <a href="https://tanstack.com/query/latest">https://tanstack.com/query/latest</a></li>
  <li>vitest <a href="https://vitest.dev/">https://vitest.dev/</a></li>
  <li>resas api <a href="https://opendata.resas-portal.go.jp/">https://opendata.resas-portal.go.jp/</a></li>
</ul>

<h2>本アプリ開発の自己レビュー</h2>
<p>「ユーザーファースト」を意識して開発しました。</p>
<h3>1.人口データの円滑な画面描画</h3>
<p>本アプリケーションでは初回ロード（ユーザーが最初に訪れた時）で「都道府県名の取得」と「各都道府県の４種類の人口データの取得」を行っています。このようにした背景はチェックボックス押下時に円滑なグラフ描画・切り替えが可能になることが挙げられます。ユーザーが都道府県のチェックボックスを押下した際に逐一データ取得を行うと毎回遅延が発生します。しかし本アプリでは初回のロード後、ユーザーのいかなるアクションにおいてリクエストによる遅延は発生しません。特に「人口データをグラフで見ることができる」という性質上、チェックボックスが複数回押下される、人口情報の切り替えも複数回行われる、ことが想定されます。よって本アプリケーションを利用するユーザーと初回で全てのデータをリクエストする方式は相性が良いと考えこのような実装にしました。</p>
<p>また、「都道府県の人口データ」という数量はタイムリーに変動しうるものではない（正確には変動しますが追跡はできない）ため、Tanstack queryを利用し、初回ロードで取得したデータをキャッシュに保存し、以後リクエストは行わないようにしています。</p>

<h3>2.スマートフォンでも快適に</h3>
<p>都道府県データを扱うため、47個のチェックボックスがUIに並ぶことになります。パソコンやタブレット端末であればそこまで画面域を占めることはないですがスマートフォンではチェックボックスだけで画面が埋め尽くされます。これでは本アプリの要である「人口データのグラフ」を快適に閲覧することが難しいです。そこでチェックボックスの表示をする数を減少させる機能を取り入れました。これによりユーザーはスマートフォンでもチェックボックスを押下しながらグラフを閲覧することができます</p>

<h3>課題点</h3>
<h4>コンポーネントの命名</h4>
<p>コンポーネントの命名はもっと具体的にするべきだと感じています。例えば今回、都道府県ごとのチェックボックスは「MainCheckBox」にしました。意図としては都道府県チェックボックスより利用頻度は少ないが、他のチェックボックスも作成しうるのではないかと開発初期段階は考えていたため、よく使用する都道府県チェックボックスに「Main」という命名をしました。しかし後から考えてみれば他のチェックボックスを作成することはなかったですし、何より他人が見たら何いおいてMainなのか、Mainではないコンポーネントも存在するのか？など混乱を招く命名になってしまったと感じています。よって「PrefCheckBox」のように役割として具体的な命名をしてあげると見やすくなったかと感じています。</p>

