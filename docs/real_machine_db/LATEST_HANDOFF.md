# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは356件地点 `シーシー`（2009-04-13）。既存356件を再追加せず、4/14〜4/19をメーカー別/当時資料でもう一段監査。
- 4/14〜4/19に具体日付きで安全に追加できる未処理パチスロを新たに確定できず、2009-04-20同日群へ接続。
- **今回 357「Rio2 クルージング・ヴァナディース」を追加。既存357件の再追加禁止。**

## 356. シーシー（継承）

record:
- `docs/real_machine_db/machines/2009-04-13_cc-colmo.md`

要点:
- コルモ / 型式 `シーシー1`
- releaseDate主値 2009-04-13。777パチガブのみ2009-02-23表記をCONFLICT保持。
- ノーマル / ネオストック / ボーナス主体。
- 機械割96.1〜108.1%、成立ボーナス合算全設定1/128.0、実質ボーナス出現率1/162.69→1/129.81。
- BIG約312枚、REG約104枚、CB約26枚。
- 50枚ベースは再探索後もUNVERIFIED_AFTER_RESEARCH。
- resetBehaviorは設定変更/据え置き/電源OFF→ON時のネオストック状態等を確定できずUNVERIFIED_AFTER_RESEARCH。有利区間はNOT_APPLICABLE。
- commit: `98a07df0f48dfb6b919f11c20b44a4316820594e`

## 357. Rio2 クルージング・ヴァナディース

record:
- `docs/real_machine_db/machines/2009-04-20_rio2-cruising-vanadis.md`

要点:
- manufacturer: ネット
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- releaseDate主値: **2009-04-20**。ALL7とパチビーが一致。K-Naviの2009-04-15ホール導入開始はCONFLICTとして保持。
- generation: 5号機
- systemType: **ボーナス + RT / CZ / 天井搭載**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割は旧解析系列 **97.6 / 98.9 / 100.7 / 103.6 / 106.9 / 110.0%** と、pacnk/5号機クロニクル系列 **97.4 / 98.7 / 100.5 / 103.3 / 106.7 / 109.7%** が競合。平均せず `CONFLICT`。
- BIG合算: **1/341.3 → 1/266.4**
- REG合算: **1/862.3 → 1/468.1**
- RTB: **1/6553.6〜1/3276.8**
- 全ボーナス合算: **1/235.7 → 1/161.4**
- 50枚ベース: **39.2 / 39.2 / 39.2 / 39.3 / 41.2 / 41.3G**
- BIG約**260枚**、REG約**91枚**、RioTime BONUS約**26枚**。
- CZ「リオチャンス」から30G RT「リオタイム」または777G RT「スーパーリオタイム」へ突入。RT純増は約**+0.8枚/G**。
- 天井は**通常状態999G消化でCZ突入**。ボーナスそのものが確定する天井ではない。
- 2009年11月 `Rio2プレミアム` はART機で別機。後年5号機クロニクル本文が本機にA+ART/約400枚S-BIG/ART約1.2枚Gを記載するが、P-WORLD・パチビー・2009年更新wiki・旧解析と競合するため、本機へ流用せず `CONFLICT` 保持。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。K-Naviに「液晶から設定変更判別?」専用項目の存在は確認したが、条件本文を取得できず、設定変更時の天井/CZ/RT状態を断定しない。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。K-Naviに「宵越し天井狙い」項目、P-WORLD掲示板に宵越し天井を前提とした当時投稿は存在するが、設定変更/据え置き時の999Gカウンタ挙動を高信頼本文から直接確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の999Gカウンタ/CZ/RT残状態/液晶表示を確定できず。
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`。通常999G天井自体は確認済みだが、設定変更時RESET/CARRY_OVERは不明。
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`。設定変更専用短縮/延長天井数値は確認なし。
- modeAfterReset/stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。朝一専用モード、CZ/RT内部状態の変更時処理を確定できず。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。液晶判別記事の存在のみ確認。ガックン/初期出目/液晶具体条件は未確定。
- numericResetData: リセット専用天井/朝一当選率/専用モード振分/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- ALL7 / 2009年4月導入予定一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/04
- パチビー / Rio2 クルージング・ヴァナディース — OLD_MACHINE_DATABASE
  - https://www.pachibee.jp/movies/index/1521
- P-WORLD / Rio2クルージング・ヴァナディース — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5516
- CrankySeven / Rio2解析攻略 — OLD_ANALYSIS_HIGH
  - https://crankyseven.com/rio2-pc.htm
- パチスロ5号機まとめwiki / Rio2 — CONTEMPORARY_COMMUNITY_DATABASE
  - https://w.atwiki.jp/5gouki/pages/152.html
- pacnk / Rio2設定判別 — SECONDARY_ANALYSIS_DATABASE
  - https://pacnk.com/slot/tools/sh_rio2.html
- K-Navi / Rio2 — OLD_ANALYSIS_INDEX
  - https://p-kn.com/slot/955/
- 4Gamer / テクモ実機連動資料 — CONTEMPORARY_NEWS_WITH_PUBLISHER_RELEASE
  - https://www.4gamer.net/games/086/G008665/20090306056/
- 5号機クロニクル / ネット一覧 — SECONDARY_DATABASE_CONFLICTING_SYSTEM
  - https://5goki.com/net

commit:
- 357 Rio2 クルージング・ヴァナディース: `2f7b399b4b356c78879119dc7074c8e191dfd447`

## 2009年4月 境界監査

- 4/5 `夢花月` 既存354（4/6ホール導入開始資料も保持）。
- 4/6〜4/12は具体日付きで安全に追加できる未処理パチスロを直前監査で確定できず。
- 4/13 `クラシックジャグラー` 既存355、`シーシー` 既存356。
- ALL7の4/13表示に混在する `デビルマン～悪魔聖戦～`、`フィーバー銀牙伝説WEED`、`中村美律子の人生祭りだ!だんじりだ!` はパチンコのため本線へ混入させない。
- 4/14〜4/19は追加監査を行ったが、具体日付きで安全に追加できる未処理パチスロを新たに確定できず。
- 4/20同日群へ接続し、`Rio2 クルージング・ヴァナディース` を今回357として追加。
- ALL7の4/20残候補: **`さすがの猿飛 / エースをねらえ! / プリティ戦記 / 国際サラリーマンとおるくん`**。毎回GitHub既存登録を確認して未処理のみ追加する。
- `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ正しい時系列位置へ遡及追加する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準357件地点。既存357件の再追加禁止。**
2. **2009-04-20同日群の次の未処理機から継続。最優先候補は `さすがの猿飛`。**
3. 次いで `エースをねらえ! / プリティ戦記 / 国際サラリーマンとおるくん`。同日群なので毎回既存登録を検索し、未処理のみ追加する。
4. 各新規機で性能コアとv0.7 resetBehaviorを同時収集し、設定変更/据え置き/電源OFF→ON/天井短縮/モード/状態/ガックン/有利区間を表記揺れ・型式・メーカー込みで多段検索する。
5. 後継機/同名別スペックの値を混入させない。特にRio2系は4月RT機と11月ART機 `Rio2プレミアム` を分離する。
6. `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ遡及追加。
7. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## コミット

- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`
- 356 シーシー: `98a07df0f48dfb6b919f11c20b44a4316820594e`
- 357 Rio2 クルージング・ヴァナディース: `2f7b399b4b356c78879119dc7074c8e191dfd447`
