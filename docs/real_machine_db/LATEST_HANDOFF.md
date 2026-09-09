更新日: 2026-09-09

## 現在地点
- recordCount: **1098**
- latestRecordAdded: **パチスロ 悪魔城ドラキュラ Lords of Shadow**（KPE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-03_akumajo-dracula-lords-of-shadow.md`
- chronologicalFrontier: **2017-07-03**
- frontierLatestMachine: **パチスロ 悪魔城ドラキュラ Lords of Shadow — No.1098**
- schema: **resetBehavior v0.7**
- status: **2017-07-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1097「パチスロ アクエリオンEVOL」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1097件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN**。
- handoff指定の次未処理 **「パチスロ 悪魔城ドラキュラ Lords of Shadow」** をNo.1098として登録。
- HAZUSE、グリーンべると/P-WORLD業界ニュース、パチスロデータ.com、すろぱちくえすと、すろかい、パチ7を横断し、型式・検定番号・導入日・A+ART仕様・機械割・ボーナス/ART初当たり・50枚ベース・純増・基本獲得・通常天井を複数照合。
- resetBehaviorでは設定変更時 **天井RESET / 通常モードHi確定 / 内部状態低確確定**、純電源OFF→ON時 **天井・モード・状態CARRYOVER** を直接表で固定。
- 朝一専用短縮天井、特定G以内初当たり率、追加ART/CZ保証は検索語・資料系統変更後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の確定ガックン・初期出目・ランプ変更判別は十分な再探索後も直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1098 — パチスロ 悪魔城ドラキュラ Lords of Shadow
- manufacturer: **KPE**
- releaseDate: **2017-07-03**
- formalModelName: **悪魔城ドラキュラLoS／KD**
- certificationNumber: **6S1716**
- generation/system: **5号機 / A+ART / 継続率管理ART / CZ経由あり**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.5 / 98.5 / 100.4 / 104.1 / 107.0 / 111.2%**。
- ART初当たり: **1/599.7 / 1/586.2 / 1/569.6 / 1/513.1 / 1/499.8 / 1/468.6**。
- ボーナス合算: **1/297.9 / 1/291.3 / 1/282.5 / 1/274.2 / 1/265.3 / 1/259.0**。
- ベース: **約33G/50枚**。
- ART純増: **約1.5枚/G**。
- 同色BIG **約256枚** / 異色BIG **約200枚** / REG **50枚**。
- ART基本性能: **30G + 継続バトル10G**。
- 通常天井: **ボーナス・ART間999GでART**。

### resetBehavior v0.7
- settingChangeBehavior: **天井RESET / モードHi確定 / 内部状態低確確定**。
- carryOverBehavior: 据え置き独立メーカー契約は未取得だが、純電断CARRYOVER情報と宵越し運用が整合。
- powerCycleBehavior: **天井CARRYOVER / モードCARRYOVER / 状態CARRYOVER**。
- gameCounterReset: 設定変更 **RESET**、純電断 **CARRYOVER**。
- ceilingAfterReset: **999G**。短縮なしを直接断定するメーカー資料は未取得だが、複数解析で専用短縮記載なし。`NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 設定変更 **Hi 100%**、純電断 **CARRYOVER**。
- stateAfterReset: 設定変更 **低確100%**、純電断 **CARRYOVER**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: **Hiモード確定**。Hi中チャンス目成立時の高確移行率は全設定共通 **50.0%**。
- resetPenalties: **内部状態は低確確定開始**。
- resetDetection: Hi示唆はあるが変更確定ではない。本機固有確定ガックン等はUNVERIFIED_AFTER_RESEARCH。

## conflicts / missing
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- manufacturerOfficialExactPayoutRate: UNVERIFIED_AFTER_RESEARCH。
- manufacturerOfficialResetBehaviorDocument: UNVERIFIED_AFTER_RESEARCH。
- deterministicMachineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH。
- dedicatedCarryOverContractIndependentOfPowerCycle: UNVERIFIED_AFTER_RESEARCH。

## 2017-07-03群 — OPEN
登録済み:
1. パチスロ アクエリオンEVOL — No.1097
2. パチスロ 悪魔城ドラキュラ Lords of Shadow — No.1098

確認済み未処理候補:
- **そらのおとしものフォルテ** — 次のNo.1099候補。
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
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1098を再取得。
2. **1098件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN** を正本として継続。
3. 次の未処理 **「そらのおとしものフォルテ」** をNo.1099候補として性能コア + resetBehavior v0.7で処理。
4. 以降、**閃乱カグラ → エイリヤンエボリューション → しすくえパラダイス → SHAKE III SIDE-A → 熊酒場2丁目店**を既存登録有無と導入日を再照合しながら処理。
5. 7/3群全メーカー監査後にCLOSED判定。遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1098 パチスロ 悪魔城ドラキュラ Lords of Shadow
- HAZUSE: https://hazuse.com/machine/pachislot/6S1716/
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9218/greenbelt
- パチスロデータ.com: https://pachislo-data.com/kpe/36212
- すろぱちくえすと: https://www.slopachi-quest.com/article/dracula4-los/
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/dracula
- パチ7: https://pachiseven.jp/articles/detail/3940

### 次候補 / 同日境界
- 次候補: そらのおとしものフォルテ
- 以降: 閃乱カグラ / エイリヤンエボリューション / しすくえパラダイス / SHAKE III SIDE-A / 熊酒場2丁目店
