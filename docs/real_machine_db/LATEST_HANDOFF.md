更新日: 2026-09-15

## 現在地点
- recordCount: **1762**
- latestRecordAdded: **L 絶対衝激Ⅳ — No.1762**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-11-04_l-zettai-shogeki4.md`
- chronologicalFrontier: **2025-11-04**
- schema: **resetBehavior v0.7**
- status: **2025-11-04_BOUNDARY_CLOSED_3_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1760を再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1761 `スマスロ とある科学の超電磁砲2` を追加。
- No.1762 `L 絶対衝激Ⅳ` を追加。
- 2025-11-04群はパチビー・ALL7・P-Summa等の月間/導入日一覧を再照合し、パチスロcanonical 3機を全件処理したため **CLOSED 3/3**。
- 次のパチスロ導入日は複数カレンダーで **2025-11-17「スマスロネオプラネット」** を確認。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1761 — スマスロ とある科学の超電磁砲2
- path: `docs/real_machine_db/machines/2025-11-04_smart-slot-toaru-kagaku-no-railgun2.md`
- manufacturer: **藤商事**
- formalModel: **Lとある科学の超電磁砲2FV**
- inspectionCode: **530447**
- releaseDate: **2025-11-04**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 98.9 / 100.3 / 105.4 / 110.0 / 112.9%**
- CZ: **1/175.7 / 1/172.6 / 1/168.5 / 1/156.6 / 1/145.7 / 1/137.5**
- AT: **1/317.8 / 1/311.8 / 1/304.4 / 1/272.4 / 1/248.1 / 1/235.3**
- base: **約31.8G/50枚**
- netIncrease: **通常AT約2.6枚/G / ボーナス・上位AT約4.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1761 resetBehavior v0.7
- 設定変更時は有利区間・天井・内部状態・モード・ゲーム数をRESET、据え置きはCARRY_OVER。
- AT間天井は **999G+α → 最大699G+α**へ短縮。
- 設定変更時モード振り分け: **A42.0 / B23.5 / C23.5 / D8.0 / E3.0%**。B以上58.0%、D以上11.0%。
- モードA選択時は朝一専用天井抽選を行い、百の位・十の位・一の位を個別抽選。最大699G+α。
- 据え置き時は天井・内部状態・有利区間・モード・ゲーム数を引継ぎ。
- 純電源OFF→ONは天井・内部状態引継ぎを確認。純電断時の有利区間/モードを機種固有に直接列挙した高優先資料は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 設定変更/据え置きとも開始ステージは「常盤台中学校」または「学園都市」1:1で、ステージ単独では判別困難。
- 朝一699G+αを超えてもAT天井非発動なら据え置き濃厚。
- 本機固有ガックン条件/発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一シミュレーター（設定1・等価0G）: **期待値-1016円 / 天井到達率12.34% / 実質初当り1/293 / 平均投資9167円**。メーカー公表性能とは分離。

## No.1762 — L 絶対衝激Ⅳ
- path: `docs/real_machine_db/machines/2025-11-04_l-zettai-shogeki4.md`
- manufacturer: **アイドル（Daiichiブランド）**
- formalModel: **L絶対衝激フォースFH**
- inspectionCode: **5S0676**
- releaseDate: **2025-11-04**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.2 / 98.6 / 100.6 / 105.8 / 109.0 / 112.5%**
- bonus: **1/270 / 1/261 / 1/254 / 1/241 / 1/231 / 1/225**
- AT: **1/543 / 1/501 / 1/450 / 1/357 / 1/304 / 1/266**
- base: **約31.6G/50枚**
- netIncrease: **通常AT約0.5枚/G / ボーナス・上位AT約5.5枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1762 resetBehavior v0.7
- 必勝本の設定変更/電源OFF-ON直接比較表を確保。
- 設定変更時: 天井周期数・スマホレベル・倫高確RESET、状態・モード・黒高確再抽選。
- 電源OFF→ON時: 天井周期数・スマホレベル・状態・モード・倫高確・黒高確をすべて引継ぎ。
- 設定変更後は **モードC or D濃厚**。通常最大9周期→**最大5周期**へ短縮（C=5周期 / D=2周期）。C/D具体比率は十分な再探索後も `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 有利区間は設定変更時RESET、据え置き時CARRY_OVER。純電断時の有利区間の直接文言は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- エンディング等の有利区間リセット後は綾覚醒ループ約80%だが、**設定変更時は除外**。朝一恩恵へ混入しない。
- 設定変更時はサブ液晶キャラ3人画面・昼ステージ。純電断時表示/ステージは調査中のため確定判別材料にはしない。
- 本機固有ガックン条件/発生率は再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一シミュレーター（設定1・等価0G）: **期待値-504円 / 天井到達率25.82% / 実質初当り1/220 / 平均投資6946円**。50Gで+40円、150Gで+1447円。

