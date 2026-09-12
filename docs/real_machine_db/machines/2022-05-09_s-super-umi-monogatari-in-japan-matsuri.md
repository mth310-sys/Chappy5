# Sスーパー海物語IN JAPAN祭 — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1495
canonicalKey: 2022-05-09_s-super-umi-monogatari-in-japan-matsuri
machineName: "Sスーパー海物語IN JAPAN祭"
alternateName: "Sスーパー海物語 IN JAPAN祭 / スーパー海物語 IN JAPAN祭 / 海スロJAPAN祭"
manufacturer: "サンスリー（製造） / 三洋物産・三洋販売（ブランド/販売）"
modelCode: "Sスーパー海物語INJAPAN祭PE"
inspectionCode: "1S1823"
releaseDate: 2022-05-09
generation: "6.4号機"
systemType: "擬似ボーナス＋差枚数管理AT"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["L", "1", "2", "4", "5", "6"]
  payoutRatePct:
    "L": 91.36
    "1": 97.59
    "2": 98.97
    "4": 103.92
    "5": 106.88
    "6": 110.25
  initialHitBySetting:
    pseudoBonus:
      "1": "1/253.7"
      "2": "1/237.4"
      "4": "1/193.0"
      "5": "1/171.4"
      "6": "1/151.8"
    atUmiRush:
      "1": "1/620.3"
      "2": "1/590.7"
      "4": "1/510.2"
      "5": "1/468.5"
      "6": "1/426.1"
    sakuraChallenge:
      "1": "1/484.6"
      "2": "1/443.9"
      "4": "1/372.3"
      "5": "1/345.4"
      "6": "1/315.7"
  baseGamesPer50Coins: "約37.7G/50枚"
  netIncrease: "約2.8枚/G（海祭BONUS・海RUSH）"
  basicPayout:
    umiMatsuriBonus: "30G・純増約2.8枚/Gの擬似ボーナス"
    umiRush: "差枚数管理AT。初回BONUS込み平均獲得約600枚（全設定ほぼ同等）"
  normalCeiling:
    bonusCeiling: "110～573Gで抽選＋前兆最大26G。最大599Gで擬似ボーナス。"
    atCeiling: "有利区間開始後のAT間1700～2000G＋前兆最大26GでAT確定のボーナス。"
    carriedSectionShortCeiling: "AT後に有利区間を引き継いだ場合のみBONUS天井299Gへ短縮。設定変更リセット専用短縮ではない。"
  modeSpecificMinimumData: "通常時に低確A/低確B/通常/天国準備/天国/超天国の内部モード。通常時開始時に次回奇数ボーナス抽選があり、有利区間リセット時7.03%、引継ぎ時37.50%。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。BONUS天井・AT間天井とも設定変更でリセット。"
    modeState: "RESELECT。有利区間開始時の通常時状態として再開。詳細な設定変更専用6モード振り分けは公開直接値を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "RESET。"
    morningStart: "お祭りモードの夕方ステージ。液晶ウリンカウンターは『???』表示。内部ウリンカウンターは有利区間移行時200スタート。"
    benefit: "初回ボーナス当選時に約30%でHAPPY魚群が発生しATへ直行。HAPPY魚群込みの設定1初回ボーナスAT期待度は約60%。通常時開始時の初回奇数ボーナス抽選7.03%。"
    disadvantage: "設定変更専用の主要不利数値はNONE_CONFIRMED_AFTER_RESEARCH。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。"
    modeState: "CARRY_OVER。"
    advantageousSection: "CARRY_OVER。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。天井引継ぎ。"
    modeState: "CARRY_OVER。桜チャレンジ中・ボーナス中・AT中の純電源OFF→ONは元の状態へ復帰するとする解析あり。"
    advantageousSection: "CARRY_OVER。"
    morningStart: "外見上は設定変更時と同じくお祭りモード夕方ステージ、ウリンカウンター『???』表示となるため液晶初期表示だけでの判別は不可。"
  gameCounterReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    fixedShortening: "NONE。設定変更専用の短縮天井は確認されず、BONUS天井は最大599G、AT間は最大2000G＋前兆。"
    normalCeiling: "BONUS天井110～573G＋前兆最大26G。AT間天井1700～2000G＋前兆最大26G。"
    note: "AT後の有利区間引継ぎ時のみBONUS天井299Gへ短縮するが、これは設定変更リセット恩恵ではない。"
  modeAfterReset:
    behavior: "有利区間リセット後の通常時として再開。通常時開始時の次回奇数ボーナス抽選はリセット時7.03%。設定変更専用の低確A～超天国全振り分けはUNVERIFIED_AFTER_RESEARCH。"
  stateAfterReset:
    behavior: "有利区間開始時にウリンカウンター200がセットされ、CZ当否抽選を行う。設定変更後は初回ボーナス向けHAPPY魚群抽選あり。"
  advantageousSectionReset: "設定変更=RESET / 据え置き=CARRY_OVER / 純電源OFF→ON=CARRY_OVER。本機は有利区間ランプ非搭載。"
  resetBenefits:
    - "設定変更後初回ボーナス当選時、約30%でHAPPY魚群→AT直行。"
    - "HAPPY魚群込みで設定1の設定変更後初回ボーナスAT期待度約60%。"
    - "通常時開始時の初回奇数ボーナス抽選7.03%。"
  resetPenalties:
    - "設定変更専用の主要不利数値はNONE_CONFIRMED_AFTER_RESEARCH。"
  resetDetection:
    lampDisplay: "有利区間ランプ非搭載のためランプ点灯/消灯判別はNOT_APPLICABLE。"
    reelBehavior: "本機固有の設定変更時ガックン条件/発生率は、型式・メーカー・シリーズ名と『設定変更/リセット/ガックン/朝一』を変えて再探索してもUNVERIFIED_AFTER_RESEARCH。"
    liquidCrystal: "設定変更・純電源OFF→ONとも朝一はお祭りモード夕方＋ウリンカウンター『???』で、初期液晶だけでは判別不可。"
    after50Games: "設定変更後かつ50G消化以降のモード選択画面で『祭』アイコンが出る場合あり。黒=設定変更濃厚＋HAPPY魚群期待度UP、赤=設定変更濃厚＋HAPPY魚群濃厚。必ず出現するわけではない。"
  numericResetData:
    happyGyogunAfterSettingChange: "初回ボーナス時 約30%"
    firstBonusAtExpectationSetting1: "約60%（HAPPY魚群込み）"
    firstOddBonusLotteryReset: "7.03%"
    firstOddBonusLotteryAdvantageousSectionCarry: "37.50%（比較用。設定変更時ではない）"
    urinCounterAtAdvantageousSectionStart: "200"

