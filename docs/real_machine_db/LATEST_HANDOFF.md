更新日: 2026-09-08

## 現在地点
- recordCount: **1015**
- latestRecordAdded: **パチスロ 貞子3D**（ニューギン）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-10-03_pachislot-sadako-3d.md`
- chronologicalFrontier: **2016-10-03**
- frontierLatestMachine: **パチスロ 貞子3D — No.1015**
- schema: **resetBehavior v0.7**
- status: **2016-09-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-09-26_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-10-03_GROUP_OPEN / 2016-09-12_RETRO_GAP_FILLED**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1014を再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。INDEX自体は不用意に全件再生成していない。
- main正本は **1014件 / chronologicalFrontier 2016-10-03 / 10/03群OPEN** から継続。
- 10/03群を全メーカー横断で再監査し、未登録の **ニューギン「パチスロ 貞子3D」** と **七匠「LOAD of VERMILION」** を候補として固定。GitHub既存レコード検索で双方とも未登録を確認。
- 今回は貞子3DをNo.1015として追加。10/03群はLOAD of VERMILIONが未処理のためOPENを維持する。

## No.1015 — パチスロ 貞子3D
- manufacturer: **ニューギン / Newgin**
- releaseDate canonical: **2016-10-03**
- releaseDate conflict: **2016-10-17**を全国導入予定とする別資料あり
- formalModelName: **パチスロ貞子3D-Z**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / ART / MB回数管理型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_IDENTITY_PARTIAL_RELEASE_DATE_CONFLICT**

### identity/data quality
- P-WORLD/グリーンべると業界ニュースが2016-09-14時点で **10月2日から納品開始予定** と報道。
- ちょんぼりすた、pachislo-dataは **2016-10-03導入** とするため本DBcanonicalは10/03。
- P-Summa等には **2016-10-17全国導入予定** の記録も残るため `CONFLICT_RELEASE_DATE_2016_10_03_VS_2016_10_17` として保持。平均化しない。
- 型式名 `パチスロ貞子3D-Z` は中古実機流通資料で確認。
- 検定番号は機種名/型式名/ニューギン/検定/6S系/公安委員会等へ検索語を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### performanceCore
- 機械割: **96.9 / 98.0 / 100.2 / 105.1 / 110.0 / 115.2%**。
- ART初当たり: **1/345.3 / 332.7 / 309.3 / 265.9 / 228.7 / 199.1**。
- CZ「貞子チャレンジ」: **約1/1363.8、全設定共通、期待度約50%**。
- 50枚ベース: **約47〜47.32G**。
- ART純増: **約1.8枚/G**。
- ART「貞子パニック」は規定G数・固定獲得枚数なしのMB回数管理型。MBは約1/10.8で成立し、原則貞子魂を1個消費して継続管理。
- 通常天井: **ART間1600G+前兆**。

### resetBehavior v0.7
- 設定変更: **ART間天井RESET / 内部モードRESELECT**。
- 据え置き: **天井進捗・内部モードCARRYOVER**。
- 純電源OFF→ON: **天井進捗・内部モードCARRYOVER**。
- リセット専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後も公開上の最大天井はART間1600G+前兆。
- 純電断時の液晶開始ステージ/表示固有挙動: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のメーカー保証ガックン/確定初期出目/ランプ/ステージ判別: **NONE_CONFIRMED_AFTER_RESEARCH**。

### 公開朝一モード数値
| 設定 | 低確 | 高確 | 連呪A | 連呪B | 連呪Aロング | 連呪Bロング |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 73.4% | 25.0% | 1.2% | 0.4% | 0% | 0% |
| 2 | 72.3% | 25.0% | 2.0% | 0.8% | 0% | 0% |
| 3 | 71.1% | 25.0% | 2.7% | 1.2% | 0% | 0% |
| 4 | 68.4% | 25.0% | 4.3% | 2.3% | 0% | 0% |
| 5 | 64.1% | 25.0% | 5.9% | 3.1% | 1.6% | 0.4% |
| 6 | 61.7% | 25.0% | 7.4% | 3.9% | 1.6% | 0.4% |

- 設定変更後は全設定で高確25.0%。高設定ほど連呪A/B開始率が上昇し、設定5・6のみロング振り分けも存在。
- 連呪系合計（公開表の単純合算）は設定1→6で **1.6 / 2.8 / 3.9 / 6.6 / 11.0 / 13.3%**。独立解析値ではないのでレコード内で算出値と明示。
- 設定変更で前日天井進捗と前日内部モードを失うため、据え置き狙い側には不利になり得る。

### conflicts
- `CONFLICT_RELEASE_DATE_2016_10_03_VS_2016_10_17`。
- 「貞子復活の儀」Lv別平均貞子魂は **4.5/4.8/5.9/8.3/21.6個** 系列と **2.0/2.6/4.0/6.4/17.4個** 系列があり、平均せず `CONFLICT_INITIAL_SADAKODAMA_AVERAGES` として保持。基本物差しでは固定枚数値に混ぜない。

## 2016-10-03群 — OPEN
登録済み:
- **パチスロ北斗の拳 修羅の国篇**（サミー）— No.1014
- **パチスロ 貞子3D**（ニューギン）— No.1015

未処理・次候補:
- **LOAD of VERMILION**（七匠）— 2016-10-03導入資料を確認済み、GitHub既存レコード検索で未登録。次に性能コア+resetBehavior v0.7を収集し、No.1016候補として処理する。
- LOAD of VERMILION処理後、10/03群をメーカー横断で再監査して追加未登録がないか確認する。
- 「2016-10-03更新」の古い解析ページを導入日と誤認しない。機種別ページ/公式/業界資料で実導入日を固定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- ゴルゴ13のreset側は `PARTIAL_RESEARCH_EXHAUSTED` まで更新済み。
- 次は2006-03-27より後の既存未QAレコードを最新main実体から時系列で特定して継続。旧INDEXのファイル名から推測しない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1015を再取得。
2. **1015件 / chronologicalFrontier 2016-10-03 / 10/03群OPEN** を正本として継続。
3. **七匠「LOAD of VERMILION」** を未処理先頭候補として、導入日・機種同一性を再確認後、性能コア + resetBehavior v0.7を収集しNo.1016候補として保存する。
4. その後10/03群の全メーカー横断監査を継続し、群をCLOSEDにできるか判定する。
5. 10/03群が閉じられたら10/04以降の次導入群境界へ前進。
6. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて十分な再探索後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1015 パチスロ 貞子3D
- P-WORLD / グリーンべると業界ニュース: https://news.p-world.co.jp/articles/8654/greenbelt
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/8155
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/24506/
- pachislo-data: https://pachislo-data.com/newgin/28930
- 期待値見える化: https://slotjin.com/zone/sadako3d/
- ゆうべる 朝一: https://yuberu-777.com/sadako3d-asaiti/
- P-Summa 10/17側資料: https://psumma.jp/pachislo/26440/
- 中古実機型式名: https://item.rakuten.co.jp/auc-nakaiti/3d/

### 次候補 LOAD of VERMILION
- P-Summa 2016年10月新台一覧: https://psumma.jp/pachislo/26440/
