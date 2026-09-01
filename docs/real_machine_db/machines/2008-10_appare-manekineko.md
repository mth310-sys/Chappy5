# 天晴招猫

machineName: 天晴招猫
manufacturer: エマ
releaseDate: 2008-10
releaseDatePrecision: INDUSTRY_SCHEDULED_EARLY_MONTH_AND_DATABASE_MONTH
releaseDateNote: K-Navi当時業界ニュース（2008-09-03）は「ホールへの導入は10月上旬を予定」。P-WORLDと5号機クロニクルは2008年10月導入で一致。具体日の強い根拠は今回確定できず、日付を捏造せず月精度で保存。
modelName: 天晴招猫（あっぱれ！まねきねこ）
modelNumber: アッパレマネキネコV
modelNumberStatus: INDUSTRY_DATABASE
modelNameNote: P-WORLDで型式名「アッパレマネキネコV」、検定番号8S0324を確認。
generation: 5号機
systemType: ボーナス主体 + 天井RT / 小役優先制御
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primary_simulated:
    setting1: 97.78%
    setting2: 99.63%
    setting3: 101.68%
    setting4: 104.29%
    setting5: 107.27%
    setting6: 111.83%
    source: パチマガスロマガ（シミュレート値）
  corroboration_rounded:
    setting1: 97.9%
    setting2: 99.8%
    setting3: 101.8%
    setting4: 104.4%
    setting5: 107.5%
    setting6: 112.0%
    source: 5号機クロニクル
  status: ANALYSIS_HIGH_WITH_ROUNDING_CORROBORATION
  note: 5号機クロニクル系列は概ね丸め差の範囲。平均化せず両系列を保持するが、現時点では実質CONFLICTとは判定しない。

initialHitBySetting:
  red7BIG:
    setting1: 1/606.8
    setting2: 1/585.1
    setting3: 1/565.0
    setting4: 1/537.2
    setting5: 1/512.0
    setting6: 1/474.9
  catBIG:
    setting1: 1/630.2
    setting2: 1/606.8
    setting3: 1/585.1
    setting4: 1/555.4
    setting5: 1/528.5
    setting6: 1/489.1
  BIG_combined:
    setting1: 1/309.1
    setting2: 1/297.9
    setting3: 1/287.4
    setting4: 1/273.1
    setting5: 1/260.1
    setting6: 1/240.9
  REG:
    setting1: 1/425.6
    setting2: 1/414.8
    setting3: 1/399.6
    setting4: 1/385.5
    setting5: 1/360.1
    setting6: 1/331.0
  bonusCombined:
    setting1: 1/179.1
    setting2: 1/173.4
    setting3: 1/167.2
    setting4: 1/159.8
    setting5: 1/151.0
    setting6: 1/139.4
  status: ANALYSIS_HIGH
  note: パチマガスロマガ精密値。K-Navi基本ページは設定別数値を未発表表示のため、数値照合には使用せず機構/払い出し確認に利用。

baseGamesPer50:
  setting1: 37.10G
  setting2: 37.45G
  setting3: 37.86G
  setting4: 38.21G
  setting5: 38.61G
  setting6: 39.06G
  status: ANALYSIS_HIGH
  note: パチマガスロマガ「1000円あたりのゲーム数」。本DBでは50枚=1000円換算の比較値として保存。

netIncrease:
  ceilingRT: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 天井RT搭載自体は複数資料で確認できるが、天井RT中の比較可能な純増/Gを今回確定できず。

basicPayout:
  BIG: 約312枚
  REG: 約117枚
  status: ANALYSIS_HIGH
  payoutCondition:
    BIG: 345枚を超える払い出しで終了
    REG: 120枚を超える払い出しで終了
  note: パチマガスロマガ基本システムの純増目安。K-Naviでも345枚超/120枚超払い出し終了を独立確認。

