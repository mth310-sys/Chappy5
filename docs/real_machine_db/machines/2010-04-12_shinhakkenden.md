# 神人 八犬伝

machineName: 神人 八犬伝
manufacturer: コルモ
formalModelName: シンハッケンデン1
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-04-12
releaseDateStatus: CONFLICT_2010-04-12_VS_2010-04-19
releaseDateAlternates: 2010-04-19
releaseDateNote: K-Navi全国導入カレンダー/本機ページは2010-04-12。2010年当時のスペック整理記事は納品2010-04-18・導入2010-04-19とする。平均化せず双方を保持し、本線時系列の主値は全国導入開始日を明示するK-Navi 2010-04-12を採用。
generation: 5号機
systemType: ART専用 / ボーナス非搭載 / CZ・RT状態管理
coreStatus: COMPLETE_CORE_BASE_SINGLE_RELEASE_DATE_CONFLICT_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直近473「ハッピージャグラーV」を再取得し、recordCount 473 / chronologicalFrontier 2010-04-05 を正本として継続。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを正本とした。
- K-Navi 2010年4月全国導入カレンダーでは4/5群の次のパチスロ導入群が4/12で、「神人 八犬伝」「皆伝丸」の2機種。repo重複検索と想定ファイルpath確認で本機未登録を確認し、先頭候補として474件目に追加。
- 導入日はK-Navi 4/12に対し、当時スペック整理資料に納品4/18・導入4/19表記があるためCONFLICTとして保持。

## payoutRateBySetting

設定は **1 / 3 / 5 / 6 の4段階**。

### 解析整理主値
- 設定1: **97.1%**
- 設定3: **99.8%**
- 設定5: **104.2%**
- 設定6: **109.0%**

pacnkの設定判別DB掲載値。2010年当時スペック整理記事には各設定で **95.9〜97.1 / 98.5〜99.8 / 102.8〜104.2 / 107.5〜109.0%** という幅表記も残るため、固定値と幅値の定義を混ぜず補足値として保持する。

confidence: ANALYSIS_SINGLE_WITH_CONTEMPORARY_RANGE_REFERENCE

## initialHitBySetting

ART「殲鬼モード」初当たり合算:
- 設定1: **1/255.1**
- 設定3: **1/221.6**
- 設定5: **1/195.0**
- 設定6: **1/163.0**

グリーンべるとが端点1/255.1〜1/163.0を当時業界記事で明記し、pacnk・当時スペック整理資料が4設定すべて同値。

参考内訳（完全再現目的ではなく初当たり構造確認用）:
- 瞬20G: 1/279.9 / 1/235.1 / 1/205.5 / 1/170.4
- 烈150G: 1/3908.3 / 1/3859.1 / 1/3815.4 / 1/3725.9

confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## baseGamesPer50

- **約36G/1000円（50枚）** — 2010年当時スペック整理資料。
- 旧パチマガスロマガ本機専用「1000円あたりのゲーム数」欄は現在も「調査中」で、同値の独立高信頼照合は回収できず。

confidence: ANALYSIS_SINGLE

## netIncrease

- ART「殲鬼モード」: **約+2.0枚/G**
- ART終了後のループゾーン中もART同様に約+2.0枚/G。

グリーンべると、K-Navi、P-WORLD、旧パチマガスロマガで一致。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## basicPayout

- ART「瞬」: **20G固定 / 約40枚**
- ART「烈」: **150G固定 / 約300枚**
- ARTループ率: **全設定共通84%**
- ボーナス: **非搭載**

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は複数RT状態によるモード管理。チャンス役等から高確率側へ移行し、ループゾーン/ART突入を目指す。
- 出玉増加契機はARTのみ。
- ART終了後はループゾーンを経由し、84%でARTループ。
- 通常ゲーム数天井は **非搭載**。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機名「神人 八犬伝 / 神人八犬伝 / シンハッケンデン / シンハッケンデン1」とコルモを軸に「設定変更」「リセット」「朝一」「据え置き」「モード」「状態」「RT状態」を組み替え、当時業界記事、K-Navi、P-WORLD、旧パチマガスロマガ、古い解析整理資料を横断したが、設定変更時に通常時RT/モード・ART/CZ状態を初期化/再抽選/引継ぎのどれにするかを直接確定できる本機固有資料は回収できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。ゲーム数天井は非搭載だが、据え置き時の通常時RT/モード状態、ART潜伏/ループゾーン等の扱いを本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合のRT/モード/ART関連状態の保持・初期化を直接確認できず。

