machineName: クランキーセレブレーション
manufacturer: アクロス / ACROSS
releaseDate: 2016-10-24
recordNumber: 1019
generation: 5号機 / 5.5号機期
systemType: ノーマルA / ボーナス主体 / 技術介入機
formalModelName: クランキーセレブレーションRE
certificationNumber: 6S0410
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- K-Navi、HAZUSE、ピロ式でホール導入開始2016-10-24を確認。
- グリーンべると当時業界記事では2016-10-23より順次納品予定。ホール導入日は2016-10-24をcanonicalとする。
- HAZUSEで型式名 `クランキーセレブレーションRE`、検定番号 `6S0410` を確認。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
通常手順 / 完全攻略時:
| 設定 | 通常 | 完全攻略 |
|---:|---:|---:|
| 1 | 98.5% | 101.1% |
| 2 | 101.2% | 104.0% |
| 5 | 105.9% | 109.0% |
| 6 | 111.6% | 115.0% |
- グリーンべるとでもフル攻略時設定6=115%を当時業界記事で確認。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/196.80 | 1/431.16 | 1/135.1 |
| 2 | 1/187.25 | 1/409.60 | 1/128.5 |
| 5 | 1/172.92 | 1/387.79 | 1/119.6 |
| 6 | 1/156.78 | 1/344.92 | 1/107.8 |
- HAZUSE精密値。ピロ式・ちょんぼりすたの丸め値と一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約34〜35G/50枚。
- けんスロの設定差レンジ表記は34.0〜35.4G/50枚。
- 代表値と設定差レンジを定義差として併記する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- NOT_APPLICABLE_NORMAL_A_TYPE。

## basicPayout
- BIG: 技術介入でMAX250枚。技術介入なし238枚の整理資料あり。
- REG: 技術介入でMAX103枚。技術介入なし91枚の整理資料あり。
- 一撃でもBIG MAX250枚、REG MAX103枚を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナスのみで出玉を増やすノーマルAタイプ。
- 天井機能非搭載。
- 通常ゲーム数管理、AT/ART、CZ、朝一専用ゲーム数モードは非搭載。
- サイドランプ演出には告知モードA〜Dがあるが、通常時の全モード移行詳細はミッションv0.7の物差し用途を超えるため収集しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_LIMITED_MACHINE_SPECIFIC_DETECTION_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 天井・通常時ゲーム数管理・AT/ART状態が存在しないため、それらのリセット恩恵/不利は NOT_APPLICABLE。
- 本機固有の設定変更時専用モード、朝一専用当選率、短縮天井は、表記揺れ・型式名・メーカー名・「設定変更/リセット/朝一/ガックン」を組み替えた再探索後も NONE_CONFIRMED_AFTER_RESEARCH。
- 成立済みボーナス状態など特殊局面の設定変更処理は直接資料を固定できず UNVERIFIED_AFTER_RESEARCH。一般的なAタイプ挙動から推定しない。

### carryOverBehavior
- 天井・ゲーム数天井・AT/ARTモードが存在しないため、宵越し天井価値は NOT_APPLICABLE。
- 据え置き固有の朝一恩恵/不利は NONE_CONFIRMED_AFTER_RESEARCH。
- 特殊局面の内部状態保持は直接資料なしのため UNVERIFIED_AFTER_RESEARCH。

### powerCycleBehavior
- 純電源OFF→ONで比較対象となる天井/ゲーム数モードは NOT_APPLICABLE。
- 電源OFF→ONのみの場合のリール初動、告知表示、成立済みボーナス等の本機固有挙動は十分な再探索後も直接資料を固定できず UNVERIFIED_AFTER_RESEARCH。

### gameCounterReset
- NOT_APPLICABLE_NO_CEILING_GAME_COUNTER。

### ceilingAfterReset
- NOT_APPLICABLE_NO_CEILING。

### modeAfterReset
- 朝一専用ゲーム数モード/天井モード: NOT_APPLICABLE。
- サイドランプの演出告知モードA〜Dは存在するが、設定変更時専用の初期振り分けは NONE_CONFIRMED_AFTER_RESEARCH。

### stateAfterReset
- AT/ART/CZ等の長期内部状態: NOT_APPLICABLE。
- 本機固有の特殊局面については UNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 天井短縮、朝一高確、専用CZ等: NONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 前日天井進捗消失等: NOT_APPLICABLE_NO_CEILING。
- その他の設定変更固有不利: NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 機種名/略称「クラセレ」/型式RE/アクロスと「設定変更」「朝一」「リセット」「ガックン」「電源」を組み替えて当時解析・後年資料を再探索。
- 本機固有のガックン有無や、設定変更と純電断を確定識別できる公開契約は固定できず NONE_CONFIRMED_AFTER_RESEARCH。
- ボーナス確率・小役確率は通常の設定推測要素だが、朝一の設定変更判別そのものではないためresetDetectionへは転用しない。

### numericResetData
- 設定変更専用の公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH。

## dataQualityNotes
- 導入日・メーカー・型式・検定番号は複数資料一致。
- 通常機械割/完全攻略機械割、BIG/REG/合算、ベース、最大獲得枚数は複数解析資料で一致。
- 50枚ベースの「約34G」「約34〜35G」「34.0〜35.4G」は代表値/丸め/設定差レンジの定義差として扱い、CONFLICTにしない。
- 本機はノーマルAで天井非搭載のため、resetBehaviorの主要比較項目は多くがNOT_APPLICABLE。存在しない恩恵を一般論で補わない。

## conflicts
- NONE_CONFIRMED_FOR_CORE_VALUES。

## missingFields
- 本機固有の設定変更/純電断時の特殊局面（成立済みボーナス等）処理: UNVERIFIED_AFTER_RESEARCH
- 本機固有の朝一ガックン/初期出目等による変更確定契約: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. HAZUSE — クランキーセレブレーション（型式・検定番号・導入日・ボーナス確率・天井非搭載）
   - https://hazuse.com/machine/pachislot/6S0410/
   - https://hazuse.com/machine/pachislot/6S0410/genre/201/
2. K-Navi — クランキーセレブレーション（2016-10-24ホール導入）
   - https://p-kn.com/slot/2627/
3. グリーンべると — フル攻略時の出玉率は脅威の115%（2016-10-03、10/23納品予定）
   - https://web-greenbelt.jp/00008988/
4. ピロ式パチスロ記 — 解析情報（導入日、機械割、ボーナス、ベース、完全攻略値）
   - https://piro-shiki.com/cranky-celebration-kaiseki/
5. ちょんぼりすた — 設定判別・打ち方・解析まとめ（導入日、通常/完全攻略機械割、ボーナス、ベース）
   - https://chonborista.com/slot/acros-slot/26802/comment-page-7/
6. けんのスロットシミュレーション — 解析情報（34.0〜35.4G/50枚、技術介入有無の獲得枚数）
   - https://kenslo65536.com/kaiseki/cranky-celebration.html
7. 一撃 — ボーナス概要（BIG MAX250枚、REG MAX103枚）
   - https://1geki.jp/slot/s_crankycelebration/61/
8. 一撃 — 演出告知モード移行抽選（サイドランプ告知モードA〜Dの存在確認）
   - https://1geki.jp/slot/s_crankycelebration/43/
9. すろぱちくえすと — 2016年導入日順一覧（10/17→10/24境界確認）
   - https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
