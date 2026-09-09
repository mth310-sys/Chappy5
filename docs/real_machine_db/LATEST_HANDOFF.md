更新日: 2026-09-09

## 現在地点
- recordCount: **1097**
- latestRecordAdded: **パチスロ アクエリオンEVOL**（SANKYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-03_aquarion-evol.md`
- chronologicalFrontier: **2017-07-03**
- frontierLatestMachine: **パチスロ アクエリオンEVOL — No.1097**
- schema: **resetBehavior v0.7**
- status: **2017-07-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1096「ハイパーリノ」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1096件 / chronologicalFrontier 2017-06-19 / 6/19群CLOSED / 6/20〜7/2境界CLOSED**。
- handoff指定の次未処理 **「パチスロ アクエリオンEVOL」** をNo.1097として登録し、chronologicalFrontierを2017-07-03へ前進。
- SANKYO公式オンライン博物館、HAZUSE、グリーンべると、P-WORLD、必勝本、一撃、すろぱちくえすと、ちょんぼりすた、K-Navi、当時解析を横断。型式、検定番号、導入日、CZ/ART、機械割、50枚ベース、ART純増、通常/仮天井を固定。
- resetBehaviorでは設定変更時の0〜255G天井短縮を各1/256均等抽選、モード/状態再抽選、純電源OFF→ON時の天井/モード/状態引継ぎ、液晶ゲーム数表示のみ0へ戻る挙動まで固定。設定変更時の具体的モード振り分け・内部状態初期振り分け、本機固有ガックンは検索語・資料系統変更後も直接数値/契約を固定できずUNVERIFIED_AFTER_RESEARCH。
- 後年5号機クロニクル検索結果にA+ART・実ボーナス型相当の別仕様数値が混在するが、SANKYO公式/当時業界/複数解析は本機を本物ボーナス非搭載ART特化・純増約1.9枚/Gとして一致。後年資料側をCONFLICT_SOURCE_MISMATCHとしてcanonicalから除外。
- 2017-07-03群はまだOPEN。次候補「パチスロ 悪魔城ドラキュラ Lords of Shadow」は複数資料で2017-07-03導入を先行確認済み。

## No.1097 — パチスロ アクエリオンEVOL
- manufacturer: **SANKYO**
- releaseDate: **2017-07-03**
- formalModelName: **パチスロアクエリオンEVOL**
- certificationNumber: **7S0330**
- generation/system: **5号機 / ART / CZ経由 / 疑似ボーナス / ST式上位ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.4 / 97.6 / 99.9 / 103.8 / 107.6 / 110.0%**。
- ART初当たり: **1/595 / 1/575 / 1/546 / 1/528 / 1/473 / 1/450**。
- CZ: **1/257 / 1/248 / 1/235 / 1/226 / 1/203 / 1/191**。
- ベース: **約42G/50枚**。
- ART純増: **約1.9枚/G**。
- ART基本性能: **1セット30G+α**。
- 通常天井: **999GでCZ / 1555GでART**。

### resetBehavior v0.7
- settingChangeBehavior: **天井RESET / 0〜255G短縮幅を再抽選 / モード再抽選 / 状態再抽選 / ネオ・クーロン開始 / 液晶G数0**。
- carryOverBehavior: 据え置き専用のメーカー直接契約は未取得だが、純電断時の内部天井/モード/状態CARRYOVERと宵越し解析情報が整合。
- powerCycleBehavior: **天井CARRYOVER / モードCARRYOVER / 状態CARRYOVER / 液晶G数表示のみ0**。お風呂/CZ/ART中はステージも引継ぎ。
- gameCounterReset: 設定変更**RESET**、純電断**INTERNAL_CARRYOVER / DISPLAY_0**。
- ceilingAfterReset: **0〜255G短縮を各1/256均等抽選**。仮天井 **749〜999G**、本天井 **1300〜1555G**。
- modeAfterReset: 設定変更**RESELECTED**、純電断**CARRYOVER**。具体的朝一モード振り分けはUNVERIFIED_AFTER_RESEARCH。
- stateAfterReset: 設定変更**RESELECTED**、純電断**CARRYOVER**。初期状態振り分け数値はUNVERIFIED_AFTER_RESEARCH。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 数値固定できる主要恩恵は**最大255Gの天井短縮**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 液晶G数0だけでは変更確定不可。内部天井の宵越し発動位置は据え置き推測材料。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。

## conflicts / missing
- systemTypeMisclassification: 後年5号機クロニクル検索結果にA+ART/実ボーナス数値が混在。公式・当時資料と整合しないため **CONFLICT_SOURCE_MISMATCH / canonical除外**。
- manufacturerOfficialExactPayoutRate: UNVERIFIED。
- manufacturerOfficialResetBehaviorDocument: UNVERIFIED_AFTER_RESEARCH。
- numericResetModeDistribution: UNVERIFIED_AFTER_RESEARCH。
- numericResetStateDistribution: UNVERIFIED_AFTER_RESEARCH。
- deterministicMachineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH。

## 2017-07-03群 — OPEN
登録済み:
1. パチスロ アクエリオンEVOL — No.1097

確認済み未処理候補:
- **パチスロ 悪魔城ドラキュラ Lords of Shadow** — KPE / 2017-07-03を複数資料で確認。No.1098候補。
- そらのおとしものフォルテ
- 閃乱カグラ
- エイリヤンエボリューション
- しすくえパラダイス
- SHAKE III SIDE-A
- 熊酒場2丁目店
- 上記を順次処理後、2017-07-03同日全メーカー横断監査を行いCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1097を再取得。
2. **1097件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN** を正本として継続。
3. 次の未処理 **「パチスロ 悪魔城ドラキュラ Lords of Shadow」** をNo.1098候補として性能コア + resetBehavior v0.7で処理。
4. 以降、**そらのおとしものフォルテ → 閃乱カグラ → エイリヤンエボリューション → しすくえパラダイス → SHAKE III SIDE-A → 熊酒場2丁目店**を既存登録有無と導入日を再照合しながら処理。
5. 7/3群全メーカー監査後にCLOSED判定。遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1097 パチスロ アクエリオンEVOL
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/691/
- HAZUSE: https://hazuse.com/machine/pachislot/7S0330/
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9412/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/8411
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2992/1/64355
- 一撃 機種TOP: https://1geki.jp/slot/s_aquarionevol/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_aquarionevol/3/
- すろぱちくえすと: https://www.slopachi-quest.com/article/aquarion-evol/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/39088/
- K-Navi: https://p-kn.com/slot/2800/
- スロットガーデン: https://xn--mckza4ard4ttb2d.com/aquarionevol
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/2017/05/21/135033

### 次候補 / 同日境界
- パチスロデータ.com 悪魔城ドラキュラ Lords of Shadow: https://pachislo-data.com/kpe/36212
- すろかい 悪魔城ドラキュラ Lords of Shadow: https://slotkaiseki.hatenablog.com/entry/dracula
