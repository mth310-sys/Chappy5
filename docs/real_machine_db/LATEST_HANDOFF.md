更新日: 2026-09-14

## 現在地点
- recordCount: **1685**
- latestRecordAdded: **スマスロ モンスターハンターライズ — No.1685**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-11-18_monster-hunter-rise.md`
- chronologicalFrontier: **2024-11-18**
- schema: **resetBehavior v0.7**
- status: **2024-11-18_BOUNDARY_OPEN_2_OF_3_CANONICAL_PROCESSED_WITH_CHOUKASAI_DATE_CONFLICT_QA_DEBT**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1684を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1685 `スマスロ モンスターハンターライズ`（2024-11-18）を追加。
- 2024-11-18 canonical群は2/3処理済み。残りは `スマート沖スロ 超華祭`。
- `スマート沖スロ 超華祭` はALL7・Pachibee・PachiSeven・一撃等で2024-11-18導入が優勢。一方、マルっとWAVEに11/05、K-Naviに11/04表記があるため、canonicalは11/18に置きつつ `CONFLICT_RELEASE_DATE_2024-11-18_VS_11-05_VS_11-04` を境界QA debtとして維持する。

## No.1684 — Lダブルアタック2 with OZS-1000＆RAPHAEL
- path: `docs/real_machine_db/machines/2024-11-18_double-attack2-ozs1000-raphael.md`
- manufacturer: **オーイズミ**
- formalModel: **Lダブルアタック2EX**
- inspectionCode: **430240**
- releaseDate: **2024-11-18**
- payoutRate: **97.8 / 99.3 / 101.9 / 105.0 / 108.7 / 111.5%**
- AT初当り: **1/259.9 / 1/250.3 / 1/237.1 / 1/217.4 / 1/200.2 / 1/189.5**
- base setting1-6: **約33.4 / 33.7 / 34.0 / 34.4 / 34.7 / 35.0G/50枚**
- netIncrease: **通常AT 約2.5枚/G / 上位AT 約5.0枚/G**
- normalGameCeiling: **999G+α**
- normalSymbolCeiling: **最大63回**
- resetSymbolCeiling: **最大47回**
- settingChange: **有利区間・ゲーム数/シンボル天井・内部状態・モードRESET / 通常B以上**
- carryOver: **有利区間・天井・状態・モード引継ぎ**
- powerCycle: **ゲーム数天井・シンボル回数・状態・モード・有利区間引継ぎ**
- detection: **朝一47シンボル超AT非当選は据え置き濃厚材料 / 開始ステージ・ガックンUNVERIFIED**

## No.1685 — スマスロ モンスターハンターライズ
- path: `docs/real_machine_db/machines/2024-11-18_monster-hunter-rise.md`
- manufacturer: **アデリオン製造 / 総発売元 フィールズ**
- formalModel: **LモンスターハンターライズXA**
- inspectionCode: **430243**
- releaseDate: **2024-11-18**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.8 / 100.3 / 105.4 / 110.1 / 114.3%**
- AT初当り: **1/309.5 / 1/301.4 / 1/290.8 / 1/256.4 / 1/237.1 / 1/230.8**
- base: **約32.7G/50枚**
- netIncrease: **約2.7枚/G / 紫7 約4.0枚/G**
- basicAT: **BAR 25G+α / 赤7 40G or 50G+α / 紫7 60G or 100G+α / 平均討伐期待度約52%**
- normalGameCeiling: **999G+α**
- normalQuestCeiling: **AT間7回目クエスト**
- resetGameCeiling: **999G+α（固定短縮なし）**
- settingChange: **有利区間・天井・クエスト進行・内部状態・ポイントモード・クエストテーブルRESET/再抽選 / 内部状態通常開始**
- carryOver: **有利区間・天井・状態・各モード/テーブル・内部ポイント等引継ぎ**
- powerCycle: **有利区間・天井・内部状態・ポイントモード・クエストテーブル・リプレイ回数引継ぎ / カムラptは表示0だが内部引継ぎ**
- resetPointMode: **B以上濃厚**
- resetQuestTable: **75%以上で天国準備以上**
- resetInternalKamuraPoints: **ランダム加算（具体値未公表）**
- resetInternalReplayCount: **ランダム加算（具体値未公表）**
- firstAtGoldCrownRate: **50%**
- resetWirebugPoints: **0〜4ptランダム**
- detection: **液晶ポイント/リプレイ表示だけでは変更判別困難 / ガックンUNVERIFIED**
- advantageousSectionResetBenefitCaution: **通常営業中の有利区間リセット後「百竜ノ淵源チャレンジ」は設定変更時除外のため朝一恩恵に混入しない**
- missing: **設定変更時ポイントモードB/C/D正確振り分け、天国準備/天国内訳、内部加算量、電断時開始ステージ、ガックン条件/発生率**

## 2024-11-05境界 — CANONICAL CLOSED 2/2
1. L 新・必殺仕置人 回胴 CRASH SPEC — No.1682 DONE
2. Lバンドリ！ — No.1683 DONE
- `スマート沖スロ 超華祭` の11/05表記資料は存在するが、複数の機種専用/導入一覧で11/18が一致するため本線は11/18へ置く。日付競合は消さずQA debtとして保持。

## 2024-11-18境界 — OPEN 2/3
1. Lダブルアタック2 with OZS-1000＆RAPHAEL — No.1684 DONE
2. スマスロ モンスターハンターライズ — No.1685 DONE
3. スマート沖スロ 超華祭 — NEXT / RELEASE DATE CONFLICT QA
- 3機処理後、PB/地域先行/別型式/延期・段階導入を再監査してCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規時系列収集を優先し、今回も旧レコードへの推測更新は実施していない。

## 次回再開地点
- 最新mainを再同期しNo.1684/1685と本handoffを確認。
- **No.1686候補 `スマート沖スロ 超華祭` — canonical 2024-11-18 / 導入日CONFLICT 11/18 vs 11/05 vs 11/04** から性能コア + resetBehavior v0.7を収集する。
- レコード内で導入日競合を平均化・黙殺せず、各根拠を保持する。
- No.1686処理後、当時新台カレンダー・メーカー別一覧・PB/地域先行/別型式/延期を再監査して2024-11-18境界をCLOSED判定し、次境界へ進む。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
### スマスロ モンスターハンターライズ
- 円谷フィールズホールディングス/発売告知: https://origin.digitalpr.jp/r/95036
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/29237/nippon
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/29169/yugitsushin
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/29479/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/SX0089/
- 一撃 基本: https://1geki.jp/slot/l_mh_rize/
- 一撃 天井/朝一: https://1geki.jp/slot/l_mh_rize/3/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aderion_slot/05/kh01.php
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/837/25311/
- なな徹 狙い目/判別: https://nana-press.com/kaiseki/machine/837/25431/
- なな徹 AT性能: https://nana-press.com/kaiseki/machine/837/25321/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10138
- スロベース 電源OFF→ON比較: https://slobase.jp/machines/monster-hunter
- 一勝家 電源ON/OFF比較: https://itikatu.jp/monsterhunter-rise/
- スロぱちクエスト: https://www.slopachi-quest.com/article/resets/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/220896/
### 境界
- ALL7 2024年11月: https://www.all7.jp/plans/index/2024/11
- マルっとWAVE（超華祭11/05表記）: https://marutto-wave.jp/new_machine/20241105/
