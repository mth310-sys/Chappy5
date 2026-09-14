# スマスロ シャーマンキング

recordNo: 1708
machineName: スマスロ シャーマンキング
aliases: Lシャーマンキング / シャーマンキング / SHAMAN KING
manufacturer: エレコ / ユニバーサルエンターテインメント
formalModel: L／SHAMANKING／SS
inspectionCode: 430573
releaseDate: 2025-02-03
generation: 6.5号機 / スマスロ / AT
systemType: 擬似ボーナス + CZ + ゲーム数上乗せ型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- ユニバーサル公式で機種名、メーカー=エレコ、分類=6号機（スマスロ）、発売=2025年2月を確認。
- HAZUSEで型式 `L／SHAMANKING／SS`、検定番号 `430573`、導入開始日2025-02-03、メーカー=エレコを確認。
- パチマガスロマガ、1geki、マルっとWAVEでも導入開始日2025-02-03で一致。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.0%
- setting2: 98.9%
- setting3: 101.2%
- setting4: 105.9%
- setting5: 109.8%
- setting6: 114.3%
initialHitBySetting:
  firstHitCombined:
  - setting1: 1/288.8
  - setting2: 1/280.0
  - setting3: 1/268.4
  - setting4: 1/248.1
  - setting5: 1/227.6
  - setting6: 1/207.1
  atInitialHit:
  - setting1: 1/573.6
  - setting2: 1/553.2
  - setting3: 1/523.0
  - setting4: 1/461.2
  - setting5: 1/412.8
  - setting6: 1/367.3
baseGamesPer50: 約31.0G/50枚
netIncrease:
- シャーマンファイト / 通常AT: 約2.5枚/G
- 超占事略決中: 約5.4枚/G
basicPayout:
- シャーマンボーナス: 30G、純増約2.5枚/G
- エピソードボーナス: 40G、AT突入濃厚
- AT「シャーマンファイト」: 初期40G、純増約2.5枚/G。超占事略決獲得時は約5.4枚/G。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常ゲーム数天井: ボーナス間800G+αでシャーマンボーナス。
- 設定変更後ゲーム数天井: 500G+αへ短縮。
- 憑依ポイント天井: 最大1000ptでCZ以上。
- ATスルー系: 通常はシャーマンファイト予選10スルー後の次回ボーナスでATまたはハオエピソードボーナス。設定変更時は朝一の巫門遁甲ポイント初期加算により実質スルー天井が浅くなる。
- 有利区間リセット契機は設定変更時、AT終了時の一部、エンディング終了時。設定変更以外の有利区間リセット後はグレートスピリッツへ移行するが、設定変更時は除外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PUBLIC_RESET_DISTRIBUTIONS_AND_DIRECT_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- ゲーム数天井: RESET。通常800G+αから500G+αへ短縮。
- 内部状態: 通常へ。
- リプレイ回数: 再抽選。内部0～2回。
- 憑依ポイント: 再抽選。内部100～700pt。
- 小鬼レベル: RESET。
- 巫門遁甲ポイント: 再抽選。最新なな徹では4～9pt獲得。
- 特訓状態 / ボーナス状態: 通常へ。
- 開始ステージ: 私立森羅学園。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 天井、有利区間、内部状態、リプレイ回数、憑依ポイント、巫門遁甲ポイントを引き継ぐ。
- なな徹の設定変更/据え置き比較表で直接確認。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### powerCycleBehavior
- 電源OFF→ONのみ: 天井までのゲーム数を引き継ぐ。
- リプレイ回数、憑依ポイント、小鬼レベル、巫門遁甲ポイント、特訓状態、ボーナス状態を引き継ぐ。
- 有利区間も引き継ぐとする機種別朝一比較資料を確認。
- 開始ステージは私立森羅学園。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### gameCounterReset
- 設定変更: RESET。500G+α天井へ。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 800G+α
resetCeiling: 500G+α
ceilingBenefit: シャーマンボーナス当選
- なな徹、パチ＆スロ必勝本、スロパチクエスト、ちょんぼりすた等で一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 一般的な名称付き朝一専用モードの公開振り分けは主要解析で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一はリプレイ回数・憑依ポイント・巫門遁甲ポイントに専用初期抽選が存在するため、客行動に影響する公開値をnumericResetDataへ保持。
confidence: ANALYSIS_HIGH_FOR_RESET_COUNTERS / PUBLIC_VALUE_NOT_FOUND_FOR_NAMED_MODE

