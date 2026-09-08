machineName: パチスロ ロストプラネット2
manufacturer: オリンピア
releaseDate: 2016-09-05
recordNumber: 1006
generation: 5号機 / 5.5号機期
systemType: ART / CZ経由+直撃ART
formalModelName: パチスロロストプラネット2／E2
certificationNumber: 6S0394
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- オリンピア公式機種ページで製品を確認。
- 鹿児島県公安委員会告示で回胴式遊技機「パチスロロストプラネット2／E2」、製造者オリンピア、検定番号6S0394を確認。
- pachislo-data、複数解析資料でホール導入日2016-09-05を照合。
reliability: OFFICIAL_PUBLIC_NOTICE_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.7% |
| 2 | 98.1% |
| 3 | 100.1% |
| 4 | 103.5% |
| 5 | 105.0% |
| 6 | 110.0% |
- pachislo-data、ちょんぼりすた系整理、複数当時解析で同系列を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり | CZ「GET READY」初当たり |
|---:|---:|---:|
| 1 | 1/314.8 | 1/113.0 |
| 2 | 1/305.9 | 1/110.3 |
| 3 | 1/284.5 | 1/99.6 |
| 4 | 1/251.1 | 1/91.4 |
| 5 | 1/239.0 | 1/88.0 |
| 6 | 1/197.9 | 1/77.7 |
- ART初当たりはP-WORLD、pachislo-data等で一致。
- CZ初当たりは後続解析整理値。CZ成功率は設定1 36.0% → 設定6 44.3%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約47G/50枚。
- pachislo-data、当時解析整理で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「エイクリッドバトル」: 約2.0枚/G。
- 平和/オリンピア発表会を報じた2016-07-08グリーンべると記事、P-WORLD、複数解析で一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ARTは固定セットG数/固定枚数型ではなく、味方が全滅するまで継続する完全バトル型。規定ゲーム数なし・規定枚数なし。
- ART開始/継続時のプラネットチャンスでT-ENGを獲得し、敵殲滅で継続+報酬。
- CZ「GET READY」はART突入期待度約36%（設定差あり、設定1 36.0% → 設定6 44.3%）。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はCZ当選率を管理する惑星モードA〜Dと特殊モードを持ち、CZ当選まで基本的にモード転落しないタイプ。
- ART間740G+前兆でART当選となるゲーム数天井を搭載。
- キャリアポイントを搭載。通常時ハマリ、CZ連続失敗、ART準備中ハマリ、ART単発連続等の不利事象で蓄積し、一定値到達時に恩恵へつながる。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時はART間740G+前兆の天井ゲーム数をRESET。
- 惑星モードを再抽選。
- キャリアポイントは前日値を引き継がず、設定変更時専用の初期ポイント振り分けで再セット。
- 朝一液晶はジャングルステージ開始とする解析整理あり。

### carryOverBehavior
- 据え置きはART間天井ゲーム数をCARRYOVER。
- 惑星モードをCARRYOVER。
- キャリアポイントも設定変更時の初期再セット契約に該当しないため、据え置きでは蓄積価値を保持する扱いとする。
reliability: ANALYSIS_HIGH_MULTI_SOURCE / CARRYOVER_POINT_INFERRED_FROM_RESET_CONTRACT

### powerCycleBehavior
- 純電源OFF→ONではART間天井ゲーム数をCARRYOVER。
- 惑星モードをCARRYOVER。
- キャリアポイントは設定変更時のみ初期値セットとされるため、純電断のみではCARRYOVER扱い。ただし直接比較表でポイント項目単独の電断記述は確認できず、`SUPPORTED_BY_RESET_ONLY_INITIALIZATION_CONTRACT` とする。
- 液晶はジャングルステージ開始とする解析整理があり、ステージ単独では設定変更判別に使いにくい。

### gameCounterReset
- SETTING_CHANGE_RESET / CARRYOVER / POWER_CYCLE_CARRYOVER。
- 通常天井: ART間740G+前兆。

### ceilingAfterReset
- 設定変更で天井進捗は0相当から再計数。
- 設定変更専用の固定短縮天井は、表記揺れ・リセット/朝一/天井短縮等へ検索語を変えて再探索したが確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常の最深天井はART間740G+前兆のまま。

### modeAfterReset
- 惑星モード: SETTING_CHANGE_RESELECT / CARRYOVER / POWER_CYCLE_CARRYOVER。
- 設定変更時の公開振り分け:
| 設定 | A | B | C | D |
|---:|---:|---:|---:|---:|
| 1 | 66.4% | 18.8% | 14.5% | 0.4% |
| 2 | 62.5% | 20.7% | 16.4% | 0.4% |
| 3 | 58.6% | 22.7% | 18.4% | 0.4% |
| 4 | 54.7% | 24.6% | 20.3% | 0.4% |
| 5 | 50.8% | 26.6% | 22.3% | 0.4% |
| 6 | 46.9% | 28.5% | 24.2% | 0.4% |
- 表示上D列が省略された資料行はA+B+C=99.6%となるため、同表先頭行および同一テーブル定義に従いD=0.4%として保持。再利用時は原表確認を推奨。

### stateAfterReset
- 本機の朝一比較に必要な主要状態としては惑星モードとキャリアポイントを優先。
- 別建ての低確/高確等について、設定変更/据え置き/電断の直接契約を検索語・資料系統変更後も固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 惑星モードを再抽選し、高設定ほどモードA比率が下がりB/C比率が上がる。
- キャリアポイントは最低40pt以上から開始し、40/60/80ptが中心。設定変更直後から蓄積ゼロ固定ではない点が朝一価値。
- 設定変更専用の短縮天井は確認されない。

