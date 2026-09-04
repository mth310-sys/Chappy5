# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **616**
- latestMachineAdded: **ストリートファイターIV**（エンターライズ）
- latestRecord: `docs/real_machine_db/machines/2011-11-07_street-fighter-iv.md`
- chronologicalFrontier: **2011-11-07**
- frontierLatestExactDateMachine: **ストリートファイターIV**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE_2011-11-07_SAME_DAY_GROUP**

## 今回の本線追加 — ストリートファイターIV

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「必勝金閣寺物語～古都絢爛～」を再取得して開始。
- 開始時正本は **recordCount 615 / chronologicalFrontier 2011-11-07**。INDEXは旧19件地点のため、README規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定の2011-11-07同日群先頭候補 **ストリートファイターIV** を処理。
- repo code searchで機種名未検出、想定パス `docs/real_machine_db/machines/2011-11-07_street-fighter-iv.md` を直接fetchして404を確認して未登録と判断。
- K-Navi / パチビーは導入 **2011-11-07**、グリーンべるとは **2011-11-06納品開始予定**、HAZUSEは **2011-11-21導入開始**。平均せず日付定義差/CONFLICTとして保持し、時系列キーは複数当時系資料で一致する2011-11-07を採用。

### 性能コア

- 5号機 / ボーナス+ART / ゲーム数上乗せART。
- 型式: **ストリートファイターIVX**、検定番号: **1S0375**。
- 機械割: **97.0 / 98.3 / 100.9 / 104.7 / 110.0 / 115.8%**。
- BIG: **1/455.1 / 1/448.9 / 1/439.8 / 1/434.0 / 1/428.3 / 1/420.1**。
- REG: **1/612.5 / 1/601.2 / 1/595.8 / 1/585.1 / 1/574.9 / 1/565.0**。
- ART初当たり: **1/443.5 / 1/400.4 / 1/409.2 / 1/327.3 / 1/317.1 / 1/246.1**。
- 50枚ベース: **約31G/50枚**（1000円あたり約31G）。
- ART「覇道連舞」: **1セット50G+α / 約+1.8枚/G**。
- BIG平均約**210枚**、REG平均約**30枚**。
- 通常天井: **ボーナス間1300Gで天井状態→その後レア小役成立で不動の極を経由してART**。ペナルティにより1300G超過の場合あり。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- K-Naviに本機専用 **「設定変更後の挙動」** と **「状態移行率(設定変更後)」** の解析項目が存在することを確認。
- ただし現存取得経路では具体本文/数値を安全に回収できず、2011年原作機に限定して検索語・型式・資料系統を変え再探索した後も、以下は **UNVERIFIED_AFTER_RESEARCH** とした。
  - `settingChangeBehavior` の具体挙動
  - `carryOverBehavior`
  - `powerCycleBehavior`
  - `gameCounterReset`（1300G天井CLEAR/RETAIN）
  - `ceilingAfterReset`
  - 設定変更時の状態振り分け数値
  - `resetDetection`（ガックン/初期出目/液晶等）
- `modeAfterReset` / `stateAfterReset`: 設定変更後の状態移行解析項目があることまでは確認、具体振り分けはUNVERIFIED。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- 2016年 **「スーパーストリートファイターIV パチスロエディション」** のリセット解析は別機種のため一切転用していない。
- resetQaStatus: **PARTIAL_RESET_BEHAVIOR_AFTER_RESEARCH**。

### CONFLICT / 定義差

1. 導入日はK-Navi/パチビー **2011-11-07**、グリーンべると **2011-11-06納品開始予定**、HAZUSE **2011-11-21**。平均せず保持。
2. 機械割はパチマガスロマガ **97.0 / 98.3 / 100.9 / 104.7 / 110.0 / 115.8%**、HAZUSE **97 / 98 / 101 / 105 / 110 / 116%**、後年回顧 **96.98 / 98.33 / 100.92 / 104.70 / 109.98 / 115.79%**。丸め精度差として保持し平均化しない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 616 / chronologicalFrontier 2011-11-07**から開始。
2. 2011-11-07同日群はまだ未完。次の確認済み候補は **キャッツ・アイ-恋ふたたび（オリンピア）**。
3. 次回はまず **キャッツ・アイ-恋ふたたび** のrepo code searchだけでなく、表記揺れ・想定実パス直接fetch・tree実パスで重複を確認し、導入日を再照合。未登録なら617件目候補として性能コア＋resetBehavior v0.7を処理。
4. その後、11/7同日群を閉じる前にK-Navi・メーカー別一覧・当時業界記事で同日漏れを最終監査する。
5. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間を組み替えて再探索。
6. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### ストリートファイターIV
- パチマガスロマガ ボーナス確率/機械割: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/05/h.php`
- パチマガスロマガ 小役/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/05/c.php`
- K-Navi: `https://p-kn.com/slot/1522/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6526`
- パチビー: `https://www.pachibee.jp/machines/about/211090008`
- グリーンべると: `https://web-greenbelt.jp/00002348/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0375/`
- 後年回顧（機械割精密値補助）: `https://www.marimo0925.net/pachislot-kikaiwariranking-streetfighter-ban/`

### 次回順序確認
- **キャッツ・アイ-恋ふたたび**: repo未登録確認後に一次/業界/解析系URLを確定する。
