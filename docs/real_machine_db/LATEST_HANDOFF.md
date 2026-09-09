更新日: 2026-09-10

## 現在地点
- recordCount: **1169**
- latestRecordAdded: **ニューラッキージャックポット 7ver.**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-01-22_new-lucky-jackpot-7ver.md`
- chronologicalFrontier: **2018-01-22**
- frontierLatestMachine: **ニューラッキージャックポット 7ver. — No.1169**
- schema: **resetBehavior v0.7**
- status: **2018-01-22_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__NEXT_CONFIRMED_2018-02-05**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1166 `南国物語 TYPE-A`を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1166件 / chronologicalFrontier 2018-01-09 / 1/9群CLOSED**。
- 2018-01-22群の未処理3機種を重複検索後、performance core + resetBehavior v0.7で追加。
- No.1167 `パチスロ烈火の炎 Flame of Recca`、No.1168 `パチスロ EVANGELION 30φ MODEL`、No.1169 `ニューラッキージャックポット 7ver.` をmainへ保存。
- すろぱちくえすと2018年導入一覧は1/9→1/22で直接連続し、1/22は上記3機種で一致。HAZUSEカレンダーには1/15の日付枠が存在するが、パチスロ導入一覧側で1/15の独立機種群は確認されず、1/22群をCLOSE。

## No.1167 — パチスロ烈火の炎 Flame of Recca
- path: `docs/real_machine_db/machines/2018-01-22_recca-no-honoo-flame-of-recca.md`
- manufacturer: ニューギン
- releaseDate: 2018-01-22
- generation/system: 5.9号機 / A+RT+ART / 技術介入 / 4段階設定(1/2/5/6)
- formalModelName: `烈火の炎Z`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 市場掲載機械割: **97.7 / 100.0 / 103.3 / 106.3%**
- 完全攻略: **99.6 / 100.2 / 105.8 / 108.9%**
- BIG合算: **1/302.0 → 1/249.2**
- REG合算: **1/809.1 → 1/492.8**
- ボーナス合算: **1/219.9 → 1/165.5**
- 50枚ベース: **約34.0〜35.7G**
- RT/SP-ART純増: **約0.3枚/G**
- SP-ART初当たり: **約1/6526**
- 基本獲得: 火竜BIG約255枚 / 魔導具BIG約255枚 / 合成火竜ZONE平均111枚 / REG80枚
- 天井: **なし**

### resetBehavior v0.7
- 本機専用の当時朝一表では、設定変更/純電源OFF→ONの「内部状態」「ステージ」が調査中のまま。
- 型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/RT/ガックン/有利区間まで検索語を拡張して再探索したが、RT/SP-ART状態の変更・据え置き・純電断契約を直接固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載なので短縮天井はN/A。朝一専用高確・初当たり優遇・ガックン確定契約も確認なし。
- 5.9号機の有利区間一般論から本機固有朝一挙動を埋めない。

## No.1168 — パチスロ EVANGELION 30φ MODEL
- path: `docs/real_machine_db/machines/2018-01-22_evangelion-30phi-model.md`
- manufacturer: ビスティ
- releaseDate: 2018-01-22
- generation/system: 5号機 / ノーマルA / 30Φ / 完全告知 / 技術介入
- formalModelName: `パチスロ ヱヴァンゲリヲン・30MODEL S`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 機械割: **97.45 / 99.57 / 101.70 / 103.72 / 106.79 / 110.59%**
- BIG: **1/425.6 → 1/378.8**
- REG: **1/601.2 → 1/422.8**
- 合算: **1/249.2 → 1/199.8**
- 50枚ベースcanonical: **約46G**
- secondary: **約41.7G** — `CONFLICT_BASE_46_VS_41_7`
- 基本獲得: BIG最大402枚 / REG104枚
- 天井: **なし**

### resetBehavior v0.7
- 本機専用一撃資料で、設定変更時/電源OFF→ON時の液晶ステージはいずれも調査中。
- 一方、BAR揃いムービーとREG中キャラ紹介には**リセット後 / 電源OFF→ON後 / その他**で異なる公開振り分けが存在。
- 朝一客AI用の公開数値として、REG設定示唆合算率を保存（例: 設定6は電源OFF→ON後18.16% / 設定変更後またはREG3連21.79% / その他9.09%）。
- これは確率的設定推測材料であり、変更確定契約ではない。本機固有ガックンは再探索後も`UNVERIFIED_AFTER_RESEARCH`。

## No.1169 — ニューラッキージャックポット 7ver.
- path: `docs/real_machine_db/machines/2018-01-22_new-lucky-jackpot-7ver.md`
- manufacturer: 岡崎産業
- releaseDate: 2018-01-22
- generation/system: 5号機 / A+RT / 技術介入
- formalModelName: `ニューラッキージャックポット／N1`
- certificationNumber: `7S0919`
- 機械割: **97.7 / 98.6 / 100.0 / 102.6 / 105.2 / 110.9%**
- BIG: **1/296.5 → 1/239.2**
- REG: **1/378.8 → 1/239.2**
- 合算: **1/166.3 → 1/119.6**
- 50枚ベース: **約36G**
- 基本獲得: BIG300枚 / REG最大107枚
- BIG後RT: **30G**
- RT純増/G: `UNVERIFIED_AFTER_RESEARCH`
- 天井: **なし**

### resetBehavior v0.7
- 天井非搭載。設定変更時の短縮天井/朝一専用モード/高確/初当たり優遇は確認なし。
- 設定変更/据え置き/純電源OFF→ON時のRT内部状態を本機固有資料で直接固定できず`UNVERIFIED_AFTER_RESEARCH`。
- ガックン、初期出目、7セグ/ランプによる決定的変更判別も検索語と資料系統を変えて再探索後UNVERIFIED。

## 2018-01-22群監査
- すろぱちくえすと2018年導入日一覧: 1/22は `エヴァ ドキドキ400ver / 烈火の炎 / NEWジャクポ7ver.` の3機種。
- 直前handoffの年次カレンダー2系統も同じ3機種として先行確認済み。
- HAZUSE新台カレンダーは2018年1月に1/9・1/15・1/22の日付枠を持つが、パチスロ年次一覧では1/9の次が1/22。今回1/15に独立追加すべきパチスロ実導入を確認できず、パチスロ本線は1/22群CLOSE。
- 1/22各機種は個別解析/業界DBでも導入日を照合。

## 次の確認済み導入群
- **2018-02-05**
  - `パチスロ戦場のヴァルキュリア` — すろぱちくえすと年次一覧/K-Naviで2/5候補。
  - `乙女マスターズ～空を翔る白き軌跡～` — すろぱちくえすと年次一覧で2/5候補。
  - `新世紀エヴァンゲリオン～まごころを、君に～2` — すろぱちくえすと年次一覧で2/5候補。
- 次回はHAZUSE 2/5群、メーカー別一覧、別スペック/地域導入差を再監査し、最古未処理をNo.1170として収集する。

## 継続注意事項
- **鬼若弁慶**は2017-12-04予定表記ではなく、HAZUSE/DMM等の実導入 **2018-02-19** で正式回収する。
- `イミソーレXX` exact dayは新しい決定的資料が出た場合のみ追補。月単位No.1159として既回収。
- ノーマル/A+RT機ではRT内部状態や成立済みボーナスの設定変更/純電断挙動を一般論から埋めない。
- HAZUSE等の「日付枠」だけをパチスロ実導入と断定しない。年次パチスロ一覧・個別機種資料まで照合する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1167〜1169を再取得。
2. **1169件 / chronologicalFrontier 2018-01-22 / 1/22群CLOSED** を正本として継続。
3. 2018-01-23〜02-04の境界を地域差・別スペック込みで短く再監査。
4. **2018-02-05群**を複数カレンダー・メーカー別一覧で再監査し、最古未処理をNo.1170としてperformance core + resetBehavior v0.7収集。
5. 現時点2/5候補: **パチスロ戦場のヴァルキュリア / 乙女マスターズ～空を翔る白き軌跡～ / 新世紀エヴァンゲリオン～まごころを、君に～2**。
6. 2/5群CLOSE後、2/12→2/19群へ時系列前進。鬼若弁慶は2/19で正式回収。
7. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1167 烈火の炎
- パチ7: https://pachiseven.jp/machines/5347/cutout/14
- パチビー: https://www.pachibee.jp/machines/lecture/217110000
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/51280/
- すろぱちくえすと: https://www.slopachi-quest.com/article/flame-of-rekka/
- P-WORLD: https://www.p-world.co.jp/machine/database/8552

### No.1168 EVANGELION 30φ MODEL
- SANKYO公式: https://www.sankyo-fever.jp/collection/883/
- 一撃: https://1geki.jp/slot/s_eva30/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_eva30/3/
- 一撃 REGキャラ: https://1geki.jp/slot/s_eva30/64/
- すろぱちくえすと: https://www.slopachi-quest.com/article/eva-dokidoki400/

### No.1169 ニューラッキージャックポット 7ver.
- HAZUSE: https://hazuse.com/machine/pachislot/7S0919/
- ちょんぼりすた: https://chonborista.com/slot/okazaki-slot/51932/
- すろぱちくえすと: https://www.slopachi-quest.com/article/new-luckyjackpot-7ver/
- P-WORLD: https://www.p-world.co.jp/machine/database/8563

### 年次カレンダー / 次群
- すろぱちくえすと2018年導入一覧: https://www.slopachi-quest.com/article/sindai-2018/
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
