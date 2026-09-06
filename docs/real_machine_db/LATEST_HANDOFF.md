# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **809**
- latestRecordAdded: **サムライスピリッツ～剣豪八番勝負～**（SNKプレイモア）— 2014-04-07
- latestRecord: `docs/real_machine_db/machines/2014-04-07_samurai-spirits-kengo-hachiban-shobu.md`
- chronologicalFrontier: **2014-04-07**
- frontierLatestMachine: **サムライスピリッツ～剣豪八番勝負～**
- schema: **resetBehavior v0.7**
- status: **2014-04-07_GROUP_OPEN / SAMURAI_SPIRITS_KENGO_HACHIBAN_SHOBU_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード `2014-04-07_happy-juggler-vii.md` を再読。
- INDEXは旧集約（19件表示）のため、README規定どおり **LATEST_HANDOFF + main実レコード** を現在の正本として継続。
- 作業開始時正本は **recordCount 808 / chronologicalFrontier 2014-04-07 / 04-07_GROUP_OPEN**。
- 04/07群の次の未処理 **サムライスピリッツ～剣豪八番勝負～** がmain未登録であることを404で確認し、809件目として追加。
- 04/07群は **マタドール-30 / ハッピージャグラーVII / サムライスピリッツ～剣豪八番勝負～** まで処理済み。
- 残る既知未処理は **パチスロ モンキーターンII（山佐）**。

## 今回追加 — サムライスピリッツ～剣豪八番勝負～

### identity / 性能コア

- manufacturer: **SNKプレイモア**。
- hall start: **2014-04-07**（K-Navi / HAZUSE）。グリーンべると当時記事も4/7納品予定。
- formalModelName: **サムライスピリッツ剣豪八番勝負AC**。
- inspection number: **3S1214**。
- generation/system: **5号機 / AT / 擬似ボーナス / 差枚数管理 / CZ**。
- payout series A: **96.9 / 98.6 / 99.9 / 104.0 / 108.3 / 113.6%**。
- payout series B: **97.2 / 98.9 / 100.3 / 104.4 / 108.8 / 114.1%**。
- 定義/算出条件を確定できないため **CONFLICT_PAYOUT_SERIES_A_VS_B** として双方保持。
- 擬似ボーナス初当たり: **1/249.9 / 240.2 / 228.1 / 216.1 / 201.3 / 185.0**。
- 1G連・剣豪八番勝負引き戻し込み出現率: **1/115.7 / 111.1 / 104.0 / 94.8 / 83.9 / 74.2**。初当たりと定義分離。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- netIncrease: **約2.8枚/G**。
- REG: **約40枚 / ベルナビ8回**。
- 剣豪ボーナス: **期待約200枚**、天下無双ボーナス: **期待約400枚**。
- ceiling: **ボーナス間999G + 最大前兆約32G** → ボーナス確定CZ「練気モード」。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT_AND_PAYOUT_CONFLICT**。

### resetBehavior v0.7

- settingChangeBehavior: **設定変更で天井G数リセット**を確認。設定変更後は練気モード規定Gの朝一優遇解析あり。
- gameCounterReset: **RESET_CONFIRMED_ON_SETTING_CHANGE**。
- ceilingAfterReset: 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。通常天井自体は999G+前兆。
- publicMorningNumbers: **設定変更後128G以内の練気モード当選率25%**。
- resetDetection: 朝一設定変更後 **96〜128G** に練気モード前兆（怒ノ道ステージ、桜役物開花、好機アイコン等）が出れば**設定変更濃厚**とする当時攻略資料あり。
- modeAfterReset: 設定変更後に通常時とは異なる練気モード規定G挙動を確認。ただしモード名/全振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: 低確/高確等の具体的初期状態振り分け **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 据え置き時の天井G/規定G/状態の本機固有契約は **UNVERIFIED_AFTER_RESEARCH**。変更時リセットから逆推定しない。
- powerCycleBehavior: 純電源OFF→ONのみの天井G/規定G/状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン等の本機固有確定判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

## safeguards / definitions

- 機械割2系列は平均せずCONFLICTとして保持。
- 「初当たり」と「1G連/引き戻し込み出現率」を混同しない。
- 設定変更後128G以内25%は**CZ練気モード当選率**で、AT/擬似ボーナスの128G以内総当選率ではない。
- 一部後年DBの導入月「2014年3月」と具体日付き2014-04-07資料の差を保持し、時系列キーは具体日資料を優先。
- すろぱちくえすと側のメーカー誤表記「KPE」はidentityに採用しない。

## 2014-04-07群

- 処理済み: **マタドール-30 / ハッピージャグラーVII / サムライスピリッツ～剣豪八番勝負～**。
- 未処理: **パチスロ モンキーターンII（山佐）**。
- status: **GROUP_OPEN**。

## 遡及 resetBehavior QA

- 次の遡及QAカーソルは従来どおり **`docs/real_machine_db/machines/2007-02_skylove.md`**。
- 新規時系列キューを止めず、QAリレー時に継続する。

## 次回再開地点

1. **recordCount 809 / chronologicalFrontier 2014-04-07 / 04-07_GROUP_OPEN** から開始。
2. 次の未処理機種は **パチスロ モンキーターンII（山佐）**。
3. 同機処理後、04/07同日群をメーカー横断再監査し、漏れがなければGROUP_CLOSED。
4. その後 **2014-04-08〜04-20境界監査**へ進む。K-Navi上の次の具体日アンカーは **2014-04-21**。
5. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02_skylove.md` から継続。
6. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）** を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### サムライスピリッツ～剣豪八番勝負～
- グリーンべると: `https://web-greenbelt.jp/00000083/`
- K-Navi: `https://p-kn.com/slot/2013/`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S1214/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/47/a.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7321`
- 目指せ月収20万！パチスロ天井解析攻略ブログ: `https://mezase20.com/samuraispirits.html`
- 2-9伝説まとめ: `https://29den.com/samuraispirits2/`
- 5号機クロニクル: `https://5goki.com/snkplaymore`
- すろぱちくえすと: `https://www.slopachi-quest.com/kisyubetsu/samurai-spirits/`

### 04-07群
- K-Navi 2014年4月新台導入カレンダー: `https://p-kn.com/calendar/201404/`

### 遡及QA
- 次対象: `docs/real_machine_db/machines/2007-02_skylove.md`
