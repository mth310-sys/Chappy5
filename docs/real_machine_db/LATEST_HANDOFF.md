更新日: 2026-09-10

## 現在地点
- recordCount: **1243**
- latestRecordAdded: **戦コレ！［泰平女君］徳川家康**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-11-19_sencolle-taihei-jokun-tokugawa-ieyasu.md`
- chronologicalFrontier: **2018-11-19**
- frontierLatestMachine: **戦コレ！［泰平女君］徳川家康 — No.1243**
- schema: **resetBehavior v0.7**
- status: **2018-11-19_GROUP_OPEN_1_OF_AT_LEAST_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1242を取得して開始。
- `INDEX.md`は旧スナップショットのため、README指示どおり `LATEST_HANDOFF.md` + main実レコードを現行正本として継続。
- 開始時正本は1242件 / 2018-11-05 / `2018-11-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。
- 11/6〜11/18境界は前handoff監査結果を維持し、次の明確な導入群2018-11-19へ進行。
- handoff指定の次機種 `戦コレ！［泰平女君］徳川家康` をNo.1243として登録。
- 2018-11-19群は少なくとも `戦コレ！［泰平女君］徳川家康 / バイオハザード イントゥザパニック / ダンまち` の3機。1/3処理済みのためOPEN継続。

## No.1243 — 戦コレ！［泰平女君］徳川家康
- manufacturer: **コナミアミューズメント**
- releaseDateCanonical: **2018-11-19**
- formalModelName: **S戦コレ！徳川家康KE**
- certificationNumber: **8S0549**
- generation/system: **6号機 / AT / CZ / 擬似ボーナス / 周期管理**
- payoutRate: **97.5 / 98.4 / 100.1 / 102.4 / 105.4 / 112.0%**
- AT初当たり: **1/309.3 / 1/299.4 / 1/283.4 / 1/264.5 / 1/248.1 / 1/218.2**
- baseGamesPer50: **約48.9G**
- netIncrease: **約3.5枚/G**
- AT基本: **1セット30G**
- ceiling: **最大16周期 / 1周期平均約47G / 平均約752G相当**

### resetBehavior v0.7
- settingChange: **CONFIRMED**。周期天井進捗リセット、内部状態リセット、非有利区間開始。液晶初期ステージはUNVERIFIED。
- carryOver: **PARTIAL_CONFIRMED**。据え置き時は季節・回転数がそのままとの実戦報告あり。ただしコメント由来で、純電断から独立した全内部状態契約はUNVERIFIED。
- powerOFF→ON: **CONFIRMED**。周期天井進捗・内部状態を引き継ぐ。液晶ステージはUNVERIFIED。
- ceilingAfterReset: **通常と同じ最大16周期**。リセット専用短縮なし確認。
- advantageousSection: **設定変更時は非有利区間開始**を機種固有解析で確認。純電断時の区間ランプ契約はUNVERIFIED。
- resetBenefits: **朝一リセット時の明確な恩恵は実践上見られなかった**との解析あり。専用短縮天井や初当たり優遇はNONE_CONFIRMED_AFTER_RESEARCH。
- resetDetection: **PARTIAL_CONFIRMED**。据え置き時の季節・回転数表示が判別材料になり得る。本機固有ガックン率・確定条件はUNVERIFIED_AFTER_RESEARCH。
- numericResetData: normal/reset ceiling **16周期**、setting change progress **RESET**、power cycle progress **CARRYOVER**。

### conflict
- AT純増はメーカー説明会・HAZUSE・パチマガスロマガ・ちょんぼりすた等で **約3.5枚/G**が一致する一方、みんスロに**約3.8枚/G**表記あり。平均せず `CONFLICT_NET_INCREASE_3_5_VS_3_8_SINGLE_SECONDARY` として保持し、canonicalは多数高信頼資料の3.5枚/G。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-11_garou-densetsu.md`**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-11_jack-to-mamenoki.md`（ジャックと豆の木）**。
- 既存性能値をやり直さず、resetBehavior欠損のみ順次QAする。

## 2018-11-19群
### 登録済み
- No.1243 戦コレ！［泰平女君］徳川家康

### 未処理候補
1. **バイオハザード イントゥザパニック — No.1244候補**
2. **ダンまち**

### 判定
- **2018-11-19_GROUP_OPEN_1_OF_AT_LEAST_3_PROCESSED**。
- 同日全メーカー/別スペック/PB/地域差監査が完了するまでCLOSEしない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1243を再取得。
2. **1243件 / chronologicalFrontier 2018-11-19 / `2018-11-19_GROUP_OPEN_1_OF_AT_LEAST_3_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理機種 **バイオハザード イントゥザパニック** をNo.1244候補として調査・登録。
4. 続いて **ダンまち**。その後11/19同日全メーカー/別スペック/PB/地域差監査を行いCLOSE判定。
5. 遡及QAは **`docs/real_machine_db/machines/2006-11_jack-to-mamenoki.md`（ジャックと豆の木）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1243 戦コレ！［泰平女君］徳川家康
- コナミ公式: https://www.konami.com/amusement/psm/archive/ps/2018/sencolletokugawa/
- HAZUSE: https://hazuse.com/machine/pachislot/8S0549/
- K-Navi: https://p-kn.com/slot/3108/
- パチビー商品説明会: https://www.pachibee.jp/pparticles/view/1097
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/66286/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_sen_tokugawa/3/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/04/l.php
- PiDEA X: https://www.pidea.jp/articles/%E5%A4%A7%E6%89%8B%E6%B3%95%E4%BA%BA%E6%A9%9F%E6%A2%B0%E5%AF%BE%E7%AD%96%E8%AA%B2SH%40CK%E3%81%AE%E6%96%B0%E5%8F%B0%E8%AC%9B%E5%BA%A7%E3%80%8CS%E6%88%A6%E3%82%B3%E3%83%AC%E3%80%8D
- 2-9伝説: https://2-9densetsu.com/sencolletokugawa/
- みんスロ: https://minslo.com/%E6%88%A6%E3%82%B3%E3%83%AC%E6%B3%B0%E5%B9%B3%E5%A5%B3%E5%90%9B%E5%BE%B3%E5%B7%9D%E5%AE%B6%E5%BA%B7/
