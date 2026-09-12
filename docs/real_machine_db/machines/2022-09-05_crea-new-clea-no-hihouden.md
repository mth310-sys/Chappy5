# CREA Newクレアの秘宝伝

recordNo: 1520
machineName: CREA Newクレアの秘宝伝
manufacturer: 大都技研
formalModel: S CREA～Newクレアの秘宝伝～A2
inspectionCode: 1S1758
releaseDate: 2022-09-05
generation: 6.5号機
systemType: ノーマルAタイプ / RT非搭載 / リーチ目主体

## payoutRateBySetting
- 設定1: 97.6%
- 設定2: 98.8%
- 設定3: 100.2%
- 設定4: 103.2%
- 設定5: 106.1%
- 設定6: 110.1%

Greenbelt、HAZUSE、パチマガスロマガ系、なな徹系ほかで主系列が一致。

信頼度: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
### BIG
- 設定1: 1/243.6
- 設定2: 1/240.9
- 設定3: 1/238.3
- 設定4: 1/230.8
- 設定5: 1/220.7
- 設定6: 1/205.4

### REG
- 設定1: 1/409.6（主系列）
- 設定2: 1/394.8
- 設定3: 1/360.1
- 設定4: 1/310.6
- 設定5: 1/281.3
- 設定6: 1/251.1

### ボーナス合算
- 設定1: 1/152.8
- 設定2: 1/149.6
- 設定3: 1/143.4
- 設定4: 1/132.4
- 設定5: 1/123.7
- 設定6: 1/113.0

信頼度: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約39G/50枚（設定1）。
- Greenbelt、パチマガスロマガ、営業資料系で一致。

信頼度: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- NOT_APPLICABLE（RT/AT/ART非搭載の純ノーマルAタイプ）。

## basicPayout
- BIG: 最大251枚。
- REG: 最大71枚。
- BIG/REGとも1度だけ逆押し適当打ちで13枚役を獲得後、順押し適当打ちで最大枚数を獲得可能。

信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- ボーナスのみで出玉を増やすノーマルAタイプ。
- RT非搭載。
- 通常時はドット / ストーリー / ミッション / バカンス / シンプルの5演出モードから選択可能。これは演出選択であり、天井・高確・AT等の内部モードとは別。
- リーチ目総数2,030通り。
- 天井機能非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 天井、AT/ART/CZ、朝一天井モードは機種仕様上 `NOT_APPLICABLE`。
- 本機固有の設定変更時に成立済みボーナスフラグ、告知状態、選択演出モード、リール初期挙動がどう処理されるかを直接示す公開解析は、機種名・正式型式・検定番号・メーカー・シリーズ名を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 解析DBで「設定変更 -」とする資料は確認したが、具体的契約を示さないため推測補完しない。

### carryOverBehavior
- 据え置き時の成立済みボーナスフラグ、告知状態、選択演出モード等の機種固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- 天井・AT/CZモード等の引継ぎは `NOT_APPLICABLE`。

### powerCycleBehavior
- 純電源OFF→ON時の成立済みボーナスフラグ、告知状態、選択演出モード等の機種固有契約は、再探索後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井・AT/CZモード等は `NOT_APPLICABLE`。

### gameCounterReset
- 天井非搭載のため `NOT_APPLICABLE`。

### ceilingAfterReset
- 天井非搭載。設定変更専用短縮天井も `NOT_APPLICABLE`。

### modeAfterReset
- 天井・AT/CZ・高確を管理する朝一専用モードは `NOT_APPLICABLE`。
- 5種類の通常時「モード」は演出選択であり、リセット恩恵を表す内部モードとして扱わない。