### stateAfterReset
- 設定変更: 通常状態へ。小鬼レベルRESET、特訓状態/ボーナス状態も通常へ。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: 小鬼レベル・特訓状態・ボーナス状態をCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
- 設定変更以外の有利区間リセット後はグレートスピリッツ突入だが、設定変更時は対象外。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### resetBenefits
- ゲーム数天井800G+α → 500G+αへ短縮。
- リプレイ回数を0～2回で初期抽選し、最大2回分進んだ状態から開始。
- 憑依ポイント100～700ptから開始。300pt以上は約39.9%（公開振り分け合計）。
- 巫門遁甲ポイントを4～9pt獲得して開始し、通常よりATスルー天井へ近い状態となる。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### resetPenalties
- 据え置きなら保持される前日天井進行・各内部ポイント・内部状態を設定変更で初期化するため、前日進行を失う可能性がある。
- 設定変更以外の有利区間リセット後に付くグレートスピリッツ恩恵は設定変更時には適用されない。
- 設定変更固有の数値化された不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / PUBLIC_VALUE_NOT_FOUND_FOR_RATE

### resetDetection
- 設定変更後は500G+αがゲーム数天井のため、朝一500G+αを超えてシャーマンボーナス非当選なら据え置き濃厚材料。
- 設定変更/据え置きとも開始ステージは私立森羅学園のため、ステージ単独では判別不可。
- 憑依ポイント・リプレイ回数は内部加算されても見た目上から完全判別できない。
- なな徹のリセット判別欄は現在調査中。
- 本機固有のリールガックン条件・発生率は、`スマスロ シャーマンキング` / `L／SHAMANKING／SS` / `エレコ` / `ユニバーサル` と「ガックン・設定変更・リセット・朝一・据え置き・電源OFF ON」を組み替え、主要解析・旧DB・回顧系を横断したが、高信頼の機種固有条件を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 800G+α
resetCeiling: 500G+α
resetReplayCountDistribution: 0回=50.0% / 1回=37.5% / 2回=12.5%
resetPossessionPointDistribution: 100pt=30.1% / 200pt=30.1% / 300pt=18.8% / 400pt=9.4% / 500pt=7.0% / 600pt=3.1% / 700pt=1.6%
resetPossessionPoint300OrMore: 約39.9%
resetMumontonkouPointDistribution: 4pt=79.3% / 5pt=7.8% / 6pt=7.8% / 7pt=3.1% / 8pt=1.6% / 9pt=0.4%

## conflicts
- 初当り合算設定1は、マルっとWAVE・ちょんぼりすた・複数資料が1/288.8で一致する一方、1gekiオンライン遊技説明は1/288.0と記載。複数一致の1/288.8をcanonicalとし `CONFLICT_FIRST_HIT_SETTING1_288_8_VS_288_0` を保持。
- 初期の一部攻略資料は設定変更時の巫門遁甲ポイントを「2pt以上」と記載するが、後発のなな徹詳細解析は4～9ptの具体的振り分けを公開。2pt以上という粗い下限表現とは論理矛盾しないため数値競合とはせず、詳細公開値4～9ptをcanonical採用。

## missingFields
- 名称付き朝一専用モードの具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更固有の数値化された不利率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- ユニバーサル公式 製品ページ: https://www.universal-777.com/product/slot/shamanking/
- ユニバーサル公式 製品一覧: https://www.universal-777.com/product/slot/index.html
- HAZUSE 型式/検定/導入/基本: https://hazuse.com/machine/pachislot/SX0096/genre/201/
- HAZUSE 設定変更時リプレイ回数等: https://hazuse.com/machine/pachislot/SX0096/genre/209/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/113/kh01.php
- マルっとWAVE 導入日/スペック: https://marutto-w.com/industry_news/20250203-2
- 1geki オンライン遊技説明: https://1geki.jp/slot/l_shamanking/39/
- ちょんぼりすた 基本スペック/天井/AT: https://chonborista.com/slot/universal-slot/226957/
- なな徹 朝一・設定変更/公開初期振り分け/有利区間: https://nana-press.com/kaiseki/machine/898/27189/
- なな徹 狙い目/リセット天井: https://nana-press.com/kaiseki/machine/898/27222/
- パチ＆スロ必勝本 天井&設定変更/電源OFF ON比較: https://p.hisshobon.jp/machine/4437/1/106298
- パチ＆スロ必勝本 機種基本: https://p.hisshobon.jp/vpage/2673/2
- スロパチクエスト 朝一/電源OFF ON/有利区間: https://www.slopachi-quest.com/article/shamanking-tenjou/
- ぽこすろっと 朝一/電源OFF ON/有利区間: https://www.nankaikoya.jp/shamanking-kitaichi/
