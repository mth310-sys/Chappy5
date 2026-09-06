# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **768**
- latestMachineAddedByChronology: **Persona4 The SLOT**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2013-10-07_persona4-the-slot.md`
- chronologicalFrontier: **2013-10-07**
- frontierLatestExactDateMachine: **Persona4 The SLOT**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-10-07_GROUP__NEXT_BAKEMONOGATARI_THEN_QUEEN_HANAHANA_30**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-09-17_2027-iii.md` を再読してから継続。
- INDEXは旧集約状態（19件表記）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正として扱う。
- 作業開始時の正本は **recordCount 767 / chronologicalFrontier 2013-09-17 / 09-17群CLOSED**。
- 前handoffの次候補 **2013-09-24「KING of KEIBA」（藤商事）** を別系統で再監査したところ、藤商事公式・グリーンべると・P-WORLDで **`CR KING of KEIBA` = パチンコ** と確認。ALL7月間一覧の種別混在を誤ってパチスロ候補扱いしていたため、本パチスロDBから除外。
- 2013-09-18～09-29境界では、今回確認した具体候補に追加の未登録パチスロを固定できず。09/30候補 `Persona4 The SLOT` はALL7/パチビーで09/30だが、当時業界記事では10/06納品予定、HAZUSEでは10/07導入開始、パチマガスロマガは2013年10月機。このため実納品/ホール導入優先で **2013-10-07** を時系列キー採用し、09/30は `CONFLICT` としてレコード内保持。
- `Persona4 The SLOT` の既存レコード不在をGitHub mainで確認し、768件目として新規登録。

## 今回追加 — Persona4 The SLOT

### identity / 性能コア

- manufacturer: **ニューギン**。
- modelName / inspectionNumber: **Persona4 The SLOT-Y / 3S0598**。
- releaseDate: **2013-10-07採用**。09/30予定系 vs 10/06納品予定 vs 10/07導入開始を `CONFLICT` 保持。
- generation/system: **5号機 / ART / 疑似ボーナス / CZ / 規定G+レア役+自力解除**。
- 機械割: **97.0 / 98.5 / 100.2 / 102.6 / 106.5 / 113.5%**。HAZUSE・パチマガスロマガ・P-WORLDで一致。
- ボーナス+ART初当たり: 設定1 **1/304.0～1/304.8 CONFLICT_MINOR**、設定2～6 **1/283.2 / 282.9 / 265.0 / 256.9 / 224.8**。
- baseGamesPer50: **約31G**（HAZUSE）。
- 純増: **約2.2枚/G**。
- P4 BONUS: **30～100G**。
- P4 RUSH: **30～300G+α / 継続率80% or 93%**。
- 最大天井: **ボーナスorART間1784G**。1025/1281/1537G以上で段階恩恵、ボーナス7スルー後次回ボーナスでART確定の別天井あり。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- **設定変更後の絆メーター状態は高確100% / 低確0%**。K-Navi本機専用解析で直接確認。
- 比較値としてボーナス後・ART後は **高確10% / 低確90%**。
- パチマガスロマガも「朝イチ・設定変更」で **朝イチは絆メーター高確確定**、通常時解説で「朝イチはメーターが貯まりやすい状態」と記載。別系統一致。
- 設定変更時の規定G/1784G天井、通常A/B・天国A/B、ボーナススルー回数の具体的再抽選契約: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時のG数/モード/スルー/絆状態保持: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの電源OFF→ON時のG数/モード/状態/液晶表示: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。
- 本機固有ガックン/初期出目/カレンダー/絆メーター表示による変更確定条件: **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: **設定変更後 絆高確100%** を確定値として保存。

## 境界監査

### 2013-09-24 KING of KEIBA — EXCLUDED_PACHINKO

- 藤商事公式製品名は **CR KING of KEIBA**。
- グリーンべると2013-07-26記事も「パチンコ新機種」と明記。
- P-WORLDもデジパチとして登録。
- よって本パチスロDBには追加しない。

### Persona4 導入日競合

- ALL7: **2013-09-30導入予定**。
- パチビー: **2013-09-30導入日**。
- 当時業界記事: **2013-10-06納品開始予定**。
- HAZUSE: **2013-10-07導入開始日**。
- パチマガスロマガ: **ニューギン / 2013年10月**。
- 本DBは実納品/ホール導入優先で **2013-10-07** を採用し、9/30を消さずCONFLICT保持。

### 2013-10-07同日群 — OPEN

今回確認済み未処理候補:
- **パチスロ 化物語（Sammy）** — HAZUSE / DMMで2013-10-07導入一致、型式 `化物語ZX` / 検定番号 `3S0599`。
- **クイーンハナハナ-30（パイオニア）** — パチビーで2013-10-07導入。

同日群はまだ全メーカー横断CLOSED監査前。上記を処理後に追加候補を再監査する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線768件目を優先し、QAカーソルは前進させていない。

## 次回再開地点

1. **recordCount 768 / chronologicalFrontier 2013-10-07 / 10-07群OPEN** から開始。
2. まず **「パチスロ 化物語」（Sammy）** の重複確認 → 性能コア + resetBehavior v0.7を769件目候補として処理。
3. 次に **「クイーンハナハナ-30」（パイオニア）** を処理。
4. 2013-10-07同日群をHAZUSE/P-WORLD/K-Navi/パチビー/メーカー・当時業界資料で横断監査し、漏れがなければCLOSED。
5. 導入予定日・納品開始日・実ホール導入日・検定日・記事日を分離して保持する。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から再開。

## 主要出典 — 取得日 2026-09-06

### Persona4 The SLOT

- HAZUSE: `https://hazuse.com/machine/pachislot/3S0598/` — 10/07導入、型式/検定、機械割、初当たり、31G/50枚、天井、ART性能。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7178` — 5号機ART、純増2.2枚/G、P4 BONUS/P4 RUSH、機械割。
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/28/newgin_slot_28.php` — 2013年10月、朝イチ絆メーター高確確定。
- パチマガスロマガ通常時: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/28/05.php` — 朝イチはメーターが貯まりやすい状態。
- K-Navi絆メーター: `https://p-kn.com/slot/1920/46722/` — 設定変更後 高確100%、ボーナス/ART後 高確10%。
- パチビー: `https://www.pachibee.jp/machines/lecture/213090000` — 09/30導入日（競合ソース）。
- ALL7: `https://www.all7.jp/plans/index/2013/09` — 09/30導入予定（予定日ソース）。
- 当時業界記事回顧: `https://p-mans.blogspot.com/2013/08/` — 10/06納品開始予定。

### 境界 / 次候補

- 藤商事公式 CR KING of KEIBA: `https://www.fujimarukun.co.jp/products/keiba/` — パチンコであることを確認。
- グリーンべると: `https://web-greenbelt.jp/00000994/` — CR KING of KEIBAをパチンコ新機種と報道。
- HAZUSE 化物語: `https://hazuse.com/machine/pachislot/3S0599/genre/201/` — 2013-10-07導入、型式/検定。
- DMM 化物語: `https://p-town.dmm.com/machines/1037` — 2013-10-07導入。
- パチビー クイーンハナハナ-30: `https://www.pachibee.jp/machines/about/213080011` — 2013-10-07導入。

## commits

- 768th record add: `e16e5f005c3c2382ce313aaae72469a4bb6f2528` (`db: add Persona4 The SLOT with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay through Persona4 The SLOT`)
