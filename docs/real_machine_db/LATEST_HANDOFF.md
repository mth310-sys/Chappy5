更新日: 2026-09-11

## 現在地点
- recordCount: **1344**
- latestRecordAdded: **パチスロ〈物語〉シリーズ セカンドシーズン — No.1344**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-03-16_monogatari-series-second-season.md`
- chronologicalFrontier: **2020-03-16**
- frontierLatestMachine: **パチスロ〈物語〉シリーズ セカンドシーズン — No.1344**
- schema: **resetBehavior v0.7**
- status: **2020-03-16_GROUP_OPEN_1_OF_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1343「パチスロ ハナペカ」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正とした。
- 開始時main最新handoffは No.1343 / 2020-03-02群CLOSED。
- 2020-03-03〜03-15境界を再確認し、次の明確な導入群を2020-03-16とした。
- 2020-03-16群は複数資料から **パチスロ〈物語〉シリーズ セカンドシーズン / スペリオーレ / みうのおしゃべりパチスロ** の3機を確認。
- 群先頭「パチスロ〈物語〉シリーズ セカンドシーズン」をNo.1344として追加。
- 遡及QA `やったネ！はるみちゃん` は追加再探索でも本機固有reset契約を固定できなかったため、一般5号機ART挙動を推測せず `PARTIAL_RESEARCH_EXHAUSTED` としてレコード側を正式化した。

## No.1344 — パチスロ〈物語〉シリーズ セカンドシーズン
- path: `docs/real_machine_db/machines/2020-03-16_monogatari-series-second-season.md`
- manufacturer: **サミー（製造元: タイヨーエレック）**
- formalModel: **S物語セカンドシーズンXA**
- certificationNumber: **9S1727**
- releaseDate canonical: **2020-03-16**
- generation/system: **6号機 / 差枚数管理AT / CZ→チャンスAT→メインAT**
- payoutRate: **97.3 / 98.9 / 101.1 / 105.1 / 109.0 / 112.8%**
- CZ「結末ノ儀」: **1/149.4 / 147.6 / 146.9 / 145.2 / 141.1 / 133.1**
- チャンスAT「傾物語」: **1/331.4 / 323.8 / 311.9 / 273.9 / 250.2 / 221.8**
- base: **約50.8G/50枚**
- netIncrease: **約2.8枚/G**
- 倖時間SS: **初期150枚 + 倍倍チャンス上乗せ**
- あとがたり: **1セット100枚**
- 天井: **200G or 500G消化後+前兆で傾物語**。スイカで5G/100G減算。

### resetBehavior v0.7 — No.1344
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_RESET_TABLE_AND_GAKKUN**
- 後発朝一解析で **設定変更=天井RESET / 内部状態RESET、電源OFF→ON=天井CARRY_OVER / 内部状態CARRY_OVER**。
- 1geki導入直後（2020-03-19）ページは天井・状態・モード・液晶ステージを「調査中」としており、後発解析との公開時点差を保持。
- 設定変更時モード振り分け・液晶開始ステージは再探索後も未固定。
- 通常時は有利区間ランプ消灯タイプのため、ランプだけでは変更判別不可。
- **ガックンによる変更判別は有効**とする複数攻略資料を確認。ただし本機固有発生率は未固定。
- 有利区間移行時は天井減算高確。高確G数は **30G 69.1% / 40G 20.3% / 50G 10.2% / 100G 0.4% / 平均34.3G**。
- 設定変更専用の固定天井短縮・朝一専用モード振り分け・朝一特定G以内当選率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### No.1344 conflict
- CZ「結末ノ儀」は2020-02-14グリーンべると事前記事で **設定1 1/150〜設定6 1/122.7**、導入後のパチマガスロマガ・必勝本・HAZUSE・なな徹・K-Navi等は **1/149.4〜1/133.1**。導入後の複数一致値をcanonicalとし、事前公表値をCONFLICT保持。

## 2020-03-16群監査
- 確認済み3機:
  1. パチスロ〈物語〉シリーズ セカンドシーズン — **No.1344 / 処理済み**
  2. スペリオーレ — **未処理 / No.1345候補**
  3. みうのおしゃべりパチスロ — **未処理**
- 遊技日本で〈物語〉シリーズの3/16全国導入を確認。
- スペリオーレ、みうのおしゃべりパチスロも各攻略DBで2020-03-16導入を確認。
- 当時の導入直前まとめも3/16導入を3機として記載。
- 群判定: **OPEN_1_OF_3_PROCESSED**。残り2機処理後に別メーカー/別型式/PBを再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan.md` は **PARTIAL_RESEARCH_EXHAUSTED** へ正式化済み。
- 本機固有の設定変更時ART/内部RT、据え置き/純電断時ART残G、ガックン/初期出目は追加再探索でも固定できず。
- 次回は最新mainの既存レコードから、同QAキューの次の未formalized候補を再計算して進む。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1344を再取得。
2. **2020-03-16群の次の未処理 `スペリオーレ` をNo.1345候補として処理する。**
3. 続いて **`みうのおしゃべりパチスロ`** を処理。
4. 3機完了後、3/16同日全メーカー・別型式・PBを再監査し、群CLOSED可否を判定する。
5. 遡及QAは最新mainから `やったネ！はるみちゃん` の次の未formalized候補を再計算する。

## 主要出典 — 取得日 2026-09-11
### No.1344
- サミー公式: https://www.sammy.co.jp/japanese/news/2020/1403.html
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-33817/
- グリーンべると: https://web-greenbelt.jp/post-35694/
- HAZUSE: https://hazuse.com/machine/pachislot/9S1727/
- パチマガスロマガ 基本確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/179/h.php
- パチマガスロマガ 天井減算: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/179/09.php
- 必勝本: https://p.hisshobon.jp/machine/3488/1/76898
- なな徹 基本: https://nana-press.com/kaiseki/machine/13/169/
- なな徹 天井: https://nana-press.com/kaiseki/machine/13/173/
- 1geki: https://1geki.jp/slot/s_monogatari2/3/
- おスロおパチおいでやす: https://oslo-opachi.com/2020/03/15/monogatari-series-tennjou/
- スロパチクエスト: https://www.slopachi-quest.com/article/monogatari-series-tennjou/
- P-WORLD: https://www.p-world.co.jp/machine/database/9147

### 2020-03-16群
- スペリオーレ: https://chonborista.com/slot/baltec/105472/
- みうのおしゃべりパチスロ: https://chonborista.com/slot/okazaki-slot/104548/
- 導入直前まとめ: https://pachi-jyouhoukyoku.hatenablog.com/entry/2020/03/13/234806

### 遡及QA やったネ！はるみちゃん
- BELLCO公式: https://www.s-bellco.co.jp/products/slot/yama_harumichan/
- グリーンべると: https://web-greenbelt.jp/00004071/
- HAZUSE: https://hazuse.com/i/data/haruni1/top.htm
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/05/yama_slot_05.php
- なな徹回顧: https://nana-press.com/post/1618061
