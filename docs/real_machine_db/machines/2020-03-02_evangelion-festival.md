# エヴァンゲリオン フェスティバル

No: 1341
machineName: エヴァンゲリオン フェスティバル
machineNameVariants: エヴァフェス / SエヴァンゲリオンフェスティバルR
manufacturer: ビスティ
releaseDate: 2020-03-02
formalModelName: SエヴァンゲリオンフェスティバルR
certificationNumber: 9S1599
generation: 6号機
systemType: AT / 差枚数管理型 / 周期抽選 + CZ

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 101.1% |
| 4 | 104.3% |
| 5 | 108.0% |
| 6 | 110.1% |

- HAZUSE、ちょんぼりすた、SLOT系解析で一致。精密表記では97.49 / 99.00 / 101.05 / 104.26 / 108.04 / 110.08%の資料もあり、丸め差として扱う。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | CZ初当たり | AT初当たり |
|---|---:|---:|
| 1 | 1/386.78 | 1/567.28 |
| 2 | 1/377.62 | 1/530.99 |
| 3 | 1/379.67 | 1/494.83 |
| 4 | 1/326.27 | 1/424.59 |
| 5 | 1/326.97 | 1/371.67 |
| 6 | 1/261.22 | 1/287.75 |

- HAZUSEの設定推測データ。AT初当たりは複数解析で1/567.3→1/287.7として一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約51.5G/50枚。パチ7では51.5〜51.8G/50枚。
- canonical: 約51.5G/50枚
- reliability: ANALYSIS_HIGH

## netIncrease
- AT純増: 約4.5枚/G。
- reliability: OFFICIAL_AND_ANALYSIS_HIGH

## basicPayout
- AT「エヴァンゲリオンフェスティバル」: 差枚数管理型、初期100枚 + エヴァコレ上乗せ。
- CZ「フェスティバルチャレンジ」: AT期待度約50%、20G。
- フェスティバルボーナス: AT中限定の疑似ボーナス、約100枚。
- reliability: OFFICIAL_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は周期抽選。最大7周期消化でCZまたはAT、平均約859G相当。
- AT直撃後 / フルコンプリート後は最大3周期へ短縮。
- 通常時の周期・シナリオ全詳細は物差し用途外として保存しない。
- 有利区間ランプは2BET付近。通常時の朝一変更判別に利用される資料あり。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_STAGE_GAP
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は **天井周期リセット / 内部状態リセット / 有利区間リセット**。
- 設定変更後の液晶開始ステージは **ナイトパレード** とする解析資料あり。
- 設定変更後の初当たりでは **CZ : AT = 1 : 1（AT比率50%）** となる朝一恩恵を複数解析で確認。

### carryOverBehavior
- 据え置き時は設定変更を伴わないため、天井周期・内部状態・有利区間は前日状態を引き継ぐ契約として整理。
- 据え置きのみを独立して詳細記述する一次資料は限定的だが、電源OFF→ON側の公開表と朝一有利区間ランプ判別資料が整合する。

### powerCycleBehavior
- 電源OFF→ONのみでは **天井引き継ぎ / 内部状態引き継ぎ**。
- 電源OFF→ON時の液晶開始ステージは主要解析で「調査中」とされ、機種固有の確定ステージは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ON: **CARRY_OVER**。
- 本機はゲーム数固定天井ではなく周期天井のため、内部周期進行として管理する。

### ceilingAfterReset
- 通常最大7周期、平均約859G相当。
- 設定変更だけで最大周期が3周期へ短縮される契約は確認できない。3周期短縮はAT直撃後 / フルコンプリート後の別条件。

### modeAfterReset
- 設定変更時の全MAPシナリオ振り分けは本ミッション対象外。
- 設定変更後の初当たりCZ/AT比率50:50という公開朝一値のみ保存。
- 電源OFF→ONでは内部状態引継ぎ。

### stateAfterReset
- 設定変更: **RESET**。
- 電源OFF→ON: **CARRY_OVER**。
- 通常時の全内部状態テーブルは保存しない。

### advantageousSectionReset
- 設定変更: **RESET / 非有利区間から再開**。
- 据え置き / 電源OFF→ON: **CARRY_OVER**。
- 朝一、有利区間ランプ消灯なら設定変更濃厚とする当時解析あり。ただしホール側の消灯対策等まで含む絶対確定条件には格上げしない。

### resetBenefits
- **設定変更後の初当たり時、CZとATの比率が1:1（AT比率50%）**。
- 非有利区間中はレア小役でAT直撃抽選。弱チェリー/弱スイカ3.1%、強チェリー/強スイカ/強ベル100%とする解析値あり。ただしこれは「設定変更専用値」ではなく非有利区間共通抽選なので定義分離。

