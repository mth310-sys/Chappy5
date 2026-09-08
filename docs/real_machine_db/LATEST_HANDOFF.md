更新日: 2026-09-08

## 現在地点
- recordCount: **1011**
- latestRecordAdded: **乱嵐エイサー-30**（オーイズミ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-09-20_ranran-eisa-30.md`
- chronologicalFrontier: **2016-09-20**
- frontierLatestMachine: **乱嵐エイサー-30**（オーイズミ）
- schema: **resetBehavior v0.7**
- status: **2016-09-20_GROUP_OPEN**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1010 `2016-09-20_slot-madoka-magica2.md` を再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。INDEX自体は不用意に現行1011件へ作り替えていない。
- 開始時点は recordCount 1010 / chronologicalFrontier 2016-09-20 / 09/20群OPEN。
- 09/20次候補 `乱嵐エイサー-30` を再探索し、No.1011として追加。
- 乱嵐エイサー-30の導入日は資料競合あり。K-Naviはホール導入開始2016-09-20、ちょんぼりすたは2016-09-05、当時まとめ資料は2016-09-19導入予定。平均化せずCONFLICTとして保持し、ホール導入開始を明記するK-Naviの2016-09-20をcanonicalとした。
- `パチスロ スーパー海物語 IN 沖縄2` は最新main検索で未登録を確認。K-Navi・ちょんぼりすたとも2016-09-05導入で一致するため、09/05群への遡及漏れとして次回最優先で追加する。chronologicalFrontierは2016-09-20のまま保持する。

## No.1011 — 乱嵐エイサー-30
- manufacturer: **オーイズミ**
- releaseDate canonical: **2016-09-20**
- releaseDate conflict: **2016-09-05 / 2016-09-19予定 / 2016-09-20ホール導入開始**
- generation/system: **5号機 / 5.5号機期 / ノーマルAタイプ / 完全告知 / 30Φ**
- recordStatus: **PARTIAL_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.3 / 98.6 / 99.9 / 101.6 / 105.0 / 110.0%**。
- BIG: **1/287.4 / 280.1 / 271.9 / 264.3 / 254.0 / 238.3**。
- REG: **1/489.1 / 471.5 / 452.0 / 434.0 / 399.6 / 346.8**。
- 合算: **1/181.0 / 175.7 / 169.8 / 164.3 / 155.3 / 141.2**。
- BIG: **約300枚**。
- REG: **約108枚**。
- 通常ゲーム数天井: **なし**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。今回比較可能な直接値を固定できず、推測補完なし。
- formalModelName / certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7
- AT/ART非搭載、通常ゲーム数天井非搭載のため、天井進捗・AT/ARTモード/状態は **NOT_APPLICABLE**。
- 設定変更専用の短縮天井、朝一専用モード、公開初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 成立済みボーナス等の特殊状態を含む設定変更/据え置き/純電源OFF→ON契約: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有ガックン/初期出目/告知ランプ等による変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- resetQaStatus: **PARTIAL_RESEARCH_EXHAUSTED**。

### data quality
- K-Navi、P-WORLD、娯楽産業、ちょんぼりすた、業界ニュース系を横断。
- 性能値は複数系統で概ね一致。
- 導入日は競合を残したままcanonicalを選択。
- base / 型式 / 検定番号 / 特殊状態reset契約は確認できないものを推測で埋めていない。

## 遡及 resetBehavior QA — ゴルゴ13 ザ・プロフェッショナルJ
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 性能側 `status: PARTIAL` は維持。
- reset側のみ **`PARTIAL_RESEARCH_EXHAUSTED`** へ更新。
- 5号機初ATとしてSモード/Gモード、Sモード最大130P、BIG後必ずSモード突入は高信頼解析で再確認。
- 設定変更/据え置き/純電源OFF→ON時のSモード/Gモード内部状態・残りP処理は、機種名/型式/スナイパーモード/Gモード/朝一/リセット/電断等の検索語を組み替え、業界・当時解析・古DB・回顧まで再探索したが直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の短縮天井/朝一恩恵/変更判別数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。
- 機械割はpacnk 96.8〜108.5%に対し後年回顧96.5〜108.8%の小差があるためCONFLICT保持。性能PARTIALを不用意にCOMPLETEへ変更していない。

## 遡及漏れ候補 — パチスロ スーパー海物語 IN 沖縄2
- 最新main検索で未登録。
- K-Navi: ホール導入開始 **2016-09-05**。
- ちょんぼりすた: **2016-09-05**、Aタイプ、約34G/50枚。
- BIG: **1/282.48 → 1/236.59**。
- REG: **1/354.25 → 1/236.59**。
- 合算: **1/157.16 → 1/118.30**。
- BIG約 **312枚** / REG **104枚**。
- 機械割はちょんぼりすた **97.5 / 98.6 / 100.2 / 102.6 / 107.0 / 110.9%**、5号機クロニクルは **97.4 / 98.5 / 100.2 / 102.6 / 106.9 / 110.8%**で小差。次回CONFLICT/丸め差として定義を分けて固定する。
- 天井なしを複数資料で確認。
- resetBehaviorの設定変更ページがK-Naviに存在することまでは確認したが本文直接取得が不安定。次回は別URL/検索語/アーカイブ系も含め、設定変更/据え置き/純電断/変更判別を再探索してからNo.1012候補として登録する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1011 / ゴルゴ13 QA更新レコードを再取得。
2. **1011件 / 2016-09-20群OPEN** を正本として継続。
3. 最優先で **`パチスロ スーパー海物語 IN 沖縄2`** を09/05群遡及漏れとして性能コア+resetBehavior v0.7を完成させ、未登録のままならNo.1012候補として追加。chronologicalFrontierは09/20を維持。
4. その後 **2016-09-20群の全メーカー横断監査**を継続し、未登録同日機を処理。
5. `ニューアイムジャグラーEX-KA` の具体導入日を公式/業界/当時解析/古DBで固定する。
6. 遡及reset QAは **ゴルゴ13まで完了**。次は `2006-03-27` より後の既存未QAレコードを実レコード上で時系列検索し、最初の1件から継続。旧INDEXは19件で途切れているため、ファイル名を推測せず最新main実体で確定してから処理する。
7. PARTIAL/UNVERIFIEDは資料系統を変えて再探索後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1011 乱嵐エイサー-30
- K-Navi: https://p-kn.com/slot/2571/
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/8523/greenbelt
- 娯楽産業: https://www.goraku-sangyo.com/オーイズミ　新機種「乱嵐エイサー-30」機種説明/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/8111
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/23335/

### 遡及QA ゴルゴ13 ザ・プロフェッショナルJ
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/1576/greenbelt
- ALL7: https://www.all7.jp/plans/index/2006/03
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/29/a.php
- パチマガスロマガ AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/29/e.php
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/531/1/10029
- pacnk: https://pacnk.com/slot/tools/sh_gorugo13zapurofesshonaru.html
- パチ7: https://pachiseven.jp/articles/detail/14122
- 回顧補助: https://chinta-slo-kaigo.com/golgo13pro/

### 遡及漏れ候補 スーパー海物語 IN 沖縄2
- K-Navi: https://p-kn.com/slot/2572/
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/23038/
- 5号機クロニクル: https://5goki.com/sanyo
