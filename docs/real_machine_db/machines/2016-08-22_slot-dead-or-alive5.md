machineName: SLOTデッド オア アライブ5
manufacturer: ユニバーサルブロス
releaseDate: 2016-08-22
recordNumber: 1000
generation: 5号機 / 5.5号機期
systemType: A+ART
formalModelName: デッドオアアライブ5EK
certificationNumber: 6S0382
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- K-Navi、パチ7、HAZUSE、複数当時解析でホール導入開始2016-08-22が一致。
- HAZUSEで型式名 `デッドオアアライブ5EK`、検定番号 `6S0382` を確認。
- メーカー表記はユニバーサルブロス。解析サイトの「ユニバーサル」はブランド略記として扱う。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.6% |
| 2 | 99.6% |
| 3 | 100.7% |
| 4 | 103.1% |
| 5 | 106.1% |
| 6 | 110.0% |
- 複数解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「霧幻RUSH」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/449.6 |
| 2 | 1/422.8 |
| 3 | 1/415.3 |
| 4 | 1/375.9 |
| 5 | 1/349.5 |
| 6 | 1/291.7 |

### BIG
- 設定1: 1/963.8
- 設定4: 1/910.2
- 設定5: 1/862.3
- 設定6: 1/819.2
- 設定2/3の独立BIG値は今回参照した表で省略されているため推測で補完しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 代表値: **約37G/50枚**。
- 設定別掲載値: 設定1 37.3G / 設定4 37.2G / 設定5 37.1G / 設定6 37.0G。設定2/3は掲載表で省略。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「霧幻RUSH」: **約1.74枚/G**（簡易資料では約1.7枚/G表記）。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: **約220枚**。
- ART「霧幻RUSH」: ナビ回数管理型。「霧幻JAC」を全消化するまで継続。
- 霧幻JAC1個はベルナビ5回または50回で管理。
- 平均継続ゲーム数目安: 通常JAC約20G / 緑約30G / 赤約60G / 真約200G。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナス&ART間天井: **1199G**（CZ中ゲーム数は天井計算に含まれないと解析）。
- 天井到達時は上乗せ特化ゾーン「α-BURST」を経由してART突入。
- 通常時にCZ高確等の内部状態あり。
- ART後/CZ後などにレジェンドモード移行可能性があるが、通常時全内部テーブルは完全再現用のため収集範囲外。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井RESET**。
- 内部状態は **再抽選**。
- 朝一ステージは **FS号**。
- リセット時専用の強い初当たり優遇は当時解析で「特に強い挙動などは無し」とされる。

### carryOverBehavior
- 据え置き営業跨ぎでは、設定変更を行わないため天井進捗・内部状態は引継ぎ扱いとする公開比較表を採用。
- ART/CZ等の閉店時特殊状態について完全再現用の細部は収集対象外。公開マクロ契約として天井/内部状態CARRYOVERを記録。

### powerCycleBehavior
- 純電源OFF→ONでは **天井CARRYOVER**。
- 内部状態も **CARRYOVER**。
- 設定変更時との主要差は、設定変更では天井RESET・内部状態再抽選、純電断では双方引継ぎ。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRYOVER**。
- 対象はボーナス&ART間1199G天井進捗。

### ceilingAfterReset
- 設定変更後も天井自体は **1199G**。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset
- 朝一専用ゲーム数モード/専用天国モードの公開根拠は **NONE_CONFIRMED_AFTER_RESEARCH**。
- レジェンドモード等通常時内部モードの設定変更時詳細振り分けは、物差し用途を超える全テーブルとして未収集。

### stateAfterReset
- 設定変更: **内部状態再抽選**。
- 純電源OFF→ON: **内部状態CARRYOVER**。
- 設定変更時の状態別公開数値は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の短縮天井・確定CZ・初当たり優遇などは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 当時解析は「リセット時に特に強い挙動などは無し」と明記。

