更新日: 2026-09-08

## 現在地点
- recordCount: **1010**
- latestRecordAdded: **SLOT魔法少女まどか☆マギカ2**（メーシー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-09-20_slot-madoka-magica2.md`
- chronologicalFrontier: **2016-09-20**
- frontierLatestMachine: **SLOT魔法少女まどか☆マギカ2**（メーシー）
- schema: **resetBehavior v0.7**
- status: **2016-09-13_TO_09-19_CLOSED_FOR_CURRENT_RESEARCH / 2016-09-20_GROUP_OPEN**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1009 `2016-09-12_tenkahubu3.md` を再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。
- 開始時点は recordCount 1009 / 2016-09-12群CLOSED / 次は09/13〜09/19境界監査→09/20群。
- HAZUSEの2016年9月導入境界は 09/05 → 09/12 → 09/20 → 09/26。09/13〜09/19を日別・新台・導入・メーカー系で再探索したが、全国導入本線へ固定できる未登録パチスロを今回確認できず `2016-09-13_TO_09-19_CLOSED_FOR_CURRENT_RESEARCH` とした。
- 09/20群の先頭として `SLOT魔法少女まどか☆マギカ2` をNo.1010登録。
- 09/20同日にはK-Naviで `乱嵐エイサー-30`（オーイズミ）が2016-09-20導入と確認できたため、**09/20群はOPENのまま**。一撃月次カレンダーは09/20をまどマギ2のみ掲載しているが、同日機種漏れがあるため単独では完全性根拠にしない。
- 月内未配置候補のうち `パチスロ スーパー海物語 IN 沖縄2` はK-Navi・当時/後年解析で **2016-09-05** 導入を確認。既過去群への遡及漏れ候補として要確認。
- `ニューアイムジャグラーEX-KA` は北電子公式で検定情報、別資料で2016年9月リリースまでは確認したが、今回具体的ホール導入日を固定できていないため月表記のまま保留。

## No.1010 — SLOT魔法少女まどか☆マギカ2
- manufacturer: **メーシー / UNIVERSAL ENTERTAINMENT**
- releaseDate: **2016-09-20**
- formalModelName: **SLOT魔法少女まどか☆マギカ2／MM**
- certificationNumber: **6S0862**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.5 / 99.6 / 101.1 / 104.4 / 107.4 / 111.0%**。
- BIG: **1/297.9 / 297.9 / 290.0 / 280.1 / 265.3 / 250.1**。
- ART初当たり: **1/424.4 / 401.5 / 376.4 / 333.8 / 299.7 / 267.4**。
- BIG+ART合算: **1/175.0 / 171.0 / 163.8 / 152.3 / 140.7 / 129.3**。
- ベース: canonical **約31G/50枚**。一部実戦/回顧32.6Gは条件差候補として別保持。
- ART純増: **約1.5枚/G**。ボーナス込み約2.0枚/Gは別定義。
- BIG: **約150枚**。
- ART「マギカ☆ラッシュ」: **1セット50G+α**。
- 通常天井: **ボーナス&ART間1000G**。

### resetBehavior v0.7
- 設定変更: **天井RESET / 600Gへ短縮 / 内部状態RESELECT**。
- 据え置き: **天井・内部状態CARRYOVER**。
- 純電源OFF→ON: **天井・内部状態CARRYOVER**。
- 設定変更後内部状態:
  - 設定1〜3: **低確59.8 / 高確34.0 / 超高確6.3%**（高確以上40.3%）。
  - 設定4〜6: **低確39.8 / 高確53.9 / 超高確6.3%**（高確以上60.2%）。
- 朝一主要恩恵は **1000G→600Gの400G天井短縮** と内部高確再抽選。
- ガックン: **無効/判別不可**とする解析複数一致。
- 設定変更後の特殊RT状態を利用し、ベルこぼし前の逆押しリプレイ停止形から据え置き濃厚を取れる実用判別あり。ただしホールの数G回しで無効化され得るためメーカー保証契約ではない。
- 液晶ステージ: 一撃は電断時引継ぎ、なな徹/スロパチクエスト系は鹿目家ステージと整理し `POWER_CYCLE_LCD_STAGE` CONFLICT。
- 穢れポイントの設定変更時の正確契約は、初代との混同を避けて再探索したが本機固有の高信頼直接表を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### data quality
- ユニバーサル公式現行アーカイブでメーシー・5号機・ボーナス+ART・2016年9月発売を確認。
- HAZUSEで導入2016-09-20、正式型式、検定番号を確認。一撃・K-Naviも09/20で一致。
- 一撃 / なな徹 / スロパチクエストで設定変更600G天井、状態再抽選、電断時天井・状態引継ぎが一致。
- 電断時の液晶表示だけ資料差があるためCONFLICT保持。内部契約は一致。

## 2016-09-13〜09-19 — CLOSED FOR CURRENT RESEARCH
- HAZUSE月間境界は09/12→09/20。
- 日別検索・新台カレンダー・メーカー系再探索で、この区間に全国導入本線として固定できる未登録パチスロを今回確認できず。

## 2016-09-20群 — OPEN
登録済み:
- **SLOT魔法少女まどか☆マギカ2**（メーシー） — No.1010

次の強候補:
- **乱嵐エイサー-30**（オーイズミ） — K-Naviでホール導入開始2016-09-20を確認。次回は型式/検定番号、機械割、BIG/REG、ベース、獲得枚数、設定変更/据え置き/電断、変更判別を収集しNo.1011候補とする。

同日/近傍監査:
- 一撃月次カレンダーは09/20をまどマギ2のみ掲載するが、乱嵐エイサー-30が別資料で同日確認できるため、掲載漏れ前提で全メーカー横断を継続。
- `パチスロ スーパー海物語 IN 沖縄2` は09/05導入確認。No.100x以前の09/05群に既登録か検索し、未登録なら遡及漏れとして追加する。
- `ニューアイムジャグラーEX-KA` は2016年9月リリース・検定情報まで確認。具体導入日を固定後に時系列へ配置。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_kengou-musashi.md**
- retroQaNextInspection: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規本線を優先し、遡及QA地点は変更なし。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1010を再取得。
2. **1010件 / 2016-09-20群OPEN** から再開。
3. 最優先で **`乱嵐エイサー-30`（オーイズミ）**をNo.1011候補として性能コア+resetBehavior v0.7収集。
4. 09/20同日群を全メーカー横断で監査し、1geki掲載機だけでCLOSEDにしない。
5. `パチスロ スーパー海物語 IN 沖縄2` がDB既登録か最新main検索。未登録なら09/05群への遡及漏れとして追加し、chronologicalFrontierは09/20のまま保持。
6. `ニューアイムジャグラーEX-KA` の具体導入日を公式/業界/当時解析/古DBで固定する。
7. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索後のみ確定。競合は平均せずCONFLICT。
8. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。

## 主要出典 — 取得日 2026-09-08
### No.1010 SLOT魔法少女まどか☆マギカ2
- UNIVERSAL公式: https://www.universal-777.com/product/slot/slot_madoka_magica2/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0136/
- 一撃 機種: https://1geki.jp/slot/s_madomagi2/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_madomagi2/3/
- K-Navi: https://p-kn.com/slot/2590/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/45/a.php
- なな徹 朝一: https://nana-press.com/kaiseki/machine/50/904/
- スロパチクエスト reset: https://www.slopachi-quest.com/article/madomagi2-reset/
- SLOT HACK: https://slothack.net/matome/1563/

### 境界 / 次候補
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- 一撃2016年9月: https://1geki.jp/newmachinecalender/201609/
- 乱嵐エイサー-30 K-Navi: https://p-kn.com/slot/2571/
- スーパー海物語IN沖縄2 K-Navi: https://p-kn.com/slot/2572/
- スーパー海物語IN沖縄2 ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/23038/
- ニューアイムジャグラーEX-KA 北電子検定情報: https://www.kitadenshi.co.jp/slot-kentei/newimjugglerex-ka/
