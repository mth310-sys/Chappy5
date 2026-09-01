# メガラニカ

machineName: メガラニカ
manufacturer: ウィンネットテクノロジー / ラスター
releaseDate: 2008-08
releaseDatePrecision: MONTH_ONLY_AFTER_RESEARCH
modelName: メガラニカ
generation: 5号機
systemType: ノーマル / BIG+REG+3種MB（MEGAゲーム）
payoutRateBySetting:
  setting1: CONFLICT 97.92% vs 98.1%
  setting2: 99.19% vs 99.1%（丸め差候補だが統合しない）
  setting3: CONFLICT 100.99% vs 100.0%
  setting4: 103.14% vs 103.1%（丸め差候補だが統合しない）
  setting5: 105.80% vs 105.5%（差を保持）
  setting6: 109.84% vs 109.5%（差を保持）
  status: CONFLICT_CROSSCHECKED
  note: パチマガスロマガのシミュレート値と後年5号機整理資料で差異。平均せず双方保持。
initialHitBySetting:
  BIG:
    setting1: 1/297.9
    setting2: 1/295.2
    setting3: 1/292.6
    setting4: 1/287.4
    setting5: 1/277.7
    setting6: 1/264.3
  REG:
    setting1: 1/3276.8
    setting2: 1/3276.8
    setting3: 1/3276.8
    setting4: 1/3276.8
    setting5: 1/3276.8
    setting6: 1/3276.8
  MEGA_GAME_MB_TOTAL:
    setting1: 1/468.1
    setting2: 1/455.1
    setting3: 1/420.1
    setting4: 1/390.1
    setting5: 1/381.0
    setting6: 1/364.1
  bonusCombined:
    setting1: 1/172.5
    setting2: 1/169.8
    setting3: 1/163.8
    setting4: 1/157.5
    setting5: 1/153.1
    setting6: 1/146.3
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: パチマガスロマガ値と別整理資料が一致。
baseGamesPer50:
  setting1: 33.23G/50枚
  setting2: 33.64G/50枚
  setting3: 34.08G/50枚
  setting4: 34.55G/50枚
  setting5: 35.31G/50枚
  setting6: 36.45G/50枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガ掲載の1000円あたりゲーム数。20円スロット50枚=1000円として整理。
netIncrease:
  status: NOT_APPLICABLE
  note: RT/ART/AT等の付加機能なし。ボーナス純増はbasicPayoutに記録。
basicPayout:
  BIG: 約336枚（345枚超払い出しで終了）
  REG: 約100枚（117枚超払い出しで終了）
  MEGA_GAME_MB1: 約200枚（247枚超払い出しで終了）
  MEGA_GAME_MB2: 約150枚（182枚超払い出しで終了）
  MEGA_GAME_MB3: 約100枚（117枚超払い出しで終了）
modeSpecificMinimumData:
  MEGA_GAME:
    role: 一見通常ゲームのように見える出目から突如始まるように見せる3種類のMB。純増目安は約200/150/100枚。
  additionalFunctions:
    RT: NONE_CONFIRMED
    ART: NONE_CONFIRMED
    AT: NONE_CONFIRMED
  ceiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 旧攻略ページは「攻め時・ヤメ時→特にナシ」。通常ゲーム数天井を示す資料は確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/メーカー名と「設定変更/リセット/朝一/据え置き」を組み替え、当時解析・旧DB・回顧資料を横断したが、本機固有の設定変更時挙動を直接説明する本文を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の本機固有挙動を直接説明する資料を確定できず。通常ゲーム数天井やRT/ART/ATの持続状態は確認されていない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の本機固有挙動を直接説明する資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_FOR_CONFIRMED_CEILING。通常ゲーム数天井は確認されず、天井用ゲーム数カウンタは非該当扱い。
  ceilingAfterReset: NOT_APPLICABLE。通常ゲーム数天井・リセット短縮天井は確認されず。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。通常時モード/朝一専用モードの公開情報は確認できず。
  stateAfterReset: NONE_CONFIRMED_FOR_PERSISTENT_RT_ART_AT_STATE。RT/ART/AT等の持続状態なし。その他の本機固有内部状態リセット規則は公開資料で確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶表示等による本機固有の設定変更/据え置き判別を確定できず。
  numericResetData:
    normalCeiling: NONE_CONFIRMED
    resetCeilingShortening: NOT_APPLICABLE
    morningSpecificNumericBenefit: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT
resetBehaviorQA: RESEARCHED_NO_MACHINE_SPECIFIC_RESET_RULE_RECOVERED

conflicts:
  - id: CONFLICT_PAYOUT_RATE
    detail: パチマガスロマガは97.92/99.19/100.99/103.14/105.80/109.84%。別5号機整理資料は98.1/99.1/100.0/103.1/105.5/109.5%。平均せず保持。

missingFields:
  - 2008年8月内の具体的な納品開始日/ホール導入日
  - 設定変更時の本機固有挙動
  - 据え置き時の本機固有挙動
  - 電源OFF→ONのみの本機固有挙動
  - 本機固有の変更判別挙動

sources:
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/06/h.php
    title: メガラニカ ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/MB（MEGAゲーム）/ボーナス合算、シミュレートPAYOUT。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/06/a.php
    title: メガラニカ 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ノーマルタイプ、BIG/REG/3種MBの払い出し終了条件と純増目安、MEGAゲームの基本構造。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/06/c.php
    title: メガラニカ 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定1〜6の1000円あたり33.23〜36.45G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/06/winnet_slot_06.php
    title: メガラニカ 攻略トップ / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 基本システム導線、攻め時・ヤメ時「特にナシ」の確認補助。
  - url: https://pachinko.hatenablog.jp/entry/2008/08/megallanica
    title: ウィンネットテクノロジー（ラスター）「メガラニカ」の筺体＆スペック＆情報
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年8月リリース、ノーマルタイプ、設定別BIG/REG/MEGAゲーム/合算の照合、別PAYOUT系列。
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_INDUSTRY_ARCHIVE
    usedFor: 当時時点でウィンネットテクノロジー/ラスターの次機種、純Aタイプとの記録。
  - url: https://q-and-a.hatenablog.com/entry/2016/10/05/134740
    title: ラスターの検定通過機種を教えて
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_APPROVAL_LIST
    usedFor: メガラニカ検定通過2008-06-19、後発メガラニカDX検定2008-08-18の別型式確認。DX混同防止。

researchNotes:
  - 最新main README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前286犬キングを読んでから継続。
  - LATEST_HANDOFFの候補値をそのまま採用せず、パチマガスロマガで設定別確率・ベース・獲得枚数を再確認。
  - 「メガラニカDX」は2008-08-18検定の後発別型式痕跡があるため、本レコードへ混在させていない。
  - 具体導入日は「2008-08-04/08-11/納品/発売/導入」等へ検索語を変えたが、月内の日付を直接裏付ける高信頼資料を確定できなかったため2008-08の月精度で保存。
  - resetBehaviorは「メガラニカ/ウィンネットテクノロジー/ラスター」×「設定変更/リセット/朝一/据え置き/電源/天井/ガックン」を組み替えて再探索し、十分な直接根拠を得られない項目のみUNVERIFIED_AFTER_RESEARCHとした。
