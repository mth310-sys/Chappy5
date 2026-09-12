更新日: 2026-09-13

## 現在地点
- recordCount: **1515**
- latestRecordAdded: **スーパーリオエース — No.1515**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-09-05_super-rio-ace.md`
- chronologicalFrontier: **2022-09-05**
- frontierLatestMachine: **スーパーリオエース — No.1515**
- schema: **resetBehavior v0.7**
- status: **2022-09-05_GROUP_OPEN_1_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1514 `パチスロ閃乱カグラ BURST UP` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種No.1515 `スーパーリオエース` を性能コア＋resetBehavior v0.7で追加。
- HAZUSE、娯楽産業、遊技通信、P-WORLD、必勝本、なな徹、当時解析を横断し、2022-09-05導入、型式 `SパチスロスーパーリオエースCC`、検定番号 `2S0382`、6.5号機AT、設定別出玉率/初当り、35.6G/50枚、純増約1.5/2.3枚/Gを照合した。
- resetBehaviorは設定変更/据え置きの有利区間・天井・内部状態・モード比較表を取得。設定変更後は通常時1周期目がACEモードとなり、CZ突入率/成功率が優遇、ACEモード中の解析上機械割は約102%。
- 純電源OFF→ONのみは天井CARRY_OVERを機種別解析で直接確認。通常モード・内部状態・有利区間は直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH` とし、据え置きから推測転記しなかった。
- 有利区間ランプ非搭載で朝一外観による変更判別は不可。本機固有ガックンも再探索後 `NONE_CONFIRMED_AFTER_RESEARCH`。

## No.1515 — スーパーリオエース
- path: `docs/real_machine_db/machines/2022-09-05_super-rio-ace.md`
- manufacturer: **山佐製造 / 山佐ネクスト販売**
- formalModel: **SパチスロスーパーリオエースCC**
- inspectionCode: **2S0382**
- releaseDate: **2022-09-05**
- generation/system: **6.5号機 / 擬似ボーナス + ゲーム数上乗せ型AT**
- payoutRate: **設定1 98.5 / 2 99.0 / 3 100.4 / 4 105.0 / 5 108.6 / 6 110.8%**
- ボーナス初当り: **1/247.2 / 1/245.7 / 1/244.7 / 1/237.5 / 1/233.1 / 1/230.5**
- AT初当り: **1/605.2 / 1/593.5 / 1/566.8 / 1/506.0 / 1/462.4 / 1/438.8**
- baseGamesPer50: **約35.6G/50枚（36G丸め表記あり）**
- netIncrease: **リオタイム/リオチャンス約1.5枚/G、リオラッシュ約2.3枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_PARTIAL_POWER_CYCLE**
- confidence: **INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET / ANALYSIS_SINGLE_POWER_CYCLE_CEILING_ONLY**

### resetBehavior v0.7 — No.1515
- **設定変更**: 有利区間・天井・内部状態・通常モードRESET。通常時1周期目はACEモード。
- **据え置き**: 有利区間・天井・内部状態・通常モードCARRY_OVER。
- **純電源OFF→ON**: 天井CARRY_OVERを直接確認。通常モード・内部状態・有利区間は `UNVERIFIED_AFTER_RESEARCH`。
- **天井**: A/B/C 597G+α、短縮450G+α、天国100G+α。設定変更だけの固定天井短縮は確認せず、モード再抽選と分離。
- **モード**: 有利区間移行時、弱チェリー/スイカ/チャンスリプレイならB以上濃厚、強チェリー/チャンス目なら短縮or天国濃厚。
- **ACEモード**: 設定変更後・ボーナス後・AT終了後の通常時1周期目。CZ突入率/成功率優遇、解析上機械割約102%。
- **有利区間**: 設定変更RESET、据え置きCARRY_OVER。有利区間ランプ非搭載。
- **変更判別**: 朝一外観では不可。本機固有ガックンは `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 2022-09-05群 — OPEN 1/6 known
1. `スーパーリオエース` — **No.1515 処理済み**
2. `ヴィーナスゾーン` — **No.1516候補 / 未処理**
3. `パチスロペルソナ5` — 未処理
4. `ボンバーガール` — 未処理
5. `Sアバサー` — 未処理
6. `CREA～Newクレアの秘宝伝～` — 未処理

群監査メモ:
- 前handoffのGreenbelt/P-WORLD 2022-09-05群6機knownを継承。
- 次回開始時にPB・別型式・地域先行・延期/段階導入を再監査し、追加候補があれば6機固定とせず増補する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- `ニューハナハナ-30`: mainで既に `COMPLETE_WITH_SOURCE_LIMITS` のため重複処理しない。
- `パチスロあっぱれ応援団`: 再QA済み。coreStatus `COMPLETE_CORE`維持、resetBehaviorQA `PARTIAL_RESEARCH_EXHAUSTED`。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_gaogao-festival-s.md`（ガオガオフェスティバルS）**。

## 次回本線の再開地点
- **No.1516候補 `ヴィーナスゾーン` — 2022-09-05**。
- 既存No.1515の性能コアはやり直さず、No.1516から性能コア＋resetBehavior v0.7を収集する。
- 2022-09-05群を順番に処理し、全known完了後にPB・派生・地域先行・延期を横断してCLOSED可否を判定する。

## GitHub保存
- No.1515追加 commit: `5e6d770a85727c1c03987803871cd1d847f44b5f`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1515 スーパーリオエース
- https://hazuse.com/machine/pachislot/2S0382/
- https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%83%8D%E3%82%AF%E3%82%B9%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AA%E3%82%AA%E3%82%A8%E3%83%BC%E3%82%B9%E3%80%8D%E7%99%BA/
- https://www.yugitsushin.jp/news/rio%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E5%85%A8%E9%96%8B%E3%81%AE%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E6%9C%80%E6%96%B0%E4%BD%9C-%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AA%E3%82%AA/
- https://p.hisshobon.jp/machine/3950/1/89764
- https://p.hisshobon.jp/machine/3950/1/90691
- https://www.p-world.co.jp/machine/database/9680
- https://nana-press.com/kaiseki/machine/416/11172/
- https://nana-press.com/kaiseki/machine/416/11714/
- https://ichikatsu.com/superrioace/
- https://chonborista.com/slot/yamasa-slot/171029/

### 次群 2022-09-05
- https://news.p-world.co.jp/articles/21494/greenbelt
