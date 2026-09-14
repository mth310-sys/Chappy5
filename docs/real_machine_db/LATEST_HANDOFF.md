更新日: 2026-09-15

## 現在地点
- recordCount: **1770**
- latestRecordAdded: **L不二子BT — No.1770**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-12-22_fujiko-bt.md`
- chronologicalFrontier: **2025-12-22**
- schema: **resetBehavior v0.7**
- status: **2025-12-22_GROUP_OPEN_3_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1769を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1770 `L不二子BT` を追加。
- 2025-12-22群は既監査4機のうち3/4を処理済み。群はOPENを維持。
- 既存性能値はやり直さず、No.1769の次だけを処理。
- resetBehaviorは設定変更/据え置き/純電断を分離。天井非搭載機としてN/Aを明示し、特殊途中状態は推測補完しない。

## No.1770 — L不二子BT
- path: `docs/real_machine_db/machines/2025-12-22_fujiko-bt.md`
- manufacturer: **アムテックス / 平和**
- formalModel: **LB不二子M2**
- inspectionCode: **5S1046**
- releaseDate: **2025-12-22**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate market: **97.6 / 99.4 / 102.9 / 105.4 / 107.4%**
- payoutRate completeStrategy: **100.2 / 102.4 / 106.2 / 109.0 / 111.2%**
- SBB: **1/697.2（公開通常設定共通）**
- BB: **1/394.8 / 1/364.1 / 1/319.7 / 1/291.3 / 1/229.1**
- REG: **1/321.3 / 1/304.8 / 1/278.9 / 1/252.1 / 1/227.6**
- 合算: **1/141.2 / 1/134.0 / 1/122.7 / 1/113.2 / 1/98.1**
- base: **約38.7G/50枚（設定1）**
- basicPayout: **SBB最大153枚+BT / BB最大153枚 / REG最大81枚**
- BT: **設定1で約1/16.0、SBB 50.5% / BB 49.5%、SBBなら継続**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1770 resetBehavior v0.7
- 救済ゲーム数天井は非搭載。設定変更/据え置き/純電断の天井RESET・引継ぎ・短縮はN/A。
- 必勝本の直接比較で設定変更時は演出モード=通常、液晶演出カスタム=MID、タイプラカスタム=MID、開始ステージ=バイクor海。
- 純電源OFF→ON時の演出モード/液晶演出カスタム/タイプラカスタム/開始ステージは同資料で現在調査中。
- 朝一専用天井、AT型内部モード、CZ優遇、公開朝一当選率などは再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 二次解析には「有利区間を持たない仕様」とする直接記述があるが、高優先複数系統の直接文言を固定できないため `NO_ADVANTAGEOUS_SECTION_REPORTED_SECONDARY_ONLY` と信頼度を落として保持。
- BT途中/ボーナス成立状態の設定変更・据え置き・純電断契約は高優先機種別資料で固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率は型式・メーカー・表記揺れを含め再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### 公開朝一数値
- 天井短縮G数: N/A（天井非搭載）
- 朝一専用モード振り分け: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一当選率/期待度: NONE_CONFIRMED_AFTER_RESEARCH
- リセット恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts / source normalization
- 主要スペックは必勝本・パチビー・ちょんぼりすた・G-net等で一致し重大CONFLICTなし。
- 1gekiのBIG欄はSBB+BB合算を掲載する一方、他資料はSBB/BBを分離。定義差として分離保存しCONFLICT扱いしない。
- 市場想定機械割と完全攻略時機械割を別定義で保存。
- 一部低品質二次ページにAT/天井/上位状態等の明確な誤記があるためcanonicalから除外。

## sources summary
retrievedAt: 2026-09-15
### No.1770
- 平和公式ニュース: https://www.heiwanet.co.jp/news/2025/
- 平和公式ホール向け製品一覧: https://www.heiwanet.co.jp/products/hall/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10005035/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-73968/
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-17367/
- HAZUSE: https://hazuse.com/hd/5s1046/
- 1geki: https://1geki.jp/slot/lb_fj2/
- パチビー: https://www.pachibee.jp/machines/index/225110005
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/88723/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/88721/
- パチ&スロ必勝本 BT: https://hisshobon.com/machineinfo/88726/
- なな徹: https://nana-press.com/kaiseki/machine/1070/34200/
- ちょんぼりすた: https://chonborista.com/slot/amute/246917/
- G-net: https://g-net-ps.com/info/s0239/
- 6確: https://www.kaku6.jp/slot/fujiko/

## 2025-12-22境界 — OPEN 3/4
1. **スマスロ 秘宝伝 — No.1768 DONE**
2. **L 無職転生 ～異世界行ったら本気だす～ — No.1769 DONE**
3. **L不二子BT — No.1770 DONE**
4. **スマスロ 沖ドキ！DUO アンコール — No.1771 candidate**

boundaryAudit:
- 直前handoffのパチビー、ALL7、情報島監査で2025-12-22 canonical候補4機を確認済み。
- No.1770追加時点はOPEN 3/4。
- 4機処理後にPB/別型式/地域先行/延期/段階導入を再探索してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1770と本handoffを確認。
- **No.1771候補「スマスロ 沖ドキ！DUO アンコール」— 2025-12-22** から継続する。
- 同機処理後、2025-12-22群のPB/別型式/地域先行/延期/段階導入を再監査してCLOSED判定する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回も本線を優先し、retroカーソルを更新していない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
