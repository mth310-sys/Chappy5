更新日: 2026-09-11

## 現在地点
- recordCount: **1345**
- latestRecordAdded: **スペリオーレ — No.1345**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-03-16_superiore.md`
- chronologicalFrontier: **2020-03-16**
- frontierLatestMachine: **スペリオーレ — No.1345**
- schema: **resetBehavior v0.7**
- status: **2020-03-16_GROUP_OPEN_2_OF_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1344「パチスロ〈物語〉シリーズ セカンドシーズン」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正とした。
- 開始時main最新handoffは No.1344 / 2020-03-16群OPEN_1_OF_3。
- 前リレー指定どおり、次の未処理「スペリオーレ」をNo.1345として追加。
- 2020-03-16群は **パチスロ〈物語〉シリーズ セカンドシーズン / スペリオーレ / みうのおしゃべりパチスロ** の3機を確認済み。現在2/3処理済み。

## No.1345 — スペリオーレ
- path: `docs/real_machine_db/machines/2020-03-16_superiore.md`
- manufacturer: **バルテック**
- formalModel: **SスペリオーレBB**
- certificationNumber: **9S1368**
- releaseDate canonical: **2020-03-16**
- generation/system: **6号機 / AT / 疑似ボーナス連チャン / 完全告知**
- payoutRate: **97.8 / 98.8 / 100.5 / 103.8 / 105.8 / 110.2%**
- SBB: **1/3487.3 / 2862.6 / 3282.6 / 3650.0 / 5263.2 / 4015.9**
- BIG: **1/551.6 / 575.8 / 502.2 / 438.7 / 384.7 / 342.7**
- REG: **1/613.1 / 543.7 / 557.1 / 472.6 / 404.0 / 383.0**
- bonusCombined: **1/268.0 / 254.8 / 244.4 / 214.2 / 189.9 / 173.1**
- base: **約50.0〜51.2G/50枚**（設定1約50.0G）
- netIncrease: **約5.0枚/G**
- basicPayout: **SBB約500枚 / BIG約300枚 / REG約100枚**
- ceiling: **有利区間移行後1231G、BIG以上**

### resetBehavior v0.7 — No.1345
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_GAME_RESET_AND_ADVANTAGEOUS_SECTION_START**
- **設定変更=天井RESET、非有利区間からスタート**。
- **電源OFF→ON=天井CARRY_OVER**。据え置きも同契約として整理。
- 設定変更/電断とも枠ランプ消灯・有利区間ランプ消灯。通常時は有利区間ランプ消灯タイプのためランプ判別不可。
- 有利区間移行時モード（設定1→6）:
  - 天国 **56.3 / 50.0 / 54.7 / 53.1 / 50.0 / 50.0%**
  - A **31.3 / 25.0 / 29.7 / 23.4 / 25.0 / 25.0%**
  - B **12.5 / 25.0 / 15.6 / 23.4 / 25.0 / 25.0%**
- 天国時は**1〜96G 100%**。1〜99G以内当選期待度は **60.2 / 54.4 / 59.4 / 58.4 / 56.4 / 57.2%**。
- 上記モード/99G数値は設定変更専用ではなく、ボーナス後も含む **有利区間移行時共通仕様** として分離保存。
- 設定変更専用の固定短縮天井は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時の独立した内部状態、据え置き/純電断時の現在モード・内部状態、本機固有ガックン条件/率は資料系統を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## No.1345 data-quality notes
- 50枚ベースは「約50.0G」と「約50.0〜51.2G」の掲載があるが、前者は設定1目安、後者は設定別レンジであり定義差。CONFLICTにはしない。
- coreStatus: **COMPLETE_CORE**。
- overallReliability: **ANALYSIS_HIGH_WITH_OFFICIAL_PRODUCT_EXISTENCE_CONFIRMATION**。

## 2020-03-16群監査
- 確認済み3機:
  1. パチスロ〈物語〉シリーズ セカンドシーズン — **No.1344 / 処理済み**
  2. スペリオーレ — **No.1345 / 処理済み**
  3. みうのおしゃべりパチスロ — **未処理 / No.1346候補**
- 群判定: **OPEN_2_OF_3_PROCESSED**。
- `みうのおしゃべりパチスロ` 完了後、2020-03-16同日全メーカー・別型式・PB・地域差を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回 `やったネ！はるみちゃん` は `PARTIAL_RESEARCH_EXHAUSTED` へ正式化済み。
- 今回は新規本線No.1345を優先。次回以降、最新mainから同QAキュー次候補を再計算して継続する。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1345を再取得。
2. **2020-03-16群の最後の未処理 `みうのおしゃべりパチスロ` をNo.1346候補として処理する。**
3. 3機完了後、3/16同日全メーカー・別型式・PB・地域差を再監査し、群CLOSED可否を判定する。
4. 次の導入群を時系列で特定して本線継続。
5. 遡及QAは最新mainから未formalized候補を再計算して進める。

## 主要出典 — 取得日 2026-09-11
### No.1345
- バルテック公式プレス一覧: https://www.baltec.co.jp/press/press.html
- HAZUSE: https://hazuse.com/machine/pachislot/9S1368/
- K-Navi: https://p-kn.com/slot/3424/
- なな徹 基本: https://nana-press.com/kaiseki/machine/47/
- なな徹 モード移行: https://nana-press.com/kaiseki/machine/47/829/
- なな徹 ボーナス分布: https://nana-press.com/kaiseki/machine/47/831/
- なな徹 天井: https://nana-press.com/kaiseki/machine/47/824/
- なな徹 小役: https://nana-press.com/kaiseki/machine/47/827/
- パチマガスロマガ 小役: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/61/c.php
- パチマガスロマガ ボーナス分布: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/61/03.php
- スロパチクエスト 天井/朝一: https://www.slopachi-quest.com/article/superiore-tennjou/
- おスロおパチおいでやす: https://oslo-opachi.com/2020/03/16/superiore-tennjou/
- ちょんぼりすた: https://chonborista.com/slot/baltec/105472/
- 導入直前まとめ: https://pachi-jyouhoukyoku.hatenablog.com/entry/2020/03/13/234806
