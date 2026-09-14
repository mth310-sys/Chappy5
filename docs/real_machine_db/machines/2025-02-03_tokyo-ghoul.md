# L 東京喰種

recordNo: 1709
machineName: L 東京喰種
aliases: L東京喰種 / スマスロ 東京喰種 / 東京グール / 東京喰種トーキョーグール
manufacturer: クロスアルファ（スパイキーブランド / フィールズ販売）
formalModel: L東京喰種CT
inspectionCode: 4S1320
releaseDate: 2025-02-03
generation: 6.5号機 / スマスロ / AT
systemType: CZ + 差枚数管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技日本はフィールズの販売発表として、製造元スパイキー、型式名 `L東京喰種CT` と報道。
- HAZUSEは型式 `L東京喰種CT`、検定番号 `4S1320`、導入開始日2025-02-03を掲載。
- 1geki・パチマガスロマガ・マルっとWAVEも2025-02-03導入で一致。
- 現行1gekiには `L東京喰種FT` 等の後発関連型式も併記されるが、本レコードは2025-02-03初期導入の `CT` をcanonicalとし、別型式を混同しない。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 99.0%
- setting3: 101.6%
- setting4: 105.6%
- setting5: 110.3%
- setting6: 114.9%
initialHitBySetting:
  czInitialHit:
  - setting1: 1/262.6
  - setting2: 1/255.6
  - setting3: 1/246.5
  - setting4: 1/233.1
  - setting5: 1/216.4
  - setting6: 1/203.7
  atInitialHit:
  - setting1: 1/394.4
  - setting2: 1/380.5
  - setting3: 1/357.0
  - setting4: 1/325.9
  - setting5: 1/291.2
  - setting6: 1/261.3
baseGamesPer50: 約31G/50枚
netIncrease:
- AT「東京喰種咬」: 約4.0枚/G
- 裏AT: 約5.0枚/G（主要解析1系統で公開。比較補助値）
basicPayout:
- AT「東京喰種咬」: 差枚数管理型、初期約150枚
- AT導入部: 約10G
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- CZ間天井: 液晶ゲーム数最大600G+αでCZ当選。液晶ゲーム数はスイカ等による加算を含む。
- AT間天井: 実ゲーム数1200G+αでAT当選。
- 設定変更後CZ間天井: 朝一専用/特殊モードへ移行し最大200G+αへ短縮。
- 通常時モード: 通常A / 通常B / 通常C / チャンス / 天国準備 / 天国。設定変更時はこれらとは別の朝一専用特殊モード。
- 有利区間リセット契機: 設定変更時、エンディング終了後。設定変更以外のリセット後は有馬貴将ジャッジメントへ移行するが、設定変更時は除外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_RESET_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。設定変更後1G目は非有利区間。
- CZ/AT天井ゲーム数: RESET。
- モード: 朝一専用の特殊モードへ移行。
- 内部状態: RESET / 再抽選。
- 喰ポイント（穢れ）: RESET。
- 赫眼状態: RESET。
- 開始ステージ: 必勝本実戦上「あんていくステージ」。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、天井、内部状態、モード、喰ポイント（穢れ）、赫眼状態を引き継ぐ。
- なな徹の設定変更/据え置き比較表で機種別に直接確認。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### powerCycleBehavior
- 電源OFF→ONのみ: 天井までのゲーム数、モード、内部状態、赫眼状態を引き継ぐ。
- 有利区間も引き継ぐとする機種別朝一資料を確認。
- 喰ポイント（穢れ）の純電源OFF→ON挙動は、据え置き比較では引継ぎだが、設定変更/電源OFF ONを直接並列表記する高信頼表では項目がなく `UNVERIFIED_AFTER_RESEARCH` とする。
- 電源OFF→ON時の開始ステージは主要解析で調査中。
confidence: ANALYSIS_HIGH_FOR_CEILING_MODE_STATE_GANKEN / UNVERIFIED_FOR_KUI_POINT_AND_STAGE

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
- 設定変更後はCZ間天井のみ600G+α→200G+αへ短縮。AT間天井1200G+αはリセットされるが、200Gへの短縮対象ではない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCzCeiling: 600G+α（液晶ゲーム数）
resetCzCeiling: 200G+α（液晶ゲーム数）
normalAtCeiling: 1200G+α（実ゲーム数）
resetAtCeiling: 1200G+αを朝一0Gから再計数（短縮公開なし）
ceilingBenefit:
- CZ間: CZ当選
- AT間: AT当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 必ず朝一専用の特殊モードへ移行。CZ間最大200G+α。
- 据え置き: 前日モードを引き継ぐ。
- 電源OFF→ON: モードを引き継ぐ。
- 朝一特殊モード内部のゾーン振り分け/詳細分布は主要解析で公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_MODE / PUBLIC_VALUE_NOT_FOUND_FOR_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態をRESET/再抽選、赫眼状態RESET。
- 据え置き: 内部状態・赫眼状態をCARRY_OVER。
- 電源OFF→ON: 内部状態・赫眼状態をCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### advantageousSectionReset
- 設定変更: RESET。設定変更後1G目は非有利区間。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
- 設定変更以外の有利区間リセット後は「有馬貴将ジャッジメント」へ移行するが、設定変更時はこの恩恵の対象外。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### resetBenefits
- CZ間天井が600G+α → 200G+αへ短縮。
- 設定変更後1G目など非有利区間中に下段リプレイ成立で「CCGの死神+裏AT」、確定チェリー成立でロングフリーズ濃厚。
- 非有利区間中リプレイ成立時は非有利区間継続。
- なな徹算出では設定1・等価交換の朝一0G時点から期待値+257円。ただし独自シミュレーター値のため性能コアには混入せず、朝一客行動の補助数値としてのみ保持。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT_FOR_CEILING_AND_EXPECTANCY

