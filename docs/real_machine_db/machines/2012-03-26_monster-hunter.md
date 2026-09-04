# パチスロ「モンスターハンター」

machineName: パチスロ「モンスターハンター」
manufacturer: ロデオ
releaseDate: 2012-03-26
releaseDatePrecision: exact_day_conflict
releaseDateNotes: K-Naviおよびパチ＆スロ必勝本は2012-03-26導入。HAZUSEは同一型式モンスターハンターZSを2012-04-02導入開始としており具体日が競合する。時系列漏れ防止のため最古の具体日2012-03-26を本線キーに採用しCONFLICTとして双方保持。
generation: 5号機
systemType: A+ART / ボーナス+ゲーム数上乗せART
formalModelName: モンスターハンターZS
approvalNumber: 1S1230
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## payoutRateBySetting

### HAZUSE系解析値

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.5% |
| 3 | 100.3% |
| 4 | 104.5% |
| 5 | 108.6% |
| 6 | 116.0% |

reliability: ANALYSIS_HIGH
notes: HAZUSE、後年解析DBで同系列を照合。

### パチ＆スロ必勝本 シミュレート値

| 設定 | 機械割 |
|---|---:|
| 1 | 97.30% |
| 2 | 99.05% |
| 3 | 100.92% |
| 4 | 104.90% |
| 5 | 110.12% |
| 6 | 115.89% |

reliability: ANALYSIS_HIGH
notes: 必勝本がシミュレート値と明記。HAZUSE系列と設定2〜5で無視できない差があるため平均せずCONFLICTとして保持。

## initialHitBySetting

### ボーナス合算

| 設定 | ボーナス合算 |
|---|---:|
| 1 | 1/248.2 |
| 2 | 1/242.7 |
| 3 | 1/237.5 |
| 4 | 1/224.4 |
| 5 | 1/211.4 |
| 6 | 1/199.8 |

### BIG合算 / REG系合算 / ART初当たり

| 設定 | BIG合算 | REG系合算 | ART初当たり |
|---|---:|---:|---:|
| 1 | 1/399.6 | 1/655.4 | 1/612.0 |
| 2 | 1/390.1 | 1/642.5 | 1/588.3 |
| 3 | 1/381.0 | 1/630.2 | 1/566.1 |
| 4 | 1/364.1 | 1/585.1 | 1/512.7 |
| 5 | 1/348.6 | 1/537.2 | 1/445.7 |
| 6 | 1/334.4 | 1/496.5 | 1/388.9 |

reliability: ANALYSIS_HIGH_FOR_BONUS__ANALYSIS_SINGLE_FOR_ART_INITIAL
notes: ボーナス合算は必勝本と複数解析で照合。ART初当たりは後年整理DBの導入初期解析値を採用し、完全再現用の契機別内部抽選は収集しない。

## baseGamesPer50

valueBySetting: 30.01G（設定1）〜30.10G（設定6）
sourceDefinition: 1000円あたりのゲーム数（50枚貸し相当）。
reliability: ANALYSIS_HIGH
notes: パチ＆スロ必勝本の通常時小役解析ページによる直接値。

## netIncrease

value: 約+1.5枚/G
reliability: ANALYSIS_HIGH
notes: K-Navi、HAZUSE、必勝本で一致。

## basicPayout

- ラージャンBONUS: 最大24枚
- 大連続狩猟BONUS / 狩猟BONUS: 最大210枚
- BIG BONUS: 最大210枚
- アイルーボーナス: 最大50枚
- ART「モンハンRUSH」: 初期30〜500G+α

reliability: ANALYSIS_HIGH
notes: 必勝本のボーナス構成・ART概要の直接値。K-Navi/HAZUSEでもART初期30〜500G+αを照合。

## modeSpecificMinimumData

- ART「モンハンRUSH」は初期30/50/100/200/300/500Gのゲーム数上乗せ型。
- ART純増約+1.5枚/G。
- 通常時はレア役等からクエストを経由し、討伐成功でARTへ突入する構造。
- 通常天井はボーナス間1400G。
- 天井到達時は300Gまたは500GのARTに1:1で当選すると当時解析に明記。
- ART当選自体ではボーナス間天井の定義上、ボーナス間カウントを区別して扱う。

