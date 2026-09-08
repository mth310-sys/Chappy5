machineName: アナザーゴッドポセイドン-海皇の参戦-
manufacturer: エレコ
releaseDate: 2017-03-21
recordNumber: 1059
generation: 5号機 / 5.5号機期
systemType: A+ART / CZ / セット管理型ART
formalModelName: アナザーゴッドポセイドンWP
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 2017-03-21全国導入はユニバーサル系公式告知、当時攻略、一撃で一致。
- 業界一次記事ではエレコ製として発表。
- 型式名 `アナザーゴッドポセイドンWP` は中古実機/取扱説明書系複数資料で一致。
- 検定番号は機種名・型式・メーカー・検定/認定/6S系の検索語変更後も高信頼な直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: OFFICIAL/INDUSTRY_FOR_IDENTITY_AND_DATE; ANALYSIS_HIGH_FOR_FORMAL_MODEL

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.8% |
| 2 | 99.7% |
| 3 | 101.1% |
| 4 | 104.0% |
| 5 | 106.5% |
| 6 | UNVERIFIED / CONFLICTING_ESTIMATES |
- 設定1～5は一撃・ちょんぼりすた等で一致。
- 設定6は当時解析で「未公表」。後年/実戦由来に約112%と118%暫定があり定義・根拠が弱く競合するためcanonical数値にしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_SETTINGS_1_TO_5; CONFLICT_SETTING6_ESTIMATES

## initialHitBySetting
| 設定 | GG初当たり |
|---:|---:|
| 1 | 1/553.0 |
| 2 | 1/511.3 |
| 3 | 1/490.1 |
| 4 | 1/407.3 |
| 5 | 1/378.5 |
| 6 | 1/241.5 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約35.7G/50枚。概要表では約35G表記もあり、丸め差として別記。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「GOD GAME」: 約2.0枚/G。
reliability: OFFICIAL_FAMILY_DESCRIPTION_AND_ANALYSIS_HIGH

## basicPayout
- ART「GOD GAME」: 1セット50G+α。
- GOD揃い: 1/8192、GG100G+ストック3個以上（うち1回以上はトライデントアタック）。
- BB（G-ROAD）: 144枚を超える払い出しで終了。
- MB: 13枚を超える払い出しで終了。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時天井: 1800G消化で前兆後GG当選。
- G-ROADを挟んでも天井進捗は有効。ただしG-ROAD消化中は天井G数に含まれない。
- 通常時はGG抽選モード、プロメテウスゾーン高確抽選モード、深海モードを持つ。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_NUMERIC_RESET_MODE_DISTRIBUTION_AND_POWER_CYCLE_CARRYOVER
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESET。
- GG抽選モード: RESELECT。
- プロメテウスゾーン高確抽選モード: RESELECT。
- 深海モード: CLEAR。
- 開始ステージ: アッティカ。
- 初期液晶出目: 「1・2・3」。
- RT状態: 設定変更後はRT0から開始するとの一撃自社調査あり。
reliability: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_RESET_TABLE

### carryOverBehavior
- 据え置きは設定変更処理を行わないため、天井・GG抽選モード・PZ高確抽選モード・深海モードの前日進捗を保持する挙動が実用上の前提。
- 本機はRT状態を利用した据え置き判別手順が公開されている。
reliability: ANALYSIS_HIGH_FOR_DETECTION; DIRECT_POWER_CYCLE_TABLE_SUPPORTS_CARRYOVER

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数CARRYOVER。
- GG抽選モードCARRYOVER。
- プロメテウスゾーン高確抽選モードCARRYOVER。
- 深海モードCARRYOVER。
- ステージ/出目も基本CARRYOVER。ただし電断後2時間以上でステージはアッティカ、出目は「1・2・3」へ見た目上初期化。
reliability: ANALYSIS_HIGH_DIRECT_TABLE

### gameCounterReset
- 設定変更: ART天井1800Gの進捗RESET。
- 純電源OFF→ON: CARRYOVER。

### ceilingAfterReset
- 設定変更後も天井は1800G。固定短縮天井なし。
- 公開されたリセット専用短縮G数: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH

### modeAfterReset
- GG抽選モードを設定別に再抽選。
- 設定変更時は低確への移行なし。
- 深海モードはクリア。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

