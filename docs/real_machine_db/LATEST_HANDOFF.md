# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **709**
- latestMachineAdded: **十字架2**（ネット）
- latestRecord: `docs/real_machine_db/machines/2013-01-21_jujika-2.md`
- chronologicalFrontier: **2013-01-21**
- frontierLatestExactDateMachine: **十字架2**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-01-21_GROUP__AUDIT_2013-01-22_TO_01-27_NEXT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-01-21_darker-than-black.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **708** / chronologicalFrontier **2013-01-21** / 01-21群OPEN。
- repo重複検索で「十字架2」既存レコードなしを確認。
- **709件目: 十字架2（ネット）** を登録。
- 前回資料で2013-01-21新台はDARKER THAN BLACK / 十字架2の2機種と確認済みで、今回両機の登録が揃ったため **01-21群をCLOSED**。

## 今回追加 — 十字架2

### 性能コア

- releaseDate: **2013-01-21**。HAZUSE DATA、および2013-01-26当時記事の「1/21新台2機種」で照合。
- 型式名: **十字架2SD** / 検定番号 **2S1164**。
- systemType: **5号機 / AT / ゲーム数解除+小役解除 / 上乗せ+継続テーブル**。
- 機械割: **97.0 / 98.5 / 100.0 / 103.5 / 105.5 / 110.0%**。
- AT初当たり: **1/249 / 1/242 / 1/240 / 1/235 / 1/215 / 1/199**。
- AT主系列: **1セット30G+継続バトル+上乗せ / 純増約+2.9枚/G**。
- 50枚ベース: 本機固有の比較可能値を今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常時4モード: NORMAL A / NORMAL B / SUPERリオナ / SUPERティナ。
- 天井主系列: **A 992G / B 944G / リオナ128G / ティナ32G**。

### resetBehavior v0.7

- 設定変更時: **天井ゲーム数CLEAR_CONFIRMED**。
- 設定変更後: **NORMAL A非選択 / NORMAL B以上スタート CONFIRMED**。
- 当時導入直前資料は変更後候補を **B 944G / リオナ128G / ティナ32G** と明示。主系列では朝一最大天井が944Gまで短縮される。
- 設定変更時のB/リオナ/ティナ具体振り分け率: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時のゲーム数・モード保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時のゲーム数・モード・液晶契約: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目/液晶による設定変更確定判別: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefit: NORMAL Aを選ばないため主系列最大944Gへ短縮。
- resetPenalty: 前日ハマリ進捗は設定変更で消失。

## CONFLICT / 注意

- NORMAL A天井はP-WORLD・後年設定判別DB **992G** に対し、HAZUSE現行整理ページのみ **1280G**。B/リオナ/ティナは944/128/32Gで一致。導入当時系の992Gを主系列とし、`CONFLICT_NORMAL_A_992_VS_1280` を保持。
- AT基本性能はP-WORLD/K-Navi/パチマガスロマガ/2013年当時業界まとめが **30G+α相当 / 約+2.9枚/G**、5号機クロニクルのみ **50G+α / 約+2.8枚/G**。平均化せずCONFLICT保持。

## 2013-01-21同日群 / 次境界

- **DARKER THAN BLACK -黒の契約者-** 登録済み。
- **十字架2** 登録済み。
- 当時2013-01-26記事の「今週1/21 新台パチスロ2機種」と一致したため **2013-01-21群CLOSED**。
- 次回は **2013-01-22～01-27境界**を具体導入日順に監査。
- 次の既知アンカーは **2013-01-28「ミリオンゴッド-神々の系譜-ZEUS ver.」**。それ以前の未登録を先に排除する。

## 遡及resetBehavior QA 進捗

- QA再開地点 `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md` をmain実ファイルで再確認。
- **空手バカ一代には既にresetBehaviorが存在**し、既存 `coreStatus: PARTIAL` を変更せず重複補完を回避。
- 今回はリポジトリ実順でその直後の最初のresetBehavior欠損レコードを一意確定するところまで到達しなかったため、誤ってQA前線を進めず再開地点を維持する。
- 次回は空手バカ一代をスキップし、実ファイル順で次レコードから欠損検査を継続する。

## 次回再開地点

1. **recordCount 709 / chronologicalFrontier 2013-01-21 / 01-21群CLOSED** から開始。
2. **2013-01-22～01-27**をHAZUSE/K-Navi/P-WORLD/パチビー/メーカー・業界資料で具体導入日監査。
3. より古い未登録がなければ **2013-01-28「ミリオンゴッド-神々の系譜-ZEUS ver.」** をrepo重複確認し、次レコード候補として調査。
4. QAは `2007-01_karate-baka-ichidai.md` が既収集済みであることを前提に、その次の実在レコードから最初のresetBehavior欠損を特定して補完。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-06

### 十字架2
- HAZUSE DATA: `https://hazuse.com/machine/pachislot/2S1164/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6940`
- K-Navi: `https://p-kn.com/slot/1771/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/155/net_slot_155.php`
- パチスロ業界初まとめ: `https://slothistory.com/kousin_all_0.html`
- 2013年当時設定変更記事: `https://ameblo.jp/happyslotatushi/entry-11456220776.html`
- pacnk設定判別DB: `https://pacnk.com/slot/tools/sh_jujika2.html`
- 5号機クロニクル: `https://5goki.com/net`
- 1/21新台2機種確認: `https://macerate.seesaa.net/article/316297790.html`

### 次候補 / 境界
- HAZUSE ミリオンゴッド-神々の系譜-ZEUS ver.: `https://data.hazuse.com/?genre=201&machine_code=2S1080`
