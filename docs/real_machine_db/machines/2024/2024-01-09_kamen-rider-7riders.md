# L 仮面ライダー 7RIDERS

recordNo: 1619
machineName: L 仮面ライダー 7RIDERS
aliases: スマスロ 仮面ライダー 7RIDERS / 仮面ライダー セブンライダーズ
manufacturer: SUN SUN SUN（京楽産業.グループ / 販売: 京楽産業.）
formalModel: Lパチスロ仮面ライダーUJA
inspectionCode: 330233
releaseDate: 2024-01-09
generation: 6.5号機 / スマスロ
systemType: AT / 周期抽選 + ゲーム数天井 / セット継続型AT
settings: 1 / 2 / 4 / 5 / 6 / L
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 京楽公式が2024-01-09より全国導入開始と明記。
- グリーンべると/遊技日本系業界記事も2024-01-09導入予定で一致。
confidence: OFFICIAL

## modelEvidence
- 業界検定記事で製造元SUN SUN SUN、型式 `Lパチスロ仮面ライダーUJA` を確認。
- HAZUSEは検定番号 `330233`、型式 `L パチスロ仮面ライダーUJA` を掲載。
confidence: INDUSTRY_FOR_FORMAL_MODEL / ANALYSIS_SINGLE_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- 1: 97.6%
- 2: 98.5%
- 4: 104.0%
- 5: 107.3%
- 6: 111.9%
- L: 公開固定値未確認
initialHitBySetting:
- setting1: AT 1/297.7
- setting2: AT 1/291.4
- setting4: AT 1/253.2
- setting5: AT 1/233.6
- setting6: AT 1/225.2
baseGamesPer50: 約34G/50枚
netIncrease: AT「BATTLE RUSH」約2.6枚/G
basicPayout:
- AT初回セット: 20G固定
- 2セット目以降: 平均40G
- 初戦除外のトータル継続率: 約77%
- 上位AT「BATTLE RUSH極」: 継続率約84%
confidence: OFFICIAL_FOR_AT_SYSTEM / ANALYSIS_HIGH_FOR_NUMERIC_CORE

## modeSpecificMinimumData
- 通常時は周期抽選でライダーを集め、CZ「潜入ZONE」経由などからATを目指す。
- 通常ゲーム数天井: 999G+αでAT。
- 周期天井: 7周期目到達後、周期終了時にAT。
- AT初戦敗北は最大5連続で、6回目AT開始時はVストック濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PARTIAL_POWER_CYCLE_AND_UNVERIFIED_GACKUN
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- ゲーム数天井RESET、周期天井RESET、撃破ポイントRESET。
- ゲーム数天井は499G+α、周期天井は3周期へ短縮。
- 設定変更など有利区間移行時は成立役に応じて初期「怒りポイント」を抽選。
- リセット後は休憩室ステージから開始。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- ゲーム数天井、周期天井、撃破ポイントをCARRY_OVER。
- AT初戦敗北連続回数などその他の内部カウンタについて、今回の主要資料では設定変更/据え置き契約を網羅的に固定できないため個別UNVERIFIED。
confidence: ANALYSIS_HIGH_FOR_LISTED_ITEMS

### powerCycleBehavior
- 純電源OFF→ON後は休憩室ステージから開始。
- 撃破ポイントは電断前をCARRY_OVERし、エリア表示時に前日累積分を加算。
- 有利区間内の持ちメダル数も電断前をCARRY_OVER。
- ゲーム数天井/周期天井については設定変更を伴わない電断で引き継ぐとする解析があるが、今回直接比較表で固定できた主要項目は撃破ポイントと有利区間内持ちメダル数。したがって詳細内部カウンタは `PARTIAL_DIRECT_EVIDENCE` とする。
confidence: ANALYSIS_HIGH_FOR_DIRECTLY_LISTED_ITEMS

### gameCounterReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 設定変更時ゲーム数天井は499G+α、周期天井は3周期。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 通常ゲーム数天井999G+α → 設定変更後499G+α。
- 通常周期天井7周期 → 設定変更後3周期。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機は周期抽選型。設定変更後の「朝一専用モード」名称・モード振り分けとして比較可能な公開固定値は今回確認できず。
- 設定変更後は周期天井3周期へ短縮。
confidence: ANALYSIS_HIGH_FOR_CEILING / UNVERIFIED_FOR_MODE_DISTRIBUTION

