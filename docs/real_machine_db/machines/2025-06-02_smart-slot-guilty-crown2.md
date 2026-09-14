# スマスロ ギルティクラウン2

recordNo: 1733
machineName: スマスロ ギルティクラウン2
aliases: Lギルティクラウン2 / ギルクラ2
manufacturer: アクロス / ユニバーサルエンターテインメント
formalModel: L／ギルティクラウン2／XF
inspectionCode: 430832
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ
systemType: A+AT / リアルボーナス + AT + RTシステム
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- ユニバーサル公式製品ページでメーカー アクロス、ボーナス+AT、6号機スマスロ、発売2025年6月を確認。
- 遊技日本の検定通過記事、長崎県遊技業協同組合転載の業界記事、HAZUSEで型式 `L／ギルティクラウン2／XF` を確認。
- HAZUSEで検定番号 `430832`、導入開始日2025-06-02を確認。1geki、パチマガスロマガ、P-WORLD等も2025-06-02導入で一致。
confidence: OFFICIAL_IDENTITY / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 101.4%
- setting4: 105.4%
- setting5: 110.0%
- setting6: 113.6%
initialHitBySetting:
  bonus:
  - setting1: 1/315.1
  - setting2: 1/312.1
  - setting3: 1/309.1
  - setting4: 1/297.9
  - setting5: 1/284.9
  - setting6: 1/273.1
  at:
  - setting1: 1/596.4
  - setting2: 1/571.6
  - setting3: 1/528.8
  - setting4: 1/447.0
  - setting5: 1/410.5
  - setting6: 1/375.5
  combined:
  - setting1: 1/206.2
  - setting2: 1/201.9
  - setting3: 1/195.1
  - setting4: 1/178.8
  - setting5: 1/168.2
  - setting6: 1/158.1
baseGamesPer50: 約33.2G
netIncrease: AT 約2.0枚/G
basicPayout:
- BIG BONUS: 初期20〜70G、約100枚+α。ベル回数とBIGゲーム数のデュアル管理
- Episode BIG: 約100枚+α、突入時AT濃厚
- AT「ギルティクラウン」: 純増約2.0枚/G、ヴォイドアタックで初期G数決定（最低20G）
- スペシャルAT「四度目の黙示録」: 純増約2.0枚/G、セットループ+G数上乗せ型
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はCZ「ヴォイドチャンス」またはBIG等からATを目指すA+AT機。
- CZ成功期待度は通常VCで約40%。
- BB+AT間で最大1000G消化するとAT濃厚の確定CZへ移行。
- チャンス目入賞時に天井ゲーム数短縮抽選があり、短縮を含む設定1の平均天井到達は約800G。
- VCモードA〜Dが存在し、ベル・VCポイント100pt到達時のCZ当選率等に影響。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_RESET_AND_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、天井、内部状態、レゾナンスポイントをリセット。
- 内部状態は有利区間開始時の恩恵として高確スタート。
- CZモード（VCモード）は再抽選。
- VCポイントは「???/100」表示から開始し、内部初期値をランダム再抽選。
- 開始ステージは天王洲第一高校ステージ。
- RT状態は必勝本で `現在調査中` のため、一般論から補完しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹の設定変更/据え置き比較表では、据え置き時に有利区間・天井・内部状態・レゾナンスポイントを引き継ぐ。
- VCポイントは表示上「???」へ戻るが内部的には引き継ぐ。
- 据え置き時の開始ステージは同資料で `現在調査中`。
- VCモードは必勝本の電源OFF/ON比較では引き継ぎ。純粋な設定据え置きでも有利区間を引き継ぐため、朝一強制再抽選を示す資料は確認されない。
confidence: ANALYSIS_HIGH_FOR_DIRECT_CARRY_OVER_TABLE

