# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **691**
- latestMachineAdded: **パチスロ 喰霊－零－**（オーイズミ）
- latestRecord: `docs/real_machine_db/machines/2012-10-09_garei-zero.md`
- chronologicalFrontier: **2012-10-09**
- frontierLatestExactDateMachine: **パチスロ 喰霊－零－**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-10-09_GROUP__NEXT_BOUNDARY_2012-10-10_TO_10-21**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコードを確認。
- 開始時main正本は recordCount 690 / chronologicalFrontier 2012-10-09 / 10-09群OPEN。会話上の以前の地点よりmainが先行していたためGitHub正本を優先。
- 前handoff最優先候補「パチスロ 喰霊－零－」はrepo未登録を確認し、691件目として追加。

## 今回追加 — パチスロ 喰霊－零－

### 識別

- manufacturer: **オーイズミ**
- releaseDate key: **2012-10-09**
- generation: **5号機**
- systemType: **A+ART / ボーナス+ART / 天井あり**
- modelName: **パチスロガレイゼロC**
- approvalNumber: **2S0497**

### 性能コア

- 機械割: **97.0 / 98.6 / 101.2 / 105.7 / 110.2 / 115.0%**
- BIG: **1/431.1～431.2 / 414.8 / 404.5 / 385.5 / 372.4 / 348.6**
- REG: **1/642.5 / 624.2 / 595.8 / 569.9 / 537.2 / 504.1**
- ART初当り: **1/594.3 / 531.5 / 573.6 / 478.9 / 504.5 / 383.1**
- ART「喰霊CHANCE」: **1セット50G+α / 約+1.5枚/G**
- BIG約**204枚**、REG約**53枚**。
- 天井: **ボーナス後1280G → 次回ボーナスまでの無限ART + ART1ストック**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。2019/2026後継機の値は流用せず。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_CLEAR_CEILING_COUNT_AND_INTERNAL_MODE_RELOTTERY**
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**
- `ceilingAfterReset`: **1280G_FROM_CLEARED_COUNT / RESET_SHORTENING_NONE_CONFIRMED**
- `modeAfterReset`: **CONFIRMED_RELOTTERY_ON_SETTING_CHANGE**
- 設定変更後モード選択率:
  - 設定1: 低確76.9 / 通常1.6 / 高確20.0 / 超高確1.6%
  - 設定2: 低確76.9 / 通常1.6 / 高確20.0 / 超高確1.6%
  - 設定3: 低確72.9 / 通常1.6 / 高確25.0 / 超高確1.6%
  - 設定4: 低確71.9 / 通常1.6 / 高確25.0 / 超高確1.6%
  - 設定5: 低確63.5 / 通常1.6 / 高確33.3 / 超高確1.6%
  - 設定6: 低確63.5 / 通常1.6 / 高確33.3 / 超高確1.6%
- 朝一高確以上: 設定1/2 **21.6%**、設定3/4 **26.6%**、設定5/6 **34.9%**。
- `powerCycleBehavior`: **PARTIAL_STAGE_ONLY**。設定変更時も単純電源ON/OFF時も液晶は「対策室」開始。天井カウンタ/内部モードの電断保持契約はUNVERIFIED_AFTER_RESEARCH。
- `resetBenefits`: 高確/超高確スタートの可能性。
- `resetPenalties`: 前日の1280G天井進捗を設定変更で喪失。
- `resetDetection`: 初期対策室ステージは電源ON/OFFでも同じため単独判別不可。ガックン等はUNVERIFIED_AFTER_RESEARCH。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT / 定義差

- BIG設定1: 1/431.1 vs 1/431.2の丸め差。
- REG獲得: 約53枚と「最大60枚」表記は平均/純増目安と最大値の定義差として分離。
- 2012-07-24業界発表は「9月9日納品開始予定」、パチビー/K-Navi/HAZUSEは「2012-10-09導入」。予定日と実導入DBを混同せず、時系列キーは10-09。

## 10-09群の再監査

- **ドラゴンハナハナ-30**: 既登録（689）。
- **キン肉マン ～キン肉星王位争奪編～**: 既登録（690）。10/08 vs 10/09は既存CONFLICT保持。
- **パチスロ 喰霊－零－**: 今回登録（691）。
- 旧handoff候補 **「大工の源さん～炎のいただき!編～」** は2012-10-09資料を再確認した結果、**CRパチンコ機**であり本パチスロDB対象外。
- 旧handoff候補 **「キュインぱちすろ 南国育ち 1st vacation」** はHAZUSEが**2012-10-22導入**、グリーンべると当時発表が**10月21日納品開始予定**。10-09群から除外し、10/22候補へ移動。
- 以上により **2012-10-09群はCLOSED**。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 691 / chronologicalFrontier 2012-10-09 / 10-09群CLOSED** から開始。
2. **2012-10-10〜10-21境界監査**を行い、具体日付きの未登録5号機がないか、K-Navi/HAZUSE/パチビー/メーカー・業界発表/旧DBで再確認する。
3. 境界により古い未登録機がなければ、次の既知具体日候補は **「キュインぱちすろ 南国育ち 1st vacation」（オリンピア）2012-10-22**。repo重複確認→具体日再照合→性能コア→resetBehavior v0.7で692件目候補として処理。
4. 「南国育ち」はグリーンべるとが10/21納品開始予定、HAZUSEが10/22導入開始。予定/導入定義を平均せず必要ならCONFLICT/DATE_NOTEで保持する。
5. 欠損は表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### パチスロ 喰霊－零－
- パチビー: `https://www.pachibee.jp/machines/index/212090001`
- K-Navi: `https://p-kn.com/slot/1697/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0497/`
- グリーンべると: `https://web-greenbelt.jp/00001530/`
- 当時朝一解析: `https://macerate.seesaa.net/article/300137056.html`
- 当時天井解析: `https://macerate.seesaa.net/article/296508634.html`
- パチ＆スロ必勝本 モード移行率: `https://p.hisshobon.jp/machine/2083/1/37203`

### 次回アンカー
- HAZUSE 南国育ち 1st vacation: `https://hazuse.com/machine/pachislot/2S0776/`
- オリンピア公式 南国育ち 1st vacation: `https://www.olympia.co.jp/newmachine/nangoku_1st/`
- グリーンべると 南国育ち発表: `https://web-greenbelt.jp/00001571/`
