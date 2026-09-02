# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは360件地点 `プリティ戦記`。既存360件を再追加せず、2009-04-20同日群の次候補を監査。
- **今回 361「国際サラリーマンとおるくん」を追加。既存361件の再追加禁止。**
- 2009-04-20同日群は `Rio2 クルージング・ヴァナディース` 既存357、`さすがの猿飛` は当時納品日精密化により2009-04-19主値で既存358、`エースをねらえ!` 既存359、`プリティ戦記` 既存360、今回 `国際サラリーマンとおるくん` を361として追加。

## 361. 国際サラリーマンとおるくん

record:
- `docs/real_machine_db/machines/2009-04-20_kokusai-salaryman-toru-kun.md`

要点:
- manufacturer: KPE
- formalModelName: `国際サラリーマンとおるくんJC`
- inspectionNumber: `8S0198`
- releaseDate: **2009-04-20**。ALL7導入予定日を主値とし、KONAMI公式機種アーカイブの2009年4月稼働開始、P-WORLDの2009年4月導入開始と整合。
- generation: 5号機
- systemType: **ボーナス + RT / パンク回避型RT**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割は2系列が競合。pacnk: **96.9 / 97.9 / 100.1 / 102.7 / 105.5 / 108.4%**。P-WORLD/5号機クロニクル: **98.1 / 99.1 / 101.4 / 103.9 / 106.8 / 109.8%**。通常/完全攻略差の可能性はあるが直接資料で計算条件を確定できず、平均せず `CONFLICT_DEFINITION_UNRESOLVED`。
- 青7BIG: **1/2114.06 / 1/2114.06 / 1/2114.06 / 1/1985.94 / 1/1985.94 / 1/1872.46**。
- 赤7BIG: **1/668.73 / 1/630.15 / 1/555.39 / 1/512.00 / 1/448.88 / 1/417.43**。
- BIG合算: **1/508.0 / 1/485.5 / 1/439.8 / 1/407.1 / 1/366.1 / 1/341.3**。
- REG: **1/1092.27 / 1/1092.27 / 1/1024.00 / 1/949.80 / 1/873.81 / 1/819.20**。
- 全ボーナス合算: **1/346.8 / 1/336.1 / 1/307.7 / 1/284.9 / 1/258.0 / 1/240.9**。
- BIG約300枚、REG約70枚。
- 全ボーナス終了後RT。赤7BIG後100G、REG後50G、青7BIG後は次回ボーナスまで続くRT「バブルタイム」。RTはパンク役入賞で終了し、ナビ時に赤7を狙うことで回避可能。
- P-WORLDはRT純増を約**+0.7枚/G**と掲載。一方pacnkは赤7/REG後RTを「現状維持RT」、青7後を「増加型RT」と表現するため、RT別個別純増へ展開せず定義差を保持。
- **天井非搭載**を直接確認。
- 50枚ベースは機種名/型式/KPEと「50枚」「1000円」「ベース」「コイン持ち」を組み替え、P-WORLD、pacnk、パチマガスロマガ、後年DB/回顧資料まで再探索したが `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガの1000円あたりゲーム数欄は「現在調査中」のまま。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。機種名/型式/KPEと「設定変更」「リセット」「朝一」「据え置き」「RT」「バブルタイム」「パンク」を組み替えた。パチマガスロマガに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが本文を回収できず、設定変更時のRT状態を断定しない。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の赤7後RT/REG後RT/バブルタイム残状態引継ぎを確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時のRT残状態を確定できず。
- gameCounterReset: `NOT_APPLICABLE_TO_GAME_COUNT_CEILING`。天井非搭載のため天井G数カウンタ対象なし。
- ceilingAfterReset: `NOT_APPLICABLE`。通常天井・リセット専用短縮天井なし。
- modeAfterReset: `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。RT中の設定変更/電断時の状態初期化・継続を確定できず。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits/resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、RT表示/液晶等の本機固有判別条件を確定できず。
- numericResetData: 設定変更専用モード振分/状態振分/朝一当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`、短縮天井は `NOT_APPLICABLE`。

主要出典（取得日 2026-09-02）:
- KONAMI / 国際サラリーマンとおるくん機種アーカイブ — OFFICIAL
  - https://www.konami.com/amusement/psm/archive/ps/2009/kokusai/
- ALL7 / 2009年4月導入予定一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/04
- P-WORLD / 国際サラリーマンとおるくん — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5489
- pacnk / 国際サラリーマンとおるくん 設定判別ツール — SECONDARY_ANALYSIS_DATABASE
  - https://pacnk.com/slot/tools/sh_kokusaisarariman.html
- パチマガスロマガ / 基本システム — OLD_ANALYSIS_HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/14/a.php
- パチマガスロマガ / 1000円あたりゲーム数 — OLD_ANALYSIS_HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/14/c.php
- パチマガスロマガ / 機種索引 — OLD_ANALYSIS_INDEX
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/14/kpe_slot_14.php
- 5号機クロニクル / KPE一覧 — SECONDARY_RETROSPECTIVE
  - https://5goki.com/kpe
- pachinko’s blog / KPE「国際サラリーマンとおるくん」 — SECONDARY_ARCHIVE
  - https://pachinko.hatenablog.jp/entry/2009/04/kokusai-salaryman-toru-kun
- slothistory / 更新情報5 — OLD_ARCHIVE
  - https://slothistory.com/kousin_kako05.html

commit:
- 361 国際サラリーマンとおるくん: `f8a9510d08507ee4c2ab86600a3997a92b6f4903`

## 2009年4月 境界監査

- 4/5 `夢花月` 既存354。
- 4/13 `クラシックジャグラー` 既存355、`シーシー` 既存356。
- 4/14〜4/18は具体日付きで安全に追加できる未処理パチスロを前リレーまでに確定できず。
- 4/19 `さすがの猿飛` 既存358（ALL7 4/20群から当時納品日で精密化）。
- 4/20 `Rio2 クルージング・ヴァナディース` 既存357、`エースをねらえ!` 既存359、`プリティ戦記` 既存360、`国際サラリーマンとおるくん` 今回361。
- ALL7の4/20掲載パチスロ群は上記まで処理済み。次回は**2009-04-21〜04-30の月末境界を、ALL7だけでなく当時業界記事・メーカー資料・古い導入一覧まで横断して監査**し、具体日付き未処理機があれば時系列順に追加する。
- `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ正しい時系列位置へ遡及追加する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 新規収集を止めず、既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準361件地点。既存361件の再追加禁止。**
2. **2009-04-21〜04-30の月末境界監査から継続。具体日付き未処理機があれば最古から追加し、境界を閉じてから2009年5月へ進む。**
3. 毎回GitHub最新mainで既存登録を確認し、未処理のみ追加する。
4. 各新規機で性能コアとv0.7 resetBehaviorを同時収集し、設定変更/据え置き/電源OFF→ON/天井/モード/状態/ガックン/有利区間を表記揺れ・型式・メーカー込みで多段検索する。
5. `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ遡及追加。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## コミット

- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`
- 356 シーシー: `98a07df0f48dfb6b919f11c20b44a4316820594e`
- 357 Rio2 クルージング・ヴァナディース: `2f7b399b4b356c78879119dc7074c8e191dfd447`
- 358 さすがの猿飛: `23e0068f8e288d4bed62a192d483ea3b84e90dfe`
- 359 エースをねらえ!: `405172802b73290cf1222ff6f8ea70489056971c`
- 360 プリティ戦記: `a834bd17236dc67a52086fa0c7a7f4941080972a`
- 361 国際サラリーマンとおるくん: `f8a9510d08507ee4c2ab86600a3997a92b6f4903`