### stateAfterReset
- プロメテウスゾーン高確抽選モードを再抽選。
- RT0スタート情報あり。
- 純電断では各モードを引継ぎ。
reliability: ANALYSIS_HIGH

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時はGG抽選モードが低確を選ばず、通常以上から開始。
- 高設定ほど天国準備/天国ショート/天国ロングへ振られやすい公開テーブルがある。
- PZ高確抽選モードも約19.9%が高確準備以上から開始。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

### resetPenalties
- 前日の天井進捗、GG抽選モード、PZ高確抽選モード、深海モードを失う。
- 天井自体は1800Gのままで固定短縮されない。
reliability: ANALYSIS_HIGH

### resetDetection
- 設定変更後はRT0から開始。RT0では通常リプレイのみ成立し、押し順黄7こぼし（0枚）でRT1へ移行。
- RT1でしか成立しない押し順リプレイを見極める中押し手順により、朝一の据え置き判別が可能と一撃が公開。
- 設定変更時はステージ=アッティカ、液晶出目=1・2・3だが、純電断でも2時間以上で同表示になるため、それ単独では確定変更判別にならない。
reliability: ANALYSIS_HIGH_MACHINE_SPECIFIC; SELF_TESTED_BY_SOURCE

### numericResetData
#### GG抽選モード設定変更時振り分け
| 移行先 | 設定1 | 設定2 | 設定3 | 設定4 | 設定5 | 設定6 |
|---|---:|---:|---:|---:|---:|---:|
| 低確 | 0% | 0% | 0% | 0% | 0% | 0% |
| 通常 | 70.5% | 70.3% | 65.2% | 60.2% | 55.1% | 50.0% |
| 天国準備 | 19.9% | 21.1% | 22.7% | 24.2% | 25.8% | 27.3% |
| 天国ショート | 4.3% | 7.4% | 10.5% | 13.7% | 16.8% | 19.9% |
| 天国ロング | 0.4% | 0.8% | 1.2% | 1.6% | 2.0% | 2.3% |
| 超天国 | 0.4% | 0.4% | 0.4% | 0.4% | 0.4% | 0.4% |

#### PZ高確抽選モード設定変更時振り分け
| 移行先 | 振り分け |
|---|---:|
| PZ通常 | 80.1% |
| PZ高確準備 | 18.8% |
| PZ高確 | 0.8% |
| PZ超高確 | 0.4% |
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

## dataQualityNotes
- 2017-03-21導入は公式系告知・一撃・複数解析で一致。
- 設定1～5機械割、GG初当たり、ART純増、天井は複数解析で一致。
- 設定6機械割は当時未公表で、後年推定約112%と暫定118%が競合。推測値をcanonicalにしない。
- resetBehaviorは一撃の2017-04-28設定変更/電断表と2017-05-29据え置き判別手順が本機固有の直接資料として強い。

## conflicts
- `SETTING6_PAYOUT_UNPUBLISHED_WITH_CONFLICTING_ESTIMATES_APPROX_112_VS_118_PROVISIONAL`。
- baseGamesPer50 35G vs 35.7Gは同一解析内の概要丸め差として定義分離し、重大CONFLICTにはしない。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。
- official setting6 payout: `UNVERIFIED / NOT_PUBLICLY_CONFIRMED`。
- 実機完全再現用の全モード移行・上乗せ抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL_FAMILY / ユニバ公式ブログ: https://ameblo.jp/aruzefreaks/entry-12257177708.html
- INDUSTRY / 娯楽産業 2017-01-25: https://www.goraku-sangyo.com/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%80%80%E7%A5%9E%E6%A9%9F%E7%A8%AE%E7%99%BA%E8%A1%A8%E4%BC%9A%E9%96%8B%E5%82%AC/
- OFFICIAL_NEWS / Gamer 2017-03-21: https://www.gamer.ne.jp/news/201703210015/
- ANALYSIS / 一撃 機種概要: https://1geki.jp/slot/s_god_poseidon/
- ANALYSIS / 一撃 天井・設定変更: https://1geki.jp/slot/s_god_poseidon/3/
- ANALYSIS / 一撃 据え置き判別: https://1geki.jp/slot/s_god_poseidon/49/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/universal-slot/32670/
- MACHINE_DB / P-WORLD: https://www.p-world.co.jp/machine/database/8297
- ANALYSIS / pachislo-data: https://pachislo-data.com/eleco/32423
- USED_MACHINE_DB / 中一商事: https://www.nakaiti.com/html/sEleco097.html
