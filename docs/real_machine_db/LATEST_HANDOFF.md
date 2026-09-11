更新日: 2026-09-11

## 現在地点
- recordCount: **1317**
- latestRecordAdded: **パチスロ 蒼穹のファフナーEXODUS — No.1317**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-11-05_fafner-exodus.md`
- chronologicalFrontier: **2019-11-05**
- frontierLatestMachine: **パチスロ 蒼穹のファフナーEXODUS — No.1317**
- schema: **resetBehavior v0.7**
- status: **2019_11_05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再取得して正本進捗を確認。
- `INDEX.md` は旧表示のため、README明示ルールどおり `LATEST_HANDOFF.md` とmain実レコードを優先。
- 2019-11-05群の残り **パチスロ 蒼穹のファフナーEXODUS — No.1317** がmainへ追加済みであることを再取得確認。並行更新を検出したため同名レコードは上書きせず、実レコードを正としてhandoffのみ同期した。
- 2019-11-05群は **北斗の拳 天昇 / サラリーマン金太郎～MAX～ / 蒼穹のファフナーEXODUS** の3機を処理済み。モゲスロ2019導入カレンダー等の横断確認で同日群をCLOSEDとした。
- 11/06〜12/01境界を再監査。複数導入カレンダー上、次の明確なパチスロ導入群は **2019-12-02**。11月中旬〜下旬に実導入済みと固定できる追加スロット機は今回の横断では確認できず、本線は12/02へ進める。
- 遡及QAについて、旧handoffが次対象としていた `2007-03_godzilla-pachislot-wars.md` はmain実ファイル上すでに2026-09-11付でresetBehavior v0.7へ正式化済み。次回は再処理せず、Git追加順/未 formalized 状態をmainから再計算する。

## No.1317 — パチスロ 蒼穹のファフナーEXODUS
- manufacturer: **SANKYO**
- formalModel: **`S蒼穹のファフナーEXODUS bA`**
- certificationNumber: **`8S1335`**
- releaseDate: **2019-11-05**
- generation/system: **6号機 / AT / 疑似ボーナス＋差枚数管理AT / V抽選役物**
- payout: **97.9 / 99.4 / 101.6 / 104.1 / 107.4 / 112.0%**
- 蒼穹BONUS: **1/223 → 1/197**
- Vバトル: **1/904 → 1/643**
- AT「蒼穹作戦」: **1/589 → 1/315**
- base: **約49.9G/50枚**
- AT純増: **約2.7枚/G**
- AT最低保証: **100枚**
- 通常時蒼穹BONUS: **20G**
- AT中BIG BONUS: **30G / 公式約3.1枚/G**

### resetBehavior v0.7 — No.1317
- 設定変更: **内部天井G RESET / CZ失敗回数RESET / 内部状態・モードRESET / 有利区間RESET / 非有利区間開始**。
- 据え置き: **内部天井G・CZ失敗回数・内部状態/モード・有利区間CARRY_OVER**。朝一液晶G数は0G系表示へ戻るため表示Gだけでは判別不可。
- 純電源OFF→ON: **天井G・CZ失敗回数・内部状態/モード・有利区間CARRY_OVER**、液晶0G/第1話開始。
- 第一ゲーム数天井: **555G → フェストゥム強襲**。失敗後はEXODUSゾーン、**777GでEXODUS LOOP**。
- CZ失敗回数天井: 有利区間移行時に再セット、**最大10回**。
- 朝一/有利区間移行時: **高確スタート確定**。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時は有利区間ランプ消灯タイプで、液晶0G・前兆発生も含め単純な設定変更判別は不可。
- 本機固有ガックン契約/率は検索語・資料系統を変えて再探索後も固定できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**。

## No.1317 品質メモ / CONFLICT
- 全国ホール導入日はHAZUSE・複数解析・導入カレンダーで **2019-11-05**。SANKYO公式オンライン博物館は導入年月を **2019.10** と表示するため、メーカー側月表示と全国導入開始日の定義差として保持。
- 機械割設定1は複数資料 **97.9%**、単一資料に **97.7%** があり、97.9%をcanonical、単一差をCONFLICTとして保持。
- 有利区間移行ゲームのレア役AT/Vバトル抽選は **弱約30% / 強約80%** 系と、別資料の **弱約60% / 強約90%** 系が競合。平均せずCONFLICT。朝一設定変更専用値とは断定しない。

## 2019-11-05群 — CLOSED
1. **パチスロ北斗の拳 天昇** — No.1315 / 処理済み。
2. **パチスロ サラリーマン金太郎～MAX～** — No.1316 / 処理済み。
3. **パチスロ 蒼穹のファフナーEXODUS** — No.1317 / 処理済み。

判定: **2019_11_05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 次群 — 2019-12-02
複数の2019年導入カレンダーで、12/02のパチスロは以下6機を確認。次回は重複有無をmainで再確認して、未処理を同じキュー順で処理する。
1. **喰霊-零- 運命乱**（JFJ）
2. **天下布武4**（セブンリーグ）
3. **パチスロ トータル・イクリプス2**（SANKYO）
4. **マジカルハロウィン7**（コナミアミューズメント）
5. **ルパン三世～イタリアの夢～**（平和）
6. **ドリームクルーン2**（オーイズミ）

2019-12-02群はモゲスロとパチンコ・パチスロ.comの当時カレンダーで6機一致。1gekiの後年カレンダーでも12/02群を照合。

## 継続監査
- `プレドキ！`: プレゴ専用PBまでは固定済み。P-WORLDで2019-12-02時点の機種DB掲載は確認済みだが、具体的初回ホール導入日未固定のため未登録継続。本線は止めない。
- 11/06〜12/01の追加機、PB、地域差、別型式については次回も境界再確認を行い、新証拠が出た場合は遡及追加する。
- 並行更新が存在するため、毎回必ず最新main実レコードを再取得し、同名ファイルをcreate/updateする前に存在確認する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 旧handoffの次対象 `docs/real_machine_db/machines/2007-03_godzilla-pachislot-wars.md` はmain上ですでに **resetBehavior v0.7 / 2026-09-11更新済み**を確認。
- 次回はGodzillaを再処理せず、Git追加順と `resetBehaviorQA` の現状を再取得して **次の未formalized実機レコードを再計算**する。
- 既存性能側の完了判定は崩さず、reset側だけ現行v0.7へ揃える方針を維持。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1317 を再取得。
2. mainで12/02群6機の既存有無を再確認。
3. 未処理の先頭 **`喰霊-零- 運命乱`** をNo.1318候補として、性能コア＋resetBehavior v0.7を収集。
4. 同じ12/02キューを継続し、群完了後に全メーカー/別型式/別スペック/PB/地域差を横断してCLOSED判定。
5. 遡及QAはGodzilla以後の **次の未formalizedレコードをmainから再計算**して再開。

## 主要出典 — 取得日 2026-09-11

### No.1317 蒼穹のファフナーEXODUS
- SANKYO公式オンライン博物館: https://www.sankyo-fever.jp/collection/897/
- HAZUSE 基本: https://hazuse.com/machine/pachislot/8S1335/genre/201/
- HAZUSE 天井/設定変更: https://hazuse.com/machine/pachislot/8S1335/genre/207/
- HAZUSE AT: https://hazuse.com/machine/pachislot/8S1335/genre/209/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/92344/
- グリーンべると: https://web-greenbelt.jp/00011499/
- スロットセブン: https://slot-seven.com/sokyunofafunaexodus-tenzyou/
- 期待値見える化: https://slotjin.com/slot/fafnerexodus-reset/
- パチスロメソッド: https://slotmethod.jp/archives/10321/

### 2019-12-02導入群
- モゲスロ 2019年新台導入日カレンダー: https://moge-site.com/new-slot2019
- パチンコ・パチスロ.com 2019導入日カレンダー: https://pachinkopachisro.com/archives/52807194.html
- 1geki 2019年12月新台スケジュール: https://1geki.jp/newmachinecalender/201912/
