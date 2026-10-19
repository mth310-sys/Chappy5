# パチスロ コードギアス 反逆のルルーシュ R2

machineName: パチスロ コードギアス 反逆のルルーシュ R2
manufacturer: サミー
releaseDate: 2016-05-30
recordNumber: 978
generation: 5号機
systemType: A+ART / セット数・自力継続型ART
formalModelName: コードギアス反逆のルルーシュR2／ZX
certificationNumber: 5S1380
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- サミー公式マイスロ告知が2016-05-30を「本日…ホール導入日」と明記。地域差注記あり。
- P-WORLDで型式 `コードギアス反逆のルルーシュR2／ZX`、検定番号 `5S1380`、メーカーSammyを確認。
- 一部当時解析は2016-06-06を導入日、または「6/6（最速5/30）」と記載するため、全国/地域導入差・予定差としてCONFLICTを保持し、メーカー公式の実導入日2016-05-30をchronological canonicalとする。

## payoutRateBySetting
### 通常掲載値
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.5% |
| 3 | 100.8% |
| 4 | 103.9% |
| 5 | 108.5% |
| 6 | 112.3% |

### 完全攻略時
| 設定 | 完全攻略時機械割 |
|---:|---:|
| 1 | 98.5% |
| 2 | 99.5% |
| 3 | 101.8% |
| 4 | 104.9% |
| 5 | 109.5% |
| 6 | 113.3% |

- P-WORLDの98.53〜113.3%は完全攻略側の値と整合するため、通常掲載値とのCONFLICTではなく定義差として分離。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_SPLIT

## initialHitBySetting
| 設定 | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/239.2 | 1/624.2 | 1/172.9 |
| 2 | 1/237.4 | 1/589.6 | 1/169.3 |
| 3 | 1/236.6 | 1/507.0 | 1/161.3 |
| 4 | 1/234.1 | 1/450.5 | 1/154.0 |
| 5 | 1/232.4 | 1/376.7 | 1/143.7 |
| 6 | 1/229.1 | 1/339.2 | 1/136.8 |

- 複数当時解析で同系列を確認。丸め値1/239〜1/229、ART1/624〜1/339も同定義。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約32G/50枚**。
- 当時解析・後年ホール機種紹介で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART単体: **約1.4枚/G**。
- ボーナス込みART性能表記: **約2.0枚/G** とする解析あり。定義を混ぜず別保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- HYPER BIG BONUS: **約250枚**。
- BIG BONUS: **約180枚**。
- REGULAR BONUS: **約54枚**。
- ART「BLACK REBELLION R2」: **1セット40G**。
- CZ「REBELLION ATTACK」: 約20G、ART期待度約30%超（初当たり構造把握用の補助値）。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナス+ART機。ART「BLACK REBELLION R2」は1セット40G、純増約1.4枚/G。
- 通常時はギアスポイントを蓄積し、10pt到達でCZ抽選に関わる。
- 天井: **ボーナス終了またはART開始後1000G+αでART当選濃厚**。ART終了時ではなくART開始時基準で、ART継続時は各セット開始時に天井カウンタをリセットする解析。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井ゲーム数RESET**。
- ギアスポイントは前日の保有値を引き継がず再初期化。
- 内部状態は再抽選され、設定1〜3は通常62.5% / 高確37.5%、設定4〜6は通常50.0% / 高確50.0%。
- RT状態は設定変更/電源OFF→ONで変化なしとする解析あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時は **天井ゲーム数CARRYOVER**。
- ギアスポイントは **CARRYOVER**。
- 内部状態は **CARRYOVER_SUPPORTED**。朝一リセット比較表と電源OFF→ON比較資料を合わせて保存。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON: **天井ゲーム数CARRYOVER**。
- 内部状態: **CARRYOVER** とするパチ7朝一解析を確認。
- RT状態: **変化なし**。
- ギアスポイントは設定変更でのみ初期化される比較表から据え置き/非設定変更側CARRYOVERを支持するが、純電断だけを独立表記した一次資料は未確認。
reliability: ANALYSIS_HIGH_FOR_CEILING_STATE_RT / ANALYSIS_SUPPORTED_FOR_POINT

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。
- 通常天井: ボーナス終了またはART開始後1000G+α。

### ceilingAfterReset
- 設定変更後も天井上限は **1000G+α**。
- リセット専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更は前日天井進捗を消去するため、前日深ハマり台では客側に不利。

### modeAfterReset
- 朝一専用のゲーム数モード/専用天井モード: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機で朝一に重要なのはギアスポイント初期化と通常/高確の状態再抽選。

### stateAfterReset
- 設定1〜3: **通常62.5% / 高確37.5%**。
- 設定4〜6: **通常50.0% / 高確50.0%**。
- 純電源OFF→ON: **内部状態CARRYOVER**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 全設定共通で **50%がギアスポイント5ptスタート、50%が0ptスタート**。
- 設定変更時は高確スタート抽選があり、設定1〜3で37.5%、設定4〜6で50.0%。
- 5ptスタートはCZ「リベリオンアタック」到達までの必要ポイントを半分進めた状態になるため、朝一の実用的なリセット恩恵。

