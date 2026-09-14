更新日: 2026-09-15

## 現在地点
- recordCount: **1768**
- latestRecordAdded: **スマスロ 秘宝伝 — No.1768**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-12-22_smaslot-hihouden.md`
- chronologicalFrontier: **2025-12-22**
- schema: **resetBehavior v0.7**
- status: **2025-12-22_GROUP_OPEN_1_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1767を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1768 `スマスロ 秘宝伝` を追加。
- 2025-12-22群は既監査4機のうち1/4を処理済み。群はOPENを維持。
- 既存COMPLETE_COREの性能完了判定は変更していない。
- resetBehaviorは直接確認済み項目と二次資料支持項目を分離し、未確認欄を一般論で補完していない。

## No.1768 — スマスロ 秘宝伝
- path: `docs/real_machine_db/machines/2025-12-22_smaslot-hihouden.md`
- manufacturer: **パオン・ディーピー / 大都技研**
- formalModel: **L／スマスロ秘宝伝／PA7**
- inspectionCode: **5S0926**
- releaseDate: **2025-12-22**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 99.0 / 101.5 / 105.1 / 110.1 / 114.7%**
- ボーナス初当り: **1/292.5 / 1/271.4 / 1/283.6 / 1/257.5 / 1/264.0 / 1/246.0**
- base: **約32G/50枚**
- netIncrease: **BONUS 約5.0枚/G**
- basicPayout: **BIGシングル約200枚 / BIGダブル約300枚 / REG約70枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1768 resetBehavior v0.7
- 通常ゲーム数天井はBB後 **799G+α**、RB後 **649G+α**。
- 設定変更後は最大 **499G+α**へ短縮。BB後通常最大比300G、RB後通常最大比150G短縮。
- 必勝本の設定変更 vs 電源OFF→ON直接比較で、天井Gは **設定変更=RESET / 純電断=CARRY_OVER**。
- 伝説モードは **設定変更=RESET / 純電断=CARRY_OVER**。
- オタカラ導ポイントは **純電断=CARRY_OVER**を直接確認。ただし設定変更時は同資料でも「現在調査中」のため `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きゲーム数引継ぎは複数二次解析で支持。伝説モード・オタカラ導ポイントを含む据え置き専用の高優先三者比較表は固定できず、純電断結果をそのまま同一視しない。
- 有利区間は設定変更RESET、据え置き/電断CARRY_OVERを二次解析が支持するが、高優先の機種固有独立欄を固定できないため `SECONDARY_SUPPORTED_SETTING_CHANGE_RESET_AND_STAY_CARRY_OVER`。
- 内部状態の設定変更/据え置き/電断三者直接比較は `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率は検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- BB終了画面「ベカン子との遭遇」は1gekiで設定変更濃厚示唆。朝一即時判別ではなくBB後の事後示唆として保存。

### 公開朝一数値
- なな徹独自シミュレーター、設定1・リセット0G: 等価期待値 **-1032円**、5.6枚交換 **-1766円**。
- 50G: **-681円 / -1415円**。
- 100G: **-270円 / -1004円**。
- 150G: **+212円 / -522円**。
- 200G: **+775円 / +41円**。
- 250G: **+1434円 / +700円**。
- 300G: **+2205円 / +1471円**。
- 350G: **+3108円 / +2374円**。
- 400G: **+4165円 / +3431円**。
- 450G: **+5402円 / +4668円**。
- メーカー公表値ではなく、なな徹独自シミュレーター値として性能コアから分離。

## conflicts / source normalization
- 設定別ボーナス初当り、機械割、約32G/50枚、純増約5.0枚/Gは主要解析・業界資料で重大CONFLICTなし。
- 有利区間・内部状態の設定変更/据え置き挙動は一部二次解析が明示する一方、必勝本の高優先直接比較では独立欄がないため、天井G・伝説モード・オタカラ導ポイントと同じ信頼度へ格上げしていない。
- オタカラ導ポイントは純電源OFF→ON=CARRY_OVERを直接確認できる一方、設定変更時は必勝本が「現在調査中」のためRESETと断定しない。
- 設定別初当りは設定3・5が直前設定より重い非単調値だが、複数資料照合値をそのままcanonicalとし、見た目だけで補正していない。

## sources summary
retrievedAt: 2026-09-15
### No.1768
- P-WORLD/遊技通信: パオン・ディーピー発表、型式 `L／スマスロ秘宝伝／PA7`、2025年12月下旬導入予定。
- HAZUSE: 型式、検定番号 `5S0926`、2025-12-22導入、メーカー。
- パチビー: 導入日・基本仕様。
- なな徹: 設定別性能、天井、朝一リセット期待値。
- パチ&スロ必勝本: 設定変更 vs 電源OFF→ON直接比較、天井G・伝説モード・オタカラ導ポイント。
- 1geki: 機種性能、天井/朝一、設定変更示唆。
- 情報島 / パチマガスロマガFREE: 基本仕様・性能照合。

## 2025-12-22境界 — OPEN 1/4
1. **スマスロ 秘宝伝 — No.1768 DONE**
2. **L 無職転生 ～異世界行ったら本気だす～ — No.1769 candidate**
3. **L不二子BT**
4. **スマスロ 沖ドキ！DUO アンコール**

boundaryAudit:
- 前回までのパチビー、ALL7、情報島再監査で2025-12-22のcanonical候補4機が一致。
- No.1768追加時点はOPEN 1/4。
- 4機処理後にPB/別型式/地域先行/延期/段階導入を再探索してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1768と本handoffを確認。
- **No.1769候補「L 無職転生 ～異世界行ったら本気だす～」— 2025-12-22** から継続する。
- その後 `L不二子BT → スマスロ 沖ドキ！DUO アンコール` の順で処理する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回もGitHub実体ツリー/検索でカーソル直後の既存実レコードを安全に一意固定できなかったため、外部導入順から推測更新していない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
