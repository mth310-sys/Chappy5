# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **573**
- latestMachineAdded: **バリスタゴルフ**（アイウィル / 2011-05-30ホール導入予定）
- latestRecord: `docs/real_machine_db/machines/2011-05-30_barista-golf.md`
- chronologicalFrontier: **2011-05-30**
- frontierLatestExactDateMachine: **バリスタゴルフ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、572前線レコード「雀龍桜花」を再取得して開始。
- `INDEX.md` は旧19件地点のため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 572件地点の次候補としてHANDOFF指定されていた「バリスタゴルフ」をrepo検索し未登録確認。2011-05-30ホール導入予定を当時プレイグラフ転載で確認して573件目へ追加。

## 今回追加 — 573 バリスタゴルフ

- メーカー: **アイウィル**
- 導入キー: **2011-05-30（ホール導入予定）**
- 5号機 / **A+ART / CZ / ストック+ループ+ゲーム数型ART**
- 機械割: **96.1 / 98.1 / 101.9 / 104.0 / 109.3 / 112.0%**
- BIG: **1/436.9 / 1/422.8 / 1/409.6 / 1/397.2 / 1/385.5 / 1/352.3**
- REG: **1/565.0 / 1/541.6 / 1/524.3 / 1/504.1 / 1/478.4 / 1/461.5**
- ボーナス合算: **1/246.4 / 1/237.4 / 1/230.0 / 1/222.2 / 1/213.5 / 1/199.8**
- ART初当たり: **1/449.1 / 1/382.6 / 1/410.4 / 1/343.4 / 1/365.7 / 1/287.6**
- 50枚ベース（1000円あたり）: **32.7 / 32.8 / 32.8 / 32.9 / 32.9 / 33.0G**
- ART「バリスタモード」: **約+1.3枚/G / 基本約30G / ループ率33〜95% / 上乗せ25〜300G**
- 基本獲得: 主値 **BIG約210枚 / REG約56枚**
- 獲得枚数CONFLICT: 5号機クロニクル **BIG約204枚 / REG約48枚**。平均せず保持。

### resetBehavior v0.7 — 573

- パチマガスロマガに本機専用 **「天井」「朝イチ・設定変更」**解析項目の存在を確認。
- P-WORLDで通常時にART期待度の異なる内部モードが存在することも確認。
- ただし今回取得可能な本文・検索スニペットから、通常天井の正確なゲーム数/恩恵、設定変更時CLEAR/RETAIN、据え置き、単純電源OFF→ON、モード/状態の変更時処理、ガックン等の判別を安全に直接確定できず。
- 表記揺れ・メーカー・天井・宵越し・reset系検索語を変え、P-WORLD、パチマガ、当時業界転載、5号機クロニクル、旧ブログ/回顧資料を横断後に該当項目を `UNVERIFIED_AFTER_RESEARCH` とした。
- 設定変更専用短縮天井、高確確定、ART優遇等の公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。

## 主要出典 — 573（取得日 2026-09-04）

- P-WORLD: `https://www.p-world.co.jp/machine/database/6341`
  - BIG/REG/ART初当たり/機械割、BIG約210枚、REG約56枚、ART約+1.3枚/G、内部モード/CZ
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/03/h.php`
  - BIG/REG/ボーナス合算/PAYOUT全設定
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/03/c.php`
  - 1000円あたり32.7〜33.0G
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/03/a.php`
  - ART30G、純増1.3枚/G、ループ率33〜95%、BIG約210枚/REG約56枚
- パチマガスロマガ機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/03/iwill_slot_03.php`
  - 「天井」「朝イチ・設定変更」専用項目の存在
- Pマンズ/プレイグラフ転載: `https://p-mans.blogspot.com/2011/04/`
  - 2011-05-30ホール導入予定、ART約+1.3枚/G
- 5号機クロニクル: `https://5goki.com/iwill`
  - 2011年5月導入、確率照合、獲得枚数204/48枚の競合値

## 今回のGitHub更新

- 573: `docs/real_machine_db/machines/2011-05-30_barista-golf.md`
  - create commit: `b9ae214f8d4a174e1cb5f9b0170416d5ae61e8fb`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 573 / chronologicalFrontier 2011-05-30**。最新main README / mission / INDEX / LATEST_HANDOFF / 572・573レコードを再取得。
2. **2011-05-31〜06-05境界を最終監査**し、5月末の未登録機を閉じる。
3. 漏れがなければ **2011-06-06同日群**へ進む。現時点で具体日を確認済みの強い候補は **「パチスロ エイリヤンビギンズ」（サミー）、「スターマン バイキング」（SANKO）、「キングハイビ-30」（パイオニア）**。いずれも2011-06-06導入情報あり。repo重複を確認して最古未登録から574件目とする。
4. **スカイラブ3は2011-06-27ホール導入開始**をK-Navi/パチビーで確認済み。6/6群より先へ誤ジャンプしない。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、資料系統を横断した後だけ残す。CONFLICTは平均しない。
