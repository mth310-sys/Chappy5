# スマスロ ゴッドイーター リザレクション

recordNo: 1666
machineName: スマスロ ゴッドイーター リザレクション
aliases: Lゴッドイーター リザレクション / ゴッドイーター リザレクション / スマスロゴッドイーター
manufacturer: セブンリーグ（製造） / 山佐ネクスト（販売・ブランド）
formalModel: LパチスロゴッドイーターリザレクションSLED
inspectionCode: 4S0159
releaseDate: 2024-07-22
generation: 6.5号機 / スマスロ
systemType: AT / ST型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技日本/P-WORLD業界記事で山佐ネクスト販売・セブンリーグ製造、型式 `LパチスロゴッドイーターリザレクションSLED`、2024-07-22導入予定を確認。
- HAZUSEで同型式、検定番号 `4S0159`、導入開始日2024-07-22を照合。
- 1gekiでも同型式・検定番号・導入開始日を確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 101.1%（業界記事に101.0%表記あり。丸め差としてCONFLICT注記）
- setting4: 105.6%
- setting5: 110.0%
- setting6: 114.9%
initialHitBySetting:
- setting1: AT 1/351.9
- setting2: AT 1/344.5
- setting3: AT 1/330.1
- setting4: AT 1/317.0
- setting5: AT 1/302.2
- setting6: AT 1/290.3
baseGamesPer50: 約31G/50枚（設定1基準）
netIncrease: ATストーリーパート 約9.0枚/G
basicPayout:
- AT「アラガミバースト」: ストーリーパート→ST「アラガミ交戦」をループ
- 初回ストーリーパート: 100枚固定とする解析資料あり
- ST「アラガミ交戦」: 25G+α / 勝利期待度約76%
- 「神を喰らえ」成功報酬: 払い出し200枚以上
- 上位ST「漆黒の捕喰者」: 25G+α / 勝利期待度約84%
- プレミアムAT「神堕」: 1セット4G / 510枚以上の上乗せが約90%でループ
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数前兆またはレア役契機CZからAT「アラガミバースト」を目指す。
- CZは「アラガミ防衛戦」（期待度約35%）と「殲滅モード」（期待度約57%）の2系統。
- 通常時最大1000G+αでAT当選。
- 規定ゲーム数候補は100 / 200 / 300 / 450 / 600 / 750 / 1000G+αとして主要解析に公開。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GAKKUN_AND_POWER_CYCLE_STAGE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESETとする機種専用比較資料あり。
- 天井までのゲーム数RESET。設定変更後は最大600G+αへ短縮。
- 内部状態RESET。
- 偏食因子RESET。設定変更自体が偏食因子獲得契機の1つでもあるため、単純な「蓄積ゼロ固定」とは扱わない。
- 必勝本では設定変更後は通常ステージ開始とする。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは設定変更専用600G+α短縮は発生せず、通常の最大1000G+α契約を継続。
- 天井進行・偏食因子・内部状態は据え置き/純電断側では引継ぎとする比較資料に整合。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 天井までのゲーム数: CARRY_OVER。
- 偏食因子: CARRY_OVER。
- 内部状態: CARRY_OVER。
- 有利区間: CARRY_OVERとする機種専用比較資料あり。
- ステージ復帰位置: 必勝本・1geki等で純電断側は調査中のため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_STATE / UNVERIFIED_FOR_STAGE

### gameCounterReset
- 設定変更: RESET。設定変更専用の最大600G+α天井へ。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常最大1000G+αに対し、設定変更後は最大600G+αへ短縮。
- 設定変更専用の個別規定G振り分け率は、機種名/型式/メーカー + リセット/朝一/モード/振り分けで再探索後も公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 公開資料は設定変更時の「状態RESET」を明記するが、朝一専用モード名・設定変更専用モード振り分け表は主要資料横断で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常時の全モード移行表はミッション範囲外として収集しない。
confidence: ANALYSIS_HIGH_FOR_RESET / UNVERIFIED_FOR_RESET_MODE_DISTRIBUTION

### stateAfterReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 偏食因子も設定変更時RESET、純電断では引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 営業中の有利区間切断/上位移行契約は朝一設定変更契約と分離して扱う。
confidence: ANALYSIS_SINGLE_FOR_EXPLICIT_POWER_COMPARISON + CONSISTENT_WITH_SMARTSLOT_RESET_CONTRACT

### resetBenefits
- 最大天井が1000G+αから600G+αへ短縮。
- 設定変更は偏食因子の獲得契機の1つ。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日から蓄積した偏食因子・内部状態・天井進行は設定変更でリセットされる。
- 据え置きなら引継がれるため、前日状況によっては設定変更が客側に不利となる場合がある。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更後は最大600G+α天井。朝一で600G+αを明確に超えてAT非当選なら据え置き推測材料。
- 本機固有ガックンについて、機種名/正式型式/セブンリーグ/山佐ネクスト + 設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索したが、信頼できる固定条件・発生率を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電断時の液晶ステージ復帰位置も主要解析で調査中のため判別材料へ採用しない。
confidence: ANALYSIS_HIGH_FOR_600G_DETECTION / UNVERIFIED_FOR_GAKKUN_AND_POWER_STAGE

### numericResetData
- 通常最大天井: 1000G+α
- 設定変更後最大天井: 600G+α
- 天井到達恩恵: AT当選
- 設定変更専用モード振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### publicMorningNumbers
- 600G+α: 設定変更後の最大短縮天井。
- 通常時最大1000G+αとの400G差が、朝一客行動へ直接影響する主要公開数値。

## conflicts
- 設定3出玉率は1geki等で101.1%、2024-07-18の遊技日本/P-WORLD業界記事で101.0%。平均化せず `CONFLICT_ROUNDING_101.0_VS_101.1` として保持。設定1/2/4/5/6およびAT初当りは一致。
- 一部後発まとめにAT純増約5.1枚/G等の異質値があるが、当時業界記事・1geki・HAZUSE等の約9.0枚/Gが複数一致するためcanonicalは約9.0枚/G。異質値は採用しない。

## missingFields
- powerCycleBehavior.stage: UNVERIFIED_AFTER_RESEARCH
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## groupAudit
- 2024-07-22 canonical群は4機: `ミスタージャグラー / 賞金首Angel / スロット ゾンビランドサガ / スマスロ ゴッドイーター リザレクション`。
- K-Naviはゴッドイーターを「7月下旬」とするが、遊技日本/P-WORLD、1geki、HAZUSE、パチビー等で2024-07-22を確認したため同日群へ含める。
- 本機処理で同日既知4機は4/4。PB・別型式・地域先行・延期/段階導入を再監査した範囲で同日追加canonical候補は確認できず、2024-07-22群をCLOSEDとする。

## sources
取得日: 2026-09-14
- 遊技日本 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/28293/nippon
- HAZUSE 機種情報: https://hazuse.com/machine/pachislot/4S0159/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/4S0159/genre/201/
- 1geki 基本解析: https://1geki.jp/slot/l_godeater_r/
- 1geki 天井/設定変更: https://1geki.jp/slot/l_godeater_r/3/
- パチ&スロ必勝本 天井/設定変更: https://hisshobon.com/machineinfo/84233/
- パチ&スロ必勝本 偏食因子: https://hisshobon.com/machineinfo/84253/
- ちょんぼりすた 朝一リセット: https://chonborista.com/slot/yamasa-slot/211285/
- パチビー 機種情報: https://www.pachibee.jp/machines/index/224060000
- K-Navi 2024年7月導入カレンダー: https://p-kn.com/calendar/202407/
- パチナビ 設定変更/電源OFF ON比較: https://pachinavi.net/machines/smasloth-god-eater/settei/
