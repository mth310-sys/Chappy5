# パチスロピンポン

machineName: パチスロピンポン
manufacturer: 三洋物産
releaseDate: 2010-09-06
releaseDateStatus: REGIONAL_SEQUENTIAL_ROLLOUT_START_CONFIRMED
releaseDateNote: コミックナタリーが2010-09-06より全国ホールで順次稼働予定、東京地区は10月上旬と明記。K-Naviの2010-10-04は「全国一斉導入開始日」基準であり、同カレンダー自身が地域により前後すると注記するため、地域順次稼働開始日と全国一斉導入基準日を分離しCONFLICT扱いしない。
nationwideSimultaneousIntroductionDate: 2010-10-04
generation: 5号機
systemType: ART / ゲーム数管理型
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線実レコードを再取得して開始。
- 開始時正本は recordCount 514 / chronologicalFrontier 2010-09-27。
- LATEST_HANDOFF指定の2010年9月漏れ監査を継続し、本機がrepo未登録であることを実ファイル/検索で確認。
- コミックナタリーは2010-09-06から全国順次稼働予定、K-Naviは全国一斉導入開始日を2010-10-04としている。導入日定義が異なるため、DBでは2010-09-06を地域順次稼働開始日としてBACKFILL登録し、2010-10-04を全国一斉導入基準日として併記する。
- 遡及追加のためchronologicalFrontierは2010-09-27を維持する。

## payoutRateBySetting

- 設定1: **96.6%**
- 設定2: **98.1%**
- 設定3: **100.2%**
- 設定4: **103.4%**
- 設定5: **107.1%**
- 設定6: **112.0%**

K-Navi、P-WORLD、Cranky Sevenの解析値で一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### ART初当たり
- 設定1: **1/146.5**
- 設定2: **1/135.2**
- 設定3: **1/131.0**
- 設定4: **1/111.4**
- 設定5: **1/103.3**
- 設定6: **1/84.4**

### ボーナス＋ART合算
- 設定1: **1/135.6**
- 設定2: **1/125.9**
- 設定3: **1/122.2**
- 設定4: **1/105.0**
- 設定5: **1/97.7**
- 設定6: **1/79.6**

### BIG合算
- 設定1～5: **約1/1820.4**
- 設定6: **約1/1394.4**

P-WORLD/Cranky SevenでART初当たり・BIG合算、K-Naviでボーナス＋ART合算を確認。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

- 全設定共通: **約33.2G/1000円（50枚）**

Cranky Sevenの直接値。通常時小役確率と同ページで提示される解析値として採用。今回、独立した同精度の直接ベース値は再取得経路で確定できなかったため単一解析値扱い。
confidence: HISTORICAL_ANALYSIS_MEDIUM_HIGH_SINGLE

## netIncrease

- ART「ピンポンボーナス」: **約+1.9枚/G**
- ナビ回数: **15 / 25 / 35 / 50回 + α**
- P-WORLD掲載の目安獲得枚数: 15回 約104枚 / 25回 約165枚 / 35回 約225枚 / 50回 約316枚

confidence: DATABASE_AND_ANALYSIS_HIGH

## basicPayout

- BIG: **約240枚**
- プレミアムBIG/ノーマルBIGとも352枚超の払い出しで終了、純増約240枚。

P-WORLD、Cranky Sevenで一致。
confidence: MULTI_SOURCE_HIGH

## modeSpecificMinimumData

通常時はA / B / 天国 / 超天国の4モードでART規定ゲーム数を管理。

- Aモード: **最大989G**
- Bモード: **最大999G**
- 天国モード: **最大99G**、ループ約50%
- 超天国モード: **最大32G**、ループ約80%、転落時は天国へ
- P-WORLDの簡略表記では通常モード最大999G / 天国99G / 超天国32G。
- ART当選時は最大32Gの前兆を経由してドラゴンチャレンジへ移行。

confidence: HISTORICAL_ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **MODE_RESELECT_CONFIRMED**。Cranky Sevenが「設定変更時」に滞在モードを再抽選すると明記し、具体振り分けを掲載。

- Aモード: **80.0%**
- Bモード: **17.0%**
- 天国モード: **3.0%**
- 超天国モード: **設定変更時振り分け表に掲載なし（0%相当として扱うが、独立一次資料未回収のため表記どおりの解釈に限定）**
- 上記は全設定共通。

settingChangeModeConfidence: HISTORICAL_ANALYSIS_MEDIUM_HIGH

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。旧天井狙い資料には本機を「宵越し×」「設定変更時モードを再セット」とする記録があり、設定変更時の前日規定G進捗を実戦上利用しない根拠にはなる。ただし据え置き時の内部カウンタ/モード保持を直接明記した本機固有の高信頼解析本文は回収できなかったため、据え置き=完全保持とは断定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名＋電源OFF/ON、電断、朝一、設定変更、据え置き、液晶、リール出目を組み替え、当時解析・旧DB・回顧資料まで再探索したが、単純電源OFF→ON時のモード/規定G/ART状態の直接根拠を確定できず。

