# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **509**
- latestMachineAdded: **極楽パロディウス**（KPE / 2010-09-21）
- latestRecord: `docs/real_machine_db/machines/2010-09-21_gokuraku-parodius.md`
- chronologicalFrontier: **2010-09-21**
- frontierLatestMachine: **極楽パロディウス**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線508実レコード「ワニワニパニック～キミのハートをワニづかみ～」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **508** / chronologicalFrontier **2010-09-21**。
- repo内で「極楽パロディウス」「極楽パロディウスR」を検索し未登録を確認。同日未処理候補を509件目として追加。

## 509 — 極楽パロディウス 要約

- メーカー: **KPE**
- 導入: **2010-09-21**。K-Navi/パチビーが日付一致、KONAMI公式は2010年9月稼働開始、当時記事も9/21予定で整合。
- 型式: **極楽パロディウスR**
- 検定番号: **0S0266**
- 世代/タイプ: **5号機 / ART / ボーナス+ゲーム数上乗せART**
- 機械割: **97.0 / 99.0 / 100.6 / 104.2 / 109.2 / 112.9%**
- 極楽BONUS: **1/978.1 / 1/963.8 / 1/963.8 / 1/949.8 / 1/897.8 / 1/885.6**
- PCC/極楽RUSH: **1/117.9 / 1/117.0 / 1/115.0 / 1/113.4 / 1/111.1 / 1/110.7**
- 合算: **1/105.2 / 1/104.4 / 1/102.7 / 1/101.3 / 1/98.8 / 1/98.4**
- 50枚ベース: **約37G/1000円**（旧パチマガスロマガ直接値）。
- ART「極楽タイム」: **50G+α / 約+1.6枚/G**。歌姫タイムは次回極楽RUSHまでのゲーム数温存型無限ART。
- 基本獲得: 極楽BONUS **MAX48枚+ART**、極楽RUSH **MAX48枚+ART**、PCC **3〜48枚**。
- ART非当選回数天井: **最大8回**。もえろゲージ**7個**満タンでも次回ART確定。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_RESEARCHED**

## resetBehavior v0.7 — 極楽パロディウス

- **設定変更**: pacnkの本機整理では**ゲーム数・もえろゲージ・ステージがリセット**。旧パチマガにも本機固有「設定変更」項目の存在を確認したが、取得本文から詳細を回収できないため、変更時挙動は `PARTIAL_CONFIRMED / ANALYSIS_SINGLE_REVIEW`。
- **ゲーム数/天井**: 主天井は通常G数型ではなく**ART非当選ボーナス回数型・最大8回**。設定変更後「ゲーム数リセット」の記述だけから、この内部回数天井までCLEARとは断定せず **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮天井は確認なし。
- **据え置き**: P-WORLDはもえろゲージを「ART突入まで消えない」とするが、日跨ぎ据え置きを直接明記していないため、天井回数・高確/超高確・ART残Gを含む完全な据え置き処理は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井回数、ゲージ、高確/超高確、ART残G等の本機固有処理は `UNVERIFIED_AFTER_RESEARCH`。
- **モード/状態**: 高確・超高確「スケスケチャンス」の存在は確認。設定変更時振り分けは未確定。もえろゲージ/ステージのリセットのみ確認。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵**: 短縮天井、高確スタート、ART優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一不利**: 設定変更でもえろゲージ蓄積が消える点は確認。ART非当選回数天井の進捗消失は未確定なので断定しない。
- **変更判別**: 前日ゲージを把握できる場合、変更後のゲージ/ステージ初期化は間接材料になり得る。ただしガックン、初期出目、確定条件/確率は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 通常天井最大**8回**、ゲージ満タン**7個**は確認済みだがリセット専用数値ではない。リセット専用モード振分/初当たり率は未確認。

## 資料照合

- 設定別機械割・主要ボーナス確率はK-Navi、旧パチマガスロマガ、pacnkで一致し、P-WORLDとも整合。
- 50枚ベース約37Gは旧パチマガスロマガの本機小役ページから直接回収。
- ART約+1.6枚/G、ART天井構造、ゲージ7個はP-WORLD/K-Navi/パチビー系で照合。
- 型式 **極楽パロディウスR**、検定番号 **0S0266** はP-WORLDで直接確認。
- KONAMI公式アーカイブで2010年9月稼働・5号機ARTを確認。
- **極楽パロディウスA**（2010年11月のノーマル/プチRT）は別スペックなので混入させない。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- ジャックと豆の木直後かつresetBehavior欠損の最初の実レコードは、recursive tree / commit history / 実ファイルpathで順序を確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-04）

- KONAMI公式: `https://www.konami.com/amusement/psm/archive/ps/2010/parodius/`
- K-Navi: `https://p-kn.com/slot/1254/`
- K-Navi ART: `https://p-kn.com/slot/1254/26887/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6046`
- パチビー: `https://www.pachibee.jp/machines/lecture/210070001`
- 旧パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/21/kpe_slot_21.php`
- 旧パチマガ設定別値: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/21/h.php`
- 旧パチマガ50枚ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/21/c.php`
- pacnk reset補助: `https://pacnk.com/slot/tools/sh_parodyusu.html`
- 当時記事アーカイブ: `https://p-mans.blogspot.com/2010/07/`

## 今回のGitHub更新

- 509 極楽パロディウス追加: commit `591ff99424739e5ca6ce723bf00ef5a27183889b`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 509 / chronologicalFrontier 2010-09-21**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **9/21同日群を最終監査**。HAZUSEの2010-09-21欄、P-WORLD/K-Navi、メーカー別一覧で別未登録5号機がないか確認する。
3. 同日群を閉じる前に、handoffで継続指定されている **2010-09-07〜20境界**をHAZUSEの9/10・9/17、月間一覧、当時納品資料で再監査し、日付定義差のある未登録を飛ばさない。
4. 途中日付を閉じられた場合のみ9/22以降へ進む。HAZUSEには9/24、9/27の節点があり、既知後続候補として9/27「茉莉花の剣」「リングにかけろ1 ～黄金の日本Jr.編～」等がある。
5. 509の追加QAは、ART非当選回数天井の設定変更時CLEAR/RETAIN、単純電源OFF→ON、高確/超高確初期振り分け、ガックン等の直接資料が新たに見つかった場合のみ追補。推測で埋めない。
6. 遡及QAは既存地点を維持し、新規時系列前進を止めない。
