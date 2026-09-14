更新日: 2026-09-15

## 現在地点
- recordCount: **1794**
- latestRecordAdded: **スマスロスーパーリオエース2 — No.1794**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-05-11_super-rio-ace2.md`
- chronologicalFrontier: **2026-05-11**
- schema: **resetBehavior v0.7**
- status: **2026-05-11_BOUNDARY_OPEN_2_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1793を再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1793「スマスロ バイオハザードRE:3」まで完了済みを確認し、次の未処理No.1794候補 `スマスロスーパーリオエース2` から継続。
- No.1794を追加し、性能コアとresetBehavior v0.7を同時収集。
- 型式 `Lパチスロスーパーリオエース2ND02H`、検定番号 `5S1634`、導入日2026-05-11、メーカー山佐ネクストを業界記事・HAZUSE等で固定。
- 設定1〜6。初当り（ボーナス+AT）1/289.8〜1/219.2。機械割97.7/98.7/100.5/105.1/109.1/112.1%。
- ベース約31.2G/50枚。BIG/通常AT純増約2.5枚/G、上位AT約4.5枚/G。BIGは31G・AT期待度約50%、通常ATは初期50G+α。
- ボーナス間天井750G+α、設定変更後500G+αへ最大250G短縮。
- AT間ボーナススルー天井は最大7スルー後8回目 → 設定変更後最大4スルー後5回目へ短縮。
- 設定変更時は天井G、ハワードカウンターをRESET、状態/モード/エースモード/リバースポイントを再抽選。純電源OFF→ONでは各項目CARRY_OVER。
- なな徹の直接比較で設定変更時有利区間RESET、据え置き時引継ぎを確認。純電断時の有利区間そのものの直接機種固有文言はUNVERIFIED。
- 公開朝一数値としてスルー天井振り分け0/1/2/3/4回=1.6/7.8/3.1/20.3/67.2%、規定リプレイ到達時ハワードゲーム33%（全設定共通）、リバースポイント残り16pt以内20.2%（なな徹20.02%）を保存。
- 本機固有ガックン、設定変更専用モード/状態具体振り分け、純電断時開始ステージは再探索後もUNVERIFIED。

## No.1794 — スマスロスーパーリオエース2
- path: `docs/real_machine_db/machines/2026-05-11_super-rio-ace2.md`
- manufacturer: **山佐ネクスト**
- formalModel: **Lパチスロスーパーリオエース2ND02H**
- inspectionCode: **5S1634**
- releaseDate: **2026-05-11**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 98.7 / 100.5 / 105.1 / 109.1 / 112.1%**
- initialHit(BONUS+AT): **1/289.8 / 1/281.9 / 1/268.0 / 1/238.9 / 1/230.0 / 1/219.2**
- base: **約31.2G/50枚**
- netIncrease: **BIG・通常AT約2.5枚/G / 上位AT約4.5枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1794 resetBehavior v0.7
- 設定変更: 天井G/ハワードカウンターRESET。状態/モード/エースモード/リバースポイント再抽選。有利区間RESET。
- 据え置き: 有利区間、天井、内部状態、ハワードカウンター、リバースポイント引継ぎ。
- 純電源OFF→ON: 天井G、状態、モード、エースモード、リバースポイント、ハワードカウンター引継ぎ。開始ステージはUNVERIFIED。
- ゲーム数/天井: 通常750G+α → reset最大500G+α。スルー天井最大7回→reset最大4回。
- モード/状態: 設定変更時再抽選、据え置き/電断時引継ぎ。reset専用具体振り分けはUNVERIFIED。
- 有利区間: 設定変更RESET / 据え置き引継ぎを直接確認。通常の有利区間リセット後は上位CZ「ノワールクライシス」へ移行するが設定変更時恩恵とは分離。
- 朝一恩恵: 天井最大250G短縮、スルー天井短縮、ハワードゲーム33%、リバースポイント初期値優遇。
- 朝一不利: 前日有利な内部進行を設定変更で失う場合あり。固定ペナルティ値はNONE_CONFIRMED。
- 変更判別: 現時点で有効な直接判別方法は未判明。500G+α/4スルー上限は事後材料。本機固有ガックンUNVERIFIED。
- 公開朝一数値: スルー天井振り分け 1.6/7.8/3.1/20.3/67.2%、ハワードゲーム33%、残り16pt以内20.2%。

## conflicts / normalization
- canonical基本スペックはHAZUSE/P-WORLD/必勝本/K-Navi等で一致する **97.7 / 98.7 / 100.5 / 105.1 / 109.1 / 112.1%**、初当り1/289.8〜1/219.2、ベース約31.2G/50枚。
- 一部低優先整理サイトの天井999G+α、機械割97.8〜114.2%、ベース約33Gは複数高優先資料と不一致のため `CONFLICT_LOW_PRIORITY_OUTLIER_EXCLUDED_FROM_CANONICAL` として平均化しない。
- リバースポイント残り16pt以内は1geki等20.2%、なな徹20.02%。丸め精度差の可能性が高くcanonical表示20.2%、原表記20.02%も保持。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は現mainで一意の実体を取得できていない状態を継続。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1794:
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-75767/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1634/
- P-WORLD: https://www.p-world.co.jp/machine/database/10449
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4710/1/114341
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4710/1/115659
- 必勝本 通常時解説: https://p.hisshobon.jp/machine/4710/1/115890
- 必勝本 BIG: https://p.hisshobon.jp/machine/4710/1/115351
- 1geki 機種TOP: https://1geki.jp/slot/l_sp_rioace2/
- 1geki 天井/朝一/有利区間: https://1geki.jp/slot/l_sp_rioace2/3/
- 1geki ハワードゲーム: https://1geki.jp/slot/l_sp_rioace2/45/
- 1geki リバースポイント: https://1geki.jp/slot/l_sp_rioace2/55/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/1143/36739/
- パチビー: https://www.pachibee.jp/machines/kouryaku/226040001
- K-Navi: https://p-kn.com/slot/4479/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/255067/

## 2026-05-11 canonical queue — OPEN 2/4
1. ~~スマスロ バイオハザードRE:3 — No.1793 DONE~~
2. ~~スマスロスーパーリオエース2 — No.1794 DONE~~
3. **Lタクトオーパス デスティニー — candidate No.1795**
4. **スマスロ ビッグドリーム THE GOLDEN PUSHER — candidate No.1796**

次境界候補:
- 2026-05-25: **LB スロット GALFY**

## 次回再開地点
- 最新mainを再同期しNo.1794と本handoffを確認。
- **No.1795候補「Lタクトオーパス デスティニー」— 2026-05-11** から継続。
- 5/11群残り2機を順に処理し、PB・別型式・地域先行・延期/段階導入を再監査して境界をCLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
