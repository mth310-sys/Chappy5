# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **712**
- latestMachineAdded: **パチスロ らんま1/2**（SANKYO）
- latestRecord: `docs/real_machine_db/machines/2013-02-04_pachislo-ranma-1-2.md`
- chronologicalFrontier: **2013-02-04**
- frontierLatestExactDateMachine: **パチスロ らんま1/2**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-02-04_GROUP__NEXT_OTOKOJUKU_TENCHO_GORIN**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-02-04_uchu-senkan-yamato2-teresa-ai-no-michibiki.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **711** / chronologicalFrontier **2013-02-04** / 02-04群OPEN。
- repo検索で未登録を確認後、**712件目: パチスロ らんま1/2（SANKYO）** を追加。

## 今回追加 — パチスロ らんま1/2

### 性能コア

- releaseDate: **2013-02-04**を時系列キー採用。SANKYO公式は2013.02、当時業界記事は2月3日納品予定、P-WORLD現行DBは2013年01月表記のため月競合を保持。
- 型式名: **パチスロ らんま1／2S** / 検定番号 **2S1179**（P-WORLD）。
- systemType: **5号機 / 擬似BIG・REG+ART / ゲーム数解除+自力CZ / 獲得枚数管理型ART**。
- 機械割: **97.5 / 98.5 / 100.7 / 105.0 / 110.6 / 113.5%**。
- 擬似ボーナス合算: **1/242.7 / 1/227.8 / 1/233.5 / 1/206.8 / 1/214.6 / 1/181.1**。
- BIG: **1/357.7 / 1/334.9 / 1/343.0 / 1/298.1 / 1/308.4 / 1/253.9**。
- REG: **1/754.6 / 1/712.3 / 1/731.6 / 1/674.8 / 1/705.7 / 1/630.9**。
- ART「闘校チャンス」: **1セット120枚+α / 純増約+2.0枚/G / 獲得枚数管理型**。
- 擬似BIG平均約**200枚**、擬似REG平均約**60枚**（2013年当時業界記事）。
- 50枚ベース: 2012-12当時スロスター資料で **約32G/1000円**。別直接照合値は今回未確定のため `ANALYSIS_SINGLE_PERIOD`。
- ART「闘校チャンス」自体の設定別初当たり直接表は、定義揃いの資料を再探索後も **UNVERIFIED_AFTER_RESEARCH**。無差別バトル初当たりをART初当たりへ流用しない。

### 天井 / モード

- 通常時は **通常A / 通常B / 天国** の3モード。
- 通常A/B: **最大999G**。
- 天国: **最大100G**。
- 当時解析では通常Aの200～299G・400～499G、通常Bの300～399G・500～599G・900～999Gが規定G数チャンス帯。
- 当時新機種資料の天国ループ率約50%は通常時一般仕様として保持し、リセット専用値にはしない。

### resetBehavior v0.7

- 設定変更時: **天井ゲーム数CLEAR_CONFIRMED**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の通常A/B/天国具体振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の内部高確/通常の具体振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井G・モード・状態の完全契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の天井G・モード・状態・開始画面契約: **UNVERIFIED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶等の本機固有変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- resetPenalty: 設定変更で前日の規定ゲーム数/天井進捗が消失。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 公開朝一数値として確定したのは、設定変更時カウンタCLEAR、通常A/B最大999G、天国最大100G。リセット専用モード率/高確率は未確定。

### CONFLICT / 混同防止

1. **release month**: SANKYO公式2013.02・当時2月納品系列に対し、P-WORLD現行DB末尾は2013年01月。平均せずCONFLICT保持。
2. **5号機クロニクル後年回顧**: 「乱馬ラッシュ / 40G+α / ART初当たり1/297.8～1/224.4」表記は、SANKYO公式・P-WORLD・2013年当時資料の「闘校チャンス / 120枚+α / 擬似BIG・REG」と基本構造が一致しないため `CONFLICT_RETROSPECTIVE_WRONG_SPEC_OR_MIXED_MACHINE`。
3. **2018年EXCITE同名機**: 天井非搭載、50枚47.4～54.9G等は別機種。2013年SANKYO機へ混入禁止。

## 2013-02-04同日群

K-Navi 2013年2月新台カレンダー上のパチスロ4機種:

1. パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～（山佐） — **登録済み / 711件目**。
2. パチスロ らんま1/2（SANKYO） — **登録済み / 712件目**。
3. **魁!!男塾 ～天挑五輪大武會編～（ロデオ） — 次回最優先**。
4. メガミリオネア ヴィーナスヴァージョン（ラスター） — 未処理候補。

### 魁!!男塾 次回用アンカー

- 当時パチスロ業界初まとめ: **2013-02-04発売**、ボーナス無し、ストック式+継続率式+G数上乗せ式ART、**1セット40G / 純増約2.8枚/G**。
- 次回はロデオ/サミー公式・P-WORLD・当時解析・天井/設定変更/据え置き/電断/モード/状態/ガックンを横断し、repo重複確認後に713件目候補として処理。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 次回再開地点

1. **recordCount 712 / chronologicalFrontier 2013-02-04 / 02-04群OPEN** から開始。
2. **2013-02-04「魁!!男塾 ～天挑五輪大武會編～」（ロデオ）** を最優先で性能コア+resetBehavior v0.7収集し、未登録なら713件目として保存。
3. 続いて **メガミリオネア ヴィーナスヴァージョン** をrepo重複確認して処理。
4. 4機種処理後、02-04同日群をメーカー/業界/当時DBで残存監査してCLOSED判定。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-06

### パチスロ らんま1/2
- SANKYO公式オンライン博物館: `https://www.sankyo-fever.jp/collection/548/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6974`
- Pマンズ / 当時グリーンべると系記事: `https://p-mans.blogspot.com/2013/01/12.html`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/30/sankyo_slot_30.php`
- パチマガスロマガ ボーナス解除率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/30/i.php`
- 当時スロスター: `https://ameblo.jp/slostar/entry-11429044578.html`
- 2-9伝説まとめ: `https://29den.com/ranma/`
- 5号機クロニクル（競合資料）: `https://5goki.com/sankyo`

### 次候補 / 境界
- K-Navi 2013年2月新台カレンダー: `https://p-kn.com/calendar/201302/`
- パチスロ業界初まとめ: `https://slothistory.com/kousin_all_0.html`
