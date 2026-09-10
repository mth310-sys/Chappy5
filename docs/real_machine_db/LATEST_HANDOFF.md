更新日: 2026-09-11

## 現在地点
- recordCount: **1279**
- latestRecordAdded: **SLOTギャラガ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-04-22_slot-galaga.md`
- chronologicalFrontier: **2019-04-22**
- frontierLatestMachine: **SLOTギャラガ — No.1279**
- schema: **resetBehavior v0.7**
- status: **2019-04-22_GROUP_OPEN_1_OF_3_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1278を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoff指定の2019-04-09〜04-21境界を再確認し、次群は2019-04-22のまま。
- 2019-04-22群の最初の未処理 `SLOTギャラガ` をNo.1279として性能コア + resetBehavior v0.7で登録。
- GitHub全体検索で `SLOTギャラガ` の既存レコード重複なしを確認。
- 4/22群は `SLOTギャラガ / プレミアムハナハナ-30 / パチスロ黄門ちゃまV 女神盛-MEGAMORI-` の3機を複数資料で確認。残り2機のため群はOPEN。

## No.1279 — SLOTギャラガ
- manufacturer: **メーシー**
- formalModel: **`S／ギャラガ／DB`**
- certificationNumber: **`8S1110`**
- generation/system: **6号機 / AT / 疑似ボーナス / 32G ST型引き戻し**
- releaseDate: **2019-04-22**
- settings: **1 / 2 / 5 / 6**
- ボーナス初当り: **1/249.1 / 1/239.9 / 1/212.6 / 1/179.4**
- トータルボーナス出現率: **1/145.5 / 1/138.7 / 1/121.9 / 1/109.8**
- 機械割: **97.3 / 99.1 / 103.0 / 107.0%**
- baseGamesPer50: **51.3 / 51.4 / 52.5 / 53.4G**
- netIncrease: **約4.0枚/G**
- basicPayout: **BIG約155枚 / REG約48枚**
- ST: **BIG後32G ギャラガゾーン**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: HAZUSEで **非有利区間へ移行**、ちょんぼりすたで **内部状態RESET**、モゲスロでも非有利区間化を照合。
- carryOver: 据え置き条件を純電断と明示的に分離した直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: HAZUSEは **有利区間引継ぎ**、ちょんぼりすた/モゲスロは **内部状態引継ぎ**。
- gameCounterReset / ceilingAfterReset: 天井非搭載のため `NOT_APPLICABLE_NO_CEILING`。
- modeAfterReset: 設定変更時は非有利区間へ。朝一専用モード/振り分け公開値は `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。
- stateAfterReset: **設定変更RESET / 純電断CARRY_OVER**。
- advantageousSectionReset: **設定変更RESET→非有利区間 / 電源OFF→ON CARRY_OVER**。
- resetBenefits: 短縮天井、設定変更専用初当り/CZ優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 前日内部状態/有利区間は設定変更で保持されない。それ以外の専用不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 本機固有ガックン・初期出目・朝一外観ランプの確定判別契約/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 設定変更専用モード振り分け、朝一当選率、恩恵率、ガックン率は `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。

## CONFLICT / qualityNotes
- パチビーの機種タグに「天井あり」がある一方、HAZUSE、ちょんぼりすた、すろぱちくえすと等の専用本文は **天井非搭載** で一致。`CONFLICT_LOW_QUALITY_METADATA_CEILING_TAG_VS_MULTIPLE_DEDICATED_ANALYSIS_NO_CEILING` として保持し、canonicalは **天井非搭載**。
- ベース代表値約51Gと設定別51.3〜53.4Gは平均せず、代表値/設定別値として分離。
- `ボーナス初当り` と `トータルボーナス出現率` はST・1G連を含む定義差のため別フィールドとして保持。

## 2019-04-22群 — OPEN
### 登録済み
- No.1279 SLOTギャラガ

### 未処理確認済み
1. **プレミアムハナハナ-30** — パイオニア — 2019-04-22
2. **パチスロ黄門ちゃまV 女神盛-MEGAMORI-** — オリンピア — 2019-04-22

### 群監査メモ
- 2019-04-22導入は複数解析/当時資料で照合。
- `プレミアムハナハナ` は一部ページに2018-04-22という明白な年誤記があるため、次処理時に公式/型式DB/当時記事で2019年を固定してCONFLICTまたはTYPO扱いを判断する。
- 黄門ちゃまV女神盛は平和公式打-WINに2019-04-22掲載あり。
- 残り2機処理後に全メーカー/別型式/別スペック/PB/地域差まで再監査して4/22群CLOSED判定を行う。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_playboy.md`**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2007-02_playboy-30.md`**
- 今回は新規時系列本線を優先し、遡及QA地点は変更していない。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1279を再取得。
2. **2019-04-22群 `プレミアムハナハナ-30` をNo.1280候補として処理。**
3. 続いて `パチスロ黄門ちゃまV 女神盛-MEGAMORI-` を処理。
4. 4/22群を全メーカー/別型式/別スペック/PB/地域差まで横断監査してCLOSED判定。
5. 遡及QAは `2007-02_playboy-30.md` から再開。

## 主要出典 — 取得日 2026-09-11
### SLOTギャラガ
- ユニバーサル公式 ファミスロ: https://famislo.com/
- HAZUSE: https://hazuse.com/machine/pachislot/8S1110/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/8S1110/genre/209/
- グリーンべると: https://web-greenbelt.jp/00011169/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-26014/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/80286/
- 一撃: https://1geki.jp/slot/s_galaga/
- モゲスロ: https://moge-site.com/archives/21792
- すろぱちくえすと: https://www.slopachi-quest.com/article/galaga-settei/
- パチビー: https://www.pachibee.jp/machines/about/219030004

### 次候補 / 群監査
- プレミアムハナハナ解析: https://chonborista.com/slot/pionia-slot/79460/
- プレミアムハナハナ資料: https://hanahana-fun.com/premium.html
- 平和 打-WIN お知らせ: https://www.heiwanet.co.jp/da-win/news.html
- 黄門ちゃまV女神盛解析: https://chonborista.com/slot/orinpia-slot/77697/
