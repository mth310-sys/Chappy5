更新日: 2026-09-12

## 現在地点
- recordCount: **1399**
- latestRecordAdded: **ワンチャンス1000 — No.1399**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-03-08_one-chance-1000.md`
- chronologicalFrontier: **2021-03-08**
- frontierLatestMachine: **ワンチャンス1000 — No.1399**
- schema: **resetBehavior v0.7**
- status: **2021-03-08_GROUP_OPEN_5_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再取得して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 開始時点でNo.1397「パチスロラブ嬢2プラス」までだったが、並行更新でNo.1398「パチスロ アイドルマスター ミリオンライブ！」がmainへ追加されたため重複作成せず正本として引き継いだ。
- No.1398は2021年機と2025年スマスロ版が検索上混在しやすいため、型式 `SアイドルマスターG` / 導入2021-03-08で識別されていることを再確認。
- 固定キュー次機種の **No.1399「ワンチャンス1000」** を追加。性能コア + resetBehavior v0.7を収集。
- 遡及resetBehavior QAは前回処理済みのSASHIBAを維持し、今回は本線を優先してカーソルを動かしていない。

## No.1398 — パチスロ アイドルマスター ミリオンライブ！
- path: `docs/real_machine_db/machines/2021-03-08_idolmaster-million-live.md`
- manufacturer: **ビスティ**
- formalModel: **SアイドルマスターG**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-03-08**
- generation/system: **6.1号機 / AT / CZ / 擬似ボーナス / 純増可変型AT**
- payoutRateBySetting: **97.5 / 96.0 / 99.7 / 102.7 / 105.5 / 108.4%**
- AT初当たり: **1/310.0 / 211.6 / 281.2 / 244.3 / 221.1 / 196.6**
- baseGamesPer50: **約38.8G**
- netIncrease: **AT約0.3枚/G / BOOST約4.3枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_MODE_TABLE_AND_CEILING_SCOPE_NOTES**
- 設定変更時はログインステージ準備中（非有利区間）から開始。純電源OFF→ONは有利区間中なら全状態CARRY_OVER、非有利区間中なら設定変更時同様。
- 有利区間移行時モード表は設定別公開値を保存済み。2025年スマスロ版のリセット500G・チャンス75.8%/天国24.2%は別機種として除外。

## No.1399 — ワンチャンス1000
- path: `docs/real_machine_db/machines/2021-03-08_one-chance-1000.md`
- manufacturer: **ベルコ**
- formalModel: **Sワンチャンス1K1**
- certificationNumber: **0S1220**
- releaseDate: **2021-03-08**
- generation/system: **6号機 / AT / 周期抽選 / CZ / 差枚数管理型擬似ボーナス**
- payoutRateBySetting: **97.5 / 99.0 / 100.0 / 101.5 / 103.0 / 105.5%**
- AT初当たり: **1/410.1 / 394.0 / 379.5 / 359.8 / 341.7 / 319.7**
- baseGamesPer50: **約51.2G**
- netIncrease: **約5.0枚/G**
- basicPayout: **BAR約100枚以上 / 赤7約250枚以上 / 青7約500枚以上**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH_WITH_NO_CEILING**

### resetBehavior v0.7 — No.1399
- ベルコ公式・PiDEA・グリーンべると・P-WORLD・1gekiで **AT確定天井非搭載 / 無抽選区間なし** を確認。したがって天井短縮は `NOT_APPLICABLE`。
- 通常時は平均約68G、最大111Gの周期到達でCZへ。CZは最大33G、AT期待度約30%。これは通常仕様でありリセット専用数値ではない。
- 単一攻略資料には「設定変更時 天井リセット / 電源ON-OFF 天井引き継ぐ」とあるが、本機は公式に天井非搭載のため、存在しないAT確定天井G数へ拡張しない。資料表現の定義差として保持。
- 設定変更/据え置き/純電断時の周期途中G数、内部状態、有利区間の個別RESET/CARRY_OVER契約は、機種名・型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/周期/ガックン/有利区間を変えて再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス後に有利区間ランプ消灯を確認してヤメる立ち回り資料は存在するが、朝一ランプ点灯/消灯を設定変更・据え置きへ直接結びつける本機固有契約は固定できず。
- 設定変更専用のモード/周期振り分け、朝一特定G以内AT当選率、定量リセット恩恵、固有ガックン条件/発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH` / `UNVERIFIED_AFTER_RESEARCH`。

## 2021-03-08群 — OPEN
固定キュー:
1. **パチスロ北斗の拳 宿命 — No.1395 / DONE**
2. **パチスロ青の祓魔師 — No.1396 / DONE**
3. **パチスロラブ嬢2プラス — No.1397 / DONE**
4. **パチスロ アイドルマスター ミリオンライブ！ — No.1398 / DONE**
5. **ワンチャンス1000 — No.1399 / DONE**
6. **ミスタートリプルクラウン（SトリプルクラウンDX-30 / 沖縄地域流通） — NEXT / No.1400候補**

- status: **2021-03-08_GROUP_OPEN_5_OF_6_KNOWN_PROCESSED**。
- No.1400候補処理後、全メーカー・別型式・PB・地域差・延期/段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、同じ2021-03-08群の **No.1400候補「ミスタートリプルクラウン（SトリプルクラウンDX-30）」** から継続。
- 沖縄地域流通・導入日の地域差を確認し、性能コア + resetBehavior v0.7を同時収集する。
- その後2021-03-08群を横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）。
- SASHIBAは性能側 `coreStatus: PARTIAL` を維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ正式化済み。
- 今回は本線を優先したためカーソル未移動。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）**。

## GitHub保存
- SASHIBA reset QA commit: `5ed1154c4ef1a41886fbc609e8be61436d076446`
- No.1398 mode-table correction commit: `501b4374dec79d039a47a87ff4db0b3856a9f7c0`
- No.1399追加 commit: `d8e1070b33744dc397d5abee9e9e4f0e08ade82d`

## 主要出典 — 取得日 2026-09-12
### No.1398 パチスロ アイドルマスター ミリオンライブ！
- https://www.sankyo-fever.jp/collection/916/
- https://hisshobon.news/uncategorized/413/
- https://nana-press.com/kaiseki/machine/114/3089/
- https://nana-press.com/kaiseki/machine/114/3220/
- https://nana-press.com/kaiseki/machine/114/3221/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/39/tj07.php
- https://www.slopachi-quest.com/article/mirimasu-tenjou/
- https://www.p-world.co.jp/machine/database/9325
- https://chonborista.com/slot/sankyo-slot/129748/

### No.1399 ワンチャンス1000
- https://www.s-bellco.co.jp/products/slot/onechance1000/
- https://www.s-bellco.co.jp/news/20210118_01/
- https://www.pidea.jp/articles/1610675176
- https://web-greenbelt.jp/post-43489/
- https://g-net-ps.com/industry/certif2020-1218/
- https://www.slopachi-quest.com/article/s-onechance1000/
- https://1geki.jp/slot/s_onechance/
- https://www.p-world.co.jp/machine/database/9320
- https://ichikatsu.com/onechance1000/
- https://chonborista.com/slot/belko-slot/129865/

### SASHIBA / サシバE-30
- https://www.p-world.co.jp/machine/database/4742
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/05/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/05/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/05/k.php
- https://www.pachinkovista.com/pfactory/model.php?km=2&nid=016365
- https://5goki.com/trivy
- https://slothistory.com/kousin_kako04.html
- https://q-and-a.hatenablog.com/entry/2016/10/06/114509
