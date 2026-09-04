# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **628**
- latestMachineAdded: **Piaキャロットへようこそ!!G.O.**（タイヨー）
- latestRecord: `docs/real_machine_db/machines/2011-12-19_pia-carrot-go.md`
- chronologicalFrontier: **2011-12-19**
- frontierLatestExactDateMachine: **Piaキャロットへようこそ!!G.O.**
- schema: **resetBehavior v0.7**
- status: **2011-12-19_GROUP_IN_PROGRESS**

## 今回の本線追加 — Piaキャロットへようこそ!!G.O.

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ハイパー娘」を再取得して開始。
- 開始時正本は **recordCount 627 / chronologicalFrontier 2011-12-19**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- GitHub code searchで「PiaキャロットへようこそG.O.」未検出を確認し628件目として追加。
- パチビーが導入日 **2011-12-19**。当時グリーンべるとは **2011-12-18から納品予定**。時系列キーはホール導入日の12/19を採用。
- 2011-11-07東京都公安委員会検定通過情報で型式名 **PiaキャロットへようこそGO-S** を確認。検定番号は再探索後も直接確定できずUNVERIFIED_AFTER_RESEARCH。

### 性能コア

- 機械割: 設定1は **CONFLICT 95.5%（パチマガスロマガ/p-ken） vs 95.6%（P-WORLD）**。設定2〜6は **96.9 / 99.9 / 102.6 / 105.9 / 109.7%**で一致。
- BIG: **1/399.6 → 1/334.4**、REG: **1/697.2 → 1/512.0**、ART初当たり: **1/521.5 / 453.5 / 470.3 / 419.0 / 451.6 / 383.4**。
- 50枚ベース: **33.34 / 33.34 / 33.35 / 33.36 / 33.37 / 33.38G/50枚**。K-Navi直接表。
- ART「Piaキャロットタイム」: **1セット50G+α、純増約+1.4枚/G**。
- BIG約**200枚**、REG約**60枚**。
- 通常天井: **ボーナス間1400G**。ART3ストック以上確定、P-WORLDでは平均5セット表記。

### resetBehavior v0.7

- `settingChangeBehavior`: **PARTIAL_CONFIRMED**。P-WORLDで設定変更後に高確移行抽選、当時解析で具体状態振り分けを確認。
- `carryOverBehavior`: **PARTIAL_OPERATIONAL_SOURCE_ONLY**。当時天井狙い資料で「宵越し×」。ただし据え置き時の直接解析文は未確定。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **PARTIAL_CONFIRMED_OPERATIONAL_SETTING_CHANGE_RESET**。当時資料の「宵越し×」を運用根拠として保持。0Gクリアと直接明記する別系統資料は未確定。
- `ceilingAfterReset`: **NO_SHORTENED_RESET_CEILING_CONFIRMED_AFTER_RESEARCH**。通常1400G。リセット専用短縮値なし。
- `modeAfterReset` / `stateAfterReset`: **CONFIRMED_NUMERIC**。設定変更後 **低確91.5% / 高確6.1% / 超高確2.3%**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **CONFIRMED_SMALL_HIGH_STATE_CHANCE**。低確以外開始は合計 **8.4%**。
- `resetPenalties`: **PARTIAL_CONFIRMED_CEILING_CARRYOVER_NOT_USABLE_AFTER_CHANGE**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動や他タイヨー機からの補完はしていない。

## conflicts

- 設定1機械割: パチマガスロマガ/p-ken **95.5%**、P-WORLD **95.6%**。平均せずCONFLICTとして保存。

## 時系列監査

- 2011-12-19群で「ハイパー娘」に続き「Piaキャロットへようこそ!!G.O.」を追加。
- P-WORLD 2011年12月一覧で残る未処理候補は **トリプルチャンスV-30**（ウィザード）。
- 5号機クロニクル、スロリスクタイム等で **2011/12** 導入までは確認できるが、今回の検索では具体日を確定できていない。
- 具体日が12/19以前と判明した場合はchronologicalFrontierを後退させず、BACKFILLとして時系列位置を明記して登録する。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 628 / chronologicalFrontier 2011-12-19**から開始。
2. 最優先候補 **トリプルチャンスV-30** をGitHub未登録確認。
3. 型式名・メーカー名・HAZUSE/K-Navi/P-WORLD/当時業界/検定公示/旧DBを横断し、まず2011年12月の具体導入日を再探索。
4. 具体日が12/19以前ならBACKFILL、12/19以後ならその日付で登録。月単位しか確定できない場合も対象外にせず、releaseDate=2011-12と日付UNVERIFIEDを明示したうえで性能コア+resetBehavior v0.7を収集する。
5. トリプルチャンスV-30後、2011年12月末残存を再監査して2012年1月へ進む。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

### Piaキャロットへようこそ!!G.O.
- パチビー: `https://www.pachibee.jp/machines/about/211100003`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5013/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6541`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/74/h.php`
- K-Navi 1000円平均G: `https://p-kn.com/slot/1532/34687/`
- K-Navi ART: `https://p-kn.com/slot/1532/34663/`
- crankyseven: `https://crankyseven.com/piacarrot-pc.htm`
- 天井ハイエナ生活: `https://macerate.seesaa.net/article/226312110.html`
- 中一商事旧実機情報: `https://www.nakaiti.com/html/sTaiyo009.html`
- Pマンズ/検定情報: `https://p-mans.blogspot.com/2011/11/`
- p-ken: `https://p-ken.jp/model/detail2?id=619`

### 次候補確認
- 5号機クロニクル「ウィザード」: `https://5goki.com/wizard`
- スロリスクタイム5号機一覧: `https://pachisuro100.com/itiran/`

### 今回のGitHub commit
- 628番レコード追加: `d07651a69472b6b819897139bca2a27127684340`

### 次回順序確認
- **トリプルチャンスV-30具体日再探索 → 未登録なら629件目 → 2011年12月末最終監査 → 2012年1月へ。**
