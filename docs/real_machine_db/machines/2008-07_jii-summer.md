# 爺サマー

machineName: 爺サマー
manufacturer: 大都技研
releaseDate: 2008-07-28
releaseDatePrecision: DAY_RELEASE_CONFIRMED_BY_CONTEMPORARY_INDUSTRY_ARCHIVE
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
  retrospectiveSeriesA:
    setting1: 95.84%
    setting2: 98.00%
    setting3: 100.06%
    setting4: 102.44%
    setting5: 105.69%
    setting6: 112.14%
  retrospectiveRounded:
    setting1: 97.0%
    setting2: 99.0%
    setting3: 101.0%
    setting4: 103.0%
    setting5: 106.0%
    setting6: 112.0%
  confidence: CONFLICT
  note: 当時攻略シミュレート値と後年資料系列に差がある。平均せず全系列保持。
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
  note: グリーンべるとで設定1/6レンジ、パチマガスロマガ旧攻略等で全設定数列を確認。
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

coreStatus: PARTIAL_WITH_PAYOUT_CONFLICT
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts:
  - field: payoutRateBySetting
    status: CONFLICT_PAYOUT_METHOD_OR_SOURCE
    sourceA: パチマガスロマガ旧攻略シミュレート 96.66/98.57/100.52/102.70/105.82/111.99%
    sourceB: 後年資料 95.84/98.00/100.06/102.44/105.69/112.14%
    sourceC: 後年回顧整数丸め 97/99/101/103/106/112%
    handling: 平均せず全系列保持。

missingFields:
  - 50枚あたりゲーム数/1000円ベース
  - 設定変更/据え置き/電源OFF→ONの本機固有処理
  - 本機固有の設定変更判別（ガックン/初期出目等）

sources:
  - url: https://web-greenbelt.jp/00003743/
    title: この夏は完全告知の『爺サマー』がアツイ！ / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 型式ジイサマー7、2008年7月下旬納品開始予定、完全告知、BIG312枚/MB104枚、設定1/6のBIG/MB/合算レンジ
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_INDUSTRY_ARCHIVE
    usedFor: 爺夏（ジイサマー）7の2008-07-28発売確定記録
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/41/h.php
    title: 爺サマー ボーナス抽選確率 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/MB/合算確率、設定別シミュレートPAYOUT
  - url: https://pachinko.hatenablog.jp/entry/2008/07/G-summer
    title: 大都技研「爺サマー」の筺体＆スペック＆情報
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_ANALYSIS_SINGLE
    usedFor: 別系列の設定別出玉率95.84〜112.14%、設定別ボーナス確率照合
  - url: https://pachimaga.com/free/special/92f47d856bd09b78e06942216886cc2ee130a79a.php
    title: 名機 the ORIGIN 初代爺サマー / パチマガスロマガFREE
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 2008年7月ホールデビュー、完全告知ノーマル、ボーナス8割以上がリプレイ同時成立の回顧確認

researchNotes:
  - 初代2008年機のみを対象とし、検索で大量混入する2010年ギラギラ爺サマー/2022年超ギラギラ爺サマーのAT・天井・リセット情報は一切流用していない。
  - 既存レコードは当初7月下旬までの精度だったが、当時業界アーカイブに2008-07-28発売確定記録を追加確認したため日精度へ更新。
  - 旧攻略で全設定BIG/MB/合算およびシミュレートPAYOUTを回収し、一次業界記事の設定1/6端点と一致を確認。
  - payoutは資料系列差を平均せずCONFLICTとして保持。
  - resetBehaviorは初代名/型式名/メーカー名に設定変更・リセット・朝一・据え置き・電源OFF ON・天井・モード・ガックンを組み合わせて再探索したうえで欠損判定した。
