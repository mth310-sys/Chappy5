更新日: 2026-09-11

## 現在地点
- recordCount: **1264**
- latestRecordAdded: **ミリオンルーレット**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-02-04_million-roulette.md`
- chronologicalFrontier: **2019-02-04**
- frontierLatestMachine: **ミリオンルーレット — No.1264**
- schema: **resetBehavior v0.7**
- status: **2019-02-04_GROUP_OPEN_2_OF_3_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1263を再取得して開始。
- INDEXは旧スナップショット（19件）のため、LATEST_HANDOFF + main実レコードを正本として継続。
- main上で `ミリオンルーレット` 未登録を確認し、2019-02-04群の次の未処理としてNo.1264登録。
- コナミアミューズメント公式アーカイブで2019年2月稼働開始・5.9号機ノーマルを確認。
- ちょんぼりすた / すろぱちくえすと / モゲスロ / P-WORLD / 当時導入一覧で2019-02-04が一致するためcanonical固定。
- P-WORLDで型式 `ミリオンルーレット／KU`、検定番号 `7S1401` を取得。

## No.1264 — ミリオンルーレット
- releaseDateCanonical: **2019-02-04**
- manufacturer: **コナミアミューズメント**
- generation/system: **5.9号機 / ノーマルAタイプ**
- formalModel: **`ミリオンルーレット／KU`**
- certificationNumber: **`7S1401`**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.5 / 98.7 / 100.1 / 102.1 / 104.9 / 110.9%**
- BIG: **1/277.7 / 1/274.2 / 1/271.9 / 1/268.6 / 1/262.1 / 1/241.8**
- REG: **1/368.2 / 1/348.6 / 1/321.3 / 1/290.0 / 1/266.4 / 1/241.8**
- 合算: **1/158.3 / 1/153.5 / 1/147.3 / 1/139.4 / 1/132.1 / 1/120.9**
- baseGamesPer50: **約33.7G/50枚**
- BIG: **312枚**
- REG: **約104枚**
- RT/ART/AT: **非搭載**
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: 天井・AT/ART/RTモード管理はN/A。初期出目/内部ボーナス成立/ルーレット演出状態の本機固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを純電断と分離した本機固有保持契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: 純電源OFF→ON時の初期出目/内部成立/演出状態は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE`（天井・ゾーン非搭載）。
- modeAfterReset / stateAfterReset: AT/ART/RTモードはN/A。朝一専用当選率・専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_TO_GAMEPLAY / NO_AT_ART_ADVANTAGEOUS_SECTION_BEHAVIOR_TO_MODEL`。世代一般論から補完しない。
- resetBenefits: ちょんぼりすたは朝一恩恵なしの可能性が高いと記載。短縮天井等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: モゲスロは液晶なしAタイプのため確実なリセット判別は難しく、コナミ機ではガックンが効かない可能性が高いとする。確定契約ではないため `RESET_DETECTION_DIFFICULT / GAKKUN_UNCONFIRMED_POSSIBLY_INEFFECTIVE`。
- numericResetData: 短縮天井N/A。朝一当選率/専用モード振り分け/ガックン率の公開固定値なし。

## conflicts
- 性能コア・導入日の主要値に実質的CONFLICTなし。
- 朝一恩恵・ガックンに関する二次資料は推測表現を含むため確定仕様へ昇格させない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- lastRetroQaResult: **アクアビーナス — PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。main上ですでにv0.7 QA済みなら重複編集せずGit追加順の次の未QA機へ自動前進する。

## 2019-02-04群
### 登録済み
- No.1263 A-SLOT DARTSLIVE
- No.1264 ミリオンルーレット

### 未処理確認候補
1. **ニューパルサーDX ～チェリーバージョン～** — 山佐 / 5.9号機ノーマル。

### 群判定
- **OPEN**。確認済み3機中2機処理済み。残るニューパルサーDX ～チェリーバージョン～を処理後、メーカー別/別型式/別スペック/PB/地域差を再監査してCLOSED可否を判断する。

## 継続注意事項
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを再取得。
- 並行更新があれば最新mainを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 競合値は平均せずCONFLICT保持。

## 次回再開地点
1. 最新mainを再取得しrecordCount/HEAD競合を確認。
2. **2019-02-04群の次の未処理機 `ニューパルサーDX ～チェリーバージョン～` をNo.1265候補として個別監査・登録**。
3. 2/4群を全メーカー・別型式・別スペック・PB・地域差で最終横断監査しCLOSED可否を判定。
4. 遡及QAは `2006-12_thunder-v-special.md` から確認し、既QAなら次の未QA機まで進める。

## 主要出典 — 取得日 2026-09-11
### ミリオンルーレット
- コナミアミューズメント公式: https://www.konami.com/amusement/psm/archive/ps/2019/millionroulette/
- P-WORLD: https://www.p-world.co.jp/machine/database/8822
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/75448/
- すろぱちくえすと: https://www.slopachi-quest.com/article/millionroulette-settei/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/05/a.php
- モゲスロ: https://moge-site.com/archives/19565
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/million
- 当時2/4新台一覧: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/01/27/223203
