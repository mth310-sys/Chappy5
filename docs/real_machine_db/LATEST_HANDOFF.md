更新日: 2026-09-14

## 現在地点
- recordCount: **1631**
- latestRecordAdded: **キングクリエーター30 — No.1631**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-03-04_king-creator-30.md`
- chronologicalFrontier: **2024-03-04**
- frontierLatestMachine: **キングクリエーター30 — No.1631**
- schema: **resetBehavior v0.7**
- status: **2024-03-04_GROUP_OPEN_3_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1629 `スマスロキングパルサー` を確認して開始。
- INDEXは旧版表示のためREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- mainは直前会話地点No.1625より進み、2024-02-05群8/8 CLOSED、2024-03-04群No.1629まで処理済みだったため既存値をやり直さずNo.1630から継続。
- No.1630 `L南国育ち` を性能コア + resetBehavior v0.7で追加。
- No.1631 `キングクリエーター30` を性能コア + resetBehavior v0.7で追加。

## No.1630 — L南国育ち
- path: `docs/real_machine_db/machines/2024-03-04_l-nangoku-sodachi.md`
- manufacturer: **オリンピアエステート（平和）**
- formalModel: **L南国育ちS3**
- inspectionCode: **330497**
- releaseDate: **2024-03-04**
- generation: **6.5号機 / スマスロ**
- settings: **L / 1 / 2 / 3 / 5 / 6**
- 機械割（1/2/3/5/6）: **97.7 / 98.9 / 101.6 / 106.0 / 110.0%**
- ボーナス初当り: **1/299.8 / 1/291.0 / 1/267.3 / 1/238.6 / 1/208.8**
- base: **約31.2G/50枚**
- 疑似ボーナス純増: **約6.0枚/G**
- 青7BIG平均約240枚 / 赤7BIG平均約230枚 / REG平均約85枚

### No.1630 resetBehavior v0.7
- setting change: **有利区間・内部天井進行RESET、内部モード再抽選。通常A30.0% / 通常B50.0% / チャンス20.0%。**
- ceiling: **通常A/Bは996G、チャンスは200G。設定変更で一律短縮ではなく、20%で200G天井モード選択。**
- carry over / power OFF→ON: **天井進行・内部モード・有利区間CARRY_OVER。**
- morning benefit: **70%が通常A以外（通常Bまたはチャンス）。うち20%が200G天井チャンス。**
- reset detection: **前日履歴と当日当選位置/モード挙動の整合が推測材料。液晶/外部データ表示の機種固有確定契約とガックンはUNVERIFIED_AFTER_RESEARCH。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_DISPLAY_COUNTER**
- 注意: **2026年 `L南国育ち SPECIAL` が検索で大量混入するため別機種として排除。SPECIALの70%以上チャンス以上/500G短縮は2024年機へ流用しない。**

## No.1631 — キングクリエーター30
- path: `docs/real_machine_db/machines/2024-03-04_king-creator-30.md`
- manufacturer: **北電子**
- formalModel: **SキングクリエーターSK-30**
- inspectionCode: **3S1561**
- releaseDate: **2024-03-04**
- generation: **6.5号機 / 30Φメダル機**
- systemType: **ノーマル / Aタイプ / 完全告知**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.2 / 98.6 / 100.5 / 103.2 / 106.0 / 109.0%**
- BIG: **1/259.0 / 1/256.0 / 1/248.2 / 1/237.4 / 1/226.8 / 1/217.0**
- REG: **1/474.9 / 1/442.8 / 1/414.8 / 1/381.0 / 1/346.8 / 1/321.3**
- 合算: **1/167.6 / 1/162.2 / 1/155.3 / 1/146.3 / 1/137.1 / 1/129.5**
- base: **約39～40G/50枚**
- BIG約252枚 / REG約100枚

### No.1631 resetBehavior v0.7
- 天井・規定G・AT/CZ・通常時モードを搭載しないノーマルAのため、これらの設定変更/据え置き/電断項目は **NOT_APPLICABLE**。
- 朝一専用モード、天井短縮、固定初当り優遇などの主要resetBenefitは再探索後も確認できず。
- 有利区間進行を朝一客行動に使う機種ではないため `advantageousSectionReset: NOT_APPLICABLE`。
- 本機固有ガックン条件/発生率、3種類の告知モード等UI選択状態の設定変更/電断復帰契約は **UNVERIFIED_AFTER_RESEARCH**。
- 型式は北電子公式 `SキングクリエーターSK-30` をcanonical。先行検定資料の `SキングクリエーターKD-30` は別型式履歴としてCONFLICT混同せず保持。
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_UI_PERSISTENCE**

## 2024-03-04群 — OPEN 3/5 canonical
1. スマスロキングパルサー — No.1629 DONE
2. L南国育ち — No.1630 DONE
3. キングクリエーター30 — No.1631 DONE
4. チバリヨ2 — No.1632 NEXT
5. パチスロ ガメラ2 — PENDING

境界監査メモ:
- 2024-03-04群は複数新台カレンダー/機種DBで上記5機をcanonical候補として維持。
- `パチスロ ブラックミクちゃん` はHAZUSE上2024-03-09の別境界候補として保持し、3/4群へ混入させない。
- `キングクリエーター30` は販売地域限定の記述がある資料も存在するが、北電子公式検定情報・業界記事・P-WORLDで2024-03-04市場導入機として確認できるため本線に含める。

## 次回再開地点
1. 最新mainを再同期し、No.1630/1631と本handoffの反映を再取得確認。
2. **No.1632候補 `チバリヨ2` — 2024-03-04** を性能コア + resetBehavior v0.7で処理する。
3. その後 `パチスロ ガメラ2` を処理し、5機完了後にPB・別型式・地域先行・延期/段階導入を再監査して2024-03-04群をCLOSED判定する。
4. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
5. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### L南国育ち
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10004061/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-62502/
- グリーンべると: https://web-greenbelt.jp/post-79796/
- P-WORLD検定通過記事: https://news.p-world.co.jp/articles/26413/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/SX0067/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/703/19013/
- なな徹 ボーナス: https://nana-press.com/kaiseki/machine/703/19747/
- 必勝本 モード: https://hisshobon.com/machineinfo/82861/
- 必勝本 通常時: https://hisshobon.com/machineinfo/82868/
- 一撃 天井: https://1geki.jp/slot/l_nangoku_sdc/3/
- 一撃 モード: https://1geki.jp/slot/l_nangoku_sdc/42/
- ぽこすろっと 朝一/設定変更: https://www.nankaikoya.jp/nangokusodachi-kitaichi/

### キングクリエーター30
- 北電子公式製品情報: https://www.kitadenshi.co.jp/slot/kingcreator30/
- 北電子公式検定情報: https://www.kitadenshi.co.jp/slot-kentei/kingcreator30/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-62756/
- P-WORLD: https://www.p-world.co.jp/machine/database/9995
- なな徹: https://nana-press.com/kaiseki/machine/706/19160/
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4260/1/100618
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/83005/
- スロリスクタイム天井一覧: https://pachisuro100.com/tenjyo/

### 直前群 / 次群監査継続用
- 2024-02-05群はNo.1621～1628の8/8 CLOSED。
- 2024-03-04群はNo.1629～1631の3/5処理済み。
- 次回はNo.1632 `チバリヨ2` から継続。
