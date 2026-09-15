更新日: 2026-09-15

## 現在地点
- recordCount: **1801**
- latestRecordAdded: **スマート沖スロ ダークハイビ — No.1801**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-06-22_smart-okislot-dark-haibi.md`
- chronologicalFrontier: **2026-06-22**
- schema: **resetBehavior v0.7**
- status: **2026-06-22_GROUP_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1800を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1800 `スロット ソードアート・オンラインⅡ` の次から継続し、No.1801 `スマート沖スロ ダークハイビ` を追加。
- パイオニア公式、遊技日本、1geki、必勝本、G-net、HAZUSE、なな徹、情報島+などを横断。
- 型式 `LダークハイビSB`、検定番号 `6S0070`、2026-06-22導入、ピーセカンド製造/パイオニアブランドを固定。
- 設定1/2/4/5/6の機械割 `97.5 / 99.4 / 102.5 / 106.8 / 110.0%`。
- 初当り `1/275.9 / 1/264.8 / 1/248.5 / 1/234.5 / 1/228.3`。
- BB出現率 `1/243.0 / 1/233.1 / 1/218.1 / 1/199.5 / 1/187.1`、RB `1/320.4 / 1/307.9 / 1/289.7 / 1/270.0 / 1/259.1`、合算 `1/138.2 / 1/132.6 / 1/124.4 / 1/114.7 / 1/108.6`。
- 約30.0G/50枚、純増約9.0枚/G、BIG約306枚、REG約106枚。
- 通常A/B/C天井約999G、引き戻し/チャンス約250G、ダーク準備約1005G。
- 設定変更時は天井/内部状態RESET。約40%でチャンスモード、約30%で通常B以上。チャンスは設定変更時のみ選択され、約250G天井。
- 純電源OFF→ONは天井/内部状態CARRY_OVERを複数二次資料で確認。
- 据え置き単独の高優先直接比較は未固定のため `SECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED`。
- 通常営業中の有利区間リセット恩恵（ダークハイビ50%以上+天国約40%=約90%で天国以上）は明確に設定変更時を除く。朝一リセット恩恵へ混入させない。
- 本機固有ガックン条件/発生率、朝一ランプ即時判別、設定変更時の残り約30%のモード詳細内訳、裏モード具体率は再探索後もUNVERIFIED。
- 6確内の一部「天井非搭載」表現は同ページ内の約999G/約250G天井記載と矛盾し、1geki/必勝本/他解析と不一致のため不採用。
- 情報島+過去新台一覧で2026-06-22のパチスロ新台はダークハイビ1機。PB/別型式/地域先行/延期・段階導入も再監査し、2026-06-22群を **CLOSED 1/1** とした。

## No.1801 — スマート沖スロ ダークハイビ
- path: `docs/real_machine_db/machines/2026-06-22_smart-okislot-dark-haibi.md`
- manufacturer: **ピーセカンド製造 / パイオニアブランド**
- formalModel: **LダークハイビSB**
- inspectionCode: **6S0070**
- releaseDate: **2026-06-22**
- settings: **1 / 2 / 4 / 5 / 6**
- payoutRate: **97.5 / 99.4 / 102.5 / 106.8 / 110.0%**
- initialHit: **1/275.9 / 1/264.8 / 1/248.5 / 1/234.5 / 1/228.3**
- base: **約30.0G/50枚**
- netIncrease: **約9.0枚/G**
- basicPayout: **BIG約306枚 / REG約106枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1801 resetBehavior v0.7
- 設定変更: 天井/内部状態RESET、通常モード再抽選。約40%チャンス、約30%通常B以上。
- 据え置き: 高優先機種固有直接比較未固定。二次資料から引継ぎ方向を支持するため `SECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED`。
- 純電源OFF→ON: 天井/内部状態CARRY_OVER。通常モード・裏モード・ダークカウンタ・有利区間の個別挙動はUNVERIFIED。
- ゲーム数/天井: 通常A/B/C約999G、引き戻し/チャンス約250G、ダーク準備約1005G。
- モード: 設定変更時約40%チャンス、約30%通常B以上。残り約30%と通常B以上内訳はPUBLIC_BREAKDOWN_NOT_FOUND_AFTER_RESEARCH。
- 有利区間: 設定変更RESETは複数解析支持。通常営業中リセットの強恩恵は設定変更時を除く。
- 朝一恩恵: 約40%で250G天井チャンス、約30%で通常B以上。
- 朝一不利: 設定変更時は通常営業中の有利区間リセット強恩恵対象外。ただし固定冷遇率はNONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: チャンスモード選択は事後推測材料。ガックン/朝一ランプ即時判別はUNVERIFIED_AFTER_RESEARCH。
- 公開朝一数値: チャンス約40%、通常B以上約30%、チャンス天井約250G。

## conflicts / normalization
- 6確の一部「天井非搭載」は同資料内の約999G/約250G天井記載および複数高優先解析と矛盾するため不採用。
- 一部二次資料の「Aタイプ」表記は、公式/業界/主要解析の擬似ボーナスATと整合しないためsystemTypeには採用しない。
- BB/RB/合算は連チャンを含む出現率、初当りは初回ボーナス当選率として定義を分けて保持。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainコード検索で今回も一致0件。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1801:
- パイオニア公式 2026年製品一覧: https://www.slot-pioneer.co.jp/products/2026.html
- パイオニア公式 プレスリリース: https://www.slot-pioneer.co.jp/release.html
- 1geki 機種概要: https://1geki.jp/slot/l_dark_haibi/
- 1geki 天井・朝一: https://1geki.jp/slot/l_dark_haibi/3/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89798/
- 必勝本 モード: https://hisshobon.com/machineinfo/137501/
- 必勝本 小役確率&コイン持ち: https://hisshobon.com/machineinfo/137499/
- 必勝本 非有利区間移行時: https://hisshobon.com/machineinfo/137505/
- なな徹: https://nana-press.com/kaiseki/machine/1167/
- ジャグラーズネット: https://jugglersnet.com/hikarimonoat/dark-haibi
- パチナビ: https://pachinavi.net/machines/smasloth-dark-hibi/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-76191/
- G-net: https://g-net-ps.com/info/s0272/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0070/
- 情報島+ 過去新台一覧: https://p-johojima.jp/machine_spec/post-2074/

## 2026-06-22 canonical queue — CLOSED 1/1
1. ~~スマート沖スロ ダークハイビ — No.1801 DONE~~

boundary audit:
- 情報島+過去新台一覧で2026-06-22のパチスロ新台は本機1機。
- パイオニア公式・業界販売資料でも同日導入を確認。
- 現時点の再監査ではPB・別型式・地域先行・延期/段階導入による追加canonical本体は確認していない。

## 次回再開地点
- 最新mainを再同期しNo.1801と本handoffを確認。
- **No.1802候補「戦国コレクション6」— 2026-07-06** から継続。
- 2026-07-06群は現時点で7機候補: `戦国コレクション6 / スマスロ ケロット5BT / Lパチスロ からくりサーカス2 / L南国育ち SPECIAL / ローティス / ヤバチバ / L ULTRAMAN 最終決戦`。
- No.1802以降を順次処理し、7/7完了後にPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
