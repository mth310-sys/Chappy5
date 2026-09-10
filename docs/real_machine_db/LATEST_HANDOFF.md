更新日: 2026-09-10

## 現在地点
- recordCount: **1202**
- latestRecordAdded: **十字架4**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-06-18_jujika4.md`
- chronologicalFrontier: **2018-06-18**
- frontierLatestMachine: **十字架4 — No.1202**
- schema: **resetBehavior v0.7**
- status: **2018-06-18_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1201を再取得して開始。
- `INDEX.md`は旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 1201件 / 2018-06-18群OPENから継続し、既存検索で`十字架4`未登録を確認。
- No.1202 `十字架4`をperformance core + resetBehavior v0.7で新規登録。
- 既存性能値の再収集は行わず、同日群の次候補へカーソルを進めた。

## No.1202 — 十字架4
- path: `docs/real_machine_db/machines/2018-06-18_jujika4.md`
- manufacturer: **ネット（NET）**
- releaseDateCanonical: **2018-06-18**
- formalModelName: `十字架4／NA`
- certificationNumber: `7S1509`
- generation/system: **5.9号機 / A+ART / CZ経由ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.5 / 98.9 / 100.4 / 103.1 / 106.1 / 110.1%**
- BIG: **1/601 / 1/550 / 1/500 / 1/436 / 1/394 / 1/360**
- 十字架合算: **約1/139（全設定共通）**
- ART first hit: **1/394 / 1/389 / 1/383 / 1/373 / 1/367 / 1/359**
- base: **約36.3G/50枚（設定1目安）**
- ART: **約1.2枚/G、初期50G以上+α**
- basic payout: **BIG約200枚**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **内部状態RESET / 朝一教会 / 有利区間ランプ消灯**。
- carryOver: 前日有利区間ランプ点灯→翌朝も点灯なら据え置き濃厚（対策時除く）。据え置きを純電断から独立させた低レベル内部状態の完全契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: **内部状態CARRYOVER / 有利区間ランプCARRYOVER**。基本ステージは教会だが、ディーキャッスル滞在時はステージも引継ぎ。
- gameCounter/ceiling: 通常ゲーム数天井非搭載のため `NOT_APPLICABLE`。設定変更専用短縮天井なし。
- mode/state: 朝一専用モード・設定変更専用モード振り分け・朝一当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: 設定変更でRESET/ランプ消灯、純電断でCARRYOVER。
- resetDetection: 有利区間ランプが主要判別材料。ガックンの確定条件/発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: ランプOFF/CARRYOVER、内部状態RESET/CARRYOVERを直接比較資料から固定。

## 2018-06-18群監査
### 登録済み
- No.1201 大神～回胴編～
- No.1202 十字架4

### 次候補
- **沖ドキ！バケーション** — アクロス / ノーマル / 25φ候補。
- **沖ドキ！バケーション-30** — 30φ候補。25φとの型式・検定番号・導入日の差を確認して独立レコード判定する。

### 群判定
- `2018-06-18_GROUP_OPEN`
- 沖ドキ！バケーション系の別スペック監査が残っているためCLOSEしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07-24_dengeki-franken.md**（電撃フランケン）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_jarinko-chie.md`（じゃりン子チエ）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率・型式等の競合は平均/統合せず`CONFLICT`として保持する。
- 同日群の全メーカー/別スペック監査後にのみ群をCLOSEする。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1202を再取得。
2. **1202件 / chronologicalFrontier 2018-06-18 / 6/18群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **沖ドキ！バケーション / 沖ドキ！バケーション-30**を先頭に、25φ/30φの型式・検定番号・性能差・導入日を横断監査し、独立機種なら最古順にNo.1203以降で登録。
4. 6/18群の全メーカー・表記揺れ・別スペックを最終監査し、漏れがなければ群をCLOSEして次導入日群へ進む。
5. 遡及QAは `docs/real_machine_db/machines/2006-08_jarinko-chie.md`（じゃりン子チエ）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1202 十字架4
- NET公式: https://www.net-fun.co.jp/topics/1838
- HAZUSE DATA: https://data.hazuse.com/?machine_code=7S1509
- ちょんぼりすた: https://chonborista.com/slot/net-slot/57288/
- 期待値見える化: https://slotjin.com/slot/juujika4/
- 1撃: https://1geki.jp/slot/s_jyujika4/
- K-Navi: https://p-kn.com/slot/2994/
- P-WORLD: https://www.p-world.co.jp/machine/database/8636
