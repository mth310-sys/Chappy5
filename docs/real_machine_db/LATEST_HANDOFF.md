# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **710**
- latestMachineAdded: **ミリオンゴッド-神々の系譜-ZEUS ver.**（エレコ / ユニバーサルエンターテインメント）
- latestRecord: `docs/real_machine_db/machines/2013-01-28_million-god-keifu-zeus-ver.md`
- chronologicalFrontier: **2013-01-28**
- frontierLatestExactDateMachine: **ミリオンゴッド-神々の系譜-ZEUS ver.**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-01-28_GROUP__AUDITED_TO_2013-02-03__NEXT_2013-02-04_YAMATO2**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-01-21_jujika-2.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **709** / chronologicalFrontier **2013-01-21** / 01-21群CLOSED / 01-22〜01-27監査済み。
- **710件目: ミリオンゴッド-神々の系譜-ZEUS ver.（エレコ）** を登録済み。
- ユニバーサル公式発表、HAZUSE、K-Navi、パチビーで **2013-01-28導入**を照合。
- 2013-01-28群を再監査し、今回ZEUS以外の具体日付き未登録5号機を確認できなかったため **01-28群CLOSED**。
- 2013-01-29〜02-03境界も監査し、次の具体日付きアンカーはK-Naviカレンダー上 **2013-02-04**。

## 今回追加 — ミリオンゴッド-神々の系譜-ZEUS ver.

### 性能コア

- releaseDate: **2013-01-28**。
- 型式名: **ミリオンゴッド-神々の系譜-ゼウスUV** / 検定番号 **2S1080**。
- systemType: **5号機 / ART / BR非搭載 / GOD GAME / G数上乗せ+セットストック**。
- 機械割: **97.6 / 99.5 / 103.0 / 107.2 / 110.9 / 116.6%**。
- GG初当たり: **1/439.7 / 1/394.1 / 1/396.4 / 1/314.6 / 1/337.1 / 1/254.0**。
- GOD揃い: **1/8192**、通常時赤7: **1/4096**。
- GOD GAME: **100G or 200G / 純増約+2.2枚/G**。
- GOD揃い時: **GG500G+1セット以上**系列。
- 50枚ベース: 信頼できる比較可能値を確定できず **UNVERIFIED_AFTER_RESEARCH**。口コミ体感値は不採用。

### 天井 / 救済

- 通常天井: **ART間1400G**。
- 天井ART: 50%以上ループ/50%以上継続率ストック系の解析情報あり。
- **ART間1200〜1399GでGG当選→単発終了**時、**50%で次回天井300G**へ短縮する救済を確認。
- 300G救済は設定変更専用恩恵ではなく、条件付き救済として分離して保存。

### resetBehavior v0.7

- 設定変更時: **天井ゲーム数CLEAR_CONFIRMED**。
- 設定変更時: **内部モードREROLL_CONFIRMED**。
- 設定変更時の具体モード振り分け率: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 純据え置き時の天井G・モード・300G救済状態の完全契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の天井G・モード・救済状態: **UNVERIFIED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶等による直接変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- resetPenalty: 前日ART間ゲーム数進捗は設定変更で消失。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT

- 純増は主系列 **約+2.2枚/G**。一部後年回顧に **約+2.0枚/G** があるため `CONFLICT_RETROSPECTIVE_ROUNDED_OR_MISSTATED_NET_INCREASE` として平均せず保持。

## 2013-01-28同日群 / 次境界

- ミリオンゴッド-神々の系譜-ZEUS ver.: 登録済み（710件目）。
- 2013-01-28群: **CLOSED**。
- 2013-01-29〜02-03: 今回具体日監査済み。追加未登録を確認できず。
- K-Navi 2013年2月カレンダーで次の **2013-02-04** 同日群を確認。
- 02-04候補: **パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～（山佐） / パチスロ らんま1/2（SANKYO） / 魁!!男塾 ～天挑五輪大武會編～（ロデオ） / メガミリオネア ヴィーナスヴァージョン（ラスター）**。
- 次回は上記をrepo重複確認し、未登録をキュー順に処理する。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 次回再開地点

1. **recordCount 710 / chronologicalFrontier 2013-01-28 / 01-28群CLOSED / 01-29〜02-03監査済み** から開始。
2. **2013-02-04「パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～」（山佐）** を最優先にrepo重複確認。
3. 未登録なら性能コア+resetBehavior v0.7を収集して711件目として登録。
4. 続いて同日群の **らんま1/2 → 魁!!男塾 ～天挑五輪大武會編～ → メガミリオネア ヴィーナスヴァージョン** を重複監査し、未登録を順次処理。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-06

### ZEUS
- ユニバーサルエンターテインメント / @Press: `https://www.atpress.ne.jp/news/32832`
- 4Gamer転載: `https://www.4gamer.net/games/200/G020087/20130122017/`
- HAZUSE: `https://data.hazuse.com/?genre=201&machine_code=2S1080`
- K-Navi: `https://p-kn.com/slot/1760/`
- パチビー: `https://www.pachibee.jp/machines/about/213010001`
- パチナビ: `https://pachinavi.net/machines/million-god-keifu-zeus/`
- クランキーセブン天井/設定変更: `https://crankyseven.com/sp/milliongod-zeus10-pc.htm`
- 天井ハイエナ生活: `https://macerate.seesaa.net/article/321978229.html`
- 5号機クロニクル: `https://5goki.com/universal`
- ユニバーサル大図鑑: `https://universalpachislot.blog.jp/archives/1028322752.html`

### 次候補 / 境界
- K-Navi 2013年2月新台カレンダー: `https://p-kn.com/calendar/201302/`
- 4Gamer / 魁!!男塾 2013-02-04ホール導入同時配信: `https://www.4gamer.net/games/021/G002122/20130204056/`
- HAZUSE 魁!!男塾: `https://hazuse.com/machine/pachislot/2S1180/`
