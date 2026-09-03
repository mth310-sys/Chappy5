# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **535**
- latestMachineAdded: **009-1**（オーイズミ / 2011-01-17ホール導入開始）
- latestRecord: `docs/real_machine_db/machines/2011-01-17_009-1.md`
- chronologicalFrontier: **2011-01-17**
- frontierLatestMachine: **009-1**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線534「パチスロ キャプテンハーロックG」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 534 / chronologicalFrontier 2011-01-14。
- 2011-01-15〜1/23境界を監査し、オーイズミ「009-1」にK-Naviで**2011-01-17ホール導入開始**の具体日を確認。repo未登録だったため535件目として追加。
- グリーンべるとの2010-10-26当時記事では**2011-01-16納品開始予定**。納品とホール導入を区別して保持。
- キャプテンハーロックGの1/23納品・1/24ホール導入資料は534のCONFLICTとして既登録なので重複追加しない。
- `残機尽きるまで私は戦う` の2011-01-21は展示会記事であり、ホール導入日としては採用しない。

## 535 — 009-1

- メーカー: **オーイズミ**
- 世代/タイプ: **5号機 / A+ART / 完走型・継続率管理ART / CZ経由**
- 導入主値: **2011-01-17**（K-Navi「ホール導入開始」）
- 納品資料: **2011-01-16納品開始予定**（グリーンべると）
- 機械割: **96.6 / 98.7 / 100.9 / 104.1 / 108.3 / 112.5%**
- BIG: **1/346 / 337 / 330 / 326 / 319 / 295**
- REG: **1/471 / 448 / 425 / 407 / 387 / 348**
- ボーナス合算: **1/199 / 192 / 186 / 181 / 175 / 159**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART「ドライブミッション」: **30G / 約+1.4枚/G / 50〜95%継続（5%刻み、フリーズ時97%）**
- S-BIG/BIG約**252枚** / REG約**64枚**
- 通常天井: **CZ終了後1200G → 次回ボーナスまでART、当該ボーナス後90%継続以上のART**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- K-Naviに本機専用**「設定変更後の挙動」**および**「状態移行率(設定変更後)」**解析項目が存在することを確認。
- ただし今回取得できた本文では設定変更時の1200G天井カウンタCLEAR/RETAIN、低確/高確の具体振り分けを安全に回収できず、一般的5号機挙動からの補完は行っていない。
- 設定変更時天井進捗: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の1200G進捗・低高確・CZ/ART権利/継続率: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の低確/高確振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の短縮天井・朝一専用優遇数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶等の変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetBehaviorQA: **RESEARCHED_WITH_DEDICATED_RESET_SOURCE_INDEX_PRESENT_BUT_CONCRETE_VALUES_UNVERIFIED**。

## 主要出典 — 535（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1309/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6112`
- グリーンべると: `https://web-greenbelt.jp/00006645/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/24/oizumi_slot_24.php`
- パチマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/24/a.php`
- 5号機クロニクル: `https://5goki.com/oizumi`

## 今回のGitHub更新

- 535追加: `docs/real_machine_db/machines/2011-01-17_009-1.md`
- machine record commit: `514deb2b37bdca6098db9cba89a4d834b17db298`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 535 / chronologicalFrontier 2011-01-17**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 535実レコードを再取得。
2. **2011-01-18〜1/23の境界を最終監査**し、1/17より後・1/24より前に実ホール導入された未登録パチスロがないかメーカー別/当時業界/K-Navi/HAZUSE節点で確認する。
3. 1/24前に未処理がなければ、現時点で具体日を確認済みの**2011-01-24群**へ進む。K-Naviで「燃えよ!功夫大戦」「凄忍」「じゃりン子チエ 雷蔵伝説」は1/24導入を確認済み。
4. `超重神グラヴィオン`、`幻想水滸伝`、`シスタークエスト2`、`あっぱれ剣士道`等の2011年1月機も具体導入日を再照合し、1/24より早い確定日が出た場合はそちらを優先する。
5. **ハーレムエース2は2011-01-11導入で前線より前のため、repo登録有無を別途再確認し、未登録なら時系列漏れとして遡及追加候補。** 今回は前線継続を優先し未処理確定までは追加していない。
6. `残機尽きるまで私は戦う` は2011-01-21展示会日を導入日として扱わず、納品/ホール導入日を別途確定してキューへ置く。
7. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
