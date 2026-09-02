# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **340件地点 / 南国育ち30（2009-01-18納品開始）まで接続済み**。
- 2009-01-19〜24を `導入 / 納品 / 発売 / 新台 / 型式 / メーカー` の具体日検索で再監査。1/19にはIGT「エアマスター」内覧会等の発表イベントが確認できるが、同区間で実納品・ホール導入日を安全に確定して追加すべき未処理パチスロは今回確認できず。
- 直前handoffの次候補 **山佐 `パチスロ「KELOT」`** をrepo検索し未収録を確認。
- 山佐ネクスト公式は稼働時期2009年1月、当時グリーンべるとは **2009-01-25納品開始予定**と直接記載。よって **341件目**として追加。
- **既存341件の再追加禁止。**

## 341. パチスロ「KELOT」

record:
- `docs/real_machine_db/machines/2009-01-25_pachislot-kelot.md`

要点:
- machineName: **パチスロ「KELOT」**
- manufacturer: **山佐**
- releaseDate: **2009-01-25納品開始予定**（当時業界資料）。公式稼働時期も2009年1月で整合。
- generation: **5号機**
- systemType: **ノーマルAタイプ / ボーナス主体**。パチマガスロマガではオレンジ後4GのプチRTを確認。
- BIG: **1/287.4 / 1/282.4 / 1/270.8 / 1/258.0 / 1/250.1 / 1/235.7**。
- REG: **1/455.1 / 1/425.5 / 1/409.6 / 1/390.1 / 1/376.6 / 1/352.3**。
- 合算: **1/176.2 / 1/169.7 / 1/163.0 / 1/155.3 / 1/150.3 / 1/141.2**。
- 機械割: **96.8 / 98.6 / 101.1 / 104.2 / 106.3 / 110.1%**。
- 50枚ベース: **33.46 / 33.70 / 33.95 / 34.21 / 34.45 / 34.95G**。
- BIG: **MAX約335枚**、REG: **約104枚**。
- 出玉獲得用のRT/ARTは非搭載。グリーンべるとの「RT等を搭載しない」とパチマガの「オレンジ後4GプチRT」は定義差として分離し、数値競合扱いにはしない。
- 5号機クロニクルの「2009年6月」は公式2009年1月/当時業界1月25日と競合するため採用せず、source-quality-resolved conflictとして記録。
- `coreStatus=COMPLETE_CORE`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **NO_MATERIAL_RESET_SYSTEM_CONFIRMED_BY_ARCHITECTURE**。公式・P-WORLD・当時業界でボーナス主体ノーマルAタイプを確認し、通常天井・ゲーム数管理・モード管理・ART/ATを確認しないため、ホール朝一価値を生む設定変更リセット対象は該当なし。リール始動等の外観挙動は未確認。
- `gameCounterReset`: **NOT_APPLICABLE**。通常ゲーム数天井/ゲーム数管理当選を確認しない。
- `ceilingAfterReset`: **NOT_APPLICABLE**。通常天井・設定変更専用短縮天井を確認しない。
- `modeAfterReset`: **NOT_APPLICABLE**。通常時モード管理型当選を確認しない。
- `stateAfterReset`: **NOT_APPLICABLE_FOR_HALL_MORNING_VALUE**。高確/ART/AT等の朝一価値を持つ状態管理を確認しない。4GプチRT中の変更/電断処理は物差し目的では非必須の内部詳細として未確定。
- `carryOverBehavior`: **NOT_APPLICABLE_FOR_CEILING_MODE_ART**。据え置きで引き継ぐ通常天井・モード・ART/ATを確認しない。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。電源OFF→ONのみのリール位置・表示等の本機固有外観挙動は未回収。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。`パチスロ KELOT / ケロット / 山佐` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / リール` を組み替え、公式・業界・当時解析・古い攻略DB・回顧資料を再探索。パチマガ解析INDEXに「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが本文を回収できず、具体挙動は推測補完しない。
- `numericResetData`: リセット専用天井/モード振分けはN/A、公開リセット恩恵率は確認なし。
- `resetBehaviorQA=SUBSTANTIAL_ARCHITECTURAL_NA_WITH_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- https://yamasa-next.co.jp/model_klt/
- https://web-greenbelt.jp/00002977/
- https://www.p-world.co.jp/machine/database/5430
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/161/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/161/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/161/yamasa_slot_161.php
- https://pachimaga.com/free/special/a4947056bee8df2be2e4ddfd780a8ade3035c7d8.php

## 2009-01境界監査

- 1/4 `パチスロ秘密戦隊ゴレンジャー` は既存337。
- 1/5・1/6 `悪魔城ドラキュラ` は日付CONFLICTの既存338。
- 1/7〜11は具体日付きで安全に追加できる未処理機を確定せず。
- 1/12 `キング・コング` は既存。1/12納品開始 `忍魂` は既存339。
- 1/13〜17は具体日付きで安全に追加できる未処理機を確定せず。
- 1/18 `南国育ち30` は既存340。
- **1/19〜24は今回再監査し、発表イベントと実導入を区別した上で具体日付き未処理機を確定せず。**
- **1/25 `パチスロ「KELOT」` を341として追加。**
- 次は **2009-01-26〜31** を具体日付き未処理監査する。1/26「スクール・ウォーズ」発表、1/28「ダッシュ勝平2X」内覧会はいずれも後月納品なので1月導入として混入させない。
- 月単位候補 `がんばれ満月姫! / アイムマジック / バケーション / マキシマムインパクト / 甘ぴかっ / スペシャルオアシス` は具体導入日を確定してから正しい位置へ挿入する。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12の正しい位置へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 既存性能値を無駄にやり直さず、既存レコードを時系列走査して **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**からQAを継続する。
- 既にv0.7化済み機種は飛ばす。
- PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから残す。

## 次回再開地点

1. **LATEST_HANDOFF基準341件地点。2009-01-25 パチスロ「KELOT」まで接続済み。既存341件の再追加禁止。**
2. まず **2009-01-26〜31** に具体日付き未処理機がないか監査する。
3. 未処理があれば古い順に性能コア+v0.7 resetBehaviorを収集。
4. 1月末を閉じたら2009年2月初頭へ前進し、月単位候補の具体日も継続監査する。
5. 発表会/内覧会日を導入日と誤認しない。納品・導入・稼働開始の具体根拠を優先する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. 一般論や後継機値から推測補完しない。

## コミット（今回）

- 341 パチスロ「KELOT」: `8017bcb96ce91c7f3b9fc7e77ccd2e352be5d9ed`
