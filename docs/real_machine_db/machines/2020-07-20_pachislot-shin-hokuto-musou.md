# パチスロ真・北斗無双

No: 1362
machineName: パチスロ真・北斗無双
machineNameVariants: パチスロ真・北斗無双 / 真・北斗無双 / 真北斗無双 / Sパチスロ真北斗無双ZN
manufacturer: サミー
releaseDate: 2020-07-20
formalModelName: Sパチスロ真北斗無双ZN
certificationNumber: 9S1778

generation: 6号機
systemType: AT / 高純増セット継続型AT / CZ経由主体

## identity / release
- HAZUSEは型式 `S パチスロ 真北斗無双 ZN`、検定番号 `9S1778`、メーカーSammy、導入開始日2020-07-20を掲載。
- K-Navi、グリーンべると、当時の導入カレンダーでも2020-07-20導入で一致。
- 2020年前半の新型コロナウイルス影響で販売延期があり、事前資料には2020-05-18予定等が残る。本DBは実導入確認日2020-07-20をcanonicalとし、延期前予定日とは混同しない。

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.9% |
| 2 | 98.7% |
| 3 | 101.5% |
| 4 | 104.6% |
| 5 | 108.0% |
| 6 | 111.1% |
- K-Navi、HAZUSE、すろぱちくえすと、ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
CZ「制圧ZONE」+ AT「夢幻闘舞」合算:
| 設定 | CZ・AT合算 |
|---:|---:|
| 1 | 1/456.4 |
| 2 | 1/396.2 |
| 3 | 1/437.9 |
| 4 | 1/333.9 |
| 5 | 1/356.4 |
| 6 | 1/284.0 |
- サミー公開内容を報じた遊技通信系記事は設定1 1/456.4〜設定6 1/284.0を掲載。K-Navi、HAZUSE、すろぱちくえすと等で全設定値一致。
- CZとATを分離した設定別初当たり表ではなく合算値であるため、AT単独初当たりとして扱わない。
- reliability: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約51.5G/50枚（設定1。資料により全設定共通表記あり）。
- 1geki、パチマガスロマガ、ちょんぼりすた、すろぱちくえすとで一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「夢幻闘舞」: 約8.0枚/G。
- グリーンべると、遊技通信系記事、HAZUSE、複数攻略資料で一致。
- 上位AT「真・無想転生RUSH」も約8.0枚/G。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT「夢幻闘舞」は「乱撃CHANCE」+「七星BATTLE」をループするセット継続型。
- 乱撃CHANCE: 初回30G、通常セット8G、宿命EP時11G。
- 七星BATTLEは保障7Gとされ、勝利で次セットへ継続。
- 上位AT「真・無想転生RUSH」は1セット30G、エンディング到達率約86%と公表系資料で紹介。
- 固定枚数管理ではないため基本獲得枚数を単一値へ換算しない。

## modeSpecificMinimumData
- 通常時は約50Gを1周期として進行し、4つの内部モードで規定周期が変化。
- 通常: 最大12周期（解析上約600G+α。実戦消化では約630G前後表記あり）→CZ「制圧ZONE」。
- 好機: 最大9周期（約450G+α）。
- 無双: 最大3周期（約150G+α）、初当たりは上位CZ以上濃厚。
- 夢幻: 最大4周期（約200G+α）、AT直撃&同モードループに期待。
- 有利区間引継ぎ時は通常9周期、好機6周期へ短縮し、無双/夢幻は上位モード継続恩恵がある。これは設定変更恩恵ではなく有利区間継続時の挙動。
- 最大天井恩恵はCZでありAT確定天井ではない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_NUMERIC_MODE_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井進行RESET。
- 内部状態RESET。
- 有利区間RESET → 非有利区間へ移行後、有利区間を新規開始。
- 有利区間開始時はヒロインZONEへ必ず突入。
- モードは有利区間開始時に抽選されるため設定変更後も新規抽選対象。
- reliability: ANALYSIS_HIGH（複数解析一致）

