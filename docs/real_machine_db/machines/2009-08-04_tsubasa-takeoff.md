# つばさTAKEOFF

machineName: つばさTAKEOFF
manufacturer: コルモ
formalModelName: ツバサテイクオフ
inspectionNumber: 8S0943
releaseDate: 2009-08-04（パチビー具体日） / 2009-08-03（当時導入日ブログ） / 2009-08（P-WORLD月表記）
generation: 5号機
systemType: A+ART / AT / パンク回避 / 天井RT・ART / 技術介入
coreStatus: COMPLETE_CORE_WITH_PAYOUT_DEFINITION_CONFLICT_AND_RELEASE_DAY_CONFLICT

## payoutRateBySetting

P-WORLD市場掲載値:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 99.1% |
| 3 | 101.3% |
| 4 | 104.4% |
| 5 | 110.5% |
| 6 | 115.2% |

パチマガスロマガ・シミュレート値:

| 設定 | 攻略なし | 攻略あり |
|---:|---:|---:|
| 1 | 93.37% | 96.81% |
| 2 | 95.29% | 98.97% |
| 3 | 97.55% | 101.43% |
| 4 | 100.57% | 104.93% |
| 5 | 104.07% | 111.71% |
| 6 | 106.72% | 117.05% |

定義差が大きいため平均せず別系列で保持する。

## initialHitBySetting

| 設定 | 赤7BIG | 黒/紫7BIG | 緑7BIG | ボーナス合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/1310.72 | 1/1092.27 | 1/595.78 | 1/297.89 |
| 2 | 1/1191.56 | 1/1110.78 | 1/601.25 | 1/293.88 |
| 3 | 1/1074.36 | 1/1149.75 | 1/606.81 | 1/289.98 |
| 4 | 1/936.23 | 1/1260.31 | 1/612.49 | 1/286.18 |
| 5 | 1/736.36 | 1/1638.40 | 1/636.27 | 1/282.48 |
| 6 | 1/636.27 | 1/1872.46 | 1/675.63 | 1/278.88 |

P-WORLDとパチマガスロマガで一致（丸め差のみ）。

## baseGamesPer50

パチマガスロマガ「1000円あたりのゲーム数」:

| 設定 | 50枚あたりG数 |
|---:|---:|
| 1 | 35.93G |
| 2 | 36.15G |
| 3 | 36.37G |
| 4 | 36.59G |
| 5 | 36.81G |
| 6 | 37.11G |

## netIncrease

- ART「リゾートタイム」: 約+1.0枚/G（P-WORLD・パチビー）
- 赤7BIG後にARTへ突入。
- 通常モードで赤7BIGを引いた場合は最大800GのARTナビ、高確モード中なら次回ボーナスまでナビ継続。
- 規定G数後も技術介入でチェリーを見抜くことで次回ボーナスまでARTを延命可能とP-WORLDが説明。
- 黒/緑BIGは通常はART非突入だが、高確中なら終了後ATへ移行し最大400G。AT中は通常時の約3倍のコイン持ちとされる。

## basicPayout

- 赤7BIG: 約300枚
- 黒/紫7BIG: 約300枚
- 緑7BIG: 約100枚

P-WORLD・パチビーで照合。

## modeSpecificMinimumData

- 通常モード / 高確モードを持つ。
- 高確中ボーナスはボーナス後展開が優遇。
- 通常時1200G消化で天井RTへ突入。
- 通常時1500G消化で天井ARTへ突入。
- 天井ART/RTの終了条件・設定変更時カウンタ処理は別項目で扱う。

## resetBehavior — v0.7

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガに「攻め時・ヤメ時・設定変更時」項目の存在は確認できるが、検索で取得できた本文から設定変更時の天井カウンタ・通常/高確モード・ART/AT状態処理を確定できなかった。一般的な5号機挙動から補完しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に1200G/1500G天井カウンタ、通常/高確モード、ART/AT残Gを引き継ぐかの直接本文を確定できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみの場合の天井カウンタ・モード・ART/AT状態・液晶表示復帰について本機固有の直接資料を確定できず。

gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時1200Gで天井RT、1500Gで天井ARTは確定。設定変更時のカウンタclear/retainは未確定。

ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常天井は1200G RT / 1500G ART。設定変更による短縮・再起算の直接根拠は回収できず。

modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常/高確モードを持つが設定変更時の再抽選・初期モード振り分けを確定できず。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。ART/AT中・高確中の設定変更時処理を確定できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井、朝一高確優遇、ART/AT優遇を確定できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶、天井挙動による本機固有の変更判別を確定できず。

numericResetData:
  normalCeilingRt: 1200G
  normalCeilingArt: 1500G
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_RESEARCH_PASS_NORMAL_1200G_RT_1500G_ART_CEILINGS_CONFIRMED_RESET_COUNTER_MODE_STATE_POWER_CYCLE_AND_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `つばさTAKEOFF / ツバサテイクオフ / コルモ / 8S0943` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1200 / 1500 / 高確 / リゾートタイム / ガックン` を組み替えて再探索。
- P-WORLD、パチマガスロマガ、パチビー、当時導入日ブログを横断。
- 通常時1200G天井RT・1500G天井ARTはP-WORLDで直接確認。設定変更時の天井カウンタ・モード・ART/AT状態処理の本文は今回確定回収できず、推測補完しない。

## sources

取得日: 2026-09-02

1. P-WORLD「つばさTAKEOFF」 — https://www.p-world.co.jp/machine/database/5603 — メーカー=コルモ、5号機、AT/ART/RT、型式ツバサテイクオフ、検定8S0943、設定別ボーナス、機械割、基本獲得、ART約+1.0枚/G、通常1200G天井RT・1500G天井ART — reliability: ANALYSIS_HIGH
2. パチマガスロマガ「つばさTAKEOFF ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/05/h.php — 設定別3種BIG、合算、攻略なし/ありシミュレートPAYOUT — reliability: OLD_ANALYSIS_HIGH
3. パチマガスロマガ「つばさTAKEOFF 小役・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/05/c.php — 50枚ベース35.93〜37.11G — reliability: OLD_ANALYSIS_HIGH
4. パチビー「つばさTAKEOFF」 — https://www.pachibee.jp/movies/index/1851 — コルモ、導入日2009-08-04、5号機ART/AT、天井あり、約+1枚/G — reliability: ANALYSIS_HIGH
5. 最新5号機パチスロ無料攻略解析情報ブログ「最新スロットホール導入日」 — https://slotkaiseki777.blog102.fc2.com/blog-entry-547.html — 2009-08-03導入として掲載。ただしメーカーをエマとするためメーカー表記は他3系統と競合し、具体日補助資料としてのみ使用 — reliability: CONTEMPORARY_SINGLE_CONFLICTING_METADATA

## missingFields

- 設定変更時の1200G/1500G天井カウンタ処理
- 据え置き時の天井/モード/ART・AT状態引継ぎ
- 電源OFF→ONのみの状態復帰
- 設定変更時の通常/高確モード振り分け
- ガックン/初期出目/液晶による変更判別

## conflicts

- 導入具体日はパチビー2009-08-04、当時導入日ブログ2009-08-03。地域差/納品・稼働開始日の定義差の可能性があるため平均化せず両方保持。P-WORLDは2009-08の月精度。
- メーカーはP-WORLD・パチビー・パチマガスロマガがコルモで一致。当時導入日ブログのみエマ表記で競合するため、正式メーカーは3系統一致のコルモを採用し、ブログのエマ表記はconflict metadataとして保持。
- 機械割はP-WORLD市場掲載97.1〜115.2%、パチマガスロマガは攻略なし93.37〜106.72% / 攻略あり96.81〜117.05%。測定・攻略条件が異なるため平均せず別系列保存。
