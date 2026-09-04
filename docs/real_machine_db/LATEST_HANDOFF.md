# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **585**
- latestMachineAdded: **パチスロエイリヤンビギンズ**（サミー / 2011-06-06導入 / BACKFILL）
- latestRecord: `docs/real_machine_db/machines/2011-06-06_alien-begins.md`
- chronologicalFrontier: **2011-06-27**
- frontierLatestExactDateMachine: **大逆転**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、584件目「大逆転」を再取得して開始。
- `INDEX.md` は旧情報（19件/2006年時点）のためREADME規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- mainは開始時 **recordCount 584 / chronologicalFrontier 2011-06-27**。
- 直前HANDOFFの6月漏れ監査指示を実行し、repo検索で **エイリヤンビギンズ / 蝶々乱舞 / 鬼浜外伝 / リオスパ** が未登録候補であることを確認。
- 最古の具体日が確定した **パチスロエイリヤンビギンズ（2011-06-06）** を585件目としてBACKFILL。
- 遡及追加のため chronologicalFrontier は **2011-06-27** のまま維持。

## 今回追加 — 585 パチスロエイリヤンビギンズ

- メーカー: **サミー**。
- 導入日: **2011-06-06**。K-Navi・パチビーで一致。
- 5号機 / **ノーマルAタイプ + 天井RT**。
- BIG: **1/249.2 / 1/248.2 / 1/244.5 / 1/239.2 / 1/226.0 / 1/210.1**。
- MID: **1/374.5 / 1/343.1 / 1/324.4 / 1/281.3 / 1/265.3 / 1/237.5**。
- 合算: **1/149.6 / 1/144.0 / 1/139.4 / 1/129.3 / 1/122.0 / 1/111.5**。
- 機械割: **97.0 / 98.7 / 100.7 / 104.3 / 108.2 / 113.2%**。旧解析直接値、K-Navi専用機械割ページ存在確認。今回本文キャッシュ取得不可のため `ANALYSIS_SINGLE`。
- BIG最大 **311枚**、MID約 **91枚**。
- 天井: **BIG後777G / MID(REG)後555G**で次回ボーナスまで継続するRT。
- 天井RT純増: **約+0.3枚/G**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7 — 585

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。K-Naviに本機専用「設定変更後の挙動」ページ `https://p-kn.com/slot/1428/31677/` が存在することまでは確認したが、本文取得不能。内容を推測しない。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の777G/555G進捗・RT状態保持を本機固有資料で確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井進捗/RT状態を確定できず。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常天井カウンタは存在するが設定変更時CLEAR/RETAINを直接確定できず。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常天井はBIG後777G / MID後555G。変更専用短縮値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `modeAfterReset`: **NOT_APPLICABLE_NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED; RT_STATE_UNVERIFIED**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **UNVERIFIED_AFTER_RESEARCH**。天井進捗消失自体を確定できないため断定しない。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ランプ等を確定できず。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 主要出典 — 585（取得日 2026-09-04）

- K-Navi「パチスロエイリヤンビギンズ」
  - `https://p-kn.com/slot/1428/`
  - 2011-06-06導入、BIG/MID/合算、ノーマルタイプ、天井・技術介入、本機専用設定変更ページの存在。
- K-Navi「設定変更後の挙動」現存リンク
  - `https://p-kn.com/slot/1428/31677/`
  - 専用解析ページURL確認。今回本文取得不能のため具体挙動には使用せず。
- P-WORLD「パチスロエイリヤンビギンズ」
  - `https://www.p-world.co.jp/machine/database/6363`
  - 5号機ノーマル、BIG最大311枚、MID約91枚、BIG後777G / MID後555G天井RT、約+0.3枚/G。
- パチビー
  - `https://www.pachibee.jp/machines/about/211040007`
  - `https://www.pachibee.jp/machines/index/211040007`
  - 導入日2011-06-06、ノーマルタイプ、天井RT条件、獲得枚数。
- 旧解析
  - `https://ab01.seesaa.net/article/275489928.html`
  - BIG/MID/合算、機械割97.0〜113.2%、天井RT条件・約+0.3枚/G。

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさず、怪胴王直後の実machine pathをtree順に確認し、最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 585 / chronologicalFrontier 2011-06-27**。最新main README / mission / INDEX / LATEST_HANDOFF / 584・585レコードを再取得。
2. **2011年6月の漏れBACKFILLを継続**。現main検索で未登録候補だった **蝶々乱舞 → 鬼浜外伝 → リオスパ** を具体導入日順に再照合し、最古の確定未登録機から追加する。
3. 現時点の再探索メモ: **蝶々乱舞は6/10説と6/19納品資料、鬼浜外伝は6/17、リオスパは6/20**の具体日候補あり。日付定義・メーカー/型式・実導入を複数系統照合し、競合はCONFLICT。既登録前提で飛ばさない。
4. **パチスロ 笑ゥせぇるすまん（三洋物産）**は2011年6月導入までは確認済みだが具体日未確定。検索語・資料系統を変えて継続し、6/27以前/同日が確定した場合はBACKFILL。
5. 6月漏れと6/27同日群を閉じた後に **6/28以降**へ前進。PARTIAL/UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで十分再探索した後だけ残す。
