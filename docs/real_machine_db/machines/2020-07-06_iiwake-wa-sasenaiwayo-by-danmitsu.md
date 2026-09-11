# PACHISLOT言い訳はさせないわよby壇蜜

No: 1360
machineName: PACHISLOT言い訳はさせないわよby壇蜜
machineNameVariants: PACHISLOT言い訳はさせないわよby壇蜜 / パチスロ言い訳はさせないわよ！by壇蜜 / 言い訳はさせないわよ by壇蜜 / S壇蜜 / SダンミツBB
manufacturer: ボーダー（WORLD表記あり）
releaseDate: 2020-07-06
formalModelName: SダンミツBB
certificationNumber: 0S0160

generation: 6号機
systemType: ノーマルAタイプ / 完全告知 / 技術介入 / 3段階設定（3・5・6）

## identity / release
- HAZUSEは型式 `SダンミツBB`、検定番号 `0S0160`、メーカー ボーダー、導入開始日2020-07-06を掲載。
- グリーンべると/P-WORLD業界ニュースは2020-04-10付検定通過型式として `SダンミツBB（ボーダー）` を掲載。
- Amusement Japanは総販売元インテグレート、ボーダー製で、2020-07-05から納品予定の試験導入販売と報道。解析DBの導入開始日は2020-07-06で一致するため本DBでは2020-07-06をcanonicalとする。

## payoutRateBySetting
フリー打ち / 完全攻略:
| 設定 | フリー打ち | 完全攻略 |
|---:|---:|---:|
| 3 | 98.01% | 101.84% |
| 5 | 100.58% | 104.40% |
| 6 | 103.90% | 107.68% |
- Amusement Japan、当時営業資料掲載、ちょんぼりすたで一致。HAZUSEは完全攻略値101.84 / 104.40 / 107.68%を掲載。
- reliability: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
BIG / REG / 合算:
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 3 | 1/219.9 | 1/219.9 | 1/110.0 |
| 5 | 1/178.6 | 1/356.2 | 1/118.9 |
| 6 | 1/203.5 | 1/176.2 | 1/94.4 |
- Amusement Japan、HAZUSE、ちょんぼりすたで一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約41.10G/50枚（全設定共通）。
- HAZUSE、当時営業資料、解析資料で一致。
- reliability: ANALYSIS_HIGH / INDUSTRY_SECONDARY

## netIncrease
- NOT_APPLICABLE（ノーマルAタイプ。AT/ART純増概念なし）。

## basicPayout
- BIG: 209枚を超える払い出しで終了。市場DBでは基本獲得を約200枚と表記。
- REG: 84枚を超える払い出しで終了。市場DBでは基本獲得を約80枚と表記。
- 物差し比較では「BIG約200枚 / REG約80枚」を実獲得の代表値として扱い、209/84は払い出し終了条件として定義を分離する。

## modeSpecificMinimumData
- 天井機能非搭載。
- 完全告知。ボーナス成立ゲームの告知比率は先告知25% / 後告知75%。
- 設定は3・5・6の3段階。
- 技術介入で完全攻略時機械割がフリー打ち値より約3.8pt高い特殊な設計。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_NONAT_RESET_CORE_WITH_PUBLIC_CONTRACT_GAPS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 本機はノーマルAタイプで、天井・CZ・AT・周期・モード管理を持たない。
- 設定変更時にリセットされる天井G、朝一専用モード、AT状態などは `NOT_APPLICABLE`。
- 設定変更時のボーナス内部成立状態、初期出目、リール挙動などについて本機固有の公開契約は固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時に引き継ぐ天井G、CZスルー、モード、AT状態は存在しないため `NOT_APPLICABLE`。
- ボーナス内部成立状態などノーマル機固有の電断/据え置き細部は、本機固有資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 電源OFF→ONで比較すべき天井G・モード・状態・有利区間ゲーム数は本機のゲーム性上 `NOT_APPLICABLE`。
- 純電断時のボーナス内部成立状態や出目復元については公開された本機固有契約を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 天井非搭載のため、朝一客が狙える内部天井ゲーム数のRESET/CARRY_OVER概念は `NOT_APPLICABLE`。
- 表示ゲームカウンタのホール設備側挙動は実機性能契約ではないため対象外。

### ceilingAfterReset
- 天井非搭載。
- リセット短縮天井なし（NOT_APPLICABLE）。

### modeAfterReset
- 朝一専用モード、通常モードテーブル、周期モードなし（NOT_APPLICABLE）。

### stateAfterReset
- AT/CZ高確等の内部状態なし（NOT_APPLICABLE）。
- ボーナス成立フラグの電断処理は本機固有公開資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機はボーナスのみで出玉を増やすノーマルタイプで、公開解析上、有利区間を利用したAT/CZ/周期/天井管理はない。
- 朝一客・ホール運用に影響する有利区間リセット恩恵は `NOT_APPLICABLE_TO_GAMEPLAY`。
- 設定変更/電断時の規則上の内部管理まで推測補完しない。

### resetBenefits
- NONE_CONFIRMED。
- 天井短縮、朝一高確、専用モード、CZ優遇などのリセット恩恵なし。

