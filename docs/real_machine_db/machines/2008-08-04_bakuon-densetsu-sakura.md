# 爆音伝説サクラ

machineName: 爆音伝説サクラ
manufacturer: KPE
releaseDate: 2008-08-04
releaseDatePrecision: DAY_DELIVERY_START_CONFIRMED_BY_CONTEMPORARY_INDUSTRY_AND_ANALYSIS
modelName: 爆音伝説サクラJG
generation: 5号機
systemType: ボーナス+ループ型RT。ボーナス後/RT後/通常550G周期/設定変更後のCZから30Gまたは100G RTへ移行。
payoutRateBySetting:
  setting1: 97.6%〜98.3%
  setting2: 98.7%〜99.6%
  setting3: 102.1%〜103.5%
  setting4: 103.5%〜105.2%
  setting5: 105.1%〜108.5%
  setting6: 108.1%〜111.6%
  status: ANALYSIS_RANGE_CROSSCHECKED
  note: パチ＆スロ必勝本は各設定をレンジ掲載。CrankySevenは各レンジ下端、5号機クロニクルは概ね上端（98.3/99.6/103.5/105.2/108.5/111.6%）を掲載。通常条件/攻略条件等の定義差が現存本文で完全に回収できないため、単一値へ統合せずレンジ保持。
initialHitBySetting:
  BIG:
    setting1: CONFLICT 1/596 vs 1/575
    setting2: 1/546
    setting3: 1/524
    setting4: 1/504
    setting5: CONFLICT 1/468 vs 1/485
    setting6: 1/452
  MIDDLE:
    setting1: 1/1170
    setting2: 1/1130
    setting3: 1/1057
    setting4: 1/1008
    setting5: 1/936
    setting6: 1/874
  REG:
    setting1: 1/1192
    setting2: CONFLICT 1/1150 vs 1/1130
    setting3: 1/1057
    setting4: CONFLICT 1/1024 vs 1/1008
    setting5: CONFLICT 1/950 vs 1/936
    setting6: 1/886
  bonusCombined:
    setting1: CONFLICT 1/297 vs 1/291
    setting2: 1/279 vs 1/278（丸め差候補だが統合しない）
    setting3: 1/264 vs 1/263（丸め差候補だが統合しない）
    setting4: 1/253 vs 1/252（丸め差候補だが統合しない）
    setting5: CONFLICT 1/235 vs 1/238
    setting6: 1/223
  status: CONFLICT_PARTIAL_CROSSCHECKED
baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 「爆音伝説サクラ/爆音伝説サクラJG/KPE」×「50枚/1000円/ベース/コイン持ち/回転数」を切り替え、当時解析・旧DB・実機販売・回顧資料を横断したが比較可能な50枚ベースを確定できず。
netIncrease:
  RT30: 約+1.0枚/G
  RT100: 約+1.0枚/G
  conflictNote: 2007年発表段階の業界記事は約+0.8枚/G、2008年新基準対応版発表・当時解析は約+1.0枚/G。発売版は2008年仕様を主値とし、旧仕様値は別仕様履歴として保持。
basicPayout:
  BIG: 約320枚（449枚超払い出しで終了）
  MIDDLE: 約220枚（309枚超払い出しで終了）
  REG: 約49枚（69枚超払い出しで終了）
modeSpecificMinimumData:
  chanceZone:
    triggers:
      - ボーナス終了後
      - RT終了後
      - 通常時550G消化
      - 設定変更後
    termination:
      normalReplay: 通常へ
      bell: 30G RTへ
      specialReplay: 100G RTへ
    rtEntryExpectation:
      BIG後: 約80%
      MID後: 53%（別資料では約60%）
      REG後: 20.2%
      RT後: 51%
      550G周期: 51%
      設定変更後: CONFLICT/UNRESOLVED（必勝本は「調査中」、別解析は約50%と記載）
  ceiling:
    type: 天井CZ
    games: 通常状態550G消化でCZ突入
  RT:
    short: 30G
    long: 100G
    end: ボーナス成立または規定ゲーム数消化

resetBehavior:
  settingChangeBehavior: CONFIRMED。設定変更後は内部CZへ突入。パチ＆スロ必勝本と別解析で一致。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の550G周期カウンタ/CZ状態の前日跨ぎ処理を本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみで550G周期カウンタ/CZ状態を維持するかを本機固有資料で確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。設定変更後CZ突入は確定するが、内部550G周期カウンタがどの時点で0扱いになるかを直接説明する資料を確認できないため推測しない。
  ceilingAfterReset: SETTING_CHANGE_BYPASSES_550G_WAIT_TO_CZ_CONFIRMED。通常時は550GでCZだが、設定変更後は即内部CZ。数値上の「短縮天井550→0G」と断定せず、挙動として別記。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常モードテーブル/朝一専用モードの公開情報は確認されず。
  stateAfterReset: INTERNAL_CZ_CONFIRMED。設定変更後は内部CZ状態。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: 設定変更直後からRT突入契機となる内部CZへ入る点は朝一恩恵として確認。RT突入期待度の確定数値は資料競合/未解決。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示、ランプ等で本機固有の設定変更/据え置き判別を確定できず。
  numericResetData:
    settingChangeCZ: 即突入（CONFIRMED）
    settingChangeRTEntryExpectation: CONFLICT_UNRESOLVED（約50%とする解析あり／当時必勝本は調査中）
    normalCeilingCZ: 550G