modeSpecificMinimumData:
  structure: ノーマル寄りボーナス主体機。5号機リーチ目タイプ初の小役優先制御を採用し、ハマリ救済用の天井RTを搭載。
  ceilingRT: PRESENT_CONFIRMED
  ceilingGameCount: UNVERIFIED_AFTER_RESEARCH
  ceilingRTDuration: 次回ボーナスまでと推定可能な一般表現への補間は行わずUNVERIFIED
  ceilingRTNetIncrease: UNVERIFIED_AFTER_RESEARCH
  normalModes: NONE_CONFIRMED_AFTER_RESEARCH
  note: パチマガスロマガ現存インデックスに「天井RTについて」「攻め時・ヤメ時・設定変更時」の専用項目が存在することは確認できたが、本文数値を今回回収できなかったため閾値や変更時処理を推測しない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/メーカー名と「設定変更・リセット・朝一・天井RT・ガックン」を組み替え、K-Navi、P-WORLD、パチマガスロマガ現存インデックス、5号機回顧DBを横断したが、本機固有の変更時天井カウンタ/RT初期状態を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に天井までのゲーム数を引き継ぐか、RT状態を引き継ぐかを直接示す本機固有資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみでの天井カウンタ/RT/初期出目処理を確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。本機は天井RT搭載を確認済みだが、設定変更時の天井ゲーム数リセット/引継ぎを直接確定できず。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常天井の閾値自体とリセット短縮の有無/数値を確定できず。
  modeAfterReset: NONE_CONFIRMED_OR_UNVERIFIED。通常モード/朝一専用モードの存在を裏付ける資料なし。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。天井RT内部状態の変更・据え置き・電断時処理を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみのRT突入、天井短縮、朝一当選率優遇などの公開根拠を確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ等による本機固有の設定変更/据え置き判別条件を確定できず。
  numericResetData:
    resetCeilingGameCount: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_OR_UNVERIFIED
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_EXCEPT_RT_NET_INCREASE_AND_CEILING_THRESHOLD
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - field: payoutRateBySetting
    status: ROUNDING_VARIANCE_NOT_CONFLICT
    sourceA: パチマガスロマガ simulation 97.78/99.63/101.68/104.29/107.27/111.83%
    sourceB: 5号機クロニクル 97.9/99.8/101.8/104.4/107.5/112.0%
    handling: 平均化せず併記。差は概ね丸め・集計精度差として扱い、CONFLICT化しない。

missingFields:
  - 天井RTの発動ゲーム数
  - 天井RT純増/Gおよび継続条件の直接資料
  - 設定変更時の天井カウンタ/RT状態
  - 据え置き・電源OFF→ON時の天井カウンタ/RT状態
  - 本機固有の設定変更判別（ガックン/初期出目/表示等）
  - 朝一専用恩恵/不利および公開朝一数値

sources:
  - url: https://p-kn.com/topics/news/618/
    title: 回す門には福来たる!?パチスロ新機種「天晴招猫」登場! / K-Navi業界ニュース
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 2008-09-03発表、ホール導入10月上旬予定、小役優先制御、2828通りのリーチ目/チャンス目、天井RT搭載。
  - url: https://www.p-world.co.jp/machine/database/5309
    title: 天晴招猫 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式名アッパレマネキネコV、検定番号8S0324、2008年10月導入、5号機RT分類。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/30/h.php
    title: 天晴招猫 ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別赤7BIG/猫BIG/BIG合成/REG/総合算、シミュレートPAYOUT。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/30/c.php
    title: 天晴招猫 小役・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 1000円あたり37.10〜39.06G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/30/a.php
    title: 天晴招猫 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 天井RT、BIG約312枚、REG約117枚、規定払い出し345/120枚超。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/30/ema_slot_30.php
    title: 天晴招猫 攻略インデックス / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX_ONLY
    usedFor: 「天井RTについて」「攻め時・ヤメ時・設定変更時」専用解析項目の存在確認。本文回収不能のため数値/変更挙動は推測転記しない。
  - url: https://p-kn.com/slot/859/
    title: 天晴招猫 / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 天井RT搭載、小役優先制御、BIG/REG規定払い出し条件の独立確認。
  - url: https://5goki.com/ema
    title: エマ 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年10月導入、機械割97.9〜112.0%の独立系列。
