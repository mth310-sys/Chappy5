# それいけ！こすみっくヒーローズ

machineName: それいけ！こすみっくヒーローズ
manufacturer: オーイズミ
releaseDate: 2012-06-11
releaseDatePrecision: exact_day_analysis_source
releaseDateNotes: HAZUSEが導入開始日2012-06-11を明記。P-WORLD、5号機クロニクル、pacnkは2012年6月導入表記で整合。
generation: 5号機
systemType: ART主体 / ボーナス+セットストック&継続率ART
formalModelName: それいけ！こすみっくヒーローズE
approvalNumber: 2S0164
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 2 | 98.2% |
| 3 | 100.1% |
| 4 | 103.6% |
| 5 | 107.0% |
| 6 | 111.2% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガ、5号機クロニクル、pacnkで一致。HAZUSEは97/98/100/104/107/111%の丸め表記なのでCONFLICTではなく丸め差として保持。

## initialHitBySetting

| 設定 | ART初当たり | ボーナス合成 |
|---|---:|---:|
| 1 | 1/613.95 | 1/468.11 |
| 2 | 1/507.82 | 1/468.11 |
| 3 | 1/526.15 | 1/468.11 |
| 4 | 1/398.60 | 1/468.11 |
| 5 | 1/381.04 | 1/451.97 |
| 6 | 1/274.12 | 1/436.91 |

白7揃い: 設定1～4 1/504.12、設定5 1/485.45、設定6 1/468.11
青絵柄: 全設定1/32768
赤絵柄: 全設定1/8192
reliability: ANALYSIS_HIGH
notes: パチマガスロマガの設定別公開値を採用。HAZUSEの「合成確率」1/265.6～1/168.4はボーナス+ART総合初当たりとみられる。pacnkは同じ数列を「初当りART」と表記しており、パチマガスロマガのART初当たり1/613.95～1/274.12と定義が衝突するため、pacnkのラベルはCONFLICT_NOTEとして扱う。

## baseGamesPer50

value: 約36.3～36.8G / 1000円（50枚）
reliability: ANALYSIS_HIGH
notes: パチマガスロマガが「1000円あたりのゲーム数 36.3～36.8G」と明記。

## netIncrease

value: 約+3.0枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLD、パチマガスロマガ、後年回顧資料で一致。ART前準備AT「撃モード」は約+1.0枚/G。

## basicPayout

- ボーナス: 約20枚（29枚払い出しで終了）。通常時のボーナス当選はART突入確定。
- ART「バトルモード」: 1セット30G、純増約+3.0枚/G、セットストック+継続率型。
- ARTループ率: 最大96%。
- ART突入前/セット間の「撃モード」: 平均約7.3G、純増約+1.0枚/G。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は低確/高確が存在し、レア小役成立時のART当選率が内部状態で変化。
- ART間天井: 1280G消化後、32G前兆を経由してART突入（P-WORLD）。
- 設定変更後およびART終了後は128G以内のART当選率が上昇する朝一/終了後ゾーンが存在（パチマガスロマガ）。
- ART中はA～Dの内部モードがあり、セット上乗せ率・メーターアップ率が異なるが、通常の全モード移行率は実機完全再現用のため収集対象外。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_MACHINE_SPECIFIC_MORNING_BEHAVIOR
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CEILING_PROGRESS_CLEARED_AND_POST_RESET_128G_ART_CHANCE_UP_CONFIRMED. 天井狙い資料で本機を「宵×」=設定変更で天井G数リセットと明記。パチマガスロマガは設定変更後128G以内のART当選率アップを明記。
carryOverBehavior: CEILING_PROGRESS_CARRIES_OVER_IF_NOT_SETTING_CHANGED__SUPPORTED_BY_YOIGOSHI_CLASSIFICATION. 天井狙い資料の「宵×」定義は設定変更時のみ天井G数リセットを意味し、据え置き時は宵越し可能として扱う。内部低高状態や128Gゾーンの厳密な据え置き契約は別途UNVERIFIED。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 「電源OFF ON / 電源入切 / 電断 / バックアップ」を組み替えて再探索したが、単純電源OFF→ONのみで天井G数・内部状態・128Gゾーンがどう扱われるか本機固有の直接資料を確定できず。
gameCounterReset: CLEAR_ON_SETTING_CHANGE. 2-9伝説の天井一覧で本機は「宵×」に分類され、同ページ定義上「設定変更で天井G数リセット」。
ceilingAfterReset: NORMAL_CEILING_RESTARTS__NO_SHORTENED_CEILING_VALUE_CONFIRMED. 通常天井はART間1280G+32G前兆。設定変更後の天井そのものが短縮される公開数値は確認できず。天井狙い一覧の「設定変更後330」は狙い目開始ゲーム数であり、天井ゲーム数ではないため短縮天井値として採用しない。
modeAfterReset: SPECIAL_POST_RESET_128G_HIGHER_ART_HIT_RATE_CONFIRMED__UNDERLYING_MODE_DISTRIBUTION_UNVERIFIED. 設定変更後128G以内のART当選率上昇は確認。朝一専用モード名称・移行率は十分な再探索後も確定できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH. 通常時低確/高確の存在は確認したが、設定変更時の低確/高確再抽選率や固定状態は本機固有資料で確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: POST_RESET_128G_ART_HIT_RATE_UP. 設定変更後128G以内はART当選率がアップ。
resetPenalties: PREVIOUS_DAY_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE. 前日のART間天井進捗は設定変更で消失。
resetDetection: INDIRECT_128G_BEHAVIOR_ONLY__GAKKUN_AND_DISPLAY_UNVERIFIED_AFTER_RESEARCH. 設定変更後128Gの当選率上昇は間接的推測材料だが確定判別ではない。ガックン、初期出目、液晶表示など本機固有の確定変更判別は再探索後も確認できず。
publicMorningNumbers: POST_RESET_128G_WINDOW_CONFIRMED__EXACT_HIT_RATE_UNVERIFIED
numericResetData:
- 設定変更後の朝一優遇区間: 1～128G
- 設定変更後の具体的128G以内ART当選率: UNVERIFIED_AFTER_RESEARCH
- 設定変更後の天井狙い目目安: 330G（後年天井狙い資料の戦略値。天井短縮値ではない）