### powerCycleBehavior
- 必勝本の設定変更/電源OFF→ON比較表では、純電源OFF→ONは天井までのゲーム数、内部状態、CZモード、レゾナンスポイントを引き継ぐ。
- VCポイント表示は「???」になるが、内部値は引き継ぐ。
- ステージは天王洲第一高校ステージへ移行。
- RT状態は設定変更・純電断とも `現在調査中`。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### gameCounterReset
- 設定変更: BB+AT間の天井ゲーム数をリセット。
- 据え置き: 天井ゲーム数を引き継ぐ。
- 電源OFF→ONのみ: 天井ゲーム数を引き継ぐ。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### ceilingAfterReset
normalMaximumCeiling: BB+AT間 最大1000G消化（別表記では999G+α）
resetMaximumCeiling: 最大1000G消化。設定変更専用の固定短縮天井は確認されない
averageCeilingSetting1: 約800G（チャンス目等の通常天井短縮抽選込み）
ceilingBenefit: AT濃厚の確定CZ「ヴォイドチャンス」
- 約800Gは設定変更専用短縮値ではなく、通常時に行われる天井短縮抽選を含めた設定1平均値として扱う。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時のVCモードは再抽選。
- 1geki / なな徹では、設定変更時はモードC以上が25%以上。そのうち半数以上がモードD。
- 据え置き/純電断ではCZモードを引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更を含む有利区間リセット時は高確からスタート。
- 据え置き/純電断では内部状態を引き継ぐ。
- RT状態の設定変更/純電断契約は `UNVERIFIED_CURRENTLY_UNDER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_STATE / UNVERIFIED_FOR_RT_STATE

### advantageousSectionReset
- なな徹の設定変更/据え置き比較表で、設定変更時は有利区間リセット、据え置き時は引き継ぎを直接確認。
- 有利区間リセットのタイミングとして設定変更時が明記されている。
- 純電源OFF→ONによる有利区間強制リセットを示す機種固有資料は確認されず、設定変更を伴わない朝一は引継ぎ側として扱う。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### resetBenefits
- 有利区間開始時は高確スタート。
- VCモードは設定変更時、モードC以上25%以上、そのうち半数以上がモードD。
- VCポイントは有利区間開始時にランダム初期化され、全設定共通で 0/5/10/15/20/25/30/35/50/55/70/75pt = 3.1/3.1/6.3/6.3/3.1/3.1/6.3/6.3/6.3/6.3/25.0/25.0%。70pt以上が50%。
- 必勝本は設定変更時の初期VCポイント優遇、初期レゾナンスポイントも優遇の可能性を記載。初期レゾナンスポイントの公開振り分けは固定できない。
confidence: ANALYSIS_HIGH_FOR_HIGH_STATE_AND_VC_DATA / UNVERIFIED_NUMERIC_FOR_INITIAL_RESONANCE_POINTS

### resetPenalties
- 設定変更朝一に固有の公開された冷遇率・不利モード・当選率低下は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井ゲーム数は0から再スタートするため、前日ハマリを引き継ぐ据え置き狙いは無効化される。
confidence: NONE_CONFIRMED_FOR_DEDICATED_PENALTY

### resetDetection
- VCポイント表示は設定変更・据え置きとも「???」になるため、表示だけでは変更判別不可。
- なな徹のリセット判別項目は `現在調査中`。
- 本機固有のガックン条件/発生率は、機種名・型式名・メーカー名と `ガックン/リールガックン/設定変更/リセット/朝一` を組み合わせて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井は据え置きで引き継ぐため、前日ゲーム数と当日発動地点の整合は事後的な判別材料になり得るが、確定判別とはしない。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_BEHAVIOR / UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 最大1000G消化
resetMaximumCeiling: 最大1000G消化（設定変更専用固定短縮なし）
averageCeilingSetting1: 約800G（通常短縮抽選込み）
resetVcModeCOrHigher: 25%以上
resetVcModeDShareWithinCOrHigher: 半数以上
initialVcPointDistribution: 0=3.1%, 5=3.1%, 10=6.3%, 15=6.3%, 20=3.1%, 25=3.1%, 30=6.3%, 35=6.3%, 50=6.3%, 55=6.3%, 70=25.0%, 75=25.0%
initialVcPoint70OrHigher: 50.0%
resetInitialState: 高確
resetResonancePointDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 天井表記は資料により `最大1000G消化` と `999G+α` があるが、発動境界の表現差として整合可能であり数値競合とは扱わない。
- 一部二次資料には設定変更時「平均800Gに短縮」と表現するものがあるが、1geki・必勝本・パチマガ等ではチャンス目による通常時の天井短縮抽選を含む設定1平均約800Gとして説明される。canonicalでは `設定変更専用の800G固定/短縮天井ではない` とする。

## missingFields
- RT状態の設定変更/純電断契約: UNVERIFIED_CURRENTLY_UNDER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の初期レゾナンスポイント具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 据え置き時の開始ステージ: UNVERIFIED_CURRENTLY_UNDER_RESEARCH

## sources
取得日: 2026-09-14
- ユニバーサル公式: https://www.universal-777.com/product/slot/guilty_crown2/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-70145/
- 長崎県遊技業協同組合（遊技通信転載）: https://nagasaki-yukyo.or.jp/information/%E5%88%9D%E4%BB%A3%E3%81%AEdna%E3%82%92%E5%8F%97%E3%81%91%E7%B6%99%E3%81%8E%E6%AD%A3%E7%B5%B1%E9%80%B2%E5%8C%96%E3%80%8C%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD-%E3%82%AE%E3%83%AB%E3%83%86%E3%82%A3/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0105/
- 1geki 基本: https://1geki.jp/slot/l_guiltycrown2/
- 1geki 天井/朝一: https://1geki.jp/slot/l_guiltycrown2/3/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/86938/
- 必勝本 設定変更時の恩恵: https://p.hisshobon.jp/machine/4507/1/110048
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/86917/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/962/29848/
- なな徹 VCモード/VCポイント: https://nana-press.com/kaiseki/machine/962/29853/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/22/kh01.php
- パチマガスロマガ BIG: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/22/bn01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10251
- Ativo: https://ativo.jp/2025/04/09/l%E3%82%AE%E3%83%AB%E3%83%86%E3%82%A3%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%B32/

## qaNotes
- 性能コアはCOMPLETE_CORE。
- resetBehaviorは設定変更/据え置き/純電断の直接比較表が得られたため、主要項目を高信頼で固定。
- 設定変更朝一は「専用短縮天井」ではなく、高確・VCモード・VCポイント初期化優遇が主要恩恵。
- RT状態とガックン、初期レゾナンスポイント具体値は十分な再探索後も未固定のため推測していない。
