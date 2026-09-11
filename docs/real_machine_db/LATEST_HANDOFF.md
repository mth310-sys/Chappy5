更新日: 2026-09-11

## 現在地点
- recordCount: **1355**
- latestRecordAdded: **ハイドラ-30 — No.1355**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-05-18_hydra-30.md`
- chronologicalFrontier: **2020-05-18**
- frontierLatestMachine: **ハイドラ-30 — No.1355**
- schema: **resetBehavior v0.7**
- status: **2020-05-18_GROUP_OPEN_1_OF_4_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1354を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 会話上の旧地点No.1349ではなく、main上でNo.1354「パチスロ ダイナマイトキング極」まで進行済みであることを確認し、重複処理を回避。
- 2020-05-12〜05-17境界を導入カレンダー・機種別資料で監査し、新たに独立登録すべき実導入パチスロを固定できなかったため、2020-05-18群へ進行。
- 5/18群はK-Navi等から **ハイドラ-30 / ビッグシオ-30 / 沖ドキ！2-30 / SOZ1-01** の4機を確認。
- No.1355 **ハイドラ-30** を追加。性能コア＋resetBehavior v0.7を、正式型式・表記揺れ・メーカー/製造元・設定変更/リセット/朝一/据え置き/電源OFF ON/天井/COUNT/モード/ガックン/有利区間を組み替えて再探索し保存。
- 5/18群は **OPEN / 1 of 4 processed**。次はビッグシオ-30。

## No.1355 — ハイドラ-30
- path: `docs/real_machine_db/machines/2020-05-18_hydra-30.md`
- manufacturer: **カルミナ（製造: ネット株式会社）**
- formalModel: **SハイドラND-30**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2020-05-18**
- generation/system: **6号機 / AT / 30Φ沖スロ / 差枚数管理擬似ボーナス / ゲーム数・COUNTセグ管理**
- payoutRate canonical: **97.9 / 99.2 / 101.3 / 103.5 / 107.0 / 110.0%**
- payoutRate conflict: 事前系単一二次資料 **97.9 / 99.5 / 101.5 / 103.7 / 107.3 / 110.0%**
- ボーナス初当り: **1/388 / 371 / 345 / 318 / 293 / 275**
- ボーナス合算: **1/133 / 128 / 119 / 111 / 102 / 96**
- base: **設定1約43.2G/50枚、設定1〜6公開レンジ約43.2〜48.5G/50枚**
- netIncrease: **約2.8枚/G**
- 赤7: **100〜998枚**
- ドラゴンBONUS: **100〜1999枚（1G連時100〜998枚）**
- 神龍BONUS: **1222〜1999枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PAYOUT_CONFLICT**

### resetBehavior v0.7 — No.1355
- 設定変更: **有利区間 / 天井進行 / COUNT・ptカウンター RESET**。
- 据え置き・純電断: **天井 / 有利区間 / 内部pt CARRY_OVER**。
- 設定変更・純電断とも見た目はドラゴンランプ白、夜ステージから始まるため、見た目だけでは判別しにくい。
- 設定変更時は **約33%で内部龍宮ゾーン**へ移行。非突入時は9Gのフェイク前兆。
- 龍宮ゾーンは7Gのボーナス超高確率区間で、解析上のボーナス期待度は約62%。
- 設定変更後（龍宮ゾーン非経由）は4モードを新規抽選。設定1の振り分けは通常78.91% / ミドル8.59% / 連11.72% / ドラゴン0.78%。設定6では57.03 / 24.22 / 17.97 / 0.78%。全設定表はレコード保存済み。
- モード別天井: 通常991G/1247pt、ミドル767G/991pt、連127G/127pt、ドラゴン991G/1279pt。
- 一律のリセット専用短縮天井は確認なし。ただしリセット後モード抽選により127G/767G天井が選ばれる可能性あり。
- 有利区間ランプはPAY OUT右下ドットだが、当時資料は朝一消灯判別を「調査中」としており確定契約にはしない。
- 本機固有ガックン条件/発生率、検定番号は検索語・資料系統を変えても高信頼固定値を確認できず **UNVERIFIED_AFTER_RESEARCH**。

## 2020-05-18群監査
1. ハイドラ-30 — **No.1355 / 処理済み**
2. ビッグシオ-30 — **未処理 / No.1356候補**
3. 沖ドキ！2-30 — **未処理**
4. SOZ1-01 — **未処理**
- K-Navi 2020年5月導入カレンダーで上記4機が5/18群として一致。
- 群判定: **OPEN_1_OF_4_PROCESSED**。
- 次回は全メーカー・別型式・別スペック・PB・地域差・延期機も再監査しながらこの順序を継続する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）。
- 次の未formalized候補: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 本線を止めず、余力時に既存性能コアをやり直さずresetBehaviorのみv0.7基準で順次補完する。

## 次回本線の再開地点
- 最新main再同期後、**2020-05-18群の2機目「ビッグシオ-30」＝No.1356候補**から再開。
- その後 **沖ドキ！2-30 → SOZ1-01**。
- 4機処理後、5/18同日全メーカー・別型式・PB・地域差・延期機を再監査してCLOSED可否を判定する。

## 主要出典 — 取得日 2026-09-11
### No.1355 ハイドラ-30
- カルミナ公式: https://carmina-gaming.co.jp/product/release/2020/
- K-Navi導入カレンダー: https://p-kn.com/calendar/202005/
- P-WORLD: https://www.p-world.co.jp/machine/database/9186
- DMMぱちタウン: https://p-town.dmm.com/machines/3701
- 1geki TOP: https://1geki.jp/slot/s_hi_dra30/
- 1geki 朝一: https://1geki.jp/slot/s_hi_dra30/0/
- 1geki ベース: https://1geki.jp/slot/s_hi_dra30/4/
- なな徹 TOP: https://nana-press.com/kaiseki/machine/55/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/55/985/
- なな徹 天井: https://nana-press.com/kaiseki/machine/55/988/
- なな徹 モード: https://nana-press.com/kaiseki/machine/55/1183/
- パチマガスロマガ PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/02/kh02.php
- パチマガスロマガ ドラゴンBONUS: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/02/at02.php
- パチマガスロマガ 神龍BONUS: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/02/at03.php
- ちょんぼりすた: https://chonborista.com/slot/carmina/95441/
- ぱちんこキュレーション（CONFLICT資料）: https://pachinko-curation.com/6137/
