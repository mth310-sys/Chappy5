# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **753**
- latestMachineAddedByChronology: **ジャックポットドリーム**（岡崎産業）
- latestRecord: `docs/real_machine_db/machines/2013-08-05_jackpot-dream.md`
- chronologicalFrontier: **2013-08-05**
- frontierLatestExactDateMachine: **ジャックポットドリーム**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-08-05_GROUP__CONTINUE_SAME_DAY_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-08-05_midoridon-kirameki-honoo-no-aurora-densetsu.md` を再読。
- INDEXは19件地点の旧集約状態なのでREADME規定どおりLATEST_HANDOFFと実レコードを正として継続。
- 開始時main正本は recordCount **752** / chronologicalFrontier **2013-08-05** / 08-05群OPEN。
- repo既存状態と直前コミットを照合し、未処理先頭の **ジャックポットドリーム（岡崎産業）** を753件目相当として追加。
- 同日群は少なくとも **レインボースリーセブンS1-30 / パチスロBADBOYS候補** が残るためOPENを維持。

## 今回追加 — ジャックポットドリーム

### identity / 性能コア

- manufacturer: **岡崎産業**。
- releaseDate: **2013-08-05**。K-Naviが同日を明記。パチマガスロマガは2013年8月。
- 型式名: **ジャックポットドリームD1**（当時筐体情報資料）。
- system: **5号機 ART / 完全告知 / 7セグ**。
- 機械割: **97.3 / 99.2 / 101.4 / 103.3 / 105.4 / 108.1%**。
- ART初当たり: **1/231.8 / 214.7 / 202.1 / 178.5 / 175.4 / 138.0**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- ART「ドリームラッシュ」: **基本33G+α、純増約2.0枚/G**。P-WORLDでは33～777G・セットストック型。
- ドリームボーナス: **約45枚 / 7G**。同ボーナス経由ARTは **111G以上**（パチマガスロマガは111～777G）。
- 通常天井/規定Gの直接値: **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7

- 設定変更時のゲーム数・ART関連状態・モード等の本機固有直接契約: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の内部状態・表示・リール挙動: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一専用モード/公開モード振り分け/朝一特定G以内当選率: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目/7セグ/ランプによる変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 2014年後継 **ジャックポットドリームプラス** と2026年スマスロ **ビッグドリーム** のリセット・天井・ベース値は別機種のため除外。

## conflicts

- K-Naviのカテゴリ表示には「ノーマルタイプ」とあるが、同ページ本文・P-WORLD・パチマガスロマガはいずれも純増約2.0枚/GのART「ドリームラッシュ」を明記する。システム分類は実ゲーム仕様を優先して **ART** とし、カテゴリ表記差をCONFLICT注記として保持。

## 境界監査 / 直前修復情報

- 2013-07-23～08-04監査で検出した **美らん娘-30** は遡及追加済み。導入日はHAZUSE 07-29 / 必勝本 08-05 / 8/4納品予定資料のCONFLICTを保持。
- 2013-08-05登録済み: **学園黙示録 HIGH SCHOOL OF THE DEAD / 緑ドン～キラメキ！炎のオーロラ伝説～ / ジャックポットドリーム**。
- 08-05群は未完了。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は時系列本線を優先し、QAカーソルは進めていない。

## 次回再開地点

1. **recordCount 753 / chronologicalFrontier 2013-08-05 / 08-05群OPEN** から開始。
2. repo既登録を確認し、未登録なら **レインボースリーセブンS1-30（ベルコ）** を次候補として性能コア + resetBehavior v0.7収集。
3. **パチスロBADBOYS（岡崎産業）** は2013-06業界記事の8/4納品開始予定を起点に、08-05導入候補として別系統で具体導入日を再確認。未登録かつ対象日確定/競合保持可能なら追加。
4. 全メーカー横断監査後に08-05群をCLOSED判定する。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。

## 主要出典 — 取得日 2026-09-06

### ジャックポットドリーム

- K-Navi: `https://p-kn.com/slot/1919/`
- パチマガスロマガ 概要: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/69/a.php`
- パチマガスロマガ 確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/69/h.php`
- パチマガスロマガ ARTフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/69/l.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7170`
- 当時筐体/型式情報: `https://pachinko.hatenablog.jp/archive/2013/08/01`

### 次候補 / 同日監査

- レインボースリーセブンS1-30 K-Navi: `https://p-kn.com/slot/1921/`
- BADBOYS / 美らん娘-30 発表記事: `https://news.p-world.co.jp/articles/5890/greenbelt`
