# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準143件。**
- 141件目 `ハワイ` の次、前handoff指定どおり2007-07-23群を継続。
- 今回 `ジャンジャン飯店` を142件目、`ハワイっ娘` を143件目として登録。
- 既存性能値はやり直さず、新規機の性能コア + v0.7 resetBehaviorを収集。

## 今回新規追加

### 142. ジャンジャン飯店（コルモ）

- `docs/real_machine_db/machines/2007-07-23_janjan-hanten.md`
- releaseDate: `2007-07-23`（ALL7導入予定。5号機クロニクル2007/7と整合）
- systemType: ボーナス + RT
- coreStatus: `COMPLETE_CORE`
- qaResetBehavior: `PARTIAL`
- BIG/REG/合成: パチマガスロマガとK-Naviで一致。
- ボーナス合成: `1/289.98 → 1/215.58`。
- 1000円あたり: `46.65 → 49.95G`。
- 赤7BIG約350枚 + RT100G、青7BIG約250枚、REG約70枚。
- 機械割はパチマガスロマガ `96.80〜110.35%`、K-Navi `95.4〜110.1%`、5号機クロニクル `96.0〜110.0%` に差があるため `CONFLICT`。
- RT100Gの純増/G、設定変更/据え置き/電断時のRT残G処理、ガックン/変更判別、公開朝一数値は十分再探索後も `UNVERIFIED`。
- 有利区間は `NOT_APPLICABLE`。

### 143. ハワイっ娘（IGTジャパン）

- `docs/real_machine_db/machines/2007-07-23_hawaiikko.md`
- releaseDate: `2007-07-23`（ALL7導入予定。5号機クロニクル・IGT回顧資料で2007/7と整合）
- systemType: ノーマル / ボーナス主体 / 準完全告知
- coreStatus: `COMPLETE_CORE`
- qaResetBehavior: `PARTIAL`
- BIG: `1/327.68 → 1/262.14`
- REG: `1/546.13 → 1/390.10`
- 合成: `1/204.80 → 1/156.78`
- 機械割: パチマガスロマガ `96.67〜108.25%`、5号機クロニクル `96.7〜108.4%` で丸め差の範囲。
- 1000円あたり: `39.82 / 39.81 / 39.80 / 40.15 / 40.49 / 40.85G`。
- BIG346枚超、REG120枚超払い出し終了。
- 通常時天井/RT/ART/CZ/朝一専用モードは `NONE_CONFIRMED`。
- 設定変更/据え置き/電源OFF→ON時の本機固有リール・内部状態、ガックン、公開朝一数値は十分再探索後も `UNVERIFIED`。
- 有利区間は `NOT_APPLICABLE`。

## 今回の主要出典

### ジャンジャン飯店
- ALL7.jp: https://www.all7.jp/plans/index/2007/07
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/01/a.php
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/01/h.php
- パチマガスロマガ 1000円あたり: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/01/c.php
- K-Navi: https://p-kn.com/slot/607/
- PachinkoVista: https://www.pachinkovista.com/pfactory/model.php?dsp=1&gc=0&km=2&nid=016678
- 5号機クロニクル: https://5goki.com/colmo

### ハワイっ娘
- ALL7.jp: https://www.all7.jp/plans/index/2007/07
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/46/a.php
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/46/h.php
- パチマガスロマガ 1000円あたり: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/46/c.php
- 5号機クロニクル: https://5goki.com/igt
- パチ7 IGT回顧: https://pachiseven.jp/articles/detail/13009

取得日: 2026-08-31

## 今回GitHub反映

- `ジャンジャン飯店` 新規追加: `ba58b0bda04b0a241d5190d5b264617f1ec06847`
- `ハワイっ娘` 新規追加: `2c40786a986af99d5272778872e99ac8b4c1e07c`

## 次回再開地点

1. **2007-07-23群を継続。次は `マジカルハロウィン` を最優先で処理する。**
2. `マジカルハロウィン` はKPEの2007年7月5号機。ART/朝一状態がホール経営物差しに重要なため、設定変更/据え置き/電断、CZ/ART状態、朝一恩恵・変更判別・公開朝一数値を通常機より重点探索する。
3. 同日候補 `Bun Bun Maru` は平和2007-07-23候補だが検索ノイズが大きい。型式名・平和製品一覧・P-WORLD等でパチスロ機として独立確認後に登録する。
4. `パチスロ北斗の拳2 乱世覇王伝 天覇の章` は7月下旬候補として具体納品日を監査する。
5. `ラーメン王` は過去handoffに日付競合があるため、再登場時に既存レコード有無と実導入日をmainで確認し、重複登録しない。
6. PARTIAL/UNVERIFIEDやリセット欠損は、表記揺れ・型式・メーカー・シリーズ名と `設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間` を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
7. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの143件地点を正**として継続する。
