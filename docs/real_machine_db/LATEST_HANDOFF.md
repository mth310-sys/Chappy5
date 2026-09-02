# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **339件地点 / 忍魂（2009-01-12納品開始、1/13導入表記あり）まで接続済み**。
- 2009-01-13〜17を `導入 / 納品 / 発売 / 新台 / 型式 / メーカー` の具体日検索で再監査したが、今回この区間へ安全に追加すべき未処理パチスロは確定せず。
- 直前handoffで次の確定候補だった **南国育ち30** を既存検索し、未収録を確認。
- 当時グリーンべると/P-WORLD業界ニュースで **2009-01-18納品開始**を直接確認し、**340件目**として追加。
- **既存340件の再追加禁止。**

## 340. 南国育ち30

record:
- `docs/real_machine_db/machines/2009-01-18_nangoku-sodachi-30.md`

要点:
- machineName: **南国育ち30**
- manufacturer: **オリンピア（製造元: 平和）**
- modelNumber: **南国育ちR2-30**
- 検定番号: **8S1065**
- releaseDate: **2009-01-18納品開始**。当時業界記事で直接確認。
- generation: **5号機**
- medalDiameter: **30φ**
- systemType: **ボーナス + モード管理 + ART「南国チャンス」 + 天井RT**
- 当時グリーンべるとが **「30φ機のゲーム性は全て25φ機と同等」** と明記。25φ既存レコードと混同せず、30φを独立機種として保存。
- BIG: **1/397.19 / 1/392.43 / 1/387.79 / 1/383.25 / 1/378.82 / 1/374.49**。
- REG: **1/668.73 / 1/661.98 / 1/655.36 / 1/648.87 / 1/642.51 / 1/636.27**。
- 合算: **1/249.19 / 1/246.38 / 1/243.63 / 1/240.94 / 1/238.31 / 1/235.74**。パチマガスロマガ「南国育ち&30」の共通表。
- BIG約**204枚**、REG約**48枚**。
- ART「南国チャンス」: **50G/セット、約+1.5枚/G、平均継続率80%以上**。
- 天井RT: **通常996G、約+0.3枚/G**。
- 50枚ベース: **約35.1G**。30φ固有の独立表は未回収だが、当時業界記事の25φとの完全同等ゲーム仕様と既存25φ根拠から `DERIVED_FROM_CONTEMPORARY_CONFIRMED_SAME_GAME_SPEC` として明示保持。
- 機械割はパチマガスロマガのシミュレート **95.11 / 97.95 / 100.95 / 104.53 / 108.21 / 111.02%** とP-WORLD/後年DBの **95.4〜111.4%系列**が競合。平均せず `CONFLICT`。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_RATE_CONFLICT_AND_BASE_DERIVED_FROM_CONFIRMED_SAME_SPEC`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **CONFIRMED**。2009年30φ本機P-WORLDが、設定変更後も天井までのG数はクリアされず、高確モードからスタートと直接掲載。
- `gameCounterReset`: **NOT_RESET_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: **NO_RESET_SHORTENING_CONFIRMED**。通常996G天井までの残Gを保持し、専用短縮天井は確認されず。
- `modeAfterReset`: **HIGH_MODE_START_CONFIRMED**。
- `carryOverBehavior`: **PARTIAL_CONFIRMED_BY_COUNTER_RULE**。少なくとも天井カウンタは設定変更でも保持。単純据え置き時のART/無限ART/天井RT/通常モード翌日処理は包括的に未確定。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。2009年本機固有の電源OFF→ONのみの天井/モード/ART状態処理を直接説明する資料は未回収。2021年同名6号機資料は別機種として排除。
- `stateAfterReset`: **PARTIAL**。通常モードの高確開始は確認。ART/無限ART/天井RT中の設定変更時処理は未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **高確モード開始**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。少なくとも天井G消去型の不利はない。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。`南国育ち30 / 南国育ちR2-30 / オリンピア / 平和` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / ランプ / 天井 / モード` を組み替え、当時業界・解析・古いDB・回顧資料を横断したが2009年本機固有の確定判別手段を回収できず。
- `numericResetData`: **通常天井996G / 設定変更時カウンタ非クリア / 高確モード開始**。
- `resetBehaviorQA=SUBSTANTIAL_SETTING_CHANGE_CONFIRMED_POWER_CYCLE_CARRYOVER_STATE_AND_DETECTION_PARTIAL_OR_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00003956/
- https://news.p-world.co.jp/articles/3206/greenbelt
- https://www.p-world.co.jp/machine/database/5422
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/85/h.php
- https://5goki.com/heiwa-olympia
- `docs/real_machine_db/machines/2008-11-03_nangoku-sodachi.md`（25φ既存レコード。ゲーム性同等の当時一次寄り根拠がある項目だけ派生照合）

## 2009-01境界監査

- 1/4 `パチスロ秘密戦隊ゴレンジャー` は既存337。
- 1/5・1/6 `悪魔城ドラキュラ` は日付CONFLICTの既存338。
- 1/7〜11は具体日付きで安全に追加できる未処理機を確定せず。
- 1/12 `キング・コング` は既存。1/12納品開始 `忍魂` は既存339。
- **1/13〜17は今回再監査し、具体日付きで安全に追加できる未処理機を確定せず。**
- **1/18 `南国育ち30` を340として追加。**
- 次は **2009-01-19〜24** を具体日付き未処理監査する。
- その区間を閉じた後、当時グリーンべるとで **2009-01-25納品開始予定**を直接確認できる **山佐 `パチスロ「KELOT」`** を既存/未処理確認して接続候補とする。
- 月単位候補 `がんばれ満月姫! / アイムマジック / バケーション / マキシマムインパクト / 甘ぴかっ / スペシャルオアシス` は具体導入日を確定してから正しい位置へ挿入する。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12の正しい位置へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 既存性能値を無駄にやり直さず、既存レコードを時系列走査して **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**からQAを継続する。
- 既にv0.7化済み機種は飛ばす。
- PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから残す。

## 次回再開地点

1. **LATEST_HANDOFF基準340件地点。2009-01-18 南国育ち30まで接続済み。既存340件の再追加禁止。**
2. まず **2009-01-19〜24** に具体日付き未処理機がないか監査する。
3. 未処理があれば古い順に性能コア+v0.7 resetBehaviorを収集。
4. 区間を閉じたら **2009-01-25 `パチスロ「KELOT」`** の既存/未処理状態を確認し、未処理なら次候補として収集。
5. 月単位候補は具体日確定後のみ正しい位置へ追加する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. 一般論や別シリーズ値から推測補完しない。特に2021年 `南国育ち-30`（6号機）は2009年5号機レコードへ混入させない。

## コミット（今回）

- 340 南国育ち30: `bf4e421e967653aa14737b41c8e5db6b912bd95a`
