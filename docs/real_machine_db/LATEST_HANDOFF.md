更新日: 2026-09-14

## 現在地点
- recordCount: **1702**
- latestRecordAdded: **Lにゃんこ大戦争 超神速 — No.1702**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-01-20_l-nyanko-daisensou-choushinsoku.md`
- chronologicalFrontier: **2025-01-20**
- schema: **resetBehavior v0.7**
- status: **2025-01-20_GROUP_OPEN_3_OF_6_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、既存直前レコードを再同期。INDEXは旧表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1701 `A-SLOT+ ディスクアップ ULTRAREMIX` を追加し、性能コア + resetBehavior v0.7を収録。
- No.1701保存直後、mainにNo.1702 `Lにゃんこ大戦争 超神速` の追加コミットが入ったことをHEAD再取得で検知。実体レコードを再取得して内容を確認し、本handoffをNo.1702まで同期した。
- 遡及QAは既処理カーソル `2007-07-09_genju-haou-t.md` の直後にある最初のresetBehavior欠損レコードを安全に一意確定できなかったため、旧レコードへの推測更新は行っていない。

## No.1701 — A-SLOT+ ディスクアップ ULTRAREMIX
- path: `docs/real_machine_db/machines/2025-01-20_a-slot-plus-disc-up-ultraremix.md`
- manufacturer: **Sammy（販売/ブランド） / タイヨーエレック（製造）**
- formalModel: **L DISCUPウルトラリミックス XR**
- inspectionCode: **4S1442**
- releaseDateCanonical: **2025-01-20**
- settings: **1 / 2 / 5 / 6**（設定Lは通常性能比較から分離）
- payoutRate: **99.3 / 100.2 / 103.6 / 107.7%**、完全攻略 **103.0 / 103.8 / 107.2 / 111.5%**
- bonus: **BIG 1/287.2→1/260.9 / REG 1/495.3→1/334.1 / 合算1/181.8→1/146.5**
- base: **約32.2G/50枚（設定1）**
- netIncrease: **DZ/DT 約0.5枚/G / DTR 約1.5枚/G / 疑似BONUS 約6.5枚/G**
- ceiling: **非搭載**
- settingChange: **有利区間RESET / 通常時へ / 演出モードREMIX / メニュー初期化 / ガックンなし**
- carryOver: **据え置きは有利区間CARRY_OVER**
- powerCycle: **ガックンなし / REMIXへ / ボーナス・AT中の純電断は当該状態引継ぎ / メニュー初期化**
- resetDetection: **ガックン・有利区間ランプ・演出モードでは変更確定判別不可**
- publicMorningNumbers: **短縮天井N/A。設定変更専用モード/状態振り分け・当選優遇率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**
- oldValueQA: **設定1 BIG 1/282.2は今回根拠再固定不能。複数高信頼資料一致の1/287.2をcanonical。**

## No.1702 — Lにゃんこ大戦争 超神速
- path: `docs/real_machine_db/machines/2025-01-20_l-nyanko-daisensou-choushinsoku.md`
- manufacturer: **KYORAKU**
- formalModel: **Lにゃんこ大戦争・超神速KB**
- inspectionCode: **4S1157**
- releaseDateCanonical: **2025-01-20**
- settings: **1 / 2 / 4 / 5 / 6**（設定L搭載）
- payoutRate: **97.5 / 98.3 / 104.3 / 109.4 / 114.9%**
- initialHit: **CZ 1/544→1/461 / AT 1/395→1/303**
- base: **約32.5G/50枚**
- netIncrease: **メインAT/上位AT 約9.0枚/G**
- normalCeiling: **1122G+α**
- resetCeiling: **922G+α**（200G短縮）
- specialCeiling: **222G+αの振り分けあり、設定別率未公開**
- settingChange: **天井G RESET / モード再抽選 / 狂乱状態RESET / 有利区間RESET / 勝利回数RESET解析あり**
- carryOver: **据え置きは天井G・モード・狂乱状態・有利区間・勝利回数を引継ぎ**
- powerCycle: **天井G・モード・狂乱状態を引継ぎ。表示は初期化系挙動があるが内部Gは引継ぎ**
- resetDetection: **設定変更/電断で共通する表面挙動が多く単独判別不可。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH**
- conflict: **922Gリセット天井の金勝撫缶恩恵について解析確定情報と一部実戦考察が競合。解析確定情報をcanonicalとしCONFLICT注記保持。**

## 2025-01-20境界 — OPEN 3/6 known canonical
1. スマート沖スロ スターハナハナ — No.1700 DONE
2. A-SLOT+ ディスクアップ ULTRAREMIX — No.1701 DONE
3. Lにゃんこ大戦争 超神速 — No.1702 DONE
4. Lパチスロ シン・エヴァンゲリオン — NEXT
5. L島娘 — QUEUED
6. 七つの魔剣が支配する — QUEUED
- 6件処理後にPB・地域先行・別型式・延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1701・No.1702と本handoffを確認。
- **No.1703候補 `Lパチスロ シン・エヴァンゲリオン` — 2025-01-20** から再開する。
- 続いて `L島娘 → 七つの魔剣が支配する` を正式型式・境界監査しながら処理する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回、recursive tree/API検索を行ったがカーソル直後の最初のresetBehavior欠損レコードを安全に一意確定できなかったため、誤更新を避け旧レコードは変更していない。
- 次QAリレーでは実体ファイル順 + resetBehavior欠損確認を組み合わせて後続1件を確定する。既存COMPLETE_COREは維持する。

## 今回の主要ソース
取得日: 2026-09-14
### A-SLOT+ ディスクアップ ULTRAREMIX
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004620/
- HAZUSE: https://hazuse.com/machine/pachislot/4S1442/
- なな徹 基本性能: https://nana-press.com/kaiseki/machine/883/25662/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/883/26893/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/883/26894/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/85471/
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2670/2
- Pachibee: https://www.pachibee.jp/machines/about/224120006
- Ativo: https://ativo.jp/2024/11/22/l-%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97-ultraremix/

### Lにゃんこ大戦争 超神速
- KYORAKU公式: https://www.kyoraku.co.jp/product_site/2024/battlecats_choushinsoku/
- HAZUSE: https://hazuse.com/machine/pachislot/4S1157/
- 必勝本: https://hisshobon.com/machineinfo/85848/
- 1geki: https://1geki.jp/slot/l_nyanko2/3/
- パチマガ: https://pachimaga.com/free/article/20250118/056071.php

### 次境界
- 2025-01-20次対象: `Lパチスロ シン・エヴァンゲリオン`
