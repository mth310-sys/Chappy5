# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは359件地点 `エースをねらえ!`。既存359件を再追加せず、2009-04-20同日群の次候補を監査。
- **今回 360「プリティ戦記」を追加。既存360件の再追加禁止。**
- 2009-04-20同日群は `Rio2 クルージング・ヴァナディース` 既存357、`さすがの猿飛` は当時納品日精密化により2009-04-19主値で既存358、`エースをねらえ!` 既存359、今回 `プリティ戦記` を360として追加。

## 360. プリティ戦記

record:
- `docs/real_machine_db/machines/2009-04-20_pretty-senki.md`

要点:
- manufacturer: KPE
- releaseDate: **2009-04-20**。ALL7導入予定日を主値とし、KPE/コナミ系公式・複数後年資料の2009年4月と整合。
- generation: 5号機
- systemType: **ボーナス + 完走型RT / CZ**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 通常PAYOUT: **96.7 / 97.5 / 99.8 / 102.2 / 104.0 / 106.8%**。
- 完全攻略PAYOUT: **97.6 / 98.4 / 100.7 / 103.1 / 105.0 / 107.8%**。通常値と平均せず定義分離。
- 赤7BIG: **1/851 / 1/840 / 1/789 / 1/720 / 1/689 / 1/636**。
- 青7BIG: **1/728 / 1/689 / 1/630 / 1/590 / 1/550 / 1/504**。
- REG: **全設定1/936**。
- 3種ボーナス合算: **1/276.50 / 1/269.70 / 1/255.00 / 1/240.90 / 1/230.80 / 1/216.30**。
- K-Navi/後年資料の「ボーナス合算」約**1/194〜1/162**は、3種ボーナスに前兆CZ約1/655を加えた合算と算術的に一致するため、純粋なボーナス合算へ混ぜず **CZ込みイベント合算** として分離。誤ラベル/定義汚染を平均しない。
- 赤7BIG約308枚、青7BIG約203枚、REG約91枚。
- RT「プリティタイム」は**50G完走型・純増約+0.8枚/G**。
- 通常時の特殊リプレイ（ベル・ベル・リプレイ）後16Gを経てCZにつながる構造を確認。
- 50枚ベースは検索語/資料系統を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガの1000円あたりゲーム数ページは現存するが「現在調査中」。小役確率から逆算していない。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。機種名表記揺れ/KPEと設定変更・リセット・朝一・据え置き・プリティチャンス・プリティタイム・特殊リプレイを組み替え、パチマガスロマガの「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが本文を回収できず、CZ/RT/特殊リプレイ後前兆状態の処理を断定しない。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時のCZ/RT/前兆状態引継ぎを確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時のCZ/RT/前兆状態を確定できず。
- gameCounterReset: `NOT_APPLICABLE_TO_GAME_COUNT_CEILING_AFTER_RESEARCH`。ゲーム数到達型天井は今回確認できず、特殊リプレイ後16Gは天井と混同しない。
- ceilingAfterReset: `NONE_CONFIRMED_AFTER_RESEARCH`。設定変更専用短縮/延長天井の公開値なし。
- modeAfterReset/stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits/resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/液晶等の本機固有条件を確定できず。
- numericResetData: 設定変更専用天井/モード振分/朝一当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- ALL7 / 2009年4月導入予定一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/04
- P-WORLD / プリティ戦記 — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5488
- K-Navi / プリティ戦記 — OLD_ANALYSIS_HIGH
  - https://p-kn.com/slot/937/
- pacnk / プリティ戦記 設定判別ツール — SECONDARY_ANALYSIS_DATABASE
  - https://pacnk.com/slot/tools/sh_pritysenki.html
- パチマガスロマガ / プリティ戦記 基本システム — OLD_ANALYSIS_HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/15/a.php
- パチマガスロマガ / 1000円あたりゲーム数 — OLD_ANALYSIS_HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/15/c.php
- パチマガスロマガ / プリティ戦記索引 — OLD_ANALYSIS_INDEX
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/15/kpe_slot_15.php
- pachinko’s blog / KPE「プリティ戦記」 — SECONDARY_ARCHIVE
  - https://pachinko.hatenablog.jp/entry/2009/04/pretty-senki
- KONAMI / スロうた♪ — OFFICIAL
  - https://www.konami.com/games/jp/ja/products/gfca270/

commit:
- 360 プリティ戦記: `a834bd17236dc67a52086fa0c7a7f4941080972a`

## 2009年4月 境界監査

- 4/5 `夢花月` 既存354。
- 4/13 `クラシックジャグラー` 既存355、`シーシー` 既存356。
- 4/14〜4/18は具体日付きで安全に追加できる未処理パチスロを前リレーまでに確定できず。
- 4/19 `さすがの猿飛` 既存358（ALL7 4/20群から当時納品日で精密化）。
- 4/20 `Rio2 クルージング・ヴァナディース` 既存357、`エースをねらえ!` 既存359、`プリティ戦記` 今回360。
- 4/20同日群の残る最優先未処理候補は **`国際サラリーマンとおるくん`**。ALL7で2009-04-20、KONAMI公式アーカイブで2009年4月稼働開始・5号機RTを先行確認済み。
- `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ正しい時系列位置へ遡及追加する。

## 次候補の先行確認 — 国際サラリーマンとおるくん

- KPE / KONAMI公式アーカイブで2009年4月稼働開始・5号機RTを確認。ALL7は2009-04-20導入予定。
- pacnkでボーナス初当り **1/346.80 → 1/240.90**、通常PAYOUT **96.90 → 108.40%**、天井非搭載を確認。
- 後年スペック整理でBIG合算 **1/508.0 → 1/341.3**、REG **1/1092.3 → 1/819.2**、通常PAYOUT **96.9 → 108.4%** と完全攻略側とみられる上限 **98.1 → 109.8%** のレンジを確認。
- 赤7BIG後100G、REG後50Gの現状維持RT、青7BIG後は次回ボーナスまで続く増加型RT「バブルタイム」という構造をpacnkで先行確認。
- 次回はBIG/REG内訳、獲得枚数、50枚ベース、RT純増、通常/完全攻略PAYOUT定義、resetBehavior（設定変更/据え置き/電断/RT状態/パンク回避/変更判別）を多段検索してから登録する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 新規収集を止めず、既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準360件地点。既存360件の再追加禁止。**
2. **2009-04-20同日群の次の未処理機から継続。最優先候補は `国際サラリーマンとおるくん`。**
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
