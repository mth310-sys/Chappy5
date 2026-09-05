# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **737**
- latestMachineAdded: **キャプテンパルサー**（山佐）
- latestRecord: `docs/real_machine_db/machines/2013-05-20_captain-pulsar.md`
- chronologicalFrontier: **2013-05-20**
- frontierLatestExactDateMachine: **キャプテンパルサー**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-05-20_GROUP__NEXT_PRISM_NANA_THEN_FULL_SAME_DAY_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-05-20_cats-eye-collection-dakkan-sakusen.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **736** / chronologicalFrontier **2013-05-20** / 05-20群OPEN。
- 前リレー指定の最優先候補 **キャプテンパルサー** がrepo未登録であることを確認し、737件目として追加。

## 今回追加 — キャプテンパルサー

### identity / 性能コア

- manufacturer: **山佐**。
- releaseDate: **2013-05-20**。K-Navi、パチビーで一致。2013年当時資料には5月19日～納品予定表記もあるため、本DBのホール導入時系列キーは複数機種DB一致の05-20を採用。
- formalModelName: **キャプテンパルサー2F**。
- systemType: **5号機 / AT**。
- AT「トレジャーパニック」初当たり: **1/283.2 / 267.5 / 252.6 / 238.2 / 224.0 / 207.0**。
- 機械割主系列: **96.9 / 99.0 / 101.3 / 103.6 / 105.7 / 110.0%**。
- 2-9伝説のみ設定3を **102.3%** とするため `CONFLICT_SETTING3_101.3_VS_102.3`。
- baseGamesPer50: **約32G/50枚**。2013年当時の別系統資料で一致。
- AT「トレジャーパニック」: **1セット40G+α / 純増約2.9枚/G**。
- 5号機クロニクルのみ純増約2.8枚/G表記のため `CONFLICT_ROUNDING_2.9_VS_2.8` を保持。
- 主要モード最大規定G: 通常A **1248G** / 通常B **512G** / 極楽準備（別資料で通常C表記） **1280G** / 天国 **128G** / 超天国 **0G** / 極楽 **128G** / 超極楽 **0G**。
- 最大天井 **1280G**、到達でAT当選。

### resetBehavior v0.7

- 2013年当時解析で、設定変更時は **天井消化Gリセット / 内部モード移行抽選 / 天井規定G再セット**を直接確認。
- パチスロ立ち回り講座でも設定変更後の天井Gクリアを別系統照合。
- 設定変更時も単純電源OFF→ON時も **液晶ステージはランダムスタート**することを当時資料で直接確認。
- 設定変更後も最大天井は **1280Gのまま**で、一律のリセット専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時モード再抽選の存在は直接確認できたが、設定変更専用モード振り分け具体率は現存検索本文から安全に回収できず **`UNVERIFIED_AFTER_RESEARCH`**。
- 純据え置き時のゲーム数/モード/状態保持契約は、設定変更仕様の反対推定を避け、再探索後 **`UNVERIFIED_AFTER_RESEARCH`**。
- 単純電源OFF→ON時は液晶ランダム開始まで確認したが、内部ゲーム数/モード/状態の保持契約は再探索後 **`UNVERIFIED_AFTER_RESEARCH`**。
- ガックン/初期出目等の本機固有変更判別も再探索後 **`UNVERIFIED_AFTER_RESEARCH`**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetQaStatus: **RESEARCHED__SETTING_CHANGE_GAME_COUNTER_RESET_AND_MODE_RESELECT_CONFIRMED__POWER_CYCLE_DISPLAY_RANDOM_CONFIRMED__CARRYOVER_INTERNAL_CONTRACT_UNVERIFIED**。

## 2013-05-20同日群

- 登録済み: **キャッツ・アイ－コレクション奪還作戦**、**キャプテンパルサー**。
- 前リレーで専用資料から **まじかるすいーとプリズム・ナナ**（DAXEL）の2013-05-20導入を確認済みで、次の未処理候補。
- 05-20群は **OPEN**。プリズム・ナナ処理後にHAZUSE/K-Navi/パチビー/メーカー一覧/業界カレンダーで全メーカー横断監査し、漏れがなければCLOSED判定する。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点は引き続き `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 本線収集を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 737 / chronologicalFrontier 2013-05-20 / 05-20群OPEN** から開始。
2. 最優先は **2013-05-20「まじかるすいーとプリズム・ナナ」**（DAXEL）。repo重複確認 → 性能コア + resetBehavior v0.7を本調査 → 保存。
3. その後、05-20同日群をHAZUSE/K-Navi/パチビー/メーカー一覧/業界カレンダーで横断監査し、未登録があれば導入日順に処理、漏れがなければCLOSED。
4. キャプテンパルサーの設定変更時モード具体率、純据え置き内部契約、純電断内部契約、ガックン等は後続QAで直接資料が見つかった場合のみ補完し、推測で埋めない。

## 主要出典 — 取得日 2026-09-06

### キャプテンパルサー

- K-Navi: `https://p-kn.com/slot/1848/`
- パチビー: `https://www.pachibee.jp/movies/index/9340`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7065`
- パチマガスロマガ 機種ページ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/193/yamasa_slot_193.php`
- パチマガスロマガ ボーナス確率・PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/193/h.php`
- pacnk: `https://pacnk.com/slot/2013/captainpulsar/top.php`
- pacnk 設定判別/天井: `https://pacnk.com/slot/tools/sh_captainpulsar.html`
- パチスロ立ち回り講座: `https://crankyseven.com/sp/tenjo-5ka.htm`
- 天井ハイエナ生活 当時解析: `https://macerate.seesaa.net/article/362523309.html`
- 2013年当時機種紹介: `https://ameblo.jp/slostar/entry-11508601427.html`
- 5号機クロニクル 山佐一覧: `https://5goki.com/yamasa`
- 2-9伝説: `https://29den.com/captain-pulsar/`
- 中一商事 実機資料: `https://www.nakaiti.com/html/sYamasa161.html`
- 当時回顧機種資料: `https://pachinko.hatenablog.jp/entry/2013/05/captainPulsar`

### 次候補

- まじかるすいーとプリズム・ナナ K-Navi: `https://p-kn.com/slot/1847/`
