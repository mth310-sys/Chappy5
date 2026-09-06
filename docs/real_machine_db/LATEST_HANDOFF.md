# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **805**
- latestRecordAdded: **スロットジャックポット**（岡崎産業）— 2014-03-17
- latestRecord: `docs/real_machine_db/machines/2014-03-17_slot-jackpot-okazaki.md`
- chronologicalFrontier: **2014-03-17**
- frontierLatestMachine: **スロットジャックポット**
- schema: **resetBehavior v0.7**
- status: **2014-03-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH / SLOT_JACKPOT_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-03-17_monster-hunter-gekkaraimei.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を現在の正本として継続。
- 作業開始時正本は **recordCount 804 / chronologicalFrontier 2014-03-17 / 03-17_GROUP_OPEN**。
- 03-17同日群をHAZUSE新台カレンダー、K-Navi、P-WORLD、メーカー/回顧DB系統で再監査し、旧handoffに未記載だった岡崎産業 **「スロットジャックポット」**を検出。
- GitHub main検索で未登録を確認後、805件目として追加。
- 03-17具体日で今回固定できたパチスロは既登録「パチスロ モンスターハンター 月下雷鳴」と今回の「スロットジャックポット」。追加候補をさらに具体日検索したが今回新たな未登録5号機を固定できなかったため **03-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- HAZUSE新台カレンダーでは03/17の次の強い日付アンカーが **2014-03-24**。ただし03-18〜03-23境界の最終監査は次回へ残す。

## 今回追加 — スロットジャックポット

### identity / 性能コア

- manufacturer: **岡崎産業**。
- hall start: **2014-03-17**（K-Navi）。5号機クロニクルも2014年3月導入で月単位照合。
- generation/system: **5号機 / ノーマル / リアルボーナス / C.O.S（キャリーオーバーシステム）・ネオストック型 / 完全告知 / 技術介入**。
- payout: **95.0 / 97.0 / 99.0 / 101.0 / 103.0 / 105.0%**（K-Navi単一当時資料系列）。
- 通常時全モード通算の設定別初当たり: **UNVERIFIED_AFTER_RESEARCH**。
- 天国モード中ボーナス合算: **1/77〜1/77.5**。
- K-Navi表: BB1 **1/1008.3** / BB2 **1/504.1** / BB3 **1/100.8** / 合算 **1/77.5**（設定1〜6共通）。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。P-WORLDは「コイン持ち良し」と定性分類するが比較可能な数値なし。
- netIncrease: **NOT_APPLICABLE_REAL_BONUS_TYPE**。
- BIG1最大 **311枚**、BIG2最大 **194枚**。
- BIG3最大獲得は **90枚（K-Navi/P-WORLD） vs 97枚（パチマガスロマガ）**で `CONFLICT_BONUS3_MAX_90_VS_97`。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT**。

### モード系統 / CONFLICT

- P-WORLDでは通常時内部モードを **ハマリ / ノーマル / 天国**の3種類と整理。
- ボーナス後は必ず天国モードへ、JACK POT TIME点灯で天国確定、コインランプ点灯で天国期待とする資料あり。
- 天国/JACK POT TIMEループ率は **約77%（P-WORLD） vs 約88%（K-Navi / パチマガスロマガ）**で競合。平均せず `CONFLICT_HEAVEN_LOOP_77_VS_88` として保存。
- 1/77〜1/77.5は天国モード限定値であり、通常時全体の設定別初当たりへ転記していない。

### resetBehavior v0.7

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- conventional game-count ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 内部3モードの存在は確認したが、設定変更時初期振り分け/据え置き保持/電源OFF→ON契約は **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties / resetDetection / publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 「C.O.S = キャリーオーバーシステム」という商品上の名称だけから、設定据え置きや電源OFF→ONの物理的キャリーオーバーを推定していない。

## safeguards / definitions

- K-Naviの設定別機械割は5号機クロニクル側に独立数値がないため `ANALYSIS_SINGLE_PERIOD_SOURCE` として保持。
- P-WORLDの「コイン持ち良し」を数値ベースへ換算しない。
- パチマガスロマガの「2014年1月」表記は資料ページ側の月表記として保持し、K-Naviの具体的ホール導入日2014-03-17と直接CONFLICT化しない。
- モード通常時全移行テーブル、詳細抽選は実機完全再現範囲なので収集しない。

## 2014-03-17同日群監査

- **パチスロ モンスターハンター 月下雷鳴** — 既登録804件目。
- **スロットジャックポット** — 今回805件目として追加。
- 同日具体日で追加すべき未登録5号機を今回の横断再探索でそれ以上固定できなかったため **03-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 次回再開地点

1. **recordCount 805 / chronologicalFrontier 2014-03-17 / 03-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. **2014-03-18〜03-23境界**を具体日検索、HAZUSE/K-Navi/P-WORLD/メーカー別月間資料で最終監査。
3. 未登録機がなければ **03-18_TO_03-23_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
4. 続いてHAZUSE新台カレンダー上の次の強い日付 **2014-03-24群**を全メーカー横断で探索し、最初の未登録機を806件目候補として処理。
5. 03-24群も1機処理で閉じず、全メーカー横断監査後にCLOSED判定する。
6. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02_pikaslo.md` から継続。新規時系列キューを止めない。
7. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）**を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### スロットジャックポット
- K-Navi: `https://p-kn.com/slot/2030/odds/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7345`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/70/a.php`
- 5号機クロニクル 岡崎産業: `https://5goki.com/okazaki`

### 次境界
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

### 遡及QA
- 次対象: `docs/real_machine_db/machines/2007-02_pikaslo.md`
