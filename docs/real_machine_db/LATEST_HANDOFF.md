更新日: 2026-09-11

## 現在地点
- recordCount: **1361**
- latestRecordAdded: **BLACK LAGOON4 — No.1361**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-07-06_black-lagoon4.md`
- chronologicalFrontier: **2020-07-06**（一部地域先行導入。全国導入2020-07-20）
- frontierLatestMachine: **BLACK LAGOON4 — No.1361**
- schema: **resetBehavior v0.7**
- status: **2020-07-06_GROUP_CLOSED_AFTER_REGIONAL_ROLLOUT_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1360「PACHISLOT言い訳はさせないわよby壇蜜」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 直前handoffの未処理先頭 **BLACK LAGOON4** をNo.1361として追加。
- 型式 `S ATブラックラグーン4SY`、検定番号 `0S0042`、スパイキー、6号機ATをHAZUSE等で固定。
- 導入日は段階導入。HAZUSEは2020-07-06開始、ちょんぼりすたは九州・愛知・静岡等の一部地域7/6先行・全国7/20、遊技日本は全国7/20と明記。本DBでは最初の実導入確認日2020-07-06をchronological canonicalにし、全国導入2020-07-20を併記。

## No.1361 — BLACK LAGOON4
- path: `docs/real_machine_db/machines/2020-07-06_black-lagoon4.md`
- manufacturer: **スパイキー（七匠表記あり）**
- formalModel: **S ATブラックラグーン4SY**
- certificationNumber: **0S0042**
- releaseDate: **2020-07-06 一部地域先行 / 2020-07-20 全国導入**
- generation/system: **6号機 / 高純増AT / ゲーム数上乗せ型**
- 出玉率: **97.6 / 99.5 / 101.4 / 104.6 / 106.7 / 110.1%**
- AT初当たり: **1/684 / 1/609 / 1/523 / 1/424 / 1/371 / 1/334**
- base: **約50G/50枚**
- netIncrease: **約9.0枚/G**
- 天井: **有利区間移行後670G+αでCZ「デスペラードバトル」or AT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_NUMERIC_GAPS**

### resetBehavior v0.7 — No.1361
- 設定変更: **天井RESET / 内部状態RESET / 有利区間RESET → 非有利区間**。
- 据え置き・純電源OFF→ON: **天井 / 内部状態 / 有利区間CARRY_OVER**。
- 通常時は有利区間ランプ（セグ右上「★」）点灯型。
  - 朝一消灯: **設定変更濃厚**。
  - 朝一点灯: **据え置き濃厚**。
  - 前日非有利区間終了や店側対策等の例外があるため確定扱いにはしない。
- 有利区間移行時に内部的にバラライカゾーン相当へ移行する場合があり、朝一序盤5〜6G程度はAT直撃機会あり。ただし100%突入ではない。
- 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。470G+α短縮は有利区間引継ぎ時の挙動でありリセット恩恵ではない。
- 設定変更専用バラライカゾーン移行率、専用モード振り分け、本機固有ガックン条件・率は検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一ステージは期待値見える化実戦上「ロアナプラ昼」だが、ちょんぼりすた当時表は調査中。変更判別の確定契約には採用しない。

## 2020-07-06群監査
1. ワンバーS-30 — **No.1359 / 処理済み**
2. PACHISLOT言い訳はさせないわよby壇蜜 — **No.1360 / 処理済み**
3. BLACK LAGOON4 — **No.1361 / 処理済み**
- OZ-1 / SOZ1-01の7/6表記はNo.1358と同一型式の段階導入のため重複登録しない。
- BLACK LAGOON4は通常の新台カレンダーでは7/20全国導入だが、一部地域7/6先行を複数資料で確認したため7/6群の地域差候補として処理。
- 7/6群は候補3機すべて処理済み。群判定: **CLOSED_AFTER_REGIONAL_ROLLOUT_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 次の未formalized候補: `docs/real_machine_db/machines/2007-04-15_kuma-sakaba.md`（熊酒場）。
- 今回は本線No.1361を優先し、熊酒場は未処理のまま次回へ引き継ぐ。

## 次回本線の再開地点
- 最新main再同期後、**2020-07-20群**へ進む。
- BLACK LAGOON4はNo.1361として7/6先行導入で登録済みのため、7/20全国導入を理由に重複登録しない。
- 先頭の未処理候補: **パチスロ真・北斗無双 — No.1362候補**。
- 2020年7月新台カレンダーでは7/20スロット候補にBLACK LAGOON4とパチスロ真・北斗無双が確認できる。BLACK LAGOON4を除外した上で真・北斗無双を処理し、その後7/20群を全メーカー・別型式・地域差・延期機まで再監査してCLOSED可否を判定する。

## GitHub保存
- No.1359追加 commit: `cce5e6ab8aaec85db0a4f319a2b356f2063de6c5`
- No.1360追加 commit: `2397e25a4271da069ec7fa46d3be9bf9cd5fe2ed`
- No.1361追加 commit: `d4b0f628ea21f10331b53330ae241bf7a1a15a07`

## 主要出典 — 取得日 2026-09-11
### No.1361 BLACK LAGOON4
- HAZUSE: https://hazuse.com/machine/pachislot/0S0042/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/0S0042/genre/201/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/0S0042/genre/209/
- ちょんぼりすた: https://chonborista.com/slot/nanashow/109910/
- 1geki AT確率: https://1geki.jp/slot/s_blacklagoon4/1/
- 1geki 50枚ベース: https://1geki.jp/slot/s_blacklagoon4/4/
- なな徹 ボーナス確率/機械割: https://nana-press.com/kaiseki/machine/42/1297/
- 期待値見える化 朝一リセット: https://slotjin.com/tenjoukitaichi/blacklagoon4/
- 遊技日本 全国7/20導入: https://yugi-nippon.com/pachinko-new-machine/post-36459/
- 新台導入日カレンダー2020: https://pachinkopachisro.com/archives/53951811.html
