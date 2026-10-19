# スマスロ ビッグドリーム THE GOLDEN PUSHER

recordNo: 1796
machineName: スマスロ ビッグドリーム THE GOLDEN PUSHER
aliases: ビッグドリーム / ビッグドリーム スマスロ / BIG DREAM THE GOLDEN PUSHER
manufacturer: 銀座製造 / サミー
formalModel: L ビッグドリーム KR
inspectionCode: 531040
releaseDate: 2026-05-11
generation: 6.5号機 / スマスロ
systemType: AT / 差枚数管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信/P-WORLD業界ニュースでサミー発表、型式 `Lビッグドリーム KR`、銀座製、2026-05-11ホール導入予定を確認。
- 情報島+の検定告示で銀座 `L ビッグドリーム KR`、検定番号 `531040` を確認。
- HAZUSEでも型式・検定番号・導入日・Sammyが一致。
confidence: INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.4%
- setting2: 98.8%
- setting3: 100.1%
- setting4: 104.4%
- setting5: 106.5%
- setting6: 111.3%
initialHitBySetting:
  judgementCz:
  - setting1: 1/337.7
  - setting2: 1/333.3
  - setting3: 1/326.6
  - setting4: 1/316.4
  - setting5: 1/311.4
  - setting6: 1/303.4
  at:
  - setting1: 1/629.3
  - setting2: 1/615.3
  - setting3: 1/599.1
  - setting4: 1/562.6
  - setting5: 1/551.1
  - setting6: 1/536.2
baseGamesPer50: 約30.7G/50枚
netIncrease:
- AT「GOLDEN BONUS」: 約8.2枚/G
- 上位AT「超GOLDEN BONUS」: 約8.2枚/G
basicPayout:
- AT「GOLDEN BONUS」: 初期300枚以上 / 差枚数管理
- DREAM JP BONUS: 1111枚以上（差枚上限により表示枚数払い出し前に有利区間終了の可能性あり）
modeSpecificMinimumData:
- 通常時はボール落下から1st JUDGE→2nd JUDGE→JUDGEMENTの3段階CZ突破を主経路としてATを目指す。
- 通常時AT間天井は333G/555G/999G/1499Gのいずれか。最大1499GでAT当選。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井までのゲーム数をリセットし、1499G天井は選択されず333G/555G/999Gのいずれかへ再抽選される。
- ボール、ボール進行状態、ステーションナンバーを再抽選。
- メダル発射量増加高確・ボールゲット高確、ドリームメーターはリセット。
- ボールポイント規定回数も有利区間リセット時に再抽選され、設定変更時は設定1で100個以下が約45%選択される解析を確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 「据え置き」を独立列にした機種固有の高優先公開比較表は、機種名/型式名/メーカー名と「据え置き」「朝一」「天井」「ボール」「電源OFF ON」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ONの引継ぎ情報から据え置きを推測して確定はしない。
confidence: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数、ボール進行状態、メダル発射量増加高確・ボールゲット高確を引き継ぐ。
- ボールそのもの、ステーションナンバー、ドリームメーター、ステージは高優先資料で「現在調査中」。
confidence: ANALYSIS_HIGH_FOR_CONFIRMED_CARRY_OVER_FIELDS / UNVERIFIED_FOR_INVESTIGATING_FIELDS

### gameCounterReset
settingChange:
- atInterval: RESET_AND_RELOTTERY_333_OR_555_OR_999G
carryOver:
- atInterval: UNVERIFIED_AFTER_RESEARCH
powerCycle:
- atInterval: CARRY_OVER
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / UNVERIFIED_FOR_CARRY_OVER

### ceilingAfterReset
normalCeiling:
- selectedCeilingCandidates: 333G / 555G / 999G / 1499G
- maximum: 1499G
resetCeiling:
- selectedCeilingCandidates: 333G / 555G / 999G
- maximum: 999G
shortening:
- maximumReduction: 500G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機は天井ゲーム数抽選・ボール/ステーション等の内部要素を持つが、設定変更/据え置き/純電断を横断した独立した「通常モード」名称・移行契約は高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の天井ゲーム数振り分けは公開されているためnumericResetDataに保持する。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_NAMED_MODE / ANALYSIS_HIGH_FOR_CEILING_LOTTERY

### stateAfterReset
settingChange:
- medalLaunchHigh: RESET
- ballGetHigh: RESET
- ballProgressState: RELOTTERY
- ball: RELOTTERY
- stationNumber: RELOTTERY
- dreamMeter: RESET
powerCycle:
- medalLaunchHigh: CARRY_OVER
- ballGetHigh: CARRY_OVER
- ballProgressState: CARRY_OVER
- ball: UNDER_INVESTIGATION
- stationNumber: UNDER_INVESTIGATION
- dreamMeter: UNDER_INVESTIGATION
carryOver:
- directComparison: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE_CONFIRMED_FIELDS

