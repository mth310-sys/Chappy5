# Pバイオハザード RE:2 LTver.

machineName: Pバイオハザード RE:2 LTver.
formalModelName: PバイオハザードRE2L9YZ4
manufacturer: アムテックス（平和発表・販売）
releaseDate: 2024-04-08
modelType: ライトミドル / LT搭載
gameType: 二種タイプ / ST型RUSH
jackpotProbability: 特図1図柄揃い 1/199.8 / 特図2図柄揃い 1/45.8（V入賞時に限る）
initialPayout: 特図1 2R 約300個（払出）または10R 約1500個（払出）
rushEntryRate: 51%（特図1。10R PREMIUM 1% + 2R HAZARD RUSH 50%）
rushContinuationRate: HAZARD RUSH / SURVIVAL CHANCE 約72%（ST53回の約69% + 残保留4個の約8%を合算した公称値）
ltName: HAZARD RUSH XTREME
ltEntryRoute: (1) 特図1の1%で10R→HAZARD RUSH PREMIUM（実質次回まで）→次回大当り後HAZARD RUSH XTREME。(2) HAZARD RUSH中大当りの33%でSURVIVAL CHANCEへ→同状態中に大当りするとHAZARD RUSH XTREME（ただしST最終変動・残保留当選はHAZARD RUSH時と同じ振り分け）。
ltEntryRate: 初当りからのトータルLT突入率 約21.8%との二次資料あり。一次/業界資料では直接の総到達率表記を確認できず、ルート構造を優先して保持。
ltContinuationRate: HAZARD RUSH XTREME 約87%（ST87回の約85% + 残保留4個の約8%を合算した公称値）
ltPayoutStructure: HAZARD RUSH XTREME / SURVIVAL CHANCE / HAZARD RUSH PREMIUM中の特図2大当りは10R約1500個（払出）100%→HAZARD RUSH XTREME。ただしST最終変動・残保留当選時はHAZARD RUSH中と同じ67% HAZARD RUSH / 33% SURVIVAL CHANCE振り分け。
totalPayoutDistribution: 特図1=10R約1500個+HAZARD RUSH PREMIUM 1% / 2R約300個+HAZARD RUSH 50% / 2R約300個+通常 49%。HAZARD RUSH中特図2=10R約1500個+SURVIVAL CHANCE 33% / 10R約1500個+HAZARD RUSH 67%。右打ち大当りは基本ALL10R約1500個（払出）。
timeShortening: HAZARD RUSH 53回+残保留4 / SURVIVAL CHANCE 53回+残保留4 / HAZARD RUSH XTREME 87回+残保留4 / HAZARD RUSH PREMIUM 実質次回まで
cTimeOrSpecialSystems: ラッキートリガー。HAZARD RUSH PREMIUMは初当り1%の実質次回まで状態。
ceilingOrSupport: 遊タイム非搭載

gameFlow:
```text
通常時（特図1図柄揃い 1/199.8）
 ↓
├─ 49%: 2R約300個 → 通常
├─ 50%: 2R約300個 → HAZARD RUSH（ST53回+残保留4、約72%）
│    ↓ 大当り（ALL 10R約1500個）
│    ├─ 67%: HAZARD RUSH継続
│    └─ 33%: SURVIVAL CHANCE（ST53回+残保留4、約72%）
│              ↓ 大当り
│              HAZARD RUSH XTREME（LT、ST87回+残保留4、約87%）
│
└─ 1%: 10R約1500個 → HAZARD RUSH PREMIUM（実質次回まで）
         ↓ 次回大当り10R約1500個
         HAZARD RUSH XTREME（LT）
```
※SURVIVAL CHANCE / XTREME等のST最終変動・残保留での当選は下位HAZARD RUSH側の振り分けになる。

notes:
- 平和初のLT搭載機として業界資料で確認。
- 製造元はアムテックス、型式名はPバイオハザードRE2L9YZ4。
- 「約72%」「約87%」はST本体と残保留の引き戻しを合算した公称継続率であり、単純加算値ではない。
- 初当りからのLTトータル突入率約21.8%はA-PACHINKO等の二次資料で確認した値。一次/業界記事ではルート・振り分けは確認できるが総到達率21.8%の直接表記は今回未確認のため信頼度を分離する。

sources:
- https://amusement-japan.co.jp/article/detail/10004108/ — Amusement Japan 2024-02-07。LT搭載、ゲームフロー、特図1/2振り分け、ST回数、継続率、払出を確認。取得日: 2026-09-21
- https://news.p-world.co.jp/articles/27151/nippon — P-WORLD業界ニュース/遊技日本 2024-03-11。型式名、LT搭載、基本スペック、初当り/RUSH構造を照合。取得日: 2026-09-21
- https://news.p-world.co.jp/articles/26831/yugitsushin — P-WORLD業界ニュース/遊技通信 2024-02-07。型式名、1/199.8→1/45.8、RUSH51%、通常RUSH約72%、LT約87%、右打ちALL1500個を照合。取得日: 2026-09-21
- https://nana-press.com/kaiseki/machine/729/19857/ — なな徹。時短/残保留、全振り分け、払出、遊タイム非搭載、最終変動/残保留例外を照合。取得日: 2026-09-21
- https://www.p-world.co.jp/machine/database/10001 — P-WORLD機種DB。初当り51%内訳、HAZARD RUSH→SURVIVAL CHANCE→XTREMEフローを照合。取得日: 2026-09-21
- https://www.a-pachinko.com/SHOP/p-amutex241.html — A-PACHINKO。導入日2024-04-08および初当りからLTトータル突入率約21.8%を確認。取得日: 2026-09-21

confidence:
- LT搭載/型式/導入日: INDUSTRY
- 基本スペック/RUSH/LT構造/振り分け: INDUSTRY + ANALYSIS_HIGH（複数照合）
- ltEntryRate 約21.8%: ANALYSIS_SINGLE（総到達率の一次/業界直接表記は今回未確認）

missingFields: none for required core fields; ltEntryRate total value has lower confidence than route-level data
conflicts: none
status: COMPLETE_CORE
