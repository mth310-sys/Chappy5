更新日: 2026-09-15

## 現在地点
- recordCount: **1800**
- latestRecordAdded: **スロット ソードアート・オンラインⅡ — No.1800**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-06-08_slot-sword-art-online-ii.md`
- chronologicalFrontier: **2026-06-08**
- schema: **resetBehavior v0.7**
- status: **2026-06-08_GROUP_CLOSED_3_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1799を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1799 `スマスロ BIRDIE WING -Golf Girls' Story-` の次から継続し、No.1800 `スロット ソードアート・オンラインⅡ` を追加。
- 大都技研公式、1geki、必勝本、情報島+、パチビー等で2026-06-08導入を照合。型式 `L／ソードアート・オンラインⅡ／PA1`、検定番号 `531088`、製造パオン・ディーピー。
- 機械割 `97.6 / 98.8 / 100.2 / 105.3 / 110.4 / 114.9%`。
- CZ初当り `1/238.4 / 1/232.3 / 1/232.7 / 1/218.9 / 1/225.2 / 1/191.7`。
- AT初当り `1/386.2 / 1/364.3 / 1/368.1 / 1/326.8 / 1/340.6 / 1/269.6`。
- ベース約31G/50枚、下位AT純増約3.6枚/G、上位AT約7.2枚/G、下位AT初期差枚150枚+α。
- 通常天井はCZ間実ゲーム数最大499G+α、AT間最大1200G+α、液晶CZ最大800G+α。
- 設定変更時はCZ間実ゲーム数天井が256G+αへ短縮。有利区間・天井・内部モード・内部状態・通常時ゲーム数をRESET/再抽選。
- GGOモード「死銃」への移行率が設定変更時に優遇。具体移行率は公開確認できず `PUBLIC_EXACT_RATE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き/純電源OFF→ONは1geki・必勝本の直接比較で天井、ゲーム数モード、GGOモード、内部状態、有利区間、内部ゲーム数をCARRY_OVER。液晶表示は0Gへ戻るが内部ゲーム数は引継ぎ。
- 開始ステージ、バレットカウンター、アイテムの変更/電断時挙動は高優先資料でも調査中。本機固有ガックン条件/発生率は再探索後UNVERIFIED。
- なな徹・1gekiは設定変更時について「設定不問で機械割/出玉率100%Over」と掲載。ただしメーカー公表機械割とは分離し解析上の朝一評価値として保存。
- 情報島+の2026-06-08導入前後記事と過去新台一覧で、同日パチスロ新台が `L戦国乙女5` / `BIRDIE WING` / `SAOⅡ` の3機で一致。既出追加パネルを新規本体に重複計上しないため、2026-06-08群を **CLOSED 3/3** とした。

## No.1800 — スロット ソードアート・オンラインⅡ
- path: `docs/real_machine_db/machines/2026-06-08_slot-sword-art-online-ii.md`
- manufacturer: **パオン・ディーピー / 大都技研ブランド**
- formalModel: **L／ソードアート・オンラインⅡ／PA1**
- inspectionCode: **531088**
- releaseDate: **2026-06-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.8 / 100.2 / 105.3 / 110.4 / 114.9%**
- czInitialHit: **1/238.4 / 1/232.3 / 1/232.7 / 1/218.9 / 1/225.2 / 1/191.7**
- atInitialHit: **1/386.2 / 1/364.3 / 1/368.1 / 1/326.8 / 1/340.6 / 1/269.6**
- base: **約31G/50枚**
- netIncrease: **下位AT 約3.6枚/G / 上位AT 約7.2枚/G**
- basicPayout: **下位AT 初期150枚+α**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1800 resetBehavior v0.7
- 設定変更: 有利区間RESET、天井RESET、ゲーム数モード/GGOモード/状態を再抽選、CZ間天井499G+α→256G+α短縮。
- 据え置き: 有利区間・天井・内部モード・内部状態・内部ゲーム数CARRY_OVER。
- 純電源OFF→ON: 天井・ゲーム数モード・GGOモード・状態・有利区間・内部ゲーム数CARRY_OVER。液晶表示のみ0G。
- モード: 設定変更時はGGOモード「死銃」移行率優遇。具体率は未公表/調査中。
- 朝一恩恵: CZ間天井256G+α短縮、死銃モード優遇。解析媒体は設定不問で朝一機械割100%Overと掲載。
- 朝一不利: 固定的な変更時専用冷遇は再探索後NONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 有効な即時判別方法は現時点で未判明。表示0Gは変更/据え置き共通。本機固有ガックンUNVERIFIED_AFTER_RESEARCH。
- 公開朝一数値: CZ間天井499G+α→256G+α。設定変更時死銃具体率はPUBLIC_EXACT_RATE_NOT_FOUND_AFTER_RESEARCH。

## conflicts / normalization
- 性能コアのCZ/AT確率・機械割は1geki、必勝本、ちょんぼりすた、ABEMA系記事で一致し主要CONFLICTなし。
- 必勝本機種トップの `2026年5月11日` 表示は記事/ページ管理日と判断。本文・公式・複数高優先資料が導入日2026-06-08で一致するためcanonicalは2026-06-08。
- 一部二次資料の「メダル機」誤分類は、大都技研公式スマスロ表記と複数高優先資料に反するため不採用。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで実体を一意固定できない状態を継続。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1800:
- 大都技研公式製品サイト: https://www.daitogiken.com/contents/product/slot/sao2/
- 大都技研公式製品情報: https://www.daitogiken.com/contents/product/slot/sao2/info.html
- 1geki 機種概要: https://1geki.jp/slot/l_sao2/
- 1geki 天井・朝一: https://1geki.jp/slot/l_sao2/3/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89855/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/102408/
- 必勝本 小役確率&コイン持ち: https://hisshobon.com/machineinfo/102424/
- 必勝本 GGOモード: https://hisshobon.com/machineinfo/137326/
- なな徹: https://nana-press.com/kaiseki/machine/1158/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/256112/
- パチナビ: https://pachinavi.net/machines/smasloth-sao-2/
- パチビー: https://www.pachibee.jp/machines/index/226050001
- 情報島+ 機種情報: https://p-johojima.jp/machine_spec/post-31303/
- 情報島+ 2026-06-08新台群レビュー: https://p-johojima.jp/colum/post-33970/
- 情報島+ 過去新台情報: https://p-johojima.jp/machine_spec/post-2074/

## 2026-06-08 canonical queue — CLOSED 3/3
1. ~~L戦国乙女5 業火を穿つ宿焔の双刃 — No.1798 DONE~~
2. ~~スマスロ BIRDIE WING -Golf Girls' Story- — No.1799 DONE~~
3. ~~スロット ソードアート・オンラインⅡ — No.1800 DONE~~

boundary audit:
- 情報島+の導入前評価・導入後評価・過去新台一覧で3機一致。
- `スマスロ 甲鉄城のカバネリ 海門決戦（咲かせや咲かせパネル）` は追加パネルであり、既収録の機種本体と重複するため新規canonical本体キューに含めない。
- 現時点の再監査ではPB・別型式・地域先行・延期/段階導入による追加canonical本体は確認していない。

## 次回再開地点
- 最新mainを再同期しNo.1800と本handoffを確認。
- **No.1801候補「スマート沖スロ ダークハイビ」— 2026-06-22** から継続。
- No.1801処理後、2026-06-22群のPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
