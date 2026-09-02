# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **337件地点 / 2009-01-04 パチスロ秘密戦隊ゴレンジャーを遡及追加済み**。
- 2009-01-01〜04の追加具体日未処理機を再監査し、今回さらに安全に挿入すべき機種は確定せず。
- 次候補 `悪魔城ドラキュラ` は旧資料の日精度が **2009-01-05 / 2009-01-06で競合**することを確認したため、日付を平均・推測せずCONFLICTとして **338件目**に追加。
- **既存338件の再追加禁止。**

## 338. 悪魔城ドラキュラ

record:
- `docs/real_machine_db/machines/2009-01-05_akumajo-dracula.md`

要点:
- machineName: **悪魔城ドラキュラ**
- manufacturer: **KPE**
- releaseDate: **CONFLICT_DAY: 2009-01-05 / 2009-01-06**。HAZUSE DATAは導入開始日1/5、パチビーは導入日1/6。KONAMI公式機種アーカイブは稼働開始2009年1月までなので、日精度は競合のまま保持。
- modelNumber: **悪魔城ドラキュラJG**
- approvalNumber: **8S0855**
- generation: **5号機**
- systemType: **ボーナス+RT/CZ+継続率ART**
- 設定構成: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 99.2 / 101.3 / 104.0 / 108.4 / 112.1%**。P-WORLD、K-Navi、パチビーで一致。
- BIG: **1/516.0 → 1/481.9**。REGはP-WORLD/K-Navi系列 **1/555.4 → 1/422.8** とHAZUSE系列で一部設定に小差があるためCONFLICT保持。
- 50枚ベース: **32.2 / 32.2 / 32.1 / 32.3 / 32.1 / 32.1G**（CrankySeven設定別表、別系統設定別照合待ち）。
- BIG約**260枚**、REG約**45枚**。
- ART「バトルゾーン」: **30G/1セット、約+1.1枚/G、継続率66/77/88/99%**。
- RT/CZ「チャレンジゾーン」は規定G最大40G、チェリー入賞で通常へ転落。ART後はリベンジモード。
- 通常状態**1000G**で天井ART。天井ARTは事実上次回ボーナスまで、約+0.2枚/G。
- `coreStatus=COMPLETE_CORE_WITH_MINOR_INITIAL_HIT_CONFLICT_AND_BASE_SINGLE_SOURCE`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **天井までのG数、滞在ステージ、チェリーナビストック、内部状態、十字架個数は設定変更でもリセットされない**。
- `gameCounterReset`: **NOT_RESET_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: 通常1000G天井を設定変更しても残りG数引継ぎ。短縮天井への再設定ではない。
- `modeAfterReset`: 滞在ステージはリセットされない。朝一専用モードは確認できず。
- `stateAfterReset`: 内部状態はリセットされない。
- `carryOverBehavior`: 設定変更でも保持される仕様と据え置き保持は整合するが、「据え置き時」直接記述は未回収のためPARTIAL。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: 前日天井残G・十字架・チェリーナビ等が設定変更後も残るため、前日状況次第で朝一狙い価値が残存。設定変更専用の追加恩恵は確認できず。
- `resetDetection`: K-Naviに「朝イチにRTスタート?」「十字架の数に注目」の攻略項目は現存するが本文復元不能。ガックン等の確定判別はUNVERIFIED。
- 公開朝一当選率/恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- パチビーとCrankySevenで「天井G数が設定変更でもクリアされない」が一致。パチビーはさらに滞在ステージ・チェリーナビストック・内部状態・十字架個数も非リセットと明記。中一商事の実機資料にも同一説明あり。
- `resetBehaviorQA=PARTIAL_HIGH_CONFIDENCE_SETTING_CHANGE_BEHAVIOR_POWER_CYCLE_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- https://www.konami.com/amusement/psm/archive/ps/2009/dracula/
- https://www.pachibee.jp/machines/index/209090001
- https://data.hazuse.com/?genre=208&machine_code=8S0855
- https://www.p-world.co.jp/machine/database/5384
- https://p-kn.com/slot/898/
- https://crankyseven.com/sp/akumajou-pc.htm
- https://www.nakaiti.com/html/sKpe20250201.html
- https://p-mans.blogspot.com/2008/11/

## 2009-01境界監査

- 1/4 `パチスロ秘密戦隊ゴレンジャー`は既存337として保持。
- `悪魔城ドラキュラ`は1/5（HAZUSE）/1/6（パチビー）のCONFLICTだが、いずれも1/4より後かつ既存1/12キング・コングより前なので、この区間へ338として挿入。
- 次は **2009-01-07〜11** の具体日付き未処理機を監査する。
- 1/12 `キング・コング` は既存レコードのため再追加禁止。同日群に未処理があれば追加する。
- 1/13〜17を閉じた後、既確認の **1/18 南国育ち30** へ接続する。
- 月単位候補 `がんばれ満月姫! / アイムマジック / バケーション / KELOT / マキシマムインパクト / 忍魂 / 甘ぴかっ` は具体導入日を確定してから時系列へ入れる。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12の正しい位置へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** をv0.7化。
- 既存`coreStatus=PARTIAL`は維持し、`resetBehaviorQA=PARTIAL_WITH_DEVICE_SPECIFIC_RESET_DETAILS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH`を別管理で追加。
- パチマガスロマガ旧解析からRT突入契機（MB後/ボーナス成立後/1枚役/RT目）と技術介入構造を再確認し、後年回顧からMB後RT最大100Gも補強。
- 設定変更・据え置き・電源OFF→ON時のRT残G/内部状態、朝一恩恵/不利、変更判別、公開朝一数値は本機固有資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。一般的初期5号機の挙動から補完していない。
- 性能PARTIAL再探索も実施したが、設定別BIG/MB確率の数表、50枚ベース、RT純増/Gは今回も安全に復元できず、性能完了判定を上げていない。
- 次回は既存レコードを時系列走査し、**竹中直人のパチスロ太閤記の次に残るresetBehavior未補完機**から継続する。既にv0.7化済みの機種は飛ばす。

竹中直人のパチスロ太閤記 追加出典（取得日 2026-09-02）:
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/10/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/10/k.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/10/luster_slot_10.php
- https://www.pachinkovista.com/pfactory/model.php?dsp=1&gc=0&km=2&nid=015898
- https://pachiseven.jp/articles/detail/11773
- https://nana-press.com/post/1559653
- https://5goki.com/luster

## 次回再開地点

1. **LATEST_HANDOFF基準338件地点。1/4秘密戦隊ゴレンジャー → 1/5・1/6日付CONFLICTの悪魔城ドラキュラまで接続済み。既存1/12キング・コングも保持。**
2. まず **2009-01-07〜11** に具体日付き未処理機がないか監査する。
3. 未処理があれば古い順に性能コア+v0.7 resetBehaviorを収集。なければ1/12同日群を監査して既存キング・コングへ接続する。
4. 1/13〜17を閉じ、未処理具体日機がなければ **2009-01-18 南国育ち30** へ進む。
5. 月単位候補は具体日確定後のみ正しい位置へ追加する。
6. 遡及QAは既存レコードを時系列走査し、**竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. PARTIAL/UNVERIFIEDやreset欠損は表記揺れ・型式・メーカー・シリーズ名と検索語を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断。一般論や別機種値から推測補完しない。

## コミット（今回）

- 338 悪魔城ドラキュラ: `4c0a76a20b78efd07c354dc8846f5cde5bfac43e`
- 竹中直人のパチスロ太閤記 resetBehavior QA: `b439a8500949cd97733139bdb7cae021ea9920c2`