# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは358件地点 `さすがの猿飛`。既存358件を再追加せず、2009-04-20同日群の次候補を監査。
- **今回 359「エースをねらえ!」を追加。既存359件の再追加禁止。**
- 2009-04-20同日群は `Rio2 クルージング・ヴァナディース` 既存357、`さすがの猿飛` は当時納品日精密化により2009-04-19主値で既存358、今回 `エースをねらえ!` を359として追加。

## 358. さすがの猿飛（継承）

record:
- `docs/real_machine_db/machines/2009-04-19_sasuga-no-sarutobi.md`

要点:
- IGTジャパン / 2009-04-19主値（ALL7 4/20、パチビー4/21と日付定義差保持）。
- 5号機・ボーナス+ART/CZ/パンク回避/天井搭載。
- 機械割96.6〜110.0%、合成1/237.4〜1/198.0、約35G/50枚、ART約+1.0枚/G。
- resetBehaviorは設定変更/据え置き/電源OFF→ON/天井カウンタ/ナビストック処理を再探索後もUNVERIFIED_AFTER_RESEARCH。有利区間NOT_APPLICABLE。
- commit: `23e0068f8e288d4bed62a192d483ea3b84e90dfe`

## 359. エースをねらえ!

record:
- `docs/real_machine_db/machines/2009-04-20_ace-wo-nerae.md`

要点:
- manufacturer: ゴールドオリンピア / オリンピア
- releaseDate: **2009-04-20**。K-Naviホール導入開始、ALL7導入予定、slothistory当時系記録が一致。
- generation: 5号機
- systemType: **ボーナス + ART / CZ / パンク回避 / 二段階天井**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割: **95.6 / 98.2 / 100.8 / 103.4 / 106.1 / 111.1%**。
- BIG合算: **1/383.25 / 1/364.09 / 1/346.75 / 1/330.99 / 1/316.60 / 1/303.41**。
- REG合算: **1/574.88 / 1/546.13 / 1/520.13 / 1/496.48 / 1/474.90 / 1/455.11**。
- ボーナス合算: **1/229.95 / 1/218.45 / 1/208.05 / 1/198.59 / 1/189.96 / 1/182.04**。
- BIG約252枚、REG約56枚。
- ART「特訓TIME」は**1セット20G、純増約+1.0枚/G**。条件成立時は次回ボーナスまで継続する「猛特訓TIME」。
- 第1天井: **通常状態500GでCZ「宗方CHANCE」**。第2天井: **通常状態1000GでARTナビ1個、以後200Gごとに1個追加**。直撃天井と混同しない。
- 50枚ベースは検索語/資料系統を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。小役確率から逆算していない。
- 5号機クロニクルは機械割は一致するが、ARTを「エースをねらえ！RUSH・50G・約1.5枚」とする明確な別仕様混入があるため、PAYOUT照合以外は資料汚染として不採用。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが本文を回収できず、500G/1000Gカウンタ・ナビストック・CZ/ART状態の処理を断定しない。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の天井カウンタ/ナビストック/CZ/ART状態引継ぎを確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の天井カウンタ/ナビストック/CZ/ART状態を確定できず。
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`。通常天井値500G/1000G/以後200G刻みは確認済みだが、設定変更専用短縮/延長値は確認なし。
- modeAfterReset/stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits/resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/液晶等の本機固有条件を確定できず。
- numericResetData: 設定変更専用天井/モード振分/朝一当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- K-Navi / エースをねらえ! — OLD_ANALYSIS_HIGH
  - https://p-kn.com/slot/959/
- ALL7 / 2009年4月導入予定一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/04
- P-WORLD / エースをねらえ! — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5521
- pacnk / エースをねらえ! 設定判別ツール — SECONDARY_ANALYSIS_DATABASE
  - https://pacnk.com/slot/tools/sh_aceonerae.html
- パチマガスロマガ / エースをねらえ! — OLD_ANALYSIS_HIGH / OLD_ANALYSIS_INDEX
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/06/a.php
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/06/goldolympia_slot_06.php
- crankyseven / エースをねらえ！ — OLD_ANALYSIS_DATABASE
  - https://crankyseven.com/acewonerae-pc.htm
- パチスロ救急車 / エースをねらえ! — OLD_ANALYSIS_DATABASE
  - https://eightbeat.com/slot99/kishu/a_gyou/e/acewonerae/page_menu.html
- slothistory / 更新情報7 — CONTEMPORARY_ARCHIVE_SECONDARY
  - https://slothistory.com/kousin_kako07.html

commit:
- 359 エースをねらえ!: `405172802b73290cf1222ff6f8ea70489056971c`

## 2009年4月 境界監査

- 4/5 `夢花月` 既存354。
- 4/13 `クラシックジャグラー` 既存355、`シーシー` 既存356。
- 4/14〜4/18は具体日付きで安全に追加できる未処理パチスロを前リレーまでに確定できず。
- 4/19 `さすがの猿飛` 既存358（ALL7 4/20群から当時納品日で精密化）。
- 4/20 `Rio2 クルージング・ヴァナディース` 既存357、`エースをねらえ!` 今回359。
- 4/20同日群の未処理候補は **`プリティ戦記 / 国際サラリーマンとおるくん`**。毎回GitHub既存登録を確認して未処理のみ追加する。
- `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ正しい時系列位置へ遡及追加する。

