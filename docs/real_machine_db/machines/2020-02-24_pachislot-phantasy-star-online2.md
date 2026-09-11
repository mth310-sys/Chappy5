# パチスロ ファンタシースターオンライン2

No: 1337
machineName: パチスロ ファンタシースターオンライン2
machineNameVariants: ファンタシースターオンライン2 / PSO2 / PACHISLOT PHANTASY STAR ONLINE2
manufacturer: Sammy（製造元: 銀座）
releaseDate: 2020-02-24（DB canonical。K-Navi全国一斉導入開始日）
formalModelName: S SLOT PSO2 MB
certificationNumber: 9S1571
generation: 6号機
systemType: AT / 擬似ボーナス連チャン / 集中モード

## releaseDateQuality
- K-Navi全国新台カレンダー: 2020-02-24。
- HAZUSE / パチビー / 複数当時解析: 2020-02-25。
- ちょんぼりすたは「2020-02-25（一部）/ 全国3/2〜」、スロパチクエストも2020-03-02（一部2/25）とする。
- 平均化せず `CONFLICT_RELEASE_DATE_2020_02_24_VS_2020_02_25_VS_2020_03_02` として保持。本DB時系列は全国一斉導入開始日を明示するK-Navi 2/24をcanonicalとする。

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 98.0% |
| 2 | 99.2% |
| 3 | 100.6% |
| 4 | 104.2% |
| 5 | 107.3% |
| 6 | 109.0% |

- HAZUSE、当時解析、業界紹介資料で照合。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BONUS初当たり |
|---|---:|
| 1 | 1/263.3 |
| 2 | 1/244.9 |
| 3 | 1/227.8 |
| 4 | 1/198.2 |
| 5 | 1/180.7 |
| 6 | 1/167.1 |

- PiDEA / P-WORLD / HAZUSE / 複数解析で一致。
- reliability: INDUSTRY_AND_ANALYSIS_HIGH

## baseGamesPer50
- 約32.9G/50枚。
- PiDEA / グリーンべると系業界記事 / 複数当時解析で照合。
- reliability: INDUSTRY_HIGH

## netIncrease
- 擬似ボーナスAT: 約5.8枚/G。
- reliability: INDUSTRY_HIGH

## basicPayout
- BIG BONUS: 約200枚。
- REGULAR BONUS: 約75枚。
- P-WORLD、PiDEA、グリーンべると、当時解析で一致。
- reliability: INDUSTRY_HIGH

## modeSpecificMinimumData
- 通常時はBONUS放出を管理する複数モードを持つ。
- 集中モード: 平均BONUS回数約3回。
- EX集中モード: 平均BONUS回数約7回。
- EX集中モードロング: 平均BONUS回数約10回。
- ファンタシークエスト: 10G、平均BONUS回数約6回（集中モード滞在分を含む）。
- 「深遠なる闇」: 10G+α、BONUSループ率95%以上。
- 通常時天井: 最大800G+前兆でBIG。天井は450〜500G / 750〜800G帯の振り分けがあるとする当時解析あり。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_ANALYSIS_SINGLE_DETECTION
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は通常天井進行をリセット。
- 設定変更後の天井は **350G+前兆** に短縮され、到達時はBIG当選。
- 当時解析表では内部状態もリセット。
- 有利区間ランプを用いた朝一判別資料では、設定変更後は有利区間が切れてランプ非点灯となる前提で整理されている。
- モードそのものの設定変更時専用振り分けは公開確定値を固定できないため、通常時全モード移行率を推測転記しない。

### carryOverBehavior
- 据え置き時は前日の天井進行・内部状態を引き継ぐものとして、純電源OFF→ON資料と朝一有利区間ランプ判別資料が整合。
- 朝一有利区間ランプ点灯は据え置き濃厚とする当時攻略あり。

### powerCycleBehavior
- 電源OFF→ONのみでは **天井G数を引き継ぐ**。
- 内部状態も **引き継ぐ** とする当時解析表あり。
- ステージ表示は複数初期資料で「調査中」であり、確定値へ格上げしない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 通常最大: **800G+前兆 → 設定変更後350G+前兆**。
- 恩恵: BIG当選。
- 朝一客行動へ直接影響する強い短縮天井として保存。

### modeAfterReset
- 通常時に複数の集中系モードを持つことは公式/業界資料で確認。
- ただし設定変更時の各モード振り分け・専用朝一モード数値は、表記揺れ・型式名・メーカー名を含めて再探索しても公開確定表を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: RESET とする当時解析あり。
- 純電源OFF→ON: CARRY_OVER とする当時解析あり。
- 初期の1geki資料は当該項目を「調査中」としていたため、後発複数解析で補強された項目のみ採用し、詳細状態振り分けまでは収集しない。

### advantageousSectionReset
- 設定変更: RESET扱い。
- 据え置き / 純電源OFF→ON: CARRY_OVER扱い。
- 通常時は有利区間ランプが基本点灯するため、朝一ランプ非点灯/点灯が変更判別材料になるとする当時攻略を根拠とする。
- ホール側の対策で判別不能となる可能性があるため「確定」とはしない。

### resetBenefits
- **350G+前兆への天井短縮**。
- 当時攻略では設定変更濃厚台を0Gから狙う価値があると評価されるほど、朝一の主要恩恵として扱われた。

