# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **882**
- latestRecordAdded: **パチスロ 陸奥圓明流外伝 修羅の刻**（SANKYO）
- latestRecord: `docs/real_machine_db/machines/2015-04-20_shura-no-toki.md`
- chronologicalFrontier: **2015-04-20**
- frontierLatestMachine: **パチスロ 陸奥圓明流外伝 修羅の刻**
- schema: **resetBehavior v0.7**
- status: **2015-04-20_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.881 `2015-04-06_gogo-juggler.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **881件 / chronologicalFrontier 2015-04-06 / 04-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2015-04-07〜04-12境界を具体日/新台/スロット/パチスロで再監査し、今回追加すべき5号機を強く固定できず `2015-04-07_TO_2015-04-12_CLOSED_FOR_CURRENT_RESEARCH`。
- 2015-04-13についても「2015年4月13日 / 2015/04/13 / 4月13日導入」+ パチスロ/スロット/新台、当時カレンダー/検索を横断。強い同日ヒットはパチンコ側が中心で、未登録パチスロを固定できなかった。
- 2015-04-14〜04-19も境界検索で未登録5号機を強く固定できず、`2015-04-13_TO_2015-04-19_CLOSED_FOR_CURRENT_RESEARCH`。
- 次の強いアンカー **2015-04-20「パチスロ 陸奥圓明流外伝 修羅の刻」** をNo.882として追加。

## No.882 — パチスロ 陸奥圓明流外伝 修羅の刻

- record: `docs/real_machine_db/machines/2015-04-20_shura-no-toki.md`
- manufacturer: **SANKYO**
- releaseDate canonical: **2015-04-20**
- modelName: **パチスロ修羅の刻A**
- inspectionNumber: **4S0768**
- systemType: **5号機 AT / 擬似ボーナス+AT / ゲーム数管理**

### 性能コア

- 機械割: **97.2 / 98.8 / 100.8 / 105.1 / 108.4 / 110.3%**。
- 初当たり: **1/394.2 / 373.2 / 353.0 / 315.5 / 288.3 / 275.4**。
- 50枚ベース: **約34G/50枚**。
- AT「伝承RUSH」純増: **約3.0枚/G**。
- AT基本: **20G+α**。
- BIG 30G / SBB 10G / EX「修羅の刻」10G / REG 20G。擬似ボーナス終了後は必ずATへ移行。
- 通常最大天井: **1300G**。当時解析では1000G以降BIG以上、1200G以降SBB確定という段階恩恵あり。

### resetBehavior v0.7

- 設定変更: **天井G RESET_TO_0 / モード再抽選 / 高確以上確定 / 修羅珠0個 / 原則千葉道場**。
- 据え置き: **ハマりG・モード・状態・修羅珠を引継ぎ**。
- 純電源OFF→ON: 本機固有解析で **天井G・モード引継ぎ**を確認。朝一ステージは原則千葉道場。内部状態の純電断単独契約は資料が弱いため推定拡張せず `UNVERIFIED_AFTER_RESEARCH_FOR_STATE_ONLY`。
- 設定変更時モード: **通常A 約69.7〜70% / 通常B 約10.3〜10% / 天国20.0%**。
- 設定変更時状態: **低確0 / 高確約90 / 超高確約10%**。
- 天国は **100G以内当選**。一律のリセット専用固定短縮天井ではなく、モード再抽選による部分的早当たりとして定義分離。
- リセット恩恵: **高確以上確定 / 天国20%**。
- リセット不利: **前日ハマりG消滅 / 修羅珠蓄積消滅**。
- 変更判別: 高確示唆ステージ、修羅珠由来の朝一CZ等、宵越しゾーン前兆が材料。朝一ステージ単独では弱い。
- 本機固有ガックン契約は検索語を変えて再探索しても固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### source / definition control

- SANKYO公式オンライン博物館で2015.04、販売名/型式、純増約3.0枚/G、公式合成レンジを確認。
- HAZUSEで導入2015-04-20、型式 **パチスロ修羅の刻A**、検定 **4S0768**、50枚約34G、設定別初当たり/機械割を確認。
- 必勝本/K-Navi/パチ7/複数当時解析で導入日・主要性能を照合。
- リセット数値はすろぱちくえすと、期待値見える化、イチカツ等で相互整合。
- 設定変更時モード「約70/10/20」と精密「69.7/10.3/20.0」は丸め差として同系列。
- 1300G天井と1000G/1200G以降のボーナス格上げは定義が違うためCONFLICT扱いしない。

## 2015-04-20群

- **パチスロ 陸奥圓明流外伝 修羅の刻** — SANKYO — No.882
- 04-20群はまだ `OPEN`。今回の検索では修羅の刻が強く固定できたが、同日群の全メーカー最終監査は未完了。

## 次回再開地点

1. **recordCount 882 / chronologicalFrontier 2015-04-20 / 04-20_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.882を再確認。
3. **2015-04-20同日群を全メーカー横断で最終監査**。修羅の刻以外の未登録5号機があれば時系列/同日順で次レコードへ追加。
4. 同日群が閉じられれば `2015-04-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH` とし、次の具体日境界へ進む。
5. 欠損は表記揺れ・型式・メーカー名・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界一次・当時解析・古いDB・アーカイブ・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・兄弟機・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- HAZUSE パチスロ 修羅の刻: https://hazuse.com/machine/pachislot/4S0768/
- K-Navi パチスロ 修羅の刻: https://p-kn.com/slot/2237/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2554/1/51584
- パチ7 修羅の刻: https://pachiseven.jp/machines/4460/cutout/94

### 修羅の刻
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/614/
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/4S0768/genre/201/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/36/l.php
- すろぱちくえすと リセット: https://www.slopachi-quest.com/article/syuranotoki-reset/
- 期待値見える化 朝一リセット: https://slotjin.com/zone/shuranotoki/
- イチカツ！朝一設定変更: https://ichikatsu.com/shuranotoki-asaiti/
- すろぱちくえすと 天井/スペック: https://www.slopachi-quest.com/article/syura-time/
- PiDEA X 当時評価: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E4%BF%AE%E7%BE%85%E3%81%AE%E5%88%BB%E3%83%BB%E8%B6%85%E7%A0%94%E7%A9%B6%E3%80%8D
