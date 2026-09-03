# 鮪伝説

machineName: 鮪伝説
manufacturer: 大都技研
formalModelName: 鮪伝説 S3
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-04-05
generation: 5号機
systemType: ボーナス + 無限ART
coreStatus: COMPLETE_CORE_RESET_PARTIAL_RELEASE_DATE_CONFLICT_FORMAL_IDENTITY_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直近レコードを再取得し、recordCount 469 / chronologicalFrontier 2010-04-05 / latestMachineAdded「ペガサスW（ニューペガサスブラック）」を正本として継続。
- repo内検索で「鮪伝説」未登録を確認し、2010-04-05同日群の未処理候補として470件目に追加。
- K-Naviとパチビーはホール導入開始を **2010-04-05** とする。当時の事前スペック記事（2010-02-15）は「納品3/22〜・導入3/23〜」と記載しており競合するため、実導入DB側の4/5を主値に採用しつつCONFLICTを保持。
- グリーンべると/P-WORLD業界ニュースは2010-03-12時点で「4月上旬から納品開始予定」と報じ、4/5導入を補強する。

## payoutRateBySetting

- 設定1: **96.5%**
- 設定2: **97.4%**
- 設定3: **99.8%**
- 設定4: **103.8%**
- 設定5: **107.8%**
- 設定6: **111.5%**

P-WORLD、パチビー、当時解析で一致（設定5の精密表記107.84%を丸める資料あり）。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG合成（大漁BIGを含む）
- 設定1: **1/348.60**
- 設定2: **1/343.12**
- 設定3: **1/337.81**
- 設定4: **1/332.67**
- 設定5: **1/327.68**
- 設定6: **1/315.08**

### LIGHT BONUS / REG
- 設定1: **1/819.20**
- 設定2: **1/789.59**
- 設定3: **1/736.36**
- 設定4: **1/668.73**
- 設定5: **1/606.81**
- 設定6: **1/546.13**

### ボーナス合算
- 設定1: **1/244.54**
- 設定2: **1/239.18**
- 設定3: **1/231.58**
- 設定4: **1/222.16**
- 設定5: **1/212.78**
- 設定6: **1/199.80**

補足: P-WORLDは大漁BIGを全設定 **1/16384**、通常BIGを **1/356.2 → 1/321.3** と分離表示。当時解析のBIG合成値と整合する。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約33G/50枚（1000円）**

当時解析記事の本機専用スペックで直接確認。

confidence: ANALYSIS_HIGH_SINGLE_DIRECT

## netIncrease

- 無限ART「大漁道」: **約+1.5枚/G**
- 次回ボーナス成立まで継続する押し順ナビ型ART。

業界発表、K-Navi、P-WORLD、パチビーで一致。

confidence: OFFICIAL_INDUSTRY_MULTI_SOURCE

## basicPayout

- 大漁BIG: **約204枚** / ART突入確定
- BIG: **約204枚**
- LIGHT BONUS（REG/LB）: **約48枚**

confidence: INDUSTRY_DB_MULTI_SOURCE

## ceilingAndMode

- **ボーナス間995G**: ART突入率アップ。
- **ボーナス間1920G**: 天井ART「大漁道」へ突入。
- 通常時には複数の内部モードが存在し、上位モードほどART突入期待度が高い。
- レア小役等から高確状態へ移行し、高確中ボーナスはART期待度が大幅アップ。
- ART「大漁道」は主にボーナスを契機に突入し、継続率/内部モードによりループする。

