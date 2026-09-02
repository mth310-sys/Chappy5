# ラブゲッCHU

machineName: ラブゲッCHU
manufacturer: 岡崎産業
releaseDate: 2009-02-22
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_SCHEDULED_DATE
releaseDateNote: グリーンべるとが2009-02-22から納品開始予定と明記。後年回顧資料には2009-02-23発売表記もあり、物流開始/発売・導入定義差として保持する。
generation: 5号機
systemType: ボーナス+CZ+完走型RT / 周期CZ
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 96.62%
  setting2: 98.27%
  setting3: 101.59%
  setting4: 105.55%
  setting5: 109.73%
  setting6: 114.14%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: パチマガスロマガの独自入手値。P-WORLD丸め値96.6/98.3/101.6/105.6/109.7/114.1%と一致。

initialHitBySetting:
  BIG:
    setting1: 1/851.1
    setting2: 1/851.1
    setting3: 1/799.2
    setting4: 1/712.3
    setting5: 1/648.9
    setting6: 1/590.4
  MID:
    setting1: 1/873.8
    setting2: 1/799.2
    setting3: 1/736.4
    setting4: 1/720.2
    setting5: 1/697.2
    setting6: 1/642.5
  REG:
    setting1: 1/601.2
    setting2: 1/550.7
    setting3: 1/452.6
    setting4: 1/425.6
    setting5: 1/378.8
    setting6: 1/358.1
  bonusCombined:
    setting1: 1/251.1
    setting2: 1/235.7
    setting3: 1/207.4
    setting4: 1/194.5
    setting5: 1/178.1
    setting6: 1/165.5
  status: ANALYSIS_HIGH_CROSSCHECKED

baseGamesPer50:
  setting1: 38.46G/50枚
  setting2: 38.70G/50枚
  setting3: 38.96G/50枚
  setting4: 39.21G/50枚
  setting5: 39.48G/50枚
  setting6: 39.74G/50枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガの1000円あたりゲーム数。グリーンべるとの約39Gとも整合。

netIncrease:
  sisterSistersLiveRT: 約+0.6枚/G
  oneSet: 30G完走型（単純純増目安約18枚/セット）
  status: INDUSTRY_AND_DATABASE_CROSSCHECKED

basicPayout:
  BIG: グリーンべると約273枚 / パチマガスロマガ技術介入込み約312枚（346枚超払い出し終了）
  MID: グリーンべると約185枚 / パチマガスロマガ技術介入込み約221枚（241枚超払い出し終了）
  REG: 約117枚（121枚超払い出し終了）
  note: BIG/MIDは一般紹介の平均純増と攻略手順を含む獲得値で定義差があるため混ぜない。

modeSpecificMinimumData:
  - CZ「LOVE CHANCE」は全ボーナス終了後、RT終了後、通常150G消化後、設定変更後に突入。
  - CZ中にベル入賞で30G完走型RT「Sister×sisterS LIVE（シスシスライブ）」へ。純増約+0.6枚/G。
  - RT終了後、ボーナス非成立なら再びCZへ移行してループを狙う。
  - ボーナス中の押し順当て成功でCZパンク役回避ナビを1〜50回分ストックする仕組みが公表されている。
  - 150Gは通常時の周期CZ到達点であり、出玉AT/RT直撃を保証する一般的な「天井」とは区別して保持する。

