# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **531**
- latestMachineAdded: **緑ドン VIVA!情熱南米編**（エレコ / 2010-12-10）
- latestRecord: `docs/real_machine_db/machines/2010-12-10_midoridon-viva-jounetsu-nanbeihen.md`
- chronologicalFrontier: **2010-12-10**
- frontierLatestMachine: **緑ドン VIVA!情熱南米編**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前530「俺の空～蒼き正義魂～」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **530** / chronologicalFrontier **2010-12-06**。
- 2010-12-06同日群と12/07～12/09境界を導入日検索・旧DB・回顧資料で再監査し、12/10より前に割り込む強い未登録ホール導入日を確定できず。
- repo内で「緑ドン VIVA!情熱南米編」を検索し重複なしを確認して531件目として追加。
- 2025年REVIVALは別機種として分離し、2010年旧機へ数値を転用していない。

## 531 — 緑ドン VIVA!情熱南米編

- メーカー: **エレコ**
- 世代/タイプ: **5号機 / A+ART / ゲーム数上乗せART**
- 型式名: **緑ドンE**
- 検定番号: **0S1079**
- 導入: **2010-12-10**（HAZUSE）
- 機械割: **97.5 / 98.8 / 101.1 / 106.6 / 110.4 / 119.5%**
- BIG: **1/399.6 → 1/327.7**
- REG: **1/712.4 → 1/512.0**
- ART初当たり: **1/579.3 → 1/283.8**（設定別全表は後年データ集。設定6は別回顧資料でも一致）
- 50枚ベース: **約33.0G/1000円**（単一整理資料）
- BIG約**208枚** / REG**56枚**
- ART「アマゾンゲーム」: **50G+α / 約+1.5枚/G**
- 天井: **ボーナス間1480G → 天井ART**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- **設定変更で1480G天井までのゲーム数をクリア**。
- **設定変更時は高確移行抽選あり**。
- 朝一、**レア小役非入賞でジャングルステージへ移行した場合は設定変更可能性が高まる**と旧解析資料に記載。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の高確移行率具体値: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の1480G進捗/状態/ART関連引継ぎ: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のみクリアという資料から推論は可能だが直接本文不足のため断定しない。
- 単純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- ガックン/初期出目等の確定変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetBehaviorQA: **VERIFIED_CORE_WITH_CARRYOVER_POWER_CYCLE_NUMERIC_STATE_GAPS**。

## CONFLICT / 注意

- BIG/REG確率は資料間で末尾の丸め差（390.0/390.1、712.3/712.4等）がある。HAZUSEを主値とし、別資料は丸め整合扱い。
- 2025年REVIVALの天井1280G、設定変更800G、高確50%、電源OFF→ON引継ぎ、有利区間情報は別機種なので使用禁止。

## 主要出典 — 531（取得日 2026-09-04）

- HAZUSE: `https://hazuse.com/machine/pachislot/0S1079/`
- HAZUSE基本スペック: `https://hazuse.com/machine/pachislot/0S1079/genre/201/`
- ユニバーサル後年公式プレス: `https://www.atpress.ne.jp/news/23006`
- 旧解析: `https://midoridon.nengu.jp/index.html`
- 後年データ集: `https://ameblo.jp/thundervsp5/entry-12810834856.html`
- 777town系回顧: `https://w.atwiki.jp/samita_skill/pages/223.html`

## 今回のGitHub更新

- 531追加: `docs/real_machine_db/machines/2010-12-10_midoridon-viva-jounetsu-nanbeihen.md`
- machine record commit: `7c9c5236694399dc6d6c4a7513e30360de3957db`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時にmachine tree / commit履歴 / 実ファイル日付から怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 531 / chronologicalFrontier 2010-12-10**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-12-10同日群を最終監査**し、12/11以降の最古未処理へ進む。
3. `スペシャルハナハナII-30` はパイオニア公式で2010年12月発売。当時Pマンズ/プレイグラフ系記事には **ホール導入予定2010-12-06** の記述があるため、次回最優先でrepo重複と日付定義を再監査する。未登録で12/06導入が確定する場合は時系列漏れとして遡及追加し、frontierは12/10を維持。
4. `真・三國無双` は平和公式2010年12月登場表記と別資料の2011-02-21ホール導入が競合するため、日付定義を分離したまま早計に12月本線へ入れない。
5. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
