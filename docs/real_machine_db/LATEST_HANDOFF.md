更新日: 2026-09-10

## 現在地点
- recordCount: **1206**
- latestRecordAdded: **パチスロ学園黙示録ハイスクール・オブ・ザ・デッド**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-02_highschool-of-the-dead-yamasa.md`
- chronologicalFrontier: **2018-07-02**
- frontierLatestMachine: **パチスロ学園黙示録ハイスクール・オブ・ザ・デッド — No.1206**
- schema: **resetBehavior v0.7**
- status: **2018-07-02_GROUP_OPEN_1_MACHINE_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1205を再取得して開始。
- `INDEX.md`は19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- mainはNo.1205 `グレート69～TOMOLER～` / 2018-06-25群CLOSEDまで進行済みだったため、その次の導入日群2018-07-02へ進行。
- 7/2群先頭候補 `パチスロ学園黙示録ハイスクール・オブ・ザ・デッド` をNo.1206としてperformance core + resetBehavior v0.7で登録。
- HAZUSE、Amusement Japan、パチマガスロマガ、K-Navi、P-WORLD、ちょんぼりすた、一撃を横断し、型式・検定番号・導入日・性能コアを照合。
- resetBehaviorは当時一撃で設定変更/電源OFF→ON時の状態・液晶が「現在調査中」。表記揺れ、正式型式名、メーカー名、朝一/リセット/据え置き/ガックン/有利区間等へ検索語を変更して再探索したが、後年も本機固有の直接契約を固定できなかったため、一般論で補完せずUNVERIFIED_AFTER_RESEARCHを維持。

## No.1206 — パチスロ学園黙示録ハイスクール・オブ・ザ・デッド
- path: `docs/real_machine_db/machines/2018-07-02_highschool-of-the-dead-yamasa.md`
- manufacturer: **山佐**
- releaseDateCanonical: **2018-07-02**
- formalModelName: `ハイスクールオブザデッド／CC`
- certificationNumber: `7S1481`
- generation/system: **5.9号機 / A+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.6 / 98.3 / 100.5 / 103.1 / 106.0 / 109.2%**
- BIG: **全設定約1/464.8**
- REG: **全設定約1/655.4**
- スクデッドチャージ: **1/3276.8 / 1/2048.0 / 1/1489.5 / 1/1310.7 / 1/1092.3 / 1/910.2**
- ボーナス合算: **1/251.1 / 1/240.1 / 1/230.0 / 1/225.2 / 1/217.7 / 1/209.4**
- ART初当たり: **1/563.4 / 1/563.2 / 1/563.0 / 1/562.0 / 1/561.8 / 1/562.4**
- base: **約34G/50枚**
- ART純増: **約1.9枚/G（ボーナス込み）**
- basic payout: **BIG約204枚 / REG約42枚 / スクデッドチャージ約204枚**
- normal ceiling: **非搭載（後年解析で確認）**

### resetBehavior v0.7
- settingChange: 当時一撃は状態/液晶とも「現在調査中」。十分な再探索後も本機固有確定契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを独立条件としてART/CZ/内部状態/有利区間状態の保持を明記する直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: 当時一撃は状態/液晶とも「現在調査中」。後年の直接契約も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: 通常天井非搭載のため通常天井カウンタと短縮天井は `NOT_APPLICABLE`。
- mode/state: 朝一専用モード、設定変更専用モード振り分け、リセット専用初当たり/CZ優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。内部状態自体はUNVERIFIED。
- advantageousSection: 本機は5.9号機で有利区間使用。設定変更/据え置き/純電断時の本機固有区間状態・ランプ契約は直接固定できず `UNVERIFIED_AFTER_RESEARCH`。5.9号機一般論から補完しない。
- resetDetection: 本機固有のガックン条件/発生率、初期出目、液晶、有利区間ランプ判別は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 設定変更専用の短縮天井・モード振り分け・初当たり/CZ上昇率・ガックン発生率はいずれも公開値未確認。

## 2018-07-02群監査
### 登録済み
- No.1206 パチスロ学園黙示録ハイスクール・オブ・ザ・デッド（山佐）

### 未処理候補
- エルインカ～黄金文明～（KPE / KONAMI） — HAZUSEで2018-07-02、型式`エルインカ黄金文明／KK`、検定`7S1600`を先行確認。
- パチスロ ダンガンロンパ（ニューギン） — 複数解析/当時一覧で2018-07-02を確認。
- パチスロ 美ラメキ！（藤商事） — 複数解析/当時一覧で2018-07-02を確認。
- パチスロ トータル・イクリプスLv.MAX-RT — 前handoff候補。7/2帰属は次回再監査して確定。

### 群判定
- `2018-07-02_GROUP_OPEN_1_MACHINE_PROCESSED`
- 当時導入一覧Pachi-Logosでは7/2スロットとしてHOTD / エルインカ / ダンガンロンパ / 美ラメキを確認。
- 前handoffにトータル・イクリプスLv.MAX-RT候補もあるため、同日群はまだCLOSEしない。

## 次候補の先行確認
### エルインカ～黄金文明～
- HAZUSE: 2018-07-02 / KPE / 型式`エルインカ黄金文明／KK` / 検定`7S1600`。
- ちょんぼりすた/すろぱちくえすと: A+RT、約32〜32.7G/50枚、RT純増約0.3枚/G、RT100G、天井非搭載。
- 市場想定機械割と完全攻略時機械割の双方が公開されている技術介入機。次回No.1207候補としてresetBehavior v0.7を含めて収集する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07-24_dengeki-franken.md**（電撃フランケン）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_jarinko-chie.md`（じゃりン子チエ）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率・型式等の競合は平均/統合せず`CONFLICT`として保持する。
- 同日群の全メーカー/別スペック/地域差監査後にのみ群をCLOSEする。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1206を再取得。
2. **1206件 / chronologicalFrontier 2018-07-02 / 7/2群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **2018-07-02 `エルインカ～黄金文明～`**をNo.1207候補としてperformance core + resetBehavior v0.7を収集。
4. 続いて7/2候補群（ダンガンロンパ / 美ラメキ / トータル・イクリプスLv.MAX-RT等）を一覧差・型式差込みで横断監査し、未処理を登録。
5. 7/2群の全メーカー・表記揺れ・別スペック監査後にCLOSED判定し、その次導入日群へ進む。
6. 遡及QAは `docs/real_machine_db/machines/2006-08_jarinko-chie.md`（じゃりン子チエ）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1206 パチスロ学園黙示録ハイスクール・オブ・ザ・デッド
- HAZUSE: https://hazuse.com/machine/pachislot/7S1481/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000628/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/226/a.php
- パチマガスロマガ ボーナス/ART/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/226/h-1.php
- K-Navi: https://p-kn.com/slot/3018/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/59085/
- 一撃 reset: https://1geki.jp/slot/s_hotd/3/
- P-WORLD: https://www.p-world.co.jp/machine/database/8665
- Pachi-Logos 2018-07-02導入一覧: https://pachi-logos.jp/new-machines/7/

### 次候補先行資料
- HAZUSE エルインカ: https://hazuse.com/machine/pachislot/7S1600/
- すろぱちくえすと エルインカ: https://www.slopachi-quest.com/article/el-inca/
- ちょんぼりすた エルインカ: https://chonborista.com/slot/kpe-slot/58303/
