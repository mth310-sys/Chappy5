# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **927**
- latestRecordAdded: **パチスロ百花繚乱サムライガールズ**（DAXEL）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-26_hyakka-ryoran-samurai-girls.md`
- chronologicalFrontier: **2015-10-26**
- frontierLatestMachine: **パチスロ百花繚乱サムライガールズ**
- schema: **resetBehavior v0.7**
- status: **2015-10-26_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2015-10-27_TO_2015-11-01_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2015-11-02_GROUP_NEXT**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.926 `2015-10-26_kikou-senki-dragonar.md` を再取得。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **926** / chronologicalFrontier **2015-10-26** / `2015-10-26_GROUP_OPEN`。
- handoff指定の次未処理 **パチスロ百花繚乱サムライガールズ** をNo.927として追加。
- handoffで「2015-10-26近辺」とされていた **ハイスクールD×D** は、KONAMI公式が **2015-11-02より全国ホール稼働開始** と明記しているため10/26群から除外し、11/02群へ送った。

## No.927 — パチスロ百花繚乱サムライガールズ

- record: `docs/real_machine_db/machines/2015-10-26_hyakka-ryoran-samurai-girls.md`
- manufacturer: **DAXEL**
- releaseDate: **2015-10-26**（一部地域11/02の資料差を地域ラグとして保持）
- generation/system: **5号機 新基準AT / 周期減算 + 擬似ボーナス1G連**

### performanceCore

- 機械割: **97.3 / 99.5 / 100.7 / 104.7 / 107.7 / 113.1%**。
- S-BIG: **1/1975.8 → 1/1486.5**。
- BIG: **1/394.6 → 1/242.4**。
- REG: **1/509.1 → 1/300.7**。
- ボーナス合算目安: **約1/200 → 約1/123**。
- 50枚ベース: **約47G**。
- 擬似ボーナスAT純増: **約3.0枚/G**。
- ハーレムボーナス: **50G+α**、1G連期待度約40%。超ハーレムボーナスは1G連期待度約80%。
- 通常ゲーム数天井: **ボーナス間999G**。

### resetBehavior v0.7

- 設定変更: **天井RESET / 内部モード再抽選 / ステージ再抽選**。
- 設定変更時モード: **通常A 100%**。
- 電源OFF→ONのみ: **天井 / 内部モード / ステージ CARRYOVER**。
- 据え置き: 公開電源比較から朝一主要要素は **CARRYOVER_SUPPORTED**。
- 設定変更専用周期天井振り分け（全設定共通）:
  - 1周期 **37.7%**
  - 2周期 **1.6%**
  - 3周期 **24.9%**
  - 4周期 **1.6%**
  - 5周期 **16.3%**
  - 6周期 **1.6%**
  - 7周期 **16.3%**
- リセット時は最大7周期で、1周期天井が約38%と高い。
- 設定変更時超高確スタート: **設定1〜3 25.0% / 設定4〜6 30.5%**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: 朝一0GでNeXTチャンス表示/デモ復帰しない状態を据え置き濃厚とする当時の実戦観察あり。ただし確定契約ではないため `ANALYSIS_SINGLE_OBSERVATIONAL`。本機固有ガックンは再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### conflicts / missing

- `RELEASE_DATE`: K-Navi/すろぱちくえすと/2015年導入一覧は **2015-10-26**、ちょんぼりすたは **2015-11-02**。別当時資料に「一部地域では翌週11/2」とあるため、全国最速基準10/26 + 地域ラグとして双方保持。
- `SAME_NAME_2021_CONTAMINATION_RISK`: 2021年エンターライズ6.1号機の同名近似機（機械割98.1〜111.1%、約38.7G/50枚、純増3.5枚/G等）は別機種のため混入させない。
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`。
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。

## 2015-10-26群 時系列監査

処理済み:
1. **想定科学パチスロ STEINS;GATE 廻転世界のインダクタンス — No.925**
2. **パチスロ機甲戦記ドラグナー — No.926**
3. **パチスロ百花繚乱サムライガールズ — No.927**

- 機種名/メーカー/新台/導入日/10月26日/10月下旬の表記を変え、当時新台一覧・業界記事・解析DBを横断したが、この3機以外に **2015-10-26全国導入と安全に固定できる未登録5号機** を今回追加確認できなかった。
- **ハイスクールD×DはKONAMI公式で2015-11-02全国稼働開始**のため10/26群から除外。
- よって **2015-10-26_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 2015-10-27〜2015-11-01 境界監査

- 10/27〜11/01について導入日・新台・メーカー別表記を変えて再確認したが、全国ホール導入日を具体日付きで固定できる未登録5号機を今回確認できなかった。
- **2015-10-27_TO_2015-11-01_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- 次の明確な導入群は **2015-11-02**。

