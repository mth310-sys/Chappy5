# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **454**
- latestMachineAdded: **列強伝**（2010年2月・月精度の遡及漏れ修復）
- latestRecord: `docs/real_machine_db/machines/2010-02_rekkyo-den.md`
- chronologicalFrontier: **2010-02-21**（ゼットゴールドEX地点を維持）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 453件地点から2/22へ進む前の2010年2月境界監査を継続。LATEST_HANDOFFで優先候補だった「列強伝」はP-WORLD・当時解析・後年筐体資料で2010年2月機と確定し、main未登録だったため454件目として遡及追加。全国ホール導入の具体日は十分な再探索後も固定できないため月精度で保存し、時系列前線は2010-02-21のまま維持する。

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、前線レコード `2010-02-21_z-gold-ex.md` を再読。
- `INDEX.md` は旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコードを優先。
- repo検索で「列強伝」既存レコードなしを確認。
- 残候補 `ビューティフルジョー / バイオレントゾーン / 列強伝 / 真田純勇士 / 哲也 新宿VS上野DX` を監査し、今回は列強伝を月精度で確定・追加。
- 列強伝はP-WORLDで型式 `サンゴクレッキョウデン`、検定番号 `8S0066`、導入開始2010年02月を確認。当時必勝本は2010-01-23にCZ/RT詳細、2010-02-01〜02に設定看破/シミュレートを公開しており、2009-12-29販売開始発表とも時系列整合。

## 454 — 列強伝 要約

- メーカー: **ラスター（WIN NET TECHNOLOGY開発 / メテオ販売）**
- 型式: **サンゴクレッキョウデン**
- 検定番号: **8S0066**
- 導入: **2010年2月**（具体導入日 `UNVERIFIED_AFTER_RESEARCH`）
- 世代: **5号機**
- タイプ: **ボーナス + 周期CZ + 100G完走型RT**
- BIG: **1/661.98 / 1/642.51 / 1/574.88 / 1/546.13 / 1/496.48 / 1/464.79**
- REG: **1/809.09 / 1/780.19 / 1/682.67 / 1/642.51 / 1/574.88 / 1/532.81**
- 合算: **1/364.09 / 1/352.34 / 1/312.08 / 1/295.21 / 1/266.41 / 1/248.24**
- 機械割: **CONFLICT**
  - P-WORLD: **97.8 / 99.3 / 101.3 / 103.3 / 105.4 / 107.8%**
  - パチマガスロマガ: **97.79 / 99.40 / 101.67 / 103.83 / 106.21 / 108.89%**
  - 必勝本シミュレート: **97.96 / 99.45 / 101.53 / 103.51 / 105.71 / 108.16%**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- BIG: **約380枚**
- REG: **約90枚**
- RT「千里行」: **100G / 約+0.8枚/G**（必勝本直接値 +0.79枚/G、完走約80枚増）
- 通常時: **150G消化ごとにCZ**。ボーナス後は最大5Gの強めCZ、RT完走後は弱CZ。

## resetBehavior v0.7 — 列強伝

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。150G周期カウンタ、CZ/RT状態の設定変更処理を直接確定できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。150G周期進捗、CZ/RT状態の引継ぎを本機固有資料で確定できず。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。周期カウンタ、CZ/RT状態、初期出目/ランプ等の扱いを直接確定できず。
- **gameCounterReset**: `UNVERIFIED_AFTER_RESEARCH_FOR_150G_PERIODIC_CZ_COUNTER`。通常150G周期CZ自体は確定。
- **ceilingAfterReset**: `NONE_CONFIRMED_AFTER_RESEARCH`。設定変更専用の短縮周期/朝一専用到達G数なし。
- **modeAfterReset / stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。通常/CZ/RT状態の変更後処理を直接確定できず。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。通常150G周期をリセット恩恵とは扱わない。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、リール、ランプ、CZ到達G数まで再探索したが本機固有の高信頼根拠なし。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- P-WORLD 列強伝: `https://www.p-world.co.jp/machine/database/5816`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/01/a.php`
- パチマガスロマガ ボーナス抽選確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/01/h.php`
- パチマガスロマガ 機種メニュー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/01/meteor_slot_01.php`
- パチ&スロ必勝本 列強伝: `https://p.hisshobon.jp/machine/1532`
- パチ&スロ必勝本 CZ&RT詳細: `https://p.hisshobon.jp/machine/1532/1/23237`
- パチ&スロ必勝本 シミュレートデータ: `https://p.hisshobon.jp/machine/1532/1/23234`
- 当時販売開始発表の保存記事: `https://messiii88.hatenadiary.org/entry/20091229/1262050217`
- 後年筐体資料: `https://pachinko.hatenablog.jp/entry/2010/02/rekkyo-den`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は時系列漏れ修復を優先し、既存性能値をやり直していない。

## 次回再開地点

1. **recordCount 454 / chronologicalFrontier 2010-02-21**。最新追加は月精度の2010年2月「列強伝」だが、前線はゼットゴールドEXの2010-02-21を維持。
2. **2/22へ進む前に残る2010年2月月内候補を再監査**。優先: `ビューティフルジョー`、`バイオレントゾーン`、`真田純勇士`、`哲也 新宿VS上野DX`。具体日が2/21以前へ落ちる機種があれば先に遡及追加する。
3. `列強伝` は登録済み。具体導入日が後日高信頼で判明した場合のみreleaseDateを更新する。150G周期CZの設定変更/据え置き/電源OFF→ON処理も新資料が見つかった場合のみ補完する。
4. `真田純勇士` は一部後年資料で2010年2月表記がある一方、小冊子系資料では2010年3月表記もあるため、月自体を競合監査してから追加判断する。
5. `ビューティフルジョー`、`バイオレントゾーン`、`哲也 新宿VS上野DX` は具体導入日と2010年2月内での順序を再探索。発表日/記事投稿日を導入日と誤認しない。
6. 2/21以前の追加漏れを閉じたら **2010-02-21同日群を最終監査**し、その後、具体日確認済みの **みどりのマキバオー 2010-02-22**へ進む。
7. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得し、repo検索で重複・他リレー競合を防ぐ。
