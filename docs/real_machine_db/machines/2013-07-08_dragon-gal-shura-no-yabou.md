# ドラゴンギャル～修羅の野望～

machineName: ドラゴンギャル～修羅の野望～
manufacturer: SNKプレイモア
releaseDate: 2013-07-08
releaseDatePrecision: exact_day
generation: 5号機
systemType: AT / ゲーム数解除+自力CZ / ダブルAT
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入日: **2013-07-08**。HAZUSE、パチビー系資料、後年のSNK実機アプリ紹介で具体日一致。当時業界記事では2013-07-07から納品予定で、翌7/8稼働と整合。
- manufacturer: **SNKプレイモア**。
- 型式名: **ドラゴンギャル3D**。
- 検定番号: **3S0201**。
- シリーズ第3弾。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.9% |
| 3 | 100.3% |
| 4 | 104.8% |
| 5 | 109.3% |
| 6 | 113.8% |

- パチマガスロマガとP-WORLDで精密値一致。
- HAZUSEは97 / 99 / 100 / 105 / 109 / 114%の整数丸め掲載。元系列との丸め整合性があるため、重大CONFLICTとは扱わない。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

| 設定 | 闘BONUS | 天RUSH | AT合成 |
|---|---:|---:|---:|
| 1 | 1/269.4 | 1/561.1 | 1/182.0 |
| 2 | 1/258.4 | 1/539.8 | 1/174.7 |
| 3 | 1/252.5 | 1/492.1 | 1/166.9 |
| 4 | 1/227.7 | 1/429.3 | 1/148.8 |
| 5 | 1/225.8 | 1/371.4 | 1/140.4 |
| 6 | 1/203.6 | 1/342.5 | 1/127.7 |

- パチマガスロマガ、P-WORLD、当時グリーンべると記事で主要系列一致。
- confidence: INDUSTRY_AND_ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

- **約31G/50枚（約31G/1000円）**。
- 2013年5月の導入前試打レポート転載に「千円G数：31G/千円」。機種名・型式名・メーカー名と「50枚/1000円/千円/ベース/コイン持ち」を組み替えて再探索したが、同時期の別高信頼資料による精密値照合は今回取れず。
- confidence: PERIOD_ANALYSIS_SINGLE_APPROXIMATE

## netIncrease

- AT「闘BONUS」: **約+2.8枚/G**。
- AT「天RUSH」: **約+2.8枚/G**。
- 当時グリーンべると、K-Navi系展示会資料、P-WORLD、HAZUSEで整合。
- confidence: INDUSTRY_MULTI_SOURCE_HIGH

## basicPayout

- 本機はBR非搭載のAT機。
- 闘BONUS: **1セット30G**、継続率管理型（50～90%）。
- 天RUSH: **1セット40G+α**、ゲーム数上乗せ+セット管理型。
- 1G純増は双方約2.8枚。実獲得枚数を30G×2.8等から固定値化せず、公開インターフェース性能を保持。
- confidence: INDUSTRY_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時はゲーム数テーブル解除と自力CZ「ドラゴンチャンス」等からATへ突入。
- CZ「ドラゴンチャンス」: 10G+開門チャレンジ。P-WORLDではAT期待度約35%（チャンス小役なしでも約25%）と掲載。
- ゲーム数解除前兆「修行モード」を搭載。
- 通常時最大天井: **1280G**。複数後年整理資料で一致。2013年導入前試打レポートにも1280G記載。
- 2-9伝説の狙い目一覧では「闘ボーナス間590 宵×」と整理される（590Gは狙い目であり天井値そのものではない）。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_RESELECTS_INTERNAL_MODE_AND_GAME_TABLE__CEILING_PROGRESS_CLEAR_SUPPORTED__DISPLAY_STAGE_SAME_AFTER_SETTING_CHANGE_AND_POWER_CYCLE__HIDDEN_POWER_CYCLE_CONTRACT_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更時は内部モード・ゲーム数テーブルを再抽選**。HAZUSE本機専用解析で直接確認。
- 液晶ステージは **繁華街ステージ（昼）から開始**。
- 2-9伝説の天井狙い一覧では本機を「宵×」として掲載。同ページの凡例・運用上、設定変更で天井ゲーム数進捗がリセットされる機種として扱われている。

