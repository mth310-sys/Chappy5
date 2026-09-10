更新日: 2026-09-10

## 現在地点
- recordCount: **1217**
- latestRecordAdded: **ハイカ101**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-08-06_haika-101.md`
- chronologicalFrontier: **2018-08-06**
- frontierLatestMachine: **ハイカ101 — No.1217**
- schema: **resetBehavior v0.7**
- status: **2018-08-06_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1216を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 1216件 / 2018-07-30群CLOSEDを確認し、2018-07-31〜08-05境界から8/6群へ進行。
- 8/6候補群の先頭「ハイカ101」を既存重複なし確認後、No.1217として登録。
- 山佐公式は5号機A+RT・2018年8月稼働、BIG後101G RT・約0.6枚/G、BIG最大239枚、REG最大49枚を掲載。
- ちょんぼりすた/すろぱちくえすと/当時解析で2018-08-06導入を照合。型式`ワンダーハイカ/CC`は当時解析および検定通過整理資料で確認。
- 設定は1/4/6。通常機械割97.7/98.7/99.7%、完全攻略101.0/102.0/103.0%。BIG/REGはいずれも全設定1/280、合算1/140。
- 50枚ベースはパチマガスロマガ独自調査の約31.1〜32.5G/50枚をレンジ保存。
- 通常ゲーム数天井は非搭載。
- resetBehaviorは設定変更/据え置き/純電源OFF→ON時の101G RT残G・成立済みボーナス状態を直接固定できる機種固有資料なし。一般論から補完せずUNVERIFIED系で分離。
- 朝一恩恵について二次資料は「存在しない可能性が高い」と推測表現のため確定契約へ昇格せず、公開朝一数値も未確認。
- 5.9号機期だが本機固有の有利区間契約を直接固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 後年5号機まとめサイトに2018年12月/BIG101枚/REG41枚という公式・当時資料と不整合な記載があるため、canonicalへ採用せず競合注記として保存。

## No.1217 — ハイカ101
- manufacturer: **山佐**
- releaseDateCanonical: **2018-08-06**
- formalModelName: **ワンダーハイカ/CC**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.9号機期 / A+RT・完全告知・技術介入**
- settings: **1 / 4 / 6**
- payout normal: **97.7 / 98.7 / 99.7%**
- payout full攻略: **101.0 / 102.0 / 103.0%**
- BIG: **全設定1/280**
- REG: **全設定1/280**
- base: **約31.1〜32.5G/50枚**
- RT: **BIG後101G / 約0.6枚/G / 引き戻し約52%**
- basic payout: **BIG最大239枚 / REG最大49枚**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: 通常ゲーム数天井なし。RT101Gは通常天井と分離。
- mode: 朝一専用/ゲーム数解除モード`NONE_CONFIRMED_AFTER_RESEARCH`。
- state: RT残G処理`UNVERIFIED_AFTER_RESEARCH`。
- advantageousSection: `UNVERIFIED_AFTER_RESEARCH`。5.9号機一般論で埋めない。
- resetBenefits/penalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 本機固有ガックン/表示判別`UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: `PUBLIC_VALUES_NOT_FOUND_AFTER_RESEARCH`。

## 2018-08-06群監査
### 登録済み
- No.1217 ハイカ101 — 2018-08-06。

### 未処理候補
- 花人
- クレアの秘宝伝3
- クロノス 刻の支配者
- ウィザードバリスターズ 弁護士セシル
- TOWSER(トウサー)

### 群判定
- `2018-08-06_GROUP_OPEN`
- すろぱちくえすとの2018導入一覧で上記6機種を8/6群として確認。ハイカ101のみ今回処理済み。
- 全メーカー/別スペック/PB/地域差監査は未完了のためCLOSEDにしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_rumble-roses.md**（ランブルローズ）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。既存`coreStatus: PARTIAL`は維持し、reset側のみ別管理。
- 2026-09-10再探索でも初代固有の設定変更/据え置き/純電断時チャレンジタイム処理、変更判別、公開朝一数値は固定できず。後継XX/3Dは流用禁止。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08-28_taiho-shichauzo.md`（逮捕しちゃうぞ）。
- cursorEvidence: Git履歴でRumble Roses追加commit `960c357b...`の直後の実機追加がTaiho Shichauzo commit `02d4c4da...`であることを確認。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を確定契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1217を再取得。
2. **1217件 / chronologicalFrontier 2018-08-06 / 8/6群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **花人**をNo.1218候補として既存重複・型式・導入日を照合し、性能コア+resetBehavior v0.7を収集。
4. 続いてクレアの秘宝伝3 / クロノス 刻の支配者 / ウィザードバリスターズ 弁護士セシル / TOWSER(トウサー)を順次監査。
5. 8/6群を全メーカー/別スペック/PB/地域差で横断監査してCLOSE可否を判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-08-28_taiho-shichauzo.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1217 ハイカ101
- 山佐公式: https://yamasa-next.co.jp/model_wh/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/62484/
- すろぱちくえすと: https://www.slopachi-quest.com/article/haika101/
- 2018導入一覧: https://www.slopachi-quest.com/article/sindai-2018/
- パチマガスロマガ小役/50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/227/c.php
- P-WORLD: https://www.p-world.co.jp/machine/database/8723
- すろかい: https://slotkaiseki.hatenablog.com/entry/haika101
- 山佐検定通過整理: https://q-and-a.hatenablog.com/entry/%E5%B1%B1%E4%BD%90%E3%81%AE%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E

### Retro QA ランブルローズ
- コナミ公式アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2006/rumble/
- パチ7 5号機ボーナス構造回顧: https://pachiseven.jp/articles/detail/7071
- グリーンべると初代回顧: https://web-greenbelt.jp/00003794/
