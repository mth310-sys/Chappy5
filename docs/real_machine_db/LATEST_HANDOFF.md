更新日: 2026-09-15

## 現在地点
- recordCount: **1798**
- latestRecordAdded: **L戦国乙女5 業火を穿つ宿焔の双刃 — No.1798**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-06-08_l-sengoku-otome5.md`
- chronologicalFrontier: **2026-06-08**
- schema: **resetBehavior v0.7**
- status: **2026-06-08_GROUP_OPEN_1_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1797を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1797 `LB スロット GALFY` の次から同一キューを継続し、No.1798 `L戦国乙女5 業火を穿つ宿焔の双刃` を追加。
- 型式 `L戦国乙女5L8`、検定番号 `6S0006`、オリンピア製造/平和、2026-06-08導入を業界記事・HAZUSE・解析サイトで照合。
- 設定別AT初当りは `1/359.5 / 1/350.8 / 1/332.5 / 1/302.8 / 1/281.0 / 1/262.9`、機械割は `97.9 / 98.9 / 101.0 / 106.2 / 111.1 / 114.9%`。
- ベース約31.0G/50枚。強カワRUSHは純増約2.7枚/G・初期45G+α、上位の真強カワRUSHは約4.8枚/G・初期100G+α、エンディングは約6.9枚/G。
- 通常天井はAT間999G+α（実ゲーム）/最大6周期。設定変更時は650G+α/最大4周期へ短縮。
- 設定変更時は有利区間・天井・内部状態・周期テーブル・周期モード・乙女ストラップ・ゴエモン依頼ポイントをRESET。据え置き時はこれらをCARRY_OVER。
- 巫女ポイントは設定変更時にランダム減算状態から開始。
- 純電源OFF→ONは有利区間・天井の引継ぎを機種別比較で直接確認。他の内部状態/周期テーブル等の純電断個別契約は高優先資料で直接固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 朝一の確定的変更判別は現時点で未判明。ただし650G+αまたは4周期到達で天井非発動なら据え置き可能性が高い。
- 本機固有ガックン条件/発生率は表記揺れ・型式・メーカー・シリーズ名を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- なな徹独自シミュレーションのリセット期待値はメーカー値と分離保存（設定1・等価等の前提で0G -1,355円、200G +232円、300G +1,390円）。
- 一部独自集計の初当り実践値や50枚約32.0G記載はcanonical公開値と定義/優先度が異なるため平均化せず分離。ベースは複数高優先一致の約31.0Gをcanonical。
- 2026-06-08群は情報島+導入前後記事で `戦国乙女5 / BIRDIE WING / ソードアート・オンラインⅡ` の3本体が一致。パチマガスロマガに同日掲載の `甲鉄城のカバネリ 海門決戦（咲かせや咲かせパネル）` は既存機種の追加パネルのため新規canonical本体として数えない。

## No.1798 — L戦国乙女5 業火を穿つ宿焔の双刃
- path: `docs/real_machine_db/machines/2026-06-08_l-sengoku-otome5.md`
- manufacturer: **オリンピア製造 / 平和**
- formalModel: **L戦国乙女5L8**
- inspectionCode: **6S0006**
- releaseDate: **2026-06-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 101.0 / 106.2 / 111.1 / 114.9%**
- AT: **1/359.5 / 1/350.8 / 1/332.5 / 1/302.8 / 1/281.0 / 1/262.9**
- base: **約31.0G/50枚**
- netIncrease: **通常AT 約2.7枚/G / 上位AT 約4.8枚/G / ED 約6.9枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1798 resetBehavior v0.7
- 設定変更: 有利区間・天井・内部状態・周期テーブル・周期モード・乙女ストラップ・ゴエモン依頼ポイントをRESET。巫女ポイントはランダム減算。
- 据え置き: 上記主要項目をCARRY_OVER。
- 純電源OFF→ON: 有利区間・天井CARRY_OVERを直接確認。他の内部項目の個別文言はUNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH。
- ゲーム数/天井: 999G+α→650G+α、最大6周期→最大4周期。
- モード/状態: 周期テーブル・周期モード・内部状態は変更時RESET/据え置きCARRY_OVER。具体的リセット振り分け率はUNVERIFIED_AFTER_RESEARCH。
- 有利区間: 設定変更RESET / 据え置きCARRY_OVER / 純電断CARRY_OVER。
- 朝一恩恵: 天井短縮、周期短縮、巫女ポイントランダム減算。
- 朝一不利: 設定変更専用の固定不利要素はNONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 確定判別は未判明。650G+α/4周期超過は据え置き推測材料。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- 公開朝一数値: リセット天井650G+α、最大4周期。なな徹独自設定1等価期待値 0G -1,355円 / 200G +232円 / 300G +1,390円（解析サイト独自値として分離）。

## conflicts / normalization
- 公開AT初当り・機械割は6確/なな徹/複数解析で一致。独自実践集計値は公表値と混ぜない。
- ベースは約31.0G/50枚が複数高優先資料で一致。一部低優先二次資料の約32.0Gは採用せず別資料差として保持。
- 通常の有利区間リセット時には剣聖CHANCE恩恵があるが、1gekiは設定変更時を除くと明記。設定変更リセット恩恵へ誤転記しない。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで実体を一意固定できない状態を継続。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1798:
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/33318/amusement
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/33314/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/6S0006/
- 情報島+ 機種情報: https://p-johojima.jp/machine_spec/post-30373/
- 情報島+ 2026-06-08導入群: https://p-johojima.jp/colum/post-33970/
- 6確: https://www.kaku6.jp/slot/otome5/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/1160/36410/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1160/37316/
- 1geki 天井・リセット: https://1geki.jp/slot/l_otome5/3/
- 1geki 強カワRUSH: https://1geki.jp/slot/l_otome5/81/
- ジャグラーズネット: https://jugglersnet.com/chumoku/sengokuotome5
- パチビー: https://www.pachibee.jp/machines/index/226050000
- スロベース: https://slobase.jp/machines/sengoku-otome5
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/olympia/065007.php

## 2026-06-08 canonical queue — OPEN 1/3
1. ~~L戦国乙女5 業火を穿つ宿焔の双刃 — No.1798 DONE~~
2. **スマスロ BIRDIE WING -Golf Girls' Story- — candidate No.1799**
3. **スロット ソードアート・オンラインⅡ**

queue note:
- `スマスロ 甲鉄城のカバネリ 海門決戦（咲かせや咲かせパネル）` は2026-06-08追加パネル。既収録の機種本体と重複するため新規canonical本体キューには含めない。

次境界:
- 2026-06-22: **スマート沖スロ ダークハイビ**

## 次回再開地点
- 最新mainを再同期しNo.1798と本handoffを確認。
- **No.1799候補「スマスロ BIRDIE WING -Golf Girls' Story-」— 2026-06-08** から継続。
- その後 `スロット ソードアート・オンラインⅡ` を処理し、2026-06-08群3/3完了後にPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
