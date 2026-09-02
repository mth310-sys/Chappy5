# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは354件地点 `夢花月`（2009-04-05納品開始予定 / 2009-04-06ホール導入開始資料あり）。既存354件を再追加せず、2009-04-06〜04-12を具体導入/納品日で監査した。
- ALL7 2009年4月一覧、当時グリーンべると記事、機種別資料を照合し、4/6〜4/12へ安全に置ける未処理パチスロ具体日を今回確定できなかった。記事投稿日・発表日を導入日に代用していない。
- 4/13群へ接続し、北電子 `クラシックジャグラー` を355件目として追加。
- **今回 355「クラシックジャグラー」を追加。既存355件の再追加禁止。**

## 354. 夢花月（継承）

record:
- `docs/real_machine_db/machines/2009-04-05_yume-kagetsu.md`

要点:
- 山佐 / 型式 `ユメカゲツD`
- 2009-04-05納品開始予定。K-Naviは2009-04-06ホール導入開始、山佐公式は2009年4月稼働。
- A+ART / 完走型ART。
- 機械割はP-WORLD 97.1〜110.7% と旧解析97.2〜110.0%でCONFLICT、平均化せず保持。
- BIG 1/1524.1→1/993.0、ART初当り1/195.2→1/118.4、50枚ベース29.88→29.85G。
- ART「花月乱舞」約+1.5枚/G、33/77/111/333/555/777/999G。
- resetBehaviorは設定変更後液晶開始ステージに単一旧独自調査の報告あり。他の内部状態/電断/ART残G等はUNVERIFIED_AFTER_RESEARCH。有利区間NOT_APPLICABLE。
- commit: `131ad235224d14cb77b34f8c6e5ae8f69b860640`

## 355. クラシックジャグラー

record:
- `docs/real_machine_db/machines/2009-04-13_classic-juggler.md`

要点:
- manufacturer: 北電子
- formalModelName: `クラシックジャグラーIII`（当時グリーンべると / HAZUSE、検定番号8S1176）
- releaseDate: **2009-04-13**（HAZUSE等の具体日）。当時K-Naviは「4月中旬導入予定」なので、具体日と当時予定表現を分離保持。
- generation: 5号機
- systemType: ノーマル / 完全告知 / ボーナス主体
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 北電子公式機械割: **96.9 / 97.8 / 100.7 / 102.6 / 104.7 / 107.4%**
- BIG: **1/287.4 / 1/282.5 / 1/268.6 / 1/260.1 / 1/248.2 / 1/240.9**
- REG: **1/420.1 / 1/409.6 / 1/381.0 / 1/356.2 / 1/348.6 / 1/309.1**
- 合算: **1/170.7 / 1/167.2 / 1/157.5 / 1/150.3 / 1/145.0 / 1/135.4**
- 50枚ベース: **35.24 / 35.35 / 35.77 / 35.91 / 36.10 / 36.37G**（単一解析掲載値のためANALYSIS_SINGLE）
- BIG約312枚、REG約117枚。当時グリーンべるととパチマガスロマガで照合。
- RT/ART/AT非搭載、天井なし。
- 北電子公式の設定1機械割96.9%に対し旧整理資料の一部96.8%表記あり。公式値を主値とし平均化しない。
- 一部後年DBにBIG240枚/REG96枚という本5号機と整合しない値が見られるため、北電子公式・当時業界・当時解析系列を優先し不採用。

### v0.7 resetBehavior

