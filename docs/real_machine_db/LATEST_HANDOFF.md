更新日: 2026-09-14

## 現在地点
- recordCount: **1639**
- latestRecordAdded: **ジャグラーガールズSS — No.1639**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-04-08_juggler-girls-ss.md`
- chronologicalFrontier: **2024-04-08**
- frontierLatestMachine: **ジャグラーガールズSS — No.1639**
- schema: **resetBehavior v0.7**
- status: **2024-04-08_BOUNDARY_OPEN_1_OF_4_KNOWN_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1638 `ドラゴンハナハナ～閃光～` 25Φ版を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 2024-03-18群がCLOSED 4/4であることを再確認し、次通常導入境界2024-04-08へ前進。
- 業界新台スケジュールを再監査し、同日known候補を `ジャグラーガールズSS / スマスロ ゴールデンカムイ / Lうる星やつら / ストライク・ザ・ブラッド` の4機として確認。
- No.1639 `ジャグラーガールズSS` を性能コア + resetBehavior v0.7で新規登録。

## No.1639 — ジャグラーガールズSS
- path: `docs/real_machine_db/machines/2024-04-08_juggler-girls-ss.md`
- manufacturer: **北電子**
- formalModel: **SジャグラーガールズSS-KH**
- inspectionCode: **330257**
- releaseDate: **2024-04-08**
- generation: **6号機 / メダル機**
- systemType: **ノーマルAタイプ / 完全告知**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.0 / 97.9 / 99.9 / 102.1 / 104.0 / 107.5%**
- BIG: **1/273.1 / 1/270.8 / 1/260.1 / 1/250.1 / 1/243.6 / 1/226.0**
- REG: **1/381.0 / 1/350.5 / 1/316.6 / 1/281.3 / 1/270.8 / 1/252.1**
- 合算: **1/159.1 / 1/152.8 / 1/142.8 / 1/132.4 / 1/128.3 / 1/119.2**
- base: **約42G/50枚**
- BIG: **約240枚**
- REG: **約96枚**
- coreConfidence: **OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1639 resetBehavior v0.7
- setting change: **天井/AT/CZ/周期はN/A。後年更新の機種専用朝一資料ではクレジット・BET状態・スペシャルBGM変化条件RESET。設定変更後（同一設定打ち変え含む）朝一1G目はリールガックンあり。**
- carry over: **天井等はN/A。据え置きはスペシャルBGM変化条件CARRY_OVER。前日+当日G数とBGM条件一致時は据え置き推測材料だが、プレミア演出由来BGMがあるため確定ではない。**
- power OFF→ON: **ガックンなし / クレジット・BET状態・スペシャルBGM変化条件CARRY_OVER。**
- game/ceiling: **天井非搭載。設定変更専用短縮天井N/A。スペシャルBGM用ゲーム数条件は設定変更RESET / 据え置き・純電断CARRY_OVER。**
- mode/state: **AT/CZ型モード・通常/高確状態は本DB粒度でN/A。**
- advantageous section: **ノーマルAタイプのため朝一客行動に影響するAT型有利区間天井/モード管理はN/A at mission granularity。**
- morning benefit: **設定変更専用の当選率優遇・天井短縮・朝一モードはN/A。**
- reset detection: **ガックン + BGM条件引継ぎが主要推測材料。ガックンは個体差/店側対策あり。固定発生率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_LATER_ANALYSIS_UPDATE_AND_NO_PUBLIC_NUMERIC_RESET_RATE**

## conflicts / quality notes — No.1639
- 天井はP-WORLD、パチマガスロマガ、HAZUSE系、必勝本の専用「天井&設定変更」ページで非搭載一致。
- 一方、必勝本の旧基本スペックメタ欄にのみ「天井 搭載」とする表記が残るため `CONFLICT_SOURCE_METADATA_CEILING_FLAG` を保存し、canonicalは天井非搭載。
- 必勝本の2024-04-05当時資料はガックン/BGMを「現在調査中」としていたが、後年更新のパチマガスロマガFREEでは具体契約が公開されたため、矛盾値ではなく `LATER_ANALYSIS_UPDATE` として扱う。
- ガックン固定発生率は検索語・正式型式・メーカー・シリーズ名・朝一/設定変更/据え置き/電源OFF ONを変えて再探索しても公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 2024-04-08境界 — OPEN 1/4 known candidates
1. ジャグラーガールズSS — No.1639 DONE
2. スマスロ ゴールデンカムイ — NEXT
3. Lうる星やつら — PENDING
4. ストライク・ザ・ブラッド — PENDING

境界監査メモ:
- グリーンべると2024-04-08新台スケジュールが上記4パチスロを同日導入予定として掲載。
- HAZUSE新台カレンダーでも2024-04-08を次通常導入境界として確認。
- 4候補処理後にPB・別型式・地域先行・延期/段階導入を再検索し、追加候補がなければ群CLOSED判定する。

## 次回再開地点
1. 最新mainを再同期し、No.1639と本handoffを再取得確認。
2. **No.1640候補 `スマスロ ゴールデンカムイ` — 2024-04-08** を性能コア + resetBehavior v0.7で登録。
3. その後 `Lうる星やつら` → `ストライク・ザ・ブラッド` の順に同日群を継続。
4. 4候補完了後、PB・別型式・地域先行・延期/段階導入を再監査して2024-04-08群をCLOSED判定し、次導入日境界へ進む。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1639 ジャグラーガールズSS
- 北電子公式 製品情報: https://www.kitadenshi.co.jp/slot/jugglergirlsss/
- 北電子公式 検定情報: https://www.kitadenshi.co.jp/slot-kentei/jugglergirlsss/
- 遊技日本 / P-WORLD 発表・型式: https://news.p-world.co.jp/articles/26946/nippon
- 遊技通信 / P-WORLD 導入日・型式: https://news.p-world.co.jp/articles/26965
- アミューズメントジャパン / P-WORLD: https://news.p-world.co.jp/articles/26931/amusement
- グリーンべると / P-WORLD 発表: https://news.p-world.co.jp/articles/26934/greenbelt
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10009
- HAZUSE機種DB: https://hazuse.com/hd/330257-2/
- パチマガスロマガ基本情報: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/124/kh01.php
- パチマガスロマガFREE 朝イチ・設定変更: https://pachimaga.com/free/mach/maker-s/kitac/064363.php
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83119/
- 必勝本 コイン持ち実戦値: https://hisshobon.com/machineinfo/83123/
- ぽこすろっと: https://www.nankaikoya.jp/jugglergirls-ss/

### 境界 / 次回候補
- グリーンべると 2024-04-08導入スケジュール: https://news.p-world.co.jp/articles/27485/greenbelt
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
