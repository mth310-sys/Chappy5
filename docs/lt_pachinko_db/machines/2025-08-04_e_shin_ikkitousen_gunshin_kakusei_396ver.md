# e真・一騎当千～軍神覚醒～396ver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e真・一騎当千～軍神覚醒～396ver.
manufacturer: D-light（ディ・ライト）
modelNumber: e真・一騎当千～軍神覚醒～LTM-JH
releaseDate: 2025-08-04
modelType: スマパチ / ハイミドル / LT3.0 PLUS
gameType: 一種二種混合 / 下位ST → LT上位ST / 非RUSH時時短あり

jackpotProbability:
- 通常時図柄揃い: 1/396.1（闘士の休息＝チャージ当りを除く。解析資料ではチャージからの昇格込み表記あり）
- チャージ込み大当り: 1/348.6（HAZUSE記載）
- 下位「真・闘士連撃」中: 1/84.7
- LT「真・軍神BATTLEモード」中: 1/84.7
- チャンスタイム中: 1/399.6

initialPayout:
- 図柄揃い初当り: 10R 約1500個（払い出し）
- 闘士の休息（チャージ）: 2R 約300個（解析資料。図柄揃い分母とは分離）

rushEntryRate:
- 初当りから下位「真・闘士連撃」: 66.5%
- チャンスタイム引き戻し込みのRUSH突入率: 約74%（業界一次資料のTOTAL値）
rushContinuationRate: 下位「真・闘士連撃」約70%（ST100回 / 1/84.7）

ltName: 真・軍神BATTLEモード
ltEntryRoute:
- 下位「真・闘士連撃」中の大当り50%でLT発動
- 通常初当り非RUSH側の「チャンスタイム」100回で引き戻した場合はLTへ直行
ltEntryRate:
- 真・闘士連撃中大当り: 50%でLT
- チャンスタイム中大当り: 100%でLT
- 通常遊技全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（公開直接値を確認できず、経路値から独自算出しない）
ltContinuationRate: 約80%（ST134回 / 1/84.7）

ltPayoutStructure:
- LT中大当り: 約3000個（約1500個×2）+ LT継続 50% / 約1500個 + LT継続 50%

totalPayoutDistribution:
- 左打ち図柄揃い: 約1500個 + 真・闘士連撃 66.5% / 約1500個 + チャンスタイム 33.5%
- 真・闘士連撃中: 約1500個 + LT「真・軍神BATTLEモード」50% / 約1500個 + 真・闘士連撃継続 50%
- LT中: 約3000個（1500個×2）+ LT継続 50% / 約1500個 + LT継続 50%
- チャンスタイム中大当り: 約1500個 + LT 100%

timeShortening:
- 真・闘士連撃: ST100回
- チャンスタイム: 時短100回、1/399.6、突破率約22%
- 真・軍神BATTLEモード: ST134回

cTimeOrSpecialSystems: LT3.0 PLUS。通常初当りの非RUSH側にも時短100回「チャンスタイム」が付与され、そこでの引き戻しは下位を経由せずLTへ直行する。
ceilingOrSupport: コンプリート機能搭載。遊タイム搭載根拠なし。

gameFlow: |
  通常時 図柄揃い 1/396.1
   ├─ 66.5%: 約1500個 → 下位「真・闘士連撃」ST100回
   │    ├─ 大当り50%: 約1500個 → LT「真・軍神BATTLEモード」
   │    └─ 大当り50%: 約1500個 → 下位ST100回継続
   │    STスルー → 通常時
   └─ 33.5%: 約1500個 → チャンスタイム100回
        ├─ 引き戻し（約22%）: 約1500個 → LT「真・軍神BATTLEモード」
        └─ 非当選 → 通常時

  LT「真・軍神BATTLEモード」
   └─ ST134回 / 1/84.7 / 継続約80%
       ├─ 50%: 約3000個（1500個×2）→ LT継続
       └─ 50%: 約1500個 → LT継続
       STスルー → 通常時

notes:
- 業界一次資料の「真・闘士連撃突入率約74%」はチャンスタイム引き戻し込みのTOTAL値。初当り振り分けとしての下位RUSH直行は66.5%であり、競合ではなく定義差。
- 通常1/396.1は闘士の休息（チャージ当り）を除く表記。HAZUSEはチャージ込み1/348.6を併記しているため分離保存した。
- 396ver.は通常ヘソの高LT突入率タイプ。同日導入「319大入りver.」は大入りスタート搭載の別型式/別スペックなので混同しない。
- LT中3000個は1500個×2回分の合計払い出し。単一10Rの出玉ではない。
- 通常遊技全体を分母とする総LT到達率は、66.5%・約70%・50%・時短約22%等から独自算出しない。

sources:
- https://daiichi777.jp/pachinko/ikkitousen3/ — D-light/Daiichi公式機種ページ（HAZUSE公式リンクで機種対応確認）。
- https://news.p-world.co.jp/articles/31381/yugitsushin — 遊技通信。型式、1/396.1→1/84.7/1/399.6、TOTAL RUSH約74%、下位約70%、LT約80%、2025-08-04を確認。
- https://news.p-world.co.jp/articles/31312/greenbelt — グリーンべると。2スペック同時導入、LT3.0 PLUS、RUSH中大当り50%でLT、LT中50%3000個を確認。
- https://p-johojima.jp/machine_spec/post-11147/ — 情報島。左66.5/33.5、下位50/50、LT50/50、チャンスタイム当選時LT100%の振り分けを確認。
- https://1geki.jp/pachinko/e_shinikki_gk396/ — 一撃。型式/検定番号、各確率、ST100/134、時短100、約22%、出玉定義、ゲームフローを照合。
- https://hazuse.com/hd/5p0288/ — HAZUSE。型式e真・一騎当千～軍神覚醒～LTM-JH、検定番号5P0288、1/396.1、チャージ込み1/348.6、導入日を照合。

confidence:
- LT搭載/名称/型式/導入日/基本確率/RUSH・LT構造/ST/継続率/主要振り分け: INDUSTRY + ANALYSIS_HIGH（複数照合）
- 通常遊技全体基準の総LT到達率: UNVERIFIED

missingFields:
- 通常遊技全体を分母とする総LT到達率の公開直接値
conflicts: none
