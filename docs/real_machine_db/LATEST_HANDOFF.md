更新日: 2026-09-15

## 現在地点
- recordCount: **1771**
- latestRecordAdded: **スマスロ 沖ドキ！DUO アンコール — No.1771**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-12-22_okidoki-duo-encore.md`
- chronologicalFrontier: **2025-12-22**
- schema: **resetBehavior v0.7**
- status: **2025-12-22_GROUP_CLOSED_4_OF_4_CANONICAL_PROCESSED_NEXT_2026-01-05_GROUP_OPEN**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1770を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1771 `スマスロ 沖ドキ！DUO アンコール` を追加。
- 2025-12-22群は既監査4機すべて処理完了。パチビー、ALL7、情報島+、同日新台レビューで4機一致を再確認し **CLOSED 4/4** とした。
- 次の時系列本線は2026-01-05群。情報島+、ALL7、1gekiで同日パチスロ4機を確認。
- 既存性能値はやり直さず、No.1770の次だけを処理。
- resetBehaviorは設定変更/据え置き/純電断を分離し、固定800G天井・朝一モード・300G規定G数モード・スルー回数天井・有利区間恩恵を定義別に分離した。

## No.1771 — スマスロ 沖ドキ！DUO アンコール
- path: `docs/real_machine_db/machines/2025-12-22_okidoki-duo-encore.md`
- manufacturer: **メーシー / ユニバーサルエンターテインメント**
- formalModel: **L／オキドキデュオ2／FR**
- inspectionCode: **530412**
- releaseDate: **2025-12-22**
- settings: **L / 1 / 2 / 3 / 5 / 6**
- payoutRate: **97.2 / 98.6 / 102.4 / 106.8 / 110.0%**
- bonusInitial: **1/240.0 / 1/230.2 / 1/215.8 / 1/192.1 / 1/181.0**
- base: **約25.3G/50枚（設定1）**
- netIncrease: **約4.0枚/G**
- basicPayout: **BIG約204枚 / REG約84枚**
- normalGameCeiling: **通常A/B 800G / 引き戻し・チャンス200G / 連チャン系32G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1771 resetBehavior v0.7
- 設定変更時はゲーム数天井・内部状態/モードをRESET。純電源OFF→ON時は天井・内部状態を引継ぐ直接比較を確認。
- 据え置きはゲーム数天井・内部モード/状態・スルー回数履歴を引継ぐ機種別二次解析を確認。独立三者比較表が固定できないため信頼度は一段落として保持。
- 朝一通常モード（全設定共通）は **通常A 50.0% / 通常B 10.2% / チャンス39.8%**。チャンス選択時は200G天井。
- スルー回数天井の設定変更時振り分けは **3回24.6% / 5回24.6% / 9回44.5% / 10回6.3%**。設定変更時以外は **24.6 / 5.0 / 64.1 / 6.3%**。
- 設定変更時ドキハナモードは **A69.5% / B29.7% / C0.4% / D0.4%**。
- 300G規定G数モードは設定変更時に高確率でセットされるが具体率は `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`。300G固定天井とは扱わない。
- なな徹で有利区間リセットタイミングに設定変更時/ボーナス終了時の一部を確認。設定変更以外の有利区間リセット時はアンコールモードへ移行するが、同恩恵は **設定変更時を除く**。
- 有利区間ランプでは設定変更/据え置き判別不可。
- 本機固有ガックン条件/発生率、純電断後の液晶表示/開始ステージは十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### 公開朝一数値
- 朝一通常モード: **通常A 50.0% / 通常B 10.2% / チャンス39.8%**
- 設定変更時スルー回数天井: **3回24.6% / 5回24.6% / 9回44.5% / 10回6.3%**
- 設定変更時ドキハナモード: **A69.5% / B29.7% / C0.4% / D0.4%**
- 300G規定G数モード設定率: **PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH**
- 朝一0Gからの総合ボーナス当選率/メーカー公表期待値: **UNVERIFIED_AFTER_RESEARCH**

## conflicts / source normalization
- 主要性能はHAZUSE・パチビー・必勝本・パチマガスロマガ・1geki等で一致し重大CONFLICTなし。
- 「300G仮天井」は300G到達で確定当選する固定天井ではなく、300G経過後に高確率で当選する規定G数モード。固定300G天井表記はcanonicalから除外。
- リセット時の最大天井を一律200G/300Gとする解釈は不採用。通常A/Bでは800G、チャンス39.8%時のみ200G。
- 設定変更以外の有利区間リセット時アンコール恩恵を設定変更朝一へ混入しない。

## sources summary
retrievedAt: 2026-09-15
### No.1771
- ユニバーサル新台発表（グリーンべると転載）: https://news.p-world.co.jp/articles/32081/greenbelt
- 遊技通信 新機種発表: https://news.p-world.co.jp/articles/32044/yugitsushin
- グリーンべると 検定通過: https://news.p-world.co.jp/articles/32003
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-16612/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0116/
- パチビー 基本スペック: https://www.pachibee.jp/machines/index/225110006
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2740/2
- パチ&スロ必勝本 モード: https://hisshobon.com/machineinfo/88450/
- パチ&スロ必勝本 スルー回数天井: https://hisshobon.com/machineinfo/88435/
- パチ&スロ必勝本 ドキハナモード設定変更時: https://hisshobon.com/machineinfo/88416/
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/macy/064476.php
- パチマガスロマガ 朝イチ・設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/57/kr01.php
- 1geki 天井/朝一: https://1geki.jp/slot/l_okidoki_duo_encore/3/
- 1geki モード/リセット振り分け: https://1geki.jp/slot/l_okidoki_duo_encore/43/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/246716/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/1071/33878/
- ジャグラーズネット: https://jugglersnet.com/6gokiokidoki/okidoki-duo-encore
- スロベース リセット解析（補助）: https://slobase.jp/articles/okidoki-duo-reset

### 2025-12-22 boundary audit
- ALL7: https://www.all7.jp/plans/index/2025/12
- 情報島+ 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- パチビー導入日一覧: https://www.pachibee.jp/machines/schedule/2025-12
- 情報島+ 12/22導入前後レビューでも対象4機一致。

### 2026-01-05 next boundary audit
- 情報島+ 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- ALL7 2026年1月: https://www.all7.jp/plans/index/2026/01
- 1geki 2026年1月新台スケジュール: https://1geki.jp/newmachinecalender/202601/

## 2025-12-22境界 — CLOSED 4/4
1. **スマスロ 秘宝伝 — No.1768 DONE**
2. **L 無職転生 ～異世界行ったら本気だす～ — No.1769 DONE**
3. **L不二子BT — No.1770 DONE**
4. **スマスロ 沖ドキ！DUO アンコール — No.1771 DONE**

boundaryAudit:
- パチビー、ALL7、情報島+、情報島+同日新台レビューでパチスロ4機が一致。
- PB/別型式/地域先行/延期/段階導入の検索でも、2025-12-22 canonical本線に追加すべき別パチスロを確認できず、CLOSED 4/4。

## 2026-01-05境界 — OPEN 0/4
1. **スマスロ 北斗の拳 転生の章2 — No.1772 candidate**
2. **スマスロ鉄拳6 — candidate**
3. **スマート沖スロ ニューキングハナハナV — candidate**
4. **スマート沖スロ ニューキングハナハナV-30 — candidate**

boundaryAudit:
- 情報島+では2026-01-05パチスロ4機を上記4機として掲載。
- ALL7でも北斗転生2、鉄拳6、ニューキングハナハナV系を同日導入として確認。
- 1geki同日一覧もパチスロ4機表記を確認。
- 各レコード処理後、25Φ/30Φ派生の独立レコード要否・型式差を必ず再確認する。

## 次回再開地点
- 最新mainを再同期しNo.1771と本handoffを確認。
- **No.1772候補「スマスロ 北斗の拳 転生の章2」— 2026-01-05** から継続する。
- その後 `スマスロ鉄拳6 → スマート沖スロ ニューキングハナハナV → スマート沖スロ ニューキングハナハナV-30` を候補キューとして処理する。
- 同日群処理時に25Φ/30Φ派生・PB・別型式・地域先行・延期/段階導入を再監査する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回も本線を優先し、retroカーソルを更新していない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
