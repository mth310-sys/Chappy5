# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **338件地点 / 悪魔城ドラキュラ（2009-01-05 / 01-06日付CONFLICT）まで接続済み**。
- 2009-01-07〜11を具体日付き導入/納品資料で再監査し、今回この区間へ安全に追加すべき未処理パチスロは確定せず。
- 1/12同日群を監査し、既存 `キング・コング` は再追加せず、当時業界記事で **2009-01-12納品開始**が直接確認できた `忍魂` を **339件目**として追加。
- `忍魂` は後年DBに2009-01-13導入表記もあるため、納品開始日/ホール導入日の定義差を保持。
- **既存339件の再追加禁止。**

## 339. 忍魂

record:
- `docs/real_machine_db/machines/2009-01-12_shinobi-damashii.md`

要点:
- machineName: **忍魂**
- manufacturer: **大都技研**
- modelNumber: **シノビダマシイ3**
- releaseDate: **2009-01-12納品開始 / 2009-01-13導入表記あり**。平均せず定義差として保持。
- generation: **5号機**
- systemType: **ボーナス+A+ART（周期RT/CZ状態あり）**
- 設定構成: **1 / 3 / 5 / 6**
- 機械割: **96.1 / 99.1 / 105.6 / 114.2%**。複数資料一致。
- BIG: **1/394.8 / 1/385.5 / 1/368.1 / 1/352.3**。
- REG: **1/992.9 / 1/885.6 / 1/780.1 / 1/728.1**。
- ボーナス合算: **1/282.4 / 1/268.5 / 1/250.1 / 1/237.4**。
- 50枚ベース: **約31.8G**。比較可能な別系統数値は今回未回収のため `ANALYSIS_SINGLE`。
- BIG約**220枚**、REG約**100枚**。当時業界/P-WORLD/パチマガスロマガで一致。
- 5号機クロニクルのBIG約204枚/REG約54枚は当時資料系列と大きく異なるため **CONFLICT** として分離。
- ART「月光ノ刻」: **1セット50G、約+1.5枚/G**。当時業界/P-WORLD/パチマガスロマガで一致。5号機クロニクル約+1.4枚/GはCONFLICT候補として分離。
- 通常天井: **ボーナス間1200G+潜伏でART**。
- `coreStatus=COMPLETE_CORE_WITH_BASE_SINGLE_SOURCE_AND_PAYOUT_RETROSPECTIVE_CONFLICT`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **設定変更時は天井までのG数と残存ART G数をリセットし、周期RT状態から開始**。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: 通常1200G+潜伏の天井カウンタを0から再起算。リセット専用短縮天井は確認できず。
- `stateAfterReset`: **PERIODIC_RT_START_ON_SETTING_CHANGE**。
- `modeAfterReset`: 朝一専用モードは確認できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井/ART残G/RT状態を本機固有に直接記述した資料は今回未回収。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの処理は直接資料未回収。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetPenalties`: 設定変更すると前日ボーナス間天井Gと残存ART Gが消える。
- `resetDetection`: 設定変更後の周期RTでは転落リプレイが**全設定1/2.0**。朝一数Gで転落リプレイ出現なら変更可能性が高まるとCrankySevenが明記。
- 周期RT中の通常リプレイ: **1/5.4 / 1/5.5 / 1/5.5 / 1/5.6**。
- 周期RT中の昇格リプレイ: **1/16.3 / 1/15.5 / 1/15.9 / 1/15.1**。入賞で超高確率状態へ移行。
- ガックンによる確定判別、設定変更時当選率、朝一当選率/恩恵発生率は確認できず。
- `resetBehaviorQA=PARTIAL_HIGH_CONFIDENCE_SETTING_CHANGE_AND_DETECTION_POWER_CYCLE_CARRYOVER_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00003950/
- https://news.p-world.co.jp/articles/3212/greenbelt
- https://www.p-world.co.jp/machine/database/5406
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/43/a.php
- https://crankyseven.com/shinobidamashii-pc.htm
- https://ameblo.jp/thundervsp5/entry-12819702765.html
- https://minslo.com/%E5%BF%8D%E9%AD%82/
- https://5goki.com/daito
- https://pachimaga.com/free/special/72987e6fab449f1bec72e843ebc560ba24982c65.php

## 2009-01境界監査

- 1/4 `パチスロ秘密戦隊ゴレンジャー`は既存337。
- 1/5・1/6 `悪魔城ドラキュラ`は日付CONFLICTの既存338。
- **1/7〜11は今回再監査し、具体日付きで安全に追加できる未処理機を確定せず。**
- 1/12 `キング・コング` は既存レコードのため再追加禁止。
- 1/12納品開始 `忍魂` を339として追加。1/13導入表記は定義差としてレコード内保持。
- 次は **2009-01-13〜17** の具体日付き未処理機を監査する。
- その区間を閉じた後、既確認の **2009-01-18 南国育ち30** へ接続する。
- 月単位候補 `がんばれ満月姫! / アイムマジック / バケーション / KELOT / マキシマムインパクト / 甘ぴかっ / スペシャルオアシス` は具体導入日を確定してから正しい位置へ挿入する。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12の正しい位置へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 既存性能値を無駄にやり直さず、既存レコードを時系列走査して **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**からQAを継続する。
- 既にv0.7化済み機種は飛ばす。
- PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから残す。

## 次回再開地点

1. **LATEST_HANDOFF基準339件地点。悪魔城ドラキュラ → 1/7〜11境界監査 → 1/12忍魂まで接続済み。既存1/12キング・コングも保持。**
2. まず **2009-01-13〜17** に具体日付き未処理機がないか監査する。
3. 未処理があれば古い順に性能コア+v0.7 resetBehaviorを収集。
4. 区間を閉じたら **2009-01-18 南国育ち30** の既存/未処理状態を確認して接続する。
5. 月単位候補は具体日確定後のみ正しい位置へ追加する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. 一般論や別シリーズ値から推測補完しない。

## コミット（今回）

- 339 忍魂: `d9d88c2a3dac25c6373ea8586f797ba6d22df4cf`
