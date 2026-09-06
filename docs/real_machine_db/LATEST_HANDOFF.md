# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **804**
- latestRecordAdded: **パチスロ モンスターハンター 月下雷鳴**（エンターライズ）— 2014-03-17
- latestRecord: `docs/real_machine_db/machines/2014-03-17_monster-hunter-gekkaraimei.md`
- chronologicalFrontier: **2014-03-17**
- frontierLatestMachine: **パチスロ モンスターハンター 月下雷鳴**
- schema: **resetBehavior v0.7**
- status: **2014-03-17_GROUP_OPEN / MONSTER_HUNTER_GEKKARAIMEI_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前追加レコード `2014-03-10_big-bonus-x64.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を現在の正本として継続。
- 作業開始時正本は **recordCount 803 / chronologicalFrontier 2014-03-10 / 03-10_GROUP_OPEN**。
- 2014-03-10同日群を再監査し、ビッグボーナスX64以外の具体日付き未登録5号機を今回固定できなかったため **03-10_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 続いて2014-03-11〜03-16境界を具体日検索・月間新台カレンダー系統で監査。次の強いパチスロ導入日アンカーは2014-03-17で、境界内の未登録機は今回固定できなかったため **03-11_TO_03-16_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- 旧handoffの次候補 **2014-03-17「パチスロ モンスターハンター 月下雷鳴」** がmain未登録であることをGitHub検索で確認し、804件目として追加。
- 03-17同日群はまだ全メーカー横断最終監査を行っていないためOPENのまま次回へ渡す。

## 今回追加 — パチスロ モンスターハンター 月下雷鳴

### identity / 性能コア

- manufacturer: **エンターライズ**。
- hall start: **2014-03-17**（HAZUSE / K-Navi / パチスロ解析ガイド一致）。
- 型式名: **モンスターハンター月下雷鳴ZX**。
- 検定番号: **3S0962**。
- generation/system: **5号機 / AT / 擬似ボーナス1G連型**。
- payout: **96.82 / 98.34 / 100.20 / 104.81 / 109.01 / 115.22%**。
- AT初当たり: **1/299.8 / 284.1 / 278.5 / 238.5 / 228.0 / 183.5**。
- baseGamesPer50: **30.1〜30.3G/50枚**。
- netIncrease: **約2.5枚/G**。
- 青7: 60/100G+α・平均約180枚。
- 赤7: 40/50/70G+α・平均約130〜160枚。
- BAR: 20/30G+α・平均約80〜100枚。
- 通常最大天井: **999G**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**。

### resetBehavior v0.7

- 設定変更時は **天井Gリセット / 内部状態再抽選 / 専用リセットモード移行 / 液晶ステージランダム**。
- 設定変更後最大天井は **864G**で、通常999Gから **135G短縮**。
- 据え置きは内部ゲーム数を引き継ぎ、朝一フェイク前兆も前日からの内部G数を参照。
- 設定変更を伴わない **電源OFF→ON**では天井G・内部モード・内部状態を引継ぎ、液晶ステージのみランダム。液晶履歴表示は消えるとの解析記録があるため内部状態と表示状態を分離。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- ガックン判別: **不可**とする解析資料あり。
- 変更判別ではリセットモード固有のフェイク前兆挙動が主要材料。128G付近の前兆終了が変更推測材料だが、CZ前兆競合等があるため100%確定判別にはしない。

### 公開朝一数値

- 設定変更後最大天井: **864G**。
- 128G以内ゲーム数解除率: **設定1・2 25% / 設定3・4 30% / 設定5・6 35%**。
- 設定変更後1回目ボーナス: **赤7以上 約75%**とする攻略解析整理あり。
- 設定変更時内部状態振り分け（HAZUSE）:
  - 設定1: 通常A76.2 / 通常B12.5 / 高確A6.3 / 高確B3.1 / 高確C1.6 / 高確D0.39%
  - 設定2: 74.2 / 13.3 / 6.7 / 3.7 / 1.7 / 0.46%
  - 設定3: 71.2 / 14.5 / 7.6 / 4.3 / 1.8 / 0.55%
  - 設定4: 68.2 / 15.6 / 8.5 / 4.9 / 2.1 / 0.65%
  - 設定5: 64.6 / 17.1 / 9.6 / 5.5 / 2.4 / 0.78%
  - 設定6: 60.0 / 18.8 / 10.7 / 6.3 / 3.1 / 1.17%

## safeguards / definitions

- 初当たり1/299等・機械割96.8%等の整数/小数1桁表記は、精密系列の丸め差として扱いCONFLICT化しない。
- リセット後は「専用リセットモードへ移行」を上位契約とする。後年資料にある通常A/B/C/天国A風の表は、専用モード内部の整理方法との定義差が疑われるため、実機完全再現用の通常時全モード移行表としては保存しない。
- 赤7獲得は約130〜160枚と約150枚の整理表記があるが範囲内のためCONFLICT化しない。
- 朝一フェイク前兆の全G別発生率テーブルは公開されているが、v0.7の目的に必要な変更判別結論のみ採用し、完全再現用の詳細テーブルは収集対象外。

## 2014-03-17同日群の暫定監査

- モンスターハンター 月下雷鳴の具体日2014-03-17は複数資料一致。
- 03-17同日群全メーカー横断の最終監査は未完了のため **GROUP_OPEN**。

## 次回再開地点

1. **recordCount 804 / chronologicalFrontier 2014-03-17 / 03-17_GROUP_OPEN** から開始。
2. まず2014-03-17同日群をHAZUSE/K-Navi/P-WORLD/メーカー別月間資料等で全メーカー横断再監査。
3. 未登録機がなければ **03-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
4. 続いて **2014-03-18〜03-23境界監査**。
5. 漏れがなければHAZUSE新台カレンダー上の次の強い日付 **2014-03-24** 群へ進む。
6. 03-24群も1機処理で閉じず、全メーカー横断監査後にCLOSED判定する。
7. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02_pikaslo.md` から継続。新規時系列キューを止めない。
8. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）**を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### モンスターハンター 月下雷鳴
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0962/`
- K-Navi: `https://p-kn.com/slot/2016/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/08/a.php`
- パチスロ解析ガイド: `https://www.pachislot-guide.net/2014/monster-hunter2/`
- すろぱちくえすと（2014年設定変更解析）: `https://www.slopachi-quest.com/article/monhan-reset/`
- 期待値見える化: `https://slotjin.com/zone/monsterhunter2/`
- スロパチまとめ: `https://slotblogpachinkoblog.com/monsterhunter2/`
- おスロおパチおいでやす: `https://oslo-opachi.com/2018/05/25/post-699/`

### 次境界
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

### 遡及QA
- 次対象: `docs/real_machine_db/machines/2007-02_pikaslo.md`
