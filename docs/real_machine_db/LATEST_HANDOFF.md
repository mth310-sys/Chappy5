更新日: 2026-09-12

## 現在地点
- recordCount: **1413**
- latestRecordAdded: **ORIGINAL SLOT4 PLUS — No.1413**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-05-10_original-slot4-plus.md`
- chronologicalFrontier: **2021-05-10**
- frontierLatestMachine: **ORIGINAL SLOT4 PLUS — No.1413**
- schema: **resetBehavior v0.7**
- status: **2021-05-10_GROUP_CLOSED_AFTER_PB_AND_ALIAS_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1412「豪炎高校應援團 檄」を再取得して開始。
- `INDEX.md` は旧19件表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを正本として進捗判定。
- mainはNo.1412まで処理済みで、handoff指定の次候補 `Sオリスロ4AA / ORIGINAL SLOT4 PLUS` から継続。
- No.1413「ORIGINAL SLOT4 PLUS」を追加。JPSの6号機ノーマルPB、型式 `Sオリスロ4AA`、検定番号 `0S1493`、2021-05-10導入をP-WORLDと2021年当時資料で固定。
- 設定は5 / 6 / Pの3段階。BIG/REG確率、一般遊技時出玉率と成立小役全取得/完全攻略時出玉率を定義分離して保存。
- 50枚ベースは2021年版の直接資料で固定できなかったが、同一正式型式 `Sオリスロ4AA` の後年PB「メルヘンクエスト」で約36G/50枚、同一BIG/REG・獲得枚数・攻略出率を確認したため型式共通性能値として採用。根拠を明記し信頼度をANALYSIS_SINGLE / SAME_FORMAL_MODEL_CROSSCHECKとした。
- resetBehaviorはノーマル機のため天井・AT/ARTモード・有利区間進行は非該当。後年リセット一覧でも「リセット恩恵は特になし」、天井一覧でも「天井非搭載」を確認。
- PLUSシステムの累積ポイント/ステータスについて、設定変更・据え置き・純電断時の初期化/保持契約は表記揺れ・型式名・後年同型式PBまで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン/朝一表示による設定変更判別も十分な再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 同一型式 `Sオリスロ4AA` は2022-02-21に「メルヘンクエスト」として別法人PB再展開が確認される。2021年ORIGINAL SLOT4 PLUSの単純別名にはせず、後年PB派生として分離する方針を明記。
- 2021-05-10群を再監査。一般導入カレンダーでは Wake Up, Girls！ / SLOTアルドノア・ゼロ / 豪炎高校應援團 檄の3機が一致し、PB再監査でORIGINAL SLOT4 PLUSを補完。2021年攻略誌・6号機全機種一覧・PB資料も横断し、同日追加候補を今回新たに確認できなかったため群をCLOSED。
- 遡及resetBehavior QAは本線優先のため今回は進めず、既存カーソルを維持。

## No.1413 — ORIGINAL SLOT4 PLUS
- path: `docs/real_machine_db/machines/2021-05-10_original-slot4-plus.md`
- manufacturer: **JPS（ジェイピーエス）**
- formalModel: **Sオリスロ4AA**
- certificationNumber: **0S1493**
- releaseDate: **2021-05-10**
- generation/system: **6号機 / ノーマル / 完全告知 / 技術介入・小役フォロー型 / PB**
- payoutRateBySetting（一般遊技時）: **設定5 99.4% / 設定6 100.6〜100.7% / 設定P 102.3〜102.4%**
- payoutRateBySetting（成立小役全取得/完全攻略）: **設定5 101.6〜101.7% / 設定6 103.1〜103.2% / 設定P 105.1〜105.2%**
- BIG: **1/172.5 / 1/218.5 / 1/218.5**
- REG: **1/436.9 / 1/218.5 / 1/218.5**
- 合算: **1/123.7 / 1/109.2 / 1/109.2**
- baseGamesPer50: **約36G/50枚（同一型式後年PBによる型式共通値クロスチェック）**
- basicPayout: **BIG 195枚 / REG 104枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_APPLICABLE_RESET_CORE_WITH_PLUS_POINT_POWER_STATE_UNVERIFIED**

### resetBehavior v0.7 — No.1413
- 設定変更: 天井/ATモード/有利区間リセット恩恵は構造上非該当。公開整理ではリセット恩恵特になし。
- 据え置き: 天井・ゲーム数モード非搭載。PLUS累積pt/ステータス保持契約は未固定。
- 純電断: 天井・AT状態等は非該当。PLUS累積pt/ステータス保持/初期化は未固定。
- gameCounterReset: NOT_APPLICABLE（天井非搭載）。
- ceilingAfterReset: NOT_APPLICABLE / 天井非搭載。
- modeAfterReset: NOT_APPLICABLE。PLUSステータスは遊技補助状態として別扱い。
- stateAfterReset: 出玉用通常/高確は非該当。PLUSポイントのみ未固定。
- advantageousSectionReset: NOT_APPLICABLE（ノーマル機）。
- resetBenefits: 公開資料上「特になし」。
- resetPenalties: 定量的公開なし。PLUSポイント初期化有無は推測禁止で未固定。
- resetDetection: 本機固有ガックン/朝一表示は再探索後も未固定。
- numericResetData: `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。

