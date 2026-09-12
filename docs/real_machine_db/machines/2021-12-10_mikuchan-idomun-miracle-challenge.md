# パチスロ ミクちゃんとイドムンのミラクルチャレンジ — 実機性能「物差し」DB

```yaml
recordVersion: 0.7
recordNo: 1451
canonicalKey: 2021-12-10_mikuchan-idomun-miracle-challenge
machineName: パチスロ ミクちゃんとイドムンのミラクルチャレンジ
manufacturer: DAXEL
brandContext: タツミコーポレーション / アサヒディード共同PB（TRY FUTURE PROJECT）
modelCode: SミクちゃんとイドムンのミラクルチャレンジDB
inspectionCode: 1S0459
releaseDate: 2021-12-10
generation: "6号機"
systemType: ノーマル / Aタイプ / 完全告知 / リアルボーナス / 4段階特殊設定
coreStatus: COMPLETE_CORE_WITH_BASE_GAMES_UNVERIFIED
resetQaStatus: COMPLETE_APPLICABILITY_WITH_MACHINE_SPECIFIC_RESET_DETAILS_UNVERIFIED
confidence: HIGH_CORE_MEDIUM_RESET
retrievedAt: 2026-09-12

performanceCore:
  settings: ["1", "ミクちゃん", "イドムン", "6"]
  payoutRatePctCompleteStrategy:
    "1": 100.7
    "ミクちゃん": 102.7
    "イドムン": 102.7
    "6": 108.2
  payoutRateDefinition: "完全攻略時。小役全奪取・ボーナス成立後1Gで入賞というHAZUSE算出条件。市場の一般打ち機械割は公開表を今回固定できず、完全攻略値のみcanonical化。"
  initialHitBySetting:
    "1": "ボーナス合算 1/113.7"
    "ミクちゃん": "ボーナス合算 1/108.5"
    "イドムン": "ボーナス合算 1/108.5"
    "6": "ボーナス合算 1/96.7"
  bigBySetting: "設定別BIG総確率は十分な再探索後も直接公開値を固定できずUNVERIFIED_AFTER_RESEARCH。設定ミクちゃん/イドムンは各キャラクターBIGの出現比率に差があることのみ公開。"
  regBySetting: "設定別REG確率は十分な再探索後も直接公開値を固定できずUNVERIFIED_AFTER_RESEARCH。"
  baseGamesPer50Coins: UNVERIFIED_AFTER_RESEARCH
  netIncrease: NOT_APPLICABLE_NORMAL_TYPE
  basicPayout: "BIG: 総払出225枚、解析上の獲得目安約210枚。REG: 総払出120枚、解析上の獲得目安約105枚。"
  normalCeiling: NOT_APPLICABLE_NO_CEILING
  modeSpecificMinimumData:
    bonusNotification: "MIRACLEランプによる完全告知。先告知/後告知を含む全26告知パターン。"
    specialSettings: "設定1・設定ミクちゃん・設定イドムン・設定6の4段階。設定ミクちゃん/イドムンは合算・完全攻略出率は同一だが、ミクちゃんBB/イドムンBBの出現比率が異なる。"
  notes:
    - "DAXEL開発、筐体はNET製と当時業界記事に明記。"
    - "タツミコーポレーションとアサヒディードの競合ホール2社共同PB。最速導入は2021-12-10。"
    - "合算と完全攻略出率は業界記事、P-WORLD、HAZUSE、1geki、P-BOMBで複数照合。"

resetBehavior:
  version: 0.7
  settingChange:
    gameCountCeiling: "天井非搭載のためNOT_APPLICABLE。設定変更専用の短縮天井も存在しない。"
    modeState: "通常時のAT/ARTモード・高確/CZといった朝一管理状態は非搭載のノーマル機としてNOT_APPLICABLE。成立済みボーナスや告知状態など設定変更時固有の内部契約は直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: "AT/ART非搭載のリアルボーナス主体ノーマル機として朝一物差し上NOT_APPLICABLE。"
    morningStart: "設定変更専用モード、CZ、短縮天井、初当たり優遇の公開情報は確認できず。"
    benefit: "比較可能な設定変更専用の主要恩恵は確認できず。"
    disadvantage: "比較可能な設定変更専用の主要不利要素は確認できず。"
  unchanged:
    gameCountCeiling: NOT_APPLICABLE_NO_CEILING
    modeState: "通常時モード/高確/CZ等はNOT_APPLICABLE。成立済みボーナス等の内部状態は本機固有資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: NOT_APPLICABLE
  powerOffOn:
    gameCountCeiling: NOT_APPLICABLE_NO_CEILING
    modeState: "純電源OFF→ON時の本機固有内部状態・成立済みボーナス・告知状態の保持/初期化契約は、機種名・型式名・DAXEL・朝一・設定変更・据え置き・電源OFF ON等で再探索しても直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。"
    advantageousSection: NOT_APPLICABLE
  gameCounterReset: "天井非搭載のため天井ゲーム数契約はNOT_APPLICABLE。朝一表示ゲーム数の設定変更/据え置き/純電断別挙動は本機固有資料なし。"
  ceilingAfterReset:
    resetSpecificShortening: NOT_APPLICABLE_NO_CEILING
    distributions: []
  modeAfterReset:
    behavior: NOT_APPLICABLE_NO_NORMAL_MODE_SYSTEM
    resetSpecificDistribution: null
  stateAfterReset:
    behavior: "高確/CZ等の通常時状態管理はNOT_APPLICABLE。成立済みボーナス/告知状態など機種固有の内部契約はUNVERIFIED_AFTER_RESEARCH。"
    numeric: null
  advantageousSectionReset: NOT_APPLICABLE_NORMAL_TYPE
  resetBenefits:
    - "天井短縮、朝一専用モード、設定変更専用CZ/AT優遇などの公開恩恵は確認できず。"
  resetPenalties:
    - "設定変更専用の比較可能な定量的不利要素は確認できず。"
  resetDetection:
    reelBehavior: "本機固有のガックン条件・発生率は、機種名/型式/DAXEL/NET筐体/設定変更/リセット/朝一/据え置き/ガックン等へ検索語を変更しても直接固定できずUNVERIFIED_AFTER_RESEARCH。"
    lampDisplay: "MIRACLEランプはボーナス告知用であり、設定変更・据え置き判別用の朝一専用契約は確認できず。"
    other: "朝一の設定変更/据え置きを直接判別できる公開数値・表示契約は確認できず。"
  numericResetData:
    resetSpecificNumericData: NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH
    note: "設定変更専用モード振り分け、朝一特定G以内当選率、短縮天井、リセット恩恵発生率はいずれもNOT_APPLICABLEまたは未確認。"

sources:
  - url: https://news.p-world.co.jp/articles/18641/nippon
    sourceType: contemporary-industry
    usedFor: [pbContext, developer, cabinetMaker, systemType, settings, combinedRateRange, payoutRateRange, basicPayout, releaseWindow]
  - url: https://news.p-world.co.jp/articles/18512/greenbelt
    sourceType: contemporary-industry
    usedFor: [pbContext, systemType, settings, combinedRateRange, payoutRateRange, basicPayout, releaseDate]
  - url: https://www.pidea.jp/articles/1636523607
    sourceType: contemporary-industry
    usedFor: [pbContext, settings, combinedRateRange, releaseDate]
  - url: https://p-bomb.co.jp/industry/hall/2703/
    sourceType: contemporary-industry
    usedFor: [pbContext, projectContext]
  - url: https://p-bomb.co.jp/industry/new-machine/3167/
    sourceType: contemporary-industry
    usedFor: [allFourSettingsCombinedRate, allFourSettingsPayoutRate]
  - url: https://hazuse.com/machine/pachislot/1S0459/
    sourceType: machine-database-analysis
    usedFor: [manufacturer, modelCode, inspectionCode, releaseDate, generation, allFourSettingsCombinedRate, allFourSettingsPayoutRate, payoutRateDefinition, basicPayout, noCeiling]
  - url: https://1geki.jp/slot/s_miku_ido/
    sourceType: analysis
    usedFor: [releaseDate, systemType, settings, combinedRate, payoutRate]
  - url: https://1geki.jp/slot/s_miku_ido/1/
    sourceType: analysis
    usedFor: [combinedRate]
  - url: https://www.p-world.co.jp/machine/database/9531
    sourceType: industry-database
    usedFor: [manufacturer, generation, systemType, settings, combinedRate, payoutRate, basicPayout]
  - url: https://p-kn.com/slot/3707/
    sourceType: analysis-database
    usedFor: [settings, combinedRate, payoutRate, bonusPayoutConditions, systemOverview]
  - url: https://1geki.jp/newmachinecalender/202112/
    sourceType: release-calendar
    usedFor: [releaseDate, boundaryAudit]

unverifiedAfterResearch:
  - "50枚あたりゲーム数/ベース"
  - "設定別BIG総確率・REG確率"
  - "一般打ち/市場掲載の非完全攻略機械割"
  - "設定変更・据え置き・純電源OFF→ON時の成立済みボーナス/告知状態など本機固有内部契約"
  - "本機固有の設定変更ガックン条件・発生率"
  - "朝一表示/出目等による設定変更・据え置き判別契約"

conflicts: []
```

