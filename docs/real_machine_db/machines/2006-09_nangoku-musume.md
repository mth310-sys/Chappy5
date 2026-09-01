# 南国娘

machineName: 南国娘
manufacturer: オリンピア
releaseDate: 2006-09
releaseDatePrecision: MONTH_WITH_CONTEMPORARY_DELIVERY_START_2006-09-10
modelNumber: 南国娘X
generation: 5号機初期
systemType: Aタイプ + BIG後50G完走型RT / 完全告知

## payoutRateBySetting

retrospectiveSeries:
- setting1: 97.1%
- setting2: 100.0%
- setting3: 102.4%
- setting4: 104.2%
- setting5: 107.0%
- setting6: 110.3%

status: ANALYSIS_SINGLE_RETROSPECTIVE
note: 2026-09-02再探索で5号機回顧資料から設定1〜6系列を回収。P-WORLD現存ページには機械割表がなく、独立した当時解析表との第二照合が未取得のため単一回顧値として保持。既存coreStatusは不用意に変更しない。

## initialHitBySetting

| 設定 | BIG | REG | 合算（概算/資料記載） |
|---:|---:|---:|---:|
| 1 | 1/264 | 1/528 | 約1/176 |
| 2 | 1/252 | 1/504 | 約1/168 |
| 3 | 1/243 | 1/486 | 約1/162 |
| 4 | 1/236 | 1/472 | 約1/157 |
| 5 | 1/226 | 1/452 | 約1/151 |
| 6 | 1/220 | 1/440 | 約1/147 |

P-WORLD掲載の設定別BIG/REGと、2006年当時の業界記事にある設定1→6レンジ（BIG 1/264→1/220、REG 1/528→1/440、合算1/176→1/147）が一致。

信頼度: ANALYSIS_HIGH（P-WORLD + INDUSTRYレンジ照合）

## baseGamesPer50
約34G/1000円（50枚）

信頼度: INDUSTRY

## netIncrease
BIG後50Gの完走型RT。
50G完走時の純増は約30枚なので、単純換算では約+0.6枚/G相当。ただし元資料は「50G完走時 約30枚」という表現のため、DBでは原値を正として保持する。

信頼度: INDUSTRY

## basicPayout
- BIG: 実獲得約210枚。BIG後50G RT込みでは実質250枚弱との当時業界記事記載。
- REG: 実獲得約105枚。
- 5号機クロニクルにはBIG最大375枚 / REG104枚の掲載があるが、BIG「最大375枚」は払い出し/規定上限系の表現とみられ、実獲得約210枚とは定義を分離して保持する。

## modeSpecificMinimumData
- オリンピア初の5号機
- 完全告知
- BIG後50Gの完走型RT
- RT終盤8Gに「南国チャンス」
- RT中成立ボーナスは終盤まで告知を保留する仕様

## resetBehavior

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名「南国娘」「南国娘X」と「設定変更・リセット・朝一・RT・50G」を組み替え、当時業界記事、P-WORLD、回顧資料、旧攻略系を再探索したが、設定変更時にBIG後50G RT残G/内部RT状態をどう扱うかを直接説明する本機固有資料を確定できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のBIG後RT残G・成立済みボーナス告知保留状態などの翌日引継ぎを本機固有資料で確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONのみでのRT残G/内部RT状態/初期出目処理を直接示す資料を回収できず。
gameCounterReset: NOT_APPLICABLE_TO_NORMAL_CEILING。通常時ゲーム数天井は今回確認されず、公開ゲーム数特性はBIG後50G完走型RT。RT残Gの設定変更/電断時処理は未確定。
ceilingAfterReset: NONE_CONFIRMED。通常時天井・設定変更専用短縮天井・朝一固定G数は確認できず。
modeAfterReset: NONE_CONFIRMED。設定変更専用の内部モード振り分け/朝一専用モードは確認できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。BIG後50G RT中に設定変更・電源断した場合の内部状態処理は未確定。
advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用RT付与・短縮天井・初当たり優遇等の公開恩恵は確認できず。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、リール初期出目、パトランプ/バードランプ等を利用した本機固有の設定変更確定判別を回収できず。
numericResetData:
- normalRTLength: BIG後50G
- normalRTTotalIncrease: 約30枚/50G
- resetCeilingGameCount: NOT_APPLICABLE_OR_NONE_CONFIRMED
- resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
- morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: RESET_FIELDS_RESEARCHED_DEVICE_SPECIFIC_STATE_HANDLING_UNVERIFIED_NO_NORMAL_CEILING_CONFIRMED

## sources
取得日: 2026-08-31 / resetBehavior遡及QA・機械割再探索: 2026-09-02
1. グリーンべると「パトライト最新作『南国娘』が登場」 — https://web-greenbelt.jp/00004819/ — 2006-08-08発表、オリンピア初5号機、納品9月10日予定、完全告知、BIG後50G完走型RT、RT50G純増約30枚、BIG約210枚、REG約105枚、BIG/REG/合算の設定1→6レンジ、1000円約34G — reliability: INDUSTRY
2. P-WORLD「南国娘『2006年』」 — https://www.p-world.co.jp/machine/database/4307 — 設定別BIG 1/264・1/252・1/243・1/236・1/226・1/220、設定別REG 1/528・1/504・1/486・1/472・1/452・1/440 — reliability: ANALYSIS_HIGH
3. パチマガスロマガFREE 名機 the ORIGIN — https://pachimaga.com/free/special/1f0715d6e14e5c3b3f6e6c9e936dee4a065d2eab.php — 2006年9月、BIG後50G RT — reliability: ANALYSIS_HIGH
4. 5号機クロニクル 平和＆オリンピア — https://5goki.com/heiwa-olympia — 2006年9月、Aタイプ+RT、BIG最大375枚、REG104枚 — reliability: ANALYSIS_SINGLE
5. 娯楽の学校「パチスロ5号機 2005-2006 全機種リスト」 — https://goraku-gakkou.com/5gouki-2005-2006/ — 機械割97.1/100.0/102.4/104.2/107.0/110.3% — retrievedAt: 2026-09-02 — reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields
- 設定別機械割の独立当時解析照合
- RT純増の別ソース照合（原資料は50G完走時約30枚）
- 設定変更/据え置き/電源OFF→ON時のBIG後50G RT残G・内部RT状態処理
- 本機固有の設定変更判別条件

## conflicts
- BIG獲得性能は、当時業界記事の実獲得約210枚と5号機クロニクルの「最大375枚」が併存。定義が異なる可能性が高いため、同じ獲得枚数として平均・統合しない。
