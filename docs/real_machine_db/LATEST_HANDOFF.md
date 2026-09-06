# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **802**
- latestRecordAdded: **ジャックポットドリームプラス**（岡崎産業）— 2014-02-17時系列漏れの遡及補完
- latestRecord: `docs/real_machine_db/machines/2014-02-17_jackpot-dream-plus.md`
- chronologicalFrontier: **2014-03-03**
- frontierLatestMachine: **パチスロ グラップラー刃牙 ～最大トーナメント編～**（ニューギン）
- schema: **resetBehavior v0.7**
- status: **2014-03-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2014-02-17_BACKFILL_INTEGRATED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-03-03_grappler-baki-max-tournament.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を現在の正本として継続。
- 作業開始時正本は **recordCount 801 / chronologicalFrontier 2014-03-03 / 03-03群CLOSED**。
- 03-04〜03-09境界を具体日検索で監査し、今回この期間に新規登録すべき具体日付き未登録5号機は固定できなかった。
- 一方、旧handoffで「3月月次候補」として残っていた **ジャックポットドリームプラス**を再調査したところ、K-Naviに **2014-02-17ホール導入開始**の具体日が存在し、GitHub mainに機種レコードが無いことを確認。
- 漏れ防止優先ルールに従い、3/10へ進む前に802件目として **2014-02-17へ遡及追加**した。
- この追加は過去境界の修正であり、chronologicalFrontier自体は **2014-03-03** のまま。03-03群CLOSED状態も維持する。

## 今回追加 — ジャックポットドリームプラス

### identity / 性能コア

- manufacturer: **岡崎産業**。
- hall start: **2014-02-17**（K-Navi具体日）。
- 型式名: **ジャックポットドリームプラスＤ１**（P-WORLD）。
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**。
- generation/system: **5号機 / ART / ボーナス契機併用 / 7セグ告知**。
- payout: **97.1 / 99.2 / 101.1 / 103.6 / 107.1 / 108.6%**。
- ART初当たり: **1/185.9 / 173.9 / 168.0 / 160.1 / 154.1 / 141.0**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- ART「ドリームラッシュ」: **33G+α / 純増約2.0枚/G**。
- ドリームボーナス: 後年整理で **約40枚 / 111G以上ART濃厚**。後年単一資料値として分離保持。
- 固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**。「天井なし」とは断定せず、直接契約未確認として保存。
- recordStatus: **PARTIAL_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 固定天井契約自体が未確認。設定変更/据え置き/電源OFF→ONの本機固有契約は **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ガックン、初期出目、7セグ初期表示、ランプ等を再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一般的な5号機挙動、同シリーズ別機種、岡崎産業他機種からの推定転記はしていない。

## chronology safeguard

- 旧handoffの「3月月次候補」という扱いより、K-Naviの具体日 **2014-02-17** を優先。
- P-WORLDは機種identity・型式・性能照合に使用し、掲載更新日2014-05-03を導入日とは扱わない。
- 同シリーズの `ジャックポットドリーム` / `スペシャルジャックポット` / `スーパージャックポット` の性能やresetBehaviorを混ぜない。

## 2014-03-04〜03-09境界監査

- 「2014年3月4日」〜「2014年3月9日」+ パチスロ/導入/新台の具体日検索を実施。
- HAZUSEの次の強い具体日アンカーは **2014-03-10 ビッグボーナスX64**。
- 今回の検索範囲では03-04〜03-09の具体日付き未登録5号機を固定できず、**CLOSED_FOR_CURRENT_RESEARCH** として次へ進める。
- 後日、一次/当時資料で漏れが判明した場合は再OPENする。

## 次回再開地点

1. **recordCount 802 / chronologicalFrontier 2014-03-03 / 03-03群CLOSED / 03-04〜03-09境界CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 次機種候補は **2014-03-10「ビッグボーナスX64」（タイヨー / 型式ビッグボーナスX64A / 検定3S1100）**。
3. 既に今回の予備調査で以下を確認済み: 導入2014-03-10、機械割96.5/98.0/100.5/103.5/107.0/112.5%、ボーナス実質出現1/140.8〜1/107.5、50枚ベース約34.5G、BIG約195枚、内部成立後最大218Gで告知、BIG後直撃ZONE20〜200G、最大86%ループ。次回はresetBehaviorを重点再探索して正式レコード化する。
4. その次の強い具体日アンカーは **2014-03-17「パチスロ モンスターハンター 月下雷鳴」**（エンターライズ / モンスターハンター月下雷鳴ZX / 3S0962）。3/11〜3/16境界を先に監査する。
5. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02_pikaslo.md` から継続。既存性能coreStatusは不用意に変更しない。
6. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）**を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### ジャックポットドリームプラス
- K-Navi: `https://p-kn.com/slot/2009/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7314`
- pacnk: `https://pacnk.com/slot/tools/sh_jakkupottodorimupurasu.html`
- 5号機クロニクル 岡崎産業: `https://5goki.com/okazaki`
- 後年ジャックポットシリーズ整理: `https://www.marimo0925.net/pachislot-kikaiwari-ranking-jackpot-ban/`

### 次アンカー — ビッグボーナスX64
- HAZUSE: `https://hazuse.com/machine/pachislot/3S1100/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7308`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/79/taiyo_slot_79.php`
- 5号機クロニクル タイヨー: `https://5goki.com/taiyo`

### 次々アンカー — モンスターハンター 月下雷鳴
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0962/`

### 遡及QA
- 次対象: `docs/real_machine_db/machines/2007-02_pikaslo.md`
