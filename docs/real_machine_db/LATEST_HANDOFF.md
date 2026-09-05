# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **740**
- latestMachineAdded: **パチスロアタックNo.1 ～開幕！世界選手権～**（三洋物産）
- latestRecord: `docs/real_machine_db/machines/2013-06-10_attack-no1-kaimaku-sekai-senshuken.md`
- chronologicalFrontier: **2013-06-10**
- frontierLatestExactDateMachine: **パチスロアタックNo.1 ～開幕！世界選手権～**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-06-10_GROUP__NEXT_2013-06-17_SNIPAI72_THEN_SAME_DAY_GROUP**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-06-03_hokuto-no-ken-tensei-no-sho.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **739** / chronologicalFrontier **2013-06-03** / 06-03群CLOSED。
- K-Naviの2013年6月全国一斉導入カレンダーで06-04～06-09にパチスロ追加がなく、次の導入日アンカーを **2013-06-10** と確定。
- K-Naviでは06-10のパチスロは **パチスロアタックNo.1 ～開幕！世界選手権～**のみ。ALL7の2013年6月導入予定一覧でも06-10は同機を確認。
- repo未登録を確認後、740件目として追加。

## 今回追加 — パチスロアタックNo.1 ～開幕！世界選手権～

### identity / 性能コア

- manufacturer: **三洋物産**。
- releaseDate: **2013-06-10**。K-Naviカレンダー/K-Navi機種ページ/HAZUSE/ALL7で一致。
- 型式名: **パチスロアタックNo.1世界編KJ** / 検定番号 **3S0019**。
- systemType: **5号機 A+ART（リアルBIG + 擬似ボーナス + ART）**。
- 機械割本線: **96.81 / 98.18 / 100.71 / 103.64 / 107.25 / 111.23%**。
- ART「アタックタイム」初当たり: **1/503.8 / 485.5 / 466.9 / 431.4 / 396.1 / 362.4**。
- ボーナス合成: **1/233.1 / 225.5 / 217.6 / 203.9 / 189.6 / 176.5**。
- 50枚ベース: **約31G/50枚**。2013年当時スペック紹介の単一直接値なので `ANALYSIS_SINGLE_PERIOD`。
- ART「アタックタイム」: **1セット50G+α / 純増約1.7枚/G**。
- BIG: **約200枚**。VICTORY BONUS: **25G or 50G / 約43枚 or 約85枚**。
- ボーナス・ART間 **1200G**で天井ART。当時K-Naviパチログでは天井ART開始が **チェコ80% / ソ連20%**。

### resetBehavior v0.7

- 2013年機へ限定するため `開幕！世界選手権` / `世界編KJ` / `3S0019` を併用し、2009年RT版の情報を遮断。
- 「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / ガックン / 高確 / 天井」を組み替え、K-Navi、HAZUSE、P-WORLD、パチマガスロマガ、当時スペック記事、旧天井攻略系を横断。
- 一般天井 **ボーナス・ART間1200G** は確認。
- ただし **設定変更時の天井G RESET/KEEP、通常時内部状態の再抽選、純据え置き時の天井進捗/状態保持、単純電源OFF→ON時のゲーム数/状態/表示契約**は本機固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の短縮天井、朝一専用モード振り分け、高確/CZ優遇などは `NONE_CONFIRMED_AFTER_RESEARCH`。
- ガックン/初期出目/液晶/ランプ等の本機固有変更判別も `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 天井ARTのチェコ80%/ソ連20%は一般天井恩恵であり、朝一/設定変更専用値として扱わない。
- resetQaStatus: **RESEARCHED__GENERAL_1200G_CEILING_CONFIRMED__SETTING_CHANGE_CARRYOVER_POWER_CYCLE_CONTRACT_UNVERIFIED_AFTER_RESEARCH**。

### 数値表記差

- パチマガスロマガ: **96.81 / 98.18 / 100.71 / 103.64 / 107.25 / 111.23%**。
- HAZUSE: **97 / 98 / 101 / 104 / 107 / 111%**。
- pacnk: **96.80 / 98.10 / 100.70 / 103.60 / 107.20 / 111.20%**。
- 同一系列の丸め/表示精度差と扱い、平均せず最も精密なパチマガスロマガ値を比較本線に保持。

## 2013-06-10同日群 / 次境界

- K-Navi 2013年6月導入カレンダー上、06-10のパチスロは **パチスロアタックNo.1 ～開幕！世界選手権～**のみ。
- ALL7 2013年6月導入予定一覧でも06-10は同機のみ確認できるため、06-10群は **CLOSED**。
- 同2系統では次の具体パチスロ導入日は **2013-06-17**。
- 06-17群の既知候補は **スナイパイ72（ネット） / ハローサンタ アルティメットマシンガンバージョン（タイヨー） / パチスロ英雄伝説 空の軌跡 THE ANIMATION（ニューギン）**。
- 次リレーでは06-11～06-16境界を再確認後、06-17群を上記3機から順次処理し、全メーカー横断監査後にCLOSED判定する。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点は引き続き `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 本線収集を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 740 / chronologicalFrontier 2013-06-10 / 06-10群CLOSED** から開始。
2. **2013-06-11～06-16**をK-Navi/ALL7に加えて別系統資料でも境界監査する。
3. 追加候補がなければ **2013-06-17「スナイパイ72」**（ネット）を741件目候補としてrepo重複確認 → 性能コア + resetBehavior v0.7を収集して保存。
4. 続けて **ハローサンタ アルティメットマシンガンバージョン**、**パチスロ英雄伝説 空の軌跡 THE ANIMATION**を処理し、06-17同日群を全メーカー横断監査する。
5. アタックNo.1の設定変更/据え置き/純電断契約は、後続QAで直接資料が見つかった場合のみ補完する。

## 主要出典 — 取得日 2026-09-06

### パチスロアタックNo.1 ～開幕！世界選手権～

- K-Navi 機種トップ: `https://p-kn.com/slot/1857/`
- K-Navi 2013年6月全国導入カレンダー: `https://p-kn.com/calendar/201306/`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0019/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7079`
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/18/a.php`
- パチマガスロマガ ボーナス確率・ART初当たり・機械割: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/18/h.php`
- パチマガスロマガ ARTフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/18/l.php`
- ALL7 2013年6月導入予定一覧: `https://www.all7.jp/plans/index/2013/06`
- 2013年当時スペック紹介（約31G/千円）: `https://ameblo.jp/slostar/entry-11512591758.html`
- pacnk 後年設定判別整理: `https://pacnk.com/slot/tools/sh_attackno12013.html`
