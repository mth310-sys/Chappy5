# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **680**
- latestMachineAdded: **パチスロ海物語ミラクルマリン**（三洋物産）
- latestRecord: `docs/real_machine_db/machines/2012-08-06_pachislo-umimonogatari-miracle-marine.md`
- chronologicalFrontier: **2012-08-06**
- frontierLatestExactDateMachine: **パチスロ海物語ミラクルマリン**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-08-06__SAME_DAY_RESIDUAL_AUDIT_THEN_NEXT_DATE_BOUNDARY**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「兎-野性の闘牌-」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 679 / frontier 2012-08-06 / 08-06群OPEN。
- LATEST_HANDOFF指定の三洋物産「パチスロ海物語ミラクルマリン」をrepo検索し未登録を確認して680件目として追加。
- K-Naviがホール導入開始2012-08-06と明記。当時紹介資料でも8月5日納品予定、8月導入として整合。
- 08-06群の検索では既登録の「夜王」「兎-野性の闘牌-」と今回の「ミラクルマリン」を再確認。単一カレンダーだけで閉じず、次回もメーカー/業界/旧DB側の残存監査を継続する。

## 今回の本線追加 — パチスロ海物語ミラクルマリン

### 識別

- manufacturer: **三洋物産**
- releaseDate key: **2012-08-06**
- generation: **5号機**
- systemType: **ノーマルA+天井ART**
- modelName: **UNVERIFIED_AFTER_RESEARCH**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- 機械割 主系列: **98.0 / 99.1 / 100.6 / 102.6 / 105.0 / 108.1%**
- 機械割 別系列: **97.82 / 98.98 / 100.59 / 102.61 / 105.35 / 108.60%** → `CONFLICT`
- BIG: **1/392.43 / 1/383.25 / 1/372.36 / 1/358.12 / 1/346.75 / 1/334.37**
- REG: **1/407.06 / 1/397.19 / 1/383.25 / 1/366.12 / 1/352.34 / 1/334.37**
- ボーナス合成: **1/199.80 / 1/195.05 / 1/188.86 / 1/181.04 / 1/174.76 / 1/167.18**
- 50枚ベース: **39.5〜44.2G**
- BIG: **最大402枚**、REG: **約60枚**
- 天井ART「ミラクルタイム」: **次回ボーナスまで継続、純増約+0.6枚/G**
- 通常天井: **BIG後1000G / REG後800G**で天井状態へ移行し、ART突入リプレイ確率が大幅上昇。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_PARTIAL**。K-Navi当時記事と当時攻略資料で、設定変更後も天井までのゲーム数を引き継ぐことを確認。
- `carryOverBehavior`: **CONFIRMED_PARTIAL**。当時資料に宵越し可の明示あり。天井進捗の翌日持越しを確認。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONだけの本機固有契約を直接確定できず。
- `gameCounterReset`: **RETAIN_ON_SETTING_CHANGE_CONFIRMED**
- `ceilingAfterReset`: **NO_RESET_SHORTENING; NORMAL_CEILING_PROGRESS_RETAINED**
- `modeAfterReset`: **NOT_APPLICABLE_OR_NO_MACHINE_SPECIFIC_INTERNAL_MODE_SYSTEM_CONFIRMED**
- `stateAfterReset`: **CONFIRMED_PARTIAL_ART_RETAINED_ON_SETTING_CHANGE**。当時攻略資料ではART中に設定変更しても朝一ARTスタート。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **CEILING_CARRYOVER_AND_ART_RETAINMENT**
- `resetPenalties`: **NONE_MACHINE_SPECIFIC_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/ランプ等の本機固有変更判別は確定できず。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

### 品質メモ

- 50枚ベース39.5〜44.2Gはパチマガスロマガと当時紹介資料で一致。
- 機械割は98.0〜108.1%系列とpacnk精密系列が設定5・6で単純丸めを超えて差があるため平均せずCONFLICT。
- パチマガスロマガ取得本文の設定1 BIG=1/329.43は、他資料1/392.43および同ページ合成1/199.80と整合しないため表示/転記異常候補としてCONFLICT_NOTE。
- 設定変更でも天井進捗引継ぎはK-Navi当時記事＋当時攻略資料で複数系統照合済み。
- ART中設定変更でもART継続は当時攻略資料の直接記述を採用。ただし単純電源OFF→ONとは混同しない。

## 次回再開地点

1. **recordCount 680 / chronologicalFrontier 2012-08-06 / 08-06 group OPEN**から開始。
2. 08-06同日群をメーカー製品一覧、当時業界新台記事、旧DB、アーカイブで残存監査する。既登録「夜王」「兎-野性の闘牌-」「パチスロ海物語ミラクルマリン」は重複追加しない。
3. 同日群に未登録機がなければ **2012-08-07〜次の具体導入日までの境界監査**へ進み、最古の未処理機種を確定して次レコード化する。
4. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi パチスロ海物語ミラクルマリン: `https://p-kn.com/slot/1667/`
- パチマガスロマガ 機種TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/14/sanyo_slot_14.php`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/14/a.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/14/h.php`
- パチマガスロマガ 小役確率/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/14/c.php`
- pacnk: `https://pacnk.com/slot/tools/sh_miraclemarine.html`
- 5号機クロニクル 三洋物産: `https://5goki.com/sanyo`
- 天井ハイエナ生活 2012年当時資料: `https://macerate.seesaa.net/article/297010442.html`
- 天井ハイエナ生活 更新版: `https://macerate.seesaa.net/article/305411305.html`
- モゲスロ回顧資料: `https://moge-site.com/archives/6673`
- ★スロスター★ブログ当時紹介: `https://ameblo.jp/slostar/entry-11280617505.html`
- パチンコ業界!?ブログ当時スペック: `https://ameblo.jp/ita-13-5/entry-11281976399.html`

## GitHub commits

- パチスロ海物語ミラクルマリン machine record: `68b77bf29c903972c3fc47c3cb2d6a1667d87e96`
