# ゴルゴ13 あの男に連絡だ!

machineName: ゴルゴ13 あの男に連絡だ!
manufacturer: オリンピア製造 / 平和
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-08-02
releaseDateStatus: NATIONAL_INTRODUCTION_DATE_SELECTED / DELIVERY_DATE_DIFFERENT_DEFINITION
releaseDateNote: K-Navi展示会資料・必勝本は2010-08-02導入開始予定。2010-06-16グリーンべるとはパチスロ納品開始を2010-08-01予定と報道。物流開始と全国ホール導入開始を分離し、本DB主値は2010-08-02とする。
generation: 5号機
systemType: A+ART / CZ経由セットストックART / 無限ART搭載
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_MODEL_APPROVAL_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線500「科学忍者隊ガッチャマンGR」を再取得。
- 開始時正本地点は recordCount 500 / chronologicalFrontier 2010-07-26。
- K-Navi 2010年7月全国一斉導入カレンダーでは7/26の次のスロット群は8月へ進む。7/27〜8/1について機種名・導入日・メーカー別の検索語を変えて追加候補を再監査し、本線へ割り込む全国導入機を今回確定できなかった。
- LATEST_HANDOFF指定の2010-08-02候補「ゴルゴ13 あの男に連絡だ!」「ギラギラ爺サマー」をrepo検索し双方未登録を確認。handoff記載順に本機を501件目として追加。

## payoutRateBySetting

パチ＆スロ必勝本シミュレート値:
- 設定1: **97.17%**
- 設定2: **99.73%**
- 設定3: **102.34%**
- 設定4: **105.00%**
- 設定5: **107.65%**
- 設定6: **112.08%**

当時グリーンべるとは端点を **97.3%〜112.1%** と掲載し、丸め差の範囲で整合。
confidence: ANALYSIS_HIGH_WITH_INDUSTRY_ENDPOINT_CHECK

## initialHitBySetting

### ボーナス合算
- 設定1: **1/229.95**
- 設定2: **1/222.91**
- 設定3: **1/216.29**
- 設定4: **1/210.05**
- 設定5: **1/204.16**
- 設定6: **1/198.59**

### BIG合算（SGB+GB）
- 設定1: **1/344.9**
- 設定2: **1/334.4**
- 設定3: **1/324.4**
- 設定4: **1/315.1**
- 設定5: **1/306.2**
- 設定6: **1/297.9**

### REG
- 設定1: **1/689.85**
- 設定2: **1/668.73**
- 設定3: **1/648.87**
- 設定4: **1/630.15**
- 設定5: **1/612.49**
- 設定6: **1/595.78**

P-WORLDはSGB / GB / RBがそれぞれ設定1約1/690〜設定6約1/596で同率と掲載。したがってSGB+GBがBIG合算、3種合算が上記ボーナス合算となる構造と整合。

ART単独の設定別初当たり系列は比較可能な公開値を今回確定できず、推定しない。
confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_BONUS / ART_INITIAL_HIT_UNVERIFIED

## baseGamesPer50

- **約32.5G/1000円（50枚）**

2010-06-16グリーンべると当時業界記事の直接値。
confidence: INDUSTRY_CONTEMPORARY

## netIncrease

- ART「ゴルゴチャンス」: **約+1.3枚/G**
- 1セット: **13G**
- 無限ART「スーパーゴルゴチャンス」: 次回ボーナスまで継続、純増約+1.3枚/G

K-Navi展示会、グリーンべると、P-WORLD、パチマガスロマガで照合。
confidence: INDUSTRY_PLUS_CONTEMPORARY_ANALYSIS_HIGH

## basicPayout

- スーパーゴルゴボーナス（赤BIG/SGB）: **約240枚**（351枚払い出し終了）
- ゴルゴボーナス（青BIG/GB）: **約180枚**（261枚払い出し終了）
- REG: **約60枚**（81枚払い出し終了）
- ART「ゴルゴチャンス」: 13G、約+1.3枚/G
- 無限ART「スーパーゴルゴチャンス」: 次回ボーナスまで、約+1.3枚/G

