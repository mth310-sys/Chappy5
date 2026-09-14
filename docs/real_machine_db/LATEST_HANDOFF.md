更新日: 2026-09-15

## 現在地点
- recordCount: **1767**
- latestRecordAdded: **スマスロ 化物語 — No.1767**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-12-08_smaslot-bakemonogatari.md`
- chronologicalFrontier: **2025-12-08**
- schema: **resetBehavior v0.7**
- status: **2025-12-08_GROUP_CLOSED_3_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1766を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1767 `スマスロ 化物語` を追加。
- 2025-12-08群のcanonical 3機を完了し、パチビー・ALL7・情報島で再監査してCLOSED 3/3とした。
- 次の時系列本線は2025-12-22群4機。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1767 — スマスロ 化物語
- path: `docs/real_machine_db/machines/2025-12-08_smaslot-bakemonogatari.md`
- manufacturer: **銀座製造 / サミー**
- formalModel: **L スマスロ化物語 KH**
- inspectionCode: **530641**
- releaseDate: **2025-12-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 100.9 / 105.0 / 107.8 / 112.1%**
- AT初当り: **1/265.1 / 1/260.7 / 1/252.1 / 1/238.8 / 1/230.8 / 1/219.6**
- base: **約31.1G/50枚**
- netIncrease: **通常AT 約2.7枚/G / 上位AT 約5.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1767 resetBehavior v0.7
- 設定変更時は有利区間・天井G・内部状態・モード・解呪連モードをRESET/再抽選。
- AT間天井 **1000G → 600G**へ400G短縮。天井恩恵はAT+倍倍チャンス。
- 据え置きは有利区間・ゲーム数・内部状態・解呪連モードを引継ぎ。
- 純電源OFF→ON時は天井G・モード・状態・解呪連モードを引継ぎ。
- 設定変更後50G消化でモードB HIGH移行率 **100%**、HIGHは50G継続。
- HIGH中CZ当選時は **50%**で解呪連モードへ移行。
- 朝一ステージは設定変更/据え置きとも市街地固定で、見た目だけでは判別不可。
- 朝一1回目ATが600Gを超えれば据え置き濃厚材料。
- 通常営業中の有利区間リセット後は怪逅ノ儀突入が実戦確認されるが、設定変更時はこの恩恵を除外し朝一恩恵へ混入しない。
- 本機固有ガックン条件/発生率は検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の通常モード全振り分け、内部状態個別振り分けは公開固定値を確認できず、それぞれ `PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH` / `UNVERIFIED_AFTER_RESEARCH`。

### 公開朝一数値
- なな徹独自シミュレーター、設定1・リセット0G: 等価期待値 **-563円**、5.6枚交換 **-1337円**。
- 同条件0G: 天井到達率 **10.97%**、実質初当り **1/242**、平均投資 **7785円**。
- 150G開始: 等価 **+215円**。
- 250G開始: 等価 **+1032円**、5.6枚交換 **+242円**。
- 300G開始: 等価 **+1568円**。
- ゾーン・解呪連モードを考慮しない等の条件付き独自計算のため性能コアとは分離。

## conflicts / source normalization
- 設定別AT初当り・機械割、31.1G/50枚、純増2.7/5.0枚/Gは複数主要資料で一致し重大CONFLICTなし。
- 1geki朝一表の内部状態欄はHTMLセル結合で判読しづらいが、必勝本の設定変更 vs 電源OFF/ON直接比較が `設定変更=再抽選 / 電源OFF ON=引継ぎ` を明記するためcanonicalとした。
- 検定番号 `530641` はHAZUSE・Ativo・1gekiで一致。1geki併記の `0710-179` は番号定義を同一視せずinspectionCodeへ混在させない。

## sources summary
retrievedAt: 2026-09-15
### No.1767
- サミー発表/グリーンべると: 銀座製、2025-12-08導入、通常AT純増約2.7枚/G、初期150枚、上位AT純増約5.0枚/G。
- 遊技日本: 型式 `L スマスロ化物語 KH` の検定通過。
- HAZUSE: 型式、検定番号530641、導入日、メーカー、出玉率レンジ。
- パチビー/情報島: 基本仕様、AT初当り、ベース、純増、導入日。
- 1geki: 設定別AT初当り・機械割、天井1000G、リセット600G、朝一挙動。
- 必勝本: 設定変更 vs 電源OFF/ON直接比較、天井G・モード・状態・解呪連モード。
- なな徹: 設定変更/据え置き比較、50G HIGH 100%、HIGH50G、CZ当選時50%解呪連、朝一期待値、有利区間リセット恩恵の設定変更除外。

## 2025-12-08境界 — CLOSED 3/3
1. **プリズムナナ — No.1765 DONE**
2. **銀河英雄伝説 Die Neue These — No.1766 DONE**
3. **スマスロ 化物語 — No.1767 DONE**

boundaryAudit:
- パチビー、ALL7、情報島で2025-12-08のパチスロ新台3機が一致。
- PB/別型式/地域先行/延期/段階導入を再探索し、同日追加canonicalは確認できずCLOSED。

## 次の時系列境界 — 2025-12-22 OPEN 0/4 known canonical
1. **スマスロ 秘宝伝 — No.1768 candidate**
2. **L 無職転生 ～異世界行ったら本気だす～**
3. **L不二子BT**
4. **スマスロ 沖ドキ！DUO アンコール**

boundaryAudit:
- パチビー、ALL7、情報島で2025-12-22のパチスロ新台4機が一致。
- 4機処理後にPB/別型式/地域先行/延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1767と本handoffを確認。
- **No.1768候補「スマスロ 秘宝伝」— 2025-12-22** から継続する。
- その後 `L 無職転生 ～異世界行ったら本気だす～ → L不二子BT → スマスロ 沖ドキ！DUO アンコール` の順で処理する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- GitHub実体順のカーソル直後を安全に一意固定できるまで外部導入順から推測更新しない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
