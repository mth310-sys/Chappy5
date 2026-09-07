# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **861**
- latestRecordAdded: **サラリーマン金太郎 出世回胴編**（ロデオ）
- latestRecord: `docs/real_machine_db/machines/2015-01-05_salaryman-kintaro-shusse-kaido-hen.md`
- chronologicalFrontier: **2015-01-05**
- frontierLatestMachine: **サラリーマン金太郎 出世回胴編**（ロデオ）
- schema: **resetBehavior v0.7**
- status: **2014-12-16_TO_2014-12-31_CLOSED_FOR_CURRENT_RESEARCH / 2015-01-05_GROUP_AUDIT_PENDING**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.860 `2014-12-08_pachislot-kidou-shinsengumi-moeyo-ken-koyoi-hanachiru.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **860件 / chronologicalFrontier 2014-12-15 / 12-15_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- HAZUSEの導入日カレンダーでは2014年12月のパチスロ導入掲載が12/01・12/08・12/15までで、次の掲載日は2015-01-05。P-WORLD、K-Navi、当時業界記事、年次/月次機種資料も併用して12/16～12/31の新規本体候補を監査し、今回具体的ホール導入日を安全に固定できる未登録5号機は確認できなかったため **2014-12-16_TO_2014-12-31_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 2015年最初の具体日付き未処理機として **サラリーマン金太郎 出世回胴編** を2015-01-05で固定し、No.861として追加。

## No.861 — サラリーマン金太郎 出世回胴編

- record: `docs/real_machine_db/machines/2015-01-05_salaryman-kintaro-shusse-kaido-hen.md`
- manufacturer: **ロデオ**
- releaseDate: **2015-01-05**
- modelName: **サラリーマン金太郎 出世回胴編XF**
- inspectionNumber: **4S0784**
- systemType: **5号機 AT / 疑似BIG+ゲーム数上乗せAT**

### 導入日 / 同定

- HAZUSEで **2015-01-05**、型式 **サラリーマン金太郎 出世回胴編XF**、検定番号 **4S0784** を確認。
- K-Naviでもホール導入開始2015-01-05を照合。
- サミーネットワークス公式で株式会社ロデオの機種として同定。
- グリーンべると2014-11-20記事は2015年1月上旬から納品予定としており、発表/納品予定と実ホール導入開始を分離。

### 性能コア

- 機械割: **97.4 / 98.6 / 100.1 / 104.8 / 108.5 / 115.1%**。
- 通常時BIGまたはAT初当たり合算: **1/341.8 / 332.4 / 322.6 / 280.5 / 254.3 / 233.2**。
- HAZUSEのKCトータル初当たり **1/471.5～1/313.3** はBIG経由込みAT初当たりという別定義のため、上記合算と混ぜず別系列で保持。
- 50枚ベース: **約30.7G/50枚**。
- AT「金太郎チャンス」: **1セット50G+α / 純増約2.8枚/G**。
- 通常時BIG: ベルナビ **20回 or 50回**。
- 通常モード天井候補: **600G / 900G**。設定1の600G選択2%から設定6の25%まで設定差あり。

### resetBehavior v0.7

- 設定変更時: **内部天井Gリセット + リセットモード確定 + 内部状態再抽選 + 液晶ステージランダム**。
- リセットモード中初当たり: **1/215.5（全設定共通）**。
- リセット後天井: **600G 50% / 900G 50%**。
- リセット後内部状態: **通常A40% / 通常B50% / 高確A10%**。
- 据え置き: 前日最終ステージ引継ぎを直接確認。宵越し天井資料と当時実戦報告により天井G持ち越しを支持。ただし全内部状態の完全契約までは固定しない。
- 電源OFF→ONのみ: 液晶ステージ引継ぎは本機専用解析で確認。天井内部G・内部状態までを電断単独で一括引継ぎとは推定せず `UNVERIFIED_AFTER_RESEARCH`。
- 変更判別: **リールガックン**、前日ステージとの比較、朝一高確確定挙動が主要材料。ホール側対策が可能なため絶対判別とはしない。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 設定変更専用の明示的な冷遇数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### 公開朝一数値

- リセットモード初当たり: **1/215.5**。
- リセット後天井: **600G 50% / 900G 50%**。
- リセット後内部状態: **通常A40% / 通常B50% / 高確A10%**。
- 実戦参考: 新台初日1回目740件の集計で580～600G帯への集中を確認する資料あり。解析値とは混ぜず参考系列として保存。

### CONFLICT / 定義分離

- 今回、性能コアおよび主要リセット数値に平均処理を要する安全な数値競合は確認なし。
- HAZUSEの「KCトータル初当たり」はBIG経由込みのAT初当たりであり、「BIGまたはATの通常時初当たり合算」とは定義が違うため `CONFLICT` ではなく別系列。

## 年末境界 — CLOSED_FOR_CURRENT_RESEARCH

- **2014-12-16～2014-12-31**: HAZUSE導入カレンダー上、12/15の次の掲載日は2015/01/05。
- P-WORLD、K-Navi、当時業界記事、年次/月次機種資料も併用して新規5号機本体を再探索したが、今回この期間に具体的ホール導入日を安全に固定できる未登録本体はなし。
- 発表日・検定日・納品予定日・新パネルの日付だけでは新規本体として登録しない。

## 2015-01-05群 — AUDIT_PENDING

- No.861 **サラリーマン金太郎 出世回胴編**（ロデオ）— 処理済み。
- 現時点の横断検索では同日導入の別未登録5号機を固定していないが、全機種方針のため次リレー冒頭で **2015-01-05同日群をメーカー別/導入一覧でもう一度監査してからCLOSED判定**する。
- HAZUSEカレンダー上、次の導入掲載日は **2015-01-13**。01/05群を閉じた後、この日付の具体的機種を特定して進める。
- 2015-01-19には少なくとも **黄門ちゃま喝**、**テラシグマ** が存在することを今回の予備監査で確認。01/13群を飛ばさず順番に処理する。

## 次回再開地点

1. **recordCount 861 / chronologicalFrontier 2015-01-05 / 01-05_GROUP_AUDIT_PENDING** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.861を再確認。
3. まず **2015-01-05同日群**をHAZUSE・P-WORLD・K-Navi・当時業界記事・メーカー別資料で再監査。未登録同日機があれば先に処理し、なければ01/05群をCLOSED。
4. 次に **2015-01-06～01-12境界**を監査し、HAZUSE掲載の次日 **2015-01-13** の具体的未処理5号機を特定して進める。
5. 01/19候補の黄門ちゃま喝/テラシグマへ先飛びしない。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは発表日・検定日・納品予定・全国導入・地域先行・実ホール導入を区別。
- 据え置き・純電断挙動は一般的な5号機の慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 新パネル・検定日・撤去期限由来の日付だけの候補は新規本体導入日と混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### サラリーマン金太郎 出世回胴編
- サミーネットワークス公式: https://www.sammy-net.jp/news/2015/02/-777townnet-2.html
- グリーンべると: https://web-greenbelt.jp/00007412/
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/4S0784/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/4S0784/genre/201/
- K-Navi 機種TOP: https://p-kn.com/slot/2169/
- K-Navi 初当たり抽選: https://p-kn.com/slot/2169/52736/
- P-WORLD: https://www.p-world.co.jp/machine/database/7580
- 旧パチマガスロマガ 概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/63/a.php
- 旧パチマガスロマガ 小役/50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/63/c.php
- 旧パチマガスロマガ 初当たり: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/63/01-2.php
- 期待値見える化 朝一リセット: https://slotjin.com/slot/kintarou-reset/
- 期待値見える化 天井/モード: https://slotjin.com/zone/kintarou/
- 2-9伝説: https://2-9densetsu.com/kintarou/
- イチカツ 天井振り分け: https://ichikatsu.com/kintarou-tenjoufuriwake/
- イチカツ 朝一設定変更: https://ichikatsu.com/kintarou-asaiti/
- パチ&スロ必勝本 設定変更判別: https://p.hisshobon.jp/vpage/1272/1
- パチ&スロ必勝本 狙いドコロ: https://p.hisshobon.jp/machine/2488/1/49951
- pacnk: https://pacnk.com/slot/tools/sh_kintaro.html
- スロパチクエスト: https://www.slopachi-quest.com/article/sarakin-kitaichi/