sources:
  - url: https://news.p-world.co.jp/articles/19764/nippon
    sourceType: industry-news
    usedFor: [manufacturerContext, modelCode, releaseDate]
  - url: https://news.p-world.co.jp/articles/20390/nippon
    sourceType: industry-news
    usedFor: [releaseDate]
  - url: https://hazuse.com/machine/pachislot/1S1823/
    sourceType: analysis-high
    usedFor: [modelCode, inspectionCode, generation, payoutRateBySetting, settingL, initialOddBonusLottery, urinCounter]
  - url: https://p-kn.com/slot/3764/
    sourceType: analysis-high
    usedFor: [releaseDate, manufacturer, pseudoBonusProbability, atProbability]
  - url: https://1geki.jp/slot/s_sumi_ij_matsuri/
    sourceType: contemporary-analysis
    usedFor: [payoutRateBySetting, initialHitBySetting, settingLDetection, netIncrease, basicPayout, atAveragePayout, happyGyogun]
  - url: https://1geki.jp/slot/s_sumi_ij_matsuri/3/
    sourceType: contemporary-analysis
    usedFor: [bonusCeiling, atCeiling]
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/38/kr01.php
    sourceType: contemporary-analysis
    usedFor: [settingChangeReset, powerCycleCarryOver, morningStage, happyGyogun, firstBonusAtExpectation, powerCycleStateRestore]
  - url: https://nana-press.com/kaiseki/machine/348/9242/
    sourceType: analysis-high
    usedFor: [settingChangeReset, unchangedCarryOver, happyGyogun, firstBonusAtExpectation]
  - url: https://nana-press.com/kaiseki/machine/348/9245/
    sourceType: analysis-high
    usedFor: [happyGyogun, firstOddBonusLottery, urinCounterStart, urinCounterSystem]
  - url: https://www.p-world.co.jp/machine/database/9603
    sourceType: industry-db
    usedFor: [ceiling, advantageousSection3000G, noAdvantageousSectionLamp]
  - url: https://chonborista.com/slot/sanyo-slot/165134/
    sourceType: contemporary-analysis
    usedFor: [baseGamesPer50, payoutRateBySetting, initialHitBySetting, netIncrease, ceiling]
  - url: https://ichikatsu.com/supersea-japan-matsuri/
    sourceType: contemporary-analysis
    usedFor: [powerCycleCeilingCarryOver, resetDetectionFestivalIcon]

unverifiedAfterResearch:
  - "設定変更時に低確A/低確B/通常/天国準備/天国/超天国のどれから始まるかという全モード振り分け。表記揺れ、型式Sスーパー海物語INJAPAN祭PE、サンスリー/三洋、リセット/設定変更/朝一/モード振り分け等で再探索したが直接公開表を固定できず。"
  - "本機固有の設定変更時リールガックン条件/発生率。"

conflicts:
  - "メーカー表記は資料により『サンスリー』『SANYO/三洋』が混在。業界発表では製造元サンスリー、三洋物産が発売発表、三洋販売が業界向け発表主体のため役割を分離して保持。"

researchNotes:
  - "設定Lは下パネル常時消灯。通常設定系列1/2/4/5/6とは別に特殊低出率設定として保持。"
  - "AT後の有利区間引継ぎ時299G天井は強い短縮だが、設定変更リセット時の恩恵ではないためceilingAfterResetへ誤分類しない。"
  - "設定変更と純電源OFF→ONは液晶初期表示が同じため、夕方ステージや『???』だけでは変更判別不可。"
  - "通常時全モード移行率、全小役別モード昇格率、AT上乗せ詳細は実機完全再現粒度のため収集対象外。"
```
