更新日: 2026-09-09

## 現在地点
- recordCount: **1111**
- latestRecordAdded: **グレートキングハナハナ-30**（パイオニア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-18_great-king-hanahana-30.md`
- chronologicalFrontier: **2017-07-18**
- frontierLatestMachine: **グレートキングハナハナ-30 — No.1111**
- schema: **resetBehavior v0.7**
- status: **2017-07-18_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1110「ワンバーワン-30」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1110件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN**。
- handoff指定の次未処理 **「グレートキングハナハナ-30」** をNo.1111として登録。
- 2017年11月の25Φ「グレートキングハナハナ」と分離。パイオニア公式は2017年7月発売、HAZUSE/パチ7は7/18、一撃/ちょんぼりすた等は7/24。chronological canonicalは複数資料で最も早い具体日 **2017-07-18**、7/24はCONFLICT_SECONDARY_RELEASE_DATEとして保持。
- HAZUSEで型式 `グレートキングハナハナ／DX-30`、検定番号 `7S0206` を確認。
- performance coreとresetBehavior v0.7を同時収集。設定変更後最初のBIG終了時の専用パネルフラッシュ50%（上のみ37.5% / 上下12.5%）を朝一公開数値として保存。

## No.1111 — グレートキングハナハナ-30
- manufacturer: **パイオニア**
- releaseDate canonical: **2017-07-18**
- secondary exact-date source: **2017-07-24 — CONFLICT_SECONDARY_RELEASE_DATE**
- formalModelName: **グレートキングハナハナ／DX-30**
- certificationNumber: **7S0206**
- generation/system: **5号機 / ノーマルA / 完全告知 / 30Φ沖スロ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96 / 98 / 101 / 104 / 107 / 112%**。
- BIG: **1/299 / 1/288 / 1/278 / 1/268 / 1/255 / 1/234**。
- REG: **1/496 / 1/468 / 1/436 / 1/407 / 1/374 / 1/336**。
- 合算: **1/186 / 1/178 / 1/170 / 1/161 / 1/151 / 1/138**。
- ベース canonical: **約37G/50枚**。パイオニア公式配信アプリ説明・ちょんぼりすたで一致。
- 約35G/50枚の後年二次資料もあるため `CONFLICT_SECONDARY_BASE_APPROX_35G` として保持。
- BIG最大 **312枚**、REG最大 **130枚**。
- AT/ART純増: **NOT_APPLICABLE_NORMAL_A**。
- ゲーム数天井: **NO_GAME_COUNT_CEILING**。

### resetBehavior v0.7
- settingChange: **設定変更後1回目のBIGだけ専用パネルフラッシュ振り分け**。
  - 上部のみ **37.50%**。
  - 上下 **12.50%**。
  - フラッシュなし **50.00%**。
  - 何らかのフラッシュ合計 **50.00%**。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。変更後1回目BIG専用フラッシュをゲーム数モード扱いしない。
- stateAfterReset: ノーマルAとして高確/低確等の朝一状態は **NOT_APPLICABLE_OR_NONE_CONFIRMED**。成立済みボーナス/87G履歴等の低レベル内部状態は直接契約を固定できずUNVERIFIED。
- powerCycle: 設定変更後1回目BIG用フラグ、87Gレトロサウンド履歴等の純電断契約を再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き: 同項目の本機固有直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- resetBenefits: 朝一最初のBIG後パネフラが変更推測材料になる。短縮天井/高確/CZ/初当たり優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: パネフラは変更期待度を上げるが通常BIG後にも発生するため **NON_DETERMINISTIC**。実戦資料ではガックンチェック利用例がある一方、「設定変更でも必ずガックンするとは限らない」とする回顧があり `POSSIBLE_GAKKUN_NONDETERMINISTIC / ANALYSIS_SINGLE_PRACTICE`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict / definition QA
- exact release date: **2017-07-18 vs 2017-07-24**。公式は2017年7月まで。7/18をchronological canonical、7/24を二次競合として保持。
- baseGamesPer50: **約37G vs 約35G**。37Gは公式配信アプリ説明+解析、35Gは後年二次資料。平均せず競合保持。
- 87G以内の連チャンでレトロサウンド抽選があるが、これは天井/ゾーンではない。設定変更/純電断での前回ボーナス履歴の扱いはUNVERIFIED。

## 2017-07-18群 — OPEN
今回までの登録:
1. パチスロ 聖闘士星矢 海皇覚醒 — No.1106
2. パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～ — No.1107
3. パチスロ 結城友奈は勇者である — No.1108
4. ラグナロクサーガ — No.1109
5. ワンバーワン-30 — No.1110
6. グレートキングハナハナ-30 — No.1111

未処理先行候補（個別処理時に導入日・型式・メーカーを再監査）:
1. **トラッドサンダーブラック**

### 次候補先行確認
- 直前handoffで7/18群の次候補としてグレートキングハナハナ-30の後に **トラッドサンダーブラック** を指定済み。
- 次回は「トラッドサンダーブラック」をNo.1112候補として、メーカー公式/当時業界記事/HAZUSE/P-WORLD/解析サイト等で導入日・型式・検定番号を再固定する。
- 同名シリーズ・後継/別パネル・別スペックを混同しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_the-king-of-fighters.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-06_churahime-sun.md`。
- 今回は新規7/18群No.1111処理を優先し、遡及QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1111を再取得。
2. **1111件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN** を正本として継続。
3. 次の未処理 **「トラッドサンダーブラック」** をNo.1112候補として処理。
4. 型式・検定番号・性能コア・resetBehavior v0.7を収集。ノーマル系なら天井N/Aだけで終わらず、設定変更/据え置き/純電断、朝一専用挙動、変更判別、公開朝一数値を検索語・資料系統変更で再探索する。
5. その後2017-07-18群を全メーカー横断監査し、漏れがなければCLOSED判定する。
6. 遡及QAは `2006-06_churahime-sun.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1111 グレートキングハナハナ-30
- パイオニア公式 2017年製品一覧: https://www.slot-pioneer.co.jp/products/2017.html
- パイオニア公式 発売告知: https://www.slot-pioneer.co.jp/information/great_king_hanahana.html
- パイオニア公式スマートフォン向けコンテンツ: https://www.slot-pioneer.co.jp/smafo.html
- Apple App Store「激Jパチスロ グレートキングハナハナ」: https://apps.apple.com/jp/app/%E6%BF%80j%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%88%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A/id1374747903
- HAZUSE 30Φ: https://hazuse.com/machine/pachislot/7S0206/genre/202/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/7S0206/genre/208/
- 一撃: https://1geki.jp/slot/s_greatkinghana/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_greatkinghana/1/
- 一撃 ボーナス概要: https://1geki.jp/slot/s_greatkinghana/61/
- パチ7: https://pachiseven.jp/articles/detail/11686
- P-WORLD: https://www.p-world.co.jp/machine/database/8401
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/40070/
- 激アツ 設定変更後パネルフラッシュ/ガックン: https://gekiatsu7.com/slot-analyze/3506/
- さむらい流 実戦回顧: https://sloter-samurai.com/practicing/greatkinghanahana_jissen04
- スロがち（約35G競合）: https://slogati.com/gk-hanahana/
