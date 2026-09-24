# eフィーバーキン肉マン

status: COMPLETE_CORE
retrievedAt: 2026-09-25

machineName: eフィーバーキン肉マン
manufacturer: SANKYO（製造: ジェイビー）
formalModel: eフィーバーキン肉マン
certificationNumber: 5P1492
releaseDate: 2026-04-20
modelType: ミドル / スマパチ / LT3.0+
gameType: 1種2種混合 / 直LT / ST（時短）145回
jackpotProbability: 図柄揃い 約1/399.9。資料上の大当り確率 1/349.9。図柄揃い約1/399.9は特図1の1500個大当りと300個RUSH突入大当りの合算として定義される。
initialPayout: 特図1 1500個+LT 約50% / 300個+LT 約1% / 1500個+通常 約49%（払出）
rushEntryRate: 約51%。RUSH突入=LT発動の直LT型。
rushContinuationRate: 下位RUSHなし。LT/RUSHの継続率 約77%。
ltName: 正義超人バトルモード / オールスターモード（解析資料がLTとして明示。RUSH=LT）
ltEntryRoute: 通常時の図柄揃い後ジャッジ成功、PREMIUM ALLSTAR FEVER等から直行。悪魔CHARGEの一部からもLTへ昇格。特図1振り分けでは1500個+LT約50% / 300個+LT約1%。
ltEntryRate: 約51%（特図1 1500個大当りと300個RUSH突入大当りの合算に対するTOTAL突入率）。通常時全抽選を別分母で再計算しない。
ltContinuationRate: 約77%。ST=時短145回。リーチ発生率 約1/92.3、リーチ後の特図2 5回転引き戻し期待度 約89%、c時短を含む時短145回継続率として公表。
ltPayoutStructure: 特図2 7500個 約0.6% / 6000個 約5.6% / 4500個 約20.2% / 3000個 約36.5% / 1500個 約33.1% / 出玉なしSTリセット 約4.0%。すべてLT継続145回。3000/4500/6000/7500個は1500個×2/3/4/5回の合計払出であり単一大当り出玉ではない。
totalPayoutDistribution: 通常時 1500個+LT 約50% / 300個+LT 約1% / 1500個+通常 約49%。右打ちは上記ltPayoutStructure参照。
timeShortening: LT/RUSH 145回。STは時短として扱われ、145回で大当りまたはSTリセットを引けなければ終了。解析資料では残保留なしと明記。
cTimeOrSpecialSystems: c時短当選を含むST145回継続率。右打ち約4.0%に出玉なしSTリセットあり。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時
   ↓ 特図1当選
  1500個+通常 約49% → 通常時
  1500個+LT 約50% / 300個+LT 約1%
   ↓
  LT「正義超人バトルモード / オールスターモード」
  ST（時短）145回・継続約77%
   ↓ リーチ発生 約1/92.3
  特図2 5回転で約89%の出玉当選期待
   ↓
  1500〜7500個 または出玉なしSTリセット
   ↓
  ST145回へ復帰 / 145回スルーで通常時
notes: |
  SANKYO公式オンライン博物館が図柄揃い約1/399.9、LT搭載、RUSH突入約51%、LT発動時1500〜7500個を明示。業界一次記事は型式名「eフィーバーキン肉マン」、ジェイビー製、1種2種混合、約1/399.9→約1/92.3、ST145回、継続約77%を掲載。必勝本・CS-plaza・パチセブンで特図1/特図2振り分けと直LT構造を照合した。
  「RUSH継続約77%」は単純な大当り確率だけではなく、リーチ発生→特図2 5回転の引き戻しとc時短/STリセットを含む公表TOTAL定義。独自再計算しない。
  右打ちの3000〜7500個は複数回1500個大当りの合計払出表示として保存する。
sources:
  - url: https://www.sankyo-fever.jp/collection/993/
    role: メーカー公式オンライン博物館 / LT搭載・基本仕様
    retrievedAt: 2026-09-25
  - url: https://news.p-world.co.jp/articles/32834/yugitsushin
    role: 業界一次記事 / 型式・製造・1種2種混合・確率・ST・継続率
    retrievedAt: 2026-09-25
  - url: https://hisshobon.com/machineinfo/100936/
    role: 解析 / 基本スペック・LT搭載・遊タイム非搭載
    retrievedAt: 2026-09-25
  - url: https://hisshobon.com/machineinfo/100935/
    role: 解析 / LT正式モード名・直LT・終了条件
    retrievedAt: 2026-09-25
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/550/kh03.php
    role: 解析 / 特図1・特図2振り分け
    retrievedAt: 2026-09-25
  - url: https://pachiseven.jp/articles/detail/25877
    role: 解析 / 振り分け・継続率定義・複数大当り合計表記
    retrievedAt: 2026-09-25
  - url: https://hazuse.com/hd/e%E3%83%95%E3%82%A3%E3%83%BC%E3%83%90%E3%83%BC%E3%82%AD%E3%83%B3%E8%82%89%E3%83%9E%E3%83%B3/
    role: 解析 / 型式・検定番号・LT搭載・導入日
    retrievedAt: 2026-09-25
confidence: ANALYSIS_HIGH
missingFields: []
conflicts: []
