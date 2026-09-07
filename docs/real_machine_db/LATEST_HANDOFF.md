# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **917**
- latestRecordAdded: **パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～**（オリンピア / 平和）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-05_lupin-royal-road.md`
- chronologicalFrontier: **2015-10-05**
- frontierLatestMachine: **パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～**
- frontierRecord: `docs/real_machine_db/machines/2015-10-05_lupin-royal-road.md`
- schema: **resetBehavior v0.7**
- status: **2015-10-05_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.916 `2015-09-28_macross-frontier-2-bonus-live-ver.md` を再読。
- INDEXは19件時点の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業途中、No.916が別リレーで先行保存された同期競合を検出。重複ファイルを残さず削除し、正本916件から次の本線へ移動。
- No.917として **「パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～」** を追加。

## No.917 — パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～

- record: `docs/real_machine_db/machines/2015-10-05_lupin-royal-road.md`
- manufacturer: **オリンピア / 平和**
- releaseDate: **2015-10-05**
- generation/system: **5号機 AT / 差枚数管理・セット継続型**
- formalModelName / inspectionNumber: 表記揺れ・型式・検定・5S系まで再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

### performanceCore

- 機械割: **96.7 / 97.9 / 99.9 / 103.9 / 107.9 / 113.1%**。
- AT初当たり: **1/525.7 / 1/504.8 / 1/473.2 / 1/419.8 / 1/367.3 / 1/313.4**。
- CZ初当たり: **1/320.0 / 1/306.5 / 1/284.8 / 1/251.1 / 1/220.6 / 1/201.6**。
- 50枚ベース: **約45.6G**。
- AT純増: **約3.0枚/G**。
- AT「ロイヤルロード」: **1セット100枚**。
- AT間天井: **1967G+前兆**。
- CZ間天井: **967G+前兆**。
- CZ連続失敗天井: 最大7回で銭形ステージ。
- 1999/999G・1950G等の別資料は前兆込み/概数/旧解析差として平均せず保持。
- 初期に流布した銭形ステージ1000/1500G短縮説は後続解析でガセ濃厚のため事実値には採用しない。

### resetBehavior v0.7

- 設定変更: **AT/CZ天井Gリセット / CZスルー天井再抽選 / 初回鍵獲得数再抽選 / 内部状態再抽選**。
- 据え置き: 天井進捗等は引継ぎ側。表示初期化と内部保持を分離。
- 電源OFF→ONのみ: **天井引継ぎ**。解析資料では内部G/CZスルー/鍵情報を引き継ぎ、液晶表示だけ初期化される比較あり。
- 設定変更専用のG数短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### 公開朝一数値

- リセット時CZスルー天井振り分け: **1回5.0 / 2回5.0 / 3回12.5 / 4回12.5 / 5回12.5 / 6回12.5 / 7回40.0%**。
- リセット後初回鍵リプレイ: **1～5個を各20.0%**。
- 設定変更時カギ高確移行率: **25.0 / 25.0 / 31.25 / 31.25 / 37.50 / 37.50%**。
- 朝一初回鍵リプレイで複数鍵獲得なら **設定変更濃厚** とする当時解析あり。
- 本機固有のリールガックン確定契約は再探索しても固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

## 2015-10-05群 — OPEN

処理済み:
1. **パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～** — オリンピア / 平和 — No.917。

既知未処理候補:
2. **ベヨネッタ**。
3. **Zゴールドインフィニティ**。
4. **サイレントヒル**。
5. **クジラッキー**。

- No.916マクロスF2 Bonus Live ver.には2015-10-05表記資料もあるが、2015-09-28 canonical recordの日付工程差として既に保持。10-05群で重複追加しない。
- 同日群は未処理候補が残るため **OPEN**。

## 次回再開地点

1. **recordCount 917 / chronologicalFrontier 2015-10-05 / 10-05_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.917を再確認。
3. 次の未処理候補 **「ベヨネッタ」** を既存レコード検索・導入日確認後に処理する。
4. 続いて Zゴールドインフィニティ / サイレントヒル / クジラッキーを時系列同日群として確認し、全メーカー横断再監査後のみGROUP_CLOSED判定する。
5. resetBehaviorは設定変更・据え置き・純電断を分離し、欠損は検索語/資料系統変更後のみUNVERIFIEDとする。
6. 遡及resetBehavior QAカーソルは新規本線を止めず、2007-03-19長州力より後の最初の既存未QAレコード探索を継続する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- `COMPLETE_CORE` と `resetBehaviorQA` を別管理する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せず `CONFLICT` / 定義差として双方保持。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.917 ルパン三世 ロイヤルロード
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2625/1/53543
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/10966/
- すろぱちくえすと 機種まとめ: https://www.slopachi-quest.com/kisyubetsu/rupin-royalroad/
- すろぱちくえすと CZスルー天井: https://www.slopachi-quest.com/article/rupin-royal-through/
- すろぱちくえすと 朝一2G戦法: https://www.slopachi-quest.com/article/rupin-royal-2g/
- pacnk: https://pacnk.com/slot/2015/lupin2015/top.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7825
- 当時スペック資料: https://ameblo.jp/slostar/entry-12057633727.html

## confidence

- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeilings: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SOURCE_DEFINITION_DIFFERENCE
- settingChangeBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- carryOverBehavior: ANALYSIS_HIGH
- purePowerCycleBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- resetNumericData: ANALYSIS_HIGH_MULTI_SOURCE
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: ANALYSIS_HIGH_FOR_FIRST_KEY / UNVERIFIED_FOR_GAKKUN
