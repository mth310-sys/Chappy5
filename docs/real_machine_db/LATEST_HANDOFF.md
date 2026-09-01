# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **304 `まつり屋華恋`（フォープ企画・プロデュース / KPE製造 / 2008-10-19）**。
- 2008年10月境界を再監査し、直前地点より前へ遡る未登録2機種を確定。
- **305 `バウンティキラー`（山佐 / 2008-10-05）**、**306 `豊漁`（北電子 / 2008-10-05）** を遡及追加済み。既存304件は再収集せず、漏れ補完として扱う。
- 2機種とも性能コア + ミッションv0.7 `resetBehavior` を同時収集。競合値は平均せず保持。

## 305. バウンティキラー

- record: `docs/real_machine_db/machines/2008-10-05_bounty-killer.md`
- manufacturer: 山佐
- modelNumber: `バウンティキラーC`（P-WORLD / HAZUSEで照合、HAZUSE検定番号6S1046）
- releaseDate: **2008-10-05**。グリーンべると2008-09-20記事で「納品は10月5日からの予定」と明記。
- generation: 5号機
- systemType: ボーナス+CZ+次回ボーナスまでRT（RT中3択メイン役ナビ）。
- BIG合算: **1/448.88 / 1/414.78 / 1/374.49 / 1/346.75**（設定1〜4）。
- REG: **1/897.75 / 1/829.57 / 1/682.67 / 1/564.97**。
- ボーナス合算: **1/299.25 / 1/276.52 / 1/241.83 / 1/214.87**。
- 1000円ベース: **31.80 / 32.05 / 32.31 / 33.31G**（設定1〜4、パチマガスロマガ）。当時グリーンべるとの約32Gとも整合。
- RT「バウンティタイム」純増約**+0.5枚/G**。ボーナス後最大100Gの「バウンティゾーン」から特殊リプレイで入り、次回ボーナスまで継続（シングル役一部入賞でパンクあり）。
- 平均獲得: HYPER BIG約**406枚** / NORMAL BIG約**330枚** / REG約**80枚**。
- 通常ゲーム数天井は確認なし。ボーナス後最大100Gゾーンを通常天井と混同しない。
- 機械割はパチマガスロマガのシミュレート **96.32 / 99.55 / 105.64 / 111.24%** とHAZUSE **96.5 / 99.6 / 105.1 / 110.1%** が競合。平均せず `CONFLICT`。
- BIG規定払い出し条件もパチマガとK-Naviに差があり `CONFLICT`。実獲得枚数とは定義分離。
- 一部後年DBのバウンティキラー欄に別機種由来とみられる説明混入を確認し、導入時期・性能値の根拠から除外。
- `coreStatus: COMPLETE_CORE_WITH_PAYOUT_AND_PAYOUT_CONDITION_CONFLICTS`。

### resetBehavior（305）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガの現存インデックスに「攻め時・ヤメ時・設定変更時」項目は存在するが本文を回収できず、機種名/型式名/山佐 + 設定変更/リセット/朝一/据え置き/電源OFF ON/天井/RT/ガックンを組み替えても直接値を確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。据え置き時のバウンティゾーン残G/RT状態を直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみのゾーン残G/RT/初期出目処理を直接確定できず。
- `gameCounterReset`: 通常ゲーム数天井は非該当。バウンティゾーン残Gの設定変更時処理のみ未確定。
- `ceilingAfterReset`: 通常天井/リセット専用短縮天井は確認なし。
- `modeAfterReset` / `stateAfterReset`: 本機固有の初期状態を直接確定できず。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: 朝一専用の公開恩恵/不利を確認できず。
- `resetDetection`: ガックン/初期出目/表示等を含め再探索したが本機固有条件は未確定。
- 公開朝一専用数値: 短縮天井、モード振り分け、朝一当選率、リセット恩恵発生率はいずれも確認なし。

## 306. 豊漁