resetBehavior:
  settingChangeBehavior: CONFIRMED_CZ_START。P-WORLDが設定変更後は内部的にチャンスゾーンからスタートと明記。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の150G周期カウンタ、ナビストック、CZ/RT状態の本機固有引継ぎを直接示す資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ON時の周期カウンタ、ナビストック、CZ/RT状態の直接資料を確定できず。
  gameCounterReset: SETTING_CHANGE_CZ_START_CONFIRMED_COUNTER_DETAIL_UNVERIFIED。設定変更直後CZ開始は確認したが、150G周期カウンタが内部的に0へ初期化されるかを明記する資料は未確定。
  ceilingAfterReset: NOT_APPLICABLE_AS_CONVENTIONAL_CEILING / 150G_PERIODIC_CZ_EXISTS。リセット専用短縮天井の公開数値は確認できず。
  modeAfterReset: INTERNAL_CZ_START_CONFIRMED。その他のモード再抽選/引継ぎは該当情報未確定。
  stateAfterReset: INTERNAL_CHANCE_ZONE_START_CONFIRMED。RT状態・ナビストック処理は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: INTERNAL_CZ_START_CONFIRMED。設定変更後に即CZ状態から始まる点が主要朝一恩恵。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ、150G挙動などによる本機固有の変更判別資料を確定できず。
  numericResetData:
    normalPeriodicCZ: 150G通常消化後
    resetSpecificCeiling: NONE_CONFIRMED
    resetModeDistribution: CZ_START_CONFIRMED_NO_PERCENTAGE
    morningHitRate: NONE_PUBLISHED_CONFIRMED
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_CONFIRMED_CZ_START_OTHER_CARRYOVER_POWER_CYCLE_UNVERIFIED

conflicts:
  - bonusCombinedContemporaryArticle: グリーンべると本文は「1/165（設定1）〜1/251（設定6）」と記載するが、P-WORLDとパチマガスロマガは設定1=1/251.1→設定6=1/165.5で一致。一次記事側の設定ラベル逆転/誤記疑いとしてCONFLICT保持し、DB数値は複数一致系列を採用。
  - bonusPayoutDefinition: グリーンべると/パチンコビスタはBIG約273枚・MID約185枚・REG約117枚。パチマガスロマガは枚数調整を前提にBIG約312枚・MID約221枚・REG約117枚。一般平均純増と攻略獲得値の定義差として保持。
  - releaseDateDefinition: グリーンべると=2/22納品開始予定 / 後年回顧=2/23発売。定義差として平均化しない。

missingFields:
  - 据え置き時の150G周期カウンタ/ナビストック/CZ・RT状態の直接資料
  - 単純電源OFF→ON時の周期カウンタ/ナビストック/CZ・RT状態の直接資料
  - 設定変更時の150G周期カウンタ内部初期化規則
  - ガックン/初期出目/ランプ等による設定変更判別の本機固有情報

sources:
  - url: https://web-greenbelt.jp/00006539/
    title: 岡崎産業が萌え系パチスロ『ラブゲッCHU』発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 岡崎産業、CZ/RT構造、RT30G・約+0.6枚/G、ボーナス一般獲得枚数、約39G/1000円、設定6出玉率114.14%、2009-02-22納品開始予定。合算設定ラベルは他資料と逆転するため競合扱い。
  - url: https://www.p-world.co.jp/machine/database/5463
    title: ラブゲッCHU / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 設定別BIG/MID/BG・合算・機械割、30G RT約+0.6枚/G、通常150G後CZ、設定変更後内部CZスタート。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/58/h.php
    title: ラブゲッCHU ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/MID/REG・合算、PAYOUT 96.62〜114.14%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/58/c.php
    title: ラブゲッCHU 通常時小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別50枚ベース38.46〜39.74G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/58/a.php
    title: ラブゲッCHU 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 完走型RT、規定払い出し枚数、攻略時純増目安BIG約312枚/MID約221枚/REG約117枚。
  - url: https://www.pachinkovista.com/pfactory/model.php?dsp=4&nid=17330
    title: ラブゲッCHU ミラクル声優白書 / パチンコビスタ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE
    usedFor: BIG約273枚、MID約185枚、REG約117枚、150G周期CZ、30G RT約+0.6枚/Gの補助照合。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ 更新情報7
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SINGLE
    usedFor: 2009-02-23発売表記、RT30G・約0.6枚/G、設定6約114.1%の補助照合。

researchNotes:
  - LATEST_HANDOFF正本344件地点（2009-02-22 宇宙刑事ギャバン）から継続。
  - GitHub既存検索でラブゲッCHU未収録を確認して345件目として追加。
  - resetBehaviorは「設定変更/リセット/朝一/据え置き/電源/ガックン/150G/天井」等へ検索語を変更し、業界一次・P-WORLD・当時解析・古い攻略DB/回顧資料を横断。設定変更後CZ開始以外の据え置き/電断/判別細部は直接根拠未確定のためUNVERIFIED_AFTER_RESEARCHとした。
