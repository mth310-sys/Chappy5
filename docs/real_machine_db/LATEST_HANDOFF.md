更新日: 2026-09-10

## 現在地点
- recordCount: **1201**
- latestRecordAdded: **大神～回胴編～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-06-18_okami-kaidohen.md`
- chronologicalFrontier: **2018-06-18**
- frontierLatestMachine: **大神～回胴編～ — No.1201**
- schema: **resetBehavior v0.7**
- status: **2018-06-18_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1200を再取得して開始。
- `INDEX.md`は旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 2018-06-05～06-17の境界監査後、2018-06-18群へ進行。
- No.1201 `大神～回胴編～` は並行リレーが先にmainへ登録したため重複作成せず、その実レコードを再取得して内容を確認。
- リレー5では `電撃フランケン` のresetBehavior遡及QAを実施し、未確認契約を再探索後の状態へ正規化。

## No.1201 — 大神～回胴編～
- path: `docs/real_machine_db/machines/2018-06-18_okami-kaidohen.md`
- manufacturer: **エンターライズ**
- releaseDateCanonical: **2018-06-18**
- formalModelName: `大神／ZS`
- certificationNumber: `7S1270`
- generation/system: **5.9号機 / A+ART / CZ経由ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.7 / 99.0 / 100.5 / 104.9 / 107.4 / 113.6%**
- BIG: **1/352.3 / 1/341.3 / 1/327.7～327.8 / 1/297.9 / 1/283.7 / 1/254.0**
- REG/幸BONUS: **1/364.1 / 1/352.3 / 1/337.8 / 1/306.2 / 1/283.7 / 1/254.0**
- bonus combined: **1/179.1 / 1/173.4 / 1/166.3 / 1/151.0 / 1/141.9 / 1/127.0**
- ART first hit: **1/371.3 / 1/364.0 / 1/353.1 / 1/329.3 / 1/314.6 / 1/288.7**
- base: **約31G/50枚**
- ART: **約1.0枚/G、1セット平均約50G**
- basic payout: **BIG約200枚 / REG約60枚**
- normal ceiling: **非搭載**
- CZ interval ceiling: **CZ間500Gで筆神モード**

### resetBehavior v0.7
- settingChange: CZ間天井G数は引継ぎ。有利区間ランプ消灯。通常/高確/超高確の具体的振り分けは資料表現が競合/不確定のため `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置き時は当時解析で天井・内部状態・RT状態引継ぎ。
- powerOFF→ON: CZ間天井G数・内部状態・有利区間ランプを引継ぎ。筆神モード、ボーナス・ART引継ぎの解析記述も保持。
- resetDetection: 朝一有利区間ランプ点灯は据え置き濃厚（対策時除く）。ガックンは確定判別契約へ昇格しない。
- numericResetData: CZ間500Gカウンタは設定変更/据え置き/純電断で引継ぎ。設定変更専用短縮天井なし。
- conflict: 一部の「リセット後CZスタート」一般説は朝一実戦値と整合せず、通常の設定変更恩恵としてはcanonical不採用。

## 遡及 resetBehavior QA — 電撃フランケン
- qaPath: `docs/real_machine_db/machines/2006-07-24_dengeki-franken.md`
- performance core: **既存値を維持**。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- settingChange / carryOver / pure power cycleのGHOST GAME残G・内部RT状態は、公式・当時解析・旧DB・後年回顧を検索語変更して再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- pure powerOFF→ONは据え置きから推定せず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 通常ゲーム数天井/短縮天井: `NOT_APPLICABLE`。
- advantageousSection: `NOT_APPLICABLE`（2006年5号機初期）。
- 朝一専用モード/恩恵/不利/公開数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 変更判別（ガックン/出目/液晶）: `UNVERIFIED_AFTER_RESEARCH`。
- QA更新commit: `d9fe2956e2a2a2971071b078bd5ce436e0bbbab2`。

## 2018-06-18群監査
### 登録済み
- No.1201 大神～回胴編～

### 次候補
- **十字架4** — NET / A+ART
- **沖ドキ！バケーション** — アクロス / ノーマル / 25φ
- **沖ドキ！バケーション-30** — 30φ。25φとの型式差を確認して独立判定する。

### 群判定
- `2018-06-18_GROUP_OPEN`
- 同日候補が残っているためCLOSEしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07-24_dengeki-franken.md**（電撃フランケン）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_jarinko-chie.md`（じゃりン子チエ）。
- next cursor根拠: 電撃フランケン追加commit `959ef416...` 後、2006-07進捗commitを挟み、次の実機追加commit `57dbe381...` がじゃりン子チエ。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率・型式等の競合は平均/統合せず`CONFLICT`として保持する。
- 同日群の全メーカー/別スペック監査後にのみ群をCLOSEする。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1201を再取得。
2. **1201件 / chronologicalFrontier 2018-06-18 / 6/18群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **十字架4をNo.1202先頭候補**としてperformance core + resetBehavior v0.7を収集。
4. 続いて `沖ドキ！バケーション / 沖ドキ！バケーション-30` の型式差・別スペックを監査。
5. 遡及QAは `docs/real_machine_db/machines/2006-08_jarinko-chie.md`（じゃりン子チエ）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1201 大神～回胴編～
- HAZUSE: https://hazuse.com/machine/pachislot/7S1270/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/58561/
- 期待値見える化: https://slotjin.com/tenjou/okami/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/17/a.php
- パチスロデータ: https://pachislo-data.com/enterrise/74046

### 電撃フランケンQA
- ユニバーサル公式: https://www.universal-777.com/product/slot/dengeki_franken/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/63/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4267