## conflicts / source normalization
- No.1761: ベース31.8G/50枚が業界/解析canonical。なな徹期待値計算の32.0G/50枚はシミュレーター用丸め条件なので性能CONFLICTにはしない。
- No.1761: 検定番号canonicalは530447。1geki併記の0708-146は補助識別子扱い。
- No.1762: 通常ATは純増約0.5枚/G、ボーナス/上位ATは約5.5枚/G。状態を混ぜず分離して保存。
- No.1762: 綾覚醒ループ約80%は設定変更時除外なのでresetBenefitsに入れない。
- No.1761/1762とも設定別主要性能は複数高優先資料で一致し重大CONFLICTなし。

## sources summary
retrievedAt: 2026-09-15
### No.1761
- 藤商事公式機種ページ / 公式YouTube: 設定別性能、導入日、機種概要。
- 遊技日本 / P-WORLD・グリーンべると / G-net: 型式、導入、ベース、スペック照合。
- なな徹: resetモード振り分け、朝一モードA天井抽選、設定変更/据え置き比較、公開期待値。
- 1geki: 天井、電源OFF→ON、朝一ステージ、AT/CZ。
- HAZUSE / 必勝本: 天井・性能の別系統照合。
### No.1762
- 1geki: 型式、検定番号、設定別性能、周期/モード、AT/ボーナス構造。
- 必勝本: 設定変更 vs 電源OFF→ONの直接比較、周期天井、スマホレベル、状態、モード、倫高確、黒高確。
- なな徹: モードC/D朝一、期待値/天井到達率/平均投資、設定変更/据え置き比較。
- パチマガスロマガ系: 有利区間リセット契機と「設定変更時は綾覚醒ループ恩恵除外」。
- P-WORLD / P-Summa / 6確: 導入日・性能・天井の別系統照合。

## 2025-11-04境界 — CLOSED 3/3 canonical
1. **Lパチスロ 革命機ヴァルヴレイヴ2 — No.1760 DONE**
2. **スマスロ とある科学の超電磁砲2 — No.1761 DONE**
3. **L 絶対衝激Ⅳ — No.1762 DONE**

boundaryAudit:
- パチビー2025年11月導入日一覧で11/04パチスロ3機が一致。
- ALL7 2025年11月導入予定でも11/04のスロット3機が一致し、次スロットは11/17ネオプラネット。
- P-Summaの2025年11月パチスロ新台整理は月内4機（上記3機 + 11/17ネオプラネット）で一致。
- 情報島＋過去新台一覧も11/04の超電磁砲2・絶対衝激IVを掲載し、直前handoffでヴァルヴレイヴ2を同日確認済み。
- PB/別型式/地域先行/延期候補を再探索したが、11/04本線へ追加すべき別canonicalスロットは今回確認できず。

## 次回再開地点
- 最新mainを再同期しNo.1762と本handoffを確認。
- **No.1763候補「スマスロネオプラネット」— 2025-11-17** から本線を継続する。
- 11/17群は現時点でパチビー/ALL7/複数カレンダー上、パチスロはネオプラネット1機。処理後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