### resetPenalties
- NONE_CONFIRMED。

### resetDetection
- 本機固有のガックン、初期出目、ランプ状態、液晶表示等による設定変更/据え置き判別契約を、機種名・型式名・メーカー名と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 有利区間」を組み替えて検索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 壇蜜ボイスは設定推測要素であり、設定変更判別ではないため混入しない。

### numericResetData / publicMorningNumbers
- RESET_SPECIFIC_PUBLIC_NUMERIC_DATA_NOT_FOUND_AFTER_RESEARCH。
- 営業資料には通常時の100G以内ボーナス当選率として設定3 59.89% / 設定5 57.01% / 設定6 65.51%があるが、これは設定変更専用・朝一専用数値ではないためresetBehaviorの恩恵値には採用しない。

## resetBehavior 再探索メモ
2026-09-11。`PACHISLOT言い訳はさせないわよby壇蜜 / 言い訳はさせないわよ / S壇蜜 / SダンミツBB / ボーダー / WORLD` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / 有利区間` を組み替え、業界記事、HAZUSE、P-WORLD、ちょんぼりすた、当時営業資料系記事、後年DBを横断。ノーマルAタイプかつ天井非搭載であることは複数一致。本機固有のガックン・初期出目・電断時ボーナス成立状態等は直接契約を固定できなかったため推測で補完していない。

## sources
取得日: 2026-09-11

1. Amusement Japan「『パチスロ壇蜜』試験導入販売を開始」2020-06-02
   - https://amusement-japan.co.jp/article/detail/10001761/
   - ボーダー製、総販売元インテグレート、納品7/5予定、設定3/5/6、BIG/REG/合算、フリー打ち/完全攻略出玉率。
   - reliability: INDUSTRY

2. HAZUSE「パチスロ言い訳はさせないわよ！by壇蜜」
   - https://hazuse.com/machine/pachislot/0S0160/
   - 型式SダンミツBB、検定0S0160、導入2020-07-06、ボーダー、BIG/REG/合算、41.10G/50枚、完全攻略機械割、天井非搭載、209/84枚超払い出し終了条件。
   - reliability: ANALYSIS_HIGH_DATABASE

3. グリーンべると / P-WORLD業界ニュース「『S／アナターのオット！？はーです』『Sダンミツ』など検定通過」2020-04-14
   - https://news.p-world.co.jp/articles/13302/greenbelt
   - 2020-04-10付検定通過型式 `SダンミツBB（ボーダー）`。
   - reliability: INDUSTRY

4. ちょんぼりすた「壇蜜 スロット新台 言い訳させないないわよ!by壇蜜」
   - https://chonborista.com/slot/border/114359/
   - 2020-07-06導入、ノーマルタイプ、41.1G/50枚、天井非搭載、設定別BIG/REG/合算、フリー打ち/完全攻略出玉率、告知比率等。
   - reliability: ANALYSIS_HIGH

5. P-WORLD「パチスロ言い訳はさせないわよ!by壇蜜」
   - https://www.p-world.co.jp/machine/database/9208
   - 6号機ノーマル完全告知、BIG約200枚/REG約80枚の市場向け基本獲得表記。
   - reliability: INDUSTRY_DATABASE

6. パーラーフルスロットル「営業資料公開」2020-06-01
   - https://parlourfullslotl.com/archives/34618
   - 設定別合算、BIG/REG、フリー/完全攻略出玉率、ベース41.10G、100G連荘率を営業資料画像由来で掲載。
   - reliability: SECONDARY_SALES_MATERIAL

## missingFields
- 本機固有のガックン/初期出目/ランプ等による設定変更判別契約
- 純電源OFF→ON時のボーナス内部成立状態に関する本機固有公開契約
- 設定変更時のリール初期挙動に関する本機固有公開契約

## conflicts
- NONE_NUMERIC_CORE。
- 名称表記は `PACHISLOT言い訳はさせないわよby壇蜜` / `パチスロ言い訳はさせないわよ！by壇蜜` / `WORLD(ボーダー)` 等の揺れがあるが、型式 `SダンミツBB`・検定番号 `0S0160` により同一機種と固定。
- 100G以内当選率について一部記事に「設定1」とする誤記があるが、本機の設定構成は3・5・6。営業資料値は設定3/5/6として保持。

## reliabilitySummary
- identity: INDUSTRY / ANALYSIS_HIGH_DATABASE
- releaseDate: INDUSTRY / ANALYSIS_HIGH
- payoutRate: INDUSTRY / ANALYSIS_HIGH
- bonusProbabilities: INDUSTRY / ANALYSIS_HIGH
- base: ANALYSIS_HIGH / SALES_MATERIAL
- basicPayout: ANALYSIS_HIGH_DATABASE / INDUSTRY_DATABASE
- resetBehavior: ANALYSIS_HIGH for NOT_APPLICABLE ceiling/mode structure; UNVERIFIED for machine-specific detection and electrical-state details

status: COMPLETE_CORE / RESET_QA_COMPLETE_WITH_MACHINE_SPECIFIC_DETECTION_GAPS
