更新日: 2026-09-09

## 現在地点
- recordCount: **1100**
- latestRecordAdded: **パチスロ 閃乱カグラ**（オーイズミ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-03_senran-kagura.md`
- chronologicalFrontier: **2017-07-03**
- frontierLatestMachine: **パチスロ 閃乱カグラ — No.1100**
- schema: **resetBehavior v0.7**
- status: **2017-07-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1099「パチスロ そらのおとしものフォルテ」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1099件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN**。
- handoff指定の次未処理 **「閃乱カグラ」** をNo.1100として登録。
- HAZUSE、グリーンべると、一撃、すろぱちくえすと、ちょんぼりすた、P-WORLD、パチビー、みんスロを横断し、型式・検定番号・導入日・機械割・ボーナス/ART/CZ初当たり・50枚ベース・純増・基本獲得・天井を複数照合。
- resetBehaviorでは当時の一撃直接表から、設定変更時 **天井RESET / 状態RESET（高確移行等の抽選なし） / 商店街ステージ**、純電源OFF→ON時 **天井CARRYOVER / 状態CARRYOVER / 商店街ステージ** を固定。
- 設定変更専用の短縮天井・高確スタート・朝一専用モード・主要初当たり優遇は、表記揺れ/型式/メーカー/シリーズ名とリセット系検索語を変更して再探索後も確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の確定的ガックン/初期出目/ランプによる朝一変更判別も直接根拠を固定できず `UNVERIFIED_AFTER_RESEARCH`。ボーナス/ART終了時のランプ設定示唆とは混同しない。

## No.1100 — パチスロ 閃乱カグラ
- manufacturer: **オーイズミ**
- releaseDate: **2017-07-03**
- formalModelName: **パチスロ閃乱カグラ／JX**
- certificationNumber: **7S0245**
- generation/system: **5号機 / A+ART / CZ搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.8 / 98.9 / 101.1 / 103.1 / 106.9 / 110.1%**。
- ボーナス合算: **1/199.8 / 1/197.4 / 1/195.6 / 1/192.2 / 1/190.0 / 1/186.7**。
- ART初当たり: **1/511.4 / 1/447.2 / 1/455.0 / 1/365.1 / 1/387.9 / 1/295.7**。
- CZ初当たり: **1/620.3 / 1/487.5 / 1/500.7 / 1/394.1 / 1/381.3 / 1/325.1**。
- ベース: **約33G/50枚**（別資料約33.3G/50枚。丸め差）。
- ART純増: **約1.2枚/G**、1セット**50G+α**。
- SUPER爆乳BONUS **252枚** / 爆乳BONUS **平均153枚** / REG **平均48枚** / 焔紅蓮BONUS **36枚**。
- 通常天井: **ボーナス間1081G + 最大32G前兆でART**。

### resetBehavior v0.7
- settingChangeBehavior: **天井RESET / 状態RESET / 高確移行等の抽選なし / 商店街ステージ**。
- carryOverBehavior: 据え置き運用に相当する純電断では **天井CARRYOVER / 状態CARRYOVER**。
- powerCycleBehavior: **天井CARRYOVER / 状態CARRYOVER / 商店街ステージ**。
- gameCounterReset: 設定変更 **RESET**、純電断 **CARRYOVER**。
- ceilingAfterReset: **設定変更専用短縮なしを確認。通常天井1081G+最大32G前兆、進捗は0から**。
- modeAfterReset: 設定変更専用ゲーム数解除モード/朝一専用モード **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: **RESET**。高確スタート抽選なし。純電断は **CARRYOVER**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 主要な設定変更専用恩恵 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 前日のボーナス間天井進捗消滅。高確スタート抽選も確認されない。
- resetDetection: 設定変更/純電断とも商店街スタートのためステージ単独判別不可。確定ガックン等 **UNVERIFIED_AFTER_RESEARCH**。
- numericResetData: 比較可能な設定変更専用モード振り分け/短縮天井率/高確スタート率 **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / missing
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- baseGames: 約33Gと約33.3Gは丸め精度差でCONFLICT扱いしない。
- ceilingExpression: 1081G+αと1081G+最大32Gは精度差でCONFLICT扱いしない。
- manufacturerOfficialExactPayoutRate: UNVERIFIED_AFTER_RESEARCH。
- manufacturerOfficialResetBehaviorDocument: UNVERIFIED_AFTER_RESEARCH。
- independent high-confidence 据え置き table separate from direct power-OFF/ON contract: UNVERIFIED_AFTER_RESEARCH。
- deterministicMachineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH。

## 2017-07-03群 — OPEN
登録済み:
1. パチスロ アクエリオンEVOL — No.1097
2. パチスロ 悪魔城ドラキュラ Lords of Shadow — No.1098
3. パチスロ そらのおとしものフォルテ — No.1099
4. パチスロ 閃乱カグラ — No.1100

確認済み未処理候補:
- **エイリヤンエボリューション** — 次のNo.1101候補。
- しすくえパラダイス — 2017-07-03導入をパチビーで再確認。
- SHAKE III SIDE-A — HAZUSEで2017-07-03導入、型式 `SHAKEIII SIDE-A／A7`、検定番号 `6S1514` を先行確認。
- 熊酒場2丁目店 — パチビー/K-Naviで2017-07-03導入を再確認。
- 上記を順次処理後、2017-07-03同日全メーカー横断監査を行いCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1100を再取得。
2. **1100件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN** を正本として継続。
3. 次の未処理 **「エイリヤンエボリューション」** をNo.1101候補として性能コア + resetBehavior v0.7で処理。
4. 以降、**しすくえパラダイス → SHAKE III SIDE-A → 熊酒場2丁目店**を既存登録有無と導入日を再照合しながら処理。
5. 7/3群全メーカー監査後にCLOSED判定。遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1100 パチスロ 閃乱カグラ
- HAZUSE: https://hazuse.com/machine/pachislot/7S0245/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/7S0245/genre/201/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/7S0245/genre/208/
- グリーンべると: https://web-greenbelt.jp/00009614/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_senrankagura/3/
- すろぱちくえすと: https://www.slopachi-quest.com/article/sennrann-kagura/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/38139/
- P-WORLD: https://www.p-world.co.jp/machine/database/8378
- パチビー: https://www.pachibee.jp/movies/index/13818
- みんスロ: https://minslo.com/%E9%96%83%E4%B9%B1%E3%82%AB%E3%82%B0%E3%83%A9/

### 次候補 / 同日境界
- 次候補: エイリヤンエボリューション
- 以降: しすくえパラダイス / SHAKE III SIDE-A / 熊酒場2丁目店
