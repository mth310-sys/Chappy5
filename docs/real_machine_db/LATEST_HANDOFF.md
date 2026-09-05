# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **708**
- latestMachineAdded: **DARKER THAN BLACK -黒の契約者-**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2013-01-21_darker-than-black.md`
- chronologicalFrontier: **2013-01-21**
- frontierLatestExactDateMachine: **DARKER THAN BLACK -黒の契約者-**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-01-21_GROUP__JUUJIKA2_REMAINS**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-01-07_pachislot-koukaku-kidoutai-sac.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **707** / chronologicalFrontier **2013-01-07** / 01-07群OPEN。
- 2013-01-07同日群をK-Navi/P-WORLD/パチビー/旧DB系で再監査し、攻殻機動隊S.A.C.以外の具体的01-07導入未登録候補を今回追加確認できなかったため **01-07群をCLOSED**。
- 2013-01-08～01-20境界を具体導入日で再監査し、より古い未登録機を今回追加確認できなかったため2013-01-21へ前進。
- repo重複検索で「DARKER THAN BLACK -黒の契約者-」既存レコードなしを確認。
- **708件目: DARKER THAN BLACK -黒の契約者-（SNKプレイモア）** を登録。
- 当時2013-01-26記事で **2013-01-21新台はDARKER THAN BLACKと十字架2の2機種**と明記されているため、01-21群はCLOSEDにせず、次回は十字架2を優先する。

## 今回追加 — DARKER THAN BLACK -黒の契約者-

### 性能コア

- releaseDate: **2013-01-21**。K-Navi・パチビー一致。グリーンべるとは2013-01-20から納品予定としており、納品日とホール導入日を分離。
- 型式名: **ダーカーザンブラックA** / 検定番号 **2S0966**。
- systemType: **5号機 / A+ART / CZ搭載 / ゲーム数上乗せ+セットストック**。
- 機械割主系列: **96.8 / 98.6 / 99.9 / 104.5 / 109.3 / 114.3%**。
- ART初当たり: **1/470.7 / 1/424.3 / 1/438.3 / 1/358.2 / 1/364.0 / 1/279.8**。
- BIG: **1/448.8 → 1/390.1** / REG: **1/606.8 → 1/504.1**。
- 50枚ベース: **約31G/50枚**（本機固有単一整理資料）。
- ART「DARKER RUSH」: **1セット50G+α / 純増約+1.7枚/G**。
- BIG約**203枚** / REG約**42枚**。
- CZ大黒斑ゾーン: 基本15G+α、ART期待度約33%。SPは10G、約77%。
- 通常天井: **ボーナス間1400G**。天井時はARTストック+天国RUSH突入資料あり。

### resetBehavior v0.7

- 設定変更時: **1400G天井までのゲーム数CLEAR_CONFIRMED**。CrankySevenと2013年当時天井攻略資料で照合。
- 通常時には通常A/通常B/高確、契約MODE、別軸の50G周期「裏高確」A〜Fテーブルが存在。
- パチ＆スロ必勝本で、**裏高確テーブルはボーナス後・ART終了後・設定変更時に抽選**されることを直接確認。
- 設定変更時の通常A/B/高確初期振り分け、裏高確A〜F具体振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井G・状態・裏高確テーブル保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の天井G・状態・裏高確・液晶契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶等の本機固有変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 比較可能な公開朝一数値: **NONE_CONFIRMED / UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- resetPenalty: 前日ボーナス間ハマリがある場合、設定変更で天井進捗消失。

## CONFLICT / 注意

- 機械割はP-WORLD・5号機クロニクル・当時資料の **96.8 / 98.6 / 99.9 / 104.5 / 109.3 / 114.3%** を主系列。
- CrankySevenのみ設定5 **109.8%** / 設定6 **114.6%**。平均せずCONFLICT保持。
- パチマガスロマガ検索表示の設定1〜3 PAYOUT 196.8/198.6/199.9%は100ポイント上振れの表示/パース異常と判断し根拠系列に採用しない。
- 通常運用中の50G周期裏高確移行率は存在するが、設定変更専用の朝一数値ではないため混入しない。

## 2013-01-21同日群 / 次境界

- **DARKER THAN BLACK -黒の契約者-** 登録済み。
- 当時2013-01-26天井攻略記事で「今週1/21 新台パチスロ2機種 = DARKER THAN BLACK / 十字架2」と明記。
- 次回最優先は **2013-01-21「十字架2」（ネット）**。repo重複確認後、未登録なら709件目として性能コア+resetBehavior v0.7を収集。
- 十字架2処理後に01-21同日群をHAZUSE/K-Navi/P-WORLD/パチビー/メーカー一覧で最終監査しCLOSED判定。
- その後2013-01-22～01-27境界を具体導入日順に監査。
- 次の既知アンカーは **2013-01-28「ミリオンゴッド-神々の系譜-ZEUS ver.」**。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 708 / chronologicalFrontier 2013-01-21 / 01-21群OPEN** から開始。
2. **十字架2（ネット）** をrepo重複確認。
3. 未登録なら2013-01-21導入を複数系統で照合し、性能コア+resetBehavior v0.7を調査して709件目として登録。
4. 01/21同日群を最終監査し、漏れがなければCLOSED。
5. 2013-01-22～01-27境界を監査し、未登録機がなければ2013-01-28「ミリオンゴッド-神々の系譜-ZEUS ver.」へ進む。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### DARKER THAN BLACK -黒の契約者-
- K-Navi: `https://p-kn.com/slot/1772/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6944`
- グリーンべると: `https://news.p-world.co.jp/articles/5626/greenbelt`
- パチビー: `https://www.pachibee.jp/machines/index/212120007`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/42/a.php`
- パチマガスロマガ確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/42/h.php`
- CrankySeven: `https://crankyseven.com/darkerthanblack-pc.htm`
- 天井ハイエナ生活: `https://macerate.seesaa.net/article/314414485.html`
- 1/21新台2機種確認: `https://macerate.seesaa.net/article/316297790.html`
- パチ＆スロ必勝本 裏高確: `https://p.hisshobon.jp/machine/2138/1/38134`
- HAZUSE DATA: `https://data.hazuse.com/?genre=209&machine_code=2S0966`
- 5号機クロニクル: `https://5goki.com/snkplaymore`
- パチスロ業界初まとめ: `https://slothistory.com/kousin_all_0.html`

### 次候補 / 境界
- 十字架2同日確認: `https://macerate.seesaa.net/article/316297790.html`
- HAZUSE ミリオンゴッド-神々の系譜-ZEUS ver.: `https://data.hazuse.com/?genre=201&machine_code=2S1080`
