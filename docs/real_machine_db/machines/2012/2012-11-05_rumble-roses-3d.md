# ランブルローズ3D

machineName: ランブルローズ3D
manufacturer: KPE
releaseDate: 2012-11-05
releaseDatePrecision: exact_day
releaseDateNotes: コナミ公式機種アーカイブは稼働開始2012年11月、パチビーは導入日2012-11-05と明記。後年整理資料に2012年9月導入表記もあるため製品発表/整理月との定義差として保持し、本DB時系列キーは具体的ホール導入日の2012-11-05を採用。
generation: 5号機
systemType: ART / CZ / BIG / 規定ゲーム数管理 / 天井あり
modelName: ランブルローズ3DZ
approvalNumber: 2S0721
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.3% |
| 3 | 101.8% |
| 4 | 104.6% |
| 5 | 108.1% |
| 6 | 112.8% |

- P-WORLD系機種DB、中古実機DB、当時攻略資料で同一系列を照合。
- パチマガスロマガ検索結果には設定1/2が197.2/198.3%と表示されるキャッシュ異常があるため誤植/抽出不良として本線採用しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG+ART初当り合算

| 設定 | BIG+ART初当り |
|---|---:|
| 1 | 1/254.0 |
| 2 | 1/242.7 |
| 3 | 1/224.4 |
| 4 | 1/212.1 |
| 5 | 1/195.6 |
| 6 | 1/165.1 |

- 本機はBIG成立でART確定。比較可能な設定別公開値としてBIG+ART初当り合算を保存。
- P-WORLD系機種DB、中一商事、A-SLOT、当時攻略資料で一致。
- ART単独初当り設定別値は今回の再探索では比較可能な直接表を確定できず、推測分離しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **31.0G/1000円（50枚）**。
- パチマガスロマガ「小役確率」ページの1000円あたりゲーム数。
- 同一定義の独立別ソースの精密値は今回確定できないため confidence: ANALYSIS_SINGLE_DIRECT。

## netIncrease

- 表ART「ランブルタイム」: **約+2.0枚/G**。
- 裏ART「乱舞琉蛇偉夢」: **約+2.0枚/G**。
- P-WORLD、パチマガスロマガ、パチビー、当時業界記事で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約204枚**（297枚超払い出しで終了）。
- 表ART「ランブルタイム」: **1セット40G+α**。初期Gは40～500Gの当時解析あり。
- 裏ART「乱舞琉蛇偉夢」: **1セット40G+α**。当時解析では初期G40～900G。
- 表CZ「ランブルチャンス」: **13～19G、ART期待度約33%**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は表A / 表B / 表天国、裏A / 裏B / 裏天国の計6モード。
- モード別最大天井: **表A 999G / 表B 1050G / 表天国128G / 裏A384G / 裏B1050G / 裏天国128G**。
- P-WORLDは通常時最大1050Gハマリで前兆を経てARTと整理。
- 表天国は128G以内ART確定、K-Naviでは天国滞在率約40%。表Bから表天国は約75%。裏Bから裏天国も約75%。
- 物差し用途では通常最大天井1050Gとモード別短縮天井を保持し、通常時の全移行テーブルは収集対象外。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: SUBSTANTIAL_RESET_QA
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **CONFIRMED_RESET_GAME_COUNTER__RESELECT_MODE__APPROX_20PCT_FRONT_HEAVEN__DISPLAY_STAGE_CARRYOVER__NO_INTERNAL_STATE_RELOTTERY**
- 2012年当時の天井攻略資料に、設定変更で天井消化ゲーム数をリセットし天井規定ゲーム数を再セット、内部モード移行抽選を実施すると明記。
- 同資料は設定変更後 **約20%で表天国モードスタート** と記載。
- 液晶の通常ステージは設定変更後も引き継ぐ。
- 内部状態については設定変更時に「移行抽選なし」と記載される。
- confidence: CONTEMPORARY_ANALYSIS_DIRECT

### carryOverBehavior

