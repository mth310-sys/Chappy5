# エアマスター

machineName: エアマスター
manufacturer: IGTジャパン
releaseDate: 2009-02-15
releaseDatePrecision: CONTEMPORARY_INDUSTRY_EARLIEST_DELIVERY_SCHEDULED_DATE
generation: 5号機
systemType: ボーナス非搭載 / AT+RT+ART / ARTメイン
settings: 1 / 3 / 5 / F

payoutRateBySetting:
  setting1: 97.6%
  setting3: 100.7%
  setting5: 105.3%
  settingF: 110.1%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、5号機クロニクル、回顧スペック資料で一致。

initialHitBySetting:
  ART:
    setting1: 1/379
    setting3: 1/351
    setting5: 1/293
    settingF: 1/249
  status: ANALYSIS_SINGLE_WITH_SYSTEM_CROSSCHECK
  note: ART初当たり精密値は回顧スペック資料から取得。機械構造・設定構成・純増は複数資料で照合したが、同じ初当たり4値を示す別系統本文は今回確定できず、信頼度を過剰に上げない。

baseGamesPer50:
  setting1: 45.03G/50枚
  setting3: 44.96G/50枚
  setting5: 45.00G/50枚
  settingF: 45.01G/50枚
  status: ANALYSIS_SINGLE
  note: K-Naviの1000円あたりゲーム数。ほぼ全設定共通約45G/50枚。

netIncrease:
  battleRoyalRT: 約+0.6枚/G
  superBattleRoyalART: 約+2.1枚/G
  status: INDUSTRY_AND_DATABASE_CROSSCHECKED

basicPayout:
  bonus: NOT_APPLICABLE（ボーナス非搭載）
  battleRoyal: 30G固定 / 純増約+0.6枚/G（単純純増目安約18枚/セット）
  superBattleRoyal: 30G固定 / 純増約+2.1枚/G（単純純増目安約63枚/セット）
  note: 18枚/63枚は30G×公表純増の比較用算術目安で、メーカー公表の平均獲得枚数ではない。

