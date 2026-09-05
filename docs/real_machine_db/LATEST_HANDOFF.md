# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **714**
- latestMachineAdded: **メガミリオネア ヴィーナスヴァージョン**（ラスター）
- latestRecord: `docs/real_machine_db/machines/2013-02-04_mega-millionaire-venus-version.md`
- chronologicalFrontier: **2013-02-04**
- frontierLatestExactDateMachine: **メガミリオネア ヴィーナスヴァージョン**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-02-04_GROUP__NEXT_2013-02-18_SKY_GIRLS_AFTER_BOUNDARY_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-02-04_sakigake-otokojuku-tencho-gorin-daibukai.md` を確認。
- `INDEX.md` は19件地点の旧集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **713** / chronologicalFrontier **2013-02-04** / 02-04群OPEN。
- repo検索で未登録を確認後、**714件目: メガミリオネア ヴィーナスヴァージョン（ラスター）** を追加。

## 今回追加 — メガミリオネア ヴィーナスヴァージョン

### 性能コア

- releaseDate: **2013-02-04**。K-Navi全国一斉導入開始日。グリーンべるとは2013年2月上旬納品予定、P-WORLDは2013年02月表記で整合。
- 型式名: **メガミリオネアM** / 検定番号 **2S1158**。
- systemType: **5号機 / ボーナス非搭載ART / セットストック+継続抽選+ゲーム数上乗せ**。
- 機械割: **96.5 / 98.9 / 103.1 / 105.9 / 109.5 / 109.6%**。
- ART初当たり: **1/265 / 1/184 / 1/242 / 1/156 / 1/250 / 1/146**。
- ART「メガゲーム」: **1セット50G+α / 純増約+2.4枚/G / 基本約120枚 / 最大80%ループ**。
- 50枚ベース: **約20.5G/1000円**。2013-02-13 / 02-14の当時攻略2系統一致。
- 天井: **メガゲーム終了後800G**で前兆を経由してART。当時攻略2系統一致。
- 前作「メガミリオネア」（1セット100G・天井1200G）とは別機種。前作固有天井恩恵やモード仕様は転記していない。

### resetBehavior v0.7

- 設定変更時: **天井ゲーム数CLEAR_CONFIRMED**。2013年当時攻略2系統で一致。
- 設定変更後の通常天井: **800G**を新規カウント。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時液晶出目: **123スタート**。
- 単純電源OFF→ON時も液晶出目: **123スタート**。
- よって朝一123出目単独では設定変更/据え置き判別不可。
- 純据え置き時の800G内部天井進捗、モード/状態の完全保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の内部天井G・モード/状態の保持/再抽選契約: **UNVERIFIED_AFTER_RESEARCH**（液晶123のみ確認）。
- 設定変更時モード/状態の再抽選・引継ぎと公開振り分け数値: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目差等の変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetPenalties`: 設定変更で前日の800G天井進捗が消失。

## 2013-02-04同日群監査

K-Navi 2013年2月新台カレンダーの全国一斉導入開始日ベースで、2013-02-04パチスロは以下4機種:

1. パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～（山佐） — **711件目 / 登録済み**。
2. パチスロ らんま1/2（SANKYO） — **712件目 / 登録済み**。
3. 魁!!男塾 ～天挑五輪大武會編～（ロデオ） — **713件目 / 登録済み**。
4. メガミリオネア ヴィーナスヴァージョン（ラスター） — **714件目 / 今回登録**。

- 同カレンダー上で次のパチスロ具体導入日は **2013-02-18**。02-04群は今回 **CLOSED**。
- 02-05～02-17はK-Navi月間カレンダーに具体日付きパチスロなし。次回は別系統一覧/業界資料でも境界を最終監査してから02-18群へ進む。

## 次回再開地点

1. **recordCount 714 / chronologicalFrontier 2013-02-04 / 02-04群CLOSED** から開始。
2. **2013-02-05～02-17境界**をメーカー/業界/当時DBで最終監査。具体日付き未登録5号機があれば時系列優先で処理。
3. 漏れがなければ **2013-02-18「スカイガールズ～よろしく！ゼロ～」（TAKASAGO）** から性能コア+resetBehavior v0.7収集。repo未登録検索済み。
4. 同日群既知候補: **メタルスラッグ3（SNKプレイモア） → ヴァン・ヘルシング ハンティングラッシュ（藤商事）**。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### メガミリオネア ヴィーナスヴァージョン
- K-Navi: `https://p-kn.com/slot/1802/`
- K-Navi 2013年2月新台カレンダー: `https://p-kn.com/calendar/201302/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6976`
- P-WORLD / グリーンべると: `https://news.p-world.co.jp/articles/5639/greenbelt`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/22/luster_slot_22.php`
- 天井ハイエナ生活 2013-02-13: `https://macerate.seesaa.net/article/322077320.html`
- 目指せ月収20万！ 2013-02-14: `https://mezase20.com/blog-entry-781.html`
- pachinko’s blog: `https://pachinko.hatenablog.jp/entry/2013/03/megaMillionaire-venus`

### 次候補 / 境界
- K-Navi 2013年2月新台カレンダー: `https://p-kn.com/calendar/201302/`
