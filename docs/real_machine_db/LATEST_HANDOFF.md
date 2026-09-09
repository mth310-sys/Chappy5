更新日: 2026-09-09

## 現在地点
- recordCount: **1074**
- latestRecordAdded: **パチスロ 呪怨**（藤商事）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-05-08_juon.md`
- chronologicalFrontier: **2017-05-08**
- frontierLatestMachine: **パチスロ 呪怨 — No.1074**
- schema: **resetBehavior v0.7**
- status: **2017-05-08_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1073「パチスロサクラ大戦～熱き血潮に～」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1073件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN**。
- 次未処理「パチスロ 呪怨」をNo.1074として登録。
- 藤商事公式で製品名・ST+・設定別出玉率を確認。HAZUSE/パチビー/複数解析で導入日2017-05-08一致。HAZUSEで型式「呪怨FSC」、検定番号6S1567を確認。
- canonical機械割は公式 **97.14/98.60/100.21/103.64/106.55/110.42%**。解析サイトの小数第1位系列は丸め値として分離し、平均化していない。
- 伽椰子ボーナス初当たり **1/354.7/326.9/339.7/271.1/270.7/227.2**、ART初当たり **1/863.2/800.1/726.1/637.9/546.9/466.3**、ベース約46.7G/50枚、純増約1.9枚/G。
- 通常天井は **1200G or 内部1100pt+前兆**。ポイントは基本1G=1ptだがCZ前兆/CZ中は加算停止。
- 設定変更時は天井ゲーム数CLEAR、モード/状態RESELECT、学校or編集室ステージ。内部ポイントは **0pt 85.16% / 200pt 10.94% / 500pt 2.34% / 900pt 1.56%**へ再抽選。
- 0pt以外開始は合計 **14.84%**で、1100ptポイント天井までの実質残距離が短縮。ただし固定G短縮として扱わない。
- 純電源OFF→ONでは天井ゲーム数/モード/状態CARRYOVER。ステージは電断前が学校/編集室なら引継ぎ、それ以外は「それ以外のステージ or 編集室」を抽選。
- 純電断時の内部ポイント単独契約、据え置きの全項目直接契約、設定変更時のモード/状態数値振り分け、本機固有確定ガックンは検索語・資料系統を変えても直接固定できず、推測補完していない。
- 有利区間はNOT_APPLICABLE_5TH_GEN_PRE_5_9。
- 2017-05-08群は **忍魂 ～暁ノ章～ / ラッキーベガス** が未処理候補として残るためOPENを維持。
- 遡及reset QAカーソルは `2006-05-15_looney-tunes-bia.md` を維持。新規本線を優先し今回は未更新。

## No.1074 — パチスロ 呪怨
- manufacturer: **藤商事**
- releaseDate: **2017-05-08**
- formalModelName: **呪怨FSC**
- certificationNumber: **6S1567**
- generation/system: **5号機 / 5.5号機 / ART / ST型ART / CZ / 疑似ボーナス**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.14 / 98.60 / 100.21 / 103.64 / 106.55 / 110.42%**（藤商事公式）。
- 伽椰子ボーナス初当たり: **1/354.7 / 326.9 / 339.7 / 271.1 / 270.7 / 227.2**。
- ART「業深き刻」初当たり: **1/863.2 / 800.1 / 726.1 / 637.9 / 546.9 / 466.3**。
- 50枚ベース: canonical **約46.7G**。約46G/約47G表記は丸め差として保持。
- 純増: **約1.9枚/G**。
- 伽椰子ボーナス: **50G / ST突入約40～41%**。
- ART「業深き刻」: **1セット50G / ボーナス当選で50Gへ再セット / ループ率70～90%**。
- 通常天井: **1200G or 内部1100pt+前兆**。

### resetBehavior v0.7
- settingChange: 天井ゲーム数CLEAR / モードRESELECT / 状態RESELECT / 学校or編集室ステージ。
- resetInitialInternalPoint: **0pt=85.16%, 200pt=10.94%, 500pt=2.34%, 900pt=1.56%**。
- resetInitialPointAboveZeroTotal: **14.84%**。
- powerCycle: 天井ゲーム数CARRYOVER / モードCARRYOVER / 状態CARRYOVER。
- powerCycleStage: 学校/編集室なら引継ぎ。それ以外は「それ以外のステージ or 編集室」を抽選。
- powerCycle internal point direct contract: `UNVERIFIED_AFTER_RESEARCH`。
- carryOver full direct contract: `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- reset mode/state numeric distribution: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetection: 学校/編集室はリセット候補。それ以外開始は据え置き可能性が高い。学校/編集室のみでは電断でも成立し得るため確定判別ではない。
- deterministic machine-specific gakkun: `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2017-05-08群監査
- status: **OPEN**。
- 登録済み: **パチスロ マクロスフロンティア3 — No.1072 / パチスロサクラ大戦～熱き血潮に～ — No.1073 / パチスロ 呪怨 — No.1074**。
- 次未処理候補:
  1. **忍魂 ～暁ノ章～**（大都技研）
  2. **ラッキーベガス**（導入日/メーカーを別系統資料で再固定してから処理）
- 5/8群はまだCLOSEDにしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1074を再取得。
2. **1074件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN** を正本として継続。
3. 次未処理 **「忍魂 ～暁ノ章～」** をNo.1075候補として性能コア+resetBehavior v0.7まで処理。
4. その後 **ラッキーベガス** の導入日/メーカーを別系統資料で再固定して処理。
5. 5/8群の全メーカー横断監査後にCLOSED判定し、次の日付境界へ進む。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1074 パチスロ 呪怨
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_juon/
- HAZUSE 基本: https://hazuse.com/machine/pachislot/6S1567/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/6S1567/genre/207/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_juon/3/
- 一撃 内部ポイント: https://1geki.jp/slot/s_juon/42/
- 一撃 ART概要: https://1geki.jp/slot/s_juon/81/
- 一撃 朝一/設定判別: https://1geki.jp/slot/s_juon/5/
- パチビー: https://www.pachibee.jp/machines/about/217040001
- P-WORLD: https://www.p-world.co.jp/machine/database/8328
- すろぱちくえすと: https://www.slopachi-quest.com/article/jyuon/
- 期待値見える化: https://slotjin.com/zone/juon/

### 次候補 / 5月8日群
- パチビー 忍魂 ～暁ノ章～: https://www.pachibee.jp/machines/about/217040006
- K-Navi 忍魂 ～暁ノ章～: https://p-kn.com/slot/2774/