notes:
- 「それいけ！こすみっくヒーローズ / それいけ!こすみっくヒーローズ / こすみっくヒーローズ / それいけ！こすみっくヒーローズE / オーイズミ」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1280G / 128G / モード / 高確 / 状態 / ガックン」を組み替えて再探索。
- HAZUSE、P-WORLD、パチマガスロマガ、pacnk、5号機クロニクル、後年天井一覧/回顧資料を横断。
- 「設定変更後330G」は天井狙いの開始目安であり、設定変更後天井=330Gを意味しない。定義を分離して保存。
- 設定変更後128Gの当選率上昇は確認できたが、その正確な当選率/モード振り分けは確認できなかったため推定しない。

resetQaReliability: ANALYSIS_HIGH_FOR_COUNTER_RESET_AND_128G_RESET_BENEFIT__UNVERIFIED_AFTER_RESEARCH_FOR_PURE_POWER_CYCLE_STATE_DISTRIBUTION_AND_GAKKUN

## conflicts

- HAZUSEの機械割は97/98/100/104/107/111%、パチマガスロマガ・5号機クロニクル・pacnkは97.3/98.2/100.1/103.6/107.0/111.2%。丸め差と判断し双方保持。
- pacnkはHAZUSEの総合「合成確率」と同じ1/265.6～1/163.4系列を「初当りART」と表記する一方、パチマガスロマガのART初当たりは1/613.95～1/274.12。定義/ラベル競合として平均せず、ART初当たり主表はパチマガスロマガの専用解析値を採用。

## missingFields

- 設定変更後128G以内の具体ART当選率
- 設定変更時の低確/高確状態振り分け、朝一モード振り分け
- 単純電源OFF→ONのみの場合の天井G数/内部状態/朝一ゾーンの扱い
- ガックン/初期出目/液晶表示による確定的設定変更判別

## sources

取得日: 2026-09-05

1. HAZUSE https://hazuse.com/machine/pachislot/2S0164/
   - 型式名それいけ！こすみっくヒーローズE、検定番号2S0164、導入開始2012-06-11、総合合成確率、丸め機械割。
   - reliability: ANALYSIS_HIGH
2. P-WORLD https://www.p-world.co.jp/machine/database/6723
   - 5号機ART、純増約3.0枚/G、ART間1280G+32G前兆天井、30G ART、ボーナス約20枚相当、型式/検定番号、機械割範囲。
   - reliability: DATABASE_HIGH
3. パチマガスロマガ スペック https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/28/a.php
   - 純増3.0枚/G、1セット30G、最大96%ループ、ボーナス約20枚、設定変更後/ART終了後128G以内ART当選率アップ。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
4. パチマガスロマガ ボーナス確率 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/28/h.php
   - 設定別ART初当たり、ボーナス合成、白7/青/赤確率、PAYOUT。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
5. パチマガスロマガ 小役確率 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/28/c.php
   - 1000円あたり36.3～36.8G。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
6. pacnk https://pacnk.com/slot/2012/cosmicheros/top.php
   - 2012年6月、機械割、低確/高確構造。初当りART表記は別資料と定義競合のため主ART値には不採用。
   - reliability: ANALYSIS_SINGLE_WITH_CONFLICT_NOTE
7. 5号機クロニクル https://5goki.com/oizumi
   - 2012年6月導入、設定別機械割97.3～111.2%。
   - reliability: RETROSPECTIVE_DATABASE
8. 2-9伝説 天井狙い一覧 https://2-9densetsu.com/blog-entry-311-html/
   - 同ページ定義「宵×=設定変更で天井G数リセット」。本機を「ART間690 宵× / 設定変更後330」と掲載。690/330は狙い目開始値であり天井値ではない。
   - reliability: ANALYSIS_RETROSPECTIVE
9. パチ7回顧記事 https://pachiseven.jp/columns/column_detail/17464
   - MB搭載による当時最速級の純増3枚/Gという回顧。性能補助照合のみ。
   - reliability: RETROSPECTIVE_SINGLE
