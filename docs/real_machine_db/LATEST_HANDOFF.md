# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは357件地点 `Rio2 クルージング・ヴァナディース`。既存357件を再追加せず、2009-04-20同日群の次候補を監査。
- **今回 358「さすがの猿飛」を追加。既存358件の再追加禁止。**
- ALL7では2009-04-20導入予定だが、2009-03-23グリーンべると当時記事に「納品は4月19日からスタート予定」とあるため、358のreleaseDate主値は2009-04-19。パチビーの2009-04-21導入日も定義差として保持。

## 357. Rio2 クルージング・ヴァナディース（継承）

record:
- `docs/real_machine_db/machines/2009-04-20_rio2-cruising-vanadis.md`

要点:
- ネット / 2009-04-20主値（K-Navi 2009-04-15はCONFLICT）
- 5号機・ボーナス+RT/CZ/天井搭載。
- 機械割は97.6〜110.0%系列と97.4〜109.7%系列がCONFLICT。
- BIG合算1/341.3→1/266.4、REG合算1/862.3→1/468.1、全ボーナス合算1/235.7→1/161.4。
- 50枚ベース39.2〜41.3G、BIG約260枚、REG約91枚、RTB約26枚。
- RT30G/777G、純増約+0.8枚/G。通常状態999GでCZ突入。
- resetBehaviorは設定変更/据え置き/電源OFF→ON/天井カウンタ/液晶判別の具体条件を再探索後もUNVERIFIED_AFTER_RESEARCH。有利区間NOT_APPLICABLE。
- commit: `2f7b399b4b356c78879119dc7074c8e191dfd447`

## 358. さすがの猿飛

record:
- `docs/real_machine_db/machines/2009-04-19_sasuga-no-sarutobi.md`

要点:
- manufacturer: IGTジャパン
- formalModelName: `さすがの猿飛`
- inspectionNumber: `8S1229`
- releaseDate主値: **2009-04-19**。2009-03-23グリーンべると当時記事が「納品は4月19日からスタート予定」。ALL7 2009-04-20導入予定、パチビー2009-04-21導入日は定義差として保持。
- generation: 5号機
- systemType: **ボーナス + ART / CZ / パンク回避 / 天井搭載**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割: **96.6 / 98.8 / 101.0 / 102.8 / 106.1 / 110.0%**。pacnk精密値96.63 / 98.80 / 100.96 / 102.77 / 106.07 / 110.01%と丸め範囲で一致。
- 赤7BIG: **1/1560.38 → 1/1149.75**
- 青7BIG: **全設定1/537.18**
- REG: **1/585.14 → 1/431.16**
- ボーナス合算: **1/237.4 → 1/198.0**。当時グリーンべるとも1/237→1/198を掲載。
- 50枚ベース: **約35G/50枚（1000円）**。当時グリーンべるとの直接値。
- 赤7BIG約207枚、青7BIG約205枚、REG約55枚。業界記事はBIG約205枚・REG約55枚。
- ART「神風RUSH」は約**+1.0枚/G**。ナビストックありで突入し、チェリーパンク回避型。ナビなし時はCZ「神風チャンス」。
- 天井搭載自体はP-WORLD/パチビーで確認。pacnkは約1290G目安を掲載するが、起算条件・恩恵を当時一次/大手解析本文で直接照合できなかったため `ANALYSIS_SINGLE_REFERENCE_ONLY` として保持。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが本文を回収できず、天井カウンタ/ナビストック/CZ/ART状態の処理を断定しない。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の天井ゲーム数・ナビストック・CZ/ART状態引継ぎを機種固有高信頼本文から確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の天井カウンタ・ナビストック・CZ/ART状態・液晶表示を確定できず。
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`。天井機能は確認済みだが設定変更時RESET/CARRY_OVER不明。
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`。設定変更専用短縮/延長天井数値は確認なし。
- modeAfterReset/stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。朝一専用モードや設定変更時のCZ/ART/ナビ状態を確定できず。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/液晶の本機固有条件を確定できず。
- numericResetData: 設定変更専用天井/モード振分/朝一当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。通常天井参考のみ約1290G（SECONDARY_ANALYSIS_REFERENCE_ONLY）。

主要出典（取得日 2026-09-02）:
- グリーンべると / 80年代の人気漫画「さすがの猿飛」がパチスロ化 — INDUSTRY_CONTEMPORARY
  - https://web-greenbelt.jp/00003030/
- ALL7 / 2009年4月導入予定一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/04
- P-WORLD / さすがの猿飛 — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5496
- パチビー / さすがの猿飛 — OLD_MACHINE_DATABASE
  - https://www.pachibee.jp/movies/index/1612
- K-Navi / 神風ラッシュ(ART) — OLD_ANALYSIS_HIGH
  - https://p-kn.com/slot/952/9744/
- pacnk / さすがの猿飛 設定判別ツール — SECONDARY_ANALYSIS_DATABASE
  - https://pacnk.com/slot/tools/sh_sarutobi.html
- パチマガスロマガ / さすがの猿飛 — OLD_ANALYSIS_INDEX
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/52/igt_slot_52.php

commit:
- 358 さすがの猿飛: `23e0068f8e288d4bed62a192d483ea3b84e90dfe`

## 2009年4月 境界監査

- 4/5 `夢花月` 既存354。
- 4/13 `クラシックジャグラー` 既存355、`シーシー` 既存356。
- 4/14〜4/18は具体日付きで安全に追加できる未処理パチスロを前リレーまでに確定できず。
- `さすがの猿飛` はALL7では4/20群だが、当時グリーンべるとで4/19納品開始予定を確認したため358の主日付を4/19へ精密化。
- 4/20 `Rio2 クルージング・ヴァナディース` 既存357。番号は追加順のまま保持し、日付精密化のため既存番号を振り直さない。
- 4/20同日群の未処理候補は **`エースをねらえ! / プリティ戦記 / 国際サラリーマンとおるくん`**。毎回GitHub既存登録を確認して未処理のみ追加する。
- `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ正しい時系列位置へ遡及追加する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準358件地点。既存358件の再追加禁止。**
2. **2009-04-20同日群の次の未処理機から継続。最優先候補は `エースをねらえ!`。**
3. 次いで `プリティ戦記 / 国際サラリーマンとおるくん`。同日群なので毎回既存登録を検索し、未処理のみ追加する。
4. 各新規機で性能コアとv0.7 resetBehaviorを同時収集し、設定変更/据え置き/電源OFF→ON/天井短縮/モード/状態/ガックン/有利区間を表記揺れ・型式・メーカー込みで多段検索する。
5. 4/19〜4/20境界は発表日ではなく納品/ホール導入の具体日を優先し、定義差はCONFLICT/注記で保持する。
6. `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ遡及追加。
7. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## コミット

- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`
- 356 シーシー: `98a07df0f48dfb6b919f11c20b44a4316820594e`
- 357 Rio2 クルージング・ヴァナディース: `2f7b399b4b356c78879119dc7074c8e191dfd447`
- 358 さすがの猿飛: `23e0068f8e288d4bed62a192d483ea3b84e90dfe`