coreStatus: PARTIAL_CORE_AFTER_RESEARCH
resetBehaviorQA: SUBSTANTIAL_CONFIRMED_WITH_CARRYOVER_POWER_CYCLE_UNVERIFIED

conflicts:
  - id: CONFLICT_BONUS_PROBABILITIES
    detail: パチ＆スロ必勝本とCrankySevenでBIG設定1・5、REG設定2・4・5、合算の一部に差異。平均せず双方保持。
  - id: PAYOUT_RATE_RANGE_DEFINITION_UNRESOLVED
    detail: 必勝本は各設定をレンジ掲載。CrankySevenは下端、5号機クロニクルは概ね上端を掲載するが、現存本文で通常条件/攻略条件等の定義を完全回収できずレンジ保持。
  - id: CONFLICT_PRE_RELEASE_VS_RELEASE_RT_NET
    detail: 2007年旧発表仕様はRT約+0.8枚/G、2008年新基準対応発売版は約+1.0枚/G。発売版を主値とし旧仕様値を履歴分離。
  - id: CONFLICT_RESET_RT_ENTRY_EXPECTATION
    detail: 設定変更後CZからのRT期待度についてCrankySevenは約50%と記載する一方、パチ＆スロ必勝本は設定変更後を「調査中」とする。確定数値として採用しない。

missingFields:
  - 50枚あたりゲーム数/ベース
  - 据え置き時の550G周期カウンタ/CZ状態の前日跨ぎ処理
  - 電源OFF→ONのみの周期カウンタ/CZ状態処理
  - 設定変更後CZのRT突入期待度の確定値
  - 本機固有のガックン/初期出目/表示等による変更判別

sources:
  - url: https://www.konami.com/amusement/psm/archive/ps/2008/sakura/
    title: コナミアミューズメント 機種アーカイブ 2008年 爆音伝説サクラ
    retrievedAt: 2026-09-01
    confidence: OFFICIAL
    usedFor: 稼働開始2008年8月、5号機RT機の公式確認。
  - url: https://news.p-world.co.jp/articles/2880/greenbelt
    title: KPEが新基準対応第1弾機を発表 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_INDUSTRY_HIGH
    usedFor: 2008年6月発表、8月4日納品予定、発売版RT約+1枚/G、30G/100G、BIG約320枚、550G天井CZ。
  - url: https://news.p-world.co.jp/articles/2537/greenbelt
    title: KPEが新機種『爆音伝説サクラ』を発表 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_INDUSTRY_HIGH
    usedFor: 2007年旧仕様のRT約+0.8枚/G、BIG/MID/REG約320/220/49枚、550G救済CZ。発売版との差を仕様履歴として分離。
  - url: https://p.hisshobon.jp/machine/1038/1/17844
    title: パチ＆スロ必勝本 基本スペック 爆音伝説サクラ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 8/4導入予定、設定別BIG/MID/REG/合算、設定別機械割レンジ、CZ/RT概要。
  - url: https://p.hisshobon.jp/machine/1038/1/17848
    title: パチ＆スロ必勝本 設定変更&天井情報 爆音伝説サクラ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定変更後は内部CZ、通常550Gで天井CZ。
  - url: https://p.hisshobon.jp/machine/1038/1/17849
    title: パチ＆スロ必勝本 CZ&RT詳細 爆音伝説サクラ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: CZ契機/終了条件、BIG後80%・MID後53%・REG後20.2%・RT後51%・周期51%、RT約+1枚/G、設定変更後期待度は調査中。
  - url: https://crankyseven.com/bakuonsakura-pc.htm
    title: 爆音伝説サクラ 解析攻略・設定判別・天井
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 別系列の設定別確率/機械割、基本獲得、CZ、設定変更後CZ、設定変更後から約50%RTという記載。競合検出用。
  - url: https://5goki.com/kpe
    title: KPE 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年8月、機械割98.3〜111.6%系列の照合。
  - url: https://www.nakaiti.com/html/sKpe052.html
    title: KPE 爆音伝説サクラ 中古実機 / 中一商事
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_MACHINE_DATABASE
    usedFor: 型式名 爆音伝説サクラJG、BIG/MID/REG約320/220/49枚、RT構造の補助照合。
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_INDUSTRY_ARCHIVE
    usedFor: 2008-08-04発売痕跡、新基準対応版としての再登場履歴。

researchNotes:
  - 最新main README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前284「海人G-30」レコードを再読し、その次の未処理として処理。
  - 2007年1月予定だった旧仕様がゴト対策等で一度お蔵入りし、2008年に新基準対応版として発売された履歴があるため、旧仕様のRT純増0.8枚/Gと発売版約1.0枚/Gを混在させない。
  - 「爆音伝説サクラ」「爆音伝説サクラJG」「KPE」を軸に、機械割/BIG/REG/MID/50枚/1000円/ベース/コイン持ち/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/天井/CZを組み替えて公式・業界・当時解析・旧DB・実機資料・回顧資料を横断。