- settingChangeBehavior: `NO_MACHINE_SPECIFIC_RESET_EFFECT_CONFIRMED_AFTER_RESEARCH`。設定変更専用の天井短縮、モード優遇、状態振分、朝一当選率は確認できず。ガックン等の機種固有挙動は直接資料未確定。
- carryOverBehavior: `NOT_APPLICABLE_TO_GAME_NUMBER_CEILING_AND_MODE / MACHINE_SPECIFIC_REEL_OR_DISPLAY_BEHAVIOR_UNVERIFIED`。据え置きで引き継ぐ天井G数、ART/RT残G、通常時モードは該当なし。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の本機固有リール初期位置、ランプ、内部成立状態等の直接資料を確定できず。
- gameCounterReset: `NOT_APPLICABLE`。ゲーム数天井・ゲーム数管理当選なし。
- ceilingAfterReset: `NOT_APPLICABLE / NO_CEILING`。
- modeAfterReset: `NOT_APPLICABLE_TO_PUBLISHED_NORMAL_MODES`。
- stateAfterReset: `NOT_APPLICABLE_TO_PUBLISHED_PERSISTENT_STATES`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。ジャグラーシリーズ一般論を本機固有情報として転記しない。
- numericResetData: リセット専用天井はNOT_APPLICABLE、朝一当選率/恩恵率はNONE_CONFIRMED_AFTER_RESEARCH。

主要出典（取得日 2026-09-02）:
- 北電子公式 / クラシックジャグラー — OFFICIAL
  - https://www.kitadenshi.co.jp/slot/classicjuggler/
- グリーンべると / 北電子が『クラシックジャグラー』を発表 — INDUSTRY_CONTEMPORARY
  - https://news.p-world.co.jp/articles/3289/greenbelt
- K-Navi / クラシックジャグラー発売ニュース — INDUSTRY_CONTEMPORARY_SECONDARY
  - https://p-kn.com/topics/news/738/
- HAZUSE / クラシックジャグラー — ANALYSIS_DATABASE
  - https://hazuse.com/machine/pachislot/8S1176/
- パチマガスロマガ / クラシックジャグラー — ANALYSIS_HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/69/a.php
- けんのスロットシミュレーション / クラシックジャグラー — ANALYSIS_SINGLE
  - https://kenslo65536.com/kaiseki/juggler-classic.html
- P_Style777 / クラシックジャグラー — OLD_ANALYSIS
  - https://ps777.net/data/kitadenshi/classic-juggler.htm
- ALL7 / 2009年4月導入予定一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/04

commit:
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`

## 2009年4月 境界監査

- 4/5 `夢花月` 既存354（4/6ホール導入開始資料も保持）。
- 4/6〜4/12は今回、具体日付きで安全に追加できる未処理パチスロを確定できず。
- 4/13 `クラシックジャグラー` 今回355。
- ALL7では4/13に **`シーシー`（コルモ）** を確認。次回の最優先同日群候補。
- ALL7の4/13表示にはパチンコ `デビルマン～悪魔聖戦～`、`フィーバー銀牙伝説WEED`、`中村美律子の人生祭りだ!だんじりだ!` も混在するため、パチスロ本線へ誤混入しない。
- 4/20群には `RIO2 クルージング・ヴァナディース`、`さすがの猿飛`、`エースをねらえ!`、`プリティ戦記`、`国際サラリーマンとおるくん` が候補として見えるため、4/13同日群を閉じた後に4/14〜4/19を監査して接続する。
- `スターマンアイズ / ジュードーズ` は具体日が新たに取れた場合のみ正しい時系列位置へ遡及追加する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準355件地点。既存355件の再追加禁止。**
2. **2009-04-13同日群を継続監査**する。
3. 最優先は **`シーシー`（コルモ）**。ALL7で2009-04-13導入予定を確認済み。正式型式、当時業界/メーカー資料、性能コア、v0.7 resetBehaviorを収集し、既存未登録なら次番号候補とする。
4. 4/13同日群の他パチスロ候補がないことを確認後、2009-04-14〜04-19を具体納品/導入日で監査する。
5. 4/14〜4/19に未処理機がなければ4/20群へ進む。ALL7候補は `RIO2 クルージング・ヴァナディース / さすがの猿飛 / エースをねらえ! / プリティ戦記 / 国際サラリーマンとおるくん`。
6. `スターマンアイズ / ジュードーズ` は具体日が新たに取れた場合のみ正しい時系列位置へ遡及追加する。
7. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
8. 一般論、後継機、同名別メーカー機の値で推測補完しない。

## コミット

- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`
