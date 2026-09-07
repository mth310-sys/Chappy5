# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **953**
- latestRecordAdded: **沖ドキ！トロピカル**（ユニバーサルブロス / 25φ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-02-01_okidoki-tropical-25.md`
- chronologicalFrontier: **2016-02-01**
- frontierLatestMachine: **沖ドキ！トロピカル**
- schema: **resetBehavior v0.7**
- status: **2016-02-01_GROUP_OPEN_AUDIT_PENDING**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.952 `2016-02-01_kyuin-hanachan-30.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **952** / chronologicalFrontier **2016-02-01** / 02-01群OPEN。
- mainに沖ドキ！トロピカル先行レコードがないことを確認してNo.953として追加。
- 25φ **沖ドキ！トロピカルHH** と30φ **沖ドキ！トロピカルHH-30** は別型式として確認できたため統合しない。30φはメーカー表記・導入時期にも資料差があり、後続境界で独立監査する。

## No.953 — 沖ドキ！トロピカル（25φ）
- record: `docs/real_machine_db/machines/2016-02-01_okidoki-tropical-25.md`
- manufacturer: **ユニバーサルブロス**
- releaseDate canonical: **2016-02-01**
- formalModelName: **沖ドキ！トロピカルHH**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / AT / 完全告知 / 擬似ボーナス / 25φ**

### performanceCore
- canonical機械割: **96.7 / 99.0 / 101.4 / 103.9 / 106.3 / 108.4%**。
- alternate解析系列: **97.0 / 99.7 / 101.7 / 103.9 / 106.3 / 108.4%**。設定1〜3が競合するため平均せず `PAYOUT_VARIANT_OR_SOURCE_CONFLICT`。
- BIG: **1/1428.8 / 1005.2 / 1134.2 / 823.8 / 934.5 / 692.5**。
- REG: **1/285.4 / 271.9 / 271.1 / 254.4 / 253.0 / 231.6**。
- 合算: **1/237.9 / 214.0 / 218.8 / 194.4 / 199.1 / 173.6**。
- 50枚ベース: 複数資料 **約39〜40G**、2016年当時単一解析 **46.2G**。`BASE_GAMES_CONFLICT_39_40_VS_46_2` として双方保持。
- AT純増: **約3.0枚/G**。
- BIG: **70G / 約210枚**、REG: **20G / 約60枚**。
- 通常A/B/天国準備天井: **1199G到達→次ゲーム告知**。一部1200G表記は表示定義差として保持。

### resetBehavior v0.7
- 設定変更時: **天井ゲーム数RESET/再抽選、内部モード再抽選**。
- 設定変更時モード振り分け（全設定共通公開値）:
  - 通常A **50.00%**
  - 通常B **15.23%**
  - 天国準備 **1.17%**
  - 引き戻し **33.59%**
- 引き戻しモード天井: **100〜199G**（資料によって200G天井表記）。
- 設定変更後は33.59%で引き戻しへ入るため、固定短縮ではなく `PROBABILISTIC_RESET_SHORTENING_VIA_MODE_RESELECT`。
- 据え置き: 天井ゲーム数・内部モード **CARRYOVER**。
- 電源OFF→ONのみ: 天井ゲーム数・内部モード **CARRYOVER**。
- setting changeとpure power cycleを同義扱いしない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: **引き戻しモード33.59%**。ただし「リセット後200G以内総当選率=33.59%」ではないため別定義として保持。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有ガックン/初期出目/ランプ等の設定変更確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- exact reset total hit probability within 200G: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / variant safeguard
- `PAYOUT_VARIANT_OR_SOURCE_CONFLICT`: 96.7/99.0/101.4/... と 97.0/99.7/101.7/... を平均しない。
- `BASE_GAMES_CONFLICT_39_40_VS_46_2`: 約39〜40Gと46.2Gを平均しない。
- `CEILING_PRESENTATION_DIFFERENCE_1199_PLUS_NEXT_GAME_VS_1200`: 詳細解析の1199G+次ゲーム告知と1200G表記を分離。
- `VARIANT_SPLIT_REQUIRED`: 25φ HH と30φ HH-30を統合しない。
- 30φはP-WORLD/中古実機資料でアクロス・HH-30を確認。一方で導入時期は2016-02-01と2016年3月の資料差があるため、今レコードへ混入させず後続時系列境界で再監査する。

