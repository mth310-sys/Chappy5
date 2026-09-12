更新日: 2026-09-12

## 現在地点
- recordCount: **1501**
- latestRecordAdded: **Sキャッツ・アイ — No.1501**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-06-06_s-cats-eye.md`
- chronologicalFrontier: **2022-06-06**
- frontierLatestMachine: **Sキャッツ・アイ — No.1501**
- schema: **resetBehavior v0.7**
- status: **2022-06-06_GROUP_OPEN_2_OF_3_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、既存末尾No.1500 `パチスロ ピンクパンサーSP` を確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種 No.1501 `Sキャッツ・アイ`（2022-06-06）を性能コア＋resetBehavior v0.7で追加。
- 6.5号機 / A+AT / 技術介入。正式型式は `SキャッツアイH6` をcanonical採用。HAZUSEで検定番号 `2S0146` を確認。
- P-BOMBのみ `SキャッツアイHG` と記載するため、型式名は `MODEL_NAME_CONFLICT / H6_CANONICAL` として両根拠を保持。
- 性能コアは設定1〜6、AT初当り1/234.1→1/163.8、通常時ボーナス1/288.8→1/246.4、AT中ボーナス全設定1/99.9、約36.8G/50枚、AT純増約0.7枚/G。
- 機械割は技術介入率差を含むレンジとして97.7〜102.4 / 98.6〜103.1 / 100.3〜104.8 / 101.0〜105.4 / 102.5〜106.6 / 104.3〜108.5%。P-WORLDの102.4〜108.5%は完全攻略側として分離し、単純な数値CONFLICTにはしていない。
- ボーナス平均獲得はHYPER BIG約125枚、BIG約104枚、CAT'S BONUS約72枚。
- 通常天井は999GでAT。天井到達時キャッツ・チャレンジは配当テーブル4以上・30G以上上乗せ保証とする解析あり。
- resetBehaviorは設定変更で有利区間・天井・内部モード・内部状態RESET、据え置き/純電源OFF→ONでCARRY_OVERを複数解析で照合。
- 朝一通常状態は設定変更/据え置きとも瞳ステージ。前日キャッツ目成立後状態を据え置き/純電断で跨ぐと泪ステージ開始となり、据え置き濃厚材料。
- 6.5号機のため有利区間ランプ非搭載。ランプ判別不可。AT終了時は毎回有利区間RESET。
- リセット後の固定恩恵・短縮天井はNONE_CONFIRMED。スロパチクエストはリセット恩恵「なし」と明記。
- 設定変更専用モード振り分け、朝一専用AT/CZ率、本機固有ガックン条件/発生率は再探索後も固定できず `NONE_PUBLISHED_CONFIRMED / UNVERIFIED_AFTER_RESEARCH`。

## No.1501 — Sキャッツ・アイ
- path: `docs/real_machine_db/machines/2022-06-06_s-cats-eye.md`
- manufacturer: **平和**
- formalModel: **SキャッツアイH6**
- inspectionCode: **2S0146**
- releaseDate: **2022-06-06**
- generation/system: **6.5号機 / A+AT / 技術介入**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- AT初当り: **1/234.1 / 1/225.3 / 1/205.1 / 1/198.0 / 1/182.6 / 1/163.8**
- 通常時ボーナス: **1/288.8 / 1/283.3 / 1/273.4 / 1/269.7 / 1/262.0 / 1/246.4**
- AT中ボーナス: **全設定1/99.9**
- payoutRate(range by technique): **97.7〜102.4 / 98.6〜103.1 / 100.3〜104.8 / 101.0〜105.4 / 102.5〜106.6 / 104.3〜108.5%**
- baseGamesPer50: **約36.8G/50枚**
- netIncrease: **AT約0.7枚/G**
- normalCeiling: **999G → AT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**
- confidence: **HIGH_CORE / HIGH_RESET / MEDIUM_HIGH_INSPECTION_CODE**

### resetBehavior v0.7 — No.1501
- **設定変更**: 有利区間・天井・内部モード・内部状態RESET。通常/キャッツ目成立後いずれも朝一瞳ステージ。
- **据え置き**: 有利区間・天井・内部モード・内部状態CARRY_OVER。前日キャッツ目成立後なら朝一泪ステージで据え置き濃厚。
- **純電源OFF→ON**: 据え置き同様CARRY_OVER。キャッツ目成立後閉店なら泪ステージ開始。
- **ゲーム数/天井**: 通常999G。設定変更でRESET、据え置き/電断で引継ぎ。
- **天井短縮**: NONE_CONFIRMED。
- **モード/状態**: 設定変更RESET、据え置き/電断CARRY_OVER。設定変更専用振り分け値はNONE_PUBLISHED_CONFIRMED。
- **有利区間**: 設定変更RESET、据え置き/電断CARRY_OVER。AT終了時は毎回RESET。有利区間ランプ非搭載。
- **朝一恩恵/不利**: 固定恩恵・固定不利ともNONE_CONFIRMED。
- **変更判別**: 朝一泪ステージは据え置き濃厚材料。瞳ステージ単独では判別不可。ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 設定変更専用の比較可能値はNONE_CONFIRMED。

## 2022-06-06群 — OPEN
横断監査で現時点確認している既知3機種:
1. `パチスロ ピンクパンサーSP` — **No.1500 処理済み**
2. `Sキャッツ・アイ` — **No.1501 処理済み**
3. `シリウス`（ヤーマ） — **次回No.1502候補**

- 次回はNo.1502候補 `シリウス`（ヤーマ）を性能コア＋resetBehavior v0.7で処理。
- その後、PB・別型式・30Φ派生・地域先行・延期/段階導入まで2022-06-06群を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）。
- 性能側 `coreStatus: COMPLETE_CORE` は維持。
- reset側は **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）**。今回カーソルは変更していない。

## 次回本線の再開地点
- **No.1502候補 `シリウス`（ヤーマ）— 2022-06-06。**
- 処理後に2022-06-06群を横断再監査してCLOSED可否を判定。

## GitHub保存
- No.1501追加 commit: `99fed48e01e6ca37c8e2b370165ddb410ba5499f`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1501 Sキャッツ・アイ
- https://news.p-world.co.jp/articles/20177/yugitsushin
- https://news.p-world.co.jp/articles/20702/nippon
- https://news.p-world.co.jp/articles/20134/nippon
- https://hazuse.com/ko/machine/pachislot/2S0146/
- https://www.p-world.co.jp/machine/database/9628
- https://chonborista.com/slot/orinpia-slot/166635/
- https://nana-press.com/kaiseki/machine/368/9952/
- https://nana-press.com/kaiseki/machine/368/9953/
- https://nana-press.com/kaiseki/machine/368/9677/
- https://www.slopachi-quest.com/article/s-catseye-tenjou/
- https://p-bomb.co.jp/industry/new-machine/3967/
