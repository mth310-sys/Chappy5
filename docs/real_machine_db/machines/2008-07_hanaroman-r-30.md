# 花浪漫R-30

machineName: 花浪漫R-30
manufacturer: タイヨー
releaseDate: 2008-07
releaseDatePrecision: LATE_MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED
modelName: 花浪漫R-30（沖縄限定バージョン）
generation: 5号機
systemType: ノーマル / 30Φ / 沖縄限定 / 完全告知系
payoutRateBySetting:
  values:
    setting1: 96.7%
    setting2: 98.1%
    setting3: 99.7%
    setting4: 102.2%
    setting5: 104.3%
    setting6: 106.3%
  confidence: ANALYSIS_CROSSCHECKED
  note: pacnk設定判別資料と5号機クロニクルで一致。
initialHitBySetting:
  big:
    setting1: 1/326.0
    setting2: 1/313.6
    setting3: 1/303.4
    setting4: 1/291.3
    setting5: 1/280.1
    setting6: 1/268.6
  reg:
    setting1: 1/555.4
    setting2: 1/528.5
    setting3: 1/500.3
    setting4: 1/455.1
    setting5: 1/431.2
    setting6: 1/402.1
  combined:
    setting1: 1/205.4
    setting2: 1/196.8
    setting3: 1/188.9
    setting4: 1/177.6
    setting5: 1/169.8
    setting6: 1/161.0
  confidence: INDUSTRY_AND_DATABASE_CROSSCHECKED
  note: 2008年当時グリーンべるととP-WORLDで設定1〜6レンジ/数列を確認。pacnkでもBIG/REG系列を照合。
baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 花浪漫R30/花浪漫R-30/タイヨー/沖縄限定と50枚・1000円・ベース・コイン持ちを組み替えたが比較可能な設定別/設定1値を確定できず。
netIncrease:
  status: NOT_APPLICABLE
  note: RT/ART/ATを主出玉契機とする公開仕様は確認されず、リアルボーナス主体のノーマル機として扱う。
basicPayout:
  big:
    payoutEndCondition: 349枚を超える払い出しで終了
    netPayout: 約300枚
  reg:
    payoutEndCondition: 169枚を超える払い出しで終了
    netPayout: 約149枚
  confidence: INDUSTRY_AND_DATABASE_CROSSCHECKED
  note: グリーンべるとで純増約300/149枚、P-WORLDで払い出し終了条件を確認。
modeSpecificMinimumData:
  status: NOT_APPLICABLE_OR_NONE_CONFIRMED
  note: 公開資料上、通常時ゲーム数天井・CZ・RT/ART/AT・朝一専用モード等を確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。花浪漫R30/花浪漫R-30/タイヨーと設定変更・リセット・朝一を組み替え、P-WORLD、旧攻略、回顧DB、当時掲示板/業界資料を再探索したが本機固有処理を確定できず。
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
  - 7月下旬内の具体導入日
  - 50枚あたりゲーム数/1000円ベース
  - 設定変更/据え置き/電源OFF→ONの本機固有処理
  - 本機固有の設定変更判別（ガックン/初期出目等）

sources:
  - url: https://web-greenbelt.jp/00003774/
    title: 『花浪漫30』に沖縄限定ver.が登場 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 沖縄限定、型式花浪漫R-30、2008年7月下旬導入、BIG/REG/合算レンジ、純増約300/149枚、N-30との差異
  - url: https://www.p-world.co.jp/machine/database/5294
    title: 花浪漫R30 / P-WORLD
    retrievedAt: 2026-09-01
    confidence: DATABASE
    usedFor: 設定別BIG/REG/合算確率、349/169枚超の払い出し終了条件、沖縄限定確認
  - url: https://pacnk.com/slot/tools/sh_hanaromanr.html
    title: 花浪漫R-30 設定判別ツール / pacnk
    retrievedAt: 2026-09-01
    confidence: ANALYSIS
    usedFor: 設定別BIG/REG確率と機械割96.7〜106.3%の照合
  - url: https://5goki.com/taiyo
    title: タイヨー5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年7月導入、花浪漫N30とは別機、設定別機械割の照合

researchNotes:
  - グリーンべるとは2008-08-08記事で「7月下旬より導入」と過去形で明記しており、月内下旬までは確定。具体日は推測しない。
  - N-30よりBB確率を抑えREG確率を高め、REG純増も約149枚へ増やした沖縄限定別スペックのため独立レコード化。
  - 設定別機械割96.7/98.1/99.7/102.2/104.3/106.3%はpacnkと5号機クロニクルが一致し、平均処理はしていない。
  - resetBehaviorは設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックンを含め再探索し、一般的なノーマル機挙動やN-30の挙動は流用していない。
