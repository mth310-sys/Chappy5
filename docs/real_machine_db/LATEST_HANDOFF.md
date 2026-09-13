更新日: 2026-09-14

## 現在地点
- recordCount: **1625**
- latestRecordAdded: **L ゴジラ対エヴァンゲリオン — No.1625**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-02-05_godzilla-vs-evangelion.md`
- chronologicalFrontier: **2024-02-05**
- frontierLatestMachine: **L ゴジラ対エヴァンゲリオン — No.1625**
- schema: **resetBehavior v0.7**
- status: **2024-02-05_GROUP_OPEN_5_OF_8_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1623 `スマスロ 冴えない彼女の育てかた` を確認して開始。
- INDEXは19件表示の旧版なのでREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- 前handoff指定どおりNo.1624 `Sky Love` を性能コア + resetBehavior v0.7で追加。
- 続けてNo.1625 `L ゴジラ対エヴァンゲリオン` を性能コア + resetBehavior v0.7で追加。
- 2024-02-05群はknown 8機中5機処理済み。残り3機を同日群として継続する。

## No.1624 — Sky Love
- path: `docs/real_machine_db/machines/2024-02-05_sky-love.md`
- manufacturer: **ネット（ブランド/販売発表: カルミナ）**
- formalModel: **LスカイラブGNB**
- inspectionCode: **330383**
- releaseDate: **2024-02-05**
- generation: **6.5号機 / スマスロ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 99.0 / 101.3 / 106.2 / 109.5 / 112.1%**
- BONUS: **1/198.6 / 1/190.2 / 1/179.7 / 1/149.3 / 1/136.2 / 1/131.3**
- ST: **1/503.8 / 1/492.2 / 1/462.0 / 1/395.5 / 1/369.7 / 1/350.4**
- base: **32.4G/50枚（設定1）**
- 純増: **約5.0枚/G**
- basic: **CHALLENGE約50枚 / 出撃約100枚 / LOVE約100枚 / ST 20G+α・平均ボーナス期待度約80%**

### No.1624 resetBehavior v0.7
- setting change: **内部状態・ST間規定G/天井・有利区間RESET。天井1000G→最大800Gへ短縮。内部0〜99G加算抽選**
- carry over / power OFF→ON: **天井・内部状態・有利区間CARRY_OVER。液晶G数は見た目RESETされ得る**
- stage detection: **設定変更はSky Love昼固定。前日Sky Love IIなら電断後Sky Love II昼となるため、朝一Sky Love II昼は据え置き濃厚材料**
- publicMorningNumbers: **リセット最大800G+α / 内部0〜99G加算**
- gakkun: **UNVERIFIED_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN**

## No.1625 — L ゴジラ対エヴァンゲリオン
- path: `docs/real_machine_db/machines/2024-02-05_godzilla-vs-evangelion.md`
- manufacturer: **ビスティ（製造: ジェイビー）**
- formalModel: **Lゴジラ対エヴァンゲリオンjA**
- inspectionCode: **3S1349**
- releaseDate: **2024-02-05**
- generation: **6.5号機 / スマスロ**
- settings: **1 / 2 / 4 / 5 / 6（設定L搭載）**
- 機械割: **97.7 / 99.2 / 104.6 / 110.7 / 114.9%**
- BONUS: **1/299.9 / 1/292.2 / 1/272.3 / 1/256.7 / 1/244.8**
- AT: **1/581.8 / 1/552.7 / 1/487.8 / 1/446.2 / 1/407.3**
- base: **約33G/50枚**
- 純増: **約5.0枚/G**
- basic: **各疑似BONUS20G/約100枚、RUSHチャレンジ5G+α、ATはゲーム数上乗せ型**

### No.1625 resetBehavior v0.7
- setting change: **BONUS間天井・ATスルー天井・内部モード/状態・有利区間RESET**
- ceilingAfterReset: **BONUS間1000G+α→700G+α / AT最大9回目BONUS→最大5回目BONUS**
- carry over / power OFF→ON: **両天井・内部モード/状態・有利区間CARRY_OVER**
- resetBenefits: **希望の羽ポイント規定短縮抽選 約6.3%**
- public state table: **有利区間移行時等の初期状態＝設定1/2/4/5/6で通常89.1/86.7/83.6/81.3/78.9%、高確10.2/12.5/15.6/18.0/20.3%、超高確0.8%共通。設定変更専用表ではないため区別して保持**
- resetDetection: **変更/電断ともNERV本部開始。朝一700G超BONUS非当選 or 5回目BONUS超AT非当選は据え置き濃厚材料。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN**

## 2024-02-05群 — OPEN 5/8 known canonical
1. スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ — No.1621 DONE
2. Lパチスロ ガールズ&パンツァー 最終章 — No.1622 DONE
3. スマスロ 冴えない彼女の育てかた — No.1623 DONE
4. Sky Love — No.1624 DONE
5. L ゴジラ対エヴァンゲリオン — No.1625 DONE
6. Lストライクウィッチーズ2 — NEXT
7. GⅠ優駿倶楽部黄金 — PENDING
8. ワードオブライツⅡ — PENDING

境界監査:
- 前handoffで2024年2月市場資料の「2月導入新機種8機」とknown 8機の件数整合を確認済み。
- 群CLOSED前に残り3機処理後、PB・別型式・地域先行/段階導入・延期候補を再監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1624・No.1625と本handoffの反映を再取得確認。
2. **No.1626候補 `Lストライクウィッチーズ2`（2024-02-05）** から性能コア + resetBehavior v0.7で処理開始。
3. その後、`GⅠ優駿倶楽部黄金` → `ワードオブライツⅡ` の順で同日群を継続。
4. 8機処理後に2024-02-05群のPB・別型式・地域先行/段階導入・延期候補を再監査し、CLOSED判定する。
5. 遡及QAは前handoff記載どおり `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
### Sky Love
- カルミナ公式: https://carmina-gaming.co.jp/product/release/2024/
- カルミナ公式プレス: https://www.dreamnews.jp/press/0000290290/
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/26536/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/SX0065/
- 一撃 基本/朝一: https://1geki.jp/slot/l_skylove/ / https://1geki.jp/slot/l_skylove/3/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/681/19072/
- 必勝本 天井: https://hisshobon.com/machineinfo/82361/

### L ゴジラ対エヴァンゲリオン
- 長崎県遊技業協同組合（遊技通信web転載）: https://nagasaki-yukyo.or.jp/information/%E6%9C%80%E5%BC%B7%E3%82%B3%E3%83%A9%E3%83%9C%E3%81%8C%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%81%A7%E5%88%9D%E7%99%BB%E5%A0%B4%EF%BC%81%E3%80%8C%EF%BD%8C%E3%82%B4%E3%82%B8%E3%83%A9%E5%AF%BE%E3%82%A8/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1349/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/43/kh01.php
- 一撃 朝一: https://1geki.jp/slot/l_gojieva/3/
- なな徹 天井: https://nana-press.com/kaiseki/machine/688/19493/
- Altema 希望の羽: https://altema.jp/pachimo/lgojievahane

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。
