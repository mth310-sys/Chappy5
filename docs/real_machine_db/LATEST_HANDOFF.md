# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **575**
- latestMachineAdded: **パチスロ エイリヤンビギンズ**（サミー / 2011-06-06ホール導入）
- latestRecord: `docs/real_machine_db/machines/2011-06-06_pachislot-alien-begins.md`
- chronologicalFrontier: **2011-06-06**
- frontierLatestExactDateMachine: **パチスロ エイリヤンビギンズ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、574前線レコード「キングハイビ-30」を再取得して開始。
- `INDEX.md` は19件地点の旧情報のため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 574件地点の2011-06-05同日群を再監査後、06-06群へ前進。repo検索で「パチスロ エイリヤンビギンズ」「スターマン バイキング」が未登録であることを確認し、先にエイリヤンビギンズを575件目として追加。

## 今回追加 — 575 パチスロ エイリヤンビギンズ

- メーカー: **サミー**
- 型式名: **エイリヤンビギンズA**
- 検定番号: **1S0002**
- 時系列キー: **2011-06-06（ホール導入）**
- 5号機 / **ノーマルAタイプ + 天井RT / 技術介入**
- 機械割: **97.0 / 98.7 / 100.7 / 104.3 / 108.2 / 113.2%**
- BIG: **1/249.2 / 1/248.2 / 1/244.5 / 1/239.2 / 1/226.0 / 1/210.1**
- MID: **1/374.5 / 1/343.1 / 1/324.4 / 1/281.3 / 1/265.3 / 1/237.5**
- 合算: **1/149.6 / 1/144.0 / 1/139.4 / 1/129.3 / 1/122.0 / 1/111.5**
- 獲得枚数: **BIG最大311枚 / MID約91枚**
- 天井: **BIG後777G / MID後555G → 次回ボーナスまでRT**
- 天井RT純増: **約+0.3枚/G**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**

### chronology / numerical notes

- K-Navi・パチビー: **2011-06-06**ホール導入/導入日。
- P-WORLD末尾: **2011年05月**の月粒度。具体日を持つ複数当時DBの06-06を時系列キーに採用し、日付差は保持。
- 設定6 BIGは **1/210.1** と **1/210.0**、MIDは **1/237.5** と **1/237.4** の丸め差あり。平均せず記録。

### resetBehavior v0.7 — 575

- 通常天井 **BIG後777G / MID後555G** と天井RT純増約 **+0.3枚/G** は複数資料で確定。
- K-Navi本機ページに専用項目 **「設定変更後の挙動」**、パチマガスロマガ保存ページに **「朝イチ・設定変更」** が存在することまで直接確認。
- ただし現存取得可能本文から、設定変更時の777/555G天井カウンタCLEAR/RETAINを回収できず、`gameCounterReset` は **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井進捗、単純電源OFF→ON、天井RT中の電源/変更処理、ガックン/初期出目/LED等の変更判別も、表記揺れ・型式・メーカー・宵越し等を組み替えて再探索後も直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、高確スタート、朝一特定G数優遇等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 長期モードは非搭載、AT/ART/CZ非搭載。有利区間は **NOT_APPLICABLE**。
- 2017年「A-SLOTエイリヤンエボリューション」のreset/base値は別機種のため流用していない。

## 主要出典 — 575（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1428/`
  - 2011-06-06、BIG/MID/合算、専用「設定変更後の挙動」項目の存在
- P-WORLD: `https://www.p-world.co.jp/machine/database/6363`
  - 型式名/検定番号、BIG最大311枚/MID約91枚、777G/555G天井RT、約+0.3枚/G
- パチビー: `https://www.pachibee.jp/machines/about/211040007`
  - 2011-06-06導入、ノーマルタイプ、天井RT
- パチビー基本スペック: `https://www.pachibee.jp/machines/index/211040007`
  - 獲得枚数、天井、合算値
- パチマガスロマガ保存ページ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/129/sammy_slot_129.php`
  - 「天井」「朝イチ・設定変更」解析項目の存在
- pacnk: `https://pacnk.com/slot/tools/sh_alien.html`
  - 機械割97.0〜113.2%、BIG/MID全設定照合
- 旧攻略資料: `https://ab01.seesaa.net/article/275489928.html`
  - 機械割、BIG/MID、777/555G天井、RT純増0.3枚/G照合

## 今回のGitHub更新

- 575: `docs/real_machine_db/machines/2011-06-06_pachislot-alien-begins.md`
  - create commit: `7bd991aeba06e1e84fbe8ed4801393f75956842e`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさない。怪胴王直後の最初の実在resetBehavior欠損machine pathを直接確定してから再開する。

## 次回再開地点

1. **recordCount 575 / chronologicalFrontier 2011-06-06**。最新main README / mission / INDEX / LATEST_HANDOFF / 574・575レコードを再取得。
2. **2011-06-06同日群の残存未登録を継続監査**。最優先候補は **「スターマン バイキング」（SANKO）**。repo重複を再確認し、未登録なら576件目として調査・保存。
3. 06-06群を閉じる前に、同日の他機種がないか当時新台DB/業界記事を再監査する。
4. **スカイラブ3は2011-06-27ホール導入開始**。06-06以降の途中機種を飛ばさない。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、資料系統を横断した後だけ残す。CONFLICTは平均しない。
