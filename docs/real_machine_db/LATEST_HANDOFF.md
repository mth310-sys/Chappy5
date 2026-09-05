# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **679**
- latestMachineAdded: **兎-野性の闘牌-**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2012-08-06_usagi-yasei-no-touhai.md`
- chronologicalFrontier: **2012-08-06**
- frontierLatestExactDateMachine: **兎-野性の闘牌-**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-08-06__NEXT_PACHISLO_UMIMONOGATARI_MIRACLE_MARINE_THEN_SAME_DAY_AUDIT**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「夜王」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 678 / frontier 2012-08-06 / 08-06群OPEN。
- LATEST_HANDOFF指定のニューギン「兎-野性の闘牌-」をrepo検索し未登録を確認して679件目として追加。
- K-Naviがホール導入開始2012-08-06と明記。P-WORLD、パチマガスロマガ、当時紹介資料でも2012年8月機として整合。
- 次候補の三洋物産「パチスロ海物語ミラクルマリン」はrepo未登録を確認し、K-Naviで2012-08-06ホール導入開始を再確認。08-06群はOPENのまま次回へ引き継ぐ。

## 今回の本線追加 — 兎-野性の闘牌-

### 識別

- manufacturer: **ニューギン**
- releaseDate key: **2012-08-06**
- generation: **5号機**
- systemType: **A+ART / CZ / 規定ゲーム数解除・モード管理**
- modelName: **UNVERIFIED_AFTER_RESEARCH**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- 機械割: **96.5 / 98.6 / 100.4 / 103.2 / 106.1 / 112.6%**
- ART「闘牌MODE」初当たり: **1/284.9 / 1/255.6 / 1/277.2 / 1/231.1 / 1/267.2 / 1/204.8**
- 青7 BIG: **全設定1/16384**
- 天衣無縫BONUS: **全設定1/16384**
- ボーナス合成: **全設定1/8192**
- 50枚ベース: **31.4〜31.5G**（パチマガスロマガの1000円あたりG数。独立直接照合なしのためANALYSIS_SINGLE_PERIOD）
- ART「闘牌MODE」: **1セット50G+α、純増約+2.0枚/G、ゲーム数上乗せ+セットストック型**
- BIG / 天衣無縫BONUS: **約204枚**
- 通常モード: **通常A / 通常B / 天国A / 天国B**
- モード別天井: **通常A 1024G / 通常B 1280G / 天国 128G**。設定変更専用短縮天井と混同しない。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_PARTIAL**。設定変更で天井ゲーム数リセットを確認。本機固有の変更時モード/状態再抽選契約は未確定。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。純据え置き時のゲーム数・モード・状態保持契約は直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井/モード/状態処理を直接確定できず。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE_CONFIRMED**
- `ceilingAfterReset`: **NO_MACHINE_SPECIFIC_SHORTENED_CEILING_VALUE_CONFIRMED**
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NO_DIRECT_MACHINE_SPECIFIC_RESET_BENEFIT_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **前日までの天井進捗消失**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/ランプによる本機固有変更判別を確定できず。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

### 品質メモ

- パチマガスロマガと後年整理DB pacnkで設定別機械割・ART初当たりが一致。
- 50枚ベースは当時解析の31.4〜31.5Gを回収したが別系統の同一定義直接照合が取れず単一資料扱い。
- K-Naviには本機固有「設定変更後の挙動」項目が存在するが現存キャッシュ本文が取得不能。項目の存在だけからモード再抽選や朝一恩恵を推測していない。
- 据え置き、電源OFF→ON、変更時モード/状態数値、ガックン、公開朝一数値は表記揺れ・メーカー・項目名を変えて横断後も直接根拠不足のためUNVERIFIED_AFTER_RESEARCH。

## 次回再開地点

1. **recordCount 679 / chronologicalFrontier 2012-08-06 / 08-06 group OPEN**から開始。
2. 最優先で三洋物産 **「パチスロ海物語ミラクルマリン」**を処理する。repo未登録、K-Naviで2012-08-06導入開始を確認済み。
3. ミラクルマリンはK-Navi当時記事に **設定変更後も天井までのゲーム数を引き継ぐ**との明示が既に見えているため、resetBehaviorでは設定変更/据え置き/電源OFF→ONを混同せず原文系統を追加照合する。
4. ミラクルマリン処理後も08-06全国導入群をK-Naviだけで閉じず、メーカー/業界記事/旧DB/アーカイブで残存候補を洗い、同日群をCLOSEDにしてから後日へ進む。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi 兎-野性の闘牌-: `https://p-kn.com/slot/1677/`
- K-Navi 設定変更後の挙動（リンク先ID 39568、現存キャッシュ本文取得不能）: `https://p-kn.com/slot/1677/39568/`
- P-WORLD 兎‐野性の闘牌‐: `https://www.p-world.co.jp/machine/database/6788`
- パチマガスロマガ 機種TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/23/newgin_slot_23.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/23/h.php`
- パチマガスロマガ 小役確率/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/23/c.php`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/23/l.php`
- pacnk 兎‐野性の闘牌‐: `https://pacnk.com/slot/tools/sh_usagi.html`
- P.S enter blog 兎-野性の闘牌-（2012-06-27）: `https://blog.livedoor.jp/psenter/archives/10039240.html`
- K-Navi パチスロ海物語ミラクルマリン: `https://p-kn.com/slot/1667/`

## GitHub commits

- 兎-野性の闘牌- machine record: `a5521c1ce5a069db4afe4f991f61cd4ab688a0ad`
