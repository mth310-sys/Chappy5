# PAハイスクール・フリート オールスター すい～とでハッピー!2400

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: PAハイスクール・フリート オールスター すい～とでハッピー!2400
manufacturer: メーシー（ユニバーサルエンターテインメント）
formalModel: PAハイスクール・フリート2SB
releaseDate: 2024-04-22
modelType: 甘デジ
 gameType: 一種二種混合 / 普電抽選RUSH / ラッキートリガー
jackpotProbability: 通常時 1/99.9。フリートチャージ当選率 初回1/129.8、2回目以降1/73.6。フリートチャージ中の大当り確率は約1/2.7（大当り+小当り合算）。
initialPayout: 特図1は3R・払出240個。98.78%が240個+ブルーマーメイドRUSH50、1.22%が240個+フリートチャージ（ST100回以上濃厚）。
rushEntryRate: 100%
rushContinuationRate: 初回ブルーマーメイドRUSH50 約33%。初回突破後ブルーマーメイドRUSH100 約75%。
ltName: 超ブルーマーメイドRUSH（超BMR）
ltEntryRoute: BMR中にフリートチャージ当選→電チュー最大3個で特図2抽選→10R大当り（800個）1回ごとにLT発動抽選。いずれかでLT当選するとチャージ保留消化後に超BMRへ。
ltEntryRate: 10R大当り1回ごとのLT発動率3.7%。フリートチャージ結果別の発動期待度は、10R 1回=約3.7%、2回=約7.3%、3回=約10.7%。通常時初当り基準の総LT到達率は公開資料で直接確認できずUNVERIFIED（推測計算しない）。
ltContinuationRate: 約89%（時短160回中にフリートチャージへ当選する期待値）。
ltPayoutStructure: フリートチャージで特図2を最大3回抽選。10R 1回=800個、2回=1600個、3回=2400個（いずれも払出）。大当りなしの場合はSTリセット。LT発動後はフリートチャージ当選を続ける限り超BMR160をループし、STリセットでも超BMR継続。
totalPayoutDistribution: 特図2フリートチャージ結果の業界資料掲載値は2400個 5.07%、1600個 25.89%、800個 44.05%、STリセット 24.99%。特図1は240個+フリートチャージ（ST100回以上濃厚）1.22%、240個+時短50回98.78%。
timeShortening: 50回 / 100回 / 160回 / 2400回。通常入口は主にBMR50、初回突破後はBMR100、LTは超BMR160。2400回は特図1のフリートチャージ契機等で用いられる仕様として解析資料に掲載。
cTimeOrSpecialSystems: フリートチャージ。普電抽選でチャージ当選後、電チューへ最大3個入賞させ特図2を最大3回抽選。Cタイムは確認なし。
ceilingOrSupport: 遊タイム非搭載。

gameFlow: |
  通常時（1/99.9）
   ↓ 初当り・BMR突入100%
  主にブルーマーメイドRUSH50（継続約33%）
   ↓ フリートチャージ当選
  特図2を最大3回抽選
   ├─ 大当りなし → STリセット
   └─ 10R大当り1〜3回 → 800〜2400個 + 各10RごとにLT抽選3.7%
        ↓ LT非当選
      ブルーマーメイドRUSH100（継続約75%）
        ↓ LT当選
      超ブルーマーメイドRUSH160（LT、継続約89%）
        ↓ フリートチャージ当選を続ける限りループ
      160回消化 → 通常時

notes:
- メーカー公式が「初当り1/99、BMR突入100%、BMR100最大2400×約75%、LT約89%」を明示。
- 業界一次系で型式名、通常1/99.9、初回/2回目以降チャージ確率、RUSH各継続率、主要振り分けを照合。
- LT発動率3.7%/10Rおよび結果別3.7/7.3/10.7%は必勝本解析。初当りからの総LT到達率は算術推定を登録しない。
- 払出と実獲得を混同しない。本レコードの240/800/1600/2400は払出表記。

sources:
- OFFICIAL: https://www.universal-777.com/product/pachinko/highschoolfleet_allstar_sweet/ — メーカー製品ページ。LT搭載、BMR突入100%、BMR100約75%、LT約89%、発売2024年4月。取得 2026-09-21。
- OFFICIAL: https://www.universal-777.co.jp/news/20240219001597/ — ユニバーサル発売リリース。取得 2026-09-21。
- INDUSTRY: https://news.p-world.co.jp/articles/26993/yugitsushin — 遊技通信。型式PAハイスクール・フリート2SB、1/99.9、1/129.8→1/73.6、継続33/75/89%。取得 2026-09-21。
- INDUSTRY: https://news.p-world.co.jp/articles/27041/greenbelt — グリーンべると。特図1/特図2主要振り分け、最大2400、各RUSH構造。取得 2026-09-21。
- INDUSTRY: https://news.p-world.co.jp/articles/27347/nippon — 遊技日本。1/99.9、チャージ確率、1/2.7、時短50/100/160/2400、出玉を照合。取得 2026-09-21。
- ANALYSIS_HIGH: https://p.hisshobon.jp/machine/4276/1/101277 — 必勝本 基本スペック。取得 2026-09-21。
- ANALYSIS_HIGH: https://p.hisshobon.jp/machine/4276/1/101372 — 必勝本 LT解説。10Rごと3.7%、状況別LT期待度、超BMR終了条件。取得 2026-09-21。
- ANALYSIS_HIGH: https://1geki.jp/pachinko/pa_haifuri_allstar_2400/1/ — 一撃。基本数値・実獲得併記を照合。取得 2026-09-21。

confidence:
- LT搭載/名称/基本RUSH性能: OFFICIAL
- 基本確率/型式/主要振り分け: INDUSTRY
- LT発動率3.7%と結果別期待度: ANALYSIS_HIGH
- 通常時初当り基準の総LT到達率: UNVERIFIED

missingFields:
- 通常時初当り1回を基準とする総LT到達率: UNVERIFIED_AFTER_RESEARCH（入口別数値は確認済み。推測計算しない）

conflicts: none
