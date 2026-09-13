更新日: 2026-09-14

## 現在地点
- recordCount: **1648**
- latestRecordAdded: **L ウルトラマンティガ — No.1648**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-05-07_l-ultraman-tiga.md`
- chronologicalFrontier: **2024-05-07**
- frontierLatestMachine: **L ウルトラマンティガ — No.1648**
- schema: **resetBehavior v0.7**
- status: **2024-05-07_BOUNDARY_OPEN_3_OF_5_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1646 `沖シーサー-30` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- No.1647 `Lパチスロ 炎炎ノ消防隊` と No.1648 `L ウルトラマンティガ` を性能コア + resetBehavior v0.7で新規登録。
- 2024-05-07同日群は既知5機のうち3機処理済み。残り2機処理後、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## No.1647 — Lパチスロ 炎炎ノ消防隊
- path: `docs/real_machine_db/machines/2024-05-07_l-pachislot-enen-no-shobotai.md`
- formalModel: **L炎炎ノ消防隊jG** / inspectionCode: **330569**
- settings: **1 / 2 / 4 / 5 / 6**
- 機械割: **97.7 / 99.2 / 104.4 / 110.1 / 114.9%**
- 初当り合算: **1/197 / 1/194 / 1/182 / 1/173 / 1/169**
- base: **約33.8G/50枚** / netIncrease: **約5.7枚/G**
- reset: **有利区間・天井・内部モード・内部状態RESET。通常最大850G+α→設定変更後最大650G+α。**
- 朝イチA/B/C/天国天井: **650 / 550 / 450 / 88G+α**
- 設定1/2/4モード: **約53 / 1 / 11 / 35%**、設定5/6: **約52 / 1 / 11 / 36%**
- 電断/据え置き: **天井・モード・状態・有利区間CARRY_OVER**
- ガックン: **UNVERIFIED_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED**

## No.1648 — L ウルトラマンティガ
- path: `docs/real_machine_db/machines/2024-05-07_l-ultraman-tiga.md`
- manufacturer: **オッケー. / KYORAKU**
- formalModel: **LパチスロウルトラマンティガKA**
- inspectionCode: **3S1301**
- releaseDate: **2024-05-07**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / ティガチャンス→CZ→差枚数管理AT**
- settings: **1 / 2 / 4 / 5 / 6（設定3なし、設定Lあり）**
- 機械割: **97.5 / 98.6 / 102.2 / 107.1 / 113.6%**
- ティガチャンス: **約1/159 / 1/155 / 1/142 / 1/133 / 1/124**
- ボーナス: **約1/423 / 1/401 / 1/367 / 1/338 / 1/312**
- base: **約33.9G/50枚**
- netIncrease: **約2.5枚/G**
- basicPayout: **TC約40枚 / UBM12G・勝率約50% / ウルトラボーナス平均約777枚 / REG約40枚**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1648 resetBehavior v0.7
- setting change: **有利区間、TC間天井、UBM間天井、TCスルー天井、内部状態RESET。小Vベル内部ポイントをランダム再抽選。**
- carry over: **据え置きは上記要素をCARRY_OVER。表示G/小Vベル表示は0へ戻る。**
- power OFF→ON: **TC間/UBM間/スルー/状態/有利区間/小Vベル内部ポイントCARRY_OVER。表示は0G・0pt、都市ステージ開始。**
- game/ceiling: **TC間600G+α。UBM間通常最大1280G+α→設定変更後最大896G+α。TC最大7スルー後8回目でUBM濃厚。**
- mode/state: **離散的朝一モードの高信頼公開振り分けは確認できず。内部状態は設定変更RESET、据え置き/電断CARRY_OVER。**
- advantageous section: **設定変更RESET、据え置き/電断CARRY_OVER。設定変更以外の有利区間リセット後の上位CZ邪神降臨は朝一恩恵とは分離。**
- reset detection: **朝一896G+αを超えてUBM非当選なら据え置き濃厚材料。表示/ステージ単独判別は困難。本機固有ガックンは再探索後UNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED**

### 公開朝一数値 — No.1648
- 設定変更後UBM間最大天井: **896G+α**
- 通常UBM間最大天井: **1280G+α**
- TC間天井: **600G+α**
- TCスルー天井: **最大7スルー→8回目UBM濃厚**
- 小Vベル内部初期ポイント: **ランダム再抽選（具体的振り分けPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH）**
- ガックン発生率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes
- No.1647: 純増5.7枚/Gをcanonical。後年5.8枚/G表記は丸め差候補。炎炎ノ消防隊2を混入しない。
- No.1648: 市場設定は1/2/4/5/6。二次資料の一部setting3表記をcanonicalへ採用しない。`L ULTRAMAN`等の後発別機種を混入しない。

## 2024-05-07境界 — OPEN 3/5 known canonical candidates
1. 沖シーサー-30 — No.1646 DONE
2. Lパチスロ 炎炎ノ消防隊 — No.1647 DONE
3. L ウルトラマンティガ — No.1648 DONE
4. **スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION — NEXT / No.1649 candidate**
5. ニューパルサーSP4 with 太鼓の達人 — pending

境界監査メモ:
- 上記5機は複数の機種別資料で2024-05-07導入を確認済み。
- エウレカ4の旧5/13候補は、サミー公式動画「2024年5月7日より順次導入」等によりcanonicalを5/7へ補正済み。
- 全5機処理後、`2024年5月7日 / 2024-05-07 / パチスロ新台 / 導入 / 型式 / PB / 地域先行 / 段階導入` 等を再検索し追加漏れを監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1648と本handoffを再取得確認。
2. **No.1649候補 `スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION`（2024-05-07）** を性能コア + resetBehavior v0.7で処理。
3. 次点は `ニューパルサーSP4 with 太鼓の達人`。
4. 5機完了後に同日群をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED判定。
5. 遡及QAカーソルは `2007-07-09_genju-haou-t.md` まで完了。次QA対象はmain machines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理。
6. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1647 Lパチスロ 炎炎ノ消防隊
- HAZUSE: https://hazuse.com/hd/330569-2/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/738/21302/
- なな徹 モード: https://nana-press.com/kaiseki/machine/738/21299/
- マルっとWAVE: https://marutto-w.com/shindai_reference/l_enen
- Altema: https://altema.jp/pachimo/lenenreset

### No.1648 L ウルトラマンティガ
- 遊技日本/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/27698/nippon
- HAZUSE: https://hazuse.com/hd/3s1301/
- P-WORLD: https://www.p-world.co.jp/machine/database/10041
- 必勝本: https://hisshobon.com/machineinfo/83710/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/745/21528/
- なな徹 タイプチェンジゾーン: https://nana-press.com/kaiseki/machine/745/21531/
- ぽこすろっと: https://www.nankaikoya.jp/ultramantiga-kitaichi/