gameCounterReset: **PRACTICAL_PREVIOUS_GAME_PROGRESS_NOT_USABLE_AFTER_SETTING_CHANGE / INTERNAL_COUNTER_MECHANISM_UNVERIFIED**。設定変更時にモード自体を再抽選することは確認済みで、旧天井資料も宵越し不可とする。一方、内部カウンタ変数のCLEAR/再採番処理そのものを説明した資料は未回収。

ceilingAfterReset: **MODE_DEPENDENT_RESELECTED**。設定変更時はA80% / B17% / 天国3%で再抽選されるため、公開値ベースの最大規定GはA989G / B999G / 天国99G。リセット専用の別天井数値は確認なし。

modeAfterReset: **CONFIRMED_NUMERIC**。
- A: 80.0%
- B: 17.0%
- 天国: 3.0%
- 超天国: 設定変更振り分け表に掲載なし

stateAfterReset: **PARTIAL_MODE_CONFIRMED / OTHER_STATES_UNVERIFIED_AFTER_RESEARCH**。通常時滞在モード再抽選は確認済み。ARTストック、ドラゴンチャレンジ、前兆途中、特殊制御状態等の設定変更処理は詳細内部再現対象外でもあり、直接資料未回収のため推測しない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **CONFIRMED_LIMITED**。設定変更時の3.0%で天国モードスタートとなり、天国の最大規定Gは99G。これを公開朝一数値として保持する。設定変更専用の超天国振り分けや別短縮天井は確認なし。

resetPenalties: **PRACTICAL_PREVIOUS_CEILING_PROGRESS_LOST_FOR_TARGETING**。旧天井資料が「宵越し×」とするため、前日のハマリゲーム数を設定変更後の天井狙いにそのまま加算できない点を実戦上の不利として保持。ただし内部カウンタの厳密な初期化仕様はUNVERIFIED。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。本機固有のガックン、初期出目、液晶ステージ、ランプ等による設定変更/据え置き判別の高信頼直接根拠を回収できず。朝一99G以内ARTは天国開始の可能性を持つが、通常遷移や小役強制放出でも早いARTが起こり得るため、変更確定判別には使わない。

numericResetData:
- resetModeA: **80.0%**
- resetModeB: **17.0%**
- resetModeHeaven: **3.0%**
- resetModeSuperHeaven: **NOT_LISTED_IN_RESET_TABLE**
- maxGameA: **989G**
- maxGameB: **999G**
- maxGameHeaven: **99G**
- maxGameSuperHeaven: **32G**（通常モード仕様。設定変更時振り分けは未掲載）
- resetDedicatedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleModeBehavior: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: RESET_MODE_NUMERIC_CONFIRMED / POWER_CYCLE_AND_DETECTION_UNVERIFIED / CARRYOVER_ONLY_SECONDARY_PRACTICAL_SUPPORT

## conflicts

- 導入日: **CONFLICTではなく定義分離**。コミックナタリーの2010-09-06は全国順次稼働開始、K-Naviの2010-10-04は全国一斉導入開始日。K-Navi自身が地域差を注記しているため、両値を別フィールドで保持。
- 天井: P-WORLDはA/Bをまとめて通常モード999Gと簡略表記。Cranky SevenはA989G / B999Gに分ける。より詳細な後者を主値とし、999Gは全体最大天井として整合するためCONFLICT扱いしない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- unchanged/carryOverBehaviorの本機固有高信頼直接記述: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- ARTストック/前兆/CZ途中の設定変更・電断処理: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. コミックナタリー「ペコで天国モード！松本大洋『ピンポン』がパチスロに」 — 2010-08-03掲載、9月6日より全国順次稼働予定、東京地区10月上旬
   - https://natalie.mu/comic/news/35630
   - confidence: CONTEMPORARY_NEWS_HIGH
2. K-Navi「パチスロピンポン」 — 三洋物産、ホール導入開始2010-10-04、ボーナス＋ART合算、機械割
   - https://p-kn.com/slot/1262/
   - confidence: CONTEMPORARY_DATABASE_HIGH
3. K-Navi 2010年10月新台導入カレンダー — 2010-10-04掲載。ページ注記で「全国一斉導入開始日」「地域により導入日が前後」と定義
   - https://p-kn.com/calendar/201010/
   - confidence: CONTEMPORARY_CALENDAR_HIGH
4. P-WORLD「パチスロピンポン」 — 5号機ART、BIG約240枚、ART初当たり、機械割、天井/モード、ART約+1.9枚/G
   - https://www.p-world.co.jp/machine/database/6062
   - confidence: DATABASE_HIGH
5. Cranky Seven「ピンポン 解析攻略」 — 機械割、ART初当たり、1000円約33.2G、A989/B999/天国99/超天国32G、設定変更時モード再抽選A80/B17/天国3
   - https://crankyseven.com/pinpon-pc.htm
   - confidence: HISTORICAL_ANALYSIS_MEDIUM_HIGH
6. 天井ハイエナ生活 旧天井一覧 — ピンポン「通常時600狙い / 宵越し× / 設定変更時モードを再セット」の補助記録。高信頼解析ではないため据え置き確定情報には昇格させない
   - https://macerate.seesaa.net/article/226312110.html
   - confidence: HISTORICAL_SECONDARY_LOW_MEDIUM