## 2021-05-10群 — CLOSED
1. **パチスロ Wake Up, Girls！Seven Memories — No.1410 / DONE**
2. **SLOTアルドノア・ゼロ — No.1411 / DONE**
3. **豪炎高校應援團 檄 — No.1412 / DONE**
4. **ORIGINAL SLOT4 PLUS — No.1413 / DONE / JPS PB**

- 一般新台カレンダーの3機に対し、PB監査でORIGINAL SLOT4 PLUSを補完。
- 2021年当時攻略誌掲載、P-WORLD、PB/6号機一覧、後年年鑑まで再監査し、2021-05-10導入の追加スロット候補を今回新たに確認できずCLOSED。
- 2022年「メルヘンクエスト」は同一型式だが別法人PB・別導入日なので2021-05-10群へ重複追加しない。

## 次回本線の再開地点
- 最新main再同期後、**2021-05-24「鬼浜爆走紅蓮隊 狂闘旅情編」— No.1414候補**から継続。
- 先行確認: ベルコ / 6.1号機AT / 2021-05-24 / AT約2.8枚/G / 約40G/50枚 / 最大768G+α。
- 同日群の既知候補は少なくとも **鬼浜爆走紅蓮隊 狂闘旅情編 / チバリヨ-30**。一般新台カレンダーではこの2機が5/24群として一致。
- 鬼浜処理後、チバリヨ-30へ進み、全メーカー・地域機・PB・別型式・延期差を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1413追加 commit: `9a6da5e1b5348c69853d3b4e6e9e6dc4cecd94a1`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1413 ORIGINAL SLOT4 PLUS
- https://www.p-world.co.jp/machine/database/9395
- https://psumma.jp/pachislo/51658/
- https://sulocale.sulopachinews.com/archives/20825
- https://www.fujisan.co.jp/product/1219887/b/2100520/
- https://pachisuro100.com/reset/
- https://pachisuro100.com/tenjyo/
- https://pachinko-curation.com/28698/
- https://hazuse.com/machine/pachislot/SX0044/
- https://ameblo.jp/sapporoslotschool/entry-12696079237.html

### 2021-05-10群 / 次群監査
- https://ichikatsu.com/newslot/
- https://www.p-world.co.jp/machine/database/9395
- https://www.fujisan.co.jp/product/1219887/b/2100520/
- https://ameblo.jp/sapporoslotschool/entry-12696079237.html
- https://chonborista.com/slot/belko-slot/134651/
- https://slothack.net/matome/32288/
