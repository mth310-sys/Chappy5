更新日: 2026-09-14

## 現在地点
- recordCount: **1697**
- latestRecordAdded: **Lサラリーマン金太郎 — No.1697**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-01-06_salaryman-kintaro.md`
- chronologicalFrontier: **2025-01-06**
- schema: **resetBehavior v0.7**
- status: **2025-01-06_GROUP_OPEN_1_OF_3_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1696を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1697 `Lサラリーマン金太郎` を追加し、性能コア + resetBehavior v0.7を収録。
- 2025-01-06群を再監査。導入日順一覧で `Lサラリーマン金太郎 / チバリヨ2プラス / スターハナハナ-30` の3機を再確認。現時点では1/3処理済みのためOPENを維持。

## No.1697 — Lサラリーマン金太郎
- path: `docs/real_machine_db/machines/2025-01-06_salaryman-kintaro.md`
- manufacturer: **EXCITE（エキサイト）**
- formalModel: **Lスマスロサラリーマン金太郎ET**
- inspectionCode: **430354**
- releaseDate: **2025-01-06**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **CONFLICT**。主要解析群 `97.8 / 99.1 / 100.5 / 104.1 / 108.2 / 114.9%` に対し、必勝本 `97.6 / 99.0 / 100.2 / 104.0 / 108.1 / 114.9%`。平均化せず両系統保持。
- initialHit: **BONUS 1/417→1/356 / AT 1/844→1/574 / 合算1/279→1/220**
- base: **約32G/50枚**
- netIncrease: **BONUS約6.0枚/G / AT約4.0枚/G**
- basicPayout: **BIG平均約300枚 / REG平均約60枚 / AT 1セット期待枚数約240枚**
- reset: **天井G RESET・規定G再抽選・内部状態再抽選・有利区間RESET**
- resetCeiling: **BIG/AT後999G+α（REG後800G+α）→ 設定変更後600G+α**
- resetBenefit: **約50%で高確スタート / 600G天井では高確テーブル参照のATストック抽選とする解析あり**
- carryOver: **天井進行・規定G・内部状態・有利区間CARRY_OVER**
- powerCycle: **天井進行・規定G・内部状態CARRY_OVERを機種別比較表で直接確認。有利区間もCARRY_OVERとする機種別二次表あり。**
- resetDetection: **朝一600G+α超過でAT非当選なら据え置き濃厚材料。本機固有ガックン、有利区間ランプ確定判別は十分な再探索後も未固定。**
- missing: **設定変更専用の名称付きモード/具体的振り分け、本機固有ガックン、有利区間ランプ本機固有判別、純電断開始ステージ確定ルール。**
- conflict: **機械割2系統。朝一開始ステージは必勝本の純電断側が調査中で、二次解析の昼ステージ表記を確定値へ統合せず保持。**

## 2025-01-06境界 — OPEN 1/3 known canonical
1. Lサラリーマン金太郎 — No.1697 DONE
2. チバリヨ2プラス — NEXT
3. スターハナハナ-30 — QUEUED
- 導入日順資料で1月6日群として上記3機を再照合。
- スターハナハナは30Φ版が2025-01-06、スマスロ版は別日導入表記が存在するため、No.1699処理時に型式・媒体/径・導入日の境界を再確認する。

## 次回再開地点
- 最新mainを再同期しNo.1697と本handoffを確認。
- **No.1698候補 `チバリヨ2プラス` — 2025-01-06** から再開する。
- その後 **スターハナハナ-30** を処理し、PB・地域先行・別型式・延期/段階導入を再監査して2025-01-06境界をCLOSED判定する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### Lサラリーマン金太郎
- ニューギン開発情報: https://www.newgin.co.jp/devfaq/6155/
- グリーンべると（検定型式）: https://web-greenbelt.jp/post-89274/
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/29675/yugitsushin
- HAZUSE: https://hazuse.com/hd/430354-2/
- 1geki 基本: https://1geki.jp/slot/l_kintaro/
- 1geki 天井/朝一: https://1geki.jp/slot/l_kintaro/3/
- 必勝本 天井/設定変更/電源OFF ON: https://hisshobon.com/machineinfo/85700/
- 必勝本 基本スペック（機械割競合）: https://p.hisshobon.jp/machine/4436/1/106250
- 必勝本 初当り: https://hisshobon.com/machineinfo/85720/
- なな徹 朝一/有利区間: https://nana-press.com/kaiseki/machine/865/26487/
- なな徹 朝一数値: https://nana-press.com/kaiseki/machine/865/26692/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/21/kh02.php
- アタリ7: https://www.atari7.com/slot/slot-l-kintaro.php
- ぽこすろっと 電断/有利区間比較: https://www.nankaikoya.jp/kintaro-kitaichi/
- ちょんぼりすた: https://chonborista.com/slot/excite/225000/

### 境界監査
- 2025年導入日順一覧: https://www.slopachi-quest.com/article/2025-dounyuukisyu/
- スターハナハナ導入日/媒体差確認: https://chonborista.com/slot/pionia-slot/223857/
