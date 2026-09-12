# パチスロ この素晴らしい世界に祝福を！ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1490
canonicalKey: 2022-04-04_pachislot-konosuba
machineName: "パチスロ この素晴らしい世界に祝福を！"
alternateName: "Sこの素晴らしい世界に祝福を！ / このすば"
manufacturer: "サミー"
modelCode: "S この素晴らしい世界に祝福を! ZR"
inspectionCode: "UNVERIFIED_AFTER_RESEARCH"
releaseDate: 2022-04-04
generation: "6.2号機"
systemType: "AT（周期/CZ経由・擬似ボーナスループ）"
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_RESET_CORE_WITH_CONFLICT
confidence: HIGH
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "2", "3", "4", "5", "6"]
  payoutRatePct:
    "1": 97.9
    "2": 99.0
    "3": 101.2
    "4": 104.2
    "5": 106.0
    "6": 109.1
  initialHitBySetting:
    at:
      "1": "1/261.5"
      "2": "1/251.6"
      "3": "1/247.5"
      "4": "1/233.5"
      "5": "1/230.8"
      "6": "1/216.9"
  baseGamesPer50Coins: "約36.3G/50枚（設定1）"
  netIncrease: "AT約2.9枚/G"
  basicPayout:
    konosubaBonus: "100枚以上（AT初当り時）"
    heroineBonus: "30〜300枚以上の枚数変動型"
    goddessBonus: "5/10/15/20G継続のポイント特化擬似ボーナス"
    upperAt: "『このすばRUSH』は平均ぼーなす回数9回以上の高継続AT"
  normalCeiling: "通常時598G+αで駄女神ぼーなす＋AT当選"
  modeSpecificMinimumData: "通常時は1周期20G+αでスティールバトルを目指す。AT『このすばチャンス』は布盗会とぼーなすをループし、6人盗破で上位AT『このすばRUSH』へ。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "RESET。598G+α天井を新規進行。"
    modeState: "内部状態およびキャラポイント/ランクはRESET/再抽選扱い。非有利区間から新規有利区間へ移行。"
    advantageousSection: "RESET。有利区間ランプは消灯から開始。"
    morningStart: "CONFLICT。2022年当時の期待値見える化は『天界ステージ』、後年の回顧整理は『女神の間ステージ』とする一方、ちょんぼりすた/SLOT HACK/スロットセブンは開始ステージを調査中としている。名称をcanonical固定しない。"
    benefit: "設定変更専用の固定短縮天井はなし。新規有利区間の1周期目は6人目がエリス様となり強いが、AT終了後の有利区間再移行時にも発生するため『設定変更専用』ではない。"
    disadvantage: "設定変更専用の主要不利数値は確認できず。"
  unchanged:
    gameCountCeiling: "CARRY_OVER。据え置きは天井進行を引き継ぐ。"
    modeState: "CARRY_OVER。内部状態・ポイント/ランク等を引き継ぐ扱い。"
    advantageousSection: "CARRY_OVER。通常時点灯状態を引き継ぐ。"
  powerOffOn:
    gameCountCeiling: "CARRY_OVER。"
    modeState: "CARRY_OVER。内部状態等を引き継ぐ。"
    advantageousSection: "CARRY_OVER。"
  gameCounterReset: "設定変更=RESET / 据え置き・純電源OFF→ON=CARRY_OVER。"
  ceilingAfterReset:
    fixedShortening: "NO。通常天井598G+αを新規進行。"
    normalMax: "598G+α。"
  modeAfterReset:
    behavior: "新規有利区間でモード選択レベル等を再抽選するが、設定変更専用の比較可能な全振り分け表としては扱わない。通常の有利区間移行時抽選と区別。"
  stateAfterReset:
    behavior: "設定変更でRESET/再抽選。据え置き・純電断でCARRY_OVER。"
  advantageousSectionReset: "設定変更でRESET / 据え置き・純電源OFF→ONはCARRY_OVER。通常時から有利区間ランプ点灯タイプ。"
  resetBenefits:
    - "新規有利区間1周期目の6人目はエリス様。1周期目区間はメーカー発表ベースで設定1でも出率100%超とされる解析がある。"
    - "ただしこの1周期目優遇はAT終了後の有利区間再移行時にも発生するため、設定変更専用恩恵ではない。"
    - "設定変更専用の固定短縮天井・専用早当たり率は確認できず。"
  resetPenalties:
    - "設定変更専用の主要不利数値は確認できず。"
  resetDetection:
    lampDisplay: "通常時から有利区間ランプ点灯タイプ。前日点灯を前提に、朝一消灯なら設定変更濃厚、朝一点灯なら据え置き濃厚。前日消灯閉店や店側対策は例外。"
    stage: "開始ステージ名はCONFLICTのため単独判別根拠として固定しない。"
    reelBehavior: "本機固有のガックン発生条件/発生率は十分再探索後も直接固定できずUNVERIFIED_AFTER_RESEARCH。"
  numericResetData:
    normalCeiling: "598G+α"
    firstCycle: "6人目がエリス様。設定1でも1周期目区間の出率100%超とされるが、設定変更専用ではなく新規有利区間共通。"
    dedicatedResetNumeric: "設定変更時だけに適用される短縮天井・モード振り分け・一定G以内当選率の公開表はNO_PUBLIC_RESET_SPECIFIC_NUMERIC_TABLE_FOUND_AFTER_RESEARCH。"

