更新日: 2026-09-14

## 現在地点
- recordCount: **1677**
- latestRecordAdded: **スマスロ頭文字D 2nd — No.1677**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-10-07_smart-slot-initial-d-2nd.md`
- chronologicalFrontier: **2024-10-07**
- schema: **resetBehavior v0.7**
- status: **2024-10-07_GROUP_OPEN_2_OF_AT_LEAST_5_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1676を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- mainはNo.1676 `スマスロ 鬼武者3` まで進行済みだったため既存機をやり直さず、handoff指定のNo.1677候補 `スマスロ頭文字D 2nd` を性能コア + resetBehavior v0.7で登録。
- 2024-10-07導入、ロデオ製造/サミー、型式 `Lスマスロ頭文字D2ndYR`、HAZUSE検定番号 `430357` を遊技通信/P-WORLD、HAZUSE等で照合。
- 設定1〜6のLB 1/216.6 / 1/212.3 / 1/205.0 / 1/188.9 / 1/178.4 / 1/169.7、AT 1/405.5 / 1/396.8 / 1/379.1 / 1/338.9 / 1/314.6 / 1/296.7、機械割97.9 / 98.9 / 100.8 / 106.3 / 111.0 / 114.3%、約31.0G/50枚、AT純増約2.4枚/G、擬似ボーナス約4.0枚/Gを複数資料で一致確認。
- 通常ゲーム数天井は最大599G+α。LB6スルー後の7回目LBでAT濃厚。
- 設定変更時は有利区間・天井・LBモード・LBランクをリセットし、内部ゲーム数をランダム加算。50%で299G+α天井を選択。
- 設定変更時はLBランクシナリオ優遇。1G目に1/199のリーチ目フラグ成立でLEGEND BONUS濃厚。数ゲーム間のAT直撃抽選も優遇され、その間のAT当選は初回対戦相手・高橋涼介濃厚。
- 据え置きは有利区間・天井・LBモード・LBランクを引継ぎ（なな徹比較表）。純電源OFF→ONだけを独立条件とした内部契約は、表記・型式・電源OFF ON/据え置き等へ検索語を変え、なな徹・一撃・必勝本・旧攻略資料を横断しても高信頼の機種固有明記を固定できず `UNVERIFIED_AFTER_RESEARCH`。据え置き一般から推定転記していない。
- 朝一は見た目上データが全リセットされるため、設定変更/据え置きの見た目判別は不可。設定変更時の内部Gランダム加算により天井・LBモード移行位置のズレも据え置き確定材料にできない。有利区間ランプ判別も不可。
- 機種固有ガックンは `ガックン` / `リセット判別` / 正式型式を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2024-10-07境界を再監査。グリーンべると2024-10-07更新スケジュールは `鬼武者3 / 今日から俺は!!パチスロ編 / 頭文字D 2nd` の3機を掲載。一方HAZUSEは `トリプルクラウンフォーユー` (`SトリプルクラウンX2-30`, `4S0038`) も2024-10-07導入と明記しており、地域/流通差候補として同日キューへ保持。`L 真・一騎当千` は前handoff候補のため日付/型式を次回再監査してから採否を確定する。

## No.1677 — スマスロ頭文字D 2nd
- path: `docs/real_machine_db/machines/2024-10-07_smart-slot-initial-d-2nd.md`
- manufacturer: **ロデオ製造 / サミー**
- formalModel: **Lスマスロ頭文字D2ndYR**
- inspectionCode: **430357 (HAZUSE掲載)**
- releaseDate: **2024-10-07**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 擬似ボーナス**
- payoutRate: **97.9 / 98.9 / 100.8 / 106.3 / 111.0 / 114.3%**
- LB: **1/216.6 / 1/212.3 / 1/205.0 / 1/188.9 / 1/178.4 / 1/169.7**
- AT: **1/405.5 / 1/396.8 / 1/379.1 / 1/338.9 / 1/314.6 / 1/296.7**
- base: **約31.0G/50枚**
- netIncrease: **AT約2.4枚/G / 擬似ボーナス約4.0枚/G**
- normalCeiling: **最大599G+α**
- resetCeiling: **50%で299G+α**
- settingChange: **有利区間/LBモード/LBランク/天井RESET + 内部Gランダム加算**
- carryOver: **有利区間・天井・LBモード・LBランクCARRY_OVER**
- powerCycle: **UNVERIFIED_AFTER_RESEARCH（純電断単独の機種固有明記を固定できず）**
- detection: **見た目データ/有利区間ランプでは変更判別不可、ガックンUNVERIFIED**

## 2024-10-07境界 — OPEN
1. スマスロ 鬼武者3 — No.1676 DONE
2. スマスロ頭文字D 2nd — No.1677 DONE
3. 今日から俺は!!パチスロ編 — candidate / グリーンべると同日掲載
4. L 真・一騎当千 — previous handoff candidate / date-model re-audit required
5. トリプルクラウンフォーユー — HAZUSE 2024-10-07, `SトリプルクラウンX2-30`, `4S0038`; regional/30φ distribution audit required
- P-WORLD/グリーンべると同日主要全国スケジュールは3機掲載のため、4・5は地域先行/流通差/別日扱いを含めて監査し、漏れ防止優先で境界を閉じない。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規時系列収集を優先し、今回も旧レコードへの推測更新は実施していない。
- 次回はmachines実体を日付順に確認し、幻獣覇王T直後の未QAレコードを安全に一意確定できる場合のみ遡及補完する。

## 次回再開地点
- 最新mainを再同期しNo.1677と本handoffを確認。
- **No.1678候補 `今日から俺は!!パチスロ編` — 2024-10-07** を性能コア + resetBehavior v0.7で収集。
- 続いて `L 真・一騎当千` の正式導入日/型式を再監査し、同日なら処理。`トリプルクラウンフォーユー` は30φ・地域/段階導入を確認して同日canonical採否を確定。
- 2024-10-07境界を閉じる前に、メーカー別一覧・当時新台カレンダー・HAZUSE/P-WORLD等を再照合し、PB/地域先行/別型式/延期を監査。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/28551/yugitsushin
- HAZUSE 頭文字D 2nd: https://hazuse.com/machine/pachislot/SX0085/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10097
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/84697/
- 必勝本 天井: https://hisshobon.com/machineinfo/84643/
- 必勝本 狙いドコロ: https://hisshobon.com/machineinfo/84655/
- 必勝本 有利区間: https://hisshobon.com/machineinfo/84647/
- なな徹 基本確率: https://nana-press.com/kaiseki/machine/818/23266/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/818/24492/
- なな徹 天井: https://nana-press.com/kaiseki/machine/818/24489/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/818/24494/
- 一撃 天井/朝一: https://1geki.jp/slot/ini_d2nd/3/
- グリーンべると/P-WORLD 2024-10-07新台スケジュール: https://news.p-world.co.jp/articles/29118/greenbelt
- HAZUSE トリプルクラウンフォーユー: https://hazuse.com/machine/pachislot/4S0038/
