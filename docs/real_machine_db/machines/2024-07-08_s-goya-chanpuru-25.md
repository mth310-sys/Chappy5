# S ご～やちゃんぷる～25φ

recordNo: 1662
machineName: S ご～やちゃんぷる～25φ
aliases: Sぱちスロごーやちゃんぷるー25Φ / Sパチスロゴーヤ
manufacturer: KYORAKU
formalModel: SパチスロゴーヤMJK
inspectionCode: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
releaseDate: 2024-07-08
generation: 6.5号機 / メダル機 / 25Φ
systemType: AT（疑似ボーナス / 天国ループ型）
settings: L / 1 / 2 / 4 / 5 / 6（設定3なし）
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- KYORAKU公式は25φ/30φの2スペックを発表。
- 1geki新台カレンダーは2024-07-08導入、25φをKYORAKUとして掲載。
- パチマニアは型式 `SパチスロゴーヤMJK`、2024-07-08導入を掲載。
confidence: OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.9%
- setting4: 102.5%
- setting5: 104.6%
- setting6: 108.0%
- settingL: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
initialHitBySetting:
- setting1: 1/230.4
- setting2: 1/225.2
- setting4: 1/220.6
- setting5: 1/213.2
- setting6: 1/208.4
baseGamesPer50: 約31.1G/50枚（設定1）
netIncrease: 約3.0枚/G
basicPayout:
- BIG BONUS / SPECIAL BIG BONUS: 70G・約210枚
- CHANPURU BONUS / SURPRISE BONUS: 20G・約60枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- モード: 通常A / 通常B / なんくるないさ / 引き戻し / 天国チャンス / 天国 / サプライズ。
- 通常A/B/なんくるないさ最大999G、引き戻し199～200G、天国チャンス599～600G、天国33G以内。
- 天国平均継続約84%、最大約92%、天国中BIG割合約97%、期待獲得約1200枚。
- 天国間2500G到達中のボーナスで次回天国濃厚。
- 30φとは初当り・機械割・モード構成が異なるため別レコード。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GAKKUN_AND_SOME_UI_DETAILS_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井までのゲーム数: RESET。
- モード: 再抽選。設定変更時は通常A / 通常B / なんくるないさのいずれか。
- 状態: 再抽選。
- ゴーヤ観察日記: 再抽選。
confidence: ANALYSIS_HIGH

### carryOverBehavior
- 据え置きは天井進行・内部モード・内部状態を継続する扱い。
- 規定G以外の成立役契機ボーナスでは規定ゲーム数進行を引き継ぐ仕様あり。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON: 天井G数・モード・状態・ゴーヤ観察日記を引き継ぐ。
- 裏ストック・演出モードの電断契約は公開資料で未確定。
confidence: ANALYSIS_HIGH_FOR_CORE / UNVERIFIED_FOR_STOCK_UI

### gameCounterReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 最大天井は通常A/B/なんくるないさで999G。固定短縮天井ではなく、設定変更後は規定G振り分けが浅めに優遇。
- 設定変更後の通常Aでも299G以内のボーナス期待度60%以上とする後年解析あり。
confidence: ANALYSIS_HIGH_FOR_DISTRIBUTION_BIAS / ANALYSIS_SINGLE_FOR_60_PERCENT_SUMMARY

### modeAfterReset
- 通常A / 通常B / なんくるないさへ再抽選。
- 個別モード振り分け率は再探索後も固定公開値なし。
confidence: ANALYSIS_HIGH_FOR_DESTINATIONS / UNVERIFIED_FOR_EXACT_SPLIT

### stateAfterReset
- 内部状態とゴーヤ観察日記を再抽選。
- ゴーヤ観察日記設定変更時: 5月60.2% / 6月33.2% / 7月6.3% / 8月0.4%。必勝本と1gekiで一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更時RESET・電源OFF→ON時引継ぎとする解析資料あり。ただしメーカー一次資料での機種固有説明は未確認。
confidence: ANALYSIS_SINGLE_TO_HIGH

### resetBenefits
- 設定変更後は通常A/B/なんくるないさから開始し、通常時より浅い規定G振り分けに期待。
- ゴーヤ観察日記を再抽選。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更固有の主要不利要素・固定損失率は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 朝一規定G分布は変更推測材料だが確定判別ではない。
- 本機固有ガックン条件/発生率は表記揺れ・型式・メーカー・リセット/据え置き/電源OFF ONで再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- UI/開始ステージ単独による確定判別も未確認。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN_AND_UI

### numericResetData
- setting-change starting modes: 通常A / 通常B / なんくるないさ（個別率PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH）
- ゴーヤ観察日記: 5月60.2% / 6月33.2% / 7月6.3% / 8月0.4%
- normal max ceiling: 999G
- 引き戻し: 199～200G
- 天国チャンス: 599～600G
- heaven: 33G以内
- 天国間天井: 2500G

## conflicts
- 引き戻し/天国チャンス天井は資料に199/599Gと200/600G表記差。到達表記境界差として平均化せず併記。

## missingFields
- inspectionCode: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定Lの出玉率/初当り: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の通常A/B/なんくるないさ個別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 裏ストック・演出モードの純電断契約: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- KYORAKU公式 NEWS: https://www.kyoraku.co.jp/news/detail/756
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
- パチマニア: https://ps-mania.jp/slot/s-goyahchanpuru-25/
- P-WORLD: https://www.p-world.co.jp/machine/database/10077
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/84146/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/84138/
- パチ&スロ必勝本 モード: https://hisshobon.com/machineinfo/84148/
- パチ&スロ必勝本 ゴーヤ観察日記: https://hisshobon.com/machineinfo/84159/
- 1geki 天井/朝一: https://1geki.jp/slot/s_goyah25/3/
- 1geki モード: https://1geki.jp/slot/s_goyah25/42/
- 1geki ゴーヤ観察日記: https://1geki.jp/slot/s_goyah25/43/
- パチマガスロマガ 通常時モード25Φ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/18/tj07.php
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/216301/
- なな徹: https://nana-press.com/kaiseki/machine/775/22455/
