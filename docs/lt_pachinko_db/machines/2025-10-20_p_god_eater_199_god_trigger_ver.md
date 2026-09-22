# Pゴッドイーター199ゴッドトリガーVER.

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: Pゴッドイーター199ゴッドトリガーVER.
manufacturer: サンセイR&D
releaseDate: 2025-10-20
modelType: ライトミドル / 約1/199
gameType: 1種2種混合 / 時短突破型 + 1回転ループ下位RUSH + LT上位RUSH
modelName: P LTゴッドイーター199VER-ARB（HAZUSE等では `PLTゴッドイーター199VER-ARB` 表記）
jackpotProbability: 通常時 1/199.5 / ジャッジメント中 1/199.8 / 下位RUSH・LT中 1/1
initialPayout: 2R 約300個（払出）100%。消化後100%でジャッジメント（時短108回）へ。
rushEntryRate: 初当り後ジャッジメント突入100%。ジャッジメント突破率約42%で神バトルRUSH RAGE BURSTへ。
rushContinuationRate: 神バトルRUSH RAGE BURST 約77%。1回転で約23%の2R通常を引くまで継続するループ型。

ltName: PREMIUM神RUSH
ltEntryRoute: 神バトルRUSH RAGE BURST中に10R「結合崩壊BONUS BURST」を2回獲得して結合崩壊Lv.MAX到達でLT発動。
ltEntryRate: 下位RUSH突入後のTOTAL LT昇格期待度 約48%（必勝本・情報島＋・パチビー等で直接公表）。通常遊技全体基準の総LT到達率は直接公表値を十分な再探索後も確認できず UNVERIFIED_AFTER_RESEARCH。経路値から独自算出しない。
ltContinuationRate: 約85%。ただし公表値は「ぷちBONUS（2R+LT継続）」を除外し、10R+LT継続と2R時短なしの図柄比率のみで算出した定義値。
ltPayoutStructure: PREMIUM神RUSH中は公表主要比率として10R約1500個+LT 約85% / 2R約154個+通常 約15%。これとは別に約154個の「ぷちBONUS（2R+LT継続）」が存在するが、その絶対振り分け率は複数公開テキスト資料で明示されていない。したがって85%へ加算・再計算せず、定義外のLT継続契機として分離保存する。
totalPayoutDistribution: 通常時特図1: 2R約300個+ジャッジメント 100%。ジャッジメント・神バトルRUSH RAGE BURST中: 10R約1500個+RUSH 約77% / 2R約154個+通常 約23%。下位RUSH中の10R継続時、結合崩壊BONUS BURST発生率約77%でLvが上昇し、2回でLT。LT中は別項参照。
timeShortening: 初当り後ジャッジメント 時短108回。下位RUSH・LTは1回転（実質次回大当りまでのループ構造として案内）。公開資料の時短回数表記は0/1/108回。
cTimeOrSpecialSystems: 結合崩壊Lvシステム。下位RUSH中の10R継続時に約77%で結合崩壊BONUS BURSTが発生しLvアップ、2回獲得/Lv.MAXでLT発動。LT中には出玉約154個のぷちBONUS（2R+LT継続）が別途存在。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。

gameFlow: |
  通常時（1/199.5）
   ↓ 初当り 2R約300個 100%
  ジャッジメント（時短108回 / 実質1/199.8 / 突破約42%）
   ├─ 10R約1500個当選 → 神バトルRUSH RAGE BURST
   └─ 非突破 → 通常時
  神バトルRUSH RAGE BURST（1回転 / 継続約77%）
   ├─ 10R約1500個 約77% → RUSH継続
   │    └─ 継続10Rのうち約77%で結合崩壊BONUS BURST → Lvアップ
   │         └─ 2回獲得 / Lv.MAX → LT「PREMIUM神RUSH」
   └─ 2R約154個 約23% → 通常時
  LT「PREMIUM神RUSH」（1回転 / 公表継続率約85%※）
   ├─ 10R約1500個+LT 約85%※ → LT継続
   ├─ ぷちBONUS 2R約154個+LT → LT継続（絶対振り分け率は公開テキストで未確認）
   └─ 2R約154個+時短なし 約15%※ → 通常時
  ※約85%/約15%はぷちBONUSを除外した図柄比率として公表された定義値。

