# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **744**
- latestMachineAdded: **大漁II**（北電子）
- latestRecord: `docs/real_machine_db/machines/2013-07-01_tairyo-ii.md`
- chronologicalFrontier: **2013-07-01**
- frontierLatestExactDateMachine: **大漁II**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-07-01_GROUP__NEXT_MINNANO_JUGGLER_THEN_NINJA_BLADE_AND_FULL_SAME_DAY_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-06-17_eiyuu-densetsu-sora-no-kiseki-the-animation.md` を再読。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **743** / chronologicalFrontier **2013-06-17** / 06-17群CLOSED。
- 2013-06-18～06-30境界をALL7 2013年6月一覧で再監査し、06-17が同月最終パチスロ導入群である前リレー判断と整合。追加対象なし。
- 次候補 **大漁II** をrepo重複確認後、744件目として追加。
- 2013-07-01同日群はまだOPEN。K-Navi/パチビー/HAZUSE/ALL7系から少なくとも **みんなのジャグラー（北電子）**、**NINJA BLADE（マルホン）** が同日候補として確認できるため、次回この順を基準に重複確認・収集し、全メーカー横断で同日群を閉じる。

## 今回追加 — 大漁II

### identity / 性能コア

- manufacturer: **北電子**。
- releaseDate: **2013-07-01**。K-Naviで具体日を確認。グリーンべると当時記事の **6月30日納品開始** と整合。
- systemType: **5号機ノーマルAタイプ / 完全告知**。
- 正式型式名/検定番号は表記揺れ・型式名検索を繰り返したが、4号機「大漁2」と混同せず安全に固定できる2013年本機の一次/高信頼情報を今回確保できず **UNVERIFIED_AFTER_RESEARCH**。
- 機械割: **96.3 / 97.7 / 99.3 / 101.3 / 103.5 / 106.2%**。
- BIG: **1/287.4 / 277.7 / 268.6 / 260.1 / 248.2 / 237.4**。
- REG: **1/455.1 / 442.8 / 420.1 / 399.6 / 381.0 / 364.1**。
- 合算: **1/176.2 / 170.7 / 163.8 / 157.5 / 150.3 / 143.7**。
- 50枚ベース: **約36G/50枚**（単一二次資料のため ANALYSIS_SINGLE）。
- BIG: **約312枚**、REG: **約117枚**。
- ART/AT/RT: **非搭載**。
- 天井: **非搭載**。

### resetBehavior v0.7

- ノーマルAタイプでゲーム数解除・AT/ARTモード・CZ・天井を持たないため、`gameCounterReset`、`ceilingAfterReset`、`modeAfterReset` の該当部分は **NOT_APPLICABLE**。
- 設定変更専用短縮天井/朝一CZ/AT優遇: **NONE / NOT_APPLICABLE**。
- 設定変更専用の朝一当選率・モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**。
- 設定変更時のリール初動、初期出目、表示状態等の本機固有契約は、機種名表記揺れ＋「設定変更/リセット/朝一/ガックン/設定変更後」を組み替え、公式・K-Navi・P-WORLD・当時攻略・古いDBを再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の本機固有表示/リール挙動: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの純電源OFF→ON時の本機固有表示/リール挙動: **UNVERIFIED_AFTER_RESEARCH**。
- ガックン/初期出目等の確定または高信頼変更判別: **UNVERIFIED_AFTER_RESEARCH**。ジャグラー等、北電子他機種の一般論は自動転記していない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetQaStatus: **RESEARCHED__NORMAL_TYPE_NO_CEILING_OR_GAME_NUMBER_MODE__MACHINE_SPECIFIC_SETTING_CHANGE_POWER_CYCLE_AND_DETECTION_UNVERIFIED_AFTER_RESEARCH**。

## 2013-06-18～06-30境界 / 2013-07-01同日群

- ALL7 2013年6月一覧では06-17が同月最後のパチスロ導入群。06-18～06-30に追加対象を確認できず、前回判断を維持。
- 2013-07-01 **大漁II**（北電子）— 今回登録744件目。
- 2013-07-01 **みんなのジャグラー**（北電子）— 未登録。パチビー/HAZUSE等で導入日確認済み。次回最優先。
- 2013-07-01 **NINJA BLADE**（マルホン）— ALL7 2013年7月一覧で同日導入候補。未登録。
- 07-01同日群はまだ **OPEN**。次回はK-Navi/ALL7/メーカー別一覧を横断し、他の同日パチスロがないか最終監査する。

## 遡及resetBehavior QA 進捗

- 本線収集を優先。既存性能値を最初からやり直していない。
- QAカーソルは既存方針を維持し、本線キューとは分岐しない。

## 次回再開地点

1. **recordCount 744 / chronologicalFrontier 2013-07-01 / 07-01群OPEN** から開始。
2. repo重複確認後、**2013-07-01「みんなのジャグラー」（北電子）**を次候補として性能コア + resetBehavior v0.7収集。
3. 続いて **2013-07-01「NINJA BLADE」（マルホン）**を確認・収集。
4. K-Navi / ALL7 / メーカー別一覧 / 当時導入情報で07-01同日群を全メーカー横断監査し、漏れがなければCLOSED。
5. その後、次の具体導入日（ALL7では2013-07-08にドラゴンギャル～修羅の野望～等）へ時系列で進む。
6. 大漁IIの正式型式名/検定番号、機種固有の設定変更リール初動・純電断・変更判別は後続QAで直接資料が見つかった場合のみ補完。

## 主要出典 — 取得日 2026-09-06

### 大漁II

- 北電子公式: `https://www.kitadenshi.co.jp/slot/tairyo2/`
- K-Navi: `https://p-kn.com/slot/1879/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7113`
- グリーンべると当時業界記事: `https://web-greenbelt.jp/00000978/`
- P-WORLD転載グリーンべると: `https://news.p-world.co.jp/articles/5892/greenbelt`
- pacnk: `https://pacnk.com/slot/2013/tairyo2/top.php`
- みんスロ: `https://minslo.com/%E5%A4%A7%E6%BC%81ii/`
- 当時ホール機種解説 / RT・天井非搭載: `https://ameblo.jp/nadataiyo/entry-11669356583.html`
- 2013-05-29当時スペック紹介: `https://ameblo.jp/slostar/entry-11540554289.html`

### 境界 / 次候補

- ALL7 2013年6月導入予定一覧: `https://www.all7.jp/plans/index/2013/06`
- ALL7 2013年7月導入予定一覧: `https://www.all7.jp/plans/index/2013/07`
- パチビー みんなのジャグラー: `https://www.pachibee.jp/movies/index/9535`
- HAZUSE みんなのジャグラー: `https://hazuse.com/machine/pachislot/2S1401/`