### resetPenalties
- 前日の周期進行・内部状態・有利区間を消去するため、据え置き時の宵越し進行は失われる。
- その他の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- **朝一の有利区間ランプ消灯 → 設定変更濃厚** とする当時解析あり。
- 本機固有のガックン発生条件/率、朝一出目による確定判別は検索語・資料系統を変えても十分な直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時ナイトパレード開始の資料はあるが、電源OFF→ON時ステージが調査中のため、ステージ単独の絶対判別にはしない。

### numericResetData / publicMorningNumbers
- 設定変更後・初当たりAT比率: **50%**（CZ:AT = 1:1）。
- 通常最大天井: **7周期 / 平均約859G**。
- AT直撃後 / フルコンプリート後: **最大3周期**（設定変更専用短縮ではない）。
- 非有利区間中AT直撃: 弱チェリー/弱スイカ **3.1%**、強チェリー/強スイカ/強ベル **100%**（非有利区間共通値）。

## resetBehavior 再探索メモ
2026-09-11に `エヴァンゲリオン フェスティバル / エヴァフェス / SエヴァンゲリオンフェスティバルR / ビスティ / 9S1599` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / 内部状態 / 有利区間 / 有利区間ランプ / ガックン / 変更判別` を組み替え、SANKYO公式アーカイブ、岡山県公安委員会検定資料、P-WORLD、HAZUSE、1geki、ちょんぼりすた、パチ7、SLOT HACK、当時攻略系を横断。設定変更時の天井・内部状態リセット、電断時引継ぎ、朝一ナイトパレード、初当たりAT比率50%、有利区間ランプ判別まで固定。純電断時の液晶開始ステージ、本機固有ガックン条件/率は十分な直接資料を固定できず推測補完していない。

## conflicts
- 出玉率は小数第1位表記と小数第2位精密表記があるが、丸め差として扱う。
- 1gekiの初期天井/設定変更ページでは設定変更・電断の各項目が「調査中」のまま。一方、後発解析サイトでは設定変更時リセット / 電断時引継ぎ、ナイトパレード開始、有利区間ランプ判別を掲載。時間差による解析更新と判断し、後発複数一致をcanonical、1gekiの「当時未判明」を履歴注記とする。

## sources
取得日: 2026-09-11

1. SANKYOオンライン博物館 — エヴァンゲリオン フェスティバル
   - https://www.sankyo-fever.jp/collection/904/
   - 2020年3月、ビスティ、6号機シリーズ、AT純増約4.5枚/G、初期100枚+αを確認。
   - reliability: OFFICIAL
2. 岡山県公安委員会告示第7号（2020-01-20）
   - https://www.pref.okayama.jp/uploaded/life/1015492_9802691_misc.pdf
   - 型式 `SエヴァンゲリオンフェスティバルR`、製造業者ビスティ、型式試験番号9S159900、検定番号9S1599を確認。
   - reliability: OFFICIAL_PUBLIC
3. HAZUSE DATA
   - https://data.hazuse.com/?genre=208&machine_code=9S1599
   - 2020-03-02導入、CZ/AT設定別初当たりを確認。
   - reliability: ANALYSIS_HIGH
4. ちょんぼりすた
   - https://chonborista.com/slot/bisty-slot/103672/
   - 設定別AT初当たり/出玉率、51.5G/50枚、純増4.5枚/G、7周期平均859G、設定変更時リセット・電断時引継ぎ、ナイトパレード、初当たりCZ:AT=1:1、有利区間ランプ判別を確認。
   - reliability: ANALYSIS_HIGH
5. 1geki 天井/設定変更
   - https://1geki.jp/slot/s_eva_fes/3/
   - 最大7周期・平均859G、設定変更時初当たりAT比率50%、AT直撃/フルコンプリート後最大3周期。当時ページ上の変更/電断詳細は調査中。
   - reliability: ANALYSIS_HIGH
6. パチ7 スペック
   - https://pachiseven.jp/machines/5992/cutout/2
   - 2020-03-02、51.5〜51.8G/50枚、周期/CZ/AT構造を確認。
   - reliability: ANALYSIS_HIGH
7. SLOT HACK
   - https://slothack.net/matome/5097/
   - AT純増約4.5枚/G、差枚数管理、初期100枚+α、フェスティバルボーナス約100枚を確認。
   - reliability: ANALYSIS_HIGH

## missingFields
- 純電源OFF→ON時の液晶開始ステージ
- 本機固有のガックン発生条件/発生率
- 朝一出目による確定的変更判別

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_STAGE_GAP
