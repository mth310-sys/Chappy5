更新日: 2026-09-11

## 現在地点
- recordCount: **1265**
- latestRecordAdded: **ニューパルサーDX ～チェリーバージョン～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-02-04_new-pulsar-dx-cherry-version.md`
- chronologicalFrontier: **2019-02-04**
- frontierLatestMachine: **ニューパルサーDX ～チェリーバージョン～ — No.1265**
- schema: **resetBehavior v0.7**
- status: **2019-02-04_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1264を再取得して開始。
- INDEXは旧スナップショット（19件）のため、LATEST_HANDOFF + main実レコードを正本として継続。
- main上で `ニューパルサーDX ～チェリーバージョン～` 未登録を確認し、2019-02-04群の次の未処理としてNo.1265登録。
- 山佐ネクスト公式で5号機/Aタイプ/2019年2月稼働を確認。
- HAZUSEで2019-02-04、型式 `ニューパルサーDX2／CC`、検定番号 `7S1206` を取得。
- 日刊スポーツ・Amusement Japanの当時業界記事、HAZUSE、パチマガスロマガ、すろぱちくえすと、ちょんぼりすた、一撃、P-WORLDで性能コアを照合。
- 設定変更/据え置き/純電断について、機種名表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンを組み替えて再探索。天井非搭載・朝一リセット恩恵なしの可能性までは確認したが、本機固有の初期出目/内部ボーナス成立/告知状態/ガックン契約は固定できず推定しない。
- 2019-02-04群を当時新台一覧・HAZUSE・一撃月間カレンダーで再監査。当時新台一覧はA-SLOT DARTSLIVE / ニューパルサーDXチェリー / ミリオンルーレットの3機を明示。全3機登録済みのため群をCLOSED。なお後年一撃月間カレンダーは2/4のスロットを2機と表示しミリオンルーレットを欠くため、単独の完全一覧としては採用しない。

## No.1265 — ニューパルサーDX ～チェリーバージョン～
- releaseDateCanonical: **2019-02-04**
- manufacturer: **山佐**
- generation/system: **5.9号機 / ノーマルAタイプ / 完全告知**
- formalModel: **`ニューパルサーDX2／CC`**
- certificationNumber: **`7S1206`**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **96.9 / 98.2 / 99.8 / 102.1 / 105.3 / 108.5%**
- BIG: **1/284.94 / 1/283.71 / 1/277.69 / 1/268.59 / 1/260.06 / 1/251.10**
- REG: **1/404.54 / 1/385.51 / 1/372.36 / 1/344.93 / 1/312.08 / 1/287.44**
- 合算: **1/167.18 / 1/163.43 / 1/159.07 / 1/151.00 / 1/141.85 / 1/134.02**
- baseGamesPer50: **35.31 / 35.69 / 36.00 / 36.50 / 36.87 / 37.65G**
- BIG: **312枚**
- REG: **約104枚**
- RT/ART/AT: **非搭載**
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: 天井・AT/ART/RTモード管理はN/A。初期出目/内部ボーナス成立/告知状態の本機固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを純電断と分離した本機固有保持契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: 純電源OFF→ON時の初期出目/内部成立/告知状態は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE`（天井・ゾーン非搭載）。
- modeAfterReset / stateAfterReset: AT/ART/RTモードはN/A。朝一専用当選率・専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_TO_GAMEPLAY / NO_AT_ART_ADVANTAGEOUS_SECTION_BEHAVIOR_TO_MODEL`。世代一般論から補完しない。
- resetBenefits: ちょんぼりすたは朝一リセット恩恵なしの可能性が高いと記載。短縮天井等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 本機固有ガックン条件/率を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。山佐他機種の仕様を転記しない。
- numericResetData: 短縮天井N/A。朝一当選率/専用モード振り分け/ガックン率の公開固定値なし。

## conflicts
- 後年5号機クロニクルに導入「2019年4月」・BIG「最大259枚」とあるが、山佐公式2019年2月、当時業界記事2019年2月上旬、複数当時解析2019-02-04、BB312枚が一致。`CONFLICT_SECONDARY_RETROSPECTIVE_RELEASE_2019_04_AND_BIG259_VS_CONTEMPORARY_2019_02_04_AND_BIG312` としてNo.1265内に保持。
- 2019-02-04群一覧について、当時パチパチ情報部はスロット3機を明示する一方、後年一撃月間カレンダーは2機表示でミリオンルーレットを欠く。群監査では当時資料+既存個別導入資料を優先し3機群とする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- lastRetroQaResult: **アクアビーナス — PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。main上ですでにv0.7 QA済みなら重複編集せずGit追加順の次の未QA機へ自動前進する。

## 2019-02-04群
### 登録済み
- No.1263 A-SLOT DARTSLIVE
- No.1264 ミリオンルーレット
- No.1265 ニューパルサーDX ～チェリーバージョン～

### 群判定
- **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。当時2/4新台一覧のスロット3機を全登録。メーカー別/別型式/別スペック/PB/地域差の追加独立機は今回の横断検索で固定できず。

## 継続注意事項
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを再取得。
- 並行更新があれば最新mainを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 競合値は平均せずCONFLICT保持。

## 次回再開地点
1. 最新mainを再取得しrecordCount/HEAD競合を確認。
2. **2019-02-05以降〜次の導入群までの境界監査**を行い、未処理機を導入日順に固定する。
3. 現時点で次の有力な導入群は **2019-02-18**。先行確認候補として **パチスロ ヱヴァンゲリヲン AT777**（ビスティ / 6号機AT / 2019-02-18）を確認済み。境界に2/5〜2/17機がないことを横断確認してからNo.1266候補として処理する。
4. 2019-02-18群は単一候補でCLOSEせず、メーカー別/別型式/別スペック/PB/地域差まで監査する。
5. 遡及QAは `2006-12_thunder-v-special.md` から確認し、既QAなら次の未QA機まで進める。

## 主要出典 — 取得日 2026-09-11
### ニューパルサーDX ～チェリーバージョン～
- 山佐ネクスト公式: https://yamasa-next.co.jp/model_npd2/
- 日刊スポーツ: https://www.nikkansports.com/amusement/pachislot/news/201812100000411.html
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000951/
- HAZUSE: https://hazuse.com/machine/pachislot/7S1206/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/230/a.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/230/c-1.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/newpluser-dx-cherry-settei/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/75476/
- 一撃: https://1geki.jp/slot/s_newpul_c/4/
- P-WORLD: https://www.p-world.co.jp/machine/database/8839
- 当時2/4新台一覧: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/01/27/223203
- 5号機クロニクル山佐一覧（競合参照）: https://5goki.com/yamasa

### 次回先行候補
- パチスロ ヱヴァンゲリヲン AT777: https://slotkaiseki.hatenablog.com/entry/2018/12/31/215348
