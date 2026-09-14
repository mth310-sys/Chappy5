更新日: 2026-09-14

## 現在地点
- recordCount: **1701**
- latestRecordAdded: **A-SLOT+ ディスクアップ ULTRAREMIX — No.1701**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-01-20_a-slot-plus-disc-up-ultraremix.md`
- chronologicalFrontier: **2025-01-20**
- schema: **resetBehavior v0.7**
- status: **2025-01-20_GROUP_OPEN_2_OF_6_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、No.1700を再同期。INDEXは旧表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1701 `A-SLOT+ ディスクアップ ULTRAREMIX` を追加し、性能コア + resetBehavior v0.7を収録。
- 型式 `L DISCUPウルトラリミックス XR`、検定番号 `4S1442`、導入日2025-01-20、設定1/2/5/6、ボーナス確率・機械割・32.2G/50枚・純増を複数系統で照合。
- 設定1 BIGの旧メモ `1/282.2` は今回一次・準一次根拠を再固定できず、Amusement Japan・なな徹・必勝本・HAZUSE/Ativo系で一致する `1/287.2` をcanonicalとし、旧値は `UNVERIFIED_OLD_VALUE_1_OVER_282_2` としてのみ保持。
- resetBehaviorは設定変更時の有利区間RESET、据え置き時CARRY_OVER、設定変更/電源OFF→ONともガックンなし、演出モードREMIX、純電断時ボーナス・AT中は状態引継ぎ、有利区間ランプ判別不可を機種固有資料で固定。

## No.1701 — A-SLOT+ ディスクアップ ULTRAREMIX
- path: `docs/real_machine_db/machines/2025-01-20_a-slot-plus-disc-up-ultraremix.md`
- manufacturer: **Sammy（販売/ブランド） / タイヨーエレック（製造）**
- formalModel: **L DISCUPウルトラリミックス XR**
- inspectionCode: **4S1442**
- releaseDateCanonical: **2025-01-20**
- medium: **スマスロ / 6.5号機AT / 技術介入 / 疑似ボーナス**
- settings: **1 / 2 / 5 / 6**（設定Lは通常性能比較から分離）
- payoutRate: **99.3 / 100.2 / 103.6 / 107.7%**、完全攻略 **103.0 / 103.8 / 107.2 / 111.5%**
- bonus: **BIG 1/287.2→1/260.9 / REG 1/495.3→1/334.1 / 合算1/181.8→1/146.5**
- base: **約32.2G/50枚（設定1）**
- netIncrease: **DZ/DT 約0.5枚/G / DTR 約1.5枚/G / 疑似BONUS 約6.5枚/G**
- ceiling: **非搭載**
- settingChange: **有利区間RESET / 通常時へ / 演出モードREMIX / メニュー初期化 / ガックンなし**
- carryOver: **据え置きは有利区間CARRY_OVER**
- powerCycle: **ガックンなし / REMIXへ / ボーナス・AT中の純電断は当該状態引継ぎ / メニュー初期化**
- resetDetection: **ガックン・有利区間ランプ・演出モードでは設定変更確定判別不可**
- publicMorningNumbers: **短縮天井N/A。設定変更専用モード振り分け・高確率・当選優遇率は再探索後もPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**

## 2025-01-20境界 — OPEN 2/6 known canonical
1. スマート沖スロ スターハナハナ — No.1700 DONE
2. A-SLOT+ ディスクアップ ULTRAREMIX — No.1701 DONE
3. Lにゃんこ大戦争 超神速 — NEXT
4. Lパチスロ シン・エヴァンゲリオン — QUEUED
5. L島娘 — QUEUED
6. 七つの魔剣が支配する — QUEUED
- 6件処理後にPB・地域先行・別型式・延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1701と本handoffを確認。
- **No.1702候補 `Lにゃんこ大戦争 超神速` — 2025-01-20** から再開する。
- 続いて `Lパチスロ シン・エヴァンゲリオン → L島娘 → 七つの魔剣が支配する` を正式型式・境界監査しながら処理する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回もrecursive tree/API検索でカーソル直後の「最初のresetBehavior欠損レコード」を安全に一意確定できなかったため、誤更新を避けて旧レコードは変更していない。
- 新規収集を止めず、次QAリレーで実体ファイル順 + resetBehavior欠損確認を組み合わせて後続1件を確定する。既存COMPLETE_COREは維持する。

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
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/85475/
- Pachibee: https://www.pachibee.jp/machines/about/224120006
- Ativo: https://ativo.jp/2024/11/22/l-%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97-ultraremix/

### 次境界
- 2025-01-20次対象: `Lにゃんこ大戦争 超神速`