gameCounterReset: **NOT_APPLICABLE_FOR_CEILING_GAME_COUNT**。通常ゲーム数天井非搭載。ART/CZ内部状態の変更時処理は別項目としてUNVERIFIED。

ceilingAfterReset: **NOT_APPLICABLE**。通常ゲーム数天井自体が非搭載のため、リセット専用短縮天井も該当しない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に複数RT状態/モードが存在することは業界資料で確認できるが、設定変更時の再抽選・初期モード・振り分けは確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確率状態、ループゾーン、ART関連状態の設定変更/電源復帰時処理は本機固有直接資料を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用高確、短縮天井、設定変更専用ART/CZ優遇等の公開恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失型の不利要素は通常ゲーム数天井非搭載のため該当なし。モード/状態消失の有無はUNVERIFIEDのため推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/ランプ、ゲーム数挙動等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- resetCeilingShortening: **NOT_APPLICABLE**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: CEILING_NOT_APPLICABLE_MODE_STATE_POWER_CYCLE_DETECTION_UNVERIFIED_AFTER_RESEARCH

## conflicts

- releaseDate: **CONFLICT**。K-Naviは全国ホール導入開始2010-04-12。当時スペック整理資料は納品2010-04-18 / 導入2010-04-19。平均化せず双方を保持。
- payoutRateBySetting: 固定値97.1/99.8/104.2/109.0%と、当時資料の幅表記95.9〜97.1/98.5〜99.8/102.8〜104.2/107.5〜109.0%がある。定義不明のため平均化しない。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior exact mode/state handling: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior exact mode/state handling: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50 independent corroboration: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「純増2枚、84％ループのART『殲鬼モード』搭載」 — https://web-greenbelt.jp/00002544/ — 2010-02-17、ボーナス非搭載、純増約2枚/G、20G/150G、84%ループ、ART初当たり端点、4月上旬以降納品予定 — reliability: INDUSTRY_NEWS
2. K-Navi「神人 八犬伝」 — https://p-kn.com/slot/1165/ — ホール導入開始2010-04-12、20G約40枚/150G約300枚、純増約2.0枚/G、84%ループ — reliability: ANALYSIS_DB
3. K-Navi「2010年4月新台導入カレンダー」 — https://p-kn.com/calendar/201004/ — 2010-04-12全国導入群 — reliability: ANALYSIS_DB_CALENDAR
4. P-WORLD「シンハッケンデン」 — https://www.p-world.co.jp/machine/database/5867 — 5号機ART、BR非搭載、純増約2.0枚/G、20G/150G、84%ループ — reliability: INDUSTRY_DB
5. パチマガスロマガ「神人八犬伝 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/07/a.php — ART専用、純増約2枚/G、20G/150G、84% — reliability: ANALYSIS_HIGH
6. パチマガスロマガ「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/07/c.php — 1000円あたりG数は現在調査中 — reliability: ANALYSIS_HIGH
7. pacnk「神人八犬伝 設定判別ツール」 — https://pacnk.com/slot/tools/sh_shinhakkenden.html — 4段階設定、ART初当たり、PAYOUT、天井非搭載 — reliability: RETROSPECTIVE_ANALYSIS_DB
8. 2010年当時スペック整理記事「神人八犬伝～魔城殲鬼譚～」 — https://ameblo.jp/pachimatome/entry-10456194856.html — ART初当たり内訳、機械割幅、約36G/1000円、天井非搭載、納品4/18・導入4/19 — reliability: CONTEMPORARY_SECONDARY
9. pachinko’s blog「コルモ『神人八犬伝』」 — https://pachinko.hatenablog.jp/archive/2010/04/01 — 型式名シンハッケンデン、2010年4月リリース — reliability: RETROSPECTIVE_DB
10. 検定通過回顧資料「コルモの検定通過機種」 — https://q-and-a.hatenablog.com/entry/2016/10/23/105244 — 2009-08-27 シンハッケンデン1検定通過 — reliability: RETROSPECTIVE_SINGLE

## researchNotes

欠損項目について「神人 八犬伝」「神人八犬伝」「シンハッケンデン」「シンハッケンデン1」「コルモ」を軸に、「機械割」「PAYOUT」「ART初当たり」「50枚」「1000円」「ベース」「天井」「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「モード」「状態」「ガックン」「検定番号」を組み替え、メーカー由来痕跡、当時業界記事、K-Navi、P-WORLD、旧パチマガスロマガ、古い解析/検定回顧資料を横断した。十分な再探索後も直接確定できないresetBehavior細部・検定番号・ベース独立照合のみUNVERIFIEDとした。