modeSpecificMinimumData:
  - 5号機でボーナスを一切搭載せず、ARTのみを主出玉契機とする初期の代表例。
  - RT「バトルロワイヤル」は30G固定・純増約0.6枚/G。
  - ART「スーパーバトルロワイヤル」は30G固定・純増約2.1枚/G。
  - SBR継続率は65% / 75% / 85% / 90% / 95%の5段階。
  - BR/SBR中の特殊リプレイ（赤7揃い）成立時はSBR2回分+90%以上ループが確定する公開仕様があるが、物差し用途ではこれ以上の内部抽選詳細は収集しない。
  - 通常時にはHitゾーン/NGゾーン、低確/通常/高確/超高確など状態・ゾーン概念が存在する。NG目停止後は26GのNGゾーンという解析情報があるが、通常ゲーム数天井ではない。
  - 通常ゲーム数到達型の天井/救済ARTは今回確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。`エアマスター / パチスロ エアマスター / IGT / IGTジャパン` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / Hitゾーン / NGゾーン / ガックン` を組み替え、当時業界記事、P-WORLD、パチマガスロマガ解析INDEX/本文、K-Navi、5号機回顧DBまで横断。設定変更時にHit/NGゾーン・低確/通常/高確/超高確・RT/AT/ART状態をどの状態へ初期化するかを直接示す高信頼本文は今回回収できず、一般的5号機挙動から補完しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のHit/NGゾーン残G、内部状態、RT/AT/ART状態の引継ぎを本機固有に説明する直接資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONでHit/NGゾーン残G・内部状態・RT/AT/ART状態がどうなるかを直接示す本機固有資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_FOR_NORMAL_CEILING / ZONE_COUNTER_RESET_UNVERIFIED。通常ゲーム数天井は確認しない。一方、NG目後26Gのゾーン進行が存在するため、その残Gが設定変更/据え置き/電断でどう扱われるかは未確定。
  ceilingAfterReset: NOT_APPLICABLE。通常ゲーム数天井および設定変更専用短縮天井を確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。Hitゾーン内の低確/通常/高確/超高確等の状態・モードが設定変更時に再抽選/固定/引継ぎされるかは直接資料を回収できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT/AT/ARTおよびHit/NG状態の設定変更時処理は未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。リセット専用短縮天井、朝一専用ART/CZ、高確優遇等の公開恩恵は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更固有の朝一不利数値は確認できず。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ、朝一ゲーム数挙動等による本機固有の設定変更判別資料を確定できず。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_PUBLISHED_CONFIRMED
    resetBenefitRate: NONE_PUBLISHED_CONFIRMED

coreStatus: COMPLETE_CORE
resetBehaviorQA: RESEARCHED_WITH_MODE_STATE_AND_POWER_CYCLE_UNVERIFIED

conflicts: []

missingFields:
  - ART初当たり1/379・1/351・1/293・1/249の別系統本文による再照合
  - 設定変更/据え置き/電源OFF→ON時のHit/NGゾーン、内部状態、RT/AT/ART状態の直接資料
  - ガックン/初期出目/ランプ等による設定変更判別の本機固有情報

sources:
  - url: https://web-greenbelt.jp/00002954/
    title: 純増2.1枚のARTループ搭載『エアマスター』登場 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: IGTジャパン、ボーナス非搭載、BR約+0.6枚/G・30G、SBR約+2.1枚/G・30G、65〜95%ループ、特殊リプレイ恩恵、最速2009-02-15納品開始予定。
  - url: https://www.p-world.co.jp/machine/database/5444
    title: エアマスター / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 5号機ART/RT/AT・ボーナス非搭載、SBR30G・約+2.1枚/G、65/75/85/90/95%継続率、設定別機械割。
  - url: https://p-kn.com/slot/909/8150/
    title: 通常時小役確率 | エアマスター / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE
    usedFor: 1000円あたりゲーム数45.03/44.96/45.00/45.01G。
  - url: https://pachinko.hatenablog.jp/entry/2009/02/air-master
    title: IGT Japan「パチスロ エアマスター」の筺体＆スペック＆情報
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE_RETROSPECTIVE
    usedFor: 設定1/3/5/F、機械割97.6/100.7/105.3/110.1%、ART初当たり1/379・1/351・1/293・1/249、約+2.1枚/G。
  - url: https://5goki.com/igt
    title: 『IGTジャパン』5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_RETROSPECTIVE
    usedFor: 2009年2月、設定1/3/5/F、機械割97.6/100.7/105.3/110.1%、チャンスAT確率1/29.9〜1/28.3の照合。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/51/igt_slot_51.php
    title: エアマスター 解析INDEX / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX
    usedFor: Hit/NGゾーン、高確、ART継続率、設定推測、攻め時・ヤメ時・設定変更時の解析項目存在確認。設定変更本文は今回検索結果から直接回収できず推測転記しない。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/51/d.php
    title: エアマスター 打ち方 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: NG目停止後26GのNGゾーン、27G目からHitゾーン、RT/CZ/ART構造。天井ではなくゾーン状態として区別。
  - url: https://w.atwiki.jp/5gouki/pages/146.html
    title: エアマスター / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_RETROSPECTIVE
    usedFor: ボーナス非搭載、SBR純増/継続率、Hit/NGゾーン構造の補助照合。

researchNotes:
  - LATEST_HANDOFF正本342件地点（2009-02-02 スペシャルオアシス）から継続。
  - 2009-02-02同日〜2月前半を具体導入/納品日で境界監査。P-WORLD 2月候補も発表日と実納品日を分離して確認した。
  - ニューギン「バトルアスリーテス大運動会」は2009-01-16当時グリーンべるとで納品2009-03-01予定を確認し、2月前半へ誤挿入しない。
  - オーイズミ「ダッシュ勝平」はパチビーで導入日2009-02-24を確認し、エアマスターより後。
  - 銀座「宇宙刑事ギャバン」は当時グリーンべるとで2009-02-22納品開始予定、メーシー「スーパーリアル麻雀」はパチビー2009-02-24導入でいずれも後。
  - 「Wキャッツ」は2009年2月導入開始までは確認できるが、今回具体日を確定できないため日付を推測して343より前へ置かない。具体日が後続監査で判明した場合は正しい位置へ遡及挿入する。
  - エアマスターは当時グリーンべるとで最速2009-02-15納品開始予定を直接確認したため、具体日キュー上の次機種として追加。
