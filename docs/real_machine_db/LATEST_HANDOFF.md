# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **480**
- latestMachineAdded: **パチスロ蒼天の拳**（サミー / 主値2010-05-10・導入日CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2010-05-10_souten-no-ken.md`
- chronologicalFrontier: **2010-05-10**
- frontierLatestMachine: **パチスロ蒼天の拳**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **479** / chronologicalFrontier **2010-04-19**。479「ファニーサンタ2」は前線より古い4/18遡及補完だったため、4/19から境界監査を継続。
- K-Navi 2010年4月全国導入カレンダー、当時業界記事、既存main実レコードを照合し、4/19同日群および4月末までの既知全国具体日候補を監査。4/26候補「ファニーサンタ2」は479で処理済みのため重複追加せず。
- 次の未登録具体日候補として初代「パチスロ蒼天の拳」をrepo検索し未登録確認。HAZUSE 2010-05-07 vs K-Navi/パチビー/2010年当時資料 2010-05-10の導入日競合を保持し、複数一致の2010-05-10を時系列主値として480件目へ追加。
- 並行QAでは machine tree を再確認し、スロ原人直後のresetBehavior欠損として **CSスロ原人（2006-11-22）** を特定。性能コアの既存判定を崩さずresetBehavior v0.7のみ追記。

## 480 — パチスロ蒼天の拳 要約

- メーカー: **サミー**
- 型式: **蒼天の拳Z**
- 検定番号: **9S1458**
- 導入主値: **2010-05-10**
- releaseDate CONFLICT: **HAZUSE 2010-05-07 / K-Navi・パチビー・2010年当時新機種資料 2010-05-10**
- 世代/タイプ: **5号機 / ボーナス＋ストック式ART / モード管理 / 天井**
- BIG＋ART合成: **1/293.0 / 1/280.2 / 1/266.5 / 1/248.8 / 1/231.0 / 1/205.2**
- ART初当たり（パチビー）: **1/327 / 1/313 / 1/297 / 1/276 / 1/255 / 1/224**
- PAYOUT: **96.5 / 98.1〜98.2 / 100.1〜100.2 / 103.2〜103.3 / 106.4 / 113.1%**。0.1pt差は平均化せず範囲保持。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。後継「蒼天2/4」の数値混入を避ける。
- BIG: **約300枚**
- ART: **1セット40G / 約+1.7枚/G**
- 通常内部モード: **低確 / 通常 / 高確 / 超高確**
- 天井: **BIG後1200G / ART後1160G + 最大32G前兆**（パチビー）。HAZUSEは通常1200Gハマリ表記。
- coreStatus: **COMPLETE_CORE_EXCEPT_BASE_RESET_PARTIAL_RELEASEDATE_CONFLICT_PAYOUT_MINOR_CONFLICT**

## resetBehavior v0.7 — パチスロ蒼天の拳

- **設定変更**: `PARTIAL_CONFIRMED`。パチビーが「設定変更後は高設定ほど天国モードへ移行しやすい」と直接記載。モード再振り分けの存在を採用し、設定別具体率は未確認。
- **据え置き**: BIG後1200G/ART後1160G進捗、内部モード、ARTストック等の保持は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井進捗・モード・ARTストック/前兆状態は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: 通常天井数値は確認済みだが、設定変更時のclear/retainは `UNVERIFIED_AFTER_RESEARCH`。設定変更専用短縮天井は確認できず。
- **モード・状態**: 設定変更後の天国モード抽選のみ `PARTIAL_CONFIRMED`。ARTストック/前兆等は未確認。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵**: 設定変更後の天国モード移行があり、高設定ほど優遇。ただし天国確定ではない。
- **変更判別**: 朝一の上部サイドランプ色矛盾、大オーラ、拳志郎が服を破る、キリン柄等の天国/前兆示唆が出れば「設定変更かつ高設定」の期待度が上がる。確定判別ではなく `PARTIAL_PROBABILISTIC`。
- **公開朝一数値**: 設定別天国移行率・朝一当選率は今回 `UNVERIFIED_AFTER_RESEARCH`。
- resetBehaviorQA: **SETTING_CHANGE_MODE_PARTIAL_CONFIRMED_CARRYOVER_POWER_CYCLE_GAME_COUNTER_UNVERIFIED_DETECTION_PROBABILISTIC**

## resetBehavior 遡及QA — CSスロ原人

- 対象: `docs/real_machine_db/machines/2006-11_cs-surogenjin.md`
- 既存性能コアは維持し `coreStatus: COMPLETE_CORE_RESET_QA_PARTIAL` としてreset QAを別管理。
- pacnk・旧パチマガスロマガを再探索し、**天井非搭載**、BIG後**50G RT**、原人ラッシュ後**20G RT**を再確認。
- 天井/周期ゲーム数のreset問題は `NOT_APPLICABLE`。
- 設定変更・据え置き・単純電源OFF→ON時の**固定RT残G/RT状態**は本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は `NOT_APPLICABLE`。
- 設定変更専用の朝一恩恵/不利、変更判別、公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_FOR_CEILING_CYCLE_NA_RT_STATE_AND_DETECTION_UNVERIFIED_AFTER_RESEARCH**
- 次の実ファイル `2006-11-27_thunder-v-special.md` はすでに `qaResetBehavior: PARTIAL` かつ設定変更時天井G数引継ぎまで収集済みのため、重複QAせずその次の2006-11月精度レコード群から最初のresetBehavior欠損を探す。

## 主要出典（取得日 2026-09-03）

### パチスロ蒼天の拳
- HAZUSE: `https://hazuse.com/machine/pachislot/9S1458/`
- パチビー: `https://www.pachibee.jp/machines/index/210030005`
- K-Navi: `https://p-kn.com/slot/1188/`
- 2010年当時新機種資料: `https://ameblo.jp/pachimatome/entry-10468397859.html`
- 初代回顧整理: `https://pachislot.win/pachislot-souten-no-ken-shodai-guide/`

### CSスロ原人 QA
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/13/abilit_slot_13.php`
- pacnk: `https://pacnk.com/slot/tools/sh_cssurogenzin.html`
- P-WORLD: `https://www.p-world.co.jp/machine/database/4335`

## 次回再開地点

1. **recordCount 480 / chronologicalFrontier 2010-05-10**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-05-07〜10同日/近接群**を再監査。蒼天の拳の5/7 vs 5/10導入日CONFLICTは保持し、メーカー一次の全国納品資料が得られた場合のみ再判定。
3. 2010年5月全国導入カレンダー・P-WORLD・当時業界記事・メーカー別一覧から、**2010-05-10同日群の別未登録パチスロ**を洗い出し、最古候補を481件目へ。
4. 蒼天の拳の `baseGamesPer50`、設定変更時天井カウンタclear/retain、据え置き、単純電源OFF→ON、設定別天国モード移行率は資料系統を変えて再探索可能。ただし新規収集を止めない。
5. 遡及QAは **CSスロ原人まで補完済み**。`2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みなのでスキップし、その次の2006-11月精度レコード群から最初のresetBehavior欠損実ファイルを特定して補完する。
6. 既存 `COMPLETE_CORE` の性能完了判定は不用意に崩さず、resetBehavior QA状態を別管理する。