### resetPenalties
- 前日天井ゲーム数進捗を失う。
- 前日の蓄積ギアスポイントを失うため、高pt据え置き期待がある状況では設定変更が不利になり得る。
- 固定短縮天井は確認できない。

### resetDetection
- 天井ゲーム数: 前日+当日が1000G付近でART発動なら据え置き濃厚、1000Gを超えても発動しない場合は設定変更を強く支持する解析。
- リールガックン: 当時解析で設定変更時「あり」、据え置き「なし」とされ、実演動画も存在。対策（店側の1G回し等）で無効化可能なため確定契約ではなく **PRACTICAL_GAKKUN_INDICATOR**。
- 液晶初期ステージは学園廊下で共通のため単独判別不可。
- 朝一に高確示唆ステージへ移れば設定変更期待を上げる材料にはなるが、確定判別ではない。

### numericResetData
- ギアスポイント初期値: **0pt 50% / 5pt 50%（全設定共通）**。
- 内部状態再抽選:
  - 設定1〜3: 通常62.5% / 高確37.5%
  - 設定4〜6: 通常50.0% / 高確50.0%
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-08

1. Sammy公式 マイスロニュース — 2016-05-30ホール導入告知
   - https://www.sammy.co.jp/japanese/myslot/news/index_11.html
   - 2016-05-30を「本日…ホール導入日」と明記。一部地域差注記。
   - reliability: OFFICIAL
2. Sammy公式 ニュースリリース — 新機種発売
   - https://www.sammy.co.jp/japanese/news/2016/502.html
   - 2016-03-30、新型回胴式遊技機として発売発表、A+ARTゲーム性。
   - reliability: OFFICIAL
3. P-WORLD — パチスロコードギアス 反逆のルルーシュR2
   - https://www.p-world.co.jp/machine/database/8022
   - 型式ZX、検定5S1380、ボーナス詳細、完全攻略側機械割98.53〜113.3%、基本獲得枚数、ART純増/40G。
   - reliability: INDUSTRY_DATABASE
4. すろぱちくえすと — 機種解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/code-geass-r2/
   - 通常機械割97.5〜112.3%、完全攻略98.5〜113.3%、ART/ボーナス、32G、純増、天井、朝一比較、状態振り分け、ガックン。
   - reliability: ANALYSIS_HIGH
5. すろぱちくえすと — 設定変更時の恩恵・挙動
   - https://www.slopachi-quest.com/article/code-geass-r2-reset/
   - 天井RESET、ポイント0/5pt、ガックン、リセット状態。
   - reliability: ANALYSIS_HIGH
6. パチ7 — コードギアスR2 天井・朝一
   - https://pachiseven.jp/lp/codegeassr2_tenjo
   - リセット時天井クリア、電源OFF→ON引継ぎ、ギアスポイント50%で5pt、RT状態変化なし、内部状態再抽選と電源OFF→ON状態引継ぎ。
   - reliability: ANALYSIS_HIGH
7. pachislo-data — コードギアスR2
   - https://pachislo-data.com/sammy/24225
   - 2016年6月6日（最速5/30）、A+ART、約32G、純増1.4枚/G、リセット時5pt50%・状態振り分け。
   - reliability: PERIOD_ANALYSIS
8. ちょんぼりすた — コードギアスR2
   - https://chonborista.com/slot/sammy-slot/18862/
   - 6/6、一部5/30〜、性能コアを照合。
   - reliability: ANALYSIS_HIGH
9. グリーンべると — サミット時全国一斉入替自粛
   - https://web-greenbelt.jp/00008425/
   - 2016-05-02〜05-27を全国一斉の遊技機入替自粛期間とした業界一次記事。
   - reliability: INDUSTRY
10. HAZUSE 新台カレンダー
   - https://hazuse.com/new-machine-calendar/newmachine-calendar/
   - 2016年5月の新台群は05-30のみ、4月は04-18が最終群。
   - reliability: ANALYSIS_HIGH_DATABASE

## missingFields
- 設定変更/電源OFF→ONの内部挙動についてメーカー一次資料の明示表: UNVERIFIED_AFTER_RESEARCH。
- 純電源OFF→ON時のギアスポイントを独立して明記した一次/高信頼直接比較: UNVERIFIED_AFTER_RESEARCH。ただし据え置きCARRYOVER表と設定変更時のみ初期化の解析でCARRYOVERを支持。
- リセット専用固定短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts
- `RELEASE_DATE_REGION_OR_SCHEDULE_2016_05_30_VS_2016_06_06`: Sammy公式は5/30を実ホール導入日と明記。一部解析は6/6、または6/6（最速5/30）。canonicalは公式5/30、6/6は地域差/全国展開差として保持。
- `PAYOUT_RATE_DEFINITION_97_5_TO_112_3_VS_98_5_TO_113_3`: 通常掲載値と完全攻略値の定義差。平均化せず両系列を保存。

## notesForYardstick
- 2016年新基準A+ARTの代表的な低純増セット継続型。
- 通常機械割97.5〜112.3%、ART初当たり1/624.2〜1/339.2、約32G/50枚、ART約1.4枚/G、1セット40G。
- リセット時は短縮天井ではなく、ギアスポイント5pt初期化50%と高確スタート37.5〜50%が朝一価値を作るタイプ。
