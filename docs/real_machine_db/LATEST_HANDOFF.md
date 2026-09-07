# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **941**
- latestRecordAdded: **パチスロ銀と金2**（タイヨーエレック）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-16_pachislot-gin-to-kin2.md`
- chronologicalFrontier: **2015-11-16**
- frontierLatestMachine: **パチスロ銀と金2**
- schema: **resetBehavior v0.7**
- status: **2015-11-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.940 `2015-11-16_super-blackjack2.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **940** / chronologicalFrontier **2015-11-16** / 11-16群OPEN。
- handoff指定の次未処理 **パチスロ銀と金2** を既存パス不存在確認後、No.941として追加。

## No.941 — パチスロ銀と金2
- record: `docs/real_machine_db/machines/2015-11-16_pachislot-gin-to-kin2.md`
- manufacturer: **タイヨーエレック**
- releaseDate: **2015-11-16**
- formalModelName: **パチスロ銀と金2ZA**
- inspectionNumber: **5S0539**
- generation/system: **5号機 / A+ART / 周期シナリオ管理**

### performanceCore
- 機械割: **97.0 / 98.5 / 101.1 / 103.6 / 106.5 / 110.2%**。
- BIG: **全設定1/809.1**。
- ART初当たり: **1/412.1 / 381.9 / 332.9 / 295.1 / 266.2 / 242.8**。
- 50枚ベース: **34.73〜35.03G**。約34.8G/約35.0G表記は丸め差。
- ART「ヘルエッジロード」: **約1.6枚/G / 初期50G+α**。
- BIG: **312枚**。
- 通常天井: **12周期消化後の13周期目でART当選**。実ゲーム数目安約1060〜1100G。
- BIG成立で周期天井がリセットされる実挙動報告を当時解析で確認。

### resetBehavior v0.7
- 当時系解析DBに本機専用「リセット・設定変更」ページが存在することまでは確認。
- ただし専用本文が現存キャッシュから復元できず、設定変更時の周期数・シナリオ・内部状態の具体契約を直接固定できなかった。
- 機種名表記揺れ、型式`パチスロ銀と金2ZA`、タイヨーエレック、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/周期/シナリオ/ガックンを組み替え、公式系・業界記事・当時解析・旧DB・後年回顧を横断後のみ `UNVERIFIED_AFTER_RESEARCH` とした。
- settingChange game counter: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver game counter/scenario/state: **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycle game counter/scenario/state: **UNVERIFIED_AFTER_RESEARCH**。
- reset-specific shortened ceiling/mode distribution/benefit rate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 一般的な5号機や同メーカー別機種の挙動は流用していない。

## 2015-11-16群 — CLOSED_FOR_CURRENT_RESEARCH
処理済み:
1. パチスロ鬼武者3 時空天翔 — No.937
2. パチスロ ゴッドイーター 荒神Ver. — No.938
3. パチスロ ああっ女神さまっ — No.939
4. スーパーブラックジャック2 — No.940
5. パチスロ銀と金2 — No.941

同日監査:
- スロパチクエストの2015年導入日順一覧は11/16群を上記5機種として掲載。
- man-soft新台/天井一覧でも11/16導入として鬼武者3・銀と金2・ゴッドイーター荒神Ver.・SBJ2・ああっ女神さまっを確認。
- K-Navi/PiDEA/P-WORLD等で銀と金2の2015-11-16を個別照合。
- 今回の横断検索で11/16付の追加未登録5号機を具体的に固定できなかったため、現時点で群CLOSED。

## 次の時系列境界
- 次の強候補は **デビルマン3-悪魔ノ黙示録-**（エレコ）。
- スロパチクエスト導入日順一覧は **2015-11-23**、man-soft天井一覧は **2015-11-24** とするため、次回は11/17〜11/22境界監査後、11/23・11/24の導入日定義を当時業界/メーカー/ホールDBで照合してから登録する。
- 候補だけに限定せず11/23〜11/24同日帯を全メーカー横断で監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_haisai-shiohime.md**
- retroQaNextInspection: **2005-12_dokonjo-gaeru-s.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線No.941の調査と11/16群クローズを優先し、遡及QA地点は変更していない。

## 次回再開地点
1. **recordCount 941 / chronologicalFrontier 2015-11-16 / 11/16群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.941を再取得。
3. **2015-11-17〜11-22** の未登録5号機境界監査。
4. 次候補 **デビルマン3-悪魔ノ黙示録-** の11/23 vs 11/24導入日差を一次/当時資料で解消またはCONFLICT保持し、性能コア + resetBehavior v0.7で登録。
5. 11/23〜11/24帯を全メーカー横断監査し、漏れがない場合のみ次境界へ進む。
6. 遡及QAは `2005-12_dokonjo-gaeru-s.md` から継続。
7. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
8. 競合は平均せずCONFLICT/定義差として双方保存。
9. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 周期シナリオ天井と実ゲーム数目安を混同しない。
- 取得不能な専用リセットページの内容を推測復元しない。

## 主要出典 — 取得日 2026-09-08
### No.941 パチスロ銀と金2
- K-Navi: https://p-kn.com/slot/2359/
- PiDEA: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E9%8A%80%E3%81%A8%E9%87%912%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F%E3%80%8D%20
- P-WORLD: https://www.p-world.co.jp/machine/database/7850
- p-media: https://p-media.info/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%82%A8%E3%83%AC%E3%83%83%E3%82%AF%E3%81%8B%E3%82%892%E6%A9%9F%E7%A8%AE%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%EF%BC%8F%E3%80%8C%E9%BE%8D%E3%81%8C%E5%A6%82%E3%81%8F/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/20/a.php
- パチマガスロマガ小役/50枚: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/20/c.php
- スロパチクエスト: https://www.slopachi-quest.com/article/gin-kin2/
- pacnk: https://pacnk.com/slot/tools/sh_kintogin2.html
- man-softリセット一覧: https://smaslo.man-soft.com/slot-reset/
- man-soft天井一覧: https://smaslo.man-soft.com/slot-tenzyou-itiran/
- ちょんぼりすた: https://chonborista.com/slot/taiyo-slot/13285/

## confidence
- No.941 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_PERIOD_INDUSTRY
- No.941 formalModelName/inspectionNumber: INDUSTRY_DB_HIGH
- No.941 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.941 normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- No.941 resetGameCounter: UNVERIFIED_AFTER_RESEARCH
- No.941 resetModeState: UNVERIFIED_AFTER_RESEARCH
- No.941 purePowerCycle: UNVERIFIED_AFTER_RESEARCH
- No.941 resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
