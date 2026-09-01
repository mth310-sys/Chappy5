# 爺サマー

machineName: 爺サマー
manufacturer: 大都技研
releaseDate: 2008-07
releaseDatePrecision: LATE_MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED
modelName: ジイサマー7
generation: 5号機
systemType: ノーマル / 完全告知 / BIG+MB / 同時成立あり
payoutRateBySetting:
  pachimagaSimulation:
    setting1: 96.66%
    setting2: 98.57%
    setting3: 100.52%
    setting4: 102.70%
    setting5: 105.82%
    setting6: 111.99%
  retrospectiveRounded:
    setting1: 97.0%
    setting2: 99.0%
    setting3: 101.0%
    setting4: 103.0%
    setting5: 106.0%
    setting6: 112.0%
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガ旧攻略のシミュレート値を主系列とする。後年回顧資料の整数丸め系列は実質同系列とみられるが、定義/丸め差を消さず併記。
initialHitBySetting:
  big:
    setting1: 1/287.44
    setting2: 1/275.36
    setting3: 1/264.26
    setting4: 1/252.06
    setting5: 1/236.59
    setting6: 1/219.92
  mb:
    setting1: 1/512.00
    setting2: 1/504.12
    setting3: 1/496.48
    setting4: 1/489.07
    setting5: 1/474.90
    setting6: 1/394.80
  combined:
    setting1: 1/184.09
    setting2: 1/178.09
    setting3: 1/172.46
    setting4: 1/166.34
    setting5: 1/157.92
    setting6: 1/141.24
  confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: グリーンべるとで設定1/6レンジ、パチマガスロマガ旧攻略で全設定数列を確認。
baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 爺サマー/ジイサマー7/大都技研と50枚・1000円・ベース・コイン持ちを組み替え、旧攻略/回顧/業界資料を再探索したが比較可能な数値を確定できず。2022年の超ギラギラ爺サマー値は別機種のため除外。
netIncrease:
  status: NOT_APPLICABLE
  note: 初代2008年機はボーナスのみの完全告知ノーマルタイプ。後継ギラギラ爺サマー/超ギラギラ爺サマーのART/AT仕様は流用しない。
basicPayout:
  big:
    netPayout: 約312枚
  mb:
    netPayout: 約104枚
  confidence: INDUSTRY_AND_RETROSPECTIVE_CROSSCHECKED
  note: 2008年グリーンべるとと後年パチマガスロマガ回顧で一致。
modeSpecificMinimumData:
  replayBonusCorrelation:
    note: ボーナスの8割以上がリプレイ同時成立由来とされ、リプレイ連続で期待度上昇。物差し目的では詳細小役抽選テーブルは収集しない。
  status: NO_CZ_RT_ART_AT_CONFIRMED

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。初代爺サマー/ジイサマー7/大都技研/2008に限定し、設定変更・リセット・朝一を組み替えて旧攻略、業界記事、回顧資料を再探索したが本機固有処理を確定できず。2010/2022年後継機のリセット情報は除外。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の本機固有処理を確定する直接資料を確認できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの初期出目・リール状態等の本機固有資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常ゲーム数天井/周期ゲーム数の公開仕様を確認できず。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。リセット短縮天井・朝一専用ゲーム数は確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。公開された通常時モード/朝一専用モードを確認できず。
  stateAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。朝一再抽選対象となる高確/CZ/RT/ART等の公開内部状態を確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン、初期出目、表示等による設定変更/据え置き判別資料を確定できず。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts:
  - field: payoutRateBySetting
    status: ROUNDING_OR_METHOD_DIFFERENCE
    sourceA: パチマガスロマガ旧攻略シミュレート 96.66/98.57/100.52/102.70/105.82/111.99%
    sourceB: 後年回顧 97/99/101/103/106/112%
    handling: 平均せず双方保持。主系列は小数精度の当時解析値。

missingFields:
  - 7月下旬内の具体納品/導入日
  - 50枚あたりゲーム数/1000円ベース
  - 設定変更/据え置き/電源OFF→ONの本機固有処理
  - 本機固有の設定変更判別（ガックン/初期出目等）

sources:
  - url: https://web-greenbelt.jp/00003743/
    title: この夏は完全告知の『爺サマー』がアツイ！ / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 型式ジイサマー7、2008年7月下旬納品開始予定、完全告知、BIG312枚/MB104枚、設定1/6のBIG/MB/合算レンジ
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/41/h.php
    title: 爺サマー ボーナス抽選確率 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/MB/合算確率、設定別シミュレートPAYOUT
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/41/i.php
    title: 爺サマー 同時成立期待度 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS
    usedFor: リプレイ同時成立構造の照合
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/41/k.php
    title: 爺サマー 単独ボーナス抽選 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS
    usedFor: 単独ボーナス合成確率と同時/単独構成の照合
  - url: https://pachimaga.com/free/special/92f47d856bd09b78e06942216886cc2ee130a79a.php
    title: 名機 the ORIGIN 初代爺サマー / パチマガスロマガFREE
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 2008年7月ホールデビュー、完全告知ノーマル、ボーナス8割以上がリプレイ同時成立の回顧確認

researchNotes:
  - 初代2008年機のみを対象とし、検索で大量混入する2010年ギラギラ爺サマー/2022年超ギラギラ爺サマーのAT・天井・リセット情報は一切流用していない。
  - グリーンべるとの2008-07-02一次記事は「納品は7月下旬よりスタート予定」。後年回顧も2008年7月ホールデビューで一致するため7月下旬まで確定するが、具体日は推測しない。
  - 旧攻略で全設定BIG/MB/合算およびシミュレートPAYOUTを回収し、一次業界記事の設定1/6端点と一致を確認。
  - resetBehaviorは初代名/型式名/メーカー名に設定変更・リセット・朝一・据え置き・電源OFF ON・天井・モード・ガックンを組み合わせて再探索したうえで欠損判定した。