### stateAfterReset
- 朝一客行動へ影響する設定変更専用の高確/内部状態は `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- ボーナスのみで出玉を増やすRT非搭載ノーマル機で、AT/ARTの有利区間を用いた出玉システムは `NOT_APPLICABLE`。

### resetBenefits
- 設定変更専用の天井短縮、朝一モード優遇、高確スタート、初当たり優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `CREA Newクレアの秘宝伝 / Newクレア / S CREA～Newクレアの秘宝伝～A2 / 1S1758 / 大都技研 / クレアの秘宝伝 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン / リール始動` を組み替えて再探索。
- 本機固有のガックン条件/発生率、朝一出目・液晶表示・ランプ等による設定変更/据え置き判別契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- REG確率、小役確率、ボーナス中演出等は設定推測要素であり、朝一の変更判別とは別なのでresetDetectionへ転用しない。

### numericResetData
- 設定変更専用の公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井短縮値: `NOT_APPLICABLE`。

### publicMorningNumbers
- 朝一専用の当選率、内部モード振り分け、短縮天井、リセット恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- 検索語: `CREA Newクレアの秘宝伝 / Newクレアの秘宝伝 / ニュークレア / S CREA～Newクレアの秘宝伝～A2 / 1S1758 / 大都技研 / クレアの秘宝伝 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / モード / ガックン / リール始動 / 有利区間`。
- 大都技研公式、Greenbelt/P-WORLD、遊技日本、HAZUSE、1geki、パチマガスロマガ、なな徹/ななプレス、当時営業資料系、後年DBを横断。
- 天井非搭載、RT非搭載ノーマルAタイプは複数資料で固定。設定変更固有の朝一恩恵/不利、電断時の低レイヤ状態、ガックン等は直接資料が見つからず、一般的ノーマル機の挙動から推測補完していない。

## conflicts
- REG設定1はGreenbelt、HAZUSE、営業資料系、複数解析が `1/409.6`。一方、なな徹/ななプレス系には `1/406.9` 表記がある。合算1/152.8および他設定は一致するため、平均せず `CONFLICT` として保持し、canonicalは多数かつ当時業界資料と一致する1/409.6。
- 機械割は主系列が `97.6 / 98.8 / 100.2 / 103.2 / 106.1 / 110.1%`。後年DBの一部に設定3=100.0%、設定4=102.0%、設定5=105.5%等の別系列があるため、平均せず主系列をcanonicalとする。
- 導入日は大都技研公式設置店検索公開日、遊技日本実導入記事、Greenbeltスケジュール等が2022-09-05で一致。一部導入前資料の「9/4予定」は事前予定値として採用しない。

## missingFields
- 本機固有の設定変更/据え置き/純電断時の成立済みボーナスフラグ・告知状態・選択演出モード等の直接契約
- 本機固有のガックン/初期出目/表示等による設定変更判別情報

## sources
取得日: 2026-09-13

1. 大都技研公式 — CREA Newクレアの秘宝伝
   - https://www.daitogiken.com/contents/product/slot/newcrea/
   - 2022-09-05設置店検索公開、製品公式ページを確認。
   - reliability: OFFICIAL
2. Greenbelt / P-WORLD — 新台発表
   - https://web-greenbelt.jp/post-62199/
   - 2022-09-05導入予定、Aタイプ、BB/RB/合算、出玉率、約39G/50枚、BIG251枚・REG71枚を確認。
   - reliability: INDUSTRY
3. Greenbelt / P-WORLD — 2022-09-05新台スケジュール
   - https://news.p-world.co.jp/articles/21494/greenbelt
   - 同日パチスロ6機と本機97.6〜110.1%を確認。
   - reliability: INDUSTRY
4. 遊技日本 — 9/5新台導入
   - https://yugi-nippon.com/pachinko-new-machine/post-53661/
   - 正式型式 `S CREA～Newクレアの秘宝伝～A2`、全国導入2022-09-05、ノーマルタイプ、合算約1/152〜1/113を確認。
   - reliability: INDUSTRY
5. HAZUSE — CREA Newクレアの秘宝伝
   - https://hazuse.com/machine/pachislot/1S1758/
   - 検定番号1S1758、6.5号機、RT非搭載ノーマル、天井非搭載、BIG251枚・REG71枚、設定別確率を確認。
   - reliability: ANALYSIS_HIGH / INDUSTRY_DB
6. 1geki — 天井/設定変更
   - https://1geki.jp/slot/s_crea_new/3/
   - 天井非搭載を確認。具体的な設定変更恩恵・短縮天井は掲載なし。
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ — 通常時小役/ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/83/tj02-1.php
   - 約39G/50枚（設定1）を確認。
   - reliability: ANALYSIS_HIGH
8. パチマガスロマガ — ボーナス概要
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/83/bn01.php
   - BIG251枚、REG71枚、枚数調整手順を確認。
   - reliability: ANALYSIS_HIGH
9. なな徹/ななプレス — ボーナス確率/機械割
   - https://nana-press.com/kaiseki/machine/426/10738/
   - 設定別機械割、約39G/50枚を確認。REG設定1のみ1/406.9表記で主系列とCONFLICT。
   - reliability: ANALYSIS_HIGH
10. 当時営業資料系 / PiDEA X
   - https://pidea.jp/articles/1657784969
   - 約39G/50枚、BIG251枚、REG71枚、BIG/RB/合算、97.6〜110.1%を確認。
   - reliability: INDUSTRY_SECONDARY
11. パチスロ立ち回り講座 — 2022-09-05導入一覧
   - https://crankyseven.com/newmachine-info.htm
   - 2022-09-05群6機を確認。
   - reliability: SECONDARY_CALENDAR
12. イチカツ — 2022年新台一覧
   - https://ichikatsu.com/newslot2022/
   - 2022-09-05群6機を確認。
   - reliability: ANALYSIS_SECONDARY

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
confidence: OFFICIAL_INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_CORE / RESET_SOURCE_LIMITED