## 2016-02-01群 — OPEN / AUDIT PENDING
今回までの処理済み:
1. **スーパーオアシス** — パイオニア — No.950。
2. **キュインハナチャン-25** — ニューギン — No.951。
3. **キュインハナチャン-30** — ニューギン — No.952。
4. **沖ドキ！トロピカル（25φ）** — ユニバーサルブロス — No.953。

### group audit status
- 02-01群は **まだCLOSEDにしない**。
- 一部当時導入一覧では2/1の本線として沖ドキ！トロピカルを確認できるが、全メーカー横断の残存監査をもう一段行ってからCLOSED判定する。
- 30φ「沖ドキ！トロピカル-30」は別型式・別メーカー表記で時期資料も競合するため、2/1群に機械的に追加しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-01_birei2.md**
- retroQaNextInspection: **2006-02_jinzo-ningen-kikaider-k.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規02-01群の収集を優先。遡及QA再開地点は変更しない。

## 次回再開地点
1. **recordCount 953 / chronologicalFrontier 2016-02-01 / 02-01群OPEN_AUDIT_PENDING** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.953をmainから再取得。
3. メーカー別一覧、新台一覧、業界記事、古DBを横断して **2016-02-01同日残存機** を最終監査。
4. **沖ドキ！トロピカル-30（HH-30 / アクロス）** の2016-02-01 vs 2016年3月導入資料差を再確認し、25φと別機種として適切な時系列位置へ置く。
5. 同日群の漏れがないことを十分確認できた場合のみ `2016-02-01_GROUP_CLOSED_FOR_CURRENT_RESEARCH` へ更新し、その次の未処理日/機種へ進む。
6. 遡及QAは `2006-02_jinzo-ningen-kikaider-k.md` から継続。
7. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 検定日/認定日/発表日/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・別variantのresetBehaviorを無条件流用しない。

## 主要出典 — 取得日 2026-09-08
### No.953 沖ドキ！トロピカル
- ユニバーサル公式: https://www.universal-777.com/product/slot/okidoki_tropical/
- グリーンべると: https://web-greenbelt.jp/00008353/
- K-Navi: https://p-kn.com/slot/2427/
- 一撃: https://1geki.jp/slot/okidoki_tropical/3/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/16618/
- みんスロ: https://minslo.com/%E6%B2%96%E3%83%89%E3%82%AD%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%AB-2/
- 時給2000円生活: https://jikyu2000.com/matome/okidoki_t/
- 中一商事25φ: https://store.shopping.yahoo.co.jp/nakaiticom/634.html
- P-WORLD 30φ: https://www.p-world.co.jp/machine/database/7996
- 中一商事30φ: https://store.shopping.yahoo.co.jp/nakaiticom/2020408.html

## confidence
- No.953 identity/25phiFormalModel: OFFICIAL_FAMILY_PLUS_SECONDARY_MACHINE_DATABASE
- No.953 exactReleaseDate: ANALYSIS_DATABASE_HIGH_WITH_INDUSTRY_DELIVERY_BOUNDARY
- No.953 performanceCore: ANALYSIS_HIGH_WITH_PAYOUT_AND_BASE_CONFLICTS
- No.953 resetBehavior: ANALYSIS_HIGH_DIRECT_NUMERIC
- No.953 powerCycleBehavior: ANALYSIS_HIGH_DIRECT
- No.953 resetDetection: RESEARCHED_NO_CONFIRMED_CHANGE_DETECTION
- 2016-02-01 group closure: NOT_YET_CLOSED / FINAL_AUDIT_PENDING