### advantageousSectionReset
- 設定変更時の有利区間はリセットとする二次解析資料を確認。
- エンディング終了時は有利区間リセット後「神化の剣」を経由して上位ATへ突入する機種固有挙動を必勝本で確認。ただし通常営業中の有利区間リセット恩恵を設定変更時へそのまま転用しない。
- 据え置き時の有利区間契約は高優先資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ONは天井等を引き継ぐ二次資料と整合するが、有利区間そのものの直接文言は十分な再探索後も固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_FOR_SETTING_CHANGE_RESET / ANALYSIS_HIGH_FOR_ENDING_RESET_BEHAVIOR / UNVERIFIED_FOR_CARRY_OVER_AND_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- 最大AT天井が1499G→999Gへ500G短縮。
- 設定変更時は333G/555G/999Gのみを選択し、設定1でも20.3%で555G以下、設定6では33.6%で555G以下となる。
- ボールポイント規定回数を再抽選し、設定1では100個以下が約45%選択される解析があり、100個以下選択時の期待獲得枚数は1000枚超とされる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_CEILING; ANALYSIS_HIGH_SINGLE_PUBLISHER_FOR_BALL_POINT_NUMERIC

### resetPenalties
- 前日から蓄積した天井G、ボール進行状態、高確、ドリームメーター等を設定変更で保持できない点が状態リセット上の不利になり得る。
- 本機固有の固定マイナス期待値、朝一不利専用モード等は検索語・資料系統を変えて再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_FIELDS / NONE_CONFIRMED_FOR_FIXED_PENALTY

### resetDetection
- 設定変更後は最大999Gのため、朝一999Gを超えてAT非当選なら据え置き推測の強材料となる二次解析を確認。
- 333G/555G/999Gの当選だけでは通常AT後にも同天井が選ばれるため、単独で変更確定にはならない。
- 本機固有のリールガックン条件・発生率、開始ステージによる確定判別は、機種名/型式/メーカーと「ガックン」「設定変更」「朝一」「据え置き」を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_FOR_999G_POST_HOC_CLUE / UNVERIFIED_FOR_DIRECT_DETECTION

### numericResetData
resetCeilingDistribution:
- setting1: 999G 79.7% / 555G 16.4% / 333G 3.9% / 555G以下20.3%
- setting2: 999G 77.3% / 555G 17.6% / 333G 5.1% / 555G以下22.7%
- setting3: 999G 73.0% / 555G 18.0% / 333G 9.0% / 555G以下27.0%
- setting4: 999G 68.0% / 555G 22.7% / 333G 9.4% / 555G以下32.1%
- setting5: 999G 67.2% / 555G 23.0% / 333G 9.8% / 555G以下32.8%
- setting6: 999G 66.4% / 555G 23.4% / 333G 10.2% / 555G以下33.6%
resetBallPoint100OrLessSetting1: 約45%
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH

## conflicts
- canonical基本スペックは必勝本系/ジャグラーズネット/HAZUSE/複数解析で一致する、設定1〜6機械割 `97.4/98.8/100.1/104.4/106.5/111.3%`、AT初当り `1/629.3〜1/536.2`、JUDGEMENT `1/337.7〜1/303.4`、ベース約30.7G/50枚、純増約8.2枚/Gを採用。
- PShortはメーカーを「エクサム」、設定別機械割を `97.4/98.5/99.8/102.1/104.5/107.2%` と掲載し、銀座製造/サミーおよび複数高優先資料の数値と大きく競合する。平均化せず `CONFLICT_LOW_PRIORITY_LIKELY_MIXED_OR_ERRONEOUS_DATA` としてcanonical不採用。
- 有利区間リセット時の通常営業中恩恵（エンディング後の上位AT）は設定変更時の朝一恩恵と混同しない。

## missingFields
- 据え置き専用の機種固有直接比較表
- 純電源OFF→ON時のボール/ステーションナンバー/ドリームメーター/ステージ確定契約
- 据え置き/純電断時の有利区間そのものの直接文言
- 本機固有ガックン条件/発生率
- 設定変更時の開始ステージ確定情報

## sources
retrievedAt: 2026-09-15
- 遊技通信/P-WORLD業界ニュース（型式・銀座製・純増・導入予定）: https://news.p-world.co.jp/articles/32992/yugitsushin
- 情報島+ 検定情報（型式・検定番号）: https://p-johojima.jp/new_machine/post-26079/
- HAZUSE（型式・検定番号・導入日・基本性能）: https://hazuse.com/machine/pachislot/SX0129/
- パチビー 基本スペック: https://www.pachibee.jp/machines/index/226040003
- 必勝本 天井&設定変更（設定変更/電源OFF→ON直接比較）: https://hisshobon.com/machineinfo/89512/
- 必勝本 天井ゲーム数抽選（設定別reset天井振り分け）: https://hisshobon.com/machineinfo/102174/
- 必勝本 ボールポイント抽選（設定変更時100個以下約45%）: https://hisshobon.com/machineinfo/102178/
- 必勝本 エンディング（通常営業中の有利区間リセット挙動）: https://hisshobon.com/machineinfo/89522/
- 1geki 天井/朝一: https://1geki.jp/slot/l_bigdream/3/
- パチマガスロマガ 朝一/設定変更（公開範囲は会員制）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/226/kr01.php
- スロパチクエスト（設定変更時有利区間RESET、朝一判別二次支持）: https://www.slopachi-quest.com/article/biggudoriimu-the-golden-pusher-tenjou/
- 6確（基本スペック・導入日）: https://www.kaku6.jp/slot/bigdream/
