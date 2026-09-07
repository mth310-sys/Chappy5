# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **877**
- latestRecordAdded: **BLACK LAGOON2**（スパイキー）
- latestRecord: `docs/real_machine_db/machines/2015-03-16_black-lagoon2.md`
- chronologicalFrontier: **2015-03-16**
- frontierLatestMachine: **BLACK LAGOON2**（スパイキー）
- schema: **resetBehavior v0.7**
- status: **2015-03-16_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.876 `2015-03-16_pachislot-cobra.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **876件 / chronologicalFrontier 2015-03-16 / 03-16_GROUP_OPEN**。
- handoff指定の次未処理 **BLACK LAGOON2（スパイキー）** をNo.877として追加。
- グリーンべると、P-WORLD、K-Navi、必勝本、pachinavi、pacnk、CrankySeven、2-9伝説、サミーネットワークス等を横断。

## No.877 — BLACK LAGOON2

- record: `docs/real_machine_db/machines/2015-03-16_black-lagoon2.md`
- manufacturer: **スパイキー**
- releaseDate canonical: **2015-03-16**
- modelName: **ブラックラグーン2CC**
- inspectionNumber: **4S0542**
- systemType: **5号機 A+ART / CZ搭載**

### 性能コア

- 機械割: **97.0 / 98.7 / 100.7 / 104.8 / 108.0 / 112.1%**。
- BIG合成: **1/385.5 / 376.6 / 368.2 / 360.1 / 352.3 / 344.9**。
- REG: **1/555.4 / 537.2 / 520.1 / 504.1 / 461.5 / 448.9**。
- ART初当たり: **1/596.0 / 553.3 / 531.3 / 477.0 / 437.5 / 370.1**。
- ボーナス合算: **1/227.6 / 221.4 / 215.6 / 210.1 / 199.8 / 195.1**。
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`。後継機値を転記しない。
- ART純増: **約1.6枚/G**。
- SUPER BIG/BIG約150枚、REG約50枚。
- ART「LAGOON RUSH」: **50G+α**。
- 通常天井: **ボーナス間1280G**。ART当選だけでは天井Gをリセットしない。

### resetBehavior v0.7

- 設定変更時は **ボーナス間1280G天井Gをリセット**。
- リセット後の天井短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。通常1280Gのまま。
- 必勝本解析で **Bullet BATTLE内部ランクがART終了時・BB失敗時・設定変更時に移行抽選**されることを確認。設定変更でBBランク再抽選。
- 設定変更時の通常内部状態初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き跨ぎの天井G/状態/BBランク保持契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- ガックン・初期出目・ステージ等の本機固有変更判別: `UNVERIFIED_AFTER_RESEARCH`。
- 比較可能な公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- **導入時期**: P-WORLD型式欄には **2014-09**、パチ7一部ページには **2014-10-06** が残る。一方、グリーンべるとは2015-01-20に「販売を延期していた」本機について **2015年3月中旬から納品開始予定**と当時報道し、複数機種DBが **2015-03-16**導入で一致。延期前販売計画と延期後実導入の差と判断し、canonicalは2015-03-16、旧日付は履歴競合として保持。

## 2015-03-16群 — OPEN

処理済み:

- パチスロコブラ — SNKプレイモア — **No.876**
- BLACK LAGOON2 — スパイキー — **No.877**

同日未処理の強い候補:

- **麻雀物語3 役満乱舞の究極大戦** — オリンピア — **2015-03-16**。K-NaviとHAZUSEが具体日一致、PiDEA/P-WORLD業界記事は3月15日納品予定。GitHub mainコード検索では既存レコード未確認。

## 次回再開地点

1. **recordCount 877 / chronologicalFrontier 2015-03-16 / 03-16_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.877を再確認。
3. 03/16同日群の既存レコードを再検索し、未登録なら **麻雀物語3 役満乱舞の究極大戦（オリンピア）** を次に処理する。
4. その後03/16同日群をメーカー横断で最終監査し、漏れがなければ `CLOSED_FOR_CURRENT_RESEARCH` として次日へ進む。
5. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、公式・業界一次・当時解析・古いDB・アーカイブ・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・兄弟機・後継機のリセット契約を転記しない。
- BLACK LAGOON3/4/ZEROのRT・有利区間・電断情報をBLACK LAGOON2へ混入させない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### BLACK LAGOON2
- グリーンべると: https://web-greenbelt.jp/00007515/
- P-WORLD: https://www.p-world.co.jp/machine/database/7498
- pachinavi: https://pachinavi.net/machines/black-lagoon-2/
- K-Navi: https://p-kn.com/slot/2118/
- 必勝本: https://p.hisshobon.jp/machine/2546/1/51940
- CrankySeven: https://crankyseven.com/blacklagoon-two-pc.htm
- 2-9伝説: https://29den.com/blacklagoon2/
- pacnk: https://pacnk.com/slot/tools/sh_blacklagoon2.html
- サミーネットワークス: https://www.sammy-net.jp/news/2015/11/black-lagoon2777townnet.html

### 次候補 / 境界
- K-Navi 麻雀物語3: https://p-kn.com/slot/2214/
- HAZUSE 麻雀物語3: https://hazuse.com/machine/pachislot/4S1092/
- PiDEA/P-WORLD業界記事: https://news.p-world.co.jp/articles/7145
