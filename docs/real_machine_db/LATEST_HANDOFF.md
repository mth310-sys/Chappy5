# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **836**
- latestRecordAdded: **やじきた道中記乙**（メーシー）— 2014-08-04
- latestRecord: `docs/real_machine_db/machines/2014-08-04_yajikita-dochuki-otsu.md`
- chronologicalFrontier: **2014-08-04**
- frontierLatestMachine: **やじきた道中記乙**
- schema: **resetBehavior v0.7**
- status: **2014-08-04_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、835件目 `2014-08-04_new-im-juggler-ex-kt.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **835件 / 2014-08-04 / 08-04_GROUP_OPEN**。
- 前回handoff指定どおり、同日群の次の未処理「やじきた道中記乙」をNo.836として処理した。

## 今回追加 — やじきた道中記乙

### identity / 性能コア

- manufacturer: **メーシー**。
- hall start: **2014-08-04**（K-Navi / パチビー）。ユニバーサル公式は発売2014年8月。
- generation/system: **5号機 / 擬似ボーナス+AT / 周期抽選**。
- 機械割: **97.5 / 98.6 / 101.6 / 106.6 / 111.3 / 116.6%**。
- AT「やじきた祭」初当り: **1/397.9 / 391.4 / 378.2 / 343.2 / 303.1 / 268.0**。
- やじきたボーナス: **1/875.1 / 827.8 / 801.2 / 779.6 / 725.1 / 681.4**。
- AT+ボーナス合算: **1/273.5 / 265.7 / 256.9 / 238.3 / 213.8 / 192.3**。
- AT/擬似ボーナス純増: **約2.5枚/G**。
- 50枚ベース: **約30G/50枚**（後年単一二次資料系列。`ANALYSIS_SINGLE_RETROSPECTIVE`）。
- やじきたボーナス平均約**150枚**、超やじきたボーナス平均約**200枚**。
- 通常時は1周期最大180里、平均約105G。周期到達で関所チャレンジ。
- 周期天井は主に **10周期到達でAT確定**と整理。資料の「関所チャレンジ11回目」はAT直後引き戻し関所を含む数え方があるため定義差注記。
- coreStatus: **COMPLETE_CORE**。
- 2014年機固有の正式型式名/検定番号は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## resetBehavior v0.7 — やじきた道中記乙

- settingChangeBehavior: **設定変更で周期天井進捗リセット**を2014年当時解析で確認。K-Naviでは周期モード選択MAP抽選が **設定変更時 / AT終了時 / 5周期目終了時**に実施されることを確認。
- carryOverBehavior: 据え置き時の周期天井進捗・MAP・残り周期Gを直接明記した2014年機固有比較契約は `UNVERIFIED_AFTER_RESEARCH`。設定変更時リセットの反対命題だけで保持確定にしない。
- powerCycleBehavior: 設定変更なし電源OFF→ON時の周期進捗・MAP・残り周期G・内部状態の直接契約は `UNVERIFIED_AFTER_RESEARCH`。2026年スマスロ後継機の電断仕様は混入させない。
- gameCounterReset: 設定変更 **RESET_CONFIRMED** / 据え置き `UNVERIFIED_AFTER_RESEARCH` / 純電断 `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: 固定短縮天井・周期数短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 周期モード選択MAPは設定変更時に再抽選。K-Navi公開MAP1〜39振り分けをレコードへ保存。ただしAT終了/5周期終了時にも共通するため朝一専用値ではない。
- stateAfterReset: 周期MAP以外の通常時高確/低確状態を設定変更で再抽選する直接資料は `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 設定変更時の周期MAP再抽選は確認。2014年機専用の短縮天井・初回関所勝率優遇・朝一高確は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 前日から進んだ周期天井進捗が設定変更で消えるため、宵越し狙い上は進捗消去が主要な不利要素。
- resetDetection: 本機固有ガックン・朝一液晶/ステージ等による設定変更判別は `UNVERIFIED_AFTER_RESEARCH`。K-Naviに「設定変更時の右上ゲーム数」質問ログは残るが回答本文を安全に固定できず採用しない。
- publicMorningNumbers: MAP1〜39振り分けは設定変更時にも使われる公開数値だが朝一専用ではないため **MORNING_RELEVANT_NOT_MORNING_EXCLUSIVE**。朝一専用当選率/優遇率はなし。
- resetBehaviorQA: **PARTIAL**。設定変更側は直接根拠あり、据え置き/純電断/判別契約は未固定。

## 2014-08-04群監査

- 同日群の確認済み候補:
  1. **ニューアイムジャグラーEX-KT**（北電子）— 登録済み No.835
  2. **やじきた道中記乙**（メーシー）— 登録済み No.836
  3. **パチスロ ヘルシング**（北電子）— **未処理**
- よって **2014-08-04_GROUP_OPEN** を維持。
- 次回は「パチスロ ヘルシング」を処理し、その後に8/4同日群をメーカー横断再監査してCLOSED判定する。

## 遡及 resetBehavior QA カーソル

- 新規収集を止めない。
- 次の遡及QAカーソルは `docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）を維持。

## safeguard

- `やじきた道中記乙 / やじきた乙 / やじきた / メーシー / MACY / やじきた道中記` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電源オフ / 天井 / 周期 / 180 / MAP / モード / ガックン / 右上 / 表示 / 型式 / 検定 / 50枚 / 1000円 / ベース` を組み合わせて再探索。
- 2026年スマスロ **「やじきた道中記参る！」** は別機種として完全除外。特殊A/399まいる、リセット後勝率優遇、有利区間仕様などを2014年機へ転記しない。
- 天井の「10周期」と「関所チャレンジ11回目」は数え方定義差を保持し、平均化しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 836 / chronologicalFrontier 2014-08-04 / 08-04_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 836件目を再確認。
3. 次の未処理は **2014-08-04「パチスロ ヘルシング」（北電子）**。
4. ヘルシング処理後、2014-08-04同日群を全メーカー横断で再監査し、漏れがなければCLOSED。
5. その後08-05以降の境界監査へ進む。
6. 遡及QAは `2007-02_pachislot-tekken-den-tough.md` から再開。

## 主要出典 — 取得日 2026-09-07

### やじきた道中記乙
- ユニバーサル公式: `https://www.universal-777.com/product/slot/yajikita_otsu/`
- K-Navi: `https://p-kn.com/slot/2095/`
- K-Navi 周期モード抽選: `https://p-kn.com/slot/2095/51145/`
- K-Navi 周期短縮抽選: `https://p-kn.com/slot/2095/50367/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7455`
- パチビー: `https://www.pachibee.jp/machines/index/214070001`
- ぱぴこ ガチスロ速報: `https://gachisuro-jissen.blog.jp/archives/11456445.html`
- 2-9伝説: `https://2-9densetsu.com/yajikitadoutyuki/`
- スロパチクエスト: `https://www.slopachi-quest.com/kisyubetsu/yazikita/`
- みんスロ: `https://minslo.com/やじきた道中記乙/`
- 5号機クロニクル: `https://5goki.com/universal`

### 2014-08-04同日群
- K-Navi ニューアイムジャグラーEX-KT: `https://p-kn.com/slot/2097/`
- K-Navi やじきた道中記乙: `https://p-kn.com/slot/2095/`
- K-Navi パチスロ ヘルシング: `https://p-kn.com/slot/2099/`