- **PARTIAL__RESET_SOURCE_LABELS_YOIKOSHI_AS_NOT_USABLE__FULL_CARRYOVER_CONTRACT_UNVERIFIED**
- 当時天井狙い資料は本機を「宵越し×」と整理し、設定変更で天井Gをクリアすることを直接説明。
- ただし純据え置き時のゲーム数・6モード・5段階内部状態・前兆/CZ状態の完全な引継ぎ契約を本機固有の直接資料で網羅できていないため、一般論から補完せず **UNVERIFIED_AFTER_RESEARCH** を残す。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 「ランブルローズ3D / ランブルローズ3DZ / KPE」と「電源OFF ON / 電断 / 電源オンオフ / 据え置き / 朝一 / リセット」を組み替え、現存当時解析・古いDB・後年実機資料を横断したが、設定変更を伴わない純粋な電源OFF→ON時の天井カウンタ、モード、内部状態の本機固有契約を確定できず。
- 液晶通常ステージ引継ぎは設定変更時についての直接記述であり、電断のみへ自動転用しない。

### gameCounterReset

- **CONFIRMED_CLEAR_ON_SETTING_CHANGE**
- 設定変更で天井消化ゲーム数をリセットし、モードに応じた規定ゲーム数を再セット。
- 当時天井狙い資料は「宵越し×」。
- confidence: CONTEMPORARY_ANALYSIS_DIRECT

### ceilingAfterReset

- **MODE_DEPENDENT_CEILING_RESELECTED__MAX_1050G__APPROX_20PCT_FRONT_HEAVEN_MAX128G**
- 設定変更後はモードを再抽選して規定ゲーム数を再セット。
- 公開朝一値として約20%で表天国スタートが確認できるため、その場合は最大128GでART。
- 「設定変更専用に一律○Gへ短縮」という別天井は確認できず、モード再抽選による実質的短縮と区別する。

### modeAfterReset

- **CONFIRMED_RESELECT__APPROX_20PCT_FRONT_HEAVEN**
- 設定変更時に内部モード移行抽選。
- **約20%で表天国モードスタート**。
- 残りの詳細モード振り分けは十分な再探索後も今回確定できず **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- **CONFIRMED_NO_STATE_MOVE_LOTTERY_ON_SETTING_CHANGE**
- 当時解析は設定変更時について「内部状態は移行抽選なし」と記載。
- 通常時には内部状態が存在するが、設定変更時の状態初期化/保持をこれ以上細分化できる直接記述は今回確認できず、表現以上の推測をしない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **APPROX_20PCT_FRONT_HEAVEN_START__MAX128G_ART_IN_THAT_MODE**
- 設定変更後は約20%で表天国モードスタート。
- 表天国は最大128GでART当選が確定するため、朝一の主要恩恵として保存。

### resetPenalties

- **PREVIOUS_DAY_GAME_COUNT_PROGRESS_LOST_ON_SETTING_CHANGE**
- 前日の天井/規定ゲーム数進捗は設定変更で失われるため、宵越し狙いには不利。

### resetDetection

- **NORMAL_LCD_STAGE_IS_CARRIED_OVER_ON_SETTING_CHANGE__NOT_A_SIMPLE_RESET_MARKER**
- 設定変更後も液晶通常ステージを引き継ぐとの当時記述があり、「特定初期ステージになったら変更」といった単純判別には使えない。
- 本機固有のリールガックン、電断との差を利用した確定判別、表示ゲーム数差による確定判別は検索語・資料系統を変えて再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- **CONFIRMED_APPROX_20PCT_FRONT_HEAVEN_START**
- 設定変更後の表天国スタート: **約20%**。
- 表天国天井: **最大128G**。
- その他の設定変更時モード振り分け、高確率、朝一CZ当選率等は未確認。

### numericResetData