confidence: INDUSTRY_PLUS_CONTEMPORARY_ANALYSIS_HIGH

## modeSpecificMinimumData

- ART非当選ボーナス後およびART終了後はCZ「G-チャレンジ」へ移行。3択リプレイ正解でARTへ復帰/突入可能。
- ART「ゴルゴチャンス」はセットストック型で1セット13G。P-WORLDは平均連チャン約13回と紹介するが、物差しコアには採用せず補足扱い。
- 無限ART「スーパーゴルゴチャンス」は次回ボーナスまで継続。
- 天井は **3択リプレイ失敗後999G** ハマリで無限ARTへ突入。
- GB当選時はハマリG数に応じて3択ナビ発生率が上がり、P-WORLDは **10%〜75%** と掲載。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **STARTS_IN_G_CHALLENGE_CONFIRMED**。P-WORLDは設定変更後、内部的にCZ「G-チャレンジ」状態からスタートすると明記し、朝一からARTへ入れば設定変更の可能性が高いとする。これは本機の主要な朝一恩恵/判別要素。設定変更時に前日天井進捗をどの時点で破棄するかを直接説明した一次・当時解析本文は確定できなかったため、天井カウンタ処理そのものは下記の通り慎重に分離する。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の999G進捗、G-チャレンジ状態、ARTストックの継承を本機固有の直接資料で確定できず。後年の動画配信説明には本機の「宵越し天井」を扱う記述があり据え置き利用可能性を示すが、状態条件・店側変更有無が不明なため確定根拠には昇格させない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の999G進捗、G-チャレンジ、ARTストック、リール初期挙動を本機固有資料で直接確定できず。設定変更と同一視しない。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH / RESET-SIDE_SECONDARY_EVIDENCE_EXISTS**。P-WORLDは天井起算点を「3択リプレイ失敗後999G」とし、設定変更後はG-チャレンジ開始とするため、変更後は少なくとも新しい3択リプレイ局面が発生する。後年天井狙い整理資料は本機を「宵越し× / リセットCZスタート」と記載するが単一二次資料のため、前日カウンタ消去を高信頼確定値にはしない。

ceilingAfterReset: **G_CHALLENGE_START_CONFIRMED / FIXED_SHORTENED_CEILING_NONE_CONFIRMED_AFTER_RESEARCH**。通常天井は3択リプレイ失敗後999G。設定変更直後はG-チャレンジ状態。設定変更専用の500G等の固定短縮天井は確認されない。

modeAfterReset: **NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED**。通常A/B/天国のような長期ゲーム数解除モードは本機の主要公開仕様では確認されない。設定変更後はG-チャレンジというCZ状態から開始する。

stateAfterReset: **G_CHALLENGE_STATE_CONFIRMED**。設定変更後の内部状態としてG-チャレンジ開始を確認。それ以外の高確/低確状態再抽選やARTストック処理は `UNVERIFIED_AFTER_RESEARCH`。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **MORNING_G_CHALLENGE / SELF-HELP_ART_CHANCE**。設定変更直後から内部G-チャレンジのため、3択成功で朝一ARTへ直結し得る。P-WORLDは朝一ART突入を設定変更推測材料として明記。

resetPenalties: **PREVIOUS_CEILING_PROGRESS_LOSS_NOT_HIGH-CONFIDENCE_CONFIRMED**。後年整理資料には宵越し×とあるため変更時の前日天井狙いを否定する方向の証拠はあるが、前日カウンタ消去の直接解析本文を今回確定できず、断定しない。ARTストック消去有無も未確認。

