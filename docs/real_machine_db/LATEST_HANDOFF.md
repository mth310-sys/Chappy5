更新日: 2026-09-15

## 現在地点
- recordCount: **1766**
- latestRecordAdded: **銀河英雄伝説 Die Neue These — No.1766**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-12-08_gineiden-die-neue-these.md`
- chronologicalFrontier: **2025-12-08**
- schema: **resetBehavior v0.7**
- status: **2025-12-08_GROUP_OPEN_2_OF_3_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1765を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1766 `銀河英雄伝説 Die Neue These` を追加。
- 2025-12-08群の既知canonical 3機中2機完了。残りは `スマスロ 化物語`。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1766 — 銀河英雄伝説 Die Neue These
- path: `docs/real_machine_db/machines/2025-12-08_gineiden-die-neue-these.md`
- manufacturer: **グレードワン製造 / コナミアミューズメント**
- formalModel: **LノイエギンエイデンGH**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2025-12-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 100.2 / 105.6 / 108.4 / 111.0%**
- bonusInitial: **1/256.8 / 1/253.6 / 1/249.0 / 1/217.8 / 1/200.4 / 1/191.9**
- ST初当り: **1/393.7 / 1/388.5 / 1/372.8 / 1/306.2 / 1/274.2 / 1/259.9**
- base: **約35.0G/50枚**
- netIncrease: **約5.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1766 resetBehavior v0.7
- 設定変更時は有利区間・天井・ゲーム数・英雄ポイント・内部状態・モードをRESET/再抽選。
- ST間最大天井 **1000G+α → 最大800G+α**へ短縮。
- 設定変更時は内部ゲーム数と英雄ポイントをランダム加算。
- 据え置きは有利区間・天井・ゲーム数・ポイント・内部状態・モードを引継ぎ。
- 電源OFF→ON時は天井ゲーム数・英雄ポイント・モード・銀河ポイントを引継ぎ、液晶ゲーム数は0G表示。
- 有利区間移行時モードはB以上。その他役 **B10/C40/D50%**、弱チャンス目 **C40/D60%**、強チャンス目 **C20/D80%**、ギャラクシー目 **D100%**。
- モード天井はA1000/B800/C600/D400/チャンス100G+α。
- 朝一800G+αを明確に超えてST間天井が発動しなければ据え置き濃厚材料。
- 液晶0G・英雄ポイント???表示のみでは変更/据え置き判別困難。
- ツラヌキ条件達成時の有利区間リセット後は上位ST「邂逅」へ移行するが、設定変更時はこの恩恵を除外するため朝一恩恵に混入しない。
- 本機固有ガックン条件/発生率は検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の有利区間そのものは `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 設定変更時GSC間天井の前日進行持越し可否は資料差が残るため `CONFLICT_UNRESOLVED_AFTER_RESEARCH`。

### 公開朝一数値
- なな徹独自シミュレーター、設定1・リセット0G: 等価期待値 **-548円**、5.6枚交換 **-1536円**。
- 同条件0G: 天井到達率 **13.07%**、実質初当り **1/342**、平均投資 **9778円**。
- 150G開始: 等価 **+136円**、300G開始: 等価 **+1136円**。
- GSC天井・モード等を考慮しない独自計算値のため性能コアとは分離。

## conflicts / source normalization
- 設定別ボーナス/ST初当り・機械割、35G/50枚、純増約5枚/Gは複数主要解析で一致し重大CONFLICTなし。
- 1gekiの検定番号欄 `530420、0710-192` は既存DBの5S系inspectionCodeとの定義整合を固定できないため転記せずUNVERIFIED。
- 設定変更時GSC間天井について、低優先資料に「引継ぎ」記載がある一方、別資料では有利区間移行時に天井決定。高優先直接比較にGSC独立欄がないためCONFLICT保持。

## sources summary
retrievedAt: 2026-09-15
### No.1766
- コナミアミューズメント公式: 2025-12-08稼働開始、ゲーム性。
- PR TIMES/コナミアミューズメント: 製造元グレードワン、2025-12-08稼働開始予定。
- パチ&スロ必勝本: 設定別ボーナス/ST/機械割、設定変更 vs 電源OFF→ON直接比較、短縮天井。
- パチビー: 基本仕様、天井、設定変更時800G短縮。
- 1geki: 型式、基本性能、天井。
- なな徹: 設定変更/据え置き比較、有利区間、成立役別モード振り分け、朝一期待値。
- 回胴に散る。: 成立役別モード振り分け、GSC間天井補助。
- kaku6 / パチナビ: 基本性能・朝一補助照合。

## 2025-12-08境界 — OPEN 2/3 known canonical
1. **プリズムナナ — No.1765 DONE**
2. **銀河英雄伝説 Die Neue These — No.1766 DONE**
3. **スマスロ 化物語 — No.1767 candidate**

boundaryAudit:
- 既存handoffでパチビー/ALL7の2025-12-08パチスロ3機一致を確認済み。
- No.1767処理後にPB/別型式/地域先行/延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1766と本handoffを確認。
- **No.1767候補「スマスロ 化物語」— 2025-12-08** から継続する。
- No.1767処理後、2025-12-08境界を再監査してCLOSED判定する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- GitHub実体順のカーソル直後を安全に一意固定できるまで外部導入順から推測更新しない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
