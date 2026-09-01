# ジャンキージャグラー

machineName: ジャンキージャグラー
manufacturer: 北電子
releaseDate: 2008-04-06
releaseDateConfidence: INDUSTRY_DELIVERY_START
releaseDateNote: 当時グリーンべるとは月光仮面と同時に2008-04-06より納品開始と明記。パチビー等は2008-04-07を導入日とするため、納品開始/ホール導入日のラベル差として双方を保持する。
generation: 5号機初期
systemType: ノーマルA / 完全告知 / ボーナス主体（RT・ART・ATなし）
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## 性能コア

payoutRateBySetting:
- manufacturerPublishedSeries: `97.08 / 98.24 / 101.55 / 103.48 / 105.13 / 107.33%`
- simulationPieroBellMissSeries: `97.9 / 99.1 / 102.5 / 104.4 / 106.1 / 108.3%`
- status: DEFINITION_VARIANT_NOT_AVERAGED
- note: 前者は複数解析資料でメーカー発表値として一致。後者はシミュレーション資料の「ピエロ/ベルこぼし時」。条件が異なるため平均化しない。完全取得時はさらに別の理論値となる。

initialHitBySetting:
- BIG: `1/292.6 / 1/282.5 / 1/268.6 / 1/260.1 / 1/252.1 / 1/240.9`
- REG: `1/512.0 / 1/512.0 / 1/431.2 / 1/399.6 / 1/381.0 / 1/364.1`
- ボーナス合成: `1/186.2 / 1/182.0 / 1/165.5 / 1/157.5 / 1/151.7 / 1/145.0`
- crosscheck: パチビー、K-Navi、ジャグラー解析資料、後年DBで一致。

baseGamesPer50:
- 完全取得時: `36.36 / 36.36 / 36.36 / 36.37 / 36.37 / 36.38G/50枚`
- ピエロ/ベルこぼし時: `35.76 / 35.76 / 35.77 / 35.77 / 35.78 / 35.78G/50枚`
- practicalSummary: 後年DBの約35.8G/50枚と「こぼし時」系列が整合。
- note: 技術介入/小役取得条件でベースが変わるため定義を分離して保存。

netIncrease:
- NOT_APPLICABLE_NO_RT_ART_AT

basicPayout:
- BIG: 約309枚
- REG: 約143枚
- payoutCondition: BIGは345枚を超える払い出しで終了、REGは150枚を超える払い出しで終了。

modeSpecificMinimumData:
- 5号機ジャグラーシリーズ第4弾。
- GOGO!ランプによる完全告知。
- 小役同時抽選あり。チェリー成立時にもボーナス期待。
- RT/ART/ATなし。
- 通常ゲーム数天井なし。

## resetBehavior (mission v0.7)

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_MODE_STATE_CONFIRMED
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED
modeAfterReset: NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED
stateAfterReset: NOT_APPLICABLE_NO_INTERNAL_STATE_SYSTEM_CONFIRMED
advantageousSectionReset: NOT_APPLICABLE
resetBenefits: NONE_CONFIRMED
resetPenalties: NONE_CONFIRMED
resetDetection: UNVERIFIED_AFTER_RESEARCH
numericResetData: NONE_CONFIRMED

### resetBehavior 調査メモ

- P-WORLD/パチビー/K-Navi/解析DBでRT・ART・ATを持たないノーマルA、かつ通常ゲーム数天井なしを確認。ゲーム数天井、周期CZ、朝一専用モード、内部状態システムに関するリセット対象は確認されない。
- `ジャンキージャグラー / Junkie Juggler / 北電子` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / ガックン / 初期出目 / 天井` を組み替え、当時業界・攻略解析・旧DB・回顧資料を横断した。
- 後年ジャグラー各機で設定変更後1G目のガックン解説は多数存在するが、ジャンキージャグラー固有の一次/当時資料として直接確認できなかったため、シリーズ一般論を転記せず `resetDetection: UNVERIFIED_AFTER_RESEARCH` とした。
- 設定変更時/電源OFF→ONのみの場合の初期出目、リール挙動、ボーナス成立状態の処理についても本機固有の直接根拠を発見できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井短縮、朝一モード、設定変更専用の当選率・恩恵・不利、公開朝一数値は `NONE_CONFIRMED`。
- 有利区間制度導入前の5号機のため `advantageousSectionReset: NOT_APPLICABLE`。

## conflicts

- CONFLICT_DATE_LABEL: 当時グリーンべると/P-WORLD業界ニュースは `2008-04-06 納品開始`、パチビー等は `2008-04-07 導入`。定義差として双方を保持。
- PAYOUT_DEFINITION_VARIANT: メーカー発表値 `97.08〜107.33%` と、シミュレーションのピエロ/ベルこぼし時 `97.9〜108.3%` は条件が異なる。平均化しない。

## missingFields

- 設定変更時の本機固有初期挙動
- 電源OFF→ONのみの場合の本機固有初期挙動
- ガックン/初期出目等による本機固有の設定変更判別

## sources

取得日: 2026-09-01

1. グリーンべると「北電子がジャグラー最新作を発表」 — 2008-04-06納品開始、5号機ジャグラー第4弾、BB平均309枚/RB平均143枚、小役同時抽選
   https://web-greenbelt.jp/00003429/
   confidence: INDUSTRY
2. P-WORLD業界ニュース（グリーンべると転載） — 同内容を照合
   https://news.p-world.co.jp/articles/2700/greenbelt
   confidence: INDUSTRY
3. パチビー「ジャンキージャグラー」 — 2008-04-07導入、設定別BIG/REG/合算/機械割、BIG約309枚・REG約143枚、払い出し終了条件
   https://www.pachibee.jp/machines/index/209080017
   confidence: ANALYSIS_HIGH
4. K-Navi「ジャンキージャグラー」 — 設定別BIG/REG、ノーマル/完全告知を照合
   https://p-kn.com/slot/783/
   confidence: ANALYSIS_HIGH
5. ジャグラー解析攻略「ジャンキージャグラー」 — 設定別BIG/REG/合算、メーカー発表機械割、獲得枚数/払い出し条件
   https://juggler7.com/junkie/index.html
   confidence: ANALYSIS_HIGH
6. けんのスロットシミュレーション「ジャンキージャグラー解析情報」 — 50枚ベースの完全取得時/ピエロ・ベルこぼし時、シミュレーション出玉率、天井なし
   https://kenslo65536.com/kaiseki/juggler-janki.html
   confidence: ANALYSIS_SINGLE
7. P-WORLD「ジャンキージャグラー」 — ノーマルタイプ、BIG約309枚/REG約143枚、RT等を持たない単純ボーナス仕様の補助確認
   https://www.p-world.co.jp/machine/database/5114
   confidence: ANALYSIS_HIGH
8. みんスロ「ジャンキージャグラー」 — 2008-04-07導入、35.8G/50枚、ゲーム数天井非搭載、設定別主要値の後年照合
   https://minslo.com/%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%AD%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BC/
   confidence: RETROSPECTIVE_SUPPORT
9. パチマガスロマガ「ジャグラーミュージアム」 — 2008年4月ジャンキージャグラー（オレンジパネル）の時系列照合
   https://psmaga.com/special/juggler_museum/index.php
   confidence: ANALYSIS_HIGH

## quality

performanceCoreConfidence: INDUSTRY_PLUS_MULTI_ANALYSIS_HIGH
resetBehaviorConfidence: PARTIAL_NOT_APPLICABLE_CORE / UNVERIFIED_MACHINE_SPECIFIC_CHANGE_DETECTION
recordStatus: COMPLETE_CORE / RESET_PARTIAL
