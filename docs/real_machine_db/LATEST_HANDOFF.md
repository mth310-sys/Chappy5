# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **732**
- latestMachineAdded: **鬼浜爆走紅蓮隊～友情挽歌編～**（ベルコ）
- latestRecord: `docs/real_machine_db/machines/2013-04-15_onihama-bakusou-gurentai-yuujou-banka.md`
- chronologicalFrontier: **2013-04-15**
- frontierLatestExactDateMachine: **鬼浜爆走紅蓮隊～友情挽歌編～**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-04-15_GROUP__NEXT_RESIDUAL_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-04-15_nobunaga-no-yabou-tenka-sousei.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **731** / chronologicalFrontier **2013-04-15** / 04-15群OPEN。
- handoff指定の次機種 **鬼浜爆走紅蓮隊～友情挽歌編～** のrepo重複を検索し、未登録を確認して732件目として追加。
- 導入日はK-Navi、HAZUSE、パチビーで **2013-04-15** 一致。ベルコ公式は2013年4月登場。
- 04-15同日群はまだOPEN。戦国無双2・戦国パチスロ信長の野望‐天下創世‐・鬼浜爆走紅蓮隊～友情挽歌編～は登録済み。次回は別カレンダー/メーカー別一覧で残存監査を行う。

## 今回追加 — 鬼浜爆走紅蓮隊～友情挽歌編～

### identity / 性能コア

- manufacturer: **ベルコ**。
- releaseDate: **2013-04-15**。
- formalModelName: **オニハマバクソウグレンタイ3S**。
- inspectionNumber: **2S1380**。
- systemType: **5号機 / AT / BR非搭載 / 擬似ボーナス + ゲーム数解除**。
- 機械割: **97.3 / 98.8 / 100.4 / 104.2 / 108.2 / 113.0%**。
- 擬似ボーナス初当たり: **1/224.5 / 214.2 / 204.4 / 186.8 / 173.8 / 155.8**。
- AT単独設定別初当たり: 十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 50枚ベース: **約30G/50枚**（HAZUSE本機専用値）。
- AT「狂乱麗舞」: **1セット40G+α、純増約2.8枚/G**。
- 擬似ボーナス獲得目安: 特攻約140枚/50G、男約140枚/50G、成り上がり約84～420枚/30～150G、ボーナスゲーム約70枚/25G。
- モード別最大: **通常A990G / 通常B768G / 天国準備384G / 天国128G / 超天国128G**。

### resetBehavior v0.7

- 必勝本の直接資料で **設定変更時: 天井Gリセット / モード再抽選 / 状態再抽選 / 鬼メーターリセット / 通常時は屋上ステージ** を確認。
- **電源OFF→ONのみ: 天井G / モード / 状態 / 鬼メーターを引継ぎ**。鬼メーターは液晶上のみリセット表示。
- 設定変更時モード振り分け:
  - 設定1: 通常A12.5 / 通常B50.0 / 天国準備18.8 / 天国18.8%
  - 設定2: 9.4 / 38.5 / 33.3 / 18.8%
  - 設定3: 9.4 / 50.0 / 20.3 / 20.3%
  - 設定4: 7.8 / 38.5 / 33.3 / 20.3%
  - 設定5: 6.3 / 50.0 / 21.9 / 21.9%
  - 設定6: 3.1 / 38.5 / 33.3 / 25.0%
- 天国準備以上は公開表単純合計で **37.6 / 52.1 / 40.6 / 53.6 / 43.8 / 58.3%**。必勝本本文の「約40～60%で天国準備以上」と整合。
- 変更判別の直接契約: **コイン3枚投入→1G消化で点灯する左下コイン投入ランプ（3枚目）は設定変更で消灯、電断のみなら点灯したまま**。ただしコイン投入後1G回さず清算でも消灯するため確定ではなく「変更濃厚」要素。
- 通常時は設定変更/電断とも屋上ステージ、鬼メーターも見た目はリセットされるので表示単独では判別困難。
- 設定変更専用の状態4種具体振り分け、本機固有ガックン、純据え置きの独立契約は十分再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## 次回再開地点

1. **recordCount 732 / chronologicalFrontier 2013-04-15 / 04-15群OPEN** から開始。
2. 2013-04-15同日群を別カレンダー、メーカー別一覧、当時新台記事で再監査。既登録の **戦国無双2 / 戦国パチスロ 信長の野望‐天下創世‐ / 鬼浜爆走紅蓮隊～友情挽歌編～** 以外に未処理機があればその最古候補を追加。
3. 未処理機がなければ **04-15群をCLOSED** とし、2013-04-16以降の境界監査へ前進する。
4. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### 鬼浜爆走紅蓮隊～友情挽歌編～

- ベルコ公式（2013年4月登場、5号機AT）: `https://www.s-bellco.co.jp/products/slot/onihama_yb/`
- K-Navi（2013-04-15、40G+α、純増約2.8枚/G）: `https://p-kn.com/slot/1812/`
- HAZUSE基本スペック（型式名、検定番号、導入日、擬似ボーナス初当り、PAYOUT、50枚約30G）: `https://hazuse.com/machine/pachislot/2S1380/genre/201/`
- パチビー（2013-04-15、5号機AT、約2.8枚/G）: `https://www.pachibee.jp/movies/index/9251`
- P-WORLD（AT40G+α、約2.8枚/G、疑似ボーナスG数）: `https://www.p-world.co.jp/machine/database/7014`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/2188/1/39441`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2188/1/39811`
- パチ＆スロ必勝本 設定変更台狙い: `https://p.hisshobon.jp/machine/2188/1/40179`
- パチ＆スロ必勝本 AT概要: `https://p.hisshobon.jp/machine/2188/1/39531`
- パチ＆スロ必勝本 状態移行抽選: `https://p.hisshobon.jp/machine/2188/1/40886`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/90/h.php`
- パチマガスロマガ 基本情報/疑似ボーナス獲得目安: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/90/a.php`