### carryOverBehavior

- 設定変更で天井進捗CLEARが支持される一方、**設定据え置き時にゲーム数テーブル、内部モード、天井進捗をどの粒度で保持するかを本機固有の直接資料で完全には固定できず UNVERIFIED_AFTER_RESEARCH**。
- 「設定変更でCLEAR」から純据え置き時KEEPを自動推定しない。

### powerCycleBehavior

- HAZUSEは、設定変更時に液晶が繁華街（昼）から始まり、**通常時の電源ON/OFF時も同様**と明記。
- よって単純電源OFF→ONでも液晶表示ステージは繁華街（昼）へ戻る。
- ただし、電源OFF→ONのみで内部モード・ゲーム数テーブル・天井進捗まで再抽選/クリアされるかは本機固有の直接契約を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- settingChange: **CLEAR_SUPPORTED**。
- 根拠: 2-9伝説の本機「宵×」分類 + HAZUSEの設定変更時ゲーム数テーブル再抽選。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnlyHiddenCounter: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常時最大天井は **1280G**。
- 設定変更専用の固定短縮天井は、機種名/型式名/メーカー名と「設定変更/リセット/朝一/天井短縮/ゲーム数振り分け」を変えて再探索したが確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更後はゲーム数テーブルを再抽選するため、朝一の解除ゲーム数は再選択されたテーブルに従う。

### modeAfterReset

- **内部モードを再抽選**。
- 設定変更後のモード別具体振り分け率は今回の再探索で直接表を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常時にはゲーム数テーブル/モードに応じた解除ゾーンが存在するが、通常時全モード移行表はミッション対象外として収集しない。

### stateAfterReset

- 設定変更時の内部高確/低確等の初期状態振り分けについて、本機固有の公開数値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 液晶の繁華街（昼）開始は表示契約であり、内部状態そのものと同一視しない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更で内部モード・ゲーム数テーブルが再抽選されるため、前日のテーブルを引き継ぐとは限らない。
- 設定変更専用の短縮天井、AT/CZ確定、固定高モード移行率などの明確な公開朝一恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更時は前日の天井/ゲーム数進捗が失われる扱いが支持されるため、前日ハマリの宵越し狙いには不利。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 設定変更後の液晶は繁華街（昼）から開始するが、**通常時の単純電源OFF→ONでも同じ繁華街（昼）から開始**する。
- したがって朝一の液晶開始ステージ単独では設定変更と電源再投入のみを判別できない。
- ガックン、リール出目、ランプ等の本機固有の確定的変更判別要素は、検索語を変えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeExactModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetSpecificFixedShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetSpecificCZ/ATRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- normalMaximumCeilingReference: **1280G**（リセット専用数値ではない）。
- morningDisplayStage: **繁華街（昼）**。ただしpowerCycleOnlyでも同様。

### numericResetData

- settingChangeInternalMode: RESELECT
- settingChangeGameNumberTable: RESELECT
- settingChangeCeilingProgress: CLEAR_SUPPORTED
- displayStageAfterSettingChange: 繁華街（昼）
- displayStageAfterPowerCycleOnly: 繁華街（昼）
- resetSpecificFixedShortCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- exactResetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- hiddenPowerCycleCounterBehavior: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: HIGH_FOR_MODE_AND_GAME_TABLE_RESELECT_AND_DISPLAY_STAGE__ANALYSIS_SUPPORT_FOR_CEILING_PROGRESS_CLEAR__UNVERIFIED_FOR_HIDDEN_POWER_CYCLE_AND_EXACT_CARRYOVER_CONTRACT

## missingFields

- exactSettingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- detailedSettingChangeInternalStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- exactCarryOverBehaviorWhenDefinitelyUnchanged: `UNVERIFIED_AFTER_RESEARCH`
- hiddenPowerCycleCounterAndModeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- machineSpecificGakkunOrOtherHardResetDetection: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- payout: HAZUSE整数値 97/99/100/105/109/114% vs パチマガスロマガ/P-WORLD精密値 97.2/98.9/100.3/104.8/109.3/113.8%。整数丸めで説明可能なため **ROUNDING_DIFFERENCE_NOT_SUBSTANTIVE_CONFLICT**。
- baseGamesPer50: 今回確認できた具体値は約31G/1000円の当時試打レポート系のみ。別精密系列未取得のためCONFLICTなし、信頼度を単一当時資料扱いとする。

## researchNotes

- 欠損判定前に「ドラゴンギャル～修羅の野望～ / ドラゴンギャル修羅 / ドラゴンギャル3D / SNKプレイモア」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井短縮 / ゲーム数テーブル / モード / ガックン / 50枚 / 1000円 / 千円 / ベース / コイン持ち」を組み替えて検索。
- HAZUSE、パチマガスロマガ、P-WORLD、当時グリーンべると記事、当時試打レポート転載、天井一覧、後年シリーズ回顧を横断。
- 最初の検索結果だけで欠損判定していない。

## sources

取得日: 2026-09-06

- HAZUSE / ドラゴンギャル～修羅の野望～: https://hazuse.com/machine/pachislot/3S0201/
  - 2013-07-08導入、SNKプレイモア、型式ドラゴンギャル3D、検定3S0201、AT合成/機械割丸め値、闘30G・天40G+α・純増約2.8枚/G、設定変更時内部モード/ゲーム数テーブル再抽選、設定変更/電源ON-OFF後の液晶繁華街（昼）。
  - reliability: ANALYSIS_HIGH
- パチマガスロマガ / ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/45/h-1.php
  - 設定別闘BONUS/天RUSH/AT合成、精密PAYOUT。
  - reliability: ANALYSIS_HIGH
- P-WORLD / 機種DB: https://www.p-world.co.jp/machine/database/7099
  - 5号機AT、BR非搭載、CZ、天井、純増約2.8枚/G、闘30G、天40G+上乗せ、設定別AT率/機械割、CZ期待度約35%。
  - reliability: INDUSTRY_DATABASE_HIGH
- グリーンべると（P-WORLD転載）2013-05-17: https://news.p-world.co.jp/articles/5855/greenbelt
  - 型式ドラゴンギャル3D、ダブルAT、闘30G/50～90%・天40G・純増2.8枚/G、設定1/6を含むAT確率、2013-07-07納品予定。
  - reliability: INDUSTRY
- vsmedia 2013-07-11/15更新: https://vsmedia.info/2013/07/11/dragongal/
  - 2013-07-08から全国ホール稼働開始と明記。
  - reliability: PERIOD_MEDIA
- スロ速VIP 2013年導入前試打レポート転載: https://slosoku.com/archives/28079508.html
  - 約31G/千円、天井1280Gの当時試打情報。
  - reliability: PERIOD_SECONDARY_SINGLE
- 2-9伝説 / 天井狙い目一覧: https://2-9densetsu.com/blog-entry-311-html/
  - 「ドラゴンギャル 修羅の野望 闘ボーナス間590 宵×」。狙い目590Gと設定変更時宵越し不可分類の確認用。
  - reliability: ANALYSIS_SINGLE
- スロット天井一覧: https://smaslo.man-soft.com/slot-tenzyou-itiran/
  - 通常時最大1280Gの別系統確認。
  - reliability: RETROSPECTIVE_ANALYSIS_SINGLE
- ドラゴンギャルシリーズ回顧: https://www.marimo0925.net/pachisuro-rekidai-ranking-2/
  - 2013年・設定1 97.2%～設定6 113.8%、AT仕様の後年照合。
  - reliability: RETROSPECTIVE_ANALYSIS_SINGLE

coreStatus: COMPLETE_CORE
resetBehaviorQA: RESEARCHED_WITH_HIDDEN_POWER_CYCLE_AND_EXACT_CARRYOVER_GAPS
