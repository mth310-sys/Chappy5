# 呪怨 再誕AT

recordNo: 1312
machineName: 呪怨 再誕AT
machineNameVariants: S呪怨 再誕AT / パチスロ呪怨 再誕AT / 呪怨2 再誕AT
manufacturer: 藤商事
formalModel: S呪怨 再誕AT FC
certificationNumber: 9S0114
releaseDate: 2019-10-15
generation: 6号機
systemType: AT / 疑似ボーナス+ST型AT

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.8% |
| 2 | 99.2% |
| 3 | 100.3% |
| 4 | 104.3% |
| 5 | 107.2% |
| 6 | 110.1% |

ちょんぼりすた、スロパチネット、みんスロ等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### payout conflict note

HAZUSE機種DBには出玉率97.14%〜110.42%という別レンジ表示がある。設定別内訳が同ページの検索結果では十分確認できないため、複数の当時解析で一致する97.8〜110.1%をcanonicalとし、HAZUSE値は `CONFLICT_SUMMARY_RANGE` として保持する。

## initialHitBySetting

| 設定 | AT/業BONUS初当り | 呪縛ST |
|---|---:|---:|
| 1 | 1/365.5 | 1/912.1 |
| 2 | 1/345.5 | 1/859.7 |
| 3 | 1/330.4 | 1/818.7 |
| 4 | 1/292.7 | 1/677.6 |
| 5 | 1/245.9 | 1/559.5 |
| 6 | 1/201.7 | 1/450.5 |

ちょんぼりすた、スロパチネット、みんスロ等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約50G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 通常のST型AT「呪縛ST」: 約1.3枚/G。
- 疑似ボーナス各種: 約4.0枚/G。
- 本機全体を単一の純増値へ丸めず、ST区間とボーナス区間を分離して保持する。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 初当たり「業BONUS」: 20G、純増約4.0枚/G（単純換算目安約80枚だが、DBではG数と純増を正値として保持）。
- 呪縛ST: 40〜80G、純増約1.3枚/G、ボーナス当選でSTゲーム数再セット。
- STループ率: 40G時約72.2%、50G時約76.7%、60G時約85.2%、70G時約89.9%、80G時約93.7%。
- マーBONUS: 10〜30G / 約4.0枚/G。
- 俊雄BONUS: 20Gまたは40G / 約4.0枚/G。
- 伽椰子BONUS: 30Gまたは60G / 約4.0枚/G。
- 呪怨PANIC: 平均約100G / 約4.0枚/G。

## modeSpecificMinimumData

- 通常時はCZ経由または直撃で業BONUSを目指し、業BONUS後の「業深き刻」から呪縛STを抽選。
- 通常時モードはリセットモード / A / B / C。設定変更時は必ずリセットモードへ移行。
- リセットモードはCZ当選率約1/50で、CZ当選まで継続。
- 通常天井: 有利区間移行後400G+α。400G消化でリセットモード（CZ高確率）へ移行し、AT確定ではない。
- モードA/B/Cの通常天井振り分けは0G / 200G / 400Gに存在するが、通常時全モードテーブルの完全再現は対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_BENEFIT_AND_RELEASE_DATE_CONFLICT
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 設定変更時は天井ゲーム数RESET。
- 内部状態RESET。
- 非有利区間を経由して有利区間へ入り、**必ずリセットモードから開始**。
- 朝一ステージは玲央ステージ。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は内部天井ゲーム数を引き継ぐ。
- 内部モード/状態を引き継ぐ。
- 液晶表示ゲーム数は0Gからでも、内部進行をリセットしたことを意味しない。
- 通常時の有利区間ランプは消灯する仕様のため、ランプ消灯だけでは据え置き/変更判別不可。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 純電源OFF→ONのみの場合、天井・内部状態を引き継ぐ。
- 解析表では設定変更と電源ON/OFFを明確に分離して記載。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset

- 設定変更: RESET。
- 据え置き / 電源OFF→ON: CARRY_OVER。
- 表示ゲーム数と内部天井進行は分離して扱う。

### ceilingAfterReset

- 通常の最大到達条件は有利区間移行後400G+αでCZ高確率（リセットモード）へ移行。
- 設定変更後は最初からリセットモードに滞在するため、実質的に400G待たずCZ高確率状態から開始する。
- 「短縮天井○G」という別契約ではなく、**朝一リセットモード直行**を主要恩恵として扱う。

### modeAfterReset

- 設定変更時: **リセットモード確定**。
- リセットモード: CZ当選率約1/50、CZ当選まで転落しない。
- CZ失敗後などにもリセットモードへ移行する通常仕様があるため、朝一専用の一回限り状態ではない。

### stateAfterReset

- 設定変更: 内部状態RESET。
- 据え置き / 純電断: 内部状態CARRY_OVER。

### advantageousSectionReset

- 設定変更後は非有利区間から開始し、有利区間移行後にリセットモードへ入るとする当時攻略あり。
- 据え置き時は有利区間を引き継ぐ。
- 通常時有利区間ランプは消灯するため、朝一ランプ消灯だけでは設定変更判別不能。

### resetBenefits

