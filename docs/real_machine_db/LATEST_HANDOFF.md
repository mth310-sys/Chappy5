# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **576**
- latestMachineAdded: **スターマン バイキング**（SANKO / 2011-06-06ホール導入）
- latestRecord: `docs/real_machine_db/machines/2011-06-06_starman-viking.md`
- chronologicalFrontier: **2011-06-06**
- frontierLatestExactDateMachine: **スターマン バイキング**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、575前線レコード「パチスロ エイリヤンビギンズ」を再取得して開始。
- `INDEX.md` は19件地点の旧情報のため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- handoff指定の2011-06-06同日群を継続し、repo検索で「スターマン バイキング」が未登録であることを再確認して576件目として追加。

## 今回追加 — 576 スターマン バイキング

- メーカー: **SANKO**
- 時系列キー: **2011-06-06（ホール導入）**
- 5号機 / **ノーマルAタイプ + 天井RT / 技術介入**
- 市場掲載PAYOUT: **96.96 / 98.84 / 100.81 / 102.10 / 103.77 / 108.31%**
- パチマガスロマガPAYOUT: **98 / 100 / 102 / 103 / 105 / 109%** → 定義/丸め差の可能性があるため `CONFLICT` 保持
- BIG: **1/630.2 / 1/585.1 / 1/546.1 / 1/528.5 / 1/512.0 / 1/468.1**
- MID: **1/1260.3 / 1/1170.3 / 1/1092.3 / 1/1057.0 / 1/1024.0 / 1/936.2**
- REG: MIDと同値
- 合算: **1/315.1 / 1/292.6 / 1/273.1 / 1/264.3 / 1/256.0 / 1/234.1**
- 獲得枚数: **BIG最大402枚 / MID最大246枚 / REG最大116枚**
- 天井: **ボーナス終了後666G → 次回ボーナスまでRT**
- 天井RT純増: **約+0.3枚/G**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- 型式名/検定番号: **UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — 576

- 通常天井 **ボーナス終了後666G** と天井RT純増 **約+0.3枚/G** はP-WORLD・パチマガスロマガ・当時業界記事で照合。
- 設定変更時の666G天井カウンタCLEAR/RETAIN、据え置き時の天井進捗、単純電源OFF→ON、天井RT中の変更/電断処理、ガックン/初期出目/ランプ等の変更判別は、表記揺れ・SANKO・スターマンアイズ・宵越し等へ検索語を広げ、当時解析/旧DB/回顧資料を横断しても本機固有の直接本文を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一高確、特定G数優遇、変更時専用当選率などは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 長期モード、AT/ART/CZは非搭載。有利区間は **NOT_APPLICABLE**。

## 主要出典 — 576（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1411/`
  - 2011-06-06ホール導入開始、SANKO、A-400、ボーナス規定払い出し、天井RT概要
- P-WORLD: `https://www.p-world.co.jp/machine/database/6313`
  - BIG/MID/REG全設定、PAYOUT96.96〜108.31%、最大402/246/116枚、666G天井RT、約+0.3枚/G
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanko_slot/02/a.php`
  - ノーマル+天井RT、666G、約+0.3枚/G、最大獲得枚数
- パチマガスロマガ確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanko_slot/02/h.php`
  - BIG/MID/REG/合算、PAYOUT98〜109%
- pacnk: `https://pacnk.com/slot/tools/sh_starmanbyking.html`
  - 合算、PAYOUT96.96〜108.31%、完全攻略PAYOUT98.03〜109.17%
- Pマンズ / プレイグラフ転載（2011-04-19）: `https://p-mans.blogspot.com/2011/04/`
  - BB約400枚、666G天井RT、約+0.3枚/G、6月上旬導入予定

## 今回のGitHub更新

- 576: `docs/real_machine_db/machines/2011-06-06_starman-viking.md`
  - create commit: `5a7efc39f9cc71b7b0809896ba4f539774074c91`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさない。怪胴王直後の最初の実在resetBehavior欠損machine pathを直接確定してから再開する。

## 次回再開地点

1. **recordCount 576 / chronologicalFrontier 2011-06-06**。最新main README / mission / INDEX / LATEST_HANDOFF / 575・576レコードを再取得。
2. **2011-06-06同日群の残存監査を継続**。SANKO **「レッツドラゴーン」**は2011年6月リリース、当時資料で「スターマン バイキング」とともに6月上旬導入予定まで確認済み。具体導入日を最終照合し、06-06またはそれ以前なら優先して577件目候補とする。
3. 06-06群を閉じた後も、6月中旬〜下旬を時系列で監査する。既知アンカーは **プロゴルファー猿 2011-06-20（必勝本）/ 2011-06-27（K-Navi）CONFLICT候補**、**ハネスロ林家一家 2011-06-26納品開始予定**、**スカイラブ3 2011-06-27ホール導入**。途中機種を飛ばさない。
4. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、資料系統を横断した後だけ残す。CONFLICTは平均しない。
