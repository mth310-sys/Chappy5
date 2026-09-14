更新日: 2026-09-15

## 現在地点
- recordCount: **1753**
- latestRecordAdded: **スマスロ ドルアーガの塔 — No.1753**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-09-08_smart-slot-druaga-no-tou.md`
- chronologicalFrontier: **2025-09-08**
- schema: **resetBehavior v0.7**
- status: **2025-09-08_BOUNDARY_CLOSED_4_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- mainが前回作業地点No.1745よりNo.1749まで先行していたためNo.1746〜1749を重複再調査せず継承。
- No.1750 `クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver.`、No.1751 `スマスロ 東京リベンジャーズ`、No.1752 `SLOTドルアーガの塔`、No.1753 `スマスロ ドルアーガの塔` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-09-08群は1geki月間新台スケジュールのパチスロ4機と一致し、メダル/スマスロ版ドルアーガを型式別に分離したうえで4/4処理。PB・別型式・地域先行・延期/段階導入も再監査してCLOSED。
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
- コンプリート機能打ち止め状態が設定変更で解除されることを確認するが、朝一初当り恩恵とは分離。
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

## No.1752 — SLOTドルアーガの塔
- path: `docs/real_machine_db/machines/2025-09-08_slot-druaga-no-tou.md`
- manufacturer: **ミズホ / MIZUHO**
- formalModel: **S／ドルアーガの塔／ZU**
- inspectionCode: **4S1143**
- releaseDate: **2025-09-08**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **99.0 / 100.3 / 102.3 / 104.9%**
- fullTechnical: **101.7 / 103.1 / 105.2 / 107.9%**
- BIG: **1/299.3 / 1/291.3 / 1/280.1 / 1/266.4**
- REG: **1/448.9 / 1/436.9 / 1/420.1 / 1/399.6**
- combined: **1/179.6 / 1/174.8 / 1/168.0 / 1/159.8**
- base: **約34.8G/50枚**
- netIncrease: **AT約0.2枚/G**
- BIG平均約252枚 / REG最大55枚 / 天井非搭載
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1752 resetBehavior v0.7
- 天井非搭載。設定変更時の有利区間RESET、据え置き時CARRY_OVERをなな徹で直接確認。
- 純電源OFF→ONだけを独立比較した機種固有高優先資料は再探索後も固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 設定変更専用の天井短縮、朝一モード/初当り優遇、公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- AT/チャンスタイム/ボーナス内部状態の3条件比較は推測せずUNVERIFIEDを維持。
- 固有ガックン条件・発生率、ランプ/表示による設定変更確定判別は `UNVERIFIED_AFTER_RESEARCH`。

## No.1753 — スマスロ ドルアーガの塔
- path: `docs/real_machine_db/machines/2025-09-08_smart-slot-druaga-no-tou.md`
- manufacturer: **ミズホ / MIZUHO**
- formalModel: **Lドルアーガの塔ZA**
- inspectionCode: **5S0405**
- releaseDate: **2025-09-08**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **99.0 / 100.3 / 102.3 / 104.9%**
- fullTechnical: **101.7 / 103.1 / 105.2 / 107.9%**
- BIG: **1/299.3 / 1/291.3 / 1/280.1 / 1/266.4**
- REG: **1/448.9 / 1/436.9 / 1/420.1 / 1/399.6**
- combined: **1/179.6 / 1/174.8 / 1/168.0 / 1/159.8**
- base: **約34.8G/50枚**
- netIncrease: **AT約0.2枚/G**
- BIG平均約252枚 / REG最大55枚 / 天井非搭載
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1753 resetBehavior v0.7
- 天井非搭載。設定変更時の有利区間RESET、据え置き時CARRY_OVERをなな徹で直接確認。
- 純電源OFF→ONだけを独立比較した機種固有高優先資料は再探索後も固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 設定変更専用の天井短縮、朝一モード/初当り優遇、公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- AT/チャンスタイム/ボーナス内部状態の3条件比較は推測せずUNVERIFIEDを維持。
- 固有ガックン条件・発生率、ランプ/表示による設定変更確定判別は `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / source normalization
- No.1750 BIG総獲得は主要資料で約356枚が一致する一方P-WORLD説明に約358枚あり。canonicalは約356枚、358枚は `CONFLICT_MINOR_DESCRIPTION_ROUNDING_OR_TYPO`。
- No.1750の通常攻略98.1〜112.3%と完全攻略99.3〜114.0%は定義差のため両系列保持。
- No.1751導入/販売台数は約20,000台と25,000台の資料差があるが性能必須値ではなく定義差もあるためコアへ採用しない。
- No.1751ベースは主要業界/解析資料の約32Gをcanonical。一部二次資料の計算文中34G相当は隔離。
- No.1752/1753のベース34.8Gと業界資料約35Gは丸め差。完全攻略値の一部業界表 `1/101.7` 等は率の誤フォーマットとしてcanonicalへ混入させない。
- ドルアーガのメダル版とスマスロ版は性能値が共通でも、型式 `S／ドルアーガの塔／ZU` / `Lドルアーガの塔ZA`、検定番号 `4S1143` / `5S0405` が異なるため別レコードを維持。

## 2025-09-08境界 — CLOSED 4/4 canonical
1. クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver. — No.1750 DONE
2. スマスロ 東京リベンジャーズ — No.1751 DONE
3. SLOTドルアーガの塔 — No.1752 DONE
4. スマスロ ドルアーガの塔 — No.1753 DONE

boundaryAudit:
- 1geki 2025年9月新台スケジュールは2025-09-08のパチスロを上記4機として掲載。
- HAZUSE/グリーンべると/G-netでドルアーガ2仕様の正式型式を別個に確認。
- 追加PB・別型式・同日全国導入として独立レコード化すべき別スロット機種は再検索で固定できず。
- 次の同月パチスロ導入日は1geki上2025-09-22で `マジカルハロウィン ボーナストリガー` 1機。
- よって2025-09-08群をCLOSED。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- GitHub実体ツリー/pathを基準にカーソル直後の既存実レコードを確定する方針を継続。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**

## 次回再開地点
- 最新mainを再同期しNo.1753と本handoffを確認。
- **No.1754候補「マジカルハロウィン ボーナストリガー」— 2025-09-22** から本線を継続する。
- 1geki 2025年9月スケジュールでは2025-09-22のパチスロは現時点1機。処理後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
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

### No.1752 / No.1753 ドルアーガの塔
- ユニバーサル公式: https://www.universal-777.com/product/slot/druaga/
- HAZUSE SLOT: https://hazuse.com/machine/pachislot/4S1143/
- HAZUSE smart: https://hazuse.com/machine/pachislot/5S0405/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-96513/
- G-net: https://g-net-ps.com/info/s0239/
- 一撃 SLOT版: https://1geki.jp/slot/s_druaga/
- 一撃 smart版: https://1geki.jp/slot/l_druaga/
- なな徹 機種概要: https://nana-press.com/kaiseki/machine/1009/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/1009/31589/
- 6確: https://www.kaku6.jp/slot/druaga/

### 境界監査
- 1geki 2025年9月新台スケジュール: https://1geki.jp/newmachinecalender/202509/
