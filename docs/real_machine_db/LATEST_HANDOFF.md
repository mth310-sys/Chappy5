# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **800**
- latestMachineAddedByChronology: **ンゴロポポス ～ピンチ！捕われの爺～**（大都技研）
- latestRecord: `docs/real_machine_db/machines/2014-03-03_ngoropoposu.md`
- chronologicalFrontier: **2014-03-03**
- schema: **resetBehavior v0.7**
- status: **2014-03-03_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-03-03_saint-seiya-golden-battle.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は **recordCount 799 / chronologicalFrontier 2014-03-03 / 03-03群OPEN**。
- HANDOFF指定の次候補 **「ンゴロポポス ～ピンチ！捕われの爺～」（大都技研）**を800件目として追加。
- 03-03同日群を再監査した結果、未登録候補として **「パチスロ グラップラー刃牙 ～最大トーナメント編～」（ニューギン）**をK-Naviでホール導入開始 **2014-03-03** と確認。未処理のため03-03群はOPENのまま。
- 03-03群を閉じる前に、刃牙を処理したうえで同日全メーカー監査を継続する。

## 今回追加 — ンゴロポポス ～ピンチ！捕われの爺～

### identity / 性能コア

- manufacturer: **大都技研**。
- hall start: **2014-03-03**（K-Navi / 当時解析）。
- 業界記事では **2014-03-02から納品**。納品日とホール導入開始日は別定義で保持。
- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**。
- generation/system: **5号機 / ART / 規定ゲーム数管理 / ループテーブル / セット数上乗せ**。
- payout: **96.3 / 98.6 / 100.3 / 103.7 / 107.8 / 113.4%**。
- ART初当たり: **1/509.2 / 467.3 / 434.6 / 382.1 / 342.1 / 303.5**。
- baseGamesPer50: **約21G/50枚相当**（当時資料の約21G/1000円を20円スロ50枚相当に換算）。
- ART「ンゴロポCHANCE」: **100G+α / 純増約2.8枚/G**。
- 通常最大天井: **999G+前兆**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更: **ハマリ/天井G RESET**。
- 設定変更時: **モード・状態を再抽選**とする当時解析を確認。
- 据え置き: 当時実戦解析で朝一前兆位置が内部累計G依存と観測され、**内部G数CARRYOVERを支持**。ただしメーカー直接契約ではないため `PERIOD_OBSERVATIONAL`。
- 据え置き時のモード/内部状態保持: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開モード振り分け:
  - 設定1: **通常A 87.5% / 天国 12.5%**。
  - 設定6: **通常A 72.5% / 天国 27.5%**。
  - 設定2～5: **UNVERIFIED_AFTER_RESEARCH**。
- 天国表現は資料差あり: P-WORLD **100GでART確定** vs 解析資料 **68G規定+最大42G前兆で110G以内**。定義差として分離し平均しない。
- 朝一変更推測: 前日G数を把握している場合、200G/400G付近等の前兆位置から変更/据え置きを推測する当時実戦運用あり。**確定判別ではない**。
- ガックン/初期出目等の本機固有確定変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## conflicts / safeguards

- 天国の「100G」と「68G+最大42G前兆=110G以内」は規定Gと前兆込み発動位置の定義差として保持し、平均しない。
- 神チキ等の詳細フラグ確率は完全再現用のため性能コアへ入れない。
- 後年の大都機のリセット仕様を本機へ流用しない。
- 型式/検定番号は十分な表記揺れ・資料系統再探索後も安全に固定できずUNVERIFIED。

## 2014-03-03同日群 — OPEN

処理済み:
1. **パチスロ聖闘士星矢 黄金激闘編**（三洋物産） — 799件目。
2. **ンゴロポポス ～ピンチ！捕われの爺～**（大都技研） — 800件目。

未処理/要確認:
1. **パチスロ グラップラー刃牙 ～最大トーナメント編**（ニューギン） — K-Naviでホール導入開始 **2014-03-03** を確認。次回最優先、801件目候補。
2. 刃牙処理後も03-03同日全メーカー監査を継続し、未登録機がないか確認してからCLOSED判定。
3. 03-03群を閉じた後、03-04以降の境界監査へ進む。
4. 3月月次候補 **ビッグボーナスX64**（タイヨー）、**ジャックポットドリームプラス**（岡崎産業）等は具体導入日を別系統で固定して時系列へ挿入する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線800件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 800 / chronologicalFrontier 2014-03-03 / 03-03群OPEN** から開始。
2. 最優先で **2014-03-03「パチスロ グラップラー刃牙 ～最大トーナメント編」（ニューギン）**を801件目候補として性能コア + v0.7 resetBehavior収集。
3. その後03-03同日全メーカー監査を完了し、未登録機があれば時系列順に追加。
4. 03-03群を閉じた後、03-04以降を境界監査。
5. 3月月次候補「ビッグボーナスX64」「ジャックポットドリームプラス」等は具体日を固定してから追加。
6. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）**を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録。
7. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。

## 主要出典 — 取得日 2026-09-06

### ンゴロポポス ～ピンチ！捕われの爺～
- グリーンべると: `https://web-greenbelt.jp/00000100/`
- K-Navi: `https://p-kn.com/slot/2001/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/56/daitogiken_slot_56.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7316`
- スロパチクエスト機種/天井: `https://www.slopachi-quest.com/article/ngoropoposu/`
- 期待値見える化: `https://slotjin.com/zone/ngoropoposu/`
- スロパチクエスト モード/前兆観測: `https://www.slopachi-quest.com/article/ngoropopos-zone-mode/`
- LackLuckLife: `https://l-l-life.com/36957058/`
- 2-9伝説: `https://29den.com/ngoropoposu/`
- メタボ教授: `https://metabopro.com/ngopoposutorimu/`

### 03-03次候補
- K-Navi グラップラー刃牙 ～最大トーナメント編～: `https://p-kn.com/slot/2002/`
