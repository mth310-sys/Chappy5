# マジカルハロウィン2

machineName: マジカルハロウィン2
manufacturer: KPE
formalModelName: マジカルハロウィン2A
approvalNumber: 9S0947
releaseDate: CONFLICT — 2010-01-05 / 2010-01-12
generation: 5号機
systemType: A+ART / CZ経由ストックART
coreStatus: PARTIAL_BASE_GAMES_PER_50_WITH_RELEASE_DAY_CONFLICT_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main 437件「バジリスク ～甲賀忍法帖～」地点から継続。
- P-WORLDの2009年12月新台一覧はパチスロ6機種で、既存本線に哲也 新宿vs上野 / パチスロリッジレーサー2 / 炎の熱血教師 / 爆走列島 / 一騎当千2Brilliant Battle / バジリスク ～甲賀忍法帖～が収録済みのため、12月月境界を閉じて2010年1月へ前進。
- HAZUSEは2010-01-05導入開始、パチビーおよび必勝本は2010-01-12導入（予定）を掲載。日付差を平均せずCONFLICT保持し、時系列キュー上は確認できた最早日2010-01-05に配置する。
- KPE公式後継アーカイブは稼働開始を2010年1月（月精度）としている。

## payoutRateBySetting

- 設定1: 96.6%
- 設定2: 98.8%
- 設定3: 101.2%
- 設定4: 104.5%
- 設定5: 108.3%
- 設定6: 113.1%

HAZUSE、P-WORLD、必勝本で同一系列を確認。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: 1/354.3
- 設定2: 1/350.5
- 設定3: 1/346.8
- 設定4: 1/343.1
- 設定5: 1/337.8
- 設定6: 1/319.7

### REG
- 設定1: 1/364.1
- 設定2: 1/360.1
- 設定3: 1/356.2
- 設定4: 1/352.3
- 設定5: 1/346.8
- 設定6: 1/327.7

### ボーナス合算
- 設定1: 1/179.6
- 設定2: 1/177.6
- 設定3: 1/175.7
- 設定4: 1/173.8
- 設定5: 1/171.1
- 設定6: 1/161.8

HAZUSE、P-WORLD、必勝本で同一系列を確認。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

`マジカルハロウィン2 / マジハロ2 / マジカルハロウィン2A / 9S0947 / KPE` と `50枚 / 1000円 / ベース / コイン持ち / 回転数` を組み替え、HAZUSE、P-WORLD、K-Navi、必勝本、回顧資料を横断したが、比較可能な50枚ベースを確定できなかった。後継マジハロ5/8等の値は流用しない。

confidence: UNVERIFIED

## netIncrease

ART「カボチャンス」: **約+1.2枚/G**

1セット30G。K-Navi、P-WORLD、パチビーで一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- BIG: **約210枚**
- REG: **約60枚**
- ART「カボチャンス」: 1セット30G、約+1.2枚/G

confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ボーナス後またはART終了後はCZ「詠唱モード」へ移行し、6択の突入リプレイ正解またはナビでARTへ入る構造。
- ARTはカボチャンス / キングカボチャンス / スーパーカボチャンスの3系統。
- 通常時**1280G消化でスーパーカボチャンス**へ至る天井が公開されている。
- スーパーカボチャンスはREG中バトル敗北まで継続するARTとして当時解析に掲載。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。必勝本に本機専用「設定変更&天井情報」項目が存在し、KONAMI公式回顧Q&Aでも本機に「設定変更時の一枚絵」が存在したことは確認できるが、設定変更時の天井カウンタ、内部モード、ナビストック、CZ/ART状態をどう処理するかの本文を今回確定できなかった。後継機のリセット仕様は流用しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。1280G天井進捗、内部モード、ナビストック、ART/CZ状態の据え置き時保持範囲を本機固有の直接本文で確定できない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみの場合の1280G天井進捗、内部モード、ナビストック、ART/CZ状態の処理を直接説明する本機固有資料を確定できない。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時1280G天井は確定。設定変更でカウンタが0クリア/引継ぎ/別値化のどれかは本文未回収。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井は1280G。設定変更専用短縮天井・別天井値は `NONE_CONFIRMED_AFTER_RESEARCH`。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機には通常時の内部モード/状態概念があるが、設定変更専用振り分け・引継ぎを確定できない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ/ART/ナビストック/高確等の設定変更時処理は本機固有本文未回収。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮・ART保証・朝一高確率等は確定できない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗やナビストック消去を推測しない。

resetDetection: **PARTIAL_OFFICIAL_RETROSPECTIVE**。KONAMI「まじおつ。」の公式回顧Q&Aで、マジハロ2には「設定変更時の一枚絵」が存在したことを明記。設定変更を客側が推測し得る固有表示があった点は確認できるが、表示条件・表示タイミング・見逃し時の判別法は今回未確定。

numericResetData:
  normalCeiling: 1280G → スーパーカボチャンス
  settingChangeGameCounter: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_AFTER_REQUIRED_MULTIQUERY_RESEARCH

## conflicts

- 導入日: HAZUSE 2010-01-05 vs パチビー/必勝本 2010-01-12。KPE公式は2010年1月の月精度。日付定義差の可能性があるためCONFLICT保持。
- 機械割、BIG/REG/合算、ART純増、基本獲得枚数は主要資料間で採用値を覆す明確なCONFLICTを確認しなかった。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- exact setting-change handling of 1280G ceiling counter: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- mode/state/ART/CZ/navi-stock handling on setting change: UNVERIFIED_AFTER_RESEARCH
- reset-specific numeric distribution/benefit: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection display conditions/timing: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. KONAMIアミューズメント 機種アーカイブ「マジカルハロウィン2」 — https://www.konami.com/amusement/psm/archive/ps/2010/magihallo2/ — KPE系公式、2010年1月稼働、5号機ART — reliability: OFFICIAL
2. KONAMI「まじおつ。」公式Q&A — https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20200717.html — マジハロ2に「設定変更時の一枚絵」が存在したことを開発側回答で確認 — reliability: OFFICIAL_RETROSPECTIVE
3. HAZUSE「マジカルハロウィン2」 — https://hazuse.com/machine/pachislot/9S0924/ — 型式マジカルハロウィン2A、検定9S0947、2010-01-05、設定別BIG/REG/機械割 — reliability: ANALYSIS_DATABASE
4. P-WORLD「マジカルハロウィン2」 — https://www.p-world.co.jp/machine/database/5762 — KPE、5号機ART、BIG約210枚/REG約60枚、ART約+1.2枚/G、設定別BIG/REG/合算/機械割 — reliability: MAJOR_DATABASE
5. パチビー「マジカルハロウィン2」 — https://www.pachibee.jp/machines/index/209110011 — 2010-01-12、ART30G/約+1.2枚/G、BIG約210枚/REG約60枚、通常1280G天井 — reliability: CONTEMPORARY_DATABASE
6. K-Navi「マジカルハロウィン2」ART/CZ — https://p-kn.com/slot/1096/14845/ ; https://p-kn.com/slot/1096/14844/ — カボチャンス30G/約+1.2枚/G、詠唱モード構造 — reliability: CONTEMPORARY_ANALYSIS
7. パチスロ必勝本「マジカルハロウィン2 基本スペック」 — https://p.hisshobon.jp/machine/1491/1/22442 — 2010-01-12導入開始予定、設定別BIG/REG/合算/機械割、「設定変更&天井情報」専用項目の存在 — reliability: CONTEMPORARY_ANALYSIS