sources:
  - url: https://news.p-world.co.jp/articles/19637/nippon
    sourceType: industry
    usedFor: [manufacturer, modelCode, releaseWindow, systemType, atInitialHitRange, netIncrease, gameplay]
  - url: https://news.p-world.co.jp/articles/19602
    sourceType: industry
    usedFor: [manufacturerOfficialAnnouncement, atInitialHitRange, gameplay]
  - url: https://1geki.jp/slot/s_konosuba/
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRateBySetting, atInitialHitBySetting, systemType]
  - url: https://1geki.jp/slot/s_konosuba/4/
    sourceType: analysis-high
    usedFor: [baseGamesPer50]
  - url: https://1geki.jp/slot/s_konosuba/3/
    sourceType: analysis-high
    usedFor: [ceiling]
  - url: https://1geki.jp/slot/s_konosuba/85/
    sourceType: analysis-high
    usedFor: [goddessBonus]
  - url: https://1geki.jp/slot/s_konosuba/90/
    sourceType: analysis-high
    usedFor: [upperAt]
  - url: https://chonborista.com/slot/sammy-slot/163658/
    sourceType: analysis-high
    usedFor: [releaseDate, payoutRateBySetting, atInitialHitBySetting, baseGamesPer50, ceiling, settingChangeBehavior, powerCycleBehavior, advantageousSectionLamp, firstCycleBenefit, basicPayout]
  - url: https://slotjin.com/tenjoukitaichi/konosuba/
    sourceType: contemporary-analysis
    usedFor: [ceiling, settingChangeBehavior, powerCycleBehavior, advantageousSectionLamp, firstCycleBenefit, resetDetection, morningStageCandidate]
  - url: https://www.p-world.co.jp/machine/database/9594
    sourceType: machine-database
    usedFor: [payoutRateBySetting, atInitialHitBySetting, basicPayout, gameplay]
  - url: https://ichikatsu.com/newslot2022/
    sourceType: contemporary-calendar-analysis
    usedFor: [releaseDate, manufacturer, systemType, baseGamesPer50, netIncrease, payoutRateBySetting, atInitialHitBySetting, releaseGroupAudit]
  - url: https://1geki.jp/newmachinecalender/202204/
    sourceType: calendar
    usedFor: [releaseGroupAudit]
  - url: https://www.nankaikoya.jp/konosuba-kitaichi/
    sourceType: retrospective-analysis
    usedFor: [settingChangeBehavior, powerCycleBehavior, pointRankCarry, advantageousSectionLamp, morningStageConflict]
  - url: https://slothack.net/matome/65826/
    sourceType: historical-analysis
    usedFor: [ceiling, settingChangeBehavior, powerCycleBehavior, morningStageUnverified, firstCycleBenefit]
  - url: https://slot-seven.com/konsu-tenzyou/
    sourceType: historical-analysis
    usedFor: [settingChangeBehavior, powerCycleBehavior, morningStageUnverified]

unverifiedAfterResearch:
  - "1Sxxxx形式の検定番号。正式型式『S この素晴らしい世界に祝福を! ZR』は業界記事で確認したが、検定番号を信頼できる複数資料で固定できず。"
  - "本機固有の設定変更ガックン条件・発生率。機種名/型式/サミー/このすばと『設定変更』『リセット』『朝一』『据え置き』『電源OFF ON』『ガックン』を組み替えて再探索したが直接資料を固定できず。"
  - "設定変更だけに限定されたモード振り分け・一定G以内当選率。通常の有利区間移行時モード選択抽選は公開されているが、設定変更専用値と混同しない。"

conflicts:
  - field: "resetBehavior.settingChange.morningStart"
    values:
      - "天界ステージ — 期待値見える化（2022-04-29記事）"
      - "女神の間ステージ — ぽこすろっと（後年回顧）"
      - "調査中 — ちょんぼりすた / SLOT HACK / スロットセブン"
    resolution: "CONFLICT。設定変更時の開始ステージ名はcanonical固定しない。"

researchNotes:
  - "性能コアは1geki、P-WORLD、ちょんぼりすた、イチカツで一致。"
  - "通常天井は598G+αで駄女神ぼーなす＋AT。設定変更で天井/内部状態/有利区間をリセットし、据え置き・純電源OFF→ONは引き継ぐ。"
  - "通常時は有利区間ランプ点灯タイプ。前日点灯を前提に朝一消灯=設定変更濃厚、点灯=据え置き濃厚。ただし前日消灯閉店・店側対策を除く。"
  - "1周期目6人目エリス様は朝一客行動に影響するため記録したが、AT終了後にも同じ新規有利区間1周期目が存在するため設定変更専用恩恵としては数えない。"
  - "2022-04-04導入群は1gekiとイチカツの双方で4機（ウルトラマンタロウ暴君SPEC / ひぐらし祭2カケラ遊び編 / SLOTえとたま / このすば）を確認。No.1490処理で既知4/4完了。"
```
