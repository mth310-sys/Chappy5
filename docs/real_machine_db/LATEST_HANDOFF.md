更新日: 2026-09-15

## 現在地点
- recordCount: **1769**
- latestRecordAdded: **L 無職転生 ～異世界行ったら本気だす～ — No.1769**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-12-22_mushoku-tensei.md`
- chronologicalFrontier: **2025-12-22**
- schema: **resetBehavior v0.7**
- status: **2025-12-22_GROUP_OPEN_2_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1768を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1769 `L 無職転生 ～異世界行ったら本気だす～` を追加。
- 2025-12-22群は既監査4機のうち2/4を処理済み。群はOPENを維持。
- 既存性能値はやり直さず、No.1768の次だけを処理。
- resetBehaviorは設定変更/据え置き/純電断を分離し、高優先直接比較と二次解析を信頼度別に保存。

## No.1769 — L 無職転生 ～異世界行ったら本気だす～
- path: `docs/real_machine_db/machines/2025-12-22_mushoku-tensei.md`
- manufacturer: **ニューギン / フィールズ**
- formalModel: **L無職転生～異世界行ったら本気だす～NM**
- inspectionCode: **5S1064**
- releaseDate: **2025-12-22**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 99.1 / 100.9 / 105.4 / 109.5 / 113.7%**
- CZ: **1/130 / 1/129 / 1/128 / 1/127 / 1/127 / 1/125**
- ボーナス: **1/170 / 1/168 / 1/166 / 1/161 / 1/156 / 1/147**
- AT: **1/416 / 1/406 / 1/394 / 1/361 / 1/327 / 1/292**
- base: **約33G/50枚**
- netIncrease: **通常AT 約2.8枚/G / 上位AT 約4.5枚/G**
- basicPayout: **無職転生BONUS約70枚 / EPISODE BONUS約70枚 / 魔術BONUS約50枚 / 本気BONUS約50枚 / AT1セット30G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1769 resetBehavior v0.7
- 通常はボーナス間最大 **ステージチェンジ19回**、AT間最大 **40回**。
- 設定変更後はボーナス間 **13回**、AT間 **17回**へ短縮。
- 必勝本の設定変更 vs 電源OFF→ON直接比較でステージチェンジ回数は **設定変更=RESET / 純電断=CARRY_OVER**。
- ちょんぼりすたの直接比較で天井・内部状態は **設定変更=RESET / 純電断=CARRY_OVER**。
- なな徹の朝一比較で据え置きは **有利区間・天井・ゲーム数・ステージチェンジ回数をCARRY_OVER**。
- なな徹で設定変更時 **有利区間RESET**、据え置き **CARRY_OVER** を確認。
- 通常の有利区間リセット後は上位CZ「ターニングポイント2」へ移行するが、**設定変更時はこの恩恵の対象外**。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 電源OFF→ON時の開始ステージは高優先資料でも調査中。
- 本機固有ガックン条件/発生率は型式・メーカー・表記揺れを含め再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時専用モード振り分けは公開比較値を固定できず `PUBLIC_RESET_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。

### 公開朝一数値
- なな徹独自シミュレーター、設定1・リセット時ボーナス天井期待値:
  - 0G: **等価 -362円 / 5.6枚 -868円**
  - 50G: **-333円 / -839円**
  - 100G: **-295円 / -800円**
  - 150G: **-243円 / -749円**
  - 200G: **-173円 / -679円**
  - 250G: **-80円 / -586円**
  - 300G: **+45円 / -461円**
  - 350G: **+213円 / -293円**
  - 400G: **+439円 / -67円**
  - 450G: **+741円 / +235円**
  - 500G: **+1147円 / +641円**
  - 550G: **+1692円 / +1186円**
  - 600G: **+2423円 / +1917円**
  - 650G: **+3404円 / +2898円**
- メーカー公表値ではなく、なな徹独自シミュレーター値として性能コアから分離。

## conflicts / source normalization
- 設定別CZ/ボーナス/AT、出玉率、約33G/50枚、通常AT純増約2.8枚/Gは主要解析で重大CONFLICTなし。
- P-WORLD/遊技通信の初期紹介は上位側を約4.0枚/Gと記載する一方、導入時解析各社は約4.5枚/Gで一致。導入後解析値 **4.5枚/G** をcanonical、初期4.0表記は `CONFLICT_EARLY_PRELAUNCH_DESCRIPTION` として保持。
- メーカー欄はニューギン製、フィールズ流通/発表の資料が混在するため役割差を保持。
- 純電断時の有利区間そのものは高優先独立欄を固定できないため、設定変更・据え置きの直接確認結果から推測補完していない。

## sources summary
retrievedAt: 2026-09-15
### No.1769
- ニューギン公式機種サイト: https://www.l-mushokutensei.jp/
- P-WORLD/遊技通信: https://news.p-world.co.jp/articles/32455/yugitsushin
- グリーンべると: https://web-greenbelt.jp/post-104359/
- 1geki: https://1geki.jp/slot/l_musyokutensei/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1064/
- パチビー: https://www.pachibee.jp/machines/index/225110003
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/newgin/064475.php
- パチ&スロ必勝本・天井&設定変更: https://hisshobon.com/machineinfo/89022/
- なな徹・朝一/設定変更: https://nana-press.com/kaiseki/machine/1058/33840/
- なな徹・天井: https://nana-press.com/kaiseki/machine/1058/33836/
- なな徹・有利区間: https://nana-press.com/kaiseki/machine/1058/33841/
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/246382/

## 2025-12-22境界 — OPEN 2/4
1. **スマスロ 秘宝伝 — No.1768 DONE**
2. **L 無職転生 ～異世界行ったら本気だす～ — No.1769 DONE**
3. **L不二子BT — No.1770 candidate**
4. **スマスロ 沖ドキ！DUO アンコール**

boundaryAudit:
- 直前handoffでパチビー、ALL7、情報島を再監査し2025-12-22のcanonical候補4機が一致。
- No.1769追加時点はOPEN 2/4。
- 4機処理後にPB/別型式/地域先行/延期/段階導入を再探索してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1769と本handoffを確認。
- **No.1770候補「L不二子BT」— 2025-12-22** から継続する。
- その後 **「スマスロ 沖ドキ！DUO アンコール」** を処理する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回も本線を優先し、外部導入順から推測してretroカーソルを更新していない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