### resetPenalties
- 前日から進んだ1199G天井進捗と内部状態を失うため、宵越し狙いには設定変更が不利。
- その他の設定変更専用ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 設定変更時の朝一ステージはFS号。
- ただしFS号は通常ステージでもあるため、FS号開始だけを設定変更確定判別とは扱わない。
- 本機固有のガックン、初期出目、ランプによる確定判別は検索語・資料系統を変更して再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- 設定変更後短縮天井: **NONE_CONFIRMED**。
- 設定変更時モード/状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一一定G以内の当選率/専用恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 導入日はK-Navi・パチ7・HAZUSE・当時解析で2016-08-22が一致し高信頼。
- 2016-08-08候補として前handoffに記載されていた「メタルギア ソリッド スネークイーター」「乱嵐エイサー-30」は、PiDEA設置期限一覧の日付を全国初導入日と誤認した資料汚染。メタルギアは当時PiDEA記事で納品10/16～、複数解析で10/17導入、乱嵐エイサー-30はK-Naviで9/20導入。したがって08/08本線には登録しない。
- 2016-08-15のALL7掲載「スーパー海物語」はパチンコCRスーパー海物語系であり本パチスロDB対象外。

## conflicts
- `FALSE_DATE_SOURCE_PIDEA_INSTALLATION_DEADLINE_LIST_2016_08_08`: PiDEAの5号機設置期限一覧はメタルギア/乱嵐エイサー-30を2016-08-08と掲載するが、各機種の当時導入資料と不一致。全国初導入日ソースとして使用しない。

## sources
取得日: 2026-09-08

1. K-Navi — SLOTデッド オア アライブ5
   - https://p-kn.com/slot/2564/
   - 導入開始2016-08-22、A+ART
   - reliability: INDUSTRY
2. P-WORLD — SLOTデッド オア アライブ5
   - https://www.p-world.co.jp/machine/database/8113
   - ART純増約1.74枚/G、BIG約220枚、JAC構造
   - reliability: INDUSTRY
3. PiDEA X — 「SLOTデッド オア アライブ5」を新筐体で発表
   - https://www.pidea.jp/articles/%E3%80%8CSLOT%E3%83%87%E3%83%83%E3%83%89%20%E3%82%AA%E3%82%A2%20%E3%82%A2%E3%83%A9%E3%82%A4%E3%83%965%E3%80%8D%E3%82%92%E6%96%B0%E7%AD%90%E4%BD%93%E3%81%A7%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB
   - A+ART、BIG約220枚、ART純増約1.74枚/G
   - reliability: INDUSTRY
4. ちょんぼりすた — デッドオアアライブ5
   - https://chonborista.com/slot/universal-slot/22945/
   - 設定別機械割/ART初当たり、約37G/50枚、1199G天井、設定変更/純電断比較
   - reliability: ANALYSIS_HIGH
5. HAZUSE — SLOTデッド オア アライブ5
   - https://hazuse.com/machine/pachislot/6S0382/
   - 型式名デッドオアアライブ5EK、検定番号6S0382、導入開始2016-08-22
   - reliability: ANALYSIS_HIGH
6. スロット解析情報~すろかい~ — DEAD OR ALIVE5
   - https://slotkaiseki.hatenablog.com/entry/DEAD_OR_ALIVE5
   - 設定別性能、約37G/50枚、1199G天井、設定変更時天井RESET
   - reliability: ANALYSIS_SINGLE
7. ALL7.jp — 2016年8月導入予定一覧
   - https://www.all7.jp/plans/index/2016/08
   - 2016-08-22導入予定
   - reliability: INDUSTRY
8. PiDEA X — 5号機設置期限一覧
   - https://www.pidea.jp/articles/1620982702
   - 08/08誤認候補の検出用。導入日正本には使用しない。
   - reliability: CONFLICT_FOR_RELEASE_DATE_USE

## missingFields
- 設定2/3の独立BIG確率（参照した表で省略）
- 設定変更時の内部状態別再抽選数値
- 本機固有の確定的変更判別

## QA note
- 性能コアとv0.7 resetBehaviorのホール経営シミュレーション用マクロ挙動を収録。
- 08/08候補の日付資料汚染を訂正し、08/02～08/21に全国初導入の未登録パチスロを今回固定できなかったため、次の実導入日ブロック2016-08-22へ前進した。
