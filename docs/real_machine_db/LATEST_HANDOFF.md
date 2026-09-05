# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **707**
- latestMachineAdded: **パチスロ攻殻機動隊S.A.C.**（Sammy）
- latestRecord: `docs/real_machine_db/machines/2013-01-07_pachislot-koukaku-kidoutai-sac.md`
- chronologicalFrontier: **2013-01-07**
- frontierLatestExactDateMachine: **パチスロ攻殻機動隊S.A.C.**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-01-07_GROUP__AUDIT_REMAINING_BEFORE_ADVANCE**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-12-17_slot-garo.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **706** / chronologicalFrontier **2012-12-17** / 12-17群OPEN。
- 12/17同日群を再検索し、既登録「SLOT牙狼」以外の具体的12/17導入候補を今回追加確認できなかったため **2012-12-17群をCLOSED**。
- 2012-12-18～2013-01-06境界を「導入日」「ホール導入開始」「新台」等で再監査。具体日を確認できる新規未登録候補を今回追加確認できず、既知アンカー2013-01-07へ前進。
- repo重複検索で「パチスロ攻殻機動隊S.A.C.」既存レコードなしを確認。
- **707件目: パチスロ攻殻機動隊S.A.C.（Sammy）** を登録。

## 今回追加 — パチスロ攻殻機動隊S.A.C.

### 性能コア

- releaseDate: **2013-01-07**。K-Navi、パチビー、HAZUSE、サミーネットワークス系当時発表で一致。
- 型式名: **攻殻機動隊F** / 検定番号 **2S1031**（HAZUSE）。
- systemType: **5号機 / AT / ゲーム数管理 + 自力CZ**。
- 機械割: **97.10 / 98.12 / 100.54 / 104.10 / 107.14 / 114.34%**。
- S.A.C.モード初当たり: **1/206.8 / 1/199.1 / 1/192.9 / 1/183.2 / 1/168.0 / 1/141.8**。HAZUSE、K-Navi、パチビー一致。
- 50枚ベース: **約30.1G/50枚**。
- AT「S.A.C.モード」: **1セット50G+α / 純増約+2.8枚/G**。
- エピソードAT: **40G固定 + 上乗せ告知**。
- CZ「高確率ゾーン」: 15G、AT期待度50%以上とHAZUSE掲載。
- モード別最大規定G: **通常A 1032G / 通常B 800G / 引き戻し250G / 天国100G / 超天国50G**。
- 通常Aの特殊天井: **1001G以降のAT当選でAT3セット + 次回天国**。

### resetBehavior v0.7

- 表記揺れ「攻殻機動隊S.A.C. / 攻殻機動隊F / Sammy / 初代攻殻」と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックンを組み替え、HAZUSE、K-Navi、当時攻略、旧DB、後年整理を横断。
- 初代固有の設定変更時契約を、ゲーム数・モード・状態まで一括して直接明示する高信頼表は今回確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の規定G・モード・状態保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の規定G・モード・状態・液晶契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時専用モード/状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 初代固有ガックン・初期出目等の変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の比較可能な公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 2017年「S.A.C. 2nd GIG」および2026年スマスロ版のリセット短縮天井・状態振り分け・有利区間仕様は別機種として除外。

## CONFLICT / 注意

- 今回、性能コアに重大な数値CONFLICTは確認せず。
- 初代と2017年2nd GIG、2026年スマスロ版は検索結果が混ざりやすい。後継機のリセット500G/699G等を初代へ流用しない。
- 通常AT終了後のモード移行率資料は存在するが、設定変更専用値ではないためv0.7の公開朝一数値へ混入しない。

## 2013-01-07同日群 / 次境界

- **パチスロ攻殻機動隊S.A.C.** 登録済み。
- 2013-01-07同日群は次回、HAZUSE/K-Navi/P-WORLD/パチビー/メーカー一覧で最終監査してCLOSED判定する。
- 次の具体的既知アンカーとして **2013-01-21「DARKER THAN BLACK -黒の契約者-」（SNKプレイモア）** をK-Naviで確認済み。
- その前に2013-01-08～01-20境界を具体導入日順に監査し、未登録機があれば日付順に先に処理する。
- その先の既知アンカーとして **2013-01-28「ミリオンゴッド-神々の系譜-ZEUS ver.」** をHAZUSEで確認済み。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 707 / chronologicalFrontier 2013-01-07 / 01-07群OPEN** から開始。
2. 01/07同日群をHAZUSE、K-Navi、P-WORLD、パチビー、メーカー/業界資料で最終監査。
3. 未登録01/07機がなければ01/07群をCLOSED。
4. **2013-01-08～01-20境界**を具体導入日順に監査し、未登録機があれば先に処理。
5. 境界に未登録機がなければ既知アンカー **2013-01-21「DARKER THAN BLACK -黒の契約者-」（SNKプレイモア）** をrepo重複確認→性能コア＋resetBehavior v0.7調査→次レコードとして登録。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### パチスロ攻殻機動隊S.A.C.
- K-Navi: `https://p-kn.com/slot/1762/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1031/`
- パチビー: `https://www.pachibee.jp/machines/index/212120000`
- 4Gamer / サミーネットワークス発表: `https://www.4gamer.net/games/021/G002122/20130107053/`
- Gamer / サミーネットワークス発表: `https://www.gamer.ne.jp/news/201301070038/`
- パチスロ収支アップ: `https://smaslo.man-soft.com/scuffle/kokakukidotai_zone.html`
- CrankySeven: `https://crankyseven.com/koukakukidoutai-pc.htm`

### 次候補 / 境界
- K-Navi DARKER THAN BLACK -黒の契約者-: `https://p-kn.com/slot/1772/`
- HAZUSE ミリオンゴッド-神々の系譜-ZEUS ver.: `https://data.hazuse.com/?genre=201&machine_code=2S1080`
