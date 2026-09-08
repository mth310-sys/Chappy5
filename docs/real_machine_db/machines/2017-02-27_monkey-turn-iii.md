machineName: パチスロ モンキーターンIII
manufacturer: 山佐
releaseDate: 2017-02-27
recordNumber: 1052
generation: 5号機 / 5.5号機期
systemType: ART / ST型ART / 周期カレンダーCZ
formalModelName: モンキーターン3／DD
certificationNumber: 6S1436
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RELEASE_DATE_CONFLICT

## identity
- HAZUSEは導入開始日2017-02-27、メーカー山佐、型式名 `モンキーターン3／DD`、検定番号 `6S1436` を直接掲載。
- パチ7、一撃、ぱちすろLIFE、当時のパチスロ必勝ガイドMAX紹介も2017-02-27導入/設置予定として一致するため、本DBのcanonical releaseDateは2017-02-27とする。
- ちょんぼりすたのみ導入日を2017-03-06と掲載するため、消去せず `CONFLICT_RELEASE_DATE_2017_02_27_VS_2017_03_06_CHONBORISTA` として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.8% |
| 3 | 100.5% |
| 4 | 104.2% |
| 5 | 108.5% |
| 6 | 112.4% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/395.2 |
| 2 | 1/380.1 |
| 3 | 1/361.5 |
| 4 | 1/311.7 |
| 5 | 1/282.9 |
| 6 | 1/254.7 |

### CZ合算
| 設定 | CZ合算 |
|---:|---:|
| 1 | 1/179.6 |
| 2 | 1/175.0 |
| 3 | 1/171.6 |
| 4 | 1/154.3 |
| 5 | 1/148.5 |
| 6 | 1/139.3 |

- ART初当たり精密値はHAZUSE、パチスロ解析ガイド、一撃で一致。
- CZは通常時の主要初当たり構造に重要なため合算値のみ保持。B.O.S/超抜の詳細内訳は実機完全再現用途になるため必須外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical representative: 約45G/50枚。
- ぱちすろLIFEは約45〜47G/50枚と幅を持たせて掲載。HAZUSE、ちょんぼりすた、みんスロは約45G表記で一致するため、45Gを代表値とし45〜47G資料もdataQualityNotesへ保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「SG RUSH」純増: 約2.0枚/G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ボーナス非搭載。
- ART「SG RUSH」はフライングST20G以上 + ST30Gで、初回基本50G以上。
- フライングST初期G数は20〜100G。STは30G固定で、V揃いからバトルトライアルへ移行し、ST側では終了後30G再セット。
- ST⇔バトルトライアル部分のループ率は約65〜95%とする解析あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 自力CZは「バトルオブスプラッシュ」と「超抜チャレンジ」。いずれも成功でART。
- 通常時は「艇刻システム」でカレンダーの日付マスと成立役に応じCZを抽選。
- 通常天井はカレンダー6期5ヶ月消化+前兆、資料上の代表約1050G+α。6期6ヶ月目の前兆を経てART当選。
- CZ消化中はカレンダー進行が停止するため、実ゲーム数では1050Gを超える場合がある。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_RESET_COMPARISON_AVAILABLE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は天井進捗をRESET。
- 液晶カレンダー表示は1期1ヶ月から開始。
- カレンダーマスは30日間からランダムに再生成される。
- 開始ステージは波多野家ステージ。
- 設定変更専用の天井短縮は確認できず、通常の最大周期天井へ再スタートする契約として扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_COMPARISON

### carryOverBehavior
- 据え置きは設定変更を伴わない純電源OFF→ONの直接比較契約に準じ、天井進捗およびカレンダーマスをCARRYOVERとして扱う。
- 表示上のカレンダーは朝一1期1ヶ月へ戻るため、表示G数/期表示だけで内部進捗を否定しない。
- 内部高低状態やカレンダーレベル等の全状態を据え置き時にどう保存するかは本機固有の直接公開表を固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE_FIELDS; UNVERIFIED_FOR_UNPUBLISHED_INTERNAL_STATE_DETAILS

