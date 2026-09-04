# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **621**
- latestMachineAdded: **ミラクルジャグラー**（北電子）
- latestRecord: `docs/real_machine_db/machines/2011-11-21_miracle-juggler.md`
- chronologicalFrontier: **2011-11-21**
- frontierLatestExactDateMachine: **ミラクルジャグラー**
- schema: **resetBehavior v0.7**
- status: **CONTINUE_2011-11-21_SAME_DAY_GROUP**

## 今回の本線追加 — ミラクルジャグラー

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「赤ドン雅」を再取得して開始。
- 開始時正本は **recordCount 620 / chronologicalFrontier 2011-11-21**。INDEXは旧19件地点のためREADME規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定どおり2011-11-21同日群を継続。repo code searchで「ミラクルジャグラー」未検出を確認して621件目として追加。
- 北電子公式検定ページで型式名 **ミラクルジャグラーK** を確認。アタリ7で導入日 **2011-11-21** を確認し、2011-09-20の業界発表とも時系列整合。

### 性能コア

- 5号機 / ノーマルA / 完全告知。
- メーカー: **北電子**。
- 北電子公式・工場データ予測出玉率: **95.7 / 97.5 / 99.0 / 101.2 / 103.9 / 107.9%**。
- BIG: **1/292.6 / 1/282.5 / 1/273.1 / 1/268.6 / 1/256.0 / 1/230.8**。
- REG: **1/468.1 / 1/431.2 / 1/399.6 / 1/341.3 / 1/309.1 / 1/356.2**。
- 合算: **1/180.1 / 1/170.7 / 1/162.2 / 1/150.3 / 1/140.0 / 1/140.0**。
- BIG約**312枚**、REG約**104枚**。
- 50枚ベースは定義別保持。後年整理の1000円目安 **35.47～36.68G**、チェリー狙い **36.14～37.39G**、完全小役獲得 **36.32～37.58G**。平均化しない。
- 技術介入条件別出玉率に **96.16～109.42%** 等の系列があるが、北電子公式値と条件が異なるため **DEFINITION_DIFFERENCE_PLAY_METHOD** として分離。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- 本機固有の設定判別資料で、**設定変更後に店側が回していなければ朝一1G目にリールがガクッと震えてスタートする**と明記。
- 同資料自身が、毎ゲームガックンする個体や微妙なガックンもあり過信禁物と注意。店側の事前回転でも条件が崩れるため、確定判別ではなく変更推測材料として保存。
- `resetDetection`: **GAKKUN_CHECK_SUPPORTED_MACHINE_SPECIFIC_ANALYSIS_WITH_CAVEATS**。
- 通常ゲーム数天井・規定G数当選・AT/ART長期モードは確認されず、`gameCounterReset` / `ceilingAfterReset` は **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一高確保証、朝一特定G以内当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 単純電源OFF→ONのみで設定変更時と同じガックンになるかは本機固有の直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。後継機/他ジャグラー一般則を流用しない。
- 有利区間: **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_BEHAVIOR_WITH_DIRECT_GAKKUN_DETECTION**。

### CONFLICT / 定義差

1. 北電子公式出玉率95.7～107.9%は工場データ予測値。後年攻略ではチェリー狙い96.16～109.42%等があり、遊技条件差として分離し平均化しない。
2. 50枚ベースも1000円目安、チェリー狙い、完全小役獲得で系列が異なるため定義別保持。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 621 / chronologicalFrontier 2011-11-21**から開始。
2. **2011-11-21同日群をまだ閉じずに継続**する。
3. 次候補 **ストリートファイターIV（エンターライズ）** をrepo重複確認する。HAZUSE DATAで型式 **ストリートファイターIVX**、検定番号 **1S0375**、導入開始日 **2011-11-21** を先行確認済み。未登録なら622件目として性能コア＋resetBehavior v0.7を処理する。
4. ストリートファイターIV処理後も11/21同日群をK-Navi、HAZUSE、メーカー別一覧、当時業界記事で最終監査してから次の日付へ進む。
5. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間を組み替えて再探索。
6. 競合値は平均せずCONFLICT。一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### ミラクルジャグラー
- 北電子公式「ミラクルジャグラー」: `https://www.kitadenshi.co.jp/slot/miraclejuggler/`
- 北電子公式「ミラクルジャグラーK 検定情報」: `https://www.kitadenshi.co.jp/slot-kentei/miraclejuggler/`
- P-WORLD業界ニュース（グリーンべると 2011-09-20）: `https://news.p-world.co.jp/articles/4910/greenbelt`
- アタリ7: `https://www.atari7.com/slot/miracle-juggler.php`
- K-Navi: `https://p-kn.com/slot/1507/`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6504`
- ジャグラー7: `https://juggler7.com/miracle/`
- 激アツ 設定判別: `https://gekiatsu7.com/slot-analyze/2058/`
- パチナビ: `https://pachinavi.net/machines/miracle-juggler/`
- ジャグラーアナリティクス: `https://akirameruna.com/juggler-spec`

### 次回候補先行確認
- HAZUSE DATA「ストリートファイターIV」: `https://hazuse.com/machine/pachislot/1S0375/`

### 次回順序確認
- **2011-11-21同日群を継続。第一候補はストリートファイターIV。同日最終監査後に次の日付へ進む。**
