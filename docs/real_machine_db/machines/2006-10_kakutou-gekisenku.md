# 格闘激戦区

machineName: 格闘激戦区
manufacturer: エレコ
releaseDate: 2006-10（メーカー公式・P-WORLD） / 2006-11（HAZUSE表記）
generation: 5号機初期
systemType: ボーナス + RT

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.88% |
| 4 | 101.14% |
| 6 | 104.29% |

信頼度: ANALYSIS_SINGLE（pacnk）

## initialHitBySetting

| 設定 | BIG | REG/GEKISEN CHANCE |
|---:|---:|---:|
| 1 | 1/316.60 | 1/1024.00 |
| 4 | 1/303.40 | 1/936.20 |
| 6 | 1/291.30 | 1/862.30 |

信頼度: ANALYSIS_SINGLE（pacnk）

## baseGamesPer50
UNVERIFIED

## netIncrease

- ボーナス後は「激ZONE」へ移行
- BIG後: 激ZONE 30G
- GEKISEN CHANCE後: 激ZONE 10G
- 激ZONE中に150GのRT「RTG」へ突入しやすくなる
- メーカー公式はRTGを「メダルを減らさず」遊技できる仕様と説明
- RTGの1Gあたり純増枚数: UNVERIFIED

## basicPayout

当時攻略資料の規定払い出し条件:
- BIG: 330枚を超える払い出しで終了
- GEKISEN CHANCE: 150枚を超える払い出しで終了

実純増枚数: UNVERIFIED

## modeSpecificMinimumData

- 5号機 / ボーナス+RT
- 設定構成: 1・4・6の3段階
- 150G RT「RTG」
- RTG中のボーナス期待度約50%（メーカー公式）
- 小役同時抽選あり

## resetBehavior — v0.7 QA 2026-09-02

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時にボーナス後CZ「激ZONE」や150G RT「RTG」の残G/内部RT状態がどう処理されるかを本機固有の直接資料で確定できず。一般的な5号機RT挙動から補間しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に激ZONE/RTG残Gや特殊リプレイ確率状態をどのように引き継ぐかの直接記述を確認できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみで激ZONE/RTG状態・液晶/初期出目がどう復帰するか、本機固有資料で確定できず。

gameCounterReset: NONE_CONFIRMED_AFTER_RESEARCH。メーカー公式・HAZUSE・旧パチマガで公開されるRTG突入契機は特殊リプレイ、ボーナス後激ZONEであり、通常ゲーム数到達型の天井カウンタは確認できない。ただし「天井なし」と直接明記する同時代一次資料を回収できなかったため NOT_APPLICABLE へ断定せず NONE_CONFIRMED とする。

ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井・到達G数は確認できず。

modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED。通常A/B等のゲーム数管理モードは公開資料で確認されない。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。激ZONE/RTG中の設定変更時状態遷移は直接根拠なし。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更後のCZ優遇、RT突入率上昇、短縮天井などの朝一専用恩恵を確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/ランプ表示等による本機固有の設定変更判別を確定できず。

numericResetData:
  normalGameCountCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  normalPostBigChanceZone: 30G
  normalPostGekisenChanceZone: 10G
  rtgLength: 150G
  bigPostChanceZoneRtEntryExpectation: 約60%（旧パチマガ）
  regPostChanceZoneRtEntryExpectation: 約30%（旧パチマガ）
  resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_RESEARCH_PASS_NO_RESET_SPECIFIC_BENEFIT_OR_GAME_COUNT_CEILING_FOUND_RT_STATE_CARRYOVER_POWER_CYCLE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `格闘激戦区 / エレコ / 2006` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RTG / 激ZONE / 特殊リプレイ / ガックン / 初期出目` を組み替えて再探索。
- ユニバーサル公式、HAZUSE当時解析、旧パチマガスロマガ、pacnkを横断。
- 公式・旧解析ともRTGは特殊リプレイ契機、ボーナス後激ZONEで特殊リプレイ確率が上昇する構造を確認。通常G数到達型天井を示す根拠は回収できなかったが、「天井なし」の直接表現を一次/当時解析で確定できないため、ゲーム数天井は `NONE_CONFIRMED_AFTER_RESEARCH` に留める。
- 設定変更/据え置き/単純電断時のRT状態処理は直接資料がなく、5号機一般論で補完していない。

## sources

取得日: 2026-08-31（resetBehavior QA追加取得: 2026-09-02）

1. ユニバーサルエンターテインメント公式「格闘激戦区」 — https://www.universal-777.com/product/slot/kakutou_gekisenku/ — エレコ、5号機、ボーナス+RT、発売2006年10月、激ZONE/150G RTG。reset QAでは通常G数天井型ではなく特殊リプレイ/ボーナス後CZ主体の公開構造確認に使用 — reliability: OFFICIAL
2. pacnk「格闘激戦区 設定判別ツール」 — https://pacnk.com/slot/tools/sh_kakutougekisenku.html — 設定1/4/6、BIG/REG、特殊リプレイ、PAYOUT — reliability: ANALYSIS_SINGLE
3. HAZUSE「格闘激戦区 解析・機種情報」 — https://hazuse.com/i/data/kakutougekisenku/top.htm — 5号機、RTG150G、払い出し終了条件、BIG後30G/GEKISEN CHANCE後10G激ZONE、2006年11月表記 — reliability: ANALYSIS_SINGLE_CONTEMPORARY
4. P-WORLD「2006年10月導入機種一覧」 — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2006-10 — 2006年10月導入機として掲載 — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「格闘激戦区 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/66/a.php — 特殊リプレイがRT突入契機、通常時約1/2000、激ZONE中約1/30、BIG約234枚/REG約112枚 — reliability: OLD_ANALYSIS_HIGH
6. パチマガスロマガ「格闘激戦区 激ゾーン&RT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/66/k.php — BIG後30P/REG後10P、RT突入期待度約60%/30%、RT150P、規定P消化またはボーナス入賞で終了 — reliability: OLD_ANALYSIS_HIGH

## missingFields

- 50枚あたりゲーム数
- RTGの1Gあたり純増枚数
- BIG/GEKISEN CHANCEの実純増枚数
- 設定別数値の別ソース照合
- 設定変更時の激ZONE/RTG残G・内部RT状態処理
- 据え置き時の激ZONE/RTG状態引継ぎ
- 単純電源OFF→ON時のRT/CZ状態・初期表示復帰
- 通常ゲーム数天井「なし」の同時代直接明記（公開構造上は未確認）
- ガックン/初期出目/表示による設定変更判別

## conflicts

- 導入時期はメーカー公式/P-WORLDが2006年10月、HAZUSEが2006年11月。発表/導入集計差の可能性があるため両方保持し、本DBの月次キューは公式/P-WORLDに合わせ2006-10へ配置。
