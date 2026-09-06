# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **771**
- latestMachineAddedByChronology: **猛虎花形**（スパイキー）
- latestRecord: `docs/real_machine_db/machines/2013-10-21_mouko-hanagata.md`
- chronologicalFrontier: **2013-10-21**
- frontierLatestExactDateMachine: **猛虎花形**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-10-21_GROUP__MOUKO_HANAGATA_DONE__NEXT_LOVEJO**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、既存2013-10-07レコードを再読してから継続。
- INDEXは旧集約状態（19件表記）のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を正とした。
- 作業開始時の最新正本は **recordCount 770 / chronologicalFrontier 2013-10-07 / 10-07群CLOSED**。直前チャットの766件地点は採用しない。
- **2013-10-08〜2013-10-20** を、導入日/納品日/検定日を分離しつつ、HAZUSE・K-Navi・業界DB・一般検索で再監査。今回追加すべき確定日付き未登録パチスロを確認できなかったため、既知の次具体日 **2013-10-21** へ前進。
- 2013-10-21候補のうち、まず **猛虎花形** の既存レコード不在をmainで確認して771件目として登録。

## 今回追加 — 猛虎花形

### identity / 性能コア

- manufacturer: **スパイキー / Spiky**。
- modelName: **猛虎花形CC**。
- inspectionNumber: **3S0448**。
- releaseDate: **2013-10-21**。HAZUSE / K-Naviで一致。
- generation/system: **5号機 / AT / 疑似ボーナス / CZ / ゲーム数管理**。
- 機械割: **97.4 / 98.7 / 100.6 / 104.4 / 107.7 / 110.8%**。
- AT初当たり: **1/546.7 / 537.0 / 504.1 / 498.7 / 467.6 / 414.9**。
- 対決BONUS: **1/497.2 / 485.3 / 482.9 / 463.5 / 455.2 / 379.3**。
- REG: **1/749.4 / 743.8 / 727.3 / 729.3 / 691.3 / 603.5**。
- 擬似ボーナス+AT合算: **1/193.2 / 189.9 / 184.2 / 180.7 / 172.9 / 149.2**。
- baseGamesPer50: **約31G/1000円**。後年単一整理資料のため `ANALYSIS_SINGLE_RETROSPECTIVE`。
- AT「猛虎RUSH」: **1セット50G+α / 純増約2.8枚/G**。
- 対決BONUS: **20G / 50〜88%継続 / 純増約2.8枚/G**。REG BONUSは20G固定。
- モード別天井: 通常A/B **999G**、準備 **1032G**、天国/超天国 **128G**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL_RESET_CONTRACT**。

### resetBehavior v0.7

- 「猛虎花形 / 巨人の星 猛虎花形 / 猛虎花形CC / スパイキー」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン」を組み替え、当時解析・古いDB・後年資料を横断。
- 設定変更時の天井G、モード、内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井進捗・モード・状態: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみの内部挙動: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井 / 固定朝一天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更後モード振り分け / 朝一専用モード: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有ガックン・初期出目・ランプ等の変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。
- 通常時の天国/超天国128Gを、根拠なく「リセット後128G」に転用していない。

## 2013-10-08〜10-20境界監査

- 10/07群CLOSED後の空白期間を再検索。
- 今回の横断では、**2013-10-08〜10-20に新規登録すべき確定日付き未登録パチスロを確認できず**。
- 次の複数系統一致アンカーは **2013-10-21**。
- 10/21は少なくとも以下を確認済み:
  - **猛虎花形**（スパイキー） — 今回771件目として処理済み。
  - **パチスロ ラブ嬢**（オリンピア） — 型式 `パチスロラブ嬢A1` / 検定 `3S0656`、2013-10-21導入。
- 10/21群はまだ **OPEN**。ラブ嬢処理後に同日群を別メーカー/導入カレンダーで再監査する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 新規時系列収集を優先し、今回QAカーソルは動かしていない。

## 次回再開地点

1. **recordCount 771 / chronologicalFrontier 2013-10-21 / 10-21群OPEN** から開始。
2. 最優先: **パチスロ ラブ嬢**（オリンピア）の既存重複確認 → 未登録なら性能コア + resetBehavior v0.7を収集。
3. ラブ嬢処理後、**2013-10-21同日群**をHAZUSE / K-Navi / 業界記事 / メーカー系資料で再監査し、漏れがなければCLOSED。
4. 次の日付へ進む前に、導入日・納品日・検定日を混同しない。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続可能。

## 主要出典 — 取得日 2026-09-06

### 猛虎花形

- HAZUSE: `https://hazuse.com/machine/pachislot/3S0448/` — 5号機 / スパイキー / 型式猛虎花形CC / 検定3S0448 / 2013-10-21導入。
- K-Navi: `https://p-kn.com/slot/1935/` — 導入日 / 対決BONUS・REG・AT初当たり / 合算 / AT 50G+α・純増約2.8枚/G。
- K-Navi 内部モード: `https://p-kn.com/slot/1935/46199/` — 通常A/B999G、準備1032G、天国/超天国128G。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7190` — AT・疑似ボーナス構造 / 設定別確率。
- CrankySeven: `https://crankyseven.com/kyojin-mouko-pc.htm` — 機械割97.4〜110.8%。
- ななぱちWiki: `https://wikiwiki.jp/hanpachi/%E3%81%AA%E3%81%AA%E3%81%B1%E3%81%A1%20%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/%E5%B7%A8%E4%BA%BA%E3%81%AE%E6%98%9F%20%E7%8C%9B%E8%99%8E%E8%8A%B1%E5%BD%A2` — 機械割別照合 / 約31G/1000円 / AT・最大天井整理。
- ドラス実機アプリ紹介: `https://www.value-press.com/pressrelease/119740` — 猛虎RUSH 50G / 開眼CHANCE等の基本構造を補助確認。

### 次候補

- HAZUSE パチスロ ラブ嬢: `https://hazuse.com/machine/pachislot/3S0656/` — 2013-10-21。

## commits

- 771st record add: `b1e3deea96df89b87dc26b4367ece3cedb247d7a` (`db: add Mouko Hanagata with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay through Mouko Hanagata`)
