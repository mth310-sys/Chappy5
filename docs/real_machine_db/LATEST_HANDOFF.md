# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **863**
- latestRecordAdded: **テラシグマ**（JPS）
- latestRecord: `docs/real_machine_db/machines/2015-01-19_terra-sigma.md`
- chronologicalFrontier: **2015-01-19**
- frontierLatestMachine: **テラシグマ**（JPS）
- schema: **resetBehavior v0.7**
- status: **2015-01-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2015-01-20_TO_2015-01-25_AUDIT_NEXT / NEXT_STRONG_ANCHOR_2015-01-26**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.862 `2015-01-19_pachislot-koumonchama-katsu.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **862件 / chronologicalFrontier 2015-01-19 / 01-19_GROUP_OPEN**。
- 前handoff指定の次機種 **テラシグマ（JPS）** をNo.863として追加。

## No.863 — テラシグマ

- record: `docs/real_machine_db/machines/2015-01-19_terra-sigma.md`
- manufacturer: **JPS**
- releaseDate: **2015-01-19**
- modelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- systemType: **5号機 AT / 擬似Aタイプ・擬似ボーナスストック型**

### 性能コア

- 機械割: **97.9 / 99.5 / 101.5 / 103.6 / 106.5 / 110.2%**。
- 擬似ボーナス初当たり: **1/153 / 146 / 138 / 131 / 121 / 107**。
- 50枚ベース: **約36G/50枚**。
- 純増: **約3.0枚/G**。
- BIG: **平均約281枚 / ベルナビ46回**。
- REG: **平均約97枚 / ベルナビ14回**。
- 通常最大天井: **998G**（K-Navi概要は「最大999G」表記のためカウント表現差として注意保持）。
- 当時資料ではボーナス後300G以内の当選割合 **94%**。

### resetBehavior v0.7

- 設定変更時の天井G、規定Gモード、ストック、内部状態の初期化/再抽選契約: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井G・モード・ストック・内部状態引継ぎ契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の内部/表示復帰契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用短縮天井・朝一専用モード・公開朝一当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン/表示による変更判別: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 通常時には規定G数を管理するモードが存在し、当時解析ではモードA最大998G、モードB最大768Gだが、これを設定変更後のモード振り分けへ逆算しない。

## 2015-01-19群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
- No.862 **パチスロ黄門ちゃま 喝**（オリンピア）
- No.863 **テラシグマ**（JPS）

再監査:
- `2015年1月19日 パチスロ 新台`、`2015/1/19 スロット 導入`、メーカー別/当時解析/K-Navi/P-WORLD/業界記事系で横断。
- 検索で **サイレントメビウス** に「2015-01-19」が出る資料があるが、これは検定告示日系データ。PiDEA/P-WORLD業界記事では2015-02-19発表、納品2015-04-12予定で、ホール導入は4月系統。したがって01/19導入群には混入させない。
- 今回、黄門ちゃま喝・テラシグマ以外の具体的な2015-01-19ホール導入5号機を安全に固定できなかったため **CLOSED_FOR_CURRENT_RESEARCH**。

## 次回再開地点

1. **recordCount 863 / chronologicalFrontier 2015-01-19 / 01-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.863 を再確認。
3. **2015-01-20～01-25境界**を導入一覧・メーカー別・当時業界記事で監査する。
4. 漏れがなければ次の強いホール導入アンカー **2015-01-26「スーパージャックポット」（アクロス）** を性能コア+resetBehavior v0.7で処理する。
5. 01/26群は同日候補を横断監査してからCLOSED判定する。
6. `トラッド` は検索で01/26が出る資料がある一方、ベルコ公式は「2015年3月登場」としており、検定告示日/導入日の混同可能性があるため、01/26群へ機械的に入れず exact release date を別系統で照合してから扱う。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入** を区別する。
- 据え置き・純電断挙動は一般的な5号機の慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名後継機や別スペックを混入させない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### テラシグマ
- PiDEA X: https://www.pidea.jp/articles/JPS%E3%80%8C%E3%83%86%E3%83%A9%E3%82%B7%E3%82%B0%E3%83%9E%E3%80%8D%E3%81%AF%E6%95%B0%E5%AD%97%E3%81%8C%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%82%92%E4%BA%88%E8%A8%80%E3%81%99%E3%82%8B%21%3F
- K-Navi: https://p-kn.com/slot/2178/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/30/a.php
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/30/c.php
- パチマガスロマガ ATフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/30/l.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7598
- スロパチクエスト: https://www.slopachi-quest.com/article/terra-sigma/
- 5号機クロニクル JPS: https://5goki.com/jps

### 次候補 スーパージャックポット
- K-Navi: https://p-kn.com/slot/2182/
- ぱちんこドキュメント: https://pachinkolist.com/archives/42855966.html

### 日付混同 safeguard
- サイレントメビウス業界記事: https://news.p-world.co.jp/articles/7227
- ベルコ公式 トラッド: https://www.s-bellco.co.jp/products/slot/yama_trad/
