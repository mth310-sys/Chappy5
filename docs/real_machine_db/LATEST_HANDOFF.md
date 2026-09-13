更新日: 2026-09-14

## 現在地点
- recordCount: **1626**
- latestRecordAdded: **Lストライクウィッチーズ2 — No.1626**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-02-05_strike-witches-2.md`
- chronologicalFrontier: **2024-02-05**
- frontierLatestMachine: **Lストライクウィッチーズ2 — No.1626**
- schema: **resetBehavior v0.7**
- status: **2024-02-05_GROUP_OPEN_6_OF_8_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1625 `L ゴジラ対エヴァンゲリオン` を確認して開始。
- INDEXは19件表示の旧版なのでREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- 前handoff指定どおりNo.1626 `Lストライクウィッチーズ2` を性能コア + resetBehavior v0.7で追加。
- 2024-02-05群はknown 8機中6機処理済み。残り2機を同日群として継続する。

## No.1626 — Lストライクウィッチーズ2
- path: `docs/real_machine_db/machines/2024-02-05_strike-witches-2.md`
- manufacturer: **サンスリー（三洋販売）**
- formalModel: **Lストライクウィッチーズ2TF**
- inspectionCode: **3S1134**
- releaseDate: **2024-02-05**
- generation: **6.5号機 / スマスロ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.6 / 98.8 / 100.9 / 104.9 / 109.2 / 114.9%**
- CZ: **1/245.6 / 1/245.0 / 1/244.8 / 1/243.2 / 1/242.6 / 1/240.6**
- ストライクボーナス: **1/432.5 / 1/420.7 / 1/409.6 / 1/389.1 / 1/370.0 / 1/349.3**
- base: **約36.9G/50枚**
- 純増: **ストライクボーナス約5.0枚/G / ごほうびAT・上位AT約7.0枚/G**
- basic: **ストライクボーナス15G・約75枚 / ごほうびAT初期払い出し200・300・400・500枚 / VICTORY FLIGHT期待獲得約1600枚（設定1）**

### No.1626 resetBehavior v0.7
- setting change: **有利区間・天井・内部状態・コア高確・通常モードRESET**
- ceilingAfterReset: **通常最大950G+α → 最大800G+α**
- modeAfterReset: **通常A 0%、通常B 49.22%、通常C 49.22%、通常D 1.56%**
- carry over: **据え置きは有利区間・天井・内部状態・コア高確・通常モードCARRY_OVER**
- power OFF→ON: **有利区間・天井・内部状態・通常モードCARRY_OVER。通常ステージ中の電断復帰は基地、通常ステージ以外なら電断時ステージへ復帰**
- resetBenefits: **ネウロイモード優遇 / ストライクボーナス当選時のVICTORY FLIGHT直撃抽選優遇**
- publicMorningNumbers: **B 49.22% / C 49.22% / D 1.56%、最大800G+α、設定別ネウロイモード振り分けをレコードへ保存**
- resetDetection: **設定変更は基地ステージ固定。基地以外スタートは据え置き濃厚材料。朝一800G+α超BONUS非当選も据え置き濃厚材料**
- gakkun: **UNVERIFIED_AFTER_RESEARCH**
- battle skip counter contract: **設定変更/電断別の直接契約はUNVERIFIED_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN**

### No.1626 CONFLICT
- HAZUSEは950G天井到達時を「ATに当選」と表記するが、一撃・なな徹・必勝本は「ストライクボーナス当選」で一致。canonicalはストライクボーナス当選とし `CONFLICT_SOURCE_WORDING_CEILING_AT_VS_BONUS` を保持。
- メーカー表記は一部二次資料でSANKYO/SANYO混在。発売発表一次寄り資料の「製造元サンスリー / 三洋販売」をcanonicalとする。

## 2024-02-05群 — OPEN 6/8 known canonical
1. スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ — No.1621 DONE
2. Lパチスロ ガールズ&パンツァー 最終章 — No.1622 DONE
3. スマスロ 冴えない彼女の育てかた — No.1623 DONE
4. Sky Love — No.1624 DONE
5. L ゴジラ対エヴァンゲリオン — No.1625 DONE
6. Lストライクウィッチーズ2 — No.1626 DONE
7. GⅠ優駿倶楽部黄金 — NEXT
8. ワードオブライツⅡ — PENDING

境界監査:
- 前handoffで2024年2月市場資料の「2月導入新機種8機」とknown 8機の件数整合を確認済み。
- 群CLOSED前に残り2機処理後、PB・別型式・地域先行/段階導入・延期候補を再監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1626と本handoffの反映を再取得確認。
2. **No.1627候補 `GⅠ優駿倶楽部黄金`（2024-02-05）** から性能コア + resetBehavior v0.7で処理開始。
3. その後、`ワードオブライツⅡ` を処理。
4. 8機処理後に2024-02-05群のPB・別型式・地域先行/段階導入・延期候補を再監査し、CLOSED判定する。
5. 遡及QAは前handoff記載どおり `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
### Lストライクウィッチーズ2
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/26184/nippon
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/26284/greenbelt
- なな徹 機種TOP: https://nana-press.com/kaiseki/machine/679/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/679/19327/
- 一撃 基本/朝一: https://1geki.jp/slot/l_strikewitches2/ / https://1geki.jp/slot/l_strikewitches2/3/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1134/
- 必勝本 ストライクボーナス: https://hisshobon.com/machineinfo/82617/
- 必勝本 ごほうびAT: https://p.hisshobon.jp/machine/4231/1/100814
- パチマガスロマガ 上位AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/santhree_slot/05/at02.php

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。
