更新日: 2026-09-14

## 現在地点
- recordCount: **1647**
- latestRecordAdded: **Lパチスロ 炎炎ノ消防隊 — No.1647**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-05-07_l-pachislot-enen-no-shobotai.md`
- chronologicalFrontier: **2024-05-07**
- frontierLatestMachine: **Lパチスロ 炎炎ノ消防隊 — No.1647**
- schema: **resetBehavior v0.7**
- status: **2024-05-07_BOUNDARY_OPEN_2_OF_5_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1646 `沖シーサー-30` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- No.1647 `Lパチスロ 炎炎ノ消防隊` を性能コア + resetBehavior v0.7で新規登録。
- 2024-05-07同日群は既知5機のうち2機処理済み。残り3機処理後、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## No.1647 — Lパチスロ 炎炎ノ消防隊
- path: `docs/real_machine_db/machines/2024-05-07_l-pachislot-enen-no-shobotai.md`
- manufacturer: **SANKYO（ジェイビー系）**
- formalModel: **L炎炎ノ消防隊jG**
- inspectionCode: **330569**
- releaseDate: **2024-05-07**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 擬似ボーナス + 炎炎激闘**
- settings: **1 / 2 / 4 / 5 / 6（設定3なし、設定Lあり）**
- 機械割: **97.7 / 99.2 / 104.4 / 110.1 / 114.9%**
- 初当り合算: **1/197 / 1/194 / 1/182 / 1/173 / 1/169**
- 初当りBONUS: **1/291 / 1/282 / 1/257 / 1/239 / 1/230**
- 炎炎激闘初当り: **1/790 / 1/756 / 1/669 / 1/611 / 1/573**
- base: **約33.8G/50枚**
- netIncrease: **約5.7枚/G**
- basicPayout: **炎炎BONUS 40G/約230枚、REG/エピソードBONUS ベルナビ10回/約85枚**
- coreConfidence: **ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1647 resetBehavior v0.7
- setting change: **有利区間・天井・内部モード・内部状態RESET。朝イチ専用モード再抽選。**
- carry over: **据え置きは有利区間・天井・内部モード・内部状態CARRY_OVER。**
- power OFF→ON: **天井・内部モード・内部状態・有利区間CARRY_OVER。液晶Gは0G表示へ戻るとする解析あり。**
- game/ceiling: **通常最大850G+α → 設定変更後最大650G+α。朝イチA 650G / B 550G / C 450G / 天国88G+α。**
- mode: **settings1/2/4 = A約53% / B約1% / C約11% / 天国約35%。settings5/6 = A約52% / B約1% / C約11% / 天国約36%。**
- state: **設定変更RESET、据え置き/電断CARRY_OVER。十字目高確も同様とする解析あり。**
- advantageous section: **設定変更RESET、据え置き/電断CARRY_OVER。設定変更以外の有利区間リセット時の裏炎炎激闘1～3個ストック恩恵は設定変更時には適用されない。**
- reset detection: **88G付近前兆はリセット濃厚材料。朝一650G+α超えボーナス非当選は据え置き濃厚材料。開始画面単独判別不可。本機固有ガックンは再探索後UNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED**

### 公開朝一数値 — No.1647
- 設定変更時最大天井: **650G+α**
- 朝イチA/B/C/天国の天井: **650 / 550 / 450 / 88G+α**
- モード振り分け settings1/2/4: **約53 / 1 / 11 / 35%**
- モード振り分け settings5/6: **約52 / 1 / 11 / 36%**
- 天国移行率: **約35～36%**
- ガックン発生率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes
### No.1647
- 純増は主要導入期/解析資料の約5.7枚/Gをcanonical。後年二次記事の約5.8枚/Gは丸め差候補として平均化しない。
- 市場設定は1/2/4/5/6。後年資料にsetting3行が混入する例があるためcanonicalへ採用しない。
- 後年の `Lパチスロ 炎炎ノ消防隊2` の情報を混入しない。

## 2024-05-07境界 — OPEN 2/5 known canonical candidates
1. 沖シーサー-30 — No.1646 DONE
2. Lパチスロ 炎炎ノ消防隊 — No.1647 DONE
3. **L ウルトラマンティガ — NEXT / No.1648 candidate**
4. スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION — pending
5. ニューパルサーSP4 with 太鼓の達人 — pending

境界監査メモ:
- 上記5機は複数の機種別資料で2024-05-07導入を確認済み。
- エウレカ4の旧5/13候補は、サミー公式動画「2024年5月7日より順次導入」等によりcanonicalを5/7へ補正済み。
- 全5機処理後、`2024年5月7日 / 2024-05-07 / パチスロ新台 / 導入 / 型式 / PB / 地域先行 / 段階導入` 等を再検索し追加漏れを監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1647と本handoffを再取得確認。
2. **No.1648候補 `L ウルトラマンティガ`（2024-05-07）** を性能コア + resetBehavior v0.7で処理。
3. 次点は `スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION` → `ニューパルサーSP4 with 太鼓の達人`。
4. 5機完了後に同日群をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED判定。
5. 遡及QAカーソルは前handoffどおり `2007-07-09_genju-haou-t.md` まで完了。次QA対象はmain machines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理。
6. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1647 Lパチスロ 炎炎ノ消防隊
- パチビー: https://www.pachibee.jp/machines/index/224040001
- HAZUSE型式/検定: https://hazuse.com/hd/330569-2/
- HAZUSE解析: https://hazuse.com/machine/pachislot/SX0072/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/738/21302/
- なな徹 モード振り分け: https://nana-press.com/kaiseki/machine/738/21299/
- なな徹 初当たりBONUS: https://nana-press.com/kaiseki/machine/738/21308/
- なな徹 炎炎激闘: https://nana-press.com/kaiseki/machine/738/21311/
- なな徹 炎炎BONUS等: https://nana-press.com/kaiseki/machine/738/21314/
- 一撃 天井/やめどき: https://1geki.jp/slot/l_ennenn/3/
- マルっとWAVE: https://marutto-w.com/shindai_reference/l_enen
- K-Navi: https://p-kn.com/slot/4125/
- Altema 朝一リセット: https://altema.jp/pachimo/lenenreset
- ぽこすろっと: https://www.nankaikoya.jp/lenennoshouboutai-kitaichi/
- ニコナナ: https://www.youtube.com/watch?v=cYLjg2aWKm4
