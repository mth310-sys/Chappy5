更新日: 2026-09-15

## 現在地点
- recordCount: **1763**
- latestRecordAdded: **スマスロネオプラネット — No.1763**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-11-17_smart-slot-neoplanet.md`
- chronologicalFrontier: **2025-11-17**
- schema: **resetBehavior v0.7**
- status: **2025-11-17_BOUNDARY_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1762を再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1763 `スマスロネオプラネット` を追加。
- 2025-11-17群はパチビー・ALL7・複数新台カレンダーを再照合し、パチスロcanonical 1機を処理したため **CLOSED 1/1**。
- 次のパチスロ導入日は複数カレンダーで **2025-12-01「バーニングエクスプレス」** を確認。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1763 — スマスロネオプラネット
- path: `docs/real_machine_db/machines/2025-11-17_smart-slot-neoplanet.md`
- manufacturer: **セブンリーグ（山佐ネクスト販売）**
- formalModel: **LネオプラネットSLED**
- inspectionCode: **5S0798**
- releaseDate: **2025-11-17**
- settings: **1 / 2 / 4 / 5 / 6 / L**
- payoutRate: **97.7 / 99.0 / 104.2 / 107.9 / 114.2%**（設定Lは調査中）
- BIG（SBB含む）: **1/280.4 / 1/273.4 / 1/247.3 / 1/232.2 / 1/210.5**
- REG: **1/596.7 / 1/584.1 / 1/553.6 / 1/526.4 / 1/504.2**
- 合算: **1/190.8 / 1/186.2 / 1/171.0 / 1/161.1 / 1/148.5**
- base: **約31.3G/50枚**
- netIncrease: **約8.8枚/G**
- basicPayout: **SBB平均約616枚 / BIG平均約367枚 / REG平均約95枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1763 resetBehavior v0.7
- 必勝本の設定変更/電源OFF→ON直接比較表を確保。
- 設定変更時: 天井ゲーム数RESET、モード再抽選、状態RESET、専用モードF開始。
- 通常天井 **777G+α → 500G+α**へ277G短縮。到達でボーナス当選。
- モードFで最初のボーナス当選後は **次回モードB以上**。
- 据え置き時は天井・内部状態・有利区間・モード・ゲーム数を引継ぎ。
- 純電源OFF→ON時は天井ゲーム数・モード・状態を引継ぎ。純電断時の有利区間そのものの直接文言は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 設定変更時の有利区間はRESET。据え置きはCARRY_OVER。
- 朝一表示は見た目だけで変更判別困難。500G+αを超えて天井ボーナス非発動なら据え置き濃厚材料。
- 設定変更時メニュー画面0G・演出モードSTANDARD。純電断時の同項目は必勝本で調査中。
- 本機固有ガックン条件/発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- モードF非レア役毎G高確移行率: **設定1 1/1260.3 / 設定2 1/1008.2 / 設定4 1/840.2 / 設定5 1/336.1 / 設定6 1/219.2**。
- なな徹独自リセット期待値（設定1）: **0G -386円 / 300G +1354円 / 450G +3938円**。0G時の天井到達率7.57%、実質初当り1/180、平均投資5735円。

## conflicts / source normalization
- 通常設定性能はHAZUSE、P-WORLD、1geki、K-Navi、ちょんぼりすた等で一致し重大CONFLICTなし。
- 通常性能表は設定1/2/4/5/6の5段階。HAZUSE/P-WORLDは設定L搭載を別途明記するため、本DBでは通常5段階 + 設定Lを独立記録。
- 設定Lの機械割/初当りは各資料で調査中のため推測しない。
- モードF高確移行率は「非レア役の毎ゲーム抽選」の値。レア役/規定ゲーム数による高確移行と混同しない。

## sources summary
retrievedAt: 2026-09-15
### No.1763
- 遊技通信: 型式、メーカー、純増、SBB/BB/RB平均獲得、モード概要。
- HAZUSE / P-WORLD / 1geki: 型式、検定番号、導入日、設定別性能、ベース、天井、設定L。
- 必勝本: 設定変更 vs 電源OFF→ONの直接比較、天井、モード、状態、表示/演出モード。
- なな徹: 設定変更/据え置き比較、有利区間、リセット恩恵、公開期待値、天井到達率/実質初当り/平均投資。
- パチビー / ALL7: 2025-11-17導入日境界監査。

## 2025-11-17境界 — CLOSED 1/1 canonical
1. **スマスロネオプラネット — No.1763 DONE**

boundaryAudit:
- パチビー2025年11月導入日一覧で11/17パチスロはネオプラネット1機。
- ALL7 2025年11月導入予定でも11/17パチスロはネオプラネット1機。
- PB/別型式/地域先行/延期/段階導入を再探索したが、11/17本線に追加すべき別canonicalスロットは今回確認できず。

## 次回再開地点
- 最新mainを再同期しNo.1763と本handoffを確認。
- **No.1764候補「バーニングエクスプレス」— 2025-12-01** から本線を継続する。
- 12/01群は現時点でパチビー/複数新台カレンダー上、パチスロはバーニングエクスプレス1機。処理後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