### resetPenalties
- 据え置きなら保持される前日天井進行、通常モード、内部状態、喰ポイント（穢れ）、赫眼状態を設定変更で初期化するため、前日進行を失う可能性がある。
- 設定変更以外の有利区間リセット後の「有馬貴将ジャッジメント」恩恵は設定変更時には適用されない。
- 設定変更固有の数値化された不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / PUBLIC_VALUE_NOT_FOUND_FOR_RATE

### resetDetection
- 朝一200G+αまでに初回CZ非当選なら据え置き濃厚。
- 設定変更後1G目の下段リプレイから「CCGの死神+裏AT」当選なら設定変更濃厚。
- 必勝本では設定変更後の開始ステージは実戦上「あんていく」、電源OFF→ON側は調査中。ステージ単独の確定判別には使用しない。
- 本機固有のリールガックン条件・発生率は、機種名 / `L東京喰種CT` / スパイキー / クロスアルファ と「ガックン・設定変更・リセット・朝一・据え置き・電源OFF ON」を組み替え、主要解析・旧DB・回顧系を横断したが、高信頼の機種固有条件を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_1G_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCzCeiling: 600G+α
resetCzCeiling: 200G+α
normalAtCeiling: 1200G+α
resetMorningExpectedValueSetting1Equivalent0G: +257円（なな徹独自シミュレーター。補助値）
resetMorningCeilingReachRateAt0G: 51.87%（同上、スイカ加算等を考慮しない算出条件）
resetMorningEffectiveFirstHitAt0G: 1/147（同上）
nonAdvantageousSectionRewards:
- 下段リプレイ: CCGの死神+裏AT
- 確定チェリー: ロングフリーズ濃厚
- リプレイ: 非有利区間継続

## conflicts
- AT初当り設定1は、1geki・ABEMA・マルっとWAVE・パチマガスロマガ等が `1/394.4` で一致する一方、G-net販売概要は `1/394.6`。多数一致の1/394.4をcanonicalとし `CONFLICT_AT_INITIAL_SETTING1_394_4_VS_394_6` を保持。
- メーカー表記は攻略媒体で「スパイキー」「CROSSALPHA」、業界記事で「製造元:スパイキー」、販売資料ではクロスアルファ名義が混在。本DBでは型式・製造法人の混同回避のため `クロスアルファ（スパイキーブランド / フィールズ販売）` と注記し、ブランド/販売名義差を数値CONFLICTとは扱わない。

## missingFields
- 朝一特殊モード内の具体ゾーン/規定G振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の喰ポイント（穢れ）挙動: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更固有の数値化された不利率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 遊技日本 販売発表/型式/製造元/スペック: https://yugi-nippon.com/pachinko-new-machine/post-68966/
- HAZUSE 型式/検定/導入/基本: https://hazuse.com/machine/pachislot/4S1320/
- 1geki 基本スペック/型式一覧: https://1geki.jp/slot/l_tokyoghoul/
- 1geki オンライン遊技説明: https://1geki.jp/slot/l_tokyoghoul/39/
- パチマガスロマガ 機種概要: https://pachimaga.com/free/mach/maker-s/spiky/064055.php
- パチマガスロマガ 天井/朝一/有利区間: https://pachimaga.com/free/article/20250207/056511.php
- マルっとWAVE 導入/スペック: https://marutto-w.com/industry_news/20250203-3
- ABEMA 基本スペック: https://times.abema.tv/articles/-/10162946
- なな徹 設定変更/据え置き/判別/非有利区間: https://nana-press.com/kaiseki/machine/889/27253/
- なな徹 リセット狙い/期待値: https://nana-press.com/kaiseki/machine/889/27251/
- なな徹 モード/朝一専用モード: https://nana-press.com/kaiseki/machine/889/27550/
- なな徹 有利区間リセット: https://nana-press.com/kaiseki/machine/889/27254/
- パチ＆スロ必勝本 天井&設定変更/電源OFF ON比較: https://hisshobon.com/machineinfo/86043/
- パチ＆スロ必勝本 モード/特殊モード: https://hisshobon.com/machineinfo/102121/
- 6確 基本/朝一: https://www.kaku6.jp/slot/tokyoghoul/
- G-net 販売概要/設定1 AT数値差: https://g-net-ps.com/info/s0182-2/

## qaNotes
- 本レコードは実機完全再現ではなく、性能物差し + ホール朝一挙動に必要な粒度へ限定。
- 通常時の全モード移行率・全状態移行率・CZ内部抽選・AT上乗せ詳細は対象外。
- `L東京喰種FT` 等の後発関連型式は2025-02-03初期導入のCTとは分離して扱う。
