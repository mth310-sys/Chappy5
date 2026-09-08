更新日: 2026-09-08

## 現在地点
- recordCount: **998**
- latestRecordAdded: **デビル メイ クライ クロス**（エンターライズ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-08-01_devil-may-cry-cross.md`
- chronologicalFrontier: **2016-08-01**
- frontierLatestMachine: **デビル メイ クライ クロス**（エンターライズ）
- schema: **resetBehavior v0.7**
- status: **2016-08-01_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.997 `2016-08-01_sevens-beat.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点の正本は recordCount **997** / chronologicalFrontier **2016-08-01** / `2016-08-01_GROUP_OPEN`。
- 既存性能値はやり直さず、08/01群の次の未処理先頭 **デビル メイ クライ クロス**から継続。

## No.998 — デビル メイ クライ クロス
- manufacturer: **エンターライズ**
- releaseDate canonical: **2016-08-01**
- formalModelName: **デビルメイクライクロス/ZY**
- certificationNumber: **6S0161**
- generation/system: **5号機 / 5.5号機期 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割 canonical: **97.3 / 98.4 / 101.0 / 104.1 / 108.4 / 111.4%**。
- ART初当たり: **1/357.2 / 338.1 / 305.3 / 261.6 / 225.1 / 194.4**。
- CZ「Devil Mission」初当たり: **1/129.0 / 129.0 / 120.2 / 105.5 / 90.6 / 80.2**。
- BIG: 全設定 **1/1365.3** / 約**204枚**。
- DEVIL ZONE(REG): 全設定 **1/2048** / 約**48枚**。
- ベース: **約41.3G/50枚**（約41G表記あり）。
- ART「DEVIL RUSH」: **約1.7枚/G**、初期**50G+α**、開始時50〜300G抽選。
- 天井: ボーナス&ART間 **999GでART確定**。CZ6連続ART非当選で次回CZの成功抽選優遇。

### resetBehavior v0.7
- 設定変更: **ゲーム数天井RESET / CZスルー天井RESET / 内部状態再抽選**。
- 据え置き: 前日ゲーム数天井進捗・CZスルー回数・内部状態を **CARRYOVER** として整理。
- 純電源OFF→ON: **ゲーム数天井CARRYOVER / CZスルー天井CARRYOVER / 内部状態CARRYOVER**。
- 朝一液晶ステージは設定変更/純電断とも **フォルトゥナ**なので、ステージ単独判別不可。
- 設定変更時の高確スタート率: **25.00 / 31.25 / 28.13 / 34.38 / 31.25 / 37.50%**（設定1→6）。
- 低確率: **75.00 / 68.75 / 71.88 / 65.63 / 68.75 / 62.50%**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有の確定的ガックン/初期出目/ランプ変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflicts
- `CONFLICT_RELEASE_DATE_2016_08_01_VS_2016_08_22_VS_2016_07_MONTH`: K-Naviと2016年当時発表会資料は8/1、スロ確.comは8/22、P-WORLDは導入開始月2016年07。具体日付き当時資料が一致する8/1をcanonical。
- `CONFLICT_SETTING4_PAYOUT_104_1_VS_104_0`: 主流解析104.1%、一部104.0%。104.1%をcanonical。
- `CONFLICT_RESET_STATE_SETTING2_68_75_31_25_VS_67_8_31_3`: スロ確.com/楽スロは68.75/31.25%、ゆうべるは67.8/31.3%。後者は合計不整合があり転記誤り候補として保持。

## 2016-08-01群 — OPEN
- 登録済み: **セブンスビート / デビル メイ クライ クロス**。
- 残り明確候補: **パチスロ ルパン三世～消されたルパン～**。
- ルパンは今回先行確認で以下まで固定:
  - オリンピア / 導入 **2016-08-01**。グリーンべると2016-06-08記事は納品7/31開始予定、DMM/K-Navi系も8/1導入。
  - 型式 **ルパン三世消されたルパン/B4**。
  - ART純増 **約2.0枚/G**、1セット約40G、ART初当たり **1/350.6〜1/282.0**、機械割 **96.6〜110.8%**、ベース **約46.1〜48.7G/50枚**。
  - 天井は最深999G（薄い499G振り分け）＋CZ 480pt系。
  - 一撃の当時ページでは設定変更/電源OFFONの天井・モード・状態が「現在調査中」のため、次回は後年解析/古いDB/アーカイブへ検索系統を変えてresetBehaviorを確定またはUNVERIFIED_AFTER_RESEARCHにする。
- ルパン登録後、08/01同日全メーカー監査を行い漏れがなければ群をCLOSEDにする。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-06_be-bop.md**
- retroQaNextInspection: **2006-03-27_kengou-musashi.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 前進キューを優先し、retro QA再開地点は変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.998を再取得。
2. **998件 → 2016-08-01群の次の未処理機種**へ継続。
3. **パチスロ ルパン三世～消されたルパン～（オリンピア）**をNo.999候補として、型式/検定番号/実ホール導入日/性能コア/resetBehavior v0.7を多系統再探索して登録。
4. とくに設定変更/据え置き/純電源OFF→ON、999G/499G天井、CZポイント、内部モード/状態、変更判別、公開朝一数値を当時解析→後年解析→古いDB/アーカイブまで掘る。
5. 08/01同日全メーカー監査を行い、漏れがなければ群をCLOSEDとして次の導入日境界へ前進。
6. PARTIAL/UNVERIFIEDは検索語・資料系統変更後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.998 デビル メイ クライ クロス
- K-Navi: https://p-kn.com/slot/2545/
- P-Summa発表会: https://psumma.jp/pachislo/23656/
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/8455/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/8109
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/20593/
- スロットガーデン: https://xn--mckza4ard4ttb2d.com/devilmaycry-x
- スロ確.com: https://slotkaku.com/devil_may_cry_x
- 楽スロ reset: https://rakuslo.com/dmclast-henkougo.html
- ゆうべる: https://yuberu-777.com/devilmaycry-x-kaiseki/

### 次候補 ルパン三世～消されたルパン～
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/8430/greenbelt
- DMMぱちタウン: https://p-town.dmm.com/machines/2539
- 一撃 天井/設定変更: https://1geki.jp/slot/s_k_lupin/3/
- 一撃 ART概要: https://1geki.jp/slot/s_k_lupin/81/
- パチナビ: https://pachinavi.net/machines/lupin-kesareta/
