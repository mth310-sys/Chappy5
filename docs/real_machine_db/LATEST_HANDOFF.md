# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- 正本は `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` の v0.7。
- 新規機種では性能コア + `resetBehavior` を同時収集する。
- 前回LATEST_HANDOFF基準99件。
- 2007年3月最終漏れ監査でサミーの `ゴジラパチスロウォーズ` と `ミスターマジックネオ` が未登録であることを確認。
- 今回 `ゴジラパチスロウォーズ`（サミー、2007-03）を新規登録し、**LATEST_HANDOFF基準100件**。
- resetBehavior遡及QAは `デビルマン3`（2005-10）を補完。既存性能コア判定は崩さず、`resetBehaviorQA: PARTIAL` を別管理した。

## 今回追加

### `machines/2007-03_godzilla-pachislot-wars.md`

- ゴジラパチスロウォーズ / サミー。2007年3月の5号機ボーナス+CZ経由RT機として登録。
- 2007-03-06のサミー内覧会、3月25日以降納品分を対象とする5号機導入支援施策、HAZUSE当時系統解析、pacnk後年整理を横断。
- 設定別機械割 97 / 99 / 101 / 103 / 105 / 107%。HAZUSEとpacnkで一致。
- BIG合算 1/532 → 1/364、REG全設定1/819、ボーナス合成1/322 → 1/252。pacnk精密値1/322.84 → 1/252.06と丸め差の範囲で照合。
- 全ボーナス後CZ「索敵MODE」へ。特殊リプレイでRT「迎撃MODE」へ移行し、100Gで約90枚増加見込み（約+0.9枚/G相当）。100G完走後は索敵MODEへ再突入。当時解析のRT期待度は約33%。
- 50枚ベースと2007年本機のBIG/REG実獲得枚数は検索語・資料系統を変えて再探索したが高信頼精密値を確定できずUNVERIFIED。
- 2008年「ぱちスロSTゴジラパチスロウォーズ」はスペック違いの別機種。2008年版のBIG約311枚/REG約24枚を2007年本機へ混入させないことを明示。
- resetBehaviorは設定変更/据え置き/電源OFF→ON/朝一/天井/モード/状態/ガックン/変更判別を再探索。本機固有の確定挙動は不足のため該当箇所のみUNVERIFIED。
- coreStatus: PARTIAL
- resetBehaviorQA: PARTIAL

## 今回の遡及QA

### `machines/2005-10_devilman3.md`

- v0.7 `resetBehavior` を追加。
- メーカー公式、当時業界記事、旧攻略DB、後年資料を再探索。
- BIG後100G RT「デビルゲーム」など性能仕様は再確認したが、初代2005年版固有の設定変更・据え置き・単純電断時のRT状態処理、ガックン等の変更判別、朝一専用数値は高信頼資料で確定できず。
- 2010年/2015年版デビルマンのリセット情報は別機種として流用しない。
- 既存の性能コア状態は変更せず、resetBehaviorQAのみPARTIALで分離管理。

## 2007年3月 進行状況

既登録/処理済み（LATEST_HANDOFF近辺）:
- パチスロ暴れん坊将軍（2007-03-04）
- ガオガオフェスティバルS（2007-03-04）
- リングにかけろ1（2007-03-05）
- トレジャーパイレーツ（2007-03-11）
- 革命戦士長州力（2007-03-19）
- バトルシーザーXXX（2007-03）
- お江戸大捜査線（2007-03）
- ゴジラパチスロウォーズ（2007-03） ← 今回追加

未処理確認済み:
- **ミスターマジックネオ（サミー、2007-03）**
  - 2007-03-02発売決定記事、2007-03-06内覧会を確認。
  - pacnkで設定別BIG/MID・PAYOUTを確認済み。設定別機械割は98.37 / 100.16 / 102.78 / 105.25 / 108.22 / 111.00%。
  - BIGは設定1 1/344.93、設定6 1/293.88。MIDは設定1 1/555.39、設定6 1/397.19。設定ごとに非単調な箇所があるため全設定値をそのまま保存すること。
  - 次回、基本獲得枚数・50枚ベース・resetBehaviorを別資料系統まで詰めてから登録する。

## 次回再開地点

**最優先で `ミスターマジックネオ` を処理する。性能コア（設定別BIG/MID、機械割、基本獲得枚数、50枚ベース）とv0.7 resetBehaviorを検索語・資料系統を変えて再探索し登録する。その後、2007年3月のメーカー別最終監査をもう一度行い、漏れがなければ2007年4月の最初の未処理5号機へ進む。**

### 次回優先検索

- ミスターマジックネオ / Mr.MAGIC NEO / Sammy / 型式名 / 2007年3月
- 設定別 / 機械割 / 出玉率 / BIG / MID / REG / 合算 / 50枚 / 1000円 / ベース / コイン持ち / 獲得枚数
- resetBehavior: 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 変更判別
- 2007年3月 パチスロ 5号機 新機種 導入 サミー 銀座 ロデオ エレコ オリンピア 平和 SANKYO タイヨーエレック パイオニア 山佐 JPS IGT ヤーマ
- 2007年4月 パチスロ 5号機 新機種 導入

## 今回の主要資料

### ゴジラパチスロウォーズ
- グリーンべると — https://web-greenbelt.jp/00004081/
- P-WORLD業界ニュース / グリーンべると転載 — https://news.p-world.co.jp/articles/2086/greenbelt
- HAZUSE — https://hazuse.com/i/data/godzilla/top.htm
- pacnk — https://pacnk.com/slot/tools/sh_gojirawozu.html
- 2008年ST版識別資料 — https://web-greenbelt.jp/00003914/

### ミスターマジックネオ（次回候補確認）
- K-Navi業界ニュース — https://p-kn.com/topics/news/164/
- P-WORLD業界ニュース / グリーンべると転載 — https://news.p-world.co.jp/articles/2086/greenbelt
- pacnk — https://pacnk.com/slot/tools/sh_misutamajikeo.html

### デビルマン3 resetBehavior QA
- ユニバーサル公式 — https://www.universal-777.com/product/slot/devilman/
- 旧パチマガスロマガDB — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/56/a.php