## 2015-11-02群 — 次回OPEN候補

K-Naviの2015年11月導入カレンダー、各機種ページ、メーカー/業界資料で以下を強候補として確認。候補だけで閉じず同日全メーカーを再監査する。

1. **パチスロ龍が如く OF THE END — タイヨーエレック**
2. **ぱちスロAKB48 バラの儀式 — 京楽**
3. **パチスロガールズ＆パンツァー — 平和**
4. **ハイスクールD×D — KPE**（KONAMI公式で11/02全国稼働開始）
5. **銀河機攻隊 マジェスティックプリンス — D-light**
6. **パチスロ IS〈インフィニット・ストラトス〉 — SANKYO**
7. **K-Navi同日カレンダーで後続するベルコ系を含め、残りメーカーを必ず全件監査**。

## 遡及 resetBehavior QA

- 今回 `2005-10_devilman3.md` を再取得し、既にv0.7相当の `resetBehavior` セクションと再探索メモが存在することを確認したため、性能コア/既存QAを無駄に更新しなかった。
- デビルマン3の resetBehaviorQA は `PARTIAL` のまま。初代2005年版固有の設定変更/据え置き/純電断/ガックンは、後継2010/2015年版を流用せず未確定として保持済み。
- retroQaScanConfirmedThrough: **2005-10_devilman3.md**
- retroQaNextInspection: **2005-11_demashita-hakushon-daimaou.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE / NO_DUPLICATE_UPDATE**

## 次回再開地点

1. **recordCount 927 / chronologicalFrontier 2015-10-26 / 10/26群CLOSED / 10/27〜11/01境界CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.927を再取得。
3. 本線: **2015-11-02群OPEN**。まず **パチスロ龍が如く OF THE END** を性能コア+resetBehaviorで登録。
4. 続けて **AKB48 バラの儀式 → ガールズ＆パンツァー → ハイスクールD×D → マジェスティックプリンス → IS〈インフィニット・ストラトス〉** と進め、ベルコ系を含む11/02全メーカーを再監査。
5. 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。
6. 遡及QA: `2005-11_demashita-hakushon-daimaou.md` から順次、resetBehavior未収集機を確認。既収集なら重複更新せず次へ進む。
7. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 既存COMPLETE_COREの性能完了判定とreset QA状態を分離。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 同名/近似名の別年式機を混入させない（百花繚乱2015 DAXEL vs 2021 Enterrise）。
- 競合値は平均せずCONFLICT/定義差として双方保持。

## 主要出典 — 取得日 2026-09-08

### No.927 パチスロ百花繚乱サムライガールズ
- グリーンべると（2015-10-06）: https://web-greenbelt.jp/00008122/
- 日刊スポーツ（2015-10-07）: https://www.nikkansports.com/amusement/pachinko/news/1549594.html
- K-Navi: https://p-kn.com/slot/2375/
- すろぱちくえすと解析まとめ: https://www.slopachi-quest.com/kisyubetsu/hyakkaryouran-samuraigirls/
- すろぱちくえすと天井: https://www.slopachi-quest.com/article/hyakkaryouran-samuraigirls/
- ちょんぼりすた: https://chonborista.com/slot/daxel-slot/12286/
- 5号機クロニクル DAXEL: https://5goki.com/daxel
- 真パチスロ備忘録（2015-12-05）: https://sin-surobi.com/hyakkaryouransamurai/13372/

### 境界 / 次群
- KONAMI公式 ハイスクールD×D全国稼働開始2015-11-02: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_151124.html
- K-Navi 龍が如く OF THE END: https://p-kn.com/slot/2360/
- K-Navi ガールズ＆パンツァー: https://p-kn.com/slot/2361/
- K-Navi ハイスクールD×D: https://p-kn.com/slot/2352/
- K-Navi 銀河機攻隊マジェスティックプリンス: https://p-kn.com/slot/2343/

## confidence

- No.927 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_REGIONAL_LAG_NOTE
- No.927 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.927 settingChangeBehavior: ANALYSIS_HIGH
- No.927 carryOverBehavior: ANALYSIS_HIGH_DIRECT_POWER_COMPARISON
- No.927 purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_POWER_COMPARISON
- No.927 resetNumericData: ANALYSIS_HIGH
- No.927 resetDetection: ANALYSIS_SINGLE_OBSERVATIONAL / GACKUN_NONE_CONFIRMED_AFTER_RESEARCH
- No.927 advantageousSectionReset: NOT_APPLICABLE
- 2015-10-26 boundary: CLOSED_FOR_CURRENT_RESEARCH
- 2015-10-27_TO_2015-11-01 boundary: CLOSED_FOR_CURRENT_RESEARCH
- next group: 2015-11-02 OPEN
- retroQaCursor: `2005-11_demashita-hakushon-daimaou.md`
