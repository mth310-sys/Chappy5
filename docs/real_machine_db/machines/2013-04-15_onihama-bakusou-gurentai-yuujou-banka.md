# 鬼浜爆走紅蓮隊～友情挽歌編～

machineName: 鬼浜爆走紅蓮隊～友情挽歌編～
manufacturer: ベルコ
releaseDate: 2013-04-15
releaseDatePrecision: exact_day
generation: 5号機
systemType: AT / BR非搭載 / 擬似ボーナス + ゲーム数解除
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-04-15**。K-Navi、HAZUSE、パチビーで一致。
- ベルコ公式は **2013年4月登場** と記載。
- formalModelName: **オニハマバクソウグレンタイ3S**。
- inspectionNumber: **2S1380**。
- confidence: OFFICIAL_AND_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 2 | 98.8% |
| 3 | 100.4% |
| 4 | 104.2% |
| 5 | 108.2% |
| 6 | 113.0% |

- 必勝本、HAZUSE、パチマガスロマガで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

擬似ボーナス初当たり:

| 設定 | 初当たり |
|---|---:|
| 1 | 1/224.5 |
| 2 | 1/214.2 |
| 3 | 1/204.4 |
| 4 | 1/186.8 |
| 5 | 1/173.8 |
| 6 | 1/155.8 |

- 必勝本、HAZUSE、パチマガスロマガで一致。
- AT「狂乱麗舞」単独の設定別初当たりは、当時必勝本で「調査中」、別系統でも直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_PSEUDO_BONUS

## baseGamesPer50

- **約30G/50枚**。
- HAZUSEの本機専用スペックページで直接確認。
- 「50枚」「1000円」「ベース」「コイン持ち」等で再探索し、今回別系統の直接数値までは確定できず単一高品質資料値として保持。
- confidence: ANALYSIS_SINGLE_PERIOD_DB

## netIncrease

- AT「狂乱麗舞」: **約2.8枚/G**。
- ベルコ公式、K-Navi、P-WORLD、必勝本、パチビーで一致。
- confidence: OFFICIAL_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「狂乱麗舞」: **1セット40G+α**、純増約2.8枚/G。
- 特攻ボーナス: **50G / 約140枚**。
- 男ボーナス: **50G / 約140枚**。
- 成り上がりボーナス: **30～150G / 約84～420枚**。
- ボーナスゲーム: **25G / 約70枚**。
- パチマガスロマガ、P-WORLD、必勝本で基本構造を照合。

## modeSpecificMinimumData

- 通常時は5モード: **通常A / 通常B / 天国準備 / 天国 / 超天国**。
- 規定ゲーム数の最大値:
  - 通常A: **990G**
  - 通常B: **768G**
  - 天国準備: **384G**
  - 天国: **128G**
  - 超天国: **128G**
- 全体天井: **通常時最大990GでボーナスorAT当選**。
- 990G到達時は **25%でAT当選**、そのAT当選時は **50%で極限突破にも当選**する当時解析あり。
- 通常状態は **通常1 / 通常2 / 高確 / 超高確** の4状態。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CLEARS_COUNTER_RESELECTS_MODE_STATE_RESETS_ONI_METER__POWER_CYCLE_CARRIES_ALL__PUBLIC_RESET_MODE_DISTRIBUTION_AND_DETECTION_CAPTURED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井までのゲーム数をリセット**。
- **内部モードを再抽選**。
- **内部状態を再抽選**。
- **鬼メーターをリセット**。
- 通常時の液晶は **屋上ステージ** へ。
- コイン3枚投入→1G消化で点灯する **コイン投入ランプ（3枚目）が消灯**。
- 必勝本の「天井&設定変更」で直接確認。

### carryOverBehavior

- 純据え置きを独立語で説明した契約は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- ただし設定変更を伴わない **電源OFF→ONのみ** の直接契約として、天井G・モード・状態・鬼メーターの引継ぎを確認している。
- 据え置きについては電断契約以上を推測しない。

### powerCycleBehavior

- **天井までのゲーム数を引き継ぐ**。
- **内部モードを引き継ぐ**。
- **内部状態を引き継ぐ**。
- **鬼メーターを内部的に引き継ぐ**。ただし液晶表示はリセットされる。
- コイン投入ランプ（3枚目）は **点灯したまま**。
- 通常時（前兆中含む）は屋上ステージへ。それ以外はステージを引き継ぐ。
- 必勝本で設定変更時との差まで直接確認。

### gameCounterReset

