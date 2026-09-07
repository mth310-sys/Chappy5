# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **900**
- latestRecordAdded: **めんそ～れ25**（エマ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-07-21_mensore-25.md`
- chronologicalFrontier: **2015-07-21**
- frontierLatestMachine: **めんそ～れ25**
- frontierRecord: `docs/real_machine_db/machines/2015-07-21_mensore-25.md`
- schema: **resetBehavior v0.7**
- status: **2015-07-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.899 `2015-07-21_ikeike-mahalo-30.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **899件 / 2015-07-21 / 07-21_GROUP_OPEN**。
- handoff指定の最初の未処理候補、エマ「めんそーれ-25 / めんそ～れ25Φ」をNo.885の30Φ版と分離して調査・登録した。

## No.900 — めんそ～れ25

- record: `docs/real_machine_db/machines/2015-07-21_mensore-25.md`
- manufacturer: **エマ**
- formalModelName: **メンソーレ2R**
- inspectionNumber: **5S0168**
- generation: **5号機**
- systemType: **ノーマル / 完全告知 / 25Φ / 技術介入**
- canonical releaseDate: **2015-07-21**

### identity / 導入日

- P-WORLD 25Φ固有ページで型式 **メンソーレ2R**、検定番号 **5S0168**、2015年7月導入を確認。
- 5号機クロニクルは「めんそ～れ30Φ/25Φ」を分離し、30Φ=2015/5、25Φ=2015/7と掲載。
- ALL7は「めんそーれ-25」を **2015-07-21導入予定**とする。
- HAZUSEの5S0168ページは **2015-07-17**とするため `CONFLICT_RELEASE_DATE_2015_07_17_VS_2015_07_21` として保存。ただし同ページ本文には旧2007年「めんそーれ2」系とみられる「めんそーれBIG 1/8192」「ネオスーパーモード」等の異質な記述が混在するため、性能コアには使用しない。
- canonicalは、ALL7の07-21予定 + P-WORLD/5号機クロニクルの2015年7月を採用。07-17情報は削除せず競合保持。

### 性能コア

- BIG: **1/239.2 / 237.4 / 235.7 / 234.1 / 232.4 / 230.8**。
- REG: **1/481.9 / 409.6 / 360.1 / 318.1 / 287.4 / 260.1**。
- 合算: **1/159.8 / 150.3 / 142.5 / 134.8 / 128.5 / 122.3**。
- 機械割: **96.4 / 97.9 / 100.3 / 103.2 / 104.8 / 108.2%**。
- BIG最大 **311枚**、REG最大 **111枚**。
- ボーナス後32G限定で、発生すればBIG確定となるフリーズ「クラッシュ演出」を搭載。この32Gは当選保証・規定G解除・天井ではない。
- 25Φ P-WORLD ID 7751 と30Φ P-WORLD ID 7703で、BIG/REG/合算/機械割/最大獲得枚数/32Gクラッシュ演出が全て一致。5号機クロニクルも同一性能系列として掲載。
- ただし正式型式・検定番号・導入月は別なので独立レコード。resetBehaviorの未公開内部契約は同一と仮定しない。
- 50枚ベースは機種名/型式/検定番号/メーカー名と「50枚/1000円/千円/ベース/コイン持ち」を変更して再探索したが、25Φ固有の明示G数を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior v0.7

- ノーマルタイプでAT/ART/CZ非搭載。AT/ART/CZ用内部モード・高確状態は `NOT_APPLICABLE_NORMAL_TYPE`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 25Φ固有の救済天井は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。30Φ側二次資料の「天井なし」を自動転記しない。
- 設定変更時のボーナス後32Gクラッシュ条件/カウンタ、その他保持情報: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の32G条件・告知関連保持: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更なし純電源OFF→ONの32G条件・表示・リール初動: `UNVERIFIED_AFTER_RESEARCH`。
- リセット専用短縮天井、朝一モード優遇、朝一当選率、恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン/初期出目/ランプ等による変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 30Φ版および旧2007年めんそーれ2のresetBehaviorは流用していない。

## 2015-07-21群監査 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
1. **パチスロ魔法少女リリカルなのは** — 三洋物産 — No.898。
2. **イケイケマハロ-30** — 北電子 — No.899。
3. **めんそ～れ25** — エマ — No.900。

監査結果:
- K-Navi 2015年7月カレンダーの07/21パチスロは **イケイケマハロ-30 / パチスロ魔法少女リリカルなのは**。双方登録済み。
- ALL7の07/21候補は **めんそーれ-25** と **ミリオンゴッドライジング**。後者はパチンコなので本DB対象外。めんそーれ-25は今回No.900で登録済み。
- 07/21に追加すべき別未登録5号機を今回のメーカー横断再探索で固定できなかったため、**2015-07-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 2015-07-22〜2015-07-26境界

- K-Navi 2015年7月導入カレンダーは07/21の次が **2015-07-27**。
- ALL7でも次の具体的導入予定は **2015-07-27**。
- 現時点で07/22〜07/26にcanonical exact dayを置くべき未登録5号機を固定できず、次回開始時に境界を短く再監査してから07/27群へ進む。

## 次回再開地点

1. **recordCount 900 / chronologicalFrontier 2015-07-21 / 07-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.900を再確認。
3. **2015-07-22〜07-26境界を短く再監査**。追加がなければCLOSED化。
4. **2015-07-27同日群**へ進む。最初の強い未処理候補は JPS **「サマージャンボ ～あの夏のチケットの行方～」**。K-Navi/ALL7とも07/27。
5. 07/27同日群を全メーカー横断監査し、未処理5号機を時系列で処理する。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・25Φ/30Φ・前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。

## 主要出典 — 取得日 2026-09-07

### No.900 めんそ～れ25
- P-WORLD 25Φ: https://www.p-world.co.jp/machine/database/7751
- 5号機クロニクル エマ一覧: https://5goki.com/ema
- ALL7 2015年7月: https://www.all7.jp/plans/index/2015/07
- HAZUSE 型式5S0168: https://hazuse.com/machine/pachislot/5S0168/
- P-WORLD 30Φ variant照合: https://www.p-world.co.jp/machine/database/7703

### 境界 / 次回候補
- K-Navi 2015年7月導入カレンダー: https://p-kn.com/calendar/201507/
- ALL7 2015年7月: https://www.all7.jp/plans/index/2015/07
