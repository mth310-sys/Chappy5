更新日: 2026-09-14

## 現在地点
- recordCount: **1640**
- latestRecordAdded: **スマスロ ゴールデンカムイ — No.1640**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-04-08_smart-slot-golden-kamuy.md`
- chronologicalFrontier: **2024-04-08**
- frontierLatestMachine: **スマスロ ゴールデンカムイ — No.1640**
- schema: **resetBehavior v0.7**
- status: **2024-04-08_BOUNDARY_OPEN_2_OF_4_KNOWN_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1639 `ジャグラーガールズSS` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 前チャットの古い再開地点ではなく、main正本の次未処理 No.1640 `スマスロ ゴールデンカムイ` から継続。
- No.1640を性能コア + resetBehavior v0.7で新規登録。
- 2024-04-08群はknown 4候補中2機処理済み。残りは `Lうる星やつら / ストライク・ザ・ブラッド`。

## No.1640 — スマスロ ゴールデンカムイ
- path: `docs/real_machine_db/machines/2024-04-08_smart-slot-golden-kamuy.md`
- manufacturer: **銀座製造 / サミー販売**
- formalModel: **L パチスロゴールデンカムイ KR**
- inspectionCode: **330548**
- releaseDate: **2024-04-08**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 擬似ボーナス経由型 + AT直撃**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.9 / 98.6 / 100.8 / 105.4 / 108.8 / 113.3%**
- 初当り合算: **1/308.1 / 1/302.4 / 1/290.4 / 1/268.5 / 1/260.1 / 1/248.8**
- AT: **1/818.4 / 1/801.8 / 1/770.3 / 1/698.8 / 1/678.3 / 1/647.3**
- base: **約36.9〜37G/50枚**
- 純増: **黄金神威 約2.7枚/G / 擬似BONUS・真黄金神威 約4.5枚/G**
- 黄金神威: **初期100G**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1640 resetBehavior v0.7
- setting change: **有利区間、ピュウ☆天井、現在ピュウ☆、内部状態、砂金ポイントRESET。最大天井1800→1600ピュウ☆へ短縮。内部ピュウ☆加算抽選あり。砂金ポイント初期振り分け優遇。**
- carry over: **有利区間、ピュウ☆天井、現在ピュウ☆、内部状態、砂金ポイントCARRY_OVER。**
- power OFF→ON: **天井・内部状態CARRY_OVERを機種別比較資料で確認。現在ピュウ☆・砂金ポイント・有利区間の純電断単独契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。**
- game/ceiling: **通常最大1800ピュウ☆（平均約720G）→設定変更後最大1600ピュウ☆（平均約640G）。**
- mode/state: **名称付き朝一専用モード振り分けは公開固定値未確認。内部状態は設定変更RESET / 据え置きCARRY_OVER / 純電断CARRY_OVER資料あり。**
- advantageous section: **設定変更RESET / 据え置きCARRY_OVER。通常遊技中は2000枚以上獲得AT終了時の一部・エンディング終了時にもリセット。設定変更時はゴールデンロード恩恵対象外。**
- morning benefit: **天井短縮、内部ピュウ☆初期加算、砂金ポイント初期優遇、設定変更直後の特殊フリーズ条件。**
- reset detection: **なな徹は調査中。ガックン固定条件/発生率、有利区間ランプによる機種固有確定判別は再探索後もUNVERIFIED。1600ピュウ☆契約超過は据え置き推測材料。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_PARTIAL_POWER_CYCLE_SUBFIELDS**

### 公開朝一数値 — No.1640
- 設定変更時天井: **最大1600ピュウ☆ / 平均約640G**（通常1800 / 約720G）
- 初期砂金ポイント:
  - 20pt **33.6%**
  - 50pt **32.8%**
  - 80pt **28.1%**
  - 90pt **4.7%**
  - 100pt **0.8%**
- 50pt以上 **66.4%** / 80pt以上 **33.6%**
- 内部初期ピュウ☆加算数振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- 朝一専用モード振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- ガックン発生率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes — No.1640
- KAMUY BONUS継続G数は主要業界/機種DBで10G表記が中心、一部後年二次資料に11G表記があるため `CONFLICT_MINOR_BONUS_LENGTH_10G_VS_11G` を保持。
- メーカーは販売ブランド「サミー」と製造元「銀座」を分離して保存。
- 純電源OFF→ONのうち天井・内部状態以外は、設定変更/据え置き表から一般論で補完せずUNVERIFIEDを保持。

## 2024-04-08境界 — OPEN 2/4 known candidates
1. ジャグラーガールズSS — No.1639 DONE
2. スマスロ ゴールデンカムイ — No.1640 DONE
3. Lうる星やつら — NEXT
4. ストライク・ザ・ブラッド — PENDING

境界監査メモ:
- グリーンべると2024-04-08新台スケジュールが上記4パチスロを同日導入予定として掲載。
- HAZUSE新台カレンダーでも2024-04-08を通常導入境界として確認済み。
- 4候補処理後にPB・別型式・地域先行・延期/段階導入を再検索し、追加候補がなければ群CLOSED判定する。

## 次回再開地点
1. 最新mainを再同期し、No.1640と本handoffを再取得確認。
2. **No.1641候補 `Lうる星やつら` — 2024-04-08** を性能コア + resetBehavior v0.7で登録。
3. その後 `ストライク・ザ・ブラッド` を処理。
4. 4候補完了後、PB・別型式・地域先行・延期/段階導入を再監査して2024-04-08群をCLOSED判定し、次導入日境界へ進む。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1640 スマスロ ゴールデンカムイ
- サミー公式製品サイト: https://www.sammy.co.jp/japanese/product/pachislot/gol_ka/
- 遊技日本 新台発表: https://yugi-nippon.com/pachinko-new-machine/post-62536/
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/26663/nippon
- 遊技通信 / P-WORLD: https://news.p-world.co.jp/articles/26649/yugitsushin
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9987
- HAZUSE機種DB: https://hazuse.com/machine/pachislot/SX0069/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/712/20696/
- なな徹 砂金ポイント: https://nana-press.com/kaiseki/machine/712/20704/
- 一撃 天井・朝一: https://1geki.jp/slot/l_golden_kamui/3/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/206476/
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2600/2
- 必勝本 BONUS解析: https://hisshobon.com/machineinfo/82946/
- Altema 朝一・電源ON/OFF: https://altema.jp/pachimo/lkamui
- ぽこすろっと: https://www.nankaikoya.jp/goldenkamuy-kitaichi/

### 境界 / 次回候補
- グリーンべると 2024-04-08導入スケジュール: https://news.p-world.co.jp/articles/27485/greenbelt
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
