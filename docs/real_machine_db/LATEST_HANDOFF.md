# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **791**
- latestMachineAddedByChronology: **パチスロうみねこのなく頃に**（オーイズミ）
- latestRecord: `docs/real_machine_db/machines/2014-01-20_umineko-no-naku-koro-ni.md`
- chronologicalFrontier: **2014-01-20**
- schema: **resetBehavior v0.7**
- status: **2014-01-20_GROUP_CLOSED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-01-06_mobile-suit-gundam-bisty.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 790 / chronologicalFrontier 2014-01-06 / 01-06群CLOSED。
- 前handoffどおり2014-01-07～01-19境界を監査。2014-01-14「ダービースタリオン」は `CRダービースタリオン` のパチンコ機として除外済みで、他に具体日付き未登録パチスロを今回確認できず。
- 次の未処理候補 **「パチスロうみねこのなく頃に」（オーイズミ）**を791件目として追加。
- 2014-01-20同日一覧の「ゲゲゲの鬼太郎 墓場からの招待状」は藤商事の **CRパチンコ**。同時期に発表されたパチスロは別機種「ゲゲゲの鬼太郎～ブラック鬼太郎の野望～」で、納品は2014年2月上旬予定。よって01-20パチスロ群は今回うみねこ以外の確定未登録機を確認できず **CLOSED**。
- 次の具体日付きパチスロ候補は **2014-01-27「バジリスク～甲賀忍法帖～絆」（エレコ）**。次回は01-21～01-26境界をもう一度監査してから同機へ進む。

## 今回追加 — パチスロうみねこのなく頃に

### identity / 性能コア

- manufacturer: **オーイズミ**。
- modelName: **パチスロうみねこのなく頃にHX**。
- approvalNumber: **3S0831**。
- hall start: K-Navi / ALL7 **2014-01-20**、HAZUSE **2014-01-27**。`CONFLICT_RELEASE_DATE_2014_01_20_VS_2014_01_27` として保持し、複数資料一致の01-20を時系列キーに採用。
- generation/system: **5号機 / ボーナス + 完走型RT / 周期CZ / 技術介入**。
- 通常PAYOUT: **96.1 / 98.7 / 100.2 / 103.4 / 106.2 / 108.5%**。
- フル攻略PAYOUT: **102.2 / 104.1 / 106.6 / 109.0 / 112.7 / 114.7%**。
- BIG合成: **1/390.1 / 381.0 / 372.4 / 364.1 / 352.3 / 348.6**。
- REG: **1/399.6 / 394.8 / 381.0 / 372.4 / 356.2 / 364.1**。
- ボーナス合成: **1/197.4 / 193.9 / 188.3 / 184.1 / 177.1 / 178.1**。
- baseGamesPer50: HAZUSE **約36.3～39.6G/50枚**、CrankySeven約36～40G/1000円で整合。
- RT純増: **約+0.75枚/G**。
- BIG: バトラ/ベアトリーチェBIG **最大314枚**、通常BIG **最大216枚**、REG **最大48枚**。
- 周期CZ「運命分岐モード」: **250G / 500G**。CZ中技術介入成功で次回250G、失敗で500G。
- RT「真相究明モード」: **30G / 50G / 90G**が基本。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 本機専用解析で、設定変更時も **「天井到達までのゲーム数はクリアされない」**ことを直接確認。CZ周期天井Gは `KEEP_CONFIRMED`。
- 設定変更専用の天井短縮・CZ/RT確定・朝一専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 250G/500G周期はCZ技術介入結果による通常仕様であり、設定変更恩恵ではない。
- 純据え置き時について、周期進捗以外のRT状態・内部状態まで含む完全保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの電源OFF→ON時の周期G / RT状態 / 内部状態は、本機専用直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の内部高確状態・液晶状態の再抽選/引継ぎは **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有のガックン / 初期出目 / 表示等による確定的変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 2026年スマスロ「Lパチスロうみねこのなく頃に2」のリセット/電源挙動は別機種のため流用禁止。

## conflicts / safeguards

- 導入日: **2014-01-20 vs 2014-01-27**。平均化せずCONFLICT保持。
- 通常PAYOUTとフル攻略PAYOUTは定義が異なるため別系列。
- 周期250/500Gを朝一専用モードとして扱わない。
- 2026年後継機「うみねこ2」の朝一仕様を2014年初代へ混入しない。

## 2014-01-20同日群 — CLOSED

処理済み:
- **パチスロうみねこのなく頃に**（オーイズミ） — 791件目。

除外確認:
- **ゲゲゲの鬼太郎 墓場からの招待状**（藤商事） — `CRゲゲゲの鬼太郎 墓場からの招待状` のパチンコ機。
- 藤商事の同時期パチスロ **「ゲゲゲの鬼太郎～ブラック鬼太郎の野望～」**は別機種で、2014年2月上旬納品予定。

## 2014-01-21以降の境界

- ALL7の2014年1月導入一覧では次の具体日付きパチスロは **2014-01-27「バジリスク～甲賀忍法帖～絆」（エレコ）**。
- 01-27にはパチンコ「ぱちんこCR世紀末銀狼伝サガ」も掲載されるため、パチンコ/パチスロ分類を分離して監査する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線791件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 791 / chronologicalFrontier 2014-01-20 / 01-20群CLOSED** から開始。
2. **2014-01-21～01-26** をメーカー公式 / 業界導入一覧 / 当時解析DB / 古い新台カレンダーで境界監査する。
3. 未登録パチスロがなければ **2014-01-27「バジリスク～甲賀忍法帖～絆」（エレコ）**を792件目候補として性能コア + resetBehavior v0.7を収集。
4. 01-27同日群を全メーカー横断監査してOPEN/CLOSEDを判定する。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### パチスロうみねこのなく頃に
- K-Navi: `https://p-kn.com/slot/1971/`
- ALL7 2014年1月導入一覧: `https://www.all7.jp/plans/index/2014/01`
- パチマガスロマガ 概要: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/31/a.php`
- パチマガスロマガ 機種TOP / 朝イチ・設定変更項目: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/31/oizumi_slot_31.php`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0831/`
- pacnk: `https://pacnk.com/slot/2014/umineko/top.php`
- CrankySeven: `https://crankyseven.com/umineko-pc.htm`
- CrankySeven CZ: `https://crankyseven.com/sp/umineko8-pc.htm`

### 境界監査
- グリーンべると 2013-12-17（藤商事PS同時発表）: `https://news.p-world.co.jp/articles/6259/greenbelt`
- パチマガスロマガ CRゲゲゲの鬼太郎 墓場からの招待状: `https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/fujishoji_pachi/281/p_dai.php`