### stateAfterReset
- 撃破ポイントは設定変更でRESET、据え置き/純電断でCARRY_OVER。
- 設定変更など有利区間移行時は初期怒りポイント抽選を実施。
- その他の内部高確/状態について設定変更専用振り分けは今回高信頼資料で固定できずUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_POINTS

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON時は有利区間内持ちメダル数を引き継ぐことを機種固有資料で確認しており、設定変更を伴わない電断で有利区間情報が維持される挙動と整合。
- 設定変更以外ではENDING BONUS終了や条件を満たしたAT終了時等にも有利区間RESETが発生。
confidence: ANALYSIS_HIGH

### resetBenefits
- ゲーム数天井を999G+αから499G+αへ短縮。
- 周期天井を7周期から3周期へ短縮。
- 有利区間移行時の初期怒りポイント抽選あり。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更時以外の有利区間RESET後に付与される「速攻モード極」は、設定変更時には付与されないとする解析あり。
- 据え置きで保持される撃破ポイント等は設定変更で失われるため、前日状況次第ではリセットが一律有利とは限らない。
confidence: ANALYSIS_HIGH

### resetDetection
- リセット後・純電断後とも休憩室ステージ開始のため、開始ステージ単独では変更判別困難。
- 朝一499G+α超または3周期超までAT非当選なら、設定変更時短縮天井と整合しないため据え置き濃厚材料。
- 撃破ポイントは純電断で引き継ぎ、エリア表示時に前日累積分が加算されるため、前日状況が分かる場合は据え置き推測材料となり得る。
- 本機固有のリールガックン条件・発生率は主要解析/業界/旧DBを再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAME_BEHAVIOR / UNVERIFIED_FOR_GACKUN

### numericResetData
- 設定変更後ゲーム数天井: 499G+α。
- 設定変更後周期天井: 3周期。
- 有利区間移行時初期怒りポイント（その他成立時）: 0pt 8.0% / 10pt 12.0% / 30pt 20.0% / 50pt 21.0% / 70pt 21.0% / 90pt 18.0%。
- 弱レア役成立時: 0pt 4.0% / 10pt 10.0% / 30pt 12.0% / 50pt 12.0% / 70pt 12.0% / 90pt 49.2% / 95pt 0.4% / 100pt 0.4%。
- 強レア役成立時: 90pt 94.6% / 95pt 5.0% / 100pt 0.4%。
- 中段チェリー成立時: 100pt 100%。

### publicMorningNumbers
- 通常ゲーム数天井999G+α → 設定変更後499G+α。
- 通常周期天井7周期 → 設定変更後3周期。
- 初期怒りポイント振り分けはnumericResetData参照。

## conflicts
- 検定番号 `330233` はHAZUSE掲載値。型式は業界検定記事で確認できるが、番号そのものの公的原典再照合は今回未完了。
- 純電源OFF→ONについて、撃破ポイントと有利区間内持ちメダル数の引継ぎは直接確認できる一方、全内部カウンタを網羅する同一資料は確認できず、一般論で補完しない。

## sources
取得日: 2026-09-13
1. 京楽公式 NEWS — 2024-01-09全国導入開始 / AT純増約2.6枚/G / 初回20G・平均40G / 継続約77%
   - https://www.kyoraku.co.jp/news/detail/725
   - reliability: OFFICIAL
2. 遊技日本 / P-WORLD業界ニュース — SUN SUN SUN製造 / 型式Lパチスロ仮面ライダーUJA / 設定別AT確率
   - https://news.p-world.co.jp/articles/26285/nippon
   - reliability: INDUSTRY
3. グリーンべると — 検定通過型式Lパチスロ仮面ライダーUJA / SUN SUN SUN
   - https://web-greenbelt.jp/post-75296/
   - reliability: INDUSTRY
4. なな徹 — AT確率/機械割/約34G/50枚
   - https://nana-press.com/kaiseki/machine/654/18559/
   - reliability: ANALYSIS_HIGH
5. なな徹 — 朝一/設定変更/据え置き/有利区間/天井短縮/怒りポイント
   - https://nana-press.com/kaiseki/machine/654/18621/
   - reliability: ANALYSIS_HIGH
6. 一撃 — 天井/設定変更/電源OFF→ON/撃破ポイント/有利区間内持ちメダル数
   - https://1geki.jp/slot/l_kr7riders/3/
   - reliability: ANALYSIS_HIGH
7. HAZUSE — 型式/検定番号/基本スペック
   - https://hazuse.com/hd/sx0063/
   - reliability: ANALYSIS_HIGH
8. パチ＆スロ必勝本 — 設定別AT初当たり/機械割/導入日
   - https://p.hisshobon.jp/machine/4227/1/99961
   - reliability: ANALYSIS_HIGH

## missingFields
- 公的検定原典による検定番号330233の一次再照合
- 純電源OFF→ON時の全内部カウンタ契約
- 本機固有ガックン条件/発生率
- 設定変更専用のモード振り分け公開値
