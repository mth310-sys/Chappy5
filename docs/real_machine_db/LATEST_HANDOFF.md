更新日: 2026-09-10

## 現在地点
- recordCount: **1172**
- latestRecordAdded: **新世紀エヴァンゲリオン～まごころを、君に～2**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-02-05_evangelion-magokoro-2.md`
- chronologicalFrontier: **2018-02-05**
- frontierLatestMachine: **新世紀エヴァンゲリオン～まごころを、君に～2 — No.1172**
- schema: **resetBehavior v0.7**
- status: **2018-02-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1171 `乙女マスターズ～空を翔る白き軌跡～` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1171件 / chronologicalFrontier 2018-02-05 / 2/5群OPEN 2/3処理済み**。
- handoff指定の最古未処理No.1172候補 `新世紀エヴァンゲリオン～まごころを、君に～2` をperformance core + resetBehavior v0.7で追加。
- K-Navi全国導入カレンダー、P-Summa月間新台まとめ、個別機種資料を再突合し、2/5群の確認済み3機（戦場のヴァルキュリア / 乙女マスターズ / エヴァまごころ2）が全て処理済みとなったため、**2018-02-05群をCLOSE**。

## No.1172 — 新世紀エヴァンゲリオン～まごころを、君に～2
- path: `docs/real_machine_db/machines/2018-02-05_evangelion-magokoro-2.md`
- manufacturer: ビスティ
- releaseDate: 2018-02-05
- generation/system: 5.9号機 / A+RT / 技術介入 / リアルボーナス
- formalModelName: `パチスロ 新世紀エヴァンゲリオン・まごころを君に2j`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 機械割: **97.5 / 98.6 / 101.1 / 104.1 / 106.3 / 110.2%**
- ボーナス合算: **1/199.8 → 1/163.0**
- SBB: **1/697.2 → 1/668.7**
- NBB: **1/736.4 → 1/555.4**
- REG: **1/452.0 → 1/352.3**
- 50枚ベース: **約41.3G（設定1）**
- 基本獲得: **SBB最大407枚 / BIG最大203枚 / REG最大96枚**
- RT: ボーナス後レイチャレンジ（SBB/BIG後最大20G、REG後最大10G）→特殊リプレイ成立でレイチャンス最大50G
- 天井: **なし**
- RT純増の比較可能な数値は再探索後も決定的に固定できず、公式系説明「メダルをほぼ減らすことなく」を保持し、数値は推測補完しない。

### resetBehavior v0.7
- パチ＆スロ必勝本の本機専用比較表で、**設定変更 / 純電源OFF→ONの双方とも開始ステージは「使徒、襲来ステージ」**と直接確認。
- 同比較表のRT状態欄は双方とも**「現在調査中」**。後年資料、型式名、メーカー/シリーズ名と設定変更・リセット・朝一・据え置き・電源OFF ON・RT状態・ガックン・有利区間を組み替えて再探索したが、決定的な更新を固定できなかったため`UNVERIFIED_AFTER_RESEARCH`。一般的なA+RT機の仕様から補完しない。
- 天井非搭載のためゲーム数天井/リセット短縮天井はN/A。
- 設定据え置きを純電断と独立条件で明記した契約は`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 朝一専用モード、設定変更専用初当たり/CZ優遇、数値的恩恵/不利は`NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン・初期出目・ランプ等の確定的変更判別も`UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機として扱われるが、設定変更時の有利区間そのものを直接記述した機種固有契約は`UNVERIFIED_AS_EXPLICIT_ADVANTAGEOUS_SECTION_CONTRACT_AFTER_RESEARCH`。

## 2018-02-05群監査
K-Navi全国導入カレンダー等で確認したパチスロ3機を全処理。
1. `パチスロ戦場のヴァルキュリア` — **No.1170 完了**
2. `乙女マスターズ～空を翔る白き軌跡～` — **No.1171 完了**
3. `新世紀エヴァンゲリオン～まごころを、君に～2` — **No.1172 完了**

- status: `2018-02-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- 2/12境界を検索したが、今回の検索では確定的なパチスロ本線新機種を固定できず。次回はK-Navi月間カレンダーを2/19まで精査し、最古未処理日を確定する。
- 2/19には `超速回胴 鬼若弁慶` が存在することをHAZUSE/ちょんぼりすた/DMMで直接確認済み。導入2018-02-19、ボーダー、型式`オニワカベンケイ`、検定番号`7S1056`、Aタイプ、天井なし。次回候補の一つだが、2/12～2/18の漏れ監査を先に行う。

## 継続注意事項
- **鬼若弁慶**は2018-02-19で正式回収する。古い予定表記へ戻さない。
- `イミソーレXX` exact dayは新しい決定的資料が出た場合のみ追補。月単位No.1159として既回収。
- ノーマル/A+RT機のRT内部状態や成立済みボーナスの設定変更/純電断挙動を一般論から埋めない。
- 5.9号機の有利区間も一般論で機種固有挙動を補完しない。直接比較表・機種固有解析がある場合のみ確定する。
- 機械割/ボーナス合算等の資料差は平均化せずCONFLICT保持。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1172を再取得。
2. **1172件 / chronologicalFrontier 2018-02-05 / 2/5群CLOSED** を正本として継続。
3. K-Navi 2018年2月カレンダー等で **2/12～2/18のパチスロ本線機種を最終監査**。
4. 漏れが無ければ **2018-02-19群OPEN**。確認済み候補 `超速回胴 鬼若弁慶` を含め、同日全機種をメーカー別一覧・別スペック・地域差まで横断して最古未処理機種をNo.1173として処理。
5. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1172 新世紀エヴァンゲリオン～まごころを、君に～2
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/887/
- パチビー: https://www.pachibee.jp/machines/index/218010000
- パチ＆スロ必勝本 基本: https://p.hisshobon.jp/machine/3106/1/67827
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/3106/1/68306
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/52229/
- K-Navi: https://p-kn.com/slot/2949/
- P-WORLD: https://www.p-world.co.jp/machine/database/8574

### 2018-02-05群 / 次境界監査
- K-Navi 2018年2月新台カレンダー: https://p-kn.com/calendar/201802/
- P-Summa 2018年2月新台まとめ: https://psumma.jp/trend/40677/
- 鬼若弁慶 HAZUSE: https://hazuse.com/machine/pachislot/7S1056/
- 鬼若弁慶 ちょんぼりすた: https://chonborista.com/slot/border/54563/
