# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **538**
- latestMachineAdded: **燃えよ!功夫大戦**（山佐 / 2011-01-24）
- latestRecord: `docs/real_machine_db/machines/2011-01-24_moeyo-kung-fu-taisen.md`
- chronologicalFrontier: **2011-01-24**
- frontierLatestMachine: **燃えよ!功夫大戦**（同日群継続中）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、535「009-1」、536「ハーレムエース2」、537「幻想水滸伝」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 537 / chronologicalFrontier 2011-01-17。
- 2011-01-18〜1/23を導入日語・メーカー名・業界記事/K-Navi節点で再監査したが、この期間に新たな未登録実ホール導入機を具体日付きで確定できず。
- 2011-01-24群の「燃えよ!功夫大戦」「凄忍」「じゃりン子チエ 雷蔵伝説」をrepo code searchし、いずれも未登録を確認。
- handoff記載順の山佐「燃えよ!功夫大戦」を538件目として追加し、chronologicalFrontierを2011-01-24へ前進。

## 538 — 燃えよ!功夫大戦

- メーカー: **山佐 / YAMASA**
- 世代/タイプ: **5号機 / A+ART / CZ / セットストック+継続率ART**
- 導入主値: **2011-01-24**（K-Naviホール導入開始）
- 業界資料: **2011年1月下旬納品予定**（グリーンべると 2010-12-20）
- 機械割: **CONFLICT**
  - P-WORLD: **96.9 / 98.5 / 100.9 / 104.2 / 106.8 / 115.0%**
  - pacnk: **98.1 / 99.5 / 101.7 / 104.9 / 107.5 / 115.0%**
- BIG: **1/409.6 / 404.5 / 399.6 / 394.7 / 390.0 / 381.0**
- REG: **1/682.6 / 668.7 / 655.3 / 630.1 / 618.2 / 564.9**
- ボーナス合算(P-WORLD): **1/256.0 / 252.0 / 248.2 / 242.7 / 239.1 / 227.5**
- P-WORLD ART(連チャン込み): **1/116 / 110 / 101 / 94 / 83 / 67**。初当たりではないため `initialHitBySetting` のART初当たりに置換しない。
- BIG約**205枚** / REG**63枚**
- ART「功夫RUSH」: **40G / 約+1.5枚/G / 継続率＋セットストック**
- CZ: **試練の刻 / 武天の刻**
- 天井（当時単一解析）: **ボーナス後999G / ART後959Gで天井状態 → 試練の刻経由ART**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART設定別初当たり: **UNVERIFIED_AFTER_RESEARCH**（P-WORLD値は連チャン込み）
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- K-Naviに本機専用 **「設定変更後の挙動」** 解析項目が存在。
- 2011-01-30当時の天井狙い資料は **「設定変更時：ゲーム数リセット」** と明記。
- gameCounterReset: **CLEAR_ON_SETTING_CHANGE / ANALYSIS_SINGLE_CONTEMPORARY**。
- 通常天井: **ボーナス後999G / ART後959G**（同当時資料）。ARTを挟むとカウントがリセットされる旨も記録。
- carryOverBehavior（据え置き）: **UNVERIFIED_AFTER_RESEARCH**。天井進捗・内部状態・ARTストックの厳密保持条件は直接確定できず。
- powerCycleBehavior（単純電源OFF→ON）: **UNVERIFIED_AFTER_RESEARCH**。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に内部状態/高確が存在することは確認したが、設定変更時の振り分け数値は未回収。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一専用優遇の公開数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: **CEILING_PROGRESS_LOSS_ON_SETTING_CHANGE**。
- ガックン/初期出目/液晶ステージ等の変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- 一般的な5号機挙動からは補完していない。

## CONFLICT / QA注意 — 538

- 機械割はP-WORLD系列とpacnk系列で設定1〜5が継続的に異なるため平均せず `CONFLICT`。
- 5号機クロニクルには「2011年9月導入」および後継機混在を疑うゲーム性記述がある。K-Navi 2011-01-24、グリーンべると1月下旬予定、pacnk 2011年1月と矛盾するため、導入時系列の主根拠から除外して `SOURCE_ERROR_OR_PAGE_CONTAMINATION` として扱う。

## 主要出典 — 538（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1346/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6201`
- グリーンべると: `https://web-greenbelt.jp/00006683/`
- pacnk: `https://pacnk.com/slot/tools/sh_moeyokanfu.html`
- パチスロレシピ: `https://recipe.sloters.net/2011/01/blog-post_30.html`
- 5号機クロニクル（品質注意・補助照合のみ）: `https://5goki.com/yamasa`

## 今回のGitHub更新

- 538追加: `docs/real_machine_db/machines/2011-01-24_moeyo-kung-fu-taisen.md`
- machine record commit: `f5c7d4bbde7dbdbda01bac60dd191aad2873afaa`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 538 / chronologicalFrontier 2011-01-24**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 537「幻想水滸伝」/ 538「燃えよ!功夫大戦」を再取得。
2. **2011-01-24同日群を継続**。repo未登録確認済みの **「凄忍」**、続いて **「じゃりン子チエ 雷蔵伝説」** を具体導入日・メーカー/型式・性能コア・resetBehavior v0.7で処理する。より早い同日/境界未処理が出た場合は漏れ防止を優先する。
3. `超重神グラヴィオン`、`シスタークエスト2`、`あっぱれ剣士道`、`残機尽きるまで私は戦う` 等の2011年1月機も具体的な実ホール導入/納品日を再照合し、1/24以前または同日未処理が判明した場合は時系列遡及/同日補完する。
4. `残機尽きるまで私は戦う` の2011-01-21は展示会日なので導入日として採用しない。実納品/ホール導入日を別途確定してキューへ置く。
5. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
