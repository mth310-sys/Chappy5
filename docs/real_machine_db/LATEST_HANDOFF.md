# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **537**
- latestMachineAdded: **幻想水滸伝**（KPE / 2011-01-17、前線同日漏れ遡及追加）
- latestRecord: `docs/real_machine_db/machines/2011-01-17_genso-suikoden.md`
- chronologicalFrontier: **2011-01-17**
- frontierLatestMachine: **幻想水滸伝 / 009-1（同日）**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線535「009-1」、遡及536「ハーレムエース2」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 536 / chronologicalFrontier 2011-01-17。
- 2011-01-18〜1/23境界と2011年1月候補を監査中、KPE「幻想水滸伝」がrepo未登録であることをGitHub code searchで確認。
- KONAMI公式は2011年1月稼働開始、当時グリーンべるとは2011-01-10納品予定。RCGSコレクション/Gensopediaの具体日2011-01-17が一致するため、前線同日の時系列漏れとして537件目へ遡及追加。
- chronologicalFrontierは2011-01-17を維持。

## 537 — 幻想水滸伝

- メーカー: **KPE / コナミ**
- 型式名: **幻想水滸伝E**（実機流通資料）
- 世代/タイプ: **5号機 / A+ART / セットストック式ART**
- 導入主値: **2011-01-17**（具体日二次資料一致）
- 公式: **2011年1月稼働開始**（KONAMI）
- 納品資料: **2011-01-10納品予定**（グリーンべると）
- 機械割: **96.7 / 98.8 / 100.8 / 104.2 / 107.7 / 111.8%**
- BIG: **1/362.1 / 354.3 / 336.1 / 324.4 / 310.6 / 302.0**
- REG: **1/595.8 / 574.9 / 550.7 / 528.5 / 516.0 / 489.1**
- ART初当たり: **1/632.8 / 573.8 / 571.8 / 472.2 / 435.9 / 379.1**
- BIG約**204枚** / REG約**60枚**
- ART「決戦の刻」: **40G / 約+1.2枚/G**、ノーマル/チャンス/烈/激の4種
- 通常状態: **低確 / 高確 / 超高確**
- 天井: **ボーナス間またはART終了後、純粋な通常1080G**。P-WORLDは天井到達時1/2で激ART/烈ARTと記載。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- 旧天井狙い資料に、通常ゲーム天井狙いは **「宵越し×」** と記録。設定変更を跨ぐ天井G数狙い不可を示す低信頼二次情報として保持。
- 同資料では **「紋章4個狙い」「同一紋章3個/全異色紋章3個狙い」は宵越し○**。紋章蓄積は翌日持越しを狙える記録がある。
- ただし「据え置きのみ保持」か「設定変更でも保持」かは一意に確定できず、厳密条件はUNVERIFIED。
- 設定変更時1080Gカウンタ: **LIKELY_CLEAR / LOW_CONFIDENCE_SECONDARY**。直接の一次/高信頼解析本文未回収のため確定扱いしない。
- 設定変更時の低確/高確/超高確振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- ARTストック/紋章蓄積の設定変更時処理: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶ステージ等の変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- 一般的な5号機挙動からは補完していない。

## 主要出典 — 537（取得日 2026-09-04）

- KONAMI公式機種アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2011/genso_suikoden/`
- グリーンべると: `https://web-greenbelt.jp/00002890/`
- RCGSコレクション: `https://collection.rcgs.jp/page/PACKAGE0005859`
- Gensopedia: `https://gensopedia.org/w/Pachislot_Genso_Suikoden`
- pacnk: `https://pacnk.com/slot/2011/gensousuikoden/top.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6144`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/23/a.php`
- 中一商事実機資料: `https://www.nakaiti.com/html/sKpe068.html`
- 天井ハイエナ生活: `https://macerate.seesaa.net/article/226196713.html`

## 今回のGitHub更新

- 537追加: `docs/real_machine_db/machines/2011-01-17_genso-suikoden.md`
- machine record commit: `3bd9a814961527a2abd5babebaa65fdd4147fe74`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 537 / chronologicalFrontier 2011-01-17**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 535「009-1」/ 536「ハーレムエース2」/ 537「幻想水滸伝」を再取得。
2. **2011-01-18〜1/23の境界最終監査**を継続。1/17より後・1/24より前の未登録実ホール導入機がないか、メーカー別/当時業界/K-Navi/HAZUSE等で確認する。
3. 境界に未処理がなければ**2011-01-24群**へ進む。K-Navi具体日確認済み候補: **「燃えよ!功夫大戦」「凄忍」「じゃりン子チエ 雷蔵伝説」**。repo重複確認後、最古未登録を538件目候補にする。
4. `超重神グラヴィオン`、`シスタークエスト2`、`あっぱれ剣士道`等の2011年1月機も具体導入日を再照合し、1/24より早い確定日が出た場合はそちらを優先する。
5. `残機尽きるまで私は戦う` は2011-01-21展示会日を導入日と扱わず、納品/ホール導入日を別途確定してキューへ置く。
6. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