### powerCycleBehavior
- 電源OFF→ONのみ: 天井進捗CARRYOVER。
- 液晶カレンダー表示は1期1ヶ月。
- カレンダーマスはCARRYOVER。
- 開始ステージは波多野家ステージ。
- 内部高低状態、カレンダーレベル等の細分状態は `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_COMPARISON

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRYOVER。
- 天井はカレンダー周期管理で、表示上の1期1ヶ月と内部天井進捗を混同しない。

### ceilingAfterReset
- 設定変更後は通常の周期天井へ再スタート。
- 通常天井: 6期5ヶ月消化+前兆（代表約1050G+α）でART。
- 設定変更専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 本機の「カレンダーモード」はカレンダーレベルに応じて各月のマス構成を決める通常システムとして公開されている。
- 設定変更時だけ適用される専用カレンダーモードや設定変更時モード振り分けは、機種名/型式/山佐/朝一/リセット/設定変更/カレンダーモード/艇刻システムを組み替えて再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時に確認できる公開マクロ挙動は、カレンダーマス30日分のランダム再生成。
reliability: ANALYSIS_HIGH_FOR_CALENDAR_RESET; RESEARCH_EXHAUSTED_FOR_RESET_SPECIFIC_MODE_TABLE

### stateAfterReset
- 開始ステージは設定変更・純電断とも波多野家ステージ。
- 設定変更時の通常/高確等の内部状態初期振り分けは、検索語・資料系統を変えた再探索後も直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電断時の内部状態の完全な保持/再抽選契約も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_VISIBLE_STAGE; UNVERIFIED_FOR_INTERNAL_STATE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更で天井・カレンダー進捗が0からになるため、宵越し天井狙いには恩恵ではなく前日進捗消失要因。
- 朝一専用短縮天井、専用高確保証、専用ART/CZ優遇率などの主要数値恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- カレンダーマス30日ランダム再生成により前日マス構成が刷新されるが、これ自体を平均的な有利/不利とは断定しない。

### resetPenalties
- 前日の天井進捗およびカレンダーマスは設定変更で消失するため、宵越し天井・前日良好マス狙いには不利。
- その他の設定変更専用主要ペナルティ: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 前日最終のカレンダーマスを記録しておき、朝一マス構成が異なれば設定変更濃厚とする当時解析が複数存在。
- ガックン判別可能との解析もあるが「難易度高め」「対策なし条件」のため、確定契約ではなく補助的判別材料として保持。
- 液晶カレンダー表示は設定変更・純電断とも1期1ヶ月、開始ステージも双方波多野家のため、この2点単独では変更判別不可。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CALENDAR_DETECTION; ANALYSIS_SINGLE_OR_SECONDARY_FOR_GAKKUN

### numericResetData
- settingChange calendar display: 1期1ヶ月。
- settingChange calendar-mass generation: 30日分ランダム再生成。
- setting-change-specific shortened ceiling: `NONE_CONFIRMED_AFTER_RESEARCH`。
- setting-change-specific mode/state percentage table: `UNVERIFIED_AFTER_RESEARCH`。

## dataQualityNotes
- 導入日は2017-02-27がHAZUSE、パチ7、一撃、ぱちすろLIFE、当時雑誌紹介で一致。ちょんぼりすたのみ2017-03-06のためCONFLICT保持。
- HAZUSEのURL識別子 `6S1436` とページ掲載検定番号が一致し、型式 `モンキーターン3／DD` を直接確認。
- 機械割とART初当たりは複数解析で一致。丸め値（例1/395）と精密値（1/395.2）は競合ではなく精度差。
- ベースは約45Gが複数一致し、約45〜47G資料も存在するため代表値+レンジ注記とした。
- ちょんぼりすた朝一表の説明文には「リセット時のカレンダーは引き継ぎ」と記載されるが、同表は設定変更時カレンダーマス=30日ランダム、電源OFF→ON=引き継ぎとしており文言が自己矛盾。表本体および別系統解析との一致を優先し、設定変更時マス再生成/純電断時引継ぎをcanonicalとする。

## conflicts
- `CONFLICT_RELEASE_DATE_2017_02_27_VS_2017_03_06_CHONBORISTA`。
  - 2017-02-27: HAZUSE / パチ7 / 一撃 / ぱちすろLIFE / パチスロ必勝ガイドMAX当時紹介。
  - 2017-03-06: ちょんぼりすた。
- `CONFLICT_CHONBORISTA_RESET_EXPLANATORY_SENTENCE_VS_OWN_TABLE`。
  - 同サイト本文の「リセット時のカレンダーは引き継ぎ」は、直前表の設定変更=30日ランダム / 電源OFF・ON=引き継ぎと矛盾。別サイト比較表も設定変更=ランダム再生成で一致するため表側をcanonical。

## missingFields
- setting-change-specific internal high/low state distribution: `UNVERIFIED_AFTER_RESEARCH`。
- pure-power-cycle internal high/low state carryover contract: `UNVERIFIED_AFTER_RESEARCH`。
- reset-specific calendar-mode percentage distribution: `NONE_CONFIRMED_AFTER_RESEARCH`。
- deterministic manufacturer-guaranteed gakkun contract: `UNVERIFIED / REPORTED_DIFFICULT_NOT_GUARANTEED`。
- 実機完全再現用の通常時全カレンダー/内部状態移行テーブル: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- ANALYSIS_DB / HAZUSE: https://hazuse.com/machine/pachislot/6S1436/
- ANALYSIS / パチ7 天井: https://pachiseven.jp/machines/5056/cutout/78
- ANALYSIS / パチ7 通常時: https://pachiseven.jp/machines/5056/cutout/4
- ANALYSIS / 一撃: https://1geki.jp/slot/s_monkeyturn
- ANALYSIS / 一撃 ART概要: https://1geki.jp/slot/s_monkeyturn/81/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/30593/
- ANALYSIS / 期待値見える化: https://slotjin.com/zone/monkeyturn3/
- ANALYSIS / ぱちすろLIFE 基本: https://pachislot-life.com/information/mkt3/
- ANALYSIS / ぱちすろLIFE 天井・設定判別: https://pachislot-life.com/information/mkt3-capture/
- RETROSPECTIVE_ANALYSIS / スロがち: https://slogati.com/monkeyturn3/
- RETROSPECTIVE / みんスロ: https://minslo.com/モンキーターンiii/
- CONTEMPORARY_MAGAZINE_INDEX / Fujisan パチスロ必勝ガイドMAX 2017年2月号: https://www.fujisan.co.jp/product/1219887/b/1454477/

## retrievalHistory
- identity/release: `パチスロ モンキーターンIII / モンキーターン3 / MONKEY TURN III / 山佐 / YAMASA / モンキーターン3/DD / 6S1436 / 導入 / 2017-02-27 / 2017-03-06 / 設置`。
- performance: `機械割 / ART初当たり / CZ確率 / 50枚 / 1000円 / コイン持ち / ベース / 純増 / SG RUSH / フライングST / ST`。
- reset QA: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / カレンダー / カレンダーマス / カレンダーモード / 艇刻システム / 内部状態 / 高確 / ガックン / 変更判別`。
