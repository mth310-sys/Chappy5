更新日: 2026-09-11

## 現在地点
- recordCount: **1256**
- latestRecordAdded: **パチスロ ミクちゃん**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-01-07_pachislot-mikuchan.md`
- chronologicalFrontier: **2019-01-07**
- frontierLatestMachine: **パチスロ ミクちゃん — No.1256**
- schema: **resetBehavior v0.7**
- status: **2019-01-07_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1254を再取得して開始。
- 並行更新により前回会話上の1248ではなく、main正本がNo.1254まで進行済みであることを確認し、古い地点へ戻らず継続。
- No.1255 `戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.` を登録。
- No.1256 `パチスロ ミクちゃん` を登録。1/7群未処理候補だったPB機を独立レコードとして確定。
- 2019年1月新台一覧、機種DB、業界記事、メーカー系統を横断し、1/7群は **聖闘士星矢 海皇覚醒Special / 蒼天の拳 朋友 / 花の慶次 剛弓ver. / パチスロ ミクちゃん** の4機種を処理済みとしてCLOSED判定。

## No.1255 — 戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.
- manufacturer: **ニューギン / EXCITE**
- releaseDateCanonical: **2019-01-07**
- generation/system: **5.9号機 / ART・CZ・擬似ボーナス**
- payoutRate: **98.2 / 99.3 / 100.8 / 102.1 / 104.0 / 105.3%**
- ART初当たり: **1/692 → 1/664**
- CZ出現率: **1/377 → 1/382**
- baseGamesPer50: **約50G**
- ART: **純増約2.0枚/G、継続50〜100%、平均約80%**
- normal ceiling: **非搭載**
- 15戦突破後は天下無双モード、有利区間1500G完走エンディングへ結び付く仕様。

### resetBehavior v0.7
- 当時朝一比較表は設定変更/電源OFF→ONとも内部状態・ステージを「調査中」。
- 表記揺れ、ニューギン/EXCITE、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間で再探索したが、本機固有の直接契約を追加固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数天井非搭載のため短縮天井は `NOT_APPLICABLE`。
- 設定変更専用モード/初当たり/CZ優遇の公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 5.9号機一般論や前作挙動を自動転記しない。

### quality notes
- 導入日は複数資料で2019-01-07、業界記事は2019-01-06納品予定で整合。一方pachislo-dataに1/21予定表記があり `CONFLICT_RELEASE_DATE_2019_01_07_VS_2019_01_21` として保持。
- 一部後年資料の「6号機」表記に対し、当時業界記事/主要解析は5.9号機で一致。canonical=5.9号機。
- formal model / certification numberは十分な再探索後も高信頼固定できず未確定。

## No.1256 — パチスロ ミクちゃん
- manufacturer: **JPS（タツミコーポレーションPB）**
- releaseDateCanonical: **2019-01-07**
- formalModelName: **SパチスロミクチャンMPB AA**
- generation/system: **6号機 / ノーマル・完全告知・技術介入**
- settings: **3 / 9**
- BIG: **設定3 1/156.41 / 設定9 1/224.44**
- REG: **設定3 1/1260.31 / 設定9 1/224.44**
- 合算: **1/139.14 / 1/112.22**
- チェリー狙い機械割: **101.50 / 101.54%**
- 完全攻略: **104.00 / 104.12%**
- BIG **200枚** / REG(BONUS GAME) **約80枚**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- 天井/ゾーン: **なし**

### resetBehavior v0.7
- 機種固有攻略で **天井なし / ゾーンなし / リセット恩恵なし** を確認。
- 液晶なしAタイプのため、ガックンが有効でない限りリセット判別困難とする資料あり。ただし本機固有ガックン発生率/確定条件は未固定。
- 据え置き独立条件、純電源OFF→ON時の内部状態/出目は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数天井非搭載につき短縮天井は `NOT_APPLICABLE`。

### quality notes
- 導入日はK-Navi/クオぱち/当時新台一覧で2019-01-07。一部資料は2019-01-08のため `CONFLICT_RELEASE_DATE_2019_01_07_VS_2019_01_08` を保持。
- タツミ発表会記事の機械割はフリー打ち100%/完全取得104%の丸め説明。精密101.50/101.54%はチェリー狙い、市場値として定義分離。
- 型式名は複数DB/検定通過一覧で一致。検定番号は未固定。

## 2019-01-07群
### 登録済み
- No.1253 パチスロ聖闘士星矢 海皇覚醒Special
- No.1254 パチスロ蒼天の拳 朋友
- No.1255 戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.
- No.1256 パチスロ ミクちゃん

### 判定
- **2019-01-07_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- 2019年1月新台一覧で1/7導入群が上記4機として列挙され、別検索でも追加独立機を固定できなかった。

## 次の時系列群 — 2019-01-21
当時新台一覧で少なくとも以下を先行確認。個別導入日/型式/別スペックを再照合してから登録する。
1. **ぱちスロAKB48エンジェル**（京楽）— No.1257第一候補
2. **戦国BASARA HEROES PARTY**（エンターライズ）
3. **パチスロ フィーバークィーンII**（SANKYO）
4. **S島漢 25Φ / 30Φ**（平和/アムテックス系。別型式・独立レコード要否を確認）
5. **Sゲッターロボ**（京楽系）

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`**。
- lastRetroQaResult: **モエる まりんバトる — PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`（アクアビーナス）**。
- 今回は新規時系列群処理を優先し、QAカーソルは変更なし。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1256を再取得。
2. **1256件 / chronologicalFrontier 2019-01-07 / `2019-01-07_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`** を正本として継続。並行更新があれば最新HEAD優先。
3. 2019-01-08〜01-20境界を短く再監査し、未処理独立機がなければ2019-01-21群OPEN。
4. **No.1257候補 `ぱちスロAKB48エンジェル`** を先頭に性能コア + resetBehavior v0.7を収集。
5. BASARA HEROES PARTY → フィーバークィーンII → 島漢25/30 → ゲッターロボを個別照合。
6. 1/21群を全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定。
7. 遡及QAは **`docs/real_machine_db/machines/2006-12_aqua-venus.md`** から再開。

## 主要出典 — 取得日 2026-09-11
### No.1255 花の慶次 剛弓ver.
- グリーンべると: https://web-greenbelt.jp/00010908/
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/71777/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/10/a.php
- パチマガスロマガ 50枚: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/10/c.php
- P-WORLD: https://www.p-world.co.jp/machine/database/8816
- パチナビ: https://pachinavi.net/machines/hana-keiji-ikusayari-gokyu/
- pachislo-data: https://pachislo-data.com/newgin/82049

### No.1256 パチスロ ミクちゃん
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000940/
- K-Navi: https://p-kn.com/slot/3160/
- P-WORLD: https://www.p-world.co.jp/machine/database/8844
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/38/a.php
- モゲスロ: https://moge-site.com/archives/22202
- クオぱち: https://www.pachinkoquora.com/machine/pachinslot/2148/
- 検定通過一覧: https://kaiseki.sulopachinews.com/archives/2352

### 2019-01新台群監査
- すろぱちくえすと 2019年1月新台一覧: https://www.slopachi-quest.com/article/erunote-shindai-2019-1/
