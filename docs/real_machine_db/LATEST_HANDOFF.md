更新日: 2026-09-15

## 現在地点
- recordCount: **1793**
- latestRecordAdded: **スマスロ バイオハザードRE:3 — No.1793**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-05-11_biohazard-re3.md`
- chronologicalFrontier: **2026-05-11**
- schema: **resetBehavior v0.7**
- status: **2026-05-11_BOUNDARY_OPEN_1_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1792を再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1792まで完了済み、2026-04-20群CLOSEDを確認し、次の未処理No.1793候補 `スマスロ バイオハザードRE:3` から継続。
- No.1793を追加し、性能コアとresetBehavior v0.7を同時収集。
- 型式 `LバイオハザードRE：3 ZD`、検定番号 `5S1629`、導入日2026-05-11、メーカー エンターライズをHAZUSE・1geki等で固定。
- 設定1〜6。AT初当り 1/399.0〜1/311.2。canonical機械割 97.5/98.6/100.9/105.4/110.5/113.1%。
- ベース約32.8G/50枚。通常AT純増約1.0枚/G、擬似ボーナス/上位AT約4.5枚/G。
- 通常AT間天井1000G+α、設定変更後650G+αへ350G短縮。
- 設定変更時は天井/CZスルー回数/NE-ポイントをRESET、液晶ゲーム数0G。純電源OFF→ONでは天井/CZスルー/NE-ポイントをCARRY_OVER。
- 内部状態・心音レベル、純電断時液晶G/開始ステージ、本機固有ガックン、有利区間の設定変更時直接契約は再探索後もUNVERIFIED。
- 6確の設定2〜4機械割 98.7/101.0/105.2% は、1geki・必勝本等の 98.6/100.9/105.4% と競合するためCONFLICT保持。canonicalは複数一致側。

## No.1793 — スマスロ バイオハザードRE:3
- path: `docs/real_machine_db/machines/2026-05-11_biohazard-re3.md`
- manufacturer: **エンターライズ**
- formalModel: **LバイオハザードRE：3 ZD**
- inspectionCode: **5S1629**
- releaseDate: **2026-05-11**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate canonical: **97.5 / 98.6 / 100.9 / 105.4 / 110.5 / 113.1%**
- AT: **1/399.0 / 1/391.4 / 1/372.8 / 1/349.8 / 1/323.5 / 1/311.2**
- CZ(normal): **1/143.3 / 1/140.1 / 1/131.8 / 1/121.9 / 1/110.6 / 1/105.7**
- base: **約32.8G/50枚（設定1）**
- netIncrease: **通常AT約1.0枚/G / 擬似BONUS・上位AT約4.5枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1793 resetBehavior v0.7
- 設定変更: AT間天井/CZスルー回数/NE-ポイントRESET。液晶ゲーム数0G。天井650G+αへ短縮。開始ステージは実戦上ダウンタウン。
- 据え置き: 独立「据え置き」列は高優先資料で固定できず、純電源OFF→ONの直接引継ぎ証拠から天井/CZスルー/NE-ポイントCARRY_OVERを支持。
- 純電源OFF→ON: 天井/CZスルー回数/NE-ポイントCARRY_OVER。
- ゲーム数/天井: 通常1000G+α → reset 650G+α。CZは最大6スルー後7回目成功/AT濃厚。NE-ポイント最大500ptでCZ。
- モード/状態: 設定変更専用モード振り分けなし。内部状態・心音レベルは設定変更/電断ともUNVERIFIED（必勝本「現在調査中」）。
- 有利区間: 設定変更時の直接機種固有契約はUNVERIFIED_AFTER_RESEARCH。エンディング後の上位CZ移行は設定変更とは分離。
- 朝一恩恵: AT間天井350G短縮。
- 朝一不利: CZスルー回数/NE-ポイントがRESETされるため前日深い進行を保持する据え置きとの比較では不利になり得る。
- 変更判別: 650G+α短縮天井が事後材料。ステージ等の直接判別は未判明。本機固有ガックンUNVERIFIED。
- 公開朝一数値: resetATCeiling=650G+α / shortening=350G。

## conflicts / normalization
- canonical機械割は1geki・必勝本・複数二次資料一致の **97.5 / 98.6 / 100.9 / 105.4 / 110.5 / 113.1%**。
- 6確の設定2〜4 **98.7 / 101.0 / 105.2%** は `CONFLICT_PAYOUT_RATE_SETTING2_TO4_98_6_100_9_105_4_VS_98_7_101_0_105_2` として保持し平均化しない。
- 型式/検定番号/導入日/AT初当り/ベース/純増に重大CONFLICTなし。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は現mainで一意の実体を取得できていない状態を継続。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1793:
- HAZUSE: https://hazuse.com/machine/pachislot/5S1629/
- 1geki 機種TOP: https://1geki.jp/slot/l_bhr2/
- 1geki 天井/朝一: https://1geki.jp/slot/l_bhr2/3/
- 1geki ベース: https://1geki.jp/slot/l_bhr2/4/
- 1geki CZ: https://1geki.jp/slot/l_bhr2/47/
- 1geki 通常AT: https://1geki.jp/slot/l_bhr2/81/
- 1geki 上位AT: https://1geki.jp/slot/l_bhr2/87/
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4703/1/114104
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4703/1/114162
- なな徹 天井: https://nana-press.com/kaiseki/machine/1140/36677/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/1140/36678/
- なな徹 機種まとめ: https://nana-press.com/kaiseki/machine/1140/
- パチビー: https://www.pachibee.jp/machines/index/226040000
- 6確: https://www.kaku6.jp/slot/biohazardre3/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/253191/

## 2026-05-11 canonical queue — OPEN 1/4
1. ~~スマスロ バイオハザードRE:3 — No.1793 DONE~~
2. **スマスロスーパーリオエース2 — candidate No.1794**
3. **Lタクトオーパス デスティニー — candidate No.1795**
4. **スマスロ ビッグドリーム THE GOLDEN PUSHER — candidate No.1796**

次境界候補:
- 2026-05-25: **LB スロット GALFY**

## 次回再開地点
- 最新mainを再同期しNo.1793と本handoffを確認。
- **No.1794候補「スマスロスーパーリオエース2」— 2026-05-11** から継続。
- 5/11群残り3機を順に処理し、PB・別型式・地域先行・延期/段階導入を再監査して境界をCLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
