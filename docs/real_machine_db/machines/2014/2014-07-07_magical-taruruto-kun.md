# パチスロ まじかる☆タルるートくん

machineName: パチスロ まじかる☆タルるートくん
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: ニューギン
releaseDate: 2014-07-07
releaseDatePrecision: exact_start
generation: 5号機
systemType: ART / BR非搭載 / CZ / ゲーム数・MB回数天井
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- K-Naviの2014年7月導入カレンダーで **2014-07-07** 導入、メーカー **ニューギン**を確認。
- グリーンべるとの業界記事でニューギン「パチスタ」第3弾のART機として確認。
- P-WORLDで5号機・ART・BR非搭載・CZ搭載を確認。
- `まじかる☆タルるートくん / まじかるタルるートくん / ニューギン / 型式 / 検定 / 4S` 等で再探索したが、型式名・検定番号を安全に固定できる資料は今回取得できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.4% |
| 3 | 100.2% |
| 4 | 103.3% |
| 5 | 107.1% |
| 6 | 111.7% |

- pacnkとスロパチクエストで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/198.1 |
| 2 | 1/188.7 |
| 3 | 1/177.1 |
| 4 | 1/158.2 |
| 5 | 1/137.0 |
| 6 | 1/114.8 |

- グリーンべるとは設定1約1/198～設定6約1/115と報道し、pacnk・スロパチクエストの詳細値と整合。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

### CZ初当たり

| 設定 | CZ |
|---:|---:|
| 1 | 1/253.86 |
| 2 | 1/248.22 |
| 3 | 1/237.36 |
| 4 | 1/204.39 |
| 5 | 1/174.54 |
| 6 | 1/144.25 |

- CZがART初当たり構造上重要なため最低追加データとして収録。
- pacnk解析値。
- confidence: ANALYSIS_SINGLE

## baseGamesPer50

- **約35G / 50枚（1000円）**。
- CrankySevenの機種解析で確認。
- confidence: ANALYSIS_SINGLE

## netIncrease

- ART「特訓RUSH」: **約2.0枚/G**。
- グリーンべると、P-WORLD、K-Navi、複数解析資料で一致。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「特訓RUSH」は初期ゲーム数決定を経て開始し、**最低40G以上**。
- K-Naviでは「マジカルリールチャレンジ」で初期ゲーム数を決定し、最低保証40Gと確認。
- BR非搭載のため、固定BIG/REG獲得枚数は非該当。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

## modeSpecificMinimumData

- ART「特訓RUSH」を主軸とするART機。
- 通常時はCZを経由してARTを狙う構造を持つ。
- P-WORLD・K-Naviで通常、特殊、天国準備、天国系のモード存在を確認したが、通常時全モード移行テーブルは実機完全再現用の詳細解析となるため収集対象外。
- 完全再現用の小役別抽選・CZ内部抽選・全モード移行率は収集しない。

## ceiling

- ゲーム数天井: **ART後999G**。
- MB（モード移行）回数天井: **12回**。
- MB回数天井到達時は解析資料で **天国C移行**とされる。
- 999G天井到達時の恩恵表記には資料競合あり。CrankySevenは **ART当選**、スロパチクエストは **「ボーナス確定」** と記載するが、P-WORLDでは本機はBR非搭載。用語/転記差の可能性を排除できないため、恩恵の表現は `CONFLICT_CEILING_BENEFIT_TERMINOLOGY_ART_VS_BONUS` として保持し、平均化・勝手な同一視はしない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 解析資料で、設定変更時に **天井までのカウントがリセット**されることを確認。
- 本機にはゲーム数999G天井とMB回数12回天井が存在する。資料の総括記述は両天井を扱う文脈だが、MB回数カウンタ単独の初期化契約を別一次資料で固定できていないため、ゲーム数リセットはCONFIRMED、MB回数リセットは **SUPPORTED_BY_ANALYSIS_SUMMARY / 別系統照合待ち** として扱う。
- 設定変更後の専用モード振り分け・内部状態振り分けは **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- `宵越し / 据え置き / 天井 / MB回数 / ゲーム数` を組み替えて当時攻略・後年DBを再探索したが、本機固有の据え置き時ゲーム数・MB回数・モード・状態の引継ぎ契約を直接固定できる資料は **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機ART機の挙動から推測補完しない。