### resetPenalties
- 前日据え置きなら残る天井ハマリ進捗、上位惑星モード、蓄積キャリアポイントを設定変更で消去/再抽選するため、宵越し価値を失う可能性がある。
- 公開された固定の設定変更不利率は確認されない。

### resetDetection
- 解析整理では設定変更/電断とも朝一ジャングルステージとなるため、液晶ステージ単独判別は困難。
- MB出目を前日に仕込めるホールでは出目変化を実用判別へ使えるという当時攻略記述があるが、ホール運用依存でメーカー保証の設定変更フラグではないため `PRACTICAL_PRESET_REEL_PATTERN_INDICATOR_ONLY`。
- 本機固有のメーカー保証されたガックン・ランプ等の確定判別は、検索語を変えて再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
設定変更時・惑星モード振り分け:
| 設定 | A | B | C | D |
|---:|---:|---:|---:|---:|
| 1 | 66.4% | 18.8% | 14.5% | 0.4% |
| 2 | 62.5% | 20.7% | 16.4% | 0.4% |
| 3 | 58.6% | 22.7% | 18.4% | 0.4% |
| 4 | 54.7% | 24.6% | 20.3% | 0.4% |
| 5 | 50.8% | 26.6% | 22.3% | 0.4% |
| 6 | 46.9% | 28.5% | 24.2% | 0.4% |

設定変更時・キャリアポイント初期振り分け:
| 初期pt | 振り分け |
|---:|---:|
| 40pt | 28.1% |
| 60pt | 32.8% |
| 80pt | 32.8% |
| 100pt | 5.9% |
| 200pt | 0.4% |
- 40〜80pt開始が93.7%、100pt以上開始が6.3%。
- 設定変更専用短縮天井/一定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 正式型式/検定番号は鹿児島県公安委員会告示で確認し、性能コアは業界記事・P-WORLD・複数解析で照合。
- リセット契約はちょんぼりすたの設定変更/電源ON-OFF比較表とpachislo-dataの朝一解析を主軸に照合。
- キャリアポイントの設定変更時初期振り分けは複数解析で一致。
- 惑星モード設定変更振り分けはpachislo-data掲載表を採用。検索表示では設定2〜6のD列が省略されるが各行A+B+C=99.6%で、設定1のD=0.4%および同一表構造から0.4%として保持。ここは資料表示上の注意点を残す。
- 純電断時キャリアポイントについては「設定変更時に初期値セット」という契約からCARRYOVERを支持するが、電断単独のポイント比較表を直接固定できなかったため、信頼度を一段下げて注記。

## conflicts
- 導入日は主要解析で2016-09-05。一部中古実機価格DBに2016-09-04表記があるため `CONFLICT_RELEASE_DATE_2016_09_05_VS_2016_09_04_SINGLE_LATE_DB` として保持し、当時解析の2016-09-05をcanonical。

## sources
取得日: 2026-09-08

1. オリンピア公式 — パチスロ ロスト プラネット2
   - https://www.olympia.co.jp/newmachine/ps_lostplanet2/
   - 公式製品存在、2016-07-05サイト公開、2016-09-02更新。
2. 鹿児島県公報 平成28年6月7日 第3218号 / 公安委員会告示第60号
   - https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1606/documents/52290_20160606115316-1.pdf
   - 型式「パチスロロストプラネット2／E2」、オリンピア、検定6S0394。
3. グリーンべると — 毎ゲームの攻防が熱い！完全バトルART登場（2016-07-08）
   - https://web-greenbelt.jp/00008788/
   - 発表会、純増2.0枚/G、ART概要。
4. P-WORLD — パチスロ ロスト プラネット2
   - https://www.p-world.co.jp/machine/database/8105
   - 5号機ART、純増2.0枚/G、ART初当たり、CZ/ART基本仕様。
5. pachislo-data — ロストプラネット2スロット新台解析
   - https://pachislo-data.com/olympia/26459
   - 2016-09-05、約47G/50枚、機械割、ART初当たり、740G天井、設定変更時惑星モード振り分け。
6. ちょんぼりすた — ロストプラネット2
   - https://chonborista.com/slot/orinpia-slot/22503/
   - 天井740G+α、設定変更天井RESET/電断CARRYOVER、モード再抽選/電断引継ぎ、キャリアポイント初期振り分け、朝一ジャングル。
7. 期待値見える化 — ロストプラネット2 天井・朝一リセット
   - https://slotjin.com/zone/lostplanet2/
   - モード性質、天井、朝一/リセット補助照合。
8. すろぱちくえすと — ロストプラネット2解析まとめ / リール
   - https://www.slopachi-quest.com/kisyubetsu/lost-planet2/
   - https://www.slopachi-quest.com/article/lost-planet2-reel/
   - 解析索引、MB出目とホール運用依存の変更判別補助。
9. スロ安サーチ — 中古実機DB
   - https://slot-price.com/slot_price_details/id/924
   - 店導入日2016-09-04表記。主要当時資料との日付CONFLICT原値としてのみ保持。

## missingFields
- 低確/高確等の別建て内部状態について、設定変更/据え置き/純電断の直接契約: UNVERIFIED_AFTER_RESEARCH。
- 純電源OFF→ON時キャリアポイントを明記した独立比較表: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH（設定変更時のみ初期値セット契約からCARRYOVER支持）。
- メーカー保証された設定変更確定判別: NONE_CONFIRMED_AFTER_RESEARCH。
