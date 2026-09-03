# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **536**
- latestMachineAdded: **ハーレムエース2**（ネット / 2011-01-11、時系列漏れ遡及追加）
- latestRecord: `docs/real_machine_db/machines/2011-01-11_harem-ace-2.md`
- chronologicalFrontier: **2011-01-17**
- frontierLatestMachine: **009-1**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線535「009-1」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 535 / chronologicalFrontier 2011-01-17。
- 前回handoffに「2011-01-11導入・repo未登録なら遡及追加候補」と残されていたネット「ハーレムエース2」をGitHub code searchで再確認し、未登録を確定。
- K-Navi、パチビー、当時Pマンズで**2011-01-11ホール/市場導入**を照合。グリーンべるとは**2011-01-10納品開始予定**であり日付定義を分離。
- 時系列漏れ防止を優先して536件目として遡及追加。chronologicalFrontierは前線の2011-01-17「009-1」を維持する。

## 536 — ハーレムエース2

- メーカー: **ネット / NET**
- 世代/タイプ: **5号機 / ノーマルAタイプ / 天井RT / 技術介入**
- 導入主値: **2011-01-11**（K-Navi・パチビー・当時Pマンズ）
- 納品資料: **2011-01-10納品開始予定**（グリーンべると）
- 機械割: **97.9 / 99.4 / 101.0 / 102.8 / 106.5 / 112.7%**
- ボーナス合算: **1/172.9 / 162.6 / 157.9 / 155.7 / 142.5 / 130.0**（別資料は整数丸め）
- BIG系合算: **1/278.9 / 276.5 / 271.9 / 267.5 / 263.2 / 253.0**
- REG: **1/455.1 / 394.8 / 376.6 / 372.4 / 310.6 / 267.5**
- 50枚ベース: **34.3〜38.0G/1000円**（設定範囲、単一解析資料）
- HYPER BIG最大**335枚** / BIG最大**311枚** / CB最大**312枚** / REG約**130枚**
- 天井RT「サクラタイム」: **HYPER BIG/BIG後900G、CB後600G、REG後700G → 次回ボーナスまで、約+0.2枚/G**
- 個別BIG種別確率はSevenPeaceとパチビーで明確な差があるため**CONFLICT**。平均せず双方をレコードに保持。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- K-Naviに本機専用**「設定変更後の挙動」**解析項目が存在することを確認。
- 「ハーレムエース2 / ハーレムエースII / NET」＋設定変更/リセット/朝一/宵越し/据え置き/電源OFF ON/天井/サクラタイム/ガックン等で検索語を変え、K-Navi、パチマガスロマガ、SevenPeace、当時業界記事、古い機種DBを横断。
- 設定変更時の900/600/700G天井進捗CLEAR/RETAIN: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井進捗: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の短縮/延長天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常/天国等の長期ゲーム数モード: **NOT_APPLICABLE_FOR_LONG_TERM_MODE_CONFIRMED**。
- 天井RT中/到達直前の設定変更・電源断状態処理: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一専用優遇/不利の具体公開値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶/俺スロ等による変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- 一般的なノーマル機挙動からは補完していない。

## 主要出典 — 536（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1316/`
- K-Navi機械割: `https://p-kn.com/slot/1316/28766/`
- パチビー: `https://www.pachibee.jp/machines/index/210110008`
- グリーンべると: `https://web-greenbelt.jp/00006662/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/148/a.php`
- SevenPeace: `https://www.mb.ccnw.ne.jp/seven-peace.com/ha-remu2/ha-remu2.html`
- Pマンズ: `https://p-mans.blogspot.com/2010/11/`

## 今回のGitHub更新

- 536追加: `docs/real_machine_db/machines/2011-01-11_harem-ace-2.md`
- machine record commit: `104854d258f681d1a22342f7fb8b75ac1babd209`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 536 / chronologicalFrontier 2011-01-17**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 535「009-1」/ 536「ハーレムエース2」を再取得。
2. **2011-01-18〜1/23の境界を最終監査**し、1/17より後・1/24より前に実ホール導入された未登録パチスロがないかメーカー別/当時業界/K-Navi/HAZUSE節点で確認する。
3. 1/24前に未処理がなければ、具体日確認済みの**2011-01-24群**へ進む。K-Naviで「燃えよ!功夫大戦」「凄忍」「じゃりン子チエ 雷蔵伝説」は1/24導入候補として確認済み。
4. `超重神グラヴィオン`、`幻想水滸伝`、`シスタークエスト2`、`あっぱれ剣士道`等の2011年1月機も具体導入日を再照合し、1/24より早い確定日が出た場合はそちらを優先する。
5. `残機尽きるまで私は戦う` は2011-01-21展示会日を導入日として扱わず、納品/ホール導入日を別途確定してキューへ置く。
6. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