resetDetection: **MORNING_ART_FROM_G_CHALLENGE_IS_CHANGE-SUGGESTIVE, NOT CERTAIN**。P-WORLDに「朝イチからARTに突入すれば設定変更の可能性大」と明記。ガックン、初期出目、ランプ、リール始動による本機固有判別は、機種名・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目を組み替えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
- normalCeilingTrigger: **3択リプレイ失敗後999Gで無限ART**
- settingChangeStartState: **G-チャレンジ**
- morningARTDetection: **朝一ART突入なら設定変更の可能性大（確定ではない）**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NOT_APPLICABLE / NONE_CONFIRMED**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: COMPLETE_FOR_SETTING_CHANGE_G_CHALLENGE_AND_MORNING_DETECTION / PARTIAL_FOR_COUNTER_CARRYOVER_POWER_CYCLE_STOCK

## conflicts

- payoutRate: 必勝本シミュレート値97.17〜112.08%に対し、当時グリーンべるとは端点97.3〜112.1%。丸め差の範囲として双方保持し、重大CONFLICTとは扱わない。
- releaseDate: 全国ホール導入2010-08-02（K-Navi/必勝本）と納品開始2010-08-01（グリーンべると）は定義差。releaseDate主値は全国導入2010-08-02。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- ART initial hit by setting: UNVERIFIED_AFTER_RESEARCH
- exact setting-change treatment of previous 999G ceiling progress: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior direct documentation: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- ART stock handling on setting change/power cycle: UNVERIFIED_AFTER_RESEARCH
- gakkun / initial reel position detection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「平和、PS同時にゴルゴ13シリーズを発表」2010-06-16 — https://web-greenbelt.jp/00006599/ — オリンピア製、納品2010-08-01予定、ART13G/+1.3枚、無限ART、設定1/6スペック、32.5G/1000円、各ボーナス枚数 — reliability: INDUSTRY_CONTEMPORARY
2. K-Navi 展示会速報 2010-06-15 — https://p-kn.com/topics/exhibition/677/ — 導入2010-08-02予定、ART/無限ART構造、各ボーナス契機 — reliability: CONTEMPORARY_INDUSTRY_MEDIA
3. P-WORLD パチスロ ゴルゴ13「2010年」 — https://www.p-world.co.jp/machine/database/6007 — 3種ボーナス、ART/CZ、設定変更後G-チャレンジ、999G天井、朝一変更推測 — reliability: ANALYSIS_DATABASE_HIGH
4. パチ＆スロ必勝本 基本スペック — https://p.hisshobon.jp/machine/1638/1/25474 — 2010-08-02導入、設定別ボーナス合算/BIG/REG、機械割 — reliability: CONTEMPORARY_ANALYSIS_HIGH
5. パチマガスロマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/92/a.php — 赤BIG240枚/青BIG180枚/REG60枚、ART+1.3枚/G、13G/無限ART — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
6. VideoMarket「珍台さん!いらっしゃ～い!! #32前編」 — https://www.videomarket.jp/title/288003/A288003062999H01 — 後年の実戦説明に「宵越し天井」 — reliability: RETROSPECTIVE_SUPPORT_ONLY
7. 天井ハイエナ生活「天井ハイエナ期待値リスト か行」 — https://macerate.seesaa.net/article/226196713.html — 本機を「宵越し× / リセットCZスタート」と整理 — reliability: SECONDARY_RETROSPECTIVE_LOW

## researchNotes

- `ゴルゴ13 あの男に連絡だ` / `ゴルゴ13 2010` / `オリンピア` に、機械割、BIG、REG、ART、1000円、50枚、ベース、天井、設定変更、リセット、朝一、据え置き、電源OFF ON、ガックン、初期出目、型式、検定番号、宵越しを組み替えて探索。
- グリーンべると、K-Navi、P-WORLD、必勝本、パチマガスロマガ、後年天井整理、回顧実戦資料を横断。
- 2012/2013「ゴルゴ13～薔薇十字団の陰謀～」や後年SANKYO版のリセット/モード値が検索に混入するため、2010年オリンピア版以外は数値根拠から除外した。
- 型式名・検定番号、単純電源OFF→ON、ガックン等は十分な再探索後も本機固有の直接根拠を確定できず、推測せずUNVERIFIED_AFTER_RESEARCH。
