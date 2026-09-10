# No.1270 パチスロおそ松さん～驚～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロおそ松さん～驚～
- manufacturer: ディ・ライト (D-light) / 大一商会グループ
- releaseDate: 2019-03-04
- generation: 6号機
- systemType: AT / 疑似ボーナス主体 / CZ・ゲーム数解除
- formalModelNameCanonical: `Sパチスロおそ松さん`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | BIG | REG | ボーナス初当たり | 機械割 |
|---:|---:|---:|---:|---:|
| 1 | 1/296.5 | 1/345.9 | 1/298.3 | 97.5% |
| 2 | 1/283.4 | 1/338.6 | 1/291.4 | 99.1% |
| 3 | 1/269.5 | 1/330.6 | 1/284.1 | 100.6% |
| 4 | 1/241.2 | 1/305.4 | 1/251.9 | 104.5% |
| 5 | 1/219.1 | 1/293.1 | 1/240.8 | 108.1% |
| 6 | 1/185.9 | 1/342.3 | 1/230.2 | 112.1% |

- 当時業界記事、P-WORLD、ちょんぼりすた、すろぱちくえすとで主要値を照合。

### baseGamesPer50
- **約50.4G/50枚**（資料に約50G表記もあり、丸め差）。

### netIncrease / basicPayout
- 疑似ボーナスAT純増: **約5.0枚/G**。
- BIG: **45G / 平均約225枚**。
- REG: **平均約50枚**。
- SUPERおそMAXさんBONUS: BIG 0G連が**約80%ループ**。
- F6チャンス: 天井から突入するプレミアCZ、平均ストック**約2.4個**。

## modeSpecificMinimumData
- 通常時はゲーム数解除またはCZからボーナスを目指す。
- 通常時天井: **1000G** → プレミアCZ「F6チャンス」。
- 設定変更後 / 有利区間リセット直後は最大天井**900G**。
- ボーナス後は引き戻し「ワクワクモード」へ移行し、天国なら100G以内の当選が確定とする解析あり。

## resetBehavior
### settingChangeBehavior
- 天井ゲーム数: **RESET、最大900Gへ短縮**。
- 内部状態: **RESET / 再抽選**とする一撃系解析。ちょんぼりすた初期表では調査中表記が残るため、後発解析を優先しつつ履歴差を注記。
- モード: **再抽選**。1G目の成立役によりモードA～Cを抽選とする解析。
- 液晶ステージ: **おそ松ステージ**。
- 有利区間: **設定変更時にリセット**。

### carryOverBehavior
- 据え置きは天井・内部状態・モードを引き継ぐ運用として、純電源OFF→ON時の解析と整合。
- 据え置き単独条件を純電断から完全分離した公開契約は限定的なため、内部状態の細部は `PARTIAL_CROSSCHECKED`。

### powerCycleBehavior
- 純電源OFF→ON時:
  - 天井: **引き継ぐ**
  - 内部状態: **引き継ぐ**
  - モード: **引き継ぐ**
  - 液晶: **おそ松ステージ**
- 設定変更との差を一撃系解析で直接確認。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRY_OVER**。
- 通常天井1000Gに対し、設定変更後は最大900G。

### ceilingAfterReset
- **900G**。通常1000Gから**100G短縮**。
- 同機は通常時からボーナス中まで有利区間として扱われ、非リミット時はボーナス後100Gで有利区間リセット、その後の天井も900Gとなる解析がある。

### modeAfterReset
- 設定変更時: **再抽選**。
- 1G目の小役でモードA～C抽選。
- 純電断: **引継ぎ**。
- 全モード移行テーブルは実機再現用詳細のため本レコードでは収集対象外。

### stateAfterReset
- 設定変更: **内部状態再抽選/リセット**。
- 純電断: **引継ぎ**。
- ちょんぼりすたの初期朝一欄では内部状態「調査中」表記だったが、後発の一撃系解析でRESET/引継ぎ表が公開されたため更新後解析をcanonicalとする。

### advantageousSectionReset
- 有利区間リセット契機として:
  - **設定変更時**
  - **ボーナス後100G目（非リミット到達時）**
  - **有利区間リミット到達時**
  が解析で明示。
- 当時6号機上限: 有利区間累計1500G / 一撃2400枚。
- 設定変更後は有利区間開始基準の関係で天井が900Gへ100G短縮。

