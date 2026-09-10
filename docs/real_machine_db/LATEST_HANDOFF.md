更新日: 2026-09-11

## 現在地点
- recordCount: **1263**
- latestRecordAdded: **A-SLOT DARTSLIVE**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-02-04_a-slot-dartslive.md`
- chronologicalFrontier: **2019-02-04**
- frontierLatestMachine: **A-SLOT DARTSLIVE — No.1263**
- schema: **resetBehavior v0.7**
- status: **2019-02-04_GROUP_OPEN_1_OF_3_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1262を再取得して開始。
- INDEXは旧スナップショット（19件）のため、LATEST_HANDOFF + main実レコードを正本として継続。
- 2019-01-22～2019-02-03境界を複数導入カレンダーで監査し、1/21群の次の全国導入群を2019-02-04として固定。
- 2019-02-04群は `A-SLOT DARTSLIVE`、`ミリオンルーレット`、`ニューパルサーDX ～チェリーバージョン～` の3機を複数資料で確認。
- handoff先頭候補 `A-SLOT DARTSLIVE` をNo.1263として性能コア + resetBehavior v0.7で登録。
- サミー公式は2019年2月上旬稼働予定、K-Navi/一撃/ちょんぼりすた/当時導入一覧は2019-02-04で一致するため2/4をcanonical固定。
- 型式は当時解析の `パチスロダーツライブ/ZA` を保存。検定通過日2018-04-17の二次資料は確認したが、検定番号そのものは高信頼固定できずUNVERIFIED。

## No.1263 — A-SLOT DARTSLIVE
- releaseDateCanonical: **2019-02-04**
- manufacturer: **サミー（製造元: 株式会社銀座）**
- generation/system: **5.9号機 / A+RT**
- formalModel: **`パチスロダーツライブ/ZA`**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- settings: **1 / 2 / 5 / 6**
- 機械割: **97.7 / 99.7 / 103.0 / 106.0%**
- BIG: **1/299.3 / 1/296.5 / 1/287.4 / 1/277.7**
- REG: **1/392.4 / 1/364.1 / 1/316.6 / 1/280.1**
- ボーナス合算: **1/169.8 / 1/163.4 / 1/150.7 / 1/139.4**
- baseGamesPer50: **約34.53～37.13G（設定差レンジ）**。概要資料の約34.5Gは代表/丸め値として分離。
- RT純増: **約0.003枚/G（現状維持程度）**
- BIG: **300枚**
- REG: **約100枚**
- RT: **25G / 50G / 次回ボーナスまで**
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: 天井/ゲーム数管理はN/A。設定変更時RT/CZ・ボーナス成立状態・初期出目の本機固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを純電断から分離したRT/CZ状態等の保持契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: 純電源OFF→ON時のRT/CZ状態・ボーナス成立状態・初期出目は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE`（通常ゲーム数天井・ゾーン非搭載）。RT/CZ残りGの変更/電断処理はUNVERIFIED。
- modeAfterReset: 朝一専用内部モード/専用振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: 本DBの朝一客行動用比較として `NOT_APPLICABLE_TO_GAMEPLAY`。世代一般論から補完しない。
- resetBenefits: ちょんぼりすたが「朝イチは特に恩恵などは存在しない」と明記。短縮天井/当選優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックンは複数二次資料で立ち回り材料として言及されるが確定契約ではないため `POSSIBLE_GAKKUN_REFERENCE_ONLY_NONDETERMINISTIC`。
- numericResetData: 短縮天井N/A、朝一当選率/専用モード振り分け/ガックン率は公開値を固定できず。

## conflicts
- `RELEASE_SOURCE_INTERNAL_CONFLICT_2019_02_04_VS_2019_02_13` — `スロット解析情報~すろかい~`同一ページ内で冒頭2/4と基本情報2/13が併存。公式の2月上旬予定 + 多数資料の2/4一致を優先し2/4 canonical。
- 性能コアは丸め差以外の主要CONFLICTなし。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- lastRetroQaResult: **アクアビーナス — PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。main上ですでにv0.7 QA済みなら重複編集せずGit追加順の次の未QA機へ自動前進する。

## 2019-02-04群
### 登録済み
- No.1263 A-SLOT DARTSLIVE

### 未処理確認候補
1. **ミリオンルーレット** — コナミアミューズメント / 5.9号機ノーマル。
2. **ニューパルサーDX ～チェリーバージョン～** — 山佐 / 5.9号機ノーマル。

### 群判定
- **OPEN**。3機の存在は複数導入一覧で一致。残り2機を個別処理後、メーカー別/別型式/別スペック/PB/地域差を再監査してCLOSED可否を判断する。

## 継続注意事項
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを再取得。
- 並行更新があれば最新mainを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一性能でも正式型式・製造元・25/30Φ等の明確な派生差は全機種方針に従い独立収録を検討。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- COMPLETE_COREの性能完了判定とreset QA状態を分離。
- 競合値は平均せずCONFLICT保持。

## 次回再開地点
1. 最新mainを再取得しrecordCount/HEAD競合を確認。
2. **2019-02-04群の次の未処理機 `ミリオンルーレット` をNo.1264候補として個別監査・登録**。
3. 続いて `ニューパルサーDX ～チェリーバージョン～` を処理。
4. 2/4群を全メーカー・別型式・別スペック・PB・地域差で最終横断監査しCLOSED可否を判定。
5. 遡及QAは `2006-12_thunder-v-special.md` から確認し、既QAなら次の未QA機まで進める。

## 主要出典 — 取得日 2026-09-11
### A-SLOT DARTSLIVE
- Sammy公式: https://www.sammy.co.jp/japanese/news/2018/1173.html
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000947/
- K-Navi: https://p-kn.com/slot/3164/
- 一撃: https://1geki.jp/slot/s_dartslive/
- 一撃 CZ/RT: https://1geki.jp/slot/s_dartslive/62/
- 一撃 小役/ベース: https://1geki.jp/slot/s_dartslive/4/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/173/a.php
- パチマガスロマガ CZ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/173/03-1.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/dartslive-settei/
- スロット解析.com: https://slotkaiseki.com/dartslive_ichiran/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/75538/
- モゲスロ: https://moge-site.com/archives/19479
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/dartslive
- A-SLOT中古実機DB: https://www.a-slot.com/SHOP/ginza200.html
- P-WORLD: https://www.p-world.co.jp/machine/database/8834

### 2019-02-04群監査
- 当時2/4導入まとめ: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/01/27/223203
- 2019年導入カレンダー: https://moge-site.com/new-slot2019
