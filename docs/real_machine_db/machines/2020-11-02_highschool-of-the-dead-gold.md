# パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド

No: 1375
machineName: パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド
machineNameVariants: HOTDゴールド / ハイスクール・オブ・ザ・デッド ゴールド / Sハイスクールオブザデッドゴールド
manufacturer: セブンリーグ / 山佐系
releaseDate: 2020-11-02
formalModelName: SハイスクールオブザデッドゴールドSLFF
certificationNumber: 0S0269

generation: 6.1号機
systemType: AT / 規定ゲーム数CZ / 高純増AT / 有利区間管理

## identity / release
- 複数解析DB・2020年11月新台カレンダーで2020-11-02導入を確認。
- 一方、プレイグラフ転載のDMM業界記事には「11月9日から」とする記載があるため、導入開始日の地域差/掲載差としてCONFLICTを保持し、本DBでは複数カレンダー・解析で一致する2020-11-02をcanonicalとする。
- 型式名 `SハイスクールオブザデッドゴールドSLFF`、検定番号 `0S0269` を後年機種DBで確認。
- reliability: DATABASE_HIGH / ANALYSIS_HIGH / CONFLICT_RELEASE_DATE

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.3% |
| 3 | 100.3% |
| 4 | 102.7% |
| 5 | 105.4% |
| 6 | 110.0% |
- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
CZ「黙示録CHANCE」:
| 設定 | CZ |
|---:|---:|
| 1 | 1/501.3 |
| 2 | 1/456.3 |
| 3 | 1/459.2 |
| 4 | 1/422.5 |
| 5 | 1/414.0 |
| 6 | 1/385.3 |
- AT初当たりは設定1で約1/1021とする公開値を確認。設定2～6のAT初当たり全表は主要資料で未固定のため、物差しの主要設定別指標はCZを採用する。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約52.2G/50枚（約52G/50枚表記もあり、丸め差として扱う）。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「オールデッズアタック」: 約8.7枚/G。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## basicPayout
- AT「オールデッズアタック」: 初期40～300G、純増約8.7枚/G。
- 設定1のAT突入時獲得期待枚数は約810～812枚とする資料あり。丸め/集計差のため単一値へ平均化しない。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数到達でCZ「黙示録CHANCE」へ。
- 天井: 有利区間移行後最大765GでCZ「黙示録CHANCE」確定。
- CZ突破型で、通常時は「奴ら玉」を蓄積してCZ突破期待度を高める。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井ゲーム数RESET。
- 内部状態RESET。
- 有利区間RESETとなり、非有利区間から再開する。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は純電源OFF→ONの公開解析に基づき、天井ゲーム数・内部状態・有利区間をCARRY_OVER。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON: 天井G数CARRY_OVER。
- 内部状態CARRY_OVER。
- 有利区間CARRY_OVER。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 設定変更後も通常天井は有利区間移行後最大765GでCZ。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井恩恵はCZ「黙示録CHANCE」であり、AT直撃確定ではない。

### modeAfterReset
- 設定変更専用モード、専用規定Gテーブル、朝一専用モード振り分けの公開確定値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 有利区間引継ぎ時に強い期待値があることは後発解析で確認されるが、これは設定変更専用モード数値とは分離する。

### stateAfterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 設定変更直後の内部状態振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 通常時から有利区間ランプが点灯するタイプ。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更専用の短縮天井、AT確定、CZ優遇率などの公開定量恩恵は `NONE_DIRECTLY_CONFIRMED_AFTER_RESEARCH`。
- むしろ本機は有利区間引継ぎ状態に期待値上の強い価値があるとする後発解析があり、「リセット=狙い目」と単純化しない。

### resetPenalties
- 設定変更により前日の天井進行・内部状態・有利区間進行を消去する。
- 有利区間引継ぎ時の期待値上の優位を失う点は客側の朝一判断に影響するが、設定変更専用の定量的不利率は `NONE_DIRECTLY_PUBLISHED`。

### resetDetection
- 通常時から有利区間ランプ点灯型。
- 朝一ランプ消灯: 設定変更濃厚。
- 朝一ランプ点灯: 据え置き濃厚。
- 有利区間ランプ位置はクレジット右下ドット。
- 前日非有利区間終了やホール対策等があり得るため絶対判別とはしない。
- 本機固有のリールガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更専用の朝一当選率、専用モード振り分け、専用短縮天井などの公開数値は `PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_NOT_FOUND_AFTER_RESEARCH`。
- 通常天井765Gは設定変更専用値ではないため共通仕様として保持。

## resetBehavior 再探索メモ
2026-09-11。`パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド / HOTDゴールド / SハイスクールオブザデッドゴールドSLFF / 0S0269 / セブンリーグ / 山佐` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 有利区間 / 有利区間ランプ` を組み替え、1geki、期待値見える化、すろぱちクエスト、スロットセブン、ちょんぼりすた、P-WORLD、パチマガスロマガ、後年機種DBを横断。当時1gekiは設定変更欄が「調査中」だが、後発複数解析でRESET/CARRY_OVER契約とランプ判別が一致したため後発一致情報をcanonical採用。設定変更専用の短縮天井/モード振り分け/当選率と固有ガックンは十分な再探索後も直接値を固定できなかった。

## conflicts
- releaseDate: 複数新台カレンダー・解析は2020-11-02、DMM業界記事（プレイグラフ出典）は2020-11-09からと記載。平均化せず `CONFLICT_RELEASE_DATE_2020_11_02_VS_2020_11_09`。canonicalは2020-11-02。
- baseGamesPer50: 約52.2G/50枚 / 約52G表記。丸め差として両定義を保持。
- expectedPayoutAtAtEntrySetting1: 約810枚 / 約812枚表記。丸め/集計差として主コアには範囲概念のみ保持。

## missingFields
- 設定2～6のAT初当たり確率全表: PUBLIC_TABLE_NOT_FIXED_AFTER_RESEARCH（CZ設定別表を主要初当たり指標として保存）
- 設定変更専用モード/規定G振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更直後の内部状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用朝一当選率: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-11
- https://1geki.jp/newmachinecalender/202011/
- https://1geki.jp/slot/s_hotd_g/3/
- https://slotjin.com/tenjoukitaichi/hotdgold/
- https://www.slopachi-quest.com/article/gakuenhotd-tennjou/
- https://slot-seven.com/hotdgold-tenzyou/
- https://slot-seven.com/hotdgold-settei/
- https://chonborista.com/slot/yamasa-slot/119901/
- https://www.p-world.co.jp/machine/database/9251
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/236/at01-4.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/236/kh03-1.php
- https://p-town.dmm.com/free_pages/7285
- https://pachinavi.net/machines/hotd-gold/

confidenceSummary: core=ANALYSIS_HIGH; reset=ANALYSIS_HIGH_WITH_LIMITED_UNVERIFIED_FIELDS; identity=DATABASE_HIGH; conflicts=EXPLICIT
