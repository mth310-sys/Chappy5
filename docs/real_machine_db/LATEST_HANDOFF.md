# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **799**
- latestMachineAddedByChronology: **パチスロ聖闘士星矢 黄金激闘編**（三洋物産）
- latestRecord: `docs/real_machine_db/machines/2014-03-03_saint-seiya-golden-battle.md`
- chronologicalFrontier: **2014-03-03**
- schema: **resetBehavior v0.7**
- status: **2014-03-03_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-02-24_another-god-hades-stolen-zeus.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は **recordCount 798 / chronologicalFrontier 2014-02-24 / 02-24群OPEN**。
- 2014-02-24同日群を再監査。パチスロとして具体日を固定できた未登録機は今回追加確認できず、既登録 **アナザーゴッドハーデス-奪われたZEUSver.-**のみを保持して **02-24群CLOSED_FOR_CURRENT_RESEARCH**。
- 02-25〜03-02境界も検索したが、今回新たな具体日付き未登録5号機を固定できず。
- 次の強い具体日アンカー **2014-03-03「パチスロ聖闘士星矢 黄金激闘編」**を799件目として追加。
- 03-03同日群には少なくとも **「ンゴロポポス ～ピンチ！捕われの爺～」（大都技研）**をK-Naviで2014-03-03ホール導入開始として確認。未処理のため03-03群はOPENのまま。

## 今回追加 — パチスロ聖闘士星矢 黄金激闘編

### identity / 性能コア

- manufacturer: **三洋物産 / SANYO BUSSAN**。
- hall start: **2014-03-03**（HAZUSE / K-Navi）。
- 型式: **パチスロ聖闘士星矢黄金激闘編YL**。
- 検定番号: **3S1130**。
- generation/system: **5号機 / AT / ゲーム数管理 / 擬似ボーナス / CZ**。
- payout: **97.2 / 99.0 / 99.5 / 104.3 / 107.5 / 111.6%**。
- ボーナス+AT初当たり: **1/230.7 / 221.7 / 217.3 / 189.9 / 180.5 / 152.5**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- netIncrease: **約2.8枚/G**。
- AT「聖闘士RUSH」: **初回40G+α**。
- 擬似ボーナス「小宇宙BURST」: **20G固定**。
- 通常最大天井: **999G**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更: **ハマリG RESET / モードRESET・再設定**を当時解析で確認。
- 設定変更後の最大天井は **750G**へ短縮。
- 公開モード別短縮値: **通常A 650G / 通常B 750G / 通常C 650G / 天国A/B 100G**。
- 通常時最大は通常A 900G、通常B/C 999G、天国A/B 100G。
- 設定変更時の具体的モード振り分け率は、当時記事中の仮定表現と解析確定値を分離し **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井G・モード・状態保持は専用直接資料を十分に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの純電源OFF→ONも **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の内部状態振り分けも **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有のガックン/初期出目等による確定変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## conflicts / safeguards

- 2012年初代、後年の「海皇覚醒」「冥王復活」「スマスロ聖闘士星矢」等のリセット恩恵・有利区間・GB/不屈仕様を黄金激闘編へ混入しない。
- 初当たりラベルは資料により「ART初当たり」「AT初当たり」「ボーナス+AT初当たり」と表記差があるが、数値列は1/230.7〜1/152.5で一致。本レコードでは擬似ボーナス/AT初当たり合成として保持。
- 設定変更時について「ほとんど通常A」等の当時考察は確定解析値として採用しない。

## 2014-02-24同日群 — CLOSED

処理済み:
1. **アナザーゴッドハーデス-奪われたZEUSver.-**（ミズホ） — 798件目。

今回のメーカー横断再監査で、02-24具体日付きの追加未登録パチスロを固定できなかったため **CLOSED_FOR_CURRENT_RESEARCH**。

## 2014-03-03同日群 — OPEN

処理済み:
1. **パチスロ聖闘士星矢 黄金激闘編**（三洋物産） — 799件目。

未処理/要確認:
1. **ンゴロポポス ～ピンチ！捕われの爺～**（大都技研） — K-Naviでホール導入開始 **2014-03-03** を確認。次回最優先。
2. 03-03同日群をメーカー横断で再監査し、他の未登録パチスロがないか確認してからCLOSED判定。
3. 03-04以降の境界へ進む際、3月月次候補 **ビッグボーナスX64**（タイヨー）、**ジャックポットドリームプラス**（岡崎産業）等の具体導入日を別系統で固定して時系列へ挿入する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線799件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 799 / chronologicalFrontier 2014-03-03 / 03-03群OPEN** から開始。
2. 最優先で **2014-03-03「ンゴロポポス ～ピンチ！捕われの爺～」（大都技研）**を800件目候補として性能コア + v0.7 resetBehavior収集。
3. その後03-03同日全メーカー監査を完了し、未登録機があれば時系列順に追加。
4. 03-03群を閉じた後、03-04以降を境界監査。
5. 3月月次候補「ビッグボーナスX64」「ジャックポットドリームプラス」等は具体日を固定してから追加。
6. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）**を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録。
7. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。

## 主要出典 — 取得日 2026-09-06

### パチスロ聖闘士星矢 黄金激闘編
- HAZUSE: `https://hazuse.com/machine/pachislot/3S1130/`
- K-Navi: `https://p-kn.com/slot/2000/`
- スロパチクエスト機種まとめ: `https://www.slopachi-quest.com/kisyubetsu/seint-seiya/`
- スロパチクエスト朝一リセット解析: `https://www.slopachi-quest.com/article/seint-seiya-reset/`
- 目指せ月収20万: `https://mezase20.com/slot_seiya_ougongekitouhen.html`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/2354/1/45381`
- 期待値見える化: `https://slotjin.com/zone/saintseiya-ougon/`

### 03-03次候補
- K-Navi ンゴロポポス: `https://p-kn.com/slot/2001/`

### 02-24境界確認
- HAZUSE 初代ハーデス: `https://hazuse.com/machine/pachislot/3S0800/`
- Pachiseven 初代ハーデス: `https://pachiseven.jp/machines/3000/cutout/131`
