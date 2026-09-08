更新日: 2026-09-09

## 現在地点
- recordCount: **1056**
- latestRecordAdded: **アイムジャグラーEX AnniversaryEdition**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-03-13_im-juggler-ex-anniversary-edition.md`
- chronologicalFrontier: **2017-03-13**
- frontierLatestMachine: **アイムジャグラーEX AnniversaryEdition — No.1056**
- schema: **resetBehavior v0.7**
- status: **2017-03-13_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1055実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1055件 / chronologicalFrontier 2017-03-06 / 2017-03-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2017-03-13境界の先行候補をmain検索し、未登録の **アイムジャグラーEX AnniversaryEdition** をNo.1056として追加。
- 性能コア＋resetBehavior v0.7を同時収集。天井/ゲーム数管理/モード/高確を持たないノーマル機のため該当しないreset項目を明示し、存在しない内部契約を推測で補完していない。
- 朝一ガックンは本機固有/シリーズ比較資料で「発生し得るが非常に小さく目視判別が難しい」と確認。確定判別ではなく `WEAK_INFERENCE_NOT_DETERMINISTIC` とした。
- ボーナス後スペシャルBGMの前日跨ぎによる据え置き推測は実戦系資料で確認したが、公式契約ではないため `LOW_CONFIDENCE_SECONDARY` として隔離。純電源OFF→ON時のBGM用履歴保持は一般論から補わず `UNVERIFIED_AFTER_RESEARCH`。
- 3/13群は **OPEN**。未処理確認済み候補「みんなで楽シーサー」「パチスロ 輪るピングドラム」を続けて監査する。

## No.1056 — アイムジャグラーEX AnniversaryEdition
- manufacturer: **北電子**
- releaseDate canonical: **2017-03-13**
- formalModelName: **アイムジャグラーEX-AnniversaryEdition／KK**
- certificationNumber: **6S0442**
- generation/system: **5号機 / 5.5号機期 / ノーマルA / 完全告知**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_LOW_CONFIDENCE_BGM_CARRYOVER_NOTE**

### performanceCore
- 機械割: **95.9 / 96.7 / 98.7 / 100.8 / 102.8 / 105.2%**。
- BIG: **1/287.4 / 282.5 / 282.5 / 273.1 / 273.1 / 268.6**。
- REG: **1/455.1 / 442.8 / 348.6 / 321.3 / 268.6 / 268.6**。
- 合算: **1/176.2 / 172.5 / 156.0 / 147.6 / 135.4 / 134.3**。
- 50枚ベース代表: **約34G/50枚**。チェリー狙い解析値は設定1〜6で **34.53〜35.87G/50枚**、完全小役奪取は **35.00〜36.38G/50枚**として定義分離。
- BIG約**325枚**、REG約**104枚**。
- 技術介入/小役取得条件の異なる後年解析機械割 **96.91〜106.55%** は公表値へ平均せず別系列保持。

### resetBehavior v0.7
- 天井・ゾーン: **NOT_APPLICABLE / 非搭載**。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE**。朝一専用モードなし。
- stateAfterReset: AT/ART系通常/高確は **NOT_APPLICABLE**。設定変更専用状態は `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 短縮天井、高確、初当たり優遇等 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 天井進捗消失等 **NOT_APPLICABLE**。
- resetDetection: 朝一リールガックンは存在するが非常に小さく判別困難。確定変更判別にはしない。
- 据え置き推測: スペシャルBGM用ゲーム数が前日から継続したとみられる実戦例あり。ただし `LOW_CONFIDENCE_SECONDARY`。
- 純電源OFF→ON時のスペシャルBGM履歴: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の公開数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQuality / conflicts
- 導入日はHAZUSE / K-Navi / パチビー / 当時解析で2017-03-13一致。
- 型式 `/KK` と検定番号 `6S0442` はHAZUSEで直接確認。
- 北電子公式に製品ページと2017-01-13特設サイト公開履歴が現存。
- ボーナス確率・機械割はHAZUSE、ちょんぼりすた、中古実機DB等の複数系統で一致。
- 代表ベース約34Gと打ち方別詳細ベースは同一値へ平均化しない。
- 公表機械割とチェリー狙い解析機械割は `DEFINITION_DIFFERENCE_PAYOUT_PUBLISHED_VS_CHERRY_TARGETING_ANALYSIS` として分離。
- スペシャルBGM跨ぎは公式確定契約ではないため低信頼注記のまま保存。

## 2017-03-13群監査
- status: **OPEN**。
- 登録済み:
  - アイムジャグラーEX AnniversaryEdition — No.1056。
- 次の未処理先行候補:
  - **みんなで楽シーサー**。
  - **パチスロ 輪るピングドラム**。
- 上記処理後に同日全メーカー横断監査を行い、3/13群CLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 性能statusは維持し、reset QAのみ別管理する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1056を再取得。
2. **1056件 / chronologicalFrontier 2017-03-13 / 3/13群OPEN** を正本として継続。
3. main未登録を再確認し、次の先行候補 **「みんなで楽シーサー」** からNo.1057候補として処理。
4. 続けて **「パチスロ 輪るピングドラム」** と3/13同日全メーカー監査を行う。
5. 遡及QAは **`2006-05_gold-shio-30.md`** から継続する。性能値は無駄に再収集せずresetBehaviorのみ再QA。

## 主要出典 — 取得日 2026-09-09
### No.1056 アイムジャグラーEX AnniversaryEdition
- 北電子公式製品ページ: https://www.kitadenshi.co.jp/products/2017/ae_p/
- 北電子ニュース履歴: https://www.kitadenshi.co.jp/hallnews/page/13/
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/8968/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/6S0442/
- P-WORLD: https://www.p-world.co.jp/machine/database/8275
- K-Navi プレミアムピンク: https://p-kn.com/slot/2708/
- K-Navi プレミアムホワイト: https://p-kn.com/slot/2707/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/31983/
- イチカツ: https://ichikatsu.com/imjuggler20th/
- jugjug.net: https://jugjug.net/imjugglerex
- パチよみ ガックン比較: https://www.ps-channel.net/gakkuncheck/
- 実戦系据え置きBGM資料: https://pachi778.com/imjugglerex-ae-deferred.html

### 3/13群監査 / 次境界
- 2-9伝説 新台導入一覧: https://29den.com/newslot/

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
