更新日: 2026-09-15

## 現在地点
- recordCount: **1792**
- latestRecordAdded: **Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE — No.1792**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-04-20_gundam-unicorn-kakusei-drive.md`
- chronologicalFrontier: **2026-04-20**
- schema: **resetBehavior v0.7**
- status: **2026-04-20_BOUNDARY_CLOSED_3_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1791を再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1791まで完了済みを確認し、次の未処理No.1792候補 `Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE` から継続。
- No.1792を追加し、性能コアとresetBehavior v0.7を同時収集。
- 型式 `L機動戦士ガンダムユニコーン2jA`、検定番号 `5S1377`、導入日2026-04-20をHAZUSE等で固定。
- 設定1〜6。機械割97.7/98.9/101.0/105.4/110.5/114.9%。CZ 1/298.5〜1/239.8、AT 1/471.9〜1/392.3。
- ベース約33G/50枚。通常AT純増約2.0枚/G、ボーナス/上位AT約6.0枚/G。
- 通常CZ間天井800G+α、AT間天井1400G+α。設定変更後はCZ400G+α、AT1000G+αへ短縮。
- 設定変更時は内部状態RESET、通常時ゲーム数をランダム内部加算する場合あり。CZスルー回数天井はRESETされるが短縮なし。
- 純電源OFF→ONでは天井・内部状態CARRY_OVERを複数解析系統で照合。
- 有利区間リセット後は上位CZ「覚醒の光」移行濃厚という実戦解析を保存。ただし設定変更時そのものの有利区間RESETを機種固有高優先資料で直接固定する文言は未確認のため一般則で補完していない。
- 本機固有ガックン条件/発生率、朝一専用シナリオ振り分け、開始ステージ差は検索語/資料系統変更後もUNVERIFIED。
- 2026-04-20導入群は情報島+の導入前評価および過去新台一覧で3機一致。`ミリオンゴッド-神々の軌跡- / アニマルスロット ドッチ / ガンダムユニコーン 覚醒DRIVE` の3/3完了につきBOUNDARY CLOSED。

## No.1792 — Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE
- path: `docs/real_machine_db/machines/2026-04-20_gundam-unicorn-kakusei-drive.md`
- manufacturer: **ビスティ**
- formalModel: **L機動戦士ガンダムユニコーン2jA**
- inspectionCode: **5S1377**
- releaseDate: **2026-04-20**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 98.9 / 101.0 / 105.4 / 110.5 / 114.9%**
- CZ: **1/298.5 / 1/287.0 / 1/265.1 / 1/247.7 / 1/243.9 / 1/239.8**
- AT: **1/471.9 / 1/456.6 / 1/427.8 / 1/403.9 / 1/398.3 / 1/392.3**
- base: **約33G/50枚**
- netIncrease: **通常AT約2.0枚/G / ボーナス・上位AT約6.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1792 resetBehavior v0.7
- 設定変更: 内部状態RESET。CZ間400G+α / AT間1000G+αへ短縮。CZスルー回数RESET。通常時ゲーム数の内部加算が発生する場合あり。
- 据え置き: 天井・内部状態はCARRY_OVER。CZスルー回数も二次資料支持。
- 純電源OFF→ON: 天井・内部状態CARRY_OVER。
- ゲーム数/天井: 通常CZ800G+α / AT1400G+α → reset CZ400G+α / AT1000G+α。
- モード/状態: 内部状態は設定変更RESET、電断CARRY。設定変更専用モード/シナリオ数値はUNVERIFIED。
- 有利区間: エンディング後等のリセットで上位CZ「覚醒の光」移行濃厚（実戦解析）。設定変更時の直接機種固有文言はUNVERIFIED。
- 朝一恩恵: CZ/AT天井それぞれ最大400G短縮、内部ゲーム数加算の可能性。
- 朝一不利: CZスルー回数がRESETされるため、前日深いスルーを引き継ぐ据え置きとの比較では不利になり得る。
- 変更判別: 短縮天井は事後的材料。本機固有ガックン/表示確定判別はUNVERIFIED。
- 公開朝一数値: resetCZCeiling=400G+α / resetATCeiling=1000G+α。

## conflicts / normalization
- 主要性能コア、導入日、型式、検定番号に重大CONFLICTなし。
- メーカー表記は媒体によりビスティ/SANKYOが混在するがブランド表記差として整理し、canonical manufacturerはビスティ。
- 有利区間の設定変更時直接契約は一般仕様から推測補完しない。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は現mainで一意の実体を取得できていない状態を継続。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1792:
- グリーンべると: https://web-greenbelt.jp/post-111024/
- HAZUSE: https://hazuse.com/hd/5s1377/
- 1geki 天井/朝一: https://1geki.jp/slot/l_gundam_uc2/3/
- 6確: https://www.kaku6.jp/slot/gundamuc2/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/1123/36307/
- パチビー: https://www.pachibee.jp/machines/index/226030007
- 必勝本: https://p.hisshobon.jp/vpage/2775/2
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/252081/
- スロベース: https://slobase.jp/machines/gundam-unicorn
- 情報島+ 4/20導入前評価: https://p-johojima.jp/colum/post-30468/
- 情報島+ 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/

## 2026-04-20 canonical queue — CLOSED 3/3
1. ~~スマスロ ミリオンゴッド-神々の軌跡- — No.1790 DONE~~
2. ~~アニマルスロット ドッチ — No.1791 DONE~~
3. ~~Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE — No.1792 DONE~~

## next canonical boundary — 2026-05-11
情報島+の導入後一覧、イチカツ、実店舗新台案内でパチスロ4機が一致:
1. **スマスロ バイオハザードRE:3 — candidate No.1793**
2. **スマスロスーパーリオエース2 — candidate No.1794**
3. **Lタクトオーパス デスティニー — candidate No.1795**
4. **スマスロ ビッグドリーム THE GOLDEN PUSHER — candidate No.1796**

次境界候補:
- 2026-05-25: **LB スロット GALFY**

## 次回再開地点
- 最新mainを再同期しNo.1792と本handoffを確認。
- **No.1793候補「スマスロ バイオハザードRE:3」— 2026-05-11** から継続。
- 5/11群4機を順に処理し、PB・別型式・地域先行・延期/段階導入を再監査して境界をCLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
