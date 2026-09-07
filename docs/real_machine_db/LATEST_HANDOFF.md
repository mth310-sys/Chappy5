# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **942**
- latestRecordAdded: **デビルマンIII-悪魔ノ黙示録-**（エレコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-24_devilman3-akuma-no-mokushiroku.md`
- chronologicalFrontier: **2015-11-24**
- frontierLatestMachine: **デビルマンIII-悪魔ノ黙示録-**
- schema: **resetBehavior v0.7**
- status: **2015-11-23_TO_2015-11-24_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.941 `2015-11-16_pachislot-gin-to-kin2.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **941** / chronologicalFrontier **2015-11-16** / 11-16群CLOSED。
- 2015-11-17〜11-22境界を導入日順一覧・K-Navi月間カレンダー・HAZUSEカレンダーで再監査し、追加未登録5号機を具体的に固定できず。
- handoff指定の次候補 **デビルマンIII-悪魔ノ黙示録-** を既存パス不存在確認後、No.942として追加。

## No.942 — デビルマンIII-悪魔ノ黙示録-
- record: `docs/real_machine_db/machines/2015-11-24_devilman3-akuma-no-mokushiroku.md`
- manufacturer: **エレコ**
- canonical releaseDate: **2015-11-24**
- releaseDate conflict: **2015-11-23 vs 2015-11-24**
- formalModelName: **デビルマンIIIDM**
- inspectionNumber: **5S0933**
- generation/system: **5号機 / A+ART / CZ / パワー管理+セットストック型ART**

### performanceCore
- 機械割: **97.2 / 98.4 / 101.0 / 105.4 / 110.3 / 116.1%**。
- ART初当たり: **1/467.51 / 451.05 / 417.40 / 378.20 / 344.07 / 275.11**。
- サバトチャンス: **1/266.41 / 254.02 / 254.02 / 237.45 / 237.45 / 215.58**。
- 50枚ベース: **約41.5G**。約40G表記は丸め差。
- ART純増: **約2.0枚/G**。
- ボーナス: **59枚を超える払い出しで終了**。
- 天井①: **ボーナス＆ART間999G → ART**。
- 天井②: **ART間1666G → ART**。

### resetBehavior v0.7
- 設定変更時は黙示録モード低確A/B/Cから再選択する公開振り分けあり。
- 公開朝一数値（低確A/B/C）:
  - 設定1 **65.0 / 25.0 / 10.0%**
  - 設定2 **71.9 / 25.0 / 3.1%**
  - 設定3 **65.0 / 25.0 / 10.0%**
  - 設定4 **71.9 / 25.0 / 3.1%**
  - 設定5 **65.0 / 25.0 / 10.0%**
  - 設定6 **62.5 / 18.8 / 18.8%**
- 一方、当時解析の朝一表は **設定変更時の天井 / 電源ON・OFF時の天井を「調査中」** としている。
- settingChange ceiling game counter: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver ceiling/mode/state: **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycle ceiling/mode/state: **UNVERIFIED_AFTER_RESEARCH**。
- reset-specific shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection/gakkun: **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## releaseDate CONFLICT
- すろぱちくえすと2015年導入日順一覧: **2015-11-23**。
- K-Navi全国一斉導入カレンダー/機種ページ、ちょんぼりすた、man-soft、当時予定引用資料: **2015-11-24**。
- K-Naviは「全国一斉導入開始日」を明示しており、複数独立資料も11/24で一致するためcanonicalを2015-11-24とした。
- 11/23値は削除せず `CONFLICT_RELEASE_DATE_2015_11_23_VS_2015_11_24` として保持。

## 2015-11-17〜11-24帯 — CLOSED_FOR_CURRENT_RESEARCH
- K-Navi 2015年11月カレンダーでは11/16の次のパチスロ導入枠は11/24で、本機のみ掲載。
- HAZUSE新台カレンダーも2015年11月の具体日として11/02, 11/09, 11/16, 11/24, 11/30を列挙。
- すろぱちくえすとだけ本機を11/23導入とするため、11/23〜11/24を同一境界帯として扱った。
- PiDEA設置期限一覧にはキュインハナチャン25/30の「2015-11-24」表記があるが、当時グリーンべるとは2015-12-21発表・2016-01-31納品予定、HAZUSEは2016-02-01導入と明記するため、11/24導入機としては採用しない。
- 現時点で本機以外の11/17〜11/24未登録5号機を具体的に固定できなかったためCLOSED。

## 次の時系列境界
- 次の強い具体日群は **2015-11-30**。
- 現時点で強候補:
  1. **鉄拳3rd エンジェルVer.**
  2. **スーパーリノMAX**
  3. **パチスロ緋弾のアリア**
  4. **スーパーオアシス**
  5. **ユルビスカス-30**
- 次回は11/25〜11/29境界監査後、11/30群をK-Navi/HAZUSE/P-WORLD/当時業界資料で全メーカー横断し、最初の未処理機種から登録する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_haisai-shiohime.md**
- retroQaNextInspection: **2005-12_dokonjo-gaeru-s.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線No.942と11/17〜11/24境界監査を優先し、遡及QA地点は変更していない。

## 次回再開地点
1. **recordCount 942 / chronologicalFrontier 2015-11-24 / 11/23〜11/24帯CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.942を再取得。
3. **2015-11-25〜11-29** の未登録5号機境界監査。
4. **2015-11-30群**を全メーカー横断し、最初の未処理機種から性能コア + resetBehavior v0.7で登録。
5. 強候補は鉄拳3rd エンジェルVer. / スーパーリノMAX / 緋弾のアリア / スーパーオアシス / ユルビスカス-30。候補に限定せず漏れ監査する。
6. 遡及QAは `2005-12_dokonjo-gaeru-s.md` から継続。
7. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
8. 競合は平均せずCONFLICT/定義差として双方保存。
9. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 当時解析が「調査中」とした天井契約を推測でRESET/引継ぎにしない。
- 5号機クロニクル本機欄のように別機種情報混入が疑われる資料は、整合確認なしに数値採用しない。

## 主要出典 — 取得日 2026-09-08
### No.942 デビルマンIII-悪魔ノ黙示録-
- K-Navi機種: https://p-kn.com/slot/2397/
- K-Navi 2015年11月カレンダー: https://p-kn.com/calendar/201511/
- P-WORLD: https://www.p-world.co.jp/machine/database/7910
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/14447/
- pacnk: https://pacnk.com/slot/tools/sh_devilman3.html
- man-soft: https://smaslo.man-soft.com/slot-kaiseki/devilman3.html
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/96/eleco_slot_96.php
- すろぱちくえすと2015導入一覧: https://www.slopachi-quest.com/article/2015-new/
- P-Summa: https://psumma.jp/pachislo/18218/
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- PiDEA設置期限一覧: https://www.pidea.jp/articles/1620982702
- グリーンべると キュインハナチャン発表: https://web-greenbelt.jp/00008317/

## confidence
- No.942 exactReleaseDate: CONFLICT_HIGH_CANONICAL_2015_11_24
- No.942 formalModelName/inspectionNumber: INDUSTRY_DB_HIGH
- No.942 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.942 normalCeiling: ANALYSIS_HIGH
- No.942 resetStateDistribution: ANALYSIS_SINGLE_PUBLIC_NUMERIC_TABLE
- No.942 settingChangeCeilingCounter: UNVERIFIED_AFTER_RESEARCH
- No.942 carryOver: UNVERIFIED_AFTER_RESEARCH
- No.942 purePowerCycle: UNVERIFIED_AFTER_RESEARCH
- No.942 resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
