# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **910**
- latestRecordAdded: **パチスロ北斗の拳 強敵**（サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-09-07_hokuto-no-ken-tomo.md`
- chronologicalFrontier: **2015-09-07**
- frontierLatestMachine: **パチスロ北斗の拳 強敵**
- frontierRecord: `docs/real_machine_db/machines/2015-09-07_hokuto-no-ken-tomo.md`
- schema: **resetBehavior v0.7**
- status: **2015-09-07_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.909 `2015-08-24_skygirls-zero-futatabi.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **909件 / 2015-08-24 / 08-24_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2015-08-25～09-06境界を導入日一覧、メーカー/業界記事、当時解析、後年機種年表で横断監査。08/31を含め、現時点で全国導入日を具体日付きで固定できる未登録5号機を追加発見できず、**2015-08-25_TO_2015-09-06_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 2015-09-07群へ前進し、No.910「パチスロ北斗の拳 強敵」を追加。

## No.910 — パチスロ北斗の拳 強敵

- record: `docs/real_machine_db/machines/2015-09-07_hokuto-no-ken-tomo.md`
- manufacturer: **サミー**
- formalModelName: **パチスロ北斗の拳 強敵ZA**
- inspectionNumber: **5S0225**
- systemType: **5号機 AT / 差枚数管理型AT**
- canonical releaseDate: **2015-09-07**
- サミー公式マイスロが同日を「本日ホール導入日」と明記。K-Navi、グリーンべると系当時記事でも09-07開始を照合。
- 機械割: **97.6 / 98.7 / 101.4 / 103.4 / 107.2 / 113.1%**。
- AT初当たり: **1/432.8 / 411.7 / 386.0 / 361.1 / 326.2 / 291.6**。
- 50枚ベース: **約44.4～44.5G**（他解析の約44Gと丸め一致）。
- AT純増: **約2.8枚/G**。
- AT「激闘乱舞」: **初期100枚以上**、差枚数管理、継続率50%以上。
- 通常天井: **AT間1568G + 最大32G前兆 = 最大1600G → AT当選**。

### resetBehavior v0.7

- 設定変更: **天井G数RESET / 内部モード再抽選**。
- 据え置き: **AT間天井進捗CARRYOVER**として宵越し対象。
- 純電源OFF→ON: **天井G数・内部モードCARRYOVER**（当時リセット/電源ON-OFF対照表の直接記載）。
- リセット専用天井短縮: **なし**。設定変更後も1568G+最大32G。
- 通常時モード: 低確 / 通常 / 高確 / 前兆。
- 設定変更時高確選択率: **25.0 / 26.6 / 28.1 / 29.7 / 31.3 / 32.8%**。
- 設定変更時前兆選択率: **0.4 / 0.8 / CONFLICT(1.2 or 1.5) / 1.6 / 2.0 / 2.3%**。
- 設定3前兆率はman-soft系1.2%とちょんぼりすた1.5%が競合するため平均せず `RESET_FOREGROUND_MODE_SETTING3_CONFLICT`。
- 朝一恩恵: 設定1でも高確以上25%以上。ごく一部で前兆スタート。
- 朝一不利: 設定変更で前日天井ハマリ進捗を消失。
- 変更判別: 当時解析・全リセ店実測動画では**ガックンが比較的明瞭**。ただしメーカー公式保証ではないため `ANALYSIS_SINGLE_PRACTICAL_DETECTION`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2015-09-07群 — OPEN

処理済み:
1. **パチスロ北斗の拳 強敵** — サミー — No.910。

未処理の強い同日候補:
1. **パチスロ聖闘士星矢-女神聖戦-** — 三洋。09-07周辺の当時導入記録を確認済み。次回は導入日の一次/複数照合から開始する。

- 候補だけで同日群を閉じず、同機処理後に09/07全メーカー横断監査を行う。

## 次回再開地点

1. **recordCount 910 / chronologicalFrontier 2015-09-07 / 09-07_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.910を再確認。
3. **「パチスロ聖闘士星矢-女神聖戦-」**の導入日を公式・業界・当時解析で再照合し、未登録なら性能コア + resetBehavior v0.7を収集して追加する。
4. その後、2015-09-07同日群を全メーカー横断監査し、追加未処理機がなければCLOSED判定する。
5. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成せずhandoffを同期する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ無条件転記しない。
- 前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### No.910 パチスロ北斗の拳 強敵
- サミー公式 マイスロ: https://www.sammy.co.jp/japanese/myslot/news/index_12.html
- サミー公式 2015製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/2015/index.html
- サミーネットワークス / PR TIMES: https://prtimes.jp/main/html/rd/p/000000545.000002703.html
- グリーンべると: https://web-greenbelt.jp/00008057/
- K-Navi: https://p-kn.com/slot/2316/
- P-WORLD: https://www.p-world.co.jp/machine/database/7792
- HAZUSE: https://hazuse.com/machine/pachislot/5S0225/
- パチマガスロマガ（50枚ベース）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/145/c.php
- パチマガスロマガ（ゲーム性）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/145/l.php
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/10113/
- パチスロ収支アップ（リセット/電源ON-OFF）: https://smaslo.man-soft.com/slot-kaiseki/hokutonokentomo.html
- すろぱちくえすと（朝一リセット/ガックン）: https://www.slopachi-quest.com/article/hokuto-tomo-reset/
- pacnk（設定変更後天井）: https://pacnk.com/slot/tools/sh_hokutotomo.html
