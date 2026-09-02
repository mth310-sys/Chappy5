# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **341件地点 / パチスロ「KELOT」（2009-01-25納品開始予定）まで接続済み**。
- 2009-01-26〜31を `導入 / 納品 / 発売 / 新台 / 型式 / メーカー` の具体日で再監査。1/26「スクール・ウォーズ」は発表イベント、1/28「ダッシュ勝平2X」は内覧会で実納品は後月のため、発表日を導入日へ混入させない。安全に追加できる1/26〜31具体日機は今回確定せず、1月末を閉じた。
- 月単位候補を再探索し、パイオニア **`スペシャルオアシス`** は当時Playgraph記事で **2009-02-02導入予定**を確認。パイオニア公式/P-WORLDの「2009年1月発売・導入開始」と競合するため、具体日キュー上は2/2へ置きつつ日付CONFLICTをレコードに保持。
- **342件目としてスペシャルオアシスを追加。既存342件の再追加禁止。**

## 342. スペシャルオアシス

record:
- `docs/real_machine_db/machines/2009-02-02_special-oasis.md`

要点:
- machineName: **スペシャルオアシス**
- manufacturer: **パイオニア**
- releaseDate: **2009-02-02導入予定（当時Playgraph）**。パイオニア公式/P-WORLDの2009年1月表記とはCONFLICTとして両方保持。
- modelNumber: **オアシスS** / approvalNumber: **8S0999**。
- generation: **5号機**
- systemType: **ノーマルAタイプ / 完全告知 / ボーナス主体**。
- BIG: **1/303.41 / 1/289.98 / 1/277.69 / 1/266.41 / 1/256.00 / 1/246.38**。
- REG: **1/661.98 / 1/606.81 / 1/555.39 / 1/512.00 / 1/474.90 / 1/442.81**。
- 合算: **1/208.05 / 1/196.22 / 1/185.13 / 1/175.23 / 1/166.34 / 1/158.30**。
- 50枚ベース: **37.00 / 37.10 / 37.20 / 37.40 / 37.65 / 38.00G**。
- 機械割はパチマガスロマガのシミュレート **96.84 / 99.23 / 101.67 / 104.25 / 106.90 / 109.62%** と、P-WORLD整数掲載 **96 / 98 / 101 / 104 / 107 / 110%** を平均せずCONFLICT保持。
- BIG約312枚。REGはP-WORLD約156枚とパチマガ約168枚が競合し、165枚超払い出し終了条件とは定義を分けて保持。
- 出玉獲得用RT/ART/AT、通常ゲーム数天井、周期CZ、通常モード管理型初当たりは今回確認せず。
- `coreStatus=COMPLETE_CORE_WITH_CONFLICTS`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **NO_MATERIAL_RESET_SYSTEM_CONFIRMED_BY_ARCHITECTURE_WITH_DETECTION_DETAIL_UNVERIFIED**。ノーマルAタイプで、通常天井・ゲーム数管理・ART/AT・通常モード管理を確認しないため、ホール朝一価値を生む主要リセット対象はN/A。ただし本機固有のランプ/リール等の判別挙動は未確定。
- `gameCounterReset`: **NOT_APPLICABLE**。
- `ceilingAfterReset`: **NOT_APPLICABLE**。
- `modeAfterReset`: **NOT_APPLICABLE**。
- `stateAfterReset`: **NOT_APPLICABLE_FOR_HALL_MORNING_VALUE**。
- `carryOverBehavior`: **NOT_APPLICABLE_FOR_CEILING_MODE_ART**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。電源OFF→ONのみのリール位置・告知/星ランプ等の外観挙動は高信頼本文を回収できず。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。`スペシャルオアシス / オアシスS / パイオニア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 星点灯 / ランプ` を組み替えて再探索。パチマガ解析INDEXに「攻め時・ヤメ時・設定変更時」「BIG後・星点灯の秘密」の項目存在までは確認したが、具体条件本文を回収できない。P-WORLD掲示板の利用者投稿は解析根拠へ昇格させない。
- `numericResetData`: リセット専用天井/モード振分けはN/A、公開朝一当選率・リセット恩恵率は確認なし。
- `resetBehaviorQA=SUBSTANTIAL_ARCHITECTURAL_NA_WITH_DETECTION_AND_POWER_CYCLE_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- https://www.slot-pioneer.co.jp/products/2009.html
- https://p-mans.blogspot.com/2009/01/
- https://www.p-world.co.jp/machine/database/5427
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/88/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/88/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/88/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/88/pioneer_slot_88.php

## 2009-01〜02境界監査

- 1/4 `パチスロ秘密戦隊ゴレンジャー` は既存337。
- 1/5・1/6 `悪魔城ドラキュラ` は日付CONFLICTの既存338。
- 1/12 `キング・コング`、`忍魂` は既存。
- 1/18 `南国育ち30` は既存340。
- 1/25 `パチスロ「KELOT」` は既存341。
- **1/26〜31は今回再監査し、発表イベントと実導入を分離した上で具体日付き未処理機を確定せず、1月末を閉じた。**
- **2/2 `スペシャルオアシス` を342として追加。日付は当時業界2/2予定 vs 公式/P-WORLD 1月でCONFLICT。**
- 次は **2009-02-02同日群〜2月初頭**を具体日付きで監査する。
- 月単位候補 `甘ぴかっ / アイムマジック / がんばれ満月姫! / バケーション / マキシマムインパクト` は表記・メーカー・型式を変えて具体導入日を引き続き探索し、日付が確定した場合は正しい位置へ遡及挿入する。
- `バケーション` は当時業界記事に「2009年1月中旬より納品開始予定」まであるが、具体日をまだ確定できないためHANDOFF指示どおり月内位置を推測して追加しない。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12の正しい位置へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 既存性能値を無駄にやり直さず、既存レコードを時系列走査して **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**からQAを継続する。
- 既にv0.7化済み機種は飛ばす。
- PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから残す。

## 次回再開地点

1. **LATEST_HANDOFF基準342件地点。2009-02-02 スペシャルオアシスまで接続済み。既存342件の再追加禁止。**
2. まず **2009-02-02同日群〜2月初頭** に具体日付き未処理機がないか監査する。
3. 未処理があれば古い順に性能コア+v0.7 resetBehaviorを収集する。
4. 月単位候補の具体日監査を継続し、1月中旬等の過去位置が確定した機種は漏れ防止のため遡及挿入する。
5. 発表会/内覧会日を導入日と誤認しない。納品・導入・稼働開始の具体根拠を優先する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. 一般論や後継機値から推測補完しない。

## コミット（今回）

- 342 スペシャルオアシス: `ef251846d61659c1191af625513b392208377a30`
