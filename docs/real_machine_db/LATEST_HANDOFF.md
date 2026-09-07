# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **862**
- latestRecordAdded: **パチスロ黄門ちゃま 喝**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2015-01-19_pachislot-koumonchama-katsu.md`
- chronologicalFrontier: **2015-01-19**
- frontierLatestMachine: **パチスロ黄門ちゃま 喝**（オリンピア）
- schema: **resetBehavior v0.7**
- status: **2015-01-05_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2015-01-06_TO_2015-01-18_CLOSED_FOR_CURRENT_RESEARCH / 2015-01-19_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.861 `2015-01-05_salaryman-kintaro-shusse-kaido-hen.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **861件 / chronologicalFrontier 2015-01-05 / 01-05_GROUP_AUDIT_PENDING**。
- 2015-01-05同日群をHAZUSE/K-Navi/P-WORLD系・当時記事検索で再監査し、サラリーマン金太郎 出世回胴編以外に具体的な同日未登録5号機を安全に固定できなかったため **01-05_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2015-01-06～01-18を再監査。01/13はパチンコ新台の具体日掲載が確認できた一方、今回パチスロの新規本体を安全に固定できず、次の強いパチスロ導入日は **2015-01-19**。
- 2015-01-19群の先頭として **パチスロ黄門ちゃま 喝** をNo.862に追加。

## No.862 — パチスロ黄門ちゃま 喝

- record: `docs/real_machine_db/machines/2015-01-19_pachislot-koumonchama-katsu.md`
- manufacturer: **オリンピア**
- releaseDate: **2015-01-19**
- modelName: **パチスロ黄門ちゃま喝D1**
- inspectionNumber: **4S0696**
- systemType: **5号機 AT / 310カウンター+CZ+ゲーム数上乗せAT**

### 性能コア

- 機械割: **96.5 / 97.9 / 100.2 / 104.6 / 108.5 / 113.3%**。
- AT初当たり: **1/285.3 / 271.9 / 256.6 / 221.6 / 196.1 / 168.5**。
- 50枚ベース: **約30.1G/50枚**。
- AT純増: **約2.5枚/G**。
- 通常天井: **AT間999G**。

### resetBehavior v0.7

- 設定変更時: **天井Gリセット / 左右310カウンター内部ポイント再抽選 / 高確状態再抽選**。
- リセット後初回天井: **777G**（通常999Gから短縮）。
- 設定変更時高確移行率: **25.0 / 27.5 / 30.0 / 35.0 / 40.0 / 50.0%**。
- 設定変更時310カウンター初期平均ポイント: **51 / 55 / 59 / 63 / 67 / 71pt**。
- 朝一10G到達時の喝ゾーン当選率: **設定1～3 25% / 設定4～6 40%** とする当時解析あり。
- 据え置き: **310内部ポイント・内部状態を引き継ぐ**資料を確認。天井Gも宵越し資料でCARRYOVER_SUPPORTED。
- 電源OFF→ONのみ: 河川敷ステージ開始、液晶310表示ゼロクリアは確認。内部天井G・全状態の完全対照は `UNVERIFIED_AFTER_RESEARCH`。
- 変更判別: 朝一10G付近の喝ゾーン、見た目310未満での突然のルーレット等が推測材料。本機固有ガックン契約は `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 後継6号機「黄門ちゃま喝2」の350G朝一天井・有利区間仕様は混入除外。

## 2015-01-19群 — OPEN

- No.862 **パチスロ黄門ちゃま 喝**（オリンピア）— 処理済み。
- 同日未処理候補として **テラシグマ（JPS）** を確認。
  - K-Navi: ホール導入開始 **2015-01-19**。
  - PiDEA X: 2014-11-28発表記事で納品日 **2015-01-18予定**。
  - パチマガスロマガ: JPS/2015年1月、純増約3.0枚/Gの擬似ボーナスAT。
- 01/19群はまだCLOSEDにしない。テラシグマ処理後、同日群をメーカー別/導入一覧で再監査する。

## 次回再開地点

1. **recordCount 862 / chronologicalFrontier 2015-01-19 / 01-19_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.862 を再確認。
3. 次の未処理機種 **テラシグマ（JPS）— 2015-01-19** をNo.863候補として性能コア+resetBehavior v0.7で処理。
4. テラシグマ処理後、2015-01-19同日群をHAZUSE・P-WORLD・K-Navi・当時業界記事・メーカー別資料で横断監査し、漏れがなければCLOSED。
5. その後01/20以降へ時系列で進む。先の候補へ飛ばさない。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは発表日・検定日・納品予定・全国導入・地域先行・実ホール導入を区別。
- 据え置き・純電断挙動は一般的な5号機の慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名後継機の6号機/スマスロ仕様を旧5号機へ混入させない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ黄門ちゃま 喝
- グリーンべると: https://web-greenbelt.jp/00007370/
- HAZUSE: https://hazuse.com/machine/pachislot/4S0696/
- パチ&スロ必勝本: https://p.hisshobon.jp/machine/2499/1/49299
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/118/a.php
- K-Navi: https://p-kn.com/slot/2165/52817/
- スロパチクエスト朝一: https://www.slopachi-quest.com/article/koumon-chama-reset/
- 期待値見える化朝一: https://slotjin.com/slot/koumonnchama-reset/

### 次候補 テラシグマ
- K-Navi: https://p-kn.com/slot/2178/
- PiDEA X: https://www.pidea.jp/articles/JPS%E3%80%8C%E3%83%86%E3%83%A9%E3%82%B7%E3%82%B0%E3%83%9E%E3%80%8D%E3%81%AF%E6%95%B0%E5%AD%97%E3%81%8C%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%82%92%E4%BA%88%E8%A8%80%E3%81%99%E3%82%8B%21%3F
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/30/a.php
