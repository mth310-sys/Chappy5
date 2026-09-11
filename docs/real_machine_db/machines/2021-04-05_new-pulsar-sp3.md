# ニューパルサーSPⅢ

No: 1402
machineName: ニューパルサーSPⅢ
machineNameVariants: ニューパルサーSPⅢ / ニューパルサーSP3 / ニューパルSP3 / NEW PULSAR SP3 / SニューパルサーSP3CC
manufacturer: 山佐（販売: 山佐ネクスト）
releaseDate: 2021-04-05
formalModelName: SニューパルサーSP3CC
certificationNumber: 0S0179

generation: 6号機
systemType: ノーマル / 純ボーナス / 5段階設定（1・2・3・4・6）

## identity / release
- HAZUSEで型式 `SニューパルサーSP3CC`、検定番号 `0S0179`、メーカー山佐、導入開始日2021-04-05を確認。
- Amusement Japanは山佐ネクストが2021-01-21から展示会を開催し、4月上旬ホール導入予定と報道。1geki・イチカツ・必勝本系も2021-04-05導入で一致。
- 山佐ネクストは販売主体、製造元は山佐とする中古実機資料もあり、本DBのcanonical manufacturerは山佐、販売注記を山佐ネクストとする。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.3% |
| 3 | 100.0% |
| 4 | 104.1% |
| 6 | 108.1% |
- HAZUSE、1geki、イチカツ、必勝本系、2-9伝説で一致。
- 設定5は非搭載。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/295.2 | 1/428.3 | 1/174.8 |
| 2 | 1/293.9 | 1/414.8 | 1/172.0 |
| 3 | 1/292.6 | 1/385.5 | 1/166.3 |
| 4 | 1/280.1 | 1/306.2 | 1/146.3 |
| 6 | 1/267.5 | 1/267.5 | 1/133.7 |
- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約42G/50枚。
- HAZUSE系解析、1geki、イチカツ、なな徹、2-9伝説等で照合。
- reliability: ANALYSIS_HIGH

## netIncrease
- NOT_APPLICABLE（AT/ART/RTによる純増管理なしの純ボーナスタイプ）。

## basicPayout
- BIG BONUS: 最大259枚。
- REGULAR BONUS: 104枚固定。
- HAZUSE、1geki、Amusement Japan、ちょんぼりすた等で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はプレイヤー任意選択の「ノーマル / フラッシュ / ドット」のトリプルモードを搭載するが、これは出玉抽選上の内部モードではなく演出選択モード。
- 天井・ゾーン非搭載。
- 約1300通り以上のリーチ目、違和感演出等を搭載するが、物差し用途外のため詳細収集しない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_APPLICABILITY_WITH_UNVERIFIED_UI_POWER_STATE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- ノーマル純ボーナス機で、ゲーム数天井・AT/ART内部モード・内部状態・有利区間は非搭載/非該当。
- 設定変更時に朝一専用の出玉抽選状態へ移行する公開契約は確認されない。
- 攻略資料の設定変更欄は「-」または天井/内部モード/内部状態を非該当表記としている。
- reliability: ANALYSIS_HIGH（非該当性）

### carryOverBehavior
- 据え置き時に引き継ぐゲーム数天井・AT/ARTモード・有利区間は存在しないため、ホール経営用resetBehaviorとしては `NOT_APPLICABLE`。
- 演出選択モードの保持/初期化は出玉性能に影響しないUI状態であり、高信頼の本機固有公開契約を固定できず `UNVERIFIED_AFTER_RESEARCH_UI_ONLY`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH_UI_ONLY

### powerCycleBehavior
- 純電源OFF→ONで引き継ぎ対象となる天井G・AT/ART内部モード・有利区間は非搭載のため `NOT_APPLICABLE`。
- プレイヤー選択の演出モードが電断後に保持されるか初期化されるかは、機種名・型式名・電源OFF→ON・設定変更・モード保持等で再探索したが高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH_UI_ONLY`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH_UI_ONLY

### gameCounterReset
- 天井ゲーム数そのものが非搭載のため、設定変更/据え置き/純電断の天井Gリセット・引継ぎは `NOT_APPLICABLE`。
- ホールの外部データカウンター表示のクリア運用は店舗設備側であり、本機内部resetBehaviorとは分離する。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 天井非搭載。短縮天井も `NOT_APPLICABLE`。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 出玉抽選上のAT/ARTモード、天国/通常等の内部モードは非搭載のため `NOT_APPLICABLE`。
- ノーマル/フラッシュ/ドットはプレイヤー選択の演出モードであり、リセット恩恵として扱わない。
- 電断/設定変更後の演出モード選択状態そのものは `UNVERIFIED_AFTER_RESEARCH_UI_ONLY`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH_UI_ONLY

### stateAfterReset
- 高確/低確等の出玉抽選用内部状態は非搭載として `NOT_APPLICABLE`。
- ボーナス成立済み状態など完全再現用の特殊ケースは本DBの収集粒度外。設定変更/純電断時の成立済みボーナスフラグ契約を推測補完しない。
- reliability: ANALYSIS_HIGH

### advantageousSectionReset
- ノーマル純ボーナスタイプで有利区間を使用しないため `NOT_APPLICABLE`。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更専用の短縮天井、専用モード優遇、朝一CZ/AT優遇等は構造上非該当。
- 朝一専用の定量的出玉恩恵は、設定変更/リセット/朝一/型式名を変えて再探索しても確認できず `NO_PUBLIC_RESET_SPECIFIC_BENEFIT_FOUND_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED

### resetPenalties
- 設定変更専用の定量的不利要素は公開資料から確認できず `NO_PUBLIC_RESET_SPECIFIC_PENALTY_FOUND_AFTER_RESEARCH`。

### resetDetection
- 本機固有の「設定変更時1G目のリールガックンが発生する/しない」「発生率」「対策条件」を直接固定できる高信頼資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機には通常時の有利区間ランプによる変更判別は存在しない（有利区間非該当）。
- 朝一の天井G・内部モード差による判別も非該当。
- reliability: ANALYSIS_HIGH（非該当性） / UNVERIFIED_AFTER_RESEARCH（ガックン）

### numericResetData
- 固定短縮天井: `NOT_APPLICABLE`。
- 設定変更専用モード振り分け: `NOT_APPLICABLE`。
- 朝一特定G以内AT/CZ当選率: `NOT_APPLICABLE`。
- 設定変更専用ボーナス当選率: `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン発生率: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- なし。性能コア主要値は複数資料で一致。
- メーカー表記は「山佐」と「山佐ネクスト」が併記される資料があるが、製造元山佐・販売山佐ネクストという役割差として処理し、数値競合とはしない。

## missingFields
- 純電源OFF→ON / 設定変更後のプレイヤー選択演出モード保持・初期化: UNVERIFIED_AFTER_RESEARCH_UI_ONLY（出玉性能影響なし）
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の公開朝一数値: NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-12

1. HAZUSE「ニューパルサーSPⅢ」
   - https://hazuse.com/machine/pachislot/0S0179/
   - 型式、検定番号、導入日、メーカー、6号機ノーマル、設定別BIG/REG/合算、機械割、天井非搭載、ボーナス獲得性能。
   - reliability: ANALYSIS_HIGH
2. Amusement Japan「ニューパルが6号機で登場」2021-01-28
   - https://amusement-japan.co.jp/article/detail/10002121/
   - 山佐ネクスト展示会、4月上旬導入予定、BIG最大259枚/REG104枚、出玉率・合算レンジ、トリプルモード。
   - reliability: INDUSTRY
3. 1geki「ニューパルサーSPⅢ」
   - https://1geki.jp/slot/s_newpulsar_sp3/
   - 2021-04-05導入、設定別合算/出玉率、BIG最大259枚、REG104枚、基本仕様。
   - reliability: ANALYSIS_HIGH
4. ちょんぼりすた「ニューパルサーSP3」
   - https://chonborista.com/slot/yamasa-slot/129884/
   - 導入日、ノーマルタイプ、設定別BIG/REG/機械割、約42G/50枚、天井非搭載、ボーナス枚数。
   - reliability: ANALYSIS_HIGH
5. イチカツ「2021年スロット新台一覧 / ニューパルサーSP3」
   - https://ichikatsu.com/newslot/
   - 2021-04-05導入、設定別BIG/REG/合算/機械割、約42G/50枚、5段階設定。
   - reliability: ANALYSIS_HIGH
6. なな徹「ニューパルサーSPⅢ 小役確率」
   - https://nana-press.com/kaiseki/machine/116/3382/
   - 約42G/50枚。
   - reliability: ANALYSIS_HIGH
7. 2-9伝説「ニューパルサーSP3」
   - https://29den.com/newpulsarsp3/
   - 2021-04-05導入、約42G/50枚、設定別BIG/REG/機械割。
   - reliability: ANALYSIS_HIGH
8. けんのスロットシミュレーション「ニューパルサーSP3 解析情報」
   - https://kenslo65536.com/kaiseki/new-pulsar-sp3.html
   - 天井なし、設定変更欄「-」、約42G/50枚、設定別ボーナス/出玉率。
   - reliability: ANALYSIS_SINGLE
9. pachinow「ニューパルサーSP3 設定6判別」
   - https://www.pachinow.jp/s5/newpulsarsp3-index.php
   - 朝一設定変更表で天井G/内部モード/内部状態が非該当表記、天井なし、導入日。
   - reliability: ANALYSIS_SINGLE
10. 中古実機流通資料「ニューパルサーSPIII」
   - https://item.rakuten.co.jp/auc-nakaiti/newpulsar_sp3cc/
   - 型式SニューパルサーSP3CC、山佐ネクスト（製造元: 山佐）。メーカー役割確認の補助資料。
   - reliability: SECONDARY

## researchNotes
- 欠損再探索語: `ニューパルサーSPⅢ 設定変更 電源OFF`, `ニューパルサーSP3 リセット ガックン`, `SニューパルサーSP3CC 型式 検定番号`, `ニューパルサーSP3 朝一 設定変更`, `ニューパルサーSP3 モード 電源OFF→ON`。
- HAZUSE、業界記事、1geki、ちょんぼりすた、イチカツ、なな徹、2-9伝説、設定判別/解析DB、中古実機型式資料を横断。
- 天井/AT系モード/内部状態/有利区間は「情報欠損」ではなく機械仕様上の非該当として扱う。
- 演出選択モードの電断保持と本機固有ガックンのみ、十分な再探索後も直接固定できずUNVERIFIED扱い。