## 次候補の先行確認 — プリティ戦記

- KPE / コナミ公式アーカイブで2009年4月稼働開始・5号機RTを確認。ALL7は2009-04-20導入予定。
- P-WORLD/K-Naviで赤7BIG、青7BIG、REG、50G完走型RT「プリティタイム」純増約+0.8枚/G、赤7BIG約308枚・青7BIG約203枚・REG約91枚を確認。
- pacnkでは通常PAYOUT **96.7 / 97.5 / 99.8 / 102.2 / 104.0 / 106.8%**、完全攻略PAYOUT **97.6 / 98.4 / 100.7 / 103.1 / 105.0 / 107.8%** を分離掲載。P-WORLD掲載の「機械割1」97.6〜107.8%は完全攻略系列と一致するため、次回は定義を分けて保存する。
- P-WORLDの「合算1/276.5〜1/216.3」は赤7BIG/青7BIG/REGから算出されるボーナス合算（約1/194〜1/162）と整合せず、pacnkでは1/276.5〜1/216.3を別設定判別項目として掲載している可能性がある。**次回はこの定義汚染/誤ラベルを解消してから採用し、平均しない。**
- pacnkは天井非搭載と明記。resetBehavior（設定変更/据え置き/電断/CZ・RT状態/変更判別）は次回本調査で多段検索する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 新規収集を止めず、既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準359件地点。既存359件の再追加禁止。**
2. **2009-04-20同日群の次の未処理機から継続。最優先候補は `プリティ戦記`。**
3. 次いで `国際サラリーマンとおるくん`。同日群なので毎回既存登録を検索し、未処理のみ追加する。
4. `プリティ戦記`は通常PAYOUT/完全攻略PAYOUTを分離し、P-WORLDの合算ラベル不整合を解消してから記録する。
5. 各新規機で性能コアとv0.7 resetBehaviorを同時収集し、設定変更/据え置き/電源OFF→ON/天井/モード/状態/ガックン/有利区間を表記揺れ・型式・メーカー込みで多段検索する。
6. `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ遡及追加。
7. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## コミット

- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`
- 356 シーシー: `98a07df0f48dfb6b919f11c20b44a4316820594e`
- 357 Rio2 クルージング・ヴァナディース: `2f7b399b4b356c78879119dc7074c8e191dfd447`
- 358 さすがの猿飛: `23e0068f8e288d4bed62a192d483ea3b84e90dfe`
- 359 エースをねらえ!: `405172802b73290cf1222ff6f8ea70489056971c`