### resetPenalties
- 前日天井進行は設定変更で消去されるため、宵越しゲーム数狙いに対しては不利。
- それ以外の設定変更専用ペナルティ数値は公開確認できず。

### resetDetection
- 朝一有利区間ランプ **点灯=据え置き濃厚 / 非点灯=設定変更濃厚** とする当時攻略あり。
- 通常時は基本的に有利区間ランプ点灯とされる。
- ホール対策時は見抜けない可能性があるため「濃厚」止まり。
- `PSO2 / ファンタシースターオンライン2 / S SLOT PSO2 MB / Sammy / 銀座` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / 状態 / 有利区間 / ランプ / ガックン` を組み替えて再探索したが、本機固有のガックン発生条件・発生率を直接固定できる資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 通常天井: 最大800G+前兆。
- 設定変更後天井: **350G+前兆**。
- 短縮幅: 最大天井基準で450G短縮。
- 天井恩恵: BIG。
- 設定変更専用モード振り分け / 朝一専用当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-11に `パチスロ ファンタシースターオンライン2 / ファンタシースターオンライン2 / PSO2 / S SLOT PSO2 MB / 9S1571 / Sammy / 銀座` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 有利区間 / ランプ / ガックン` を組み替え、1geki、ちょんぼりすた、スロパチクエスト、イチカツ、当時個人解析、HAZUSE、P-WORLD、業界一次記事を横断。初期1gekiは設定変更/電断の詳細を調査中としていたが、後発資料で350G短縮天井、設定変更時の天井/内部状態RESET、純電断時CARRY_OVER、有利区間ランプ判別が一致。モード振り分け・ガックンは十分な再探索後も直接値を固定できず推測補完しない。

## sources
取得日: 2026-09-11

1. PiDEA X — BONUS集中モードを搭載／パチスロ ファンタシースターオンライン2
   - https://www.pidea.jp/articles/bonus%E9%9B%86%E4%B8%AD%E3%83%A2%E3%83%BC%E3%83%89%E3%82%92%E6%90%AD%E8%BC%89%EF%BC%8F%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B32
   - 銀座製造、初当り1/263.3〜1/167.1、純増5.8枚、BIG約200枚、REG約75枚を確認。
   - reliability: INDUSTRY
2. P-WORLD — パチスロ ファンタシースターオンライン2
   - https://www.p-world.co.jp/machine/database/9136
   - Sammy/銀座、6号機AT、初当り、BIG/REG、集中モード構造を照合。
   - reliability: INDUSTRY_DATABASE
3. HAZUSE — パチスロファンタシースターオンライン2
   - https://hazuse.com/machine/pachislot/9S1571/
   - 型式 `S SLOT PSO2 MB`、検定番号 `9S1571`、導入2020-02-25、純増5.8枚、出玉率98.0〜109.0%を確認。
   - reliability: ANALYSIS_HIGH
4. グリーンべると/P-WORLDニュース — BONUS集中モードが出玉のカギ
   - https://news.p-world.co.jp/articles/12723/greenbelt
   - 銀座製、2月下旬納品予定、初当り、約32.9G/50枚、純増5.8枚、BIG/REG獲得枚数を確認。
   - reliability: INDUSTRY
5. ちょんぼりすた — PSO2解析
   - https://chonborista.com/slot/sammy-slot/104167/
   - 通常天井800G+前兆、設定変更後350G+前兆、設定変更時天井/内部状態RESET、純電断時CARRY_OVERを確認。
   - reliability: ANALYSIS_HIGH
6. 1geki — PSO2 天井/設定変更
   - https://1geki.jp/slot/s_pso2/3/
   - 800G+前兆、450〜500/750〜800G帯、設定変更後350G+前兆を確認。初期時点では変更/電断詳細表が調査中だったことも品質注記として保持。
   - reliability: ANALYSIS_HIGH
7. スロパチクエスト — PSO2 天井/朝一リセット判別
   - https://www.slopachi-quest.com/article/phantasystaronline2-tennjou/
   - 設定変更後350G+α、通常時有利区間ランプ基本点灯、朝一点灯=据え置き濃厚/非点灯=設定変更濃厚を確認。
   - reliability: ANALYSIS_SINGLE_SUPPORT
8. イチカツ — PSO2 天井・設定変更
   - https://ichikatsu.com/pso2/
   - 通常800G+前兆、設定変更後350G+前兆、スペック/ベースを照合。
   - reliability: ANALYSIS_SUPPORT
9. K-Navi — 2020年2月新台カレンダー
   - https://p-kn.com/calendar/202002/
   - 全国一斉導入開始日として2020-02-24にDIAMOND / スロまる / PSO2の3機を掲載。
   - reliability: INDUSTRY_DATABASE

## missingFields
- 設定変更時の集中系モード振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一専用モード/当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン発生条件/率: UNVERIFIED_AFTER_RESEARCH
- 設定変更/純電断後の液晶初期ステージ: 初期資料で調査中、確定値を固定せず

## conflicts
- `CONFLICT_RELEASE_DATE_2020_02_24_VS_2020_02_25_VS_2020_03_02`

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_ANALYSIS_SINGLE_DETECTION
status: COMPLETE_CORE_RESET_V07
