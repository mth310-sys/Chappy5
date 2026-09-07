# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **896**
- latestRecordAdded: **マイジャグラーIII**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-07-06_my-juggler-iii.md`
- chronologicalFrontier: **2015-07-06**
- frontierLatestMachine: **マイジャグラーIII**
- frontierRecord: `docs/real_machine_db/machines/2015-07-06_my-juggler-iii.md`
- schema: **resetBehavior v0.7**
- status: **2015-07-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.895 `2015-07-06_biohazard6.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **895件 / 2015-07-06 / GROUP_OPEN**。

## No.896 — マイジャグラーIII

- record: `docs/real_machine_db/machines/2015-07-06_my-juggler-iii.md`
- manufacturer: **北電子**
- generation: **5号機**
- systemType: **ノーマル / 完全告知 / BIG+REG**
- formalModelName canonical: **マイジャグラーIII KD**
- inspectionNumber: **5S0094**

### 導入日

- K-Navi機種ページ/2015年7月導入カレンダーは **2015-07-06**。カレンダーは「全国一斉導入開始日」を掲載すると明記。
- HAZUSEおよび複数解析/回顧資料は **2015-07-21**。
- `CONFLICT_RELEASE_DATE_2015_07_06_VS_2015_07_21` として両方保持。本線キューではK-Naviの全国一斉導入日2015-07-06をcanonical採用し、07/21系列を削除しない。

### 性能コア

- メーカー発表機械割系列: **95.7 / 97.9 / 99.9 / 102.8 / 105.3 / 109.4%**。
- BIG: **1/287.4 / 282.5 / 273.1 / 264.3 / 252.1 / 240.9**。
- REG: **1/431.2 / 364.1 / 341.3 / 292.6 / 277.7 / 240.9**。
- 合算: **1/172.5 / 159.1 / 151.7 / 138.9 / 132.1 / 120.5**。
- 50枚ベース（チェリー狙い比較値）: **約35.0 / 35.2 / 35.4 / 35.6 / 35.8 / 36.4G**。
- BIG約**312枚**、REG約**104枚**。
- チェリー狙い/フル攻略機械割はメーカー発表値とは打ち方定義が違うため別系列として保持し、平均しない。

### resetBehavior v0.7

- 純ノーマル機のため、ゲーム数天井・規定G解除モード・高低内部状態・AT/ART/CZは非搭載。天井短縮、リセットモード優遇、高確スタート等は `NOT_APPLICABLE`。
- 設定変更そのものによる出玉上の朝一恩恵/不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一1G目の**リールガックン**は設定変更推測材料として当時本機攻略で確認。ただし同一設定打ち直しでも発生し得て、1G回し等で対策可能なため確定判別にしない。
- ボーナス後100G以内のゾロ目G BIGで流れるスペシャルBGMの内部経過は設定変更でリセットされるとする解析があり、前日ヤメGとの合算条件を利用した据え置き/変更推測材料になる。ただしホール側前処理の影響を受けるため確定扱いしない。
- 設定変更なしの**純電源OFF→ONのみ**を独立条件とした本機固有内部契約は検索語/資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 比較可能なリセット専用当選率/モード振り分け/短縮天井G等の公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### conflicts / definition control

- `CONFLICT_RELEASE_DATE_2015_07_06_VS_2015_07_21`。
- `FORMAL_MODEL_NAME_CONFLICT_KD_VS_KK`: HAZUSEの **マイジャグラーIII KD / 5S0094** をcanonical。一部後年攻略のKK表記を競合として保持。
- `PAYOUT_DEFINITION_MULTIPLE_SERIES`: メーカー発表 / チェリー狙い / フル攻略の各機械割は定義差。平均しない。

## 2015-07-06群監査 — CLOSED

処理済み:
1. **パチスロ バイオハザード6** — エンターライズ — No.895。
2. **マイジャグラーIII** — 北電子 — No.896。

最終監査:
- K-Naviの2015年7月カレンダーでは07/06のパチスロ全国一斉導入枠は上記2機種。
- HAZUSE等も含め境界を再確認し、07/06として追加固定すべき別の未登録5号機を今回発見できなかった。
- よって **2015-07-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 2015-07-07〜07-12境界監査

- K-Naviでは07/06の次のパチスロ全国一斉導入アンカーは **2015-07-13**。
- ALL7の2015年7月一覧も07/13にパチスロ候補を掲載。
- 現時点で07/07〜07/12の具体日付き全国初導入5号機は追加固定できず **2015-07-07_TO_2015-07-12_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 次回再開地点

1. **recordCount 896 / chronologicalFrontier 2015-07-06 / 07-06_GROUP_CLOSED** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.896を再確認。
3. **2015-07-13同日群**を全メーカー横断監査する。
4. 強い未処理候補:
   - **鬼神7** — アイ電子/アイゲート系表記。K-Naviはハイライツ・エンタテインメント表記、ALL7はアイ電子、P-WORLDはアイゲート。メーカー/販売・ブランド表記を先に整理してから登録する。
   - **パチスロ魔法少女リリカルなのは** — 三洋物産。ALL7は2015-07-13、K-Naviは2015-07-21で導入日競合があるため、当時業界記事・メーカー/解析資料を横断してcanonicalを決める。
5. 同日群の最初の未処理機種をNo.897として性能コア + resetBehavior v0.7で登録する。
6. `UNVERIFIED_AFTER_RESEARCH` は表記揺れ・型式名・メーカー/販売ブランド名・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界記事・当時解析・古いDB・アーカイブ/回顧資料を横断した後だけ使用。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品予定 / 地域先行 / 全国実ホール導入を分離する。

## 主要出典 — 取得日 2026-09-07

### マイジャグラーIII
- K-Navi: https://p-kn.com/slot/2291/
- K-Navi 2015年7月導入カレンダー: https://p-kn.com/calendar/201507/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0094/
- P-WORLD: https://www.p-world.co.jp/machine/database/7753
- juggler7: https://juggler7.com/my3/
- パチナビ: https://pachinavi.net/machines/my-juggler-iii/settei/
- SLOT HACK コイン持ち: https://slothack.net/matome/17149/
- 同一設定打ち直し実戦資料: https://pachi778.com/myjuggler-post4.html

### 次境界
- K-Navi 2015年7月導入カレンダー: https://p-kn.com/calendar/201507/
- ALL7 2015年7月導入予定: https://www.all7.jp/plans/index/2015/07
- P-WORLD 鬼神7: https://www.p-world.co.jp/machine/database/7750
- パチマガスロマガ 鬼神7: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aidenshi_slot/02/a.php