confidence: INDUSTRY_DB_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_PUBLISHED_BEHAVIOR_EXISTS_DETAILS_NOT_RECOVERED**。K-Navi本機ページに専用解析項目「設定変更後の挙動」が現存し、朝一特典対象機であることは確認できる。ただし当該サブページ本文は現環境で403となり、設定変更時の天井G数クリア/保持、内部モード再抽選の具体値を高信頼本文として回収できなかった。一般的な5号機挙動から推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の995G/1920G進捗、内部モード、高確、ART関連状態の保持について本機固有の直接本文を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井カウンタ、内部モード、高確、ART状態の扱いを本機固有資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に995G/1920Gのゲーム数依存救済が存在することは確定するが、設定変更でのclear/retainは未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更後の短縮天井や専用天井数値は高信頼本文を回収できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。複数内部モードの存在は確定するが、設定変更時の移行先/振分は未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/好機海域等の設定変更・据え置き・電断時状態を高信頼本文で確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **PARTIAL_LOW_CONFIDENCE_MORNING_HIGH_STATE_CLAIM_NOT_PROMOTED**。K-Naviの2010年ユーザーレビューには「朝一100回転高確ねらい」「設定変更がすぐわかる」とする当時利用者記述がある。ただしユーザー投稿単独であり、解析本文を回収できていないため、公開朝一数値や確定恩恵としては採用しない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **PARTIAL_LOW_CONFIDENCE_CLAIM_ONLY**。当時ユーザー投稿に変更判別可能との言及はあるが、判別条件・演出・確率を高信頼資料で回収できず。ガックン等を推測で補完しない。

numericResetData:
- normalCeiling: **995G（ART突入率アップ） / 1920G（天井ART）**
- resetShortenedCeiling: **UNVERIFIED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- publicMorningSpecificProbability: **NONE_HIGH_CONFIDENCE_CONFIRMED**
- lowConfidenceMorningWindowClaim: **100G（当時ユーザー投稿のみ・非採用値）**

resetBehaviorQA: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH

## conflicts

- releaseDate: **CONFLICT**。K-Navi/パチビーは2010-04-05。2010-02-15公開の事前スペック記事は納品3/22〜・導入3/23〜。2010-03-12業界発表は4月上旬納品開始予定で4/5側を補強するため、本DB主値は2010-04-05とするが旧予定値を削除しない。
- BIG表記はP-WORLDが「大漁BIG 1/16384」と通常BIGを分離、当時解析はBIG合成で表示。算出対象差であり性能競合ではない。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange ceiling counter clear/retain: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset mode/state distribution: UNVERIFIED_AFTER_RESEARCH
- high-confidence resetDetection condition: UNVERIFIED_AFTER_RESEARCH
- high-confidence morning-specific numeric probability: NONE_CONFIRMED

## sources

取得日: 2026-09-03

1. K-Navi「鮪伝説」 — https://p-kn.com/slot/1180/ — 2010-04-05導入、ART約+1.5枚/G、攻略項目に天井・設定変更後の挙動を確認 — reliability: ANALYSIS_HIGH
2. パチビー「鮪伝説」 — https://www.pachibee.jp/machines/index/209100007 — 2010-04-05導入、機械割/合算、995G/1920G天井、ART約+1.5枚/G — reliability: INDUSTRY_DB
3. P-WORLD「鮪伝説」 — https://www.p-world.co.jp/machine/database/5890 — BIG/REG/合算、機械割、約204/48枚、995G/1920G天井、ART仕様 — reliability: INDUSTRY_DB
4. 娯楽産業「大都技研 パチスロ新機種『鮪伝説』発表」 — https://www.goraku-sangyo.com/大都技研　パチスロ新機種「鮪伝説」発表/ — 2010-03-12、ART約+1.5枚/G、複数モード/高確仕様 — reliability: INDUSTRY_NEWS
5. P-WORLD/グリーンべると「次回ボーナスまで継続のARTがアツい『鮪伝説』」 — https://news.p-world.co.jp/articles/3872/greenbelt — 2010-03-12、4月上旬納品開始予定、ART/ボーナス仕様 — reliability: INDUSTRY_NEWS
6. 当時解析まとめ「鮪伝説 攻略＆解析情報」 — https://ameblo.jp/pachimatome/entry-10498857544.html — 約33G/50枚、精密BIG/REG/合算、機械割 — reliability: ARCHIVE_ANALYSIS
7. 当時事前スペック記事 — https://ameblo.jp/pachimatome/entry-10459567199.html — 2010-02-15、納品3/22〜・導入3/23〜という旧予定値 — reliability: ARCHIVE_PRE_RELEASE_CONFLICT
8. pachinko’s blog「大都技研『鮪伝説』の筺体＆情報」 — https://pachinko.hatenablog.jp/entry/2010/04/maguroDensetsu — 型式名「鮪伝説 S3」、2010年4月整理 — reliability: RETROSPECTIVE_SINGLE