- normalMaximumCeiling: 1050G
- frontModeACeiling: 999G
- frontModeBCeiling: 1050G
- frontHeavenCeiling: 128G
- backModeACeiling: 384G
- backModeBCeiling: 1050G
- backHeavenCeiling: 128G
- settingChangeGameCounter: CLEAR_AND_RESET
- settingChangeFrontHeavenStartPct: approximately_20pct
- resetSpecificFixedShortCeiling: NONE_CONFIRMED
- powerCycleInternalContract: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: CONTEMPORARY_ANALYSIS_DIRECT_FOR_RESET_COUNTER_MODE_20PCT_STAGE_AND_STATE__ANALYSIS_HIGH_MULTI_SOURCE_CORE__UNVERIFIED_FOR_PURE_POWER_CYCLE_AND_FULL_CARRYOVER_CONTRACT

## missingFields

- ART単独初当りの設定別直接表。
- 設定変更時の約20%表天国以外の全モード振り分け。
- 純据え置き時のゲーム数/モード/内部状態/前兆・CZの完全契約。
- 単純電源OFF→ON時の天井カウンタ/モード/内部状態の本機固有契約。
- 本機固有リールガックン等の確定変更判別。

## conflicts

- release timing: コナミ公式は稼働開始2012年11月、パチビーは具体導入日2012-11-05。後年整理資料pacnkには2012年9月導入表記があるため、ホール導入具体日と製品発表/整理月の定義差候補として保持。本DB時系列キーは2012-11-05。
- パチマガスロマガの検索キャッシュに設定1/2 PAYOUTが197.2/198.3%と表示されるが、同機種の複数独立資料97.2/98.3%と不整合で、抽出/表記異常として本線不採用。

## sources

取得日: 2026-09-05

1. KONAMI AMUSEMENT 機種アーカイブ ランブルローズ3D
   - https://www.konami.com/amusement/psm/archive/ps/2012/rumble3D/
   - 2012年11月稼働開始、5号機ART、KPE/Konami表記。
2. パチビー ランブルローズ3D
   - https://www.pachibee.jp/movies/index/8612
   - 導入日2012-11-05、5号機ART/CZ/天井、純増約2.0枚/G。
3. グリーンべると「“表”と“裏”が織りなす珠玉のゲーム性」2012-08-30
   - https://web-greenbelt.jp/00001567/
   - KPE発表、表/裏ART・CZ・ゲーム数管理の業界一次記事。
4. P-WORLD ランブルローズ3D
   - https://www.p-world.co.jp/machine/database/6853
   - BIG約204枚、ART40G+α/純増約2.0枚、CZ13～19G/期待度約33%、通常最大1050G天井、型式/検定番号。
5. パチマガスロマガ スペック
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/31/a.php
   - BIG約204枚、ART40G、純増約2.0枚/G。
6. パチマガスロマガ ART突入フロー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/31/l.php
   - CZ13～19G/期待度33%、天国128G以内ART、ART40G+α/純増2.0枚。
7. パチマガスロマガ 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/31/c.php
   - 1000円あたり31.0G。
8. K-Navi 内部モードの基本
   - https://p-kn.com/slot/1711/40717/
   - 6モードと各天井、表B→表天国約75%、表天国滞在率約40%、裏天国仕様。
9. 天井ハイエナ生活「ランブルローズ3D 天井ハイエナ期待値・解析攻略」2012年当時更新
   - https://macerate.seesaa.net/article/300691433.html
   - モード別天井、設定変更で天井Gリセット/規定G再セット、モード再抽選、約20%表天国、液晶通常ステージ引継ぎ、内部状態移行抽選なし、宵越し×。
10. 中一商事 ランブルローズ3D
   - https://www.nakaiti.com/html/sKpe076.html
   - 型式ランブルローズ3DZ、機械割、BIG+ART合算、BIG204枚、ART仕様。
11. A-SLOT ランブルローズ3D
   - https://www.a-slot.com/SHOP/kpe40.html
   - 機械割/BIG+ART合算、ART仕様の別系統照合。
12. pacnk ランブルローズ3D
   - https://pacnk.com/slot/tools/sh_rumbleroses.html
   - 機械割/BIG+ART合算、設定変更後天井再セット。2012年9月導入表記はrelease timing conflict noteとして保持。