### powerCycleBehavior

- 設定変更なしの電源OFF→ON時について、ゲーム数・MB回数・モード・状態の扱いを直接固定できる本機固有資料は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- **RESET_CONFIRMED_ON_SETTING_CHANGE**（999Gゲーム数天井カウント）。
- MB回数天井カウント: **RESET_SUPPORTED_BY_ANALYSIS_SUMMARY / DIRECT_SECOND_SOURCE_UNVERIFIED**。

### ceilingAfterReset

- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開されている通常のゲーム数天井は999G、MB回数天井は12回。
- 「設定変更後のみ最大天井が短くなる」とする安全な公開値は確認できず。

### modeAfterReset

- 設定変更後に通常/特殊/天国準備/天国系のどこへ何%で移行するかという専用振り分けは、検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- 通常時モードの存在自体は確認済みだが、リセット専用数値ではないため全移行表は収集しない。

### stateAfterReset

- 設定変更時の内部高確/低確等の具体的状態振り分けは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更専用の短縮天井、朝一CZ高確率、朝一専用モード等の主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井カウンタ初期化は確認したが、それ自体を客側の恩恵として解釈しない。

### resetPenalties

- 設定変更固有の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- `朝一 / 設定変更 / リセット / 据え置き / 電源OFF ON / ガックン / リールガックン / MB回数` を組み替えて再探索したが、客側から高信頼で変更判別できる本機固有のガックン・表示・規定G挙動は **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- リセット時短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一特定G以内当選率/CZ当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

- `パチスロ まじかる☆タルるートくん / まじかるタルるートくん / ニューギン / 2014 / 型式 / 検定` に、`設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 999G / MB回数 / 短縮 / モード / 状態 / ガックン / 50枚 / 1000円` を組み合わせて探索。
- K-Navi、グリーンべると、P-WORLD、pacnk、スロパチクエスト、CrankySeven等の当時系/古い解析DB/後年整理資料を横断。
- 一般的なART機の据え置き・電断挙動を本機へ推測転記していない。
- 999G天井恩恵は資料の用語競合を解消できないためCONFLICTで保持。

## sources

取得日: **2026-09-07**

- K-Navi 2014年7月新台導入カレンダー: https://p-kn.com/calendar/201407/
- グリーンべると「パチスタ第3弾はARTの押し順ナビがない!?」: https://web-greenbelt.jp/00006933/
- P-WORLD: https://www.p-world.co.jp/machine/database/7426
- K-Navi ゲームフロー: https://p-kn.com/slot/2078/50017/
- K-Navi モード情報: https://p-kn.com/slot/2078/51086/
- pacnk 設定判別/確率: https://pacnk.com/slot/tools/sh_taruruto.html
- スロパチクエスト 機種解析: https://www.slopachi-quest.com/kisyubetsu/magical-tatutu-to/
- スロパチクエスト 天井解析: https://www.slopachi-quest.com/article/magical-talroute/
- CrankySeven: https://crankyseven.com/taruruto-pc.htm

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset具体振り分け: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset具体振り分け: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- MB回数カウンタ設定変更時処理の別系統直接照合: UNVERIFIED_AFTER_RESEARCH

## conflicts

- `CONFLICT_CEILING_BENEFIT_TERMINOLOGY_ART_VS_BONUS`: 999G到達時についてCrankySevenはART当選、スロパチクエストは「ボーナス確定」と表記。P-WORLDではBR非搭載のため、用語差/転記差の可能性があるが解消せず双方保持。