- settingChange: **CLEAR**。
- powerCycleOnly: **CARRY_OVER**。
- carryOver: `CARRY_OVER_WHEN_POWER_CYCLE_ONLY_DIRECTLY_CONFIRMED__PURE_STAY_SEPARATE_WORDING_UNVERIFIED`。

### ceilingAfterReset

- 設定変更専用の固定短縮天井ではなく、再抽選されたモードに従う。
- モード別最大: 通常A990G / 通常B768G / 天国準備384G / 天国128G / 超天国128G。
- 全体最大は **990G**。

### modeAfterReset

- **設定変更時にモード再抽選**。
- 公開振り分け:

| 設定 | 通常A | 通常B | 天国準備 | 天国 |
|---|---:|---:|---:|---:|
| 1 | 12.5% | 50.0% | 18.8% | 18.8% |
| 2 | 9.4% | 38.5% | 33.3% | 18.8% |
| 3 | 9.4% | 50.0% | 20.3% | 20.3% |
| 4 | 7.8% | 38.5% | 33.3% | 20.3% |
| 5 | 6.3% | 50.0% | 21.9% | 21.9% |
| 6 | 3.1% | 38.5% | 33.3% | 25.0% |

- 当該設定変更表には超天国の独立振り分け記載なし。
- 天国準備以上合計:
  - 設定1: **37.6%**
  - 設定2: **52.1%**
  - 設定3: **40.6%**
  - 設定4: **53.6%**
  - 設定5: **43.8%**
  - 設定6: **58.3%**
- 必勝本本文の概括「約40～60%で天国準備以上」と整合。

### stateAfterReset

- **設定変更時に状態再抽選**。
- **電源OFF→ONのみでは状態引継ぎ**。
- 状態は通常1 / 通常2 / 高確 / 超高確。
- 設定変更専用の各状態具体振り分けは検索語・資料系統を変えた再探索でも今回直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後は **約40～60%で天国準備以上**。
- 公開表上、天国そのものは設定1～6で **18.8～25.0%**。
- モード再抽選により384G/128G側へ寄る可能性があり、朝一狙いの実戦資料も存在。
- 必勝本の設定1変更実戦（87件、朝一128Gまたは当選後128Gまで）では平均収支 **+2196円**。これは実戦条件依存の参考値であり、理論期待値としては扱わない。

### resetPenalties

- 設定変更により前日の **天井G進捗・内部モード・内部状態・鬼メーター蓄積**を失う。
- 電断のみならこれらを引き継ぐ。

### resetDetection

- 本機固有の直接判別要素として **コイン投入ランプ**を確認。
- リール左下のコインランプが消灯する条件は、必勝本によれば **設定変更後** または **コイン投入後1Gも回さず清算** の2パターン。
- 対策のないホールで、前日点灯を確認した台が朝一消灯していれば **設定変更濃厚**。
- 電源OFF→ONのみなら3枚目ランプは点灯したまま。
- 通常時は設定変更/電断とも屋上ステージへ移行し、鬼メーターも液晶上はリセット表示になるため、ステージ・メーター表示だけでは判別しにくい。
- 本機固有のリールガックン契約は十分再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- resetModeDistribution:
  - setting1: normalA 12.5%, normalB 50.0%, heavenPrep 18.8%, heaven 18.8%
  - setting2: normalA 9.4%, normalB 38.5%, heavenPrep 33.3%, heaven 18.8%
  - setting3: normalA 9.4%, normalB 50.0%, heavenPrep 20.3%, heaven 20.3%
  - setting4: normalA 7.8%, normalB 38.5%, heavenPrep 33.3%, heaven 20.3%
  - setting5: normalA 6.3%, normalB 50.0%, heavenPrep 21.9%, heaven 21.9%
  - setting6: normalA 3.1%, normalB 38.5%, heavenPrep 33.3%, heaven 25.0%
- resetHeavenPrepOrHigher: **37.6 / 52.1 / 40.6 / 53.6 / 43.8 / 58.3%**（上表単純合計。丸めにより100%差が生じうる）
- resetHeavenOnly: **18.8 / 18.8 / 20.3 / 20.3 / 21.9 / 25.0%**
- modeCeilings: normalA 990G / normalB 768G / heavenPrep 384G / heaven 128G / superHeaven 128G
- maxCeilingAfterReset: **990G**

### numericResetData

