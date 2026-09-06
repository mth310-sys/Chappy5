# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **752**
- latestMachineAddedByChronology: **緑ドン～キラメキ！炎のオーロラ伝説～**（エレコ）
- latestRecord: `docs/real_machine_db/machines/2013-08-05_midoridon-kirameki-honoo-no-aurora-densetsu.md`
- chronologicalFrontier: **2013-08-05**
- frontierLatestExactDateMachine: **緑ドン～キラメキ！炎のオーロラ伝説～**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-08-05_GROUP__CONTINUE_SAME_DAY_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-08-05_gakuen-mokushiroku-high-school-of-the-dead.md` を再読。
- INDEXは19件地点の旧集約状態なのでREADME規定どおりLATEST_HANDOFFと実レコードを正として継続。
- 開始時main正本は recordCount **751** / chronologicalFrontier **2013-08-05** / 08-05群OPEN。
- repo検索で緑ドン～キラメキ！炎のオーロラ伝説～の既存レコードなしを確認し、752件目相当として追加。
- 同日群はまだ **ジャックポットドリーム / レインボースリーセブンS1-30 / パチスロBADBOYS候補** が残るためOPENを維持。

## 今回追加 — 緑ドン～キラメキ！炎のオーロラ伝説～

### identity / 性能コア

- manufacturer: **エレコ**。
- releaseDate: **2013-08-05**。必勝本、K-Naviで一致。ユニバーサル公式は2013年8月発売。
- 型式名: **緑ドン3-D**（実機流通資料）。
- system: **5号機 A+ART / ボーナス + CZ「白夜ZONE」 + ドンART/ビリーART**。
- 機械割: **97.6 / 98.4 / 102.8 / 106.3 / 110.4 / 115.4%**。
- ART初当たり: **1/549.1 / 544.2 / 508.8 / 458.7 / 416.0 / 341.6**。
- ボーナス合算: **1/249.2 / 245.5 / 238.3 / 230.0 / 220.7 / 208.1**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。2025年スマスロ版の約33.2Gは別機種のため除外。
- ART「オーロラゲーム」: **30/50/100G、純増約1.7枚/G**。
- BIG約**206枚**、REG約**54枚**、ビリーボーナス約**14枚**。
- 通常天井: **ビリーボーナス以外のボーナス間1400G**。
- 天井恩恵: **ビリーART + ドンART + 大航海またはスーパー大航海（1:1）**。

### resetBehavior v0.7

- 設定変更: **天井ゲーム数RESET / 状態再抽選 / 港町ステージ開始**。
- 電源OFF→ONのみ: **天井ゲーム数引継ぎ / 状態引継ぎ / CZ・ART・ボーナス中以外は港町ステージへ**。
- よって港町スタートだけでは設定変更判別不可。
- 設定変更時状態振り分け:
  - 設定1～3: 通常80.1% / 高確18.3% / 白夜ショート1.6%
  - 設定4・6: 通常63.5% / 高確33.3% / 白夜ショート3.1%
  - 設定5: 通常75.4% / 高確18.3% / 白夜ショート6.3%
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 純据え置き単独の別契約: **UNVERIFIED_AFTER_RESEARCH**（電源OFF→ON時の引継ぎ契約は直接確認済み）。
- 本機固有ガックン/初期出目判別: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## 境界監査 / 直前修復情報

- 2013-07-23～08-04監査で **美らん娘-30** の漏れを検出し、前回750件目相当として遡及追加済み。導入日はHAZUSE 07-29 / 必勝本 08-05 / 8/4納品予定資料のCONFLICTを保持。
- 2013-08-05は **学園黙示録 HIGH SCHOOL OF THE DEAD**、今回の **緑ドン～キラメキ！炎のオーロラ伝説～** まで登録済み。
- 08-05群は未完了。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は時系列本線を優先し、QAカーソルは進めていない。

## 次回再開地点

1. **recordCount 752 / chronologicalFrontier 2013-08-05 / 08-05群OPEN** から開始。
2. repo既登録を確認し、未登録なら **ジャックポットドリーム（岡崎産業）** を次候補として性能コア + resetBehavior v0.7収集。
3. 続いて **レインボースリーセブンS1-30（ベルコ）** を同日キューとして処理。
4. **パチスロBADBOYS（岡崎産業）** は8/4納品開始予定の業界記事があるため、08-05同日候補として導入日を別系統で再確認し、未登録なら追加。
5. 全メーカー横断監査後に08-05群をCLOSED判定する。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。

## 主要出典 — 取得日 2026-09-06

### 緑ドン～キラメキ！炎のオーロラ伝説～

- ユニバーサル公式: `https://www.universal-777.com/product/slot/midoridon_aurora/`
- ユニバーサル/AtPress発表: `https://www.atpress.ne.jp/news/35711`
- 必勝本 基本スペック: `https://p.hisshobon.jp/machine/2246/1/41041`
- 必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2246/1/41654`
- 必勝本 ART概要: `https://p.hisshobon.jp/machine/2246/1/41103`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7108`
- K-Navi: `https://p-kn.com/slot/1875/`
- 中一商事 型式情報: `https://www.nakaiti.com/html/sEleco088.html`

### 次候補 / 同日監査

- ジャックポットドリーム K-Navi: `https://p-kn.com/slot/1919/`
- レインボースリーセブンS1-30 K-Navi: `https://p-kn.com/slot/1921/`
- BADBOYS / 美らん娘-30 発表記事: `https://news.p-world.co.jp/articles/5890/greenbelt`
