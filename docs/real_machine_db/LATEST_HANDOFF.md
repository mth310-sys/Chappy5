更新日: 2026-09-15

## 現在地点
- recordCount: **1802**
- latestRecordAdded: **戦国コレクション6 — No.1802**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-07-06_sengoku-collection6.md`
- chronologicalFrontier: **2026-07-06**
- schema: **resetBehavior v0.7**
- status: **2026-07-06_GROUP_OPEN_1_OF_7_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1801を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1801 `スマート沖スロ ダークハイビ` の次から継続し、No.1802 `戦国コレクション6` を追加。
- コナミアミューズメント公式、1geki、必勝本、6確、P-WORLD、パチビー、情報島+等を横断。
- 型式 `L戦国コレクション6KS`、2026-07-06導入、コナミアミューズメント製造を固定。
- 設定1〜6の機械割 `97.9 / 99.1 / 100.9 / 106.0 / 110.1 / 114.9%`。
- AT初当り `1/363.6 / 1/350.4 / 1/329.8 / 1/289.4 / 1/268.5 / 1/252.2`。
- 約33.7G/50枚、通常AT純増約3.0枚/G、上位AT約7.7枚/G、時幻城RUSHは1セット100枚以上。
- 通常天井は最大999G+αまたは最大6周期。設定変更時は周期天井最大3周期へ短縮。
- 必勝本の設定変更/電源OFF ON直接比較で、天井G数・周期数・コレポイントは変更時RESET/電断時CARRY_OVER、通常モード・裏モード・規定リプレイ回数は変更時再抽選/電断時CARRY_OVERを固定。
- 朝一1周期目の規定コレ数222以下を保存。ただし通常時の1周期目にも適用される公開仕様があるため、単独の変更判別には使わない。
- 設定変更後1回目ATの時幻城ミッション勝利時ワンモア発生率63%（通常50%）を朝一関連公開数値として保存。
- 有利区間は複数二次解析で設定変更RESET/電断引継ぎ方向を支持するが、必勝本比較表では有利区間自体の直接欄がないため天井・モードより信頼度を下げた。
- 本機固有ガックン、朝一ランプ即時判別、通常/裏モード具体振り分け、ステージ三者比較、検定番号は再探索後も未固定。
- 一部資料の天井967G表記と主要解析の999G+αは平均せずCONFLICT注記。リセット後400G表記は3周期の換算目安であり仕様上の固定G数天井として採用しない。

## No.1802 — 戦国コレクション6
- path: `docs/real_machine_db/machines/2026-07-06_sengoku-collection6.md`
- manufacturer: **コナミアミューズメント**
- formalModel: **L戦国コレクション6KS**
- releaseDate: **2026-07-06**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.1 / 100.9 / 106.0 / 110.1 / 114.9%**
- AT initialHit: **1/363.6 / 1/350.4 / 1/329.8 / 1/289.4 / 1/268.5 / 1/252.2**
- base: **約33.7G/50枚**
- netIncrease: **通常AT約3.0枚/G / 上位AT約7.7枚/G**
- basicPayout: **時幻城RUSH 1セット100枚以上**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1802 resetBehavior v0.7
- 設定変更: 天井G数/周期/コレポイントRESET、通常/裏モード・規定リプレイ回数再抽選。
- 据え置き: 電源OFF→ON比較から天井・モード等の引継ぎ方向を支持。
- 純電源OFF→ON: 天井G数/周期/コレポイント/通常モード/裏モード/規定リプレイ回数CARRY_OVER。
- ゲーム数/天井: 通常999G+αまたは最大6周期、設定変更後は最大3周期。
- モード: 設定変更時再抽選、電断時引継ぎ。具体振り分け未公開。
- 有利区間: 設定変更RESET/電断引継ぎを複数二次解析が支持。直接一次比較未固定。
- 朝一恩恵: 最大3周期、1周期目222コレ以下、設定変更後1回目ATのワンモア発生率63%。
- 朝一不利: 固定冷遇率/専用不利モード等はNONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 4周期目到達は設定変更挙動と矛盾するため据え置き推測材料。ガックン/ランプ即時判別はUNVERIFIED。
- 公開朝一数値: 最大3周期、1周期目222コレ以下、ワンモア63%（通常50%）。

## conflicts / normalization
- 一部二次資料の「967G」天井見出しに対し、1geki/6確/P-WORLD/必勝本本文系統は999G+αで一致。canonicalは999G+α、967GはCONFLICT注記。
- 「リセット後400G」は3周期をゲーム数換算した実戦目安であり、固定ゲーム数天井として扱わない。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで安全に実体固定できていないため外部順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1802:
- コナミアミューズメント公式 発売決定: https://www.konami.com/amusement/corporate/ja/topics/20260406/
- コナミアミューズメント公式 稼働開始: https://www.konami.com/amusement/corporate/ja/topics/20260706/
- 6確: https://www.kaku6.jp/slot/sencolle6/
- 1geki 天井・朝一: https://1geki.jp/slot/l_sencolle6/3/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/138308/
- 必勝本 通常時: https://hisshobon.com/machineinfo/138335/
- 必勝本 規定コレ: https://hisshobon.com/machineinfo/138325/
- P-WORLD: https://www.p-world.co.jp/machine/database/10471
- パチビー: https://www.pachibee.jp/machines/index/226060001
- 情報島+: https://p-johojima.jp/machine_spec/post-30376/

## 2026-07-06 canonical queue — OPEN 1/7
1. ~~戦国コレクション6 — No.1802 DONE~~
2. スマスロ ケロット5BT — NEXT
3. Lパチスロ からくりサーカス2
4. L南国育ち SPECIAL
5. ローティス
6. ヤバチバ
7. L ULTRAMAN 最終決戦

## 次回再開地点
- 最新mainを再同期しNo.1802と本handoffを確認。
- **No.1803候補「スマスロ ケロット5BT」— 2026-07-06** から継続。
- 7/6群の残り6機を順次処理し、7/7完了後にPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
