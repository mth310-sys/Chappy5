# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **711**
- latestMachineAdded: **パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～**（山佐）
- latestRecord: `docs/real_machine_db/machines/2013-02-04_uchu-senkan-yamato2-teresa-ai-no-michibiki.md`
- chronologicalFrontier: **2013-02-04**
- frontierLatestExactDateMachine: **パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-02-04_GROUP__NEXT_RANMA12**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-01-28_million-god-keifu-zeus-ver.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **710** / chronologicalFrontier **2013-01-28** / 01-28群CLOSED / 01-29〜02-03監査済み。
- **711件目: パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～（山佐）** を登録済み。
- K-Navi 2013年2月カレンダー、パチビー当時機種情報、山佐公式現行アーカイブで2013年2月導入を確認し、パチビーの具体日 **2013-02-04** を採用。

## 今回追加 — パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～

### 性能コア

- releaseDate: **2013-02-04**。
- systemType: **5号機 / ART / BR非搭載 / ゲーム数上乗せ型**。
- 機械割: **96.9 / 98.5 / 100.8 / 104.3 / 108.5 / 112.6%**。
- ART初当たり: **1/259.6 / 1/251.5 / 1/251.0 / 1/224.9 / 1/217.2 / 1/196.0**。
- ART「ヤマトボーナス」: **純増約+2.2枚/G**。
- 50枚ベース: 表記揺れ・1000円/1K/コイン持ち等で再探索したが比較可能な直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 型式名 / 検定番号: 再探索後も高信頼に確定できず **UNVERIFIED_AFTER_RESEARCH**。

### 天井 / 主要状態

- ART間 **1024G or 1280G** の2種類。
- 天井到達でART当選。
- **1280G天井時は愛波動砲チャンス確定**系列をP-WORLDと当時攻略資料で照合。
- 「愛モード」はP-WORLDでARTを毎ゲーム約1/8抽選、平均継続約32G。
- 当時攻略資料では本機はゲーム数テーブル管理型ではなく、通常時レア役からの当選が主軸と説明。

### resetBehavior v0.7

- 設定変更時: **天井ゲーム数CLEAR_CONFIRMED**。
- 設定変更後の1024G/1280G選択率: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の内部高確/愛モード等の状態・モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井G・状態の完全契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の天井G・状態・液晶初期状態: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。通常天井そのものが1024/1280Gの2種類であるため1024Gをリセット専用短縮と扱わない。
- ガックン/初期出目/液晶による変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- resetPenalty: 設定変更で前日ART間ゲーム数進捗が消失。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT / 注意

- 5号機クロニクル山佐一覧は本機を **2013年7月 / AT / 純増約2.8枚/G / イスカンダルロード / コスモコンボ** と掲載するが、山佐公式、2013年2月当時のパチビー、P-WORLD、2012-12-17公開の業界試打資料は **2013年2月 / ART / 純増約2.2枚/G / ヤマトボーナス** で一致。後年回顧DBの別ヤマト系スペック混同候補として `CONFLICT_RETROSPECTIVE_WRONG_SPEC_OR_MIXED_MACHINE` を保存。
- パチマガスロマガ取得本文は設定1/2のPAYOUTが196.9/198.5%と表示されるが、P-WORLD等および同ページ設定3以降との整合から表示異常としてCONFLICT noteを保存し、96.9/98.5%を主系列とした。

## 2013-02-04同日群

K-Navi 2013年2月新台カレンダー上のパチスロ4機種:

1. パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～（山佐） — **登録済み / 711件目**。
2. パチスロ らんま1/2（SANKYO） — repo検索で未登録。**次回最優先**。
3. 魁!!男塾 ～天挑五輪大武會編～（ロデオ） — 未処理候補。
4. メガミリオネア ヴィーナスヴァージョン（ラスター） — 未処理候補。

### らんま1/2 次回用の確認済みアンカー

- SANKYO公式オンライン博物館: **2013.02導入**、疑似BIG/REG、ART「闘校チャンス」。
- K-Naviカレンダー: **2013-02-04**。
- P-WORLD: ART「闘校チャンス」は **1セット120枚+α / 純増約2.0枚/G / 獲得枚数管理型**。
- 2012年12月当時スロスター記事: **ベース約32G/千円**、通常A/B/天国の3モード、無差別バトル初当たり設定差を掲載。
- 後年5号機クロニクルには導入月・ART名称/仕様・初当たりが公式/当時資料と食い違う記述があるため、次回は当時/公式資料優先でCONFLICT判定する。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 次回再開地点

1. **recordCount 711 / chronologicalFrontier 2013-02-04 / 02-04群OPEN** から開始。
2. **2013-02-04「パチスロ らんま1/2」（SANKYO）** を最優先で性能コア+resetBehavior v0.7収集し、未登録なら712件目として保存。
3. 続いて **魁!!男塾 ～天挑五輪大武會編～ → メガミリオネア ヴィーナスヴァージョン** をrepo重複確認して処理。
4. 4機種処理後、02-04同日群をメーカー/業界/当時DBで残存監査してCLOSED判定。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-06

### 宇宙戦艦ヤマト2
- 山佐ネクスト公式: `https://yamasa-next.co.jp/model_ymt2/`
- パチビー: `https://www.pachibee.jp/movies/index/9023`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6961`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/191/h.php`
- 当時攻略 Slogora: `https://slogora.seesaa.net/`
- 協会娯楽産業 試打動画: `https://www.youtube.com/watch?v=kSXSVu_jAwQ`
- pacnk: `https://pacnk.com/slot/tools/sh_yamato2.html`
- 5号機クロニクル（競合資料）: `https://5goki.com/yamasa`

### 次候補 / 境界
- K-Navi 2013年2月新台カレンダー: `https://p-kn.com/calendar/201302/`
- SANKYO公式 らんま1/2: `https://www.sankyo-fever.jp/collection/548/`
- P-WORLD らんま1/2: `https://www.p-world.co.jp/machine/database/6974`
- パチマガスロマガ らんま1/2: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/30/a.php`
- 当時スロスター らんま1/2: `https://ameblo.jp/slostar/entry-11429044578.html`
