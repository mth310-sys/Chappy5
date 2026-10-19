# Sクランキークレスト

recordNo: 1611
machineName: Sクランキークレスト
aliases: クランキークレスト / SLOTクランキークレスト
manufacturer: ミズホ / ユニバーサルエンターテインメント
formalModel: S/クランキークレスト/CR
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2023-12-04
generation: 6号機
systemType: ノーマル / 技術介入
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- ユニバーサル公式製品ページで2023年12月発売、遊技通信・必勝本・パチビー等で2023-12-04導入を確認。
- 遊技通信で正式型式 `S/クランキークレスト/CR`、製造元ミズホを確認。
confidence: OFFICIAL / INDUSTRY_HIGH

## bonusProbabilityBySetting
| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/275.4 | 1/407.1 | 1/164.3 |
| 2 | 1/275.4 | 1/370.3 | 1/157.9 |
| 5 | 1/262.1 | 1/336.1 | 1/147.3 |
| 6 | 1/254.0 | 1/304.8 | 1/138.6 |

複数解析/業界資料で一致。
confidence: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## payoutRateBySetting
通常攻略時として確認できた二次資料値:
- 設定1: 98.5%
- 設定2: 99.9%
- 設定5: 103.0%
- 設定6: 105.6%

完全攻略時:
- 設定1: 100.5%
- 設定2: 102.0%
- 設定5: 105.2%
- 設定6: 108.0%

完全攻略値はP-WORLD、遊技通信、パチビー等で一致。通常攻略値は単一二次系統のため定義を分離して保持。
confidence: ANALYSIS_SINGLE_FOR_MARKET / INDUSTRY_HIGH_FOR_FULL攻略

## baseGamesPer50
- 設定1 約39.4G/50枚。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- NOT_APPLICABLE（純粋なノーマルタイプ）。

## basicPayout
- BIG: 最大279枚。
- REG: 最大112枚。
- BIG/REGとも技術介入要素あり。
- BIG後は33G / 66G / 99Gの「クランキーゾーン」に移行。
confidence: OFFICIAL / INDUSTRY_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 天井非搭載。
- ボーナスのみで出玉を増やすノーマルタイプ。
- BIG後クランキーゾーンはボーナス性能そのものではなく演出/遊技区間として記録。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED_FOR_POWER_CYCLE_AND_GACKUN
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井非搭載のためゲーム数天井RESET/短縮はNOT_APPLICABLE。
- 設定変更時固有のボーナス確率優遇、朝一専用モード、専用内部状態の公開仕様は再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_ADV_SECTION / UNVERIFIED_OTHER_INTERNALS

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVERとするなな徹資料あり。
- 朝一クランキーゾーン開始なら据え置き濃厚。前日BIG後のゾーン残りが引き継がれるケースを示す判別材料として扱う。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON単独時のクランキーゾーン残りG、内部演出状態、有利区間の機種固有比較表は、メーカー/業界/主要解析/旧DB・回顧資料を検索語変更して再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的なノーマルタイプ挙動から推定しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 天井ゲーム数: NOT_APPLICABLE。
- クランキーゾーン残りGの設定変更/純電断契約は公開固定値未確認。

### ceilingAfterReset
- NOT_APPLICABLE（天井非搭載）。

### modeAfterReset
- 朝一専用モードは確認できず NOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### stateAfterReset
- リセット時専用の内部状態振り分けは確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- BIG後クランキーゾーンの残りGに関する設定変更時の明示契約は未確認。

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON単独: 機種固有直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE/CARRY

### resetBenefits
- 設定変更時専用の定量的な朝一恩恵は再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時専用の定量的不利要素は再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一「クランキーゾーン」からスタートした場合は据え置き濃厚と、なな徹が明記。
- 有利区間ランプでは設定変更/据え置き判別不可。
- 本機固有のリールガックン条件・発生率は「クランキークレスト 設定変更 ガックン」「朝一 リール初動」「電源OFF ON」等で複数資料系統を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_ZONE_DETECTION / UNVERIFIED_GACKUN

### numericResetData
- 天井: NOT_APPLICABLE。
- 朝一専用公開数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 公開朝一専用の天井/モード/初当り数値: NOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 通常攻略機械割と完全攻略機械割は定義が異なるため平均化せず分離保持。
- 一部二次資料で設定3/4の推定機械割を掲載しているが、本機の公表設定構成は1/2/5/6として扱い、推定値はcanonicalに採用しない。

## missingFields
- inspectionCode: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle detailed behavior: UNVERIFIED_AFTER_RESEARCH
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2023-12-04 canonical群7機目として処理。
- canonical 7機は全件処理完了。
- `パチスロ琉神－30 スイカバージョン` は12/4通常導入表記と12月/12/6一部地域テスト導入表記が競合するため、全国導入群への追加は保留して境界CONFLICTを維持。
- 次回は2023-12-04群の漏れ監査/PB・別型式・地域先行・延期/段階導入監査を行いCLOSED可否を確定後、次の導入日群へ進む。

## sources
取得日: 2026-09-13
- ユニバーサル公式: https://www.universal-777.com/product/slot/crankycrest/
- 遊技通信/P-WORLD 発表・正式型式・スペック: https://news.p-world.co.jp/articles/25535/yugitsushin
- 一撃 発表: https://1geki.jp/repo/20230925uni/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9920
- パチビー: https://www.pachibee.jp/machines/index/223100013
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2570/2
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/655/17985/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0053/
- ぽこすろっと: https://www.nankaikoya.jp/crankycrest-settei/

## status
- coreStatus: COMPLETE_CORE
- resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED_FOR_POWER_CYCLE_AND_GACKUN