### carryOverBehavior
- 据え置き時は天井進行をCARRY_OVER。
- 内部状態をCARRY_OVER。
- 有利区間ランプ/有利区間状態をCARRY_OVER。
- 有利区間継続中なら滞在モードに応じた短縮天井・モードループ恩恵も継続対象となる。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONで設定変更を伴わない場合、天井・内部状態・有利区間ランプ状態を引継ぐ。
- ちょんぼりすた、期待値見える化の朝一比較表で一致。
- 電断後の表示ステージは主要当時資料で調査中のままのため `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH for ceiling/state/section carry-over

### gameCounterReset
- 設定変更: 周期/天井進行RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 最大は通常モード12周期。一般攻略表は約600G+α、実戦ベース資料は約630G前後とする。

### ceilingAfterReset
- 設定変更後は新しい有利区間として通常のモード別天井から再スタート。
- 設定変更専用の固定短縮天井は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間引継ぎ時の通常12→9周期、好機9→6周期等はリセット時ではなく継続時恩恵なので分離。

### modeAfterReset
- 有利区間移行時に通常 / 好機 / 無双 / 夢幻の4モードを抽選。
- 設定変更後は非有利区間を経て新規有利区間へ入るためモードも新規抽選となる。
- 公開モード振り分けは設定差あり。これは「設定変更専用テーブル」ではなく有利区間移行時の一般テーブルとして保持する。
- reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 有利区間開始時はアイテム獲得ゾーン「ヒロインZONE」へ必ず突入。
- ヒロインZONEは20G+α継続と後発解析で固定。

### advantageousSectionReset
- 設定変更: RESET → 非有利区間へ。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 有利区間ランプは通常時点灯型。位置は払出/クレジット表示付近の右下ドット（WIN右下表現の資料もあり）。

### resetBenefits
- 新規有利区間開始時にヒロインZONEへ必ず突入し、20G+αで宝箱/アイテム獲得抽選を受けられる。
- ただし設定変更後150G以内の当選期待度は低いと複数攻略資料が評価し、リセット狙い価値は高くない。
- 設定変更専用短縮天井は確認できない。

### resetPenalties
- `NONE_DIRECTLY_PUBLISHED`。
- 据え置きで有利区間を引き継いだ場合に得られる天井短縮・夢幻モード等のループ機会を設定変更で消すケースはあり得るが、公開資料で設定変更固有の定量的ペナルティとして示されていないため推定値化しない。

### resetDetection
- 通常時から有利区間ランプ点灯型。
- 朝一ランプ消灯: 設定変更濃厚。
- 朝一ランプ点灯: 据え置き濃厚。
- 店側対策や前日終了状況の例外を考慮し確定扱いにはしない。
- 設定変更後はヒロインZONE開始が通常挙動。
- 本機固有のガックン条件・発生率は `真北斗無双 / Sパチスロ真北斗無双ZN / 9S1778 / サミー` と `ガックン / リール / 設定変更 / 朝一` を組み替え再探索したが、高信頼の固有契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
有利区間移行時のモード振り分け（設定変更後を含むが、設定変更専用テーブルではない）:
| 設定 | 通常 | 好機 | 無双 | 夢幻 |
|---:|---:|---:|---:|---:|
| 1 | 78.0% | 14.9% | 5.9% | 1.2% |
| 2 | 48.2% | 38.8% | 2.4% | 10.6% |
| 3 | 69.0% | 22.4% | 5.5% | 3.1% |
| 4 | 32.9% | 39.2% | 0.8% | 27.1% |
| 5 | 29.4% | 50.6% | 5.1% | 14.9% |
| 6 | 4.3% | 53.3% | 0.4% | 42.0% |
- すろぱちくえすとが有利区間移行時モード振り分けとして掲載。設定変更後も新規有利区間開始となるため朝一比較値として利用可能。
- ヒロインZONE: 有利区間開始時100%突入、20G+α。
- 「設定1・有利区間リセット後の夢幻モード移行率は推定5%以下」とする実戦推定資料もあるが、解析公開値1.2%と定義/時期が異なるため平均化せず、解析表を優先し実戦推定は補助扱い。

## resetBehavior 再探索メモ
2026-09-11。`パチスロ真・北斗無双 / 真北斗無双 / Sパチスロ真北斗無双ZN / 9S1778 / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / モード / モード振り分け / 状態 / ヒロインZONE / 有利区間 / 有利区間ランプ / ガックン` を組み替え、サミー系公開情報、遊技通信/P-WORLD、グリーンべると、HAZUSE、K-Navi、1geki、パチマガスロマガ、ちょんぼりすた、期待値見える化、すろぱちくえすと、旧攻略DBを横断。天井・内部状態・有利区間のRESET/CARRY_OVER、ランプ判別、ヒロインZONE、有利区間移行時モード振り分けを複数系統で固定。純電断後の具体的開始ステージと本機固有ガックン契約は十分な再探索後も固定できずUNVERIFIEDとした。

## conflicts / definition differences
- `RELEASE_SCHEDULE_VARIANT_PRE_COVID_2020_05_18_VS_ACTUAL_2020_07_20`: 一部事前資料に5/18予定が残るが、新型コロナ影響による延期後の実導入は7/20。数値平均化せず実導入をcanonical。
- `DEFINITION_DIFFERENCE_12_CYCLES_APPROX_600G_PLUS_VS_REAL_PLAY_AROUND_630G`: 解析表は1周期約50Gとして12周期≒600G+α、期待値実戦資料は前兆/区間を含む実消化目安を約630G前後と表現。同一天井の数え方差として分離。
- 有利区間リセット後の設定1夢幻モードについて、後期解析表1.2%に対し古い実戦推定「5%以下」がある。確定解析値と実戦推定を平均せず分離。

## missingFields
- 純電源OFF→ON後の具体的液晶開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン発生条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の別モードテーブル: NONE_CONFIRMED_AFTER_RESEARCH（公開表は有利区間移行時共通）

## sources
取得日: 2026-09-11

1. HAZUSE「パチスロ真・北斗無双」
   - https://hazuse.com/machine/pachislot/9S1778/
   - 型式 `S パチスロ 真北斗無双 ZN`、検定番号 `9S1778`、導入開始2020-07-20、メーカー、CZ・AT合算、約51.5G/50枚、純増約8枚。
   - reliability: ANALYSIS_HIGH_DATABASE

2. グリーンべると「（7/20導入）パチスロ真・北斗無双～純増8枚のAT『夢幻闘舞』搭載～」
   - https://web-greenbelt.jp/post-39956/
   - 2020-07-20導入、純増約8枚/G、夢幻闘舞、乱撃CHANCE初回30G/通常8G/EP11G。
   - reliability: INDUSTRY

3. P-WORLD / 遊技通信「サミー、純増8枚の高純増ATを実現した新台『パチスロ真・北斗無双』のゲーム性を公開」
   - https://news.p-world.co.jp/articles/14007/yugitsushin
   - サミー公開ゲーム性、CZ+AT合算設定1 1/456.4〜設定6 1/284.0、純増約8枚/G、販売延期、AT構成。
   - reliability: INDUSTRY

4. K-Navi「パチスロ真・北斗無双」
   - https://p-kn.com/slot/3445/
   - 導入2020-07-20、設定別CZ・AT合算、設定別機械割。
   - reliability: ANALYSIS_HIGH

5. 1geki「パチスロ真北斗無双 小役確率」
   - https://1geki.jp/slot/s_sinhokutomuso/4/
   - 50枚あたり約51.5G（設定1）。
   - reliability: ANALYSIS_HIGH

6. 1geki「乱撃CHANCE」
   - https://1geki.jp/slot/s_sinhokutomuso/82/
   - 純増約8枚、初回30G/宿命EP11G/通常8G。
   - reliability: ANALYSIS_HIGH

7. ちょんぼりすた「真・北斗無双」
   - https://chonborista.com/slot/sammy-slot/106166/
   - スペック、12周期天井、4モード、有利区間引継ぎ、設定変更=天井/状態RESET、電源OFF→ON=引継ぎ、有利区間ランプ判別、朝一ヒロインZONE。
   - reliability: ANALYSIS_HIGH

8. 期待値見える化「真北斗無双 天井期待値・朝一リセット」
   - https://slotjin.com/tenjoukitaichi/hokutomusou/
   - 設定変更後=天井RESET/非有利区間/ランプ消灯/ヒロインZONE、電源OFF→ON=引継ぎ、モード別天井と実戦消化G目安。
   - reliability: ANALYSIS_HIGH / EMPIRICAL where noted

9. すろぱちくえすと「パチスロ 真・北斗無双 設定差まとめ」
   - https://www.slopachi-quest.com/article/sin-hokutomusou-settei/
   - 設定別機械割/CZ・AT合算、51.5G/50枚、純増8枚/G、4モードと有利区間移行時モード振り分け全設定値。
   - reliability: ANALYSIS_HIGH

10. すろぱちくえすと「パチスロ 真・北斗無双 天井解析」
    - https://www.slopachi-quest.com/article/sin-hokutomusou-tenjou/
    - 朝一ヒロインZONE、通常時点灯型有利区間ランプ、朝一消灯=変更濃厚/点灯=据え置き濃厚、リセット狙い価値評価。
    - reliability: ANALYSIS_HIGH

11. パチマガスロマガ「パチスロ真・北斗無双 ヒロインZONE」
    - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/181/tj10.php
    - 設定変更後やCZ/AT終了後など有利区間開始時に必ずヒロインZONE、20G+α、宝箱獲得抽選。
    - reliability: ANALYSIS_HIGH

## overallConfidence
- identity/release: HIGH
- performanceCore: HIGH
- resetCore: HIGH
- publicMorningNumericData: HIGH for general advantageous-section-start mode table; NOT_RESET_EXCLUSIVE
- powerCycleStage / gakkun: UNVERIFIED_AFTER_RESEARCH
