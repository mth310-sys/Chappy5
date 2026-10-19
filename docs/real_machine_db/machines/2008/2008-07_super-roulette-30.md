# スーパールーレット30

machineName: スーパールーレット30
manufacturer: ネイチャー・アセスメント
releaseDate: 2008-07
releaseDatePrecision: MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED
modelName: スーパールーレット30（30Φ）
generation: 5号機
systemType: ノーマル / 30Φ / 完全告知 / 同時成立あり
payoutRateBySetting:
  pachimagaSimulation:
    setting1: 94.00%
    setting2: 98.03%
    setting3: 99.23%
    setting4: 100.91%
    setting5: 102.94%
    setting6: 104.65%
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガ旧攻略のシミュレート値。25Φの95.0〜108.0%は別スペック値のため流用しない。
initialHitBySetting:
  red7:
    setting1: 1/1236.53
    setting2: 1/1236.53
    setting3: 1/1236.53
    setting4: 1/1236.53
    setting5: 1/1236.53
    setting6: 1/1236.53
  otherBonusEach:
    note: 赤赤黒 / 黒赤赤 / 黒赤黒の各1種類ごとの確率
    setting1: 1/789.59
    setting2: 1/753.29
    setting3: 1/736.36
    setting4: 1/704.69
    setting5: 1/668.73
    setting6: 1/642.51
  combined:
    setting1: 1/217.01
    setting2: 1/208.71
    setting3: 1/204.80
    setting4: 1/197.40
    setting5: 1/188.86
    setting6: 1/182.55
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガ旧攻略の30Φ専用ページ掲載値。赤7以外3ボーナスは各同一確率。
baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  comparativeNote: 25Φより通常時コイン持ちが若干低いことは当時攻略資料で明記されるが、30Φ固有の50枚あたりゲーム数/1000円ベースの比較可能な数値は確定できず。
netIncrease:
  status: NOT_APPLICABLE
  note: RT/ART/ATを主出玉契機とする仕様は確認されず、4種類のリアルボーナス主体のノーマル機として扱う。
basicPayout:
  bonus465:
    payoutEndCondition: 465枚を超えるメダルの払い出しで終了
    netPayout: 約448枚
  bonus300:
    payoutEndCondition: 300枚を超えるメダルの払い出しで終了
    netPayout: 約273枚
  bonus200:
    payoutEndCondition: 200枚を超えるメダルの払い出しで終了
    netPayout: 約182枚
  bonus100:
    payoutEndCondition: 100枚を超えるメダルの払い出しで終了
    netPayout: 約91枚
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガ旧攻略30Φページに掲載。演出等は25Φと基本的に同じだが、通常時ベースとボーナス確率は異なる。
modeSpecificMinimumData:
  status: NOT_APPLICABLE_OR_NONE_CONFIRMED
  note: 公開資料上、通常時ゲーム数天井・CZ・RT/ART/AT・朝一専用モード等を確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。スーパールーレット30/スーパールーレット-30/ネイチャー・アセスメントと設定変更・リセット・朝一を組み替え、当時攻略、P-WORLD、旧DB、回顧資料を再探索したが本機固有処理を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の本機固有内部状態・成立済みボーナス等の扱いを確定する直接資料を確認できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの初期出目・リール状態・内部状態の本機固有資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常ゲーム数天井/周期ゲーム数の公開仕様を確認できず。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。リセット短縮天井・朝一専用ゲーム数は確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。公開モードシステム/朝一専用モードを確認できず。
  stateAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。朝一再抽選対象となる高確/CZ/RT/ART等の公開内部状態を確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン、初期出目、表示等による設定変更/据え置き判別資料を確定できず。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts: []

missingFields:
  - 具体導入日/全国納品開始日
  - 30Φ固有の50枚あたりゲーム数/1000円ベース
  - 設定変更/据え置き/電源OFF→ONの本機固有処理
  - 本機固有の設定変更判別（ガックン/初期出目等）

sources:
  - url: https://web-greenbelt.jp/00003685/
    title: MAX448枚獲得の『スーパールーレット』 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008年7月納品予定、4種類のボーナス、シリーズ基本仕様
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/03/a.php
    title: スーパールーレット30 基本システム / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 30Φ専用スペック、25Φよりコイン持ちが若干低くボーナス確率が高いこと、4種ボーナス純増
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/03/h.php
    title: スーパールーレット30 ボーナス抽選確率 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別4種ボーナス確率、合成確率、設定別シミュレートPAYOUT
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/03/k.php
    title: スーパールーレット30 単独ボーナス / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS
    usedFor: 単独/同時成立構造の照合
  - url: https://5goki.com/nature-assessment
    title: ネイチャー・アセスメント5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 25Φ/30Φ別機掲載、2008年7月導入月照合

researchNotes:
  - 25Φと30Φは演出等の基本仕様は同系だが、30Φは通常時コイン持ちを下げ、その分ボーナス確率を高めた別スペックと明記されるため独立レコード化。
  - 30Φの設定別ボーナス確率とシミュレート機械割は当時攻略資料から直接取得。25Φの数値は転記していない。
  - 50枚ベースは「50枚/1000円/コイン持ち/ベース」と表記を変えて再探索したが数値確定に至らず、比較記述のみ保持。
  - resetBehaviorは設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックンを組み替えて再探索し、一般的な5号機ノーマル機の挙動は流用していない。
