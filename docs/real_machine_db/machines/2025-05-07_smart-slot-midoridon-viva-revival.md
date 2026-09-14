# スマスロ 緑ドン VIVA!情熱南米編 REVIVAL

recordNo: 1725
machineName: スマスロ 緑ドン VIVA!情熱南米編 REVIVAL
aliases: スマスロ緑ドン / 緑ドンVIVA REVIVAL / L緑ドン5
manufacturer: ユニバーサルブロス / UNIVERSAL ENTERTAINMENT
formalModel: L／緑ドン5／FY
inspectionCode: 4S1737
releaseDate: 2025-05-07
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス+ゲーム数上乗せ型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- ユニバーサル公式は本機をユニバーサルブロス製、6号機（スマスロ）、2025年5月発売として掲載。
- HAZUSEは型式 `L／緑ドン5／FY`、検定番号 `4S1737`、2025-05-07導入を掲載。
- HAZUSEの2025年5月導入一覧および情報島の過去新台一覧でも2025-05-07導入を確認。
confidence: OFFICIAL / ANALYSIS_DB_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.6%
- setting3: 102.3%
- setting4: 105.8%
- setting5: 111.5%
- setting6: 114.9%
bonusInitialBySetting:
- setting1: 1/275.4
- setting2: 1/274.0
- setting3: 1/267.3
- setting4: 1/251.1
- setting5: 1/229.9
- setting6: 1/223.4
atInitialBySetting:
- setting1: 1/561.0
- setting2: 1/555.7
- setting3: 1/502.0
- setting4: 1/464.4
- setting5: 1/424.3
- setting6: 1/400.8
baseGamesPer50: 約33.2G/50枚
netIncrease: AT「アマゾンゲーム」約2.5枚/G / 擬似ボーナス約4.5枚/G
basicPayout:
- BIG: 25G / 約113枚（純増約4.5枚/G）
- REG: ベルナビ5回まで
- EXTRA BIG: 25G / AT濃厚
- AT「アマゾンゲーム」: 初期20G + XTREME RUSH上乗せ分
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役等から擬似ボーナスを目指し、BIG/REG中やビリーゲットチャレンジ等からAT「アマゾンゲーム」を目指す。
- ボーナス・AT間天井は最大1280G。到達時はEXTRA BIG以上に当選し、33.2%でロングフリーズ発生。
- 設定変更時は天井が800Gへ短縮。
- 通常時の内部状態は通常 / 高確 / 超高確。設定変更時は高確へ50.0%で移行。
- ビリゲ高確を搭載するが、実機完全再現用の詳細移行抽選は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_TABLE_AND_PUBLIC_RESET_NUMERIC_DATA
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井までのゲーム数: RESET。通常最大1280Gから最大800Gへ短縮。
- 内部状態: 再抽選。全設定共通50.0%で高確へ移行。
- ビリゲ高確: RESET。
- 有利区間: RESETとする機種別解析あり。
- 開始ステージ: 必勝本実戦上はリオの街ステージ。
confidence: ANALYSIS_HIGH_FOR_GAMES_STATE_BILLY_HIGH / ANALYSIS_SINGLE_FOR_DIRECT_ADVANTAGEOUS_SECTION

### carryOverBehavior
- 据え置きでは設定変更処理を行わないため、天井進行・内部状態・ビリゲ高確は基本CARRY_OVERとして管理する。
- 主要直接表は「設定変更 vs 電源OFF/ON」であり、据え置き単独列を高信頼資料で固定できなかったため `DIRECT_UNTOUCHED_WORDING_NOT_FOUND_AFTER_RESEARCH` を保持。
confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE_EQUIVALENT_STATE / DIRECT_UNTOUCHED_WORDING_NOT_FOUND

### powerCycleBehavior
- 天井までのゲーム数: CARRY_OVER。
- 内部状態: CARRY_OVER。
- ビリゲ高確: CARRY_OVER。
- ステージ: 必勝本では現在調査中。
- 有利区間: 機種別二次解析ではCARRY_OVER表記があるが、より高優先資料での独立直接記述を固定できず `ANALYSIS_SINGLE`。
confidence: ANALYSIS_HIGH_FOR_GAMES_STATE_BILLY_HIGH / ANALYSIS_SINGLE_FOR_ADVANTAGEOUS_SECTION / UNVERIFIED_FOR_STAGE

