更新日: 2026-09-09

## 現在地点
- recordCount: **1099**
- latestRecordAdded: **パチスロ そらのおとしものフォルテ**（DAXEL）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-03_sora-no-otoshimono-forte.md`
- chronologicalFrontier: **2017-07-03**
- frontierLatestMachine: **パチスロ そらのおとしものフォルテ — No.1099**
- schema: **resetBehavior v0.7**
- status: **2017-07-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1098「パチスロ 悪魔城ドラキュラ Lords of Shadow」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1098件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN**。
- handoff指定の次未処理 **「パチスロ そらのおとしものフォルテ」** をNo.1099として登録。
- HAZUSE、グリーンべると、すろぱちくえすと、ちょんぼりすた、一撃、パチビーを横断し、型式・検定番号・導入日・ART仕様・機械割・疑似ボーナス初当たり・50枚ベース・純増・基本獲得・通常天井を複数照合。
- resetBehaviorでは設定変更時 **天井RESET/再抽選・モード再抽選・内部状態再抽選・赤青ポイント再セット**、据え置き/純電断では少なくとも **天井・内部状態CARRYOVER** を直接表で固定。
- 公開朝一数値として、設定変更時モード振り分け、150/998/999G天井振り分け、150G短縮天井総合約16.7%、内部状態、赤青初期ポイント振り分けを収録。
- 純電断時のモード/ポイント/ソラオトジャッジ累積失敗回数、本機固有確定ガックンは検索語・資料系統変更後も直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1099 — パチスロ そらのおとしものフォルテ
- manufacturer: **DAXEL**
- releaseDate: **2017-07-03**
- formalModelName: **パチスロそらのおとしものフォルテ／DX**
- certificationNumber: **6S0047**
- generation/system: **5号機 / ART / 疑似ボーナス連チャン / CZ・ポイント管理あり**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.0 / 98.3 / 100.1 / 104.1 / 107.1 / 110.3%**。
- スーパーエンジェロイドボーナス初当たり: **1/882.2 / 1/843.6 / 1/794.5 / 1/767.4 / 1/732.2 / 1/811.0**。
- エンジェロイドボーナス初当たり: **1/142.9 / 1/136.6 / 1/127.8 / 1/122.1 / 1/111.8 / 1/103.6**。
- 疑似ボーナス合算: **1/123.0 / 1/117.6 / 1/110.1 / 1/105.4 / 1/97.0 / 1/91.8**。
- ベース: **約47G/50枚**（一撃精密値46.8～46.9G/50枚）。
- ART純増: **約2.0枚/G**。
- エンジェロイドボーナス **50G+α / 約100枚**、スーパーエンジェロイドボーナス **30G+α / 約60枚**。
- 通常ゲーム数天井: **最大999G**。通常/チャンス/天国のモード別天井あり。
- 赤カウンターはソラオトジャッジ累計4回失敗後、次回（5回目）成功確定。

### resetBehavior v0.7
- settingChangeBehavior: **天井RESET/再抽選 / モードRESELECT / 状態RESELECT / 赤青ポイント再セット**。
- carryOverBehavior: **天井CARRYOVER / 内部状態CARRYOVER**。モード/ポイント/ジャッジ失敗回数の独立直接契約はUNVERIFIED_AFTER_RESEARCH。
- powerCycleBehavior: **天井CARRYOVER / 内部状態CARRYOVER**。モード/ポイント/ジャッジ失敗回数はUNVERIFIED_AFTER_RESEARCH。
- gameCounterReset: 設定変更 **RESET**、据え置き/純電断 **CARRYOVER**。
- ceilingAfterReset: **150G / 998G / 999Gを再抽選**。150G天井総合選択率 **約16.7%**。
- modeAfterReset:
  - 設定1～3: **通常63.7 / チャンス33.2 / 天国3.1%**。
  - 設定4～6: **通常57.8 / チャンス35.9 / 天国6.3%**。
  - 通常モード天井: **150G 25.0 / 998G 2.3 / 999G 72.7%**。
  - チャンスモード天井: **150G 2.3 / 998G 89.8 / 999G 7.8%**。
  - 天国: **150G 100%**。
- stateAfterReset: **通常50.0 / 高確41.8 / 超高確A5.1 / 超高確B3.1%**。高確以上合計50.0%。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: **150G短縮天井約16.7% / 高確以上50.0% / 赤青ポイント初期加算**。
- resetPenalties: 前日ゲーム数天井進捗消滅。ジャッジ失敗回数の設定変更時挙動は断定しない。
- resetDetection: 設定変更/据え置きとも通常ステージでステージ判別不可。150G付近当選は実用示唆だが確定ではない。確定ガックン等はUNVERIFIED_AFTER_RESEARCH。

### 公開初期ポイント
- 赤pt: **5pt 2.3 / 10pt 7.8 / 15pt 11.7 / 20pt 15.6 / 25pt 25.4 / 30pt 15.6 / 35pt 11.7 / 40pt 7.8 / 45pt 2.0%**。
- 青pt: **5pt 2.0 / 20pt 3.9 / 25pt 7.8 / 30pt 11.7 / 35pt 15.6 / 40pt 23.4 / 45pt 31.6%**（10pt/15ptは表上振り分けなし）。

## conflicts / missing
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- baseGames: 約47Gと46.8～46.9Gは丸め精度差でCONFLICT扱いしない。
- releaseTiming: 2017-04-20業界発表記事の「6月納品開始予定」と複数DB/解析の実導入2017-07-03は予定情報と実導入日のpublication-stage difference。canonicalは2017-07-03。
- manufacturerOfficialExactPayoutRate: UNVERIFIED_AFTER_RESEARCH。
- manufacturerOfficialResetBehaviorDocument: UNVERIFIED_AFTER_RESEARCH。
- powerCycleModePointsJudgeFailureContract: UNVERIFIED_AFTER_RESEARCH。
- deterministicMachineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH。
- settingChangeJudgeFailureCounterBehavior: UNVERIFIED_AFTER_RESEARCH。

## 2017-07-03群 — OPEN
登録済み:
1. パチスロ アクエリオンEVOL — No.1097
2. パチスロ 悪魔城ドラキュラ Lords of Shadow — No.1098
3. パチスロ そらのおとしものフォルテ — No.1099

確認済み未処理候補:
- **閃乱カグラ** — 次のNo.1100候補。
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
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1099を再取得。
2. **1099件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN** を正本として継続。
3. 次の未処理 **「閃乱カグラ」** をNo.1100候補として性能コア + resetBehavior v0.7で処理。
4. 以降、**エイリヤンエボリューション → しすくえパラダイス → SHAKE III SIDE-A → 熊酒場2丁目店**を既存登録有無と導入日を再照合しながら処理。
5. 7/3群全メーカー監査後にCLOSED判定。遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1099 パチスロ そらのおとしものフォルテ
- HAZUSE: https://hazuse.com/machine/pachislot/6S0047/
- グリーンべると: https://web-greenbelt.jp/00009512/
- すろぱちくえすと: https://www.slopachi-quest.com/article/soranootoshimono-folte/
- ちょんぼりすた: https://chonborista.com/slot/daxel-slot/37392/
- 一撃 50枚ベース: https://1geki.jp/slot/s_soranootoshimono/4/
- 一撃 ソラオトジャッジ: https://1geki.jp/slot/s_soranootoshimono/43/
- パチビー: https://www.pachibee.jp/machines/lecture/217050004

### 次候補 / 同日境界
- 次候補: 閃乱カグラ
- 以降: エイリヤンエボリューション / しすくえパラダイス / SHAKE III SIDE-A / 熊酒場2丁目店
