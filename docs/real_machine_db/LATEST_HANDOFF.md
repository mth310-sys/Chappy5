# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **730**
- latestMachineAdded: **パチスロ戦国無双2**（山佐）
- latestRecord: `docs/real_machine_db/machines/2013-04-15_sengoku-musou2.md`
- chronologicalFrontier: **2013-04-15**
- frontierLatestExactDateMachine: **パチスロ戦国無双2**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-04-15_GROUP__NEXT_NOBUNAGA_NO_YABOU_TENKA_SOUSEI**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-04-08_sengoku-arashi-kakusei-no-sho.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **729** / chronologicalFrontier **2013-04-08** / 04-08群CLOSED / 04-09～04-14監査済み。
- 04-15群先頭候補 **パチスロ戦国無双2** のrepo重複を検索し、未登録を確認して730件目として追加。
- 導入日はK-Navi、パチスロ解析ガイド、グリーンべるとで **2013-04-15** 一致。
- 04-15同日群はまだOPEN。K-Naviで同日 **信長の野望-天下創世-** も2013-04-15導入と再確認。

## 今回追加 — パチスロ戦国無双2

### identity / 性能コア

- manufacturer: **山佐**。
- releaseDate: **2013-04-15**。
- systemType: **5号機 / AT / 高純増AT + 自力CZ / プレミアム疑似ボーナス**。
- 機械割: **97.5 / 99.0 / 101.0 / 103.0 / 106.0 / 110.0%**。
- AT初当たり: **1/234.8 / 225.6 / 215.7 / 202.9 / 186.3 / 171.9**。
- 50枚ベース: **約32G/1000円**。
- 戦国RUSH: **36G+α、純増約3.0枚/G、継続率50 / 60 / 72 / 89%**。
- 出陣ノ刻: **最大23G、純増約3.0枚/G**。
- 通常天井: **AT終了後1300G**。到達時は **89%継続の戦国RUSH**。

### resetBehavior v0.7

- **設定変更で天井までのゲーム数CLEAR**。2013年当時の天井解析資料で直接確認。
- 設定変更専用の短縮天井、朝一専用モード、AT/CZ優遇の比較可能な公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 「宵越し×」表記は存在するが、設定変更時CLEARと同じ資料内で説明されるため、純据え置き時まで消去されるとは推定しない。
- 純据え置き時の天井G/内部状態、単純電源OFF→ON時の天井G/状態/表示、本機固有のガックン・初期出目・液晶による変更判別は、表記揺れ・シリーズ名・メーカー名と検索語を組み替えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 設定変更時の主要不利: **前日の天井G進捗消失**。

### CONFLICT

- 純増はK-Navi、P-WORLD、パチマガスロマガ、グリーンべると等の当時主系列が **約3.0枚/G**。
- 5号機クロニクルの後年整理には **約2.8枚/G** 表記がある。
- 平均せず `CONFLICT_NET_INCREASE_RETROSPECTIVE_2_8_VS_CONTEMPORARY_3_0`。本線値は当時複数資料一致の約3.0枚/G。

## 次回再開地点

1. **recordCount 730 / chronologicalFrontier 2013-04-15 / 04-15群OPEN** から開始。
2. 次は **戦国パチスロ 信長の野望‐天下創世‐ / 信長の野望-天下創世-（ニューギン）** のrepo重複を確認し、未登録なら性能コア＋resetBehavior v0.7を収集。
3. その後の既知同日候補は **鬼浜爆走紅蓮隊～友情挽歌編～（ベルコ）**。
4. 04-15群の別カレンダー・メーカー別一覧を横断し、未処理機がないことを確認してから同日群をCLOSEDにする。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### パチスロ戦国無双2

- K-Navi（2013-04-15、山佐、AT、約3.0枚/G、36G+α）: `https://p-kn.com/slot/1819/`
- グリーンべると（2013-04-12、実機導入4月15日開始、純増約3.0枚）: `https://web-greenbelt.jp/00000864/`
- グリーンべると（2013-02-20、山佐発表、3.0AT）: `https://web-greenbelt.jp/00000758/`
- P-WORLD（5号機AT、約3.0枚/G、出陣ノ刻最大23G、戦国RUSH36G+α）: `https://www.p-world.co.jp/machine/database/7021`
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/192/a.php`
- パチマガスロマガ 小役確率（1000円あたり約32G）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/192/c.php`
- パチスロ解析ガイド（設定別AT、機械割、1300G天井・89%継続）: `https://pachislot-guide.net/2013/sengoku-musou2/`
- スロパチクエスト（2013-04-11、設定別AT/機械割、1300G天井・89%継続）: `https://www.slopachi-quest.com/article/354835660-html/`
- 天井ハイエナ生活（2013年当時、1300G、89%継続、設定変更で天井Gリセット）: `https://macerate.seesaa.net/article/355071754.html`
- 5号機クロニクル（山佐一覧、後年純増約2.8枚/G表記）: `https://5goki.com/yamasa`

### 次回キュー確認

- K-Navi 信長の野望-天下創世-（ニューギン、ホール導入開始2013-04-15）: `https://p-kn.com/slot/1831/`
