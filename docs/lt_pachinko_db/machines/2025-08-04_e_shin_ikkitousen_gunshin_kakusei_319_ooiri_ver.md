# e真・一騎当千～軍神覚醒～319大入りver.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e真・一騎当千～軍神覚醒～319大入りver.
manufacturer: D-light（ディ・ライト）
modelNumber: e真・一騎当千～軍神覚醒～AM-TS
certificationNumber: 510289
releaseDate: 2025-08-04
modelType: スマパチ / ミドル / LT3.0 PLUS / 大入りスタート
gameType: 一種二種混合 / 下位ST → LT上位ST

jackpotProbability:
- 通常時図柄揃い: 1/319.7
- 下位「真・闘士連撃」中: 1/109.6
- LT「真・軍神BATTLEモード」中: 1/84.7

initialPayout:
- 通常初当り: 2R 約300個（払い出し）

rushEntryRate:
- 初当りから下位「真・闘士連撃」: 51%
rushContinuationRate: 約60%（ST100回 / 1/109.6）

ltName: 真・軍神BATTLEモード
ltEntryRoute:
- 下位「真・闘士連撃」中の大当り50%でLT発動
ltEntryRate:
- 真・闘士連撃中大当り: 50%でLT
- 通常遊技全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（公開直接値を確認できず、経路値から独自算出しない）
ltContinuationRate: 約80%（ST134回 / 1/84.7）

ltPayoutStructure:
- LT中大当り: 約3000個（約1500個×2）+ LT継続 50% / 約1500個 + LT継続 50%

totalPayoutDistribution:
- 左打ち: 約300個 + 真・闘士連撃 51% / 約300個 + 通常 49%
- 真・闘士連撃中: 約1500個 + LT「真・軍神BATTLEモード」50% / 約1500個 + 真・闘士連撃継続 50%
- LT中: 約3000個（1500個×2）+ LT継続 50% / 約1500個 + LT継続 50%

timeShortening:
- 真・闘士連撃: ST100回
- 真・軍神BATTLEモード: ST134回
- 非RUSH初当り: 電サポなし。396ver.のチャンスタイム100回は319大入りver.には搭載されない。

cTimeOrSpecialSystems: LT3.0 PLUS。「大入りスタート」搭載。通常初当りはチャージなしで1/319.7の図柄揃い、51%で下位RUSHへ。
ceilingOrSupport: コンプリート機能搭載。遊タイム非搭載。

gameFlow: |
  通常時 図柄揃い 1/319.7
   ├─ 51%: 約300個 → 下位「真・闘士連撃」ST100回
   │    ├─ 大当り50%: 約1500個 → LT「真・軍神BATTLEモード」
   │    └─ 大当り50%: 約1500個 → 下位ST100回継続
   │    STスルー → 通常時
   └─ 49%: 約300個 → 通常時

  LT「真・軍神BATTLEモード」
   └─ ST134回 / 1/84.7 / 継続約80%
       ├─ 50%: 約3000個（1500個×2）→ LT継続
       └─ 50%: 約1500個 → LT継続
       STスルー → 通常時

notes:
- 同日導入396ver.とは型式・通常確率・初当り出玉・下位RUSH確率/継続率・非RUSH時の時短有無が異なるため別レコード。
- 319大入りver.はチャージ当りなし。1/319.7を引けば図柄揃い2R約300個。
- LT到達後のST134回・約80%およびLT中50%約3000個/50%約1500個は396ver.と共通。
- 約3000個は約1500個×2回の合計払い出しであり、単一10R出玉ではない。
- 通常遊技全体を分母とする総LT到達率は、51%・下位約60%・下位当り時50%等から独自算出しない。

sources:
- https://daiichi777.jp/pachinko/ikkitousen3/ — Daiichi/D-light公式機種ページ。
- https://news.p-world.co.jp/articles/31380/yugitsushin — 遊技通信。型式AM-TS、1/319.7→1/109.6/1/84.7、下位51%・約60%、LT約80%、大入りスタート、導入日を確認。
- https://p-johojima.jp/machine_spec/post-9486/ — 情報島。左51/49、下位50/50、LT50/50、出玉振り分けを確認。
- https://hisshobon.com/machineinfo/98283/ — 必勝本。1/319.7、下位ST100/約60%、LT ST134/約80%、RUSH中50%LT、チャージなし、出玉を照合。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/d-light_pachi/036/kh02.php — パチマガスロマガ。確率、ST、出玉、LT搭載、大入りスタートを照合。
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/d-light_pachi/036/kh04.php — ゲームフロー、非RUSH時チャンスタイムなしを確認。
- https://hazuse.com/hd/510289-2/ — HAZUSE。型式AM-TS、検定番号510289、導入日、LT搭載を照合。

confidence:
- LT搭載/名称/型式/導入日/基本確率/RUSH・LT構造/ST/継続率/主要振り分け: INDUSTRY + ANALYSIS_HIGH（複数照合）
- 通常遊技全体基準の総LT到達率: UNVERIFIED

missingFields:
- 通常遊技全体を分母とする総LT到達率の公開直接値
conflicts: none