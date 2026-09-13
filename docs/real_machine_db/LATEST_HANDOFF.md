更新日: 2026-09-14

## 現在地点
- recordCount: **1642**
- latestRecordAdded: **スマスロ ストライク・ザ・ブラッド — No.1642**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-04-08_smartslot-strike-the-blood.md`
- chronologicalFrontier: **2024-04-08**
- frontierLatestMachine: **スマスロ ストライク・ザ・ブラッド — No.1642**
- schema: **resetBehavior v0.7**
- status: **2024-04-08_BOUNDARY_CLOSED_4_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1641 `Lパチスロうる星やつら` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- main正本の次未処理 No.1642 `スマスロ ストライク・ザ・ブラッド` から継続。
- No.1642を性能コア + resetBehavior v0.7で新規登録。
- 2024-04-08群はグリーンべると同日スケジュールの4候補を全処理。表記揺れ・PB・別型式・地域先行/段階導入を再検索し、同日追加canonical候補を今回確認できなかったため4/4 CLOSED。
- ただし次境界監査で、主要4/22スケジュールより前の **2024-04-15 `パチスロ金のかぼちゃ`** をHAZUSE・一撃・パチマガスロマガ等で確認。次回は4/15を飛ばさずNo.1643候補として処理する。

## No.1642 — スマスロ ストライク・ザ・ブラッド
- path: `docs/real_machine_db/machines/2024-04-08_smartslot-strike-the-blood.md`
- manufacturer: **エンターライズ**
- formalModel: **Lストライク・ザ・ブラッドZC**
- inspectionCode: **3S1731**
- releaseDate: **2024-04-08**
- generation: **6.5号機 / スマスロ**
- systemType: **A+AT / リアルボーナス+セット継続型AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **98.2 / 99.1 / 101.0 / 105.1 / 107.5 / 110.1%**
- ボーナス: **全設定共通1/199.8**
- AT: **1/311.9 / 1/295.7 / 1/273.3 / 1/223.7 / 1/201.8 / 1/178.6**
- base: **約35G/50枚**
- AT純増: **約1.4枚/G**
- BIG: **約114枚**
- カレイドBONUS: **約47枚**
- AT: **1セット30G / 平均継続率約80%**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1642 resetBehavior v0.7
- setting change: **有利区間・ボーナス/AT間天井・内部状態RESET。有利区間移行時天井振り分けを再抽選し最大399G。エピソードポイント30pt以上を付与。**
- carry over: **有利区間・天井・内部状態CARRY_OVER。設定変更時専用の有利区間移行恩恵は再抽選されない。**
- power OFF→ON: **天井・内部状態・有利区間CARRY_OVER。液晶表示G/開始ステージの機種固有復帰契約は再探索後もUNVERIFIED。**
- game/ceiling: **通常最大599G。設定変更を含む有利区間移行時は599G振り分け0%で最大399G。**
- mode/state: **独立した朝一通常モードは確認されず、天井G数振り分けが朝一差を形成。内部状態は設定変更RESET / 据え置き・純電断CARRY_OVER。**
- advantageous section: **設定変更RESET / 据え置き・純電断CARRY_OVER。移行時に最大399G化+エピソードポイント30pt以上。**
- morning benefit: **最大599→399G短縮 + エピソードポイント30pt以上。両方とも設定別公開振り分けあり。**
- reset detection: **朝一ボーナス/AT間で399Gを超えても天井ATに到達しない挙動は据え置き推測材料。本機固有ガックン・有利区間ランプ確定判別・開始ステージ差は再探索後もUNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED**

### 公開朝一数値 — No.1642
#### 有利区間移行時の天井G数振り分け
- 設定1: **99G 0.4 / 199G 0.4 / 299G 0.4 / 399G 98.8 / 599G 0%**
- 設定2: **0.8 / 1.2 / 1.6 / 96.5 / 0%**
- 設定3: **1.2 / 1.6 / 2.3 / 94.9 / 0%**
- 設定4: **2.3 / 3.1 / 4.7 / 89.8 / 0%**
- 設定5: **2.3 / 3.1 / 4.7 / 89.8 / 0%**
- 設定6: **3.1 / 4.7 / 6.3 / 85.9 / 0%**

#### 有利区間移行時エピソードポイント
- 設定1: **30pt 99.6 / 50pt 0.4%**
- 設定2: **98.4 / 1.6%**
- 設定3: **96.9 / 3.1%**
- 設定4: **93.8 / 6.3%**
- 設定5: **87.5 / 12.5%**
- 設定6: **87.5 / 12.5%**

## conflicts / quality notes — No.1642
- 性能主要値の競合は今回確認なし。
- 初期の攻略記事には「リセットによる天井短縮はおそらくない」とする推測記事が存在するが、後発の必勝本・一撃・なな徹等で有利区間移行時の最大399G振り分けが具体的に公開されているため、古い推測はcanonical採用しない。
- 電源OFF→ON時の液晶表示G/開始ステージ、設定変更時の内部状態具体的初期振り分け、本機固有ガックン、有利区間ランプ確定判別のみ、検索語/資料系統変更後も固定できず欠損扱い。

## 2024-04-08境界 — CLOSED 4/4 known canonical candidates
1. ジャグラーガールズSS — No.1639 DONE
2. スマスロ ゴールデンカムイ — No.1640 DONE
3. Lパチスロうる星やつら — No.1641 DONE
4. スマスロ ストライク・ザ・ブラッド — No.1642 DONE

境界監査メモ:
- グリーンべると2024-04-08新台スケジュールが上記4パチスロを同日導入として掲載。
- 4機処理後、機種名/メーカー/型式・PB・先行導入・段階導入・2024-04-08/04-15の検索語を変えて再監査。
- 4/8追加canonical候補は今回固定できず、同日群をCLOSED。
- その再監査で4/15導入の `パチスロ金のかぼちゃ`（SキンノカボチャAA / 3S1654 / バルテック）を発見。4/22 `押忍！番長4` より前なので、次回は4/15を優先する。

## 次回再開地点
1. 最新mainを再同期し、No.1642と本handoffを再取得確認。
2. **No.1643候補 `パチスロ金のかぼちゃ` — 2024-04-15** を性能コア + resetBehavior v0.7で登録。
3. 4/15同日候補をメーカー/型式/PB/地域先行・段階導入まで再監査し、群CLOSED判定する。
4. その次の既知境界は **2024-04-22 `押忍！番長4`**。4/15監査完了後に進む。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1642 スマスロ ストライク・ザ・ブラッド
- 円谷フィールズHD / 発売告知: https://digitalpr.jp/r/83301
- 遊技日本 / P-WORLD ティザー: https://news.p-world.co.jp/articles/26809/nippon
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/26820/nippon
- 遊技日本 / P-WORLD プレス発表: https://news.p-world.co.jp/articles/27365/nippon
- 遊技通信 / P-WORLD: https://news.p-world.co.jp/articles/27036/yugitsushin
- Amusement Japan / P-WORLD: https://news.p-world.co.jp/articles/27125/amusement
- HAZUSE: https://hazuse.com/machine/pachislot/3S1731/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/29/kh01.php
- 必勝本 基本スペック/設定変更: https://p.hisshobon.jp/vpage/2614/2
- 必勝本 天井抽選: https://hisshobon.com/machineinfo/83251/
- 必勝本 エピソードポイント: https://p.hisshobon.jp/machine/4286/1/102056
- なな徹 朝一: https://nana-press.com/kaiseki/machine/724/20438/
- なな徹 設定差: https://nana-press.com/kaiseki/machine/724/20435/
- 一撃: https://1geki.jp/slot/l_strike_the_blood/3/

### 境界 / 次回候補
- グリーンべると 2024-04-08/04-22スケジュール: https://news.p-world.co.jp/articles/27485/greenbelt
- HAZUSE パチスロ金のかぼちゃ: https://hazuse.com/machine/pachislot/3S1654/
- HAZUSE旧機種ページ: https://hazuse.com/hd/3s1654/
- 一撃 パチスロ金のかぼちゃ: https://1geki.jp/slot/s_kinnokabocha/
- パチマガスロマガ 金のかぼちゃ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/66/kh01.php