### gameCounterReset
- 設定変更: RESETし、天井800Gへ短縮。
- 据え置き: CARRY_OVER扱い（据え置き単独直接表記は未固定）。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: ボーナス・AT間 最大1280G
resetCeiling: ボーナス・AT間 最大800G
ceilingBenefit:
- EXTRA BIG以上当選
- 33.2%でロングフリーズ
- フリーズ時は初回XTREME RUSH高継続 + XRレベル4濃厚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用の通常モード振り分け、または設定変更時モードテーブルとして比較可能な公開値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機で朝一客行動に直接影響する公開値は、内部状態50%高確と短縮天井800Gを優先して管理する。
confidence: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### stateAfterReset
- 設定変更時: 内部状態を再抽選。
- 高確移行率: 50.0%（全設定共通）。
- 電源OFF→ON: 内部状態を引継ぎ。
- 通常/高確/超高確の設定変更時フル振り分けは、高確50%以外を比較可能な形で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / DIRECT_PUBLIC_NUMERIC_DATA

### advantageousSectionReset
- 設定変更時: RESETとする機種別解析を確認。
- 電源OFF→ON: CARRY_OVERとする機種別解析を確認したが、必勝本等の優先度が高い比較表には有利区間の独立項目がないため `ANALYSIS_SINGLE` として採用範囲を制限。
- 通常遊技中の有利区間切断/REVIVAL系恩恵は設定変更朝一の恩恵と混同しない。
confidence: ANALYSIS_SINGLE_MACHINE_SPECIFIC

### resetBenefits
- 天井1280G→800Gへ480G短縮。
- 全設定共通50.0%で高確スタート。
- 天井到達時はEXTRA BIG以上 + 33.2%でフリーズの通常天井恩恵が有効。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更固有の公開された冷遇率・明確な不利益は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一800Gを超えてもボーナス/AT間天井が発動しない場合は据え置き推測の強材料。
- 朝一高確示唆は設定変更の推測材料だが、設定変更時高確は50%であり、前日状態引継ぎでも高確の可能性があるため単独確定には使わない。
- 設定変更時の開始ステージは実戦上リオの街とする資料があるが、電源OFF→ON側が調査中のため単独判別には使用しない。
- 機種名/正式型式/ユニバーサルブロス + 設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/リール始動へ検索語と資料系統を変更して再探索したが、本機固有の設定変更ガックン条件・発生率は固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_800G_CLUE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 1280G
resetCeiling: 800G
ceilingReduction: 480G
resetHighStateRate: 50.0%（全設定共通）
ceilingLongFreezeRate: 33.2%（全設定共通）

## conflicts
- 50枚ベースについて主要解析は約33.2Gで一致。約32.5Gとする単一立ち回り資料も確認したが、主要複数解析・1geki・ちょんぼりすた等の33.2Gをcanonicalとし、`CONFLICT_SINGLE_SOURCE_32.5_VS_MULTI_SOURCE_33.2` として保持。

## missingFields
- 据え置き単独列による直接挙動表: DIRECT_UNTOUCHED_WORDING_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の内部状態フル振り分け（高確50%以外）: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 朝一専用通常モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 電源OFF→ON時の開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 設定変更/電源OFF→ON時の有利区間を高優先資料で独立直接記述した表: HIGH_PRIORITY_DIRECT_WORDING_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- ユニバーサル公式製品ページ: https://www.universal-777.com/product/slot/midoridon_viva_revival/
- HAZUSE 機種DB（型式/検定番号/導入日/純増）: https://hazuse.com/machine/pachislot/4S1737/
- HAZUSE 2025年5月導入一覧: https://hazuse.com/new-machine/202505-2/
- 情報島 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- ちょんぼりすた（性能コア/天井）: https://chonborista.com/slot/universal-slot/231722/
- 1geki 機種ページ（性能コア）: https://1geki.jp/slot/l_mdn/
- 1geki 天井・朝一（800G/高確50%/フリーズ33.2%）: https://1geki.jp/slot/l_mdn/3/
- 必勝本 天井&設定変更（設定変更/電源OFF ON比較）: https://hisshobon.com/machineinfo/86508/
- 必勝本 状態移行抽選（設定変更時高確50%）: https://hisshobon.com/machineinfo/86498/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/86510/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/86513/
- なな徹 リセット狙い: https://nana-press.com/kaiseki/machine/936/29337/
- ぽこすろっと（有利区間の設定変更/電源OFF ON比較・判別補助）: https://www.nankaikoya.jp/midoridon-revival-kitaichi/
- スロパチクエスト（32.5G/50枚差分確認）: https://www.slopachi-quest.com/article/midoridon-vivarevival-tenjou/

## sourceQualityNotes
- 性能コアは1geki・ちょんぼりすた・必勝本・HAZUSE等で複数一致。
- resetBehaviorの天井/内部状態/ビリゲ高確/電源OFF ONは必勝本の機種固有比較表を主軸とし、1geki・なな徹で照合。
- 有利区間の設定変更RESET / 電源OFF ON CARRY_OVERは機種別二次解析には明記があるが、必勝本の比較表に独立欄がないため信頼度をANALYSIS_SINGLEへ抑えた。