## QAメモ
- 2026-09-12: 最新main README、Mission v0.7、旧INDEX、LATEST_HANDOFF、直前No.1450境界を確認して開始。
- 最新mainでLATEST_HANDOFFはNo.1450を指していた一方、No.1450本体が直前の分岐コミットに残りmainから欠落していたため、当該レコードを元blobから復元してから本レコードを追加。
- 型式 `SミクちゃんとイドムンのミラクルチャレンジDB`、検定番号 `1S0459`、DAXEL、2021-12-10導入をHAZUSEと業界記事で確認。
- 設定は1/ミクちゃん/イドムン/6の4段階。合算1/113.7・1/108.5・1/108.5・1/96.7、完全攻略出率100.7・102.7・102.7・108.2%を複数系統で照合。
- BIG総払出225枚/約210枚獲得、REG総払出120枚/約105枚獲得。天井非搭載。
- ベース、設定別BIG/REG個別確率、機種固有の設定変更/純電断内部契約、ガックンは検索語と資料系統を変えて再探索しても固定できずUNVERIFIED_AFTER_RESEARCH。
- 1gekiの2021年12月カレンダーでは12/10のパチスロは本機1機のみ。2021-12-10群はCLOSED。次回は2021-12-13「パチスロうまい棒」から再開。