reliability: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED。設定変更時は天井ゲーム数をリセットし、内部状態を再抽選する。当時必勝本の本機専用ページに直接記載。
carryOverBehavior: 据え置き時のボーナス間天井ゲーム数・内部高確状態の厳密な保持仕様を、本機名を明示する直接資料で今回確定できずUNVERIFIED_AFTER_RESEARCH。設定変更時リセットの反対を推測で補完しない。
powerCycleBehavior: 単純電源OFF→ONのみの場合の天井ゲーム数・内部状態・液晶背景復帰を本機固有の直接資料で確定できずUNVERIFIED_AFTER_RESEARCH。後継モンハンシリーズの仕様は流用しない。
gameCounterReset: CONFIRMED_RESET_ON_SETTING_CHANGE。ボーナス間1400G天井ゲーム数は設定変更でリセット。
ceilingAfterReset: 通常天井1400G。設定変更専用の短縮天井はNONE_CONFIRMED_AFTER_RESEARCH。
modeAfterReset: 規定ゲーム数解除モードは非該当。設定変更時は内部高確状態を再抽選。
stateAfterReset: CONFIRMED_STATE_REROLL。設定1〜3は低確A75.00% / 高確A15.00% / 高確B5.00% / 高確C5.00%。設定4〜6は低確A66.67% / 高確A23.33% / 高確B5.00% / 高確C5.00%。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: 設定変更後は設定1〜3で25.00%、設定4〜6で33.33%が高確A/B/Cスタート。短縮天井や設定変更専用ART直撃率はNONE_CONFIRMED_AFTER_RESEARCH。
resetPenalties: 前日のボーナス間天井進捗が設定変更で消失する。その他の設定変更専用不利はNONE_CONFIRMED_AFTER_RESEARCH。
resetDetection: 設定変更後の開始背景は一律固定ではない。ボーナス・ART中・クエストランプ点滅中ならポッケ村外観、ミッション・クエスト中なら突入直前背景、それ以外では設定変更前背景を引き継ぐと解析されているため、液晶背景だけによる単純な変更判別は困難。ガックン等の本機固有直接根拠はUNVERIFIED_AFTER_RESEARCH。
publicMorningNumbers: setting1-3 high-state total=25.00%; setting4-6 high-state total=33.33%; shortened ceiling=NONE_CONFIRMED; normal ceiling=1400G
numericResetData: setting1-3 lowA=75.00%, highA=15.00%, highB=5.00%, highC=5.00%; setting4-6 lowA=66.67%, highA=23.33%, highB=5.00%, highC=5.00%; normalCeiling=1400G; ceilingART=300G_or_500G_1to1

notes:
- 「パチスロ モンスターハンター / モンスターハンターZS / モンハン / ロデオ / 1S1230」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 高確 / モード / ガックン」を組み替えて検索。
- 必勝本の本機専用「設定変更&天井情報」で設定変更時のゲーム数リセットと高確移行率を直接回収。
- 据え置き・単純電断・ガックンは本機固有の直接根拠を確定できなかったため一般則や後継シリーズから補完しない。

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_STATE__UNVERIFIED_FOR_CARRYOVER_POWER_CYCLE_GAKKUN

## conflicts

- releaseDate: K-Navi/必勝本=2012-03-26、HAZUSE=2012-04-02。同一型式モンスターハンターZSについて具体日が競合。
- payoutRateBySetting: HAZUSE系=97.1/98.5/100.3/104.5/108.6/116.0%、必勝本シミュレート=97.30/99.05/100.92/104.90/110.12/115.89%。定義差の可能性を残し平均化しない。

## missingFields

- carryOverBehavior exact machine-specific handling
- powerCycleBehavior exact machine-specific handling
- resetDetection gakkun/physical reel behavior

## sources

取得日: 2026-09-05

1. K-Navi「パチスロ『モンスターハンター』」 https://p-kn.com/slot/1596/
   - 2012-03-26ホール導入開始、ART純増約1.5枚/G、初期30〜500G+α。
   - reliability: ANALYSIS_HIGH
2. パチ＆スロ必勝本「基本スペック」 https://p.hisshobon.jp/machine/1988/1/33626
   - 2012-03-26導入、設定別ボーナス合算、シミュレート機械割。
   - reliability: ANALYSIS_HIGH
3. パチ＆スロ必勝本「設定変更&天井情報」 https://p.hisshobon.jp/machine/1988/1/33904
   - 設定変更で天井ゲーム数リセット、設定1〜3/4〜6別の高確移行率、開始背景処理、1400G天井、300/500G ART 1:1。
   - reliability: ANALYSIS_HIGH
4. パチ＆スロ必勝本「ART概要」 https://p.hisshobon.jp/machine/1988/1/33633
   - ART抽選契機、初期30〜500G+α、純増約+1.5枚/G。
   - reliability: ANALYSIS_HIGH
5. パチ＆スロ必勝本「小役確率」 https://p.hisshobon.jp/machine/1988/1/34432
   - 1000円あたり30.01G（設定1）〜30.10G（設定6）。
   - reliability: ANALYSIS_HIGH
6. パチ＆スロ必勝本「ボーナス&小役構成」 https://p.hisshobon.jp/machine/1988/1/33627
   - 各ボーナス最大獲得枚数。
   - reliability: ANALYSIS_HIGH
7. HAZUSE「パチスロ『モンスターハンター』」 https://hazuse.com/machine/pachislot/1S1230/
   - 型式モンスターハンターZS、検定番号1S1230、2012-04-02導入、機械割97.1〜116.0%、1400G天井。
   - reliability: ANALYSIS_HIGH / OLD_DATABASE
8. パチナビ「パチスロ モンスターハンター（初代）」 https://pachinavi.net/machines/monhan-1/
   - 型式/検定番号、BIG/REG系/ART初当たり整理値、機械割系列。
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE_DATABASE
9. GameBusiness.jp「パチスロ『モンスターハンター』3月に全国展開へ」 https://www.gamebusiness.jp/article/2012/02/14/5426.html
   - フィールズ発表、ロデオ製、2012年3月稼働予定。
   - reliability: INDUSTRY