- settingChangeGameCounter: CLEAR
- powerCycleGameCounter: CARRY_OVER
- settingChangeMode: RESELECT
- powerCycleMode: CARRY_OVER
- settingChangeState: RESELECT
- powerCycleState: CARRY_OVER
- settingChangeOniMeter: RESET
- powerCycleOniMeter: CARRY_OVER_INTERNAL_DISPLAY_RESET
- resetHeavenOnlySettings1to6: 18.8%, 18.8%, 20.3%, 20.3%, 21.9%, 25.0%
- resetHeavenPrepOrHigherSettings1to6: 37.6%, 52.1%, 40.6%, 53.6%, 43.8%, 58.3%
- maxCeiling: 990G

resetQaReliability: ANALYSIS_HIGH_DIRECT_FOR_SETTING_CHANGE_POWER_CYCLE_MODE_STATE_METER_AND_DETECTION__OFFICIAL_AND_MULTI_SOURCE_HIGH_FOR_CORE

## missingFields

- atInitialHitBySetting: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetGacckunContract: `UNVERIFIED_AFTER_RESEARCH`
- pureCarryOverContractBeyondDirectPowerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- secondaryDirectBaseGamesPer50Source: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- NONE_CONFIRMED_FOR_CORE_VALUES_USED.
- 2013年3月の個人系事前記事には「4月14日から出る」とする記述があるが、K-Navi / HAZUSE / パチビーはホール導入開始を **2013-04-15** と一致しているため、事前予定日と実導入日の定義差として扱い平均しない。

## sources

取得日: **2026-09-06**

1. ベルコ公式 — 鬼浜爆走紅蓮隊 友情挽歌編（2013年4月登場、5号機AT）
   - https://www.s-bellco.co.jp/products/slot/onihama_yb/
   - reliability: OFFICIAL
2. K-Navi — 鬼浜爆走紅蓮隊 友情挽歌編（導入2013-04-15、40G+α、純増約2.8枚/G）
   - https://p-kn.com/slot/1812/
   - reliability: ANALYSIS_HIGH_PERIOD_DB
3. HAZUSE — 基本スペック（型式名、検定番号、導入日、擬似ボーナス初当り、PAYOUT、50枚約30G）
   - https://hazuse.com/machine/pachislot/2S1380/genre/201/
   - reliability: ANALYSIS_HIGH_PERIOD_DB
4. パチビー — 鬼浜爆走紅蓮隊 友情挽歌編（導入2013-04-15、5号機AT、純増約2.8枚/G）
   - https://www.pachibee.jp/movies/index/9251
   - reliability: ANALYSIS_PERIOD_DB
5. P-WORLD — 鬼浜爆走紅蓮隊～友情挽歌編～（5号機AT、疑似ボーナスG数、狂乱麗舞40G+α・約2.8枚/G）
   - https://www.p-world.co.jp/machine/database/7014
   - reliability: INDUSTRY_ANALYSIS_DB
6. パチ＆スロ必勝本 — 基本スペック（導入2013-04-15、擬似ボーナス初当り、機械割）
   - https://p.hisshobon.jp/machine/2188/1/39441
   - reliability: ANALYSIS_HIGH_PERIOD
7. パチ＆スロ必勝本 — 天井&設定変更（天井990G、設定変更/電断挙動、設定変更モード振り分け、コイン投入ランプ）
   - https://p.hisshobon.jp/machine/2188/1/39811
   - reliability: ANALYSIS_HIGH_DIRECT_RESET
8. パチ＆スロ必勝本 — 設定変更台狙い（コインランプ判別条件、設定1変更87件実戦）
   - https://p.hisshobon.jp/machine/2188/1/40179
   - reliability: ANALYSIS_HIGH_DIRECT_RESET_DETECTION
9. パチ＆スロ必勝本 — AT概要（40G+継続バトル、約2.8枚/G、5モード、モード別最大G、4状態）
   - https://p.hisshobon.jp/machine/2188/1/39531
   - reliability: ANALYSIS_HIGH_PERIOD
10. パチ＆スロ必勝本 — 状態移行抽選（通常1/通常2/高確/超高確）
   - https://p.hisshobon.jp/machine/2188/1/40886
   - reliability: ANALYSIS_HIGH_PERIOD
11. パチマガスロマガ — ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/90/h.php
   - reliability: ANALYSIS_HIGH
12. パチマガスロマガ — 基本情報/疑似ボーナス獲得目安
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/90/a.php
   - reliability: ANALYSIS_HIGH

## queueNotes

- 2013-04-15同日群は **OPEN**。
- 次回は同日群の別カレンダー・メーカー別一覧を再監査し、未処理機を特定してから追加する。
