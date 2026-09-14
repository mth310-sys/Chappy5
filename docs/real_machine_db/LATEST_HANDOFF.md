更新日: 2026-09-15

## 現在地点
- recordCount: **1751**
- latestRecordAdded: **スマスロ 東京リベンジャーズ — No.1751**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-09-08_smart-slot-tokyo-revengers.md`
- chronologicalFrontier: **2025-09-08**
- schema: **resetBehavior v0.7**
- status: **2025-09-08_GROUP_OPEN_2_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- mainが前回作業地点No.1745よりNo.1749まで先行していたためNo.1746〜1749を重複再調査せず継承。
- No.1750 `クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver.`、No.1751 `スマスロ 東京リベンジャーズ` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-09-08群は既知4候補のうち2/4処理済みとしてOPENを維持。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1750 — クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver.
- path: `docs/real_machine_db/machines/2025-09-08_crea-hihouden-bonus-trigger-ver.md`
- manufacturer: **大都技研**
- formalModel: **LB／クレアの秘宝伝ボーナストリガーVER．／A2**
- inspectionCode: **530057**
- releaseDate: **2025-09-08**
- payoutRate (market/standard): **98.1 / 99.2 / 101.2 / 103.7 / 106.6 / 112.3%**
- payoutRate (full technical play): **99.3 / 100.5 / 102.5 / 105.0 / 108.0 / 114.0%**
- BIG: **1/299.3 / 1/293.9 / 1/284.9 / 1/274.2 / 1/262.1 / 1/240.1**
- REG: **1/383.3 / 1/376.6 / 1/358.1 / 1/334.4 / 1/299.3 / 1/247.3**
- combined: **1/168.0 / 1/165.1 / 1/158.7 / 1/150.7 / 1/139.7 / 1/121.8**
- base: **約34G/50枚**
- BIG約356枚（BT込み） / REG最大107枚 / 天井非搭載
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1750 resetBehavior v0.7
- 天井非搭載のためゲーム数天井RESET/短縮・据え置き/電断天井進行はN/A。
- P-WORLDでコンプリート機能打ち止め状態が設定変更で解除されることを確認するが、朝一初当り恩恵とは分離。
- 朝一専用モード、高確保証、初当り優遇などは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更/据え置き/純電断時のボーナス成立内部フラグ、BT途中状態、有利区間、表示/カスタム状態は型式名・電断/電源投入/BT中電断まで再探索後も `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 固有ガックン条件・発生率も `UNVERIFIED_AFTER_RESEARCH`。

## No.1751 — スマスロ 東京リベンジャーズ
- path: `docs/real_machine_db/machines/2025-09-08_smart-slot-tokyo-revengers.md`
- manufacturer: **サミー / Sammy**
- formalModel: **L スマスロ東京リベンジャーズ ZF**
- inspectionCode: **5S0551 / 0707-123**
- releaseDate: **2025-09-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 98.8 / 101.4 / 106.3 / 111.2 / 114.9%**
- initialHit: **1/282.4 / 1/279.5 / 1/272.2 / 1/255.8 / 1/249.1 / 1/240.1**
- AT: **1/482.2 / 1/474.7 / 1/456.9 / 1/414.0 / 1/393.8 / 1/373.1**
- base: **約32G/50枚**
- netIncrease: **東卍RUSH約3.2枚/G / 東卍RUSH BURST約8.0枚/G**
- normalAtCeiling: **1190G+α**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1751 resetBehavior v0.7
- 設定変更で有利区間・内部状態・AT間天井・周期/ポイント・モードをRESET/再抽選。
- AT間天井を1190G+α→900G+αへ短縮。朝一1周期目は最大200ptで決戦前夜移行濃厚。
- モード移行抽選優遇・初当り時AT期待度アップ。
- 設定変更時モード振り分けを公開値として保存。天国は設定1/2 9.4%、設定3 15.2%、設定4 16.4%、設定5 22.7%、設定6 25.0%。特殊は各6.3%、B/チャンスは各25.0%、残りA。
- 据え置き/純電源OFF→ONは天井・内部状態を引き継ぐ機種別解析あり、後発資料ではモード・周期ptもCARRY_OVERを明記。
- 朝一200ptで決戦前夜非移行、または900G+αでAT天井非発動なら据え置き濃厚材料。
- 固有ガックン条件・発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / source normalization
- No.1750 BIG総獲得は主要資料で約356枚が一致する一方P-WORLD説明に約358枚あり。canonicalは約356枚、358枚は `CONFLICT_MINOR_DESCRIPTION_ROUNDING_OR_TYPO`。
- No.1750の通常攻略98.1〜112.3%と完全攻略99.3〜114.0%は定義差のため両系列保持。
- No.1751導入/販売台数は約20,000台と25,000台の資料差があるが性能必須値ではなく、導入台数と販売台数の定義差もあるためコアへ採用しない。
- No.1751ベースは主要業界/解析資料の約32Gをcanonical。一部二次資料の計算文中34G相当は隔離。

## 2025-09-08境界 — OPEN 2/4 known canonical
1. クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver. — No.1750 DONE
2. スマスロ 東京リベンジャーズ — No.1751 DONE
3. SLOTドルアーガの塔 — NEXT
4. スマスロ ドルアーガの塔 — QUEUED

boundaryAudit:
- 前handoffで1geki 2025年9月新台スケジュールから2025-09-08のスロット候補4機を確認済み。
- 4機完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- GitHub実体ツリー/pathを基準にカーソル直後の既存実レコードを確定する方針を継続。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**

## 次回再開地点
- 最新mainを再同期しNo.1751と本handoffを確認。
- **No.1752候補「SLOTドルアーガの塔」— 2025-09-08** から本線を継続する。
- 続いて **「スマスロ ドルアーガの塔」** を別型式・別仕様として処理する。
- 2025-09-08群完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## 今回の主要ソース
取得日: 2026-09-15

### No.1750 クレアの秘宝伝 BT ver.
- 大都技研公式: https://www.daitogiken.com/contents/product/slot/creab/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-97477/
- HAZUSE: https://hazuse.com/hd/530057h/
- 一撃: https://1geki.jp/slot/l_crea/
- パチビー: https://www.pachibee.jp/machines/index/225080003
- P-WORLD: https://www.p-world.co.jp/machine/database/10325

### No.1751 スマスロ 東京リベンジャーズ
- 遊技通信: https://news.p-world.co.jp/articles/31384/yugitsushin
- グリーンべると 検定通過: https://news.p-world.co.jp/articles/31318/greenbelt
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-72094/
- G-net: https://g-net-ps.com/info/s0226/
- 一撃: https://1geki.jp/slot/l_tokyo_revengers/
- なな徹 リセット狙い: https://nana-press.com/kaiseki/machine/1014/31678/
- Altema リセット詳細: https://altema.jp/pachimo/ltorivereset
- 6確: https://www.kaku6.jp/slot/revengers/
- スロベース 電源OFF/ON補助: https://slobase.jp/articles/tokyo-revengers-why-losing

### 境界監査
- 1geki 2025年9月新台スケジュール: https://1geki.jp/newmachinecalender/202509/
