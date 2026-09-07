# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **940**
- latestRecordAdded: **スーパーブラックジャック2**（ネット）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-16_super-blackjack2.md`
- chronologicalFrontier: **2015-11-16**
- frontierLatestMachine: **スーパーブラックジャック2**
- schema: **resetBehavior v0.7**
- status: **2015-11-16_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.939 `2015-11-16_pachislot-aa-megamisama.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **939** / chronologicalFrontier **2015-11-16** / 11-16群OPEN。
- GitHub検索で既存レコードがないことを確認し、handoff指定の次未処理 **スーパーブラックジャック2** をNo.940として追加。

## No.940 — スーパーブラックジャック2
- record: `docs/real_machine_db/machines/2015-11-16_super-blackjack2.md`
- manufacturer: **ネット（NET CORPORATION）**
- releaseDate: **2015-11-16**
- formalModelName: **スーパーブラックジャック2NG**
- inspectionNumber: **5S0900**
- generation/system: **5号機 / A+ART / リアルボーナス＋疑似ボーナスストック＋ART**

### performanceCore
- 機械割: **97.1 / 98.6 / 99.9 / 102.8 / 108.7 / 119.9%**。
- ボーナス合算: **1/111 / 105 / 99 / 89 / 70 / 49**。
- ART「ストックタイム」初当たり: **1/1585 / 1421 / 1270 / 1068 / 748 / 445**。
- 50枚ベース: **約35.6G**（別資料約36Gは丸め差）。
- ART純増: **約1.7枚/G**。
- Real BIG約236枚 / Real REG約88枚 / Rio BIG約120枚 / Rio REG約60枚。
- ARTストックタイム: **1セット50G**。
- 通常ゲーム数天井: **ボーナス後777G → Rioボーナス**。
- スイカ回数天井は「10回成立時100%」と「11回成立」の資料表現差があり **CONFLICT** として分離。

### resetBehavior v0.7
- 設定変更時: **抽選モードRESELECT / ゲーム数モードは専用モードC / 疑似ボーナスストックRESELECT**。
- 設定変更時抽選モード: **通常1 58% / 通常2 25% / 高確15% / SP高確2%**。
- 設定変更時ストック個数: **0個20% / 1個60% / 2個20%**。
- 設定変更時ストック種別: **ST1.2 / 赤7 5.5 / 緑7 21.3 / 黄7 18.5 / 白7 9.5 / REG44.0%**。
- 電源OFF→ONのみ: **抽選モードCARRYOVER / ゲーム数モードCARRYOVER / ストックCARRYOVER**。
- 設定変更時/純電断時の **天井までのゲーム数、初期ステージは当時直接資料でも調査中**。RESET/CARRYOVERを推測せずUNVERIFIED_AFTER_RESEARCH。
- 据え置きのみを純電断と独立比較した契約はUNVERIFIED_AFTER_RESEARCH。
- resetDetection: **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### 朝一公開数値
専用モードCの規定G数解除率:
- 33G: 3.0〜12.0%
- 77G: 20.0〜33.4%
- 111G: 3.0〜12.0%
- 222G: 6.0〜25.0%
- 333G: 20.0〜33.4%
- 444G: 3.0〜12.0%
- 555G: 6.0〜25.0%
- 666G: 3.0〜12.0%
- 777G: 100% / ceiling

## 2015-11-16群 — OPEN
処理済み:
1. パチスロ鬼武者3 時空天翔 — No.937
2. パチスロ ゴッドイーター 荒神Ver. — No.938
3. パチスロ ああっ女神さまっ — No.939
4. スーパーブラックジャック2 — No.940

次未処理強候補:
1. **パチスロ銀と金2**（タイヨーエレック）

確認事項:
- K-Navi/スロパチクエストは銀と金2のホール導入開始を **2015-11-16** としている。
- PiDEAの2015-10-31機械選定記事は **納品11/16〜** と記載。一方、別PiDEA内覧会記事には納品11/1予定という事前予定情報もあるため、最終導入日は後発の実導入DBを優先しつつ、納品予定の変遷は定義差として扱う。
- 銀と金2登録後も候補だけに限定せず、11/16同日を全メーカー横断で再監査してからCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_haisai-shiohime.md**
- retroQaNextInspection: **2005-12_dokonjo-gaeru-s.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**

### 今回QA — はいさい潮姫
- レコード `2005-12_haisai-shiohime.md` を再探索・更新。
- メーカー公式、P-WORLD旧DB/掲示板、後年回顧、2005-12-20当時実戦回顧まで資料系統を拡張。
- 設定変更/据え置き/純電源OFF→ONの本機固有直接契約、ガックン等の変更判別は追加固定できず、`PARTIAL_RESEARCH_EXHAUSTED` として明示。
- 通常時ゲーム数天井は確認されないため天井ゲーム数処理はNOT_APPLICABLE相当。
- 既存 `coreStatus: PARTIAL` は性能コア欠損に由来するため変更していない。

## 次回再開地点
1. **recordCount 940 / chronologicalFrontier 2015-11-16 / 11/16群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.940を再取得。
3. 本線は **2015-11-16 パチスロ銀と金2（タイヨーエレック）** を次未処理として、既存レコード重複を確認後、性能コア + resetBehavior v0.7で登録。
4. 銀と金2登録後、11/16同日全メーカーを横断監査し、漏れがない場合のみCLOSED。
5. 遡及QAは `2005-12_dokonjo-gaeru-s.md` から継続。既にPARTIAL resetBehaviorを持つため、当時業界/解析/旧DB/アーカイブを再探索し、追加直接根拠がなければ探索済み状態を記録して次へ進む。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. 全変更後、mainから新規レコード・QAレコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 専用ゲーム数モードと天井ゲーム数カウンタを混同しない。
- 当時資料が「調査中」と明記するreset項目は推測で埋めない。

## 主要出典 — 取得日 2026-09-08
### No.940 スーパーブラックジャック2
- NET公式: https://www.net-fun.co.jp/app/1439
- ハズセ: https://hazuse.com/machine/pachislot/5S0900/genre/209/
- man-soft: https://smaslo.man-soft.com/slot-kaiseki/superblackjack2.html
- ちょんぼりすた: https://chonborista.com/slot/net-slot/12276/
- スロパチクエスト: https://www.slopachi-quest.com/article/super-black-jack2/
- アタリ7: https://www.atari7.com/slot/date1444095081.php

### QA はいさい潮姫
- ユニバーサル公式: https://www.universal-777.com/product/slot/shiohime/
- P-WORLD: https://www.p-world.co.jp/machine/database/4059
- 2005年当時実戦回顧: https://plaza.rakuten.co.jp/sukisukiyamasa/diary/200512200001/

## confidence
- No.940 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_MANUFACTURER_ANNOUNCEMENT
- No.940 formalModelName/inspectionNumber: ANALYSIS_HIGH_PERIOD_DB
- No.940 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.940 resetModeState: ANALYSIS_HIGH_DIRECT_NUMERIC_MULTI_SOURCE
- No.940 resetStock: ANALYSIS_HIGH_DIRECT_NUMERIC_MULTI_SOURCE
- No.940 purePowerCycleModeStock: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.940 resetGameCounter: UNVERIFIED_AFTER_RESEARCH_PERIOD_SOURCE_INVESTIGATION
- No.940 resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- Haisai resetBehavior: PARTIAL_RESEARCH_EXHAUSTED
