# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **962**
- latestRecordAdded: **沖ドキ！トロピカル-30**（アクロス）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-03-14_okidoki-tropical-30.md`
- chronologicalFrontier: **2016-03-14**
- frontierLatestMachine: **沖ドキ！トロピカル-30**
- schema: **resetBehavior v0.7**
- status: **2016-03-14_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.961 `2016-03-14_yurubiscus-30.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **961** / chronologicalFrontier **2016-03-14** / 03-14群OPEN。
- handoff指定の次機種 **沖ドキ！トロピカル-30** を、既存25Φ版との型式・メーカー・導入時期差まで再調査しNo.962で追加。

## No.962 — 沖ドキ！トロピカル-30
- record: `docs/real_machine_db/machines/2016-03-14_okidoki-tropical-30.md`
- manufacturer: **アクロス**
- releaseDate canonical: **2016-03-14**
- formalModelName: **沖ドキ！トロピカルHH-30**
- generation/system: **5号機 / AT / 擬似ボーナス / 完全告知 / 30Φ**

### identity / variant判定
- 25Φ版は **ユニバーサルブロス / 沖ドキ！トロピカルHH**、30Φ版は **アクロス / 沖ドキ！トロピカルHH-30**。同名近似でも正式型式・メーカーが分かれるため独立レコード化。
- ユニバーサル公式は25Φ/30Φを同一製品ページに掲載するが、グリーンべると2016-02-26当時記事は30Φ版を「好評稼働中機の30φバージョン」として後発発表し、3/6納品予定と報道。
- 後年導入年表に3/14表記があるため30Φ全国導入canonicalを3/14とする。一撃30Φ個別ページの2/1表記は25Φ初販との混同可能性があるため削除せず `CONFLICT_RELEASE_DATE_30PHI_0314_VS_MERGED_0201` として保持。

### performanceCore
- 機械割（30Φ個別canonical）: **97.0 / 99.7 / 101.7 / 103.9 / 106.3 / 108.4%**。
- ボーナス初当り: **1/237.9 / 214.0 / 218.8 / 194.4 / 199.1 / 173.6**。
- 50枚ベース: **約40G**（資料中心約39〜40G）。一部46.2G表記は平均せずCONFLICT保持。
- AT純増: **約3.0枚/G**。
- BIG: **70G / 約210枚**、REG: **20G / 約60枚**。
- 25Φ/初期解析系に機械割設定1〜3 **96.7 / 99.0 / 101.4%** があり、30Φ個別2ソースとは平均せずvariant/source conflictとして保存。

### resetBehavior v0.7
- 設定変更: **天井ゲーム数RESET/再抽選、モード再抽選**。
- 設定変更時モード: **通常A 50.00% / 通常B 15.23% / 天国準備 1.17% / 引き戻し 33.59%**。
- 純電源OFF→ON: **天井ゲーム数引継ぎ / モード引継ぎ**。
- 据え置き: 前日ゲーム数/モードの継続扱い。
- 天井: 通常A/B/天国準備 **1199G**、引き戻し **100〜199G**、保証/天国/ドキドキ/超ドキドキ **31G天井相当**。
- 朝一主要恩恵: 設定変更時 **33.59%で引き戻し**となり200G以内の早当たり期待が上昇。
- 朝一不利: 設定変更で前日の天井進捗・滞在モードを失うため宵越し狙い不可。
- ガックン/初期出目/ランプ等の本機固有確定変更判別は検索語を変えて横断後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- REG後パネルフラッシュ等は滞在モード示唆であり設定変更確定サインとは分離。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-03-14群監査
処理済み:
1. **ユルビスカス-30** — パイオニア — No.961
2. **沖ドキ！トロピカル-30** — アクロス — No.962

未処理として確認済み:
3. **ウルトラマン** — 七匠 — 2016-03-14導入資料あり。

- よって03/14群は **OPEN** のまま。
- 次はウルトラマンを性能コア + resetBehavior v0.7で収集し、その後03/14同日全メーカーを再監査してCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_crash-bandicoot-s.md**
- retroQaNextInspection: **2006-02_new-oasis.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は前進リレーを優先し、既存retro QA地点は変更していない。

## 次回再開地点
1. **recordCount 962 / chronologicalFrontier 2016-03-14 / 03-14群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.962をmainから再取得。
3. **ウルトラマン（七匠）** が未登録か再確認し、性能コア + resetBehavior v0.7を収集して追加。
4. 03/14群を全メーカー横断監査し、漏れがなければCLOSEDへ。
5. 遡及QAは `2006-02_new-oasis.md` から継続。既存性能コアを無駄にやり直さない。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
7. 競合は平均せずCONFLICT/variant差/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と納品予定日・地域先行日を混同しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・別variantのresetBehaviorを無条件流用しない。

## 主要出典 — 取得日 2026-09-08
### No.962 沖ドキ！トロピカル-30
- ユニバーサル公式: https://www.universal-777.com/product/slot/okidoki_tropical/
- グリーンべると（2016-02-26）: https://web-greenbelt.jp/00008457/
- P-WORLD: https://opt.p-world.co.jp/machine/database/7996
- 一撃 基本: https://1geki.jp/slot/s_okidoki_t30
- 一撃 天井/設定変更: https://1geki.jp/slot/s_okidoki_t30/3/
- 一撃 モード移行: https://1geki.jp/slot/s_okidoki_t30/42/
- pacnk 30Φ設定判別: https://pacnk.com/slot/tools/sh_okidokitoropikaru2016b.html
- 30Φ型式確認: https://store.shopping.yahoo.co.jp/nakaiticom/2020408.html
- 25Φ型式比較: https://store.shopping.yahoo.co.jp/nakaiticom/634.html
- 5号機一覧（variant分離）: https://pachisuro100.com/agyo/
- 沖ドキ歴代整理（3/14）: https://ptro.live/p-okidoki.html
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/16618/

### 03/14群境界
- 2016年新台カレンダー: https://moge-site.com/new-slot2016
- 当時解析記事（ウルトラマン3/14）: https://jikyu2000.com/2016/03/

## confidence
- No.962 identity/formalModelName: **HIGH_MULTI_SOURCE**
- No.962 releaseDate: **CONFLICT_RESOLVED_CANONICAL_2016_03_14_WITH_0201_RETAINED**
- No.962 performanceCore: **HIGH_MULTI_SOURCE_WITH_EARLY_VARIANT_CONFLICT**
- No.962 resetBehavior: **HIGH_DIRECT_RESET_TABLE**
- No.962 resetDetection: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
- 03/14 group completeness: **OPEN_ONE_CONFIRMED_MACHINE_PENDING**
