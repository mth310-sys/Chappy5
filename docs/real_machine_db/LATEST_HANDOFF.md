# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **643**
- latestMachineAdded: **女番長（スケバン）**（高砂電器産業）
- latestRecord: `docs/real_machine_db/machines/2012-03-05_sukeban.md`
- chronologicalFrontier: **2012-03-05**
- frontierLatestExactDateMachine: **女番長（スケバン）**
- schema: **resetBehavior v0.7**
- status: **2012-03-05_SAME_DAY_GROUP_AUDIT_REQUIRED__NEXT_CHALLENGE_MAN_ON_2012-03-05**

## 今回の本線追加 — 女番長（スケバン）

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「シスタークエスト3～黄金の大地と東の勇者～」を確認して開始。
- INDEXは旧地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時正本は **recordCount 642 / chronologicalFrontier 2012-03-05**。
- 直前handoff指定の最優先候補「女番長」をrepo検索し未登録を確認後、643件目として追加。

### 導入日・型式

- 時系列キー: **2012-03-05**。
- K-Naviは2012-03-05ホール導入開始。
- KONAMI機種アーカイブは2012年3月稼働。
- 2012年1月24日付の当時業界記事もホール導入3月5日と記録。
- 型式名: **スケバンC**（後年筐体資料）。
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**。

### 性能コア

- systemType: **ART主体 / ボーナス+ART / CZ搭載**。
- 機械割: **97.2 / 98.9 / 101.2 / 104.4 / 106.7 / 110.0%**。
- ART「スケバンRUSH」初当たり: **1/312 / 295 / 284 / 263 / 252 / 221**。
- スケバンBONUS: **全設定1/6553.6**。
- 勇香★BONUS: **全設定1/1820.4**。
- ボーナス合算: **全設定1/1424.7**。
- 50枚ベース: **約33G/50枚**（当時メーカー営業説明を業界記事が記録）。
- ART「スケバンRUSH」: **1セット15～35G / 純増約+1.8枚/G**。
- スケバンBONUS約240枚、勇香★BONUS約204枚。
- 天井: **バトルMAP15マス**。通常リプレイ15回で1マス進行し、基準上は通常リプレイ225回相当。天井ARTはHP300%スタート。

### resetBehavior v0.7

- 当時攻略資料で **設定変更でも内部の天井リプレイ回数を引き継ぐ**ことを直接確認。
- 一方で液晶上のバトルMAPは **設定変更時に1マス目へ戻る**。
- 同資料では **電源OFF→ONのみでも液晶MAPは1マス目表示へ戻る**と記録。
- 後年pacnk整理資料も「設定変更後は天井マップがリセット」と「設定変更後もリプレイ天井までの回数は引き継ぐ」を併記しており、**内部カウンタ保持 / 表示MAPリセット**として当時資料と整合。
- `gameCounterReset`: **RETAIN_INTERNAL_REPLAY_CEILING_COUNTER_ON_SETTING_CHANGE__DISPLAY_BATTLE_MAP_RESET_TO_CELL_1**。
- `ceilingAfterReset`: 設定変更専用短縮は確認なし。内部天井進捗は保持。
- `carryOverBehavior`: 当時資料で **宵越し〇**。ただしART/CZ/内部状態の全保持までは未確認。
- `modeAfterReset`: 設定変更時モード移行抽選あり。ただし具体振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: 液晶MAPリセットは確認。内部モード/ART/CZ状態の厳密処理は **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: MAP1マス戻りは単純電断でも発生するため設定変更判別には使えない。ガックン等は **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

## CONFLICT / 定義差

- パチマガスロマガに「REG約30枚（36枚）」表記がある一方、K-Navi/P-WORLDでは勇香★BONUSは297枚超払い出し、P-WORLD/中古実機資料で純増約204枚。別役/表記定義の混在可能性があるため、勇香★BONUS約204枚を主値にし、約30枚は `CONFLICT_OR_DIFFERENT_BONUS_DEFINITION` として平均しない。
- resetの「天井マップリセット」と「天井リプレイ回数引継ぎ」は数値競合ではなく、表示MAPと内部カウンタの定義差として整理。

## 時系列監査

- 2012-03-05同日群は未閉鎖。
- K-Naviで **チャレンジマン（岡崎産業）** が2012-03-05ホール導入開始と確認でき、repo検索では未登録。
- チャレンジマンはART「チャレンジゲーム」搭載、1セット30G・最大90%ループ・純増約1.3枚/GとK-Naviで概要を確認済み。
- 同日群を閉じるまでは03/06以降へ進まない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 643 / chronologicalFrontier 2012-03-05**から開始。
2. **2012-03-05同日群**を継続し、最優先で **チャレンジマン（岡崎産業）** の性能コア+resetBehavior v0.7を収集。
3. チャレンジマン追加後もK-Navi/P-WORLD/HAZUSE/当時業界記事/メーカー資料で03/05同日残存を再監査。
4. 03/05群を閉じた後のみ03/06以降の最古未処理機へ前進。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- KONAMI機種アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2012/sukeban/`
- K-Navi 女番長: `https://p-kn.com/slot/1571/`
- K-Navi 発表会: `https://p-kn.com/topics/exhibition/901/`
- グリーンべると: `https://web-greenbelt.jp/00001279/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6622`
- 5号機クロニクル: `https://5goki.com/konami`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/03/a.php`
- Pマンズ当時業界記事: `https://p-mans.blogspot.com/2012/01/`
- 天井ハイエナ生活（当時攻略）: `https://macerate.seesaa.net/article/226189461.html`
- pacnk: `https://pacnk.com/slot/tools/sh_sukeban.html`
- 次候補チャレンジマン K-Navi: `https://p-kn.com/slot/1597/`

## GitHub commits

- machine record: `69b207b02cafdf673453f962946ed9496d9d6e04`