- record: `docs/real_machine_db/machines/2008-10-05_horyo.md`
- manufacturer: 北電子
- modelNumber: **`ホウリョウ7`**。北電子公式検定情報と当時グリーンべるとで確認。
- releaseDate: **2008-10-05**。グリーンべると2008-08-29記事で「10月5日より納品がスタート」と明記。
- generation: 5号機
- systemType: ノーマル/完全告知 + 演出用プチRT。
- BIG: **1/292.57 / 1/282.48 / 1/273.07 / 1/264.26 / 1/256.00 / 1/248.24**。
- REG: **1/512.00 / 1/512.00 / 1/431.16 / 1/372.36 / 1/341.33 / 1/327.68**。
- 合算: **1/186.18 / 1/182.04 / 1/167.18 / 1/154.57 / 1/146.29 / 1/141.24**。
- 1000円ベース: **36.90G（設定1〜5） / 38.57G（設定6）**（パチマガスロマガ、プチRT非考慮）。
- BIG約**312枚**、REG約**104枚**。
- タイ図柄/特殊リプレイ後の「豊漁チャンス」は出玉獲得用RTではなく演出用プチRT。P-WORLD/業界記事の最大4Gとパチマガの入賞後3G表記は数え方差の可能性があるため `CONFLICT_DEFINITION_OR_COUNTING` として併記。
- 機械割はK-Navi **96.54 / 97.76 / 99.97 / 102.13 / 104.06 / 107.30%**（5号機クロニクルは丸め一致）に対し、パチマガスロマガ・シミュレート **97.31 / 98.53 / 100.98 / 103.48 / 105.56 / 109.12%**。平均せず `CONFLICT`。
- `coreStatus: COMPLETE_CORE_WITH_PAYOUT_RATE_CONFLICT`。

### resetBehavior（306）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。豊漁/豊漁7/ホウリョウ7/北電子 + 設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックンを組み替え、公式・当時記事・攻略・旧DBを横断しても本機固有の変更時初期状態を直接確定できず。
- `carryOverBehavior`: 通常ゲーム数天井は非該当。演出用プチRT残状態の据え置き処理のみ未確定。
- `powerCycleBehavior`: 電源OFF→ONのみの演出用プチRT残状態/初期出目処理を直接確定できず。
- `gameCounterReset`: `NOT_APPLICABLE`。通常ゲーム数/ボーナス間ゲーム数による天井は確認なし。
- `ceilingAfterReset`: `NOT_APPLICABLE`。通常天井/リセット短縮天井は確認なし。
- `modeAfterReset`: 通常時モード管理/朝一専用モードは確認なし。
- `stateAfterReset`: 演出用プチRT残状態のみ未確定。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: 朝一専用の公開恩恵/不利は確認なし。
- `resetDetection`: ガックン/初期出目/告知ランプ/液晶表示を含め再探索したが本機固有条件は未確定。
- 公開朝一数値: 短縮天井、モード振り分け、朝一当選率、リセット恩恵率はいずれも確認なし。

## 305-306主要出典

取得日: 2026-09-02

### バウンティキラー
- https://web-greenbelt.jp/00003809/
- https://www.p-world.co.jp/machine/database/5301
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/yamasa_slot_159.php
- https://hazuse.com/machine/pachislot/6S1046/
- https://p-kn.com/slot/861/

### 豊漁
- https://web-greenbelt.jp/00003747/
- https://www.kitadenshi.co.jp/slot-kentei/horyo/
- https://www.p-world.co.jp/machine/database/5308
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/67/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/67/c.php
- https://p-kn.com/slot/855/6875/
- https://p-kn.com/slot/855/
- https://5goki.com/kitac

## 境界監査・重複防止

- **既存306件の再追加禁止。**
- 305/306は304より前の日付のため、件数番号は追加順、releaseDateは実導入/納品時系列として扱う。将来INDEX統合時に日付ソートと件数表示を整理する。
- `バウンティキラー` と `豊漁` はともに2008-10-05納品群の漏れとして補完。
- 302 `アカギ～永続の闘牌～` は2008-10-14、303 `天地を喰らう` と304 `まつり屋華恋` は2008-10-19で処理済み。
- 2008-10-06〜13、および10-20〜31は引き続き境界監査対象。既存レコードと照合し、今回同様に直前地点より前の漏れが見つかった場合は遡及追加する。
- `ハードボイルド～グリフォンの幻影～`、`南国育ち` は2008-11-03納品群として確認済みで、10月群へ混入させない。
- `鬼火`、`サイサイ` は2008-11-24納品開始資料があるため10月へ混入させない。

## resetBehavior 遡及QA

- 最終補完済み地点 **`球児（2006-09）`** を維持。
- 新規収集を優先しつつ、既存QAは別リレーで順次補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準306件地点。まず2008-10-06〜13と10-20〜31の境界を再監査し、既存未登録機を具体納品/導入日順に補完する。**
2. 旧候補 `赤ジャック / 赤ジャック30 / クローズ武装戦線 / 逆境ナイン` 等はrepo既存登録・正式導入日を再確認し、未登録かつ2008-10の根拠があるものだけ追加する。
3. 10月残を閉じたら2008-11-03納品群（`ハードボイルド～グリフォンの幻影～`、`南国育ち` 等）のrepo既存登録を検索し、最古未処理から進む。
4. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替え、複数資料系統を横断してから判定する。競合は平均せず `CONFLICT` を維持する。
