# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **769**
- latestMachineAddedByChronology: **パチスロ 化物語**（Sammy）
- latestRecord: `docs/real_machine_db/machines/2013-10-07_bakemonogatari.md`
- chronologicalFrontier: **2013-10-07**
- frontierLatestExactDateMachine: **パチスロ 化物語**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-10-07_GROUP__NEXT_QUEEN_HANAHANA_30_THEN_FULL_SAME_DAY_AUDIT**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-10-07_persona4-the-slot.md` を再読してから継続。
- INDEXは旧集約状態（19件表記）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正として扱う。
- 作業開始時の正本は **recordCount 768 / chronologicalFrontier 2013-10-07 / 10-07群OPEN**。
- 前handoffの最優先候補 **「パチスロ 化物語」** の既存レコード不在をGitHub mainで確認し、769件目として新規登録。
- 2025年「スマスロ 化物語」と2020年「パチスロ〈物語〉シリーズ セカンドシーズン」が検索に大量混入するため、2013年 `化物語ZX / 3S0599` をidentity anchorとして別機種情報を遮断。

## 今回追加 — パチスロ 化物語

### identity / 性能コア

- manufacturer: **Sammy / サミー**。
- modelName / inspectionNumber: **化物語ZX / 3S0599**。
- releaseDate: **2013-10-07**。HAZUSE / K-Navi / DMMで一致。
- generation/system: **5号機 / 差枚数管理AT / CZ / 疑似ボーナス**。
- 機械割: **97.4 / 98.6 / 100.8 / 103.5 / 107.1 / 112.4%**。
- AT「倖時間」初当たり: **1/215.5 / 1/207.5 / 1/199.4 / 1/191.9 / 1/181.1 / 1/155.4**。
- baseGamesPer50: **約30.5G**。
- AT「倖時間」: **初期150枚 / 純増約2.7枚/G / 差枚数管理**。
- AT中疑似ボーナス: **30G**。
- 天井: **AT消化後の引き戻しゾーン終了後999G + 前兆**、恩恵 **AT + 倍倍CHANCE**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- **設定変更時: 天井Gリセット / AT抽選状態は高確の可能性あり / 液晶は市街地ステージ**。DMM本機専用リセット仕様で直接確認。
- **電源OFF→ONのみ: 天井G・AT抽選状態・液晶ステージを引継ぎ**。同じく本機専用資料で直接確認。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。2025年スマスロ版の600G短縮は別機種なので流用禁止。
- 解呪連モード等の設定変更時具体再抽選契約 / 朝一モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の低確/高確/超高確具体振り分け率: **UNVERIFIED_AFTER_RESEARCH**。「高確の可能性あり」を100%へ拡張しない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。
- 変更判別: 後年実戦回顧で **朝一1G目ガックンあり→変更濃厚 / なし→据え置き濃厚**。ただし朝一7揃い・手動リール操作等で無効化可能なため `ANALYSIS_SINGLE_OBSERVATIONAL` とし、確定判別にはしない。
- publicMorningNumbers: 定量的なモード/状態振り分けは **UNVERIFIED_AFTER_RESEARCH**。天井進捗RESETのみ確定。

## conflicts / safeguards

- 機械割は一般表記 **97.4～112.4%** と精密表記 **97.38～112.42%** があり、丸め精度差として保持。
- AT初当たり設定4/5は主系列 **1/191.9 / 1/181.1** に対し一部二次資料 **1/191.4 / 1/181.0**。平均せず軽微CONFLICT注記。
- **スマスロ 化物語（2025）**のリセット600G、有利区間、HIGHモード等は絶対に2013年機へ混入させない。
- **物語シリーズ セカンドシーズン（2020）**も別機種。

## 2013-10-07同日群 — OPEN

処理済み:
- **Persona4 The SLOT**（ニューギン） — record 768。
- **パチスロ 化物語**（Sammy） — record 769。

確認済み未処理候補:
- **クイーンハナハナ-30（パイオニア）** — パチビーで2013-10-07導入。

同日群はまだ全メーカー横断CLOSED監査前。クイーンハナハナ-30処理後にHAZUSE / P-WORLD / K-Navi / パチビー / メーカー公式 / 当時業界資料で追加候補を再監査する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線769件目を優先し、QAカーソルは前進させていない。

## 次回再開地点

1. **recordCount 769 / chronologicalFrontier 2013-10-07 / 10-07群OPEN** から開始。
2. まず **「クイーンハナハナ-30」（パイオニア）** の重複確認 → 性能コア + resetBehavior v0.7を770件目候補として処理。
3. 2013-10-07同日群をHAZUSE / P-WORLD / K-Navi / パチビー / メーカー・当時業界資料で全メーカー横断監査。
4. 追加未処理がなければ10-07群をCLOSEDし、次の具体導入日へ前進。
5. 導入予定日・納品開始日・実ホール導入日・検定日・記事日を分離して保持する。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から再開。

## 主要出典 — 取得日 2026-09-06

### パチスロ 化物語

- Sammy公式: `https://www.sammy.co.jp/japanese/product/pachislot/bakemonogatari/` — 初代製品identity。
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0599/` — 2013-10-07、型式/検定、機械割。
- HAZUSE基本スペック: `https://hazuse.com/machine/pachislot/3S0599/genre/201/` — AT初当たり、30.5G/50枚、機械割。
- K-Navi: `https://p-kn.com/slot/1930/` — 導入日、AT初当たり、初期150枚、純増2.7枚/G、CZ概要。
- DMMぱちタウン: `https://p-town.dmm.com/machines/1037` — 型式/導入、天井、設定変更と電源OFF→ONのリセット契約。
- パチスロ解析ガイド: `https://pachislot-guide.net/2013/bakemonogatari/` — 精密機械割、AT基本性能。
- 当時天井解析: `https://www.slopachi-quest.com/article/376823545.html` — 999G天井、設定変更で天井Gリセット。
- ガックン実戦回顧: `https://sin-surobi.com/bakemonogatari/12767/` — 朝一1Gガックン観測と注意条件。

### 次候補

- パチビー クイーンハナハナ-30: `https://www.pachibee.jp/machines/about/213080011` — 2013-10-07導入。

## commits

- 769th record add: `95ce9538c1caa925683c7d570f8421681398232c` (`db: add Bakemonogatari with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay through Bakemonogatari`)