notes:
- 型式は業界発表で `P LTゴッドイーター199VER-ARB`。HAZUSEでは空白なしの `PLTゴッドイーター199VER-ARB`。同一型式の表記揺れとして扱う。
- 2024-09-02導入の `eゴッドイーター TRIPLE BURST` とは別スペック・別レコード。
- 下位RUSHからLTへのTOTAL昇格期待度約48%は直接公表値。結合崩壊BONUS BURSTの経路確率から独自計算した値ではない。
- PREMIUM神RUSHの「約85%」は、ぷちBONUS（2R+LT継続）を除いた10R LT継続対2R時短なしの図柄比率という特殊な定義。実際の全当りを分母とする単純なLT継続振り分けとは扱わない。
- ぷちBONUSの存在は業界記事、P-WORLD、必勝本、情報島＋、中国三星等で一致するが、確認した公開テキスト資料では絶対振り分け率が開示されない。十分な再探索後も確認できないためUNVERIFIED_AFTER_RESEARCHとし、85%へ推定加算しない。
- HAZUSEのページ上部にPREMIUM神RUSH「約88%」という孤立表示がある一方、同ページ基本スペック本文は約85%、業界一次記事・P-WORLD・必勝本・情報島＋・メーカー系流通資料も約85%で一致する。内部不整合の孤立表示として注記し、採用値は約85%。平均処理しない。
- 出玉は全て払出個数。初当り2R約300個と右打ち2R約154個は同じ2Rでもアタッカー/カウント定義が異なるため分離する。

sources:
- https://news.p-world.co.jp/articles/31946/yugitsushin — 遊技通信、型式/導入日/基本確率/RUSH・LT構造/85%定義、取得2026-09-22
- https://www.p-world.co.jp/machine/database/10356 — P-WORLD、基本スペック/全主要振り分け/ゲームフロー/ぷちBONUS定義、取得2026-09-22
- https://hisshobon.com/machineinfo/99512/ — パチ&スロ必勝本、基本スペック/導入日/出玉/時短、取得2026-09-22
- https://hisshobon.com/machineinfo/99513/ — パチ&スロ必勝本、特図1/右打ち振り分け/結合崩壊Lv、取得2026-09-22
- https://p.hisshobon.jp/machine/4623/1/111738 — パチ&スロ必勝本、下位→LT TOTAL約48%/85%定義、取得2026-09-22
- https://p-johojima.jp/machine_spec/post-15926/ — 情報島＋、下位→LT約48%/主要振り分け、取得2026-09-22
- https://www.pachibee.jp/machines/about/125090009 — パチビー、導入日/LT約48%/ぷちBONUS存在、取得2026-09-22
- https://hazuse.com/machine/pachinko/PX0315/ — HAZUSE、型式/検定番号/基本スペック/ゲームフロー、取得2026-09-22
- https://www.chu-3sei.com/productlist/ — 中国三星、発売日/確率/時短/主要振り分け/ぷちBONUS存在、取得2026-09-22

confidence:
- LT搭載/名称/構造: INDUSTRY（業界一次記事 + 複数解析一致）
- 基本確率/RUSH構造/主要振り分け: ANALYSIS_HIGH（複数一致）
- 下位RUSH→LT TOTAL約48%: ANALYSIS_HIGH（複数資料で直接値一致）
- LT公表継続率約85%とその定義: INDUSTRY（業界記事 + 複数解析一致）
- ぷちBONUS絶対振り分け率: UNVERIFIED_AFTER_RESEARCH
- 通常遊技全体基準LT到達率: UNVERIFIED_AFTER_RESEARCH

missingFields:
- PREMIUM神RUSH中ぷちBONUS（2R+LT継続）の絶対振り分け率
- 通常遊技全体基準の総LT到達率（直接公表値）

conflicts: []
