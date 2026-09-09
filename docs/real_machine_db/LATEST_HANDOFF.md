更新日: 2026-09-09

## 現在地点
- recordCount: **1110**
- latestRecordAdded: **ワンバーワン-30**（ベルコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-18_one-bar-one-30.md`
- chronologicalFrontier: **2017-07-18**
- frontierLatestMachine: **ワンバーワン-30 — No.1110**
- schema: **resetBehavior v0.7**
- status: **2017-07-18_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1109「ラグナロクサーガ」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1109件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN**。
- handoff指定の次未処理 **「ワンバーワン-30」** をNo.1110として登録。
- 30Φ版と25Φ版を分離。2017-06-14ベルコ内覧会の当時業界記事で **沖縄7/18、その他地域7/24** の地域別導入予定を確認し、30Φ版の最初の実導入日として7/18をchronological canonicalに採用。
- HAZUSEで型式 `ワンバーワン／S5-30`、検定番号 `7S0476` を確認。
- performance coreとresetBehavior v0.7を同時収集。設定変更時高確100%、純電断時状態/RT引継ぎ、天井非搭載、変更判別の非決定性まで保存。

## No.1110 — ワンバーワン-30
- manufacturer: **ベルコ**
- releaseDate: **2017-07-18（沖縄先行） / 2017-07-24（その他地域）**
- formalModelName: **ワンバーワン／S5-30**
- certificationNumber: **7S0476**
- generation/system: **5号機（5.5号機） / A+ART / 30Φ沖スロ / セット継続+ゲーム数上乗せ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97 / 99 / 101 / 104 / 107 / 111%**。
- ART初当たり: **1/498 / 1/474 / 1/452 / 1/425 / 1/407 / 1/390**。
- CDボーナス: 全設定共通 **約1/112**。
- ベース: **約31G/50枚**（現時点ANALYSIS_SINGLE。独立照合値は未固定）。
- ART純増: **約2.0枚/G（ボーナス込み）**。
- CDボーナス: **54枚**。
- ONE BAR BONUS: **1セット33G以上、初当たり最低2セット保証**。
- Hooah!: 3桁以上、フリーズBIG ONE BAR BONUSは333G以上のART上乗せ解析。
- ゲーム数天井: **NO_GAME_COUNT_CEILING** をcanonical。P-WORLD/パチビーの天井カテゴリタグだけでは天井ありとしない。

### resetBehavior v0.7
- settingChange: **内部状態HIGH（高確）100%**。HAZUSE/DMM/すろぱちくえすとで一致。
- settingChange RT state: すろぱちくえすと直接表で **CARRYOVER**（単一直接資料）。
- powerCycle: **内部状態CARRYOVER / RT状態CARRYOVER**（すろぱちくえすと直接表）。
- 据え置き: 本機固有に「据え置き」と明記した独立契約を固定できず **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。純電断契約から自動転記していない。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- resetBenefits: **設定変更後高確スタート確定**。DMMでは通常高確の平均滞在約**31G**。朝一専用31G保証とは扱わない。
- resetDetection: 高確示唆は変更推測材料になるが、DMMは高確確定演出なしと明記。deterministic判別不可。本機固有ガックンは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict / definition QA
- 導入日は当時ベルコ内覧会記事で **沖縄7/18・その他7/24** と説明されるため両立。HAZUSE/Pachibee DBの7/24は一般地域導入日として保持。
- ベルコ公式現行ページの「2017年8月登場」は月単位整理表記で、日単位chronological canonicalには用いない。
- ちょんぼりすたはページ上部7/18に対し本文表7/28があり、当時業界資料群と整合しないため **CONFLICT_SECONDARY_RELEASE_DATE_2017-07-28**。
- P-WORLD/パチビーは「天井」カテゴリタグを持つが具体的ゲーム数/恩恵なし。すろぱちくえすとは天井非搭載と明記するため、本DBでは **NO_GAME_COUNT_CEILING** を採用。

## 2017-07-18群 — OPEN
今回までの登録:
1. パチスロ 聖闘士星矢 海皇覚醒 — No.1106
2. パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～ — No.1107
3. パチスロ 結城友奈は勇者である — No.1108
4. ラグナロクサーガ — No.1109
5. ワンバーワン-30 — No.1110

未処理先行候補（個別処理時に導入日・型式・メーカーを再監査）:
1. **グレートキングハナハナ-30**
2. **トラッドサンダーブラック**

### 次候補先行確認
- 直前handoffで7/18群の次候補として **グレートキングハナハナ-30 → トラッドサンダーブラック** を指定済み。
- 次回は「グレートキングハナハナ-30」をNo.1111候補として、パイオニア公式/当時業界記事/HAZUSE/Pachibee等で導入日・型式・検定番号を再固定する。
- 同名25Φ派生や後継ハナハナを混同しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_the-king-of-fighters.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-06_churahime-sun.md`。
- 今回は新規7/18群No.1110処理を優先し、遡及QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1110を再取得。
2. **1110件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN** を正本として継続。
3. 次の未処理 **「グレートキングハナハナ-30」** をNo.1111候補として処理。
4. 型式・検定番号・性能コア・resetBehavior v0.7を収集。ノーマル/沖スロ系のため、天井N/Aだけで終わらず設定変更/据え置き/純電断時の内部状態、朝一ガックン、ランプ/出目、変更判別の公開契約を探索する。
5. 続いて **トラッドサンダーブラック** を処理。
6. 7/18群処理後、同日全メーカー横断監査を行って漏れを確認しCLOSED可否を判断。
7. 遡及QAは `2006-06_churahime-sun.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1110 ワンバーワン-30
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/onebarone_2017/
- パチビー 内覧会ニュース: https://www.pachibee.jp/pparticles/view/971
- パチビー 機種情報: https://www.pachibee.jp/machines/index/217060009
- HAZUSE: https://hazuse.com/machine/pachislot/7S0476/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/7S0476/genre/209/
- PiDEA X 内覧会記事: https://www.pidea.jp/articles/%E7%9B%AE%E6%8A%BC%E3%81%97%E4%B8%8D%E8%A6%81Hooah%E3%81%A7%E7%88%86%E4%B9%97%E3%81%9B%E3%80%8C%E3%83%AF%E3%83%B3%E3%83%90%E3%83%BC%E3%83%AF%E3%83%B3%E3%80%8D%E5%BE%A9%E6%B4%BB%EF%BC%8F%E3%83%99%E3%83%AB%E3%82%B3
- P-WORLD: https://www.p-world.co.jp/machine/database/8439
- DMMぱちタウン: https://p-town.dmm.com/machines/2928
- すろぱちくえすと: https://www.slopachi-quest.com/article/one-bar-one/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/43021/
- pacnk: https://pacnk.com/slot/tools/sh_wambawansanzero.html
