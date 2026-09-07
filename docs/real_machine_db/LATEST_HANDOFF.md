# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **936**
- latestRecordAdded: **パチスロヤッターマン**（三洋物産 / SANYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-09_pachislot-yatterman.md`
- chronologicalFrontier: **2015-11-09**
- frontierLatestMachine: **パチスロヤッターマン**
- schema: **resetBehavior v0.7**
- status: **2015-11-09_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.935 `2015-11-02_hana-no-keiji-sengoku-kabukimono-no-utage.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **935** / 2015-11-02群CLOSED。
- 11/03～11/08境界を再確認し、次未処理 **パチスロヤッターマン** をNo.936として追加。

## No.936 — パチスロヤッターマン
- record: `docs/real_machine_db/machines/2015-11-09_pachislot-yatterman.md`
- manufacturer: **三洋物産 / SANYO**
- releaseDate: **2015-11-09**
- formalModelName: **パチスロヤッターマンKH**
- inspectionNumber: **5S0822**
- generation/system: **5号機 ボーナス+ART / ゲーム数上乗せ+継続抽選型ART**

### performanceCore
- 機械割: **97.0 / 98.0 / 100.0 / 103.0 / 107.0 / 112.0%**。
- ART初当たり canonical: **1/482.9 / 452.9 / 426.9 / 387.5 / 340.8 / 298.4**。
- ボーナス合算: **1/159.8 / 153.8 / 148.3 / 143.1 / 138.3 / 133.8**。
- 50枚ベース: **約43G**。
- ART純増: **約2.0枚/G**。
- ヤッターボーナス: **約204枚**、ヤッター図柄揃い: **約33枚**。
- ART「ビックリドッキリRUSH」: **初期50G+α**。
- 天井①: **ボーナス or ART間700G**到達後の次回ヤッタールーレットでART確定。
- 天井②: **ヤッタールーレット9連続ART非突入**後の次回ヤッタールーレットでART確定。

### resetBehavior v0.7
- 設定変更: **天井RESET / 内部モード・状態RESELECT / 格納庫スタート**。
- 据え置き / 純電源OFF→ON: **天井・内部モード/状態CARRYOVER / 格納庫スタート**。
- 設定変更時のリセット専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定1の公開リセット時モード振り分け:
  - 通常 **75.0%**
  - 高確準備ショート **15.0%**
  - 高確準備ロング **7.5%**
  - 高確 **2.0%**
  - 超高確 **0.5%**
- 設定2～6も元ページに公開表があるが、現在のHTML抽出ではrowspan/列結合が崩れて列位置が曖昧。推定復元せず `PARTIAL_SOURCE_RENDERING_AMBIGUITY_AFTER_RESEARCH` として保存。
- 開始ステージは設定変更・純電断とも格納庫のため、格納庫単独では変更判別不可。
- 本機固有ガックン/初期出目/ランプ等による確定的即時変更判別: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### conflict / definition control
- ART初当たりは精密系列 **1/482.9～1/298.4** と、別解析の丸め系列 **1/483～1/294** が存在。設定6は丸めだけでは説明しづらいため平均せず `CONFLICT_SECONDARY_SETTING6` として保持。
- リセットモード表の設定2～6は、数値を捨てず、現存HTMLで列位置を安全に確定できないため推測転記しない。

## 2015-11-09群 — CLOSED_FOR_CURRENT_RESEARCH
K-Navi 2015年11月新台カレンダーの全国一斉導入開始日一覧と実レコードを照合。

処理済み:
1. パチスロヤッターマン — No.936

監査結果:
- K-Naviの2015-11-09全国一斉導入パチスロは本機1機のみ。
- 11/10～11/15に同カレンダー上の全国一斉導入パチスロなし。
- 次の強アンカーは **2015-11-16**。
- 同日候補: **パチスロ鬼武者3 時空天翔 / パチスロ ゴッドイーター 荒神Ver. / パチスロ ああっ女神さまっ / スーパーブラックジャック2 / パチスロ銀と金2**。
- 地域先行/後発や別日資料を発見した場合は将来QAで再OPEN可能。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaNextInspection: **2005-12_haisai-shiohime.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線No.936の新規収集と11/09群境界監査を優先し、遡及QA地点は前進させていない。

## 次回再開地点
1. **recordCount 936 / chronologicalFrontier 2015-11-09 / 11/09群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.936を再取得。
3. 11/10～11/15境界を再確認後、本線は **2015-11-16 パチスロ鬼武者3 時空天翔（Sammy）** から性能コア + resetBehavior v0.7で登録。
4. 続いて **ゴッドイーター 荒神Ver. → ああっ女神さまっ → スーパーブラックジャック2 → 銀と金2** を候補順に照合し、同日全メーカーを横断監査する。候補だけに限定しない。
5. 遡及QAは `2005-12_haisai-shiohime.md` から継続。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 既存COMPLETE_CORE/PARTIALの性能判定をreset QAだけを理由に不用意に崩さない。
- HTML表のrowspan崩れ等で列対応が不確かな場合、数字の合計から推定して埋めない。

## 主要出典 — 取得日 2026-09-08
### No.936 パチスロヤッターマン
- K-Navi: https://p-kn.com/slot/2353/
- K-Navi 2015年11月カレンダー: https://p-kn.com/calendar/201511/
- ニッカンアミューズメント 2015-09-10: https://www.nikkansports.com/amusement/pachinko/news/1536037.html
- ニッカンアミューズメント 2015-09-16: https://www.nikkansports.com/amusement/pachinko/news/1539152.html
- パチビー: https://www.pachibee.jp/machines/index/215100012
- P-WORLD: https://www.p-world.co.jp/machine/database/7845
- p-media検定通過: https://p-media.info/パチスロヤッターマン検定通過／三洋バージョン/
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/11914/
- スロパチクエスト: https://www.slopachi-quest.com/article/yatterman/
- pacnk: https://pacnk.com/slot/2015/yatterman/top.php
- 三洋物産検定通過回顧DB: https://q-and-a.hatenablog.com/entry/三洋物産の検定通過

## confidence
- No.936 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- No.936 formalModelName: INDUSTRY_HIGH_MULTI_SOURCE
- No.936 inspectionNumber: INDUSTRY_DB
- No.936 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.936 resetGameCounter: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.936 purePowerCycle: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.936 resetModeBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.936 resetModeDistributionSetting1: ANALYSIS_HIGH_DIRECT_TABLE
- No.936 resetModeDistributionSetting2to6: PARTIAL_SOURCE_RENDERING_AMBIGUITY
- No.936 resetDetection: UNVERIFIED_AFTER_RESEARCH
- 2015-11-09 group closure: ANALYSIS_HIGH_PERIOD_CALENDAR_CROSSCHECK
