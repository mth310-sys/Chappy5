更新日: 2026-09-09

## 現在地点
- recordCount: **1034**
- latestRecordAdded: **パチスロ犬夜叉**（ロデオ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-12-19_inuyasha.md`
- chronologicalFrontier: **2016-12-19**
- frontierLatestMachine: **パチスロ犬夜叉 — No.1034**
- schema: **resetBehavior v0.7**
- status: **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1033実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- main正本は **1033件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN**。過去チャットの古い地点へ戻らず、handoff指定の次未処理ロデオ `パチスロ犬夜叉` をNo.1034として追加。
- 同名の2022年クロスアルファ製6.5号機が検索結果へ大量混入するため、メーカー・型式・年を明示して2016年ロデオ機のみを採用した。
- 性能コアは当時解析複数、P-WORLD、K-Navi等を横断。機械割だけ二系列競合を確認し、平均せずCONFLICT保存。
- resetBehavior v0.7は設定変更 / 据え置き / 純電源OFF→ONを分離。CZスルー天井短縮、内部状態再抽選、押割ポイント、ガックンを収録。
- 12/19群はまだOPEN。次未処理は **KPE `麻雀格闘倶楽部2`**。

## No.1034 — パチスロ犬夜叉
- manufacturer: **ロデオ**
- releaseDate canonical: **2016-12-19**
- formalModelName: **犬夜叉／ZX**
- certificationNumber: **6S1138**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ / CZスルー回数天井**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- ART初当たり: **1/449.8 / 419.3 / 415.4 / 352.2 / 306.8 / 280.1**。
- ボーナス合算: **1/295.2 / 295.2 / 282.5 / 268.6 / 262.1 / 250.1**。
- baseGamesPer50: **約32.1〜32.6G/50枚**。
- ART `四魂DASH`: **約1.4枚/G、1セット約50G**。
- 大BONUS **204枚**、犬BONUS **54枚**。
- CZ「挑戦ノ刻」: **10G+α、ART期待度約40%**。

### payoutRate conflict
- seriesA（当時解析複数）: **97.7 / 98.6 / 100.7 / 104.2 / 108.2 / 112.5%**。
- seriesB（P-WORLD）: **98.7 / 99.6 / 101.7 / 105.2 / 109.2 / 113.5%**。
- 当時解析側も両系列の流通を明記しており、平均せず `CONFLICT_PAYOUT_RATE_SERIES_97_7_TO_112_5_VS_98_7_TO_113_5` として保持。

### resetBehavior v0.7
- 通常天井: **ART間CZ5スルー後、6回目CZでART確定**。ボーナスではスルー回数をクリアしない。
- settingChangeBehavior: **CZスルー天井を3回目CZへ短縮 / 内部状態RESELECT / 押割ポイントRESELECT**。
- carryOverBehavior: **CZスルー天井進捗・内部状態CARRYOVER**。
- powerCycleBehavior: **純電源OFF→ONはCZスルー天井進捗・内部状態CARRYOVER**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一実戦上の初期ステージ: **湖畔**。
- ガックン: 当時のロデオ実機検証で明瞭なガックンを確認する資料あり。店舗側1G回し等で無効化可能なため確定要素ではなく変更推測要素として保存。

### public reset numeric data
#### 設定変更時内部状態
| 状態 | 振り分け |
|---|---:|
| 低確 | 79.69% |
| 高確A | 13.28% |
| 高確B | 6.25% |
| 高確C | 0.78% |
| 高確D | 0% |

- 高確A以上合計: **20.31%**（公開値の単純合算）。

#### 設定変更時押割ポイント
| 初期pt | 振り分け |
|---:|---:|
| 0 | 48.44% |
| 1 | 12.89% |
| 2 | 12.89% |
| 3 | 12.89% |
| 4 | 12.89% |
| MAX | 0% |

- 設定変更後、0pt以外スタート合計 **51.56%**。
- 朝一平均天井到達目安 **約645〜700G**という攻略側試算あり。ただし固定G数天井ではないため、天井値として扱わない。

## data quality
- 2016ロデオ機と2022同名6.5号機を明示分離。2022年の有利区間、666G天井等はNo.1034へ混入させていない。
- 型式・検定はP-WORLDおよび中古実機/筐体資料で照合。
- 欠損判定前に `犬夜叉 / パチスロ犬夜叉 / 犬夜叉ZX / 犬夜叉／ZX / ロデオ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / CZ天井 / 状態 / ガックン` を組み替え、当時解析・旧DB・P-WORLD・K-Navi・業界記事・中古実機資料を横断。
- 設定変更時の独立した通常モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。内部状態/CZスルー天井を主要朝一契約として保存。

## 2016-12-19群 — OPEN
登録済み:
- **SHAKE III（シェイク3）**（大都技研）— No.1029
- **スーパービンゴ リゾート**（ベルコ）— No.1030
- **パチスロニュースモモチャンEX**（ニューギン / 25Φ）— No.1031
- **パチスロニュースモモチャンEX-30**（ニューギン / 30Φ）— No.1032
- **パチスロ ロリポップチェーンソー**（藤商事）— No.1033
- **パチスロ犬夜叉**（ロデオ）— No.1034

未処理先行候補:
1. **麻雀格闘倶楽部2**（KPE）

先行確認:
- 前handoffでHAZUSEにより `麻雀格闘倶楽部2` は **2016-12-19**、型式 **麻雀格闘倶楽部2／KA**、検定番号 **6S0920** を確認済み。次回、最新mainで重複を再確認後、性能コアとresetBehavior v0.7を再固定してNo.1035候補とする。
- 同機処理後、12/19同日をALL7・メーカー別一覧・当時業界記事・小規模メーカー資料で再監査し、漏れがなければ12/19群CLOSED判定へ進む。

## 境界監査
- **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- chronologicalFrontierは **2016-12-19**、同日群はOPEN。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1034を再取得。
2. **1034件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN** を正本として継続。
3. 次未処理の **KPE `麻雀格闘倶楽部2`** をNo.1035候補として処理。導入日・正式型式・検定番号・重複を再確認する。
4. その後12/19同日全メーカー監査を継続し、漏れがなければ群をCLOSED。続いて12/20以降の境界監査へ進む。
5. 性能コアに加え、設定変更/据え置き/純電源OFF→ON、ゲーム数/CZ/周期/ポイント、モード/状態、朝一恩恵/不利、変更判別、公開リセット数値を検索語・資料系統変更で徹底調査する。
6. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-09
### No.1034 パチスロ犬夜叉
- K-Navi: https://p-kn.com/slot/2643/
- K-Navi 展示会速報: https://p-kn.com/topics/exhibition/1530/
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12
- P-WORLD: https://www.p-world.co.jp/machine/database/8198
- ちょんぼりすた: https://chonborista.com/slot/rodeo/26742/
- 期待値見える化 reset/天井: https://slotjin.com/zone/inuyasha/
- 期待値見える化 機械割: https://slotjin.com/slot-tool/inuyasha-settei/
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/inuyasha-reset/
- すろぱちくえすと 機種まとめ: https://www.slopachi-quest.com/kisyubetsu/inuyasha/
- pachinko's blog 型式資料: https://pachinko.hatenablog.jp/entry/2016/12/inuyasha
- 中一商事中古実機: https://store.shopping.yahoo.co.jp/nakaiticom/60017.html
- pachinavi: https://pachinavi.net/machines/inuyasha-1/

### 次候補
- HAZUSE 麻雀格闘倶楽部2: https://hazuse.com/machine/pachislot/6S0920/
