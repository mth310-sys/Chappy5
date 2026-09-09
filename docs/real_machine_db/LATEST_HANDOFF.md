更新日: 2026-09-10

## 現在地点
- recordCount: **1173**
- latestRecordAdded: **パチスロ GATE**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-02-19_gate.md`
- chronologicalFrontier: **2018-02-19**
- frontierLatestMachine: **パチスロ GATE — No.1173**
- schema: **resetBehavior v0.7**
- status: **2018-02-19_GROUP_OPEN_1_OF_3_CALENDAR_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1172 `新世紀エヴァンゲリオン～まごころを、君に～2` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1172件 / chronologicalFrontier 2018-02-05 / 2/5群CLOSED**。
- K-Navi 2018年2月全国導入カレンダーを再確認し、2/5の次の日付見出しが2/19であることを直接確認。2/12～2/18に確定的なパチスロ本線機種は同カレンダー上存在せず、追加の検索でも独立した確定導入機種を固定できなかった。
- 2018-02-19群としてK-Naviで `パチスロ GATE` / `鬼若弁慶` / `コンチネンタルゼロ` の3機を確認。
- 先頭未処理 `パチスロ GATE` をNo.1173としてperformance core + resetBehavior v0.7で追加。2/19群はまだOPEN。

## No.1173 — パチスロ GATE
- path: `docs/real_machine_db/machines/2018-02-19_gate.md`
- manufacturer: ネット
- releaseDate: 2018-02-19
- generation/system: 5.9号機 / A+RT / CZ / 技術介入 / リアルボーナス
- formalModelName: `GATE／ND`
- certificationNumber: `7S1215`
- 通常機械割canonical: **97.5 / 99.1 / 100.7 / 102.0 / 104.9 / 113.2%**
- 完全攻略: **99.0 / 100.6 / 102.2 / 103.6 / 106.6 / 115.0%**
- BIG合算: **1/286 → 1/234**
- REG合算: **1/402 → 1/244**
- ボーナス合算: **1/167 → 1/119**
- RT初当たり: **1/305 → 1/224**
- ボーナス+RT合算: **1/108 → 1/78**
- 50枚ベース: **約32G**
- RT純増canonical: **約0.1枚/G**
- BIG最大308枚 / REG最大104枚
- RT: 30G or 次回ボーナス成立までの無限RT
- 天井: **なし**

### conflicts
- 設定1通常機械割はHAZUSE/5号機クロニクル **97.5%** vs ちょんぼりすた **97.9%**。平均せず`CONFLICT_PAYOUT_SETTING1_97_5_VS_97_9`、97.5系列をcanonical。
- RT純増はP-WORLD **約0.1枚/G**、A-SLOT「現状維持程度」に対し、slot-kakaku単独で **2.0枚**。高信頼側と大きく不整合のため0.1枚/Gをcanonical、2.0は`CONFLICT_LOW_CONFIDENCE_RT_NET_2_0`として隔離。
- 5号機クロニクルは機械割系列はHAZUSEと一致する一方、別欄にA+ART/BIG約150枚等の本機と不整合な記述があり、その部分は採用しない。

### resetBehavior v0.7
- ちょんぼりすた本機専用朝一比較表では、**設定変更時 / 電源OFF→ON時とも「状態」「ステージ」は調査中**。
- K-Naviにも「設定変更後の挙動」項目は存在するが、現存インデックスから具体的状態・数値契約を回収できない。
- 機種名/別表記/型式`GATE／ND`/NETと、設定変更・リセット・朝一・据え置き・電源OFF ON・RT状態・ガックン・有利区間を組み替えて再探索後も決定的な本機固有契約は固定できず、設定変更/純電断のRT/CZ内部状態は`UNVERIFIED_AFTER_RESEARCH`。
- 据え置き独立契約: `UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 天井非搭載のためゲーム数天井/リセット短縮天井はN/A。
- 設定変更専用モード、CZ/RT/ボーナス優遇率、朝一数値恩恵/不利: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の有利区間リセット契約: `UNVERIFIED_AS_EXPLICIT_ADVANTAGEOUS_SECTION_CONTRACT_AFTER_RESEARCH`。一般的な5.9号機仕様から補完しない。
- ガックン/初期出目/ランプ等の確定的変更判別: `UNVERIFIED_AFTER_RESEARCH`。

## 2018-02-19群監査
K-Navi全国導入カレンダーでパチスロ3機を確認。
1. `パチスロ GATE` — **No.1173 完了**
2. `鬼若弁慶` / `超速回胴 鬼若弁慶` — **No.1174候補**
3. `コンチネンタルゼロ` — **No.1175候補**

- status: `2018-02-19_GROUP_OPEN_1_OF_3_CALENDAR_CONFIRMED_PROCESSED`
- HAZUSEでもGATE / 鬼若弁慶 / コンチネンタルゼロの2018-02-19を個別確認済み。
- 月単位欄に `トリプルクラウンZEROII SECOND EDITION` があるため、2/19群処理後の月内境界監査でexact dayを別途確認し、日付不明のまま2/19へ強制混入しない。

## 継続注意事項
- `鬼若弁慶`は2018-02-19で正式回収する。HAZUSEで型式`オニワカベンケイ`、検定番号`7S1056`、メーカーBorderを確認済み。
- `コンチネンタルゼロ`はHAZUSEで2018-02-19、型式`コンチネンタルゼロZZ`、検定番号`7S1397`、ユニバーサルブロスを確認済み。
- ノーマル/A+RT機のRT内部状態や成立済みボーナスの設定変更/純電断挙動を一般論から埋めない。
- 5.9号機の有利区間も一般論で機種固有挙動を補完しない。直接比較表・機種固有解析がある場合のみ確定する。
- 機械割/ボーナス合算等の資料差は平均化せずCONFLICT保持。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1173を再取得。
2. **1173件 / chronologicalFrontier 2018-02-19 / 2/19群OPEN 1/3処理済み** を正本として継続。
3. 次の未処理 `超速回胴 鬼若弁慶` をNo.1174候補としてperformance core + resetBehavior v0.7で回収。
4. 続いて `コンチネンタルゼロ` を処理し、2/19同日全メーカー・別スペック・地域差を再監査して群CLOSED判定。
5. その後、月単位掲載 `トリプルクラウンZEROII SECOND EDITION` のexact dayを監査して時系列を確定。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1173 パチスロ GATE
- K-Navi 2018年2月カレンダー: https://p-kn.com/calendar/201802/
- HAZUSE 基本: https://hazuse.com/machine/pachislot/7S1215/
- HAZUSE RT: https://hazuse.com/machine/pachislot/7S1215/genre/209/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/51612/
- P-WORLD: https://www.p-world.co.jp/machine/database/8561
- K-Navi個別: https://p-kn.com/slot/2935/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/173/c-1.php
- P-Summa: https://psumma.jp/trend/40677/
- A-SLOT: https://www.a-slot.com/SHOP/net57.html
- slot-kakaku: https://slot-kakaku.com/gate/

### 次候補 / 同日監査
- 鬼若弁慶 HAZUSE: https://hazuse.com/machine/pachislot/7S1056/
- 鬼若弁慶 ちょんぼりすた: https://chonborista.com/slot/border/54563/
- コンチネンタルゼロ HAZUSE: https://hazuse.com/machine/pachislot/7S1397/
