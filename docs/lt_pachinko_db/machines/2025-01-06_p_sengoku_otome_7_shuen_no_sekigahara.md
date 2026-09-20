# P戦国乙女7 終焉の関ヶ原

machineName: P戦国乙女7 終焉の関ヶ原
manufacturer: アムテックス（平和）
formalModel: P戦国乙女7L9YY7
releaseDate: 2025-01-06
modelType: 399 / LT
status: COMPLETE_CORE
gameType: 1種2種混合 / 下位RUSHなし・RUSH=LT
jackpotProbability: 通常時図柄揃い約1/399.6（強カワチャージ約1/399は別契機）; 乙女RUSH中約1/97.0
initialPayout: 図柄揃い側は真乙女BONUS3000（約3000個）+LTチャレンジ。初回全体振り分けではLTチャレンジ75%、280個+時短50回25%。
rushEntryRate: LTチャレンジ突入75% × 突破約50%。本機は通常RUSHを持たず、突破後の乙女RUSH自体がLT。
rushContinuationRate: N/A（通常RUSHなし）
ltName: 乙女RUSH
ltEntryRoute: 通常時初当りの75%でLTチャレンジへ。LTチャレンジ成功で乙女RUSH（LT）へ。LTチャレンジ内訳は約5000個以上+乙女RUSH 7.2%、約3000個+乙女RUSH 42.8%、約3000個+通常50%。初当り25%側は280個+出陣モード（時短50回）で、引き戻し時は初当りフローへ戻る。
ltEntryRate: LTチャレンジ突入率約75%、チャレンジ突破率約50%。通常初当り全体からの単純直行合算値は資料上の定義を崩して独自算出せず、経路別値を保存。
ltContinuationRate: 約77%
ltPayoutStructure: 特図2・乙女RUSH中は約6000個以上+継続6.0%、約4000個+継続18.5%、約2000個+継続75.5%。したがって右打ち当選はALL約2000個以上+α、約24.5%で2000個以上の上乗せ相当。
totalPayoutDistribution: 特図1はLTチャレンジ75% / 280個+時短50回25%。LTチャレンジは約5000個以上+LT 7.2% / 約3000個+LT 42.8% / 約3000個+通常50%。LT中は約6000個以上6% / 約4000個18.5% / 約2000個75.5%、すべてLT継続。
timeShortening: 出陣モード50回 / 乙女RUSH 140回 / LTチャレンジ等で10000回扱いあり。
cTimeOrSpecialSystems: 強カワチャージ約1/399を図柄揃い約1/399.6と分離。LTチャレンジは実質1/1.0とする解析資料あり。遊タイムなし。
ceilingOrSupport: 遊タイム非搭載。
gameFlow: |
  通常時
   ├─ 初当り75% → 真乙女BONUS3000 → LTチャレンジ
   │                         ├─ 成功約50% → 乙女RUSH（LT・140回・約77%）
   │                         └─ 失敗約50% → 通常時
   └─ 初当り25% → 280個 → 出陣モード（時短50回）
                                  └─ 引き戻し → 初当りフロー
notes: |
  2025-01-06導入の399版。後発のLLサイズ299ver.および99ver.とは別レコードとして扱う。
  業界一次記事は「ラッキートリガーとなる乙女RUSH」と明記。通常RUSH→上位LTという二段構造ではなく、LTチャレンジ突破後のRUSH自体がLT。
  出玉は各資料の払出表記を採用。約3000/5000/2000/4000/6000は複数大当りとその他入賞の合算表記を含む。

sources:
- url: https://news.p-world.co.jp/articles/29241/greenbelt
  type: INDUSTRY
  retrievedAt: 2026-09-21
  supports: 導入日、LT搭載、確率、LTチャレンジ75%/突破約50%、乙女RUSH約77%、全主要振り分け、電サポ
- url: https://1geki.jp/pachinko/p_otome7/
  type: ANALYSIS_HIGH
  retrievedAt: 2026-09-21
  supports: 1種2種混合、確率、LTチャレンジ、乙女RUSH、140回、払出
- url: https://1geki.jp/pachinko/p_otome7/51/
  type: ANALYSIS_HIGH
  retrievedAt: 2026-09-21
  supports: LTチャレンジ突破約50%、成功で乙女RUSH
- url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/amutex_pachi/063/kh01.php
  type: ANALYSIS_HIGH
  retrievedAt: 2026-09-21
  supports: 型式P戦国乙女7L9YY7、導入日、ゲーム構造、LTチャレンジ/乙女RUSH
- url: https://p-kn.com/pachinko/4238/
  type: ANALYSIS_HIGH
  retrievedAt: 2026-09-21
  supports: 導入日、通常/RUSH確率、電サポ

confidence: INDUSTRY + ANALYSIS_HIGH
missingFields: []
conflicts: []
retrievedAt: 2026-09-21