### resetBenefits
- 最大天井 **1000G → 900G** の100G短縮。
- 天井恩恵はF6チャンスで、平均ストック約2.4個。

### resetPenalties
- 据え置き時に残っていた天井進行・内部状態・モードは設定変更で消失。
- 公開された設定変更専用の追加不利率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更と純電断で液晶ステージがともにおそ松ステージのため、ステージ単独では判別不可。
- 本機固有の有利区間ランプ朝一判別契約、ガックン発生条件・発生率について、表記揺れ/型式/メーカー/リセット/据え置き/電源OFF ON/ガックン検索を変えて再探索したが確定値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- normalCeiling: **1000G**。
- resetCeiling: **900G**。
- ceilingShortening: **100G**。
- F6ChanceAverageStock: **約2.4個**。
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## releaseDate / formalModel
- 2019-03-04導入はパチビー、すろぱちくえすと、ちょんぼりすた、モゲスロで一致。
- 型式名 `Sパチスロおそ松さん` は中古実機DBで確認。
- 検定番号は「機種名/型式/D-light/検定番号/公示」等で再探索したが今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

## missingFields
- 検定番号。
- 本機固有ガックンの発生条件・発生率。
- 朝一有利区間ランプのみで設定変更/据え置きを判別する確定契約。

## conflicts / sourceEvolution
- `SOURCE_EVOLUTION_INTERNAL_STATE_INITIAL_UNKNOWN_TO_LATER_RESET_TABLE`
  - ちょんぼりすた初期朝一表: 設定変更/電源OFF→ONの内部状態は「調査中」。
  - 後発一撃解析: 設定変更=リセット、電源OFF→ON=引き継ぎ。
  - 数値競合ではなく解析公開時点の更新差として後発直接表をcanonical。

## sources
取得日: 2026-09-11
1. グリーンべると — https://web-greenbelt.jp/00011109/ — 2019-02-27業界記事、純増約5枚/G、BIG/REG/初当たり端点、出玉率端点、平均225/50枚、80% 0G連 — reliability: `INDUSTRY`
2. パチビー — https://www.pachibee.jp/movies/index/15197 — 2019-03-04導入、6号機AT、純増約5.0枚/G — reliability: `INDUSTRY_MEDIA`
3. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/12/a.php — 純増5.0枚/G、BIG/REG方式、80%ループ — reliability: `ANALYSIS_HIGH`
4. P-WORLD — https://www.p-world.co.jp/machine/database/8885 — 設定別BIG/REG/初当たり — reliability: `MACHINE_DB_HIGH`
5. すろぱちくえすと 設定 — https://www.slopachi-quest.com/article/osomatsusan-odoroki-settei/ — 50.4G/50枚、純増、ゲーム性 — reliability: `CONTEMPORARY_ANALYSIS`
6. すろぱちくえすと リセット — https://www.slopachi-quest.com/article/osomatsusan-odoroki-reset-2/ — 朝一/設定変更考察 — reliability: `CONTEMPORARY_ANALYSIS`
7. ちょんぼりすた — https://chonborista.com/slot/d-light/75608/comment-page-2/ — 設定別性能、1000G/リセット900G、有利区間リセット契機、初期朝一表 — reliability: `ANALYSIS_HIGH`
8. 一撃 — https://1geki.jp/slot/s_osomatsu_o/3/ — 設定変更=天井/内部状態RESET・モード再抽選、電源OFF ON=引継ぎ、液晶ステージ — reliability: `ANALYSIS_HIGH`
9. 中一商事 — https://www.nakaiti.com/html/Dlight011.html — 型式名 `Sパチスロおそ松さん`、基本仕様 — reliability: `SECONDARY_MACHINE_DB`
10. モゲスロ 2019新台カレンダー — https://moge-site.com/new-slot2019 — 2019-03-04群でRe:ゼロ/おそ松さん～驚～を確認 — reliability: `CONTEMPORARY_SCHEDULE_DB`

## confidence
- releaseDate/performanceCore: `INDUSTRY_PLUS_ANALYSIS_HIGH_CROSSCHECKED`
- formalModelName: `SECONDARY_MACHINE_DB`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- resetBehaviorCore: `ANALYSIS_HIGH_CROSSCHECKED`
- advantageousSectionReset: `ANALYSIS_HIGH`
- resetDetection: `PARTIAL_RESEARCH_EXHAUSTED`
