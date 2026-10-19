# OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」

recordNo: 1302
machineName: OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」
machineNameVariants: オーバーロード / オバロ / アインズ・ウール・ゴウン絶対支配者光臨
manufacturer: オーイズミ
formalModel: SパチスロオーバーロードYX
certificationNumber: 9S0570
releaseDate: 2019-08-19
generation: 6号機
systemType: AT / 疑似ボーナス経由バトルAT

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.8% |
| 2 | 99.4% |
| 3 | 101.4% |
| 4 | 103.9% |
| 5 | 106.3% |
| 6 | 110.1% |

一撃・HAZUSE・複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG合算 | AT初当たり |
|---|---:|---:|
| 1 | 1/265.1 | 1/737.6 |
| 2 | 1/239.2 | 1/611.9 |
| 3 | 1/227.9 | 1/639.6 |
| 4 | 1/201.0 | 1/499.5 |
| 5 | 1/198.4 | 1/535.2 |
| 6 | 1/156.2 | 1/352.2 |

赤BIG / 白BIGの個別値も公開されているが、物差し本体では主要初当たりとして合算とAT初当たりを採用する。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約50G/50枚。

一撃、HAZUSE、複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナス / ATとも約2.8枚/G。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG BONUS: 30G+α、解析上の獲得枚数目安 約100枚。
- 赤7BIGからのAT期待度: 約30%。
- 白7BIGからのAT期待度: 約60%。
- AT「OVERLORD」: 初回52G+αを起点とするバトル継続型AT。

## modeSpecificMinimumData

- 通常時はモードA / モードBの2種。
- 末尾86Gの「オバロゾーン」とレア役契機からCZ・ボーナス・ATを目指す。
- 最大天井: 通常時786G+α。
- 天井到達時: BIGまたはAT、振り分け1:1。
- 有利区間管理の6号機AT。
- 通常時の全モード移行率・全ゾーン振り分けは完全再現用詳細のため物差し本体には収録しない。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_ADVANTAGEOUS_SECTION_SOURCE_LIMIT
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 当時解析2系統以上で **天井G数RESET / 内部状態RESET / モード再抽選** が一致。
- 設定変更後の液晶開始ステージは執務室。
- HAZUSEでは内部状態を「低確スタート」と明記。

### carryOverBehavior

- 「据え置き」を設定変更なしの電源入切と独立して直接対照した機種固有資料は十分確認できず `UNVERIFIED_AS_DISTINCT_CONDITION`。
- ただし純電源OFF→ONについては天井・内部状態・モード引継ぎが複数資料で一致。

### powerCycleBehavior

- 設定変更なしの電源OFF→ON: **天井G数CARRY_OVER / 内部状態CARRY_OVER / モードCARRY_OVER**。
- 液晶ステージは執務室へ。
- HAZUSEでは1Kチャンス / 警戒モード / ボーナス / AT中の電断復帰について「引き継ぐ」と記載。

### gameCounterReset

- 設定変更: RESET。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset

- 通常最大天井786G+α。
- 設定変更専用の短縮天井は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井到達時はBIG / ATが50%ずつ。

### modeAfterReset

- 設定変更: モード再抽選。
- 純電源OFF→ON: モード引継ぎ。
- BIG/AT終了後の通常モードA/B振り分けは公開されているが、**設定変更時専用振り分け**と断定できる直接資料ではないため、朝一専用数値として流用しない。

### stateAfterReset

- 設定変更: 内部状態RESET、HAZUSEでは低確スタート。
- 純電源OFF→ON: 内部状態引継ぎ。

### advantageousSectionReset

- 6号機有利区間対象機。
- 当時攻略では「通常時は有利区間ランプが消灯しているタイプ」とされ、据え置きでも朝一ランプ消灯とされるため、**有利区間ランプ単独では設定変更/据え置き判別に使えない**。
- 設定変更 / 純電断それぞれの有利区間内部状態を直接対照した高信頼な機種固有表は再探索後も固定できず `APPLICABLE_BUT_DIRECT_SECTION_RESET_CONTRACT_PARTIAL`。6号機一般論から補完しない。

### resetBenefits

- 当時攻略資料では **リセット固有の追加恩恵「特になし」**。
- 天井短縮、朝一専用高確、設定変更専用優遇モード率は確認できず。

### resetPenalties

- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 通常時有利区間ランプ消灯型のため、朝一ランプでは変更判別困難。
- 当時攻略の動画確認では「リセットされていてもガックンしないのが濃厚」とされ、ガックンを変更確定条件として扱わない。
- レア役を引いておらず、かつ本来のゾーン外でCZ/ATへ当選した場合は据え置き推測材料とする攻略情報がある。ただし `ANALYSIS_SINGLE_CLUE` であり確定契約ではない。

### numericResetData

- 設定変更専用モード振り分け、朝一特定G以内当選率、リセット恩恵発生率の比較可能な確定数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- 設定変更専用の公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常の086Gゾーンや通常モード振り分けは朝一専用値ではないため混同しない。

### resetBehavior 再探索メモ

2026-09-11に再監査。

「OVER-SLOT AINZ OOAL GOWN絶対支配者光臨 / オーバーロード / オバロ / SパチスロオーバーロードYX / オーイズミ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / 有利区間 / 有利区間ランプ / ガックン」を組み合わせ、一撃、HAZUSE、P-WORLD、当時攻略、古い解析DBを横断した。

天井・内部状態・モードについては設定変更と純電断の差を複数当時資料で固定できた。一方、有利区間そのものの設定変更/純電断時内部契約、設定変更専用モード振り分け、確定的ガックン率は機種固有の直接資料を固定できなかったため推測補完しない。

## qualityNotes / conflicts

- 正式型式 `SパチスロオーバーロードYX`、検定番号 `9S0570`、導入開始2019-08-19はHAZUSE機種DBで直接確認。
- 日刊スポーツ2019-08-09導入カレンダーでも2019-08-19パチスロ群に本機を掲載し、花娘・どき！すろと同日導入で一致。
- 機種名には「絶対支配者光臨」と「絶対支配者降臨」の表記揺れが二次資料にある。HAZUSE・一撃・日刊スポーツの `光臨` をcanonicalとして採用。
- 出玉率、BIG合算、AT初当たり、純増、ベース、天井は複数解析で一致し主要CONFLICTなし。

## sources

取得日: 2026-09-11

1. 日刊スポーツ — パチンコ・パチスロ導入カレンダー 2019-08-09
   - https://www.nikkansports.com/amusement/pachislot/news/201908090000270.html
   - 2019-08-19導入群に本機を掲載。
   - reliability: INDUSTRY
2. HAZUSE — OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」
   - https://hazuse.com/machine/pachislot/9S0570/
   - 型式、検定番号、導入日、性能、設定変更/電源OFF→ON、天井、内部状態、モードを確認。
   - reliability: ANALYSIS_HIGH
3. 一撃 — 機種概要・スペック
   - https://1geki.jp/slot/s_overslot/
   - 設定別BIG合算/AT初当たり/出玉率、BIG約100枚、純増約2.8枚/G、導入日を確認。
   - reliability: ANALYSIS_HIGH
4. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_overslot/3/
   - 786G+α天井、BIG/AT 50:50、設定変更時RESET、純電断時CARRY_OVERを確認。
   - reliability: ANALYSIS_HIGH
5. P-WORLD — 機種DB
   - https://www.p-world.co.jp/machine/database/8998
   - 6号機AT、純増約2.8枚/G、BIG30G+α、AT初回52G+α、天井786G+前兆を照合。
   - reliability: INDUSTRY_DATABASE
6. すろぱちくえすと — 天井・朝一リセット
   - https://www.slopachi-quest.com/article/overlord-tennjou/
   - リセット恩恵なし、有利区間ランプ通常時消灯型、ガックン・据え置き推測材料を確認。
   - reliability: ANALYSIS_SINGLE_FOR_DETECTION

## missingFields

- setting-change vs pure-power-cycle advantageous-section internal contract: UNVERIFIED_AFTER_RESEARCH
- setting-change-only mode distribution: NONE_CONFIRMED_AFTER_RESEARCH
- machine-specific confirmed gakkun probability: NONE_CONFIRMED_AFTER_RESEARCH
- public numeric morning-reset values: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- 機種名の漢字表記に `光臨` / `降臨` の揺れがある。高信頼3系統で一致する `光臨` をcanonicalとし、`降臨` はvariant扱い。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_ADVANTAGEOUS_SECTION_SOURCE_LIMIT
