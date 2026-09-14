更新日: 2026-09-14

## 現在地点
- recordCount: **1674**
- latestRecordAdded: **パチスロL黄門ちゃま天 — No.1674**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-09-02_l-komonchama-ten.md`
- chronologicalFrontier: **2024-09-02**
- schema: **resetBehavior v0.7**
- status: **2024-09-02_BOUNDARY_CLOSED_4_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1671を再確認。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1671 `A-SLOT+ この素晴らしい世界に祝福を！` の次の未処理から継続し、No.1672〜1674を性能コア + resetBehavior v0.7で登録。
- 公式、業界、主要解析、当時/後年DBを横断し、欠損は機種名・型式・メーカー・設定変更/据え置き/電源OFF ON/ガックン/有利区間等へ検索語を変えて再探索後のみUNVERIFIED。
- 2024年9月の導入予定一覧をページ跨ぎで再監査し、9/2パチスロ群は `A-SLOT+ このすば` / `かぐや様は告らせたい` / `閃乱カグラ2` / `黄門ちゃま天` の4機で一致。9/2群を4/4 CLOSED。
- 次のパチスロ導入境界は2024-09-17 `パチスロハイパーラッシュ` と確認。

## No.1672 — Lパチスロ閃乱カグラ2 SHINOVI MASTER
- path: `docs/real_machine_db/machines/2024-09-02_senran-kagura2-shinovi-master.md`
- manufacturer: **オーイズミラボ製造 / オーイズミ**
- formalModel: **Lパチスロ閃乱カグラ2 L9**
- inspectionCode: **430226**
- releaseDate: **2024-09-02**
- generation: **6.5号機 / スマスロ**
- systemType: **A+AT / リアルボーナス + ST型AT + 擬似ボーナス**
- payoutRate canonical: **97.7 / 98.9 / 101.0 / 105.2 / 108.2 / 110.3%**
- AT initial canonical: **1/398.4 / 1/390.8 / 1/380.1 / 1/345.8 / 1/324.0 / 1/307.8**
- base: **約31.9G/50枚（設定1）**
- netIncrease: **約2.2枚/G**
- ceiling: **ボーナス間500G+α**
- normal AT-through ceiling: **最大10スルー→11回目ボーナスでAT**
- reset: **ゲーム数/ボーナススルーRESET、状態/モード再抽選。有利区間移行時は最大6スルー→7回目ボーナスでATへ短縮。**
- carryOver/powerCycle: **ゲーム数・ボーナススルー・状態・モードCARRY_OVER。**
- advantageousSection: **設定変更/有利区間移行時にスルー天井短縮。通常遊技中リセット後の「かぐらちゃんす」は設定変更時除外。有利区間ランプ判別不可。**
- detection: **7回目ボーナスAT非当選は据え置き材料になり得るが確定ではない。ガックンUNVERIFIED。**
- conflicts: **設定3機械割101.0 vs 101.9、AT初当りテーブル差をCONFLICT保持。**

## No.1673 — パチスロ かぐや様は告らせたい
- path: `docs/real_machine_db/machines/2024-09-02_kaguya-sama-wa-kokurasetai.md`
- manufacturer: **ジェイビー製造 / SANKYO**
- formalModel: **Lかぐや様は告らせたいjA**
- inspectionCode: **4S0464**
- releaseDate: **2024-09-02**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 高純増擬似ボーナス + CZ + 1G連/引き戻しループ**
- payoutRate: **97.7 / 98.8 / 101.2 / 105.8 / 110.8 / 114.9%**
- BONUS initial: **1/362 / 1/360 / 1/357 / 1/349 / 1/343 / 1/335**
- base: **約31.0G/50枚（設定1）**
- netIncrease: **約9.0枚/G**
- normal ceiling: **BIG後1100G+α / REG後900G+α**
- reset ceiling: **800G+α**
- reset: **有利区間/天井/CZスルーRESET、チャンス目規定回数・モード・REG単発回数再抽選、内部状態RESET。**
- carryOver/powerCycle: **内部天井・CZスルー・規定回数・モード・REG単発回数・状態CARRY_OVER。液晶カウンターは見た目上RESET。**
- public morning mode: **A約38% / B約60% / C約1% / D約1%、B以上約62%。**
- advantageousSection: **通常リセット後の「奇跡的相性モード」は設定変更時除外。有利区間ランプ判別不可。**
- detection: **800G+α超え初回非当選は据え置き濃厚材料。ガックンUNVERIFIED。**
- conflict: **モードC最大19回表記 vs 20回表/複数資料。canonical最大20回。**

## No.1674 — パチスロL黄門ちゃま天
- path: `docs/real_machine_db/machines/2024-09-02_l-komonchama-ten.md`
- manufacturer: **オリンピア製造 / 平和**
- formalModel: **L黄門ちゃま天L2**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2024-09-02**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / セットストック + 引き戻し型**
- payoutRate: **97.5 / 98.5 / 101.5 / 106.3 / 110.0 / 112.3%**
- AT initial: **1/398.5 / 1/384.6 / 1/354.2 / 1/313.5 / 1/285.0 / 1/271.1**
- base: **約30.5G/50枚**
- netIncrease: **約4.0枚/G**
- normal ceiling: **999G+α（ダブルちゃんモード500G+α）**
- reset: **有利区間/AT間G RESET、状態・狙ええ状態・通常モード再抽選。世直し提灯スルー天井が7回→3回へ短縮。**
- reset initial mode: **通常A75.0% / 通常B12.5% / 高確12.5%、通常B以上25.0%。**
- carryOver/powerCycle: **AT間G・通常モード・状態・狙ええ状態CARRY_OVER。裏提灯/ダブルちゃん/飛脚ポイント/「四」直し履歴等の個別契約はUNVERIFIED。**
- advantageousSection: **通常リセット後は天使ST（約25%大天使）だが設定変更時除外。有利区間ランプ判別不可。**
- public first-game lantern: **弱レア0.4% / 強レア25.0% / 特殊役100%。**
- detection: **機種専用リセット判別は調査中、ガックンUNVERIFIED。**
- conflict: **一部早期整理資料の2024年5月上旬予定表記 vs 公式/業界/主要解析の2024-09-02。canonical 2024-09-02。**

## 2024-09-02境界 — CLOSED 4/4
1. A-SLOT+ この素晴らしい世界に祝福を！ — No.1671 DONE
2. Lパチスロ閃乱カグラ2 SHINOVI MASTER — No.1672 DONE
3. パチスロ かぐや様は告らせたい — No.1673 DONE
4. パチスロL黄門ちゃま天 — No.1674 DONE

## 次回再開地点
- 最新mainを再同期しNo.1674と本handoffを確認。
- **No.1675候補 `パチスロハイパーラッシュ` — 2024-09-17** から性能コア + resetBehavior v0.7を収集。
- 2024-09-17群は現時点の月間新台一覧でパチスロ1機として確認。処理後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1672 閃乱カグラ2
- オーイズミ公式: https://oizumi.co.jp/news/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8Cl%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E9%96%83%E4%B9%B1%E3%82%AB%E3%82%B0%E3%83%A92-shinovi-master%E3%80%8D-%E7%99%BA%E5%A3%B2/
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/28145/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004382/
- HAZUSE: https://hazuse.com/hd/430226-2/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/56/kh01.php
- 必勝本: https://p.hisshobon.jp/machine/4362/1/104812
- なな徹: https://nana-press.com/kaiseki/machine/795/23766/
- 一撃: https://1geki.jp/slot/l_kagura2/3/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/216067/

### No.1673 かぐや様は告らせたい
- SANKYO公式: https://www.sankyo-fever.jp/collection/965/
- P-WORLD / 遊技日本: https://news.p-world.co.jp/articles/28265/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/4S0464/
- パチビー: https://www.pachibee.jp/machines/index/224080002
- 必勝本: https://p.hisshobon.jp/machine/4351/1/105007
- なな徹: https://nana-press.com/kaiseki/machine/804/23724/
- 一撃: https://1geki.jp/slot/l_kaguya/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/216319/

### No.1674 黄門ちゃま天
- 平和公式: https://www.heiwanet.co.jp/products/pachislot/l-km8/
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/28053/amusement
- P-WORLD / 遊技日本: https://news.p-world.co.jp/articles/28161/nippon
- グリーンべると: https://web-greenbelt.jp/post-84399/
- 必勝本: https://p.hisshobon.jp/vpage/2636/2
- なな徹: https://nana-press.com/kaiseki/machine/799/23676/
- 一撃: https://1geki.jp/slot/l_komonchama_ten/3/

### 境界監査
- ALL7 2024年9月導入一覧 page1: https://www.all7.jp/plans/index/2024/09
- ALL7 2024年9月導入一覧 page2: https://www.all7.jp/plans/index/2024/09/10
- パチスロハイパーラッシュ（パチマガスロマガ）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/08/kh01.php
