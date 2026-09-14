更新日: 2026-09-15

## 現在地点
- recordCount: **1750**
- latestRecordAdded: **クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver. — No.1750**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-09-08_crea-hihouden-bonus-trigger-ver.md`
- chronologicalFrontier: **2025-09-08**
- schema: **resetBehavior v0.7**
- status: **2025-09-08_GROUP_OPEN_1_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1749実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- mainが前回作業地点No.1745よりNo.1749まで先行していたため、No.1746〜1749を重複再調査せず最新handoffを継承。
- No.1750 `クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver.` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-09-08群はhandoff既知4候補のうち1/4処理済みとしてOPENを維持。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1750 — クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver.
- path: `docs/real_machine_db/machines/2025-09-08_crea-hihouden-bonus-trigger-ver.md`
- manufacturer: **大都技研**
- formalModel: **LB／クレアの秘宝伝ボーナストリガーVER．／A2**
- inspectionCode: **530057**
- releaseDate: **2025-09-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate (market/standard): **98.1 / 99.2 / 101.2 / 103.7 / 106.6 / 112.3%**
- payoutRate (full technical play): **99.3 / 100.5 / 102.5 / 105.0 / 108.0 / 114.0%**
- BIG: **1/299.3 / 1/293.9 / 1/284.9 / 1/274.2 / 1/262.1 / 1/240.1**
- REG: **1/383.3 / 1/376.6 / 1/358.1 / 1/334.4 / 1/299.3 / 1/247.3**
- combined: **1/168.0 / 1/165.1 / 1/158.7 / 1/150.7 / 1/139.7 / 1/121.8**
- base: **約34G/50枚**
- BIG: **約356枚（BT込み）** / REG: **最大107枚**
- 天井: **非搭載**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1750 resetBehavior v0.7
- 天井非搭載のため、設定変更時のゲーム数天井RESET/短縮、据え置き天井進行、純電断天井進行はN/A。
- P-WORLDでコンプリート機能による打ち止め状態が設定変更で解除されることを直接確認。ただし朝一初当り恩恵ではなく運用状態解除として分離。
- 朝一専用モード、設定変更専用モード、高確保証、CZ/初当り優遇、短縮天井などは公開資料で確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更/据え置き/純電源OFF→ON時のボーナス成立内部フラグ、BT途中状態、表示/カスタム状態を比較する機種固有資料は、正式型式・略称・電断/電源投入/BT中電断まで再探索しても固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 本機固有の有利区間3条件契約も直接資料を固定できず、BT/スマスロ一般論から補完していない。
- 本機固有ガックン条件・発生率、ランプ/表示による設定変更確定判別は検索語変更後も `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値は天井・モード・恩恵率/不利率について `NONE_FOUND_AFTER_RESEARCH`。

## conflicts / source normalization
- BIG総獲得は大都系発表・一撃・パチビー・HAZUSE等で `約356枚` が一致する一方、P-WORLD説明文に `約358枚` 表記あり。canonicalは約356枚、358枚は `CONFLICT_MINOR_DESCRIPTION_ROUNDING_OR_TYPO` として保持。
- HAZUSEは完全攻略時99.3〜114.0%を前面表示するが、一撃・パチビー等は通常攻略/市場想定98.1〜112.3%と完全攻略99.3〜114.0%を併記。定義差のため平均せず両系列を保持。

## 2025-09-08境界 — OPEN 1/4 known canonical
1. クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver. — No.1750 DONE
2. スマスロ 東京リベンジャーズ — NEXT
3. SLOTドルアーガの塔 — QUEUED
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
- 最新mainを再同期しNo.1750と本handoffを確認。
- **No.1751候補「スマスロ 東京リベンジャーズ」— 2025-09-08** から本線を継続する。
- 続いて `SLOTドルアーガの塔` / `スマスロ ドルアーガの塔` を別型式・別仕様として処理する。
- 2025-09-08群完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## 今回の主要ソース
取得日: 2026-09-15

### No.1750 クレアの秘宝伝 BT ver.
- 大都技研公式: https://www.daitogiken.com/contents/product/slot/creab/
- 大都技研 スロット機種一覧: https://www.daitogiken.com/products/slot/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-97477/
- HAZUSE 機種情報: https://hazuse.com/hd/530057h/
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/SX0109/
- 一撃 機種解析: https://1geki.jp/slot/l_crea/
- 一撃 オンライン遊技説明: https://1geki.jp/slot/l_crea/39/
- パチビー 機種情報: https://www.pachibee.jp/machines/index/225080003
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10325
- 遊技日本 新機種記事: https://yugi-nippon.com/pachinko-new-machine/post-72505/
- 6確 後発解析: https://www.kaku6.jp/slot/crea/

### 境界監査
- 1geki 2025年9月新台スケジュール: https://1geki.jp/newmachinecalender/202509/
