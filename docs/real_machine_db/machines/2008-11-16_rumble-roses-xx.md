# ランブルローズXX

machineName: ランブルローズXX
manufacturer: KPE
releaseDate: 2008-11-16
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_DATE
modelName: ランブルローズXX
modelNumber: ランブルローズXXJF
modelNumberStatus: MULTI_SOURCE_RETROSPECTIVE_AND_CONTEMPORARY_APPROVAL_REFERENCE
generation: 5号機
systemType: ボーナス + RT/CZ + ループ型ART「ランブルタイム」 / パンク回避型ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 97.8%
  setting2: 99.2%
  setting3: 102.7%
  setting4: 106.3%
  setting5: 109.4%
  setting6: 119.0%
  status: MULTI_SOURCE_MATCH
  note: P-WORLD、2008年更新5号機wiki、当時新台記事で一致。

initialHitBySetting:
  BIGCombined:
    setting1: 1/383.25
    setting2: 1/374.49
    setting3: 1/352.34
    setting4: 1/334.37
    setting5: 1/318.14
    setting6: 1/286.18
  REG:
    setting1: 1/524.29
    setting2: 1/516.03
    setting3: 1/500.27
    setting4: 1/478.36
    setting5: 1/471.48
    setting6: 1/445.82
  bonusCombined:
    setting1: 1/221.41
    setting2: 1/217.01
    setting3: 1/206.74
    setting4: 1/196.80
    setting5: 1/189.96
    setting6: 1/174.30
  status: MULTI_SOURCE_MATCH
  note: 赤BIG/青BIG個別値もP-WORLD・パチマガスロマガ・当時wikiで概ね一致。物差し用にはBIG合成/REG/総合算を主保存。

baseGamesPer50:
  setting1: 38.26G/50枚
  setting2: 38.29G/50枚
  setting3: 38.50G/50枚
  setting4: 38.76G/50枚
  setting5: 38.98G/50枚
  setting6: 39.11G/50枚
  status: MULTI_SOURCE_MATCH
  note: パチマガスロマガと2008年更新5号機wikiで丸め範囲一致。

basicPayout:
  BIG: 約203枚
  REG: 約96枚
  regulatedBIGEnd: 280枚を超える払い出しで終了
  regulatedREGEnd: 110枚を超える払い出しで終了
  status: MULTI_SOURCE_MATCH

netIncrease:
  rumbleTimeART:
    sourceIndustryAndPWorld: 約+0.5枚/G
    sourceContemporaryWiki: 約+0.3枚/G
    status: CONFLICT
    note: 2008-09-29グリーンべるととP-WORLDは約+0.5枚/G、2008-11-20更新5号機wikiは約+0.3枚/G。平均せず両値保持。

modeSpecificMinimumData:
  rumbleTime: 50G/1セット。継続率55% / 70% / 80% / 90%。ボーナス中のバトル勝利等で突入し、ART中の継続率昇格抽選あり。
  lockerRoomRT: ボーナス後またはART継続バトル敗北後に移行。規定ゲーム消化やチェリー自力回避等でART昇格の可能性。
  rumbleChance: 通常時10G固定のART超高確率ステージ。滞在中ボーナスでART突入＋90%ループ確定とP-WORLD記載。
  ceiling: ボーナス間777Gで天井状態へ移行。リプレイ確率自体は上がらず、以降の次回ボーナス成立後ART突入確定。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/KPEと「設定変更・リセット・朝一・777G天井・天井消化・ART・RT」を組み替え、パチマガスロマガの「攻め時・ヤメ時・設定変更時」項目、P-WORLD、当時wiki、旧攻略/回顧資料を再探索したが、設定変更時の777Gカウンタ初期化/引継ぎやART/RT状態処理を直接説明する本文を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の777Gボーナス間カウンタ、ロッカールームRT、ART継続状態の翌日処理を本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ON時の天井カウンタ、RT/ART状態、初期出目/液晶状態の処理を直接確認できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時のボーナス間777G天井自体はCONFIRMEDだが、設定変更でゼロ初期化されるかは未確定。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井・朝一固定天井G数は確認できず。ただし通常777G天井の変更時カウンタ処理が未確定のため「変更後も777Gから新規計数」とは推測しない。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用モード/朝一専用ART優遇モードの公開情報を確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。ロッカールームRT、ランブルタイム、ランブルチャンス等の変更/電断時状態処理は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。朝一設定変更専用のART当選率上昇、短縮天井、専用CZ等の公開恩恵数値は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時固有の公開不利要素は確認できず。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「ガックン・初期出目・設定変更判別・据え置き・朝一」を追加して再探索したが、本機固有の確定判別法を回収できず。
  numericResetData:
    normalCeilingGameCount: 777Gボーナス間で天井状態
    resetSpecificNumericData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_ART_NET_CONFLICT
resetBehaviorQA: RESET_FIELDS_RESEARCHED_NORMAL_777G_CEILING_CONFIRMED_DEVICE_SPECIFIC_CHANGE_CARRYOVER_POWER_CYCLE_UNVERIFIED

conflicts:
  - field: netIncrease.rumbleTimeART
    sourceA: グリーンべると / P-WORLD 約+0.5枚/G
    sourceB: 2008年更新5号機wiki 約+0.3枚/G
    handling: CONFLICT_NO_AVERAGING

missingFields:
  - 設定変更時の777G天井カウンタ初期化/引継ぎ
  - 据え置き時の天井/RT/ART状態翌日処理
  - 電源OFF→ONのみでの天井/RT/ART状態処理
  - ガックン/初期出目等による本機固有の設定変更判別

sources:
  - url: https://web-greenbelt.jp/00003794/
    title: KPE、最高90％ループのART搭載機を発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 2008-11-16納品開始予定、KPE、50G ART、約+0.5枚/G、継続率55/70/80/90%。
  - url: https://www.p-world.co.jp/machine/database/5345
    title: ランブルローズXX / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: BIG/REG/合算、機械割97.8〜119.0%、BIG約203枚、REG約96枚、50G ART約+0.5枚/G、777G仮天井、ランブルチャンス。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/11/c.php
    title: ランブルローズXX 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 38.26〜39.11G/50枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/11/h.php
    title: ランブルローズXX ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: BIG合成/REG/合算の第二照合。
  - url: https://w.atwiki.jp/5gouki/pages/128.html
    title: ランブルローズXX / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_COMMUNITY_DATABASE
    usedFor: 機械割、ボーナス確率、ベース、777G天井の照合、ART純増約+0.3枚/Gという競合値。
  - url: https://www.nakaiti.com/html/sKpe054.html
    title: KPE ランブルローズXX 中古実機情報
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_MACHINE_DATABASE
    usedFor: 型式名ランブルローズXXJF、BIG約203枚、REG約96枚、50G ART、777G天井の補助照合。
  - url: https://pachinko.hatenablog.jp/entry/2008/11/rumbleRoses-XX
    title: KPE「パチスロ ランブルローズXX」の筺体＆スペック＆情報
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 型式ランブルローズXX JF、各ボーナス確率の補助照合。