- **設定変更後は必ずリセットモードから開始**。
- リセットモード中CZ確率は約1/50、CZ当選まで継続。
- 当時の期待値解析では、設定1・CZスルー即ヤメ等の条件でリセットモード狙いを1台あたり約+1600円、機械割約110.5%と試算。これは攻略サイトの期待値モデルであり、メーカー公表値ではないため `ANALYSIS_SINGLE_EXPECTED_VALUE_MODEL` として分離保持。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 有利区間ランプは通常時消灯のため変更判別に使用不可。
- 朝一は設定変更・据え置きとも液晶上0Gになり得るため表示G数だけでは判別不可。
- 朝一の押し順チャンス目出現率など実戦的推測要素を扱う記事はあるが、確定判別ではないため本DBの主要契約には採用しない。
- 本機固有のリールガックン発生条件・発生率を高信頼で固定できる公開資料は今回の表記揺れ再探索でも確認できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 設定変更後の開始モード: **リセットモード100%**。
- リセットモードCZ当選率: **約1/50**。
- リセットモードはCZ当選まで継続。
- 当時期待値見える化モデル: 設定1、CZスルー即ヤメ等の条件で **約+1600円 / 機械割約110.5%**。期待値モデルのため性能コアとは別定義。
- 設定変更後の0〜特定G以内実当選率、ガックン率などの追加公開朝一数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

`呪怨 再誕AT / S呪怨 再誕AT / S呪怨 再誕AT FC / 呪怨2 / 藤商事` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 有利区間 / 有利区間ランプ` を組み合わせ、ちょんぼりすた、スロパチネット、パチマガスロマガ、期待値見える化、HAZUSE、みんスロ、当時導入記事を横断した。

## qualityNotes / conflicts

- 導入日は、ちょんぼりすた・スロパチネット・みんスロ・2019-10-12導入直前記事が **2019-10-15** で一致。一方HAZUSEは **2019-10-21**。本DBでは当時の複数一致と10/15週の導入資料を優先し2019-10-15をcanonical、HAZUSE 10/21を `CONFLICT_RELEASE_DATE_2019_10_15_VS_2019_10_21` として保持。
- 型式 `S呪怨 再誕AT FC`、検定番号 `9S0114` はHAZUSEで確認。
- 出玉率は複数当時解析が97.8〜110.1%で一致する一方、HAZUSEトップには97.14〜110.42%の別レンジがあるためCONFLICT注記。
- リセット挙動は複数の当時解析で設定変更と電源ON/OFFを明確に分離でき、リセットモード約1/50という朝一行動に直結する公開数値まで固定できた。

## sources

取得日: 2026-09-11

1. ちょんぼりすた — 呪怨 再誕AT
   - https://chonborista.com/slot/fuji-slot/90938/
   - 導入2019-10-15、設定別AT初当たり/呪縛ST/出玉率、約50G/50枚、純増1.3〜4.0枚/G、天井400G+α、設定変更時天井/内部状態RESET、電断時引継ぎ、リセットモードを確認。
   - reliability: ANALYSIS_HIGH / CONTEMPORARY
2. スロパチネット — 呪怨 再誕AT
   - https://slopachi-net.com/jyuonn
   - 型式S呪怨 再誕AT FC、2019-10-15、設定別スペック、設定変更時天井/内部状態RESET、電源ON/OFF引継ぎを確認。
   - reliability: ANALYSIS_HIGH / CONTEMPORARY
3. パチマガスロマガ — S呪怨-再誕AT- 通常時モード&状態
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/29/mo02.php
   - 設定変更時は必ずリセットモード、CZ約1/50で当選まで継続を確認。
   - reliability: ANALYSIS_HIGH
4. 期待値見える化 — 呪怨 再誕AT 朝一リセット挙動
   - https://slotjin.com/slot/juonat-reset/
   - 設定変更後リセットモード、天井RESET/据え置き引継ぎ、有利区間ランプ通常時消灯、期待値モデル約+1600円・110.5%を確認。
   - reliability: ANALYSIS_HIGH / CONTEMPORARY_STRATEGY
5. 一撃 — 呪縛ST / 業BONUS
   - https://1geki.jp/slot/s_juonat/82/
   - https://1geki.jp/slot/s_juonat/62/
   - 呪縛ST40〜80G、純増1.3枚/G、ループ率72.2〜93.7%、業BONUS20G・純増4.0枚/Gを確認。
   - reliability: ANALYSIS_HIGH / CONTEMPORARY
6. HAZUSE — パチスロ呪怨 再誕AT
   - https://hazuse.com/machine/pachislot/9S0114/
   - 型式S呪怨 再誕AT FC、検定番号9S0114、導入2019-10-21、別出玉率レンジを確認。
   - reliability: DATABASE / CONFLICT_SOURCE
7. みんスロ — S 呪怨 再誕AT
   - https://minslo.com/s-%E5%91%AA%E6%80%A8-%E5%86%8D%E8%AA%95at/
   - 導入2019-10-15、約50G/50枚、1.3/4.0枚純増、設定別スペックを照合。
   - reliability: DATABASE_SECONDARY
8. パチパチ情報部 — 10月15日導入予定機種まとめ
   - https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/10/12/233341
   - 2019-10-15導入予定、当該日のパチスロは実質本機1機種との当時記録を確認。
   - reliability: CONTEMPORARY_SECONDARY_CALENDAR

## missingFields

- 本機固有ガックン発生条件・発生率
- 設定変更後の特定G以内実当選率（CZ約1/50以外）

## conflicts

- releaseDate: 2019-10-15（複数当時解析/導入直前資料） vs 2019-10-21（HAZUSE）。canonical 2019-10-15。
- payoutRate: 97.8〜110.1%（複数当時解析） vs 97.14〜110.42%（HAZUSEトップレンジ）。設定別複数一致値をcanonical。
