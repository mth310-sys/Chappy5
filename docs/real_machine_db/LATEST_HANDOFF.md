更新日: 2026-09-15

## 現在地点
- recordCount: **1799**
- latestRecordAdded: **スマスロ BIRDIE WING -Golf Girls' Story- — No.1799**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-06-08_smartslot-birdie-wing.md`
- chronologicalFrontier: **2026-06-08**
- schema: **resetBehavior v0.7**
- status: **2026-06-08_GROUP_OPEN_2_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1798を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1798 `L戦国乙女5 業火を穿つ宿焔の双刃` の次から継続し、No.1799 `スマスロ BIRDIE WING -Golf Girls' Story-` を追加。
- 型式 `LバーディーウイングBC`、検定番号 `5S1538`、ユニバーサルブロス、2026-06-08導入を1geki・HAZUSE・複数解析で照合。
- 通常時初当り `1/266.7 / 1/264.1 / 1/257.3 / 1/256.0 / 1/255.9 / 1/255.9`、ST初当り `1/421.2 / 1/410.5 / 1/381.9 / 1/378.0 / 1/377.6 / 1/377.3`。
- 機械割canonical `97.5 / 98.6 / 102.1 / 106.0 / 110.0 / 112.4%`。設定2のみジャグラーズネット98.8%との資料差をCONFLICT保持。
- ベース約31.5G/50枚（設定1）。ウイングボーナス約2.6枚/G、バーディーボーナス系約5.0枚/G。
- 基本獲得はWB約50枚、BB約100枚、EPボーナス約200枚。基本STは1日20G+α×3日間大会方式。
- 通常天井は10周期消化後、設定変更後は7周期消化後へ短縮（3周期短縮）。天井恩恵はバーディーボーナス＝ST当選。
- 設定変更時は内部状態RESET。なな徹直接比較で有利区間・天井・周期RESET。據え置きは有利区間・天井・周期CARRY_OVER。
- 純電源OFF→ONは1geki直接比較で内部状態・天井周期CARRY_OVER。本機固有の純電断時有利区間直接文言は再探索後も `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 設定変更後の開始ステージは現在調査中。なな徹は有効なリセット判別方法は現時点で未判明と明記。本機固有ガックンも再探索後UNVERIFIED。
- 通常遊技中の有利区間リセット時は上位CZ「ビーナスバトル」移行恩恵があるが、1gekiは設定変更時を除くと明記。朝一設定変更恩恵へ混入しない。
- 天井表記は「10周期消化後/7周期消化後」と「最大11周期到達/最大8周期到達」が混在するが、次周期開始から前兆というカウント起点差。canonicalは消化済み周期数で統一。

## No.1799 — スマスロ BIRDIE WING -Golf Girls' Story-
- path: `docs/real_machine_db/machines/2026-06-08_smartslot-birdie-wing.md`
- manufacturer: **ユニバーサルブロス**
- formalModel: **LバーディーウイングBC**
- inspectionCode: **5S1538**
- releaseDate: **2026-06-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.6 / 102.1 / 106.0 / 110.0 / 112.4%**
- normalInitialHit: **1/266.7 / 1/264.1 / 1/257.3 / 1/256.0 / 1/255.9 / 1/255.9**
- stInitialHit: **1/421.2 / 1/410.5 / 1/381.9 / 1/378.0 / 1/377.6 / 1/377.3**
- base: **約31.5G/50枚（設定1）**
- netIncrease: **WB 約2.6枚/G / BB系 約5.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1799 resetBehavior v0.7
- 設定変更: 天井周期RESET、10周期→7周期短縮、内部状態RESET、有利区間RESET、周期RESET。
- 据え置き: 有利区間・天井・周期CARRY_OVER。内部状態の独立直接文言はUNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH。
- 純電源OFF→ON: 内部状態・天井周期CARRY_OVERを直接確認。有利区間そのものはUNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH。
- モード: 設定変更専用カップインモード等の具体振り分けはUNVERIFIED_AFTER_RESEARCH。
- 朝一恩恵: 周期天井3周期短縮、7周期消化後にBB＝ST当選。
- 朝一不利: 通常有利区間切断時のビーナスバトル恩恵は設定変更時除外。その他固定不利はNONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 有効な確定判別方法は未判明。開始ステージ調査中。本機固有ガックンUNVERIFIED_AFTER_RESEARCH。
- 公開朝一数値: 通常10周期→設定変更後7周期（3周期短縮）。

## conflicts / normalization
- 設定2機械割は多数高優先資料が98.6%、ジャグラーズネットのみ98.8%。平均化せず `CONFLICT_SOURCE_OUTLIER_98.8`、canonicalは98.6%。
- 天井呼称はHAZUSEの最大11/8周期到達と、1geki・なな徹等の10/7周期消化後が実質同じ。前兆開始周期の数え方差として分離。
- 純増は情報島+約2.5枚or5.0枚に対し、1geki・HAZUSE・6確等は約2.6枚or5.0枚。WB直接詳細の2.6枚/Gをcanonical。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで実体を一意固定できない状態を継続。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1799:
- 1geki 機種概要: https://1geki.jp/slot/l_birdie/
- 1geki 天井・朝一: https://1geki.jp/slot/l_birdie/3/
- 1geki ST: https://1geki.jp/slot/l_birdie/81/
- 1geki WB: https://1geki.jp/slot/l_birdie/61/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1538/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/5S1538/genre/201/
- 6確: https://www.kaku6.jp/slot/birdie/
- なな徹: https://nana-press.com/kaiseki/machine/1157/
- ジャグラーズネット: https://jugglersnet.com/chumoku/birdeie-wing
- 情報島+: https://p-johojima.jp/machine_spec/post-28506/
- パチビー: https://www.pachibee.jp/machines/index/226050002
- フリック7: https://flick7.net/slot/birdie_wing/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/256009/
- スロベース: https://slobase.jp/machines/birdie-wing

## 2026-06-08 canonical queue — OPEN 2/3
1. ~~L戦国乙女5 業火を穿つ宿焔の双刃 — No.1798 DONE~~
2. ~~スマスロ BIRDIE WING -Golf Girls' Story- — No.1799 DONE~~
3. **スロット ソードアート・オンラインⅡ — candidate No.1800**

queue note:
- `スマスロ 甲鉄城のカバネリ 海門決戦（咲かせや咲かせパネル）` は2026-06-08追加パネル。既収録の機種本体と重複するため新規canonical本体キューには含めない。

次境界:
- 2026-06-22: **スマート沖スロ ダークハイビ**

## 次回再開地点
- 最新mainを再同期しNo.1799と本handoffを確認。
- **No.1800候補「スロット ソードアート・オンラインⅡ」— 2026-06-08** から継続。
- No.1800処理後、2026-06-08群3/3についてPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
